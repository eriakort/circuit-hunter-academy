import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...corsHeaders, "Content-Type": "application/json" } });
const fail = (message: string, status = 400) => json({ error: message }, status);
const MAX_PLAYERS = 8;
const QUESTION_TIME_MS = 20_000;
const QUESTION_COUNT = 10;
const GRADE_SUBJECTS: Record<string, string[]> = {
  grade5: ["science", "math5", "italian", "hist5", "geo5"],
  grade9: ["cs", "phys", "math", "italian", "chem", "hist9", "geo9"],
  grade10: ["chem10", "italian", "hist10", "geo10"],
  grade11: ["chem11", "italian", "hist11", "geo11"],
};
const CODE_CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return fail("Method not allowed", 405);

  const url = Deno.env.get("SUPABASE_URL");
  const anonKey = Deno.env.get("SUPABASE_ANON_KEY");
  const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  const authHeader = req.headers.get("Authorization");
  if (!url || !anonKey || !serviceKey || !authHeader?.startsWith("Bearer ")) {
    return fail("Authentication is required", 401);
  }

  const authClient = createClient(url, anonKey, { global: { headers: { Authorization: authHeader } }, auth: { persistSession: false } });
  const { data: { user }, error: authError } = await authClient.auth.getUser();
  if (authError || !user) return fail("Invalid or expired session", 401);

  const admin = createClient(url, serviceKey, { auth: { persistSession: false, autoRefreshToken: false } });
  let body: Record<string, unknown>;
  try {
    const parsed = await req.json();
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return fail("Invalid request body");
    body = parsed;
  } catch { return fail("Invalid JSON body"); }

  const action = body.action;
  const displayName = typeof body.displayName === "string" ? body.displayName.trim().slice(0, 20) : "";
  if (["create", "join"].includes(String(action)) && !displayName) return fail("A display name is required");

  if (action === "create") {
    const grade = typeof body.grade === "string" ? body.grade : "";
    const subject = typeof body.subject === "string" ? body.subject : "";
    const missionId = typeof body.missionId === "string" ? body.missionId : "";
    if (!GRADE_SUBJECTS[grade]?.includes(subject) || !/^[a-z0-9_-]{1,80}$/.test(missionId)) return fail("Invalid grade, subject, or mission configuration");
    let code = "";
    for (let attempt = 0; attempt < 8; attempt++) {
      const bytes = crypto.getRandomValues(new Uint8Array(4));
      code = Array.from(bytes, b => CODE_CHARS[b % CODE_CHARS.length]).join("");
      const { data: existing } = await admin.from("race_rooms").select("id").eq("code", code).maybeSingle();
      if (!existing) break;
      code = "";
    }
    if (!code) return fail("Could not allocate a room code", 503);
    const { data: room, error: roomError } = await admin.from("race_rooms")
      .insert({ code, created_by: user.id, grade, subject, mission_id: missionId }).select().single();
    if (roomError || !room) return fail("Could not create room", 500);
    const { error: memberError } = await admin.from("race_room_members").insert({ room_id: room.id, user_id: user.id, display_name: displayName });
    if (memberError) {
      await admin.from("race_rooms").delete().eq("id", room.id);
      return fail("Could not join the new room", 500);
    }
    return json({ roomId: room.id, code: room.code, status: room.status });
  }

  if (action === "join") {
    const code = typeof body.code === "string" ? body.code.toUpperCase().replace(/[^A-Z0-9]/g, "") : "";
    if (!/^[A-Z0-9]{4}$/.test(code)) return fail("Invalid room code");
    const { data: room } = await admin.from("race_rooms").select("id,grade,subject,mission_id,status").eq("code", code).maybeSingle();
    if (!room || room.status !== "lobby") return fail("Room not found or no longer accepting players", 404);
    const { error: joinError } = await admin.rpc("race_join_atomic", {
      p_room_id: room.id,
      p_user_id: user.id,
      p_display_name: displayName,
      p_max_players: MAX_PLAYERS,
    });
    if (joinError) {
      const status = joinError.code === "P0002" ? 404
        : joinError.code === "40001" || joinError.code === "23514" ? 409 : 500;
      return fail(joinError.message || "Could not join room", status);
    }
    return json({ roomId: room.id, grade: room.grade, subject: room.subject, missionId: room.mission_id, status: room.status });
  }

  const roomId = typeof body.roomId === "string" ? body.roomId : "";
  if (!/^[0-9a-f-]{36}$/i.test(roomId)) return fail("Invalid room");
  const { data: membership } = await admin.from("race_room_members").select("id,score,correct_count,next_question_index,question_started_at,finished_at")
    .eq("room_id", roomId).eq("user_id", user.id).maybeSingle();
  if (!membership) return fail("You are not a member of this room", 403);
  const { data: room } = await admin.from("race_rooms").select("*").eq("id", roomId).maybeSingle();
  if (!room) return fail("Room not found", 404);

  if (action === "leave") {
    if (room.status === "lobby") {
      if (room.created_by === user.id) {
        await admin.from("race_rooms").update({ status: "cancelled" }).eq("id", roomId).eq("status", "lobby");
      } else {
        await admin.from("race_room_members").delete().eq("room_id", roomId).eq("user_id", user.id);
      }
      return json({ status: room.created_by === user.id ? "cancelled" : "lobby" });
    }
    if (room.status === "running" && !membership.finished_at) {
      await admin.from("race_room_members").update({ finished_at: new Date().toISOString(), question_started_at: null })
        .eq("room_id", roomId).eq("user_id", user.id).is("finished_at", null);
      const { count: unfinishedCount } = await admin.from("race_room_members")
        .select("id", { count: "exact", head: true }).eq("room_id", roomId).is("finished_at", null);
      if ((unfinishedCount ?? 0) === 0) {
        await admin.from("race_rooms").update({ status: "finished", finished_at: new Date().toISOString() })
          .eq("id", roomId).eq("status", "running");
      }
    }
    return json({ status: room.status });
  }

  if (action === "configure") {
    if (room.created_by !== user.id) return fail("Only the room host can configure the race", 403);
    if (room.status !== "lobby") return fail("Race configuration is locked after start", 409);
    const missionId = typeof body.missionId === "string" ? body.missionId : "";
    if (!/^[a-z0-9_-]{1,80}$/.test(missionId)) return fail("Invalid race topic");
    const { count, error } = await admin.from("race_question_bank")
      .select("id", { count: "exact", head: true })
      .eq("grade", room.grade).eq("subject", room.subject).eq("mission_id", missionId).eq("active", true);
    if (error) return fail("Could not verify the question pool", 500);
    if (!count) return fail("No approved questions are available for this topic", 409);
    const { error: updateError } = await admin.from("race_rooms").update({ mission_id: missionId })
      .eq("id", roomId).eq("status", "lobby");
    if (updateError) return fail("Could not update race topic", 500);
    return json({ status: "lobby", missionId });
  }

  if (action === "state") {
    const { data: questionRows, error: questionError } = await admin.from("race_room_questions")
      .select("position,question_id").eq("room_id", roomId).order("position", { ascending: true });
    if (questionError) return fail("Could not load race questions", 500);
    const questionIds = (questionRows ?? []).map((row: { question_id: string }) => row.question_id);
    let questions: Array<{ id: string; prompt: unknown; choices: unknown }> = [];
    if (questionIds.length) {
      const { data: bankRows, error: bankError } = await admin.from("race_question_bank")
        .select("id,prompt,choices").in("id", questionIds);
      if (bankError) return fail("Could not load race questions", 500);
      const byId = new Map((bankRows ?? []).map((row: any) => [row.id, row]));
      questions = (questionRows ?? []).flatMap((row: any) => {
        const q = byId.get(row.question_id);
        return q ? [{ id: q.id, prompt: q.prompt, choices: q.choices }] : [];
      });
    }
    const { data: members, error: membersError } = await admin.from("race_room_members")
      .select("user_id,display_name,score,correct_count,next_question_index,question_started_at,finished_at,joined_at")
      .eq("room_id", roomId).order("joined_at", { ascending: true });
    if (membersError) return fail("Could not load room members", 500);
    return json({
      status: room.status, grade: room.grade, subject: room.subject, missionId: room.mission_id,
      isHost: room.created_by === user.id, questions,
      member: members?.find((m: any) => m.user_id === user.id) ?? null,
      members: members ?? []
    });
  }

  if (action === "start") {
    if (room.created_by !== user.id) return fail("Only the room host can start the race", 403);
    const { count: availableCount, error: countError } = await admin
      .from("race_question_bank")
      .select("id", { count: "exact", head: true })
      .eq("grade", room.grade)
      .eq("subject", room.subject)
      .eq("mission_id", room.mission_id)
      .eq("active", true);
    if (countError) return fail("Could not verify the question pool", 500);
    const questionCount = Math.min(QUESTION_COUNT, availableCount ?? 0);
    if (questionCount < 1) return fail("No approved questions are available for this topic", 409);
    const { data, error } = await admin.rpc("race_start_atomic", {
      p_room_id: roomId,
      p_user_id: user.id,
      p_question_count: questionCount,
    });
    if (error) {
      const status = error.code === "42501" ? 403 : error.code === "40001" ? 409 : 500;
      return fail(error.message || "Could not start race", status);
    }
    return json(data);
  }

  if (action === "answer") {
    if (typeof body.selectedIndex !== "number" || !Number.isSafeInteger(body.selectedIndex) || body.selectedIndex < -1) {
      return fail("Invalid answer");
    }
    const { count: roomQuestionCount, error: roomQuestionError } = await admin
      .from("race_room_questions")
      .select("position", { count: "exact", head: true })
      .eq("room_id", roomId);
    if (roomQuestionError || !roomQuestionCount) return fail("Race question set is unavailable", 409);
    const { data, error } = await admin.rpc("race_submit_answer_atomic", {
      p_room_id: roomId,
      p_user_id: user.id,
      p_selected_index: body.selectedIndex,
      p_question_count: roomQuestionCount,
    });
    if (error) {
      const status = error.code === "42501" ? 403 : error.code === "P0002" ? 404 : error.code === "40001" ? 409 : 400;
      return fail(error.message || "Answer could not be recorded", status);
    }
    return json(data);
  }

  if (action === "leaderboard") {
    const { data: members } = await admin.from("race_room_members").select("user_id,display_name,score,correct_count,next_question_index,question_started_at,finished_at,joined_at")
      .eq("room_id", roomId).order("score", { ascending: false }).order("joined_at", { ascending: true });
    return json({ status: room.status, members: members ?? [] });
  }
  return fail("Unknown action");
});

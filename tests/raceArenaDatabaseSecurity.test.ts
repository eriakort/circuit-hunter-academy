import { describe, expect, test } from "bun:test";
import { readFileSync } from "node:fs";

const schema = readFileSync(
  new URL("../supabase/migrations/20261115000000_race_arena_server_authority.sql", import.meta.url),
  "utf8"
);
const atomic = readFileSync(
  new URL("../supabase/migrations/20261115010000_race_arena_atomic_operations.sql", import.meta.url),
  "utf8"
);

describe("Race Arena database security", () => {
  test("all server-owned race tables enable RLS and revoke direct client/public grants", () => {
    for (const table of [
      "race_rooms",
      "race_room_members",
      "race_question_bank",
      "race_room_questions",
      "race_answer_events",
    ]) {
      expect(schema).toContain(`alter table public.${table} enable row level security`);
    }
    expect(schema).toMatch(/from public, anon, authenticated/i);
  });

  test("atomic RPCs execute as invoker, not SECURITY DEFINER", () => {
    expect(atomic.match(/security invoker/gi)?.length).toBe(2);
    expect(atomic).not.toMatch(/security definer/i);
  });

  test("atomic RPC execution is restricted to service_role", () => {
    expect(atomic).toMatch(/revoke all on function public\.race_start_atomic\([^;]+from public, anon, authenticated/i);
    expect(atomic).toMatch(/revoke all on function public\.race_submit_answer_atomic\([^;]+from public, anon, authenticated/i);
    expect(atomic).toMatch(/grant execute on function public\.race_start_atomic\([^;]+to service_role/i);
    expect(atomic).toMatch(/grant execute on function public\.race_submit_answer_atomic\([^;]+to service_role/i);
  });
});

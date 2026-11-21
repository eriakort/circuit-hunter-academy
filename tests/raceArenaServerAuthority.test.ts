import { describe, expect, test } from "bun:test";
import { readFileSync } from "node:fs";

const screen = readFileSync(new URL("../src/components/RaceScreen.tsx", import.meta.url), "utf8");
const api = readFileSync(new URL("../supabase/functions/race-api/index.ts", import.meta.url), "utf8");
const timeoutMigration = readFileSync(
  new URL("../supabase/migrations/20261115093605_race_arena_timeout_and_state.sql", import.meta.url),
  "utf8"
);
const atomicJoinMigration = readFileSync(
  new URL("../supabase/migrations/20261115093606_race_arena_atomic_join.sql", import.meta.url),
  "utf8"
);

describe("Race Arena server-authoritative client", () => {
  test("RaceScreen uses authenticated API calls and no longer trusts Realtime broadcasts or presence", () => {
    expect(screen).toContain("ensureRaceSession(client)");
    expect(screen).toContain("action: 'state'");
    expect(screen).toContain("action: 'answer'");
    expect(screen).not.toMatch(/\.channel\(|\.broadcast|presenceState|\.track\(/i);
    expect(screen).not.toContain("correct_index");
  });

  test("server exposes membership-checked room state and host-only topic configuration", () => {
    expect(api).toContain('if (action === "state")');
    expect(api).toContain('if (action === "configure")');
    expect(api).toContain("room.created_by !== user.id");
    expect(api).toContain("authClient.auth.getUser()");
    expect(api).toContain("question_started_at");
  });

  test("mission ID validation accepts existing curriculum IDs with underscores", () => {
    expect(api).toContain("/^[a-z0-9_-]{1,80}$/");
  });

  test("room joins lock the room row and enforce capacity inside one transaction", () => {
    expect(api).toContain('admin.rpc("race_join_atomic"');
    expect(api).not.toContain('select("id", { count: "exact", head: true }).eq("room_id", room.id)');
    expect(atomicJoinMigration).toContain("for update");
    expect(atomicJoinMigration).toContain("v_member_count >= p_max_players");
    expect(atomicJoinMigration).toContain("grant execute on function public.race_join_atomic");
    expect(atomicJoinMigration).toContain("security invoker");
  });

  test("timeouts are submitted as a server-validated sentinel and recorded distinctly", () => {
    expect(api).toContain("body.selectedIndex < -1");
    expect(timeoutMigration).toContain("add column if not exists timed_out boolean");
    expect(timeoutMigration).toContain("p_selected_index = -1");
    expect(timeoutMigration).toContain("timed_out)");
  });
});

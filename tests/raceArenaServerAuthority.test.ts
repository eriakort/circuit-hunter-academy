import { describe, expect, test } from "bun:test";
import { readFileSync } from "node:fs";

const screen = readFileSync(new URL("../src/components/RaceScreen.tsx", import.meta.url), "utf8");
const api = readFileSync(new URL("../supabase/functions/race-api/index.ts", import.meta.url), "utf8");
const timeoutMigration = readFileSync(
  new URL("../supabase/migrations/20261115030000_race_arena_timeout_and_state.sql", import.meta.url),
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

  test("timeouts are submitted as a server-validated sentinel and recorded distinctly", () => {
    expect(api).toContain("body.selectedIndex < -1");
    expect(timeoutMigration).toContain("add column if not exists timed_out boolean");
    expect(timeoutMigration).toContain("p_selected_index = -1");
    expect(timeoutMigration).toContain("timed_out)");
  });
});

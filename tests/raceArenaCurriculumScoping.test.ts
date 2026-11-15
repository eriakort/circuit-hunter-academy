import { describe, expect, test } from "bun:test";
import { readFileSync } from "node:fs";

const migration = readFileSync(
  new URL("../supabase/migrations/20261115020000_race_arena_curriculum_scoping.sql", import.meta.url),
  "utf8"
);

const histGeoMigration = readFileSync(
  new URL("../supabase/migrations/20261115060000_race_arena_hist_geo_subjects.sql", import.meta.url),
  "utf8"
);
const raceApiSource = readFileSync(
  new URL("../supabase/functions/race-api/index.ts", import.meta.url),
  "utf8"
);

import { GRADE_SUBJECT_IDS } from "../src/data/gradeData";

describe("Race Arena curriculum scoping", () => {
  test("room and question-bank records enforce supported grade/subject combinations", () => {
    expect(migration).toMatch(/race_rooms_grade_subject_check[\s\S]*grade5[\s\S]*science[\s\S]*math5[\s\S]*grade9[\s\S]*grade10[\s\S]*chem10[\s\S]*grade11[\s\S]*chem11/i);
    expect(migration).toMatch(/race_question_bank_grade_subject_check[\s\S]*grade5[\s\S]*science[\s\S]*math5[\s\S]*grade9[\s\S]*grade10[\s\S]*chem10[\s\S]*grade11[\s\S]*chem11/i);
  });

  test("latest migration and edge function allow every grade and subject in GRADE_SUBJECT_IDS", () => {
    for (const [grade, subjects] of Object.entries(GRADE_SUBJECT_IDS)) {
      for (const subject of subjects) {
        expect(histGeoMigration).toMatch(new RegExp(`grade = '${grade}'[\\s\\S]*'${subject}'`));
        expect(raceApiSource).toMatch(new RegExp(`${grade}:[\\s\\S]*"${subject}"`));
      }
    }
  });

  test("mixed review selects questions across missions but stays within the room grade and subject", () => {
    expect(migration).toMatch(/grade = v_room\.grade[\s\S]*subject = v_room\.subject[\s\S]*v_room\.mission_id = 'mix' or mission_id = v_room\.mission_id/i);
    expect(migration).toContain("order by random()");
  });

  test("start response never exposes the answer key and RPC remains service-role only", () => {
    expect(migration).toMatch(/jsonb_build_object\([\s\S]*'prompt', q\.prompt, 'choices', q\.choices/i);
    expect(migration).not.toMatch(/'correct_index'\s*,\s*q\.correct_index/i);
    expect(migration).toMatch(/security invoker/i);
    expect(migration).toMatch(/revoke all on function public\.race_start_atomic\([^;]+from public, anon, authenticated/i);
    expect(migration).toMatch(/grant execute on function public\.race_start_atomic\([^;]+to service_role/i);
  });
});

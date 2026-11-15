import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const edgeFunction = readFileSync(
  new URL('../supabase/functions/race-api/index.ts', import.meta.url),
  'utf8'
);

for (const [grade, subjects] of Object.entries({
  grade5: ['science', 'math5', 'italian'],
  grade9: ['cs', 'phys', 'math', 'italian', 'chem'],
  grade10: ['chem10', 'italian'],
  grade11: ['chem11', 'italian']
})) {
  assert.ok(edgeFunction.includes(`${grade}: [`), `Edge Function must recognize ${grade}`);
  for (const subject of subjects) {
    assert.ok(edgeFunction.includes(`"${subject}"`), `Edge Function must recognize ${grade}/${subject}`);
  }
}

assert.ok(edgeFunction.includes('.from("race_question_bank")'));
assert.ok(edgeFunction.includes('.eq("mission_id", room.mission_id)'));
assert.ok(edgeFunction.includes('Math.min(QUESTION_COUNT, availableCount ?? 0)'));
assert.ok(edgeFunction.includes('.from("race_room_questions")'));
assert.ok(edgeFunction.includes('p_question_count: roomQuestionCount'));
assert.ok(!edgeFunction.includes('p_question_count: QUESTION_COUNT'));

console.log('raceArenaQuestionApi.test.ts ok');

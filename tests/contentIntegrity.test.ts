import assert from 'node:assert/strict';
import { ARCS, MISSIONS, SUBJECTS, UNITS } from '../src/data/gameData';
import { getCompleteQuestionBank } from '../src/data/questionBank';

const isCompleteBilingualPair = (value: unknown): value is [string, string] =>
  Array.isArray(value) &&
  value.length === 2 &&
  value.every(part => typeof part === 'string' && part.trim().length > 0);

const missionIdCounts = new Map<string, number>();
MISSIONS.forEach(mission => {
  missionIdCounts.set(mission.id, (missionIdCounts.get(mission.id) ?? 0) + 1);
});
for (const [id, count] of missionIdCounts) {
  assert.equal(count, 1, `Mission ID must be globally unique: ${id}`);
}

const subjectIds = new Set(SUBJECTS.map(subject => subject.id));
const bank = getCompleteQuestionBank();
assert.ok(bank.length > 300, `Expected a substantial question bank, got ${bank.length}`);

const questionIds = new Set<string>();
for (const question of bank) {
  assert.ok(question.id.trim(), 'Every question must have a non-empty ID');
  assert.ok(!questionIds.has(question.id), `Duplicate question ID: ${question.id}`);
  questionIds.add(question.id);

  assert.ok(isCompleteBilingualPair(question.q), `Question prompt must be complete in English and Italian: ${question.id}`);
  assert.ok(isCompleteBilingualPair(question.why), `Question explanation must be complete in English and Italian: ${question.id}`);
  assert.ok(Array.isArray(question.a) && question.a.length >= 2, `Question needs at least two answer options: ${question.id}`);
  question.a.forEach((answer, index) => {
    assert.ok(isCompleteBilingualPair(answer), `Answer ${index + 1} must be complete in English and Italian: ${question.id}`);
  });

  assert.ok(subjectIds.has(question.subject), `Unknown question subject: ${question.subject} (${question.id})`);
  const arc = ARCS[question.arcIndex];
  assert.ok(arc, `Question references a missing chapter: ${question.id} (arc ${question.arcIndex})`);
  assert.equal(arc.subject || 'cs', question.subject, `Question subject does not match its chapter: ${question.id}`);
  assert.ok(UNITS[question.unitIndex], `Question references a missing unit: ${question.id} (unit ${question.unitIndex})`);
  assert.equal(arc.unit ?? 0, question.unitIndex, `Question unit does not match its chapter: ${question.id}`);
}

console.log('contentIntegrity.test.ts ok! Validated', bank.length, 'bilingual questions.');

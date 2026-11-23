import assert from 'node:assert/strict';
import { ARCS, MISSIONS, SUBJECTS, UNITS } from '../src/data/gameData';
import { getCompleteQuestionBank } from '../src/data/questionBank';

// Accepts either a legacy [en, it] tuple or a localized record. Both must
// carry non-empty English and Italian, which is the bilingual guarantee the
// content policy depends on; extra support languages (pt/es/fr/de) are optional.
const isCompleteBilingualPair = (value: unknown): boolean => {
  if (Array.isArray(value)) {
    return value.length === 2 && value.every(part => typeof part === 'string' && part.trim().length > 0);
  }
  if (value && typeof value === 'object') {
    const rec = value as Record<string, unknown>;
    return typeof rec.en === 'string' && rec.en.trim().length > 0 &&
      typeof rec.it === 'string' && rec.it.trim().length > 0;
  }
  return false;
};

const missionIdCounts = new Map<string, number>();
MISSIONS.forEach(mission => {
  missionIdCounts.set(mission.id, (missionIdCounts.get(mission.id) ?? 0) + 1);
});
for (const [id, count] of missionIdCounts) {
  assert.equal(count, 1, `Mission ID must be globally unique: ${id}`);
}

const subjectIds = new Set([
  ...SUBJECTS.map(subject => subject.id),
  // Ghana curricula are registered through the grade-specific curriculum registry.
  'ghcoremath', 'ghcomputing', 'ghcomputing2', 'ghcomputing3', 'ghcoremath2', 'ghcoremath3', 'ghjhs1math', 'ghjhs2math', 'ghjhs3math', 'ghjhs1science', 'ghjhs2science', 'ghjhs3science', 'ghjhs1computing',
]);
const bank = getCompleteQuestionBank();
assert.ok(bank.length > 300, `Expected a substantial question bank, got ${bank.length}`);

const questionIds = new Set<string>();
for (const question of bank) {
  assert.ok(question.id.trim(), 'Every question must have a non-empty ID');
  assert.ok(!questionIds.has(question.id), `Duplicate question ID: ${question.id}`);
  questionIds.add(question.id);

  const isGhanaEnglishQuestion = question.subject === 'ghcoremath' || question.subject === 'ghcomputing' || question.subject === 'ghcomputing2' || question.subject === 'ghcomputing3' || question.subject === 'ghcoremath2' || question.subject === 'ghcoremath3' || question.subject === 'ghjhs1math' || question.subject === 'ghjhs2math' || question.subject === 'ghjhs3math' || question.subject === 'ghjhs1science' || question.subject === 'ghjhs2science' || question.subject === 'ghjhs3science' || question.subject === 'ghjhs1computing';
  assert.ok(isGhanaEnglishQuestion ? typeof question.q === 'string' && question.q.trim().length > 0 : isCompleteBilingualPair(question.q), `Question prompt must follow its curriculum language policy: ${question.id}`);
  assert.ok(isGhanaEnglishQuestion ? typeof question.why === 'string' && question.why.trim().length > 0 : isCompleteBilingualPair(question.why), `Question explanation must follow its curriculum language policy: ${question.id}`);
  assert.ok(Array.isArray(question.a) && question.a.length >= 2, `Question needs at least two answer options: ${question.id}`);
  question.a.forEach((answer, index) => {
    assert.ok(isGhanaEnglishQuestion ? typeof answer === 'string' && answer.trim().length > 0 : isCompleteBilingualPair(answer), `Answer ${index + 1} must follow its curriculum language policy: ${question.id}`);
  });

  assert.ok(subjectIds.has(question.subject), `Unknown question subject: ${question.subject} (${question.id})`);

  // Grammar assessment questions are topic-scoped rather than attached to a mission chapter.
  if (question.id.startsWith('italian-grammar-')) {
    assert.equal(question.subject, 'italian', `Grammar assessment question must belong to Italian: ${question.id}`);
    assert.ok(question.missionId.startsWith('italian-grammar-'), `Grammar question must retain its topic category: ${question.id}`);
    assert.equal(question.arcIndex, -1, `Grammar question must not masquerade as a mission chapter: ${question.id}`);
    assert.equal(question.unitIndex, -1, `Grammar question must not masquerade as a curriculum unit: ${question.id}`);
    continue;
  }

  const arc = ARCS[question.arcIndex];
  assert.ok(arc, `Question references a missing chapter: ${question.id} (arc ${question.arcIndex})`);
  assert.equal(arc.subject || 'cs', question.subject, `Question subject does not match its chapter: ${question.id}`);
  assert.ok(UNITS[question.unitIndex], `Question references a missing unit: ${question.id} (unit ${question.unitIndex})`);
  assert.equal(arc.unit ?? 0, question.unitIndex, `Question unit does not match its chapter: ${question.id}`);
}

console.log('contentIntegrity.test.ts ok! Validated', bank.length, 'bilingual questions.');

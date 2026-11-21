import assert from 'node:assert/strict';
import { HISTORY5_BOOK_QUESTIONS } from '../src/data/historyG5BookQuestions';
import { getCompleteQuestionBank } from '../src/data/questionBank';
import { MISSIONS } from '../src/data/gameData';

const missionIds = new Set((MISSIONS as any[]).map(m => m.id));
const seenQuestions = new Set<string>();

for (const item of HISTORY5_BOOK_QUESTIONS) {
  const label = `${item.missionId} / ${item.bookRef}`;
  assert.ok(missionIds.has(item.missionId), `${label}: unknown mission`);
  assert.match(item.bookRef, /, p\. \d+$/, `${label}: bookRef needs a page`);
  assert.equal(item.a.length, 4, `${label}: four answers`);
  const en = item.a.map(a => a[0]);
  const it = item.a.map(a => a[1]);
  assert.equal(new Set(en).size, 4, `${label}: duplicate English answers`);
  assert.equal(new Set(it).size, 4, `${label}: duplicate Italian answers`);
  for (const pair of [item.q, item.why, ...item.a]) {
    assert.ok(Array.isArray(pair) && pair[0].trim() && pair[1].trim(), `${label}: needs English and Italian text`);
  }
  const key = item.q[0];
  assert.ok(!seenQuestions.has(key + item.bookRef), `${label}: repeated question`);
  seenQuestions.add(key + item.bookRef);
}

// The book page references come from the index: pages must lie inside the book's 4-137 range.
for (const item of HISTORY5_BOOK_QUESTIONS) {
  const page = Number(/p\. (\d+)$/.exec(item.bookRef)![1]);
  assert.ok(page >= 4 && page <= 137, `${item.bookRef}: page outside the book's history chapters`);
}

// No duplicate of an existing question already in the pool.
const bank = getCompleteQuestionBank();
const existing = bank.filter(q => q.subject === 'hist5' && !q.bookRef).map(q => String(q.q[0]).toLowerCase());
for (const item of HISTORY5_BOOK_QUESTIONS) assert.ok(!existing.includes(item.q[0].toLowerCase()), `${item.q[0]} already exists`);

const hist5 = bank.filter(q => q.subject === 'hist5');
// 11 missions with 4 quiz questions each, plus the book-based supplemental questions.
assert.equal(hist5.length, 11 * 4 + HISTORY5_BOOK_QUESTIONS.length, 'pool = mission quizzes + book questions');
for (let n = 1; n <= 11; n++) {
  const id = `hist_g5_m${n}`;
  assert.ok(hist5.filter(q => q.missionId === id).length >= 5, `${id} has at least 5 test questions`);
}
assert.equal(new Set(bank.map(q => q.id)).size, bank.length, 'question ids are unique');

console.log(`historyG5BookQuestions.test.ts ok! ${HISTORY5_BOOK_QUESTIONS.length} book questions; Grade 5 History pool is now ${hist5.length}.`);

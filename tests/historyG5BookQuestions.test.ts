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
assert.equal(hist5.length, 16 + HISTORY5_BOOK_QUESTIONS.length, 'pool grew by the new questions');
for (const id of ['hist_g5_m1', 'hist_g5_m2', 'hist_g5_m3', 'hist_g5_m4']) {
  assert.ok(hist5.filter(q => q.missionId === id).length >= 16, `${id} has a pool of at least 16`);
}
assert.equal(new Set(bank.map(q => q.id)).size, bank.length, 'question ids are unique');

console.log(`historyG5BookQuestions.test.ts ok! ${HISTORY5_BOOK_QUESTIONS.length} book questions; Grade 5 History pool is now ${hist5.length}.`);

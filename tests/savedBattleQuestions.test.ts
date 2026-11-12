import assert from 'node:assert/strict';
import { sanitizeSavedBattleQuestions } from '../src/persistence';

const valid = { q: ['Question', 'Domanda'], a: [['A', 'A'], ['B', 'B']], why: ['Reason', 'Motivo'] };
assert.deepEqual(sanitizeSavedBattleQuestions([valid]), [valid]);
assert.deepEqual(sanitizeSavedBattleQuestions([
  valid,
  null,
  { ...valid, q: '' },
  { ...valid, why: [''] },
  { ...valid, a: ['only one'] },
  { ...valid, a: Array(9).fill('answer') },
  { ...valid, a: ['ok', 42] },
  { ...valid, extra: 'ignored' }
]), [valid, valid]);
assert.equal(sanitizeSavedBattleQuestions('not an array'), undefined);
assert.equal(sanitizeSavedBattleQuestions(Array(101).fill(valid)), undefined);
assert.deepEqual(sanitizeSavedBattleQuestions([]), []);
assert.equal(sanitizeSavedBattleQuestions([{ ...valid, q: 'x'.repeat(1001) }])?.length, 0);
console.log('savedBattleQuestions.test.ts ok');

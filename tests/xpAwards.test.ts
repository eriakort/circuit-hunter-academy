import assert from 'node:assert/strict';
import { isValidXpAward } from '../src/missionAccess';

for (const amount of [0, 1, 50, 250, 10000]) {
  assert.equal(isValidXpAward(amount), true, `accept valid XP award ${amount}`);
}
for (const amount of [-1, 1.5, NaN, Infinity, -Infinity, Number.MAX_SAFE_INTEGER + 1, 10001, '50', null, undefined]) {
  assert.equal(isValidXpAward(amount), false, `reject invalid XP award ${String(amount)}`);
}

console.log('xpAwards.test.ts ok');

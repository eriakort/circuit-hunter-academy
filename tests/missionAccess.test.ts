import assert from 'node:assert/strict';
import { MISSIONS } from '../src/data/gameData';
import { isMissionOpen } from '../src/missionAccess';

const missions = [
  { id: 'chapter-one-intro', arc: 'chapter-one' },
  { id: 'chapter-one-next', arc: 'chapter-one' },
  { id: 'chapter-two-intro', arc: 'chapter-two' },
  { id: 'chapter-two-next', arc: 'chapter-two' }
] as const;

assert.equal(isMissionOpen(-1, missions, {}), false, 'negative indexes are never open');
assert.equal(isMissionOpen(missions.length, missions, {}), false, 'out-of-range indexes are never open');
assert.equal(isMissionOpen(0, missions, {}), true, 'the first mission is open');
assert.equal(isMissionOpen(1, missions, {}), false, 'a later mission stays locked until its predecessor is cleared');
assert.equal(isMissionOpen(1, missions, { 'chapter-one-intro': true }), true, 'clearing the predecessor unlocks the next mission');
assert.equal(isMissionOpen(2, missions, {}), true, 'the first mission of a new chapter is independently open');
assert.equal(isMissionOpen(3, missions, {}), false, 'the next mission in a new chapter remains locked');

for (let index = 0; index < MISSIONS.length; index += 1) {
  const mission = MISSIONS[index];
  const previous = MISSIONS[index - 1];
  const expected = !previous || previous.arc !== mission.arc;
  assert.equal(isMissionOpen(index, MISSIONS, {}), expected, 'curriculum chapter starts are open and later missions are locked');
  if (previous && previous.arc === mission.arc) {
    assert.equal(isMissionOpen(index, MISSIONS, { [previous.id]: true }), true, 'clearing the preceding curriculum mission unlocks this mission');
  }
}

console.log('missionAccess.test.ts ok');

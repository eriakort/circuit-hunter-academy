import assert from 'node:assert/strict';
import { ARCS, MISSIONS, UNITS } from '../src/data/gameData';

const unitIndex = UNITS.findIndex(unit => unit.title === 'Cycles' && unit.subject === 'ghjhs1science');
assert.ok(unitIndex >= 0, 'JHS 1 Science Cycles unit should be registered');
const arcs = ARCS.filter(arc => arc.unit === unitIndex && arc.subject === 'ghjhs1science');
assert.deepEqual(arcs.map(arc => arc.title), ['Earth Science', 'Life Cycle of Organisms', 'Crop Production', 'Animal Production']);
const missions = MISSIONS.filter(mission => arcs.some(arc => ARCS[mission.arc] === arc));
assert.equal(missions.length, 4);
assert.deepEqual(missions.map(mission => mission.title), [
  'The Earth Systems Explorer',
  'The Life Cycle Guardian',
  'The Crop Care Strategist',
  'The Animal Welfare Keeper'
]);
for (const mission of missions) {
  assert.equal(mission.quiz.length, 5, `Expected five quiz questions in ${mission.id}`);
  assert.equal(typeof mission.scenes[0].text, 'string');
}
console.log('ghanaJhs1ScienceCycles.test.ts ok!');

import assert from 'node:assert/strict';
import { ARCS, MISSIONS, UNITS } from '../src/data/gameData';

const unitIndex = UNITS.findIndex(unit => unit.title === 'Systems' && unit.subject === 'ghjhs1science');
assert.ok(unitIndex >= 0, 'JHS 1 Science Systems unit should be registered');
const arcs = ARCS.filter(arc => arc.unit === unitIndex && arc.subject === 'ghjhs1science');
assert.deepEqual(arcs.map(arc => arc.title), ['The Human Body System', 'The Solar System', 'Ecosystem', 'Farming Systems']);
const missions = MISSIONS.filter(mission => arcs.some(arc => ARCS[mission.arc] === arc));
assert.equal(missions.length, 4);
assert.deepEqual(missions.map(mission => mission.title), [
  'The Digestion Defender',
  'The Inner Planet Navigator',
  'The Ecosystem Balance Keeper',
  'The Farming Systems Strategist'
]);
for (const mission of missions) {
  assert.equal(mission.quiz.length, 5, `Expected five quiz questions in ${mission.id}`);
  assert.equal(typeof mission.scenes[0].text, 'string');
}
console.log('ghanaJhs1ScienceSystems.test.ts ok!');

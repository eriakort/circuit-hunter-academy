import assert from 'node:assert/strict';
import { ARCS, MISSIONS, UNITS } from '../src/data/gameData';

const unitIndex = UNITS.findIndex(unit => unit.title === 'Forces and Energy' && unit.subject === 'ghjhs1science');
assert.ok(unitIndex >= 0, 'JHS 1 Science Forces and Energy unit should be registered');
const arcs = ARCS.filter(arc => arc.unit === unitIndex && arc.subject === 'ghjhs1science');
assert.deepEqual(arcs.map(arc => arc.title), [
  'Energy',
  'Electricity and Electronics',
  'Conversion and Conservation of Energy',
  'Force and Motion',
  'Agricultural Tools'
]);
const missions = MISSIONS.filter(mission => arcs.some(arc => ARCS[mission.arc] === arc));
assert.equal(missions.length, 5);
assert.deepEqual(missions.map(mission => mission.title), [
  'The Energy Form Explorer',
  'The Electricity Generation Guardian',
  'The Energy Transformation Alchemist',
  'The Force and Motion Pathfinder',
  'The Farm Tool Engineer'
]);
for (const mission of missions) {
  assert.equal(mission.quiz.length, 5, `Expected five quiz questions in ${mission.id}`);
  assert.equal(mission.scenes.length, 6);
  assert.ok(mission.quiz.every(question =>
    typeof question.q === 'string' &&
    typeof question.why === 'string' &&
    question.a.length === 4
  ));
}
console.log('ghanaJhs1ScienceForcesEnergy.test.ts ok!');

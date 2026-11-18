import assert from 'node:assert/strict';
import { ARCS, MISSIONS, UNITS } from '../src/data/gameData';

const unitIndex = UNITS.findIndex(unit => unit.title === 'Humans and the Environment' && unit.subject === 'ghjhs1science');
assert.ok(unitIndex >= 0, 'JHS 1 Science Humans and the Environment unit should be registered');
const arcs = ARCS.filter(arc => arc.unit === unitIndex && arc.subject === 'ghjhs1science');
assert.deepEqual(arcs.map(arc => arc.title), [
  'Waste Management',
  'Human Health',
  'Science and Industry',
  'Climate Change and Green Economy',
  'Understanding the Environment'
]);
const missions = MISSIONS.filter(mission => arcs.some(arc => ARCS[mission.arc] === arc));
assert.equal(missions.length, 5);
assert.deepEqual(missions.map(mission => mission.title), [
  'The Waste-Wise Community Guardian',
  'The Healthy Body Protector',
  'The Science Career Pathfinder',
  'The Green Future Strategist',
  'The Habitat and Adaptation Ranger'
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
console.log('ghanaJhs1ScienceHumansEnvironment.test.ts ok!');

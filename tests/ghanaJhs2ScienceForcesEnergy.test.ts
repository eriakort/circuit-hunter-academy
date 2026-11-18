import assert from 'node:assert/strict';
import { ARCS, MISSIONS, UNITS } from '../src/data/gameData';
import { getCurriculumSubjects } from '../src/data/curriculumSubjects';

const science = getCurriculumSubjects('ghjhs2', 'ghana-nacca').find(subject => subject.id === 'ghjhs2science');
assert.ok(science, 'JHS 2 Science remains selectable in the Ghana curriculum');
assert.match(String(science?.blurb), /Forces and Energy/i);
const unitIndex = UNITS.findIndex(unit => unit.title === 'Forces and Energy' && unit.subject === 'ghjhs2science');
assert.ok(unitIndex >= 0, 'JHS 2 Science Forces and Energy unit should be registered');
const arcs = ARCS.filter(arc => arc.unit === unitIndex && arc.subject === 'ghjhs2science');
assert.deepEqual(arcs.map(arc => arc.title), [
  'Energy Forms, Sources and Heat',
  'Electricity Transmission and Electronics',
  'Energy Conversion and Conservation',
  'Magnetism, Force, Motion and Machines',
  'Agricultural Tools in Practice'
]);
const missions = MISSIONS.filter(mission => arcs.some(arc => ARCS[mission.arc] === arc));
assert.equal(missions.length, 5);
assert.deepEqual(missions.map(mission => mission.title), [
  'The Energy Conversion Pathfinder',
  'The Electricity Network Engineer',
  'The Energy Steward',
  'The Magnetism and Motion Defender',
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
console.log('ghanaJhs2ScienceForcesEnergy.test.ts ok!');

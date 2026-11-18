import assert from 'node:assert/strict';
import { ARCS, MISSIONS, UNITS } from '../src/data/gameData';
import { getCurriculumSubjects } from '../src/data/curriculumSubjects';

const science = getCurriculumSubjects('ghjhs2', 'ghana-nacca').find(subject => subject.id === 'ghjhs2science');
assert.ok(science, 'JHS 2 Science remains selectable in the Ghana curriculum');
assert.match(String(science?.blurb), /all five strands/i);
const unitIndex = UNITS.findIndex(unit => unit.title === 'Humans and the Environment' && unit.subject === 'ghjhs2science');
assert.ok(unitIndex >= 0, 'JHS 2 Science Humans and the Environment unit should be registered');
const arcs = ARCS.filter(arc => arc.unit === unitIndex && arc.subject === 'ghjhs2science');
assert.deepEqual(arcs.map(arc => arc.title), [
  'Waste Management',
  'Human Health',
  'Science and Industry',
  'Climate Change and Green Economy',
  'Understanding the Environment: Soils and Plants',
  'Rocks and Soil Formation'
]);
const missions = MISSIONS.filter(mission => arcs.some(arc => ARCS[mission.arc] === arc));
assert.equal(missions.length, 6);
assert.deepEqual(missions.map(mission => mission.title), [
  'The Waste-Wise Community Guardian',
  'The Community Health Defender',
  'The Science and Innovation Builder',
  'The Climate Action Strategist',
  'The Soil and Plant Investigator',
  'The Rock and Soil Origins Explorer'
]);
for (const mission of missions) {
  assert.equal(mission.quiz.length, 5, `Expected five quiz questions in ${mission.id}`);
  // Each mission has five teaching scenes, one challenge scene, and one battle scene.
  assert.equal(mission.scenes.length, 7);
  assert.ok(mission.quiz.every(question =>
    typeof question.q === 'string' &&
    typeof question.why === 'string' &&
    question.a.length === 4
  ));
}
console.log('ghanaJhs2ScienceHumansEnvironment.test.ts ok!');

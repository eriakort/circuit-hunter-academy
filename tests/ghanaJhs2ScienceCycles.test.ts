import assert from 'node:assert/strict';
import { ARCS, MISSIONS, UNITS } from '../src/data/gameData';
import { getCurriculumSubjects } from '../src/data/curriculumSubjects';

const science = getCurriculumSubjects('ghjhs2', 'ghana-nacca').find(subject => subject.id === 'ghjhs2science');
assert.ok(science, 'JHS 2 Science remains selectable in the Ghana curriculum');
assert.match(String(science?.blurb), /carbon cycle/i);
const unitIndex = UNITS.findIndex(unit => unit.title === 'Cycles' && unit.subject === 'ghjhs2science');
assert.ok(unitIndex >= 0, 'JHS 2 Science Cycles unit should be registered');
const arcs = ARCS.filter(arc => arc.unit === unitIndex && arc.subject === 'ghjhs2science');
assert.deepEqual(arcs.map(arc => arc.title), [
  'Earth Science · The Carbon Cycle',
  'Life Cycle of Organisms · Anopheles Mosquito',
  'Crop Production · Seed Beds',
  'Animal Production · Feed and Water'
]);
const missions = MISSIONS.filter(mission => arcs.some(arc => ARCS[mission.arc] === arc));
assert.equal(missions.length, 4);
assert.deepEqual(missions.map(mission => mission.title), [
  'The Carbon Cycle Guardian',
  'The Mosquito Life-Cycle Defender',
  'The Seed-Bed Design Strategist',
  'The Animal Feed and Water Keeper'
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
console.log('ghanaJhs2ScienceCycles.test.ts ok!');

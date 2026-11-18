import assert from 'node:assert/strict';
import { ARCS, MISSIONS, UNITS } from '../src/data/gameData';
import { getCurriculumSubjects } from '../src/data/curriculumSubjects';

const science = getCurriculumSubjects('ghjhs1', 'ghana-nacca').find(subject => subject.id === 'ghjhs1science');
assert.ok(science, 'JHS 1 Science is selectable in the Ghana curriculum');
const missions = MISSIONS.filter(mission => mission.id.startsWith('gh-jhs1-science-'));
assert.equal(missions.length, 21);
assert.deepEqual(missions.map(mission => mission.title), [
  'The Materials Explorer',
  'The Everyday Materials Engineer',
  'The Living Cell Investigator',
  'The Earth Systems Explorer',
  'The Life Cycle Guardian',
  'The Crop Care Strategist',
  'The Animal Welfare Keeper',
  'The Digestion Defender',
  'The Inner Planet Navigator',
  'The Ecosystem Balance Keeper',
  'The Farming Systems Strategist',
  'The Energy Form Explorer',
  'The Electricity Generation Guardian',
  'The Energy Transformation Alchemist',
  'The Force and Motion Pathfinder',
  'The Farm Tool Engineer',
  'The Waste-Wise Community Guardian',
  'The Healthy Body Protector',
  'The Science Career Pathfinder',
  'The Green Future Strategist',
  'The Habitat and Adaptation Ranger'
]);
for (const mission of missions) {
  const arc = ARCS[mission.arc];
  assert.equal(arc.subject, 'ghjhs1science');
  assert.equal(UNITS[arc.unit as number]?.subject, 'ghjhs1science');
  assert.equal(mission.quiz.length, 5);
  assert.ok(mission.scenes.length >= 5);
  assert.ok(mission.quiz.every(question =>
    typeof question.q === 'string' &&
    typeof question.why === 'string' &&
    question.a.length >= 2 &&
    question.a.every(answer => typeof answer === 'string')
  ));
}
console.log('ghanaJhs1ScienceData.test.ts ok! JHS 1 Science all five JHS 1 Science strands verified.');

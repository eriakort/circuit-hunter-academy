import assert from 'node:assert/strict';
import { ARCS, MISSIONS, UNITS } from '../src/data/gameData';
import { getCurriculumSubjects } from '../src/data/curriculumSubjects';

const science = getCurriculumSubjects('ghjhs3', 'ghana-nacca').find(subject => subject.id === 'ghjhs3science');
assert.ok(science, 'JHS 3 Science remains selectable in the Ghana curriculum');
assert.match(String(science?.blurb), /nitrogen cycle/i);
assert.match(String(science?.meta), /10 missions/i);

const unitIndex = UNITS.findIndex(unit => unit.title === 'Cycles' && unit.subject === 'ghjhs3science');
assert.ok(unitIndex >= 0, 'JHS 3 Science Cycles unit should be registered');
const arcs = ARCS.filter(arc => arc.unit === unitIndex && arc.subject === 'ghjhs3science');
assert.deepEqual(arcs.map(arc => arc.title), [
  'Earth Science · The Nitrogen Cycle',
  'Life Cycle of Organisms · Grasshopper',
  'Crop Production · Crop Maturity',
  'Animal Production · Feed Preparation and Selection'
]);

const missions = MISSIONS.filter(mission => mission.id.startsWith('gh-jhs3-science-') && ARCS[mission.arc]?.unit === unitIndex);
assert.equal(missions.length, 5);
assert.deepEqual(missions.map(mission => mission.title), [
  'The Nitrogen Cycle Guardian',
  'The Grasshopper Life-Cycle Ranger',
  'The Crop Maturity Investigator',
  'The Animal Feed Formulator',
  'The Livestock Nutrition Strategist'
]);

for (const mission of missions) {
  const arc = ARCS[mission.arc];
  assert.equal(arc.subject, 'ghjhs3science');
  assert.equal(UNITS[arc.unit as number]?.subject, 'ghjhs3science');
  assert.equal(mission.quiz.length, 5, `Expected five quiz questions in ${mission.id}`);
  assert.equal(mission.scenes.length, 6, `Expected four teaching scenes, a challenge and battle in ${mission.id}`);
  assert.ok(mission.quiz.every(question =>
    typeof question.q === 'string' &&
    typeof question.why === 'string' &&
    question.a.length === 4
  ));
}
assert.ok(missions.some(mission => /B9\.2\.1\.1\.1/.test(mission.pages)), 'Nitrogen cycle process indicator is covered');
assert.ok(missions.some(mission => /B9\.2\.1\.1\.2/.test(mission.pages)), 'Nitrogen cycle environmental importance indicator is covered');
assert.ok(missions.some(mission => /B9\.2\.2\.1\.1/.test(mission.pages)), 'Grasshopper life cycle indicator is covered');
assert.ok(missions.some(mission => /B9\.2\.2\.1\.2/.test(mission.pages)), 'Grasshopper impact indicator is covered');
assert.ok(missions.some(mission => /B9\.2\.3\.1\.1/.test(mission.pages)), 'Crop maturity comparison indicator is covered');
assert.ok(missions.some(mission => /B9\.2\.3\.2\.2/.test(mission.pages)), 'Crop maturity value indicator is covered');
assert.ok(missions.some(mission => /B9\.2\.4\.1\.1/.test(mission.pages)), 'Animal feed preparation indicator is covered');
assert.ok(missions.some(mission => /B9\.2\.4\.2\.1/.test(mission.pages)), 'Animal feed selection indicator is covered');
console.log('ghanaJhs3ScienceCycles.test.ts ok! Five Basic 9 Cycles missions verified.');

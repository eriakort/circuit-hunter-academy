import assert from 'node:assert/strict';
import { ARCS, MISSIONS, UNITS } from '../src/data/gameData';
import { getCurriculumSubjects } from '../src/data/curriculumSubjects';

const science = getCurriculumSubjects('ghjhs3', 'ghana-nacca').find(subject => subject.id === 'ghjhs3science');
assert.ok(science, 'JHS 3 Science is selectable in the Ghana curriculum');
assert.match(String(science?.blurb), /Diversity of Matter/i);
const unitIndex = UNITS.findIndex(unit => unit.title === 'Diversity of Matter' && unit.subject === 'ghjhs3science');
assert.ok(unitIndex >= 0, 'JHS 3 Science Diversity of Matter unit should be registered');
const arcs = ARCS.filter(arc => arc.unit === unitIndex && arc.subject === 'ghjhs3science');
assert.deepEqual(arcs.map(arc => arc.title), [
  'Binary Compounds, Acids, Bases and Salts',
  'Chemical Bonding',
  'Specialised Cells in Plants and Humans'
]);
const missions = MISSIONS.filter(mission => mission.id.startsWith('gh-jhs3-science-') && ARCS[mission.arc]?.unit === unitIndex);
assert.equal(missions.length, 5);
assert.deepEqual(missions.map(mission => mission.title), [
  'The Binary Compound Chemist',
  'The pH Scale Guardian',
  'The Chemical Bonding Architect',
  'The Plant Cell Specialist',
  'The Human Cell Function Ranger'
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
assert.ok(missions.some(mission => /B9\.1\.1\.1\.3/.test(mission.pages)), 'Acids, bases and salts indicator is covered');
assert.ok(missions.some(mission => /B9\.1\.1\.2\.1/.test(mission.pages)), 'Chemical bonding indicator is covered');
assert.ok(missions.some(mission => /B9\.1\.2\.1\.2/.test(mission.pages)), 'Specialised plant cells indicator is covered');
assert.ok(missions.some(mission => /B9\.1\.2\.1\.3/.test(mission.pages)), 'Specialised human cells indicator is covered');
console.log('ghanaJhs3ScienceData.test.ts ok! Five Basic 9 Diversity of Matter missions verified.');

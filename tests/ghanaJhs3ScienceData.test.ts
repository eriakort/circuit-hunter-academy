import assert from 'node:assert/strict';
import { ARCS, MISSIONS, UNITS } from '../src/data/gameData';
import { getCurriculumSubjects } from '../src/data/curriculumSubjects';

const science = getCurriculumSubjects('ghjhs3', 'ghana-nacca').find(subject => subject.id === 'ghjhs3science');
assert.ok(science, 'JHS 3 Science is selectable in the Ghana curriculum');
assert.match(String(science?.blurb), /Systems/i);
const expected = [
  ['Diversity of Matter', ['Binary Compounds, Acids, Bases and Salts', 'Chemical Bonding', 'Specialised Cells in Plants and Humans'], ['The Binary Compound Chemist', 'The pH Scale Guardian', 'The Chemical Bonding Architect', 'The Plant Cell Specialist', 'The Human Cell Function Ranger']],
  ['Cycles', ['Earth Science · The Nitrogen Cycle', 'Life Cycle of Organisms · Grasshopper', 'Crop Production · Crop Maturity', 'Animal Production · Feed Preparation and Selection'], ['The Nitrogen Cycle Guardian', 'The Grasshopper Life-Cycle Ranger', 'The Crop Maturity Investigator', 'The Animal Feed Formulator', 'The Livestock Nutrition Strategist']],
  ['Systems', ['The Human Body · Circulation and Respiration', 'The Solar System · Asteroids and Comets', 'Ecosystems · Interdependence and Balance', 'Farming Systems · Manure Preparation'], ['The Circulation and Respiration Guardian', 'The Asteroid and Comet Pathfinder', 'The Ecosystem Balance Keeper', 'The Manure Materials Investigator', 'The Composting Field Engineer']]
] as const;
for (const [unitTitle, expectedArcs, expectedMissions] of expected) {
  const unitIndex = UNITS.findIndex(unit => unit.title === unitTitle && unit.subject === 'ghjhs3science');
  assert.ok(unitIndex >= 0, `JHS 3 Science ${unitTitle} unit should be registered`);
  const arcs = ARCS.filter(arc => arc.unit === unitIndex && arc.subject === 'ghjhs3science');
  assert.deepEqual(arcs.map(arc => arc.title), expectedArcs);
  const missions = MISSIONS.filter(mission => mission.id.startsWith('gh-jhs3-science-') && ARCS[mission.arc]?.unit === unitIndex);
  assert.deepEqual(missions.map(mission => mission.title), expectedMissions);
  for (const mission of missions) {
    assert.equal(ARCS[mission.arc].subject, 'ghjhs3science');
    assert.equal(UNITS[ARCS[mission.arc].unit as number]?.subject, 'ghjhs3science');
    assert.equal(mission.quiz.length, 5);
    assert.equal(mission.scenes.length, 6);
    assert.ok(mission.quiz.every(question => typeof question.q === 'string' && typeof question.why === 'string' && question.a.length === 4));
  }
}
const systemsIndex = UNITS.findIndex(unit => unit.title === 'Systems' && unit.subject === 'ghjhs3science');
const systemsMissions = MISSIONS.filter(mission => mission.id.startsWith('gh-jhs3-science-') && ARCS[mission.arc]?.unit === systemsIndex);
for (const indicator of ['B9.3.1.1.1', 'B9.3.1.1.2', 'B9.3.2.1.1', 'B9.3.3.1.1', 'B9.3.4.1.1', 'B9.3.4.1.2', 'B9.3.4.1.3']) {
  assert.ok(systemsMissions.some(mission => mission.pages.includes(indicator)), `Systems strand covers ${indicator}`);
}
console.log('ghanaJhs3ScienceData.test.ts ok! Fifteen Basic 9 Science missions verified across three strands.');

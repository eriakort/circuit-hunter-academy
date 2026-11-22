import assert from 'node:assert/strict';
import { ARCS, MISSIONS, UNITS } from '../src/data/gameData';
import { getCurriculumSubjects } from '../src/data/curriculumSubjects';

const science = getCurriculumSubjects('ghjhs3', 'ghana-nacca').find(subject => subject.id === 'ghjhs3science');
assert.ok(science, 'JHS 3 Science is selectable in the Ghana curriculum');
assert.match(String(science?.blurb), /Systems/i);
const expected = [
  ['Diversity of Matter', ['Binary Compounds, Acids, Bases and Salts', 'Chemical Bonding', 'Specialised Cells in Plants and Humans'], ['The Binary Compound Chemist', 'The pH Scale Guardian', 'The Chemical Bonding Architect', 'The Plant Cell Specialist', 'The Human Cell Function Ranger']],
  ['Cycles', ['Earth Science · The Nitrogen Cycle', 'Life Cycle of Organisms · Grasshopper', 'Crop Production · Crop Maturity', 'Animal Production · Feed Preparation and Selection'], ['The Nitrogen Cycle Guardian', 'The Grasshopper Life-Cycle Ranger', 'The Crop Maturity Investigator', 'The Animal Feed Formulator', 'The Livestock Nutrition Strategist']],
  ['Systems', ['The Human Body · Circulation and Respiration', 'The Solar System · Asteroids and Comets', 'Ecosystems · Interdependence and Balance', 'Farming Systems · Manure Preparation'], ['The Circulation and Respiration Guardian', 'The Asteroid and Comet Pathfinder', 'The Ecosystem Balance Keeper', 'The Manure Materials Investigator', 'The Composting Field Engineer']],
  ['Forces and Energy', ['Energy, Light and Conservation', 'Electricity and Electronic Components', 'Energy Conversion and Conservation', 'Pressure, Forces and Motion', 'Designing Agricultural Tools'], ['The Energy Conservation Guardian', 'The Circuit Systems Engineer', 'The Energy Transformation Alchemist', 'The Force and Motion Strategist', 'The Agricultural Tool Designer']]
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
    const expandedStrand = unitTitle === 'Diversity of Matter' || unitTitle === 'Cycles';
    assert.equal(mission.quiz.length, expandedStrand ? 8 : 5);
    assert.equal(mission.scenes.length, expandedStrand ? 7 : 6);
    if (unitTitle === 'Cycles') {
      assert.ok(mission.scenes.some(scene => /Applied .* task|Applied .* investigation/i.test(scene.text ?? '')), `Expected an applied learning activity in ${mission.id}`);
    }
    assert.ok(mission.quiz.every(question => typeof question.q === 'string' && typeof question.why === 'string' && question.a.length === 4));
  }
}
const systemsIndex = UNITS.findIndex(unit => unit.title === 'Systems' && unit.subject === 'ghjhs3science');
const systemsMissions = MISSIONS.filter(mission => mission.id.startsWith('gh-jhs3-science-') && ARCS[mission.arc]?.unit === systemsIndex);
for (const indicator of ['B9.3.1.1.1', 'B9.3.1.1.2', 'B9.3.2.1.1', 'B9.3.3.1.1', 'B9.3.4.1.1', 'B9.3.4.1.2', 'B9.3.4.1.3']) {
  assert.ok(systemsMissions.some(mission => mission.pages.includes(indicator)), `Systems strand covers ${indicator}`);
}
const forcesIndex = UNITS.findIndex(unit => unit.title === 'Forces and Energy' && unit.subject === 'ghjhs3science');
const forcesMissions = MISSIONS.filter(mission => mission.id.startsWith('gh-jhs3-science-') && ARCS[mission.arc]?.unit === forcesIndex);
for (const indicator of ['B9.4.1.1.1', 'B9.4.1.1.2', 'B9.4.1.2.1', 'B9.4.2.1.1', 'B9.4.2.2.1', 'B9.4.3.1.1', 'B9.4.4.1.1', 'B9.4.4.2.1', 'B9.4.5.1.1']) {
  assert.ok(forcesMissions.some(mission => mission.pages.includes(indicator)), `Forces and Energy strand covers ${indicator}`);
}

const humansIndex = UNITS.findIndex(unit => unit.title === 'Humans and the Environment' && unit.subject === 'ghjhs3science');
assert.ok(humansIndex >= 0, 'JHS 3 Science Humans and the Environment unit should be registered');
const humansArcs = ARCS.filter(arc => arc.unit === humansIndex && arc.subject === 'ghjhs3science');
assert.deepEqual(humansArcs.map(arc => arc.title), [
  'Waste Management and Sustainability',
  'Human Health and Disease Prevention',
  'Science, Technology and Industry',
  'Climate Change and the Green Economy',
  'Plant Resources and Their Uses'
]);
const humansMissions = MISSIONS.filter(mission => mission.id.startsWith('gh-jhs3-science-') && ARCS[mission.arc]?.unit === humansIndex);
assert.deepEqual(humansMissions.map(mission => mission.title), [
  'The Waste-Wise Community Guardian',
  'The Human Health Defender',
  'The Science and Industry Investigator',
  'The Climate Action Analyst',
  'The Plant Resources Ranger'
]);
for (const mission of humansMissions) {
  assert.equal(mission.quiz.length, 5, `Expected five quiz questions in ${mission.id}`);
  assert.equal(mission.scenes.length, 6, `Expected four teaching scenes, a challenge and battle in ${mission.id}`);
  assert.ok(mission.quiz.every(question => typeof question.q === 'string' && typeof question.why === 'string' && question.a.length === 4));
}
for (const indicator of ['B9.5.1.1.1', 'B9.5.1.2.1', 'B9.5.2.1.1', 'B9.5.2.2.1', 'B9.5.2.2.2', 'B9.5.3.1.1', 'B9.5.3.2.1', 'B9.5.3.2.2', 'B9.5.4.1.1', 'B9.5.4.2.1', 'B9.5.5.1.1', 'B9.5.5.1.2']) {
  assert.ok(humansMissions.some(mission => mission.pages.includes(indicator)), `Humans and the Environment strand covers ${indicator}`);
}


const energyLight = forcesMissions.find(mission => mission.id === 'gh-jhs3-science-energy-light');
const newton = forcesMissions.find(mission => mission.id === 'gh-jhs3-science-force-motion-pressure');
const toolMaking = forcesMissions.find(mission => mission.id === 'gh-jhs3-science-agricultural-tools');
for (const indicator of ['B9.4.1.2.2', 'B9.4.1.2.3', 'B9.4.4.1.2', 'B9.4.5.1.3']) {
  assert.ok(forcesMissions.some(mission => mission.pages.includes(indicator)), `Forces and Energy practical indicator ${indicator} is explicitly linked`);
}
assert.ok(energyLight?.scenes.some(scene => /pinhole camera/i.test(scene.text ?? '') && /inverted/i.test(scene.text ?? '') && /aperture/i.test(scene.text ?? '')), 'Light lesson explains how a pinhole camera forms an inverted image');
assert.ok(energyLight?.scenes.some(scene => /shadow/i.test(scene.text ?? '') && /umbra/i.test(scene.text ?? '') && /penumbra/i.test(scene.text ?? '') && /torch/i.test(scene.text ?? '')), 'Light lesson includes a safe shadow investigation');
assert.ok(newton?.scenes.some(scene => /balloon/i.test(scene.text ?? '') && /action–reaction/i.test(scene.text ?? '') && /different objects/i.test(scene.text ?? '')), 'Newton lesson demonstrates action–reaction forces on different objects');
assert.ok(toolMaking?.scenes.some(scene => /Making a simple agricultural tool/i.test(scene.text ?? '') && /handle joint/i.test(scene.text ?? '')), 'Agricultural tools lesson provides a supervised build sequence');
assert.ok(toolMaking?.scenes.some(scene => /prototype/i.test(scene.text ?? '') && /soil bed/i.test(scene.text ?? '') && /improvement/i.test(scene.text ?? '')), 'Agricultural tools lesson includes prototype testing and evaluation');

console.log('ghanaJhs3ScienceData.test.ts ok! Basic 9 Science curriculum and practical indicators verified across five strands.');

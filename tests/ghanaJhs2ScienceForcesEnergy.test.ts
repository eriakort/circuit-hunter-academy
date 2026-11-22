import assert from 'node:assert/strict';
import { ARCS, MISSIONS, UNITS } from '../src/data/gameData';
import { getCurriculumSubjects } from '../src/data/curriculumSubjects';
import { GHANA_JHS_SCIENCE_INDICATOR_EVIDENCE } from '../src/data/ghanaJhsScienceIndicatorCrosswalk';

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

const byId = new Map(missions.map(mission => [mission.id, mission]));
const lessonText = (id: string) => byId.get(id)!.scenes
  .map(scene => String(scene.text || ''))
  .join(' ')
  .toLowerCase();
const questionText = (id: string) => byId.get(id)!.quiz
  .map(question => question.q.toLowerCase())
  .join(' ');

for (const mission of missions) {
  assert.equal(mission.scenes.length, 8, `Expected six teaching/challenge scenes plus battle in ${mission.id}`);
  assert.equal(mission.quiz.length, 8, `Expected eight curriculum-aligned questions in ${mission.id}`);
  assert.ok(mission.quiz.every(question =>
    typeof question.q === 'string' &&
    typeof question.why === 'string' &&
    question.why.length > 0 &&
    question.a.length === 4
  ));
}

const energy = 'gh-jhs2-science-energy-sources-heat';
for (const concept of ['turbine', 'generator', 'renewable', 'non-renewable', 'biogas', 'heat', 'temperature']) {
  assert.match(lessonText(energy), new RegExp(concept, 'i'));
}
assert.match(lessonText(energy), /dam-to-home energy pathway/);
assert.match(lessonText(energy), /comparison table/);
assert.match(questionText(energy), /hydroelectricity/);
assert.match(questionText(energy), /biogas/);
assert.match(questionText(energy), /sustainable management/);

const electricity = 'gh-jhs2-science-electricity-electronics';
for (const concept of ['step-up transformer', 'transmission lines', 'substation', 'capacitor', 'resistor', 'diode', 'LED']) {
  assert.match(lessonText(electricity), new RegExp(concept, 'i'));
}
assert.match(lessonText(electricity), /flow chart/);
assert.match(lessonText(electricity), /teacher-approved, low-voltage DC kit/i);
assert.match(questionText(electricity), /transmission/);
assert.match(questionText(electricity), /resistor/);
assert.match(questionText(electricity), /capacitor/);

const conservation = 'gh-jhs2-science-energy-conservation-impact';
for (const concept of ['energy is conserved', 'useful output', 'environment', 'fossil fuels']) {
  assert.match(lessonText(conservation), new RegExp(concept, 'i'));
}
assert.match(lessonText(conservation), /school energy audit/);
assert.match(lessonText(conservation), /evidence poster/);
assert.match(lessonText(conservation), /scientific principle/);
assert.match(questionText(conservation), /school/);
assert.match(questionText(conservation), /conservation of energy principle/);

const magnetism = 'gh-jhs2-science-magnetism-force-machines';
for (const concept of ['iron nail', 'electromagnet', 'compass', 'Newton’s Second Law', 'F = m × a', 'complex machine', 'wheelbarrow', 'bicycle']) {
  assert.match(lessonText(magnetism), new RegExp(concept.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i'));
}
assert.match(lessonText(magnetism), /make and test a magnet/);
assert.match(lessonText(magnetism), /force and machine investigation/);
assert.match(questionText(magnetism), /temporary magnet/);
assert.match(questionText(magnetism), /acceleration/);
assert.match(questionText(magnetism), /bicycle/);

const tools = 'gh-jhs2-science-agricultural-tools';
for (const concept of ['hoe', 'cutlass', 'rake', 'shovel', 'watering can', 'wheelbarrow']) {
  assert.match(lessonText(tools), new RegExp(concept, 'i'));
}
assert.match(lessonText(tools), /tool album/);
assert.match(lessonText(tools), /school-garden practice/);
assert.match(lessonText(tools), /teacher supervision/);
assert.match(questionText(tools), /watering seedlings/);
assert.match(questionText(tools), /tool album/);

const expectedCodes = [
  'B8.4.1.1.1','B8.4.1.1.2','B8.4.1.2.1','B8.4.1.2.2','B8.4.1.3.1',
  'B8.4.2.1.1','B8.4.2.2.1','B8.4.3.1.1',
  'B8.4.4.1.1','B8.4.4.1.2','B8.4.4.2.1','B8.4.5.1.1','B8.4.5.1.2'
];
const evidence = GHANA_JHS_SCIENCE_INDICATOR_EVIDENCE
  .filter(item => item.grade === 8 && item.strand === 4);
assert.deepEqual(evidence.map(item => item.indicatorCode), expectedCodes);
const byCode = new Map(evidence.map(item => [item.indicatorCode, item]));
for (const item of evidence) {
  assert.equal(item.status, 'needs-review', `${item.indicatorCode} remains pending educator verification`);
  assert.ok(item.officialIndicatorText, `${item.indicatorCode} has official NaCCA wording`);
  assert.ok(item.sourcePdfPage, `${item.indicatorCode} cites its source PDF page`);
  assert.ok(item.teachingSceneEvidence.length > 50, `${item.indicatorCode} has specific lesson evidence`);
  assert.ok(item.assessmentEvidence.length > 50, `${item.indicatorCode} has specific assessment evidence`);
  assert.ok(item.teachingSceneRefs?.length, `${item.indicatorCode} maps to teaching scenes`);
  assert.ok(item.assessmentQuestionRefs?.length, `${item.indicatorCode} maps to assessment questions`);
  assert.ok(item.teachingSceneRefs!.every(ref => byId.get(ref.split('#')[0])?.scenes[Number(ref.split('#scene-')[1])]), `${item.indicatorCode} scene references resolve`);
  assert.ok(item.assessmentQuestionRefs!.every(ref => byId.get(ref.split('#')[0])?.quiz[Number(ref.split('#quiz-')[1])]), `${item.indicatorCode} question references resolve`);
}
assert.match(byCode.get('B8.4.1.1.2')!.teachingSceneEvidence, /dammed river/);
assert.match(byCode.get('B8.4.1.2.2')!.assessmentEvidence, /local management challenges/);
assert.match(byCode.get('B8.4.2.2.1')!.teachingSceneEvidence, /low-voltage DC circuit/);
assert.match(byCode.get('B8.4.4.1.2')!.teachingSceneEvidence, /trolley acceleration/);
assert.match(byCode.get('B8.4.5.1.2')!.assessmentEvidence, /physical competence/);

console.log('ghanaJhs2ScienceForcesEnergy.test.ts ok! Five Basic 8 Forces and Energy missions now have 40 assessment questions and evidence-linked practical learning.');

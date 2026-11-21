import assert from 'node:assert/strict';
import { ARCS, MISSIONS, UNITS } from '../src/data/gameData';
import { getCurriculumSubjects } from '../src/data/curriculumSubjects';

const science = getCurriculumSubjects('ghjhs2', 'ghana-nacca').find(subject => subject.id === 'ghjhs2science');
assert.ok(science, 'JHS 2 Science remains selectable in the Ghana curriculum');
assert.match(String(science?.blurb), /dental health/i);
const unitIndex = UNITS.findIndex(unit => unit.title === 'Systems' && unit.subject === 'ghjhs2science');
assert.ok(unitIndex >= 0, 'JHS 2 Science Systems unit should be registered');
const arcs = ARCS.filter(arc => arc.unit === unitIndex && arc.subject === 'ghjhs2science');
assert.deepEqual(arcs.map(arc => arc.title), [
  'The Human Body System · Teeth and Dental Health',
  'The Solar System · Outer Planets',
  'Ecosystem · Feeding Relationships',
  'Farming Systems · Crop, Animal and Land Combinations'
]);
const missions = MISSIONS.filter(mission => arcs.some(arc => ARCS[mission.arc] === arc));
assert.equal(missions.length, 4);
assert.deepEqual(missions.map(mission => mission.title), [
  'The Dental Health Guardian',
  'The Outer Planet Navigator',
  'The Ecosystem Food-Web Strategist',
  'The Sustainable Farming Systems Planner'
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
  assert.ok([6, 7].includes(mission.scenes.length), `Unexpected teaching/challenge scene count in ${mission.id}`);
  assert.equal(mission.quiz.length, 8, `Expected eight curriculum-aligned questions in ${mission.id}`);
  assert.ok(mission.quiz.every(question =>
    typeof question.q === 'string' &&
    typeof question.why === 'string' &&
    question.why.length > 0 &&
    question.a.length === 4
  ));
}

const teeth = 'gh-jhs2-science-teeth-dental-health';
assert.match(lessonText(teeth), /crown/);
assert.match(lessonText(teeth), /neck/);
assert.match(lessonText(teeth), /root/);
for (const tooth of ['incisors', 'canines', 'premolars', 'molars']) assert.match(lessonText(teeth), new RegExp(tooth));
assert.match(lessonText(teeth), /plaque/);
assert.match(lessonText(teeth), /demonstrate gentle brushing/);
assert.match(questionText(teeth), /canines/);
assert.match(questionText(teeth), /premolars/);
assert.match(questionText(teeth), /daily habit/);

const planets = 'gh-jhs2-science-outer-planets';
for (const planet of ['Jupiter', 'Saturn', 'Uranus', 'Neptune']) assert.match(lessonText(planets), new RegExp(planet, 'i'));
assert.match(lessonText(planets), /gas giants/);
assert.match(lessonText(planets), /ice giant/);
assert.match(lessonText(planets), /model task/);
assert.match(questionText(planets), /unusual feature/);
assert.match(questionText(planets), /Neptune/);

const ecosystem = 'gh-jhs2-science-ecosystem-feeding';
for (const concept of ['producer', 'primary consumer', 'secondary consumer', 'food chain', 'food web']) {
  assert.match(lessonText(ecosystem), new RegExp(concept, 'i'));
}
assert.match(lessonText(ecosystem), /energy flows/);
assert.match(lessonText(ecosystem), /Draw a food web/);
assert.match(questionText(ecosystem), /secondary consumer/);
assert.match(questionText(ecosystem), /loss of sunlight/);

const farming = 'gh-jhs2-science-farming-systems';
for (const concept of ['mixed cropping', 'mixed farming', 'crop rotation', 'manure', 'animal welfare']) {
  assert.match(lessonText(farming), new RegExp(concept, 'i'));
}
assert.match(lessonText(farming), /Plan a local farm/);
assert.match(questionText(farming), /mixed cropping/);
assert.match(questionText(farming), /support each other/);

console.log('ghanaJhs2ScienceSystems.test.ts ok! Basic 8 Systems has four evidence-rich missions and 32 assessment questions.');

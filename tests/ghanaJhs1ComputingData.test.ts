import assert from 'node:assert/strict';
import { ARCS, MISSIONS, UNITS } from '../src/data/gameData';
import { getCurriculumSubjects } from '../src/data/curriculumSubjects';

const subject = getCurriculumSubjects('ghjhs1', 'ghana-nacca')
  .find(candidate => candidate.id === 'ghjhs1computing');

assert.ok(subject, 'JHS 1 Computing is selectable in the Ghana curriculum');
assert.match(String(subject.meta), /Provisional Computing pilot · 16 missions/);

const missions = MISSIONS.filter(mission => ARCS[mission.arc]?.subject === 'ghjhs1computing');
assert.equal(missions.length, 16);
assert.deepEqual(missions.map(mission => mission.title), [
  'The Computer Parts Pathfinder',
  'The File and Folder Guardian',
  'The Algorithm Route Maker',
  'The Digital Citizenship Sentinel',
  'The Binary Message Decoder',
  'The Message Packet Courier',
  'The Right Tool for the Task',
  'The Healthy Device Steward',
  'The Block-Code Builder',
  'The Class Data Cartographer',
  'The Information Trail Checker',
  'The Teamwork Permission Keeper',
  'The Document Design Guide',
  'The Spreadsheet Sum Keeper',
  'The Accessible Content Builder',
  'The Safe Troubleshooting Scout'
]);

const units = UNITS.filter(unit => unit.subject === 'ghjhs1computing');
assert.equal(units.length, 1);
assert.equal(units[0].title, 'Computing Foundations');

const arcs = ARCS.filter(arc => arc.subject === 'ghjhs1computing');
assert.equal(arcs.length, 16);
assert.ok(arcs.every(arc => !/B[789]\./.test(arc.pages)), 'The provisional slice does not invent official indicator IDs');
assert.ok(arcs.every(arc => /source verification pending/.test(arc.pages)));
assert.ok(missions.every(mission => mission.id.startsWith('gh-jhs1-computing-')), 'The subject contains only JHS 1 Computing missions');
assert.ok(missions.every(mission => mission.scenes.some(scene => 'text' in scene && typeof scene.text === 'string')), 'Every mission has written teaching content');

for (const mission of missions) {
  assert.equal(UNITS[ARCS[mission.arc].unit as number]?.subject, 'ghjhs1computing');
  assert.ok(mission.scenes.length >= 5);
  assert.equal(mission.quiz.length, 5);
  assert.ok(mission.quiz.every(question =>
    typeof question.q === 'string' &&
    typeof question.why === 'string' &&
    question.a.length >= 2 &&
    question.a.every(answer => typeof answer === 'string' && answer.trim())
  ));
}

console.log('ghanaJhs1ComputingData.test.ts ok! Provisional JHS 1 Computing slice verified.');

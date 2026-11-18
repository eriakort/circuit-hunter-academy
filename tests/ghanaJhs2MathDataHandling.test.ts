import assert from 'node:assert/strict';
import { ARCS, MISSIONS, UNITS } from '../src/data/gameData';

const missions = MISSIONS.filter(mission => mission.id.startsWith('gh-jhs2-data-'));
assert.equal(missions.length, 4, 'JHS 2 Handling Data provides four focused missions');

const expectedTitles = [
  'The Fair Survey Strategist',
  'The Frequency Table Workshop',
  'The Average and Range Arena',
  'The Evidence and Chance Detective'
];
assert.deepEqual(missions.map(mission => mission.title), expectedTitles);

for (const mission of missions) {
  const arc = ARCS[mission.arc];
  assert.equal(arc.subject, 'ghjhs2math');
  assert.match(String(arc.title), /Survey|Frequency|Averages|Interpreting/);
  assert.equal(UNITS[arc.unit as number]?.subject, 'ghjhs2math');
  assert.ok(mission.scenes.some(scene => scene.vis === 'ghmath-data'));
  assert.ok(mission.quiz.length >= 5);
  assert.ok(mission.quiz.every(question =>
    typeof question.q === 'string' &&
    typeof question.why === 'string' &&
    question.a.length >= 2 &&
    question.a.every(answer => typeof answer === 'string')
  ));
}

console.log('ghanaJhs2MathDataHandling.test.ts ok! Four English-first JHS 2 Handling Data missions verified.');

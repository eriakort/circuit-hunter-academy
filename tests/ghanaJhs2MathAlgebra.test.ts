import assert from 'node:assert/strict';
import { ARCS, MISSIONS, UNITS } from '../src/data/gameData';

const missions = MISSIONS.filter(mission => mission.id.startsWith('gh-jhs2-algebra-'));
assert.equal(missions.length, 3, 'JHS 2 Algebra provides three focused missions');

const expectedTitles = [
  'The Sequence Pathfinder',
  'The Formula Workshop',
  'The Balance and Boundary Trial'
];
assert.deepEqual(missions.map(mission => mission.title), expectedTitles);

for (const mission of missions) {
  const arc = ARCS[mission.arc];
  assert.equal(arc.subject, 'ghjhs2math');
  assert.match(String(arc.title), /Patterns|Expressions|Equations/);
  assert.equal(UNITS[arc.unit as number]?.subject, 'ghjhs2math');
  assert.ok(mission.scenes.some(scene => scene.vis === 'ghmath-algebra'));
  assert.ok(mission.quiz.length >= 5);
  assert.ok(mission.quiz.every(question =>
    typeof question.q === 'string' &&
    typeof question.why === 'string' &&
    question.a.length >= 2 &&
    question.a.every(answer => typeof answer === 'string')
  ));
}

console.log('ghanaJhs2MathAlgebra.test.ts ok! Three English-first JHS 2 Algebra missions verified.');

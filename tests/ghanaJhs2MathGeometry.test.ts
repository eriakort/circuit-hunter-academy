import assert from 'node:assert/strict';
import { ARCS, MISSIONS, UNITS } from '../src/data/gameData';

const missions = MISSIONS.filter(mission => mission.id.startsWith('gh-jhs2-geometry-'));
assert.equal(missions.length, 4, 'JHS 2 Geometry and Measurement provides four focused missions');

const expectedTitles = [
  'The Parallel Lines Pathfinder',
  'The Transformation Studio',
  'The Circle and Composite-Space Quest',
  'The Solid-Shape Builder'
];
assert.deepEqual(missions.map(mission => mission.title), expectedTitles);

for (const mission of missions) {
  const arc = ARCS[mission.arc];
  assert.equal(arc.subject, 'ghjhs2math');
  assert.match(String(arc.title), /Angles|Transformations|Area|Volume/);
  assert.equal(UNITS[arc.unit as number]?.subject, 'ghjhs2math');
  assert.ok(mission.scenes.some(scene => scene.vis === 'ghmath-geometry'));
  assert.ok(mission.quiz.length >= 5);
  assert.ok(mission.quiz.every(question =>
    typeof question.q === 'string' &&
    typeof question.why === 'string' &&
    question.a.length >= 2 &&
    question.a.every(answer => typeof answer === 'string')
  ));
}

console.log('ghanaJhs2MathGeometry.test.ts ok! Four English-first JHS 2 Geometry and Measurement missions verified.');

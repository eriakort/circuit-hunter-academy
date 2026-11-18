import assert from 'node:assert/strict';
import { ARCS, MISSIONS, UNITS } from '../src/data/gameData';

const missions = MISSIONS.filter(mission => mission.id.startsWith('gh-jhs3-geometry-'));
assert.equal(missions.length, 3, 'JHS 3 Geometry and Measurement provides three focused missions');
assert.deepEqual(missions.map(mission => mission.title), [
  'The Navigator’s Construction Quest',
  'The Right-Triangle Rescue',
  'The Mensuration Master Builder'
]);
for (const mission of missions) {
  const arc = ARCS[mission.arc];
  assert.equal(arc.subject, 'ghjhs3math');
  assert.equal(UNITS[arc.unit as number]?.subject, 'ghjhs3math');
  assert.ok(mission.scenes.some(scene => scene.vis === 'ghmath-geometry'));
  assert.ok(mission.quiz.length >= 5);
  assert.ok(mission.quiz.every(question =>
    typeof question.q === 'string' &&
    typeof question.why === 'string' &&
    question.a.length >= 2 &&
    question.a.every(answer => typeof answer === 'string')
  ));
}
console.log('ghanaJhs3MathGeometryData.test.ts ok! Three English-first JHS 3 Geometry and Measurement missions verified.');

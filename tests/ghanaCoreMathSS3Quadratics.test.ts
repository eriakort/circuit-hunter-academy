import assert from 'node:assert/strict';
import { GHANA_CORE_MATH_SS3_QUADRATICS_ALIGNMENT as alignment } from '../src/data/ghanaCoreMathSS3QuadraticsAlignment';
import {
  GHANA_CORE_MATH_SS3_QUADRATICS_SUBJECT as subject,
  GHANA_CORE_MATH_SS3_QUADRATICS_UNIT as unit,
  GHANA_CORE_MATH_SS3_QUADRATICS_ARCS as arcs,
  GHANA_CORE_MATH_SS3_QUADRATICS_MISSIONS as missions
} from '../src/data/ghanaCoreMathSS3QuadraticsData';

assert.equal(alignment.strand, '2 · Algebraic Reasoning');
assert.equal(alignment.subStrand, '2 · Patterns and Relations');
assert.deepEqual(alignment.printedPages, [311, 321]);
assert.equal(alignment.contentStandards[0].id, '3.2.2.CS.1');
assert.equal(alignment.learningOutcomes[0].id, '3.2.2.LO.1');
assert.deepEqual(alignment.learningIndicators.map(item => item.id), ['3.2.2.LI.1', '3.2.2.LI.2', '3.2.2.LI.3', '3.2.2.LI.4']);
assert.equal(alignment.coverage.length, 3);
assert.equal(subject.id, 'ghcoremath3');
assert.equal(unit.subject, 'ghcoremath3');
assert.equal(arcs.length, 1);
assert.equal(missions.length, 3);
assert.deepEqual(missions.map(item => item.id), [
  'gh-core-ss3-quadratic-equations',
  'gh-core-ss3-quadratic-graphs',
  'gh-core-ss3-quadratic-relationships'
]);
assert.ok(missions.every(item => item.quiz.length === 5 && item.scenes.some(scene => scene.type === 'sort')));
assert.ok(missions.every(item => item.sec === '3.2.2'));
console.log('ghanaCoreMathSS3Quadratics.test.ts ok');

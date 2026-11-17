import assert from 'node:assert/strict';
import { GHANA_CORE_MATH_SS3_TRIG_ALIGNMENT as alignment } from '../src/data/ghanaCoreMathSS3TrigAlignment';
import {
  GHANA_CORE_MATH_SS3_TRIG_UNIT as unit,
  GHANA_CORE_MATH_SS3_TRIG_ARCS as arcs,
  GHANA_CORE_MATH_SS3_TRIG_MISSIONS as missions
} from '../src/data/ghanaCoreMathSS3TrigData';

assert.equal(alignment.strand, '3 · Geometry Around Us');
assert.equal(alignment.subStrand, '2 · Measurement');
assert.deepEqual(alignment.printedPages, [355, 367]);
assert.deepEqual(alignment.contentStandards.map(item => item.id), ['3.3.2.CS.1']);
assert.deepEqual(alignment.learningOutcomes.map(item => item.id), ['3.3.2.LO.1']);
assert.deepEqual(alignment.learningIndicators.map(item => item.id), ['3.3.2.LI.1', '3.3.2.LI.2']);
assert.equal(alignment.coverage.length, 2);
assert.equal(unit.subject, 'ghcoremath3');
assert.equal(arcs.length, 1);
assert.equal(missions.length, 2);
assert.deepEqual(missions.map(item => item.id), [
  'gh-core-ss3-wave-cartographer',
  'gh-core-ss3-equation-decoder'
]);
assert.ok(missions.every(item => item.quiz.length === 7 && item.scenes.some(scene => scene.type === 'sort')));
assert.ok(missions.every(item => item.sec === '3.3.2'));
console.log('ghanaCoreMathSS3Trig.test.ts ok');

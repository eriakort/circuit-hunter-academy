import assert from 'node:assert/strict';
import { GHANA_CORE_MATH_SS3_SPATIAL_ALIGNMENT as alignment } from '../src/data/ghanaCoreMathSS3SpatialAlignment';
import {
  GHANA_CORE_MATH_SS3_SPATIAL_UNIT as unit,
  GHANA_CORE_MATH_SS3_SPATIAL_ARCS as arcs,
  GHANA_CORE_MATH_SS3_SPATIAL_MISSIONS as missions
} from '../src/data/ghanaCoreMathSS3SpatialData';

assert.equal(alignment.strand, '3 · Geometry Around Us');
assert.equal(alignment.subStrand, '1 · Spatial Sense');
assert.deepEqual(alignment.printedPages, [323, 351]);
assert.deepEqual(alignment.contentStandards.map(item => item.id), ['3.3.1.CS.1', '3.3.1.CS.2']);
assert.deepEqual(alignment.learningOutcomes.map(item => item.id), ['3.3.1.LO.1', '3.3.1.LO.2']);
assert.equal(alignment.learningIndicators.length, 7);
assert.equal(alignment.coverage.length, 4);
assert.equal(unit.subject, 'ghcoremath3');
assert.equal(arcs.length, 1);
assert.equal(missions.length, 4);
assert.deepEqual(missions.map(item => item.id), [
  'gh-core-ss3-circle-cartographer',
  'gh-core-ss3-circle-theorem-keeper',
  'gh-core-ss3-tangent-sentinel',
  'gh-core-ss3-compass-locus-architect'
]);
assert.ok(missions.every(item => item.quiz.length === 5 && item.scenes.some(scene => scene.type === 'sort')));
assert.ok(missions.every(item => item.sec === '3.3.1'));
console.log('ghanaCoreMathSS3Spatial.test.ts ok');

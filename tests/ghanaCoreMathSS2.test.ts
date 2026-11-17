import assert from 'node:assert/strict';
import {
  GHANA_NACCA_SS2_MATHEMATICS_SOURCE,
  GHANA_CORE_MATH_SS2_SCOPE,
  GHANA_CORE_MATH_SS2_REAL_NUMBER_ALIGNMENT,
  GHANA_CORE_MATH_SS2_SIMULTANEOUS_EQUATIONS_ALIGNMENT,
  GHANA_CORE_MATH_SS2_PATTERNS_ALIGNMENT,
  GHANA_CORE_MATH_SS2_PROPORTIONAL_ALIGNMENT,
  GHANA_CORE_MATH_SS2_SPATIAL_ALIGNMENT
} from '../src/data/ghanaCoreMathSS2Alignment';
import {
  GHANA_CORE_MATH_SS2_SUBJECT,
  GHANA_CORE_MATH_SS2_UNIT,
  GHANA_CORE_MATH_SS2_ARCS,
  GHANA_CORE_MATH_SS2_MISSIONS,
  GHANA_CORE_MATH_SS2_ALGEBRA_UNIT,
  GHANA_CORE_MATH_SS2_ALGEBRA_ARCS,
  GHANA_CORE_MATH_SS2_ALGEBRA_MISSIONS,
  GHANA_CORE_MATH_SS2_PATTERNS_UNIT,
  GHANA_CORE_MATH_SS2_PATTERNS_ARCS,
  GHANA_CORE_MATH_SS2_PATTERNS_MISSIONS,
  GHANA_CORE_MATH_SS2_PROPORTIONAL_UNIT,
  GHANA_CORE_MATH_SS2_PROPORTIONAL_ARCS,
  GHANA_CORE_MATH_SS2_PROPORTIONAL_MISSIONS,
  GHANA_CORE_MATH_SS2_SPATIAL_UNIT,
  GHANA_CORE_MATH_SS2_SPATIAL_ARCS,
  GHANA_CORE_MATH_SS2_SPATIAL_MISSIONS
} from '../src/data/ghanaCoreMathSS2Data';

assert.equal(GHANA_NACCA_SS2_MATHEMATICS_SOURCE.publicationDate, 'September 2023');
assert.equal(GHANA_NACCA_SS2_MATHEMATICS_SOURCE.publisher, 'National Council for Curriculum and Assessment (NaCCA), Ghana');
assert.equal(GHANA_CORE_MATH_SS2_SCOPE.totalLearningIndicators, 40);
assert.equal(GHANA_CORE_MATH_SS2_SCOPE.strands.reduce((sum, strand) => sum + strand.learningIndicators, 0), 40);
assert.equal(GHANA_CORE_MATH_SS2_REAL_NUMBER_ALIGNMENT.contentStandards.length, 3);
assert.equal(GHANA_CORE_MATH_SS2_REAL_NUMBER_ALIGNMENT.learningOutcomes.length, 3);
assert.equal(GHANA_CORE_MATH_SS2_REAL_NUMBER_ALIGNMENT.learningIndicators.length, 7);
assert.equal(GHANA_CORE_MATH_SS2_REAL_NUMBER_ALIGNMENT.learningIndicators[0].id, '2.1.1.LI.1');
assert.equal(GHANA_CORE_MATH_SS2_REAL_NUMBER_ALIGNMENT.learningIndicators[6].printedPage, 173);
assert.equal(GHANA_CORE_MATH_SS2_SUBJECT.id, 'ghcoremath2');
assert.equal(GHANA_CORE_MATH_SS2_UNIT.subject, 'ghcoremath2');
assert.equal(GHANA_CORE_MATH_SS2_ARCS.length, 1);
assert.equal(GHANA_CORE_MATH_SS2_MISSIONS.length, 1);
assert.equal(GHANA_CORE_MATH_SS2_MISSIONS[0].id, 'gh-core-ss2-surds-indices-modulo');
assert.equal(GHANA_CORE_MATH_SS2_MISSIONS[0].pages, 'NaCCA SHS 2 · pp. 166–173');
assert.equal(GHANA_CORE_MATH_SS2_MISSIONS[0].quiz.length, 5);
assert.equal(GHANA_CORE_MATH_SS2_SIMULTANEOUS_EQUATIONS_ALIGNMENT.contentStandards.length, 1);
assert.equal(GHANA_CORE_MATH_SS2_SIMULTANEOUS_EQUATIONS_ALIGNMENT.learningOutcomes.length, 2);
assert.equal(GHANA_CORE_MATH_SS2_SIMULTANEOUS_EQUATIONS_ALIGNMENT.learningIndicators.length, 3);
assert.deepEqual(GHANA_CORE_MATH_SS2_SIMULTANEOUS_EQUATIONS_ALIGNMENT.learningIndicators.map(item => item.printedPage), [193, 196, 198]);
assert.equal(GHANA_CORE_MATH_SS2_ALGEBRA_UNIT.subject, 'ghcoremath2');
assert.equal(GHANA_CORE_MATH_SS2_ALGEBRA_ARCS[0].pages, 'NaCCA SHS 2 · pp. 193–198');
assert.equal(GHANA_CORE_MATH_SS2_ALGEBRA_MISSIONS.length, 1);
assert.equal(GHANA_CORE_MATH_SS2_ALGEBRA_MISSIONS[0].id, 'gh-core-ss2-simultaneous-equations');
assert.equal(GHANA_CORE_MATH_SS2_ALGEBRA_MISSIONS[0].quiz.length, 5);
assert.ok(GHANA_CORE_MATH_SS2_ALGEBRA_MISSIONS[0].scenes.some(scene => scene.type === 'sort'));
assert.ok(GHANA_CORE_MATH_SS2_MISSIONS[0].scenes.some(scene => scene.type === 'sort'));
assert.equal(GHANA_CORE_MATH_SS2_PATTERNS_ALIGNMENT.learningOutcomes[0].id, '2.2.2.LO.1');
assert.equal(GHANA_CORE_MATH_SS2_PATTERNS_ALIGNMENT.coverage.length, 2);
assert.equal(GHANA_CORE_MATH_SS2_PATTERNS_UNIT.subject, 'ghcoremath2');
assert.equal(GHANA_CORE_MATH_SS2_PATTERNS_ARCS[0].pages, 'NaCCA SHS 2 · pp. 198–206');
assert.equal(GHANA_CORE_MATH_SS2_PATTERNS_MISSIONS.length, 2);
assert.deepEqual(GHANA_CORE_MATH_SS2_PATTERNS_MISSIONS.map(m => m.id), ['gh-core-ss2-sequences-progressions', 'gh-core-ss2-financial-exponential-models']);
assert.ok(GHANA_CORE_MATH_SS2_PATTERNS_MISSIONS.every(m => m.quiz.length === 5 && m.scenes.some(scene => scene.type === 'sort')));
console.log('ghanaCoreMathSS2.test.ts ok');

assert.equal(GHANA_CORE_MATH_SS2_PROPORTIONAL_ALIGNMENT.contentStandards.length, 2);
assert.equal(GHANA_CORE_MATH_SS2_PROPORTIONAL_ALIGNMENT.learningOutcomes.length, 2);
assert.equal(GHANA_CORE_MATH_SS2_PROPORTIONAL_ALIGNMENT.learningIndicators.length, 4);
assert.deepEqual(GHANA_CORE_MATH_SS2_PROPORTIONAL_ALIGNMENT.learningIndicators.map(item => item.printedPage), [182, 183, 185, 185]);
assert.equal(GHANA_CORE_MATH_SS2_PROPORTIONAL_ALIGNMENT.coverage.length, 2);
assert.equal(GHANA_CORE_MATH_SS2_PROPORTIONAL_UNIT.subject, 'ghcoremath2');
assert.equal(GHANA_CORE_MATH_SS2_PROPORTIONAL_ARCS[0].pages, 'NaCCA SHS 2 · pp. 182–185');
assert.deepEqual(GHANA_CORE_MATH_SS2_PROPORTIONAL_MISSIONS.map(m => m.id), [
  'gh-core-ss2-ratios-rates-proportions',
  'gh-core-ss2-proportional-real-world'
]);
assert.ok(GHANA_CORE_MATH_SS2_PROPORTIONAL_MISSIONS.every(m => m.quiz.length === 5 && m.scenes.some(scene => scene.type === 'sort')));
console.log('Ghana SHS 2 proportional reasoning coverage ok');



assert.equal(GHANA_CORE_MATH_SS2_SPATIAL_ALIGNMENT.strand, '3 · Geometry Around Us');
assert.equal(GHANA_CORE_MATH_SS2_SPATIAL_ALIGNMENT.subStrand, '1 · Spatial Sense');
assert.deepEqual(GHANA_CORE_MATH_SS2_SPATIAL_ALIGNMENT.printedPages, [213, 227]);
assert.equal(GHANA_CORE_MATH_SS2_SPATIAL_ALIGNMENT.contentStandards[0].id, '2.3.1.CS.1');
assert.equal(GHANA_CORE_MATH_SS2_SPATIAL_ALIGNMENT.learningOutcomes[0].id, '2.3.1.LO.1');
assert.deepEqual(
  GHANA_CORE_MATH_SS2_SPATIAL_ALIGNMENT.learningIndicators.map(item => item.id),
  ['2.3.1.LI.1', '2.3.1.LI.2', '2.3.1.LI.3', '2.3.1.LI.4']
);
assert.equal(GHANA_CORE_MATH_SS2_SPATIAL_ALIGNMENT.coverage.length, 2);
assert.equal(GHANA_CORE_MATH_SS2_SPATIAL_UNIT.subject, 'ghcoremath2');
assert.equal(GHANA_CORE_MATH_SS2_SPATIAL_ARCS[0].pages, 'NaCCA SHS 2 · pp. 213–227');
assert.deepEqual(GHANA_CORE_MATH_SS2_SPATIAL_MISSIONS.map(m => m.id), [
  'gh-core-ss2-transformations-vectors-reflections',
  'gh-core-ss2-rotations-successive-transformations'
]);
assert.ok(GHANA_CORE_MATH_SS2_SPATIAL_MISSIONS.every(m => m.quiz.length === 5 && m.scenes.some(scene => scene.type === 'sort')));
console.log('Ghana SHS 2 spatial sense coverage ok');

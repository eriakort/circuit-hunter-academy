import assert from 'node:assert/strict';
import {
  GHANA_NACCA_SS2_MATHEMATICS_SOURCE,
  GHANA_CORE_MATH_SS2_SCOPE,
  GHANA_CORE_MATH_SS2_REAL_NUMBER_ALIGNMENT
} from '../src/data/ghanaCoreMathSS2Alignment';
import {
  GHANA_CORE_MATH_SS2_SUBJECT,
  GHANA_CORE_MATH_SS2_UNIT,
  GHANA_CORE_MATH_SS2_ARCS,
  GHANA_CORE_MATH_SS2_MISSIONS
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
assert.ok(GHANA_CORE_MATH_SS2_MISSIONS[0].scenes.some(scene => scene.type === 'sort'));
console.log('ghanaCoreMathSS2.test.ts ok');

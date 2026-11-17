import assert from 'node:assert/strict';
import {
  GHANA_NACCA_SS3_MATHEMATICS_SOURCE,
  GHANA_CORE_MATH_SS3_SCOPE,
  GHANA_CORE_MATH_SS3_ALIGNMENT
} from '../src/data/ghanaCoreMathSS3Alignment';
import {
  GHANA_CORE_MATH_SS3_SUBJECT,
  GHANA_CORE_MATH_SS3_UNIT,
  GHANA_CORE_MATH_SS3_ARCS,
  GHANA_CORE_MATH_SS3_MISSIONS
} from '../src/data/ghanaCoreMathSS3Data';
import { getCurriculumSubjects } from '../src/data/curriculumSubjects';

assert.equal(GHANA_NACCA_SS3_MATHEMATICS_SOURCE.publicationDate, 'September 2023');
assert.equal(GHANA_CORE_MATH_SS3_SCOPE.strand, '1 · Numbers for Everyday Life');
assert.equal(GHANA_CORE_MATH_SS3_SCOPE.subStrand, '2 · Proportional Reasoning');
assert.deepEqual(GHANA_CORE_MATH_SS3_SCOPE.printedPages, [300, 309]);
assert.equal(GHANA_CORE_MATH_SS3_SCOPE.contentStandards, 2);
assert.equal(GHANA_CORE_MATH_SS3_SCOPE.learningOutcomes, 2);
assert.equal(GHANA_CORE_MATH_SS3_SCOPE.learningIndicators, 5);
assert.deepEqual(GHANA_CORE_MATH_SS3_ALIGNMENT.contentStandards.map(item => item.id), ['3.1.2.CS.1', '3.1.2.CS.2']);
assert.deepEqual(GHANA_CORE_MATH_SS3_ALIGNMENT.learningOutcomes.map(item => item.id), ['3.1.2.LO.1', '3.1.2.LO.2']);
assert.deepEqual(GHANA_CORE_MATH_SS3_ALIGNMENT.learningIndicators.map(item => item.id), [
  '3.1.2.LI.1', '3.1.2.LI.2', '3.1.2.LI.3', '3.1.2.LI.1', '3.1.2.LI.2'
]);
assert.deepEqual(GHANA_CORE_MATH_SS3_ALIGNMENT.learningIndicators.map(item => item.printedPage), [305, 305, 309, 308, 308]);
assert.equal(GHANA_CORE_MATH_SS3_ALIGNMENT.coverage.length, 2);
assert.equal(GHANA_CORE_MATH_SS3_SUBJECT.id, 'ghcoremath3');
assert.equal(GHANA_CORE_MATH_SS3_UNIT.subject, 'ghcoremath3');
assert.equal(GHANA_CORE_MATH_SS3_ARCS.length, 1);
assert.equal(GHANA_CORE_MATH_SS3_MISSIONS.length, 2);
assert.deepEqual(GHANA_CORE_MATH_SS3_MISSIONS.map(mission => mission.id), [
  'gh-core-ss3-logical-reasoning',
  'gh-core-ss3-variation'
]);
assert.ok(GHANA_CORE_MATH_SS3_MISSIONS.every(mission => mission.quiz.length === 5 && mission.scenes.some(scene => scene.type === 'sort')));
assert.ok(GHANA_CORE_MATH_SS3_MISSIONS.every(mission => mission.sec === '3.1.2'));
assert.ok(getCurriculumSubjects('grade11', 'ghana-nacca').some(subject => subject.id === 'ghcoremath3'));

import { GHANA_CORE_MATH_SS3_QUADRATICS_ALIGNMENT } from '../src/data/ghanaCoreMathSS3QuadraticsAlignment';
import { GHANA_CORE_MATH_SS3_QUADRATICS_MISSIONS } from '../src/data/ghanaCoreMathSS3QuadraticsData';
assert.equal(GHANA_CORE_MATH_SS3_QUADRATICS_ALIGNMENT.contentStandards[0].id, '3.2.2.CS.1');
assert.equal(GHANA_CORE_MATH_SS3_QUADRATICS_ALIGNMENT.learningOutcomes[0].id, '3.2.2.LO.1');
assert.deepEqual(GHANA_CORE_MATH_SS3_QUADRATICS_ALIGNMENT.learningIndicators.map(item => item.id), ['3.2.2.LI.1', '3.2.2.LI.2', '3.2.2.LI.3', '3.2.2.LI.4']);
assert.equal(GHANA_CORE_MATH_SS3_QUADRATICS_MISSIONS.length, 3);
assert.ok(GHANA_CORE_MATH_SS3_QUADRATICS_MISSIONS.every(mission => mission.quiz.length === 5));
\nconsole.log('ghanaCoreMathSS3.test.ts ok');

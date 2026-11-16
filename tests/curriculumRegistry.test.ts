import assert from 'node:assert/strict';
import { GRADE_SUBJECT_IDS } from '../src/data/gradeData';
import { getCurriculumSubjects } from '../src/data/curriculumSubjects';
import {
  COUNTRIES,
  DEFAULT_COUNTRY_CODE,
  DEFAULT_CURRICULUM_ID,
  getCountry,
  getCurriculum,
  getCurriculumGrade,
  getCurriculumPathway
} from '../src/data/curricula';

assert.equal(DEFAULT_COUNTRY_CODE, 'IT');
assert.equal(DEFAULT_CURRICULUM_ID, 'italy-national');
assert.deepEqual(COUNTRIES.map(country => country.code), ['IT', 'GH']);
assert.equal(new Set(COUNTRIES.map(country => country.code)).size, COUNTRIES.length);

const italy = getCountry('IT');
assert.ok(italy);
assert.equal(italy!.defaultCurriculumId, 'italy-national');
const italianCurriculum = getCurriculum('italy-national');
assert.ok(italianCurriculum);
assert.deepEqual(
  italianCurriculum!.gradeLevels.map(level => level.gradeId),
  ['grade5', 'grade9', 'grade10', 'grade11']
);
const italianPathway = getCurriculumPathway('italy-national', 'italy-standard');
assert.equal(italianPathway?.status, 'available');
for (const grade of italianCurriculum!.gradeLevels) {
  assert.deepEqual(
    italianPathway?.subjectIdsByGrade?.[grade.gradeId],
    GRADE_SUBJECT_IDS[grade.gradeId],
    `Italy ${grade.gradeId} must preserve the existing subject catalogue`
  );
}

const ghana = getCountry('GH');
assert.ok(ghana);
assert.equal(ghana!.defaultCurriculumId, 'ghana-nacca');
const ghanaCurriculum = getCurriculum('ghana-nacca');
assert.ok(ghanaCurriculum);
assert.equal(ghanaCurriculum!.authority, 'National Council for Curriculum and Assessment (NaCCA)');
assert.deepEqual(
  ghanaCurriculum!.gradeLevels.map(level => [level.gradeId, level.label]),
  [
    ['grade9', 'SHS 1 (SS1)'],
    ['grade10', 'SHS 2 (SS2)'],
    ['grade11', 'SHS 3 (SS3)']
  ]
);
assert.deepEqual(
  ghanaCurriculum!.pathways.map(pathway => pathway.id),
  ['ghana-core-mathematics', 'ghana-additional-mathematics']
);
assert.equal(ghanaCurriculum!.pathways.find(pathway => pathway.id === 'ghana-core-mathematics')?.status, 'available');
assert.equal(ghanaCurriculum!.pathways.find(pathway => pathway.id === 'ghana-additional-mathematics')?.status, 'planned');
assert.equal(getCurriculumGrade('ghana-nacca', 'grade10')?.label, 'SHS 2 (SS2)');
assert.equal(getCurriculumGrade('ghana-nacca', 'grade5'), undefined);
assert.equal(getCurriculumPathway('ghana-nacca', 'ghana-core-mathematics')?.name, 'Core Mathematics');
assert.equal(getCurriculumPathway('ghana-nacca', 'italy-standard'), undefined);
assert.deepEqual(getCurriculumSubjects('grade9', 'ghana-nacca').map(subject => subject.id), ['ghcoremath'], 'Ghana SS1 exposes only its own Core Mathematics pilot');
assert.deepEqual(getCurriculumSubjects('grade10', 'ghana-nacca'), [], 'Ghana SS2 remains unavailable until its own content is ready');
assert.deepEqual(getCurriculumSubjects('grade9', 'italy-national').map(subject => subject.id), GRADE_SUBJECT_IDS.grade9);
assert.equal(getCurriculum('unknown' as never), undefined);
assert.equal(getCountry('US' as never), undefined);

console.log('curriculumRegistry.test.ts ok');

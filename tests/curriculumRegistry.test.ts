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
    ['ghjhs1', 'JHS 1'],
    ['ghjhs2', 'JHS 2'],
    ['ghjhs3', 'JHS 3'],
    ['ghshs1', 'SHS 1'],
    ['ghshs2', 'SHS 2'],
    ['ghshs3', 'SHS 3']
  ]
);
assert.deepEqual(
  ghanaCurriculum!.pathways.map(pathway => pathway.id),
  ['ghana-core-mathematics', 'ghana-jhs-mathematics', 'ghana-jhs-science', 'ghana-computing', 'ghana-jhs-computing', 'ghana-shs-general-science', 'ghana-additional-mathematics']
);
assert.equal(ghanaCurriculum!.pathways.find(pathway => pathway.id === 'ghana-core-mathematics')?.status, 'available');
assert.equal(ghanaCurriculum!.pathways.find(pathway => pathway.id === 'ghana-additional-mathematics')?.status, 'planned');
assert.equal(getCurriculumGrade('ghana-nacca', 'ghshs2')?.label, 'SHS 2');
assert.equal(getCurriculumGrade('ghana-nacca', 'grade5'), undefined);
assert.equal(getCurriculumPathway('ghana-nacca', 'ghana-core-mathematics')?.name, 'Core Mathematics');
assert.equal(getCurriculumPathway('ghana-nacca', 'italy-standard'), undefined);
assert.deepEqual(getCurriculumSubjects('ghshs1', 'ghana-nacca').map(subject => subject.id), ['ghcoremath', 'ghcomputing'], 'Ghana SS1 exposes only its own Ghana subjects');
assert.deepEqual(getCurriculumSubjects('ghshs2', 'ghana-nacca').map(subject => subject.id), ['ghcoremath2', 'ghcomputing2'], 'Ghana SS2 exposes its own Ghana subjects');
assert.deepEqual(getCurriculumSubjects('ghshs3', 'ghana-nacca').map(subject => subject.id), ['ghcoremath3', 'ghcomputing3'], 'Ghana SS3 exposes its own Ghana subjects');
assert.deepEqual(getCurriculumSubjects('ghjhs1', 'ghana-nacca').map(subject => subject.id), ['ghjhs1math', 'ghjhs1science', 'ghjhs1computing'], 'Ghana JHS 1 exposes its own Mathematics, Science and provisional Computing pathways');
assert.deepEqual(getCurriculumSubjects('ghjhs2', 'ghana-nacca').map(subject => subject.id), ['ghjhs2math', 'ghjhs2science'], 'Ghana JHS 2 exposes its own Mathematics and Science pathways');
assert.equal(getCurriculumPathway('ghana-nacca', 'ghana-jhs-science')?.status, 'available');
for (const grade of italianCurriculum!.gradeLevels) {
  const registeredIds = getCurriculumSubjects(grade.gradeId, 'italy-national').map(subject => subject.id);
  assert.deepEqual(
    registeredIds,
    GRADE_SUBJECT_IDS[grade.gradeId],
    `The picker and selection guard must share one subject registry for ${grade.gradeId}`
  );
}
assert.deepEqual(getCurriculumSubjects('grade9', 'italy-national').map(subject => subject.id), GRADE_SUBJECT_IDS.grade9);
assert.equal(getCurriculum('unknown' as never), undefined);
assert.equal(getCountry('US' as never), undefined);

console.log('curriculumRegistry.test.ts ok');

import assert from 'node:assert/strict';
import { getCurriculumContentLanguage } from '../src/data/curriculumLanguage';

assert.equal(getCurriculumContentLanguage('ghana-nacca', 'en'), 'en');
assert.equal(getCurriculumContentLanguage('ghana-nacca', 'it'), 'en', 'Ghana curriculum must remain English even when Italian was previously selected');
assert.equal(getCurriculumContentLanguage('italy-national', 'en'), 'en');
assert.equal(getCurriculumContentLanguage('italy-national', 'it'), 'it');
console.log('curriculumLanguage.test.ts ok!');

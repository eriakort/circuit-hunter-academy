import assert from 'node:assert/strict';
import { getCurriculumGradeLevel } from '../src/data/curricula';
import { GRADES } from '../src/data/gradeData';

// Ghana reuses grade9–11 internally, but must present its own SHS level labels and ages.
for (const [gradeId, n] of [['grade9', 1], ['grade10', 2], ['grade11', 3]] as const) {
  const level = getCurriculumGradeLevel('ghana-nacca', gradeId);
  assert.ok(level, `Ghana defines ${gradeId}`);
  assert.equal(level.shortLabel, `SHS ${n}`);
  assert.equal(level.badge, String(n));
  assert.equal(level.kicker, `Senior High School · Year ${n}`);
  assert.match(level.ageRange ?? '', new RegExp(`ages ${14 + n}–${15 + n}`));
}
assert.equal(getCurriculumGradeLevel('ghana-nacca', 'grade5'), undefined, 'Ghana has no Grade 5 level');
assert.equal(getCurriculumGradeLevel('italy-national', 'grade9')?.shortLabel, undefined, 'Italy keeps its numeric grades');
assert.ok(GRADES.every(grade => grade.status === 'ready'), 'All Italian grades with content are ready');

console.log('curriculumLevels.test.ts ok!');

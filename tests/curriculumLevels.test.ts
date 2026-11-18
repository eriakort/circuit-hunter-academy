import assert from 'node:assert/strict';
import { getCurriculumGradeLevel } from '../src/data/curricula';
import { GRADES } from '../src/data/gradeData';

// Ghana has dedicated JHS 1–3 and SHS 1–3 IDs with stage-specific labels and ages.
for (const [gradeId, stage, n, age] of [
  ['ghjhs1', 'Junior', 1, 'ages 12–13'],
  ['ghjhs2', 'Junior', 2, 'ages 13–14'],
  ['ghjhs3', 'Junior', 3, 'ages 14–15'],
  ['ghshs1', 'Senior', 1, 'ages 15–16'],
  ['ghshs2', 'Senior', 2, 'ages 16–17'],
  ['ghshs3', 'Senior', 3, 'ages 17–18']
] as const) {
  const level = getCurriculumGradeLevel('ghana-nacca', gradeId);
  assert.ok(level, `Ghana defines ${gradeId}`);
  assert.equal(level.shortLabel, `${stage === 'Junior' ? 'JHS' : 'SHS'} ${n}`);
  assert.equal(level.badge, String(n));
  assert.equal(level.kicker, `${stage === 'Junior' ? 'Junior' : 'Senior'} High School · Year ${n}`);
  assert.ok(level.ageRange?.includes(age));
}
assert.equal(getCurriculumGradeLevel('ghana-nacca', 'grade5'), undefined, 'Ghana has no Italian Grade 5 level');
assert.equal(getCurriculumGradeLevel('italy-national', 'grade9')?.shortLabel, undefined, 'Italy keeps its numeric grades');
assert.ok(GRADES.every(grade => grade.status === 'ready'), 'All Italian grades with content are ready');

console.log('curriculumLevels.test.ts ok!');

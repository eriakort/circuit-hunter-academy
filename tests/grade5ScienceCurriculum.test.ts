import assert from 'node:assert/strict';
import { ARCS, MISSIONS, SUBJECTS, UNITS } from '../src/data/gameData';
import { GRADE_CURRICULUM_MAP, getCurriculumSubjects } from '../src/data/curriculumSubjects';

const isBilingualPair = (value: unknown): value is [string, string] =>
  Array.isArray(value) &&
  value.length === 2 &&
  value.every(part => typeof part === 'string' && part.trim().length > 0);

const scienceSubject = SUBJECTS.find(subject => subject.id === 'science');
assert.ok(scienceSubject, 'Grade 5 Science & Technology must be registered');
assert.ok(isBilingualPair(scienceSubject.name), 'Science subject name must be bilingual');
assert.ok(isBilingualPair(scienceSubject.blurb), 'Science subject description must be bilingual');
assert.ok(isBilingualPair(scienceSubject.meta), 'Science subject metadata must be bilingual');
assert.ok(scienceSubject.meta[0].includes('Self-Assessment & Workbook'), 'English subject metadata must list the fifth review/workbook unit');
assert.ok(scienceSubject.meta[1].includes('Autovalutazione e quaderno operativo'), 'Italian subject metadata must list the fifth review/workbook unit');

// Grade 5 is a primary-school curriculum: it must not inherit Grade 9 Physics.
assert.deepEqual(GRADE_CURRICULUM_MAP.grade5, ['science', 'italian']);
assert.deepEqual(
  getCurriculumSubjects('grade5').map(subject => subject.id).sort(),
  ['italian', 'science']
);
assert.ok(!getCurriculumSubjects('grade9').some(subject => subject.id === 'science'));
assert.ok(getCurriculumSubjects('grade9').some(subject => subject.id === 'phys'));

const scienceUnits = UNITS.filter(unit => unit.subject === 'science');
const scienceArcIndexes = ARCS.reduce<number[]>((indexes, arc, index) => {
  if (arc.subject === 'science') indexes.push(index);
  return indexes;
}, []);
const scienceArcIndexSet = new Set(scienceArcIndexes);
const scienceArcs = scienceArcIndexes.map(index => ARCS[index]);
const scienceMissions = MISSIONS.filter(mission => scienceArcIndexSet.has(mission.arc));

assert.equal(scienceUnits.length, 5, 'Grade 5 Science must retain its five learning units');
assert.equal(scienceArcs.length, 5, 'Each Grade 5 Science unit must have a curriculum arc');
assert.equal(
  scienceMissions.length,
  51,
  'Grade 5 Science must retain all 51 foundation, unit, and review missions'
);

for (const [index, unit] of scienceUnits.entries()) {
  assert.ok(isBilingualPair(unit.title), `Science unit ${index + 1} must have a bilingual title`);
}

for (const [index, arc] of scienceArcs.entries()) {
  assert.ok(isBilingualPair(arc.title), `Science arc ${index + 1} must have a bilingual title`);
  assert.ok(typeof arc.pages === 'string' && arc.pages.trim(), `Science arc ${index + 1} must identify its textbook pages`);
  assert.equal(
    UNITS[arc.unit]?.subject,
    'science',
    `Science arc ${index + 1} must reference a Science unit, not another subject`
  );
}

const missionIds = scienceMissions.map(mission => mission.id);
assert.equal(new Set(missionIds).size, scienceMissions.length, 'Grade 5 Science mission IDs must be unique');

for (const mission of scienceMissions) {
  assert.ok(isBilingualPair(mission.title), `Mission ${mission.id} must have a bilingual title`);
  assert.ok(isBilingualPair(mission.topic), `Mission ${mission.id} must have a bilingual topic`);
  assert.ok(
    scienceArcIndexSet.has(mission.arc),
    `Mission ${mission.id} must belong to a Grade 5 Science arc`
  );
}

// Protect the textbook topics explicitly supplied for the Universe unit.
const requiredUniverseMissionIds = [
  'g5u-sky',
  'g5u-big-bang',
  'g5u-solar-system',
  'g5u-earth-movements',
  'g5u-moon',
  'g5u-eclipses',
  'g5u-gravity',
  'g5u-constellations',
  'g5u-space-exploration',
  'g5u-foucault',
  'g5u-review'
];
for (const id of requiredUniverseMissionIds) {
  assert.ok(missionIds.includes(id), `Grade 5 Science is missing required Universe mission: ${id}`);
}

console.log(
  'grade5ScienceCurriculum.test.ts ok! Validated 5 units, 5 arcs, and',
  scienceMissions.length,
  'Grade 5 Science missions.'
);

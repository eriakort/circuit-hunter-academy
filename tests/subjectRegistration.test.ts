import assert from 'node:assert/strict';
import { ARCS, SUBJECTS, UNITS } from '../src/data/gameData';
import { COUNTRIES } from '../src/data/curricula';
import { getCurriculumSubjects } from '../src/data/curriculumSubjects';
import { sanitizeGameState } from '../src/persistence';

// Every subject a learner can choose must be registered in SUBJECTS. Screens look the
// current subject up there, and a missing entry made them show Computer Science
// (SUBJECTS[0]) instead of, for example, Ghana JHS 1 Science.
const registered = new Set(SUBJECTS.map(subject => subject.id));
let checked = 0;

for (const country of COUNTRIES) {
  for (const curriculum of country.curricula) {
    for (const level of curriculum.gradeLevels) {
      const offered = getCurriculumSubjects(level.gradeId, curriculum.id as 'italy-national' | 'ghana-nacca').map(subject => subject.id);
      const allowed = [...new Set(curriculum.pathways
        .filter(pathway => pathway.status === 'available')
        .flatMap(pathway => pathway.subjectIdsByGrade?.[level.gradeId] ?? []))];

      for (const id of offered) {
        assert.ok(registered.has(id), `${curriculum.id} ${level.gradeId}: subject ${id} is offered but not in SUBJECTS`);
        // The saved-game registry must allow every offered subject, or a reload switches subject.
        assert.ok(allowed.includes(id), `${curriculum.id} ${level.gradeId}: subject ${id} is offered but not allowed by its pathway`);
        const restored = sanitizeGameState({ grade: level.gradeId, subject: id }, curriculum.id);
        assert.equal(restored.subject, id, `${curriculum.id} ${level.gradeId}: ${id} survives a reload`);
        checked += 1;
      }
      for (const id of allowed) assert.ok(offered.includes(id), `${curriculum.id} ${level.gradeId}: pathway allows ${id} but the subject picker does not offer it`);
    }
  }
}

// Every subject that has content is registered.
for (const subjectId of new Set([...UNITS, ...ARCS].map(item => item.subject).filter(Boolean))) {
  assert.ok(registered.has(subjectId!), `Subject ${subjectId} has content but is not in SUBJECTS`);
}

console.log(`subjectRegistration.test.ts ok! ${checked} grade/subject pairs are registered and survive a reload.`);

import assert from 'node:assert/strict';
import { ARCS, MISSIONS, UNITS } from '../src/data/gameData';
import { getCurriculumSubjects } from '../src/data/curriculumSubjects';

const GRADES = [
  { grade: 'JHS 1', subjectId: 'ghjhs1science', missionCount: 21 },
  { grade: 'JHS 2', subjectId: 'ghjhs2science', missionCount: 22 },
  { grade: 'JHS 3', subjectId: 'ghjhs3science', missionCount: 25 }
] as const;

const expectedStrands = [
  'Diversity of Matter',
  'Cycles',
  'Systems',
  'Forces and Energy',
  'Humans and the Environment'
];

const scienceMissionIds = new Set<string>();

for (const { grade, subjectId, missionCount } of GRADES) {
  const curriculumGrade = grade.toLowerCase().replace(' ', '');
  const subject = getCurriculumSubjects(curriculumGrade, 'ghana-nacca')
    .find(candidate => candidate.id === subjectId);

  assert.ok(subject, `${grade} Science is selectable in the Ghana NaCCA curriculum`);
  assert.match(
    String(subject.meta),
    new RegExp(`\\b${missionCount} missions\\b`),
    `${grade} Science subject metadata reports the registered mission count`
  );

  const units = UNITS
    .map((unit, index) => ({ unit, index }))
    .filter(({ unit }) => unit.subject === subjectId);

  assert.equal(units.length, 5, `${grade} Science registers all five NaCCA strands`);
  assert.deepEqual(
    units.map(({ unit }) => unit.title),
    expectedStrands,
    `${grade} Science strand names and order match the NaCCA structure`
  );

  const arcs = ARCS
    .map((arc, index) => ({ arc, index }))
    .filter(({ arc }) => arc.subject === subjectId);

  const missions = MISSIONS.filter(mission => ARCS[mission.arc]?.subject === subjectId);
  assert.equal(missions.length, missionCount, `${grade} Science mission count`);

  for (const { unit, index: unitIndex } of units) {
    const strandArcs = arcs.filter(({ arc }) => arc.unit === unitIndex);
    assert.ok(strandArcs.length > 0, `${grade} ${unit.title} has at least one learning arc`);

    const strandMissions = missions.filter(mission => ARCS[mission.arc]?.unit === unitIndex);
    assert.ok(strandMissions.length > 0, `${grade} ${unit.title} has at least one mission`);

    for (const { arc, index: arcIndex } of strandArcs) {
      assert.ok(
        missions.some(mission => mission.arc === arcIndex),
        `${grade} ${unit.title} arc "${arc.title}" has a mission`
      );
      assert.ok(
        typeof arc.pages === 'string' && /B[789]\./.test(arc.pages),
        `${grade} ${unit.title} arc "${arc.title}" includes a NaCCA indicator reference`
      );
    }

    for (const mission of strandMissions) {
      assert.ok(!scienceMissionIds.has(mission.id), `Science mission ID "${mission.id}" is globally unique`);
      scienceMissionIds.add(mission.id);
      assert.equal(UNITS[ARCS[mission.arc].unit as number]?.subject, subjectId);
      assert.ok(mission.scenes.length >= 5, `${mission.id} includes teaching and challenge scenes`);
      assert.equal(mission.quiz.length, 5, `${mission.id} has five assessment questions`);

      for (const [questionIndex, question] of mission.quiz.entries()) {
        assert.ok(question.q.trim(), `${mission.id} question ${questionIndex + 1} has a prompt`);
        assert.ok(question.why.trim(), `${mission.id} question ${questionIndex + 1} has feedback`);
        assert.ok(question.a.length >= 2, `${mission.id} question ${questionIndex + 1} has answer choices`);
        assert.ok(question.a.every(answer => typeof answer === 'string' && answer.trim()), `${mission.id} question ${questionIndex + 1} has non-empty choices`);
      }
    }
  }

  console.log(
    `${grade}: ${units.length} strands, ${arcs.length} arcs, ${missions.length} missions — ${units.map(({ unit, index }) => {
      const count = missions.filter(mission => ARCS[mission.arc]?.unit === index).length;
      return `${unit.title}: ${count}`;
    }).join('; ')}`
  );
}

console.log('ghanaJhsScienceCoverageAudit.test.ts ok! JHS 1–3 Science registration and learning-content integrity verified.');

import assert from 'node:assert/strict';
import { ARCS, CODEX, MISSIONS, SUBJECTS, UNITS } from '../src/data/gameData';
import { GRADE_CURRICULUM_MAP, getCurriculumSubjects } from '../src/data/curriculumSubjects';
import { GRADE_SUBJECT_IDS, GRADES } from '../src/data/gradeData';
import { FORMULA_CARDS, SUBJECT_TOPICS } from '../src/data/formulaData';
import { CHEM_VISUAL_KEYS, getChemVisual } from '../src/data/chemVisuals';
import { hasChemistryLab } from '../src/components/ChemistryLab';
import { getVisualHtml } from '../src/data/visuals';
import { CHEM_CODEX } from '../src/data/chemCodex';
import { getCategories } from '../src/data/questionBank';
import { restoreSavedNavigation, sanitizeGameState } from '../src/persistence';
import type { GradeId, SubjectId } from '../src/types';

const isBilingualPair = (value: unknown): value is [string, string] =>
  Array.isArray(value) &&
  value.length === 2 &&
  value.every(part => typeof part === 'string' && part.trim().length > 0);

// --- Registration: Each Chemistry level is mapped strictly to its school grade.
const gradeExpectations: Array<{
  grade: GradeId;
  subjectId: SubjectId;
  missionPrefix: string;
  formulaCount: number;
  codexCount: number;
}> = [
  { grade: 'grade9', subjectId: 'chem', missionPrefix: 'chem_l1_', formulaCount: 4, codexCount: 16 },
  { grade: 'grade10', subjectId: 'chem10', missionPrefix: 'chem_l2_', formulaCount: 3, codexCount: 16 },
  { grade: 'grade11', subjectId: 'chem11', missionPrefix: 'chem_l3_', formulaCount: 3, codexCount: 16 }
];

assert.ok(GRADES.some(g => g.id === 'grade10' && g.status === 'ready'), 'Grade 10 must be ready');
assert.ok(GRADES.some(g => g.id === 'grade11' && g.status === 'ready'), 'Grade 11 must be ready');

for (const { grade, subjectId } of gradeExpectations) {
  const subject = SUBJECTS.find(item => item.id === subjectId);
  assert.ok(subject, `${subjectId} must be registered in SUBJECTS`);
  assert.ok(isBilingualPair(subject.name) && isBilingualPair(subject.blurb) && isBilingualPair(subject.meta));

  assert.ok(GRADE_CURRICULUM_MAP[grade].includes(subjectId), `${grade} curriculum map must include ${subjectId}`);
  assert.ok(GRADE_SUBJECT_IDS[grade].includes(subjectId), `${grade} subject IDs must include ${subjectId}`);
  assert.ok(getCurriculumSubjects(grade).some(item => item.id === subjectId));

  for (const otherGrade of ['grade5', 'grade9', 'grade10', 'grade11'] as GradeId[]) {
    if (otherGrade === grade) continue;
    assert.ok(!GRADE_CURRICULUM_MAP[otherGrade].includes(subjectId), `${otherGrade} must exclude ${subjectId}`);
    assert.ok(!GRADE_SUBJECT_IDS[otherGrade].includes(subjectId), `${otherGrade} subject IDs must exclude ${subjectId}`);
    assert.ok(!getCurriculumSubjects(otherGrade).some(item => item.id === subjectId));
  }
}

// --- Structure & Content across all 3 grades (3 units, 9 arcs, 27 missions, 108 questions).
const allChemArcIndexes = ARCS.flatMap((arc, index) =>
  arc.subject === 'chem' || arc.subject === 'chem10' || arc.subject === 'chem11' ? [index] : []
);
const allChemArcSet = new Set(allChemArcIndexes);
const allChemMissions = MISSIONS.filter(mission => allChemArcSet.has(mission.arc));

assert.equal(allChemMissions.length, 27, 'Complete Chemistry across Grades 9–11 has 27 missions');
assert.equal(new Set(allChemMissions.map(m => m.id)).size, allChemMissions.length, 'Chemistry mission IDs must be unique');
assert.equal(new Set(MISSIONS.map(m => m.id)).size, MISSIONS.length, 'All mission IDs must be globally unique');

const visualKeys = new Set<string>(CHEM_VISUAL_KEYS);
let totalQuestions = 0;

for (const { grade, subjectId, missionPrefix, formulaCount, codexCount } of gradeExpectations) {
  const units = UNITS.filter(unit => unit.subject === subjectId);
  const arcIndexes = ARCS.flatMap((arc, index) => (arc.subject === subjectId ? [index] : []));
  const arcSet = new Set(arcIndexes);
  const missions = MISSIONS.filter(mission => arcSet.has(mission.arc));

  assert.equal(units.length, 1, `${grade} (${subjectId}) must have 1 dedicated Chemistry unit`);
  assert.equal(arcIndexes.length, 3, `${grade} (${subjectId}) must have 3 Chemistry chapters`);
  for (const arcIndex of arcIndexes) {
    assert.equal(UNITS[ARCS[arcIndex].unit as number]?.subject, subjectId, `Arc ${arcIndex} must point to ${subjectId} unit`);
  }
  assert.equal(missions.length, 9, `${grade} (${subjectId}) must have 9 missions`);
  for (let i = 1; i <= 9; i++) {
    assert.ok(missions.some(m => m.id === `${missionPrefix}m${i}`), `Missing ${subjectId} mission ${missionPrefix}m${i}`);
  }

  let gradeQuestions = 0;
  for (const mission of missions) {
    assert.ok(mission.id.startsWith(missionPrefix), `${mission.id} must use ${missionPrefix} prefix`);
    for (const field of ['title', 'topic', 'demon', 'tech'] as const) {
      assert.ok(isBilingualPair(mission[field]), `${mission.id}.${field} must be bilingual`);
    }
    assert.ok(hasChemistryLab(mission.id), `${mission.id} must have an interactive ChemistryLab simulation`);
    const teaching = mission.scenes.filter(scene => scene.text !== undefined);
    assert.ok(teaching.length >= 3, `${mission.id} needs >= 3 teaching scenes`);
    for (const scene of teaching) {
      assert.ok(isBilingualPair(scene.text), `${mission.id} dialogue must be bilingual`);
      assert.notEqual(scene.text[0], scene.text[1], `${mission.id} dialogue must be translated`);
      if (scene.who === 's') {
        assert.ok(scene.vis && visualKeys.has(scene.vis), `${mission.id} teaching scene must have a valid Chemistry visual (${scene.vis})`);
      }
      if (scene.vis && scene.vis !== 'demon') {
        assert.ok(visualKeys.has(scene.vis), `${mission.id} uses unknown visual ${scene.vis}`);
      }
    }
    assert.equal(mission.scenes.at(-1)?.type, 'battle', `${mission.id} must end with battle`);
    assert.equal(mission.quiz.length, 4, `${mission.id} must have 4 quiz questions`);

    for (const [qi, question] of mission.quiz.entries()) {
      gradeQuestions += 1;
      totalQuestions += 1;
      const label = `${mission.id} Q${qi + 1}`;
      assert.ok(isBilingualPair(question.q) && isBilingualPair(question.why), `${label} must be bilingual`);
      assert.notEqual(question.q[0], question.q[1], `${label} question must be translated`);
      assert.equal(question.a.length, 4, `${label} must have 4 answer options`);

      for (const lang of [0, 1] as const) {
        const opts = question.a.map(option => {
          assert.ok(isBilingualPair(option), `${label} option must be bilingual`);
          return option[lang].trim().toLowerCase();
        });
        assert.equal(new Set(opts).size, 4, `${label} options must be distinct (${lang ? 'IT' : 'EN'})`);
      }

      const italianText = [question.q[1], question.why[1], ...question.a.map(option => option[1])].join(' ');
      assert.ok(!/\d\.\d/.test(italianText), `${label} Italian text must use decimal commas, not dots`);
    }
  }

  assert.equal(gradeQuestions, 36, `${grade} (${subjectId}) must have 36 quiz questions`);
  assert.equal(SUBJECT_TOPICS[subjectId].length, formulaCount, `${subjectId} must have ${formulaCount} formula topics`);
  assert.equal(FORMULA_CARDS.filter(card => card.subject === subjectId).length, formulaCount, `${subjectId} must have ${formulaCount} formula cards`);

  const missionIds = new Set(missions.map(m => m.id));
  const subjectCodex = CHEM_CODEX.filter(entry => missionIds.has(String(entry[0])));
  assert.equal(subjectCodex.length, codexCount, `${subjectId} must have ${codexCount} Codex entries`);

  const categories = getCategories(subjectId);
  assert.equal(categories[0]?.count, gradeQuestions, `Question bank must expose all ${gradeQuestions} questions for ${subjectId}`);
}

assert.equal(allChemMissions.find(m => m.id === 'chem_l3_m9')?.boss, true, 'Final Chemistry mission chem_l3_m9 must be a boss mission');
assert.equal(totalQuestions, 108, 'Complete Chemistry across Grades 9–11 must have 108 quiz questions');
assert.equal(CHEM_CODEX.length, 48, 'Total Chemistry Codex across Grades 9–11 has 48 entries');
for (const entry of CHEM_CODEX) {
  assert.ok(CODEX.includes(entry), 'CHEM_CODEX entries must be included in CODEX');
}

// --- Every Chemistry visual renders in both EN and IT via getChemVisual and getVisualHtml.
assert.equal(CHEM_VISUAL_KEYS.length, 36, 'Chemistry has 36 SVG visuals across Grades 9–11');
for (const key of CHEM_VISUAL_KEYS) {
  for (const lang of ['en', 'it'] as const) {
    const direct = getChemVisual(key, lang);
    const routed = getVisualHtml(key, lang);
    assert.ok(direct && direct.length > 50, `Visual ${key} must render in ${lang}`);
    assert.equal(routed, direct, `getVisualHtml(${key}, ${lang}) must delegate to getChemVisual`);
    assert.ok(!direct.includes('undefined') && !/\bNaN\b/.test(direct), `Visual ${key} must not contain undefined/NaN`);
  }
}

// --- Cross-grade persistence & navigation isolation.
const savedG9 = sanitizeGameState({ grade: 'grade9', subject: 'chem', cleared: { chem_l1_m1: true } });
assert.equal(savedG9.subject, 'chem');
assert.equal(savedG9.unit, UNITS.findIndex(unit => unit.subject === 'chem'));

const savedG10 = sanitizeGameState({ grade: 'grade10', subject: 'chem10', cleared: { chem_l2_m9: true } });
assert.equal(savedG10.subject, 'chem10');
assert.equal(savedG10.unit, UNITS.findIndex(unit => unit.subject === 'chem10'));

const savedG11 = sanitizeGameState({ grade: 'grade11', subject: 'chem11', cleared: { chem_l3_m9: true } });
assert.equal(savedG11.subject, 'chem11');
assert.equal(savedG11.unit, UNITS.findIndex(unit => unit.subject === 'chem11'));

assert.notEqual(sanitizeGameState({ grade: 'grade5', subject: 'chem' }).subject, 'chem');
assert.notEqual(sanitizeGameState({ grade: 'grade9', subject: 'chem10' }).subject, 'chem10');
assert.notEqual(sanitizeGameState({ grade: 'grade10', subject: 'chem' }).subject, 'chem');
assert.notEqual(sanitizeGameState({ grade: 'grade10', subject: 'chem11' }).subject, 'chem11');
assert.notEqual(sanitizeGameState({ grade: 'grade11', subject: 'chem10' }).subject, 'chem10');

const navG10 = restoreSavedNavigation(
  { view: 'map', grade: 'grade10', subject: 'chem10', missionId: 'chem_l2_m5', currentSceneIndex: 0 },
  savedG10
);
assert.equal(navG10?.subject, 'chem10');
assert.equal(navG10?.missionId, 'chem_l2_m5');

const navG11 = restoreSavedNavigation(
  { view: 'map', grade: 'grade11', subject: 'chem11', missionId: 'chem_l3_m5', currentSceneIndex: 0 },
  savedG11
);
assert.equal(navG11?.subject, 'chem11');
assert.equal(navG11?.missionId, 'chem_l3_m5');

console.log(`chemCurriculum.test.ts ok! 3 grades (9/10/11), 3 units, 9 arcs, ${allChemMissions.length} missions, ${totalQuestions} bilingual questions.`);

import assert from 'node:assert/strict';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { ARCS, CODEX, MISSIONS, SUBJECTS, UNITS } from '../src/data/gameData';
import { GRADE_CURRICULUM_MAP, getCurriculumSubjects } from '../src/data/curriculumSubjects';
import { GRADE_SUBJECT_IDS } from '../src/data/gradeData';
import { FORMULA_CARDS, SUBJECT_TOPICS } from '../src/data/formulaData';
import { MATH_ADV_VISUAL_KEYS, getMathAdvVisual } from '../src/data/mathAdvVisuals';
import { MATH_ADV_LAB_META, MathAdvancedLab } from '../src/components/MathAdvancedLab';
import { getVisualHtml } from '../src/data/visuals';
import { getCategories } from '../src/data/questionBank';
import { restoreSavedNavigation, sanitizeGameState } from '../src/persistence';
import type { GradeId, SubjectId } from '../src/types';

const isBilingualPair = (value: unknown): value is [string, string] =>
  Array.isArray(value) &&
  value.length === 2 &&
  value.every(part => typeof part === 'string' && part.trim().length > 0);

interface MathAdvSpec {
  grade: GradeId;
  subjectId: SubjectId;
  missionPrefix: string;
  missionCount: number;
  arcCount: number;
  formulaCount: number;
  minCodexCount: number;
}

const SPECS: MathAdvSpec[] = [
  { grade: 'grade10', subjectId: 'math10', missionPrefix: 'math_l2_', missionCount: 9, arcCount: 3, formulaCount: 5, minCodexCount: 9 },
  { grade: 'grade11', subjectId: 'math11', missionPrefix: 'math_l3_', missionCount: 9, arcCount: 3, formulaCount: 5, minCodexCount: 9 }
];

// 1. Grade isolation & subject registration
for (const { grade, subjectId } of SPECS) {
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

// 2. Structure, Bilingual Quality, Visuals, Interactive Labs, Formulas & Codex
const visualKeys = new Set<string>(MATH_ADV_VISUAL_KEYS);
assert.equal(visualKeys.size, 18, 'Expected 18 unique Math L2/L3 SVG visual keys');

const allAdvMissions = MISSIONS.filter(m => m.id.startsWith('math_l2_') || m.id.startsWith('math_l3_'));
assert.equal(allAdvMissions.length, 18, 'Total Grade 10 + Grade 11 math missions must be 18');
assert.equal(new Set(allAdvMissions.map(m => m.id)).size, 18, 'All Grade 10/11 math mission IDs must be unique');
assert.equal(new Set(MISSIONS.map(m => m.id)).size, MISSIONS.length, 'Global mission IDs must be unique');

let totalQuestions = 0;

for (const spec of SPECS) {
  const { grade, subjectId, missionPrefix, missionCount, arcCount, formulaCount, minCodexCount } = spec;
  const units = UNITS.filter(u => u.subject === subjectId);
  const arcIndexes = ARCS.flatMap((arc, idx) => (arc.subject === subjectId ? [idx] : []));
  const arcSet = new Set(arcIndexes);
  const missions = MISSIONS.filter(m => arcSet.has(m.arc));

  assert.equal(units.length, 1, `${grade} (${subjectId}) must have 1 dedicated unit`);
  assert.equal(arcIndexes.length, arcCount, `${grade} (${subjectId}) must have ${arcCount} arcs`);
  for (const arcIndex of arcIndexes) {
    assert.equal(UNITS[ARCS[arcIndex].unit as number]?.subject, subjectId, `Arc ${arcIndex} must reference ${subjectId} unit`);
  }
  assert.equal(missions.length, missionCount, `${grade} (${subjectId}) must have ${missionCount} missions`);

  for (let i = 1; i <= missionCount; i++) {
    const id = `${missionPrefix}m${i}`;
    assert.ok(missions.some(m => m.id === id), `Missing mission ${id}`);
  }
  assert.equal(missions.find(m => m.id === `${missionPrefix}m${missionCount}`)?.boss, true, `${missionPrefix}m${missionCount} must be marked boss: true`);

  let subjectQuestions = 0;
  for (const mission of missions) {
    for (const field of ['title', 'topic', 'demon', 'tech'] as const) {
      assert.ok(isBilingualPair(mission[field]), `${mission.id}.${field} must be bilingual`);
    }

    assert.ok(MATH_ADV_LAB_META[mission.id], `${mission.id} must register an interactive MathAdvancedLab`);
    for (const lang of ['en', 'it'] as const) {
      const markup = renderToStaticMarkup(React.createElement(MathAdvancedLab, { missionId: mission.id, lang }));
      assert.ok(markup.includes('<svg'), `MathAdvancedLab ${mission.id} (${lang}) must render an SVG`);
      assert.ok(!/\bundefined\b/.test(markup) && !/\bNaN\b/.test(markup), `MathAdvancedLab ${mission.id} (${lang}) contains undefined/NaN`);
    }

    const teaching = mission.scenes.filter(s => s.text !== undefined);
    assert.ok(teaching.length >= 4, `${mission.id} must have >= 3 lesson scenes + 1 demon taunt`);
    for (const scene of teaching) {
      assert.ok(isBilingualPair(scene.text), `${mission.id} scene text must be bilingual`);
      assert.notEqual(scene.text[0], scene.text[1], `${mission.id} scene text must be translated`);
      if (scene.who === 's') {
        assert.ok(scene.vis && visualKeys.has(scene.vis), `${mission.id} Sensei scene must reference a valid visual (${scene.vis})`);
      }
    }
    assert.ok(mission.scenes.some(s => s.type === 'sort'), `${mission.id} must include an interactive sort scene`);
    assert.equal(mission.scenes.at(-1)?.type, 'battle', `${mission.id} must end with battle scene`);
    assert.equal(mission.quiz.length, 5, `${mission.id} must have 5 quiz questions`);

    for (const [qi, question] of mission.quiz.entries()) {
      subjectQuestions += 1;
      totalQuestions += 1;
      const label = `${mission.id} Q${qi + 1}`;
      assert.ok(isBilingualPair(question.q) && isBilingualPair(question.why), `${label} must be bilingual`);
      assert.notEqual(question.q[0], question.q[1], `${label} prompt must be translated`);
      assert.equal(question.a.length, 4, `${label} must have 4 options`);
      for (const langIdx of [0, 1] as const) {
        const opts = question.a.map(opt => {
          assert.ok(isBilingualPair(opt), `${label} option must be bilingual`);
          return opt[langIdx].trim().toLowerCase();
        });
        assert.equal(new Set(opts).size, 4, `${label} options must be distinct (${langIdx ? 'IT' : 'EN'})`);
      }
    }
  }

  assert.equal(subjectQuestions, missionCount * 5, `${subjectId} question count mismatch`);
  assert.equal(SUBJECT_TOPICS[subjectId].length, 3, `${subjectId} must have 3 formula topics`);
  assert.equal(FORMULA_CARDS.filter(c => c.subject === subjectId).length, formulaCount, `${subjectId} must have ${formulaCount} formula cards`);

  const missionIds = new Set(missions.map(m => m.id));
  const subjectCodex = CODEX.filter(entry => missionIds.has(String(entry[0])));
  assert.ok(subjectCodex.length >= minCodexCount, `${subjectId} must have at least ${minCodexCount} Codex entries`);

  const categories = getCategories(subjectId);
  assert.equal(categories[0]?.count, subjectQuestions, `QuestionBank for ${subjectId} must expose all ${subjectQuestions} questions`);
}

assert.equal(totalQuestions, 90, 'Total Grade 10 + Grade 11 Math quiz questions must equal 90');

// 3. Visual delegation check
for (const key of MATH_ADV_VISUAL_KEYS) {
  for (const lang of ['en', 'it'] as const) {
    const direct = getMathAdvVisual(key, lang);
    const routed = getVisualHtml(key, lang);
    assert.ok(direct && direct.includes('<svg') && direct.length > 50, `Visual ${key} (${lang}) must render an SVG`);
    assert.equal(routed, direct, `getVisualHtml(${key}, ${lang}) must delegate to getMathAdvVisual`);
    assert.ok(!direct.includes('undefined') && !/\bNaN\b/.test(direct), `Visual ${key} (${lang}) must not contain undefined/NaN`);
  }
}

// 4. Persistence & grade isolation checks
for (const { grade, subjectId, missionPrefix } of SPECS) {
  const firstMissionId = `${missionPrefix}m1`;
  const saved = sanitizeGameState({ grade, subject: subjectId, cleared: { [firstMissionId]: true } });
  assert.equal(saved.grade, grade);
  assert.equal(saved.subject, subjectId);
  assert.equal(saved.unit, UNITS.findIndex(u => u.subject === subjectId));
  assert.equal(saved.cleared[firstMissionId], true);

  const nav = restoreSavedNavigation(
    { view: 'map', grade, subject: subjectId, missionId: firstMissionId, currentSceneIndex: 0 },
    saved
  );
  assert.equal(nav?.subject, subjectId);
  assert.equal(nav?.missionId, firstMissionId);

  const wrongGrade: GradeId = grade === 'grade10' ? 'grade11' : 'grade10';
  assert.notEqual(sanitizeGameState({ grade: wrongGrade, subject: subjectId }).subject, subjectId);
  assert.notEqual(sanitizeGameState({ grade: 'grade9', subject: subjectId }).subject, subjectId);
  assert.notEqual(sanitizeGameState({ grade: 'grade5', subject: subjectId }).subject, subjectId);
}

console.log(`mathAdvancedCurriculum.test.ts ok! Verified math10 & math11 (18 missions, ${totalQuestions} questions, ${MATH_ADV_VISUAL_KEYS.length} visuals & 18 interactive math labs).`);

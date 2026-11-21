import { HISTORY5_BOOK_QUESTIONS } from '../src/data/historyG5BookQuestions';
import assert from 'node:assert/strict';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { ARCS, CODEX, MISSIONS, SUBJECTS, UNITS } from '../src/data/gameData';
import { GRADE_CURRICULUM_MAP, getCurriculumSubjects } from '../src/data/curriculumSubjects';
import { GRADE_SUBJECT_IDS } from '../src/data/gradeData';
import { FORMULA_CARDS, SUBJECT_TOPICS } from '../src/data/formulaData';
import { HIST_GEO_VISUAL_KEYS, getHistGeoVisual } from '../src/data/histGeoVisuals';
import { HIST_GEO_CODEX } from '../src/data/histGeoCodex';
import { HistoryLab, hasHistoryLab } from '../src/components/HistoryLab';
import { GeographyLab, hasGeographyLab } from '../src/components/GeographyLab';
import { getVisualHtml } from '../src/data/visuals';
import { getCategories } from '../src/data/questionBank';
import { restoreSavedNavigation, sanitizeGameState } from '../src/persistence';
import type { GradeId, SubjectId } from '../src/types';

const isBilingualPair = (value: unknown): value is [string, string] =>
  Array.isArray(value) &&
  value.length === 2 &&
  value.every(part => typeof part === 'string' && part.trim().length > 0);

interface SubjectSpec {
  grade: GradeId;
  subjectId: SubjectId;
  kind: 'hist' | 'geo';
  missionPrefix: string;
  missionCount: number;
  arcCount: number;
  formulaCount: number;
  codexCount: number;
}

const SUBJECT_SPECS: SubjectSpec[] = [
  { grade: 'grade5', subjectId: 'hist5', kind: 'hist', missionPrefix: 'hist_g5_', missionCount: 4, arcCount: 1, formulaCount: 2, codexCount: 4 },
  { grade: 'grade5', subjectId: 'geo5', kind: 'geo', missionPrefix: 'geo_g5_', missionCount: 4, arcCount: 1, formulaCount: 2, codexCount: 4 },
  { grade: 'grade9', subjectId: 'hist9', kind: 'hist', missionPrefix: 'hist_l1_', missionCount: 8, arcCount: 3, formulaCount: 2, codexCount: 8 },
  { grade: 'grade9', subjectId: 'geo9', kind: 'geo', missionPrefix: 'geo_l1_', missionCount: 6, arcCount: 3, formulaCount: 2, codexCount: 6 },
  { grade: 'grade10', subjectId: 'hist10', kind: 'hist', missionPrefix: 'hist_l2_', missionCount: 8, arcCount: 3, formulaCount: 2, codexCount: 8 },
  { grade: 'grade10', subjectId: 'geo10', kind: 'geo', missionPrefix: 'geo_l2_', missionCount: 6, arcCount: 3, formulaCount: 2, codexCount: 6 },
  { grade: 'grade11', subjectId: 'hist11', kind: 'hist', missionPrefix: 'hist_l3_', missionCount: 8, arcCount: 3, formulaCount: 2, codexCount: 8 },
  { grade: 'grade11', subjectId: 'geo11', kind: 'geo', missionPrefix: 'geo_l3_', missionCount: 4, arcCount: 2, formulaCount: 2, codexCount: 4 }
];

// --- 1. Grade isolation & subject registration
for (const { grade, subjectId } of SUBJECT_SPECS) {
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

// --- 2. Structure, Bilingual Quality, No Decimal Dots in Italian & Labs across all 48 missions
const visualKeys = new Set<string>(HIST_GEO_VISUAL_KEYS);
assert.equal(visualKeys.size, 144, 'Expected 144 unique History & Geography SVG visual keys');

const allHistGeoSubjectSet = new Set<string>(SUBJECT_SPECS.map(s => s.subjectId));
const allHistGeoArcSet = new Set(ARCS.flatMap((arc, idx) => (arc.subject && allHistGeoSubjectSet.has(arc.subject) ? [idx] : [])));
const allHistGeoMissions = MISSIONS.filter(m => allHistGeoArcSet.has(m.arc));
assert.equal(allHistGeoMissions.length, 48, 'Total History + Geography missions across Grades 5, 9, 10, 11 must be 48');
assert.equal(new Set(allHistGeoMissions.map(m => m.id)).size, 48, 'All History & Geography mission IDs must be unique');
assert.equal(new Set(MISSIONS.map(m => m.id)).size, MISSIONS.length, 'Global mission IDs must be unique');

let totalQuestions = 0;

for (const spec of SUBJECT_SPECS) {
  const { grade, subjectId, kind, missionPrefix, missionCount, arcCount, formulaCount, codexCount } = spec;
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
      assert.ok(!/\d\.\d/.test(mission[field][1]), `${mission.id}.${field} Italian must not use decimal dots`);
    }

    if (kind === 'hist') {
      assert.ok(hasHistoryLab(mission.id), `${mission.id} must register an interactive HistoryLab`);
      for (const lang of ['en', 'it'] as const) {
        const markup = renderToStaticMarkup(React.createElement(HistoryLab, { missionId: mission.id, lang }));
        assert.ok(markup.includes('<svg'), `HistoryLab ${mission.id} (${lang}) must render an SVG simulation`);
        assert.ok(!/\bundefined\b/.test(markup) && !/\bNaN\b/.test(markup), `HistoryLab ${mission.id} (${lang}) contains undefined/NaN`);
      }
    } else {
      assert.ok(hasGeographyLab(mission.id), `${mission.id} must register an interactive GeographyLab`);
      for (const lang of ['en', 'it'] as const) {
        const markup = renderToStaticMarkup(React.createElement(GeographyLab, { missionId: mission.id, lang }));
        assert.ok(markup.includes('<svg'), `GeographyLab ${mission.id} (${lang}) must render an SVG simulation`);
        assert.ok(!/\bundefined\b/.test(markup) && !/\bNaN\b/.test(markup), `GeographyLab ${mission.id} (${lang}) contains undefined/NaN`);
      }
    }

    const teaching = mission.scenes.filter(s => s.text !== undefined);
    assert.ok(teaching.length >= 3, `${mission.id} must have >= 3 dialogue scenes`);
    for (const scene of teaching) {
      assert.ok(isBilingualPair(scene.text), `${mission.id} scene text must be bilingual`);
      assert.notEqual(scene.text[0], scene.text[1], `${mission.id} scene text must be translated`);
      assert.ok(!/\d\.\d/.test(scene.text[1]), `${mission.id} Italian scene text must use decimal commas`);
      if (scene.who === 's') {
        assert.ok(scene.vis && visualKeys.has(scene.vis), `${mission.id} Sensei scene must reference a valid visual (${scene.vis})`);
      }
    }
    assert.equal(mission.scenes.at(-1)?.type, 'battle', `${mission.id} must end with battle scene`);
    assert.equal(mission.quiz.length, 4, `${mission.id} must have 4 quiz questions`);

    for (const [qi, question] of mission.quiz.entries()) {
      subjectQuestions += 1;
      totalQuestions += 1;
      const label = `${mission.id} Q${qi + 1}`;
      assert.ok(isBilingualPair(question.q) && isBilingualPair(question.why), `${label} must be bilingual`);
      assert.notEqual(question.q[0], question.q[1], `${label} prompt must be translated`);
      assert.equal(question.a.length, 4, `${label} must have 4 options`);
      for (const lang of [0, 1] as const) {
        const opts = question.a.map(opt => {
          assert.ok(isBilingualPair(opt), `${label} option must be bilingual`);
          return opt[lang].trim().toLowerCase();
        });
        assert.equal(new Set(opts).size, 4, `${label} options must be distinct (${lang ? 'IT' : 'EN'})`);
      }
      const italianText = [question.q[1], question.why[1], ...question.a.map(o => o[1])].join(' ');
      assert.ok(!/\d\.\d/.test(italianText), `${label} Italian quiz text must use decimal commas`);
    }
  }

  assert.equal(subjectQuestions, missionCount * 4, `${subjectId} question count mismatch`);
  assert.equal(SUBJECT_TOPICS[subjectId].length, formulaCount, `${subjectId} must have ${formulaCount} formula topics`);
  assert.equal(FORMULA_CARDS.filter(c => c.subject === subjectId).length, formulaCount, `${subjectId} must have ${formulaCount} formula cards`);

  const missionIds = new Set(missions.map(m => m.id));
  const subjectCodex = HIST_GEO_CODEX.filter(entry => missionIds.has(String(entry[0])));
  assert.equal(subjectCodex.length, codexCount, `${subjectId} must have ${codexCount} Codex entries`);

  const categories = getCategories(subjectId);
  // Grade 5 History also has supplemental questions based on the approved textbook's topics.
  const supplemental = subjectId === 'hist5' ? HISTORY5_BOOK_QUESTIONS.length : 0;
  assert.equal(categories[0]?.count, subjectQuestions + supplemental, `QuestionBank for ${subjectId} must expose all ${subjectQuestions + supplemental} questions`);
}

assert.equal(totalQuestions, 192, 'Total History + Geography quiz questions must equal 192');
assert.equal(HIST_GEO_CODEX.length, 48, 'HIST_GEO_CODEX must have 48 entries');
for (const entry of HIST_GEO_CODEX) {
  assert.ok(CODEX.includes(entry), 'All HIST_GEO_CODEX entries must be included in global CODEX');
  assert.ok(!/\d\.\d/.test(entry[3] + ' ' + entry[4]) || !/\d\.\d/.test(entry[4]), `Codex ${entry[1]} IT must use decimal comma`);
}

// --- 3. Every visual renders in both EN and IT via getHistGeoVisual and getVisualHtml
for (const key of HIST_GEO_VISUAL_KEYS) {
  for (const lang of ['en', 'it'] as const) {
    const direct = getHistGeoVisual(key, lang);
    const routed = getVisualHtml(key, lang);
    assert.ok(direct && direct.includes('<svg') && direct.length > 50, `Visual ${key} (${lang}) must render an SVG`);
    assert.equal(routed, direct, `getVisualHtml(${key}, ${lang}) must delegate to getHistGeoVisual`);
    assert.ok(!direct.includes('undefined') && !/\bNaN\b/.test(direct), `Visual ${key} (${lang}) must not contain undefined/NaN`);
  }
}

// --- 4. Persistence & grade isolation checks
for (const { grade, subjectId, missionPrefix } of SUBJECT_SPECS) {
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

  const wrongGrade: GradeId = grade === 'grade9' ? 'grade10' : 'grade9';
  assert.notEqual(sanitizeGameState({ grade: wrongGrade, subject: subjectId }).subject, subjectId);
}

console.log(`histGeoCurriculum.test.ts ok! 4 grades (5/9/10/11), 8 subjects, ${allHistGeoMissions.length} missions, ${totalQuestions} questions, ${HIST_GEO_VISUAL_KEYS.length} visuals & 48 interactive labs verified.`);

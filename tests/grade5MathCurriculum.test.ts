import assert from 'node:assert/strict';
import { ARCS, MISSIONS, SUBJECTS, UNITS } from '../src/data/gameData';
import { GRADE_CURRICULUM_MAP, getCurriculumSubjects } from '../src/data/curriculumSubjects';
import { GRADE_SUBJECT_IDS } from '../src/data/gradeData';
import { FORMULA_CARDS, SUBJECT_TOPICS } from '../src/data/formulaData';
import { GRADE5_MATH_VISUAL_KEYS, getGrade5MathVisual } from '../src/data/grade5MathVisuals';
import { getCategories } from '../src/data/questionBank';
import { sanitizeGameState } from '../src/persistence';

const isBilingualPair = (value: unknown): value is [string, string] =>
  Array.isArray(value) &&
  value.length === 2 &&
  value.every(part => typeof part === 'string' && part.trim().length > 0);

// --- Registration: Grade 5 gets its own Mathematics, separate from Grade 9 Mathematics.
const subject = SUBJECTS.find(item => item.id === 'math5');
assert.ok(subject, 'Grade 5 Mathematics must be registered');
assert.ok(isBilingualPair(subject.name) && isBilingualPair(subject.blurb) && isBilingualPair(subject.meta));
assert.deepEqual(GRADE_CURRICULUM_MAP.grade5, ['science', 'math5', 'italian']);
assert.deepEqual(GRADE_SUBJECT_IDS.grade5, ['science', 'math5', 'italian']);
assert.ok(getCurriculumSubjects('grade5').some(item => item.id === 'math5'));
assert.ok(!getCurriculumSubjects('grade5').some(item => item.id === 'math'), 'Grade 5 must not inherit Grade 9 Mathematics');
assert.ok(!getCurriculumSubjects('grade9').some(item => item.id === 'math5'), 'Grade 9 must not show Grade 5 Mathematics');

// --- Structure follows the textbook: 6 units / arcs, in order, with page ranges.
const units = UNITS.filter(unit => unit.subject === 'math5');
const arcIndexes = ARCS.flatMap((arc, index) => (arc.subject === 'math5' ? [index] : []));
const arcIndexSet = new Set(arcIndexes);
const missions = MISSIONS.filter(mission => arcIndexSet.has(mission.arc));
assert.equal(units.length, 6, 'Grade 5 Maths has six textbook units');
assert.equal(arcIndexes.length, 6, 'Each Grade 5 Maths unit has an arc');
assert.deepEqual(
  arcIndexes.map(index => ARCS[index].title[1]),
  ['Per cominciare', 'Problemi, dati e previsioni', 'Numeri', 'Frazioni e numeri decimali', 'Misura', 'Spazio e figure']
);
for (const index of arcIndexes) {
  assert.equal(UNITS[ARCS[index].unit as number]?.subject, 'math5', `Arc ${index} must point at a Grade 5 Maths unit`);
}
assert.equal(missions.length, 69, 'Grade 5 Maths must contain all 69 missions');
assert.equal(new Set(missions.map(m => m.id)).size, missions.length, 'Mission IDs must be unique');
assert.equal(new Set(MISSIONS.map(m => m.id)).size, MISSIONS.length, 'Mission IDs must be globally unique');

// Key textbook topics must be present.
for (const id of [
  'g5m-problem-method', 'g5m-mode-mean-median', 'g5m-probability', 'g5m-roman-numerals', 'g5m-powers',
  'g5m-negative-numbers', 'g5m-expressions', 'g5m-divisibility', 'g5m-primes', 'g5m-equivalent-fractions',
  'g5m-percentages', 'g5m-length', 'g5m-capacity', 'g5m-mass', 'g5m-area-units', 'g5m-volume-units', 'g5m-time',
  'g5m-speed', 'g5m-money-trade', 'g5m-cartesian', 'g5m-isometries', 'g5m-trapezium', 'g5m-regular-polygons',
  'g5m-circumference-pi', 'g5m-circle-area', 'g5m-solids', 'g5m-volume', 'g5m-final-invalsi'
]) {
  assert.ok(missions.some(m => m.id === id), `Missing Grade 5 Maths mission ${id}`);
}

// --- Content quality: bilingual dialogue, bilingual quizzes, correct answer first, 4 distinct options.
const visualKeys = new Set(GRADE5_MATH_VISUAL_KEYS);
let questions = 0;
for (const mission of missions) {
  assert.ok(mission.id.startsWith('g5m-'), `${mission.id} must use the g5m- prefix`);
  for (const field of ['title', 'topic', 'demon', 'tech'] as const) {
    assert.ok(isBilingualPair(mission[field]), `${mission.id}.${field} must be bilingual`);
  }
  const teaching = mission.scenes.filter(scene => scene.text !== undefined);
  assert.ok(teaching.length >= 3, `${mission.id} needs teaching dialogue`);
  for (const scene of teaching) {
    assert.ok(isBilingualPair(scene.text), `${mission.id} dialogue must be bilingual`);
    assert.notEqual(scene.text[0], scene.text[1], `${mission.id} dialogue must be translated`);
    if (scene.vis) assert.ok(visualKeys.has(scene.vis), `${mission.id} uses unknown visual ${scene.vis}`);
  }
  assert.equal(mission.scenes.at(-1)?.type, 'battle', `${mission.id} must end with its battle`);
  assert.equal(mission.quiz.length, 4, `${mission.id} must have 4 quiz questions`);
  for (const [i, question] of mission.quiz.entries()) {
    questions += 1;
    const label = `${mission.id} Q${i + 1}`;
    assert.ok(isBilingualPair(question.q) && isBilingualPair(question.why), `${label} must be bilingual`);
    assert.notEqual(question.q[0], question.q[1], `${label} prompt must be translated`);
    assert.equal(question.a.length, 4, `${label} must have 4 options`);
    for (const lang of [0, 1]) {
      const options = question.a.map(option => {
        assert.ok(isBilingualPair(option), `${label} options must be bilingual`);
        return option[lang].trim().toLowerCase();
      });
      assert.equal(new Set(options).size, 4, `${label} options must be distinct (${lang ? 'IT' : 'EN'})`);
    }
    // Italian uses the decimal comma: a digit-dot-digit in Italian text is a mistake.
    const italianText = [question.q[1], question.why[1], ...question.a.map(option => option[1])].join(' ');
    assert.ok(!/\d\.\d/.test(italianText), `${label} Italian text must use the decimal comma`);
  }
}

// --- Every visual renders in both languages.
for (const key of GRADE5_MATH_VISUAL_KEYS) {
  for (const lang of ['en', 'it'] as const) {
    const html = getGrade5MathVisual(key, lang);
    assert.ok(html && html.length > 50, `Visual ${key} must render in ${lang}`);
    assert.ok(!html.includes('undefined') && !html.includes('NaN'), `Visual ${key} must not contain undefined/NaN`);
  }
}

// --- Formula book, test bank and persistence integration.
assert.ok(SUBJECT_TOPICS.math5.length >= 5, 'Grade 5 Maths formula topics');
assert.ok(FORMULA_CARDS.filter(card => card.subject === 'math5').length >= 10, 'Grade 5 Maths formula cards');
const categories = getCategories('math5');
assert.equal(categories[0]?.count, questions, 'Test bank must contain every Grade 5 Maths question');
const saved = sanitizeGameState({ grade: 'grade5', subject: 'math5', cleared: { 'g5m-length': true } });
assert.equal(saved.subject, 'math5', 'A Grade 5 learner can save Grade 5 Maths as current subject');
assert.equal(saved.unit, UNITS.findIndex(unit => unit.subject === 'math5'));
assert.notEqual(sanitizeGameState({ grade: 'grade9', subject: 'math5' }).subject, 'math5', 'Grade 9 cannot restore Grade 5 Maths');

console.log(`grade5MathCurriculum.test.ts ok! ${units.length} units, ${missions.length} missions, ${questions} bilingual questions.`);

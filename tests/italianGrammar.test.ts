import assert from 'node:assert/strict';
import { ARCS, CODEX, MISSIONS, UNITS } from '../src/data/gameData';
import { ITALIAN_GRAMMAR_UNITS } from '../src/data/italianGrammarData';
import { ITALIAN_GRAMMAR_VISUAL_KEYS, getItalianGrammarVisual } from '../src/data/italianGrammarVisuals';
import { VERB_TABLES, type Six } from '../src/data/italianGrammarVerbTables';
import { FORMULA_CARDS } from '../src/data/formulaData';
import { getCurriculumSubjects } from '../src/data/curriculumSubjects';

const isPair = (value: unknown): value is [string, string] =>
  Array.isArray(value) && value.length === 2 && value.every(part => typeof part === 'string' && part.trim().length > 0);

// --- Registration: 8 grammar units inside the shared Italian subject, after the CEFR units.
const italianUnits = UNITS.filter(unit => unit.subject === 'italian');
assert.equal(italianUnits.length, 11, 'Italian = 3 CEFR units + 8 grammar units');
assert.deepEqual(
  italianUnits.slice(3).map(unit => unit.title[1]),
  ITALIAN_GRAMMAR_UNITS.map(unit => unit.title[1])
);
for (const grade of ['grade5', 'grade9'] as const) {
  assert.ok(getCurriculumSubjects(grade).some(subject => subject.id === 'italian'), `Italian is available in ${grade}`);
}

const grammarArcIndexes = new Set(ARCS.flatMap((arc, index) => (arc.subject === 'italian' && (arc.n ?? 0) >= 4 ? [index] : [])));
const missions = MISSIONS.filter(mission => grammarArcIndexes.has(mission.arc));
assert.equal(grammarArcIndexes.size, 8);
assert.equal(missions.length, 43, 'All 43 grammar missions are registered');
assert.ok(missions.every(m => m.id.startsWith('itg5-')), 'Grammar missions use the itg5- prefix');
assert.ok(!MISSIONS.some(m => m.id.startsWith('itg5-') && !grammarArcIndexes.has(m.arc)), 'No grammar mission outside the grammar arcs');

// --- Content quality.
const visualKeys = new Set(ITALIAN_GRAMMAR_VISUAL_KEYS);
let questions = 0;
for (const mission of missions) {
  for (const field of ['title', 'topic', 'demon', 'tech'] as const) assert.ok(isPair(mission[field]), `${mission.id}.${field}`);
  const teaching = mission.scenes.filter(scene => scene.text !== undefined);
  assert.ok(teaching.length >= 2, `${mission.id} needs teaching dialogue`);
  for (const scene of teaching) {
    assert.ok(isPair(scene.text));
    assert.notEqual(scene.text[0], scene.text[1], `${mission.id} dialogue must be translated`);
    if (scene.vis) assert.ok(visualKeys.has(scene.vis), `${mission.id} uses unknown visual ${scene.vis}`);
  }
  assert.equal(mission.scenes.at(-1)?.type, 'battle');
  assert.equal(mission.quiz.length, 4, `${mission.id} has 4 questions`);
  for (const [i, question] of mission.quiz.entries()) {
    questions += 1;
    const label = `${mission.id} Q${i + 1}`;
    assert.ok(isPair(question.q) && isPair(question.why), `${label} bilingual`);
    assert.notEqual(question.q[0], question.q[1], `${label} prompt must be translated`);
    assert.notEqual(question.why[0], question.why[1], `${label} explanation must be translated`);
    assert.equal(question.a.length, 4, `${label} has 4 options`);
    for (const lang of [0, 1]) {
      const options = question.a.map(option => option[lang].trim().toLowerCase());
      assert.equal(new Set(options).size, 4, `${label} options must be distinct`);
    }
  }
}

// --- Codex and formula book.
const grammarCodex = CODEX.filter(entry => typeof entry[0] === 'string' && entry[0].startsWith('itg5-'));
assert.ok(grammarCodex.length >= 30, `Expected grammar codex entries, got ${grammarCodex.length}`);
for (const entry of grammarCodex) {
  assert.ok(missions.some(m => m.id === entry[0]), `Codex entry points at a real mission: ${entry[0]}`);
  assert.ok(entry.slice(1).every(part => typeof part === 'string' && part.trim()));
}
assert.ok(FORMULA_CARDS.filter(card => card.topicId === 'grammatica-quinta').length >= 4);

// --- Visuals render in both languages.
for (const key of ITALIAN_GRAMMAR_VISUAL_KEYS) {
  for (const lang of ['en', 'it'] as const) {
    const html = getItalianGrammarVisual(key, lang);
    assert.ok(html && html.length > 100, `${key} renders in ${lang}`);
    assert.ok(!/undefined|NaN/.test(html), `${key} has no undefined/NaN`);
  }
}

// --- Verb tables: regular verbs must match the regular paradigm, generated independently.
const P = (...f: string[]) => f as Six;
const paradigm = (root: string, conj: 'are' | 'ere' | 'ire') => {
  const v = conj === 'are' ? 'a' : conj === 'ere' ? 'e' : 'i';
  const futStem = conj === 'are' ? `${root}er` : `${root}${v}r`;
  const congV = conj === 'are' ? 'i' : 'a';
  return {
    presente: P(`${root}o`, `${root}i`, `${root}${conj === 'are' ? 'a' : 'e'}`, `${root}iamo`, `${root}${v}te`, `${root}${conj === 'are' ? 'ano' : 'ono'}`),
    imperfetto: P(...['vo', 'vi', 'va', 'vamo', 'vate', 'vano'].map(e => `${root}${v}${e}`)),
    futuro: P(...['ò', 'ai', 'à', 'emo', 'ete', 'anno'].map(e => `${futStem}${e}`)),
    congPres: P(`${root}${congV}`, `${root}${congV}`, `${root}${congV}`, `${root}iamo`, `${root}iate`, `${root}${congV}no`),
    congImpf: P(...['ssi', 'ssi', 'sse', 'ssimo', 'ste', 'ssero'].map(e => `${root}${v}${e}`)),
    cond: P(...['ei', 'esti', 'ebbe', 'emmo', 'este', 'ebbero'].map(e => `${futStem}${e}`))
  };
};
for (const [verb, root, conj] of [['amare', 'am', 'are'], ['credere', 'cred', 'ere'], ['dormire', 'dorm', 'ire']] as const) {
  const table = VERB_TABLES[verb];
  const expected = paradigm(root, conj);
  const find = (list: Array<[string, Six]>, name: string) => list.find(([n]) => n === name)![1];
  assert.deepEqual(find(table.indicativo.simple, 'presente'), expected.presente, `${verb} presente`);
  assert.deepEqual(find(table.indicativo.simple, 'imperfetto'), expected.imperfetto, `${verb} imperfetto`);
  assert.deepEqual(find(table.indicativo.simple, 'futuro semplice'), expected.futuro, `${verb} futuro`);
  assert.deepEqual(find(table.congiuntivo.simple, 'presente'), expected.congPres, `${verb} congiuntivo presente`);
  assert.deepEqual(find(table.congiuntivo.simple, 'imperfetto'), expected.congImpf, `${verb} congiuntivo imperfetto`);
  assert.deepEqual(table.condizionale.simple[1], expected.cond, `${verb} condizionale`);
  assert.ok(find(table.indicativo.compound, 'passato prossimo')[0].startsWith('ho '), `${verb} uses avere`);
}
// Spot checks against the textbook tables and standard paradigms.
assert.deepEqual(VERB_TABLES.amare.indicativo.simple[2][1], ['amai', 'amasti', 'amò', 'amammo', 'amaste', 'amarono']);
assert.deepEqual(VERB_TABLES.credere.indicativo.simple[2][1], ['credetti', 'credesti', 'credette', 'credemmo', 'credeste', 'credettero']);
assert.deepEqual(VERB_TABLES.dormire.indicativo.simple[2][1], ['dormii', 'dormisti', 'dormì', 'dormimmo', 'dormiste', 'dormirono']);
assert.equal(VERB_TABLES.essere.indicativo.compound[0][1][3], 'siamo stati');
assert.equal(VERB_TABLES.avere.congiuntivo.simple[1][1][5], 'avessero');
assert.equal(VERB_TABLES.passiva.indicativo.compound[0][1][0], 'sono stato amato');
assert.equal(VERB_TABLES.lavarsi.indicativo.compound[0][1][3], 'ci siamo lavati');
assert.equal(VERB_TABLES.lavarsi.condizionale.compound[1][2], 'si sarebbe lavato');

console.log(`italianGrammar.test.ts ok! ${missions.length} grammar missions, ${questions} questions, ${grammarCodex.length} codex entries.`);

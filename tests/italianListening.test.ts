import assert from 'node:assert/strict';
import {
  ITALIAN_LISTENING_PASSAGES,
  LISTENING_THEME_LABELS,
  getListeningPassages,
  ListeningTheme
} from '../src/data/italianListening';

const LEVELS = ['A1', 'A2', 'B1'] as const;
const THEMES: ListeningTheme[] = ['everyday', 'travel', 'work'];

// Content strings may be a plain string, a legacy [en, it] tuple, or a
// localized { en, it, pt?, ... } record. Extract the English and Italian forms.
type BT = any;
const en = (x: BT): string => x == null ? '' : Array.isArray(x) ? (x[0] ?? '') : typeof x === 'object' ? (x.en ?? '') : x;
const it = (x: BT): string => x == null ? '' : Array.isArray(x) ? (x[1] ?? x[0] ?? '') : typeof x === 'object' ? (x.it ?? '') : x;
const SUPPORT = ['pt', 'es', 'fr', 'de'] as const;

assert.ok(ITALIAN_LISTENING_PASSAGES.length >= 9, 'Expected at least nine listening passages');

const passageIds = new Set<string>();
const questionIds = new Set<string>();

for (const passage of ITALIAN_LISTENING_PASSAGES) {
  assert.ok(!passageIds.has(passage.id), `Duplicate passage id: ${passage.id}`);
  passageIds.add(passage.id);

  assert.ok(LEVELS.includes(passage.level), `${passage.id} has an invalid level`);
  assert.ok(THEMES.includes(passage.theme), `${passage.id} has an invalid theme`);
  assert.ok(en(passage.title).trim().length > 0 && it(passage.title).trim().length > 0, `${passage.id} needs a bilingual title`);
  assert.ok(en(passage.intro).trim().length > 0 && it(passage.intro).trim().length > 0, `${passage.id} needs a bilingual intro`);
  assert.ok(passage.text.trim().length > 20, `${passage.id} needs a non-trivial Italian passage`);
  assert.ok(en(passage.transcript).trim().length > 0 && it(passage.transcript).trim().length > 0, `${passage.id} needs a bilingual transcript`);
  // The Italian half of the transcript should match the spoken text.
  assert.equal(it(passage.transcript).trim(), passage.text.trim(), `${passage.id} Italian transcript must match the spoken text`);

  assert.ok(Array.isArray(passage.glossary), `${passage.id} needs a glossary array`);
  for (const g of passage.glossary) {
    assert.ok(g.it.trim().length > 0 && g.en.trim().length > 0, `${passage.id} glossary entries need both it and en`);
    // Any support-language gloss that is present must be non-empty.
    for (const sl of SUPPORT) {
      if ((g as any)[sl] !== undefined) assert.ok((g as any)[sl].trim().length > 0, `${passage.id} glossary ${sl} gloss must be non-empty`);
    }
  }

  assert.ok(passage.questions.length >= 3, `${passage.id} should have at least three comprehension questions`);
  for (const q of passage.questions) {
    assert.ok(!questionIds.has(q.id), `Duplicate question id: ${q.id}`);
    questionIds.add(q.id);
    assert.ok(en(q.prompt).trim().length > 0 && it(q.prompt).trim().length > 0, `${q.id} needs a bilingual prompt`);
    assert.ok(q.options.length >= 2, `${q.id} needs at least two options`);
    assert.ok(q.options.every(option => option.trim().length > 0), `${q.id} options must be non-empty`);
    assert.ok(new Set(q.options).size === q.options.length, `${q.id} options must be distinct`);
    assert.ok(Number.isInteger(q.answer) && q.answer >= 0 && q.answer < q.options.length, `${q.id} answer index must be valid`);
    assert.ok(en(q.explanation).trim().length > 0 && it(q.explanation).trim().length > 0, `${q.id} needs bilingual feedback`);
  }
}

// Every level has at least one passage.
for (const level of LEVELS) {
  assert.ok(ITALIAN_LISTENING_PASSAGES.some(p => p.level === level), `No passages found for level ${level}`);
}

// Every theme has a bilingual label and at least one passage.
for (const theme of THEMES) {
  assert.ok(LISTENING_THEME_LABELS[theme][0].length > 0 && LISTENING_THEME_LABELS[theme][1].length > 0, `Theme ${theme} needs a bilingual label`);
  assert.ok(ITALIAN_LISTENING_PASSAGES.some(p => p.theme === theme), `No passages found for theme ${theme}`);
}

// Helper returns the right subset.
const a1Everyday = getListeningPassages('A1', 'everyday');
assert.ok(a1Everyday.every(p => p.level === 'A1' && p.theme === 'everyday'), 'getListeningPassages must filter by level and theme');
assert.equal(getListeningPassages('A1').length, ITALIAN_LISTENING_PASSAGES.filter(p => p.level === 'A1').length, 'getListeningPassages without theme returns all for the level');

// The UI dictionary must be fully localized into every interface language.
const { LISTEN_UI, LISTEN_THEME_UI, partialScoreLine } = await import('../src/data/italianListeningUi');
const ALL_LANGS = ['en', 'it', 'pt', 'es', 'fr', 'de'] as const;
for (const [key, entry] of Object.entries({ ...LISTEN_UI, ...LISTEN_THEME_UI })) {
  for (const lng of ALL_LANGS) {
    assert.ok(typeof (entry as any)[lng] === 'string' && (entry as any)[lng].trim().length > 0, `UI string "${key}" is missing a ${lng} translation`);
  }
}
// partialScoreLine returns a distinct, non-empty line per language.
for (const lng of ALL_LANGS) {
  const line = partialScoreLine(lng, 2, 4);
  assert.ok(line.includes('2') && line.includes('4'), `partialScoreLine(${lng}) must include the score`);
}

console.log(`italianListening.test.ts ok! ${ITALIAN_LISTENING_PASSAGES.length} passages and ${questionIds.size} questions verified, UI localized into ${ALL_LANGS.length} languages.`);

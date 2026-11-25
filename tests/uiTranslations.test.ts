import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { UI_TRANSLATIONS, translateUi } from '../src/data/uiTranslations';
import { L } from '../src/helpers';

// Components shown while learning Italian. Every English string that they pass
// to L([en, it]) or T(lang, en, it) must have pt/es/fr/de text, so nothing
// outside the learner's language and Italian is displayed.
const FILES = ['HUD', 'TestScreen', 'RaceScreen', 'ItalianCheckpointScreen', 'FormulaScreen', 'SubjectPickerScreen', 'GradePicker', 'CodexScreen', 'LearningStreak', 'SpacedReview', 'AssessmentReview', 'MasteryInsights', 'ConceptRevision', 'BattleScreen', 'CertificateScreen'];
const quoted = `('(?:[^'\\\\]|\\\\.)*'|"(?:[^"\\\\]|\\\\.)*")`;
const unquote = (s: string) => s.slice(1, -1).replace(/\\'/g, "'").replace(/\\"/g, '"');
const IGNORED = new Set(['', 'en-CA', 'en-GB']);

const used = new Set<string>();
for (const f of FILES) {
  const src = readFileSync(`src/components/${f}.tsx`, 'utf8');
  for (const m of src.matchAll(new RegExp(`L\\(\\s*\\[\\s*${quoted}\\s*,\\s*${quoted}\\s*\\]`, 'g'))) used.add(unquote(m[1]));
  for (const m of src.matchAll(new RegExp(`\\bT\\(\\s*lang\\s*,\\s*${quoted}\\s*,\\s*${quoted}\\s*\\)`, 'g'))) used.add(unquote(m[1]));
}

const missing = [...used].filter(s => !IGNORED.has(s) && !UI_TRANSLATIONS[s]);
assert.deepEqual(missing, [], `Missing pt/es/fr/de text for ${missing.length} interface strings:\n${missing.join('\n')}`);

for (const [key, row] of Object.entries(UI_TRANSLATIONS)) {
  assert.equal(row.length, 4, `${key} needs exactly four translations`);
  for (const text of row) assert.ok(text.trim().length > 0, `${key} has an empty translation`);
}

// L() must use the table for support languages and keep EN/IT behaviour.
assert.equal(L(['Subjects', 'Materie'], 'en'), 'Subjects');
assert.equal(L(['Subjects', 'Materie'], 'it'), 'Materie');
assert.equal(L(['Subjects', 'Materie'], 'pt'), 'Disciplinas');
assert.equal(L(['Subjects', 'Materie'], 'de'), 'Fächer');
assert.equal(translateUi('Subjects', 'en'), undefined);
console.log(`ui translations ok: ${used.size} strings in use, ${Object.keys(UI_TRANSLATIONS).length} entries`);

// The app shell announces the current section in the learner's language.
const app = readFileSync('src/App.tsx', 'utf8');
const viewNames = app.slice(app.indexOf('viewNames'), app.indexOf('useEffect'));
for (const m of viewNames.matchAll(/\['([^']+)',\s*'[^']+'\]/g)) {
  assert.ok(UI_TRANSLATIONS[m[1]], `Section name "${m[1]}" needs pt/es/fr/de text`);
}
assert.ok(UI_TRANSLATIONS['Main content'] && UI_TRANSLATIONS['Skip to main content'] && UI_TRANSLATIONS['Section: ']);

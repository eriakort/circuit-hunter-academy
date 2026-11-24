import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { MISSION_UI, ui, uiLocale, uiText } from '../src/data/missionUi';
import { L, U } from '../src/helpers';

// Every label the shared mission screens pass to ui() must have all four
// support-language variants, so PT/ES/FR/DE never silently fall back to English.
const files = ['MissionScreen', 'LearningPathway', 'MapScreen'].map(name => `src/components/${name}.tsx`);
const used = new Set<string>();
for (const file of files) {
  const source = readFileSync(file, 'utf8');
  for (const match of source.matchAll(/ui\(lang, '([^']*)', '([^']*)'/g)) used.add(match[1]);
  for (const match of source.matchAll(/uiText\('([^']*)', '([^']*)'\)/g)) used.add(match[1]);
}
assert.ok(used.size >= 100, `expected the mission screens to use the ui() helper, found ${used.size} labels`);
for (const en of used) {
  const variants = MISSION_UI[en];
  assert.ok(variants, `Missing support-language labels for "${en}"`);
  for (const lang of ['pt', 'es', 'fr', 'de'] as const) {
    assert.ok(variants[lang]?.trim(), `"${en}" needs a ${lang} label`);
  }
}

// English and Italian are passed through unchanged; templates fill {n}.
assert.equal(ui('en', 'Listen', 'Ascolta'), 'Listen');
assert.equal(ui('it', 'Listen', 'Ascolta'), 'Ascolta');
assert.equal(ui('de', 'Listen', 'Ascolta'), 'Anhören');
assert.equal(ui('fr', 'You need {n}% to pass. Review the explanations and try again.', 'Hai bisogno del {n}%…', 75), 'Il te faut 75 % pour réussir. Relis les explications et réessaie.');
assert.equal(ui('pt', 'Not in the dictionary', 'Non nel dizionario'), 'Not in the dictionary');
assert.equal(uiLocale('en'), 'en-CA');
assert.equal(uiLocale('it'), 'it-IT');
assert.equal(uiLocale('pt'), 'pt-BR');

assert.equal(L(uiText('Unit', 'Unità'), 'es'), 'Unidad');
assert.equal(L(uiText('Unit', 'Unità'), 'it'), 'Unità');
// Shared buttons on the mission screens carry every support language.
for (const [key, value] of Object.entries(U)) {
  for (const lang of ['en', 'it', 'pt', 'es', 'fr', 'de'] as const) assert.ok((value as Record<string, string>)[lang], `U.${key} needs ${lang}`);
}
console.log('missionUi.test.ts ok!', used.size, 'labels covered');

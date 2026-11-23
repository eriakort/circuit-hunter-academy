import assert from 'node:assert/strict';
import {
  ITALIAN_LISTENING_PASSAGES,
  LISTENING_THEME_LABELS,
  getListeningPassages,
  ListeningTheme
} from '../src/data/italianListening';

const LEVELS = ['A1', 'A2', 'B1'] as const;
const THEMES: ListeningTheme[] = ['everyday', 'travel', 'work'];

assert.ok(ITALIAN_LISTENING_PASSAGES.length >= 9, 'Expected at least nine listening passages');

const passageIds = new Set<string>();
const questionIds = new Set<string>();

for (const passage of ITALIAN_LISTENING_PASSAGES) {
  assert.ok(!passageIds.has(passage.id), `Duplicate passage id: ${passage.id}`);
  passageIds.add(passage.id);

  assert.ok(LEVELS.includes(passage.level), `${passage.id} has an invalid level`);
  assert.ok(THEMES.includes(passage.theme), `${passage.id} has an invalid theme`);
  assert.ok(passage.title[0].trim().length > 0 && passage.title[1].trim().length > 0, `${passage.id} needs a bilingual title`);
  assert.ok(passage.intro[0].trim().length > 0 && passage.intro[1].trim().length > 0, `${passage.id} needs a bilingual intro`);
  assert.ok(passage.text.trim().length > 20, `${passage.id} needs a non-trivial Italian passage`);
  assert.ok(passage.transcript[0].trim().length > 0 && passage.transcript[1].trim().length > 0, `${passage.id} needs a bilingual transcript`);
  // The Italian half of the transcript should match the spoken text.
  assert.equal(passage.transcript[1].trim(), passage.text.trim(), `${passage.id} Italian transcript must match the spoken text`);

  assert.ok(Array.isArray(passage.glossary), `${passage.id} needs a glossary array`);
  for (const g of passage.glossary) {
    assert.ok(g.it.trim().length > 0 && g.en.trim().length > 0, `${passage.id} glossary entries need both it and en`);
  }

  assert.ok(passage.questions.length >= 3, `${passage.id} should have at least three comprehension questions`);
  for (const q of passage.questions) {
    assert.ok(!questionIds.has(q.id), `Duplicate question id: ${q.id}`);
    questionIds.add(q.id);
    assert.ok(q.prompt[0].trim().length > 0 && q.prompt[1].trim().length > 0, `${q.id} needs a bilingual prompt`);
    assert.ok(q.options.length >= 2, `${q.id} needs at least two options`);
    assert.ok(q.options.every(option => option.trim().length > 0), `${q.id} options must be non-empty`);
    assert.ok(new Set(q.options).size === q.options.length, `${q.id} options must be distinct`);
    assert.ok(Number.isInteger(q.answer) && q.answer >= 0 && q.answer < q.options.length, `${q.id} answer index must be valid`);
    assert.ok(q.explanation[0].trim().length > 0 && q.explanation[1].trim().length > 0, `${q.id} needs bilingual feedback`);
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

console.log(`italianListening.test.ts ok! ${ITALIAN_LISTENING_PASSAGES.length} passages and ${questionIds.size} questions verified.`);

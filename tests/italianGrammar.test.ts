import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { ITALIAN_GRAMMAR_TOPICS } from '../src/data/italianGrammar';

// Explanations may be a legacy [en, it] tuple or a localized record; read both.
const en = (v: any): string => (Array.isArray(v) ? v[0] : v?.en) ?? '';
const it = (v: any): string => (Array.isArray(v) ? v[1] : v?.it) ?? '';

const expectedTopics = ['articles', 'pronouns', 'passato-prossimo', 'partitive', 'reflexive', 'sentence-building', 'present-tense', 'stare-gerundio', 'imperative', 'comparatives', 'future', 'past-contrast', 'imperfetto', 'prepositions', 'adjective-agreement'];
assert.deepEqual(ITALIAN_GRAMMAR_TOPICS.map(topic => topic.id), expectedTopics);

const levels = ['A1', 'A2', 'B1'] as const;
const exerciseIds = new Set<string>();
let totalExercises = 0;
for (const topic of ITALIAN_GRAMMAR_TOPICS) {
  for (const level of levels) {
    const content = topic.levels[level];
    assert.ok(en(content.explanation).length > 0, `${topic.id} ${level} needs an English explanation`);
    assert.ok(it(content.explanation).length > 0, `${topic.id} ${level} needs an Italian explanation`);
    assert.ok(content.example[0].length > 0 && content.example[1].length > 0, `${topic.id} ${level} needs bilingual examples`);
    assert.ok(content.exercises.length >= 3, `${topic.id} ${level} should include at least three practice questions`);
    for (const item of content.exercises) {
      assert.ok(!exerciseIds.has(item.id), `Duplicate exercise ID: ${item.id}`);
      exerciseIds.add(item.id);
      totalExercises += 1;
      assert.ok(en(item.prompt).length > 0 && it(item.prompt).length > 0, `${item.id} needs a bilingual prompt`);
      assert.ok(en(item.explanation).length > 0 && it(item.explanation).length > 0, `${item.id} needs bilingual feedback`);
      assert.ok(item.options.length >= 2, `${item.id} needs answer choices`);
      assert.ok(item.answer >= 0 && item.answer < item.options.length, `${item.id} answer index must be valid`);
    }
  }
}

assert.ok(totalExercises >= 144, `Expected at least 144 exercises, got ${totalExercises}`);
assert.ok((ITALIAN_GRAMMAR_TOPICS.find(topic => topic.id === 'pronouns')?.levels.A1.exercises.length ?? 0) >= 6);
assert.ok((ITALIAN_GRAMMAR_TOPICS.find(topic => topic.id === 'pronouns')?.levels.A2.exercises.length ?? 0) >= 6);
assert.ok((ITALIAN_GRAMMAR_TOPICS.find(topic => topic.id === 'passato-prossimo')?.levels.A1.exercises.length ?? 0) >= 6);
assert.ok((ITALIAN_GRAMMAR_TOPICS.find(topic => topic.id === 'passato-prossimo')?.levels.A2.exercises.length ?? 0) >= 6);
assert.ok((ITALIAN_GRAMMAR_TOPICS.find(topic => topic.id === 'reflexive')?.levels.A1.exercises.length ?? 0) >= 6);
assert.ok((ITALIAN_GRAMMAR_TOPICS.find(topic => topic.id === 'reflexive')?.levels.A2.exercises.length ?? 0) >= 6);
assert.ok((ITALIAN_GRAMMAR_TOPICS.find(topic => topic.id === 'sentence-building')?.levels.A1.exercises.length ?? 0) >= 6);
assert.ok((ITALIAN_GRAMMAR_TOPICS.find(topic => topic.id === 'sentence-building')?.levels.A2.exercises.length ?? 0) >= 6);
assert.ok((ITALIAN_GRAMMAR_TOPICS.find(topic => topic.id === 'articles')?.levels.A1.exercises.length ?? 0) >= 6);
assert.ok((ITALIAN_GRAMMAR_TOPICS.find(topic => topic.id === 'articles')?.levels.A2.exercises.length ?? 0) >= 6);
assert.ok((ITALIAN_GRAMMAR_TOPICS.find(topic => topic.id === 'partitive')?.levels.A1.exercises.length ?? 0) >= 6);
assert.ok((ITALIAN_GRAMMAR_TOPICS.find(topic => topic.id === 'partitive')?.levels.A2.exercises.length ?? 0) >= 6);

const presentTense = ITALIAN_GRAMMAR_TOPICS.find(topic => topic.id === 'present-tense');
assert.ok(presentTense, 'Present tense topic must be registered');
assert.ok((presentTense.levels.A1.exercises.length ?? 0) >= 6);
assert.ok((presentTense.levels.A2.exercises.length ?? 0) >= 6);
assert.ok((presentTense.levels.B1.exercises.length ?? 0) >= 3);
assert.ok(it(presentTense.levels.A1.explanation).includes('desinenza'));
assert.ok(it(presentTense.levels.A2.explanation).includes('Potere'));
const prepositions = ITALIAN_GRAMMAR_TOPICS.find(topic => topic.id === 'prepositions');
assert.ok(prepositions, 'Prepositions topic must be registered');
assert.ok((prepositions.levels.A1.exercises.length ?? 0) >= 6);
assert.ok((prepositions.levels.A2.exercises.length ?? 0) >= 6);
assert.ok((prepositions.levels.B1.exercises.length ?? 0) >= 3);
assert.ok(it(prepositions.levels.A1.explanation).includes('città'));
const imperfetto = ITALIAN_GRAMMAR_TOPICS.find(topic => topic.id === 'imperfetto');
assert.ok(imperfetto, 'Imperfetto topic must be registered');
assert.ok((imperfetto.levels.A1.exercises.length ?? 0) >= 6);
assert.ok((imperfetto.levels.A2.exercises.length ?? 0) >= 6);
assert.ok((imperfetto.levels.B1.exercises.length ?? 0) >= 3);
assert.ok(it(imperfetto.levels.A2.explanation).includes('abitudini'));

const stareGerundio = ITALIAN_GRAMMAR_TOPICS.find(topic => topic.id === 'stare-gerundio');
assert.ok(stareGerundio, 'Stare + gerundio topic must be registered');
assert.ok(stareGerundio.levels.A1.exercises.length >= 6);
assert.ok(stareGerundio.levels.A2.exercises.length >= 6);
assert.ok(stareGerundio.levels.B1.exercises.length >= 3);
assert.ok(it(stareGerundio.levels.A1.explanation).includes('gerundio'));
const imperative = ITALIAN_GRAMMAR_TOPICS.find(topic => topic.id === 'imperative');
assert.ok(imperative, 'Imperative topic must be registered');
for (const level of levels) {
  assert.ok(imperative.levels[level].exercises.length >= (level === 'B1' ? 5 : 11), `imperative ${level} needs exercises`);
  for (const item of imperative.levels[level].exercises) {
    assert.equal(item.options.length, 3, `${item.id} needs three options for the test bank`);
    for (const lang of ['en', 'it', 'pt', 'es', 'fr', 'de'] as const) {
      assert.ok((item.prompt as Record<string, string>)[lang]?.trim(), `${item.id} prompt needs ${lang}`);
      assert.ok((item.explanation as Record<string, string>)[lang]?.trim(), `${item.id} explanation needs ${lang}`);
    }
    // The correct option must not appear inside its own prompt.
    const answer = item.options[item.answer].toLowerCase().replace(/[!?.,]/g, '').trim();
    for (const text of Object.values(item.prompt as Record<string, string>)) assert.ok(!text.toLowerCase().includes(answer + ' ') && !text.toLowerCase().endsWith(answer), `${item.id} prompt gives the answer away`);
  }
}
const comparatives = ITALIAN_GRAMMAR_TOPICS.find(topic => topic.id === 'comparatives');
assert.ok(comparatives, 'Comparatives topic must be registered');
for (const level of levels) {
  assert.ok(comparatives.levels[level].exercises.length >= (level === 'B1' ? 7 : 11), `comparatives ${level} needs exercises`);
  for (const item of comparatives.levels[level].exercises) {
    assert.equal(item.options.length, 3, `${item.id} needs three options for the test bank`);
    for (const lang of ['en', 'it', 'pt', 'es', 'fr', 'de'] as const) {
      assert.ok((item.prompt as Record<string, string>)[lang]?.trim(), `${item.id} prompt needs ${lang}`);
      assert.ok((item.explanation as Record<string, string>)[lang]?.trim(), `${item.id} explanation needs ${lang}`);
    }
    // The correct option must not appear inside its own prompt.
    const answer = item.options[item.answer].toLowerCase().replace(/[!?.,]/g, '').trim();
    for (const text of Object.values(item.prompt as Record<string, string>)) assert.ok(!text.toLowerCase().includes(answer + ' ') && !text.toLowerCase().endsWith(answer), `${item.id} prompt gives the answer away`);
  }
}
const future = ITALIAN_GRAMMAR_TOPICS.find(topic => topic.id === 'future');
assert.ok(future, 'Future topic must be registered');
for (const level of levels) {
  assert.ok(future.levels[level].exercises.length >= (level === 'B1' ? 7 : 11), `future ${level} needs exercises`);
  for (const item of future.levels[level].exercises) {
    assert.equal(item.options.length, 3, `${item.id} needs three options for the test bank`);
    for (const lang of ['en', 'it', 'pt', 'es', 'fr', 'de'] as const) {
      assert.ok((item.prompt as Record<string, string>)[lang]?.trim(), `${item.id} prompt needs ${lang}`);
      assert.ok((item.explanation as Record<string, string>)[lang]?.trim(), `${item.id} explanation needs ${lang}`);
    }
    // The correct option must not appear inside its own prompt.
    const answer = item.options[item.answer].toLowerCase().replace(/[!?.,]/g, '').trim();
    for (const text of Object.values(item.prompt as Record<string, string>)) assert.ok(!text.toLowerCase().includes(answer + ' ') && !text.toLowerCase().endsWith(answer), `${item.id} prompt gives the answer away`);
  }
}
const pastContrast = ITALIAN_GRAMMAR_TOPICS.find(topic => topic.id === 'past-contrast');
assert.ok(pastContrast, 'Past contrast topic must be registered');
for (const level of levels) {
  assert.ok(pastContrast.levels[level].exercises.length >= (level === 'B1' ? 7 : 11), `past-contrast ${level} needs exercises`);
  for (const item of pastContrast.levels[level].exercises) {
    assert.equal(item.options.length, 3, `${item.id} needs three options for the test bank`);
    for (const lang of ['en', 'it', 'pt', 'es', 'fr', 'de'] as const) {
      assert.ok((item.prompt as Record<string, string>)[lang]?.trim(), `${item.id} prompt needs ${lang}`);
      assert.ok((item.explanation as Record<string, string>)[lang]?.trim(), `${item.id} explanation needs ${lang}`);
    }
    // The correct option must not appear inside its own prompt.
    const answer = item.options[item.answer].toLowerCase().replace(/[!?.,]/g, '').trim();
    for (const text of Object.values(item.prompt as Record<string, string>)) assert.ok(!text.toLowerCase().includes(answer + ' ') && !text.toLowerCase().endsWith(answer), `${item.id} prompt gives the answer away`);
  }
}
console.log('italianGrammar.test.ts ok! Fifteen topics, three CEFR levels and 144 bilingual exercises verified.');

// Every picture exercise points at a real file in public/ and has alt text that
// does not give the correct answer away.
const norm = (s: string) => s.toLowerCase().replace(/[.,!?’']/g, ' ').replace(/\s+/g, ' ').trim();
for (const topic of ITALIAN_GRAMMAR_TOPICS) {
  for (const level of levels) {
    for (const item of topic.levels[level].exercises.filter(exercise => exercise.image)) {
      assert.ok(existsSync('public/' + item.image), item.id + ' image file must exist: ' + item.image);
      assert.ok(en(item.imageAlt).length > 0 && it(item.imageAlt).length > 0, item.id + ' needs bilingual alt text');
      const answer = norm(item.options[item.answer]);
      if (answer.split(' ').length >= 2) assert.ok(!norm(it(item.imageAlt)).includes(answer), item.id + ' alt text must not reveal the answer');
    }
  }
}

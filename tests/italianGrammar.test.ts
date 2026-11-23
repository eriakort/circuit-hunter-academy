import assert from 'node:assert/strict';
import { ITALIAN_GRAMMAR_TOPICS } from '../src/data/italianGrammar';

// Explanations may be a legacy [en, it] tuple or a localized record; read both.
const en = (v: any): string => (Array.isArray(v) ? v[0] : v?.en) ?? '';
const it = (v: any): string => (Array.isArray(v) ? v[1] : v?.it) ?? '';

const expectedTopics = ['articles', 'pronouns', 'passato-prossimo', 'partitive', 'reflexive', 'sentence-building', 'present-tense', 'imperfetto', 'prepositions', 'adjective-agreement'];
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
      assert.ok(item.prompt[0].length > 0 && item.prompt[1].length > 0, `${item.id} needs a bilingual prompt`);
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
console.log('italianGrammar.test.ts ok! Ten topics, three CEFR levels and 144 bilingual exercises verified.');

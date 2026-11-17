import assert from 'node:assert/strict';
import { ITALIAN_GRAMMAR_TOPICS } from '../src/data/italianGrammar';

const expectedTopics = ['articles', 'pronouns', 'passato-prossimo', 'partitive', 'reflexive', 'sentence-building'];
assert.deepEqual(ITALIAN_GRAMMAR_TOPICS.map(topic => topic.id), expectedTopics);

const levels = ['A1', 'A2', 'B1'] as const;
const exerciseIds = new Set<string>();
let totalExercises = 0;
for (const topic of ITALIAN_GRAMMAR_TOPICS) {
  for (const level of levels) {
    const content = topic.levels[level];
    assert.ok(content.explanation[0].length > 0, `${topic.id} ${level} needs an English explanation`);
    assert.ok(content.explanation[1].length > 0, `${topic.id} ${level} needs an Italian explanation`);
    assert.ok(content.example[0].length > 0 && content.example[1].length > 0, `${topic.id} ${level} needs bilingual examples`);
    assert.ok(content.exercises.length >= 3, `${topic.id} ${level} should include at least three practice questions`);
    for (const item of content.exercises) {
      assert.ok(!exerciseIds.has(item.id), `Duplicate exercise ID: ${item.id}`);
      exerciseIds.add(item.id);
      totalExercises += 1;
      assert.ok(item.prompt[0].length > 0 && item.prompt[1].length > 0, `${item.id} needs a bilingual prompt`);
      assert.ok(item.explanation[0].length > 0 && item.explanation[1].length > 0, `${item.id} needs bilingual feedback`);
      assert.ok(item.options.length >= 2, `${item.id} needs answer choices`);
      assert.ok(item.answer >= 0 && item.answer < item.options.length, `${item.id} answer index must be valid`);
    }
  }
}

assert.equal(totalExercises, 78, `Expected 78 starter exercises, got ${totalExercises}`);
assert.equal(ITALIAN_GRAMMAR_TOPICS.find(topic => topic.id === 'pronouns')?.levels.A1.exercises.length, 6);
assert.equal(ITALIAN_GRAMMAR_TOPICS.find(topic => topic.id === 'pronouns')?.levels.A2.exercises.length, 6);
assert.equal(ITALIAN_GRAMMAR_TOPICS.find(topic => topic.id === 'passato-prossimo')?.levels.A1.exercises.length, 6);
assert.equal(ITALIAN_GRAMMAR_TOPICS.find(topic => topic.id === 'passato-prossimo')?.levels.A2.exercises.length, 6);
assert.equal(ITALIAN_GRAMMAR_TOPICS.find(topic => topic.id === 'reflexive')?.levels.A1.exercises.length, 6);
assert.equal(ITALIAN_GRAMMAR_TOPICS.find(topic => topic.id === 'reflexive')?.levels.A2.exercises.length, 6);
assert.equal(ITALIAN_GRAMMAR_TOPICS.find(topic => topic.id === 'sentence-building')?.levels.A1.exercises.length, 6);
assert.equal(ITALIAN_GRAMMAR_TOPICS.find(topic => topic.id === 'sentence-building')?.levels.A2.exercises.length, 6);
console.log('italianGrammar.test.ts ok! Six topics, three CEFR levels and 78 bilingual exercises verified.');

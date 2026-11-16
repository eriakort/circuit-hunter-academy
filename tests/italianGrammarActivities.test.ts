import assert from 'node:assert/strict';
import { ITALIAN_GRAMMAR_ACTIVITIES, getGrammarActivities } from '../src/data/italianGrammarActivities';
const levels = ['A1', 'A2', 'B1'] as const;
const types = ['correct', 'order', 'translate', 'write'] as const;
const ids = new Set<string>();
assert.equal(ITALIAN_GRAMMAR_ACTIVITIES.length, 36);
for (const level of levels) {
  for (const type of types) {
    const topics = ['sentence-building', 'articles', 'pronouns'];
    const items = topics.flatMap(topic => getGrammarActivities(topic, level, type));
    assert.equal(items.length, 9, level + ' should have one ' + type + ' activity per topic');
    for (const item of items) {
      assert.ok(!ids.has(item.id), 'Duplicate activity id: ' + item.id);
      ids.add(item.id);
      assert.ok(item.title[0] && item.title[1], item.id + ' needs bilingual title');
      assert.ok(item.prompt[0] && item.prompt[1], item.id + ' needs bilingual prompt');
      assert.ok(item.hint[0] && item.hint[1], item.id + ' needs bilingual hint');
      assert.ok(item.explanation[0] && item.explanation[1], item.id + ' needs bilingual explanation');
      assert.ok(item.modelAnswer.length > 0, item.id + ' needs a model answer');
      if (type === 'order') assert.ok(item.words && item.words.length >= 3, item.id + ' needs word tiles');
      if (type === 'correct' || type === 'translate') assert.ok(item.acceptedAnswers && item.acceptedAnswers.length > 0, item.id + ' needs accepted answers');
      if (type === 'write') assert.ok(!item.acceptedAnswers, item.id + ' should use self-review');
    }
  }
}
console.log('italianGrammarActivities.test.ts ok! Four activity formats across A1, A2 and B1.');

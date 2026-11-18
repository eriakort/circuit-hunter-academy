import assert from 'node:assert/strict';
import { ITALIAN_GRAMMAR_TOPICS } from '../src/data/italianGrammar';
import { getGrammarActivities } from '../src/data/italianGrammarActivities';

const levels = ['A1', 'A2'] as const;
const topicIds = ['reflexive', 'sentence-building'] as const;

for (const topicId of topicIds) {
  const topic = ITALIAN_GRAMMAR_TOPICS.find(item => item.id === topicId);
  assert.ok(topic, topicId + ' topic must exist');

  for (const level of levels) {
    const content = topic.levels[level];
    assert.equal(content.exercises.length, 6, topicId + ' ' + level + ' should have six exercises');
    assert.ok(content.explanation.every(value => value.trim().length > 0), topicId + ' needs bilingual explanations');
    assert.ok(content.example.every(value => value.trim().length > 0), topicId + ' needs bilingual examples');

    for (const item of content.exercises) {
      assert.ok(item.prompt.every(value => value.trim().length > 0), item.id + ' needs bilingual prompts');
      assert.ok(item.explanation.every(value => value.trim().length > 0), item.id + ' needs bilingual feedback');
      assert.ok(item.options.length >= 3, item.id + ' needs meaningful answer choices');
      assert.ok(item.answer >= 0 && item.answer < item.options.length, item.id + ' answer index must be valid');
    }

    for (const type of ['correct', 'order', 'translate', 'write'] as const) {
      const activities = getGrammarActivities(topicId, level, type);
      const expectedCount = type === 'correct' || (topicId === 'sentence-building' && type === 'write') ? 1 : 2;
      assert.equal(activities.length, expectedCount, topicId + ' ' + level + ' needs ' + expectedCount + ' ' + type + ' activities');
      for (const activity of activities) {
        assert.ok(activity.prompt.every(value => value.trim().length > 0), activity.id + ' needs bilingual prompts');
        assert.ok(activity.hint.every(value => value.trim().length > 0), activity.id + ' needs bilingual hints');
        assert.ok(activity.explanation.every(value => value.trim().length > 0), activity.id + ' needs bilingual feedback');
        assert.ok(activity.modelAnswer.trim().length > 0, activity.id + ' needs a model answer');
        if (type === 'order') assert.ok(activity.words && activity.words.length >= 3, activity.id + ' needs word tiles');
        if (type === 'translate') assert.ok(activity.source?.trim(), activity.id + ' needs a source sentence');
        if (type === 'correct' || type === 'translate') assert.ok(activity.acceptedAnswers?.length, activity.id + ' needs accepted answers');
      }
    }
  }
}

const reflexiveA1 = ITALIAN_GRAMMAR_TOPICS.find(item => item.id === 'reflexive')!;
assert.equal(reflexiveA1.levels.B1.exercises.length, 3, 'B1 reflexive content should remain unchanged');
const sentenceB1 = ITALIAN_GRAMMAR_TOPICS.find(item => item.id === 'sentence-building')!;
assert.equal(sentenceB1.levels.B1.exercises.length, 3, 'B1 sentence construction content should remain unchanged');

console.log('Italian reflexive and sentence workshop A1/A2 coverage verified.');

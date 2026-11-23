import assert from 'node:assert/strict';
import { ITALIAN_GRAMMAR_TOPICS } from '../src/data/italianGrammar';
import { getGrammarActivities } from '../src/data/italianGrammarActivities';

// Explanations may be a legacy [en, it] tuple or a localized record; require
// non-empty English and Italian in either shape.
const hasBothLangs = (v: any): boolean =>
  Array.isArray(v)
    ? v.every((value: string) => value.trim().length > 0)
    : typeof v?.en === 'string' && v.en.trim().length > 0 && typeof v?.it === 'string' && v.it.trim().length > 0;

for (const topicId of ['articles', 'partitive'] as const) {
  const topic = ITALIAN_GRAMMAR_TOPICS.find(item => item.id === topicId);
  assert.ok(topic, topicId + ' topic must exist');

  for (const level of ['A1', 'A2'] as const) {
    const content = topic.levels[level];
    assert.ok(content.exercises.length >= 5, topicId + ' ' + level + ' should have a full question set');
    assert.ok(hasBothLangs(content.explanation), topicId + ' needs bilingual explanations');
    assert.ok(content.example.every(value => value.trim().length > 0), topicId + ' needs bilingual examples');

    for (const item of content.exercises) {
      assert.ok(item.prompt.every(value => value.trim().length > 0), item.id + ' needs bilingual prompts');
      assert.ok(hasBothLangs(item.explanation), item.id + ' needs bilingual feedback');
      assert.ok(item.options.length >= 3, item.id + ' needs at least three answer choices');
      assert.ok(item.answer >= 0 && item.answer < item.options.length, item.id + ' answer index must be valid');
    }

    for (const type of ['correct', 'order', 'translate', 'write'] as const) {
      const activities = getGrammarActivities(topicId, level, type);
      const expectedCount = type === 'correct' ? 1 : 2;
      assert.equal(activities.length, expectedCount, topicId + ' ' + level + ' needs ' + expectedCount + ' ' + type + ' activities');
      for (const activity of activities) {
        assert.ok(activity.prompt.every(value => value.trim().length > 0), activity.id + ' needs bilingual prompts');
        assert.ok(hasBothLangs(activity.explanation), activity.id + ' needs bilingual feedback');
      }
    }
  }
}

for (const topicId of ['articles', 'partitive'] as const) {
  const topic = ITALIAN_GRAMMAR_TOPICS.find(item => item.id === topicId)!;
  assert.ok(topic.levels.B1.exercises.length >= 3, topicId + ' B1 should keep a full question set');
}

console.log('Italian articles and partitive A1/A2 question banks verified.');

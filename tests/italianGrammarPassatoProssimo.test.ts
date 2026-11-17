import assert from 'node:assert/strict';
import { ITALIAN_GRAMMAR_TOPICS } from '../src/data/italianGrammar';
import { getGrammarActivities } from '../src/data/italianGrammarActivities';

const topic = ITALIAN_GRAMMAR_TOPICS.find(item => item.id === 'passato-prossimo');
assert.ok(topic, 'Passato prossimo topic must exist');

for (const level of ['A1', 'A2'] as const) {
  const content = topic.levels[level];
  assert.equal(content.exercises.length, 6, level + ' should have six passato prossimo questions');
  assert.ok(content.explanation.every(value => value.trim().length > 0), level + ' needs bilingual explanations');
  assert.ok(content.example.every(value => value.trim().length > 0), level + ' needs bilingual examples');
  assert.ok(content.exercises.every(item => item.prompt.every(value => value.trim().length > 0)), level + ' prompts must be bilingual');
  assert.ok(content.exercises.every(item => item.explanation.every(value => value.trim().length > 0)), level + ' feedback must be bilingual');

  for (const type of ['correct', 'order', 'translate', 'write'] as const) {
    const activities = getGrammarActivities('passato-prossimo', level, type);
    assert.equal(activities.length, 1, level + ' should have one ' + type + ' activity');
    assert.ok(activities[0].prompt.every(value => value.trim().length > 0), type + ' prompt must be bilingual');
    assert.ok(activities[0].hint.every(value => value.trim().length > 0), type + ' hint must be bilingual');
    assert.ok(activities[0].explanation.every(value => value.trim().length > 0), type + ' feedback must be bilingual');
    assert.ok(activities[0].modelAnswer.trim().length > 0, type + ' needs a model answer');
  }
}

const a1Write = getGrammarActivities('passato-prossimo', 'A1', 'write')[0];
const a2Write = getGrammarActivities('passato-prossimo', 'A2', 'write')[0];
assert.ok(a1Write.prompt[0].includes('one sentence about something you did yesterday'));
assert.ok(a2Write.prompt[0].includes('two sentences about last weekend'));
assert.ok(a1Write.modelAnswer.length > 0 && a2Write.modelAnswer.length > 0);

console.log('italianGrammarPassatoProssimo.test.ts ok! A1/A2 auxiliaries, participles, agreement and writing activities verified.');

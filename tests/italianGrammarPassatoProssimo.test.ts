import assert from 'node:assert/strict';
import { ITALIAN_GRAMMAR_TOPICS } from '../src/data/italianGrammar';
import { getGrammarActivities, matchesGrammarAnswer } from '../src/data/italianGrammarActivities';

const topic = ITALIAN_GRAMMAR_TOPICS.find(item => item.id === 'passato-prossimo');
assert.ok(topic, 'Passato prossimo topic must exist');

for (const level of ['A1', 'A2'] as const) {
  const content = topic.levels[level];
  assert.ok(content.exercises.length >= 5, level + ' should have a full passato prossimo question set');
  assert.ok(content.explanation.every(value => value.trim().length > 0), level + ' needs bilingual explanations');
  assert.ok(content.example.every(value => value.trim().length > 0), level + ' needs bilingual examples');
  assert.ok(content.exercises.every(item => item.prompt.every(value => value.trim().length > 0)), level + ' prompts must be bilingual');
  assert.ok(content.exercises.every(item => item.explanation.every(value => value.trim().length > 0)), level + ' feedback must be bilingual');

  for (const type of ['correct', 'order', 'translate', 'write'] as const) {
    const activities = getGrammarActivities('passato-prossimo', level, type);
    const expectedCount = type === 'correct' ? (level === 'A2' ? 2 : 1) : 2;
    assert.equal(activities.length, expectedCount, level + ' should have ' + expectedCount + ' ' + type + ' activities');
    for (const activity of activities) {
      assert.ok(activity.prompt.every(value => value.trim().length > 0), type + ' prompt must be bilingual');
      assert.ok(activity.hint.every(value => value.trim().length > 0), type + ' hint must be bilingual');
      assert.ok(activity.explanation.every(value => value.trim().length > 0), type + ' feedback must be bilingual');
      assert.ok(activity.modelAnswer.trim().length > 0, type + ' needs a model answer');
    }
  }
}

const a2Corrections = getGrammarActivities('passato-prossimo', 'A2', 'correct');
assert.ok(a2Corrections.some(item => item.id === 'passato-prossimo-a2-correct-arrivare'));
assert.ok(matchesGrammarAnswer('Maria è arrivata tardi.', a2Corrections.find(item => item.id === 'passato-prossimo-a2-correct-arrivare')!.acceptedAnswers || []));

const a1Write = getGrammarActivities('passato-prossimo', 'A1', 'write')[0];
const a2Write = getGrammarActivities('passato-prossimo', 'A2', 'write')[0];
assert.ok(a1Write.prompt[0].includes('one sentence about something you did yesterday'));
assert.ok(a2Write.prompt[0].includes('two sentences about last weekend'));
assert.ok(a1Write.modelAnswer.length > 0 && a2Write.modelAnswer.length > 0);

console.log('italianGrammarPassatoProssimo.test.ts ok! A1/A2 auxiliaries, participles, agreement and writing activities verified.');

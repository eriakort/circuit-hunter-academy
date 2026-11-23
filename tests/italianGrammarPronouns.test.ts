import assert from 'node:assert/strict';
import { ITALIAN_GRAMMAR_TOPICS } from '../src/data/italianGrammar';
import { getGrammarActivities } from '../src/data/italianGrammarActivities';

const topic = ITALIAN_GRAMMAR_TOPICS.find(item => item.id === 'pronouns');
assert.ok(topic, 'Pronouns topic must exist');

for (const level of ['A1', 'A2'] as const) {
  const content = topic.levels[level];
  assert.ok(content.exercises.length >= 5, level + ' should have a full pronoun question set');
  assert.ok(content.explanation.every(value => value.trim().length > 0));
  assert.ok(content.example.every(value => value.trim().length > 0));
  assert.ok(content.exercises.every(item => item.prompt.every(value => value.trim().length > 0)));
  assert.ok(content.exercises.every(item => item.explanation.every(value => value.trim().length > 0)));
}

const a1 = getGrammarActivities('pronouns', 'A1', 'write');
const a2 = getGrammarActivities('pronouns', 'A2', 'write');
assert.equal(a1.length, 2, 'A1 needs two progressive sentence-writing prompts');
assert.equal(a2.length, 2, 'A2 needs two progressive sentence-writing prompts');
assert.ok(a1.every(activity => activity.prompt.every(value => value.trim().length > 0)));
assert.ok(a2.every(activity => activity.prompt.every(value => value.trim().length > 0)));
assert.ok(getGrammarActivities('pronouns', 'A1', 'order').length > 0);
assert.ok(getGrammarActivities('pronouns', 'A2', 'translate').length > 0);
assert.ok(getGrammarActivities('pronouns', 'A1', 'correct').length > 0);
assert.ok(getGrammarActivities('pronouns', 'A2', 'correct').length > 0);

console.log('italianGrammarPronouns.test.ts ok! A1/A2 pronouns, bilingual feedback and original sentence writing verified.');

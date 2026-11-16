import assert from 'node:assert/strict';
import { getCategories, getCompleteQuestionBank, filterQuestionPool } from '../src/data/questionBank';
import { ITALIAN_GRAMMAR_TOPICS } from '../src/data/italianGrammar';

const bank = getCompleteQuestionBank();
const grammarQuestions = bank.filter(question => question.id.startsWith('it-grammar-'));
const expectedCount = ITALIAN_GRAMMAR_TOPICS.reduce(
  (total, topic) => total + (['A1', 'A2', 'B1'] as const).reduce((levelTotal, level) => levelTotal + topic.levels[level].exercises.length, 0),
  0
);
assert.equal(grammarQuestions.length, expectedCount, 'Every canonical grammar exercise should appear in the shared test bank');

const ids = new Set<string>();
for (const question of grammarQuestions) {
  assert.ok(!ids.has(question.id), 'Duplicate shared grammar question: ' + question.id);
  ids.add(question.id);
  assert.equal(question.subject, 'italian');
  assert.equal(question.a.length, 3);
  assert.ok(question.q[0] && question.q[1], question.id + ' needs a bilingual prompt');
  assert.ok(question.why[0] && question.why[1], question.id + ' needs bilingual feedback');
  const topic = ITALIAN_GRAMMAR_TOPICS.find(item => question.missionId.startsWith('grammar-' + item.id + '-'));
  assert.ok(topic, question.id + ' should map to a known grammar topic');
  const level = question.missionId.split('-').at(-1);
  assert.ok(level === 'A1' || level === 'A2' || level === 'B1');
  const source = topic.levels[level].exercises.find(item => question.id.endsWith(item.id));
  assert.ok(source, question.id + ' should retain its canonical exercise source');
  assert.equal(question.a[0][0], source.options[source.answer], 'Correct answer must be first for TestScreen scoring');
}

const categories = getCategories('italian');
for (const topic of ITALIAN_GRAMMAR_TOPICS) {
  for (const level of ['A1', 'A2', 'B1'] as const) {
    const id = 'grammar-' + topic.id + '-' + level;
    const category = categories.find(item => item.id === id);
    assert.ok(category, 'Missing Italian test category: ' + id);
    const pool = filterQuestionPool('italian', category);
    assert.equal(pool.length, topic.levels[level].exercises.length);
    assert.ok(pool.every(question => question.missionId === id));
  }
}

const allItalian = categories.find(item => item.id === 'all-italian');
assert.ok(allItalian);
assert.ok(filterQuestionPool('italian', allItalian).length >= expectedCount);
console.log('italianGrammarQuestionBank.test.ts ok! Shared grammar content is available to Italian tests by topic and CEFR level.');

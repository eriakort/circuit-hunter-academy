import assert from 'node:assert/strict';
import {
  getCompleteQuestionBank,
  getCategories,
  filterQuestionPool,
  pickRandomQuestions
} from '../src/data/questionBank';
import { ITALIAN_GRAMMAR_TOPICS } from '../src/data/italianGrammar';

const bank = getCompleteQuestionBank();
assert.ok(bank.length > 300, `Expected >300 questions, got ${bank.length}`);

// Test CS categories
const csCategories = getCategories('cs');
assert.ok(csCategories.length > 15, `Expected >15 categories for CS, got ${csCategories.length}`);

// Test Physics categories
const physCategories = getCategories('phys');
assert.ok(physCategories.length >= 6, `Expected >=6 categories for Physics, got ${physCategories.length}`);

// Test Math categories and questions
const mathCategories = getCategories('math');
assert.ok(mathCategories.length >= 7, `Expected >=7 categories for Math, got ${mathCategories.length}`);
const mathQuestions = bank.filter(q => q.subject === 'math');
assert.ok(mathQuestions.length >= 170, `Expected >=170 questions for Math, got ${mathQuestions.length}`);

// Test Chapter filter
const ch1Category = csCategories.find(c => c.arcIndex === 0);
assert.ok(ch1Category !== undefined, 'Chapter 1 category should exist');
if (ch1Category) {
  const ch1Pool = filterQuestionPool('cs', ch1Category);
  assert.ok(ch1Pool.length > 0, 'Chapter 1 pool should have questions');

  // Test random pick of 5 questions
  const picked5 = pickRandomQuestions(ch1Pool, 5);
  assert.ok(picked5.length === 5, `Expected 5 picked questions, got ${picked5.length}`);

  // Test that all 5 are unique (no duplicates in the same set)
  const uniqueIds = new Set(picked5.map(q => q.id));
  assert.ok(uniqueIds.size === 5, 'All picked questions in the set must be unique');

  // Test another draw - can share questions or be distinct, but must also be unique within itself
  const picked5Again = pickRandomQuestions(ch1Pool, 5);
  const uniqueIdsAgain = new Set(picked5Again.map(q => q.id));
  assert.ok(uniqueIdsAgain.size === 5, 'Second draw must also have unique questions within set');
}


// Every Grade 9 subject uses its registered bilingual name in the all-topics category.
const physicsAll = getCategories('phys')[0];
assert.ok(physicsAll?.label[0] === 'All Physics Topics', 'Physics category should be labelled correctly');
assert.ok(physicsAll?.label[1] === 'Tutti gli argomenti di Fisica', 'Italian Physics category should be translated');
const mathAll = getCategories('math')[0];
assert.ok(mathAll?.label[0] === 'All Mathematics Topics', 'Mathematics category should be labelled correctly');
assert.ok(mathAll?.label[1] === 'Tutti gli argomenti di Matematica', 'Italian Mathematics category should be translated');
const csAll = getCategories('cs')[0];
assert.ok(csAll?.label[0] === 'All Computer Science Topics', 'Computer Science category should be labelled correctly');
assert.ok(csAll?.label[1] === 'Tutti gli argomenti di Informatica', 'Italian Computer Science category should be translated');

// Grade 5 Science has its own bilingual subject-wide category and question pool.
const scienceCategories = getCategories('science');
assert.ok(scienceCategories.length >= 2, `Expected Science categories, got ${scienceCategories.length}`);
assert.ok(scienceCategories[0]?.label[0] === 'All Science & Technology Topics', 'Science category should use the Science & Technology name');
assert.ok(scienceCategories[0]?.label[1] === 'Tutti gli argomenti di Scienze e Tecnologia', 'Italian Science category should be translated');
const scienceQuestions = bank.filter(q => q.subject === 'science');
assert.ok(scienceQuestions.length > 0, 'Grade 5 Science should have questions in the shared test bank');
assert.ok(scienceCategories[0]?.count === scienceQuestions.length, 'Science subject-wide category count should match its question pool');

// Grammar Training and Italian subject tests share the same source exercises.
const italianCategories = getCategories('italian');
const grammarCategories = italianCategories.filter(category => category.type === 'grammar');
assert.equal(grammarCategories.length, ITALIAN_GRAMMAR_TOPICS.length * 4, 'Each grammar topic should have an all-level category and three CEFR-specific categories');
const grammarQuestions = bank.filter(question => question.subject === 'italian' && question.id.startsWith('italian-grammar-'));
const expectedGrammarCount = ITALIAN_GRAMMAR_TOPICS.reduce((total, topic) => total + (['A1', 'A2', 'B1'] as const).reduce((levelTotal, level) => levelTotal + topic.levels[level].exercises.length, 0), 0);
assert.equal(grammarQuestions.length, expectedGrammarCount, 'Every Grammar Training multiple-choice exercise should appear once in the test bank');
assert.equal(grammarQuestions.length, 90, 'The Italian subject test bank should include all 90 current grammar questions');
for (const topic of ITALIAN_GRAMMAR_TOPICS) {
  const category = grammarCategories.find(item => item.grammarTopicId === topic.id);
  assert.ok(category, 'Missing Italian grammar test category: ' + topic.id);
  const pool = filterQuestionPool('italian', category!);
  const expectedTopicCount = (['A1', 'A2', 'B1'] as const).reduce((sum, level) => sum + topic.levels[level].exercises.length, 0);
  assert.equal(pool.length, expectedTopicCount, topic.id + ' should expose every A1, A2 and B1 question');
  for (const level of ['A1', 'A2', 'B1'] as const) {
    const levelCategory = grammarCategories.find(item => item.grammarTopicId === topic.id && item.grammarLevel === level);
    assert.ok(levelCategory, 'Missing ' + level + ' test category for ' + topic.id);
    const levelPool = filterQuestionPool('italian', levelCategory!);
    assert.equal(levelPool.length, topic.levels[level].exercises.length, topic.id + ' ' + level + ' should expose every level question');
    assert.ok(levelPool.every(question => question.grammarLevel === level), topic.id + ' ' + level + ' filter must not mix CEFR levels');
    assert.equal(levelCategory!.count, levelPool.length, topic.id + ' ' + level + ' category count should match its pool');
  }
  assert.equal(new Set(pool.map(question => question.id)).size, pool.length, topic.id + ' questions should have unique IDs');
  assert.ok(pool.every(question => question.a.length === 3 && question.a[0][0].length > 0), 'Grammar questions should be valid multiple-choice items');
  for (const question of pool) {
    const source = topic.levels[question.grammarLevel || 'A1'].exercises.find(exercise => 'italian-grammar-' + exercise.id === question.id);
    assert.ok(source, 'Test question must map back to the Grammar Training source exercise');
    assert.equal(question.a[0][0], source!.options[source!.answer], 'Correct answer must be preserved when adapting to the test-bank format');
    assert.deepEqual(question.q, source!.prompt, 'Prompt must be reused without duplication');
    assert.deepEqual(question.why, source!.explanation, 'Explanation must be reused without duplication');
  }
}
assert.equal(italianCategories[0]?.count, bank.filter(question => question.subject === 'italian').length, 'Italian all-topics count should include grammar and mission questions');

console.log('questionBank.test.ts ok! Total bank questions:', bank.length);

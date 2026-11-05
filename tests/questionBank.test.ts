import {
  getCompleteQuestionBank,
  getCategories,
  filterQuestionPool,
  pickRandomQuestions
} from '../src/data/questionBank';

const bank = getCompleteQuestionBank();
console.assert(bank.length > 300, `Expected >300 questions, got ${bank.length}`);

// Test CS categories
const csCategories = getCategories('cs');
console.assert(csCategories.length > 15, `Expected >15 categories for CS, got ${csCategories.length}`);

// Test Physics categories
const physCategories = getCategories('phys');
console.assert(physCategories.length >= 6, `Expected >=6 categories for Physics, got ${physCategories.length}`);

// Test Math categories and questions
const mathCategories = getCategories('math');
console.assert(mathCategories.length >= 7, `Expected >=7 categories for Math, got ${mathCategories.length}`);
const mathQuestions = bank.filter(q => q.subject === 'math');
console.assert(mathQuestions.length >= 170, `Expected >=170 questions for Math, got ${mathQuestions.length}`);

// Test Chapter filter
const ch1Category = csCategories.find(c => c.arcIndex === 0);
console.assert(ch1Category !== undefined, 'Chapter 1 category should exist');
if (ch1Category) {
  const ch1Pool = filterQuestionPool('cs', ch1Category);
  console.assert(ch1Pool.length > 0, 'Chapter 1 pool should have questions');

  // Test random pick of 5 questions
  const picked5 = pickRandomQuestions(ch1Pool, 5);
  console.assert(picked5.length === 5, `Expected 5 picked questions, got ${picked5.length}`);

  // Test that all 5 are unique (no duplicates in the same set)
  const uniqueIds = new Set(picked5.map(q => q.id));
  console.assert(uniqueIds.size === 5, 'All picked questions in the set must be unique');

  // Test another draw - can share questions or be distinct, but must also be unique within itself
  const picked5Again = pickRandomQuestions(ch1Pool, 5);
  const uniqueIdsAgain = new Set(picked5Again.map(q => q.id));
  console.assert(uniqueIdsAgain.size === 5, 'Second draw must also have unique questions within set');
}


// Every Grade 9 subject uses its registered bilingual name in the all-topics category.
const physicsAll = getCategories('phys')[0];
console.assert(physicsAll?.label[0] === 'All Physics Topics', 'Physics category should be labelled correctly');
console.assert(physicsAll?.label[1] === 'Tutti gli argomenti di Fisica', 'Italian Physics category should be translated');
const mathAll = getCategories('math')[0];
console.assert(mathAll?.label[0] === 'All Mathematics Topics', 'Mathematics category should be labelled correctly');
console.assert(mathAll?.label[1] === 'Tutti gli argomenti di Matematica', 'Italian Mathematics category should be translated');
const csAll = getCategories('cs')[0];
console.assert(csAll?.label[0] === 'All Computer Science Topics', 'Computer Science category should be labelled correctly');
console.assert(csAll?.label[1] === 'Tutti gli argomenti di Informatica', 'Italian Computer Science category should be translated');

// Grade 5 Science has its own bilingual subject-wide category and question pool.
const scienceCategories = getCategories('science');
console.assert(scienceCategories.length >= 2, `Expected Science categories, got ${scienceCategories.length}`);
console.assert(scienceCategories[0]?.label[0] === 'All Science & Technology Topics', 'Science category should use the Science & Technology name');
console.assert(scienceCategories[0]?.label[1] === 'Tutti gli argomenti di Scienze e Tecnologia', 'Italian Science category should be translated');
const scienceQuestions = bank.filter(q => q.subject === 'science');
console.assert(scienceQuestions.length > 0, 'Grade 5 Science should have questions in the shared test bank');
console.assert(scienceCategories[0]?.count === scienceQuestions.length, 'Science subject-wide category count should match its question pool');

console.log('questionBank.test.ts ok! Total bank questions:', bank.length);

import assert from 'node:assert/strict';
import { normalizeRaceQuestion, normalizeRaceQuestions } from '../src/raceArenaClient';

const question = {
  id: 'question-1',
  prompt: ['What is a CPU?', 'Che cos’è una CPU?'],
  choices: [['Processor', 'Processore'], ['Memory', 'Memoria']]
};
assert.deepEqual(normalizeRaceQuestion(question), question);
assert.equal(normalizeRaceQuestion({ ...question, choices: ['Processor'] }), null);
assert.equal(normalizeRaceQuestion({ ...question, id: '' }), null);
assert.equal(normalizeRaceQuestion({ ...question, prompt: ['Only one language'] }), null);
assert.deepEqual(normalizeRaceQuestions([question]), [question]);
assert.deepEqual(normalizeRaceQuestions([question, { ...question, choices: [] }]), []);
assert.deepEqual(normalizeRaceQuestions({ questions: [question] }), []);

console.log('raceArenaClient.test.ts ok');

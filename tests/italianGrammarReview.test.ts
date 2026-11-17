import assert from 'node:assert/strict';
import { ITALIAN_GRAMMAR_TOPICS } from '../src/data/italianGrammar';
import { buildAdaptiveGrammarReview, getGrammarTopicProgress } from '../src/data/italianGrammarReview';

const level = 'A1' as const;
const allQuestions = ITALIAN_GRAMMAR_TOPICS.flatMap(topic => topic.levels[level].exercises);
const missed = allQuestions.find(item => item.id === 'art-a1-2')!;
const unseen = allQuestions.find(item => item.id === 'pro-a1-1')!;
const mastered = allQuestions.find(item => item.id === 'ref-a1-1')!;
const progress = {
  [missed.id]: { attempts: 3, correct: false },
  [unseen.id]: { attempts: 0, correct: false },
  [mastered.id]: { attempts: 2, correct: true }
};

const review = buildAdaptiveGrammarReview(ITALIAN_GRAMMAR_TOPICS, level, progress);
assert.equal(review.length, allQuestions.length, 'Mixed review should include every question at the selected level');
assert.equal(new Set(review.map(item => item.id)).size, allQuestions.length, 'Mixed review should not duplicate questions');
assert.equal(review[0].id, missed.id, 'Previously missed questions should be prioritised');
assert.ok(review.findIndex(item => item.id === unseen.id) < review.findIndex(item => item.id === mastered.id), 'Unseen questions should come before mastered questions');
assert.equal(review[review.length - 1]?.id, mastered.id, 'Mastered questions should be reserved for reinforcement at the end');
assert.ok(review.some(item => item.topicId === 'articles') && review.some(item => item.topicId === 'reflexive'), 'Mixed review should include different topics');

const a2Review = buildAdaptiveGrammarReview(ITALIAN_GRAMMAR_TOPICS, 'A2');
assert.ok(a2Review.every(item => item.id.includes('-a2-')), 'The selected CEFR level must be preserved');
assert.equal(buildAdaptiveGrammarReview([], level).length, 0, 'An empty topic list should produce an empty review');

const reflexive = ITALIAN_GRAMMAR_TOPICS.find(item => item.id === 'reflexive')!;
const topicProgress = getGrammarTopicProgress(reflexive, level, progress);
assert.deepEqual(topicProgress, { mastered: 1, total: reflexive.levels.A1.exercises.length });
assert.deepEqual(getGrammarTopicProgress(reflexive, level), { mastered: 0, total: reflexive.levels.A1.exercises.length });

console.log('italianGrammarReview.test.ts ok! Adaptive prioritisation, mixed topics and mastery summaries verified.');

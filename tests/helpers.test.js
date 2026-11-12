// npx tsx tests/helpers.test.js
import assert from 'node:assert/strict';
import { rng, sshuffle, rankOf, nextRank, raceXP, raceAvatar } from '../src/helpers';
import { recommendNextLearningAction } from '../src/adaptiveLearning';
import { scheduleNextConceptReview, REVIEW_DAY_MS } from '../src/spacedRepetition';
import { calculateLearningStreak } from '../src/learningStreak';


// Race avatars must treat peer-controlled names and CSS classes as untrusted.
const hostileAvatar = raceAvatar('<img src=x onerror=alert(1)>', Number('20\"/><script>alert(1)</script>'), 'avatar\" onload=\"alert(1)');
assert.ok(!hostileAvatar.includes('<img'));
assert.ok(!hostileAvatar.includes('<script>'));
assert.ok(hostileAvatar.includes('>&lt;</text>'));
assert.ok(hostileAvatar.includes('class="avatar&quot; onload=&quot;alert(1)"'));
assert.ok(hostileAvatar.includes('hsl(0 55% 22%)'));
const normalAvatar = raceAvatar('Hana', 210);
assert.ok(normalAvatar.includes('>H</text>'));
assert.ok(normalAvatar.includes('hsl(210 55% 22%)'));

const RANKS = [
  [0, 'Intern'],
  [100, 'Junior'],
  [500, 'Senior'],
  [1000, 'Lead']
];

console.assert(rankOf(0, RANKS)[1] === 'Intern');
console.assert(rankOf(150, RANKS)[1] === 'Junior');
console.assert(rankOf(999, RANKS)[1] === 'Senior');
console.assert(nextRank(50, RANKS)[0] === 100);
console.assert(raceXP(5, true, 2) === 40);
console.assert(raceXP(5, false, 2) === 15);
console.assert(raceXP(5, true, 1) === 15);

const r = rng(42);
const shuffled = sshuffle([1, 2, 3, 4, 5], r);
console.assert(shuffled.length === 5);
console.assert(new Set(shuffled).size === 5);


// Adaptive learning recommendations respond to assessment and revision outcomes.
const weakConcept = { id: 'cpu-cycle', title: ['CPU cycle', 'Ciclo della CPU'] };
const weakMission = { id: 'mission-1', learning: { concepts: [weakConcept] } };
const nextMission = { id: 'mission-2', learning: { concepts: [] } };
const weakProgress = {
  'mission-1': {
    mastered: false,
    lastAttemptAt: 100,
    masteryConceptPerformance: { 'cpu-cycle': { correct: 1, attempted: 4 } },
    masteryLastAttemptWeakConcepts: ['cpu-cycle'],
    conceptRevisionPerformance: {}
  }
};
const reviewRecommendation = recommendNextLearningAction([weakMission], weakProgress, nextMission);
console.assert(reviewRecommendation.kind === 'review');
console.assert(reviewRecommendation.concept.id === 'cpu-cycle');

const revisionReadyProgress = {
  'mission-1': {
    ...weakProgress['mission-1'],
    conceptRevisionPerformance: {
      'cpu-cycle': { correct: 4, attempted: 4, sessions: 1, lastReviewedAt: 200 }
    }
  }
};
const retryRecommendation = recommendNextLearningAction([weakMission], revisionReadyProgress, nextMission);
console.assert(retryRecommendation.kind === 'retry');
console.assert(retryRecommendation.revisionAccuracy === 100);

const morePracticeProgress = {
  'mission-1': {
    ...revisionReadyProgress['mission-1'],
    conceptRevisionPerformance: {
      'cpu-cycle': { correct: 2, attempted: 4, sessions: 1, lastReviewedAt: 200 }
    }
  }
};
console.assert(recommendNextLearningAction([weakMission], morePracticeProgress, nextMission).kind === 'review');

const masteredProgress = {
  'mission-1': { ...weakProgress['mission-1'], mastered: true }
};
console.assert(recommendNextLearningAction([weakMission], masteredProgress, nextMission).kind === 'mission');
console.assert(recommendNextLearningAction([weakMission], { 'mission-1': { mastered: true } }).kind === 'dojo');

console.log('helpers.test.js ok');


// Spaced repetition lengthens intervals after strong retrieval and shortens them after mistakes.
const firstReview = scheduleNextConceptReview(undefined, 100, 1_000);
console.assert(firstReview.intervalDays === 3);
console.assert(firstReview.dueAt === 1_000 + 3 * REVIEW_DAY_MS);
const successfulReview = scheduleNextConceptReview(firstReview, 90, firstReview.dueAt);
console.assert(successfulReview.intervalDays === 6);
console.assert(successfulReview.repetitions === 2);
const difficultReview = scheduleNextConceptReview(successfulReview, 45, successfulReview.dueAt);
console.assert(difficultReview.intervalDays === 1);
console.assert(difficultReview.repetitions === 0);
const partialReview = scheduleNextConceptReview(firstReview, 70, firstReview.dueAt);
console.assert(partialReview.intervalDays === 2);


// Study streaks use unique UTC calendar days and tolerate duplicate activities.
const streakNow = Date.UTC(2026, 10, 3, 12);
const streak = calculateLearningStreak([
  streakNow,
  streakNow - 1 * 24 * 60 * 60 * 1000,
  streakNow - 1 * 24 * 60 * 60 * 1000,
  streakNow - 2 * 24 * 60 * 60 * 1000,
  streakNow - 4 * 24 * 60 * 60 * 1000,
  streakNow - 6 * 24 * 60 * 60 * 1000
], streakNow);
console.assert(streak.currentStreak === 3);
console.assert(streak.bestStreak === 3);
console.assert(streak.activeLast7Days === 5);
console.assert(streak.recentDays.length === 7);
console.assert(streak.recentDays[6].active === true);
console.assert(calculateLearningStreak([], streakNow).currentStreak === 0);


// Grade catalogue keeps the current curriculum separate from the upcoming primary curriculum.
import { GRADES, GRADE_SUBJECT_IDS, getSubjectsForGrade } from '../src/data/gradeData';
import { SUBJECTS } from '../src/data/gameData';
console.assert(GRADES.some(grade => grade.id === 'grade5' && grade.status === 'preparing'));
console.assert(GRADES.some(grade => grade.id === 'grade9' && grade.status === 'ready'));
console.assert(GRADE_SUBJECT_IDS.grade5.join(',') === 'science');
console.assert(getSubjectsForGrade('grade9', SUBJECTS).map(subject => subject.id).join(',') === 'cs,phys,math,italian');
console.assert(getSubjectsForGrade('grade5', SUBJECTS).map(subject => subject.id).join(',') === 'science');

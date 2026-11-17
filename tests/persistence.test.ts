import assert from 'node:assert/strict';
import { MISSIONS, ARCS, UNITS } from '../src/data/gameData';
import { GRADE_SUBJECT_IDS } from '../src/data/gradeData';
import { getCurriculumSubjects } from '../src/data/curriculumSubjects';
import { createFreshProgressState, isValidCheckpointResult, isValidGrammarActivityId, restoreSavedNavigation, sanitizeCheckpointProgress, sanitizeGrammarProgress, sanitizeGameState, SAVE_SCHEMA } from '../src/persistence';
import type { GameState } from '../src/types';

const validMission = MISSIONS.find(mission => (ARCS[mission.arc]?.subject || 'cs') === 'cs');
assert.ok(validMission, 'the current curriculum contains a computer science mission');
const validMissionIndex = MISSIONS.indexOf(validMission!);
const learningMission = MISSIONS.find(mission => !!mission.learning);
assert.ok(learningMission, 'the curriculum contains a mission with structured learning content');
const learningConcept = learningMission!.learning!.concepts[0];
const masteryQuestions = learningMission!.learning!.masteryAssessment?.questions || [];

const legacy = sanitizeGameState({ name: '  Hana  ', xp: 120, lang: 'it', cleared: { [validMission!.id]: true } });
assert.equal(legacy.grade, 'grade9', 'legacy saves without a grade retain the Grade 9 migration');
assert.equal(legacy.name, 'Hana');
assert.equal(legacy.xp, 120);
assert.equal(legacy.lang, 'it');
assert.equal(legacy.cleared[validMission!.id], true);
assert.equal(legacy.v, SAVE_SCHEMA);

const grade5 = sanitizeGameState({
  grade: 'grade5',
  subject: 'phys',
  unit: 3,
  xp: -40,
  name: 'A'.repeat(40),
  lang: 'fr',
  cleared: { [validMission!.id]: true, 'unknown-mission': true },
  learningProgress: { [learningMission!.id]: { mastered: true }, 'unknown-mission': { mastered: true } }
});
assert.equal(grade5.grade, 'grade5');
assert.equal(grade5.subject, 'science', 'a Grade 5 save cannot restore a Grade 9 subject');
assert.equal(grade5.unit, UNITS.findIndex(unit => unit.subject === 'science'));
assert.equal(grade5.xp, 0);
assert.equal(grade5.name.length, 20);
assert.equal(grade5.lang, 'en');
assert.equal(Object.keys(grade5.cleared).length, 1);
assert.equal(Object.keys(grade5.learningProgress).length, 1);

const unselected = sanitizeGameState({ grade: null, subject: 'cs' });
assert.equal(unselected.grade, null, 'an explicit unselected grade must not be auto-selected');

const grade9State: GameState = {
  ...sanitizeGameState({ grade: 'grade9', subject: 'cs' }),
  grade: 'grade9',
  subject: 'cs'
};
const restored = restoreSavedNavigation({
  view: 'scene',
  currentMissionIndex: validMissionIndex,
  currentSceneIndex: 999,
  missionId: validMission!.id,
  grade: 'grade9',
  subject: 'cs'
}, grade9State);
assert.ok(restored);
assert.equal(restored!.view, 'scene');
assert.equal(restored!.currentMissionIndex, validMissionIndex);
assert.equal(restored!.currentSceneIndex, validMission!.scenes.length - 1);
assert.equal(restored!.missionId, validMission!.id);

const wrongSubject = restoreSavedNavigation({
  view: 'scene',
  currentMissionIndex: validMissionIndex,
  currentSceneIndex: 0,
  missionId: validMission!.id,
  grade: 'grade5',
  subject: 'science'
}, grade9State);
assert.equal(wrongSubject, null, 'navigation saved under another grade/subject must be discarded');

const wrongMission = restoreSavedNavigation({
  view: 'scene',
  currentMissionIndex: validMissionIndex,
  currentSceneIndex: 0,
  missionId: 'not-a-real-mission',
  grade: 'grade9',
  subject: 'cs'
}, grade9State);
assert.equal(wrongMission?.view, 'map', 'a stale mission reference should return to the map');

const brokenBattle = restoreSavedNavigation({
  view: 'battle',
  currentMissionIndex: validMissionIndex,
  currentSceneIndex: 0,
  missionId: validMission!.id,
  battleContext: { isDojo: 'yes' },
  grade: 'grade9',
  subject: 'cs'
}, grade9State);
assert.equal(brokenBattle?.view, 'map', 'an invalid battle context must not reopen a broken battle');

const scienceMission = MISSIONS.find(mission => (ARCS[mission.arc]?.subject || 'cs') === 'science');
assert.ok(scienceMission, 'the Grade 5 science curriculum contains missions');
const grade5ScienceState = sanitizeGameState({ grade: 'grade5', subject: 'science' });
const scienceNavigation = restoreSavedNavigation({
  view: 'scene',
  missionId: scienceMission!.id,
  currentMissionIndex: MISSIONS.indexOf(scienceMission!),
  currentSceneIndex: 0,
  grade: 'grade5',
  subject: 'science'
}, grade5ScienceState);
assert.equal(scienceNavigation?.missionId, scienceMission!.id);
assert.equal(scienceNavigation?.view, 'scene');

const physicsState = sanitizeGameState({ grade: 'grade9', subject: 'phys' });
const physicsCheckpoint = restoreSavedNavigation({
  view: 'checkpoint', currentMissionIndex: 0, currentSceneIndex: 0,
  grade: 'grade9', subject: 'phys', missionId: null
}, physicsState);
assert.equal(physicsCheckpoint?.view, 'checkpoint', 'Physics learners can restore their Physics checkpoint');

const wrongPhysicsCheckpoint = restoreSavedNavigation({
  view: 'checkpoint', currentMissionIndex: 0, currentSceneIndex: 0,
  grade: 'grade9', subject: 'math', missionId: null
}, grade9State);
assert.equal(wrongPhysicsCheckpoint, null, 'a Mathematics learner cannot restore the Physics checkpoint');

const wrongGradeCsCheckpoint = restoreSavedNavigation({
  view: 'cs-checkpoint', currentMissionIndex: 0, currentSceneIndex: 0,
  grade: 'grade5', subject: 'science', missionId: null
}, grade5ScienceState);
assert.equal(wrongGradeCsCheckpoint, null, 'Grade 5 cannot restore a Grade 9 Computer Science checkpoint');

const wrongSubjectItalianLab = restoreSavedNavigation({
  view: 'it-lab', currentMissionIndex: 0, currentSceneIndex: 0,
  grade: 'grade9', subject: 'math', missionId: null
}, grade9State);
assert.equal(wrongSubjectItalianLab, null, 'non-Italian subjects cannot restore the Italian speaking lab');

const corrupt = sanitizeGameState({ grade: 'unknown', subject: 'invalid', unit: -1, xp: Number.NaN });
assert.equal(corrupt.grade, null);
assert.equal(corrupt.subject, 'cs');
assert.equal(corrupt.xp, 0);

const grade10Chem = sanitizeGameState({ grade: 'grade10', subject: 'chem10', cleared: { chem_l2_m1: true } });
assert.equal(grade10Chem.grade, 'grade10');
assert.equal(grade10Chem.subject, 'chem10');
assert.equal(grade10Chem.unit, UNITS.findIndex(unit => unit.subject === 'chem10'));
assert.equal(sanitizeGameState({ grade: 'grade10', subject: 'cs' }).subject, 'chem10', 'Grade 10 falls back to its own curriculum');

const grade11Chem = sanitizeGameState({ grade: 'grade11', subject: 'chem11', cleared: { chem_l3_m1: true } });
assert.equal(grade11Chem.grade, 'grade11');
assert.equal(grade11Chem.subject, 'chem11');
assert.equal(grade11Chem.unit, UNITS.findIndex(unit => unit.subject === 'chem11'));
assert.equal(sanitizeGameState({ grade: 'grade11', subject: 'chem10' }).subject, 'chem11', 'Grade 11 cannot restore Grade 10 Chemistry');

console.log('persistence.test.ts ok');


const resetSource = sanitizeGameState({
  grade: 'grade5', subject: 'science', lang: 'it', name: 'Learner', xp: 250,
  cleared: { 'g5-science-intro': true },
  checkpointProgress: {
    'science-review': { attempts: 3, bestScore: 90, lastScore: 90, completed: true, completedAt: 123 }
  }
});
const resetState = createFreshProgressState(resetSource);
assert.equal(resetState.grade, 'grade5', 'reset preserves the selected grade');
assert.equal(resetState.subject, 'science', 'reset preserves the selected subject');
assert.equal(resetState.lang, 'it', 'reset preserves the selected language');
assert.equal(resetState.xp, 0, 'reset clears XP');
assert.deepEqual(resetState.cleared, {}, 'reset clears mission completions');
assert.deepEqual(resetState.learningProgress, {}, 'reset clears learning progress');
assert.deepEqual(resetState.checkpointProgress, {}, 'reset clears checkpoint completions and attempts');


const checkpointSave = sanitizeCheckpointProgress({
  'physics-foundations': { attempts: 2, bestScore: 11, lastScore: 9, completed: true, completedAt: 1700000000000 },
  'computer-science-foundations': { attempts: -1, bestScore: 12, lastScore: 8, completed: false },
  'computer-science-applied-skills': { attempts: 1, bestScore: 13, lastScore: 13, completed: true },
  'italian-cefr-proficiency': { attempts: 3, bestScore: 10, lastScore: 11, completed: true },
  'unknown-checkpoint': { attempts: 1, bestScore: 12, lastScore: 12, completed: true }
});
assert.deepEqual(Object.keys(checkpointSave), ['physics-foundations'], 'only known checkpoint IDs with bounded, consistent scores survive sanitization');
assert.equal(checkpointSave['physics-foundations'].completedAt, 1700000000000);
assert.deepEqual(sanitizeCheckpointProgress({ 'physics-foundations': { attempts: 1, bestScore: 5, lastScore: 4, completed: true, completedAt: Number.NaN } }), {}, 'invalid completion timestamps are discarded');


const validCheckpointIds = [
  'physics-foundations',
  'computer-science-foundations',
  'computer-science-applied-skills',
  'italian-cefr-proficiency'
];
for (const checkpointId of validCheckpointIds) {
  assert.equal(isValidCheckpointResult(checkpointId, 10, 12, true, 250), true);
}
assert.equal(isValidCheckpointResult('unknown-checkpoint', 10, 12, true, 250), false);
assert.equal(isValidCheckpointResult('physics-foundations', 13, 12, true, 250), false);
assert.equal(isValidCheckpointResult('physics-foundations', -1, 12, false, 80), false);
assert.equal(isValidCheckpointResult('physics-foundations', 5.5, 12, false, 80), false);
assert.equal(isValidCheckpointResult('physics-foundations', 5, 0, false, 80), false);
assert.equal(isValidCheckpointResult('physics-foundations', 5, 13, false, 80), false);
assert.equal(isValidCheckpointResult('physics-foundations', 5, 12, 'false', 80), false);
assert.equal(isValidCheckpointResult('physics-foundations', 5, 12, false, -1), false);


const learningSave = sanitizeGameState({
  grade: 'grade9',
  subject: 'cs',
  learningProgress: {
    [learningMission!.id]: {
      guidedPracticeComplete: true,
      independentPracticeComplete: false,
      mastered: true,
      techniqueUnlocked: true,
      knowledgeCheckScore: 85,
      masteryScore: 90,
      masteryAttempts: 2,
      masteryConceptPerformance: {
        [learningConcept.id]: { correct: 3, attempted: 4 },
        'unknown-concept': { correct: 4, attempted: 4 },
        'bad-counts': { correct: 5, attempted: 2 }
      },
      masteryLastAttemptWeakConcepts: [learningConcept.id, 'unknown-concept'],
      masteryAttemptHistory: [
        { score: 90, attemptedAt: 1700000000000, attempt: 2 },
        { score: 101, attemptedAt: 1700000000000, attempt: 3 }
      ],
      masteryAttemptReviews: masteryQuestions.length ? [{
        score: 90, attemptedAt: 1700000000000, attempt: 2,
        answers: masteryQuestions.map(() => 0)
      }, {
        score: 90, attemptedAt: 1700000000000, attempt: 3,
        answers: masteryQuestions.map(() => 999)
      }] : [],
      conceptReviewSchedule: {
        [learningConcept.id]: { dueAt: 1700000000000, lastReviewedAt: 1690000000000, intervalDays: 7, repetitions: 2, lastScore: 90 },
        'unknown-concept': { dueAt: 1700000000000, lastReviewedAt: 1690000000000, intervalDays: 7, repetitions: 2, lastScore: 90 }
      },
      conceptRevisionPerformance: {
        [learningConcept.id]: { correct: 2, attempted: 3, sessions: 1, lastReviewedAt: 1700000000000, baselineMasteryPercent: 50, postRevisionMasteryPercent: 75, postRevisionAt: 1700000000001 },
        'unknown-concept': { correct: 5, attempted: 2, sessions: 1, lastReviewedAt: 1700000000000 }
      },
      lastAttemptAt: 1700000000000,
      unexpectedField: 'should not persist'
    }
  }
});
const savedLearning = learningSave.learningProgress[learningMission!.id];
assert.equal(savedLearning.mastered, true);
assert.equal(savedLearning.masteryScore, 90);
assert.deepEqual(Object.keys(savedLearning.masteryConceptPerformance || {}), [learningConcept.id]);
assert.deepEqual(savedLearning.masteryLastAttemptWeakConcepts, [learningConcept.id]);
assert.equal(savedLearning.masteryAttemptHistory?.length, 1);
assert.equal(savedLearning.masteryAttemptReviews?.length, masteryQuestions.length ? 1 : 0);
assert.deepEqual(Object.keys(savedLearning.conceptReviewSchedule || {}), [learningConcept.id]);
assert.deepEqual(Object.keys(savedLearning.conceptRevisionPerformance || {}), [learningConcept.id]);
assert.equal('unexpectedField' in savedLearning, false);
assert.deepEqual(sanitizeGameState({
  grade: 'grade9', subject: 'cs',
  learningProgress: { [learningMission!.id]: { masteryAttemptHistory: [{ score: 50, attemptedAt: Number.NaN, attempt: 1 }] } }
}).learningProgress[learningMission!.id].masteryAttemptHistory, undefined, 'invalid timestamps are removed from mastery history');


assert.equal(isValidGrammarActivityId('art-a1-1'), true, 'known grammar quiz questions can record progress');
assert.equal(isValidGrammarActivityId('sentence-a1-correct'), true, 'known active grammar activities can record progress');
assert.equal(isValidGrammarActivityId('unknown-grammar-item'), false, 'unknown grammar activity IDs cannot award XP');
const grammarSave = sanitizeGrammarProgress({
  'art-a1-1': { attempts: 3, correct: true, completedAt: 1700000000000, xpAwarded: true },
  'sentence-a1-correct': { attempts: 2, correct: false, xpAwarded: false },
  'unknown-grammar-item': { attempts: 1, correct: true, xpAwarded: true },
  'pro-a1-1': { attempts: -1, correct: true, xpAwarded: true },
  'art-a1-2': { attempts: 1, correct: true, xpAwarded: true, completedAt: Number.NaN },
  'art-a1-3': { attempts: 1, correct: false, xpAwarded: true }
});
assert.deepEqual(Object.keys(grammarSave), ['art-a1-1', 'sentence-a1-correct'], 'only known, internally consistent grammar progress survives sanitization');
assert.equal(sanitizeGameState({ grade: 'grade9', subject: 'italian', grammarProgress: { 'art-a1-1': { attempts: 1, correct: true, xpAwarded: true } } }).grammarProgress?.['art-a1-1'].correct, true, 'grammar mastery survives save restoration');
assert.deepEqual(createFreshProgressState(sanitizeGameState({ grade: 'grade9', subject: 'italian', grammarProgress: { 'art-a1-1': { attempts: 1, correct: true, xpAwarded: true } } })).grammarProgress, {}, 'reset clears grammar progress');


const ghanaAssessmentMission = MISSIONS.find(mission => mission.id === 'gh-core-ss1-45-indicator-diagnostic');
assert.ok(ghanaAssessmentMission?.learning?.masteryAssessment, 'the Ghana SHS 1 diagnostic has a structured assessment');
const ghanaQuestionCount = ghanaAssessmentMission!.learning!.masteryAssessment!.questions.length;
const selectedAlternateForms = Array.from({ length: ghanaQuestionCount }, () => 1);
const savedAlternateReview = sanitizeGameState({
  grade: 'grade9',
  subject: 'ghcoremath',
  learningProgress: {
    [ghanaAssessmentMission!.id]: {
      masteryAttemptReviews: [{
        score: 82,
        attemptedAt: 1700000000000,
        attempt: 1,
        answers: Array.from({ length: ghanaQuestionCount }, () => 0),
        questionVariantIndexes: selectedAlternateForms
      }]
    }
  }
}).learningProgress[ghanaAssessmentMission!.id].masteryAttemptReviews?.[0];
assert.deepEqual(savedAlternateReview?.questionVariantIndexes, selectedAlternateForms, 'saved reviews preserve the exact alternate question form for each indicator');

const invalidAlternateReview = sanitizeGameState({
  grade: 'grade9',
  subject: 'ghcoremath',
  learningProgress: {
    [ghanaAssessmentMission!.id]: {
      masteryAttemptReviews: [{
        score: 82,
        attemptedAt: 1700000000000,
        attempt: 1,
        answers: Array.from({ length: ghanaQuestionCount }, () => 0),
        questionVariantIndexes: [...selectedAlternateForms.slice(0, -1), 2]
      }]
    }
  }
}).learningProgress[ghanaAssessmentMission!.id].masteryAttemptReviews;
assert.equal(invalidAlternateReview, undefined, 'out-of-range variant selections are rejected');

const legacyAlternateReview = sanitizeGameState({
  grade: 'grade9',
  subject: 'ghcoremath',
  learningProgress: {
    [ghanaAssessmentMission!.id]: {
      masteryAttemptReviews: [{
        score: 80,
        attemptedAt: 1700000000000,
        attempt: 1,
        answers: Array.from({ length: ghanaQuestionCount }, () => 0)
      }]
    }
  }
}).learningProgress[ghanaAssessmentMission!.id].masteryAttemptReviews?.[0];
assert.equal(legacyAlternateReview?.questionVariantIndexes, undefined, 'legacy assessment reviews remain valid and default to canonical questions');

const ghanaSubjectState = sanitizeGameState({ grade: 'grade9', subject: 'ghcoremath' }, 'ghana-nacca');
assert.ok(!GRADE_SUBJECT_IDS.grade9.includes('ghcoremath'), 'Ghana subjects stay outside the Italy Grade 9 catalogue');
assert.deepEqual(getCurriculumSubjects('grade9', 'ghana-nacca').map(subject => subject.id), ['ghcoremath'], 'Ghana Core Mathematics is available in the Ghana SS1 pathway');
assert.equal(ghanaSubjectState.subject, 'ghcoremath', 'Ghana Core Mathematics survives save sanitization under its own curriculum');
assert.notEqual(sanitizeGameState({ grade: 'grade9', subject: 'ghcoremath' }, 'italy-national').subject, 'ghcoremath', 'the Italian save namespace rejects Ghana-only subjects');
const ghanaMission = MISSIONS.find(mission => mission.id === 'gh-core-ss1-statistical-investigation-mastery');
assert.ok(ghanaMission, 'the Community Data Lab mission is registered');
const ghanaNavigation = restoreSavedNavigation({
  view: 'scene',
  currentMissionIndex: MISSIONS.indexOf(ghanaMission!),
  currentSceneIndex: 0,
  missionId: ghanaMission!.id,
  grade: 'grade9',
  subject: 'ghcoremath'
}, ghanaSubjectState, 'ghana-nacca');
assert.equal(ghanaNavigation?.missionId, ghanaMission!.id, 'Ghana Core Mathematics mission navigation survives reload restoration');

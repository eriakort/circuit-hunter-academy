import assert from 'node:assert/strict';
import { MISSIONS, ARCS, UNITS } from '../src/data/gameData';
import { createFreshProgressState, isValidCheckpointResult, restoreSavedNavigation, sanitizeCheckpointProgress, sanitizeGameState, SAVE_SCHEMA } from '../src/persistence';
import type { GameState } from '../src/types';

const validMission = MISSIONS.find(mission => (ARCS[mission.arc]?.subject || 'cs') === 'cs');
assert.ok(validMission, 'the current curriculum contains a computer science mission');
const validMissionIndex = MISSIONS.indexOf(validMission!);

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
  learningProgress: { [validMission!.id]: { mastered: true }, 'unknown-mission': { mastered: true } }
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

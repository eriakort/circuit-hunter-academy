import type { GameState, GradeId, SubjectId, ViewMode } from './types';
import { MISSIONS, UNITS, ARCS } from './data/gameData';
import { GRADE_SUBJECT_IDS } from './data/gradeData';

export const SAVE_KEY = 'circuit-hunter-academy-v2';
export const NAVIGATION_KEY = 'circuit-hunter-academy-navigation-v2';
export const SAVE_SCHEMA = 4;

export const VALID_VIEWS: ViewMode[] = [
  'grades', 'subjects', 'map', 'scene', 'battle', 'result', 'ending',
  'dojo', 'codex', 'race', 'test', 'formula', 'checkpoint',
  'cs-checkpoint', 'cs-applied-checkpoint', 'it-checkpoint', 'it-lab'
];

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

const isGrade = (value: unknown): value is GradeId =>
  value === 'grade5' || value === 'grade9';

const isSubject = (value: unknown): value is SubjectId =>
  value === 'cs' || value === 'phys' || value === 'math' || value === 'science' || value === 'italian';

const firstUnitForSubject = (subject: SubjectId): number =>
  UNITS.findIndex(unit => (unit.subject || 'cs') === subject);

const isFiniteNonNegative = (value: unknown): value is number =>
  typeof value === 'number' && Number.isFinite(value) && value >= 0;

const sanitizeLearningMissionProgress = (value: unknown, mission: typeof MISSIONS[number]) => {
  if (!isRecord(value) || !mission.learning) return null;
  const progress: Record<string, unknown> = {};
  const concepts = new Set(mission.learning.concepts.map(concept => concept.id));
  const assessmentQuestions = mission.learning.masteryAssessment?.questions || [];

  for (const key of ['guidedPracticeComplete', 'independentPracticeComplete', 'mastered', 'techniqueUnlocked'] as const) {
    if (typeof value[key] === 'boolean') progress[key] = value[key];
  }
  for (const key of ['knowledgeCheckScore', 'masteryScore'] as const) {
    if (Number.isInteger(value[key]) && (value[key] as number) >= 0 && (value[key] as number) <= 100) {
      progress[key] = value[key];
    }
  }
  for (const key of ['masteryAttempts'] as const) {
    if (Number.isInteger(value[key]) && (value[key] as number) >= 0 && (value[key] as number) <= 100000) {
      progress[key] = value[key];
    }
  }
  if (isFiniteNonNegative(value.lastAttemptAt)) progress.lastAttemptAt = value.lastAttemptAt;

  const sanitizeConceptCounts = (candidate: unknown) => {
    if (!isRecord(candidate)) return {};
    return Object.fromEntries(Object.entries(candidate).flatMap(([id, item]) => {
      if (!concepts.has(id) || !isRecord(item)) return [];
      const { correct, attempted } = item;
      if (!Number.isInteger(correct) || !Number.isInteger(attempted)
        || (correct as number) < 0 || (attempted as number) < 0
        || (correct as number) > (attempted as number) || (attempted as number) > 100000) return [];
      return [[id, { correct, attempted }]];
    }));
  };

  const conceptPerformance = sanitizeConceptCounts(value.masteryConceptPerformance);
  if (Object.keys(conceptPerformance).length) progress.masteryConceptPerformance = conceptPerformance;

  if (Array.isArray(value.masteryLastAttemptWeakConcepts)) {
    progress.masteryLastAttemptWeakConcepts = [...new Set(value.masteryLastAttemptWeakConcepts.filter(
      (id): id is string => typeof id === 'string' && concepts.has(id)
    ))].slice(0, concepts.size);
  }

  const sanitizeAttempts = (candidate: unknown, includeAnswers: boolean) => {
    if (!Array.isArray(candidate)) return undefined;
    return candidate.slice(-20).flatMap(item => {
      if (!isRecord(item) || !Number.isInteger(item.score) || (item.score as number) < 0
        || (item.score as number) > 100 || !isFiniteNonNegative(item.attemptedAt)
        || !Number.isInteger(item.attempt) || (item.attempt as number) < 1
        || (item.attempt as number) > 100000) return [];
      const base = { score: item.score as number, attemptedAt: item.attemptedAt, attempt: item.attempt as number };
      if (!includeAnswers) return [base];
      if (!Array.isArray(item.answers) || item.answers.length !== assessmentQuestions.length
        || item.answers.some((answer, index) => !Number.isInteger(answer) || (answer as number) < 0
          || (answer as number) >= assessmentQuestions[index].a.length)) return [];
      return [{ ...base, answers: [...item.answers] as number[] }];
    });
  };
  const history = sanitizeAttempts(value.masteryAttemptHistory, false);
  if (history?.length) progress.masteryAttemptHistory = history;
  const reviews = sanitizeAttempts(value.masteryAttemptReviews, true);
  if (reviews?.length) progress.masteryAttemptReviews = reviews;

  if (isRecord(value.conceptReviewSchedule)) {
    const schedule = Object.fromEntries(Object.entries(value.conceptReviewSchedule).flatMap(([id, item]) => {
      if (!concepts.has(id) || !isRecord(item)) return [];
      const { dueAt, lastReviewedAt, intervalDays, repetitions, lastScore } = item;
      if (!isFiniteNonNegative(dueAt) || !isFiniteNonNegative(lastReviewedAt)
        || typeof intervalDays !== 'number' || !Number.isFinite(intervalDays) || intervalDays < 0 || intervalDays > 3650
        || !Number.isInteger(repetitions) || (repetitions as number) < 0 || (repetitions as number) > 100000
        || !Number.isInteger(lastScore) || (lastScore as number) < 0 || (lastScore as number) > 100) return [];
      return [[id, { dueAt, lastReviewedAt, intervalDays, repetitions, lastScore }]];
    }));
    if (Object.keys(schedule).length) progress.conceptReviewSchedule = schedule;
  }

  if (isRecord(value.conceptRevisionPerformance)) {
    const revisions = Object.fromEntries(Object.entries(value.conceptRevisionPerformance).flatMap(([id, item]) => {
      if (!concepts.has(id) || !isRecord(item)) return [];
      const { correct, attempted, sessions, lastReviewedAt, baselineMasteryPercent, postRevisionMasteryPercent, postRevisionAt } = item;
      if (!Number.isInteger(correct) || (correct as number) < 0 || !Number.isInteger(attempted)
        || (attempted as number) < 0 || (correct as number) > (attempted as number)
        || !Number.isInteger(sessions) || (sessions as number) < 0 || (sessions as number) > 100000
        || !isFiniteNonNegative(lastReviewedAt)) return [];
      if (baselineMasteryPercent !== undefined && (!Number.isInteger(baselineMasteryPercent) || (baselineMasteryPercent as number) < 0 || (baselineMasteryPercent as number) > 100)) return [];
      if (postRevisionMasteryPercent !== undefined && (!Number.isInteger(postRevisionMasteryPercent) || (postRevisionMasteryPercent as number) < 0 || (postRevisionMasteryPercent as number) > 100)) return [];
      if (postRevisionAt !== undefined && !isFiniteNonNegative(postRevisionAt)) return [];
      return [[id, { correct, attempted, sessions, lastReviewedAt,
        ...(baselineMasteryPercent !== undefined ? { baselineMasteryPercent } : {}),
        ...(postRevisionMasteryPercent !== undefined ? { postRevisionMasteryPercent } : {}),
        ...(postRevisionAt !== undefined ? { postRevisionAt } : {})
      }]];
    }));
    if (Object.keys(revisions).length) progress.conceptRevisionPerformance = revisions;
  }

  return progress;
};

const sanitizeLearningProgress = (value: unknown): Record<string, any> => {
  if (!isRecord(value)) return {};
  const missionById = new Map(MISSIONS.map(mission => [mission.id, mission]));
  return Object.fromEntries(Object.entries(value).flatMap(([id, entry]) => {
    const mission = missionById.get(id);
    if (!mission?.learning) return [];
    const sanitized = sanitizeLearningMissionProgress(entry, mission);
    return sanitized ? [[id, sanitized]] : [];
  }));
};

const VALID_CHECKPOINT_IDS = new Set([
  'physics-foundations',
  'computer-science-foundations',
  'computer-science-applied-skills',
  'italian-cefr-proficiency'
]);

/** Validate checkpoint writes before they can affect live progress or XP. */
export const isValidCheckpointResult = (
  checkpointId: unknown,
  score: unknown,
  total: unknown,
  passed: unknown,
  xpReward: unknown
): boolean =>
  typeof checkpointId === 'string' && VALID_CHECKPOINT_IDS.has(checkpointId)
  && Number.isInteger(score) && (score as number) >= 0
  && Number.isInteger(total) && (total as number) > 0 && (total as number) <= 12
  && (score as number) <= (total as number)
  && typeof passed === 'boolean'
  && Number.isInteger(xpReward) && (xpReward as number) >= 0;

/** Keep only known checkpoint records with internally consistent, bounded results. */
export const sanitizeCheckpointProgress = (value: unknown): NonNullable<GameState['checkpointProgress']> => {
  if (!isRecord(value)) return {};
  return Object.fromEntries(Object.entries(value).filter(([id, entry]) => {
    if (!VALID_CHECKPOINT_IDS.has(id) || !isRecord(entry)) return false;
    const { attempts, bestScore, lastScore, completed, completedAt } = entry;
    return Number.isInteger(attempts) && (attempts as number) >= 0 && (attempts as number) <= 100000
      && Number.isInteger(bestScore) && (bestScore as number) >= 0 && (bestScore as number) <= 12
      && Number.isInteger(lastScore) && (lastScore as number) >= 0 && (lastScore as number) <= 12
      && (bestScore as number) >= (lastScore as number)
      && typeof completed === 'boolean'
      && (completedAt === undefined || (typeof completedAt === 'number' && Number.isFinite(completedAt) && completedAt >= 0));
  })) as NonNullable<GameState['checkpointProgress']>;
};

export const sanitizeGameState = (value: unknown): GameState => {
  const saved = isRecord(value) ? value : {};
  const hasSavedGrade = Object.prototype.hasOwnProperty.call(saved, 'grade');
  const grade: GradeId | null = isGrade(saved.grade)
    ? saved.grade
    : (hasSavedGrade ? null : 'grade9');

  const requestedSubject = isSubject(saved.subject) ? saved.subject : null;
  const allowedSubjects = grade ? GRADE_SUBJECT_IDS[grade] : GRADE_SUBJECT_IDS.grade9;
  const subject = requestedSubject && allowedSubjects.includes(requestedSubject)
    ? requestedSubject
    : (allowedSubjects[0] as SubjectId);

  const requestedUnit = Number.isInteger(saved.unit) ? saved.unit as number : -1;
  const unitMatchesSubject = requestedUnit >= 0
    && requestedUnit < UNITS.length
    && (UNITS[requestedUnit].subject || 'cs') === subject;
  const firstUnit = firstUnitForSubject(subject);
  const validMissionIds = new Set(MISSIONS.map(mission => mission.id));
  const validSeenIndexes = new Set(MISSIONS.map((_, index) => String(index)));
  const seen = isRecord(saved.seen)
    ? Object.fromEntries(Object.entries(saved.seen).filter(([key, entry]) =>
        validSeenIndexes.has(key) && entry === true).map(([key]) => [key, true] as const)) as Record<number, boolean>
    : {};

  return {
    grade,
    name: typeof saved.name === 'string' ? saved.name.trim().slice(0, 20) : '',
    lang: saved.lang === 'it' ? 'it' : 'en',
    xp: typeof saved.xp === 'number' && Number.isFinite(saved.xp) ? Math.max(0, Math.floor(saved.xp)) : 0,
    subject,
    unit: unitMatchesSubject ? requestedUnit : (firstUnit < 0 ? 0 : firstUnit),
    cleared: isRecord(saved.cleared)
      ? Object.fromEntries(Object.entries(saved.cleared).filter(([key, entry]) => validMissionIds.has(key) && entry === true).map(([key]) => [key, true] as const)) as Record<string, boolean>
      : {},
    seen,
    flawless: isRecord(saved.flawless)
      ? Object.fromEntries(Object.entries(saved.flawless).filter(([key, entry]) => validMissionIds.has(key) && entry === true).map(([key]) => [key, true] as const)) as Record<string, boolean>
      : {},
    learningProgress: sanitizeLearningProgress(saved.learningProgress),
    checkpointProgress: sanitizeCheckpointProgress(saved.checkpointProgress),
    v: SAVE_SCHEMA
  };
};

export interface SavedNavigation {
  view: ViewMode;
  currentMissionIndex: number;
  currentSceneIndex: number;
  battleContext: { isDojo: boolean; customQuestions?: any[] } | null;
  grade: GradeId | null;
  subject: SubjectId;
  missionId: string | null;
}

const safeBattleContext = (value: unknown): SavedNavigation['battleContext'] => {
  if (!isRecord(value) || typeof value.isDojo !== 'boolean') return null;
  const questions = Array.isArray(value.customQuestions) && value.customQuestions.length <= 100
    ? value.customQuestions
    : undefined;
  return { isDojo: value.isDojo, ...(questions ? { customQuestions: questions } : {}) };
};

const isViewAvailableForCurriculum = (view: ViewMode, grade: GradeId, subject: SubjectId): boolean => {
  if (view === 'checkpoint') return subject === 'phys';
  if (view === 'cs-checkpoint' || view === 'cs-applied-checkpoint') {
    return grade === 'grade9' && subject === 'cs';
  }
  if (view === 'it-checkpoint' || view === 'it-lab') return subject === 'italian';
  return true;
};

export const restoreSavedNavigation = (value: unknown, state: GameState): SavedNavigation | null => {
  if (!isRecord(value) || !VALID_VIEWS.includes(value.view as ViewMode)) return null;
  if (!state.grade) {
    return {
      view: 'grades',
      currentMissionIndex: 0,
      currentSceneIndex: 0,
      battleContext: null,
      grade: null,
      subject: state.subject,
      missionId: null
    };
  }

  // A navigation record written under another curriculum must never override the current selection.
  if (value.grade !== undefined && value.grade !== state.grade) return null;
  if (value.subject !== undefined && value.subject !== state.subject) return null;

  // Dedicated checkpoints and labs must belong to the selected curriculum.
  if (!isViewAvailableForCurriculum(value.view as ViewMode, state.grade, state.subject)) return null;

  // Resolve against the selected grade and subject, never the global mission list.
  const subjectMissionIndexes = MISSIONS
    .map((mission, index) => ({ mission, index }))
    .filter(({ mission }) => (ARCS[mission.arc]?.subject || 'cs') === state.subject)
    .filter(() => state.grade !== 'grade5' || state.subject === 'science' || state.subject === 'italian')
    .filter(() => state.grade !== 'grade9' || state.subject !== 'science');

  const missionId = typeof value.missionId === 'string' ? value.missionId : null;
  let resolved = missionId
    ? subjectMissionIndexes.find(({ mission }) => mission.id === missionId)
    : undefined;
  const legacyIndex = Number.isInteger(value.currentMissionIndex) ? value.currentMissionIndex as number : -1;
  if (!missionId && legacyIndex >= 0 && legacyIndex < MISSIONS.length) {
    resolved = subjectMissionIndexes.find(({ index }) => index === legacyIndex);
  }
  const missionView = value.view === 'scene' || value.view === 'battle';
  const missionRestoreFailed = missionView && !resolved;
  if (!resolved) resolved = subjectMissionIndexes[0];

  const index = resolved?.index ?? 0;
  const sceneCount = resolved?.mission.scenes.length ?? 1;
  const requestedScene = Number.isInteger(value.currentSceneIndex) ? value.currentSceneIndex as number : 0;
  const requestedView = value.view as ViewMode;
  const view = missionRestoreFailed || (requestedView === 'battle' && !safeBattleContext(value.battleContext))
    ? 'map'
    : requestedView;

  return {
    view,
    currentMissionIndex: index,
    currentSceneIndex: Math.min(Math.max(requestedScene, 0), Math.max(0, sceneCount - 1)),
    battleContext: view === 'battle' ? safeBattleContext(value.battleContext) : null,
    grade: state.grade,
    subject: state.subject,
    missionId: resolved?.mission.id ?? null
  };
};


/** Create a clean progress save while preserving the learner's curriculum and preferences. */
export const createFreshProgressState = (state: GameState): GameState => ({
  grade: state.grade,
  name: '',
  lang: state.lang,
  xp: 0,
  subject: state.subject,
  unit: firstUnitForSubject(state.subject) < 0 ? 0 : firstUnitForSubject(state.subject),
  cleared: {},
  seen: {},
  flawless: {},
  learningProgress: {},
  checkpointProgress: {},
  v: SAVE_SCHEMA
});

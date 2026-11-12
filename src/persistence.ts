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

const validProgressMap = (value: unknown, validIds: Set<string>): Record<string, any> => {
  if (!isRecord(value)) return {};
  return Object.fromEntries(
    Object.entries(value).filter(([key, entry]) => validIds.has(key) && isRecord(entry))
  );
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
    learningProgress: validProgressMap(saved.learningProgress, validMissionIds),
    checkpointProgress: (isRecord(saved.checkpointProgress)
      ? Object.fromEntries(Object.entries(saved.checkpointProgress).filter(([, entry]) =>
          isRecord(entry) && Number.isInteger(entry.attempts) && Number.isFinite(entry.bestScore)
          && Number.isFinite(entry.lastScore) && typeof entry.completed === 'boolean'))
      : {}) as GameState['checkpointProgress'],
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

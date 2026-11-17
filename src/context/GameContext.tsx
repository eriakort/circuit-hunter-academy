import React, { createContext, useContext, useState, useEffect } from 'react';
import { GameState, GradeId, Language, SubjectId, ViewMode, Mission, LearningMissionProgress } from '../types';
import { MISSIONS, UNITS, ARCS, RANKS } from '../data/gameData';
import { rankOf } from '../helpers';
import { GRADE_SUBJECT_IDS } from '../data/gradeData';
import { isMissionOpen, isValidXpAward } from '../missionAccess';
import { NAVIGATION_KEY, SAVE_KEY, SAVE_SCHEMA, createFreshProgressState, isValidCheckpointResult, isValidGrammarActivityId, restoreSavedNavigation, sanitizeGameState, SavedNavigation } from '../persistence';
import { DEFAULT_CURRICULUM_ID, type CurriculumId } from '../data/curricula';
import { getCurriculumContentLanguage } from '../data/curriculumLanguage';
import { CURRICULUM_PROFILE_KEY, createDefaultCurriculumProfile, getCurriculumNavigationKey, getCurriculumSaveKey, migrateLegacyItalianSave, sanitizeCurriculumProfile, switchActiveCurriculum, type CurriculumProfile } from '../data/curriculumProfile';



const defaultState: GameState = {
  grade: null,
  name: '',
  lang: 'en',
  xp: 0,
  subject: 'cs',
  unit: 0,
  cleared: {},
  seen: {},
  flawless: {},
  learningProgress: {},
  grammarProgress: {},
  v: SAVE_SCHEMA
};

interface GameContextType {
  state: GameState;
  curriculumProfile: CurriculumProfile;
  setCurriculum: (curriculumId: CurriculumId) => void;
  view: ViewMode;
  currentMissionIndex: number;
  currentSceneIndex: number;
  currentMission: Mission;
  battleContext: { isDojo: boolean; customQuestions?: any[] } | null;
  setLanguage: (lang: Language) => void;
  setGrade: (grade: GradeId) => void;
  setSubject: (sub: SubjectId) => void;
  setUnit: (u: number) => void;
  setName: (name: string) => void;
  addXP: (amount: number) => void;
  award: (amount: number) => void;
  clearMission: (missionId: string, flawless: boolean, xpGained: number) => void;
  saveLearningProgress: (missionId: string, progress: Partial<LearningMissionProgress>) => void;
  saveCheckpointResult: (checkpointId: string, score: number, total: number, passed: boolean, xpReward: number) => void;
  recordGrammarResult: (activityId: string, correct: boolean) => void;
  markSeen: (missionIndex: number) => void;
  openMission: (index: number) => void;
  nextScene: () => void;
  prevScene: () => void;
  goToView: (view: ViewMode) => void;
  startBattle: (isDojo?: boolean, customQuestions?: any[]) => void;
  resetProgress: () => void;
  inMissionFirstTime: () => boolean;
  isOpen: (i: number) => boolean;
  myMissions: () => Mission[];
  allCleared: () => boolean;
}

const getFirstMissionIndexForSubject = (subject: SubjectId): number => {
  const index = MISSIONS.findIndex(mission => (ARCS[mission.arc]?.subject || 'cs') === subject);
  return index < 0 ? 0 : index;
};

const isMissionIndexForSubject = (index: number, subject: SubjectId): boolean =>
  Number.isInteger(index) && index >= 0 && !!MISSIONS[index]
  && (ARCS[MISSIONS[index].arc]?.subject || 'cs') === subject;

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [curriculumProfile, setCurriculumProfile] = useState<CurriculumProfile>(() => {
    try {
      migrateLegacyItalianSave(localStorage);
      const raw = localStorage.getItem(CURRICULUM_PROFILE_KEY);
      return raw ? sanitizeCurriculumProfile(JSON.parse(raw)) : createDefaultCurriculumProfile();
    } catch (e) {
      console.error('Failed to load curriculum profile; using the default curriculum:', e);
      return createDefaultCurriculumProfile();
    }
  });
  const activeSaveKey = getCurriculumSaveKey(curriculumProfile.activeCurriculumId);
  const activeNavigationKey = getCurriculumNavigationKey(curriculumProfile.activeCurriculumId);

  const [state, setState] = useState<GameState>(() => {
    try {
      const raw = localStorage.getItem(activeSaveKey);
      const restoredState = raw ? sanitizeGameState(JSON.parse(raw), curriculumProfile.activeCurriculumId) : defaultState;
      return { ...restoredState, lang: getCurriculumContentLanguage(curriculumProfile.activeCurriculumId, restoredState.lang) };
    } catch (e) {
      console.error('Failed to load save state; starting with a safe default:', e);
      return defaultState;
    }
  });

  const [initialNavigation] = useState<SavedNavigation | null>(() => {
    try {
      const raw = localStorage.getItem(activeNavigationKey);
      return raw ? restoreSavedNavigation(JSON.parse(raw), state, curriculumProfile.activeCurriculumId) : null;
    } catch (e) {
      console.error('Failed to restore navigation; opening the learning map:', e);
      return null;
    }
  });
  const [view, setView] = useState<ViewMode>(() => {
    if (!state.grade) return 'grades';
    return initialNavigation?.view || 'map';
  });
  const [currentMissionIndex, setCurrentMissionIndex] = useState<number>(
    () => initialNavigation && isMissionIndexForSubject(initialNavigation.currentMissionIndex, state.subject)
      ? initialNavigation.currentMissionIndex
      : getFirstMissionIndexForSubject(state.subject)
  );
  const [currentSceneIndex, setCurrentSceneIndex] = useState<number>(
    () => initialNavigation?.currentSceneIndex ?? 0
  );
  const [battleContext, setBattleContext] = useState<{ isDojo: boolean; customQuestions?: any[] } | null>(
    () => initialNavigation?.battleContext ?? null
  );

  useEffect(() => {
    try {
      const serialized = JSON.stringify(state);
      localStorage.setItem(activeSaveKey, serialized);
      // Keep the legacy Italian key in sync for backwards compatibility with older clients.
      if (curriculumProfile.activeCurriculumId === DEFAULT_CURRICULUM_ID) localStorage.setItem(SAVE_KEY, serialized);
    } catch (e) {
      console.error('Failed to save state:', e);
    }
  }, [state, activeSaveKey, curriculumProfile.activeCurriculumId]);

  useEffect(() => {
    try {
      const serialized = JSON.stringify({
        view,
        currentMissionIndex,
        currentSceneIndex,
        battleContext,
        grade: state.grade,
        subject: state.subject,
        missionId: MISSIONS[currentMissionIndex]?.id || null
      } satisfies SavedNavigation);
      localStorage.setItem(activeNavigationKey, serialized);
      if (curriculumProfile.activeCurriculumId === DEFAULT_CURRICULUM_ID) localStorage.setItem(NAVIGATION_KEY, serialized);
    } catch (e) {
      console.error('Failed to save navigation:', e);
    }
  }, [view, currentMissionIndex, currentSceneIndex, battleContext, state.grade, state.subject, activeNavigationKey, curriculumProfile.activeCurriculumId]);


  useEffect(() => {
    try {
      localStorage.setItem(CURRICULUM_PROFILE_KEY, JSON.stringify(curriculumProfile));
    } catch (e) {
      console.error('Failed to save curriculum profile:', e);
    }
  }, [curriculumProfile]);

  const setCurriculum = (curriculumId: CurriculumId) => {
    if (curriculumId === curriculumProfile.activeCurriculumId) return;
    try {
      const nextProfile = switchActiveCurriculum(curriculumProfile, curriculumId);
      const nextSave = localStorage.getItem(getCurriculumSaveKey(curriculumId));
      const nextState = nextSave ? sanitizeGameState(JSON.parse(nextSave), curriculumId) : defaultState;
      const normalizedNextState = { ...nextState, lang: getCurriculumContentLanguage(curriculumId, nextState.lang) };
      const nextNavigationRaw = localStorage.getItem(getCurriculumNavigationKey(curriculumId));
      const nextNavigation = nextNavigationRaw
        ? restoreSavedNavigation(JSON.parse(nextNavigationRaw), nextState, curriculumId)
        : null;

      setCurriculumProfile(nextProfile);
      setState(normalizedNextState);
      setCurrentMissionIndex(nextNavigation && isMissionIndexForSubject(nextNavigation.currentMissionIndex, normalizedNextState.subject)
        ? nextNavigation.currentMissionIndex
        : getFirstMissionIndexForSubject(normalizedNextState.subject));
      setCurrentSceneIndex(nextNavigation?.currentSceneIndex ?? 0);
      setBattleContext(nextNavigation?.battleContext ?? null);
      setView(normalizedNextState.grade ? (nextNavigation?.view || 'map') : 'grades');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (e) {
      console.error('Unable to switch curriculum safely:', e);
    }
  };

  const setGrade = (grade: GradeId) => {
    const isGhana = curriculumProfile.activeCurriculumId === 'ghana-nacca';
    if (isGhana && !['grade9', 'grade10', 'grade11'].includes(grade)) return;
    const allowedSubjects = isGhana
      ? (grade === 'grade9' ? ['ghcoremath'] : grade === 'grade10' ? ['ghcoremath2'] : ['ghcoremath3'])
      : GRADE_SUBJECT_IDS[grade];
    const subject = allowedSubjects.includes(state.subject)
      ? state.subject
      : (allowedSubjects[0] || 'cs') as SubjectId;
    const firstUnit = UNITS.findIndex(u => (u.subject || 'cs') === subject);
    const firstMission = MISSIONS.findIndex(m => (ARCS[m.arc]?.subject || 'cs') === subject);
    setState(s => ({ ...s, grade, subject, unit: firstUnit < 0 ? 0 : firstUnit }));
    setCurrentMissionIndex(firstMission < 0 ? 0 : firstMission);
    setCurrentSceneIndex(0);
    setBattleContext(null);
    setView('subjects');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const setLanguage = (lang: Language) => {
    if (curriculumProfile.activeCurriculumId === 'ghana-nacca' && lang !== 'en') return;
    setState(s => ({ ...s, lang }));
  };

  const setSubject = (sub: SubjectId) => {
    const activeGrade = state.grade || 'grade9';
    const isGhana = curriculumProfile.activeCurriculumId === 'ghana-nacca';
    const isAllowed = isGhana
      ? (activeGrade === 'grade9' && sub === 'ghcoremath') || (activeGrade === 'grade10' && sub === 'ghcoremath2') || (activeGrade === 'grade11' && sub === 'ghcoremath3')
      : GRADE_SUBJECT_IDS[activeGrade]?.includes(sub);
    if (!isAllowed) return;
    const firstUnit = UNITS.findIndex(u => (u.subject || 'cs') === sub);
    const firstMission = MISSIONS.findIndex(m => (ARCS[m.arc]?.subject || 'cs') === sub);
    setState(s => ({ ...s, grade: s.grade || activeGrade, subject: sub, unit: firstUnit < 0 ? 0 : firstUnit }));
    setCurrentMissionIndex(firstMission < 0 ? 0 : firstMission);
    setCurrentSceneIndex(0);
    setBattleContext(null);
    setView('map');
  };

  const setUnit = (unit: number) => {
    if (!Number.isInteger(unit) || unit < 0 || unit >= UNITS.length) return;
    if ((UNITS[unit].subject || 'cs') !== state.subject) return;
    setState(s => ({ ...s, unit }));
  };

  const setName = (name: string) => {
    setState(s => ({ ...s, name: name.trim().slice(0, 20) }));
  };

  const addXP = (amount: number) => {
    if (!isValidXpAward(amount)) return;
    setState(s => ({ ...s, xp: s.xp + amount }));
  };

  const inMissionFirstTime = () => {
    const m = MISSIONS[currentMissionIndex];
    return !m || !state.cleared[m.id];
  };

  const award = (amount: number) => {
    if (inMissionFirstTime()) {
      addXP(amount);
    }
  };

  const clearMission = (missionId: string, flawless: boolean, xpGained: number) => {
    if (!MISSIONS.some(mission => mission.id === missionId) || typeof flawless !== 'boolean' || !isValidXpAward(xpGained)) return;
    setState(s => {
      const first = !s.cleared[missionId];
      const newCleared = { ...s.cleared, [missionId]: true };
      const newFlawless = flawless ? { ...s.flawless, [missionId]: true } : s.flawless;
      const newXp = first ? s.xp + xpGained : s.xp;
      return {
        ...s,
        cleared: newCleared,
        flawless: newFlawless,
        xp: newXp
      };
    });
  };

  const saveLearningProgress = (missionId: string, progress: Partial<LearningMissionProgress>) => {
    setState(s => ({
      ...s,
      learningProgress: {
        ...(s.learningProgress || {}),
        [missionId]: {
          guidedPracticeComplete: false,
          independentPracticeComplete: false,
          mastered: false,
          techniqueUnlocked: false,
          ...(s.learningProgress?.[missionId] || {}),
          ...progress
        }
      }
    }));
  };

  const recordGrammarResult = (activityId: string, correct: boolean) => {
    if (!isValidGrammarActivityId(activityId) || typeof correct !== 'boolean') return;
    const reward = 5;
    setState(s => {
      const existing = s.grammarProgress?.[activityId] || { attempts: 0, correct: false, xpAwarded: false };
      const newlyMastered = correct && !existing.correct;
      const shouldAwardXp = correct && !existing.xpAwarded;
      return {
        ...s,
        xp: shouldAwardXp ? s.xp + reward : s.xp,
        grammarProgress: {
          ...(s.grammarProgress || {}),
          [activityId]: {
            attempts: existing.attempts + 1,
            correct: existing.correct || correct,
            xpAwarded: existing.xpAwarded || shouldAwardXp,
            ...(existing.completedAt !== undefined || newlyMastered ? { completedAt: existing.completedAt ?? Date.now() } : {})
          }
        }
      };
    });
  };

  const saveCheckpointResult = (checkpointId: string, score: number, total: number, passed: boolean, xpReward: number) => {
    if (!isValidCheckpointResult(checkpointId, score, total, passed, xpReward)) return;
    setState(s => {
      const existing = s.checkpointProgress?.[checkpointId] || {
        attempts: 0, bestScore: 0, lastScore: 0, completed: false
      };
      const newlyCompleted = passed && !existing.completed;
      return {
        ...s,
        xp: newlyCompleted ? s.xp + xpReward : s.xp,
        checkpointProgress: {
          ...(s.checkpointProgress || {}),
          [checkpointId]: {
            attempts: existing.attempts + 1,
            bestScore: Math.max(existing.bestScore, score),
            lastScore: score,
            completed: existing.completed || passed,
            completedAt: newlyCompleted ? Date.now() : existing.completedAt
          }
        }
      };
    });
  };

  const markSeen = (missionIndex: number) => {
    setState(s => ({
      ...s,
      seen: { ...s.seen, [missionIndex]: true }
    }));
  };

  const openMission = (index: number) => {
    const mission = MISSIONS[index];
    if (!mission || (ARCS[mission.arc]?.subject || 'cs') !== state.subject || !isMissionOpen(index, MISSIONS, state.cleared)) return;
    setCurrentMissionIndex(index);
    setCurrentSceneIndex(0);
    markSeen(index);
    setView('scene');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const nextScene = () => {
    const m = MISSIONS[currentMissionIndex];
    if (currentSceneIndex + 1 < m.scenes.length) {
      const nxt = m.scenes[currentSceneIndex + 1];
      if (nxt.type === 'battle') {
        startBattle(false);
      } else {
        setCurrentSceneIndex(i => i + 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const prevScene = () => {
    if (currentSceneIndex > 0) {
      setCurrentSceneIndex(i => i - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setView('map');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const startBattle = (isDojo = false, customQuestions?: any[]) => {
    if (isDojo && !customQuestions) {
      const pool = myMissions().filter(m => state.cleared[m.id]).flatMap(m => m.quiz || []);
      if (!pool.length) return;
      customQuestions = pool;
    }
    setBattleContext({ isDojo, customQuestions });
    setView('battle');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetProgress = () => {
    const fresh = createFreshProgressState(state);
    setState(fresh);
    const firstMission = MISSIONS.findIndex(m => (ARCS[m.arc]?.subject || 'cs') === state.subject);
    setCurrentMissionIndex(firstMission < 0 ? 0 : firstMission);
    setCurrentSceneIndex(0);
    setBattleContext(null);
    setView('map');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isOpen = (i: number): boolean => isMissionOpen(i, MISSIONS, state.cleared);

  const curSub = () => state.subject || 'cs';
  const myMissions = () => MISSIONS.filter(m => (ARCS[m.arc]?.subject || 'cs') === curSub());
  const allCleared = () => {
    const my = myMissions();
    return my.length > 0 && my.every(m => state.cleared[m.id]);
  };

  const goToView = (v: ViewMode) => {
    setView(v);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const safeCurrentMissionIndex = isMissionIndexForSubject(currentMissionIndex, state.subject)
    ? currentMissionIndex
    : getFirstMissionIndexForSubject(state.subject);
  const currentMission = MISSIONS[safeCurrentMissionIndex] || MISSIONS[0];

  return (
    <GameContext.Provider
      value={{
        state,
        curriculumProfile,
        setCurriculum,
        view,
        currentMissionIndex,
        currentSceneIndex,
        currentMission,
        battleContext,
        setLanguage,
        setGrade,
        setSubject,
        setUnit,
        setName,
        addXP,
        award,
        clearMission,
        saveLearningProgress,
        saveCheckpointResult,
        recordGrammarResult,
        markSeen,
        openMission,
        nextScene,
        prevScene,
        goToView,
        startBattle,
        resetProgress,
        inMissionFirstTime,
        isOpen,
        myMissions,
        allCleared
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};

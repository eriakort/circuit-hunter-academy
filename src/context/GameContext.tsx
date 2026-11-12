import React, { createContext, useContext, useState, useEffect } from 'react';
import { GameState, GradeId, Language, SubjectId, ViewMode, Mission, LearningMissionProgress } from '../types';
import { MISSIONS, UNITS, ARCS, RANKS } from '../data/gameData';
import { rankOf } from '../helpers';
import { GRADE_SUBJECT_IDS } from '../data/gradeData';
import { NAVIGATION_KEY, SAVE_KEY, SAVE_SCHEMA, createFreshProgressState, isValidCheckpointResult, restoreSavedNavigation, sanitizeGameState, SavedNavigation } from '../persistence';



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
  v: SAVE_SCHEMA
};

interface GameContextType {
  state: GameState;
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

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<GameState>(() => {
    try {
      const raw = localStorage.getItem(SAVE_KEY);
      return raw ? sanitizeGameState(JSON.parse(raw)) : defaultState;
    } catch (e) {
      console.error('Failed to load save state; starting with a safe default:', e);
      return defaultState;
    }
  });

  const [initialNavigation] = useState<SavedNavigation | null>(() => {
    try {
      const raw = localStorage.getItem(NAVIGATION_KEY);
      return raw ? restoreSavedNavigation(JSON.parse(raw), state) : null;
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
    () => initialNavigation?.currentMissionIndex ?? Math.max(0, MISSIONS.findIndex(m => (ARCS[m.arc]?.subject || 'cs') === state.subject))
  );
  const [currentSceneIndex, setCurrentSceneIndex] = useState<number>(
    () => initialNavigation?.currentSceneIndex ?? 0
  );
  const [battleContext, setBattleContext] = useState<{ isDojo: boolean; customQuestions?: any[] } | null>(
    () => initialNavigation?.battleContext ?? null
  );

  useEffect(() => {
    try {
      localStorage.setItem(SAVE_KEY, JSON.stringify(state));
    } catch (e) {
      console.error('Failed to save state:', e);
    }
  }, [state]);

  useEffect(() => {
    try {
      localStorage.setItem(NAVIGATION_KEY, JSON.stringify({
        view,
        currentMissionIndex,
        currentSceneIndex,
        battleContext,
        grade: state.grade,
        subject: state.subject,
        missionId: MISSIONS[currentMissionIndex]?.id || null
      } satisfies SavedNavigation));
    } catch (e) {
      console.error('Failed to save navigation:', e);
    }
  }, [view, currentMissionIndex, currentSceneIndex, battleContext, state.grade, state.subject]);


  const setGrade = (grade: GradeId) => {
    const subject = GRADE_SUBJECT_IDS[grade].includes(state.subject)
      ? state.subject
      : GRADE_SUBJECT_IDS[grade][0] as SubjectId;
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
    setState(s => ({ ...s, lang }));
  };

  const setSubject = (sub: SubjectId) => {
    const activeGrade = state.grade || 'grade9';
    if (!GRADE_SUBJECT_IDS[activeGrade]?.includes(sub)) return;
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
    if (!mission || (ARCS[mission.arc]?.subject || 'cs') !== state.subject) return;
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

  const isOpen = (i: number): boolean => {
    const m = MISSIONS[i];
    const prev = MISSIONS[i - 1];
    return !prev || prev.arc !== m.arc || !!state.cleared[prev.id];
  };

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

  const currentMission = MISSIONS[currentMissionIndex] || MISSIONS[0];

  return (
    <GameContext.Provider
      value={{
        state,
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

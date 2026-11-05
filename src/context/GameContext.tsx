import React, { createContext, useContext, useState, useEffect } from 'react';
import { GameState, GradeId, Language, SubjectId, ViewMode, Mission, LearningMissionProgress } from '../types';
import { MISSIONS, UNITS, ARCS, RANKS } from '../data/gameData';
import { rankOf } from '../helpers';
import { GRADE_SUBJECT_IDS } from '../data/gradeData';

const SKEY = 'circuit-hunter-academy-v2';
const SCHEMA = 3;
const NAV_KEY = 'circuit-hunter-academy-navigation-v2';
const VALID_VIEWS: ViewMode[] = ['grades', 'subjects', 'map', 'scene', 'battle', 'result', 'ending', 'dojo', 'codex', 'race', 'test', 'formula', 'checkpoint', 'cs-checkpoint', 'cs-applied-checkpoint'];

interface SavedNavigation {
  view: ViewMode;
  currentMissionIndex: number;
  currentSceneIndex: number;
  battleContext: { isDojo: boolean; customQuestions?: any[] } | null;
}

const readSavedNavigation = (): SavedNavigation | null => {
  try {
    const raw = localStorage.getItem(NAV_KEY);
    if (!raw) return null;
    const saved = JSON.parse(raw) as Partial<SavedNavigation>;
    if (!saved.view || !VALID_VIEWS.includes(saved.view)) return null;

    const missionIndex = Number.isInteger(saved.currentMissionIndex)
      ? saved.currentMissionIndex as number
      : 0;
    const safeMissionIndex = Math.min(Math.max(missionIndex, 0), MISSIONS.length - 1);
    const mission = MISSIONS[safeMissionIndex];
    const sceneIndex = Number.isInteger(saved.currentSceneIndex)
      ? saved.currentSceneIndex as number
      : 0;

    return {
      view: saved.view,
      currentMissionIndex: safeMissionIndex,
      currentSceneIndex: Math.min(Math.max(sceneIndex, 0), Math.max(0, mission.scenes.length - 1)),
      battleContext: saved.battleContext || null
    };
  } catch (e) {
    console.error('Failed to restore navigation:', e);
    return null;
  }
};

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
  v: SCHEMA
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
      const raw = localStorage.getItem(SKEY);
      if (raw) {
        const loaded = JSON.parse(raw);
        if (!loaded.v || loaded.v < SCHEMA) {
          loaded.v = SCHEMA;
        }
        // Existing saves predate grade selection and belong to the current Grade 9 curriculum.
        const hasSavedGrade = Object.prototype.hasOwnProperty.call(loaded, 'grade');
        const grade: GradeId | null = loaded.grade === 'grade5' || loaded.grade === 'grade9'
          ? loaded.grade
          : (hasSavedGrade ? null : 'grade9');
        return { ...defaultState, ...loaded, grade };
      }
    } catch (e) {
      console.error('Failed to load save state:', e);
    }
    return defaultState;
  });

  const [initialNavigation] = useState<SavedNavigation | null>(() => readSavedNavigation());
  const [view, setView] = useState<ViewMode>(() => {
    if (!state.grade) return 'grades';
    return initialNavigation?.view || 'map';
  });
  const [currentMissionIndex, setCurrentMissionIndex] = useState<number>(
    () => initialNavigation?.currentMissionIndex ?? 0
  );
  const [currentSceneIndex, setCurrentSceneIndex] = useState<number>(
    () => initialNavigation?.currentSceneIndex ?? 0
  );
  const [battleContext, setBattleContext] = useState<{ isDojo: boolean; customQuestions?: any[] } | null>(
    () => initialNavigation?.battleContext ?? null
  );

  useEffect(() => {
    try {
      localStorage.setItem(SKEY, JSON.stringify(state));
    } catch (e) {
      console.error('Failed to save state:', e);
    }
  }, [state]);

  useEffect(() => {
    try {
      localStorage.setItem(NAV_KEY, JSON.stringify({
        view,
        currentMissionIndex,
        currentSceneIndex,
        battleContext
      } satisfies SavedNavigation));
    } catch (e) {
      console.error('Failed to save navigation:', e);
    }
  }, [view, currentMissionIndex, currentSceneIndex, battleContext]);


  const setGrade = (grade: GradeId) => {
    setState(s => {
      // Keep the current subject when it belongs to the new grade; otherwise
      // move to the first subject available in that grade.
      const subject = GRADE_SUBJECT_IDS[grade].includes(s.subject)
        ? s.subject
        : GRADE_SUBJECT_IDS[grade][0] as SubjectId;
      const firstUnit = UNITS.findIndex(u => (u.subject || 'cs') === subject);
      return { ...s, grade, subject, unit: firstUnit < 0 ? 0 : firstUnit };
    });
    setView('subjects');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const setLanguage = (lang: Language) => {
    setState(s => ({ ...s, lang }));
  };

  const setSubject = (sub: SubjectId) => {
    if (!state.grade || !GRADE_SUBJECT_IDS[state.grade].includes(sub)) return;
    const firstUnit = UNITS.findIndex(u => (u.subject || 'cs') === sub);
    setState(s => ({ ...s, subject: sub, unit: firstUnit < 0 ? 0 : firstUnit }));
    setView('map');
  };

  const setUnit = (unit: number) => {
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
    return !state.cleared[m.id];
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
    setBattleContext({ isDojo, customQuestions });
    setView('battle');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetProgress = () => {
    const firstUnit = UNITS.findIndex(u => (u.subject || 'cs') === state.subject);
    const fresh: GameState = {
      grade: state.grade,
      name: '',
      lang: state.lang,
      xp: 0,
      subject: state.subject,
      unit: firstUnit < 0 ? 0 : firstUnit,
      cleared: {},
      seen: {},
      flawless: {},
      learningProgress: {},
      v: SCHEMA
    };
    setState(fresh);
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

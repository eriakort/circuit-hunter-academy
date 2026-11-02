import React, { createContext, useContext, useState, useEffect } from 'react';
import { GameState, Language, SubjectId, ViewMode, Mission } from '../types';
import { MISSIONS, UNITS, ARCS, RANKS } from '../data/gameData';
import { rankOf } from '../helpers';

const SKEY = 'circuit-hunter-academy-v2';
const SCHEMA = 2;

const defaultState: GameState = {
  name: '',
  lang: 'en',
  xp: 0,
  subject: 'cs',
  unit: 0,
  cleared: {},
  seen: {},
  flawless: {},
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
  setSubject: (sub: SubjectId) => void;
  setUnit: (u: number) => void;
  setName: (name: string) => void;
  addXP: (amount: number) => void;
  award: (amount: number) => void;
  clearMission: (missionId: string, flawless: boolean, xpGained: number) => void;
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
        return { ...defaultState, ...loaded };
      }
    } catch (e) {
      console.error('Failed to load save state:', e);
    }
    return defaultState;
  });

  const [view, setView] = useState<ViewMode>(() => (state.subject ? 'map' : 'subjects'));
  const [currentMissionIndex, setCurrentMissionIndex] = useState<number>(0);
  const [currentSceneIndex, setCurrentSceneIndex] = useState<number>(0);
  const [battleContext, setBattleContext] = useState<{ isDojo: boolean; customQuestions?: any[] } | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(SKEY, JSON.stringify(state));
    } catch (e) {
      console.error('Failed to save state:', e);
    }
  }, [state]);

  const setLanguage = (lang: Language) => {
    setState(s => ({ ...s, lang }));
  };

  const setSubject = (sub: SubjectId) => {
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
    const fresh: GameState = {
      name: '',
      lang: state.lang,
      xp: 0,
      subject: state.subject,
      unit: 0,
      cleared: {},
      seen: {},
      flawless: {},
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
        setSubject,
        setUnit,
        setName,
        addXP,
        award,
        clearMission,
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

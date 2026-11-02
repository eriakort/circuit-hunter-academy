export type Language = 'en' | 'it';

export type BilingualText = [string, string] | string;

export type SubjectId = 'cs' | 'phys';

export interface SubjectInfo {
  id: SubjectId;
  name: BilingualText;
  blurb: BilingualText;
  meta: BilingualText;
  art: string;
}

export interface UnitInfo {
  title: BilingualText;
  ch: string;
  subject?: SubjectId;
}

export interface ArcInfo {
  n: number;
  title: BilingualText;
  pages: string;
  unit?: number;
  subject?: SubjectId;
}

export interface QuizQuestion {
  q: BilingualText;
  a: BilingualText[];
  why: BilingualText;
}

export interface Scene {
  who?: 's' | 'y' | 'd';
  vis?: string;
  text?: any;
  type?: string;
  init?: string;
  steps?: any[];
  items?: any[];
  cats?: any[];
  rounds?: any[];
  code?: any;
  set?: string;
  mode?: string;
  grid?: number;
  needDone?: boolean;
  title?: any;
  hint?: any;
  span?: number;
  [key: string]: any;
}

export interface Mission {
  id: string;
  arc: number;
  sec: string;
  pages: string;
  hue: number;
  horns: number;
  eyes: number;
  title: BilingualText;
  topic: BilingualText;
  demon: BilingualText;
  tech: BilingualText;
  scenes: Scene[];
  quiz: QuizQuestion[];
  boss?: boolean;
  [key: string]: any;
}

export type Rank = [number, [string, string]];

// [missionIndex, enTerm, itTerm, enDef, itDef]
export type CodexEntry = [number, string, string, string, string];

export interface GameState {
  name: string;
  lang: Language;
  xp: number;
  subject: SubjectId;
  unit: number;
  cleared: Record<string, boolean>;
  seen: Record<number, boolean>;
  flawless: Record<string, boolean>;
  v: number;
}

export type ViewMode = 'subjects' | 'map' | 'scene' | 'battle' | 'result' | 'ending' | 'dojo' | 'codex' | 'race';

export interface RacePlayer {
  id: string;
  name: string;
  joinedAt: number;
  hue: number;
}

export interface RaceProgress {
  id: string;
  step: number;
  score: number;
  time: number;
  raceId: string;
  done?: boolean;
}

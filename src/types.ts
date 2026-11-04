export type Language = 'en' | 'it';

export type BilingualText = [string, string] | string;

export type GradeId = 'grade5' | 'grade9';

export type SubjectId = 'cs' | 'phys' | 'math' | 'science';

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

export type LearningStageId =
  | 'briefing'
  | 'learn'
  | 'demonstrate'
  | 'guided-practice'
  | 'independent-practice'
  | 'knowledge-check'
  | 'summary'
  | 'mastery-assessment'
  | 'battle';

export interface LearningObjective {
  id: string;
  description: BilingualText;
  successCriteria?: BilingualText[];
}

export interface LearningWorkedExample {
  scenario: BilingualText;
  steps: BilingualText[];
  answer: BilingualText;
}

export interface LearningMisconception {
  belief: BilingualText;
  correction: BilingualText;
}

export interface LearningConcept {
  id: string;
  title: BilingualText;
  explanation: BilingualText;
  example?: BilingualText;
  workedExample?: LearningWorkedExample;
  misconceptions?: LearningMisconception[];
  knowledgePrompts?: BilingualText[];
  /** Zero-based indexes of existing scenes that demonstrate this concept. */
  sceneIndexes?: number[];
  /** Optional key used by the existing visual renderer. */
  visualKey?: string;
}

export interface LearningPracticeActivity {
  id: string;
  title: BilingualText;
  instructions: BilingualText;
  /** Zero-based index of an existing interactive scene to reuse, where possible. */
  sceneIndex?: number;
  /** Optional new mini-game type for a future activity. */
  activityType?: string;
  /** Optional scenario or question set for a standalone practice activity. */
  questions?: QuizQuestion[];
  /** Optional bilingual hint for each question, aligned by question index. */
  hints?: BilingualText[];
}

export interface LearningMasteryAssessment {
  title: BilingualText;
  instructions: BilingualText;
  questions: QuizQuestion[];
  /** Concept ID aligned to each question, used to generate targeted revision. */
  questionConceptIds?: string[];
  /** Percentage from 0 to 100 required to unlock the mission battle. */
  passingScore: number;
}

export interface LearningTechniqueUnlock {
  id: string;
  name: BilingualText;
  description: BilingualText;
  xpReward?: number;
}

export interface LearningMissionDefinition {
  version: 1;
  objectives: LearningObjective[];
  prerequisites?: BilingualText[];
  concepts: LearningConcept[];
  guidedPractice?: LearningPracticeActivity[];
  /** Hint-free scenario questions completed independently after guided practice. */
  independentPractice?: LearningPracticeActivity[];
  knowledgeCheck?: QuizQuestion[];
  summary?: BilingualText[];
  masteryAssessment?: LearningMasteryAssessment;
  techniqueUnlock?: LearningTechniqueUnlock;
}

/** Persisted spaced-repetition state for one learning concept. */
export interface ConceptReviewSchedule {
  dueAt: number;
  lastReviewedAt: number;
  intervalDays: number;
  repetitions: number;
  lastScore: number;
}

/** Persistable learning outcome model; wired into GameState in a later increment. */
export interface LearningMissionProgress {
  guidedPracticeComplete: boolean;
  independentPracticeComplete: boolean;
  knowledgeCheckScore?: number;
  masteryScore?: number;
  masteryAttempts?: number;
  /** Cumulative correct/attempted mastery responses, grouped by learning concept. */
  masteryConceptPerformance?: Record<string, { correct: number; attempted: number }>;
  /** Concepts missed in the most recent mastery attempt. */
  masteryLastAttemptWeakConcepts?: string[];
  /** Timestamped mastery scores used for a lightweight progress trend. */
  masteryAttemptHistory?: Array<{ score: number; attemptedAt: number; attempt: number }>;
  /** Per-question selected answer indexes for the most recent assessment attempts. */
  masteryAttemptReviews?: Array<{ score: number; attemptedAt: number; attempt: number; answers: number[] }>;
  /** Next spaced-review date and retention history, keyed by concept ID. */
  conceptReviewSchedule?: Record<string, ConceptReviewSchedule>;
  /** Cumulative results from optional targeted concept-revision sessions. */
  conceptRevisionPerformance?: Record<string, {
    correct: number;
    attempted: number;
    sessions: number;
    lastReviewedAt: number;
    /** Mastery accuracy when the latest revision session was completed. */
    baselineMasteryPercent?: number;
    /** First mastery accuracy recorded after the latest revision session. */
    postRevisionMasteryPercent?: number;
    postRevisionAt?: number;
  }>;
  mastered: boolean;
  techniqueUnlocked: boolean;
  lastAttemptAt?: number;
}

export interface Mission {
  /** Mission IDs must be globally unique across grades (use a g5- prefix for Grade 5 IDs). */
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
  learning?: LearningMissionDefinition;
  boss?: boolean;
  [key: string]: any;
}

export type Rank = [number, [string, string]];

// [missionIndex, enTerm, itTerm, enDef, itDef]
export type CodexEntry = [number, string, string, string, string];

export interface GameState {
  /** Selected school grade; null means the learner has not chosen a grade yet. */
  grade: GradeId | null;
  name: string;
  lang: Language;
  xp: number;
  subject: SubjectId;
  unit: number;
  cleared: Record<string, boolean>;
  seen: Record<number, boolean>;
  flawless: Record<string, boolean>;
  learningProgress: Record<string, LearningMissionProgress>;
  v: number;
}

export type ViewMode = 'grades' | 'subjects' | 'map' | 'scene' | 'battle' | 'result' | 'ending' | 'dojo' | 'codex' | 'race' | 'test';

export interface TaggedQuestion extends QuizQuestion {
  id: string;
  subject: SubjectId;
  unitIndex: number;
  arcIndex: number;
  missionId: string;
  chapterTitle: BilingualText;
  missionTitle: BilingualText;
}

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

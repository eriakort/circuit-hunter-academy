import type { CodexEntry, Mission, QuizQuestion, Scene } from '../types';

/**
 * Shared builders for the Italian grammar units (grammatica di quinta primaria).
 * Example words and sentences stay in Italian in both languages; only the
 * explanations are translated.
 */
export type Pair = [string, string];

export interface GrammarLesson {
  text: Pair;
  /** Optional key of an Italian grammar visual (e.g. a conjugation table). */
  vis?: string;
}

/** [term EN, term IT, definition EN, definition IT] */
export type GrammarCodex = [string, string, string, string];

export const gq = (en: string, it: string, answers: Pair[], why: Pair): QuizQuestion => ({ q: [en, it], a: answers, why });

/** An answer option that is the same Italian word or sentence in both languages. */
export const w = (text: string): Pair => [text, text];

export interface GrammarMissionInput {
  id: string;
  sec: string;
  pages: string;
  hue: number;
  title: Pair;
  topic: Pair;
  demon: Pair;
  tech: Pair;
  lessons: Array<GrammarLesson | Pair>;
  quiz: QuizQuestion[];
  codex: GrammarCodex[];
  taunt?: Pair;
}

const toScene = (lesson: GrammarLesson | Pair): Scene => {
  if (Array.isArray(lesson)) return { who: 's', text: lesson };
  return lesson.vis ? { who: 's', vis: lesson.vis, text: lesson.text } : { who: 's', text: lesson.text };
};

export interface GrammarMissionBundle {
  missions: Mission[];
  codex: CodexEntry[];
}

export const buildGrammarMissions = (items: GrammarMissionInput[], defaultTaunt: (demon: Pair) => Pair): GrammarMissionBundle => ({
  missions: items.map(item => ({
    id: item.id,
    arc: 0,
    sec: item.sec,
    pages: item.pages,
    hue: item.hue,
    horns: 2,
    eyes: 2,
    title: item.title,
    topic: item.topic,
    demon: item.demon,
    tech: item.tech,
    scenes: [...item.lessons.map(toScene), { who: 'd', text: item.taunt ?? defaultTaunt(item.demon) }, { type: 'battle' }],
    quiz: item.quiz
  })),
  codex: items.flatMap(item => item.codex.map(([enTerm, itTerm, enDef, itDef]) => [item.id, enTerm, itTerm, enDef, itDef] as CodexEntry))
});

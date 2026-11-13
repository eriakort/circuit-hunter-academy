import type { Mission, QuizQuestion, Scene } from '../types';

/**
 * Shared builders for Grade 5 Mathematics (Matematica · classe quinta primaria).
 *
 * Number formatting convention used across the Grade 5 Maths content:
 * - thousands are grouped with a space in both languages (1 000 000), as in Italian textbooks;
 * - English text uses a decimal point (3.5), Italian text uses a decimal comma (3,5).
 */
export type Pair = [string, string];

export interface Lesson {
  text: Pair;
  /** Optional key of a Grade 5 Maths visual shown above the dialogue. */
  vis?: string;
}

export const q = (en: string, it: string, answers: Pair[], why: Pair): QuizQuestion => ({
  q: [en, it],
  a: answers,
  why
});

export interface G5MathMissionInput {
  id: string;
  sec: string;
  pages: string;
  hue: number;
  title: Pair;
  topic: Pair;
  demon: Pair;
  tech: Pair;
  lessons: [Lesson | Pair, Lesson | Pair, Lesson | Pair];
  quiz: QuizQuestion[];
  /** Optional demon taunt; a unit-specific default is used when omitted. */
  taunt?: Pair;
}

const toLessonScene = (lesson: Lesson | Pair): Scene => {
  if (Array.isArray(lesson)) return { who: 's', text: lesson };
  return lesson.vis ? { who: 's', vis: lesson.vis, text: lesson.text } : { who: 's', text: lesson.text };
};

export const makeG5MathMission = (item: G5MathMissionInput, defaultTaunt: (demon: Pair) => Pair): Mission => ({
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
  scenes: [
    ...item.lessons.map(toLessonScene),
    { who: 'd', text: item.taunt ?? defaultTaunt(item.demon) },
    { type: 'battle' }
  ],
  quiz: item.quiz
});

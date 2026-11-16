import type { Mission, QuizQuestion, Scene, SubjectInfo } from '../types';

export type Pair = [string, string];

export interface MathAdvLesson {
  text: Pair;
  vis: string;
}

export interface MathAdvSortScene {
  type: 'sort';
  title: Pair;
  hint: Pair;
  cats: [Pair, Pair];
  items: Array<{
    n: Pair;
    i: string;
    c: 0 | 1;
    why: Pair;
  }>;
}

export interface MathAdvMissionInput {
  id: string;
  arc: number;
  sec: string;
  pages: string;
  hue: number;
  horns?: number;
  eyes?: number;
  title: Pair;
  topic: Pair;
  demon: Pair;
  tech: Pair;
  lessons: [MathAdvLesson, MathAdvLesson, MathAdvLesson, ...MathAdvLesson[]];
  sort?: MathAdvSortScene;
  taunt: Pair;
  quiz: QuizQuestion[];
  boss?: boolean;
}

export const MATH10_SUBJECT: SubjectInfo = {
  id: 'math10',
  name: ['Mathematics (Level 2)', 'Matematica (Livello 2)'],
  blurb: [
    '2° Superiore (Grade 10): linear systems, radicals, Cartesian line, quadratic equations & inequalities, Euclid & probability.',
    '2° Superiore: sistemi lineari, radicali, retta nel piano cartesiano, equazioni e disequazioni di 2° grado, Euclide e probabilità.'
  ],
  meta: [
    'Level 2 · Grade 10 · 3 chapters · 9 missions',
    'Livello 2 · 2° Superiore · 3 capitoli · 9 missioni'
  ],
  art: '<svg viewBox="0 0 120 120" width="100%" aria-hidden="true"><defs><linearGradient id="m10g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#ffd166"/><stop offset="100%" stop-color="#45d8ff"/></linearGradient></defs><rect x="20" y="20" width="80" height="80" rx="14" fill="rgba(69,216,255,0.08)" stroke="url(#m10g)" stroke-width="3"/><line x1="28" y1="78" x2="92" y2="78" stroke="#6f74a6" stroke-width="1.5"/><line x1="60" y1="26" x2="60" y2="92" stroke="#6f74a6" stroke-width="1.5"/><path d="M32 32 Q60 98 88 32" fill="none" stroke="url(#m10g)" stroke-width="3.5" stroke-linecap="round"/><circle cx="42" cy="78" r="4.5" fill="#ffd166"/><circle cx="78" cy="78" r="4.5" fill="#ffd166"/><text x="60" y="96" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffd166">Δ = b²−4ac</text></svg>'
};

export const MATH11_SUBJECT: SubjectInfo = {
  id: 'math11',
  name: ['Mathematics (Level 3)', 'Matematica (Livello 3)'],
  blurb: [
    '3°/4° Superiore (Grade 11): functions, moduli & irrational algebra, conic sections, exponentials, logarithms & trigonometry.',
    '3°/4° Superiore: funzioni, moduli e irrazionali, coniche (parabola, circonferenza, ellisse, iperbole), esponenziali, logaritmi e trigonometria.'
  ],
  meta: [
    'Level 3 · Grade 11 · 3 chapters · 9 missions',
    'Livello 3 · 3°/4° Superiore · 3 capitoli · 9 missioni'
  ],
  art: '<svg viewBox="0 0 120 120" width="100%" aria-hidden="true"><defs><linearGradient id="m11g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#ff6a3d"/><stop offset="100%" stop-color="#b08bff"/></linearGradient></defs><circle cx="60" cy="56" r="30" fill="rgba(176,139,255,0.08)" stroke="url(#m11g)" stroke-width="3"/><line x1="24" y1="56" x2="96" y2="56" stroke="#6f74a6" stroke-width="1.5"/><line x1="60" y1="20" x2="60" y2="90" stroke="#6f74a6" stroke-width="1.5"/><line x1="60" y1="56" x2="82" y2="35" stroke="#ffd166" stroke-width="2.6"/><line x1="82" y1="35" x2="82" y2="56" stroke="#38ef7d" stroke-width="2.5" stroke-dasharray="3 2"/><circle cx="82" cy="35" r="4.5" fill="#ffd166"/><text x="60" y="102" text-anchor="middle" font-size="10" font-weight="bold" fill="#b08bff">CONICS · SIN/LOG</text></svg>'
};

export const q = (en: string, it: string, answers: Pair[], why: Pair): QuizQuestion => ({
  q: [en, it],
  a: answers,
  why
});

export const makeMathAdvMission = (item: MathAdvMissionInput): Mission => {
  const scenes: Scene[] = item.lessons.map(lesson => ({
    who: 's',
    vis: lesson.vis,
    text: lesson.text
  }));
  if (item.sort) {
    scenes.push(item.sort);
  }
  scenes.push({ who: 'd', vis: 'demon', text: item.taunt });
  scenes.push({ type: 'battle' });

  return {
    id: item.id,
    arc: item.arc,
    sec: item.sec,
    pages: item.pages,
    hue: item.hue,
    horns: item.horns ?? 2,
    eyes: item.eyes ?? 2,
    title: item.title,
    topic: item.topic,
    demon: item.demon,
    tech: item.tech,
    scenes,
    quiz: item.quiz,
    ...(item.boss ? { boss: true } : {})
  };
};

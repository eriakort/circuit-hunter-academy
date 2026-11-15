import type { Mission, QuizQuestion, Scene, SubjectInfo } from '../types';

export type Pair = [string, string];

export interface ChemLesson {
  text: Pair;
  vis?: string;
}

export interface ChemSortScene {
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

export interface ChemMissionInput {
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
  lessons: [ChemLesson | Pair, ChemLesson | Pair, ChemLesson | Pair, ...(ChemLesson | Pair)[]];
  sort?: ChemSortScene;
  taunt: Pair;
  quiz: QuizQuestion[];
  boss?: boolean;
}

export const CHEM_SUBJECT: SubjectInfo = {
  id: 'chem',
  name: ['Chemistry (Level 1)', 'Chimica (Livello 1)'],
  blurb: [
    '1° Superiore (Grade 9): matter & mixtures, fundamental laws, the mole, gas laws, atomic models & the Periodic Table.',
    '1° Superiore: materia e miscugli, leggi ponderali, la mole, leggi dei gas, modelli atomici e Tavola Periodica.'
  ],
  meta: [
    'Level 1 · Grade 9 · 3 chapters · 9 missions',
    'Livello 1 · 1° Superiore · 3 capitoli · 9 missioni'
  ],
  art: '<svg viewBox="0 0 120 120" width="100%" aria-hidden="true"><defs><linearGradient id="chg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#38ef7d"/><stop offset="100%" stop-color="#45d8ff"/></linearGradient></defs><path d="M47 22 h26 v18 l22 44 a10 10 0 0 1 -9 14 H34 a10 10 0 0 1 -9 -14 l22 -44 Z" fill="rgba(56,239,125,0.08)" stroke="url(#chg)" stroke-width="3.2" stroke-linejoin="round"/><line x1="43" y1="22" x2="77" y2="22" stroke="url(#chg)" stroke-width="3.5" stroke-linecap="round"/><path d="M32 76 Q46 70 60 76 T88 76 L92 86 a6 6 0 0 1 -5 8 H33 a6 6 0 0 1 -5 -8 Z" fill="url(#chg)" opacity="0.72"/><circle cx="52" cy="64" r="3.5" fill="#ffd166"/><circle cx="67" cy="56" r="2.8" fill="#45d8ff"/><circle cx="60" cy="83" r="3" fill="#ffffff" opacity="0.85"/></svg>'
};

export const CHEM10_SUBJECT: SubjectInfo = {
  id: 'chem10',
  name: ['Chemistry (Level 2)', 'Chimica (Livello 2)'],
  blurb: [
    '2° Superiore (Grade 10): chemical bonds, VSEPR geometry, IUPAC & traditional nomenclature, balancing, stoichiometry & solutions.',
    '2° Superiore: legami chimici, geometria VSEPR, nomenclatura IUPAC e tradizionale, bilanciamento, stechiometria e soluzioni.'
  ],
  meta: [
    'Level 2 · Grade 10 · 3 chapters · 9 missions',
    'Livello 2 · 2° Superiore · 3 capitoli · 9 missioni'
  ],
  art: '<svg viewBox="0 0 120 120" width="100%" aria-hidden="true"><defs><linearGradient id="chg10" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#45d8ff"/><stop offset="100%" stop-color="#38ef7d"/></linearGradient></defs><circle cx="60" cy="60" r="14" fill="url(#chg10)" opacity="0.85"/><circle cx="28" cy="40" r="9" fill="#ffd166"/><circle cx="92" cy="40" r="9" fill="#ffd166"/><circle cx="60" cy="96" r="9" fill="#45d8ff"/><line x1="48" y1="53" x2="35" y2="45" stroke="url(#chg10)" stroke-width="3.5" stroke-linecap="round"/><line x1="72" y1="53" x2="85" y2="45" stroke="url(#chg10)" stroke-width="3.5" stroke-linecap="round"/><line x1="60" y1="74" x2="60" y2="87" stroke="url(#chg10)" stroke-width="3.5" stroke-linecap="round"/><text x="60" y="64" text-anchor="middle" font-size="11" font-weight="bold" fill="#0d1329">VSEPR</text></svg>'
};

export const CHEM11_SUBJECT: SubjectInfo = {
  id: 'chem11',
  name: ['Chemistry (Level 3)', 'Chimica (Livello 3)'],
  blurb: [
    '3°/4° Superiore (Grade 11): thermochemistry, kinetics, equilibrium (Keq & Le Châtelier), acids & bases (pH, titrations), redox & organic intro.',
    '3°/4° Superiore: termochimica, cinetica, equilibrio (Keq e Le Châtelier), acidi e basi (pH, titolazioni), redox e chimica organica.'
  ],
  meta: [
    'Level 3 · Grade 11 · 3 chapters · 9 missions',
    'Livello 3 · 3°/4° Superiore · 3 capitoli · 9 missioni'
  ],
  art: '<svg viewBox="0 0 120 120" width="100%" aria-hidden="true"><defs><linearGradient id="chg11" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#38ef7d"/><stop offset="100%" stop-color="#b08bff"/></linearGradient></defs><polygon points="60,22 92,40 92,78 60,96 28,78 28,40" fill="rgba(176,139,255,0.1)" stroke="url(#chg11)" stroke-width="3.4" stroke-linejoin="round"/><circle cx="60" cy="59" r="19" fill="none" stroke="#ffd166" stroke-width="2.6" stroke-dasharray="5 3"/><text x="60" y="64" text-anchor="middle" font-size="13" font-weight="bold" fill="#38ef7d">Keq</text></svg>'
};

export const q = (en: string, it: string, answers: Pair[], why: Pair): QuizQuestion => ({
  q: [en, it],
  a: answers,
  why
});

const toLessonScene = (lesson: ChemLesson | Pair): Scene => {
  if (Array.isArray(lesson)) return { who: 's', text: lesson };
  return lesson.vis ? { who: 's', vis: lesson.vis, text: lesson.text } : { who: 's', text: lesson.text };
};

export const makeChemMission = (item: ChemMissionInput): Mission => {
  const scenes: Scene[] = item.lessons.map(toLessonScene);
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

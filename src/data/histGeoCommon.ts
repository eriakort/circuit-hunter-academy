import type { Mission, QuizQuestion, Scene, SubjectInfo } from '../types';

export type Pair = [string, string];

export interface HistGeoLesson {
  text: Pair;
  vis: string;
}

export interface HistGeoSortScene {
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

export interface HistGeoMissionInput {
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
  lessons: [HistGeoLesson, HistGeoLesson, HistGeoLesson, ...HistGeoLesson[]];
  sort?: HistGeoSortScene;
  taunt: Pair;
  quiz: QuizQuestion[];
  boss?: boolean;
}

const histArt = (gradId: string, c1: string, c2: string, badge: string) =>
  `<svg viewBox="0 0 120 120" width="100%" aria-hidden="true"><defs><linearGradient id="${gradId}" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="${c1}"/><stop offset="100%" stop-color="${c2}"/></linearGradient></defs><rect x="24" y="24" width="72" height="72" rx="14" fill="rgba(255,159,69,0.09)" stroke="url(#${gradId})" stroke-width="3"/><path d="M36 42 h48 M42 42 v34 M54 42 v34 M66 42 v34 M78 42 v34 M34 78 h52" stroke="url(#${gradId})" stroke-width="3.2" stroke-linecap="round"/><polygon points="60,26 88,41 32,41" fill="url(#${gradId})" opacity="0.82"/><text x="60" y="92" text-anchor="middle" font-size="10" font-weight="bold" fill="${c1}">${badge}</text></svg>`;

const geoArt = (gradId: string, c1: string, c2: string, badge: string) =>
  `<svg viewBox="0 0 120 120" width="100%" aria-hidden="true"><defs><linearGradient id="${gradId}" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="${c1}"/><stop offset="100%" stop-color="${c2}"/></linearGradient></defs><circle cx="60" cy="56" r="32" fill="rgba(69,216,255,0.1)" stroke="url(#${gradId})" stroke-width="3"/><ellipse cx="60" cy="56" rx="15" ry="32" fill="none" stroke="url(#${gradId})" stroke-width="2.2"/><line x1="28" y1="56" x2="92" y2="56" stroke="url(#${gradId})" stroke-width="2.2"/><path d="M33 42 Q60 48 87 42 M33 70 Q60 64 87 70" fill="none" stroke="url(#${gradId})" stroke-width="1.8" opacity="0.8"/><circle cx="71" cy="46" r="5" fill="#ffd166"/><text x="60" y="102" text-anchor="middle" font-size="10" font-weight="bold" fill="${c1}">${badge}</text></svg>`;

export const HIST5_SUBJECT: SubjectInfo = {
  id: 'hist5',
  name: ['History (Grade 5)', 'Storia (5ª Primaria)'],
  blurb: [
    '5ª Primaria: Ancient Greece, Etruscans & Italic peoples, Roman Kingdom, Republic, Empire & heritage.',
    '5ª Primaria: Civiltà Greca, Popoli Italici ed Etruschi, Roma dalla Monarchia all’Impero e la sua eredità.'
  ],
  meta: ['Primary Year 5 · 1 unit · 4 missions', 'Quinta Primaria · 1 unità · 4 missioni'],
  art: histArt('hg5', '#ffd166', '#ff6a3d', '5ª STORIA')
};

export const GEO5_SUBJECT: SubjectInfo = {
  id: 'geo5',
  name: ['Geography (Grade 5)', 'Geografia (5ª Primaria)'],
  blurb: [
    '5ª Primaria: Maps, coordinates & Italy’s Alps, Apennines, rivers, volcanoes, 20 Regions & UNESCO heritage.',
    '5ª Primaria: Carte, coordinate e Italia fisica, Alpi, Appennini, vulcani, le 20 Regioni e il patrimonio UNESCO.'
  ],
  meta: ['Primary Year 5 · 1 unit · 4 missions', 'Quinta Primaria · 1 unità · 4 missioni'],
  art: geoArt('gg5', '#45d8ff', '#38ef7d', '5ª GEO')
};

export const HIST9_SUBJECT: SubjectInfo = {
  id: 'hist9',
  name: ['History (Level 1)', 'Storia (Livello 1)'],
  blurb: [
    '1° Superiore (Grade 9): Prehistory, Mesopotamia & Egypt, Phoenicians, Greek Polis, Alexander & Roman Republic.',
    '1° Superiore: Preistoria, Mesopotamia ed Egitto, Fenici ed Ebrei, Polis greca, Alessandro Magno e Roma repubblicana.'
  ],
  meta: ['Level 1 · Grade 9 · 3 chapters · 8 missions', 'Livello 1 · 1° Superiore · 3 capitoli · 8 missioni'],
  art: histArt('hg9', '#ff9f45', '#ffd166', '1° SUP')
};

export const GEO9_SUBJECT: SubjectInfo = {
  id: 'geo9',
  name: ['Geography (Level 1)', 'Geografia (Livello 1)'],
  blurb: [
    '1° Superiore (Grade 9): Cartography & GIS, plate tectonics, climates, hydrosphere, demographics & Europe.',
    '1° Superiore: Cartografia e GIS, tettonica a placche, climi, idrosfera, popolazione ed Europa.'
  ],
  meta: ['Level 1 · Grade 9 · 3 chapters · 6 missions', 'Livello 1 · 1° Superiore · 3 capitoli · 6 missioni'],
  art: geoArt('gg9', '#45d8ff', '#8a7bff', '1° SUP')
};

export const HIST10_SUBJECT: SubjectInfo = {
  id: 'hist10',
  name: ['History (Level 2)', 'Storia (Livello 2)'],
  blurb: [
    '2° Superiore (Grade 10): Roman Empire, Christianity & 476 CE, Byzantium, Islam, Charlemagne, Maritime Republics, Communes & 1300s Crisis.',
    '2° Superiore: Impero Romano, Cristianesimo e 476 d.C., Bisanzio, Islam, Carlo Magno, Repubbliche Marinare, Comuni e Crisi del Trecento.'
  ],
  meta: ['Level 2 · Grade 10 · 3 chapters · 8 missions', 'Livello 2 · 2° Superiore · 3 capitoli · 8 missioni'],
  art: histArt('hg10', '#ffd166', '#ff5d8f', '2° SUP')
};

export const GEO10_SUBJECT: SubjectInfo = {
  id: 'geo10',
  name: ['Geography (Level 2)', 'Geografia (Livello 2)'],
  blurb: [
    '2° Superiore (Grade 10): Globalization, inequality & migration, Asia, Africa, Americas, energy & UN Agenda 2030.',
    '2° Superiore: Globalizzazione, disuguaglianze e migrazioni, Asia, Africa, Americhe, energia e Agenda 2030.'
  ],
  meta: ['Level 2 · Grade 10 · 3 chapters · 6 missions', 'Livello 2 · 2° Superiore · 3 capitoli · 6 missioni'],
  art: geoArt('gg10', '#38ef7d', '#45d8ff', '2° SUP')
};

export const HIST11_SUBJECT: SubjectInfo = {
  id: 'hist11',
  name: ['History (Level 3)', 'Storia (Livello 3)'],
  blurb: [
    '3°/4° Superiore (Grade 11): Renaissance & printing, Columbian Exchange, Reformation, Enlightenment, Industrial & French Revolutions, Risorgimento.',
    '3°/4° Superiore: Umanesimo e stampa, scoperte geografiche, Riforma, Illuminismo, Rivoluzione Industriale, Francese e Risorgimento.'
  ],
  meta: ['Level 3 · Grade 11 · 3 chapters · 8 missions', 'Livello 3 · 3°/4° Superiore · 3 capitoli · 8 missioni'],
  art: histArt('hg11', '#ff6a3d', '#ffd166', '3°/4° SUP')
};

export const GEO11_SUBJECT: SubjectInfo = {
  id: 'geo11',
  name: ['Geography (Level 3)', 'Geografia (Livello 3)'],
  blurb: [
    '3°/4° Superiore (Grade 11): Geopolitics & chokepoints, heritage tourism, high-speed rail corridors & Italian climate hazards.',
    '3°/4° Superiore: Geopolitica e stretti strategici, economia del turismo UNESCO, corridoi TEN-T e rischi climatici in Italia.'
  ],
  meta: ['Level 3 · Grade 11 · 2 chapters · 4 missions', 'Livello 3 · 3°/4° Superiore · 2 capitoli · 4 missioni'],
  art: geoArt('gg11', '#45d8ff', '#ffd166', '3°/4° GEO')
};

export const HIST_GEO_SUBJECTS: SubjectInfo[] = [
  HIST5_SUBJECT,
  GEO5_SUBJECT,
  HIST9_SUBJECT,
  GEO9_SUBJECT,
  HIST10_SUBJECT,
  GEO10_SUBJECT,
  HIST11_SUBJECT,
  GEO11_SUBJECT
];

export const q = (en: string, it: string, answers: Pair[], why: Pair): QuizQuestion => ({
  q: [en, it],
  a: answers,
  why
});

export const makeHistGeoMission = (item: HistGeoMissionInput): Mission => {
  const scenes: Scene[] = item.lessons.map(lesson => ({
    who: 's' as const,
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

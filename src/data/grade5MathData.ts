import type { Mission, SubjectInfo } from '../types';
import { GRADE5_MATH_WARMUP_MISSIONS, GRADE5_MATH_PROBLEMS_MISSIONS } from './grade5MathProblemsData';
import { GRADE5_MATH_NUMBERS_MISSIONS } from './grade5MathNumbersData';
import { GRADE5_MATH_FRACTIONS_MISSIONS } from './grade5MathFractionsData';
import { GRADE5_MATH_MEASURE_MISSIONS } from './grade5MathMeasureData';
import { GRADE5_MATH_GEOMETRY_MISSIONS } from './grade5MathGeometryData';

/**
 * Grade 5 Mathematics (Matematica · classe quinta primaria).
 *
 * Follows the table of contents of the Grade 5 textbook supplied by the school
 * (“Che meraviglia! 5 – Matematica”, Raffaello Scuola), unit by unit. Content is
 * aligned with the Italian national curriculum objectives for the end of classe
 * quinta (Indicazioni nazionali 2012, which still apply to classe quinta in
 * 2026/2027) and with the four INVALSI Grade 5 content areas.
 *
 * It is a separate subject from Grade 9 Mathematics ('math'): a Grade 5 learner
 * never sees Grade 9 content and vice versa.
 */
export const GRADE5_MATH_SUBJECT: SubjectInfo = {
  id: 'math5',
  name: ['Mathematics', 'Matematica'],
  blurb: [
    'Problems, data, numbers, fractions, measures and geometry for the last year of primary school.',
    'Problemi, dati, numeri, frazioni, misure e geometria per l’ultimo anno della scuola primaria.'
  ],
  meta: [
    '6 units · Warm-Up + Problems & Data + Numbers + Fractions & Decimals + Measure + Space & Figures',
    '6 unità · Per cominciare + Problemi e dati + Numeri + Frazioni e decimali + Misura + Spazio e figure'
  ],
  art: '<svg viewBox="0 0 120 120" width="100%" aria-hidden="true"><defs><linearGradient id="m5g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ff5d8f"/><stop offset="1" stop-color="#ffd166"/></linearGradient></defs><rect x="22" y="22" width="44" height="44" rx="8" fill="none" stroke="url(#m5g)" stroke-width="3" transform="rotate(-12 44 44)"/><circle cx="35" cy="35" r="4" fill="#ff5d8f"/><circle cx="53" cy="51" r="4" fill="#ff5d8f"/><circle cx="44" cy="43" r="4" fill="#ff5d8f"/><path d="M62 98 L98 98 L62 58 Z" fill="none" stroke="#6ad1ff" stroke-width="3" stroke-linejoin="round"/><circle cx="86" cy="40" r="16" fill="none" stroke="#7bd88f" stroke-width="3"/><line x1="86" y1="40" x2="102" y2="40" stroke="#7bd88f" stroke-width="2.5"/><text x="32" y="102" text-anchor="middle" font-family="Dela Gothic One, Arial Black, sans-serif" font-size="26" fill="url(#m5g)">5</text></svg>'
};

export interface Grade5MathUnit {
  title: [string, string];
  ch: string;
  pages: string;
  missions: Mission[];
}

/** Textbook units in order. Each becomes one unit and one arc in the global catalogue. */
export const GRADE5_MATH_UNITS: Grade5MathUnit[] = [
  { title: ['Warm-Up', 'Per cominciare'], ch: '1', pages: '4–7', missions: GRADE5_MATH_WARMUP_MISSIONS },
  { title: ['Problems, Data and Predictions', 'Problemi, dati e previsioni'], ch: '2', pages: '8–35', missions: GRADE5_MATH_PROBLEMS_MISSIONS },
  { title: ['Numbers', 'Numeri'], ch: '3', pages: '36–75', missions: GRADE5_MATH_NUMBERS_MISSIONS },
  { title: ['Fractions and Decimal Numbers', 'Frazioni e numeri decimali'], ch: '4', pages: '76–95', missions: GRADE5_MATH_FRACTIONS_MISSIONS },
  { title: ['Measure', 'Misura'], ch: '5', pages: '96–117', missions: GRADE5_MATH_MEASURE_MISSIONS },
  { title: ['Space and Figures', 'Spazio e figure'], ch: '6', pages: '118–164', missions: GRADE5_MATH_GEOMETRY_MISSIONS }
];

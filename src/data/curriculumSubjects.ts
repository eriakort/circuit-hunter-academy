import { SubjectInfo, GradeId } from '../types';
import { GRADE5_SCIENCE_SUBJECT } from './grade5ScienceData';
import { GRADE5_MATH_SUBJECT } from './grade5MathData';

export const ITALIAN_SUBJECT: SubjectInfo = {
  id: 'italian',
  name: ['Italian Studies', 'Lingua Italiana'],
  blurb: [
    'Master Italian through speaking and conversation (CEFR A1, A2, B1) and through grammar: spelling, vocabulary, parts of speech, verbs and sentence analysis.',
    'Padroneggia l\'italiano con il parlato e la conversazione (QCER A1, A2, B1) e con la grammatica: ortografia, lessico, parti del discorso, verbi e analisi logica.'
  ],
  meta: [
    'A1 · A2 · B1 · Speaking + 8 grammar units',
    'A1 · A2 · B1 · Parlato + 8 unità di grammatica'
  ],
  art: '<svg viewBox="0 0 120 120" width="100%" aria-hidden="true"><defs><linearGradient id="itg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#009246"/><stop offset="50%" stop-color="#ffffff"/><stop offset="100%" stop-color="#ce2b37"/></linearGradient><linearGradient id="micg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ffd166"/><stop offset="100%" stop-color="#ff6a3d"/></linearGradient></defs><rect x="22" y="26" width="76" height="68" rx="14" fill="#111936" stroke="url(#itg)" stroke-width="3"/><path d="M38 34 h14 v52 h-14 z" fill="#009246" opacity=".8"/><path d="M52 34 h16 v52 h-16 z" fill="#f4f4f4" opacity=".85"/><path d="M68 34 h14 v52 h-14 z" fill="#ce2b37" opacity=".8"/><rect x="54" y="46" width="12" height="20" rx="6" fill="url(#micg)"/><path d="M49 56 a11 11 0 0 0 22 0" fill="none" stroke="#ffd166" stroke-width="2.5" stroke-linecap="round"/><line x1="60" y1="67" x2="60" y2="75" stroke="#ffd166" stroke-width="2.5"/><line x1="52" y1="75" x2="68" y2="75" stroke="#ffd166" stroke-width="2.5" stroke-linecap="round"/></svg>'
};

export const SUBJECTS: SubjectInfo[] = [
  {
    id: 'cs',
    name: ['Computer Science', 'Informatica'],
    blurb: [
      'How computers work — algorithms, data, hardware, networks, security and code.',
      'Come funzionano i computer — algoritmi, dati, hardware, reti, sicurezza e codice.'
    ],
    meta: [
      '3 units · 16 chapters · 44 missions',
      '3 unità · 16 capitoli · 44 missioni'
    ],
    art: '<svg viewBox="0 0 120 120" width="100%" aria-hidden="true"><defs><linearGradient id="csg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#6ad1ff"/><stop offset="1" stop-color="#8a7bff"/></linearGradient></defs><rect x="34" y="34" width="52" height="52" rx="8" fill="none" stroke="url(#csg)" stroke-width="3"/><rect x="48" y="48" width="24" height="24" rx="4" fill="url(#csg)" opacity=".85"/><line x1="44" y1="34" x2="44" y2="22" stroke="url(#csg)" stroke-width="3"/><line x1="44" y1="86" x2="44" y2="98" stroke="url(#csg)" stroke-width="3"/><line x1="34" y1="44" x2="22" y2="44" stroke="url(#csg)" stroke-width="3"/><line x1="86" y1="44" x2="98" y2="44" stroke="url(#csg)" stroke-width="3"/><line x1="60" y1="34" x2="60" y2="22" stroke="url(#csg)" stroke-width="3"/><line x1="60" y1="86" x2="60" y2="98" stroke="url(#csg)" stroke-width="3"/><line x1="34" y1="60" x2="22" y2="60" stroke="url(#csg)" stroke-width="3"/><line x1="86" y1="60" x2="98" y2="60" stroke="url(#csg)" stroke-width="3"/><line x1="76" y1="34" x2="76" y2="22" stroke="url(#csg)" stroke-width="3"/><line x1="76" y1="86" x2="76" y2="98" stroke="url(#csg)" stroke-width="3"/><line x1="34" y1="76" x2="22" y2="76" stroke="url(#csg)" stroke-width="3"/><line x1="86" y1="76" x2="98" y2="76" stroke="url(#csg)" stroke-width="3"/></svg>'
  },
  {
    id: 'phys',
    name: ['Physics', 'Fisica'],
    blurb: [
      'Measuring the world and the physics of equilibrium — quantities, vectors, forces, solids and fluids.',
      'Misurare il mondo e la fisica dell\'equilibrio — grandezze, vettori, forze, solidi e fluidi.'
    ],
    meta: [
      'Physics · first two years · chapters 1–5',
      'Fisica · primo biennio · capitoli 1–5'
    ],
    art: '<svg viewBox="0 0 120 120" width="100%" aria-hidden="true"><defs><linearGradient id="phg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ff9f45"/><stop offset="1" stop-color="#ff5d8f"/></linearGradient></defs><ellipse cx="60" cy="60" rx="46" ry="17" fill="none" stroke="url(#phg)" stroke-width="3" transform="rotate(32 60 60)"/><ellipse cx="60" cy="60" rx="46" ry="17" fill="none" stroke="url(#phg)" stroke-width="3" transform="rotate(-32 60 60)"/><circle cx="60" cy="60" r="10" fill="url(#phg)"/><circle cx="99" cy="81" r="5.5" fill="#ffd166"/><circle cx="99" cy="39" r="5.5" fill="#ffd166"/></svg>'
  },
  {
    id: 'math',
    name: ['Mathematics', 'Matematica'],
    blurb: [
      'Numbers, sets, algebra, geometry and statistics — turn each topic into a technique.',
      'Numeri, insiemi, algebra, geometria e statistica — trasforma ogni argomento in una tecnica.'
    ],
    meta: [
      '6 chapters · 28 missions',
      '6 capitoli · 28 missioni'
    ],
    art: '<svg viewBox="0 0 120 120" width="100%" aria-hidden="true"><defs><linearGradient id="mg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffd166"/><stop offset="1" stop-color="#ff6a3d"/></linearGradient></defs><text x="60" y="72" text-anchor="middle" font-family="Dela Gothic One, Arial Black, sans-serif" font-size="42" fill="url(#mg)">∑</text></svg>'
  },
  ITALIAN_SUBJECT,
  GRADE5_SCIENCE_SUBJECT,
  GRADE5_MATH_SUBJECT
];

export const GRADE_CURRICULUM_MAP: Record<GradeId, string[]> = {
  grade5: ['science', 'math5', 'italian'],
  grade9: ['cs', 'phys', 'math', 'italian']
};

export function getCurriculumSubjects(grade?: GradeId | null): SubjectInfo[] {
  const targetGrade: GradeId = (grade === 'grade5' || grade === 'grade9') ? grade : 'grade9';
  const allowed = new Set(GRADE_CURRICULUM_MAP[targetGrade]);
  const list = SUBJECTS.filter(s => allowed.has(s.id));
  // Guarantee Italian is never excluded
  if (!list.some(s => s.id === 'italian')) {
    list.push(ITALIAN_SUBJECT);
  }
  return list;
}

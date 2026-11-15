import { GradeId, SubjectInfo } from '../types';

export interface GradeInfo {
  id: GradeId;
  name: [string, string];
  schoolLevel: [string, string];
  ageRange: [string, string];
  description: [string, string];
  status: 'ready' | 'preparing';
}

/**
 * Grade-specific curriculum registry.
 * Grade 5 has its own Science & Technology subject and curriculum; it never inherits
 * Grade 9 subjects such as Physics.
 */
export const GRADES: GradeInfo[] = [
  {
    id: 'grade5',
    name: ['Grade 5', 'Quinta primaria'],
    schoolLevel: ['Primary school', 'Scuola primaria'],
    ageRange: ['Usually ages 10–11', 'Generalmente 10–11 anni'],
    description: ['A dedicated primary-school curriculum.', 'Un programma dedicato alla scuola primaria.'],
    status: 'preparing'
  },
  {
    id: 'grade9',
    name: ['Grade 9', 'Terza media / 1° Sup.'],
    schoolLevel: ['Secondary transition · Year 1', 'Passaggio alle superiori · 1° Superiore'],
    ageRange: ['Usually ages 13–15', 'Generalmente 13–15 anni'],
    description: ['CS, Physics, Math, Italian & Chemistry Level 1.', 'Informatica, Fisica, Matematica, Italiano e Chimica Livello 1.'],
    status: 'ready'
  },
  {
    id: 'grade10',
    name: ['Grade 10', '2° Superiore'],
    schoolLevel: ['Upper secondary school · Year 2', 'Scuola secondaria di II grado · 2° anno'],
    ageRange: ['Usually ages 15–16', 'Generalmente 15–16 anni'],
    description: ['Chemistry Level 2 (bonding, nomenclature, stoichiometry & solutions) & Italian.', 'Chimica Livello 2 (legami, nomenclatura, stechiometria e soluzioni) e Italiano.'],
    status: 'ready'
  },
  {
    id: 'grade11',
    name: ['Grade 11', '3° / 4° Superiore'],
    schoolLevel: ['Upper secondary school · Years 3–4', 'Scuola secondaria di II grado · Triennio'],
    ageRange: ['Usually ages 16–18', 'Generalmente 16–18 anni'],
    description: ['Chemistry Level 3 (equilibrium, pH, redox & organic intro) & Italian.', 'Chimica Livello 3 (equilibrio, pH, redox e chimica organica) e Italiano.'],
    status: 'ready'
  }
];

export const GRADE_SUBJECT_IDS: Record<GradeId, string[]> = {
  grade5: ['science', 'math5', 'italian'],
  grade9: ['cs', 'phys', 'math', 'italian', 'chem'],
  grade10: ['chem10', 'italian'],
  grade11: ['chem11', 'italian']
};

export const getSubjectsForGrade = (grade: GradeId, subjects: SubjectInfo[]): SubjectInfo[] => {
  const allowed = new Set(GRADE_SUBJECT_IDS[grade]);
  return subjects.filter(subject => allowed.has(subject.id));
};

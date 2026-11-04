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
 * Grade 5 intentionally has no active subjects yet: its curriculum will be curated
 * separately rather than inheriting Grade 9 subjects such as Physics.
 */
export const GRADES: GradeInfo[] = [
  {
    id: 'grade5',
    name: ['Grade 5', 'Quinta primaria'],
    schoolLevel: ['Primary school', 'Scuola primaria'],
    ageRange: ['Usually ages 10–11', 'Generalmente 10–11 anni'],
    description: ['A dedicated primary-school curriculum.', 'Un programma dedicato alla scuola primaria.'],
    status: 'ready'
  },
  {
    id: 'grade9',
    name: ['Grade 9', 'Terza media'],
    schoolLevel: ['Lower secondary school', 'Scuola secondaria di primo grado'],
    ageRange: ['Usually ages 13–14', 'Generalmente 13–14 anni'],
    description: ['The existing academy and curriculum.', 'L’accademia e il programma già esistenti.'],
    status: 'ready'
  }
];

export const GRADE_SUBJECT_IDS: Record<GradeId, string[]> = {
  grade5: ['science'],
  grade9: ['cs', 'phys', 'math']
};

export const getSubjectsForGrade = (grade: GradeId, subjects: SubjectInfo[]): SubjectInfo[] => {
  const allowed = new Set(GRADE_SUBJECT_IDS[grade]);
  return subjects.filter(subject => allowed.has(subject.id));
};

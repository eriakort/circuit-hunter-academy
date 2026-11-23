import { Language } from '../types';

export type CurriculumContentLanguage = Language;

/** Ghana NaCCA learning content is authored in English only. The Italian curriculum supports English, Italian and the additional Italian-track support languages. */
export function getCurriculumContentLanguage(curriculumId: string, selectedLanguage: CurriculumContentLanguage): CurriculumContentLanguage {
  return curriculumId === 'ghana-nacca' ? 'en' : selectedLanguage;
}

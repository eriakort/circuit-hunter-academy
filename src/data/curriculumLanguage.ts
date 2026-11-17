export type CurriculumContentLanguage = 'en' | 'it';

/** Ghana NaCCA learning content is authored in English only. Italian curriculum content supports both languages. */
export function getCurriculumContentLanguage(curriculumId: string, selectedLanguage: CurriculumContentLanguage): CurriculumContentLanguage {
  return curriculumId === 'ghana-nacca' ? 'en' : selectedLanguage;
}

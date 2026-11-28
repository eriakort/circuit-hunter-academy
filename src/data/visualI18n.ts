import type { Language } from '../types';
import { translateUi } from './uiTranslations';

/**
 * Text of an (English, Italian) pair for one language. PT/ES/FR/DE use the
 * translation table and fall back to Italian, never English.
 */
export const supportText = (en: string, it: string, lang: Language): string =>
  lang === 'it' ? it : lang === 'en' ? en : translateUi(en, lang) ?? it ?? en;

/** English uses a decimal point; Italian, Portuguese, Spanish, French and German use a comma. */
export const usesDecimalComma = (lang: Language): boolean => lang !== 'en';

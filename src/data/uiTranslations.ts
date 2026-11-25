import { UI_A } from './uiTranslationsA';
import { UI_B } from './uiTranslationsB';
import { UI_C } from './uiTranslationsC';
import { UI_D } from './uiTranslationsD';
import { UI_E } from './uiTranslationsE';
import type { UiRow } from './uiTranslationsA';

export const UI_TRANSLATIONS: Record<string, UiRow> = { ...UI_A, ...UI_B, ...UI_C, ...UI_D, ...UI_E };

const SUPPORT_INDEX: Record<string, number> = { pt: 0, es: 1, fr: 2, de: 3 };

/** Support-language text for an English UI string, or undefined when none exists. */
export const translateUi = (en: string, lang: string): string | undefined => {
  const i = SUPPORT_INDEX[lang];
  if (i === undefined) return undefined;
  return UI_TRANSLATIONS[en]?.[i];
};

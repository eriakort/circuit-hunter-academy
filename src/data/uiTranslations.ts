import { UI_A } from './uiTranslationsA';
import { UI_B } from './uiTranslationsB';
import { UI_C } from './uiTranslationsC';
import { UI_D } from './uiTranslationsD';
import { UI_E } from './uiTranslationsE';
import { UI_Q1 } from './uiTranslationsQ1';
import { UI_Q2 } from './uiTranslationsQ2';
import { UI_Q3 } from './uiTranslationsQ3';
import { UI_Q4 } from './uiTranslationsQ4';
import { UI_Q5 } from './uiTranslationsQ5';
import { UI_Q6 } from './uiTranslationsQ6';
import { UI_Q7 } from './uiTranslationsQ7';
import { UI_Q8 } from './uiTranslationsQ8';
import { UI_Q9 } from './uiTranslationsQ9';
import type { UiRow } from './uiTranslationsA';

export const UI_TRANSLATIONS: Record<string, UiRow> = { ...UI_A, ...UI_B, ...UI_C, ...UI_D, ...UI_E, ...UI_Q1, ...UI_Q2, ...UI_Q3, ...UI_Q4, ...UI_Q5, ...UI_Q6, ...UI_Q7, ...UI_Q8, ...UI_Q9 };

const SUPPORT_INDEX: Record<string, number> = { pt: 0, es: 1, fr: 2, de: 3 };

/** Short stable id for long lesson text (FNV-1a 32-bit plus length). */
export const textId = (text: string): string => {
  let h = 0x811c9dc5;
  for (let k = 0; k < text.length; k++) {
    h ^= text.charCodeAt(k);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h.toString(36) + '.' + text.length.toString(36);
};

/** Support-language text for an English string (exact key, else text id), or undefined. */
export const translateUi = (en: string, lang: string): string | undefined => {
  const i = SUPPORT_INDEX[lang];
  if (i === undefined) return undefined;
  return (UI_TRANSLATIONS[en] ?? UI_TRANSLATIONS[textId(en)])?.[i];
};

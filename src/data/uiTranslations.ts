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
import { UI_S1 } from './uiTranslationsS1';
import { UI_S2 } from './uiTranslationsS2';
import { UI_S3 } from './uiTranslationsS3';
import { UI_S4 } from './uiTranslationsS4';
import { UI_S5 } from './uiTranslationsS5';
import { UI_S6 } from './uiTranslationsS6';
import { UI_S7 } from './uiTranslationsS7';
import { UI_S8 } from './uiTranslationsS8';
import { UI_S9 } from './uiTranslationsS9';
import { UI_S10 } from './uiTranslationsS10';
import { UI_S11 } from './uiTranslationsS11';
import { UI_S12 } from './uiTranslationsS12';
import { UI_S13 } from './uiTranslationsS13';
import { UI_S14 } from './uiTranslationsS14';
import { UI_S15 } from './uiTranslationsS15';
import { UI_S16 } from './uiTranslationsS16';
import { UI_S17 } from './uiTranslationsS17';
import { UI_S18 } from './uiTranslationsS18';
import { UI_S19 } from './uiTranslationsS19';
import { UI_S20 } from './uiTranslationsS20';
import { UI_S21 } from './uiTranslationsS21';
import { UI_S22 } from './uiTranslationsS22';
import { UI_S23 } from './uiTranslationsS23';
import { UI_S24 } from './uiTranslationsS24';
import { UI_S25 } from './uiTranslationsS25';
import { UI_S26 } from './uiTranslationsS26';
import { UI_S27 } from './uiTranslationsS27';
import { UI_S28 } from './uiTranslationsS28';
import { UI_S29 } from './uiTranslationsS29';
import { UI_S30 } from './uiTranslationsS30';
import { UI_S31 } from './uiTranslationsS31';
import { UI_T1 } from './uiTranslationsT1';
import type { UiRow } from './uiTranslationsA';

export const UI_TRANSLATIONS: Record<string, UiRow> = { ...UI_A, ...UI_B, ...UI_C, ...UI_D, ...UI_E, ...UI_Q1, ...UI_Q2, ...UI_Q3, ...UI_Q4, ...UI_Q5, ...UI_Q6, ...UI_Q7, ...UI_Q8, ...UI_Q9, ...UI_S1, ...UI_S2, ...UI_S3, ...UI_S4, ...UI_S5, ...UI_S6, ...UI_S7, ...UI_S8, ...UI_S9, ...UI_S10, ...UI_S11, ...UI_S12, ...UI_S13, ...UI_S14, ...UI_S15, ...UI_S16, ...UI_S17, ...UI_S18, ...UI_S19, ...UI_S20, ...UI_S21, ...UI_S22, ...UI_S23, ...UI_S24, ...UI_S25, ...UI_S26, ...UI_S27, ...UI_S28, ...UI_S29, ...UI_S30, ...UI_S31, ...UI_T1 };

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

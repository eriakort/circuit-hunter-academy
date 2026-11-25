import type { LocalizedText } from '../types';
import type { GrammarExercise, GrammarLevel } from './italianGrammar';
import type { GrammarActivity } from './italianGrammarActivities';

// Shared helpers for the compact grammar topics (bello/quello/che, indefinites,
// ne, plurals). Italian target text stays Italian; support text exists in all
// six interface languages and is a draft pending native-speaker review.

export const T = (en: string, it: string, pt: string, es: string, fr: string, de: string): LocalizedText => ({ en, it, pt, es, fr, de });
const LANGS = ['en', 'it', 'pt', 'es', 'fr', 'de'] as const;

export const LABELS = {
  A1: T('Foundations', 'Fondamenti', 'Fundamentos', 'Fundamentos', 'Fondamentaux', 'Grundlagen'),
  A2: T('Application', 'Applicazione', 'Aplicação', 'Aplicación', 'Application', 'Anwendung'),
  B1: T('Mastery', 'Padronanza', 'Domínio', 'Dominio', 'Maîtrise', 'Beherrschung')
};

/** Replace {x} in a rule with a concrete Italian example. */
export const R = (rule: LocalizedText, x: string): LocalizedText => {
  const out: Record<string, string> = {};
  for (const l of LANGS) out[l] = (rule as Record<string, string>)[l].replace('{x}', x);
  return out as unknown as LocalizedText;
};

const PREFIX = {
  fill: T('Complete: ', 'Completa: ', 'Complete: ', 'Completa: ', 'Complète : ', 'Ergänze: '),
  reply: T('Answer: ', 'Rispondi: ', 'Responda: ', 'Responde: ', 'Réponds : ', 'Antworte: ')
};
const WHICH = T('Which sentence is correct?', 'Quale frase è corretta?', 'Qual frase está correta?', '¿Qué frase es correcta?', 'Quelle phrase est correcte ?', 'Welcher Satz ist richtig?');
const withPrefix = (p: LocalizedText, s: string): LocalizedText => T(p.en + s, p.it + s, p.pt + s, p.es + s, p.fr + s, p.de + s);

export type Row =
  | { kind: 'fill'; s: string; ok: string; bad: [string, string]; rule: LocalizedText; x: string }
  | { kind: 'reply'; s: string; ok: string; bad: [string, string]; rule: LocalizedText; x: string }
  | { kind: 'pick'; ok: string; bad: [string, string]; rule: LocalizedText; x: string };

export const fill = (s: string, ok: string, bad: [string, string], rule: LocalizedText, x: string): Row => ({ kind: 'fill', s, ok, bad, rule, x });
export const reply = (s: string, ok: string, bad: [string, string], rule: LocalizedText, x: string): Row => ({ kind: 'reply', s, ok, bad, rule, x });
export const pick = (ok: string, bad: [string, string], rule: LocalizedText, x: string): Row => ({ kind: 'pick', ok, bad, rule, x });

// The correct option moves around so that learners cannot guess by position.
const POSITIONS = [1, 2, 0, 0, 2, 1, 2, 0, 1, 1];

export function buildExercises(prefix: string, level: GrammarLevel, rows: Row[]): GrammarExercise[] {
  return rows.map((row, i) => {
    const pos = POSITIONS[i % POSITIONS.length];
    const options = [...row.bad];
    options.splice(pos, 0, row.ok);
    const prompt = row.kind === 'fill' ? withPrefix(PREFIX.fill, row.s) : row.kind === 'reply' ? withPrefix(PREFIX.reply, row.s) : WHICH;
    return { id: `${prefix}-${level.toLowerCase()}-${i + 1}`, prompt, options, answer: pos, explanation: R(row.rule, row.x) };
  });
}

const ACT_TITLES = {
  correct: T('Correct the sentence', 'Correggi la frase', 'Corrija a frase', 'Corrige la frase', 'Corrige la phrase', 'Korrigiere den Satz'),
  order: T('Build the sentence', 'Costruisci la frase', 'Monte a frase', 'Construye la frase', 'Construis la phrase', 'Bilde den Satz'),
  translate: T('Translate into Italian', 'Traduci in italiano', 'Traduza para o italiano', 'Traduce al italiano', 'Traduis en italien', 'Übersetze ins Italienische'),
  write: T('Write your own sentences', 'Scrivi le tue frasi', 'Escreva as suas frases', 'Escribe tus frases', 'Écris tes propres phrases', 'Schreibe eigene Sätze')
};
const ACT_PROMPTS = {
  correct: T('Correct the mistake in this sentence.', 'Correggi l’errore in questa frase.', 'Corrija o erro nesta frase.', 'Corrige el error de esta frase.', 'Corrige l’erreur dans cette phrase.', 'Korrigiere den Fehler in diesem Satz.'),
  order: T('Arrange the words into a correct sentence.', 'Metti in ordine le parole per formare una frase corretta.', 'Organize as palavras numa frase correta.', 'Ordena las palabras en una frase correcta.', 'Range les mots pour former une phrase correcte.', 'Ordne die Wörter zu einem richtigen Satz.'),
  translate: T('Translate into Italian.', 'Traduci in italiano.', 'Traduza para o italiano.', 'Traduce al italiano.', 'Traduis en italien.', 'Übersetze ins Italienische.')
};
const WRITE_NOTE = T(
  'Check each sentence against the hint. Your sentences can differ from the model.',
  'Controlla ogni frase con il suggerimento. Le tue frasi possono essere diverse dal modello.',
  'Verifique cada frase com a dica. As suas frases podem ser diferentes do modelo.',
  'Comprueba cada frase con la pista. Tus frases pueden ser distintas del modelo.',
  'Vérifie chaque phrase avec l’indice. Tes phrases peuvent différer du modèle.',
  'Prüfe jeden Satz mit dem Hinweis. Deine Sätze dürfen vom Modell abweichen.'
);

export type ActSpec =
  | { level: GrammarLevel; type: 'correct'; source: string; accepted: string[]; model: string; rule: LocalizedText; x: string }
  | { level: GrammarLevel; type: 'order'; words: string[]; model: string; rule: LocalizedText; x: string }
  | { level: GrammarLevel; type: 'translate'; source: LocalizedText; accepted: string[]; model: string; rule: LocalizedText; x: string }
  | { level: GrammarLevel; type: 'write'; prompt: LocalizedText; model: string; rule: LocalizedText; x: string };

export function buildActivities(topicId: string, specs: ActSpec[]): GrammarActivity[] {
  return specs.map(spec => {
    const base = { topicId, id: `${topicId}-${spec.level.toLowerCase()}-${spec.type}`, level: spec.level, title: ACT_TITLES[spec.type], hint: R(spec.rule, spec.x) };
    switch (spec.type) {
      case 'correct':
        return { ...base, type: 'correct', prompt: ACT_PROMPTS.correct, source: spec.source, acceptedAnswers: spec.accepted, modelAnswer: spec.model, explanation: R(spec.rule, spec.x) } as GrammarActivity;
      case 'order':
        return { ...base, type: 'order', prompt: ACT_PROMPTS.order, words: spec.words, modelAnswer: spec.model, explanation: R(spec.rule, spec.x) } as GrammarActivity;
      case 'translate':
        return { ...base, type: 'translate', prompt: ACT_PROMPTS.translate, source: spec.source, acceptedAnswers: spec.accepted, modelAnswer: spec.model, explanation: R(spec.rule, spec.x) } as GrammarActivity;
      default:
        return { ...base, type: 'write', prompt: spec.prompt, modelAnswer: spec.model, explanation: WRITE_NOTE } as GrammarActivity;
    }
  });
}

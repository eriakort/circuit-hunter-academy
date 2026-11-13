import type { CodexEntry, Mission } from '../types';
import { ORTHOGRAPHY, LEXICON } from './italianGrammarOrthographyLexicon';
import { NOUNS_ARTICLES, ADJECTIVES_PRONOUNS } from './italianGrammarNounsPronouns';
import { VERBS, INVARIABLES } from './italianGrammarVerbs';
import { SYNTAX, VERB_TABLES } from './italianGrammarSyntax';

/**
 * Italian grammar units (grammatica di quinta primaria), added to the shared
 * Italian Studies subject for both grades. They follow the table of contents of
 * the Grade 5 grammar textbook supplied by the school (“L’albero delle storie 5 –
 * Grammatica”, il capitello), section by section, and the Italian national
 * curriculum objectives for “elementi di grammatica esplicita e riflessione sugli
 * usi della lingua” at the end of classe quinta.
 */
export interface ItalianGrammarUnit {
  title: [string, string];
  ch: string;
  pages: string;
  missions: Mission[];
}

export const ITALIAN_GRAMMAR_UNITS: ItalianGrammarUnit[] = [
  { title: ['Grammar · Spelling', 'Grammatica · Ortografia'], ch: 'G1', pages: '4–19', missions: ORTHOGRAPHY.missions },
  { title: ['Grammar · Vocabulary', 'Grammatica · Lessico'], ch: 'G2', pages: '20–33', missions: LEXICON.missions },
  { title: ['Grammar · Nouns and Articles', 'Grammatica · Nomi e articoli'], ch: 'G3', pages: '34–49', missions: NOUNS_ARTICLES.missions },
  { title: ['Grammar · Adjectives and Pronouns', 'Grammatica · Aggettivi e pronomi'], ch: 'G4', pages: '50–71', missions: ADJECTIVES_PRONOUNS.missions },
  { title: ['Grammar · The Verb', 'Grammatica · Il verbo'], ch: 'G5', pages: '72–105', missions: VERBS.missions },
  { title: ['Grammar · Invariable Words', 'Grammatica · Parti invariabili'], ch: 'G6', pages: '106–117', missions: INVARIABLES.missions },
  { title: ['Grammar · Syntax', 'Grammatica · Sintassi'], ch: 'G7', pages: '118–145', missions: SYNTAX.missions },
  { title: ['Grammar · Verb Tables', 'Grammatica · Tavole dei verbi'], ch: 'G8', pages: '146–153', missions: VERB_TABLES.missions }
];

export const ITALIAN_GRAMMAR_CODEX: CodexEntry[] = [
  ...ORTHOGRAPHY.codex, ...LEXICON.codex, ...NOUNS_ARTICLES.codex, ...ADJECTIVES_PRONOUNS.codex,
  ...VERBS.codex, ...INVARIABLES.codex, ...SYNTAX.codex, ...VERB_TABLES.codex
];

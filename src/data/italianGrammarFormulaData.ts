import type { FormulaCard, SubjectTopic } from './formulaData';

/** Grammar-book topic for the Italian grammar units (grammatica di quinta). */
export const ITALIAN_GRAMMAR_TOPIC: SubjectTopic = {
  id: 'grammatica-quinta', subject: 'italian', name: ['Grade 5 Grammar: Spelling, Words, Verbs, Sentences', 'Grammatica di quinta: ortografia, parole, verbi, frase']
};

export const ITALIAN_GRAMMAR_FORMULA_CARDS: FormulaCard[] = [
  {
    id: 'itg5-card-ortografia', subject: 'italian', topicId: 'grammatica-quinta', category: 'italian',
    title: ['Accents, Apostrophe and Truncation', 'Accento, apostrofo e troncamento'],
    formula: 'è/e · dà/da · sì/si · là/la · lì/li · né/ne · sé/se · tè/te   ·   un amico / un’amica   ·   qual è · un po’',
    rules: [
      { name: ['Never accented', 'Mai accentati'], math: 'qui · qua · su · blu · tre · re · sto · sta · fa · va', desc: ['These monosyllables have no twin to distinguish.', 'Questi monosillabi non hanno un «gemello» da cui distinguersi.'] },
      { name: ['H in avere', 'H nel verbo avere'], math: 'ho · hai · ha · hanno', desc: ['Replace with avevo/aveva: if it works, write the h.', 'Sostituisci con avevo/aveva: se funziona, ci vuole l’h.'] }
    ],
    example: ['Il cielo è sereno e caldo. Qual è il tuo nome? Mangia un po’ di frutta.', 'Il cielo è sereno e caldo. Qual è il tuo nome? Mangia un po’ di frutta.'],
    trap: ['“Qual’è” and “un pò” are mistakes!', '«Qual’è» e «un pò» sono errori!']
  },
  {
    id: 'itg5-card-parti-discorso', subject: 'italian', topicId: 'grammatica-quinta', category: 'italian',
    title: ['The Nine Parts of Speech', 'Le nove parti del discorso'],
    formula: 'Variable: nome · articolo · aggettivo · pronome · verbo   ·   Invariable: avverbio · preposizione · congiunzione · esclamazione',
    rules: [
      { name: ['Adjective or pronoun?', 'Aggettivo o pronome?'], math: 'questo libro (agg.) · prendo questo (pron.)', desc: ['An adjective accompanies a noun; a pronoun replaces it.', 'L’aggettivo accompagna il nome; il pronome lo sostituisce.'] },
      { name: ['Organic degrees', 'Gradi organici'], math: 'buono → migliore → ottimo · cattivo → peggiore → pessimo', desc: ['Never “più migliore”.', 'Mai «più migliore».'] }
    ],
    example: ['Ieri (avv.) il (art.) piccolo (agg.) Luca (nome) mi (pron.) ha regalato (verbo) un (art.) libro (nome).', 'Ieri (avv.) il (art.) piccolo (agg.) Luca (nome) mi (pron.) ha regalato (verbo) un (art.) libro (nome).']
  },
  {
    id: 'itg5-card-verbo', subject: 'italian', topicId: 'grammatica-quinta', category: 'italian',
    title: ['Moods and Tenses of the Verb', 'Modi e tempi del verbo'],
    formula: 'Finite: indicativo (8) · congiuntivo (4) · condizionale (2) · imperativo (1)   ·   Non-finite: infinito · participio · gerundio',
    rules: [
      { name: ['Compound tense', 'Tempo composto'], math: 'ausiliare (essere / avere) + participio passato', desc: ['ho cantato · sono partito · avevo letto.', 'ho cantato · sono partito · avevo letto.'] },
      { name: ['Passive voice', 'Forma passiva'], math: 'essere + participio passato (+ da …)', desc: ['Only transitive verbs: la mela è mangiata da Luca.', 'Solo i verbi transitivi: la mela è mangiata da Luca.'] }
    ],
    example: ['Se io fossi (congiuntivo) libero, verrei (condizionale) con te.', 'Se io fossi (congiuntivo) libero, verrei (condizionale) con te.'],
    trap: ['“Se io sarei” is wrong: say “se io fossi”.', '«Se io sarei» è un errore: si dice «se io fossi».']
  },
  {
    id: 'itg5-card-analisi-logica', subject: 'italian', topicId: 'grammatica-quinta', category: 'italian',
    title: ['Logical Analysis: The Elements of the Sentence', 'Analisi logica: gli elementi della frase'],
    formula: 'predicato → soggetto (chi? che cosa?) → complemento oggetto (chi? che cosa? senza preposizione) → complementi indiretti (preposizione + domanda)',
    rules: [
      { name: ['Indirect complements', 'Complementi indiretti'], math: 'termine (a chi?) · specificazione (di chi?) · luogo (dove?) · tempo (quando?) · modo (come?) · mezzo (con che cosa?) · compagnia (con chi?)', desc: ['Always ask the question to name the complement.', 'Fai sempre la domanda per dare il nome al complemento.'] },
      { name: ['Nominal predicate', 'Predicato nominale'], math: 'essere + nome / aggettivo', desc: ['Luca è simpatico. (Sono a casa = predicato verbale)', 'Luca è simpatico. (Sono a casa = predicato verbale)'] }
    ],
    example: ['Marco (sogg.) regala (pred.) un libro (c. ogg.) a Sara (c. termine) per il compleanno (c. fine).', 'Marco (sogg.) regala (pred.) un libro (c. ogg.) a Sara (c. termine) per il compleanno (c. fine).']
  }
];

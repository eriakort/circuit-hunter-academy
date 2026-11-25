// Support-language labels for the Grade 5 grammar tables and diagrams (conjugation tables,
// reference tables, timeline, core-sentence figure). Order: [pt, es, fr, de].
// Draft text pending native-speaker review. Kept local so these short words cannot clash
// with interface strings of the same English spelling.
import type { UiRow } from './uiTranslationsA';

const SUPPORT_INDEX: Record<string, number> = { pt: 0, es: 1, fr: 2, de: 3 };

export const VISUAL_LABELS: Record<string, UiRow> = {
  'Articles': ['Os artigos', 'Los artículos', 'Les articles', 'Die Artikel'],
  'Articulated prepositions': ['As preposições articuladas', 'Las preposiciones articuladas', 'Les prépositions articulées', 'Die Präpositionen mit Artikel'],
  'COMPOUND TENSES': ['TEMPOS COMPOSTOS', 'TIEMPOS COMPUESTOS', 'TEMPS COMPOSÉS', 'ZUSAMMENGESETZTE ZEITEN'],
  'SIMPLE TENSES': ['TEMPOS SIMPLES', 'TIEMPOS SIMPLES', 'TEMPS SIMPLES', 'EINFACHE ZEITEN'],
  'Common irregular verbs': ['Verbos irregulares mais comuns', 'Verbos irregulares más comunes', 'Verbes irréguliers les plus courants', 'Häufige unregelmäßige Verben'],
  'FUTURE': ['FUTURO', 'FUTURO', 'FUTUR', 'ZUKUNFT'],
  'NOW': ['AGORA', 'AHORA', 'MAINTENANT', 'JETZT'],
  'PAST': ['PASSADO', 'PASADO', 'PASSÉ', 'VERGANGENHEIT'],
  'Indicative tenses on the timeline': ['Os tempos do indicativo na linha do tempo', 'Los tiempos del indicativo en la línea del tiempo', 'Les temps de l’indicatif sur la ligne du temps', 'Die Zeiten des Indikativs auf dem Zeitstrahl'],
  'Orange = core (verb + necessary elements) · grey = expansions you can remove': ['Laranja = núcleo (verbo + elementos necessários) · cinza = expansões que se podem retirar', 'Naranja = núcleo (verbo + elementos necesarios) · gris = expansiones que se pueden quitar', 'Orange = noyau (verbe + éléments nécessaires) · gris = expansions que l’on peut supprimer', 'Orange = Kern (Verb + notwendige Elemente) · grau = Erweiterungen, die man weglassen kann'],
  'Organic comparatives and superlatives': ['Comparativos e superlativos orgânicos', 'Comparativos y superlativos orgánicos', 'Comparatifs et superlatifs organiques', 'Organische Komparative und Superlative'],
  'Personal pronouns': ['Os pronomes pessoais', 'Los pronombres personales', 'Les pronoms personnels', 'Die Personalpronomen'],
  'The minimal core sentence and its expansions': ['A frase mínima nuclear e suas expansões', 'La oración mínima nuclear y sus expansiones', 'La phrase minimale nucléaire et ses expansions', 'Der minimale Kernsatz und seine Erweiterungen'],
  'absolute superlative': ['superlativo absoluto', 'superlativo absoluto', 'superlatif absolu', 'absoluter Superlativ'],
  'comparative': ['comparativo', 'comparativo', 'comparatif', 'Komparativ'],
  'definite': ['definidos', 'determinados', 'définis', 'bestimmt'],
  'indefinite': ['indefinidos', 'indeterminados', 'indéfinis', 'unbestimmt'],
  'partitive': ['partitivos', 'partitivos', 'partitifs', 'Teilungsartikel'],
  'fem. plur.': ['fem. plur.', 'fem. plur.', 'fém. plur.', 'fem. Pl.'],
  'fem. sing.': ['fem. sing.', 'fem. sing.', 'fém. sing.', 'fem. Sg.'],
  'masc. plur.': ['masc. plur.', 'masc. plur.', 'masc. plur.', 'mask. Pl.'],
  'masc. sing.': ['masc. sing.', 'masc. sing.', 'masc. sing.', 'mask. Sg.'],
  'infinitive': ['infinitivo', 'infinitivo', 'infinitif', 'Infinitiv'],
  'past': ['passado', 'pasado', 'passé', 'Vergangenheit'],
  'past participle': ['particípio passado', 'participio', 'participe passé', 'Partizip Perfekt'],
  'person': ['pessoa', 'persona', 'personne', 'Person'],
  'positive': ['positivo', 'positivo', 'positif', 'Positiv'],
  'present': ['presente', 'presente', 'présent', 'Präsens'],
  'present (io)': ['presente (io)', 'presente (io)', 'présent (io)', 'Präsens (io)'],
  'remote past (io / egli)': ['passado remoto (io / egli)', 'pasado remoto (io / egli)', 'passé simple (io / egli)', 'passato remoto (io / egli)'],
  'stressed object': ['complemento tônico', 'complemento tónico', 'complément tonique', 'betontes Objekt'],
  'subject': ['sujeito', 'sujeto', 'sujet', 'Subjekt'],
  'unstressed object': ['complemento átono', 'complemento átono', 'complément atone', 'unbetontes Objekt'],
  // glosses shown after Italian terms
  'indicative': ['indicativo', 'indicativo', 'indicatif', 'Indikativ'],
  'subjunctive': ['subjuntivo', 'subjuntivo', 'subjonctif', 'Konjunktiv'],
  'conditional': ['condicional', 'condicional', 'conditionnel', 'Konditional'],
  'imperative': ['imperativo', 'imperativo', 'impératif', 'Imperativ'],
  'participle': ['particípio', 'participio', 'participe', 'Partizip'],
  'gerund': ['gerúndio', 'gerundio', 'gérondif', 'Gerundium'],
  'imperfect': ['imperfeito', 'imperfecto', 'imparfait', 'Imperfekt'],
  'remote past': ['passado remoto', 'pasado remoto', 'passé simple', 'Passato remoto'],
  'simple future': ['futuro simples', 'futuro simple', 'futur simple', 'einfaches Futur'],
  'present perfect': ['pretérito perfeito composto', 'pretérito perfecto compuesto', 'passé composé', 'Perfekt'],
  'pluperfect': ['mais-que-perfeito', 'pluscuamperfecto', 'plus-que-parfait', 'Plusquamperfekt'],
  'past anterior': ['pretérito anterior', 'pretérito anterior', 'passé antérieur', 'Vorvergangenheit'],
  'future perfect': ['futuro anterior', 'futuro perfecto', 'futur antérieur', 'Futur II'],
};

export const visualLabel = (en: string, lang: string): string | undefined => {
  const i = SUPPORT_INDEX[lang];
  return i === undefined ? undefined : VISUAL_LABELS[en]?.[i];
};

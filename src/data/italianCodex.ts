import { CodexEntry, SupportLanguage } from '../types';

export const ITALIAN_CODEX: CodexEntry[] = [
  // A1 Entries
  [
    'it_a1m1',
    'Formal Address (Dare del Lei)',
    'Forma di Cortesia (Dare del Lei)',
    'Using the third-person feminine singular pronoun "Lei" with capital letter to politely address strangers, elders, and professionals.',
    'Uso della terza persona singolare "Lei" per rivolgersi con rispetto ed educazione a estranei, persone anziane o professionisti.'
  ],
  [
    'it_a1m1',
    'Informal Greeting (Ciao)',
    'Saluto Informale (Ciao)',
    'The universal friendly Italian greeting used for both arrival and departure among peers, friends, and family.',
    'Il saluto amichevole per eccellenza, usato sia all’incontro sia al congedo tra amici, coetanei e familiari.'
  ],
  [
    'it_a1m2',
    'Acca Rule (H Rule in C and G)',
    'Regola dell’Acca con C e G',
    'The silent letter H placed between C/G and E/I to produce a hard velar consonant sound (e.g. chianti, spaghetti).',
    'La lettera H muta posta tra C o G e le vocali E o I per ottenere un suono gutturale duro (es. chianti, spaghetti).'
  ],
  [
    'it_a1m2',
    'Double Consonants (Consonanti Doppie)',
    'Consonanti Doppie (Geminate)',
    'Geminate consonants held for twice the duration of single consonants, distinguishing word meaning (e.g. pala vs palla, casa vs cassa).',
    'Consonanti pronunciate con maggiore durata ed intensità fonetica, fondamentali per distinguere il significato lessicale.'
  ],
  [
    'it_a1m3',
    'Courtesy Formula: Vorrei',
    'Formula di Cortesia: Vorrei',
    'The conditional form of volere meaning "I would like", essential for ordering politely at cafes, restaurants, and shops.',
    'Forma del condizionale presente del verbo volere usata per ordinare con garbo ed eleganza al bar, al ristorante e nei negozi.'
  ],

  // A2 Entries
  [
    'it_a2m1',
    'Passato Prossimo',
    'Passato Prossimo',
    'Compound past tense expressing completed actions with present relevance, formed with avere or essere + past participle.',
    'Tempo composto del passato che esprime azioni concluse collegate al presente, formato con avere o essere + participio passato.'
  ],
  [
    'it_a2m1',
    'Past Participle Agreement',
    'Accordo del Participio Passato',
    'Rule requiring the past participle to agree in gender and number (-o, -a, -i, -e) when the auxiliary is essere.',
    'Regola per cui il participio passato deve concordare in genere e numero col soggetto quando l’ausiliare è essere.'
  ],
  [
    'it_a2m2',
    'Partitive Pronoun: Ne',
    'Partitivo: Ne',
    'Pronominal particle used to replace a part or specified quantity of a noun previously mentioned (e.g. "Ne prendo due").',
    'Particella pronominale usata per indicare una quantità parziale o specificata di un elemento nominato in precedenza.'
  ],
  [
    'it_a2m2',
    'Direct Object Pronouns (lo, la, li, le)',
    'Pronomi Diretti (lo, la, li, le)',
    'Unstressed third-person pronouns that replace direct objects and precede conjugated finite verbs.',
    'Pronomi atoni di terza persona che sostituiscono il complemento oggetto e si posizionano prima del verbo coniugato.'
  ],

  // B1 Entries
  [
    'it_b1m1',
    'Futuro Semplice',
    'Futuro Semplice',
    'Tense used for future actions, promises, plans, and expressing probability or hypotheses in the present (e.g. "Saranno le tre").',
    'Tempo verbale usato per eventi futuri, progetti, promesse ed espressione di ipotesi o stime nel presente.'
  ],
  [
    'it_b1m1',
    'Polite Conditional (Condizionale di Cortesia)',
    'Condizionale di Cortesia',
    'Use of verbs like potere and dovere in the conditional mood to soften requests, orders, or advice (e.g. "Potrebbe aiutarmi?").',
    'Uso dei verbi servili al condizionale per formulare domande o richieste con grazia e rispetto.'
  ],
  [
    'it_b1m2',
    'Present Subjunctive (Congiuntivo Presente)',
    'Congiuntivo Presente',
    'The mood of subjectivity, expressing opinions (penso che), uncertainty (dubito che), hopes (spero che), and emotions.',
    'Il modo verbale della soggettività, impiegato per esprimere opinioni personali, dubbi, speranze, desideri e sentimenti.'
  ],
  [
    'it_b1m2',
    'Combined Pronouns (Pronomi Combinati)',
    'Pronomi Combinati',
    'The fusion of indirect pronouns (mi, ti, gli) with direct pronouns (lo, la, li, le) into pairs such as me lo, te la, glielo.',
    'L’unione del pronome indiretto col pronome diretto in sequenze fluide come me lo, te la, glielo, ce li, ve ne.'
  ]
];

/**
 * Codex titles and definitions in the learner support languages, keyed by the
 * English title (entry[1]). The Italian name (entry[2]) is still shown as the
 * target-language pill. Drafts pending native-speaker review.
 */
export const ITALIAN_CODEX_SUPPORT: Record<string, Record<SupportLanguage, [string, string]>> = {
  'Formal Address (Dare del Lei)': {
    pt: ['Tratamento formal (Dare del Lei)', 'Uso do pronome de terceira pessoa feminino singular "Lei", com inicial maiúscula, para se dirigir com educação a desconhecidos, pessoas mais velhas e profissionais.'],
    es: ['Trato formal (Dare del Lei)', 'Uso del pronombre de tercera persona femenino singular "Lei", con mayúscula, para dirigirse con cortesía a desconocidos, personas mayores y profesionales.'],
    fr: ['Vouvoiement (Dare del Lei)', 'Emploi du pronom de troisième personne féminin singulier "Lei", avec majuscule, pour s’adresser poliment aux inconnus, aux personnes âgées et aux professionnels.'],
    de: ['Höfliche Anrede (Dare del Lei)', 'Verwendung des großgeschriebenen Pronomens "Lei" (3. Person Singular feminin), um Fremde, ältere Menschen und Fachleute höflich anzusprechen.'],
  },
  'Informal Greeting (Ciao)': {
    pt: ['Cumprimento informal (Ciao)', 'O cumprimento amigável universal do italiano, usado tanto na chegada quanto na despedida entre colegas, amigos e família.'],
    es: ['Saludo informal (Ciao)', 'El saludo amistoso universal del italiano, que se usa al llegar y al despedirse entre compañeros, amigos y familia.'],
    fr: ['Salutation informelle (Ciao)', 'La salutation amicale universelle en italien, utilisée pour dire bonjour comme au revoir entre camarades, amis et en famille.'],
    de: ['Informelle Begrüßung (Ciao)', 'Die universelle freundliche Begrüßung im Italienischen, unter Gleichaltrigen, Freunden und in der Familie zum Kommen wie zum Gehen.'],
  },
  'Acca Rule (H Rule in C and G)': {
    pt: ['Regra do acca (H com C e G)', 'A letra muda H colocada entre C/G e E/I para produzir um som consonantal velar duro (ex.: chianti, spaghetti).'],
    es: ['Regla del acca (H con C y G)', 'La letra muda H colocada entre C/G y E/I para producir un sonido consonántico velar fuerte (p. ej., chianti, spaghetti).'],
    fr: ['Règle du acca (H avec C et G)', 'La lettre muette H placée entre C/G et E/I pour obtenir un son consonantique vélaire dur (ex. : chianti, spaghetti).'],
    de: ['Acca-Regel (H bei C und G)', 'Das stumme H zwischen C/G und E/I erzeugt einen harten velaren Konsonanten (z. B. chianti, spaghetti).'],
  },
  'Double Consonants (Consonanti Doppie)': {
    pt: ['Consoantes duplas (Consonanti Doppie)', 'Consoantes geminadas mantidas pelo dobro do tempo das simples, que distinguem o significado das palavras (ex.: pala vs palla, casa vs cassa).'],
    es: ['Consonantes dobles (Consonanti Doppie)', 'Consonantes geminadas que se mantienen el doble de tiempo que las simples y distinguen el significado de las palabras (p. ej., pala vs palla, casa vs cassa).'],
    fr: ['Consonnes doubles (Consonanti Doppie)', 'Consonnes géminées tenues deux fois plus longtemps que les simples, qui distinguent le sens des mots (ex. : pala vs palla, casa vs cassa).'],
    de: ['Doppelkonsonanten (Consonanti Doppie)', 'Geminierte Konsonanten, doppelt so lang gehalten wie einfache, die Wortbedeutungen unterscheiden (z. B. pala vs palla, casa vs cassa).'],
  },
  'Courtesy Formula: Vorrei': {
    pt: ['Fórmula de cortesia: Vorrei', 'A forma condicional de volere, que significa "eu gostaria", essencial para pedir com educação em cafés, restaurantes e lojas.'],
    es: ['Fórmula de cortesía: Vorrei', 'La forma condicional de volere, que significa "quisiera", esencial para pedir con cortesía en cafés, restaurantes y tiendas.'],
    fr: ['Formule de politesse : Vorrei', 'La forme au conditionnel de volere, qui signifie "je voudrais", indispensable pour commander poliment au café, au restaurant et dans les magasins.'],
    de: ['Höflichkeitsformel: Vorrei', 'Die Konditionalform von volere ("ich hätte gern"), unverzichtbar, um in Cafés, Restaurants und Geschäften höflich zu bestellen.'],
  },
  'Passato Prossimo': {
    pt: ['Passato Prossimo', 'Tempo passado composto que expressa ações concluídas com relevância no presente, formado com avere ou essere + particípio passado.'],
    es: ['Passato Prossimo', 'Tiempo pasado compuesto que expresa acciones terminadas con relevancia en el presente, formado con avere o essere + participio pasado.'],
    fr: ['Passato Prossimo', 'Temps passé composé exprimant des actions terminées liées au présent, formé avec avere ou essere + participe passé.'],
    de: ['Passato Prossimo', 'Zusammengesetzte Vergangenheit für abgeschlossene Handlungen mit Gegenwartsbezug, gebildet mit avere oder essere + Partizip Perfekt.'],
  },
  'Past Participle Agreement': {
    pt: ['Concordância do particípio passado', 'Regra que exige que o particípio passado concorde em gênero e número (-o, -a, -i, -e) quando o auxiliar é essere.'],
    es: ['Concordancia del participio pasado', 'Regla que exige que el participio pasado concuerde en género y número (-o, -a, -i, -e) cuando el auxiliar es essere.'],
    fr: ['Accord du participe passé', 'Règle selon laquelle le participe passé s’accorde en genre et en nombre (-o, -a, -i, -e) quand l’auxiliaire est essere.'],
    de: ['Angleichung des Partizips', 'Regel, nach der sich das Partizip Perfekt in Geschlecht und Zahl anpasst (-o, -a, -i, -e), wenn das Hilfsverb essere ist.'],
  },
  'Partitive Pronoun: Ne': {
    pt: ['Pronome partitivo: Ne', 'Partícula pronominal que substitui uma parte ou uma quantidade de um substantivo já mencionado (ex.: "Ne prendo due").'],
    es: ['Pronombre partitivo: Ne', 'Partícula pronominal que sustituye una parte o una cantidad de un sustantivo ya mencionado (p. ej., "Ne prendo due").'],
    fr: ['Pronom partitif : Ne', 'Particule pronominale qui remplace une partie ou une quantité d’un nom déjà mentionné (ex. : "Ne prendo due").'],
    de: ['Partitives Pronomen: Ne', 'Pronominalpartikel, die einen Teil oder eine Menge eines zuvor genannten Substantivs ersetzt (z. B. "Ne prendo due").'],
  },
  'Direct Object Pronouns (lo, la, li, le)': {
    pt: ['Pronomes objeto direto (lo, la, li, le)', 'Pronomes átonos de terceira pessoa que substituem objetos diretos e vêm antes do verbo conjugado.'],
    es: ['Pronombres de objeto directo (lo, la, li, le)', 'Pronombres átonos de tercera persona que sustituyen a objetos directos y van delante del verbo conjugado.'],
    fr: ['Pronoms COD (lo, la, li, le)', 'Pronoms atones de troisième personne qui remplacent les COD et se placent devant le verbe conjugué.'],
    de: ['Direkte Objektpronomen (lo, la, li, le)', 'Unbetonte Pronomen der 3. Person, die direkte Objekte ersetzen und vor dem konjugierten Verb stehen.'],
  },
  'Futuro Semplice': {
    pt: ['Futuro Semplice', 'Tempo usado para ações futuras, promessas e planos, e para expressar probabilidade ou hipóteses no presente (ex.: "Saranno le tre").'],
    es: ['Futuro Semplice', 'Tiempo que se usa para acciones futuras, promesas y planes, y para expresar probabilidad o hipótesis en el presente (p. ej., "Saranno le tre").'],
    fr: ['Futuro Semplice', 'Temps employé pour les actions futures, les promesses et les projets, ainsi que pour exprimer une probabilité ou une hypothèse au présent (ex. : "Saranno le tre").'],
    de: ['Futuro Semplice', 'Zeitform für zukünftige Handlungen, Versprechen und Pläne sowie für Vermutungen über die Gegenwart (z. B. "Saranno le tre").'],
  },
  'Polite Conditional (Condizionale di Cortesia)': {
    pt: ['Condicional de cortesia (Condizionale di Cortesia)', 'Uso de verbos como potere e dovere no condicional para suavizar pedidos, ordens ou conselhos (ex.: "Potrebbe aiutarmi?").'],
    es: ['Condicional de cortesía (Condizionale di Cortesia)', 'Uso de verbos como potere y dovere en condicional para suavizar peticiones, órdenes o consejos (p. ej., "Potrebbe aiutarmi?").'],
    fr: ['Conditionnel de politesse (Condizionale di Cortesia)', 'Emploi de verbes comme potere et dovere au conditionnel pour adoucir une demande, un ordre ou un conseil (ex. : "Potrebbe aiutarmi?").'],
    de: ['Höflicher Konditional (Condizionale di Cortesia)', 'Verwendung von Verben wie potere und dovere im Konditional, um Bitten, Aufforderungen oder Ratschläge abzuschwächen (z. B. "Potrebbe aiutarmi?").'],
  },
  'Present Subjunctive (Congiuntivo Presente)': {
    pt: ['Subjuntivo presente (Congiuntivo Presente)', 'O modo da subjetividade, que expressa opiniões (penso che), incerteza (dubito che), esperanças (spero che) e emoções.'],
    es: ['Subjuntivo presente (Congiuntivo Presente)', 'El modo de la subjetividad, que expresa opiniones (penso che), incertidumbre (dubito che), esperanzas (spero che) y emociones.'],
    fr: ['Subjonctif présent (Congiuntivo Presente)', 'Le mode de la subjectivité, qui exprime les opinions (penso che), l’incertitude (dubito che), les espoirs (spero che) et les émotions.'],
    de: ['Konjunktiv Präsens (Congiuntivo Presente)', 'Der Modus der Subjektivität für Meinungen (penso che), Unsicherheit (dubito che), Hoffnungen (spero che) und Gefühle.'],
  },
  'Combined Pronouns (Pronomi Combinati)': {
    pt: ['Pronomes combinados (Pronomi Combinati)', 'A fusão dos pronomes indiretos (mi, ti, gli) com os diretos (lo, la, li, le) em pares como me lo, te la, glielo.'],
    es: ['Pronombres combinados (Pronomi Combinati)', 'La fusión de los pronombres indirectos (mi, ti, gli) con los directos (lo, la, li, le) en pares como me lo, te la, glielo.'],
    fr: ['Pronoms combinés (Pronomi Combinati)', 'La fusion des pronoms indirects (mi, ti, gli) avec les pronoms directs (lo, la, li, le) en paires comme me lo, te la, glielo.'],
    de: ['Kombinierte Pronomen (Pronomi Combinati)', 'Die Verbindung indirekter Pronomen (mi, ti, gli) mit direkten (lo, la, li, le) zu Paaren wie me lo, te la, glielo.'],
  },
};

import { buildGrammarMissions, gq, w, type Pair } from './italianGrammarCommon';

const syntaxTaunt = (demon: Pair): Pair => [
  `<p>🧱 I am ${demon[0]}! I break sentences apart and hide subjects. Can you rebuild every sentence piece by piece?</p>`,
  `<p>🧱 Sono ${demon[1]}! Spezzo le frasi e nascondo i soggetti. Sai ricostruire ogni frase pezzo per pezzo?</p>`
];
const tablesTaunt = (demon: Pair): Pair => [
  `<p>📜 I am ${demon[0]}! I tore pages out of the verb tables. Can you remember every form?</p>`,
  `<p>📜 Sono ${demon[1]}! Ho strappato le pagine delle tavole dei verbi. Ti ricordi tutte le forme?</p>`
];

/** SINTASSI – Come funziona la frase? · pages 118–145 */
export const SYNTAX = buildGrammarMissions([
  {
    id: 'itg5-frase-minima', sec: 'G7.1', pages: '118–121', hue: 0,
    title: ['The Sentence and the Minimal Core Sentence', 'La frase e la frase minima nucleare'],
    topic: ['Simple and complex sentences; the verb and the elements it requires', 'Frase semplice e complessa; il verbo e gli elementi che richiede'],
    demon: ['The Sentence Shredder', 'il Trita-Frasi'],
    tech: ['Sentence Form · First Technique: Solid Core', 'Stile della Frase · Prima Tecnica: Nucleo Solido'],
    lessons: [
      { vis: 'itg5-core-sentence', text: [
        '<p>🧱 A <b>sentence</b> (frase) is a group of words with a complete meaning, organised around a <b>verb</b>. A <b>simple sentence</b> has <b>one</b> verb (<i>Il cane abbaia.</i>); a <b>complex sentence</b> (periodo) has <b>two or more</b> (<i>Il cane abbaia quando arriva il postino.</i>).</p>',
        '<p>🧱 La <b>frase</b> è un insieme di parole con un significato compiuto, organizzato intorno a un <b>verbo</b>. La <b>frase semplice</b> ha <b>un solo</b> verbo (<i>Il cane abbaia.</i>); la <b>frase complessa</b> (o periodo) ne ha <b>due o più</b> (<i>Il cane abbaia quando arriva il postino.</i>).</p>'
      ] },
      [
        '<p>⚙️ The verb decides how many elements are <b>necessary</b> (its arguments): <i>piove</i> needs none; <i>Luca dorme</i> needs a subject; <i>Luca mangia una mela</i> needs a subject and an object; <i>Luca regala un libro a Sara</i> needs three. The verb with its necessary elements forms the <b>minimal core sentence</b> (frase minima nucleare).</p>',
        '<p>⚙️ È il verbo a decidere quanti elementi sono <b>necessari</b> (i suoi argomenti): <i>piove</i> non ne vuole nessuno; <i>Luca dorme</i> vuole il soggetto; <i>Luca mangia una mela</i> vuole soggetto e oggetto; <i>Luca regala un libro a Sara</i> ne vuole tre. Il verbo con gli elementi necessari forma la <b>frase minima nucleare</b>.</p>'
      ],
      [
        '<p>🔎 Test: remove an element and see if the sentence still makes sense. <i>Luca regala un libro</i> — to whom? Something is missing, so <i>a Sara</i> is necessary. But in <i>Luca mangia una mela in cucina</i>, <i>in cucina</i> can be removed: it is an <b>expansion</b>, not part of the core.</p>',
        '<p>🔎 Prova: togli un elemento e controlla se la frase ha ancora senso. <i>Luca regala un libro</i> — a chi? Manca qualcosa, quindi <i>a Sara</i> è necessario. In <i>Luca mangia una mela in cucina</i>, invece, <i>in cucina</i> si può togliere: è un’<b>espansione</b>, non fa parte del nucleo.</p>'
      ]
    ],
    quiz: [
      gq('Which is the minimal core sentence of “Ieri Marco ha scritto una lettera alla nonna con la penna nuova”?', 'Qual è la frase minima nucleare di «Ieri Marco ha scritto una lettera alla nonna con la penna nuova»?', [w('Marco ha scritto una lettera alla nonna'), w('Marco ha scritto'), w('Ieri Marco ha scritto con la penna'), w('una lettera alla nonna')], ['Scrivere requires who writes, what and to whom.', 'Scrivere richiede chi scrive, che cosa e a chi.']),
      gq('Which is a complex sentence?', 'Quale è una frase complessa?', [w('Leggo mentre aspetto il treno.'), w('Leggo un libro.'), w('Il treno arriva.'), w('Oggi piove forte.')], ['It has two verbs: leggo, aspetto.', 'Ha due verbi: leggo, aspetto.']),
      gq('How many necessary elements does “piove” need?', 'Quanti elementi necessari richiede «piove»?', [w('nessuno'), w('uno'), w('due'), w('tre')], ['Weather verbs are complete on their own.', 'I verbi atmosferici bastano da soli.']),
      gq('In “Giulia dorme sul divano”, which part is an expansion?', 'In «Giulia dorme sul divano», quale parte è un’espansione?', [w('sul divano'), w('Giulia'), w('dorme'), w('Giulia dorme')], ['Giulia dorme is already complete.', 'Giulia dorme è già completa.'])
    ],
    codex: [['Minimal core sentence', 'Frase minima nucleare', 'The verb with only the elements it requires: Luca regala un libro a Sara.', 'Il verbo con i soli elementi che richiede: Luca regala un libro a Sara.']]
  },
  {
    id: 'itg5-soggetto-predicato', sec: 'G7.2', pages: '122–125', hue: 15,
    title: ['Subject and Predicate', 'Il soggetto e il predicato verbale e nominale'],
    topic: ['Expressed and implied subject; verbal and nominal predicate', 'Soggetto espresso e sottinteso; predicato verbale e nominale'],
    demon: ['The Hidden Subject', 'il Soggetto Nascosto'],
    tech: ['Sentence Form · Second Technique: Who Does It', 'Stile della Frase · Seconda Tecnica: Chi Agisce'],
    lessons: [
      [
        '<p>🎯 The <b>subject</b> is who or what does the action or is in the state the verb describes. Ask <i>chi? che cosa?</i> before the verb. It can come after the verb (<i>Arriva <b>il treno</b></i>) or be <b>implied</b> (sottinteso): <i>Andiamo in palestra</i> → (noi).</p>',
        '<p>🎯 Il <b>soggetto</b> indica chi compie l’azione o si trova nella condizione espressa dal verbo. Si trova chiedendo <i>chi? che cosa?</i> prima del verbo. Può stare dopo il verbo (<i>Arriva <b>il treno</b></i>) o essere <b>sottinteso</b>: <i>Andiamo in palestra</i> → (noi).</p>'
      ],
      [
        '<p>🔧 The <b>predicate</b> says what the subject does or is. <b>Verbal predicate</b>: a verb with its own meaning (<i>Luca <b>corre</b></i>, <i>Sono <b>a scuola</b></i> → essere = trovarsi). <b>Nominal predicate</b>: <b>essere</b> (copula) + a noun or adjective describing the subject (<i>Luca <b>è simpatico</b>. Roma <b>è una città</b>.</i>).</p>',
        '<p>🔧 Il <b>predicato</b> dice che cosa fa o com’è il soggetto. <b>Predicato verbale</b>: un verbo con significato proprio (<i>Luca <b>corre</b></i>, <i>Sono a scuola</i> → essere = trovarsi). <b>Predicato nominale</b>: <b>essere</b> (copula) + un nome o un aggettivo che descrive il soggetto (<i>Luca <b>è simpatico</b>. Roma <b>è una città</b>.</i>).</p>'
      ]
    ],
    quiz: [
      gq('Which sentence has an implied subject?', 'In quale frase il soggetto è sottinteso?', [w('Andiamo in palestra tre volte a settimana.'), w('Marco va in palestra.'), w('Le ragazze giocano.'), w('Arriva il treno.')], ['“Andiamo” implies noi.', '«Andiamo» sottintende noi.']),
      gq('“Il cielo è sereno.” Which predicate?', '«Il cielo è sereno.» Quale predicato?', [w('nominale'), w('verbale'), w('passivo'), w('riflessivo')], ['È (copula) + adjective sereno.', 'È (copula) + aggettivo sereno.']),
      gq('“Il libro è sul tavolo.” Which predicate?', '«Il libro è sul tavolo.» Quale predicato?', [w('verbale'), w('nominale'), w('impersonale'), w('non c’è predicato')], ['Here essere means “to be located”.', 'Qui essere significa «trovarsi».']),
      gq('In “Ogni mattina passa il postino”, what is the subject?', 'In «Ogni mattina passa il postino», qual è il soggetto?', [w('il postino'), w('ogni mattina'), w('passa'), w('è sottinteso')], ['Who passes? The postman (after the verb).', 'Chi passa? Il postino (dopo il verbo).'])
    ],
    codex: [['Nominal predicate', 'Predicato nominale', 'The verb essere (copula) + a noun or adjective describing the subject: Luca è alto.', 'Il verbo essere (copula) + un nome o un aggettivo che descrive il soggetto: Luca è alto.']]
  },
  {
    id: 'itg5-oggetto-termine', sec: 'G7.3', pages: '126–128', hue: 30,
    title: ['Direct Object, Indirect Complements and the Indirect Object', 'Complemento oggetto, complementi indiretti e complemento di termine'],
    topic: ['Chi? Che cosa? and A chi? A che cosa?', 'Chi? Che cosa? e A chi? A che cosa?'],
    demon: ['The Object Snatcher', 'l’Acchiappa-Oggetti'],
    tech: ['Sentence Form · Third Technique: Target Lock', 'Stile della Frase · Terza Tecnica: Bersaglio Preciso'],
    lessons: [
      [
        '<p>🎯 The <b>direct object</b> (complemento oggetto) receives the action of a transitive verb <b>directly, without a preposition</b>. It answers <i>chi? che cosa?</i> after the verb: <i>Anna legge <b>un fumetto</b>.</i></p>',
        '<p>🎯 Il <b>complemento oggetto</b> riceve direttamente l’azione di un verbo transitivo, <b>senza preposizione</b>. Risponde a <i>chi? che cosa?</i> dopo il verbo: <i>Anna legge <b>un fumetto</b>.</i></p>'
      ],
      [
        '<p>🔗 <b>Indirect complements</b> are introduced by a <b>preposition</b>. The <b>complemento di termine</b> indicates to whom or to what the action is directed: <i>a chi? a che cosa?</i> — <i>Ho scritto una lettera <b>al nonno</b>.</i> Pronouns like <i>gli, le, mi, ti</i> can also be complementi di termine: <i><b>Le</b> ho scritto</i> (= a lei).</p>',
        '<p>🔗 I <b>complementi indiretti</b> sono introdotti da una <b>preposizione</b>. Il <b>complemento di termine</b> indica a chi o a che cosa è diretta l’azione: <i>a chi? a che cosa?</i> — <i>Ho scritto una lettera <b>al nonno</b>.</i> Anche pronomi come <i>gli, le, mi, ti</i> possono essere complementi di termine: <i><b>Le</b> ho scritto</i> (= a lei).</p>'
      ]
    ],
    quiz: [
      gq('“Il nonno racconta una storia ai nipoti.” What is “una storia”?', '«Il nonno racconta una storia ai nipoti.» Che cos’è «una storia»?', [w('complemento oggetto'), w('complemento di termine'), w('soggetto'), w('complemento di specificazione')], ['Racconta che cosa? Una storia (no preposition).', 'Racconta che cosa? Una storia (senza preposizione).']),
      gq('Same sentence: what is “ai nipoti”?', 'Stessa frase: che cos’è «ai nipoti»?', [w('complemento di termine'), w('complemento oggetto'), w('complemento di luogo'), w('soggetto')], ['Ask “a chi?” (to whom?): to the grandchildren.', 'Racconta a chi? Ai nipoti.']),
      gq('“Gli ho prestato la bici.” What is “gli”?', '«Gli ho prestato la bici.» Che cos’è «gli»?', [w('complemento di termine'), w('complemento oggetto'), w('soggetto'), w('articolo')], ['Gli means “a lui” (to him).', 'Gli = a lui.']),
      gq('Which complement is never introduced by a preposition?', 'Quale complemento non è mai introdotto da una preposizione?', [w('il complemento oggetto'), w('il complemento di termine'), w('il complemento di luogo'), w('il complemento di mezzo')], ['That is why it is called “direct”.', 'Per questo si chiama «diretto».'])
    ],
    codex: [['Direct object', 'Complemento oggetto', 'The person or thing receiving the action directly, without a preposition: leggo un libro.', 'La persona o la cosa che riceve direttamente l’azione, senza preposizione: leggo un libro.']]
  },
  {
    id: 'itg5-luogo-tempo', sec: 'G7.4', pages: '129–130', hue: 45,
    title: ['Complements of Place and Time', 'I complementi di luogo e di tempo'],
    topic: ['Stato in luogo, moto a, da, per luogo; tempo determinato e continuato', 'Stato in luogo, moto a, da, per luogo; tempo determinato e continuato'],
    demon: ['The Lost Traveller', 'il Viaggiatore Smarrito'],
    tech: ['Sentence Form · Fourth Technique: Where and When', 'Stile della Frase · Quarta Tecnica: Dove e Quando'],
    lessons: [
      [
        '<p>📍 <b>Place complements</b>:</p><ul><li><b>stato in luogo</b> — where? <i>Vivo <b>a Roma</b>.</i></li><li><b>moto a luogo</b> — where to? <i>Vado <b>al mare</b>.</i></li><li><b>moto da luogo</b> — where from? <i>Torno <b>da scuola</b>.</i></li><li><b>moto per luogo</b> — through where? <i>Passo <b>per il parco</b>.</i></li></ul>',
        '<p>📍 <b>Complementi di luogo</b>:</p><ul><li><b>stato in luogo</b> — dove? <i>Vivo <b>a Roma</b>.</i></li><li><b>moto a luogo</b> — verso dove? <i>Vado <b>al mare</b>.</i></li><li><b>moto da luogo</b> — da dove? <i>Torno <b>da scuola</b>.</i></li><li><b>moto per luogo</b> — attraverso dove? <i>Passo <b>per il parco</b>.</i></li></ul>'
      ],
      [
        '<p>⏰ <b>Time complements</b>: <b>tempo determinato</b> — when? <i>Parto <b>domenica</b>. <b>Alle otto</b> faccio colazione.</i> <b>Tempo continuato</b> — for how long? <i>Ho dormito <b>per dieci ore</b>. Ho studiato <b>tutto il pomeriggio</b>.</i></p>',
        '<p>⏰ <b>Complementi di tempo</b>: <b>tempo determinato</b> — quando? <i>Parto <b>domenica</b>. <b>Alle otto</b> faccio colazione.</i> <b>Tempo continuato</b> — per quanto tempo? <i>Ho dormito <b>per dieci ore</b>. Ho studiato <b>tutto il pomeriggio</b>.</i></p>'
      ]
    ],
    quiz: [
      gq('“Usciamo dal cinema.” What is “dal cinema”?', '«Usciamo dal cinema.» Che cos’è «dal cinema»?', [w('moto da luogo'), w('moto a luogo'), w('stato in luogo'), w('moto per luogo')], ['Usciamo da dove? From the cinema.', 'Usciamo da dove? Dal cinema.']),
      gq('“Il gatto dorme sotto il letto.” What is “sotto il letto”?', '«Il gatto dorme sotto il letto.» Che cos’è «sotto il letto»?', [w('stato in luogo'), w('moto a luogo'), w('moto da luogo'), w('tempo determinato')], ['Dove dorme? No movement.', 'Dove dorme? Nessun movimento.']),
      gq('“Abbiamo giocato per tre ore.” What is “per tre ore”?', '«Abbiamo giocato per tre ore.» Che cos’è «per tre ore»?', [w('tempo continuato'), w('tempo determinato'), w('moto per luogo'), w('complemento di mezzo')], ['It answers “per quanto tempo?” (for how long?).', 'Per quanto tempo?']),
      gq('“Siamo passati per Firenze.” What is “per Firenze”?', '«Siamo passati per Firenze.» Che cos’è «per Firenze»?', [w('moto per luogo'), w('moto a luogo'), w('stato in luogo'), w('complemento di fine')], ['It answers “attraverso dove?” (through where?).', 'Attraverso dove?'])
    ],
    codex: [['Complements of place', 'Complementi di luogo', 'Stato in luogo (dove?), moto a luogo (verso dove?), moto da luogo (da dove?), moto per luogo (attraverso dove?).', 'Stato in luogo (dove?), moto a luogo (verso dove?), moto da luogo (da dove?), moto per luogo (attraverso dove?).']]
  },
  {
    id: 'itg5-specificazione-modo-mezzo', sec: 'G7.5', pages: '131–133', hue: 60,
    title: ['Specification, Manner, Means and Other Complements', 'Complementi di specificazione, modo, mezzo e altri'],
    topic: ['Di chi? Come? Con che cosa? Company, cause, purpose, agent, topic', 'Di chi? Come? Per mezzo di che cosa? Compagnia, causa, fine, agente, argomento'],
    demon: ['The Question Scrambler', 'lo Sconvolgi-Domande'],
    tech: ['Sentence Form · Fifth Technique: Right Question', 'Stile della Frase · Quinta Tecnica: Domanda Giusta'],
    lessons: [
      [
        '<p>❓ Each complement answers a <b>question</b>:</p><ul><li><b>specificazione</b> — of whom? of what? <i>il libro <b>di Marta</b></i></li><li><b>modo</b> — how? <i>parla <b>con gentilezza</b></i></li><li><b>mezzo</b> — by what means? <i>viaggia <b>in treno</b>, scrive <b>con la matita</b></i></li></ul>',
        '<p>❓ Ogni complemento risponde a una <b>domanda</b>:</p><ul><li><b>specificazione</b> — di chi? di che cosa? <i>il libro <b>di Marta</b></i></li><li><b>modo</b> — come? in che modo? <i>parla <b>con gentilezza</b></i></li><li><b>mezzo</b> — per mezzo di chi? di che cosa? <i>viaggia <b>in treno</b>, scrive <b>con la matita</b></i></li></ul>'
      ],
      [
        '<p>➕ <b>Other indirect complements</b>: <b>compagnia</b> (with whom? <i>con gli amici</i>), <b>causa</b> (why? <i>tremare <b>per il freddo</b></i>), <b>fine</b> (what for? <i>studiare <b>per l’esame</b></i>), <b>agente</b> in passive sentences (by whom? <i>lodato <b>dalla maestra</b></i>), <b>argomento</b> (about what? <i>parlare <b>di sport</b></i>). The same preposition can introduce different complements: always ask the question!</p>',
        '<p>➕ <b>Altri complementi indiretti</b>: <b>compagnia</b> (con chi? <i>con gli amici</i>), <b>causa</b> (perché? <i>tremare <b>per il freddo</b></i>), <b>fine</b> (per quale scopo? <i>studiare <b>per l’esame</b></i>), <b>agente</b> nelle frasi passive (da chi? <i>lodato <b>dalla maestra</b></i>), <b>argomento</b> (di che cosa? <i>parlare <b>di sport</b></i>). La stessa preposizione può introdurre complementi diversi: fai sempre la domanda!</p>'
      ]
    ],
    quiz: [
      gq('“Taglio il pane con il coltello.” What is “con il coltello”?', '«Taglio il pane con il coltello.» Che cos’è «con il coltello»?', [w('complemento di mezzo'), w('complemento di compagnia'), w('complemento di modo'), w('complemento oggetto')], ['By means of what? The knife.', 'Per mezzo di che cosa? Il coltello.']),
      gq('“Vado al cinema con Sara.” What is “con Sara”?', '«Vado al cinema con Sara.» Che cos’è «con Sara»?', [w('complemento di compagnia'), w('complemento di mezzo'), w('complemento di termine'), w('complemento di modo')], ['With whom?', 'Con chi?']),
      gq('“La bici di mio fratello è rossa.” What is “di mio fratello”?', '«La bici di mio fratello è rossa.» Che cos’è «di mio fratello»?', [w('complemento di specificazione'), w('complemento di argomento'), w('complemento di moto da luogo'), w('complemento di causa')], ['It answers “di chi?” (whose bike?).', 'Di chi è la bici?']),
      gq('“Il ladro fu arrestato dalla polizia.” What is “dalla polizia”?', '«Il ladro fu arrestato dalla polizia.» Che cos’è «dalla polizia»?', [w('complemento d’agente'), w('moto da luogo'), w('complemento di causa'), w('soggetto')], ['In a passive sentence: by whom?', 'In una frase passiva: da chi?'])
    ],
    codex: [['Complement of specification', 'Complemento di specificazione', 'Specifies a noun, answering “di chi? di che cosa?”: il quaderno di Luca.', 'Specifica un nome rispondendo a «di chi? di che cosa?»: il quaderno di Luca.']]
  },
  {
    id: 'itg5-attributo-apposizione', sec: 'G7.6', pages: '134–141', hue: 75,
    title: ['Attribute, Apposition and the Expanding Sentence', 'Attributo, apposizione e la frase che si allunga'],
    topic: ['Strategies for logical analysis; expanding the core sentence into a scene', 'Strategie per l’analisi logica; arricchire la frase minima fino a una scena'],
    demon: ['The Sentence Stretcher', 'lo Stira-Frasi'],
    tech: ['Sentence Form · Sixth Technique: Growing Scene', 'Stile della Frase · Sesta Tecnica: Scena che Cresce'],
    lessons: [
      [
        '<p>🎨 An <b>attribute</b> is an adjective that accompanies any noun in the sentence: <i>Il <b>piccolo</b> gatto beve latte <b>fresco</b>.</i> An <b>apposition</b> is a noun (usually common) that specifies another noun: <i>mio <b>fratello</b> Luca, il <b>dottor</b> Rossi, Roma, la <b>capitale</b>.</i></p>',
        '<p>🎨 L’<b>attributo</b> è un aggettivo che accompagna un nome qualsiasi della frase: <i>Il <b>piccolo</b> gatto beve latte <b>fresco</b>.</i> L’<b>apposizione</b> è un nome (di solito comune) che precisa un altro nome: <i>mio <b>fratello</b> Luca, il <b>dottor</b> Rossi, Roma, la <b>capitale</b>.</i></p>'
      ],
      [
        '<p>🌱 The <b>core sentence grows</b> with expansions: <i>Il gatto dorme.</i> → <i>Il gatto <b>nero</b> dorme <b>sul divano</b>.</i> → <i><b>Ogni pomeriggio</b> il gatto nero <b>di Marta</b> dorme <b>tranquillo</b> sul divano <b>del salotto</b>.</i> From a sentence to a whole scene!</p>',
        '<p>🌱 La <b>frase minima si allunga</b> con le espansioni: <i>Il gatto dorme.</i> → <i>Il gatto <b>nero</b> dorme <b>sul divano</b>.</i> → <i><b>Ogni pomeriggio</b> il gatto nero <b>di Marta</b> dorme <b>tranquillo</b> sul divano <b>del salotto</b>.</i> Da una frase a un’intera scena!</p>'
      ],
      [
        '<p>🧭 <b>Strategy for logical analysis</b> (analisi logica): 1) find the <b>verb</b> and decide if the predicate is verbal or nominal; 2) find the <b>subject</b> (ask chi? che cosa?); 3) find the <b>direct object</b>; 4) for each group with a preposition, ask the <b>question</b> to name the complement; 5) mark attributes and appositions.</p>',
        '<p>🧭 <b>Strategia per l’analisi logica</b>: 1) trova il <b>verbo</b> e stabilisci se il predicato è verbale o nominale; 2) trova il <b>soggetto</b> (chi? che cosa?); 3) trova il <b>complemento oggetto</b>; 4) per ogni gruppo con una preposizione fai la <b>domanda</b> e dai il nome al complemento; 5) segna attributi e apposizioni.</p>'
      ]
    ],
    quiz: [
      gq('“Il poeta Dante nacque a Firenze.” What is “poeta”?', '«Il poeta Dante nacque a Firenze.» Che cos’è «poeta»?', [w('apposizione'), w('attributo'), w('soggetto'), w('predicato nominale')], ['It is a noun specifying Dante.', 'È un nome che precisa Dante.']),
      gq('“Bevo un succo freddo.” What is “freddo”?', '«Bevo un succo freddo.» Che cos’è «freddo»?', [w('attributo'), w('apposizione'), w('complemento oggetto'), w('predicato nominale')], ['An adjective accompanying the noun “succo”.', 'Un aggettivo che accompagna il nome «succo».']),
      gq('In logical analysis, what do you look for first?', 'Nell’analisi logica, che cosa cerchi per primo?', [w('il predicato (il verbo)'), w('gli attributi'), w('le apposizioni'), w('le congiunzioni')], ['The verb organises the whole sentence.', 'Il verbo organizza tutta la frase.']),
      gq('Which sentence is the most expanded version of “Il bambino gioca”?', 'Quale frase è la versione più arricchita di «Il bambino gioca»?', [w('Il bambino biondo gioca con la palla nel cortile della scuola.'), w('Il bambino gioca.'), w('Il bambino gioca a palla.'), w('Gioca.')], ['It adds attribute, means and place.', 'Aggiunge attributo, mezzo e luogo.'])
    ],
    codex: [['Apposition', 'Apposizione', 'A noun that specifies another noun: il fiume Po, mio cugino Paolo.', 'Un nome che precisa un altro nome: il fiume Po, mio cugino Paolo.']]
  },
  {
    id: 'itg5-sintassi-verifica', sec: 'G7.7', pages: '142–145', hue: 90,
    title: ['Check-Up: The Sentence', 'Verifico: gli elementi della frase'],
    topic: ['Map, “Se provo è facile”, Invalsi-style questions and sentence elements in a text', 'Mappa, «Se provo è facile», verso l’Invalsi e gli elementi della frase nel testo'],
    demon: ['The Guardian of Sentences', 'il Guardiano delle Frasi'],
    tech: ['Sentence Form · Mastery Seal: Sentence Architect', 'Stile della Frase · Sigillo di Maestria: Architetto delle Frasi'],
    lessons: [
      [
        '<p>🗺️ <b>Summary</b>: sentence = verb + necessary elements (core) + expansions. Subject (chi? che cosa?), verbal or nominal predicate, direct object (no preposition), indirect complements (preposition + question): termine, luogo, tempo, specificazione, modo, mezzo, compagnia, causa, fine, agente, argomento; attribute and apposition.</p>',
        '<p>🗺️ <b>Riepilogo</b>: frase = verbo + elementi necessari (nucleo) + espansioni. Soggetto (chi? che cosa?), predicato verbale o nominale, complemento oggetto (senza preposizione), complementi indiretti (preposizione + domanda): termine, luogo, tempo, specificazione, modo, mezzo, compagnia, causa, fine, agente, argomento; attributo e apposizione.</p>'
      ]
    ],
    quiz: [
      gq('“Domenica la mia amica Sofia è partita per Napoli con i genitori.” What is “per Napoli”?', '«Domenica la mia amica Sofia è partita per Napoli con i genitori.» Che cos’è «per Napoli»?', [w('moto a luogo'), w('moto per luogo'), w('stato in luogo'), w('complemento di fine')], ['Ask “verso dove?” (where to?): Naples.', 'È partita verso dove? Napoli.']),
      gq('Same sentence: what is “amica”?', 'Stessa frase: che cos’è «amica»?', [w('apposizione'), w('soggetto'), w('attributo'), w('complemento oggetto')], ['The subject is “Sofia”; the common noun “amica” specifies who she is.', 'Il soggetto è «Sofia»; il nome comune «amica» precisa chi è.']),
      gq('Same sentence: what is “domenica”?', 'Stessa frase: che cos’è «domenica»?', [w('complemento di tempo determinato'), w('complemento di tempo continuato'), w('soggetto'), w('apposizione')], ['It answers “quando?” (when did she leave?).', 'Quando è partita?']),
      gq('Same sentence: what is “con i genitori”?', 'Stessa frase: che cos’è «con i genitori»?', [w('complemento di compagnia'), w('complemento di mezzo'), w('complemento di modo'), w('complemento di termine')], ['It answers “con chi?” (who did she leave with?).', 'Con chi è partita?'])
    ],
    codex: []
  }
], syntaxTaunt);

/** TAVOLE ATTIVE DEI VERBI · pages 146–153 */
export const VERB_TABLES = buildGrammarMissions([
  {
    id: 'itg5-tavole-essere-avere', sec: 'G8.1', pages: '146–147', hue: 320,
    title: ['Verb Tables: Essere and Avere', 'Tavole dei verbi: essere e avere'],
    topic: ['The complete conjugation of the two auxiliary verbs', 'La coniugazione completa dei due verbi ausiliari'],
    demon: ['The Page Tearer', 'lo Strappa-Pagine'],
    tech: ['Table Form · First Technique: Auxiliary Power', 'Stile delle Tavole · Prima Tecnica: Forza degli Ausiliari'],
    lessons: [
      { vis: 'itg5-table-essere', text: [
        '<p>📜 <b>Essere</b> has its own conjugation (coniugazione propria). Its compound tenses use <b>essere</b> itself as auxiliary: <i>sono stato, ero stato</i>. Look at the table and notice the very irregular forms: <i>sono, fui, sarò, sia, fossi</i>.</p>',
        '<p>📜 <b>Essere</b> ha una coniugazione propria. I suoi tempi composti usano come ausiliare <b>essere</b> stesso: <i>sono stato, ero stato</i>. Osserva la tavola e nota le forme molto irregolari: <i>sono, fui, sarò, sia, fossi</i>.</p>'
      ] },
      { vis: 'itg5-table-avere', text: [
        '<p>📜 <b>Avere</b> also has its own conjugation and uses <b>avere</b> as its auxiliary: <i>ho avuto, avevo avuto</i>. Remember the h in <i>ho, hai, ha, hanno</i>.</p>',
        '<p>📜 Anche <b>avere</b> ha una coniugazione propria e usa come ausiliare <b>avere</b>: <i>ho avuto, avevo avuto</i>. Ricorda l’h in <i>ho, hai, ha, hanno</i>.</p>'
      ] }
    ],
    quiz: [
      gq('Passato remoto of essere, “noi”?', 'Passato remoto di essere, «noi»?', [w('fummo'), w('fossimo'), w('saremmo'), w('eravamo')], ['The remote past of essere: io fui, tu fosti, egli fu, noi fummo.', 'io fui, tu fosti, egli fu, noi fummo.']),
      gq('Congiuntivo imperfetto of avere, “che essi”?', 'Congiuntivo imperfetto di avere, «che essi»?', [w('avessero'), w('abbiano'), w('avrebbero'), w('ebbero')], ['The imperfect subjunctive of avere: che io avessi… che essi avessero.', 'che io avessi… che essi avessero.']),
      gq('Condizionale presente of essere, “voi”?', 'Condizionale presente di essere, «voi»?', [w('sareste'), w('foste'), w('sarete'), w('siate')], ['The present conditional of essere: io sarei… voi sareste.', 'io sarei… voi sareste.']),
      gq('Imperativo of avere, “tu”?', 'Imperativo di avere, «tu»?', [w('abbi'), w('hai'), w('abbia'), w('avi')], ['As in the phrase “Abbi pazienza!” (be patient!).', 'Abbi pazienza!'])
    ],
    codex: []
  },
  {
    id: 'itg5-tavole-tre-coniugazioni', sec: 'G8.2', pages: '148–150', hue: 335,
    title: ['Verb Tables: am-ARE, cred-ERE, dorm-IRE', 'Tavole dei verbi: am-ARE, cred-ERE, dorm-IRE'],
    topic: ['The three regular conjugations in every mood and tense', 'Le tre coniugazioni regolari in tutti i modi e i tempi'],
    demon: ['The Ending Shuffler', 'il Mescola-Desinenze'],
    tech: ['Table Form · Second Technique: Three Paths', 'Stile delle Tavole · Seconda Tecnica: Tre Sentieri'],
    lessons: [
      { vis: 'itg5-table-amare', text: [
        '<p>📜 <b>First conjugation: am-ARE</b>. Keep the root <i>am-</i> and change the ending. Notice the future and conditional with <b>-er-</b>: <i>amerò, amerei</i> (not <s>amarò</s>).</p>',
        '<p>📜 <b>Prima coniugazione: am-ARE</b>. Si tiene la radice <i>am-</i> e si cambia la desinenza. Nota il futuro e il condizionale con <b>-er-</b>: <i>amerò, amerei</i> (non <s>amarò</s>).</p>'
      ] },
      { vis: 'itg5-table-credere', text: [
        '<p>📜 <b>Second conjugation: cred-ERE</b>. In the passato remoto many -ere verbs have two forms: <i>credetti / credei, credette / credé</i>; your textbook uses <i>credetti, credette, credettero</i>.</p>',
        '<p>📜 <b>Seconda coniugazione: cred-ERE</b>. Al passato remoto molti verbi in -ere hanno due forme: <i>credetti / credei, credette / credé</i>; il tuo libro usa <i>credetti, credette, credettero</i>.</p>'
      ] },
      { vis: 'itg5-table-dormire', text: [
        '<p>📜 <b>Third conjugation: dorm-IRE</b>. Many -ire verbs add <b>-isc-</b> in some present forms (<i>finire → finisco, finisci, finisce, finiscono</i>), but <i>dormire</i> does not: <i>dormo, dormi, dorme</i>.</p>',
        '<p>📜 <b>Terza coniugazione: dorm-IRE</b>. Molti verbi in -ire aggiungono <b>-isc-</b> in alcune voci del presente (<i>finire → finisco, finisci, finisce, finiscono</i>), ma <i>dormire</i> no: <i>dormo, dormi, dorme</i>.</p>'
      ] }
    ],
    quiz: [
      gq('Futuro semplice of amare, “io”?', 'Futuro semplice di amare, «io»?', [w('amerò'), w('amarò'), w('amerei'), w('amai')], ['First-conjugation futures use -er-.', 'Il futuro della prima coniugazione usa -er-.']),
      gq('Congiuntivo presente of credere, “che noi”?', 'Congiuntivo presente di credere, «che noi»?', [w('crediamo'), w('credessimo'), w('crederemmo'), w('credevamo')], ['che noi crediamo (same as the indicative).', 'che noi crediamo (uguale all’indicativo).']),
      gq('Passato remoto of dormire, “essi”?', 'Passato remoto di dormire, «essi»?', [w('dormirono'), w('dormivano'), w('dormiranno'), w('dormissero')], ['The remote past of dormire: io dormii… essi dormirono.', 'io dormii… essi dormirono.']),
      gq('Condizionale passato of amare, “tu”?', 'Condizionale passato di amare, «tu»?', [w('avresti amato'), w('avessi amato'), w('avrai amato'), w('ameresti')], ['Conditional of avere + amato.', 'Condizionale di avere + amato.'])
    ],
    codex: []
  },
  {
    id: 'itg5-tavole-passiva-riflessiva', sec: 'G8.3', pages: '151–153', hue: 350,
    title: ['Verb Tables: Passive, Reflexive and Irregular Verbs', 'Tavole dei verbi: passiva, riflessiva e verbi irregolari'],
    topic: ['Essere amato, lavarsi and the most common irregular verbs', 'Essere amato, lavarsi e i verbi irregolari più comuni'],
    demon: ['The Form Shifter', 'il Muta-Forme'],
    tech: ['Table Form · Mastery Seal: Living Tables', 'Stile delle Tavole · Sigillo di Maestria: Tavole Vive'],
    lessons: [
      { vis: 'itg5-table-passiva', text: [
        '<p>📜 <b>Passive conjugation: essere amato</b>. Every tense is formed with <b>essere</b> in the same tense + the past participle, which agrees with the subject: <i>io sono amato/amata, noi siamo amati/amate</i>.</p>',
        '<p>📜 <b>Coniugazione passiva: essere amato</b>. Ogni tempo si forma con <b>essere</b> allo stesso tempo + il participio passato, che concorda con il soggetto: <i>io sono amato/amata, noi siamo amati/amate</i>.</p>'
      ] },
      { vis: 'itg5-table-lavarsi', text: [
        '<p>📜 <b>Reflexive conjugation: lavarsi</b>. The reflexive pronoun comes before the verb (<i>mi lavo</i>) or is attached to the infinitive, gerund and imperative (<i>lavarsi, lavandosi, lavati!</i>). Compound tenses use <b>essere</b>: <i>mi sono lavato</i>.</p>',
        '<p>📜 <b>Coniugazione riflessiva: lavarsi</b>. Il pronome riflessivo sta prima del verbo (<i>mi lavo</i>) o si unisce a infinito, gerundio e imperativo (<i>lavarsi, lavandosi, lavati!</i>). I tempi composti usano <b>essere</b>: <i>mi sono lavato</i>.</p>'
      ] },
      { vis: 'itg5-table-irregolari', text: [
        '<p>📜 <b>Irregular verbs</b>: learn the key forms (presente, passato remoto, participio passato) of the most common ones in the table.</p>',
        '<p>📜 <b>Verbi irregolari</b>: impara le forme chiave (presente, passato remoto, participio passato) dei più comuni nella tavola.</p>'
      ] }
    ],
    quiz: [
      gq('Passato prossimo passive of amare, “io” (feminine)?', 'Passato prossimo passivo di amare, «io» (femminile)?', [w('sono stata amata'), w('ho amato'), w('ero amata'), w('sarò amata')], ['Passato prossimo of essere + participle.', 'Passato prossimo di essere + participio.']),
      gq('Passato prossimo of lavarsi, “noi” (masculine)?', 'Passato prossimo di lavarsi, «noi» (maschile)?', [w('ci siamo lavati'), w('ci abbiamo lavato'), w('noi lavammo'), w('ci laviamo')], ['Reflexive verbs use essere.', 'I verbi riflessivi usano essere.']),
      gq('What is the past participle of “dire”?', 'Qual è il participio passato di «dire»?', [w('detto'), w('diciuto'), w('dito'), w('dicendo')], ['Dire is irregular: detto.', 'Dire è irregolare: detto.']),
      gq('Passato remoto of “venire”, “egli”?', 'Passato remoto di «venire», «egli»?', [w('venne'), w('venì'), w('veniva'), w('venette')], ['Venire is irregular: io venni, egli venne.', 'io venni, egli venne.'])
    ],
    codex: []
  }
], tablesTaunt);

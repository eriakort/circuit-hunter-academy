import { buildGrammarMissions, gq, w, type Pair } from './italianGrammarCommon';

const spellingTaunt = (demon: Pair): Pair => [
  `<p>✏️ I am ${demon[0]}! I steal letters, swap accents and hide apostrophes. Can you write every word correctly?</p>`,
  `<p>✏️ Sono ${demon[1]}! Rubo le lettere, scambio gli accenti e nascondo gli apostrofi. Sai scrivere ogni parola correttamente?</p>`
];
const lexiconTaunt = (demon: Pair): Pair => [
  `<p>📖 I am ${demon[0]}! I mix up meanings, synonyms and borrowed words. Do you really know what words mean?</p>`,
  `<p>📖 Sono ${demon[1]}! Confondo significati, sinonimi e parole straniere. Sai davvero che cosa vogliono dire le parole?</p>`
];

/** ORTOGRAFIA – Come si scrive? · pages 4–19 */
export const ORTHOGRAPHY = buildGrammarMissions([
  {
    id: 'itg5-ce-cie-qu', sec: 'G1.1', pages: '4–5', hue: 0,
    title: ['CE or CIE? GE or GIE? SCE or SCIE? QU, CU, CQU?', 'CE o CIE? GE o GIE? SCE o SCIE? QU, CU, CQU?'],
    topic: ['Tricky spellings with the letter i and with the q sound', 'Le grafie difficili con la i e con il suono della q'],
    demon: ['The Silent-I Sprite', 'il Folletto della I Muta'],
    tech: ['Spelling Form · First Technique: Hidden Letter', 'Stile dell’Ortografia · Prima Tecnica: Lettera Nascosta'],
    lessons: [
      [
        '<p>🔤 In most words we write <b>ce, ge, sce</b> without an i: <i>cena, gelato, scena</i>. A few words keep a <b>silent i</b> that you must learn by heart: <i>cielo, cieco, società, sufficiente, specie, superficie, igiene, effigie, scienza, coscienza</i>.</p>',
        '<p>🔤 Nella maggior parte delle parole si scrive <b>ce, ge, sce</b> senza la i: <i>cena, gelato, scena</i>. Alcune parole conservano una <b>i muta</b> da imparare a memoria: <i>cielo, cieco, società, sufficiente, specie, superficie, igiene, effigie, scienza, coscienza</i>.</p>'
      ],
      [
        '<p>👗 <b>Plurals of words in -cia and -gia</b> (with unstressed i): if a <b>vowel</b> comes before, keep the i: <i>camicia → camicie, valigia → valigie, ciliegia → ciliegie</i>. If a <b>consonant</b> comes before, drop it: <i>arancia → arance, spiaggia → spiagge, pioggia → piogge</i>. If the i is stressed, it always stays: <i>farmacia → farmacie, bugia → bugie</i>.</p>',
        '<p>👗 <b>Plurale delle parole in -cia e -gia</b> (con la i non accentata): se prima c’è una <b>vocale</b>, la i resta: <i>camicia → camicie, valigia → valigie, ciliegia → ciliegie</i>. Se prima c’è una <b>consonante</b>, la i cade: <i>arancia → arance, spiaggia → spiagge, pioggia → piogge</i>. Se la i è accentata resta sempre: <i>farmacia → farmacie, bugia → bugie</i>.</p>'
      ],
      [
        '<p>🦆 The sound “kw” is usually written <b>QU</b>: <i>quadro, quaderno, questo</i>. A few words use <b>CU</b>: <i>cuore, cuoco, cuoio, scuola, scuotere, innocuo, proficuo</i>. The double sound is written <b>CQU</b>: <i>acqua, acquisto, acquerello, nacque, piacque, tacque</i>. The only word with <b>QQU</b> is <i>soqquadro</i>.</p>',
        '<p>🦆 Il suono «cu» seguito da vocale si scrive di solito con <b>QU</b>: <i>quadro, quaderno, questo</i>. Alcune parole vogliono <b>CU</b>: <i>cuore, cuoco, cuoio, scuola, scuotere, innocuo, proficuo</i>. Il suono rafforzato si scrive <b>CQU</b>: <i>acqua, acquisto, acquerello, nacque, piacque, tacque</i>. L’unica parola con <b>QQU</b> è <i>soqquadro</i>.</p>'
      ]
    ],
    quiz: [
      gq('Which word is spelled correctly?', 'Quale parola è scritta correttamente?', [w('cielo'), w('scenza'), w('sufficente'), w('superfice')], ['“Cielo” keeps the silent i.', '«Cielo» conserva la i muta.']),
      gq('What is the plural of “valigia”?', 'Qual è il plurale di «valigia»?', [w('valigie'), w('valige'), w('valigii'), w('valigia')], ['A vowel precedes -gia, so the i stays.', 'Prima di -gia c’è una vocale, quindi la i resta.']),
      gq('What is the plural of “arancia”?', 'Qual è il plurale di «arancia»?', [w('arance'), w('arancie'), w('aranci'), w('arancee')], ['A consonant precedes -cia, so the i drops.', 'Prima di -cia c’è una consonante, quindi la i cade.']),
      gq('Which word is spelled correctly?', 'Quale parola è scritta correttamente?', [w('acqua'), w('aqua'), w('accua'), w('acua')], ['Acqua is written with CQU.', 'Acqua si scrive con CQU.'])
    ],
    codex: [['Silent i (cie, gie, scie)', 'I muta (cie, gie, scie)', 'An i written but not pronounced, kept in words such as cielo, scienza, igiene.', 'Una i che si scrive ma non si pronuncia, come in cielo, scienza, igiene.']]
  },
  {
    id: 'itg5-gli-gn-doppie', sec: 'G1.2', pages: '6–7', hue: 15,
    title: ['GLI or LI? GN or NI? Double Consonants', 'GLI o LI? GN o NI? Le doppie'],
    topic: ['Choosing between gli/li and gn/ni; when to double a consonant', 'Scegliere tra gli/li e gn/ni; quando raddoppiare una consonante'],
    demon: ['The Double Trouble Twins', 'i Gemelli Raddoppiatori'],
    tech: ['Spelling Form · Second Technique: Twin Letters', 'Stile dell’Ortografia · Seconda Tecnica: Lettere Gemelle'],
    lessons: [
      [
        '<p>🧶 <b>GLI</b> gives the sound of <i>famiglia, foglio, coniglio</i>. Some words have <b>LI</b> + vowel instead: <i>olio, petrolio, Italia, Giulia, familiare, cavaliere</i>. Read the word slowly: in “olio” you hear l + i, in “foglio” you hear one soft sound.</p>',
        '<p>🧶 <b>GLI</b> rappresenta il suono di <i>famiglia, foglio, coniglio</i>. Alcune parole hanno invece <b>LI</b> + vocale: <i>olio, petrolio, Italia, Giulia, familiare, cavaliere</i>. Leggi lentamente: in «olio» senti l + i, in «foglio» un unico suono dolce.</p>'
      ],
      [
        '<p>🐙 <b>GN</b> is <u>never</u> followed by an i + vowel: <i>bagno, sogno, ragno, lavagna</i>. Exceptions are verb forms with -iamo/-iate (<i>sogniamo, insegniate</i>) and <i>compagnia</i>. Words like <i>geranio, colonia, Antonio, matrimonio</i> use <b>NI</b>.</p>',
        '<p>🐙 Dopo <b>GN</b> <u>non</u> si scrive la i davanti a vocale: <i>bagno, sogno, ragno, lavagna</i>. Fanno eccezione le forme verbali in -iamo/-iate (<i>sogniamo, insegniate</i>) e <i>compagnia</i>. Parole come <i>geranio, colonia, Antonio, matrimonio</i> si scrivono con <b>NI</b>.</p>'
      ],
      [
        '<p>👯 <b>Double consonants</b> change the meaning: <i>caro/carro, pala/palla, nono/nonno, sete/sette</i>. Say the word aloud and listen to the stronger sound. Words ending in <b>-zione</b> have one z (<i>stazione, lezione</i>); <b>q</b> is doubled only in <i>soqquadro</i>.</p>',
        '<p>👯 Le <b>doppie</b> cambiano il significato: <i>caro/carro, pala/palla, nono/nonno, sete/sette</i>. Pronuncia la parola ad alta voce e ascolta il suono rafforzato. Le parole in <b>-zione</b> hanno una sola z (<i>stazione, lezione</i>); la <b>q</b> si raddoppia solo in <i>soqquadro</i>.</p>'
      ]
    ],
    quiz: [
      gq('Which word is spelled correctly?', 'Quale parola è scritta correttamente?', [w('olio'), w('oglio'), w('olgio'), w('oljo')], ['Olio is written with LI.', 'Olio si scrive con LI.']),
      gq('Which word is spelled correctly?', 'Quale parola è scritta correttamente?', [w('lavagna'), w('lavagnia'), w('lavania'), w('lavaggna')], ['After GN we do not write an i before a vowel.', 'Dopo GN non si scrive la i davanti a vocale.']),
      gq('Which pair changes meaning because of a double consonant?', 'Quale coppia cambia significato per una doppia?', [w('pala / palla'), w('casa / case'), w('libro / libri'), w('sole / soli')], ['Pala (shovel) and palla (ball) differ only in the double l.', 'Pala e palla differiscono solo per la doppia l.']),
      gq('Which word is spelled correctly?', 'Quale parola è scritta correttamente?', [w('stazione'), w('stazzione'), w('stazione’'), w('stasione')], ['Words in -zione have a single z.', 'Le parole in -zione hanno una sola z.'])
    ],
    codex: [['Double consonant', 'Doppia', 'Two equal consonants that strengthen the sound and can change the meaning (caro/carro).', 'Due consonanti uguali che rafforzano il suono e possono cambiare il significato (caro/carro).']]
  },
  {
    id: 'itg5-h-sillabe', sec: 'G1.3', pages: '8–9', hue: 30,
    title: ['Using H Well and Dividing into Syllables', 'Uso bene l’H e la divisione in sillabe'],
    topic: ['H in the verb avere and in exclamations; rules for splitting words into syllables', 'L’h nel verbo avere e nelle esclamazioni; regole per dividere in sillabe'],
    demon: ['The Mute Hacker', 'l’Acca Dispettosa'],
    tech: ['Spelling Form · Third Technique: Clean Split', 'Stile dell’Ortografia · Terza Tecnica: Taglio Pulito'],
    lessons: [
      [
        '<p>🔇 In Italian the <b>h</b> is silent. It is written in four forms of <b>avere</b>: <i>ho, hai, ha, hanno</i>, to distinguish them from <i>o</i> (or), <i>ai</i> (to the), <i>a</i> (to), <i>anno</i> (year). Trick: if you can replace the word with “avevo/aveva”, write the h. It also appears in exclamations: <i>ah, eh, oh, ahi, ehi</i>, and in <i>ch, gh</i> before e and i (<i>chiave, ghiro</i>).</p>',
        '<p>🔇 In italiano l’<b>h</b> non si pronuncia. Si scrive in quattro voci del verbo <b>avere</b>: <i>ho, hai, ha, hanno</i>, per distinguerle da <i>o</i> (congiunzione), <i>ai</i> (preposizione articolata), <i>a</i> (preposizione), <i>anno</i> (nome). Trucco: se puoi sostituire la parola con «avevo/aveva», ci vuole l’h. Si trova anche nelle esclamazioni: <i>ah, eh, oh, ahi, ehi</i>, e nei gruppi <i>ch, gh</i> davanti a e e i (<i>chiave, ghiro</i>).</p>'
      ],
      [
        '<p>✂️ <b>Dividing into syllables</b>: every syllable has at least one vowel. A single consonant goes with the next vowel (<i>ca-sa</i>); <b>double consonants</b> split (<i>gat-to, ac-qua</i>); <b>s + consonant</b> stays with the following vowel (<i>pa-sta, fi-ne-stra</i>); groups like <b>gn, gl, ch, sc</b> are not split (<i>ba-gno, fi-glio</i>).</p>',
        '<p>✂️ <b>Divisione in sillabe</b>: ogni sillaba contiene almeno una vocale. Una consonante semplice va con la vocale che segue (<i>ca-sa</i>); le <b>doppie</b> si dividono (<i>gat-to, ac-qua</i>); la <b>s + consonante</b> va con la vocale successiva (<i>pa-sta, fi-ne-stra</i>); i gruppi <b>gn, gl, ch, sc</b> non si separano (<i>ba-gno, fi-glio</i>).</p>'
      ],
      [
        '<p>🔗 Two vowels pronounced together form a <b>diphthong</b> and stay together (<i>fio-re, pie-de</i>); pronounced separately they form a <b>hiatus</b> and split (<i>pa-u-ra, po-e-ta</i>). Never leave a single vowel alone at the end of a line when you go to a new line.</p>',
        '<p>🔗 Due vocali pronunciate insieme formano un <b>dittongo</b> e restano unite (<i>fio-re, pie-de</i>); pronunciate separatamente formano uno <b>iato</b> e si dividono (<i>pa-u-ra, po-e-ta</i>). Quando vai a capo non lasciare mai una vocale da sola in fondo alla riga.</p>'
      ]
    ],
    quiz: [
      gq('Complete: “Marco ___ un cane.”', 'Completa: «Marco ___ un cane.»', [w('ha'), w('a'), w('à'), w('ah')], ['It is the verb avere (he owns a dog).', 'È il verbo avere (possiede un cane).']),
      gq('Complete: “Vado ___ scuola.”', 'Completa: «Vado ___ scuola.»', [w('a'), w('ha'), w('ah'), w('à')], ['Here “a” is a preposition, not a verb.', 'Qui «a» è una preposizione, non un verbo.']),
      gq('How is “finestra” divided into syllables?', 'Come si divide in sillabe «finestra»?', [w('fi-ne-stra'), w('fi-nes-tra'), w('fin-es-tra'), w('fi-nest-ra')], ['s + consonant goes with the following vowel.', 's + consonante va con la vocale successiva.']),
      gq('How is “gatto” divided into syllables?', 'Come si divide in sillabe «gatto»?', [w('gat-to'), w('ga-tto'), w('gatt-o'), w('g-atto')], ['Double consonants are split.', 'Le doppie si dividono.'])
    ],
    codex: [['Diphthong and hiatus', 'Dittongo e iato', 'A diphthong is two vowels in one syllable (fio-re); a hiatus is two vowels in different syllables (pa-u-ra).', 'Il dittongo è l’unione di due vocali in una sillaba (fio-re); lo iato le separa in sillabe diverse (pa-u-ra).']]
  },
  {
    id: 'itg5-apostrofo-troncamento', sec: 'G1.4', pages: '10–11', hue: 45,
    title: ['Apostrophe and Truncation', 'Apostrofo e troncamento'],
    topic: ['Elision with the apostrophe; truncation without it; qual è and un po’', 'L’elisione con l’apostrofo; il troncamento senza apostrofo; qual è e un po’'],
    demon: ['The Apostrophe Thief', 'il Ladro di Apostrofi'],
    tech: ['Spelling Form · Fourth Technique: Smooth Link', 'Stile dell’Ortografia · Quarta Tecnica: Legame Morbido'],
    lessons: [
      [
        '<p>’ The <b>apostrophe</b> replaces a vowel that drops before another vowel (<b>elision</b>): <i>lo albero → l’albero, la amica → l’amica, una isola → un’isola, di estate → d’estate</i>.</p>',
        '<p>’ L’<b>apostrofo</b> sostituisce una vocale che cade davanti a un’altra vocale (<b>elisione</b>): <i>lo albero → l’albero, la amica → l’amica, una isola → un’isola, di estate → d’estate</i>.</p>'
      ],
      [
        '<p>✂️ <b>Truncation</b> (troncamento) removes the final vowel or syllable even before a consonant, and needs <b>no apostrophe</b>: <i>buono giorno → buon giorno, grande signore → gran signore, santo Marco → san Marco, quale è → qual è</i>. So <b>qual è</b> is written without an apostrophe!</p>',
        '<p>✂️ Il <b>troncamento</b> elimina la vocale o la sillaba finale anche davanti a consonante e <b>non vuole l’apostrofo</b>: <i>buono giorno → buon giorno, grande signore → gran signore, santo Marco → san Marco, quale è → qual è</i>. Quindi <b>qual è</b> si scrive senza apostrofo!</p>'
      ],
      [
        '<p>🧠 <b>Un or un’?</b> With masculine words, <i>un</i> is truncated: <i>un amico, un albero</i> (no apostrophe). With feminine words, <i>una</i> is elided: <i>un’amica, un’ape</i> (apostrophe). One exception: <b>un po’</b> (from “poco”) takes an apostrophe, not an accent.</p>',
        '<p>🧠 <b>Un o un’?</b> Con le parole maschili <i>un</i> è un troncamento: <i>un amico, un albero</i> (senza apostrofo). Con le parole femminili <i>una</i> si elide: <i>un’amica, un’ape</i> (con apostrofo). Un’eccezione: <b>un po’</b> (da «poco») vuole l’apostrofo, non l’accento.</p>'
      ]
    ],
    quiz: [
      gq('Which is correct?', 'Quale forma è corretta?', [w('un’amica'), w('un amica'), w('una’amica'), w('un-amica')], ['Amica is feminine: una is elided with an apostrophe.', 'Amica è femminile: una si elide con l’apostrofo.']),
      gq('Which is correct?', 'Quale forma è corretta?', [w('un amico'), w('un’amico'), w('uno amico'), w('un-amico')], ['Amico is masculine: un is a truncation, no apostrophe.', 'Amico è maschile: un è un troncamento, senza apostrofo.']),
      gq('Which is correct?', 'Quale forma è corretta?', [w('Qual è il tuo nome?'), w('Qual’è il tuo nome?'), w('Quale’è il tuo nome?'), w('Quall’è il tuo nome?')], ['Qual è is a truncation: no apostrophe.', 'Qual è è un troncamento: niente apostrofo.']),
      gq('Which is correct?', 'Quale forma è corretta?', [w('un po’'), w('un pò'), w('un po'), w('un pó')], ['Po’ comes from “poco” and takes an apostrophe.', 'Po’ deriva da «poco» e vuole l’apostrofo.'])
    ],
    codex: [['Elision and truncation', 'Elisione e troncamento', 'Elision drops a vowel before a vowel and uses an apostrophe (l’albero); truncation drops a final vowel or syllable without an apostrophe (buon giorno, qual è).', 'L’elisione fa cadere una vocale davanti a vocale e usa l’apostrofo (l’albero); il troncamento elimina la vocale o la sillaba finale senza apostrofo (buon giorno, qual è).']]
  },
  {
    id: 'itg5-accento', sec: 'G1.5', pages: '12–13', hue: 60,
    title: ['Monosyllables and the Accent', 'Monosillabi e accento'],
    topic: ['Accented words and the monosyllables that need an accent', 'Le parole accentate e i monosillabi che vogliono l’accento'],
    demon: ['The Accent Swapper', 'lo Scambia-Accenti'],
    tech: ['Spelling Form · Fifth Technique: Right Stress', 'Stile dell’Ortografia · Quinta Tecnica: Accento Giusto'],
    lessons: [
      [
        '<p>🎵 Every word has a stressed syllable, but the <b>written accent</b> is required only on words stressed on the <b>last vowel</b> (<i>città, perché, virtù, caffè</i>) and on some <b>monosyllables</b> (one-syllable words).</p>',
        '<p>🎵 Ogni parola ha una sillaba accentata, ma l’<b>accento grafico</b> è obbligatorio solo sulle parole accentate sull’<b>ultima vocale</b> (<i>città, perché, virtù, caffè</i>) e su alcuni <b>monosillabi</b>.</p>'
      ],
      [
        '<p>⚖️ Some monosyllables take an accent to be told apart from a twin word:</p><ul><li><b>è</b> (verb) / e (and)</li><li><b>dà</b> (gives) / da (from)</li><li><b>là, lì</b> (there) / la, li (articles/pronouns)</li><li><b>sì</b> (yes) / si (pronoun)</li><li><b>né</b> (neither/nor) / ne</li><li><b>sé</b> (himself) / se (if)</li><li><b>tè</b> (tea) / te (you)</li></ul>',
        '<p>⚖️ Alcuni monosillabi vogliono l’accento per distinguerli da una parola uguale:</p><ul><li><b>è</b> (verbo) / e (congiunzione)</li><li><b>dà</b> (verbo dare) / da (preposizione)</li><li><b>là, lì</b> (avverbi) / la, li (articoli o pronomi)</li><li><b>sì</b> (affermazione) / si (pronome)</li><li><b>né</b> (congiunzione negativa) / ne (pronome)</li><li><b>sé</b> (pronome) / se (congiunzione)</li><li><b>tè</b> (bevanda) / te (pronome)</li></ul>'
      ],
      [
        '<p>🚫 Other monosyllables <b>never</b> take an accent: <i>qui, qua, su, blu, tre, re, sto, sta, fa, va, me, so</i>. Remember: “qui e qua l’accento non va!” — but “tre” with an accent appears in compounds like <i>ventitré</i>.</p>',
        '<p>🚫 Altri monosillabi <b>non</b> vogliono mai l’accento: <i>qui, qua, su, blu, tre, re, sto, sta, fa, va, me, so</i>. Ricorda: «su qui e su qua l’accento non va!» — però nelle parole composte si scrive <i>ventitré</i>.</p>'
      ]
    ],
    quiz: [
      gq('Complete: “Il gatto ___ nero ___ bianco.”', 'Completa: «Il gatto ___ nero ___ bianco.»', [w('è / e'), w('e / è'), w('è / è'), w('e / e')], ['First the verb (è), then the conjunction (e).', 'Prima il verbo (è), poi la congiunzione (e).']),
      gq('Which monosyllable must NOT have an accent?', 'Quale monosillabo NON vuole mai l’accento?', [w('qui'), w('sì (affermazione)'), w('là (avverbio)'), w('dà (verbo)')], ['Qui and qua are never accented.', 'Qui e qua non vogliono mai l’accento.']),
      gq('Complete: “Luca mi ___ un libro.”', 'Completa: «Luca mi ___ un libro.»', [w('dà'), w('da'), w('dá'), w('da’')], ['It is the verb dare, which needs the accent.', 'È il verbo dare, che vuole l’accento.']),
      gq('Which word needs a written accent?', 'Quale parola vuole l’accento grafico?', [w('città'), w('casa'), w('tavolo'), w('scuola')], ['It is stressed on the last vowel.', 'È accentata sull’ultima vocale.'])
    ],
    codex: [['Accented monosyllable', 'Monosillabo accentato', 'A one-syllable word written with an accent to distinguish it from a twin word: è/e, dà/da, sì/si.', 'Parola di una sillaba con l’accento per distinguerla da una parola uguale: è/e, dà/da, sì/si.']]
  },
  {
    id: 'itg5-punteggiatura-discorso', sec: 'G1.6', pages: '14–15', hue: 75,
    title: ['Punctuation; Direct and Indirect Speech', 'La punteggiatura; discorso diretto e indiretto'],
    topic: ['Full stop, comma, colon, semicolon, question and exclamation marks; reporting what someone says', 'Punto, virgola, due punti, punto e virgola, punto interrogativo ed esclamativo; riportare le parole di qualcuno'],
    demon: ['The Comma Kidnapper', 'il Rapitore di Virgole'],
    tech: ['Spelling Form · Sixth Technique: Perfect Pause', 'Stile dell’Ortografia · Sesta Tecnica: Pausa Perfetta'],
    lessons: [
      [
        '<p>⏸️ Punctuation marks the <b>pauses</b> and the <b>tone</b>: <b>.</b> long pause, end of sentence; <b>,</b> short pause, separates items in a list; <b>;</b> medium pause; <b>:</b> introduces a list, an explanation or direct speech; <b>?</b> question; <b>!</b> exclamation; <b>…</b> suspension.</p>',
        '<p>⏸️ La punteggiatura segna le <b>pause</b> e l’<b>intonazione</b>: <b>.</b> pausa lunga, fine della frase; <b>,</b> pausa breve, separa gli elementi di un elenco; <b>;</b> pausa media; <b>:</b> introduce un elenco, una spiegazione o il discorso diretto; <b>?</b> domanda; <b>!</b> esclamazione; <b>…</b> sospensione.</p>'
      ],
      [
        '<p>💬 <b>Direct speech</b> reports the exact words, introduced by a colon and enclosed in quotation marks « » or “ ” or after a dash: <i>Anna disse: «Domani vengo io».</i></p><p><b>Indirect speech</b> reports the meaning, with no quotation marks, usually with <i>che</i> or <i>di</i>: <i>Anna disse che il giorno dopo sarebbe venuta lei.</i></p>',
        '<p>💬 Il <b>discorso diretto</b> riporta le parole esatte, introdotte dai due punti e racchiuse tra virgolette « » o “ ” oppure dopo una lineetta: <i>Anna disse: «Domani vengo io».</i></p><p>Il <b>discorso indiretto</b> ne riporta il senso, senza virgolette, di solito con <i>che</i> o <i>di</i>: <i>Anna disse che il giorno dopo sarebbe venuta lei.</i></p>'
      ],
      [
        '<p>🔁 From direct to indirect speech, change: the <b>persons</b> (io → lei), the <b>time and place words</b> (domani → il giorno dopo, qui → lì) and often the <b>tenses</b>. Questions become <i>chiese se…</i>: «Hai fame?» → <i>Mi chiese se avevo fame.</i></p>',
        '<p>🔁 Passando dal discorso diretto all’indiretto cambiano: le <b>persone</b> (io → lei), le <b>indicazioni di tempo e di luogo</b> (domani → il giorno dopo, qui → lì) e spesso i <b>tempi verbali</b>. Le domande diventano <i>chiese se…</i>: «Hai fame?» → <i>Mi chiese se avevo fame.</i></p>'
      ]
    ],
    quiz: [
      gq('Which punctuation mark introduces direct speech?', 'Quale segno introduce il discorso diretto?', [w('i due punti ( : )'), w('il punto e virgola ( ; )'), w('la virgola ( , )'), w('i puntini di sospensione ( … )')], ['A colon then quotation marks or a dash.', 'I due punti, poi le virgolette o la lineetta.']),
      gq('Which sentence is in indirect speech?', 'Quale frase è al discorso indiretto?', [w('Luca disse che era stanco.'), w('Luca disse: «Sono stanco».'), w('«Sono stanco», disse Luca.'), w('Luca disse: – Sono stanco.')], ['No quotation marks; introduced by “che”.', 'Niente virgolette; introdotto da «che».']),
      gq('«Domani parto», disse Sara. In indirect speech “domani” becomes…', '«Domani parto», disse Sara. Al discorso indiretto «domani» diventa…', [w('il giorno dopo'), w('ieri'), w('oggi'), w('domani')], ['Time words change in indirect speech.', 'Le indicazioni di tempo cambiano nel discorso indiretto.']),
      gq('Which mark separates the items of a list?', 'Quale segno separa gli elementi di un elenco?', [w('la virgola'), w('il punto interrogativo'), w('il punto esclamativo'), w('le virgolette')], ['Commas separate items: mele, pere, banane.', 'Le virgole separano gli elementi: mele, pere, banane.'])
    ],
    codex: [['Direct and indirect speech', 'Discorso diretto e indiretto', 'Direct speech quotes the exact words in quotation marks; indirect speech reports their meaning with che/di, changing persons, time words and tenses.', 'Il discorso diretto riporta le parole esatte tra virgolette; l’indiretto ne riporta il senso con che/di, cambiando persone, indicazioni di tempo e tempi verbali.']]
  },
  {
    id: 'itg5-ortografia-verifica', sec: 'G1.7', pages: '16–19', hue: 90,
    title: ['Check-Up: Spelling and Punctuation', 'Verifico: ortografia e punteggiatura'],
    topic: ['“Se provo è facile”, Invalsi-style questions and punctuation in a text', '«Se provo è facile», verso l’Invalsi e la punteggiatura nel testo'],
    demon: ['The Guardian of Spelling', 'il Guardiano dell’Ortografia'],
    tech: ['Spelling Form · Mastery Seal: Flawless Pen', 'Stile dell’Ortografia · Sigillo di Maestria: Penna Perfetta'],
    lessons: [
      [
        '<p>🗺️ <b>Summary</b>: silent i (cielo, scienza); plurals of -cia/-gia; qu/cu/cqu; gli/li, gn/ni; doubles; h in avere; syllables; elision (un’amica) and truncation (qual è, un amico); accented monosyllables (è, dà, sì, là); punctuation and direct/indirect speech.</p>',
        '<p>🗺️ <b>Riepilogo</b>: i muta (cielo, scienza); plurale di -cia/-gia; qu/cu/cqu; gli/li, gn/ni; doppie; h nel verbo avere; sillabe; elisione (un’amica) e troncamento (qual è, un amico); monosillabi accentati (è, dà, sì, là); punteggiatura e discorso diretto/indiretto.</p>'
      ],
      [
        '<p>🏁 <b>Towards Invalsi</b>: a typical question asks you to complete a text with <i>è</i> or <i>e</i>. Ask yourself: can I replace it with “era”? Then it is the verb <b>è</b>. Can I replace it with “and”/“ed”? Then it is <b>e</b>.</p>',
        '<p>🏁 <b>Verso l’Invalsi</b>: una domanda tipica chiede di completare un testo con <i>è</i> o <i>e</i>. Chiediti: posso sostituirla con «era»? Allora è il verbo <b>è</b>. Posso sostituirla con «ed»? Allora è la congiunzione <b>e</b>.</p>'
      ]
    ],
    quiz: [
      gq('Complete: “Il mare ___ calmo ___ azzurro.”', 'Completa: «Il mare ___ calmo ___ azzurro.»', [w('è / e'), w('e / è'), w('è / è'), w('e / e')], ['“Il mare era calmo ed azzurro”: è, then e.', '«Il mare era calmo ed azzurro»: è, poi e.']),
      gq('Which sentence is written correctly?', 'Quale frase è scritta correttamente?', [w('Qual è la tua materia preferita? Un po’ di tutto!'), w('Qual’è la tua materia preferita? Un pò di tutto!'), w('Qual è la tua materia preferita? Un pò di tutto!'), w('Qual’è la tua materia preferita? Un po’ di tutto!')], ['Qual è without apostrophe; po’ with apostrophe.', 'Qual è senza apostrofo; po’ con l’apostrofo.']),
      gq('What is the plural of “ciliegia”?', 'Qual è il plurale di «ciliegia»?', [w('ciliegie'), w('ciliege'), w('ciliegi'), w('cilieggie')], ['A vowel comes before -gia: the i stays.', 'Prima di -gia c’è una vocale: la i resta.']),
      gq('Which word is divided correctly?', 'Quale parola è divisa correttamente?', [w('ac-qua'), w('a-cqua'), w('acq-ua'), w('a-cq-ua')], ['The double sound cq splits like a double consonant.', 'Il gruppo cq si divide come una doppia.'])
    ],
    codex: []
  }
], spellingTaunt);

/** LESSICO – Come si dice? · pages 20–33 */
export const LEXICON = buildGrammarMissions([
  {
    id: 'itg5-vocabolario', sec: 'G2.1', pages: '20–21', hue: 180,
    title: ['The Dictionary', 'Il vocabolario'],
    topic: ['Alphabetical order, headwords and abbreviations', 'Ordine alfabetico, lemmi e abbreviazioni'],
    demon: ['The Page Shuffler', 'lo Sfoglia-Pagine'],
    tech: ['Word Form · First Technique: Quick Search', 'Stile delle Parole · Prima Tecnica: Ricerca Veloce'],
    lessons: [
      [
        '<p>📚 Words in a dictionary are in <b>alphabetical order</b>, letter by letter: <i>casa, cassa, castello</i>. The word you look up is the <b>headword</b> (lemma), always in its <b>base form</b>: nouns in the masculine singular, adjectives in the masculine singular, verbs in the infinitive.</p>',
        '<p>📚 Nel vocabolario le parole sono in <b>ordine alfabetico</b>, lettera per lettera: <i>casa, cassa, castello</i>. La parola cercata è il <b>lemma</b>, sempre nella sua <b>forma base</b>: i nomi al maschile singolare, gli aggettivi al maschile singolare, i verbi all’infinito.</p>'
      ],
      [
        '<p>🔎 So to find <i>andavamo</i> look up <b>andare</b>; for <i>belle</i> look up <b>bello</b>. Each entry gives pronunciation, <b>abbreviations</b> (s.m. = noun masculine, agg. = adjective, v. tr. = transitive verb, avv. = adverb), the different <b>meanings</b> numbered, examples and sometimes the origin.</p>',
        '<p>🔎 Quindi per trovare <i>andavamo</i> cerca <b>andare</b>; per <i>belle</i> cerca <b>bello</b>. Ogni voce indica la pronuncia, le <b>abbreviazioni</b> (s.m. = sostantivo maschile, agg. = aggettivo, v. tr. = verbo transitivo, avv. = avverbio), i diversi <b>significati</b> numerati, esempi e a volte l’origine.</p>'
      ]
    ],
    quiz: [
      gq('Which word would you look up to find “dormivano”?', 'Quale lemma cerchi per trovare «dormivano»?', [w('dormire'), w('dormivano'), w('dormito'), w('dormo')], ['Verbs are listed in the infinitive.', 'I verbi sono elencati all’infinito.']),
      gq('Which list is in alphabetical order?', 'Quale elenco è in ordine alfabetico?', [w('cane, cappello, carta'), w('carta, cane, cappello'), w('cappello, carta, cane'), w('cane, carta, cappello')], ['Compare letter by letter: can < cap < car.', 'Confronta lettera per lettera: can < cap < car.']),
      gq('What does “agg.” mean in a dictionary entry?', 'Che cosa significa «agg.» in una voce del vocabolario?', [w('aggettivo'), w('aggiunta'), w('avverbio'), w('articolo')], ['It is the abbreviation for adjective.', 'È l’abbreviazione di aggettivo.']),
      gq('Which word would you look up to find “rosse”?', 'Quale lemma cerchi per trovare «rosse»?', [w('rosso'), w('rosse'), w('rossa'), w('rossi')], ['Adjectives are listed in the masculine singular.', 'Gli aggettivi sono elencati al maschile singolare.'])
    ],
    codex: [['Headword (lemma)', 'Lemma', 'The base form of a word under which it is listed in the dictionary.', 'La forma base con cui una parola compare nel vocabolario.']]
  },
  {
    id: 'itg5-relazioni-significato', sec: 'G2.2', pages: '22–23', hue: 195,
    title: ['Relationships of Meaning and Scales of Meaning', 'Relazioni e scale di significato'],
    topic: ['Synonyms, antonyms, hypernyms and hyponyms, homonyms, polysemy; ordering words by intensity', 'Sinonimi, contrari, iperonimi e iponimi, omonimi, polisemia; ordinare le parole per intensità'],
    demon: ['The Meaning Muddler', 'il Confondi-Significati'],
    tech: ['Word Form · Second Technique: Word Web', 'Stile delle Parole · Seconda Tecnica: Rete di Parole'],
    lessons: [
      [
        '<p>🤝 <b>Synonyms</b> have a similar meaning (<i>allegro – contento</i>); <b>antonyms</b> (contrari) have the opposite meaning (<i>alto – basso, felice – infelice</i>). A <b>hypernym</b> is a general word that includes others, the <b>hyponyms</b>: <i>fiore</i> → <i>rosa, tulipano, margherita</i>.</p>',
        '<p>🤝 I <b>sinonimi</b> hanno un significato simile (<i>allegro – contento</i>); i <b>contrari</b> (antonimi) hanno significato opposto (<i>alto – basso, felice – infelice</i>). L’<b>iperonimo</b> è una parola generale che ne comprende altre, gli <b>iponimi</b>: <i>fiore</i> → <i>rosa, tulipano, margherita</i>.</p>'
      ],
      [
        '<p>🔀 <b>Homonyms</b> are written the same but mean different things (<i>la pesca</i> the fruit / <i>la pesca</i> fishing). A <b>polysemous</b> word has several related meanings: <i>la chiave</i> of a door, of a problem, the musical key.</p>',
        '<p>🔀 Gli <b>omonimi</b> si scrivono allo stesso modo ma hanno significati diversi (<i>la pesca</i> il frutto / <i>la pesca</i> l’attività del pescare). Una parola <b>polisemica</b> ha più significati collegati: <i>la chiave</i> della porta, di un problema, la chiave musicale.</p>'
      ],
      [
        '<p>🌡️ <b>Scales of meaning</b> order words by intensity: <i>freddo → fresco → tiepido → caldo → bollente</i>; <i>sussurrare → parlare → gridare</i>. Choosing the right step makes your writing more precise.</p>',
        '<p>🌡️ Le <b>scale di significato</b> ordinano le parole per intensità: <i>freddo → fresco → tiepido → caldo → bollente</i>; <i>sussurrare → parlare → gridare</i>. Scegliere il gradino giusto rende la scrittura più precisa.</p>'
      ]
    ],
    quiz: [
      gq('In “rosa, tulipano, fiore, margherita”, which word is the hypernym?', 'In «rosa, tulipano, fiore, margherita», qual è l’iperonimo?', [w('fiore'), w('rosa'), w('tulipano'), w('margherita')], ['Fiore includes all the others.', 'Fiore comprende tutti gli altri.']),
      gq('Which is a synonym of “contento”?', 'Quale è un sinonimo di «contento»?', [w('felice'), w('triste'), w('stanco'), w('arrabbiato')], ['Felice has a similar meaning.', 'Felice ha un significato simile.']),
      gq('Which sequence goes from the least to the most intense?', 'Quale sequenza va dal meno al più intenso?', [w('tiepido, caldo, bollente'), w('bollente, caldo, tiepido'), w('caldo, tiepido, bollente'), w('tiepido, bollente, caldo')], ['Temperature rises step by step.', 'La temperatura sale un gradino alla volta.']),
      gq('“La pesca” (fruit) and “la pesca” (fishing) are…', '«La pesca» (frutto) e «la pesca» (il pescare) sono…', [w('omonimi'), w('sinonimi'), w('contrari'), w('iponimi')], ['Same spelling, different meanings.', 'Stessa grafia, significati diversi.'])
    ],
    codex: [['Hypernym and hyponym', 'Iperonimo e iponimo', 'A hypernym is a general word (fiore); hyponyms are the specific words it includes (rosa, tulipano).', 'L’iperonimo è una parola generale (fiore); gli iponimi sono le parole specifiche che comprende (rosa, tulipano).']]
  },
  {
    id: 'itg5-figurato-settoriali', sec: 'G2.3', pages: '24–25', hue: 210,
    title: ['Literal and Figurative Meaning; Specialised Languages', 'Significato proprio e figurato; i linguaggi settoriali'],
    topic: ['Idioms and metaphors; words of science, sport, music and computing', 'Modi di dire e metafore; le parole della scienza, dello sport, della musica e dell’informatica'],
    demon: ['The Literal Golem', 'il Golem Letterale'],
    tech: ['Word Form · Third Technique: Double Sense', 'Stile delle Parole · Terza Tecnica: Doppio Senso'],
    lessons: [
      [
        '<p>🧊 A word has a <b>literal</b> meaning (significato proprio) and can have a <b>figurative</b> one: <i>un cuore di pietra</i> does not mean a stone heart, but an unkind person. <i>Rompere il ghiaccio</i> means starting a conversation.</p>',
        '<p>🧊 Una parola ha un <b>significato proprio</b> e può averne uno <b>figurato</b>: <i>un cuore di pietra</i> non è un cuore fatto di pietra, ma una persona insensibile. <i>Rompere il ghiaccio</i> significa iniziare una conversazione.</p>'
      ],
      [
        '<p>🧪 <b>Specialised languages</b> (linguaggi settoriali) are the words of a subject or job: maths (<i>perimetro, quoziente</i>), science (<i>fotosintesi</i>), sport (<i>fuorigioco, rigore</i>), music (<i>pentagramma</i>), computing (<i>file, cartella</i>). Some everyday words have a special meaning in a field: <i>rete</i> in football, fishing and computing.</p>',
        '<p>🧪 I <b>linguaggi settoriali</b> sono le parole di una disciplina o di un mestiere: matematica (<i>perimetro, quoziente</i>), scienze (<i>fotosintesi</i>), sport (<i>fuorigioco, rigore</i>), musica (<i>pentagramma</i>), informatica (<i>file, cartella</i>). Alcune parole comuni hanno un significato speciale in un settore: <i>rete</i> nel calcio, nella pesca e nell’informatica.</p>'
      ]
    ],
    quiz: [
      gq('In “Ha un cuore d’oro”, “cuore d’oro” is used…', 'In «Ha un cuore d’oro», «cuore d’oro» è usato in senso…', [w('figurato'), w('proprio'), w('settoriale'), w('straniero')], ['It means a generous person, not a gold heart.', 'Indica una persona generosa, non un cuore d’oro vero.']),
      gq('Which word belongs to the language of maths?', 'Quale parola appartiene al linguaggio della matematica?', [w('quoziente'), w('fuorigioco'), w('pentagramma'), w('sciarpa')], ['Quotient is the result of a division.', 'Il quoziente è il risultato di una divisione.']),
      gq('What does “rompere il ghiaccio” mean?', 'Che cosa significa «rompere il ghiaccio»?', [w('iniziare a parlare superando l’imbarazzo'), w('spaccare un cubetto di ghiaccio'), w('avere molto freddo'), w('litigare con qualcuno')], ['It is a figurative expression.', 'È un’espressione figurata.']),
      gq('In which sentence is “stella” used figuratively?', 'In quale frase «stella» è usata in senso figurato?', [w('È una stella del cinema.'), w('Stanotte vedo una stella.'), w('Il Sole è una stella.'), w('Quella stella brilla molto.')], ['A “star” of cinema is a famous actor.', 'Una «stella» del cinema è un attore famoso.'])
    ],
    codex: [['Figurative meaning', 'Significato figurato', 'A meaning that goes beyond the literal one, based on a comparison (un cuore di pietra).', 'Un significato che va oltre quello proprio, basato su un confronto (un cuore di pietra).']]
  },
  {
    id: 'itg5-origini-prestiti', sec: 'G2.4', pages: '26–29', hue: 225,
    title: ['Origins of Italian, Old and New Words, Borrowed Words', 'Le origini dell’italiano, parole di ieri e di oggi, prestiti'],
    topic: ['From Latin to Italian; archaisms and neologisms; loanwords from other languages', 'Dal latino all’italiano; arcaismi e neologismi; parole prese in prestito da altre lingue'],
    demon: ['The Time-Travelling Scribe', 'lo Scriba Viaggiatore'],
    tech: ['Word Form · Fourth Technique: Word Roots', 'Stile delle Parole · Quarta Tecnica: Radici delle Parole'],
    lessons: [
      [
        '<p>🏛️ Italian comes mainly from <b>Latin</b>, especially from the spoken Latin of ordinary people (<i>latino volgare</i>). Over the centuries Latin changed differently in each region and produced the <b>vernaculars</b> (volgari). One of the oldest documents written in an Italian vernacular is the <b>Placito di Capua</b>, from the year 960.</p>',
        '<p>🏛️ L’italiano deriva soprattutto dal <b>latino</b>, in particolare da quello parlato dalla gente comune (<i>latino volgare</i>). Nel corso dei secoli il latino si trasformò in modo diverso nelle varie regioni dando origine ai <b>volgari</b>. Uno dei documenti più antichi scritti in volgare italiano è il <b>Placito di Capua</b>, dell’anno 960.</p>'
      ],
      [
        '<p>✒️ In the 1300s the <b>Florentine</b> vernacular became especially prestigious thanks to three great writers: <b>Dante Alighieri</b>, <b>Francesco Petrarca</b> and <b>Giovanni Boccaccio</b>. Modern standard Italian grew largely from that Florentine.</p>',
        '<p>✒️ Nel Trecento il volgare <b>fiorentino</b> divenne particolarmente prestigioso grazie a tre grandi scrittori: <b>Dante Alighieri</b>, <b>Francesco Petrarca</b> e <b>Giovanni Boccaccio</b>. L’italiano di oggi si è sviluppato in gran parte proprio da quel fiorentino.</p>'
      ],
      [
        '<p>🌍 Language keeps changing: <b>archaisms</b> are old words no longer used (<i>desinare</i> for pranzare); <b>neologisms</b> are new words (<i>smartphone, chattare</i>). Italian also takes <b>loanwords</b> (prestiti) from other languages — <i>computer, sport, bar</i> from English, <i>garage, menu</i> from French — and lends words to others: <i>pizza, opera, spaghetti</i>.</p>',
        '<p>🌍 La lingua cambia continuamente: gli <b>arcaismi</b> sono parole antiche non più usate (<i>desinare</i> per pranzare); i <b>neologismi</b> sono parole nuove (<i>smartphone, chattare</i>). L’italiano prende anche <b>prestiti</b> da altre lingue — <i>computer, sport, bar</i> dall’inglese, <i>garage, menu</i> dal francese — e ne presta ad altre: <i>pizza, opera, spaghetti</i>.</p>'
      ]
    ],
    quiz: [
      gq('From which language does Italian mainly come?', 'Da quale lingua deriva soprattutto l’italiano?', [w('dal latino'), w('dal greco antico'), w('dall’inglese'), w('dal francese')], ['Italian is a Romance language derived from Latin.', 'L’italiano è una lingua romanza derivata dal latino.']),
      gq('Which word is a neologism?', 'Quale parola è un neologismo?', [w('chattare'), w('desinare'), w('casa'), w('acqua')], ['It is a recent word linked to technology.', 'È una parola recente legata alla tecnologia.']),
      gq('Which word is a loanword from English?', 'Quale parola è un prestito dall’inglese?', [w('computer'), w('pizza'), w('finestra'), w('ombrello')], ['Computer comes from English.', 'Computer viene dall’inglese.']),
      gq('Which writer is linked to the birth of literary Italian in the 1300s?', 'Quale scrittore è legato alla nascita dell’italiano letterario nel Trecento?', [w('Dante Alighieri'), w('Alessandro Manzoni'), w('Gianni Rodari'), w('Carlo Collodi')], ['Dante, with Petrarca and Boccaccio, wrote in Florentine vernacular in the 1300s.', 'Dante, con Petrarca e Boccaccio, scrisse in volgare fiorentino nel Trecento.'])
    ],
    codex: [
      ['Vernacular (volgare)', 'Volgare', 'The everyday languages that developed from spoken Latin in the Middle Ages.', 'Le lingue parlate nate dal latino nel Medioevo.'],
      ['Loanword', 'Prestito', 'A word taken from another language (computer, garage).', 'Una parola presa da un’altra lingua (computer, garage).']
    ]
  },
  {
    id: 'itg5-lessico-verifica', sec: 'G2.5', pages: '30–33', hue: 240,
    title: ['Check-Up: Vocabulary', 'Verifico: il lessico'],
    topic: ['“Se provo è facile”, Invalsi-style questions and synonyms in a text', '«Se provo è facile», verso l’Invalsi e i sinonimi nel testo'],
    demon: ['The Guardian of Words', 'il Guardiano delle Parole'],
    tech: ['Word Form · Mastery Seal: Word Wizard', 'Stile delle Parole · Sigillo di Maestria: Mago delle Parole'],
    lessons: [
      [
        '<p>🗺️ <b>Summary</b>: dictionary and headwords; synonyms, antonyms, hypernyms/hyponyms, homonyms and polysemy; scales of meaning; literal and figurative meaning; specialised languages; from Latin to Italian; archaisms, neologisms and loanwords.</p>',
        '<p>🗺️ <b>Riepilogo</b>: vocabolario e lemmi; sinonimi, contrari, iperonimi/iponimi, omonimi e polisemia; scale di significato; significato proprio e figurato; linguaggi settoriali; dal latino all’italiano; arcaismi, neologismi e prestiti.</p>'
      ],
      [
        '<p>🏁 <b>Towards Invalsi</b>: to choose a synonym in a text, replace the word and reread the sentence — the meaning must stay the same in <b>that</b> context. To find a hypernym, look for the word that “contains” all the others.</p>',
        '<p>🏁 <b>Verso l’Invalsi</b>: per scegliere un sinonimo nel testo sostituisci la parola e rileggi la frase: il significato deve restare uguale in <b>quel</b> contesto. Per trovare un iperonimo cerca la parola che «contiene» tutte le altre.</p>'
      ]
    ],
    quiz: [
      gq('In “euro, dollaro, moneta, sterlina”, which is the hypernym?', 'In «euro, dollaro, moneta, sterlina», qual è l’iperonimo?', [w('moneta'), w('euro'), w('dollaro'), w('sterlina')], ['Moneta includes the other three.', 'Moneta comprende le altre tre.']),
      gq('“Il film era noioso.” Which word can replace “noioso”?', '«Il film era noioso.» Quale parola può sostituire «noioso»?', [w('monotono'), w('divertente'), w('breve'), w('famoso')], ['Monotono keeps the same meaning in this context.', 'Monotono mantiene lo stesso significato in questo contesto.']),
      gq('Which word is an archaism?', 'Quale parola è un arcaismo?', [w('desinare'), w('pranzare'), w('mangiare'), w('cenare')], ['Desinare is an old word for pranzare.', 'Desinare è una parola antica per pranzare.']),
      gq('Which word did Italian lend to other languages?', 'Quale parola l’italiano ha prestato ad altre lingue?', [w('pizza'), w('weekend'), w('garage'), w('hobby')], ['Pizza is used in many languages.', 'Pizza si usa in moltissime lingue.'])
    ],
    codex: []
  }
], lexiconTaunt);

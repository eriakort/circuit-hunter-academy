import { buildGrammarMissions, gq, w, type Pair } from './italianGrammarCommon';

const morphTaunt = (demon: Pair): Pair => [
  `<p>🏷️ I am ${demon[0]}! I mix up genders, numbers and parts of speech. Can you say what kind of word each one is?</p>`,
  `<p>🏷️ Sono ${demon[1]}! Confondo generi, numeri e parti del discorso. Sai dire che parola è ciascuna?</p>`
];

/** MORFOLOGIA – Che parola è? Nomi e articoli · pages 34–49 */
export const NOUNS_ARTICLES = buildGrammarMissions([
  {
    id: 'itg5-nomi-genere-numero', sec: 'G3.1', pages: '34–35', hue: 300,
    title: ['Gender and Number of Nouns', 'Il genere e il numero dei nomi'],
    topic: ['Masculine and feminine; singular and plural; invariable and special plurals', 'Maschile e femminile; singolare e plurale; nomi invariabili e plurali particolari'],
    demon: ['The Plural Prankster', 'il Burlone dei Plurali'],
    tech: ['Word-Kind Form · First Technique: Noun Sense', 'Stile delle Parti del Discorso · Prima Tecnica: Fiuto dei Nomi'],
    lessons: [
      [
        '<p>🚹🚺 Nouns have a <b>gender</b>: masculine or feminine. Some change the ending (<i>gatto/gatta, maestro/maestra</i>); some use a different word (<i>padre/madre, fratello/sorella</i>); some are the same and only the article changes (<i>il/la cantante</i>); some animal names have one form only (<i>la tigre maschio</i>).</p>',
        '<p>🚹🚺 I nomi hanno un <b>genere</b>: maschile o femminile. Alcuni cambiano la desinenza (<i>gatto/gatta, maestro/maestra</i>); alcuni hanno una parola diversa, sono <b>indipendenti</b> (<i>padre/madre, fratello/sorella</i>); altri sono uguali e cambia solo l’articolo, sono <b>comuni</b> (<i>il/la cantante</i>); alcuni nomi di animali hanno una sola forma, sono <b>promiscui</b> (<i>la tigre maschio</i>).</p>'
      ],
      [
        '<p>🔢 <b>Number</b>: singular or plural. Usually -o → -i, -a → -e, -e → -i. <b>Invariable</b> nouns do not change: words with a final accent (<i>la città / le città</i>), one-syllable words (<i>il re / i re</i>), foreign words (<i>il bar / i bar</i>), words in -i (<i>la crisi / le crisi</i>) and <i>la specie / le specie</i>.</p>',
        '<p>🔢 Il <b>numero</b>: singolare o plurale. Di solito -o → -i, -a → -e, -e → -i. I nomi <b>invariabili</b> non cambiano: le parole accentate sull’ultima vocale (<i>la città / le città</i>), i monosillabi (<i>il re / i re</i>), le parole straniere (<i>il bar / i bar</i>), le parole in -i (<i>la crisi / le crisi</i>) e <i>la specie / le specie</i>.</p>'
      ],
      [
        '<p>🧩 Special cases: <b>defective</b> nouns exist only in the singular (<i>il latte, il coraggio</i>) or only in the plural (<i>gli occhiali, le forbici</i>); some plurals are irregular (<i>l’uomo → gli uomini, l’uovo → le uova, il dio → gli dei</i>); some nouns have two plurals with different meanings (<i>i bracci</i> of a lamp / <i>le braccia</i> of a person).</p>',
        '<p>🧩 Casi particolari: i nomi <b>difettivi</b> esistono solo al singolare (<i>il latte, il coraggio</i>) o solo al plurale (<i>gli occhiali, le forbici</i>); alcuni plurali sono irregolari (<i>l’uomo → gli uomini, l’uovo → le uova, il dio → gli dei</i>); i nomi <b>sovrabbondanti</b> hanno due plurali con significati diversi (<i>i bracci</i> della lampada / <i>le braccia</i> del corpo).</p>'
      ]
    ],
    quiz: [
      gq('Which noun is invariable?', 'Quale nome è invariabile?', [w('la città'), w('la casa'), w('il libro'), w('la scuola')], ['Words with a final accent do not change in the plural.', 'Le parole accentate sull’ultima vocale non cambiano al plurale.']),
      gq('What is the plural of “uovo”?', 'Qual è il plurale di «uovo»?', [w('le uova'), w('gli uovi'), w('le uove'), w('gli uova')], ['Uovo has an irregular feminine plural.', 'Uovo ha un plurale irregolare femminile.']),
      gq('“Padre / madre” are nouns…', '«Padre / madre» sono nomi…', [w('indipendenti'), w('comuni'), w('promiscui'), w('invariabili')], ['Masculine and feminine are different words.', 'Maschile e femminile sono parole diverse.']),
      gq('Which noun is used only in the plural?', 'Quale nome si usa solo al plurale?', [w('le forbici'), w('il latte'), w('la sedia'), w('il re')], ['Forbici is a defective noun with no singular.', 'Forbici è un nome difettivo senza singolare.'])
    ],
    codex: [['Invariable noun', 'Nome invariabile', 'A noun with the same form in the singular and plural (la città / le città).', 'Nome che ha la stessa forma al singolare e al plurale (la città / le città).']]
  },
  {
    id: 'itg5-nomi-significato-struttura', sec: 'G3.2', pages: '36–39', hue: 315,
    title: ['Meaning and Structure of Nouns', 'Il significato e la struttura dei nomi'],
    topic: ['Common/proper, concrete/abstract, collective; primitive, derived, altered and compound nouns', 'Comuni/propri, concreti/astratti, collettivi; nomi primitivi, derivati, alterati e composti'],
    demon: ['The Suffix Shifter', 'il Mutante dei Suffissi'],
    tech: ['Word-Kind Form · Second Technique: Word Builder', 'Stile delle Parti del Discorso · Seconda Tecnica: Costruttore di Parole'],
    lessons: [
      [
        '<p>🗂️ By <b>meaning</b>: <b>common</b> nouns (<i>città</i>) or <b>proper</b> nouns with a capital letter (<i>Roma</i>); <b>concrete</b> (things you can perceive with the senses: <i>tavolo</i>) or <b>abstract</b> (ideas and feelings: <i>gioia, libertà</i>); <b>collective</b> nouns indicate a group in the singular (<i>gregge, folla, flotta, squadra</i>).</p>',
        '<p>🗂️ Secondo il <b>significato</b>: nomi <b>comuni</b> (<i>città</i>) o <b>propri</b> con la maiuscola (<i>Roma</i>); <b>concreti</b> (si percepiscono con i sensi: <i>tavolo</i>) o <b>astratti</b> (idee e sentimenti: <i>gioia, libertà</i>); i nomi <b>collettivi</b> indicano un gruppo pur essendo al singolare (<i>gregge, folla, flotta, squadra</i>).</p>'
      ],
      [
        '<p>🧱 By <b>structure</b>: <b>primitive</b> nouns are not derived from other words (<i>fiore</i>); <b>derived</b> nouns add a prefix or suffix (<i>fioraio, fioriera</i>); <b>compound</b> nouns join two words (<i>capostazione, portafoglio, pescecane</i>).</p>',
        '<p>🧱 Secondo la <b>struttura</b>: i nomi <b>primitivi</b> non derivano da altre parole (<i>fiore</i>); i <b>derivati</b> aggiungono un prefisso o un suffisso (<i>fioraio, fioriera</i>); i <b>composti</b> uniscono due parole (<i>capostazione, portafoglio, pescecane</i>).</p>'
      ],
      [
        '<p>🔍 <b>Altered</b> nouns change size or tone with a suffix: diminutive <i>gattino</i>, augmentative <i>gattone</i>, affectionate <i>gattuccio</i>, pejorative <i>gattaccio</i>. Beware of <b>false altered</b> nouns: <i>mattone, burrone, tacchino, lampone</i> are not altered forms of matto, burro, tacco, lampo!</p>',
        '<p>🔍 I nomi <b>alterati</b> cambiano dimensione o sfumatura con un suffisso: diminutivo <i>gattino</i>, accrescitivo <i>gattone</i>, vezzeggiativo <i>gattuccio</i>, dispregiativo <i>gattaccio</i>. Attenzione ai <b>falsi alterati</b>: <i>mattone, burrone, tacchino, lampone</i> non derivano da matto, burro, tacco, lampo!</p>'
      ]
    ],
    quiz: [
      gq('Which noun is collective?', 'Quale nome è collettivo?', [w('gregge'), w('pecora'), w('libertà'), w('Milano')], ['Gregge indicates a group of sheep.', 'Gregge indica un gruppo di pecore.']),
      gq('Which noun is abstract?', 'Quale nome è astratto?', [w('coraggio'), w('sedia'), w('mela'), w('zaino')], ['Courage cannot be perceived with the senses.', 'Il coraggio non si percepisce con i sensi.']),
      gq('Which noun is a false altered noun?', 'Quale nome è un falso alterato?', [w('mattone'), w('gattone'), w('librone'), w('nasone')], ['Mattone does not come from “matto”.', 'Mattone non deriva da «matto».']),
      gq('Which noun is compound?', 'Quale nome è composto?', [w('portafoglio'), w('fioraio'), w('casetta'), w('sole')], ['It joins two words: porta + foglio.', 'Porta + foglio.'])
    ],
    codex: [['Altered noun', 'Nome alterato', 'A noun changed by a suffix to show size or feeling: -ino, -one, -uccio, -accio.', 'Nome modificato da un suffisso che indica dimensione o sentimento: -ino, -one, -uccio, -accio.']]
  },
  {
    id: 'itg5-articoli', sec: 'G3.3', pages: '40–43', hue: 330,
    title: ['Articles', 'Gli articoli'],
    topic: ['Definite, indefinite and partitive articles; when to use lo, gli and l’', 'Articoli determinativi, indeterminativi e partitivi; quando usare lo, gli e l’'],
    demon: ['The Article Juggler', 'il Giocoliere degli Articoli'],
    tech: ['Word-Kind Form · Third Technique: Perfect Partner', 'Stile delle Parti del Discorso · Terza Tecnica: Compagno Perfetto'],
    lessons: [
      { vis: 'itg5-articles', text: [
        '<p>📌 The <b>article</b> comes before a noun and agrees with it in gender and number. <b>Definite</b>: <i>il, lo, la, l’, i, gli, le</i> — for something known. <b>Indefinite</b>: <i>un, uno, una, un’</i> — for something generic or new. <b>Partitive</b>: <i>del, dello, della, dei, degli, delle</i> — “some”: <i>Compro del pane.</i></p>',
        '<p>📌 L’<b>articolo</b> precede il nome e concorda con esso nel genere e nel numero. <b>Determinativi</b>: <i>il, lo, la, l’, i, gli, le</i> — per qualcosa di noto. <b>Indeterminativi</b>: <i>un, uno, una, un’</i> — per qualcosa di generico o nuovo. <b>Partitivi</b>: <i>del, dello, della, dei, degli, delle</i> — «un po’ di»: <i>Compro del pane.</i></p>'
      ] },
      [
        '<p>⚠️ Use <b>lo / gli / uno</b> before masculine words beginning with <b>s + consonant, z, gn, ps, x, y, pn</b> or i + vowel: <i>lo zaino, gli gnomi, uno psicologo, lo yogurt, gli studenti</i>. Use <b>l’</b> and <b>gli</b> before a vowel: <i>l’albero, gli alberi</i>.</p>',
        '<p>⚠️ Si usano <b>lo / gli / uno</b> davanti ai nomi maschili che iniziano per <b>s + consonante, z, gn, ps, x, y, pn</b> o i + vocale: <i>lo zaino, gli gnomi, uno psicologo, lo yogurt, gli studenti</i>. Davanti a vocale si usano <b>l’</b> e <b>gli</b>: <i>l’albero, gli alberi</i>.</p>'
      ],
      [
        '<p>🕵️ The definite article tells the reader the thing is <b>already known</b>: “C’era <i>un</i> boscaiolo… <i>Il</i> boscaiolo prese l’ascia.” The second time we use <i>il</i> because we already met the woodcutter. This is a typical Invalsi question!</p>',
        '<p>🕵️ L’articolo determinativo indica che la cosa è <b>già nota</b> a chi legge: «C’era <i>un</i> boscaiolo… <i>Il</i> boscaiolo prese l’ascia.» La seconda volta si usa <i>il</i> perché il boscaiolo lo conosciamo già. È una domanda tipica delle prove Invalsi!</p>'
      ]
    ],
    quiz: [
      gq('Which is correct?', 'Quale forma è corretta?', [w('lo zaino'), w('il zaino'), w('l’zaino'), w('la zaino')], ['Masculine words beginning with z take lo.', 'I nomi maschili che iniziano per z vogliono lo.']),
      gq('Which is correct?', 'Quale forma è corretta?', [w('gli studenti'), w('i studenti'), w('le studenti'), w('lo studenti')], ['s + consonant takes gli in the plural.', 's + consonante vuole gli al plurale.']),
      gq('In “Vorrei dello zucchero”, “dello” is…', 'In «Vorrei dello zucchero», «dello» è…', [w('un articolo partitivo'), w('un articolo indeterminativo'), w('un pronome'), w('un aggettivo')], ['It means “some sugar”.', 'Significa «un po’ di zucchero».']),
      gq('“C’era un re… Il re era triste.” Why “il” the second time?', '«C’era un re… Il re era triste.» Perché la seconda volta «il»?', [w('perché il re è ormai noto a chi legge'), w('perché re è un nome femminile'), w('perché re è plurale'), w('perché re inizia per vocale')], ['The definite article refers to something already known.', 'L’articolo determinativo indica qualcosa di già noto.'])
    ],
    codex: [['Partitive article', 'Articolo partitivo', 'Del, dello, della, dei, degli, delle: indicates an indefinite quantity (“some”).', 'Del, dello, della, dei, degli, delle: indica una quantità indefinita («un po’ di»).']]
  },
  {
    id: 'itg5-nomi-verifica', sec: 'G3.4', pages: '44–49', hue: 345,
    title: ['Check-Up: Nouns and Articles', 'Verifico: nomi e articoli'],
    topic: ['Strategies for grammatical analysis, summary map and Invalsi-style questions', 'Strategie per l’analisi grammaticale, mappa e verso l’Invalsi'],
    demon: ['The Guardian of Nouns', 'il Guardiano dei Nomi'],
    tech: ['Word-Kind Form · Mastery Seal: Noun Master', 'Stile delle Parti del Discorso · Sigillo di Maestria: Maestro dei Nomi'],
    lessons: [
      [
        '<p>🔬 <b>Grammatical analysis</b> (analisi grammaticale) says what each word is. For a noun: <i>common/proper, concrete/abstract, masculine/feminine, singular/plural, primitive/derived/altered/compound</i>. Example: <b>gattini</b> → noun, common, concrete, masculine, plural, altered (diminutive) of gatto.</p>',
        '<p>🔬 L’<b>analisi grammaticale</b> dice che cos’è ogni parola. Per un nome: <i>comune/proprio, concreto/astratto, maschile/femminile, singolare/plurale, primitivo/derivato/alterato/composto</i>. Esempio: <b>gattini</b> → nome comune, concreto, maschile, plurale, alterato (diminutivo) di gatto.</p>'
      ],
      [
        '<p>📌 For an article: <i>definite/indefinite/partitive, masculine/feminine, singular/plural</i>. Example: <b>gli</b> → article, definite, masculine, plural.</p>',
        '<p>📌 Per un articolo: <i>determinativo/indeterminativo/partitivo, maschile/femminile, singolare/plurale</i>. Esempio: <b>gli</b> → articolo determinativo, maschile, plurale.</p>'
      ]
    ],
    quiz: [
      gq('Analyse “libertà”.', 'Analizza «libertà».', [w('nome comune, astratto, femminile, invariabile'), w('nome proprio, concreto, maschile, singolare'), w('aggettivo qualificativo, femminile, singolare'), w('nome comune, concreto, maschile, plurale')], ['Libertà is an abstract feminine noun with the same form in the plural.', 'Libertà è un nome astratto femminile con la stessa forma al plurale.']),
      gq('Analyse “uno”, in “uno scoiattolo”.', 'Analizza «uno» in «uno scoiattolo».', [w('articolo indeterminativo, maschile, singolare'), w('articolo determinativo, maschile, singolare'), w('aggettivo numerale'), w('articolo partitivo, maschile, singolare')], ['Uno is the indefinite article before s + consonant.', 'Uno è l’articolo indeterminativo davanti a s + consonante.']),
      gq('Which noun is derived?', 'Quale nome è derivato?', [w('giornalaio'), w('giornale'), w('giornalino'), w('pescecane')], ['Giornal- + -aio (suffix of a job).', 'Giornal- + -aio (suffisso di mestiere).']),
      gq('Which noun is common, concrete and collective?', 'Quale nome è comune, concreto e collettivo?', [w('orchestra'), w('musicista'), w('Verdi'), w('felicità')], ['Orchestra is a group of musicians.', 'Orchestra indica un gruppo di musicisti.'])
    ],
    codex: []
  }
], morphTaunt);

/** Aggettivi e pronomi · pages 50–71 */
export const ADJECTIVES_PRONOUNS = buildGrammarMissions([
  {
    id: 'itg5-aggettivi-qualificativi', sec: 'G4.1', pages: '50–51', hue: 20,
    title: ['Qualifying Adjectives and Their Degrees', 'Gli aggettivi qualificativi e i gradi'],
    topic: ['Agreement; positive, comparative and superlative degrees', 'Concordanza; grado positivo, comparativo e superlativo'],
    demon: ['The Comparison Cheat', 'il Baro dei Paragoni'],
    tech: ['Word-Kind Form · Fourth Technique: True Degree', 'Stile delle Parti del Discorso · Quarta Tecnica: Grado Giusto'],
    lessons: [
      [
        '<p>🎨 <b>Qualifying adjectives</b> describe a quality of the noun and <b>agree</b> with it in gender and number: <i>una casa grande, dei libri nuovi</i>. Some have four forms (<i>alto, alta, alti, alte</i>), others two (<i>felice, felici</i>).</p>',
        '<p>🎨 Gli <b>aggettivi qualificativi</b> indicano una qualità del nome e <b>concordano</b> con esso nel genere e nel numero: <i>una casa grande, dei libri nuovi</i>. Alcuni hanno quattro forme (<i>alto, alta, alti, alte</i>), altri due (<i>felice, felici</i>).</p>'
      ],
      [
        '<p>📊 <b>Degrees</b>: <b>positive</b> (<i>Luca è alto</i>); <b>comparative</b> of majority (<i>più alto di</i>), minority (<i>meno alto di</i>) or equality (<i>alto come / tanto alto quanto</i>); <b>relative superlative</b> (<i>il più alto della classe</i>); <b>absolute superlative</b> (<i>altissimo, molto alto, stra-, arci-</i>).</p>',
        '<p>📊 I <b>gradi</b>: <b>positivo</b> (<i>Luca è alto</i>); <b>comparativo</b> di maggioranza (<i>più alto di</i>), di minoranza (<i>meno alto di</i>) o di uguaglianza (<i>alto come / tanto alto quanto</i>); <b>superlativo relativo</b> (<i>il più alto della classe</i>); <b>superlativo assoluto</b> (<i>altissimo, molto alto, stra-, arci-</i>).</p>'
      ]
    ],
    quiz: [
      gq('“Marta è la più veloce della squadra.” Which degree?', '«Marta è la più veloce della squadra.» Quale grado?', [w('superlativo relativo'), w('superlativo assoluto'), w('comparativo di maggioranza'), w('positivo')], ['The most … of a group = relative superlative.', 'La più … di un gruppo = superlativo relativo.']),
      gq('“Il mare è calmissimo.” Which degree?', '«Il mare è calmissimo.» Quale grado?', [w('superlativo assoluto'), w('superlativo relativo'), w('comparativo di uguaglianza'), w('positivo')], ['-issimo forms the absolute superlative.', '-issimo forma il superlativo assoluto.']),
      gq('“Il gatto è meno pesante del cane.” Which degree?', '«Il gatto è meno pesante del cane.» Quale grado?', [w('comparativo di minoranza'), w('comparativo di maggioranza'), w('comparativo di uguaglianza'), w('superlativo relativo')], ['Meno … di expresses minority.', 'Meno … di esprime minoranza.']),
      gq('Which adjective agrees correctly? “Le ragazze sono ___.”', 'Quale aggettivo concorda? «Le ragazze sono ___.»', [w('stanche'), w('stanco'), w('stanca'), w('stanchi')], ['Feminine plural.', 'Femminile plurale.'])
    ],
    codex: [['Absolute superlative', 'Superlativo assoluto', 'The highest degree of a quality without comparison: bellissimo, molto bello.', 'Il grado massimo di una qualità senza confronto: bellissimo, molto bello.']]
  },
  {
    id: 'itg5-aggettivi-speciali', sec: 'G4.2', pages: '52', hue: 35,
    title: ['Special Qualifying Adjectives', 'Aggettivi qualificativi speciali'],
    topic: ['Organic comparatives and superlatives: migliore, ottimo, peggiore, pessimo…', 'Comparativi e superlativi organici: migliore, ottimo, peggiore, pessimo…'],
    demon: ['The Better-Best Bandit', 'il Bandito del Migliore'],
    tech: ['Word-Kind Form · Fifth Technique: Hidden Degree', 'Stile delle Parti del Discorso · Quinta Tecnica: Grado Nascosto'],
    lessons: [
      { vis: 'itg5-special-adjectives', text: [
        '<p>⭐ Some adjectives have special forms from Latin (<b>organic</b> forms) besides the regular ones:</p><ul><li>buono → <b>migliore</b> → <b>ottimo</b></li><li>cattivo → <b>peggiore</b> → <b>pessimo</b></li><li>grande → <b>maggiore</b> → <b>massimo</b></li><li>piccolo → <b>minore</b> → <b>minimo</b></li><li>alto → <b>superiore</b> → <b>supremo/sommo</b></li><li>basso → <b>inferiore</b> → <b>infimo</b></li></ul>',
        '<p>⭐ Alcuni aggettivi hanno, oltre a quelle regolari, forme speciali derivate dal latino (forme <b>organiche</b>):</p><ul><li>buono → <b>migliore</b> → <b>ottimo</b></li><li>cattivo → <b>peggiore</b> → <b>pessimo</b></li><li>grande → <b>maggiore</b> → <b>massimo</b></li><li>piccolo → <b>minore</b> → <b>minimo</b></li><li>alto → <b>superiore</b> → <b>supremo/sommo</b></li><li>basso → <b>inferiore</b> → <b>infimo</b></li></ul>'
      ] },
      [
        '<p>🚫 These forms already contain the degree, so never add <i>più</i> or <i>-issimo</i>: <s>più migliore</s>, <s>ottimissimo</s> are wrong. Say <i>migliore</i> or <i>più buono</i>; <i>ottimo</i> or <i>buonissimo</i>.</p>',
        '<p>🚫 Queste forme contengono già il grado, quindi non si aggiunge mai <i>più</i> o <i>-issimo</i>: <s>più migliore</s>, <s>ottimissimo</s> sono errori. Si dice <i>migliore</i> o <i>più buono</i>; <i>ottimo</i> o <i>buonissimo</i>.</p>'
      ]
    ],
    quiz: [
      gq('What is the organic comparative of “cattivo”?', 'Qual è il comparativo organico di «cattivo»?', [w('peggiore'), w('pessimo'), w('più peggiore'), w('cattivissimo')], ['The organic series is cattivo → peggiore → pessimo.', 'cattivo → peggiore → pessimo.']),
      gq('Which form is wrong?', 'Quale forma è sbagliata?', [w('più migliore'), w('migliore'), w('più buono'), w('ottimo')], ['Migliore already means “more good”.', 'Migliore significa già «più buono».']),
      gq('What is the organic absolute superlative of “piccolo”?', 'Qual è il superlativo assoluto organico di «piccolo»?', [w('minimo'), w('minore'), w('piccolissimo minore'), w('infimo')], ['The organic series is piccolo → minore → minimo.', 'piccolo → minore → minimo.']),
      gq('“Mio fratello maggiore”: “maggiore” is the comparative of…', '«Mio fratello maggiore»: «maggiore» è il comparativo di…', [w('grande'), w('alto'), w('buono'), w('vecchio')], ['The organic series is grande → maggiore → massimo.', 'grande → maggiore → massimo.'])
    ],
    codex: [['Organic comparative', 'Comparativo organico', 'A special comparative form from Latin: migliore, peggiore, maggiore, minore, superiore, inferiore.', 'Forma speciale di comparativo di origine latina: migliore, peggiore, maggiore, minore, superiore, inferiore.']]
  },
  {
    id: 'itg5-possessivi-dimostrativi', sec: 'G4.3', pages: '53–54', hue: 50,
    title: ['Possessive and Demonstrative Adjectives and Pronouns', 'Aggettivi e pronomi possessivi e dimostrativi'],
    topic: ['Mio, tuo, suo…; questo, codesto, quello; adjective or pronoun?', 'Mio, tuo, suo…; questo, codesto, quello; aggettivo o pronome?'],
    demon: ['The Pointing Poltergeist', 'il Poltergeist Indicatore'],
    tech: ['Word-Kind Form · Sixth Technique: Whose and Which', 'Stile delle Parti del Discorso · Sesta Tecnica: Di Chi e Quale'],
    lessons: [
      [
        '<p>👜 <b>Possessives</b> indicate who owns something: <i>mio, tuo, suo, nostro, vostro, loro</i> (plus <i>proprio, altrui</i>). <b>Demonstratives</b> indicate where something is: <i>questo</i> (near the speaker), <i>codesto</i> (near the listener), <i>quello</i> (far from both).</p>',
        '<p>👜 I <b>possessivi</b> indicano a chi appartiene qualcosa: <i>mio, tuo, suo, nostro, vostro, loro</i> (e <i>proprio, altrui</i>). I <b>dimostrativi</b> indicano la posizione: <i>questo</i> (vicino a chi parla), <i>codesto</i> (vicino a chi ascolta), <i>quello</i> (lontano da entrambi).</p>'
      ],
      [
        '<p>🔑 <b>Adjective or pronoun?</b> It is an <b>adjective</b> if it accompanies a noun: <i><b>Questo</b> zaino è nuovo</i>. It is a <b>pronoun</b> if it replaces the noun: <i>Il tuo zaino è rosso, il <b>mio</b> è blu</i> (il mio = il mio zaino).</p>',
        '<p>🔑 <b>Aggettivo o pronome?</b> È <b>aggettivo</b> se accompagna un nome: <i><b>Questo</b> zaino è nuovo</i>. È <b>pronome</b> se sostituisce il nome: <i>Il tuo zaino è rosso, il <b>mio</b> è blu</i> (il mio = il mio zaino).</p>'
      ]
    ],
    quiz: [
      gq('“Il mio quaderno è verde, il tuo è giallo.” What is “tuo”?', '«Il mio quaderno è verde, il tuo è giallo.» Che cos’è «tuo»?', [w('pronome possessivo'), w('aggettivo possessivo'), w('pronome dimostrativo'), w('articolo')], ['It replaces “quaderno”.', 'Sostituisce «quaderno».']),
      gq('“Quella bici è nuova.” What is “quella”?', '«Quella bici è nuova.» Che cos’è «quella»?', [w('aggettivo dimostrativo'), w('pronome dimostrativo'), w('aggettivo possessivo'), w('articolo determinativo')], ['It accompanies the noun “bici”.', 'Accompagna il nome «bici».']),
      gq('Which demonstrative indicates something near the listener?', 'Quale dimostrativo indica qualcosa vicino a chi ascolta?', [w('codesto'), w('questo'), w('quello'), w('stesso')], ['Codesto = near the person you are talking to.', 'Codesto = vicino a chi ascolta.']),
      gq('“I ragazzi hanno preso i ___ zaini.”', '«I ragazzi hanno preso i ___ zaini.»', [w('loro'), w('suoi'), w('sue'), w('lori')], ['Loro is the possessive for “of them” and does not change.', 'Loro è il possessivo di «essi» ed è invariabile.'])
    ],
    codex: [['Adjective vs pronoun', 'Aggettivo o pronome', 'An adjective accompanies a noun (questo libro); a pronoun replaces it (prendo questo).', 'L’aggettivo accompagna il nome (questo libro); il pronome lo sostituisce (prendo questo).']]
  },
  {
    id: 'itg5-indefiniti-numerali', sec: 'G4.4', pages: '55–57', hue: 65,
    title: ['Indefinite, Numeral, Exclamative and Interrogative Words', 'Indefiniti, numerali, esclamativi e interrogativi'],
    topic: ['Qualche, ogni, nessuno…; cardinal and ordinal numbers; che, quale, quanto, chi', 'Qualche, ogni, nessuno…; numeri cardinali e ordinali; che, quale, quanto, chi'],
    demon: ['The Count Confuser', 'il Conte Confusione'],
    tech: ['Word-Kind Form · Seventh Technique: Exact Amount', 'Stile delle Parti del Discorso · Settima Tecnica: Quantità Esatta'],
    lessons: [
      [
        '<p>❓ <b>Indefinites</b> indicate an imprecise quantity or identity. Some are only adjectives (<i>ogni, qualche, qualsiasi</i>), some only pronouns (<i>qualcuno, ognuno, niente, nulla</i>), many are both (<i>molto, poco, tanto, tutto, nessuno, alcuno, altro</i>). Note: <i>qualche</i> always takes a singular noun: <i>qualche amico</i>.</p>',
        '<p>❓ Gli <b>indefiniti</b> indicano una quantità o un’identità in modo impreciso. Alcuni sono solo aggettivi (<i>ogni, qualche, qualsiasi</i>), alcuni solo pronomi (<i>qualcuno, ognuno, niente, nulla</i>), molti sono entrambi (<i>molto, poco, tanto, tutto, nessuno, alcuno, altro</i>). Nota: <i>qualche</i> vuole sempre il nome al singolare: <i>qualche amico</i>.</p>'
      ],
      [
        '<p>🔢 <b>Numerals</b>: <b>cardinal</b> (<i>tre, venti</i>), <b>ordinal</b> (<i>terzo, ventesimo</i>), <b>multiplicative</b> (<i>doppio, triplo</i>), <b>fractional</b> (<i>un terzo</i>), <b>collective</b> nouns (<i>paio, decina, dozzina</i>). <b>Exclamatives and interrogatives</b>: <i>che, quale, quanto</i> (adjectives or pronouns), <i>chi</i> (only pronoun): <i>Quanti libri! Chi viene?</i></p>',
        '<p>🔢 I <b>numerali</b>: <b>cardinali</b> (<i>tre, venti</i>), <b>ordinali</b> (<i>terzo, ventesimo</i>), <b>moltiplicativi</b> (<i>doppio, triplo</i>), <b>frazionari</b> (<i>un terzo</i>), <b>collettivi</b> (<i>paio, decina, dozzina</i>). <b>Esclamativi e interrogativi</b>: <i>che, quale, quanto</i> (aggettivi o pronomi), <i>chi</i> (solo pronome): <i>Quanti libri! Chi viene?</i></p>'
      ]
    ],
    quiz: [
      gq('Which is correct?', 'Quale forma è corretta?', [w('qualche amico'), w('qualche amici'), w('qualchi amici'), w('qualcuno amico')], ['Qualche always takes the singular.', 'Qualche vuole sempre il singolare.']),
      gq('“Arrivò terzo alla gara.” What is “terzo”?', '«Arrivò terzo alla gara.» Che cos’è «terzo»?', [w('aggettivo numerale ordinale'), w('aggettivo numerale cardinale'), w('pronome indefinito'), w('aggettivo qualificativo')], ['It indicates a position in an order.', 'Indica una posizione in un ordine.']),
      gq('Which word is only a pronoun?', 'Quale parola è solo pronome?', [w('qualcuno'), w('ogni'), w('qualche'), w('molto')], ['Qualcuno replaces a noun and never accompanies one.', 'Qualcuno sostituisce il nome e non lo accompagna mai.']),
      gq('“Chi ha suonato?” What is “chi”?', '«Chi ha suonato?» Che cos’è «chi»?', [w('pronome interrogativo'), w('aggettivo interrogativo'), w('pronome relativo'), w('congiunzione')], ['Chi asks a question and replaces a person.', 'Chi introduce una domanda e sostituisce una persona.'])
    ],
    codex: [['Indefinite', 'Indefinito', 'An adjective or pronoun that indicates quantity or identity vaguely: qualche, nessuno, molto.', 'Aggettivo o pronome che indica quantità o identità in modo vago: qualche, nessuno, molto.']]
  },
  {
    id: 'itg5-pronomi-personali', sec: 'G4.5', pages: '58–61', hue: 80,
    title: ['Personal Pronouns and Pronouns in Pairs', 'I pronomi personali e i pronomi in coppia'],
    topic: ['Subject and object pronouns; stressed and unstressed forms; glielo, me lo, ce ne', 'Pronomi soggetto e complemento; forme toniche e atone; glielo, me lo, ce ne'],
    demon: ['The Pronoun Mimic', 'il Mimo dei Pronomi'],
    tech: ['Word-Kind Form · Eighth Technique: Perfect Substitute', 'Stile delle Parti del Discorso · Ottava Tecnica: Sostituto Perfetto'],
    lessons: [
      { vis: 'itg5-personal-pronouns', text: [
        '<p>🙋 <b>Subject pronouns</b>: <i>io, tu, egli/lui, ella/lei, esso/essa, noi, voi, essi/esse/loro</i>. In Italian the subject is often left out: <i>(Io) vado.</i></p><p><b>Object pronouns</b> have <b>stressed</b> forms (<i>me, te, lui, lei, sé, noi, voi, loro</i>: <i>Parla con me</i>) and <b>unstressed</b> forms (<i>mi, ti, lo, la, gli, le, ci, vi, li, ne, si</i>: <i>Mi chiama</i>).</p>',
        '<p>🙋 <b>Pronomi soggetto</b>: <i>io, tu, egli/lui, ella/lei, esso/essa, noi, voi, essi/esse/loro</i>. In italiano il soggetto spesso è sottinteso: <i>(Io) vado.</i></p><p>I <b>pronomi complemento</b> hanno forme <b>toniche</b> (<i>me, te, lui, lei, sé, noi, voi, loro</i>: <i>Parla con me</i>) e forme <b>atone</b> (<i>mi, ti, lo, la, gli, le, ci, vi, li, ne, si</i>: <i>Mi chiama</i>).</p>'
      ] },
      [
        '<p>⚠️ <b>gli</b> = to him, <b>le</b> = to her: <i>Ho visto Marco e <b>gli</b> ho dato il libro. Ho visto Sara e <b>le</b> ho dato il libro.</i> Saying <s>gli</s> for a woman is a common mistake.</p>',
        '<p>⚠️ <b>gli</b> = a lui, <b>le</b> = a lei: <i>Ho visto Marco e <b>gli</b> ho dato il libro. Ho visto Sara e <b>le</b> ho dato il libro.</i> Usare <s>gli</s> per una donna è un errore frequente.</p>'
      ],
      [
        '<p>👫 <b>Pronouns in pairs</b>: when two unstressed pronouns meet, mi, ti, ci, vi become <b>me, te, ce, ve</b>: <i>me lo, te la, ce li, ve ne</i>. <i>Gli</i> and <i>le</i> both become <b>glie-</b> joined in one word: <i>glielo, gliela, glieli, gliele, gliene</i>. <i>Ho dato il libro a Sara → <b>Gliel’</b>ho dato.</i></p>',
        '<p>👫 <b>Pronomi in coppia</b>: quando due pronomi atoni si incontrano, mi, ti, ci, vi diventano <b>me, te, ce, ve</b>: <i>me lo, te la, ce li, ve ne</i>. <i>Gli</i> e <i>le</i> diventano entrambi <b>glie-</b> e formano una sola parola: <i>glielo, gliela, glieli, gliele, gliene</i>. <i>Ho dato il libro a Sara → <b>Gliel’</b>ho dato.</i></p>'
      ]
    ],
    quiz: [
      gq('“Ho incontrato la nonna e ___ ho portato i fiori.”', '«Ho incontrato la nonna e ___ ho portato i fiori.»', [w('le'), w('gli'), w('la'), w('lo')], ['For a woman (a lei) we use le.', 'A lei = le.']),
      gq('“Dai il quaderno a Luca?” “Sì, ___ do.”', '«Dai il quaderno a Luca?» «Sì, ___ do.»', [w('glielo'), w('gli lo'), w('lo gli'), w('le lo')], ['Gli + lo → glielo (one word).', 'Gli + lo → glielo (una sola parola).']),
      gq('“Mi presti la penna?” “Sì, ___ presto.”', '«Mi presti la penna?» «Sì, ___ presto.»', [w('te la'), w('ti la'), w('la te'), w('te le')], ['In a pair, ti becomes te: ti + la → te la.', 'Ti + la → te la.']),
      gq('Which is a stressed object pronoun?', 'Quale è un pronome complemento tonico?', [w('me'), w('mi'), w('lo'), w('ne')], ['Stressed forms: me, te, lui, lei, sé, noi, voi, loro.', 'Forme toniche: me, te, lui, lei, sé, noi, voi, loro.'])
    ],
    codex: [['Pronouns in pairs', 'Pronomi in coppia', 'Two unstressed pronouns together: me lo, te la, glielo, gliene.', 'Due pronomi atoni insieme: me lo, te la, glielo, gliene.']]
  },
  {
    id: 'itg5-pronomi-relativi', sec: 'G4.6', pages: '62–63', hue: 95,
    title: ['Relative Pronouns', 'I pronomi relativi'],
    topic: ['Che, il quale, cui, chi: joining two sentences', 'Che, il quale, cui, chi: unire due frasi'],
    demon: ['The Link Breaker', 'lo Spezza-Legami'],
    tech: ['Word-Kind Form · Ninth Technique: Sentence Bridge', 'Stile delle Parti del Discorso · Nona Tecnica: Ponte tra Frasi'],
    lessons: [
      [
        '<p>🌉 A <b>relative pronoun</b> replaces a noun mentioned before (the antecedent) and <b>joins two sentences</b>: <i>Ho letto un libro. Il libro è bellissimo. → Il libro <b>che</b> ho letto è bellissimo.</i></p>',
        '<p>🌉 Il <b>pronome relativo</b> sostituisce un nome già nominato (l’antecedente) e <b>unisce due frasi</b>: <i>Ho letto un libro. Il libro è bellissimo. → Il libro <b>che</b> ho letto è bellissimo.</i></p>'
      ],
      [
        '<p>🔗 <b>che</b> is invariable and is used as subject or direct object; <b>il quale, la quale, i quali, le quali</b> can replace it; <b>cui</b> is used after a preposition: <i>la casa <b>in cui</b> abito, l’amico <b>a cui</b> scrivo, il film <b>di cui</b> parlo</i>. <b>chi</b> means “the person who”: <i>Chi studia impara.</i></p>',
        '<p>🔗 <b>che</b> è invariabile e si usa come soggetto o complemento oggetto; <b>il quale, la quale, i quali, le quali</b> possono sostituirlo; <b>cui</b> si usa dopo una preposizione: <i>la casa <b>in cui</b> abito, l’amico <b>a cui</b> scrivo, il film <b>di cui</b> parlo</i>. <b>chi</b> significa «colui che»: <i>Chi studia impara.</i></p>'
      ]
    ],
    quiz: [
      gq('“Il paese ___ sono nato è piccolo.”', '«Il paese ___ sono nato è piccolo.»', [w('in cui'), w('che'), w('cui'), w('il quale')], ['After a preposition we use cui: in cui.', 'Dopo una preposizione si usa cui: in cui.']),
      gq('“La ragazza ___ canta è mia sorella.”', '«La ragazza ___ canta è mia sorella.»', [w('che'), w('cui'), w('di cui'), w('chi')], ['Che as subject of “canta”.', 'Che come soggetto di «canta».']),
      gq('In “Chi rompe paga”, “chi” means…', 'In «Chi rompe paga», «chi» significa…', [w('colui che'), w('perché'), w('quando'), w('dove')], ['Chi = the person who.', 'Chi = colui che.']),
      gq('Which word can replace “che” in “Il ragazzo che corre è mio cugino”?', 'Quale parola può sostituire «che» in «Il ragazzo che corre è mio cugino»?', [w('il quale'), w('cui'), w('chi'), w('dove')], ['“Il ragazzo il quale corre”: il quale agrees with ragazzo (masculine singular).', '«Il ragazzo il quale corre»: il quale concorda con ragazzo (maschile singolare).'])
    ],
    codex: [['Relative pronoun', 'Pronome relativo', 'A pronoun that joins two sentences and replaces a noun already mentioned: che, il quale, cui, chi.', 'Pronome che unisce due frasi e sostituisce un nome già detto: che, il quale, cui, chi.']]
  },
  {
    id: 'itg5-aggettivi-pronomi-verifica', sec: 'G4.7', pages: '64–71', hue: 110,
    title: ['Check-Up: Adjectives and Pronouns', 'Verifico: aggettivi e pronomi'],
    topic: ['Strategies for grammatical analysis, summary map, Invalsi-style questions', 'Strategie per l’analisi grammaticale, mappa, verso l’Invalsi'],
    demon: ['The Guardian of Adjectives', 'il Guardiano degli Aggettivi'],
    tech: ['Word-Kind Form · Mastery Seal: Pronoun Master', 'Stile delle Parti del Discorso · Sigillo di Maestria: Maestro dei Pronomi'],
    lessons: [
      [
        '<p>🗺️ <b>Summary</b>: qualifying adjectives and degrees; organic forms (migliore, ottimo); possessive, demonstrative, indefinite, numeral, exclamative and interrogative words — <b>adjective</b> if it accompanies a noun, <b>pronoun</b> if it replaces it; personal pronouns (gli/le), pairs (glielo) and relatives (che, cui).</p>',
        '<p>🗺️ <b>Riepilogo</b>: aggettivi qualificativi e gradi; forme organiche (migliore, ottimo); possessivi, dimostrativi, indefiniti, numerali, esclamativi e interrogativi — <b>aggettivo</b> se accompagna il nome, <b>pronome</b> se lo sostituisce; pronomi personali (gli/le), in coppia (glielo) e relativi (che, cui).</p>'
      ],
      [
        '<p>🏁 <b>Towards Invalsi</b>: one word can play different roles. In <i>un <b>lungo</b> pomeriggio</i> “lungo” is an adjective; in <i>camminare <b>lungo</b> il fiume</i> it is a preposition. Always look at what the word does in <b>that</b> sentence.</p>',
        '<p>🏁 <b>Verso l’Invalsi</b>: la stessa parola può avere funzioni diverse. In <i>un <b>lungo</b> pomeriggio</i> «lungo» è un aggettivo; in <i>camminare <b>lungo</b> il fiume</i> è una preposizione. Guarda sempre che cosa fa la parola in <b>quella</b> frase.</p>'
      ]
    ],
    quiz: [
      gq('In which sentence is “lungo” an adjective?', 'In quale frase «lungo» è un aggettivo?', [w('Ho trascorso un lungo pomeriggio di gioco.'), w('Passeggiamo lungo il fiume.'), w('Gli alberi crescono lungo la strada.'), w('Corremmo lungo la spiaggia.')], ['It describes the noun “pomeriggio”.', 'Descrive il nome «pomeriggio».']),
      gq('“Nessuno è venuto.” What is “nessuno”?', '«Nessuno è venuto.» Che cos’è «nessuno»?', [w('pronome indefinito'), w('aggettivo indefinito'), w('pronome personale'), w('avverbio')], ['It replaces a noun (no person).', 'Sostituisce un nome (nessuna persona).']),
      gq('Which sentence is correct?', 'Quale frase è corretta?', [w('Questa torta è ottima.'), w('Questa torta è più ottima.'), w('Questa torta è ottimissima.'), w('Questa torta è la più ottima.')], ['Ottimo is already a superlative.', 'Ottimo è già un superlativo.']),
      gq('“Ecco il quaderno di cui ti parlavo.” What is “cui”?', '«Ecco il quaderno di cui ti parlavo.» Che cos’è «cui»?', [w('pronome relativo'), w('pronome personale'), w('congiunzione'), w('articolo')], ['It refers back to “quaderno” after the preposition di.', 'Si riferisce a «quaderno» dopo la preposizione di.'])
    ],
    codex: []
  }
], morphTaunt);

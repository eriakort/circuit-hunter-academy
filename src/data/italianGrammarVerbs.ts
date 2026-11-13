import { buildGrammarMissions, gq, w, type Pair } from './italianGrammarCommon';

const verbTaunt = (demon: Pair): Pair => [
  `<p>⏳ I am ${demon[0]}! I scramble moods and tenses and steal auxiliaries. Can you conjugate your way through time?</p>`,
  `<p>⏳ Sono ${demon[1]}! Mescolo modi e tempi e rubo gli ausiliari. Sai coniugare i verbi attraverso il tempo?</p>`
];
const invariableTaunt = (demon: Pair): Pair => [
  `<p>🔗 I am ${demon[0]}! I hide prepositions, cut conjunctions and move adverbs. Can you spot the words that never change?</p>`,
  `<p>🔗 Sono ${demon[1]}! Nascondo preposizioni, taglio congiunzioni e sposto avverbi. Sai riconoscere le parole che non cambiano mai?</p>`
];

/** Il verbo · pages 72–105 */
export const VERBS = buildGrammarMissions([
  {
    id: 'itg5-verbi-essere-avere', sec: 'G5.1', pages: '72–73', hue: 200,
    title: ['Verbs; Essere and Avere', 'I verbi; essere e avere'],
    topic: ['Root and ending, the three conjugations, person and number; essere and avere as main verbs and auxiliaries', 'Radice e desinenza, le tre coniugazioni, persona e numero; essere e avere come verbi propri e ausiliari'],
    demon: ['The Ending Eater', 'il Mangia-Desinenze'],
    tech: ['Verb Form · First Technique: Root and Ending', 'Stile del Verbo · Prima Tecnica: Radice e Desinenza'],
    lessons: [
      [
        '<p>🏃 The <b>verb</b> expresses an action, a state or a way of being. It has a <b>root</b> (the part that carries the meaning) and an <b>ending</b> (desinenza) that tells person, number, mood and tense: <i>cant-iamo</i>. By the infinitive ending there are <b>three conjugations</b>: 1st <b>-are</b> (amare), 2nd <b>-ere</b> (credere), 3rd <b>-ire</b> (dormire).</p>',
        '<p>🏃 Il <b>verbo</b> esprime un’azione, uno stato o un modo di essere. È formato da una <b>radice</b> (che porta il significato) e da una <b>desinenza</b> che indica persona, numero, modo e tempo: <i>cant-iamo</i>. In base alla desinenza dell’infinito ci sono <b>tre coniugazioni</b>: 1ª <b>-are</b> (amare), 2ª <b>-ere</b> (credere), 3ª <b>-ire</b> (dormire).</p>'
      ],
      [
        '<p>👥 <b>Person and number</b>: 1st, 2nd, 3rd person, singular (io, tu, egli) and plural (noi, voi, essi).</p><p>🔑 <b>Essere</b> and <b>avere</b> have their own conjugation. They are <b>main verbs</b> when they have their own meaning (<i>Sono a casa. Ho un gatto.</i>) and <b>auxiliaries</b> when they help form compound tenses (<i>Sono partito. Ho mangiato.</i>).</p>',
        '<p>👥 <b>Persona e numero</b>: 1ª, 2ª, 3ª persona, singolare (io, tu, egli) e plurale (noi, voi, essi).</p><p>🔑 <b>Essere</b> e <b>avere</b> hanno una coniugazione propria. Sono <b>verbi propri</b> quando hanno un significato autonomo (<i>Sono a casa. Ho un gatto.</i>) e <b>ausiliari</b> quando aiutano a formare i tempi composti (<i>Sono partito. Ho mangiato.</i>).</p>'
      ]
    ],
    quiz: [
      gq('Which conjugation does “temere” belong to?', 'A quale coniugazione appartiene «temere»?', [w('seconda (-ere)'), w('prima (-are)'), w('terza (-ire)'), w('coniugazione propria')], ['The infinitive ends in -ere.', 'L’infinito termina in -ere.']),
      gq('In “Ho finito i compiti”, “ho” is…', 'In «Ho finito i compiti», «ho» è…', [w('ausiliare'), w('verbo proprio'), w('verbo servile'), w('verbo impersonale')], ['It helps form the passato prossimo of finire.', 'Aiuta a formare il passato prossimo di finire.']),
      gq('In “Ho una bicicletta”, “ho” is…', 'In «Ho una bicicletta», «ho» è…', [w('verbo proprio (possedere)'), w('ausiliare'), w('verbo servile'), w('verbo riflessivo')], ['Here avere means “to own”.', 'Qui avere significa «possedere».']),
      gq('In “partivamo”, which part is the ending?', 'In «partivamo», qual è la desinenza?', [w('-ivamo'), w('part-'), w('-mo'), w('parti-')], ['Root part-, ending -ivamo.', 'Radice part-, desinenza -ivamo.'])
    ],
    codex: [['Auxiliary verb', 'Verbo ausiliare', 'Essere or avere used to form compound tenses: ho mangiato, sono partito.', 'Essere o avere usati per formare i tempi composti: ho mangiato, sono partito.']]
  },
  {
    id: 'itg5-indicativo', sec: 'G5.2', pages: '74–77', hue: 215,
    title: ['The Indicative Mood: Simple and Compound Tenses on the Timeline', 'Il modo indicativo: tempi semplici e composti sulla linea del tempo'],
    topic: ['The eight tenses of the indicative and their position in time', 'Gli otto tempi dell’indicativo e la loro posizione nel tempo'],
    demon: ['The Timeline Twister', 'il Torci-Tempo'],
    tech: ['Verb Form · Second Technique: Time Walker', 'Stile del Verbo · Seconda Tecnica: Viaggiatore del Tempo'],
    lessons: [
      { vis: 'itg5-indicative-timeline', text: [
        '<p>📏 The <b>indicative</b> expresses facts that are <b>certain and real</b>. It has <b>8 tenses</b>: 4 <b>simple</b> (one word) and 4 <b>compound</b> (auxiliary + past participle). Each simple tense has a compound partner that happened <b>before</b> it.</p>',
        '<p>📏 L’<b>indicativo</b> esprime fatti <b>certi e reali</b>. Ha <b>8 tempi</b>: 4 <b>semplici</b> (una sola parola) e 4 <b>composti</b> (ausiliare + participio passato). Ogni tempo semplice ha un tempo composto «compagno» che indica un’azione avvenuta <b>prima</b>.</p>'
      ] },
      [
        '<p>🕰️ Simple → compound:</p><ul><li><b>presente</b> io canto → <b>passato prossimo</b> io ho cantato</li><li><b>imperfetto</b> io cantavo → <b>trapassato prossimo</b> io avevo cantato</li><li><b>passato remoto</b> io cantai → <b>trapassato remoto</b> io ebbi cantato</li><li><b>futuro semplice</b> io canterò → <b>futuro anteriore</b> io avrò cantato</li></ul>',
        '<p>🕰️ Semplice → composto:</p><ul><li><b>presente</b> io canto → <b>passato prossimo</b> io ho cantato</li><li><b>imperfetto</b> io cantavo → <b>trapassato prossimo</b> io avevo cantato</li><li><b>passato remoto</b> io cantai → <b>trapassato remoto</b> io ebbi cantato</li><li><b>futuro semplice</b> io canterò → <b>futuro anteriore</b> io avrò cantato</li></ul>'
      ],
      [
        '<p>🎬 Using the past tenses: the <b>passato prossimo</b> tells recent facts or facts still linked to the present (<i>Stamattina ho letto</i>); the <b>passato remoto</b> tells facts far in the past and finished (<i>Garibaldi partì nel 1860</i>); the <b>imperfetto</b> describes habits, settings and actions in progress (<i>Da piccolo giocavo sempre</i>).</p>',
        '<p>🎬 Uso dei passati: il <b>passato prossimo</b> racconta fatti recenti o ancora legati al presente (<i>Stamattina ho letto</i>); il <b>passato remoto</b> fatti lontani e conclusi (<i>Garibaldi partì nel 1860</i>); l’<b>imperfetto</b> descrive abitudini, ambienti e azioni in corso (<i>Da piccolo giocavo sempre</i>).</p>'
      ]
    ],
    quiz: [
      gq('“Noi avevamo mangiato.” Which tense?', '«Noi avevamo mangiato.» Quale tempo?', [w('trapassato prossimo'), w('passato prossimo'), w('imperfetto'), w('trapassato remoto')], ['Imperfect of avere + past participle.', 'Imperfetto di avere + participio passato.']),
      gq('“Essi partirono.” Which tense?', '«Essi partirono.» Quale tempo?', [w('passato remoto'), w('imperfetto'), w('passato prossimo'), w('futuro semplice')], ['-irono is the ending of the passato remoto.', '-irono è la desinenza del passato remoto.']),
      gq('Which tense is compound?', 'Quale tempo è composto?', [w('futuro anteriore'), w('futuro semplice'), w('imperfetto'), w('passato remoto')], ['Avrò cantato: auxiliary + participle.', 'Avrò cantato: ausiliare + participio.']),
      gq('“Da piccola andavo al mare ogni estate.” Why the imperfetto?', '«Da piccola andavo al mare ogni estate.» Perché l’imperfetto?', [w('indica un’abitudine nel passato'), w('indica un fatto futuro'), w('indica un ordine'), w('indica un desiderio')], ['The imperfetto expresses habits in the past.', 'L’imperfetto esprime abitudini nel passato.'])
    ],
    codex: [['Compound tense', 'Tempo composto', 'A tense formed by the auxiliary essere or avere + past participle: ho cantato, avevo cantato.', 'Tempo formato da ausiliare essere o avere + participio passato: ho cantato, avevo cantato.']]
  },
  {
    id: 'itg5-congiuntivo-condizionale-imperativo', sec: 'G5.3', pages: '78–81', hue: 230,
    title: ['Subjunctive, Conditional and Imperative', 'Il congiuntivo, il condizionale e l’imperativo'],
    topic: ['Moods for doubts and wishes, conditions and polite requests, and orders', 'I modi del dubbio e del desiderio, della condizione e della cortesia, del comando'],
    demon: ['The Maybe Monster', 'il Mostro del Forse'],
    tech: ['Verb Form · Third Technique: Mood Shift', 'Stile del Verbo · Terza Tecnica: Cambio di Modo'],
    lessons: [
      [
        '<p>🤔 The <b>subjunctive</b> (congiuntivo) expresses <b>doubt, wishes, opinions, possibility</b>. It is often introduced by <i>che</i>: <i>Penso <b>che</b> tu <b>abbia</b> ragione. Spero <b>che</b> domani <b>faccia</b> bel tempo.</i> Tenses: presente (che io ami), passato (che io abbia amato), imperfetto (che io amassi), trapassato (che io avessi amato).</p>',
        '<p>🤔 Il <b>congiuntivo</b> esprime <b>dubbio, desiderio, opinione, possibilità</b>. È spesso introdotto da <i>che</i>: <i>Penso <b>che</b> tu <b>abbia</b> ragione. Spero <b>che</b> domani <b>faccia</b> bel tempo.</i> Tempi: presente (che io ami), passato (che io abbia amato), imperfetto (che io amassi), trapassato (che io avessi amato).</p>'
      ],
      [
        '<p>🌤️ The <b>conditional</b> expresses an action that depends on a <b>condition</b>, a wish, or a <b>polite request</b>: <i>Se avessi tempo, <b>leggerei</b> di più. <b>Vorrei</b> un bicchiere d’acqua.</i> Tenses: presente (amerei) and passato (avrei amato). Remember: <i>se io <b>fossi</b></i>, never <s>se io sarei</s>!</p>',
        '<p>🌤️ Il <b>condizionale</b> esprime un’azione che dipende da una <b>condizione</b>, un desiderio o una <b>richiesta gentile</b>: <i>Se avessi tempo, <b>leggerei</b> di più. <b>Vorrei</b> un bicchiere d’acqua.</i> Tempi: presente (amerei) e passato (avrei amato). Ricorda: <i>se io <b>fossi</b></i>, mai <s>se io sarei</s>!</p>'
      ],
      [
        '<p>📢 The <b>imperative</b> gives <b>orders, advice, invitations</b>. It has only the presente, mainly for tu and voi: <i>Ama! Amate! Credi! Dormite!</i> The negative with tu uses <b>non + infinitive</b>: <i>Non correre!</i></p>',
        '<p>📢 L’<b>imperativo</b> esprime <b>ordini, consigli, inviti</b>. Ha solo il presente, soprattutto per tu e voi: <i>Ama! Amate! Credi! Dormite!</i> Il negativo con il tu si forma con <b>non + infinito</b>: <i>Non correre!</i></p>'
      ]
    ],
    quiz: [
      gq('Complete: “Se io ___ ricco, comprerei una barca.”', 'Completa: «Se io ___ ricco, comprerei una barca.»', [w('fossi'), w('sarei'), w('ero'), w('sia')], ['After “se” in a hypothesis we use the imperfect subjunctive.', 'Dopo «se» nell’ipotesi si usa il congiuntivo imperfetto.']),
      gq('“Vorrei un gelato.” Which mood?', '«Vorrei un gelato.» Quale modo?', [w('condizionale'), w('congiuntivo'), w('indicativo'), w('imperativo')], ['Polite request: conditional present.', 'Richiesta gentile: condizionale presente.']),
      gq('Which is the negative imperative for “tu”?', 'Qual è l’imperativo negativo per «tu»?', [w('Non correre!'), w('Non corri!'), w('Non corra!'), w('Non correte tu!')], ['Non + infinitive.', 'Non + infinito.']),
      gq('“Credo che Luca ___ in ritardo.”', '«Credo che Luca ___ in ritardo.»', [w('sia'), w('è'), w('siano'), w('essere')], ['An opinion with “credo che” takes the subjunctive.', 'Un’opinione con «credo che» vuole il congiuntivo.'])
    ],
    codex: [['Subjunctive (congiuntivo)', 'Congiuntivo', 'The mood of doubt, wishes and opinions, often after “che”: penso che sia vero.', 'Il modo del dubbio, del desiderio e dell’opinione, spesso dopo «che»: penso che sia vero.']]
  },
  {
    id: 'itg5-modi-indefiniti', sec: 'G5.4', pages: '82–85', hue: 245,
    title: ['Infinitive, Participle and Gerund', 'Il modo infinito, participio e gerundio'],
    topic: ['The non-finite moods and their present and past forms', 'I modi indefiniti con le forme presente e passato'],
    demon: ['The Personless Phantom', 'il Fantasma Senza Persona'],
    tech: ['Verb Form · Fourth Technique: Timeless Form', 'Stile del Verbo · Quarta Tecnica: Forma Senza Tempo'],
    lessons: [
      [
        '<p>🧩 The <b>finite moods</b> (indicative, subjunctive, conditional, imperative) change with the person. The <b>non-finite moods</b> (modi indefiniti) do <b>not</b> indicate the person: <b>infinito</b>, <b>participio</b>, <b>gerundio</b>.</p>',
        '<p>🧩 I <b>modi finiti</b> (indicativo, congiuntivo, condizionale, imperativo) cambiano secondo la persona. I <b>modi indefiniti</b> <b>non</b> indicano la persona: <b>infinito</b>, <b>participio</b>, <b>gerundio</b>.</p>'
      ],
      [
        '<p>📋 Forms of <i>amare</i>:</p><ul><li><b>infinito</b>: presente <i>amare</i>, passato <i>avere amato</i></li><li><b>participio</b>: presente <i>amante</i>, passato <i>amato</i></li><li><b>gerundio</b>: presente <i>amando</i>, passato <i>avendo amato</i></li></ul><p>The infinitive can work like a noun: <i>Il <b>leggere</b> mi rilassa.</i> The gerund shows how or while: <i>Imparo <b>leggendo</b>.</i></p>',
        '<p>📋 Forme di <i>amare</i>:</p><ul><li><b>infinito</b>: presente <i>amare</i>, passato <i>avere amato</i></li><li><b>participio</b>: presente <i>amante</i>, passato <i>amato</i></li><li><b>gerundio</b>: presente <i>amando</i>, passato <i>avendo amato</i></li></ul><p>L’infinito può avere valore di nome: <i>Il <b>leggere</b> mi rilassa.</i> Il gerundio indica il modo o la contemporaneità: <i>Imparo <b>leggendo</b>.</i></p>'
      ]
    ],
    quiz: [
      gq('“Uscendo, ho incontrato Paolo.” Which mood is “uscendo”?', '«Uscendo, ho incontrato Paolo.» Di quale modo è «uscendo»?', [w('gerundio'), w('participio'), w('infinito'), w('indicativo')], ['-ando/-endo are gerund endings.', '-ando/-endo sono desinenze del gerundio.']),
      gq('What is the past participle of “credere”?', 'Qual è il participio passato di «credere»?', [w('creduto'), w('credente'), w('credendo'), w('avere creduto')], ['-ere verbs: -uto.', 'Verbi in -ere: -uto.']),
      gq('Which is the past infinitive of “dormire”?', 'Qual è l’infinito passato di «dormire»?', [w('avere dormito'), w('dormito'), w('avendo dormito'), w('dormente')], ['Auxiliary infinitive + past participle.', 'Infinito dell’ausiliare + participio passato.']),
      gq('Which mood does NOT indicate the person?', 'Quale modo NON indica la persona?', [w('il participio'), w('l’indicativo'), w('il congiuntivo'), w('il condizionale')], ['Infinitive, participle and gerund are non-finite.', 'Infinito, participio e gerundio sono modi indefiniti.'])
    ],
    codex: [['Non-finite moods', 'Modi indefiniti', 'Infinitive, participle and gerund: verb forms that do not show the person.', 'Infinito, participio e gerundio: forme del verbo che non indicano la persona.']]
  },
  {
    id: 'itg5-transitivi-passiva', sec: 'G5.5', pages: '94–97', hue: 260,
    title: ['Transitive and Intransitive Verbs; Active and Passive Voice', 'Verbi transitivi e intransitivi; forma attiva e passiva'],
    topic: ['Direct objects, auxiliaries, turning an active sentence into a passive one', 'Il complemento oggetto, gli ausiliari, trasformare una frase attiva in passiva'],
    demon: ['The Voice Thief', 'il Ladro di Forme'],
    tech: ['Verb Form · Fifth Technique: Turnaround', 'Stile del Verbo · Quinta Tecnica: Capovolgimento'],
    lessons: [
      [
        '<p>➡️ A verb is <b>transitive</b> when the action passes onto a <b>direct object</b> (answers “whom? what?”): <i>Luca <b>mangia</b> una mela.</i> It is <b>intransitive</b> when it cannot have a direct object: <i>Luca <b>corre</b>. Il bambino <b>dorme</b>.</i> Transitive verbs use <b>avere</b> in compound tenses; many intransitive verbs use <b>essere</b> (<i>sono andato</i>), some <b>avere</b> (<i>ho dormito</i>).</p>',
        '<p>➡️ Un verbo è <b>transitivo</b> quando l’azione passa su un <b>complemento oggetto</b> (risponde a «chi? che cosa?»): <i>Luca <b>mangia</b> una mela.</i> È <b>intransitivo</b> quando non può avere il complemento oggetto: <i>Luca <b>corre</b>. Il bambino <b>dorme</b>.</i> I transitivi usano <b>avere</b> nei tempi composti; molti intransitivi usano <b>essere</b> (<i>sono andato</i>), alcuni <b>avere</b> (<i>ho dormito</i>).</p>'
      ],
      [
        '<p>🔄 <b>Active voice</b>: the subject does the action (<i>Il gatto <b>insegue</b> il topo</i>). <b>Passive voice</b>: the subject receives the action (<i>Il topo <b>è inseguito</b> dal gatto</i>). Only <b>transitive</b> verbs can become passive.</p>',
        '<p>🔄 <b>Forma attiva</b>: il soggetto compie l’azione (<i>Il gatto <b>insegue</b> il topo</i>). <b>Forma passiva</b>: il soggetto subisce l’azione (<i>Il topo <b>è inseguito</b> dal gatto</i>). Solo i verbi <b>transitivi</b> possono diventare passivi.</p>'
      ],
      [
        '<p>🛠️ How to transform: the object becomes the subject; the verb becomes <b>essere</b> (in the same tense) + past participle; the old subject becomes the <b>agent</b> introduced by <b>da</b>. <i>Marta ha scritto la lettera → La lettera <b>è stata scritta</b> da Marta.</i></p>',
        '<p>🛠️ Come trasformare: il complemento oggetto diventa soggetto; il verbo diventa <b>essere</b> (allo stesso tempo) + participio passato; il vecchio soggetto diventa <b>complemento d’agente</b> introdotto da <b>da</b>. <i>Marta ha scritto la lettera → La lettera <b>è stata scritta</b> da Marta.</i></p>'
      ]
    ],
    quiz: [
      gq('Which verb is intransitive?', 'Quale verbo è intransitivo?', [w('arrivare'), w('mangiare'), w('leggere'), w('comprare')], ['You cannot “arrive something”.', 'Non si può «arrivare qualcosa».']),
      gq('Turn into passive: “Il cane morde l’osso.”', 'Volgi al passivo: «Il cane morde l’osso.»', [w('L’osso è morso dal cane.'), w('L’osso ha morso il cane.'), w('Il cane è morso dall’osso.'), w('L’osso era mordendo il cane.')], ['Object → subject, essere + participle, agent with “da”.', 'Oggetto → soggetto, essere + participio, agente con «da».']),
      gq('“La torta è stata preparata dalla nonna.” Which voice?', '«La torta è stata preparata dalla nonna.» Quale forma?', [w('passiva'), w('attiva'), w('riflessiva'), w('impersonale')], ['The subject (la torta) receives the action.', 'Il soggetto (la torta) subisce l’azione.']),
      gq('Which auxiliary does “andare” use?', 'Quale ausiliare usa «andare»?', [w('essere'), w('avere'), w('entrambi'), w('nessuno')], ['We say “sono andato”, with essere.', 'Sono andato.'])
    ],
    codex: [['Passive voice', 'Forma passiva', 'The subject receives the action: essere + past participle, agent with “da” (la mela è mangiata da Luca).', 'Il soggetto subisce l’azione: essere + participio passato, agente con «da» (la mela è mangiata da Luca).']]
  },
  {
    id: 'itg5-riflessivi-impersonali-servili', sec: 'G5.6', pages: '98–101', hue: 275,
    title: ['Reflexive, Impersonal, Modal and Irregular Verbs', 'Verbi riflessivi, impersonali, servili e irregolari'],
    topic: ['Mi lavo; piove; posso, devo, voglio; andare, fare, dire…', 'Mi lavo; piove; posso, devo, voglio; andare, fare, dire…'],
    demon: ['The Mirror Wraith', 'lo Spettro dello Specchio'],
    tech: ['Verb Form · Sixth Technique: Mirror and Helpers', 'Stile del Verbo · Sesta Tecnica: Specchio e Aiutanti'],
    lessons: [
      [
        '<p>🪞 In the <b>reflexive form</b> the action falls back on the subject, with the pronouns <i>mi, ti, si, ci, vi, si</i>: <i>Io <b>mi lavo</b></i> (= lavo me stesso). <b>Indirect</b> reflexive: <i>Mi lavo <u>le mani</u></i>. <b>Reciprocal</b>: <i>Anna e Paolo <b>si salutano</b></i>. Reflexive verbs use <b>essere</b>: <i>mi sono lavato</i>.</p>',
        '<p>🪞 Nella <b>forma riflessiva</b> l’azione ricade sul soggetto, con i pronomi <i>mi, ti, si, ci, vi, si</i>: <i>Io <b>mi lavo</b></i> (= lavo me stesso). Riflessiva <b>apparente</b>: <i>Mi lavo <u>le mani</u></i>. <b>Reciproca</b>: <i>Anna e Paolo <b>si salutano</b></i>. I verbi riflessivi usano <b>essere</b>: <i>mi sono lavato</i>.</p>'
      ],
      [
        '<p>🌧️ <b>Impersonal verbs</b> have no subject and are used in the 3rd person singular: weather verbs (<i>piove, nevica, tuona, grandina</i>) and expressions like <i>bisogna, occorre, sembra</i>.</p><p>🤝 <b>Modal verbs</b> (servili) <i>potere, dovere, volere</i> (and <i>sapere</i> = to be able) “serve” an infinitive: <i>Posso uscire? Devo studiare.</i> They usually take the auxiliary of that infinitive: <i>sono dovuto andare, ho dovuto mangiare</i>.</p>',
        '<p>🌧️ I <b>verbi impersonali</b> non hanno soggetto e si usano alla 3ª persona singolare: i verbi atmosferici (<i>piove, nevica, tuona, grandina</i>) ed espressioni come <i>bisogna, occorre, sembra</i>.</p><p>🤝 I <b>verbi servili</b> <i>potere, dovere, volere</i> (e <i>sapere</i> nel senso di «essere capace») «servono» un infinito: <i>Posso uscire? Devo studiare.</i> Di solito prendono l’ausiliare dell’infinito: <i>sono dovuto andare, ho dovuto mangiare</i>.</p>'
      ],
      [
        '<p>🌀 <b>Irregular verbs</b> change their root or do not follow the usual endings: <i>andare → vado, andrò; fare → faccio, feci; dire → dico, dissi; venire → vengo, venni; essere → fui; avere → ebbi; bere → bevo, bevvi</i>. Check them in the verb tables!</p>',
        '<p>🌀 I <b>verbi irregolari</b> cambiano la radice o non seguono le desinenze consuete: <i>andare → vado, andrò; fare → faccio, feci; dire → dico, dissi; venire → vengo, venni; essere → fui; avere → ebbi; bere → bevo, bevvi</i>. Controllali nelle tavole dei verbi!</p>'
      ]
    ],
    quiz: [
      gq('“Paolo e Giulia si abbracciano.” Which reflexive form?', '«Paolo e Giulia si abbracciano.» Quale forma riflessiva?', [w('reciproca'), w('propria'), w('apparente'), w('passiva')], ['Each one hugs the other.', 'Ciascuno abbraccia l’altro.']),
      gq('Which verb is impersonal?', 'Quale verbo è impersonale?', [w('nevica'), w('corre'), w('legge'), w('scrive')], ['Weather verbs have no subject.', 'I verbi atmosferici non hanno soggetto.']),
      gq('In “Voglio imparare a nuotare”, “voglio” is…', 'In «Voglio imparare a nuotare», «voglio» è…', [w('un verbo servile'), w('un verbo impersonale'), w('un ausiliare'), w('un verbo riflessivo')], ['Volere + infinitive.', 'Volere + infinito.']),
      gq('What is the passato remoto of “fare” (egli)?', 'Qual è il passato remoto di «fare» (egli)?', [w('fece'), w('fò'), w('facé'), w('faceva')], ['Fare is irregular: io feci, egli fece.', 'Fare è irregolare: io feci, egli fece.'])
    ],
    codex: [['Modal verb', 'Verbo servile', 'Potere, dovere, volere (and sapere) followed by an infinitive: devo studiare.', 'Potere, dovere, volere (e sapere) seguiti da un infinito: devo studiare.']]
  },
  {
    id: 'itg5-verbi-verifica', sec: 'G5.7', pages: '86–93, 102–105', hue: 290,
    title: ['Check-Up: Verbs', 'Verifico: i verbi'],
    topic: ['My exercises, strategies for grammatical analysis, maps, Invalsi-style questions and verbs in a text', 'I miei esercizi, strategie per l’analisi grammaticale, mappe, verso l’Invalsi e i verbi nel testo'],
    demon: ['The Guardian of Verbs', 'il Guardiano dei Verbi'],
    tech: ['Verb Form · Mastery Seal: Verb Master', 'Stile del Verbo · Sigillo di Maestria: Maestro dei Verbi'],
    lessons: [
      [
        '<p>🔬 Grammatical analysis of a verb: <i>verb, infinitive, conjugation, mood, tense, person, number</i> (and, when useful, transitive/intransitive and active/passive/reflexive form). Example: <b>avevamo letto</b> → verbo leggere, 2ª coniugazione, modo indicativo, tempo trapassato prossimo, 1ª persona plurale.</p>',
        '<p>🔬 Analisi grammaticale del verbo: <i>verbo, infinito, coniugazione, modo, tempo, persona, numero</i> (e, quando serve, transitivo/intransitivo e forma attiva/passiva/riflessiva). Esempio: <b>avevamo letto</b> → verbo leggere, 2ª coniugazione, modo indicativo, tempo trapassato prossimo, 1ª persona plurale.</p>'
      ],
      [
        '<p>🏁 <b>Towards Invalsi</b>: questions may ask you to name the tenses in a passage (<i>passato remoto, presente, imperfetto…</i>) or to decide whether a word is used as a verb (<i>il <b>mangiare</b></i> is a noun, <i>vuole <b>mangiare</b></i> is a verb). Look at what the word does in the sentence.</p>',
        '<p>🏁 <b>Verso l’Invalsi</b>: le domande possono chiedere di riconoscere i tempi in un brano (<i>passato remoto, presente, imperfetto…</i>) o di stabilire se una parola è usata come verbo (<i>il <b>mangiare</b></i> è un nome, <i>vuole <b>mangiare</b></i> è un verbo). Osserva che cosa fa la parola nella frase.</p>'
      ]
    ],
    quiz: [
      gq('Analyse “sarete partiti”.', 'Analizza «sarete partiti».', [w('partire, 3ª coniug., indicativo futuro anteriore, 2ª pers. plurale'), w('partire, 3ª coniug., condizionale passato, 2ª pers. plurale'), w('partire, 2ª coniug., indicativo futuro semplice, 3ª pers. plurale'), w('essere, coniug. propria, indicativo futuro semplice, 2ª pers. plurale')], ['Future of essere + participle = futuro anteriore; voi.', 'Futuro di essere + participio = futuro anteriore; voi.']),
      gq('In which sentence is “ridere” used as a noun?', 'In quale frase «ridere» è usato come nome?', [w('Il ridere fa bene alla salute.'), w('Voglio ridere con te.'), w('Smetti di ridere!'), w('Posso ridere?')], ['With the article “il” the infinitive works as a noun.', 'Con l’articolo «il» l’infinito ha valore di nome.']),
      gq('“Che tu amassi”: which mood and tense?', '«Che tu amassi»: quale modo e tempo?', [w('congiuntivo imperfetto'), w('indicativo imperfetto'), w('congiuntivo presente'), w('condizionale presente')], ['It is the imperfect subjunctive: che io amassi, che tu amassi…', 'Congiuntivo imperfetto: che io amassi, che tu amassi…']),
      gq('“Essi avrebbero creduto”: which mood and tense?', '«Essi avrebbero creduto»: quale modo e tempo?', [w('condizionale passato'), w('indicativo futuro anteriore'), w('congiuntivo trapassato'), w('indicativo trapassato prossimo')], ['Conditional of avere + participle.', 'Condizionale di avere + participio.'])
    ],
    codex: []
  }
], verbTaunt);

/** Parti invariabili del discorso · pages 106–117 */
export const INVARIABLES = buildGrammarMissions([
  {
    id: 'itg5-avverbi', sec: 'G6.1', pages: '106–107', hue: 140,
    title: ['Adverbs', 'Gli avverbi'],
    topic: ['Adverbs of manner, place, time, quantity, affirmation, negation and doubt', 'Avverbi di modo, luogo, tempo, quantità, affermazione, negazione e dubbio'],
    demon: ['The Wandering Adverb', 'l’Avverbio Errante'],
    tech: ['Link Form · First Technique: How, Where, When', 'Stile dei Legami · Prima Tecnica: Come, Dove, Quando'],
    lessons: [
      [
        '<p>⚡ <b>Adverbs</b> are <b>invariable</b> words that add information to a verb, an adjective or another adverb: <i>Corre <b>velocemente</b>. È <b>molto</b> bello.</i> Types: <b>manner</b> (<i>bene, piano, lentamente</i>), <b>place</b> (<i>qui, lì, sopra, lontano</i>), <b>time</b> (<i>ieri, oggi, sempre, mai</i>), <b>quantity</b> (<i>molto, poco, troppo</i>), <b>affirmation</b> (<i>sì, certo</i>), <b>negation</b> (<i>no, non</i>), <b>doubt</b> (<i>forse, probabilmente</i>).</p>',
        '<p>⚡ Gli <b>avverbi</b> sono parole <b>invariabili</b> che aggiungono informazioni a un verbo, a un aggettivo o a un altro avverbio: <i>Corre <b>velocemente</b>. È <b>molto</b> bello.</i> Tipi: di <b>modo</b> (<i>bene, piano, lentamente</i>), di <b>luogo</b> (<i>qui, lì, sopra, lontano</i>), di <b>tempo</b> (<i>ieri, oggi, sempre, mai</i>), di <b>quantità</b> (<i>molto, poco, troppo</i>), di <b>affermazione</b> (<i>sì, certo</i>), di <b>negazione</b> (<i>no, non</i>), di <b>dubbio</b> (<i>forse, probabilmente</i>).</p>'
      ],
      [
        '<p>🛠️ Many adverbs of manner are formed with <b>-mente</b> added to the feminine adjective: <i>lenta → lentamente, felice → felicemente</i>. Watch out: <i>molto</i> is an adverb in <i>corre molto</i> but an adjective in <i>molti amici</i> (it agrees with the noun).</p>',
        '<p>🛠️ Molti avverbi di modo si formano aggiungendo <b>-mente</b> all’aggettivo femminile: <i>lenta → lentamente, felice → felicemente</i>. Attenzione: <i>molto</i> è avverbio in <i>corre molto</i> ma aggettivo in <i>molti amici</i> (concorda con il nome).</p>'
      ]
    ],
    quiz: [
      gq('“Domani andremo al museo.” What kind of adverb is “domani”?', '«Domani andremo al museo.» Che tipo di avverbio è «domani»?', [w('di tempo'), w('di luogo'), w('di modo'), w('di quantità')], ['It tells when.', 'Indica quando.']),
      gq('In which sentence is “molto” an adverb?', 'In quale frase «molto» è un avverbio?', [w('Ho studiato molto.'), w('Ho molti libri.'), w('C’è molta gente.'), w('Bevo molto latte.')], ['It modifies the verb and does not change.', 'Si riferisce al verbo e non cambia.']),
      gq('Which adverb is formed correctly from “dolce”?', 'Quale avverbio è formato correttamente da «dolce»?', [w('dolcemente'), w('dolcamente'), w('dolciamente'), w('dolcimente')], ['Add -mente to the adjective: dolce + -mente.', 'dolce + -mente.']),
      gq('“Forse pioverà.” What kind of adverb is “forse”?', '«Forse pioverà.» Che tipo di avverbio è «forse»?', [w('di dubbio'), w('di negazione'), w('di affermazione'), w('di tempo')], ['It expresses uncertainty.', 'Esprime incertezza.'])
    ],
    codex: [['Adverb', 'Avverbio', 'An invariable word that modifies a verb, an adjective or another adverb: bene, qui, ieri, molto.', 'Parola invariabile che modifica un verbo, un aggettivo o un altro avverbio: bene, qui, ieri, molto.']]
  },
  {
    id: 'itg5-preposizioni-congiunzioni', sec: 'G6.2', pages: '108–110', hue: 155,
    title: ['Prepositions, Conjunctions and Exclamations', 'Le preposizioni, le congiunzioni e le esclamazioni'],
    topic: ['Simple and articulated prepositions; coordinating and subordinating conjunctions; interjections', 'Preposizioni semplici e articolate; congiunzioni coordinanti e subordinanti; esclamazioni'],
    demon: ['The Bridge Burner', 'il Brucia-Ponti'],
    tech: ['Link Form · Second Technique: Perfect Bridge', 'Stile dei Legami · Seconda Tecnica: Ponte Perfetto'],
    lessons: [
      { vis: 'itg5-prepositions', text: [
        '<p>🔗 <b>Prepositions</b> link words: the <b>simple</b> ones are <i>di, a, da, in, con, su, per, tra, fra</i>. Joined with a definite article they become <b>articulated</b> prepositions: <i>di + il = del, a + la = alla, da + gli = dagli, in + le = nelle, su + lo = sullo</i>.</p>',
        '<p>🔗 Le <b>preposizioni</b> collegano le parole: quelle <b>semplici</b> sono <i>di, a, da, in, con, su, per, tra, fra</i>. Unite all’articolo determinativo diventano <b>articolate</b>: <i>di + il = del, a + la = alla, da + gli = dagli, in + le = nelle, su + lo = sullo</i>.</p>'
      ] },
      [
        '<p>🤝 <b>Conjunctions</b> join words or sentences. <b>Coordinating</b> ones join elements of equal value: <i>e, anche, o, oppure, ma, però, quindi, dunque, infatti</i>. <b>Subordinating</b> ones make one sentence depend on another: <i>perché, quando, se, mentre, sebbene, affinché</i>. Choosing the right one makes a text logical: <i>Sono stanco, <b>quindi</b> resto a casa.</i></p>',
        '<p>🤝 Le <b>congiunzioni</b> uniscono parole o frasi. Le <b>coordinanti</b> uniscono elementi dello stesso valore: <i>e, anche, o, oppure, ma, però, quindi, dunque, infatti</i>. Le <b>subordinanti</b> rendono una frase dipendente da un’altra: <i>perché, quando, se, mentre, sebbene, affinché</i>. La congiunzione giusta rende logico il testo: <i>Sono stanco, <b>quindi</b> resto a casa.</i></p>'
      ],
      [
        '<p>😮 <b>Exclamations</b> (interjections) express emotions: <i>Ah! Oh! Ahi! Uffa! Evviva! Accidenti!</i> They are usually followed by an exclamation mark and are invariable.</p>',
        '<p>😮 Le <b>esclamazioni</b> (interiezioni) esprimono emozioni: <i>Ah! Oh! Ahi! Uffa! Evviva! Accidenti!</i> Di solito sono seguite dal punto esclamativo e sono invariabili.</p>'
      ]
    ],
    quiz: [
      gq('What is “in + i”?', 'Quanto fa «in + i»?', [w('nei'), w('negli'), w('nelli'), w('ini')], ['The preposition in joined with the article i gives nei.', 'in + i = nei.']),
      gq('“Sono stanco ___ dormirò tutto il pomeriggio.”', '«Sono stanco ___ dormirò tutto il pomeriggio.»', [w('quindi'), w('ma'), w('sebbene'), w('oppure')], ['It expresses a consequence.', 'Esprime una conseguenza.']),
      gq('In “Vado a casa perché piove”, “perché” is…', 'In «Vado a casa perché piove», «perché» è…', [w('una congiunzione subordinante'), w('una congiunzione coordinante'), w('una preposizione'), w('un avverbio di luogo')], ['It introduces the cause, a dependent sentence.', 'Introduce la causa, una frase dipendente.']),
      gq('Which word is an exclamation?', 'Quale parola è un’esclamazione?', [w('Uffa!'), w('sopra'), w('perché'), w('dalla')], ['It expresses annoyance.', 'Esprime fastidio.'])
    ],
    codex: [['Articulated preposition', 'Preposizione articolata', 'A simple preposition joined to a definite article: del, alla, dagli, nelle.', 'Preposizione semplice unita all’articolo determinativo: del, alla, dagli, nelle.']]
  },
  {
    id: 'itg5-invariabili-verifica', sec: 'G6.3', pages: '111–117', hue: 170,
    title: ['Check-Up: Invariable Parts of Speech', 'Verifico: le parti invariabili del discorso'],
    topic: ['Strategies, map, “Se provo è facile”, Invalsi-style questions', 'Strategie, mappa, «Se provo è facile», verso l’Invalsi'],
    demon: ['The Guardian of Links', 'il Guardiano dei Legami'],
    tech: ['Link Form · Mastery Seal: Master Linker', 'Stile dei Legami · Sigillo di Maestria: Maestro dei Legami'],
    lessons: [
      [
        '<p>🗺️ <b>Summary</b>: the parts of speech are 9. <b>Variable</b>: noun, article, adjective, pronoun, verb. <b>Invariable</b>: adverb, preposition, conjunction, exclamation. The same word can change category: <i>dopo</i> is an adverb in <i>Ci vediamo dopo</i> and a preposition in <i>dopo cena</i>.</p>',
        '<p>🗺️ <b>Riepilogo</b>: le parti del discorso sono 9. <b>Variabili</b>: nome, articolo, aggettivo, pronome, verbo. <b>Invariabili</b>: avverbio, preposizione, congiunzione, esclamazione. La stessa parola può cambiare categoria: <i>dopo</i> è avverbio in <i>Ci vediamo dopo</i> e preposizione in <i>dopo cena</i>.</p>'
      ]
    ],
    quiz: [
      gq('How many parts of speech are invariable?', 'Quante sono le parti invariabili del discorso?', [w('4'), w('5'), w('9'), w('2')], ['Adverb, preposition, conjunction, exclamation.', 'Avverbio, preposizione, congiunzione, esclamazione.']),
      gq('In “Partiamo dopo cena”, “dopo” is…', 'In «Partiamo dopo cena», «dopo» è…', [w('una preposizione'), w('un avverbio'), w('una congiunzione'), w('un nome')], ['It is followed by a noun (cena).', 'È seguito da un nome (cena).']),
      gq('Which part of speech is variable?', 'Quale parte del discorso è variabile?', [w('il pronome'), w('l’avverbio'), w('la preposizione'), w('la congiunzione')], ['Pronouns change in gender and number.', 'I pronomi cambiano genere e numero.']),
      gq('“Ho studiato, ma non ho capito.” What is “ma”?', '«Ho studiato, ma non ho capito.» Che cos’è «ma»?', [w('congiunzione coordinante avversativa'), w('congiunzione subordinante'), w('preposizione semplice'), w('avverbio di negazione')], ['Ma joins two sentences with opposite meaning.', 'Ma unisce due frasi di significato opposto.'])
    ],
    codex: [['Parts of speech', 'Parti del discorso', 'The nine word categories: five variable (noun, article, adjective, pronoun, verb) and four invariable (adverb, preposition, conjunction, exclamation).', 'Le nove categorie di parole: cinque variabili (nome, articolo, aggettivo, pronome, verbo) e quattro invariabili (avverbio, preposizione, congiunzione, esclamazione).']]
  }
], invariableTaunt);

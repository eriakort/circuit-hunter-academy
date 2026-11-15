import type { ArcInfo, Mission, UnitInfo } from '../types';
import { makeHistGeoMission, q } from './histGeoCommon';

// ============================================================================
// GRADE 5 (5ª Primaria) — Ancient Greece, Italic Peoples & Ancient Rome
// ============================================================================
export const HIST5_UNIT: UnitInfo = {
  title: ['Mediterranean Worlds & Rome', 'Mondi del Mediterraneo e Roma'],
  ch: 'H5.1–H5.4',
  subject: 'hist5'
};

export const HIST5_ARCS: ArcInfo[] = [
  { n: 1, title: ['From Greece to the Roman Empire', 'Dalla Grecia all’Impero Romano'], pages: '1–48' }
];

export const HIST5_MISSIONS: Mission[] = [
  makeHistGeoMission({
    id: 'hist_g5_m1',
    arc: 0,
    sec: 'H5.1',
    pages: '1–12',
    hue: 34,
    title: ['Greek Polis: Athens vs. Sparta', 'La Polis Greca: Atene contro Sparta'],
    topic: ['City-states, democracy, myths & Olympic games', 'Città-stato, democrazia, miti e Olimpiadi'],
    demon: ['Tyrant Golem', 'Golem Tiranno'],
    tech: ['Scroll Form · Agora Vote', 'Stile Pergamena · Voto dell’Agorà'],
    lessons: [
      {
        vis: 'hg5_greek_polis',
        text: [
          '<p><b>Picture this!</b> Ancient Greece was not one country—it was like a league of independent football clubs, each with its own hilltop fort called the [[Acropolis|acropoli]] and busy market square called the [[Agora|agorà]]. These city-states were called [[poleis|poleis]].</p>',
          '<p><b>Immagina la scena!</b> L’antica Grecia non era un solo Stato, ma tante città indipendenti, chiamate [[poleis|poleis]]: ognuna aveva una rocca alta per difendersi (l’[[Acropolis|acropoli]]) e una piazza viva per parlare e fare mercato (l’[[Agora|agorà]]).</p>'
        ]
      },
      {
        vis: 'hg5_athens_sparta',
        text: [
          '<p>Two famous poleis lived totally opposite lives. <b>Athens</b> invented [[democracy|democrazia]] ("power of the people"): citizens debated and voted in the assembly, loved theatre, philosophy, and ships.</p><p><b>Sparta</b> ran like an athletic camp: boys trained for teamwork and bravery from age 7, while two kings and a council of elders led the army.</p>',
          '<p>Due città erano l’opposto una dell’altra. <b>Atene</b> inventò la [[democracy|democrazia]] (governo del popolo): i cittadini discutevano, votavano, amavano il teatro, i libri e le navi.</p><p><b>Sparta</b> sembrava una palestra militare: i ragazzi si allenavano fin da bambini a resistere e proteggere la città insieme.</p>'
        ]
      },
      {
        vis: 'hg5_olympics',
        text: [
          '<p>Even when Greek cities argued, every four years they paused all wars for a sacred truce and met at Olympia for the first [[Olympic Games|Giochi Olimpici]]—racing, throwing the discus, and winning a simple olive wreath!</p>',
          '<p>Anche quando litigavano, ogni quattro anni le città greche fermavano le guerre (tregua sacra) per sfidarsi nelle [[Olympic Games|Olimpiadi]]: corsa, lancio del disco e una corona d’ulivo come premio!</p>'
        ]
      }
    ],
    sort: {
      type: 'sort',
      title: ['Athens or Sparta?', 'Atene o Sparta?'],
      hint: ['Match each daily habit to the right Greek polis.', 'Collega ogni caratteristica alla polis greca giusta.'],
      cats: [['Athens', 'Atene'], ['Sparta', 'Sparta']],
      items: [
        { n: ['Citizens vote in the Agora', 'I cittadini votano nell’Agorà'], i: 'vote', c: 0, why: ['Athens pioneered direct democracy for citizens.', 'Atene sviluppò la democrazia diretta.'] },
        { n: ['Strict military training from age 7', 'Addestramento militare dai 7 anni'], i: 'shield', c: 1, why: ['Spartan education forged disciplined soldiers.', 'L’educazione spartana formava opliti disciplinati.'] },
        { n: ['Philosophy, theatre and navy fleet', 'Filosofia, teatro e flotta navale'], i: 'book', c: 0, why: ['Athens invested in culture and sea trade.', 'Atene puntava su cultura e flotta commerciale.'] },
        { n: ['Ruled by two kings and elders (oligarchy)', 'Due re e consiglio degli anziani'], i: 'crown', c: 1, why: ['Sparta had a strict oligarchic constitution.', 'Sparta aveva un governo oligarchico.'] }
      ]
    },
    taunt: ['<p>Only one loud king should decide everything—no voting allowed!</p>', '<p>Deve decidere un solo re prepotente: niente votazioni in piazza!</p>'],
    quiz: [
      q('What were the two main zones inside a Greek polis?', 'Quali erano le due zone principali di una polis greca?', [
        ['The high Acropolis (fortress/temples) and lower Agora (square)', 'L’alta Acropoli (templi/difesa) e la bassa Agorà (piazza)'],
        ['A pyramid and a desert oasis', 'Una piramide e un’oasi nel deserto'],
        ['A railroad and a harbour factory', 'Una ferrovia e una fabbrica al porto'],
        ['Two underground tunnels', 'Due tunnel sotterranei']
      ], ['Greek cities combined a fortified upper hill and a civic market plaza.', 'Le città greche univano la parte alta fortificata e la piazza centrale.']),
      q('Which Greek city invented direct democracy for its citizens?', 'Quale città greca inventò la democrazia per i suoi cittadini?', [
        ['Athens', 'Atene'],
        ['Sparta', 'Sparta'],
        ['Carthage', 'Cartagine'],
        ['Nineveh', 'Ninive']
      ], ['Athenian citizens voted directly on laws in the Ekklesia assembly.', 'Ad Atene i cittadini votavano le leggi nell’assemblea.']),
      q('Why were the ancient Olympic Games special across Greece?', 'Perché le antiche Olimpiadi erano speciali in tutta la Grecia?', [
        ['Cities declared a sacred truce and paused wars to compete', 'Le città proclamavano la tregua sacra fermando le guerre'],
        ['Only Romans were allowed to run', 'Solo i Romani potevano correre'],
        ['Winners received gold coins from emperors', 'I vincitori ricevevano monete d’oro imperiali'],
        ['They happened every winter on snow', 'Si tenevano ogni inverno sulla neve']
      ], ['The Olympic truce united Greek poleis in peaceful sport every 4 years.', 'La tregua olimpica univa tutte le poleis nello sport ogni 4 anni.']),
      q('What happened to southern Italy (like Naples, Syracuse, and Taranto) during Greek sea voyages?', 'Cosa accadde al Sud Italia (Napoli, Siracusa, Taranto) grazie ai viaggi greci?', [
        ['Greek settlers founded flourishing colonies known as Magna Graecia', 'I Greci fondarono fiorenti colonie chiamate Magna Grecia'],
        ['The Alps froze completely', 'Le Alpi si ghiacciarono del tutto'],
        ['People stopped farming', 'La popolazione smise di coltivare'],
        ['No Greek temples were ever built there', 'Non vi fu mai costruito nessun tempio']
      ], ['Southern Italy and Sicily became Magna Graecia ("Greater Greece").', 'Il Sud Italia e la Sicilia divennero la Magna Grecia.'])
    ]
  }),
  makeHistGeoMission({
    id: 'hist_g5_m2',
    arc: 0,
    sec: 'H5.2',
    pages: '13–22',
    hue: 25,
    title: ['Italic Peoples & The Etruscans', 'Popoli Italici ed Etruschi'],
    topic: ['Ancient Italy before Rome: Etruscan cities, arches & tombs', 'L’Italia antica prima di Roma: città, archi e necropoli'],
    demon: ['Shadow Tomb Keeper', 'Custode delle Ombre'],
    tech: ['Scroll Form · Keystone Arch', 'Stile Pergamena · Arco a Volta'],
    lessons: [
      {
        vis: 'hg5_italic_peoples',
        text: [
          '<p>Long before Rome was famous, Italy was a colourful patchwork of <b>Italic peoples</b>—Liguri in the northwest, Veneti in the northeast, Latins near the Tiber, Samnites in the mountains, and Greeks in the south.</p>',
          '<p>Molto prima di Roma, l’Italia era un mosaico di <b>Popoli Italici</b>: Liguri a nord-ovest, Veneti a nord-est, Latini vicino al Tevere, Sanniti sugli Appennini e Greci a sud.</p>'
        ]
      },
      {
        vis: 'hg5_etruscan_arch',
        text: [
          '<p>Between the Arno and Tiber rivers (modern Tuscany and Umbria) lived the [[Etruscans|Etruschi]]. Think of them as master engineers! They drained marshes and invented the sturdy <b>stone arch</b> with a wedge-shaped top stone (keystone) that could hold up huge bridges and city gates.</p>',
          '<p>Tra i fiumi Arno e Tevere (Toscana e Umbria) vivevano gli [[Etruschi|Etruschi]]: veri maestri dell’ingegneria! Bonificarono paludi e diffusero l’<b>arco in pietra</b> chiuso in cima dalla chiave di volta, capace di reggere ponti e porte enormi.</p>'
        ]
      },
      {
        vis: 'hg5_etruscan_necropolis',
        text: [
          '<p>Etruscan cities like Tarquinia and Cerveteri built bright underground tombs ([[necropolis|necropoli]], "cities of the dead") painted with banquets, dancers, and music—like stone time capsules showing how Etruscan women and men shared feasts equally!</p>',
          '<p>Le città etrusche costruirono vere "città dei morti" ([[necropolis|necropoli]]) con tombe affrescate di banchetti, musica e danze: capsule del tempo che ci raccontano persino quanto fossero libere e rispettate le donne etrusche!</p>'
        ]
      }
    ],
    sort: {
      type: 'sort',
      title: ['Etruscan Heritage or Greek Heritage?', 'Eredità Etrusca o Greca?'],
      hint: ['Sort each innovation to the civilisation famous for spreading it in Italy.', 'Abbina ogni innovazione alla civiltà che la diffuse in Italia.'],
      cats: [['Etruscans', 'Etruschi'], ['Greeks', 'Greci']],
      items: [
        { n: ['Rounded stone arch and drained marshes', 'Arco a tutto sesto e bonifiche'], i: 'arch', c: 0, why: ['Etruscan engineering gave Rome the arch and Cloaca Maxima.', 'Gli Etruschi insegnarono l’arco e le opere idrauliche.'] },
        { n: ['Olympic Games & Agora squares', 'Olimpiadi e piazze dell’Agorà'], i: 'trophy', c: 1, why: ['Greek poleis invented the Olympics and Agora.', 'Le Olimpiadi e l’Agorà nacquero nelle poleis greche.'] },
        { n: ['Painted underground tombs (Necropolis)', 'Tombe dipinte nelle Necropoli'], i: 'museum', c: 0, why: ['Tarquinia and Cerveteri necropolises are UNESCO Etruscan treasures.', 'Le necropoli di Tarquinia e Cerveteri sono capolavori etruschi.'] },
        { n: ['Parthenon-style columns in Magna Graecia', 'Templi con colonne nella Magna Grecia'], i: 'temple', c: 1, why: ['Greek settlers built Paestum and Agrigento temples.', 'I coloni greci costruirono i templi di Paestum e Agrigento.'] }
      ]
    },
    taunt: ['<p>Forget old stones—no bridge built 2500 years ago could ever hold up!</p>', '<p>Sciocchezze! Un arco di pietra di 2500 anni fa crollerebbe subito!</p>'],
    quiz: [
      q('Where in Italy did the Etruscan civilisation mainly flourish?', 'In quale zona d’Italia si sviluppò principalmente la civiltà etrusca?', [
        ['Between the Arno and Tiber rivers (modern Tuscany, Umbria, northern Lazio)', 'Tra i fiumi Arno e Tevere (odierne Toscana, Umbria e alto Lazio)'],
        ['High on the Alps glaciers', 'Sui ghiacciai delle Alpi'],
        ['Only on Sardinia', 'Solo in Sardegna'],
        ['In Sicily only', 'Solo in Sicilia']
      ], ['Etruria stretched from the Arno river down to Rome’s Tiber.', 'L’Etruria si estendeva dall’Arno al Tevere.']),
      q('Which architectural element did the Etruscans master and pass on to Rome?', 'Quale elemento architettonico gli Etruschi perfezionarono e trasmisero a Roma?', [
        ['The stone arch with a central keystone', 'L’arco in pietra con chiave di volta'],
        ['Steel skyscrapers', 'I grattacieli d’acciaio'],
        ['Glass domes only', 'Solo le cupole di vetro'],
        ['Wooden suspension bridges', 'I ponti sospesi di legno']
      ], ['The semicircular arch spreads weight sideways safely.', 'L’arco a tutto sesto scarica il peso sui piedritti laterali.']),
      q('What does the word "necropolis" mean?', 'Cosa significa la parola "necropoli"?', [
        ['City of the dead', 'Città dei morti'],
        ['Mountain fortress', 'Fortezza di montagna'],
        ['Fishing harbour', 'Porto di pescatori'],
        ['Wheat market', 'Mercato del grano']
      ], ['From Greek nekros (dead) + polis (city).', 'Dal greco nekros (morto) + polis (città).']),
      q('What made Etruscan paintings surprising compared to Greece?', 'Cosa sorprende nei dipinti etruschi rispetto alla Grecia?', [
        ['Etruscan women appeared alongside men at banquets and public games', 'Le donne etrusche partecipavano ai banchetti e ai giochi insieme agli uomini'],
        ['Nobody ever danced', 'Nessuno ballava mai'],
        ['Only grey ink existed', 'Esisteva solo il colore grigio'],
        ['Horses were forbidden', 'I cavalli erano vietati']
      ], ['Etruscan women enjoyed notable social independence and status.', 'Le donne etrusche godevano di grande prestigio sociale.'])
    ]
  }),
  makeHistGeoMission({
    id: 'hist_g5_m3',
    arc: 0,
    sec: 'H5.3',
    pages: '23–34',
    hue: 8,
    title: ['Rome: From 7 Hills to Republic', 'Roma: dai 7 Colli alla Repubblica'],
    topic: ['Founding myth, Patricians & Plebeians, Senate & Punic Wars', 'Mito della fondazione, Patrizi e Plebei, Senato e Guerre Puniche'],
    demon: ['Senator Veto', 'Senatore Veto'],
    tech: ['Scroll Form · Tribune Shield', 'Stile Pergamena · Scudo dei Tribuni'],
    lessons: [
      {
        vis: 'hg5_seven_hills',
        text: [
          '<p>Legend tells of twins Romulus and Remus raised by a she-wolf in 753 BCE—historians know shepherds built huts on Rome’s <b>Seven Hills</b> because there was a shallow Tiber river ford and vital <b>salt route</b> (Via Salaria)!</p>',
          '<p>La leggenda racconta di Romolo e Remo allattati dalla lupa nel 753 a.C.: gli storici sanno che i pastori scelsero i <b>7 Colli</b> perché lì c’era un guado facile sul Tevere e passava la strada del sale (Via Salaria)!</p>'
        ]
      },
      {
        vis: 'hg5_patricians_plebeians',
        text: [
          '<p>After driving out the last king in 509 BCE, Rome founded a [[Republic|Repubblica]] ("public thing"). Wealthy noble [[Patricians|patrizi]] sat in the [[Senate|Senato]], while everyday farmers and artisans were [[Plebeians|plebei]].</p><p>Just like students demanding fair school rules, the Plebeians went on strike—winning <b>Tribunes of the Plebs</b> who could shout "VETO!" (I forbid it!) to stop unfair laws!</p>',
          '<p>Cacciato l’ultimo re nel 509 a.C., nacque la [[Republic|Repubblica]] ("cosa di tutti"). I nobili [[Patricians|patrizi]] sedevano in [[Senate|Senato]], mentre artigiani e contadini erano i [[Plebeians|plebei]].</p><p>Scioperando sull’Aventino, i plebei ottennero i <b>Tribuni della Plebe</b>, che con la parola "VETO!" (lo vieto!) potevano bloccare le leggi ingiuste!</p>'
        ]
      },
      {
        vis: 'hg5_roman_legion',
        text: [
          '<p>Rome’s disciplined [[legions|legioni]] marched across Italy and fought mighty Carthage (and Hannibal crossing the Alps with elephants!) in the Punic Wars—turning the whole Mediterranean into <i>Mare Nostrum</i> ("Our Sea").</p>',
          '<p>Le disciplinate [[legioni|legioni]] romane unificarono l’Italia e sconfissero Cartagine (persino Annibale con gli elefanti sulle Alpi!) nelle Guerre Puniche, chiamando poi il Mediterraneo <i>Mare Nostrum</i> ("Nostro Mare").</p>'
        ]
      }
    ],
    sort: {
      type: 'sort',
      title: ['Who Held This Role in Republican Rome?', 'Chi Aveva Questo Ruolo a Roma?'],
      hint: ['Sort each duty between the Senate/Consuls and the Plebeian Assembly/Tribunes.', 'Dividi i compiti tra Patrizi/Consoli e Plebei/Tribuni.'],
      cats: [['Patricians & Senate', 'Patrizi e Senato'], ['Plebeians & Tribunes', 'Plebei e Tribuni']],
      items: [
        { n: ['Two Consuls leading army and city for 1 year', 'Due Consoli alla guida per 1 anno'], i: 'shield', c: 0, why: ['Two annually elected consuls prevented any kingly tyranny.', 'Due consoli annuali impedivano il ritorno della monarchia.'] },
        { n: ['Using VETO power to block unfair laws', 'Potere di VETO contro leggi ingiuste'], i: 'warn', c: 1, why: ['Tribunes protected plebeian rights with the veto.', 'I tribuni difendevano i plebei con il diritto di veto.'] },
        { n: ['300 elder senators advising foreign policy', '300 senatori anziani per la politica estera'], i: 'scroll', c: 0, why: ['The Senate managed treaties and state treasury.', 'Il Senato gestiva trattati e tesoro dello Stato.'] },
        { n: ['Walking out to Aventine Hill to demand written Twelve Tables', 'Secessione sull’Aventino per avere le XII Tavole'], i: 'users', c: 1, why: ['Written laws protected common citizens from secret rulings.', 'Le leggi scritte tutelavano i cittadini dai soprusi.'] }
      ]
    },
    taunt: ['<p>Patricians forever! Why should ordinary people ever get written laws?</p>', '<p>Solo i ricchi devono sapere le leggi! Perché scriverle su tavole?</p>'],
    quiz: [
      q('Why did early villages choose Rome’s Seven Hills beside the Tiber?', 'Perché i primi villaggi scelsero i 7 Colli sul Tevere?', [
        ['High ground defended against floods and sat at a river crossing and salt road', 'Erano sicuri dalle piene, controllavano il guado del fiume e la Via Salaria'],
        ['They were snowy ski peaks', 'Erano cime alpine sempre innevate'],
        ['Because the Atlantic Ocean was nearby', 'Perché si affacciavano sull’Oceano Atlantico'],
        ['There was no fresh water anywhere', 'Non c’era acqua dolce nei dintorni']
      ], ['Trade on the salt road and a safe hilltop ford made Rome prosper.', 'Posizione strategica tra guado del Tevere e commercio del sale.']),
      q('Why did the Roman Republic elect TWO consuls for only ONE year?', 'Perché la Repubblica romana eleggeva DUE consoli per UN solo anno?', [
        ['So neither leader could hold power too long or become a king again', 'Perché nessuno potesse concentrare il potere e tornare re'],
        ['Because one consul stayed on holiday', 'Perché uno dei due restava sempre in vacanza'],
        ['To double taxes every month', 'Per raddoppiare le tasse ogni mese'],
        ['Nobody knew how to count past one', 'Non sapevano contare oltre uno']
      ], ['Power sharing and short terms kept the Republic balanced.', 'Collegialità e temporaneità impedivano la tirannia.']),
      q('What could a Tribune of the Plebs do with the word "Veto"?', 'Cosa poteva fare un Tribuno della Plebe dicendo "Veto"?', [
        ['Block a law or decree that harmed plebeian citizens', 'Bloccare una legge o decisione dannosa per i plebei'],
        ['Crown himself emperor', 'Incoronarsi imperatore'],
        ['Close all Roman roads', 'Chiudere tutte le strade romane'],
        ['Burn the city library', 'Bruciare la biblioteca della città']
      ], ['Veto means "I forbid"—protecting common Romans.', 'Veto significa "io vieto" a tutela dei diritti della plebe.']),
      q('Who marched war elephants across the Alps during the Second Punic War?', 'Chi attraversò le Alpi con gli elefanti nella Seconda Guerra Punica?', [
        ['Hannibal of Carthage', 'Annibale di Cartagine'],
        ['Alexander the Great', 'Alessandro Magno'],
        ['Pericles of Athens', 'Pericle di Atene'],
        ['Augustus', 'Augusto']
      ], ['Carthaginian general Hannibal surprised Rome by crossing the Alps in 218 BCE.', 'Annibale sorprese Roma valicando le Alpi nel 218 a.C.'])
    ]
  }),
  makeHistGeoMission({
    id: 'hist_g5_m4',
    arc: 0,
    sec: 'H5.4',
    pages: '35–48',
    hue: 350,
    title: ['Roman Empire, Daily Life & Heritage', 'Impero Romano, Vita Quotidiana ed Eredità'],
    topic: ['Pax Romana, aqueducts, roads, Christianity & lasting legacy', 'Pax Romana, acquedotti, strade, Cristianesimo ed eredità oggi'],
    demon: ['Time Eraser', 'Cancellatore del Tempo'],
    tech: ['Scroll Form · Aqueduct Bridge', 'Stile Pergamena · Ponte Acquedotto'],
    lessons: [
      {
        vis: 'hg5_roman_roads',
        text: [
          '<p>In 27 BCE, <b>Augustus</b> became Rome’s first Emperor, opening 200 years of peace called the [[Pax Romana|Pax Romana]]. Roman engineers laid 80 000 km of paved [[Roman roads|strade romane]]—like an ancient internet!—and built towering [[aqueducts|acquedotti]] using gravity to deliver fresh mountain water straight to city fountains and baths.</p>',
          '<p>Nel 27 a.C. <b>Augusto</b> divenne il primo imperatore, inaugurando la [[Pax Romana|Pax Romana]]. Gli ingegneri costruirono 80 000 km di [[Roman roads|strade lastricate]] — la "rete internet" dell’antichità! — e lunghi [[aqueducts|acquedotti]] per portare acqua fresca in città sfruttando solo la pendenza naturale.</p>'
        ]
      },
      {
        vis: 'hg5_domus_insulae',
        text: [
          '<p>How did kids live in Rome? Wealthy families enjoyed a spacious courtyard [[domus|domus]] with mosaics, while most workers squeezed into multi-storey apartment blocks called [[insulae|insulae]]. After school (writing on wax tablets!), everyone met at the Colosseum or baths.</p>',
          '<p>Come vivevano i ragazzi romani? Le famiglie ricche abitavano in una [[domus|domus]] con cortile e mosaici, mentre la maggior parte viveva nelle [[insulae|insulae]], palazzi a più piani molto affollati. Dopo scuola (su tavolette di cera!), ci si incontrava alle terme o al Colosseo.</p>'
        ]
      },
      {
        vis: 'hg5_rome_legacy',
        text: [
          '<p>Christianity spread peacefully along Rome’s roads until Emperor Constantine made it legal (313 CE). Though the Western Empire fell in <b>476 CE</b>, look around today: Italian, Spanish, and French grew from Latin, our calendar months carry Roman names, and modern laws still follow Roman law!</p>',
          '<p>Il Cristianesimo si diffuse lungo le strade dell’impero fino all’Editto di Costantino (313 d.C.). Anche dopo il crollo dell’Impero d’Occidente nel <b>476 d.C.</b>, l’eredità di Roma è ovunque: dal latino nascono l’italiano e molte lingue, i nomi dei mesi e i principi del nostro diritto!</p>'
        ]
      }
    ],
    sort: {
      type: 'sort',
      title: ['Inside a Roman City', 'Dentro una Città Romana'],
      hint: ['Match each Latin term to what it was used for.', 'Abbina ogni parola latina alla sua funzione quotidiana.'],
      cats: [['Public Infrastructure', 'Opere Pubbliche'], ['Housing & Daily Life', 'Case e Vita Quotidiana']],
      items: [
        { n: ['Aqueduct carrying mountain water', 'Acquedotto per l’acqua corrente'], i: 'droplet', c: 0, why: ['Aqueducts supplied public fountains and thermae.', 'Gli acquedotti alimentavano fontane e terme.'] },
        { n: ['Domus courtyard house', 'Domus con atrio e peristilio'], i: 'home', c: 1, why: ['Wealthy Roman families lived in private domus homes.', 'Le famiglie agiate vivevano nella domus.'] },
        { n: ['Paved consular road with milestones', 'Strada lastricata con pietre miliari'], i: 'map', c: 0, why: ['All roads really did connect back to Rome’s Forum.', 'Le vie consolari collegavano l’impero a Roma.'] },
        { n: ['Insula multi-storey apartment', 'Insula a più piani per lavoratori'], i: 'building', c: 1, why: ['Ordinary city residents rented rooms in insulae.', 'La plebe urbana viveva in affitto nelle insulae.'] }
      ]
    },
    taunt: ['<p>Rome disappeared and left zero traces in your life today!</p>', '<p>Roma è sparita nel nulla: non ne resta traccia nel mondo di oggi!</p>'],
    quiz: [
      q('How did Roman aqueducts move water across valleys into cities without electric pumps?', 'Come portavano l’acqua gli acquedotti romani senza pompe elettriche?', [
        ['Using a gentle continuous downward slope (gravity) supported by arches', 'Sfruttando una pendenza costante e la gravità sopra archi'],
        ['By boiling water into steam', 'Bollendo l’acqua in vapore'],
        ['Carrying buckets by giraffe', 'Trasportandola con secchi e giraffe'],
        ['Freezing water into ice blocks', 'Trasformandola in blocchi di ghiaccio']
      ], ['Roman surveyors calculated exact tiny slopes over dozens of kilometres.', 'I tecnici calcolavano pendenze minime e regolari per chilometri.']),
      q('What was the difference between a domus and an insula?', 'Qual era la differenza tra una domus e un’insula?', [
        ['A domus was a private house for wealthy families; insulae were crowded apartment blocks', 'La domus era una casa signorile; l’insula era un condominio popolare affollato'],
        ['An insula was an emperor’s chariot', 'L’insula era il carro dell’imperatore'],
        ['A domus was an underground volcano', 'La domus era un vulcano sotterraneo'],
        ['They were two names for the same bridge', 'Erano due nomi per lo stesso ponte']
      ], ['Insulae rose up to 5–6 storeys in bustling Rome.', 'Le insulae raggiungevano anche 5 o 6 piani nella Roma affollata.']),
      q('What major turning point happened in 476 CE?', 'Quale grande svolta avvenne nel 476 d.C.?', [
        ['The fall of the Western Roman Empire, marking the start of the Middle Ages', 'La caduta dell’Impero Romano d’Occidente, inizio convenzionale del Medioevo'],
        ['The founding of Rome by Romulus', 'La fondazione di Roma da parte di Romolo'],
        ['The first Olympic Games', 'Le prime Olimpiadi'],
        ['The invention of printing', 'L’invenzione della stampa']
      ], ['In 476 CE Odoacer deposed the last Western emperor, Romulus Augustulus.', 'Nel 476 d.C. Odoacre depose Romolo Augustolo.']),
      q('Which modern proof shows Rome’s living heritage in Italy today?', 'Quale esempio dimostra l’eredità viva di Roma in Italia oggi?', [
        ['Italian language grew from Latin, and many cities still follow Roman street grids', 'La lingua italiana deriva dal latino e molte città conservano il reticolato stradale romano'],
        ['Everyone still wears togas to school', 'Tutti portano ancora la toga a scuola'],
        ['Latin is the only spoken language on TV', 'In TV si parla solo latino classico'],
        ['Money is still weighed in bronze bars', 'Si paga ancora con barre di bronzo']
      ], ['Turin, Florence, Bologna, and Naples still preserve Roman cardo/decumanus plans.', 'Torino, Firenze, Bologna e Napoli conservano l’impianto romano a scacchiera.'])
    ],
    boss: true
  })
];

// ============================================================================
// GRADE 9 (1° Superiore) — Prehistory, River Civilizations, Greece & Roman Republic
// ============================================================================
export const HIST9_UNIT: UnitInfo = {
  title: ['Ancient World & Classical Roots', 'Mondo Antico e Radici Classiche'],
  ch: 'H1.1–H1.8',
  subject: 'hist9'
};

export const HIST9_ARCS: ArcInfo[] = [
  { n: 1, title: ['Prehistory & River Civilizations', 'Preistoria e Civiltà Fluviali'], pages: '1–42' },
  { n: 2, title: ['Mediterranean, Polis & Hellenism', 'Mediterraneo, Polis ed Ellenismo'], pages: '43–88' },
  { n: 3, title: ['Etruscans & Roman Republic', 'Etruschi e Roma Repubblicana'], pages: '89–136' }
];

export const HIST9_MISSIONS: Mission[] = [
  makeHistGeoMission({
    id: 'hist_l1_m1',
    arc: 0,
    sec: 'H1.1',
    pages: '1–14',
    hue: 32,
    title: ['Historical Sources & Neolithic Shift', 'Fonti Storiche e Rivoluzione Neolitica'],
    topic: ['Primary/secondary sources, chronology, Paleolithic to Neolithic', 'Fonti storiche, cronologia, dal Paleolitico al Neolitico'],
    demon: ['Amnesia Wraith', 'Spettro dell’Oblio'],
    tech: ['Scroll Form · Source Lens', 'Stile Pergamena · Lente delle Fonti'],
    lessons: [
      {
        vis: 'hg9_sources_timeline',
        text: [
          '<p>Historians work like detectives! They sort clues into [[primary sources|fonti primarie]] (created right at the event—diaries, coins, bones, tools) and [[secondary sources|fonti secondarie]] (later textbooks or documentaries analyzing them). Notice how dates count <b>BCE</b> (backward to zero) and <b>CE</b> (forward from year 1)!</p>',
          '<p>Lo storico lavora come un detective! Distingue [[primary sources|fonti primarie]] (prodotte all’epoca: monete, diari, ossa, attrezzi) da [[secondary sources|fonti secondarie]] (libri o documentari scritti dopo). Ricorda: avanti Cristo (<b>a.C.</b>) scorre all’indietro verso l’anno 1, dopo Cristo (<b>d.C.</b>) in avanti!</p>'
        ]
      },
      {
        vis: 'hg9_paleo_neo',
        text: [
          '<p>Around 10 000 BCE came humanity’s biggest lifestyle upgrade: the [[Neolithic Revolution|Rivoluzione Neolitica]]. In the Paleolithic, small nomadic bands hunted and gathered; once people domesticated wheat and goats, they settled in permanent mud-brick villages, fired pottery, and invented specialized jobs!</p>',
          '<p>Intorno al 10 000 a.C. avvenne la più grande svolta dell’umanità: la [[Neolithic Revolution|Rivoluzione Neolitica]]. Nel Paleolitico i gruppi erano nomadi di cacciatori-raccoglitori; con agricoltura e allevamento nacquero i primi villaggi stabili, la ceramica e la divisione del lavoro!</p>'
        ]
      },
      {
        vis: 'hg9_metals_era',
        text: [
          '<p>Learning to melt copper, then mix copper + tin into stronger <b>bronze</b>, and later <b>iron</b> changed tools and farming forever—setting the stage for cities and written history around 3200 BCE.</p>',
          '<p>Saper fondere il rame, poi unirlo allo stagno per ottenere il resistente <b>bronzo</b> e infine il <b>ferro</b> rivoluzionò aratri e utensili, preparando la nascita delle città e della scrittura verso il 3200 a.C.</p>'
        ]
      }
    ],
    sort: {
      type: 'sort',
      title: ['Paleolithic or Neolithic?', 'Paleolitico o Neolitico?'],
      hint: ['Sort each human breakthrough into the right Stone Age era.', 'Colloca ciascuna conquista nell’età preistorica corretta.'],
      cats: [['Paleolithic (Old Stone)', 'Paleolitico'], ['Neolithic (New Stone)', 'Neolitico']],
      items: [
        { n: ['Nomadic bands following herds', 'Bande nomadi che seguono le mandrie'], i: 'footprints', c: 0, why: ['Paleolithic groups moved seasonally for food.', 'I gruppi paleolitici si spostavano seguendo la selvaggina.'] },
        { n: ['Planting wheat & keeping sheep', 'Coltivazione del grano e allevamento'], i: 'sprout', c: 1, why: ['Farming and herding define the Neolithic Revolution.', 'Agricoltura e allevamento segnano il Neolitico.'] },
        { n: ['Firing clay pots to store grain', 'Ceramica cotta per conservare i semi'], i: 'jar', c: 1, why: ['Permanent villages needed pottery storage.', 'I villaggi stabili avevano bisogno di vasi per le scorte.'] },
        { n: ['Chipped flint hand-axes & cave art', 'Pietra scheggiata e pitture rupestri'], i: 'stone', c: 0, why: ['Chipped stone tools gave the Paleolithic its name.', 'La pietra scheggiata dà il nome al Paleolitico.'] }
      ]
    },
    taunt: ['<p>History is just memorising random dates—nothing ever explains why people changed!</p>', '<p>La storia è solo una lista di date a memoria senza cause né legami!</p>'],
    quiz: [
      q('Which of these is a PRIMARY historical source about Julius Caesar?', 'Quale di queste è una fonte PRIMARIA su Giulio Cesare?', [
        ['A silver coin minted in 44 BCE during Caesar’s lifetime', 'Una moneta d’argento coniata nel 44 a.C. mentre Cesare era vivo'],
        ['A 2024 Italian high-school history textbook', 'Un manuale di storia delle superiori del 2024'],
        ['A modern TV series about Rome', 'Una serie TV moderna su Roma'],
        ['An encyclopaedia website article', 'Una voce di enciclopedia online']
      ], ['Primary sources originate directly from the period being studied.', 'Le fonti primarie provengono direttamente dall’epoca studiata.']),
      q('How many years elapsed between 500 BCE and 500 CE?', 'Quanti anni trascorsero tra il 500 a.C. e il 500 d.C.?', [
        ['999 years (since there is no year 0)', '999 anni (non esiste l’anno zero)'],
        ['100 years', '100 anni'],
        ['0 years', '0 anni'],
        ['2000 years', '2000 anni']
      ], ['Remember: historical calendars jump directly from 1 BCE to 1 CE!', 'Nel calendario storico si passa dall’1 a.C. all’1 d.C. senza anno zero.']),
      q('What single shift triggered cities, pottery, and specialised artisans during the Neolithic?', 'Quale svolta rese possibili villaggi, ceramica e artigiani specializzati nel Neolitico?', [
        ['Food surplus from farming and animal domestication', 'L’eccedenza alimentare data da agricoltura e allevamento'],
        ['The invention of steam trains', 'L’invenzione dei treni a vapore'],
        ['Melting plastics', 'La fusione della plastica'],
        ['Paper banknotes', 'Le banconote di carta']
      ], ['Growing more food than eaten daily freed people to weave, build, and craft.', 'Le scorte di cibo permisero ad alcuni di dedicarsi all’artigianato e ai commerci.']),
      q('What marks the conventional boundary between Prehistory and History?', 'Cosa segna convenzionalmente il passaggio dalla Preistoria alla Storia?', [
        ['The invention of writing (c. 3200 BCE)', 'L’invenzione della scrittura (circa 3200 a.C.)'],
        ['The discovery of fire', 'La scoperta del fuoco'],
        ['The end of the Ice Age', 'La fine dell’era glaciale'],
        ['The first wheels on cars', 'Le prime ruote per automobili']
      ], ['Written records unlock names, laws, and accounts beyond archaeological remains alone.', 'La scrittura aggiunge testi, leggi e nomi alle sole tracce materiali.'])
    ]
  }),
  makeHistGeoMission({
    id: 'hist_l1_m2',
    arc: 0,
    sec: 'H1.2',
    pages: '15–28',
    hue: 44,
    title: ['River Kingdoms: Mesopotamia & Egypt', 'Regni Fluviali: Mesopotamia ed Egitto'],
    topic: ['Hydraulic empires, cuneiform, Hammurabi & Nile calendars', 'Civiltà idrauliche, scrittura cuneiforme, Hammurabi e Nilo'],
    demon: ['Clay Tablet Censor', 'Censore d’Argilla'],
    tech: ['Scroll Form · Canal Lock', 'Stile Pergamena · Chiusa Fluviale'],
    lessons: [
      {
        vis: 'hg9_fertile_crescent',
        text: [
          '<p>Why did the earliest cities bloom along rivers like the Tigris, Euphrates, and Nile? Imagine trying to grow crops in a dry desert—only controlled river floods plus dug <b>irrigation canals</b> turned barren sand into golden wheat fields! Managing canals required teamwork, leaders, and taxes: that’s how states were born.</p>',
          '<p>Perché le prime grandi città nacquero lungo Tigri, Eufrate e Nilo? Coltivare vicino al deserto era impossibile senza <b>canali di irrigazione</b> che portassero l’acqua delle piene ai campi! Scavare e riparare i canali insieme richiese organizzazione, leggi e tasse: così nacque lo Stato.</p>'
        ]
      },
      {
        vis: 'hg9_cuneiform_hammurabi',
        text: [
          '<p>Sumerian temple clerks needed a receipt app—so they pressed wedge-shaped reeds into wet clay to invent [[cuneiform writing|scrittura cuneiforme]]! Centuries later, Babylonian king <b>Hammurabi</b> carved 282 laws in public stone ("an eye for an eye") so no judge could quietly bend the rules.</p>',
          '<p>I sacerdoti sumeri avevano bisogno di registri per i sacchi di grano: incisero così cunei sull’argilla fresca inventando la [[cuneiform writing|scrittura cuneiforme]]! Più tardi il re <b>Hammurabi</b> fece incidere 282 leggi pubbliche sulla pietra perché nessun giudice potesse inventarle al momento.</p>'
        ]
      },
      {
        vis: 'hg9_egypt_nile',
        text: [
          '<p>Unlike Mesopotamia’s unpredictable storms, Egypt’s <b>Nile</b> flooded like clockwork every summer, dropping rich black silt. Pharaohs united Upper & Lower Egypt, tracked stars into a 365-day calendar, and wrote [[hieroglyphs|geroglifici]] on papyrus scrolls.</p>',
          '<p>A differenza delle piene improvvise della Mesopotamia, il <b>Nilo</b> inondava l’Egitto con regolarità ogni estate lasciando fertile limo nero. I faraoni unificarono Alto e Basso Egitto, calcolarono un calendario di 365 giorni e scrissero [[hieroglyphs|geroglifici]] su rotoli di papiro.</p>'
        ]
      }
    ],
    sort: {
      type: 'sort',
      title: ['Mesopotamia or Ancient Egypt?', 'Mesopotamia o Antico Egitto?'],
      hint: ['Assign each cultural landmark to the right river valley.', 'Abbina ogni elemento alla civiltà fluviale corrispondente.'],
      cats: [['Mesopotamia (Tigris–Euphrates)', 'Mesopotamia (Tigri–Eufrate)'], ['Egypt (Nile)', 'Egitto (Nilo)']],
      items: [
        { n: ['Stepped brick Ziggurat temple', 'Ziqqurat a gradoni in mattoni'], i: 'temple', c: 0, why: ['Sumerians built stepped Ziggurats where no stone existed.', 'I Sumeri costruivano ziqqurat in mattoni crudi.'] },
        { n: ['365-day solar flood calendar & Pyramids', 'Calendario di 365 giorni e Piramidi'], i: 'sun', c: 1, why: ['The Nile flood cycle inspired Egypt’s solar calendar.', 'Il ciclo regolare del Nilo guidò il calendario solare egizio.'] },
        { n: ['Code of Hammurabi carved in basalt', 'Codice di Hammurabi inciso su stele'], i: 'scale', c: 0, why: ['Babylon’s Hammurabi unified Mesopotamian law.', 'Il re babilonese Hammurabi unificò le leggi.'] },
        { n: ['Hieroglyphs on papyrus reeds', 'Geroglifici su fogli di papiro'], i: 'scroll', c: 1, why: ['Papyrus grew abundantly along the Nile delta.', 'Il papiro cresceva lungo il delta del Nilo.'] }
      ]
    },
    taunt: ['<p>No need to write grain counts down—everyone will surely remember next year!</p>', '<p>A che serve scrivere i conti del grano? Basta fidarsi della memoria!</p>'],
    quiz: [
      q('Why are Mesopotamia and Egypt called "hydraulic civilisations"?', 'Perché Mesopotamia ed Egitto sono dette "civiltà idrauliche"?', [
        ['Large-scale canal irrigation and flood control shaped their economy and government', 'La gestione collettiva dei canali e delle piene plasmò economia e Stato'],
        ['They used electric hydroelectric dams', 'Usavano centrali idroelettriche moderne'],
        ['People lived underwater in submarines', 'Gli abitanti vivevano sott’acqua'],
        ['It rained nonstop all year', 'Pioveva ogni giorno dell’anno']
      ], ['Organizing canals and levees centralized administration and storage.', 'Scavare canali richiedeva collaborazione e potere centrale.']),
      q('Why was writing invented in Sumerian temples around 3200 BCE?', 'Perché nacque la scrittura nei templi sumeri attorno al 3200 a.C.?', [
        ['To record grain rations, livestock, and temple taxes accurately', 'Per registrare con precisione scorte di grano, bestiame e tributi'],
        ['To write adventure novels first', 'Per scrivere subito romanzi d’avventura'],
        ['To print newspapers daily', 'Per stampare giornali quotidiani'],
        ['To send emojis across oceans', 'Per inviare messaggi oltre oceano']
      ], ['Accounting preceded literature: earliest tablets are temple inventory lists.', 'Le prime tavolette erano registri contabili di cibo e beni.']),
      q('What key idea did Hammurabi’s Code introduce despite its harsh penalties?', 'Quale principio importante introdusse il Codice di Hammurabi pur con pene severe?', [
        ['Written public laws visible to everyone, reducing arbitrary judgments', 'Leggi scritte e pubbliche per limitare l’arbitrio dei giudici'],
        ['Free elections for all citizens', 'Elezioni libere per tutti gli abitanti'],
        ['Abolition of taxes forever', 'Abolizione di tutte le tasse'],
        ['Equal pay for robots', 'Pari diritti per le macchine']
      ], ['Carving laws in stone meant punishments were standardized rather than improvised.', 'Scrivere le leggi sulla stele fissava regole chiare e uguali nel regno.']),
      q('Why was the Nile’s annual flood easier to plan for than the Tigris and Euphrates?', 'Perché le piene del Nilo erano più facili da prevedere di quelle di Tigri ed Eufrate?', [
        ['The Nile rose gently on a predictable summer schedule; Mesopotamian rivers flooded violently', 'Il Nilo saliva con regolarità estiva; Tigri ed Eufrate avevano piene improvvise'],
        ['The Nile froze into solid ice each July', 'Il Nilo gelava ogni luglio'],
        ['The Nile flows downhill only once a decade', 'Il Nilo scorreva una volta ogni dieci anni'],
        ['Mesopotamia had no snow in mountains', 'In Mesopotamia non nevicava mai sui monti']
      ], ['Predictability gave Egypt centuries-long political stability.', 'La regolarità del Nilo favorì lunghi periodi di stabilità politica.'])
    ]
  }),
  makeHistGeoMission({
    id: 'hist_l1_m3',
    arc: 0,
    sec: 'H1.3',
    pages: '29–42',
    hue: 280,
    title: ['Phoenicians & Hebrews: Sea & Book', 'Fenici ed Ebrei: Il Mare e il Libro'],
    topic: ['Alphabetic writing, Tyrian purple trade, monotheism', 'Alfabeto fonetico, commerci fenici, monoteismo ebraico'],
    demon: ['Babble Scrambler', 'Confusore di Segni'],
    tech: ['Scroll Form · 22-Letter Key', 'Stile Pergamena · Chiave a 22 Lettere'],
    lessons: [
      {
        vis: 'hg9_alphabet_compare',
        text: [
          '<p>Imagine texting with <b>700 picture emojis</b> vs. <b>22 simple letters</b>! Egyptian scribes needed years to learn hundreds of signs; sea-faring [[Phoenicians|Fenici]] streamlined writing to just <b>22 phonetic symbols</b>—one per consonant sound—so every sailor and merchant could read a bill in days! Our modern alphabet grew directly from theirs.</p>',
          '<p>Prova a scrivere usando <b>700 disegni</b> oppure solo <b>22 lettere</b>! Gli scribi egizi impiegavano anni a memorizzare centinaia di segni; i mercanti [[Phoenicians|Fenici]] inventarono <b>22 segni fonetici</b> (uno per suono), così tutti potevano imparare a leggere e scrivere! Il nostro alfabeto nasce proprio da lì.</p>'
        ]
      },
      {
        vis: 'hg9_phoenician_routes',
        text: [
          '<p>Squeezed between mountains and sea in Lebanon, Phoenicians became unmatched shipbuilders using cedar wood, famous for costly <b>Tyrian purple dye</b> from sea snails and founding trading colonies like <b>Carthage</b> across the Mediterranean.</p>',
          '<p>Stretti tra monti e mare nell’odierno Libano, i Fenici costruirono navi in legno di cedro, produssero la preziosa <b>porpora</b> da conchiglie marine e fondarono scali commerciali in tutto il Mediterraneo, tra cui <b>Cartagine</b> e città in Sicilia e Sardegna.</p>'
        ]
      },
      {
        vis: 'hg9_hebrew_monotheism',
        text: [
          '<p>South of Phoenicia, the [[Hebrews|Ebrei]] introduced a radical idea in the ancient world: [[monotheism|monoteismo]]—faith in one universal God—preserved in a portable book (the Torah/Bible) that kept their identity alive even after exile and diaspora.</p>',
          '<p>Più a sud, gli [[Hebrews|Ebrei]] portarono un’idea rivoluzionaria rispetto ai tanti dèi dei vicini: il [[monotheism|monoteismo]], la fede in un unico Dio, custodita in un libro sacro condiviso (la Torah/Bibbia) che tenne unita la comunità anche dopo l’esilio e la diaspora.</p>'
        ]
      }
    ],
    sort: {
      type: 'sort',
      title: ['Phoenician Trade or Hebrew Tradition?', 'Mondo Fenicio o Tradizione Ebraica?'],
      hint: ['Sort each hallmark to the Phoenicians or the Hebrews.', 'Distingui gli elementi della civiltà fenicia e di quella ebraica.'],
      cats: [['Phoenicians', 'Fenici'], ['Hebrews', 'Ebrei']],
      items: [
        { n: ['22-consonant phonetic alphabet for merchants', 'Alfabeto fonetico a 22 segni per i commerci'], i: 'type', c: 0, why: ['Greeks later added vowels to the Phoenician alphabet.', 'I Greci aggiunsero poi le vocali ai segni fenici.'] },
        { n: ['Ethical monotheism & sacred Torah', 'Monoteismo etico e Torah'], i: 'book', c: 1, why: ['Faith in one God centered on law and covenant.', 'Fede in un solo Dio fondata sull’alleanza morale.'] },
        { n: ['Cedar ships, purple dye & Carthage', 'Navi di cedro, porpora e Cartagine'], i: 'ship', c: 0, why: ['Maritime trade networks spanned from Tyre to Spain.', 'Le rotte mercantili arrivavano fino all’Atlantico.'] },
        { n: ['Kingdom of David & Solomon in Jerusalem', 'Regno di Davide e Salomone a Gerusalemme'], i: 'crown', c: 1, why: ['Jerusalem became the spiritual center of Israel.', 'Gerusalemme fu il centro politico e spirituale.'] }
      ]
    },
    taunt: ['<p>22 letters? Real wisdom should stay locked inside 1000 secret temple symbols!</p>', '<p>Solo 22 lettere? Il sapere deve restare segreto dentro mille geroglifici!</p>'],
    quiz: [
      q('Why was the Phoenician alphabet a massive democratic breakthrough in communication?', 'Perché l’alfabeto fenicio fu una svolta enorme per la comunicazione?', [
        ['About 22 sound symbols were fast for ordinary merchants and artisans to learn', 'Circa 22 segni sonori erano facili da imparare anche per mercanti e artigiani'],
        ['It could only be carved on gold plates', 'Si poteva incidere solo su piastre d’oro'],
        ['It eliminated spoken words completely', 'Eliminò del tutto la lingua parlata'],
        ['Only pharaohs were permitted to pronounce it', 'Solo i faraoni potevano leggerlo']
      ], ['Moving from hundreds of pictograms to a short sound alphabet democratized literacy.', 'Passare da centinaia di pittogrammi a pochi segni fonetici rese la scrittura accessibile.']),
      q('What luxury export gave Phoenicians their Greek name ("red-purple people")?', 'Quale prodotto di lusso diede ai Fenici il nome greco ("popolo della porpora")?', [
        ['Purple cloth dye extracted from marine murex snails', 'Tessuti tinti di rosso-viola estratti dai murici marini'],
        ['Alpine snowballs', 'Neve delle Alpi'],
        ['Roman iron swords', 'Spade romane di ferro'],
        ['Cotton candy', 'Zucchero filato']
      ], ['Tyrian purple dyed royal cloaks across the Mediterranean.', 'La porpora di Tiro tingeva gli abiti più costosi dell’antichità.']),
      q('Which innovation did the Greeks later add to the Phoenician alphabet?', 'Quale novità aggiunsero poi i Greci all’alfabeto fenicio?', [
        ['Separate letters for VOWELS (a, e, i, o, u)', 'Segni specifici per le VOCALI'],
        ['Invisible ink', 'L’inchiostro invisibile'],
        ['Printing presses', 'I caratteri mobili a stampa'],
        ['Binary digits 0 and 1', 'Le cifre binarie 0 e 1']
      ], ['Adding vowels made pronunciation crystal clear in every language.', 'Le vocali resero l’alfabeto adatto a trascrivere qualsiasi lingua con esattezza.']),
      q('What does "monotheism" mean in ancient Hebrew history?', 'Cosa indica il termine "monoteismo" nella storia ebraica?', [
        ['Belief in one single God rather than many nature gods', 'Fede in un unico Dio invece di molte divinità legate alla natura'],
        ['Rule by one mountain village', 'Governo di un solo villaggio montano'],
        ['Speaking only one word per day', 'Pronunciare una sola parola al giorno'],
        ['Building one stone bridge', 'Costruire un solo ponte di pietra']
      ], ['Unlike neighboring polytheistic empires, Hebrew faith centered on one transcendent God.', 'A differenza dei vicini politeisti, la fede ebraica adorava un unico Dio.'])
    ]
  }),
  makeHistGeoMission({
    id: 'hist_l1_m4',
    arc: 1,
    sec: 'H1.4',
    pages: '43–58',
    hue: 196,
    title: ['Minoans, Mycenaeans & The Polis', 'Minoici, Micenei e la Polis'],
    topic: ['Crete palaces, Trojan era, hoplite phalanx & Magna Graecia', 'Palazzi cretesi, civiltà micenea, falange oplitica e Magna Grecia'],
    demon: ['Labyrinth Minotaur', 'Minotauro del Labirinto'],
    tech: ['Scroll Form · Hoplite Wall', 'Stile Pergamena · Muro Oplitico'],
    lessons: [
      {
        vis: 'hg9_minoan_mycenaean',
        text: [
          '<p>Before classical Athens, Aegean sailors traded from Crete’s lively open palaces (<b>Minoans</b>, famous for Knossos frescoes and peaceful sea trade) and mainland warrior fortresses (<b>Mycenaeans</b>, the heroes behind Homer’s <i>Iliad</i> and the Trojan War).</p>',
          '<p>Prima dell’Atene classica, l’Egeo fu solcato dai <b>Minoici</b> di Creta (palazzi senza mura come Cnosso, commercio pacifico) e poi dai guerrieri <b>Micenei</b> sulle rocche del Peloponneso, protagonisti dei poemi di Omero e della guerra di Troia.</p>'
        ]
      },
      {
        vis: 'hg9_hoplite_phalanx',
        text: [
          '<p>When the [[polis|polis]] arose (c. 8th century BCE), bronze aristocrats no longer fought alone. Ordinary citizen-farmers bought affordable iron shields and locked shoulders in the [[hoplite phalanx|falange oplitica]]! If your shield guarded the friend on your left, everyone demanded an equal voice in city laws too.</p>',
          '<p>Quando nacque la [[polis|polis]] (VIII sec. a.C.), non combattevano più solo pochi nobili sui carri. I cittadini contadini si armarono in ferro formando la compatta [[hoplite phalanx|falange oplitica]]: poiché il tuo scudo proteggeva il compagno vicino, tutti chiesero uguale peso nelle decisioni della città!</p>'
        ]
      },
      {
        vis: 'hg9_magna_graecia',
        text: [
          '<p>As populations grew, Greek cities sent ships westward to found vibrant new poleis along Southern Italy & Sicily ([[Magna Graecia|Magna Grecia]]): Cumae, Naples, Syracuse, Agrigento, and Taranto—bringing olive trees, grapes, philosophy, and stone theatres to Italy!</p>',
          '<p>Crescendo la popolazione, molte città greche fondarono nuove colonie nel Sud Italia e in Sicilia ([[Magna Graecia|Magna Grecia]]): Cuma, Napoli, Siracusa, Agrigento, Taranto, diffondendo ulivo, vite, alfabeto, filosofia e teatri meravigliosi!</p>'
        ]
      }
    ],
    sort: {
      type: 'sort',
      title: ['Minoan Crete or Mycenaean Citadels?', 'Creta Minoica o Rocche Micenee?'],
      hint: ['Contrast the two earliest Aegean civilisations.', 'Confronta le due più antiche civiltà dell’Egeo.'],
      cats: [['Minoans (Crete)', 'Minoici (Creta)'], ['Mycenaeans (Mainland)', 'Micenei (Grecia continentale)']],
      items: [
        { n: ['Unwalled labyrinth-like Knossos palace', 'Palazzo aperto di Cnosso senza mura'], i: 'arch', c: 0, why: ['Crete’s sea power protected palaces without thick walls.', 'La flotta minoica proteggeva l’isola senza mura difensive.'] },
        { n: ['Cyclopean stone fortresses & Lion Gate', 'Mura ciclopiche e Porta dei Leoni'], i: 'shield', c: 1, why: ['Mycenaean kings fortified hilltops for warfare.', 'I re micenei fortificavano le rocche per la guerra.'] },
        { n: ['Linear B Greek-language accounting tablets', 'Tavolette in Lineare B (proto-greco)'], i: 'scroll', c: 1, why: ['Linear B is the earliest deciphered form of Greek.', 'La Lineare B è la più antica forma scritta di greco.'] },
        { n: ['Bull-leaping frescoes & maritime thalassocracy', 'Affreschi con salto sul toro e dominio sul mare'], i: 'ship', c: 0, why: ['Minoan art celebrated ocean life and peaceful trade.', 'L’arte minoica raffigurava delfini, mare e feste.'] }
      ]
    },
    taunt: ['<p>Why share power with farmers? Armies should belong only to noble charioteers!</p>', '<p>Perché dare diritti ai contadini? Solo i nobili devono contare!</p>'],
    quiz: [
      q('How did the hoplite phalanx help spark democracy in Greek city-states?', 'Come favorì la falange oplitica la nascita della partecipazione politica nelle poleis?', [
        ['Citizens who defended the city side by side demanded equal political rights', 'I cittadini che difendevano insieme la città chiesero pari diritti politici'],
        ['Hoplites outlawed all public squares', 'Gli opliti chiusero le piazze pubbliche'],
        ['They used cannons to destroy Athens', 'Usarono cannoni contro Atene'],
        ['Only foreign mercenaries fought', 'Combattevano solo mercenari stranieri']
      ], ['Equal sacrifice in the shield wall created shared civic power.', 'La solidarietà nello schieramento militare si tradusse in cittadinanza attiva.']),
      q('What was "Magna Graecia"?', 'Che cosa indicava il nome "Magna Grecia"?', [
        ['Greek colonies flourished in Southern Italy and Sicily', 'Le fiorenti colonie greche fondate in Italia meridionale e Sicilia'],
        ['A giant mountain in northern Europe', 'Una grande montagna del Nord Europa'],
        ['The desert of Egypt', 'Il deserto egiziano'],
        ['A Spartan weapon', 'Un’arma degli Spartani']
      ], ['From Naples to Syracuse, Greek settlers built major Mediterranean hubs.', 'Da Napoli a Siracusa, le colonie portarono cultura greca in Italia.']),
      q('Why did Minoan palaces like Knossos lack heavy defensive walls?', 'Perché i palazzi minoici come Cnosso non avevano grandi mura difensive?', [
        ['Crete relied on its strong merchant/naval fleet across the sea', 'Creta si affidava al controllo del mare con la propria flotta'],
        ['Nobody had invented stone yet', 'Nessuno conosceva la pietra'],
        ['They floated in the sky', 'Galleggiavano nel cielo'],
        ['It never had neighbours', 'Non esistevano altre isole vicine']
      ], ['Minoan sea dominance ("thalassocracy") kept enemies far away for centuries.', 'La talassocrazia cretese proteggeva l’isola dal mare.']),
      q('Which script was deciphered as the earliest written Greek language (Mycenaean)?', 'Quale scrittura è risultata essere la più antica forma di lingua greca (Micenei)?', [
        ['Linear B', 'Lineare B'],
        ['Cuneiform', 'Cuneiforme'],
        ['Morse Code', 'Codice Morse'],
        ['Latin cursive', 'Corsivo latino']
      ], ['Michael Ventris deciphered Linear B tablets from Mycenae and Pylos in 1952.', 'Michael Ventris decifrò la Lineare B come greco arcaico nel 1952.'])
    ]
  }),
  makeHistGeoMission({
    id: 'hist_l1_m5',
    arc: 1,
    sec: 'H1.5',
    pages: '59–74',
    hue: 218,
    title: ['Athens, Sparta & Persian Wars', 'Atene, Sparta e Guerre Persiane'],
    topic: ['Cleisthenes, Pericles, Marathon, Thermopylae & Salamis', 'Clistene, Pericle, Maratona, Termopili e Salamina'],
    demon: ['Satrap Xerxes', 'Satrapo Serse'],
    tech: ['Scroll Form · Trireme Ram', 'Stile Pergamena · Rostro di Trireme'],
    lessons: [
      {
        vis: 'hg9_athens_democracy',
        text: [
          '<p>In 508 BCE, <b>Cleisthenes</b> reorganized Athens so neighbourhoods of rich and poor mixed together—ending old clan monopolies. Later <b>Pericles</b> paid daily wages so even poor citizens could take time off work to sit on juries and vote in the assembly (though women, enslaved people, and foreigners were still excluded).</p>',
          '<p>Nel 508 a.C., <b>Clistene</b> riorganizzò Atene mescolando quartieri ricchi e poveri per rompere i privilegi di famiglia. Poi <b>Pericle</b> introdusse una paga per i cittadini in giuria così anche i lavoratori potevano partecipare (esclusi però donne, schiavi e stranieri).</p>'
        ]
      },
      {
        vis: 'hg9_persian_wars',
        text: [
          '<p>When the giant Persian Empire invaded Greece, tiny rival poleis teamed up! At <b>Marathon</b> (490 BCE) Athenian hoplites stunned Persia; at <b>Thermopylae</b> Spartan King Leonidas slowed Xerxes’ army; and at <b>Salamis</b> agile Greek trireme warships trapped the huge Persian fleet in narrow straits!</p>',
          '<p>Quando l’immenso Impero Persiano invase la Grecia, le poleis rivali si allearono! A <b>Maratona</b> (490 a.C.) gli opliti fermarono i Persiani; alle <b>Termopili</b> Leonida e 300 Spartani rallentarono Serse; a <b>Salamina</b> le agili triremi greche intrappolarono la pesante flotta persiana!</p>'
        ]
      },
      {
        vis: 'hg9_classical_golden',
        text: [
          '<p>Victory sparked the Classical Golden Age: the <b>Parthenon</b> rose on the Acropolis, Sophocles wrote tragedies, Herodotus founded history writing ("inquiry"), and Socrates asked questions in the streets until people thought for themselves.</p>',
          '<p>La vittoria aprì l’età classica: sull’Acropoli sorse il <b>Partenone</b>, Sofocle scrisse tragedie, Erodoto inventò la "storia" come ricerca sui fatti e Socrate stimolò i giovani a ragionare con domande continue.</p>'
        ]
      }
    ],
    sort: {
      type: 'sort',
      title: ['Persian War Battles: Land or Sea?', 'Battaglie Persiane: Terra o Mare?'],
      hint: ['Sort key clashes and Athenian reforms accurately.', 'Distingui battaglie terrestri, navali e figure chiave.'],
      cats: [['Land Clashes & Sparta', 'Terra e Sparta'], ['Sea Victories & Athens', 'Mare e Atene']],
      items: [
        { n: ['Marathon plain hoplite charge (490 BCE)', 'Carica degli opliti a Maratona (490 a.C.)'], i: 'shield', c: 0, why: ['Athenian hoplites defeated Darius’ landing army on foot.', 'Gli opliti vinsero sulla piana di Maratona.'] },
        { n: ['Salamis narrow-strait trireme trap (480 BCE)', 'Trappola delle triremi nello stretto di Salamina'], i: 'ship', c: 1, why: ['Themistocles lured Persian ships into tight waters.', 'Temistocle sfruttò l’agilità delle triremi nello stretto.'] },
        { n: ['Thermopylae mountain pass stand', 'Resistenza al passo delle Termopili'], i: 'mountain', c: 0, why: ['Leonidas and 300 Spartans held the narrow canyon.', 'Leonida difese la gola montana per permettere la ritirata.'] },
        { n: ['Pericles paying civic jury stipends', 'Indennità di Pericle per giurie popolari'], i: 'coin', c: 1, why: ['Public stipends let working Athenians govern.', 'Il compenso pubblico aprì le cariche ai meno ricchi.'] }
      ]
    },
    taunt: ['<p>No tiny city-state can survive against my empire of a million soldiers!</p>', '<p>Nessuna piccola città può resistere a un impero sterminato!</p>'],
    quiz: [
      q('How did Pericles make Athens’ democracy work for ordinary poor citizens?', 'Come rese Pericle accessibile la democrazia ai cittadini meno ricchi?', [
        ['By introducing daily pay (mysthos) for attending courts and public office', 'Introducendo un compenso giornaliero per chi svolgeva cariche e giurie'],
        ['By banning farmers from entering the city', 'Vietando ai contadini di entrare in città'],
        ['By giving voting power only to generals', 'Dando il voto solo ai generali'],
        ['By cancelling all assemblies', 'Cancellando tutte le assemblee']
      ], ['Wages allowed labourers to miss a day’s work to serve the polis.', 'L’indennità permetteva anche ai lavoratori di dedicare tempo alla politica.']),
      q('Who was still EXCLUDED from voting in classical Athenian democracy?', 'Chi restava comunque ESCLUSO dal voto nella democrazia ateniese?', [
        ['Women, enslaved people, and foreign residents (metics)', 'Donne, schiavi e stranieri residenti (meteci)'],
        ['All sailors and rowers', 'Tutti i marinai e rematori'],
        ['Poets and sculptors', 'Poeti e scultori'],
        ['Citizens over age 30', 'I cittadini sopra i 30 anni']
      ], ['Only free adult male citizens born to Athenian parents voted.', 'Votavano solo i maschi adulti liberi figli di genitori ateniesi.']),
      q('Why did the Greek fleet win at Salamis despite being outnumbered?', 'Perché la flotta greca vinse a Salamina pur essendo in inferiorità numerica?', [
        ['Light Greek triremes rammed large Persian ships cramped inside a narrow strait', 'Le leggere triremi speronarono le pesanti navi persiane incastrate nello stretto'],
        ['The sea froze overnight', 'Il mare gelò durante la notte'],
        ['Persian ships had no oars', 'Le navi persiane non avevano remi'],
        ['Spartans swam across to Persia', 'Gli Spartani nuotarono fino in Persia']
      ], ['Geography nullified Persian numbers in narrow Salamis waters.', 'La strettezza del canale rese inutilizzabile la superiorità numerica persiana.']),
      q('Why did Greek historians call Herodotus the "Father of History"?', 'Perché Erodoto è chiamato il "padre della storia"?', [
        ['He investigated eyewitnesses and causes rather than blaming myths alone', 'Raccolse testimonianze e cercò le cause umane degli eventi oltre i miti'],
        ['He built the Parthenon roof', 'Costruì il tetto del Partenone'],
        ['He commanded the Persian navy', 'Comandò la flotta persiana'],
        ['He invented Latin', 'Inventò la lingua latina']
      ], ['Historia literally meant "inquiry" or investigation.', 'La parola greca historia significa proprio "indagine, ricerca".'])
    ]
  }),
  makeHistGeoMission({
    id: 'hist_l1_m6',
    arc: 1,
    sec: 'H1.6',
    pages: '75–88',
    hue: 265,
    title: ['Alexander & The Hellenistic World', 'Alessandro Magno e l’Ellenismo'],
    topic: ['Conquest from Greece to India, cultural fusion & Alexandria', 'Conquiste fino all’Indo, fusione culturale e Alessandria d’Egitto'],
    demon: ['Gordian Knot', 'Nodo Gordiano'],
    tech: ['Scroll Form · Lighthouse Beacon', 'Stile Pergamena · Faro di Alessandria'],
    lessons: [
      {
        vis: 'hg9_alexander_map',
        text: [
          '<p>After Athens and Sparta exhausted each other in the Peloponnesian War, northern Macedon united Greece—and in just 11 years, 20-year-old <b>Alexander the Great</b> marched from Greece across Egypt and Persia all the way to the Indus River without losing a battle!</p>',
          '<p>Dopo che Atene e Sparta si logorarono nella Guerra del Peloponneso, la Macedonia unificò la Grecia: in soli 11 anni il ventenne <b>Alessandro Magno</b> arrivò dalla Grecia all’Egitto, sconfisse l’Impero Persiano e spinse i confini fino al fiume Indo!</p>'
        ]
      },
      {
        vis: 'hg9_hellenism_fusion',
        text: [
          '<p>When Alexander died young (323 BCE), his empire split into kingdoms—yet Greek language and art blended with Egyptian, Persian, and Indian knowledge in a global age called [[Hellenism|Ellenismo]]! Greek became the "English" (lingua franca) of science and trade from Sicily to Afghanistan.</p>',
          '<p>Alla sua morte (323 a.C.) l’impero si divise in regni, ma nacque una cultura mista tra Oriente e Occidente chiamata [[Hellenism|Ellenismo]]: il greco divenne la lingua universale ("l’inglese" di allora!) per scienza, libri e commerci dal Mediterraneo all’Asia.</p>'
        ]
      },
      {
        vis: 'hg9_alexandria_library',
        text: [
          '<p>Its crowning jewel was [[Alexandria in Egypt|Alessandria d’Egitto]]: its towering <b>Lighthouse (Pharos)</b> guided ships while its <b>Great Library</b> gathered scholars like Euclid (geometry), Archimedes (levers & buoyancy!), and Eratosthenes—who calculated Earth’s circumference using two shadows and a stick!</p>',
          '<p>La capitale del sapere fu [[Alexandria in Egypt|Alessandria d’Egitto]]: il suo <b>Faro</b> guidava le navi e la <b>Grande Biblioteca</b> ospitò Euclide, Archimede (leve e galleggiamento!) ed Eratostene, che calcolò la circonferenza della Terra misurando due ombre!</p>'
        ]
      }
    ],
    sort: {
      type: 'sort',
      title: ['Classical Polis vs. Hellenistic Kingdoms', 'Polis Classica o Mondo Ellenistico?'],
      hint: ['Compare the scale and mindset before and after Alexander.', 'Confronta il mondo della piccola polis e quello aperto dell’Ellenismo.'],
      cats: [['Classical Polis Era', 'Età della Polis Classica'], ['Hellenistic World', 'Età Ellenistica']],
      items: [
        { n: ['Small city identity centered on Agora', 'Identità ristretta alla propria città'], i: 'home', c: 0, why: ['Classical Greeks saw themselves as Athenians or Spartans first.', 'I cittadini si identificavano nella piccola comunità cittadina.'] },
        { n: ['Cosmopolitan cities & Great Library of Alexandria', 'Città cosmopolite e Biblioteca di Alessandria'], i: 'globe', c: 1, why: ['Citizens felt part of an inhabited world (oikoumene).', 'Nacque il concetto di cittadino del mondo (cosmopolita).'] },
        { n: ['Koine Greek shared from Egypt to Syria', 'Greco comune parlato dall’Egitto alla Siria'], i: 'chat', c: 1, why: ['One shared Greek dialect linked vast kingdoms.', 'La koiné unificò burocrazia, scienza e mercati.'] },
        { n: ['Citizens voting directly on local laws', 'Voto diretto sulle leggi della singola città'], i: 'vote', c: 0, why: ['Direct democracy thrived only inside compact poleis.', 'La democrazia diretta funzionava su scala cittadina.'] }
      ]
    },
    taunt: ['<p>East and West can never share ideas—keep every border locked!</p>', '<p>Oriente e Occidente non si incontreranno mai: chiudete ogni confine!</p>'],
    quiz: [
      q('What does "Hellenism" describe after Alexander the Great’s conquests?', 'Cosa indica il termine "Ellenismo" dopo le conquiste di Alessandro Magno?', [
        ['The cultural blending of Greek traditions with Egyptian, Persian, and Asian civilizations', 'La fusione della cultura greca con le tradizioni egizie, persiane e orientali'],
        ['The burning of all libraries in Greece', 'La distruzione di tutte le biblioteche greche'],
        ['Returning to Stone Age caves', 'Il ritorno alla vita nelle caverne'],
        ['Banning sea trade forever', 'Il divieto di navigare nel Mediterraneo']
      ], ['Hellenism bridged Greek science and eastern traditions for three centuries.', 'L’Ellenismo unì saperi greci e orientali per tre secoli.']),
      q('Which ancient scientist calculated Earth’s circumference at Alexandria using Sun shadows?', 'Quale scienziato calcolò la circonferenza della Terra ad Alessandria usando le ombre del Sole?', [
        ['Eratosthenes', 'Eratostene'],
        ['Leonidas', 'Leonida'],
        ['Hammurabi', 'Hammurabi'],
        ['Romulus', 'Romolo']
      ], ['By comparing midday shadows in Syene and Alexandria, Eratosthenes got remarkably close!', 'Confrontando le ombre a Siene e Alessandria ottenne un valore precisissimo!']),
      q('Why was the Great Library of Alexandria famous across the ancient world?', 'Perché la Grande Biblioteca di Alessandria divenne leggendaria?', [
        ['It aimed to collect and translate copies of every book in the known world', 'Raccoglieva e traduceva rotoli da tutto il mondo allora conosciuto'],
        ['It sold marble statues only', 'Vendeva soltanto statue di marmo'],
        ['Only soldiers could enter', 'Potevano entrarvi solo i soldati'],
        ['It stood on Mount Olympus', 'Sorgeva in cima al Monte Olimpo']
      ], ['Scholars worked full time researching math, astronomy, medicine, and literature.', 'Scienziati da ogni terra vi lavoravano a tempo pieno.']),
      q('How far east did Alexander’s expedition reach before his troops asked to turn back?', 'Fino a quale grande fiume orientale arrivò Alessandro prima del ritorno?', [
        ['The Indus River (modern Pakistan / northwest India)', 'Il fiume Indo (tra Pakistan e India)'],
        ['Tokyo Bay', 'La baia di Tokyo'],
        ['The Amazon River', 'Il Rio delle Amazzoni'],
        ['The Rhine River', 'Il fiume Reno']
      ], ['Alexander’s army fought all the way across Persia to the Indus Valley.', 'L’esercito raggiunse l’India nord-occidentale dopo aver attraversato l’Asia.'])
    ]
  }),
  makeHistGeoMission({
    id: 'hist_l1_m7',
    arc: 2,
    sec: 'H1.7',
    pages: '89–110',
    hue: 20,
    title: ['Etruscans & Roman Monarchy', 'Etruschi e Monarchia Romana'],
    topic: ['Etruscan confederation, Seven Kings, Tiber bridge & 509 BCE', 'Lega etrusca, Sette Re, Cloaca Maxima e cacciata di Tarquinio'],
    demon: ['Tarquin the Proud', 'Tarquinio il Superbo'],
    tech: ['Scroll Form · Cloaca Drain', 'Stile Pergamena · Cloaca Maxima'],
    lessons: [
      {
        vis: 'hg9_etruscan_cities',
        text: [
          '<p>The Etruscans organized a loose league of 12 city-states (like Veii, Tarquinia, Volterra) rich in iron mines on Elba Island, bronze sculpture, and grid-planned towns. They shaped early Rome—even lending Rome the purple-bordered <i>toga</i> and triumphal ceremonies!</p>',
          '<p>Gli Etruschi formarono una lega di 12 città-stato (Tarquinia, Veio, Volterra) ricche grazie al ferro dell’Isola d’Elba, alla metallurgia e all’urbanistica ordinata. Influenzarono profondamente la prima Roma, lasciandole persino la toga e le cerimonie pubbliche!</p>'
        ]
      },
      {
        vis: 'hg9_roman_kings',
        text: [
          '<p>Rome’s earliest era was a <b>Monarchy (753–509 BCE)</b> with seven traditional kings: Latin/Sabine kings built temples and laws, while the later <b>Etruscan Tarquin kings</b> paved the swampy Forum using the [[Cloaca Maxima|Cloaca Maxima]] sewer—parts of which still drain rainwater in Rome today!</p>',
          '<p>La prima Roma fu una <b>Monarchia (753–509 a.C.)</b>: dopo i primi re latino-sabini, gli ultimi tre re <b>etruschi</b> trasformarono i villaggi in una vera città, bonificando il Foro con la [[Cloaca Maxima|Cloaca Maxima]], una fognatura così solida che funziona ancora in parte oggi!</p>'
        ]
      },
      {
        vis: 'hg9_monarchy_to_republic',
        text: [
          '<p>When the last king, Tarquin the Proud, ruled ruthlessly without listening to the Senate, Roman nobles expelled the monarchy in <b>509 BCE</b> and swore never to allow one absolute king again—creating the <b>Res Publica</b> (Republic).</p>',
          '<p>Quando l’ultimo re, Tarquinio il Superbo, governò da tiranno ignorando il Senato, i Romani lo cacciarono nel <b>509 a.C.</b> giurando di non avere mai più un re assoluto: nacque la <b>Res Publica</b> (Repubblica).</p>'
        ]
      }
    ],
    sort: {
      type: 'sort',
      title: ['Myth vs. Archaeology on Early Rome', 'Mito o Archeologia sulla Prima Roma?'],
      hint: ['Distinguish legendary stories from archaeological facts.', 'Distingui i racconti leggendari dalle prove archeologiche.'],
      cats: [['Roman Legend / Myth', 'Mito e Leggenda'], ['Archaeological Fact', 'Dato Archeologico / Storico']],
      items: [
        { n: ['Twins rescued by a she-wolf', 'Gemelli salvati dalla lupa'], i: 'star', c: 0, why: ['Symbolic origin myth uniting courage and sacred destiny.', 'Racconto simbolico sulla forza e il destino di Roma.'] },
        { n: ['Palatine huts & Forum swamp drainage', 'Capanne sul Palatino e bonifica del Foro'], i: 'arch', c: 1, why: ['Excavations uncover Iron Age postholes and drains.', 'Gli scavi confermano villaggi e opere idrauliche etrusche.'] },
        { n: ['Strategic Tiber island ford & salt route', 'Guado dell’Isola Tiberina e Via Salaria'], i: 'map', c: 1, why: ['Trade tolls at the salt crossing fuelled growth.', 'I commerci del sale alimentarono la crescita urbana.'] },
        { n: ['Exactly seven kings in 244 neat years', 'Esattamente sette re perfetti in 244 anni'], i: 'crown', c: 0, why: ['Ancient writers compressed several rulers into seven symbolic names.', 'Sette è un numero simbolico che riassume più generazioni.'] }
      ]
    },
    taunt: ['<p>A king answers to nobody! Tear down the Senate seats!</p>', '<p>Un re non risponde a nessuno! Sciogliete subito il Senato!</p>'],
    quiz: [
      q('What engineering feat built under the Etruscan kings drained Rome’s central Forum?', 'Quale opera idraulica costruita sotto i re etruschi prosciugò il Foro romano?', [
        ['The Cloaca Maxima (Great Drain)', 'La Cloaca Maxima'],
        ['The Eiffel Tower', 'La Torre Eiffel'],
        ['The Suez Canal', 'Il Canale di Suez'],
        ['The Parthenon roof', 'Il tetto del Partenone']
      ], ['Draining the valley between the hills created Rome’s bustling public square.', 'Bonificando la valle paludosa nacque la piazza centrale del Foro.']),
      q('What key mineral wealth helped Etruscan city-states prosper?', 'Quale risorsa mineraria arricchì le città-stato etrusche?', [
        ['Iron and copper ores (especially on Elba Island and Colline Metallifere)', 'Miniere di ferro e rame (soprattutto Isola d’Elba e Colline Metallifere)'],
        ['Crude oil pipelines', 'Pozzi di petrolio'],
        ['Diamond reefs', 'Barriere di diamanti'],
        ['Uranium mines', 'Miniere di uranio']
      ], ['Etruscan smiths exported fine bronze and iron tools across the Mediterranean.', 'I fabbri etruschi esportavano armi, specchi e utensili nel Mediterraneo.']),
      q('Why do historians suspect there were more than literally "seven" kings of Rome?', 'Perché gli storici pensano ci siano stati più di sette re effettivi a Roma?', [
        ['Seven kings ruling across ~244 years would require impossibly long average reigns', 'Sette re in 244 anni significherebbero regni dalla durata media quasi impossibile'],
        ['Archaeologists found 500 crowns in one cave', 'Sono state trovate 500 corone in una grotta'],
        ['Romans hated the number eight', 'I Romani odiavano il numero otto'],
        ['Monarchy lasted only 3 weeks', 'La monarchia durò solo tre settimane']
      ], ['Tradition likely remembered key symbolic figures representing types of rule.', 'La tradizione riassunse le fasi della città in sette figure esemplari.']),
      q('In what year did Rome traditionally abolish the monarchy and create the Republic?', 'In che anno Roma abolì tradizionalmente la monarchia diventando Repubblica?', [
        ['509 BCE', '509 a.C.'],
        ['476 CE', '476 d.C.'],
        ['1492 CE', '1492 d.C.'],
        ['1861 CE', '1861 d.C.']
      ], ['509 BCE is the foundational date of the Roman Res Publica.', 'Il 509 a.C. segna l’inizio della Repubblica romana.'])
    ]
  }),
  makeHistGeoMission({
    id: 'hist_l1_m8',
    arc: 2,
    sec: 'H1.8',
    pages: '111–136',
    hue: 0,
    title: ['Roman Republic: Law & Mediterranean', 'Repubblica Romana: Leggi e Mare Nostrum'],
    topic: ['Cursus honorum, Twelve Tables, Punic Wars & provinces', 'Cursus honorum, XII Tavole, Guerre Puniche e province'],
    demon: ['Carthage Dreadnought', 'Corazzata di Cartagine'],
    tech: ['Scroll Form · SPQR Seal', 'Stile Pergamena · Sigillo SPQR'],
    lessons: [
      {
        vis: 'hg9_cursus_honorum',
        text: [
          '<p>Think of the Roman [[cursus honorum|cursus honorum]] like levelling up in a career tree: aspiring leaders climbed from <b>Quaestor</b> (treasury), to <b>Aedile</b> (streets & festivals), <b>Praetor</b> (judges), and finally two <b>Consuls</b> (army + government for 1 year)—checked at every step by the Senate and Popular Assemblies (<b>SPQR</b>: Senate and People of Rome)!</p>',
          '<p>Immagina il [[cursus honorum|cursus honorum]] come i livelli di un videogioco civico: si partiva da <b>Questore</b> (tesoreria), poi <b>Edile</b> (strade e giochi), <b>Pretore</b> (giudice), fino ai due <b>Consoli</b> (capi per un solo anno), controllati dal Senato e dalle Assemblee (<b>SPQR</b>)!</p>'
        ]
      },
      {
        vis: 'hg9_twelve_tables',
        text: [
          '<p>In 451–450 BCE, plebeian pressure won the <b>Twelve Tables</b>—bronze tablets posted in the Forum so every Roman knew the laws in black and white! Later, the Licinian-Sextian laws even opened the consulship to plebeians, creating a new mixed elite (<i>nobilitas</i>).</p>',
          '<p>Nel 451–450 a.C. le lotte dei plebei conquistarono le <b>Leggi delle XII Tavole</b>: esposte nel Foro perché tutti conoscessero le regole! Poi le leggi Licinie-Sestie permisero ai plebei di diventare persino consoli.</p>'
        ]
      },
      {
        vis: 'hg9_punic_wars',
        text: [
          '<p>Three brutal <b>Punic Wars</b> (264–146 BCE) pitted Rome against Carthage for control of Sicily, Spain, and Mediterranean shipping. Despite Hannibal’s genius victories at Cannae, Scipio Africanus defeated Carthage at Zama (202 BCE), turning Sicily and overseas lands into Rome’s first tax-paying <b>provinces</b>—and flooding Rome with enslaved workers and wealth.</p>',
          '<p>Tre dure <b>Guerre Puniche</b> (264–146 a.C.) opposero Roma a Cartagine per Sicilia, Spagna e rotte marittime. Nonostante le vittorie di Annibale (Canne), Scipione l’Africano vinse a Zama (202 a.C.): nacquero così le prime <b>province</b> romane fuori dall’Italia, portando ricchezze enormi ma anche grandi squilibri sociali.</p>'
        ]
      }
    ],
    sort: {
      type: 'sort',
      title: ['Match the Roman Magistrate!', 'Abbina il Magistrato Romano!'],
      hint: ['Sort each duty along Rome’s cursus honorum ladder.', 'Associa ogni incarico alla magistratura corretta della Repubblica.'],
      cats: [['Finance & Civic Life (Quaestor / Aedile)', 'Finanze e Città (Questore / Edile)'], ['Justice & Top Command (Praetor / Consul)', 'Giustizia e Comando (Pretore / Console)']],
      items: [
        { n: ['Manage public money & treasury', 'Gestire la cassa e il denaro pubblico'], i: 'coin', c: 0, why: ['Quaestors guarded Rome’s state treasury.', 'I Questori amministravano l’erario pubblico.'] },
        { n: ['Oversee courts & legal trials', 'Dirigere i tribunali e la giustizia'], i: 'scale', c: 1, why: ['Praetors acted as Rome’s senior judges.', 'I Pretori esercitavano il potere giudiziario.'] },
        { n: ['Maintain roads, markets & city grain', 'Curare strade, mercati e rifornimenti'], i: 'home', c: 0, why: ['Aediles kept streets safe and markets stocked.', 'Gli Edili controllavano mercati e opere urbane.'] },
        { n: ['Lead legions & propose laws for 1 year', 'Comandare le legioni e guidare lo Stato'], i: 'shield', c: 1, why: ['Two Consuls held top military and civil imperium.', 'I due Consoli detenevano il comando supremo.'] }
      ]
    },
    taunt: ['<p>Carthage controls the sea! Rome’s farmers will never outlast our fleet!</p>', '<p>Cartagine domina i mari! Nessun contadino romano potrà fermarci!</p>'],
    quiz: [
      q('What does the famous Roman motto "SPQR" stand for?', 'Cosa significa la celebre sigla romana "SPQR"?', [
        ['Senatus PopulusQue Romanus (The Senate and the People of Rome)', 'Senatus PopulusQue Romanus (Il Senato e il Popolo Romano)'],
        ['Super Fast Roman Roads', 'Strade Pubbliche Molto Rapide'],
        ['Spartan Palace Queen Rule', 'Regno della Regina Spartana'],
        ['Senate Prohibits Quiet Reading', 'Solo Patrizi Senza Diritti']
      ], ['SPQR appeared on standards, coins, and buildings across the Roman world.', 'SPQR esprimeva l’unione tra Senato e cittadinanza romana.']),
      q('Why were the Laws of the Twelve Tables (451–450 BCE) a landmark victory for plebeians?', 'Perché le Leggi delle XII Tavole furono una vittoria fondamentale per i plebei?', [
        ['Publishing laws stopped patrician priests from bending unwritten rules secretly', 'Pubblicare leggi scritte impedì ai patrizi di applicare regole orali a proprio vantaggio'],
        ['They abolished the Roman army', 'Abolirono l’esercito romano'],
        ['They gave cars to every citizen', 'Distribuirono carri a tutti'],
        ['They moved Rome to Athens', 'Spostarono Roma ad Atene']
      ], ['Written public law is the bedrock of equal legal predictability.', 'La legge scritta e visibile a tutti tutela i più deboli dall’arbitrio.']),
      q('In the cursus honorum, what safeguarded the Republic from one-man dictatorship?', 'Nel cursus honorum, quale regola proteggeva la Repubblica dalla dittatura?', [
        ['Magistracies were temporary (mostly 1 year) and shared between two or more colleagues', 'Le cariche erano temporanee (di solito 1 anno) e collegiali (almeno due colleghi)'],
        ['Officials ruled for life with no colleagues', 'I capi governavano a vita da soli'],
        ['Elections were banned forever', 'Le elezioni erano vietate per sempre'],
        ['Only kings chose consuls', 'Solo un re nominava i consoli']
      ], ['Annual limits and mutual veto between colleagues prevented tyranny—until the late civil wars.', 'Annualità e collegialità frenavano le ambizioni personali.']),
      q('How did Rome govern newly conquered overseas lands like Sicily after the Punic Wars?', 'Come governò Roma le terre conquistate fuori dall’Italia come la Sicilia?', [
        ['As provinces led by a Roman governor and required to pay tribute/grain taxes', 'Come province affidate a un governatore e tenute a versare tributi e grano'],
        ['As independent rival kingdoms with full voting rights in Rome', 'Come regni indipendenti senza alcun tributo'],
        ['By abandoning all cities immediately', 'Abbandonando subito tutte le città'],
        ['By turning farms into volcanoes', 'Trasformando i campi in vulcani']
      ], ['Provincial grain fed Rome’s growing urban population, while creating huge wealth gaps.', 'Il grano delle province sfamò Roma, cambiando per sempre l’economia italica.'])
    ],
    boss: true
  })
];

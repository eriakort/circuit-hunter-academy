import type { ArcInfo, Mission, UnitInfo } from '../types';
import { makeHistGeoMission, q } from './histGeoCommon';

// ============================================================================
// GRADE 10 (2° Superiore) — Roman Empire, Middle Ages, Islam, Communes & Crisis
// ============================================================================
export const HIST10_UNIT: UnitInfo = {
  title: ['Empire, Middle Ages & Communes', 'Impero, Medioevo e Comuni'],
  ch: 'H2.1–H2.8',
  subject: 'hist10'
};

export const HIST10_ARCS: ArcInfo[] = [
  { n: 1, title: ['From Roman Empire to 476 CE', 'Dall’Impero al 476 d.C.'], pages: '1–44' },
  { n: 2, title: ['Byzantium, Islam & Feudal Europe', 'Bisanzio, Islam ed Europa Feudale'], pages: '45–96' },
  { n: 3, title: ['Year 1000, Communes & 1300s Crisis', 'Anno Mille, Comuni e Crisi del ’300'], pages: '97–148' }
];

export const HIST10_MISSIONS: Mission[] = [
  makeHistGeoMission({
    id: 'hist_l2_m1',
    arc: 0,
    sec: 'H2.1',
    pages: '1–22',
    hue: 10,
    title: ['Crisis of Republic, Caesar & Augustus', 'Crisi della Repubblica, Cesare e Augusto'],
    topic: ['Gracchi reforms, civil wars, Julius Caesar & Augustan Principate', 'Riforme dei Gracchi, guerre civili, Giulio Cesare e Principato'],
    demon: ['Rubicon Warlord', 'Signore del Rubicone'],
    tech: ['Scroll Form · Principate Balance', 'Stile Pergamena · Equilibrio del Principato'],
    lessons: [
      {
        vis: 'hg10_gracchi_crisis',
        text: [
          '<p>Victory over Carthage brought a surprise crisis! Rich landowners snapped up cheap war land and used enslaved labour, pushing small Roman soldier-farmers bankrupt into Rome. When the <b>Gracchi brothers</b> proposed fairer land limits, political violence broke out—armies began obeying ambitious generals like Marius and Sulla rather than the Senate!</p>',
          '<p>Le grandi conquiste portarono una crisi inattesa! I latifondisti comprarono terre lavorate da schiavi e i piccoli contadini-soldati finirono in rovina in città. Quando i fratelli <b>Gracchi</b> proposero di ridistribuire le terre pubbliche, esplose la violenza e gli eserciti divennero fedeli ai generali (Mario, Silla) più che al Senato!</p>'
        ]
      },
      {
        vis: 'hg10_caesar_augustus',
        text: [
          '<p>In 49 BCE, <b>Julius Caesar</b> crossed the Rubicon river ("The die is cast"), reformed debts and the Julian calendar, and became dictator for life until senators assassinated him in 44 BCE. His adopted heir Octavian won the final civil war and took the title [[Augustus|Augusto]] (27 BCE): keeping old Republican names on paper while holding real army & veto power as <i>Princeps</i> ("First Citizen").</p>',
          '<p>Nel 49 a.C. <b>Giulio Cesare</b> varcò il Rubicone, riformò calendario e debiti, ma fu ucciso nel 44 a.C. da congiurati repubblicani. Il figlio adottivo Ottaviano vinse le guerre civili e nel 27 a.C. diventò [[Augustus|Augusto]]: lasciò formalmente vivi Senato e cariche repubblicane, ma concentrò comando militare e poteri chiave come <i>Princeps</i> ("Primo Cittadino")!</p>'
        ]
      },
      {
        vis: 'hg10_pax_romana',
        text: [
          '<p>Under the [[Pax Romana|Pax Romana]] (27 BCE – 180 CE), trade ships glided safely from Britain to Syria, cities boasted paved forums and aqueducts, and Roman citizenship gradually expanded until Caracalla’s 212 CE edict granted it to almost every free resident of the Empire.</p>',
          '<p>Con la [[Pax Romana|Pax Romana]] (27 a.C. – 180 d.C.) i commerci fiorirono dalla Britannia alla Siria, sorsero città monumentali e nel 212 d.C. l’Editto di Caracalla estese la cittadinanza romana a tutti gli abitanti liberi dell’Impero!</p>'
        ]
      }
    ],
    sort: {
      type: 'sort',
      title: ['Republic vs. Augustan Principate', 'Repubblica o Principato di Augusto?'],
      hint: ['Sort each institutional feature between the old Republic and Augustus’ Empire.', 'Confronta le istituzioni della Repubblica e del Principato.'],
      cats: [['Late Republic', 'Tarda Repubblica'], ['Augustan Principate', 'Principato di Augusto']],
      items: [
        { n: ['Two annually rotating Consuls hold real command', 'Due Consoli annuali detengono il comando reale'], i: 'users', c: 0, why: ['Until Sulla and Caesar, consuls directed campaigns.', 'Nella Repubblica il potere esecutivo era annuale e collegiale.'] },
        { n: ['Permanent Princeps controls provinces & legions', 'Il Princeps controlla esercito e province chiave'], i: 'crown', c: 1, why: ['Augustus united imperium proconsulare and tribunicia potestas.', 'Augusto riunì comando militare e veto tribunizio a vita.'] },
        { n: ['Praetorian Guard & professional border legions', 'Guardia Pretoriana e legioni professionali ai confini'], i: 'shield', c: 1, why: ['Augustus turned Rome’s army into a salaried standing force.', 'Augusto rese l’esercito permanente e stipendiato.'] },
        { n: ['Gracchi land-reform conflict in the Forum', 'Scontri sulle leggi agrarie dei Gracchi'], i: 'warn', c: 0, why: ['Social inequality tore late Republican politics apart.', 'La questione agraria aprì le guerre civili repubblicane.'] }
      ]
    },
    taunt: ['<p>Crossing the Rubicon means the Senate’s rules no longer apply to me!</p>', '<p>Varcato il Rubicone, contano solo le mie legioni e non le leggi del Senato!</p>'],
    quiz: [
      q('Why did small Roman peasant farmers lose their land after Rome conquered the Mediterranean?', 'Perché molti piccoli contadini romani persero le terre dopo le grandi conquiste?', [
        ['Long wars kept them away while rich estates bought up land and used enslaved labour', 'Le lunghe guerre li tenevano lontani e i latifondi usavano schiavi a basso costo'],
        ['The Tiber dried up completely for 100 years', 'Il Tevere si prosciugò per un secolo'],
        ['Wheat stopped growing in Italy', 'Il grano non cresceva più in Italia'],
        ['They traded farms for spaceships', 'Scambiarono i campi con navi spaziali']
      ], ['Returning veterans often sold abandoned plots and moved to Rome’s crowded poor quarters.', 'I veterani vendevano i campi incolti inurbando la plebe a Roma.']),
      q('How did Augustus disguise one-man imperial power to avoid Caesar’s fate?', 'Come mascherò Augusto il potere personale per evitare la fine di Cesare?', [
        ['He kept Senate and magistrate titles intact while holding lifelong military & veto authority', 'Mantenne nomi e cariche repubblicane ma concentrò esercito e potere di veto'],
        ['He moved the capital to London', 'Spostò la capitale a Londra'],
        ['He banned the word Rome', 'Vietò la parola Roma'],
        ['He disbanded every army', 'Sciolse ogni esercito']
      ], ['Calling himself Princeps ("first citizen") avoided the hated title of "king".', 'Il titolo di Princeps rispettava formalmente le tradizioni repubblicane.']),
      q('What did Emperor Caracalla’s Constitutio Antoniniana do in 212 CE?', 'Cosa stabilì la Constitutio Antoniniana (Editto di Caracalla) nel 212 d.C.?', [
        ['Granted Roman citizenship to almost all free inhabitants across the Empire', 'Estese la cittadinanza romana a quasi tutti gli abitanti liberi dell’Impero'],
        ['Ended all paved roads', 'Chiuse tutte le strade lastricate'],
        ['Outlawed Latin in Italy', 'Vietò il latino in Italia'],
        ['Split Italy into 50 islands', 'Divise l’Italia in cinquanta isole']
      ], ['Citizenship unified legal rights and tax duties from Spain to Egypt.', 'La cittadinanza universale uniformò diritti civili e obblighi fiscali.']),
      q('Which practical calendar reform introduced under Julius Caesar still shapes our 365-day year?', 'Quale riforma pratica di Giulio Cesare è ancora alla base del nostro anno di 365 giorni?', [
        ['The Julian solar calendar with a leap day every 4 years', 'Il calendario solare giuliano con anno bisestile ogni 4 anni'],
        ['A 10-day week with no months', 'Settimana di dieci giorni senza mesi'],
        ['Changing years every full moon', 'Cambiare anno a ogni luna piena'],
        ['Counting backward from 2000', 'Contare all’indietro dal 2000']
      ], ['July (Iulius) was even named in Caesar’s honour!', 'Persino il mese di luglio (Iulius) porta il suo nome!'])
    ]
  }),
  makeHistGeoMission({
    id: 'hist_l2_m2',
    arc: 0,
    sec: 'H2.2',
    pages: '23–44',
    hue: 292,
    title: ['Christianity, Crisis & 476 CE', 'Cristianesimo, Crisi e 476 d.C.'],
    topic: ['3rd-century crisis, Edict of Milan, Germanic migrations & 476 CE', 'Crisi del III secolo, Editto di Milano, popoli germanici e 476 d.C.'],
    demon: ['Limes Breacher', 'Violatore del Limes'],
    tech: ['Scroll Form · Edict Seal', 'Stile Pergamena · Sigillo di Milano'],
    lessons: [
      {
        vis: 'hg10_empire_split',
        text: [
          '<p>In the 200s CE, Rome hit a perfect storm: plagues, inflation, border raids, and "barracks emperors" toppling each other. Diocletian split administration into East & West (<b>Tetrarchy</b>), and <b>Constantine</b> moved the thriving eastern capital to <b>Constantinople</b> (modern Istanbul) where trade routes and taxes stayed rich!</p>',
          '<p>Nel III secolo d.C. esplose una tempesta perfetta: epidemie, inflazione, scorrerie ai confini e imperatori eletti dalle legioni. Diocleziano divise l’Impero in Oriente e Occidente (<b>Tetrarchia</b>) e <b>Costantino</b> fondò la nuova capitale ricca a <b>Costantinopoli</b>!</p>'
        ]
      },
      {
        vis: 'hg10_christianity_edicts',
        text: [
          '<p>From a tiny persecuted movement, <b>Christianity</b> grew steadily along Roman cities because it welcomed poor people, women, and enslaved workers equally. In <b>313 CE</b> Constantine’s [[Edict of Milan|Editto di Milano]] granted religious freedom; in 380 CE Theodosius made it the Empire’s official religion.</p>',
          '<p>Da piccolo gruppo perseguitato, il <b>Cristianesimo</b> si diffuse nelle città grazie a un messaggio di uguaglianza e carità. Nel <b>313 d.C.</b> Costantino emanò l’[[Edict of Milan|Editto di Milano]] (libertà di culto) e nel 380 d.C. Teodosio lo rese religione ufficiale dell’Impero.</p>'
        ]
      },
      {
        vis: 'hg10_migrations_476',
        text: [
          '<p>Pushed from Asia by the nomadic <b>Huns</b>, Germanic peoples (Visigoths, Vandals, Ostrogoths) crossed Rome’s Rhine–Danube border—first as allied soldiers (<i>foederati</i>), then carving out kingdoms. In <b>476 CE</b>, general Odoacer deposed young Romulus Augustulus: the Western Empire ended quietly, while the Eastern Empire lasted 1,000 more years!</p>',
          '<p>Spinti dalle steppe dagli <b>Unni</b>, vari popoli germanici (Visigoti, Vandali, Ostrogoti) varcarono il confine Reno–Danubio prima come alleati poi come regni autonomi. Nel <b>476 d.C.</b> Odoacre depose Romolo Augustolo: crollava l’Impero d’Occidente, mentre quello d’Oriente durerà altri mille anni!</p>'
        ]
      }
    ],
    sort: {
      type: 'sort',
      title: ['East Survived vs. West Fell in 476 CE', 'Oriente Sopravvissuto vs. Occidente Caduto'],
      hint: ['Why did the Eastern Roman Empire endure while the West fragmented?', 'Confronta i destini delle due metà dell’Impero romano.'],
      cats: [['Eastern Empire (Byzantine)', 'Impero d’Oriente'], ['Western Empire (Fell 476)', 'Impero d’Occidente']],
      items: [
        { n: ['Wealthy trade cities & Constantinople', 'Città mercantili ricche e Costantinopoli'], i: 'coin', c: 0, why: ['Eastern tax revenue stayed strong enough to fund walls and diplomacy.', 'I commerci orientali sostennero esercito e mura solide.'] },
        { n: ['Abandoned towns & feudal rural villas', 'Spopolamento urbano e fuga nelle campagne'], i: 'home', c: 1, why: ['Western cities shrank as trade routes collapsed.', 'Le città occidentali si ridussero per crisi e insicurezza.'] },
        { n: ['Lasted until 1453 CE', 'Continuò fino al 1453 d.C.'], i: 'clock', c: 0, why: ['Historians call the surviving East the Byzantine Empire.', 'L’Impero d’Oriente proseguì come Impero Bizantino.'] },
        { n: ['Fragmented into Romano-Germanic kingdoms', 'Diviso nei regni romano-germanici'], i: 'shield', c: 1, why: ['Ostrogoths, Franks, and Visigoths built new European realms.', 'Ostrogoti, Franchi e Visigoti crearono nuovi regni.'] }
      ]
    },
    taunt: ['<p>Borders have fallen, cities are empty—civilisation is erased forever!</p>', '<p>I confini sono crollati, le città si svuotano: la civiltà è finita!</p>'],
    quiz: [
      q('What did the Edict of Milan (313 CE) officially establish?', 'Cosa stabilì ufficialmente l’Editto di Milano del 313 d.C.?', [
        ['Freedom of worship for Christians and all religions in the Empire', 'Libertà di culto per i cristiani e per tutte le religioni nell’Impero'],
        ['The ban of all other faiths', 'Il divieto di tutte le altre religioni (avvenne nel 380)'],
        ['Moving the Pope to Paris', 'Il trasferimento del Papa a Parigi'],
        ['Taxes on bread in Milan', 'Nuove tasse sul pane a Milano']
      ], ['Constantine legalized Christianity in 313; Theodosius made it sole state religion in 380.', 'Nel 313 arrivò la tolleranza religiosa; solo nel 380 diventò religione di Stato.']),
      q('Why did Germanic tribes move massively across Roman borders in the late 300s–400s CE?', 'Perché i popoli germanici varcarono in massa i confini romani tra IV e V secolo?', [
        ['Triggered by raids from the Huns coming from Central Asia, plus search for land', 'Spinti dalla pressione degli Unni dall’Asia centrale e in cerca di terre'],
        ['To escape snow in Africa', 'Per fuggire dalla neve in Africa'],
        ['Invited for a 1-day holiday', 'Invitati per un giorno di festa'],
        ['Because Rome had zero soldiers in 100 BCE', 'Perché Roma non aveva esercito nel 100 a.C.']
      ], ['Domino migrations pushed Goths across the Danube, reshaping Western Europe.', 'La spinta degli Unni innescò un effetto domino ai confini europei.']),
      q('What happened to the Eastern half of the Roman Empire after 476 CE?', 'Che fine fece la metà Orientale dell’Impero dopo il 476 d.C.?', [
        ['It survived for another thousand years as the Byzantine Empire', 'Sopravvisse per altri mille anni come Impero Bizantino'],
        ['It collapsed on the exact same day', 'Crollò lo stesso identico giorno'],
        ['It merged with the Maya', 'Si fuse con i Maya'],
        ['It sank under the Black Sea', 'Sprofondò nel Mar Nero']
      ], ['Constantinople remained Europe’s wealthiest city throughout the Early Middle Ages.', 'Costantinopoli rimase per secoli il centro più ricco del Mediterraneo.']),
      q('What were the "Romano-Germanic kingdoms"?', 'Che cosa furono i "regni romano-germanici"?', [
        ['New kingdoms blending Germanic warrior rulers with Roman laws, Latin, and bishops', 'Nuovi regni nati dall’incontro tra re germanici, leggi romane, latino e Chiesa'],
        ['Underground stone forts in Antarctica', 'Fortezze sotterranee in Antartide'],
        ['Roman factories in China', 'Fabbriche romane in Cina'],
        ['Greek colonies on Crete', 'Colonie greche a Creta']
      ], ['Theodoric’s Ostrogoths in Italy and Clovis’s Franks fused both traditions.', 'Ostrogoti in Italia e Franchi in Gallia unirono entrambe le tradizioni.'])
    ]
  }),
  makeHistGeoMission({
    id: 'hist_l2_m3',
    arc: 1,
    sec: 'H2.3',
    pages: '45–62',
    hue: 268,
    title: ['Byzantium, Lombards & Monks', 'Bisanzio, Longobardi e Monaci'],
    topic: ['Justinian’s Code, Ravenna mosaics, Lombards in Italy & Benedictines', 'Codice di Giustiniano, Ravenna, Longobardi e Monachesimo'],
    demon: ['Scroll Destroyer', 'Distruttore di Pergamene'],
    tech: ['Scroll Form · Scriptorium Ink', 'Stile Pergamena · Inchiostro dello Scriptorium'],
    lessons: [
      {
        vis: 'hg10_justinian_ravenna',
        text: [
          '<p>In Constantinople, Emperor <b>Justinian</b> (527–565 CE) built the soaring dome of Hagia Sophia and compiled the [[Corpus Juris Civilis|Corpus Juris Civilis]]—organizing centuries of Roman law into clear books that still form the backbone of Italian and European civil law! His army briefly reconquered Italy, making sparkling <b>Ravenna</b> his western showcase.</p>',
          '<p>A Costantinopoli l’imperatore <b>Giustiniano</b> raccolse secoli di diritto romano nel [[Corpus Juris Civilis|Corpus Juris Civilis]], la base dei codici civili europei di oggi! Riconquistò temporaneamente l’Italia facendo di <b>Ravenna</b> (famosa per i mosaici dorati) la capitale bizantina in Occidente.</p>'
        ]
      },
      {
        vis: 'hg10_lombards_italy',
        text: [
          '<p>In <b>568 CE</b> the [[Lombards|Longobardi]] entered northern Italy (giving <i>Lombardy</i> its name!), splitting Italy for 1300 years between Lombard duchies (Pavia, Spoleto, Benevento) and Byzantine coastal strips (Venice, Ravenna, Rome, Naples, Sicily).</p>',
          '<p>Nel <b>568 d.C.</b> arrivarono in Italia i [[Lombards|Longobardi]] (da cui prende nome la Lombardia!): la penisola si spezzò per la prima volta tra terre longobarde (Pavia, Spoleto, Benevento) e aree bizantine (Venezia, Ravenna, Roma, Napoli, Sicilia).</p>'
        ]
      },
      {
        vis: 'hg10_monastic_ora_et_labora',
        text: [
          '<p>While schools vanished in ruined towns, [[Benedictine monasteries|monasteri benedettini]] (founded by Saint Benedict of Norcia with the motto <i>Ora et Labora</i>—"Pray and Work") acted like medieval backup hard drives! Monks drained swamps, farmed, hosted travellers, and hand-copied Greek and Roman books in quiet <i>scriptoria</i>.</p>',
          '<p>Mentre le scuole sparivano nelle città, i [[Benedictine monasteries|monasteri benedettini]] (motto di San Benedetto da Norcia: <i>Ora et Labora</i>, "Prega e lavora") salvarono la cultura! I monaci bonificavano terre, ospitavano viandanti e ricopiavano a mano i libri antichi negli <i>scriptoria</i>.</p>'
        ]
      }
    ],
    sort: {
      type: 'sort',
      title: ['Byzantine vs. Lombard vs. Monastic Role', 'Bizantini, Longobardi o Monaci?'],
      hint: ['Assign each Early Medieval milestone in Italy to the right group.', 'Colloca ogni opera altomedievale al suo protagonista.'],
      cats: [['Byzantine / Monastic Preservation', 'Bizantini e Monasteri'], ['Lombard Rule in Italy', 'Italia Longobarda']],
      items: [
        { n: ['Corpus Juris Civilis & Ravenna gold mosaics', 'Corpus Juris Civilis e mosaici di Ravenna'], i: 'scale', c: 0, why: ['Justinian preserved Roman law and adorned Ravenna.', 'Giustiniano fissò il diritto romano e abbellì Ravenna.'] },
        { n: ['Capital at Pavia & Edict of Rothari (643)', 'Capitale a Pavia ed Editto di Rotari'], i: 'shield', c: 1, why: ['King Rothari wrote down Lombard laws in Latin!', 'Re Rotari mise per iscritto le leggi longobarde in latino!'] },
        { n: ['Hand-copying ancient manuscripts (Ora et Labora)', 'Copiatura dei manoscritti (Ora et Labora)'], i: 'book', c: 0, why: ['Monastic scriptoria rescued classical literature.', 'Gli scriptoria salvarono la letteratura latina e greca.'] },
        { n: ['Duchies of Spoleto and Benevento', 'Ducati di Spoleto e Benevento'], i: 'map', c: 1, why: ['Southern and central inland areas became Lombard duchies.', 'L’interno del Centro-Sud formò ducati longobardi.'] }
      ]
    },
    taunt: ['<p>No printing, no schools—ancient books will rot away forgotten!</p>', '<p>Senza scuole né computer, tutti i libri antichi spariranno per sempre!</p>'],
    quiz: [
      q('Why is Justinian’s "Corpus Juris Civilis" still important to law students today?', 'Perché il "Corpus Juris Civilis" di Giustiniano è ancora importante oggi?', [
        ['It preserved and organized Roman civil law, inspiring modern European legal codes', 'Raccolse e ordinò il diritto romano, ispirando i codici civili europei moderni'],
        ['It invented bicycle traffic rules', 'Inventò le regole per le biciclette'],
        ['It banned written contracts', 'Vietò tutti i contratti scritti'],
        ['It was written on melting ice', 'Fu scritto su blocchi di ghiaccio']
      ], ['Modern European civil codes grew directly out of Justinian’s Digest and Institutes.', 'Dal diritto giustinianeo derivano concetti chiave dei codici civili moderni.']),
      q('What long-term effect did the Lombard invasion of 568 CE have on Italy?', 'Quale conseguenza duratura ebbe l’arrivo dei Longobardi in Italia nel 568 d.C.?', [
        ['It began Italy’s political fragmentation into divided north/south territories for centuries', 'Avviò la frammentazione politica dell’Italia durata oltre tredici secoli'],
        ['It united Italy under one king for 2000 years', 'Unì tutta l’Italia sotto un unico regno per duemila anni'],
        ['It turned Venice into a desert', 'Trasformò Venezia in un deserto'],
        ['It moved Rome to Sicily', 'Spostò Roma in Sicilia']
      ], ['From 568 CE until 1861, Italy remained divided into distinct states and regions.', 'Dal 568 d.C. fino al 1861 l’Italia non conobbe più unità politica.']),
      q('What did Saint Benedict’s motto "Ora et Labora" mean in daily abbey life?', 'Cosa significava il motto benedettino "Ora et Labora" nella vita dei monaci?', [
        ['Balancing prayer with daily manual farming, crafts, and copying manuscripts', 'Alternare preghiera e lavoro quotidiano nei campi, nell’artigianato e negli scriptoria'],
        ['Never working and sleeping all week', 'Dormire tutta la settimana senza lavorare'],
        ['Only soldiers could enter monasteries', 'Solo i cavalieri potevano entrare'],
        ['Burning every Roman scroll', 'Bruciare ogni pergamena antica']
      ], ['Monasteries became engines of farming recovery and literacy.', 'I monasteri furono centri di rinascita agricola e culturale.']),
      q('What marked the Edict of Rothari (643 CE) as a turning point for the Lombards?', 'Perché l’Editto di Rotari (643 d.C.) segnò una svolta per i Longobardi?', [
        ['It replaced private blood feuds with written money fines (guidrigildo) in Latin', 'Sostituì la vendetta privata (faida) con risarcimenti scritti in latino (guidrigildo)'],
        ['It ordered everyone to speak Greek', 'Obbligò tutti a parlare greco'],
        ['It gave Lombardy back to Carthage', 'Restituì la Lombardia a Cartagine'],
        ['It abolished all coins', 'Abolì tutte le monete']
      ], ['Writing Lombard law in Latin marked cultural fusion with Italy’s Roman population.', 'Scrivere le leggi in latino segnò l’integrazione con la popolazione italica.'])
    ]
  }),
  makeHistGeoMission({
    id: 'hist_l2_m4',
    arc: 1,
    sec: 'H2.4',
    pages: '63–78',
    hue: 162,
    title: ['Islam & Mediterranean Crossroads', 'L’Islam e il Crocevia del Mediterraneo'],
    topic: ['622 Hijra, Caliphates, Baghdad science, Sicily & Al-Andalus', 'Egira 622, Califfati, scienza a Baghdad, Sicilia e Al-Andalus'],
    demon: ['Trade Blockader', 'Bloccante delle Rotte'],
    tech: ['Scroll Form · Astrolabe Dial', 'Stile Pergamena · Quadrante dell’Astrolabio'],
    lessons: [
      {
        vis: 'hg10_islam_timeline',
        text: [
          '<p>In <b>622 CE</b> (the <i>Hijra</i>, Year 1 of the Islamic calendar), Muhammad moved from Mecca to Medina, uniting Arabian tribes under strict monotheism (Islam, Quran, Five Pillars). Within a century, the Caliphates stretched from Spain (<b>Al-Andalus</b>) across North Africa and Persia to India!</p>',
          '<p>Nel <b>622 d.C.</b> (l’<i>Egira</i>, inizio del calendario islamico), Maometto si trasferì dalla Mecca a Medina, unendo le tribù arabe nel monoteismo islamico (Corano, Cinque Pilastri). In un secolo i Califfati si estesero dalla Spagna (<b>Al-Andalus</b>) fino all’India!</p>'
        ]
      },
      {
        vis: 'hg10_baghdad_science',
        text: [
          '<p>Far from isolating Europe, Baghdad’s <b>House of Wisdom</b>, Córdoba, and Arab <b>Sicily</b> acted like bright scientific bridges! Scholars translated Greek Aristotle, spread Indian <b>0–9 digits</b>, pioneered <b>algebra</b> (Al-Khwarizmi—whose name gave us <i>algorithm</i>!), perfected the astrolabe, and introduced lemons, rice, cotton, and paper to Italy!</p>',
          '<p>La <b>Casa della Saggezza</b> di Baghdad, Cordova e la <b>Sicilia araba</b> furono ponti di conoscenza! Tradussero i libri greci, diffusero le <b>cifre 0–9</b> dall’India, fondarono l’<b>algebra</b> (da Al-Khwarizmi deriva la parola <i>algoritmo</i>!), perfezionarono l’astrolabio e portarono in Italia agrumi, riso, cotone e carta!</p>'
        ]
      },
      {
        vis: 'hg10_sicily_crossroads',
        text: [
          '<p>Think about Italian words we use every day: <i>zero, cifra, algebra, ammiraglio, limone, cotone, zafferano</i>—all arrived across the medieval Mediterranean through lively Arab-Sicilian and maritime trade!</p>',
          '<p>Pensa a quante parole italiane usiamo ogni giorno: <i>zero, cifra, algebra, ammiraglio, limone, cotone, zafferano</i>—arrivarono tutte nel Medioevo grazie agli scambi nel Mediterraneo e alla splendida Sicilia araba!</p>'
        ]
      }
    ],
    sort: {
      type: 'sort',
      title: ['How Medieval Knowledge Travelled!', 'Come Viaggiava il Sapere nel Medioevo!'],
      hint: ['Sort gifts that came via Baghdad/Sicily vs. northern European feudal manors.', 'Distingui le innovazioni arabo-mediterranee da quelle dell’Europa feudale.'],
      cats: [['Baghdad, Al-Andalus & Sicily', 'Mondo Arabo e Sicilia'], ['European Feudal Manor', 'Europa Feudale']],
      items: [
        { n: ['Hindu-Arabic numerals (0–9) & algebra', 'Cifre 0–9, zero e algebra'], i: 'calc', c: 0, why: ['Calculations became vastly simpler than Roman numerals (MDCCXL).', 'I calcoli divennero enormemente più rapidi dei numeri romani.'] },
        { n: ['Self-sufficient peasant manor (curtis)', 'Azienda agricola chiusa (curtis)'], i: 'home', c: 1, why: ['Rural northern Europe relied on local barter estates.', 'Le campagne europee producevano quasi tutto in loco.'] },
        { n: ['Citrus fruits, rice, cotton & paper', 'Agrumi, riso, cotone e carta'], i: 'sprout', c: 0, why: ['Arab irrigation gardens transformed Sicily and Spain.', 'I giardini irrigati trasformarono l’agricoltura siciliana.'] },
        { n: ['Vassal oath of land for military cavalry', 'Giuramento vassallatico in cambio di feudo'], i: 'shield', c: 1, why: ['Feudal ties bound Frankish knights and lords.', 'Il vassallaggio legava cavalieri e signori feudali.'] }
      ]
    },
    taunt: ['<p>Stick to Roman numerals like MMMDCCCLXXXVIII—who needs zero or paper!</p>', '<p>Tenetevi i numeri romani: chi ha bisogno dello zero o della carta!</p>'],
    quiz: [
      q('Why were Baghdad, Córdoba, and Palermo major scientific hubs during 800–1100 CE?', 'Perché Baghdad, Cordova e Palermo furono grandi centri scientifici tra IX e XI secolo?', [
        ['They preserved Greek works and combined them with Indian numbers, algebra, and medicine', 'Unirono la tradizione greca con le cifre indiane, l’algebra, l’ottica e la medicina'],
        ['They banned all books and translations', 'Vietarono ogni traduzione di libri'],
        ['They only studied Roman gladiator games', 'Studiavano solo giochi gladiatori'],
        ['They had modern Wi-Fi networks', 'Avevano reti Wi-Fi moderne']
      ], ['Arabic translations later brought lost Aristotle and Euclid texts back to Western universities.', 'Le traduzioni arabe riportarono Aristotele ed Euclide alle università europee.']),
      q('Where does the modern computing word "algorithm" come from?', 'Da chi deriva la parola informatica moderna "algoritmo"?', [
        ['9th-century Persian mathematician Al-Khwarizmi, pioneer of algebra', 'Dal matematico persiano del IX secolo Al-Khwarizmi, padre dell’algebra'],
        ['Julius Caesar’s horse', 'Dal cavallo di Giulio Cesare'],
        ['A Roman aqueduct in Milan', 'Da un acquedotto di Milano'],
        ['A Norse Viking ship', 'Da una nave vichinga']
      ], ['Latinized as "Algoritmi", his step-by-step arithmetic manuals changed mathematics forever.', 'Latinizzato in "Algoritmi", i suoi manuali di calcolo trasformarono la matematica.']),
      q('What event in 622 CE marks Year 1 of the Islamic calendar?', 'Quale evento del 622 d.C. segna l’anno 1 del calendario islamico?', [
        ['The Hijra—Muhammad’s migration from Mecca to Medina', 'L’Egira, il trasferimento di Maometto dalla Mecca a Medina'],
        ['The founding of Constantinople', 'La fondazione di Costantinopoli'],
        ['Charlemagne’s coronation', 'L’incoronazione di Carlo Magno'],
        ['The Black Death', 'La Peste Nera']
      ], ['622 CE marks the founding of the first Muslim community in Medina.', 'Il 622 segna la nascita della prima comunità a Medina.']),
      q('Which new crops and irrigation skills enriched medieval Sicily under Arab rule?', 'Quali nuove colture e tecniche arricchirono la Sicilia sotto il dominio arabo?', [
        ['Oranges, lemons, rice, cotton, and underground irrigation channels', 'Arance, limoni, riso, cotone e sofisticati canali irrigui'],
        ['Potatoes and tomatoes from Peru', 'Patate e pomodori dal Perù'],
        ['Only tundra moss', 'Solo muschio della tundra'],
        ['Rubber tyres', 'Pneumatici di gomma']
      ], ['American crops like tomatoes arrived only after 1492; Sicily’s citrus bloomed in the 900s!', 'Pomodori e patate arrivarono dopo il 1492; agrumi e cotone fiorirono nel X secolo!'])
    ]
  }),
  makeHistGeoMission({
    id: 'hist_l2_m5',
    arc: 1,
    sec: 'H2.5',
    pages: '79–96',
    hue: 40,
    title: ['Charlemagne & Feudalism', 'Carlo Magno e il Feudalesimo'],
    topic: ['800 CE Coronation, vassalage pyramid, curtis manor & knights', 'Incoronazione 800, piramide feudale, curtis e cavalieri'],
    demon: ['Iron Tax Baron', 'Barone Feudale'],
    tech: ['Scroll Form · Vassal Banner', 'Stile Pergamena · Vessillo Feudale'],
    lessons: [
      {
        vis: 'hg10_charlemagne_empire',
        text: [
          '<p>On Christmas Day <b>800 CE</b>, Pope Leo III crowned Frankish king [[Charlemagne|Carlo Magno]] as Emperor of the revived <b>Holy Roman Empire</b>—uniting France, Germany, and Northern Italy! He built local schools (Palatine School), standardized neat handwriting (Caroline minuscule), and sent inspectors (<i>missi dominici</i>) to check local counts.</p>',
          '<p>Nella notte di Natale dell’<b>800 d.C.</b>, papa Leone III incoronò [[Charlemagne|Carlo Magno]] Imperatore del <b>Sacro Romano Impero</b> (Francia, Germania e Nord Italia)! Fondò scuole, uniformò una scrittura chiara (minuscola carolingia) e inviò ispettori (<i>missi dominici</i>) a controllare i conti locali.</p>'
        ]
      },
      {
        vis: 'hg10_feudal_pyramid',
        text: [
          '<p>After Charlemagne died and Viking/Magyar raids struck, safety depended on local castles! Kings traded land (a <b>fief</b> / <i>feudo</i>) to loyal lords (<b>vassals</b>) in exchange for armored knights—forming the [[feudal system|sistema feudale]].</p>',
          '<p>Dopo Carlo Magno e le nuove incursioni, la difesa si spostò nei castelli locali! I re concedevano terre (<b>feudo</b>) ai nobili (<b>vassalli</b>) in cambio di cavalieri armati: nacque così la piramide del [[feudal system|sistema feudale]].</p>'
        ]
      },
      {
        vis: 'hg10_curtis_manor',
        text: [
          '<p>Life revolved around the self-sufficient estate ([[curtis|curtis]]): the lord’s reserved fields (<i>pars dominica</i>) and peasant plots (<i>pars massaricia</i>). Peasants owed days of unpaid labour (<i>corvées</i>) in return for castle protection.</p>',
          '<p>L’economia viveva dentro la grande azienda rurale chiusa ([[curtis|curtis]]): una parte gestita direttamente dal signore (<i>pars dominica</i>) e i poderi affidati ai contadini (<i>pars massaricia</i>), che pagavano parte del raccolto e giornate di lavoro gratuito (<i>corvées</i>) in cambio di protezione.</p>'
        ]
      }
    ],
    sort: {
      type: 'sort',
      title: ['Inside the Feudal Curtis', 'Dentro la Curtis Feudale'],
      hint: ['Sort duties and land parts inside the medieval manor.', 'Distingui gli elementi delle terre del signore e dei contadini.'],
      cats: [['Lord’s Reserve & Castle', 'Pars Dominica e Castello'], ['Peasant Plots & Duties', 'Pars Massaricia e Corvées']],
      items: [
        { n: ['Lord’s castle, mill & reserved estate fields', 'Castello, mulino e terre dirette del signore'], i: 'crown', c: 0, why: ['Pars dominica crops belonged wholly to the lord.', 'I prodotti della pars dominica andavano al signore.'] },
        { n: ['Peasant cottage plots (mansi)', 'Poderi coltivati dalle famiglie contadine (mansi)'], i: 'home', c: 1, why: ['Serfs farmed their own plots after Lord’s tasks.', 'I servi della gleba coltivavano piccoli mansi.'] },
        { n: ['Unpaid bridge/harvest days (corvées)', 'Giornate di lavoro gratuito obbligatorio (corvées)'], i: 'clock', c: 1, why: ['Corvées paid for protection without using scarce coins.', 'Le corvées sostituivano affitti in denaro ormai raro.'] },
        { n: ['Toll fees on lord’s oven and river bridge', 'Tasse d’uso su forno e ponte del signore'], i: 'coin', c: 0, why: ['Feudal lords held monopolies (bannalità) on mills and ovens.', 'Il signore aveva il monopolio su mulini e forni.'] }
      ]
    },
    taunt: ['<p>No peasant ever leaves this manor! Lock the castle drawbridge!</p>', '<p>Nessun contadino uscirà mai da questo feudo! Alzate il ponte levatoio!</p>'],
    quiz: [
      q('Why was Charlemagne’s 800 CE coronation such a symbolic event?', 'Perché l’incoronazione di Carlo Magno nell’800 d.C. ebbe enorme valore simbolico?', [
        ['It revived the idea of a unified Christian Roman Empire in Western Europe allied with the Pope', 'Rilanciò l’idea di un Impero cristiano d’Occidente unito e legato al Papa'],
        ['It made Constantinople part of Spain', 'Unì Costantinopoli alla Spagna'],
        ['It ended all castles immediately', 'Eliminò tutti i castelli'],
        ['It launched voyages to Australia', 'Avviò viaggi verso l’Australia']
      ], ['Charlemagne linked Germanic kingship, Roman heritage, and Catholic unity.', 'Carlo unì tradizione franca, eredità romana e cristianità.']),
      q('In feudalism, what did a vassal receive and what did he owe in return?', 'Nel feudalesimo, cosa riceveva il vassallo e cosa prometteva in cambio?', [
        ['He received a fief (land/income) and owed military service and loyalty', 'Riceveva un feudo (terre/rendite) e giurava fedeltà e servizio militare'],
        ['He received gold bars with zero obligations', 'Riceveva oro senza alcun dovere'],
        ['He became Pope automatically', 'Diventava automaticamente Papa'],
        ['He had to burn his own castle', 'Doveva bruciare il proprio castello']
      ], ['Personal homage ("commendatio") bound lord and vassal in mutual defence.', 'Il giuramento di fedeltà creava un patto militare personale.']),
      q('What were "corvées" on a medieval curtis?', 'Che cosa erano le "corvées" nella curtis medievale?', [
        ['Unpaid days of work peasants owed on the lord’s fields and roads', 'Giornate di lavoro gratuito dovute dai contadini sulle terre e opere del signore'],
        ['Silver coins from Venice', 'Monete d’argento di Venezia'],
        ['Silk dresses', 'Abiti di seta'],
        ['University exams', 'Esami universitari']
      ], ['With coins scarce, peasants paid rent mostly in crops and labour days.', 'Con poca moneta in giro, si pagava in raccolti e giornate lavorative.']),
      q('How did Charlemagne keep track of regional counts across his vast empire?', 'Come controllava Carlo Magno l’operato dei conti nelle varie regioni?', [
        ['By sending pairs of travelling royal inspectors called missi dominici', 'Inviando coppie di ispettori imperiali chiamati missi dominici'],
        ['By daily video calls', 'Con videochiamate giornaliere'],
        ['By abandoning laws outside Paris', 'Ignorando le leggi fuori Parigi'],
        ['By letting Vikings vote', 'Facendo votare i Vichinghi']
      ], ['Missi dominici checked courts, collected complaints, and read imperial laws (capitularies).', 'I missi dominici verificavano tribunali e rispetto dei capitolari.'])
    ]
  }),
  makeHistGeoMission({
    id: 'hist_l2_m6',
    arc: 2,
    sec: 'H2.6',
    pages: '97–116',
    hue: 190,
    title: ['Year 1000, Ships & Italian Communes', 'Anno Mille, Repubbliche Marinare e Comuni'],
    topic: ['Agricultural boom, Amalfi/Venice/Genoa/Pisa & rise of Comuni', 'Rinascita agricola, Repubbliche Marinare e nascita dei Comuni'],
    demon: ['Guild Gatekeeper', 'Guardiano della Dogana'],
    tech: ['Scroll Form · Merchant Compass', 'Stile Pergamena · Bussola dei Mercanti'],
    lessons: [
      {
        vis: 'hg10_three_field',
        text: [
          '<p>Around <b>Year 1000</b> Europe woke up! A warmer climate plus four smart inventions—the <b>heavy iron plow</b>, horse collar, watermills, and [[three-field rotation|rotazione triennale]] (leaving 1/3 fallow instead of 1/2!)—boosted harvests by 50%! More food meant booming towns, markets, and guilds.</p>',
          '<p>Intorno all’<b>Anno Mille</b> l’Europa ripartì alla grande! Clima più mite e quattro invenzioni geniali — <b>aratro pesante in ferro</b>, collare rigido per i cavalli, mulini ad acqua e [[three-field rotation|rotazione triennale]] (solo un terzo a riposo invece della metà!) — moltiplicarono i raccolti, facendo rinascere città e mercati!</p>'
        ]
      },
      {
        vis: 'hg10_maritime_republics',
        text: [
          '<p>Italy led Europe’s trade comeback through four [[Maritime Republics|Repubbliche Marinare]]—<b>Amalfi, Pisa, Genoa, and Venice</b>! Their sleek ships linked Europe to Silk Road spices and silks, introducing nautical charts, marine compasses, and double-entry banking ledgers.</p>',
          '<p>L’Italia guidò la ripresa grazie alle quattro [[Maritime Republics|Repubbliche Marinare]] — <b>Amalfi, Pisa, Genova e Venezia</b>! Le loro navi collegavano l’Europa alle sete e spezie d’Oriente, diffondendo la bussola, i portolani e le prime banche moderne!</p>'
        ]
      },
      {
        vis: 'hg10_italian_comuni',
        text: [
          '<p>Inside northern & central Italian cities, merchants and artisans teamed up in [[Guilds|Arti/Corporazioni]] and declared self-government: the free [[Comuni|Comuni]] (Milan, Florence, Bologna, Siena)! Instead of bowing to a castle baron, citizens debated in civic palaces (<i>Broletto</i>) and founded the world’s oldest university at <b>Bologna (1088)</b>!</p>',
          '<p>Nelle città del Centro-Nord, mercanti e artigiani uniti nelle [[Guilds|Arti o Corporazioni]] si resero autonomi dai signori feudali formando i liberi [[Comuni|Comuni]] (Milano, Firenze, Bologna, Siena)! In piazza sorsero i palazzi civici e proprio a <b>Bologna (1088)</b> nacque la prima università del mondo!</p>'
        ]
      }
    ],
    sort: {
      type: 'sort',
      title: ['Old Manor vs. Bustling Comune', 'Vecchia Curtis vs. Libero Comune'],
      hint: ['Sort social changes that arrived after Year 1000 CE.', 'Confronta l’economia chiusa feudale con la città comunale.'],
      cats: [['Early Feudal Era (pre-1000)', 'Età Feudale'], ['Revival & Communes (1000–1200)', 'Rinascita e Comuni']],
      items: [
        { n: ['Three-field rotation & horse collar', 'Rotazione triennale e collare per cavalli'], i: 'sprout', c: 1, why: ['New tech raised harvests and population fast.', 'Nuove tecniche aumentarono raccolti e popolazione.'] },
        { n: ['Coins rare; barter & unpaid corvées', 'Poca moneta; baratto e corvées'], i: 'home', c: 0, why: ['Closed manors traded rarely with distant markets.', 'La curtis era quasi autosufficiente.'] },
        { n: ['Merchant guilds, banks & Maritime Republics', 'Arti, banche e Repubbliche Marinare'], i: 'ship', c: 1, why: ['Silver coins, credit letters, and sea trade surged.', 'Monete, lettere di cambio e flotte rilanciarono l’economia.'] },
        { n: ['Two-field fallow (50% field resting)', 'Rotazione biennale (metà campo a riposo)'], i: 'land', c: 0, why: ['Two-field rotation yielded smaller harvests.', 'Il riposo biennale lasciava metà terra improduttiva.'] }
      ]
    },
    taunt: ['<p>No city merchants can govern themselves—only castle nobles should collect tolls!</p>', '<p>I mercanti non possono governare da soli: i dazi spettano ai baroni!</p>'],
    quiz: [
      q('How did three-field crop rotation increase European food supply after Year 1000?', 'Come aumentò il cibo disponibile la rotazione triennale dopo l’Anno Mille?', [
        ['Only 1/3 of land rested fallow instead of 1/2, plus spring oats/legumes enriched soil', 'Solo 1/3 del campo restava a riposo invece della metà, con legumi e avena in più'],
        ['Farmers burned 100% of fields every June', 'I campi venivano bruciati ogni giugno'],
        ['People stopped eating bread altogether', 'Si smise di coltivare cereali'],
        ['Tractors ran on diesel fuel', 'Si usavano trattori a gasolio']
      ], ['Moving from 50% cultivated to 66.7% cultivated with nitrogen-fixing peas boosted yields.', 'Passare dal 50% al 66,7% di terra coltivata moltiplicò le scorte.']),
      q('Name Italy’s four classic Maritime Republics whose coats of arms sit on the Italian Navy flag.', 'Quali sono le quattro classiche Repubbliche Marinare presenti nello stemma della Marina Italiana?', [
        ['Amalfi, Pisa, Genoa, and Venice', 'Amalfi, Pisa, Genova e Venezia'],
        ['Turin, Milan, Bologna, and Perugia', 'Torino, Milano, Bologna e Perugia'],
        ['Rome, Paris, Madrid, and Lisbon', 'Roma, Parigi, Madrid e Lisbona'],
        ['Athens, Sparta, Corinth, and Rhodes', 'Atene, Sparta, Corinto e Rodi']
      ], ['Their coats of arms still appear together on the Italian Navy ensign today!', 'I loro quattro stemmi compaiono uniti nella bandiera della Marina Militare!']),
      q('What were medieval "Guilds" (Arti / Corporazioni) inside an Italian Comune?', 'Che cosa erano le "Arti" (o Corporazioni) nei Comuni italiani?', [
        ['Associations of skilled artisans and merchants setting quality rules, prices, and civic seats', 'Associazioni di artigiani e mercanti che regolavano qualità, prezzi e vita politica'],
        ['Painting museums for kings only', 'Musei riservati ai re'],
        ['Vikings sailing on lakes', 'Vichinghi sui laghi'],
        ['Monastic dormitories', 'Dormitori dei monasteri']
      ], ['Major Guilds (wool, silk, bankers, judges) literally ran Florence and Siena!', 'Le Arti Maggiori (lana, seta, banchieri) guidavano città come Firenze!']),
      q('Which Italian city founded Europe’s oldest continuously operating university in 1088?', 'Quale città italiana fondò nel 1088 l’università più antica d’Europa ancora attiva?', [
        ['Bologna', 'Bologna'],
        ['Milan', 'Milano'],
        ['Turin', 'Torino'],
        ['Palermo', 'Palermo']
      ], ['Students formed associations (universitas) in Bologna to study Roman law and medicine.', 'Studenti da tutta Europa giunsero a Bologna per studiare diritto e medicina.'])
    ]
  }),
  makeHistGeoMission({
    id: 'hist_l2_m7',
    arc: 2,
    sec: 'H2.7',
    pages: '117–132',
    hue: 340,
    title: ['Papacy, Empire & Frederick II', 'Papato, Impero e Federico II'],
    topic: ['Investiture struggle, Lombard League, Barbarossa & Stupor Mundi', 'Lotta per le Investiture, Lega Lombarda, Barbarossa e Federico II'],
    demon: ['Imperial Crown', 'Corona Imperiale'],
    tech: ['Scroll Form · Legnano Charter', 'Stile Pergamena · Carta di Legnano'],
    lessons: [
      {
        vis: 'hg10_papacy_empire',
        text: [
          '<p>Who was the supreme boss of Europe—the <b>Pope</b> or the <b>Emperor</b>? In the 1070s, Pope Gregory VII and Emperor Henry IV clashed over who could appoint bishops (<b>Investiture Controversy</b>), leading to the famous snow penance at Canossa and the 1122 Concordat of Worms compromise!</p>',
          '<p>Chi comandava in Europa: il <b>Papa</b> o l’<b>Imperatore</b>? Nella <b>Lotta per le Investiture</b> (XI secolo) papa Gregorio VII e l’imperatore Enrico IV si scontrarono sulla nomina dei vescovi, fino all’umiliazione di Canossa e al compromesso di Worms (1122)!</p>'
        ]
      },
      {
        vis: 'hg10_lombard_league',
        text: [
          '<p>When Emperor <b>Frederick Barbarossa</b> tried to strip Italian Communes of their rights to collect taxes and choose mayors, 16 rival cities—Milan, Bologna, Cremona, Venice—set aside quarrels, swore the <b>Pontida Oath</b> (1167), and defeated Barbarossa’s knights at <b>Legnano (1176)</b>, winning city autonomy in the Peace of Constance!</p>',
          '<p>Quando l’imperatore <b>Federico Barbarossa</b> volle togliere ai Comuni tasse e autonomia, città spesso rivali (Milano, Bologna, Cremona, Venezia) si unirono nella <b>Lega Lombarda</b> (1167) e lo sconfissero a <b>Legnano (1176)</b>, ottenendo libertà nella Pace di Costanza!</p>'
        ]
      },
      {
        vis: 'hg10_frederick2',
        text: [
          '<p>Barbarossa’s grandson [[Frederick II of Swabia|Federico II di Svevia]] (nicknamed <i>Stupor Mundi</i>—"Wonder of the World") grew up in sunny Sicily! Fluent in Latin, Arabic, Greek, and Sicilian, he wrote laws (Constitutions of Melfi), built Castel del Monte, founded Naples University (1224), and fostered the Sicilian School—where early Italian poetry (even the sonnet!) was born!</p>',
          '<p>Suo nipote [[Frederick II of Swabia|Federico II di Svevia]], detto <i>Stupor Mundi</i> ("Meraviglia del Mondo"), crebbe nella Sicilia multiculturale! Parlava arabo, greco, latino e volgare, fondò l’Università di Napoli (1224), costruì Castel del Monte e guidò la Scuola Siciliana, dove nacquero il sonetto e la prima poesia italiana!</p>'
        ]
      }
    ],
    sort: {
      type: 'sort',
      title: ['Communals vs. Imperial Power', 'Autonomia Comunale o Potere Imperiale?'],
      hint: ['Sort events and policies between Italian Communes and the Emperors.', 'Distingui le conquiste comunali e le iniziative imperiali.'],
      cats: [['Italian Communes & Papacy', 'Comuni e Autonomie'], ['Emperors (Barbarossa & Frederick II)', 'Impero (Barbarossa / Federico II)']],
      items: [
        { n: ['Lombard League victory at Legnano (1176)', 'Vittoria della Lega Lombarda a Legnano (1176)'], i: 'shield', c: 0, why: ['United cities defended local self-rule and tax rights.', 'Le città unite difesero le loro libertà comunali.'] },
        { n: ['Constitutions of Melfi centralizing Sicily', 'Costituzioni di Melfi in Sicilia'], i: 'crown', c: 1, why: ['Frederick II built a modern centralized state in Southern Italy.', 'Federico II creò uno Stato moderno e centralizzato al Sud.'] },
        { n: ['Peace of Constance confirming city magistrates', 'Pace di Costanza con conferma delle libertà'], i: 'scroll', c: 0, why: ['Barbarossa formally recognized northern cities’ self-government.', 'L’imperatore riconobbe il diritto dei Comuni a eleggere consoli.'] },
        { n: ['University of Naples founded by royal decree (1224)', 'Università di Napoli fondata nel 1224'], i: 'book', c: 1, why: ['Naples became the first state university founded by a monarch.', 'Napoli fu la prima università statale d’Europa.'] }
      ]
    },
    taunt: ['<p>Italian cities are mere rebellious subjects—no town may elect its own leaders!</p>', '<p>Le città sono solo suddite: nessuna può eleggere i propri magistrati!</p>'],
    quiz: [
      q('What was the "Investiture Controversy" between Popes and Emperors?', 'Che cosa fu la "Lotta per le Investiture" tra Papato e Impero?', [
        ['A power struggle over who had the right to appoint and grant authority to bishops', 'Lo scontro su chi avesse il diritto di nominare e investire i vescovi-conti'],
        ['A fight over gold prices in Venice', 'Una disputa sul prezzo dell’oro a Venezia'],
        ['A border war in Scotland', 'Una guerra di confine in Scozia'],
        ['A contest over cathedral height', 'Una gara sull’altezza dei campanili']
      ], ['Because bishops governed cities and lands, controlling their appointment meant political power.', 'I vescovi avevano anche poteri politici e feudali sulle città.']),
      q('Why is the Battle of Legnano (1176) remembered in Italian history (even in the National Anthem)?', 'Perché la battaglia di Legnano (1176) è ricordata persino nell’Inno d’Italia?', [
        ['Rival Italian cities united in the Lombard League to defend local freedom against Barbarossa', 'Città rivali si unirono nella Lega Lombarda difendendo la propria libertà contro il Barbarossa'],
        ['Napoleon crossed the Alps there', 'Vi passò Napoleone con i cannoni'],
        ['It ended the Roman Republic', 'Pose fine alla Repubblica romana'],
        ['Columbus sailed from Legnano', 'Colombo salpò da Legnano']
      ], ['"Dall’Alpi a Sicilia dovunque è Legnano" recalls civic unity defending autonomy.', '"Dall’Alpi a Sicilia dovunque è Legnano" è citato nell’Inno di Mameli!']),
      q('Why was Frederick II called "Stupor Mundi" (Wonder of the World)?', 'Perché Federico II era chiamato "Stupor Mundi" (Meraviglia del Mondo)?', [
        ['For his multilingual court in Sicily uniting science, law, architecture, and early Italian poetry', 'Per la corte multiculturale siciliana tra scienza, leggi, Castel del Monte e poesia'],
        ['Because he banned all books', 'Perché vietò tutti i libri'],
        ['Because he never left Berlin', 'Perché non lasciò mai Berlino'],
        ['Because he built wooden bicycles', 'Perché costruì biciclette di legno']
      ], ['Scholars, poets, and Arabic-Latin translators flourished at his Sicilian court.', 'Alla sua corte nacquero la Scuola Siciliana e grandi scambi scientifici.']),
      q('What literary milestone started at Frederick II’s Sicilian court?', 'Quale grande novità letteraria nacque alla corte siciliana di Federico II?', [
        ['The Sicilian School of vernacular poetry—including the invention of the sonnet', 'La Scuola Siciliana in volgare italiano, dove Giacomo da Lentini inventò il sonetto'],
        ['Newspaper comics', 'I fumetti sui giornali'],
        ['Greek Olympic hymns', 'Gli inni olimpici in greco'],
        ['Silent cinema', 'Il cinema muto']
      ], ['Writing love lyrics in refined Italian rather than Latin opened the path to Dante!', 'Scrivere poesia alta in volgare aprì la strada a Dante e Petrarca!'])
    ]
  }),
  makeHistGeoMission({
    id: 'hist_l2_m8',
    arc: 2,
    sec: 'H2.8',
    pages: '133–148',
    hue: 355,
    title: ['14th-Century Crisis & Signorie', 'Crisi del Trecento e Nascita delle Signorie'],
    topic: ['Little Ice Age famine, 1347 Black Death, revolts & Signorie', 'Carestie, Peste Nera del 1347, rivolte popolari e Signorie'],
    demon: ['Pestilence Spectre', 'Spettro della Pestilenza'],
    tech: ['Scroll Form · Quarantine Seal', 'Stile Pergamena · Sigillo Quarantena'],
    lessons: [
      {
        vis: 'hg10_1300s_crisis',
        text: [
          '<p>In the early 1300s, Europe’s luck flipped: cooling rains (the <b>Little Ice Age</b>) spoiled harvests, causing terrible famines before a deadly passenger arrived aboard trade ships from Crimea in <b>1347</b>—the [[Black Death|Peste Nera]]! Spreading via fleas on ship rats along busy ports like Messina, Genoa, and Venice, it wiped out roughly <b>1/3 of Europe’s population</b> in five years.</p>',
          '<p>All’inizio del ’300 l’Europa subì un brusco calo termico con piogge e carestie; poi nel <b>1347</b> arrivò sulle navi mercantili dalla Crimea la terribile [[Black Death|Peste Nera]]! Diffusa tramite pulci e topi nei porti di Messina, Genova e Venezia, uccise circa <b>un terzo degli europei</b> in cinque anni.</p>'
        ]
      },
      {
        vis: 'hg10_quarantine_recovery',
        text: [
          '<p>Venice & Dubrovnik invented a clever public-health defence still in our vocabulary today: <b>quarantine</b> (from Italian <i>quaranta giorni</i>—waiting 40 days offshore before unloading)! Fewer workers also meant surviving peasants could demand higher wages, while angry textile workers led the 1378 <b>Ciompi Revolt</b> in Florence.</p>',
          '<p>Proprio a Venezia e Ragusa nacque una difesa sanitaria che usiamo ancora oggi: la <b>quarantena</b> (40 giorni di attesa alle navi prima dello sbarco)! Inoltre, con meno braccia disponibili, i lavoratori chiesero paghe più alte e scoppiarono rivolte come il <b>Tumulto dei Ciompi</b> (1378) a Firenze.</p>'
        ]
      },
      {
        vis: 'hg10_comuni_to_signorie',
        text: [
          '<p>Exhausted by endless street fights between <b>Guelphs and Ghibellines</b>, Italian Communes handed power to one strong family or leader—shifting from noisy republic to a stable [[Signoria|Signoria]] (like the Visconti in Milan, Este in Ferrara, and later the Medici in Florence), setting the stage for Renaissance palaces!</p>',
          '<p>Stanchi delle guerre continue tra <b>Guelfi e Ghibellini</b>, molti Comuni affidarono la guida a un solo uomo o famiglia forte: nacquero le [[Signorie|Signorie]] (Visconti a Milano, Este a Ferrara, poi i Medici a Firenze), che portarono ordine e finanziarono poi il Rinascimento!</p>'
        ]
      }
    ],
    sort: {
      type: 'sort',
      title: ['Crisis Shock vs. Social & Political Shift', 'Cause della Crisi o Conseguenze Storiche?'],
      hint: ['Separate triggers of the 1300s crisis from the changes that followed.', 'Distingui i fattori della crisi del Trecento dalle sue conseguenze.'],
      cats: [['Crisis Triggers', 'Fattori della Crisi'], ['Consequences & New Era', 'Conseguenze e Svolte']],
      items: [
        { n: ['Climate cooling & 1315–17 crop failures', 'Raffreddamento climatico e carestie'], i: 'cloud', c: 0, why: ['Malnutrition weakened populations before the plague hit.', 'La denutrizione indebolì la popolazione europea.'] },
        { n: ['Higher wages & end of old serfdom in the West', 'Salari più alti e crisi della servitù'], i: 'coin', c: 1, why: ['Labour scarcity gave survivors stronger bargaining power.', 'La scarsità di manodopera alzò il valore del lavoro.'] },
        { n: ['1347 Black Death carried along sea routes', 'Peste Nera del 1347 lungo le rotte navali'], i: 'ship', c: 0, why: ['Fast trade connections unintentionally sped up contagion.', 'Le rotte commerciali accelerarono il contagio nei porti.'] },
        { n: ['Shift from divided Comuni to Signorie', 'Passaggio dai Comuni alle Signorie'], i: 'crown', c: 1, why: ['Noble families centralized city rule to end factional wars.', 'I Signori pacificarono le fazioni cittadine accentrando il potere.'] }
      ]
    },
    taunt: ['<p>Disease and famine have broken every city—Europe will never recover!</p>', '<p>Peste e carestia hanno piegato ogni città: non vi rialzerete mai più!</p>'],
    quiz: [
      q('How did the Black Death reach Italian ports like Messina and Genoa in 1347?', 'Come raggiunse la Peste Nera porti italiani come Messina e Genova nel 1347?', [
        ['Carried on merchant ships sailing from Crimea through Black Sea and Mediterranean ports', 'Trasportata sulle navi mercantili provenienti dalla Crimea lungo il Mediterraneo'],
        ['Dropped from snow clouds', 'Caduta dalle nuvole di neve'],
        ['Sent via postal envelopes', 'Inviata per posta'],
        ['Brought by Antarctic penguins', 'Portata dai pinguini']
      ], ['Fleas on rats aboard grain and spice ships transmitted Yersinia pestis rapidly.', 'Le pulci sui ratti delle navi mercantili diffusero il batterio nei porti.']),
      q('Where does the modern word "quarantine" originate?', 'Da dove nasce la parola moderna "quarantena"?', [
        ['From "quaranta" (40 days), the Venetian waiting rule for incoming ships during plague outbreaks', 'Da "quaranta" giorni di isolamento imposti alle navi in arrivo a Venezia e Ragusa'],
        ['From 40-year-old bread', 'Dal pane vecchio di 40 anni'],
        ['From a Greek battle', 'Da una battaglia greca'],
        ['From 40 Roman emperors', 'Da quaranta imperatori']
      ], ['Public health boards learned isolating ships stopped hidden infection from entering towns.', 'Le città marinare scoprirono che isolare gli equipaggi fermava il contagio.']),
      q('Why did surviving workers sometimes gain better wages after the 1347–51 plague?', 'Perché i lavoratori sopravvissuti ottennero spesso salari migliori dopo la peste?', [
        ['With fewer farmers and artisans left, landlords had to pay more to attract workers', 'Con meno contadini e artigiani rimasti, il lavoro diventò scarso e più pagato'],
        ['Gold fell from the sky', 'Cadde oro dal cielo'],
        ['Kings abolished money', 'I re abolirono il denaro'],
        ['No one needed bread anymore', 'Nessuno mangiava più pane']
      ], ['When labour supply drops sharply, surviving workers gain leverage—sparking revolts like the Ciompi.', 'La scarsità di manodopera diede più forza contrattuale a contadini e operai.']),
      q('Why did many Italian Communes turn into "Signorie" in the 1300s?', 'Perché molti Comuni italiani si trasformarono in "Signorie" nel Trecento?', [
        ['Exhausted citizens accepted a strong family ruler to end violent Guelph/Ghibelline feuds', 'Stanche di scontri tra Guelfi e Ghibellini, le città cercarono stabilità in un Signore'],
        ['Because cities ran out of stone', 'Perché finirono le pietre da costruzione'],
        ['To obey ancient Egyptian law', 'Per seguire le leggi egizie'],
        ['Emperor Augustus returned', 'Tornò l’imperatore Augusto']
      ], ['Signori kept civic appearances while passing hereditary power within noble dynasties.', 'I Signori mantennero spesso le forme comunali trasformando però il potere in dinastico.'])
    ],
    boss: true
  })
];

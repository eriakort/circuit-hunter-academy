import type { FormulaCard, SubjectTopic } from './formulaData';

export const HIST5_TOPICS: SubjectTopic[] = [
  { id: 'h5-greece-italy', subject: 'hist5', name: ['Ancient Greece & Pre-Roman Italy', 'Grecia Antica e Italia Preromana'] },
  { id: 'h5-rome', subject: 'hist5', name: ['Rome: Kingdom, Republic & Daily Life', 'Roma: Monarchia, Repubblica e Vita Quotidiana'] }
];

export const GEO5_TOPICS: SubjectTopic[] = [
  { id: 'g5-maps-italy', subject: 'geo5', name: ['Maps, Scale & Physical Italy', 'Carte, Scala e Italia Fisica'] },
  { id: 'g5-regions', subject: 'geo5', name: ['Italy’s 20 Regions & UNESCO Heritage', 'Le 20 Regioni e il Patrimonio UNESCO'] }
];

export const HIST9_TOPICS: SubjectTopic[] = [
  { id: 'h9-ancient-east', subject: 'hist9', name: ['Prehistory & Ancient Near East', 'Preistoria e Vicino Oriente Antico'] },
  { id: 'h9-greece-rome', subject: 'hist9', name: ['Polis, Hellenism & Roman Republic', 'Polis, Ellenismo e Roma Repubblicana'] }
];

export const GEO9_TOPICS: SubjectTopic[] = [
  { id: 'g9-earth-systems', subject: 'geo9', name: ['Cartography, Tectonics & Climate', 'Cartografia, Tettonica e Climi'] },
  { id: 'g9-people-europe', subject: 'geo9', name: ['Demographics, Water & Europe', 'Demografia, Acqua ed Europa'] }
];

export const HIST10_TOPICS: SubjectTopic[] = [
  { id: 'h10-empire-earlymed', subject: 'hist10', name: ['Roman Empire to Early Middle Ages', 'Impero Romano e Alto Medioevo'] },
  { id: 'h10-comuni-crisis', subject: 'hist10', name: ['Comuni, Frederick II & 1300s Crisis', 'Comuni, Federico II e Crisi del Trecento'] }
];

export const GEO10_TOPICS: SubjectTopic[] = [
  { id: 'g10-global-hdi', subject: 'geo10', name: ['Globalization, HDI & Inequality', 'Globalizzazione, ISU e Disuguaglianze'] },
  { id: 'g10-macroregions', subject: 'geo10', name: ['Asia, Africa, Americas & Agenda 2030', 'Asia, Africa, Americhe e Agenda 2030'] }
];

export const HIST11_TOPICS: SubjectTopic[] = [
  { id: 'h11-modern-ideas', subject: 'hist11', name: ['Renaissance, Oceans & Reason', 'Rinascimento, Oceani e Ragione'] },
  { id: 'h11-revolutions', subject: 'hist11', name: ['Industrial, Atlantic & Risorgimento', 'Rivoluzioni e Risorgimento Italiano'] }
];

export const GEO11_TOPICS: SubjectTopic[] = [
  { id: 'g11-geopolitics', subject: 'geo11', name: ['Geopolitics, Tourism & Networks', 'Geopolitica, Turismo e Reti TEN-T'] },
  { id: 'g11-hazards', subject: 'geo11', name: ['Italian Seismic & Climate Risks', 'Rischi Sismici e Idrogeologici in Italia'] }
];

export const HIST_GEO_FORMULA_CARDS: FormulaCard[] = [
  {
    id: 'hg-hist5-polis-rome',
    subject: 'hist5',
    topicId: 'h5-greece-italy',
    category: 'hist5',
    title: ['Greek Polis & Italic Mosaic Cheat Sheet', 'Scheda Rapida: Polis Greca e Italia Preromana'],
    formula: 'Polis = Acropolis + Agorà + Chora  |  Rome 753 BCE → Republic 509 BCE',
    rules: [
      {
        name: ['Acropolis vs. Agorà', 'Acropoli vs Agorà'],
        math: 'High hill temples  ·  Lower citizen market',
        desc: ['Religious heights met daily trade and open civic discussion below.', 'La parte alta sacra incontrava la piazza delle assemblee in basso.']
      },
      {
        name: ['Etruscan Arch Gift', 'L’Arco Etrusco'],
        math: 'Keystone + side columns → lasting bridges',
        desc: ['Etruscans passed arches, drainage, and urban grids onward to Rome.', 'Gli Etruschi trasmisero archi, bonifiche e ingegneria a Roma.']
      }
    ],
    example: [
      'Athens centered on sea trade & citizen assembly; Sparta centered on dual kings & hoplite discipline.',
      'Atene puntò su mare e assemblea; Sparta su due re e disciplina militare oplitica.'
    ],
    trap: [
      'Even in ancient Athens, women, enslaved people, and resident foreigners (metics) could not vote.',
      'Anche nell’Atene antica donne, schiavi e stranieri residenti erano esclusi dal voto.'
    ],
    visualKey: 'hg5_greek_polis'
  },
  {
    id: 'hg-hist5-rome-life',
    subject: 'hist5',
    topicId: 'h5-rome',
    category: 'hist5',
    title: ['Roman Republic, Engineering & Daily Life', 'Roma: Repubblica, Strade e Vita Quotidiana'],
    formula: 'Patricians vs Plebeians (494 BCE Tribunes) · Via Appia (80 000 km network)',
    rules: [
      {
        name: ['Plebeian Tribunes', 'Tribuni della Plebe'],
        math: '494 BCE Aventine walkout → Veto power',
        desc: ['Ordinary Romans gained officials able to block unfair patrician decrees.', 'La plebe ottenne magistrati sacri capaci di fermare leggi ingiuste con il veto.']
      },
      {
        name: ['Domus vs. Insulae', 'Domus vs Insulae'],
        math: 'Courtyard atrium vs multi-story flats',
        desc: ['Wealthy Romans lived around rain-fed impluviums while workers rented upper insulae floors.', 'I ricchi vivevano in domus con atrio, i lavoratori in alti condomini popolari.']
      }
    ],
    example: [
      '4-layer Roman stone roads + gravity aqueducts built cities that lasted two millennia.',
      'Strade a 4 strati e acquedotti a gravità resero solide e salubri le città romane.'
    ],
    visualKey: 'hg5_roman_roads'
  },
  {
    id: 'hg-geo5-scale-italy',
    subject: 'geo5',
    topicId: 'g5-maps-italy',
    category: 'geo5',
    title: ['Map Scale & Physical Italy Quick Guide', 'Scala delle Carte e Italia Fisica'],
    formula: '1 : 100 000  ⇒  1 cm = 1 km  |  Alps (4 808 m) · Po (652 km)',
    rules: [
      {
        name: ['Map Scale Rule', 'Leggere la Scala'],
        math: 'Divide denominator cm by 100 000 → km',
        desc: ['1 cm on 1:100 000 equals 1 km; 1:10 000 shows streets close-up.', '1 cm su scala 1 : 100 000 vale 1 km reale; denominatori piccoli indicano grande dettaglio.']
      },
      {
        name: ['Latitude vs. Longitude', 'Latitudine vs Longitudine'],
        math: 'Parallels = N/S Equator · Meridians = E/W Greenwich',
        desc: ['Cross both coordinate angles to locate any point anywhere on Earth.', 'Incrociare paralleli e meridiani individua qualunque luogo sul globo.']
      }
    ],
    example: [
      '3 cm on a 1:100 000 map equals 3 km; Etna is Europe’s tallest active volcano.',
      '3 cm su una carta 1 : 100 000 corrispondono a 3 km; l’Etna è il vulcano attivo più alto d’Europa.'
    ],
    visualKey: 'gg5_map_scale'
  },
  {
    id: 'hg-geo5-regions-unesco',
    subject: 'geo5',
    topicId: 'g5-regions',
    category: 'geo5',
    title: ['20 Italian Regions & 5 Autonomous Statutes', 'Le 20 Regioni Italiane e i 5 Statuti Speciali'],
    formula: '20 Regions (15 Ordinary + 5 Special Statute) · 60+ UNESCO World Sites',
    rules: [
      {
        name: ['5 Special-Statute Regions', '5 Regioni a Statuto Speciale'],
        math: 'Sicily · Sardinia · Aosta Valley · Trentino-AA · Friuli-VG',
        desc: ['Granted extra autonomy for island geography, alpine frontiers, or bilingual heritage.', 'Dotate di autonomia ampliata per insularità, confini alpini e minoranze linguistiche.']
      },
      {
        name: ['Landlocked Umbria', 'Unica Peninsulare senza Mare'],
        math: 'Umbria (Perugia)',
        desc: ['Italy’s only peninsular region without a coastline, famous as the green heart.', 'Unica regione peninsulare italiana senza sbocco sul mare, nota come cuore verde.']
      }
    ],
    example: [
      'Italy holds the world’s largest collection of UNESCO cultural and natural sites.',
      'L’Italia custodisce il maggior numero al mondo di siti riconosciuti dall’UNESCO.'
    ],
    visualKey: 'gg5_islands_autonomous'
  },
  {
    id: 'hg-hist9-timeline',
    subject: 'hist9',
    topicId: 'h9-ancient-east',
    category: 'hist9',
    title: ['Century & BCE Timeline Rules', 'Regole di Cronologia e Secoli'],
    formula: '753 BCE = 8th c. BCE  |  Neolithic ~10 000 BCE · Cuneiform ~3200 BCE',
    rules: [
      {
        name: ['Century Formula', 'Calcolo del Secolo'],
        math: 'Drop last 2 digits (+1 unless ending in 00)',
        desc: ['Year 490 BCE sits in the 5th century BCE; year 509 BCE sits in the 6th century BCE.', 'Il 490 a.C. appartiene al V secolo a.C.; il 509 a.C. al VI secolo a.C.']
      },
      {
        name: ['Phoenician + Greek Alphabet', 'Alfabeto Fonetico'],
        math: '22 Phoenician consonants + Greek vowels = modern script',
        desc: ['One letter per sound democratized reading across Mediterranean cities.', 'Un segno per ogni suono rese accessibile la scrittura oltre gli scribi di palazzo.']
      }
    ],
    example: [
      'In BCE dates, larger numbers mean EARLIER in time: 753 BCE came before 509 BCE.',
      'Avanti Cristo i numeri più alti sono più antichi: il 753 a.C. precede il 509 a.C.'
    ],
    visualKey: 'hg9_sources_timeline'
  },
  {
    id: 'hg-hist9-republic',
    subject: 'hist9',
    topicId: 'h9-greece-rome',
    category: 'hist9',
    title: ['Athenian Democracy vs. Roman SPQR Checks', 'Democrazia Ateniese vs Repubblica Romana (SPQR)'],
    formula: 'Cleisthenes (508 BCE)  ·  SPQR = 2 Annual Consuls + Senate + Comitia + Tribunes',
    rules: [
      {
        name: ['Preventing One-Man Rule', 'Evitare la Tirannide'],
        math: '1-year limits + Mutual Consul Veto',
        desc: ['Every Roman magistrate served with a colleague who could say "Veto" ("I forbid").', 'Ogni magistrato romano durava un anno con un collega dotato di diritto di veto.']
      },
      {
        name: ['Alexander → Hellenism', 'Alessandro → Ellenismo'],
        math: 'Koiné Greek + Alexandria Library',
        desc: ['Euclid, Eratosthenes, and Archimedes turned Alexandria into an ancient MIT.', 'Euclide, Eratostene e Archimede resero Alessandria la capitale scientifica antica.']
      }
    ],
    example: [
      'Rome defeated Carthage across three Punic Wars (264–146 BCE) to control the Mediterranean.',
      'Con le tre Guerre Puniche (264–146 a.C.) Roma divenne padrona del Mediterraneo.'
    ],
    visualKey: 'hg9_cursus_honorum'
  },
  {
    id: 'hg-geo9-projections-earth',
    subject: 'geo9',
    topicId: 'g9-earth-systems',
    category: 'geo9',
    title: ['Projections, Altitude & Tectonic Focus', 'Proiezioni, Isoipse e Tettonica'],
    formula: 'Altitude Lapse Rate ≈ −6 °C / 1 000 m  |  < 1% Liquid Freshwater',
    rules: [
      {
        name: ['Mercator vs. Gall–Peters', 'Mercatore vs Gall–Peters'],
        math: 'Angles true vs Real Area true',
        desc: ['Mercator keeps navigation compass lines true but stretches high latitudes huge.', 'Mercatore conserva gli angoli di rotta ma ingigantisce i poli; Gall–Peters rispetta le aree.']
      },
      {
        name: ['Contour Spacing Rule', 'Lettura delle Isoipse'],
        math: 'Tight lines = steep cliff · Wide lines = gentle slope',
        desc: ['Each contour ring traces equal elevation above sea level.', 'Linee fitte indicano pendio ripido; linee distanziate indicano pendio dolce.']
      }
    ],
    example: [
      'Out of 100 L of Earth water, 97 L are ocean, 2 L frozen ice, and < 1 L liquid freshwater.',
      'Su 100 litri d’acqua sulla Terra, 97 sono salati, 2 ghiacciati e meno di 1 dolce accessibile.'
    ],
    visualKey: 'gg9_water_distribution'
  },
  {
    id: 'hg-geo9-demographics',
    subject: 'geo9',
    topicId: 'g9-people-europe',
    category: 'geo9',
    title: ['Demographic Transition & Europe Mosaic', 'Transizione Demografica e Integrazione Europea'],
    formula: 'Stage 2 Growth = High Births − Falling Deaths  |  EU 27 · Euro 20 · Schengen',
    rules: [
      {
        name: ['Triangle vs. Urn Pyramid', 'Triangolo vs Urna'],
        math: 'Wide base = fast youth growth · Narrow base = aging society',
        desc: ['Sub-Saharan nations show wide triangles; Italy’s urn reveals low births and longevity.', 'La base larga indica molti giovani; la forma a urna segnala bassa natalità e invecchiamento.']
      },
      {
        name: ['Push vs. Pull Factors', 'Spinta vs Attrazione'],
        math: 'War/Drought (Push) → Jobs/Schools (Pull)',
        desc: ['Over 56% of humanity now lives in cities shaped by push-pull migration.', 'Oltre il 56% dell’umanità vive oggi in aree urbane tra fattori push e pull.']
      }
    ],
    example: [
      'Italy ranks as Europe’s second-largest manufacturing hub behind only Germany.',
      'L’Italia è la seconda potenza manifatturiera dell’Unione Europea.'
    ],
    visualKey: 'gg9_age_pyramids'
  },
  {
    id: 'hg-hist10-late-rome',
    subject: 'hist10',
    topicId: 'h10-empire-earlymed',
    category: 'hist10',
    title: ['Empire Split, Islam & Feudal Synthesis', 'Tardo Impero, Islam e Società Feudale'],
    formula: '313 Milan · 380 Thessalonica · 476 Fall of West · 622 Hijra · 800 Charlemagne',
    rules: [
      {
        name: ['Eastern Survival', 'Sopravvivenza di Bisanzio'],
        math: 'West fell 476 CE · East lasted to 1453 CE',
        desc: ['Richer eastern cities, trade ports, and Justinian’s law kept Byzantium strong.', 'Ricchezza urbana, commerci e diritto di Giustiniano tennero saldo l’Impero d’Oriente.']
      },
      {
        name: ['Curtis Self-Sufficiency', 'Economia Curtense'],
        math: 'Pars Dominica (Lord) + Pars Massaricia (Peasants)',
        desc: ['Manors produced food locally while Charlemagne sent missi dominici inspectors.', 'La curtis era autosufficiente mentre i missi dominici controllavano i conti di Carlo Magno.']
      }
    ],
    example: [
      'Baghdad’s House of Wisdom gave Europe the zero, algebra, algorithms, and preserved Aristotle.',
      'La Casa della Sapienza a Baghdad trasmise zero, algebra, algoritmi e classici greci.'
    ],
    visualKey: 'hg10_feudal_pyramid'
  },
  {
    id: 'hg-hist10-comuni-crisis',
    subject: 'hist10',
    topicId: 'h10-comuni-crisis',
    category: 'hist10',
    title: ['After 1000 Rebirth, Comuni & 1300s Crisis', 'Rinascita del Mille, Comuni e Crisi del Trecento'],
    formula: 'Three-Field (1/3 fallow) · 1176 Legnano · 1183 Constance · 1347 Black Death',
    rules: [
      {
        name: ['Maritime & Civic Rise', 'Repubbliche e Comuni'],
        math: 'Venice, Genoa, Amalfi, Pisa + Legnano (1176)',
        desc: ['Three-field harvests fed towns, universities (Bologna 1088), and self-ruling Comuni.', 'Rotazione triennale e traffici alimentarono città, università e autonomie comunali.']
      },
      {
        name: ['Venice’s 40-Day Quarantine', 'Quarantena a Venezia'],
        math: 'Quaranta giorni = modern public health origin',
        desc: ['Post-plague labor scarcity raised worker pay and sparked regional Signorie.', 'La scarsità di manodopera dopo la peste alzò i salari preparando le Signorie rinascimentali.']
      }
    ],
    example: [
      'Frederick II’s multilingual Palermo court birthed Italy’s Sicilian poetry school and Constitutions of Melfi (1231).',
      'Alla corte siciliana di Federico II nacquero la Scuola Poetica Siciliana e le Costituzioni di Melfi.'
    ],
    visualKey: 'hg10_three_field'
  },
  {
    id: 'hg-geo10-global-hdi',
    subject: 'geo10',
    topicId: 'g10-global-hdi',
    category: 'geo10',
    title: ['Globalization Value Chains & UN HDI', 'Globalizzazione e Indice di Sviluppo Umano (ISU)'],
    formula: 'HDI (0–1) = Life Expectancy + Education Years + Income/Capita',
    rules: [
      {
        name: ['Glocal vs. Pure Offshoring', 'Glocal vs Delocalizzazione'],
        math: 'Local DOP uniqueness × Global digital shipping',
        desc: ['Intermodal containers and subsea fiber cut distance, making local quality distinctive.', 'Container e fibra riducono le distanze valorizzando produzioni locali autentiche.']
      },
      {
        name: ['GDP Blindspot', 'Limite del solo PIL'],
        math: 'Same average GDP can hide severe inequality',
        desc: ['HDI reveals whether wealth funds public hospitals, clean water, and girls’ schools.', 'L’ISU misura se la ricchezza genera davvero salute, istruzione e pari opportunità.']
      }
    ],
    example: [
      'One smartphone merges US design, Taiwanese chips, Korean OLEDs, African cobalt, and Asian assembly.',
      'Uno smartphone unisce progettazione USA, chip asiatici, minerali africani e logistica globale.'
    ],
    visualKey: 'gg10_gdp_vs_hdi'
  },
  {
    id: 'hg-geo10-regions-2030',
    subject: 'geo10',
    topicId: 'g10-macroregions',
    category: 'geo10',
    title: ['World Regions & Circular Agenda 2030', 'Macroregioni Mondiali ed Economia Circolare'],
    formula: 'Linear (Mine→Make→Dump) → Circular Loop (Repair·Reuse·Recycle) · 17 SDGs',
    rules: [
      {
        name: ['Regional Contrasts', 'Contrasti Demografici'],
        math: 'Asia ~60% pop · Africa median age ~19 · Aging Europe',
        desc: ['Monsoons water Asia, Africa leapfrogs to mobile solar, and Amazonia regulates world carbon.', 'Monsoni in Asia, leapfrogging africano e tutela dell’Amazzonia disegnano gli equilibri globali.']
      },
      {
        name: ['Italy’s Geothermal Pioneer', 'Primato Geotermico Italiano'],
        math: 'Larderello (Tuscany) · 1904 clean earth steam',
        desc: ['Replacing coal/oil with renewables + circular design anchors all 17 UN Agenda 2030 Goals.', 'Rinnovabili ed economia circolare sostengono i 17 Obiettivi ONU di Agenda 2030.']
      }
    ],
    example: [
      'Circular product design keeps electronics and textiles circulating rather than piling up in landfills.',
      'Progettare beni riparabili e riciclabili trasforma gli scarti in nuove risorse.'
    ],
    visualKey: 'gg10_circular_economy'
  },
  {
    id: 'hg-hist11-reason-print',
    subject: 'hist11',
    topicId: 'h11-modern-ideas',
    category: 'hist11',
    title: ['Printing, 1492 Exchange & Montesquieu', 'Stampa, Scoperte, Metodo e Illuminismo'],
    formula: '1455 Press · 1492 Exchange · 1517 Theses · 1609 Galileo · 1764 Beccaria',
    rules: [
      {
        name: ['3 Branches of Free Government', 'Separazione dei Poteri'],
        math: 'Legislative + Executive + Independent Judicial',
        desc: ['Montesquieu’s checks stop tyranny; Beccaria led Tuscany (1786) to abolish execution.', 'Montesquieu divise i poteri; Beccaria ispirò alla Toscana nel 1786 l’abolizione della pena di morte.']
      },
      {
        name: ['Columbian Exchange Impact', 'Scambio Colombiano'],
        math: 'Americas (tomato/potato) ⇄ Europe (horses/wheat/disease)',
        desc: ['Reshaped Old World diets while devastating Indigenous civilizations across the Americas.', 'Cambiò l’alimentazione europea mentre epidemie e conquiste devastarono i nativi americani.']
      }
    ],
    example: [
      'Brunelleschi invented perspective while Galileo paired telescopes with mathematical experiment.',
      'Brunelleschi creò la prospettiva mentre Galileo unì cannocchiale ed esperimenti matematici.'
    ],
    visualKey: 'hg11_montesquieu_powers'
  },
  {
    id: 'hg-hist11-revolutions',
    subject: 'hist11',
    topicId: 'h11-revolutions',
    category: 'hist11',
    title: ['Steam, 1789 Rights & 1861 Italian Unity', 'Vapore, Rivoluzioni e Unità d’Italia (1861)'],
    formula: '1769 Watt · 1776 USA · 1789 Rights · 1804 Code · 17 Mar 1861 Italy',
    rules: [
      {
        name: ['3 Risorgimento Engines', 'I Tre Protagonisti'],
        math: 'Mazzini (Ideals) + Cavour (Diplomacy) + Garibaldi (Mille)',
        desc: ['Teano handshake (Oct 1860) united North & South; Veneto (1866) & Rome (1870) finished unity.', 'L’incontro di Teano unì Nord e Sud nel 1861, completato con Veneto (1866) e Roma (1870).']
      },
      {
        name: ['Watt Breaks River Limits', 'La Svolta del Vapore'],
        math: 'Coal heat → continuous factory + rail motion',
        desc: ['Mechanized textiles boomed while factory hardships gave birth to labor unions.', 'L’industria tessile e le ferrovie decollarono facendo nascere i primi sindacati operai.']
      }
    ],
    example: [
      'Napoleon’s 1804 Civil Code abolished feudal privileges and spread citizen legal equality across Europe.',
      'Il Codice Civile del 1804 cancellò i privilegi feudali affermando l’uguaglianza davanti alla legge.'
    ],
    visualKey: 'hg11_unification_timeline_1861'
  },
  {
    id: 'hg-geo11-geopolitics',
    subject: 'geo11',
    topicId: 'g11-geopolitics',
    category: 'geo11',
    title: ['Chokepoints, Article 9 & TEN-T Corridors', 'Stretti Strategici, Articolo 9 e Corridoi TEN-T'],
    formula: 'Suez (−8 000 km) · Hormuz · Malacca · Art. 9 (Culture + Environment)',
    rules: [
      {
        name: ['Critical Materials & Cables', 'Materie Critiche e Cavi'],
        math: 'Lithium + Rare Earths + Genoa/Sicily Fiber Landings',
        desc: ['95%+ of world internet travels on seafloor cables while critical batteries depend on few suppliers.', 'Oltre il 95% dei dati viaggia su cavi marini mentre litio e terre rare richiedono riciclo e filiere sicure.']
      },
      {
        name: ['Base Tunnels & Slow Travel', 'Trafori di Base e Turismo'],
        math: 'Gotthard/Brenner rail frees mountain highways; slow borghi beat overtourism',
        desc: ['Low-grade Alpine freight trains cut emissions just as slow tourism preserves historic cities.', 'I trafori di base spostano merci dai TIR ai treni e il turismo lento tutela borghi e città d’arte.']
      }
    ],
    example: [
      'Italy updated Constitutional Article 9 in 2022 to safeguard biodiversity and ecosystems for future generations.',
      'Nel 2022 l’Articolo 9 della Costituzione ha integrato ambiente e biodiversità a tutela delle nuove generazioni.'
    ],
    visualKey: 'gg11_chokepoints_map'
  },
  {
    id: 'hg-geo11-risks',
    subject: 'geo11',
    topicId: 'g11-hazards',
    category: 'geo11',
    title: ['Disaster Risk Formula & Territory Resilience', 'Formula del Rischio e Protezione del Territorio'],
    formula: 'Risk = Hazard × Vulnerability × Exposure  |  78 Venice MOSE Gates',
    rules: [
      {
        name: ['Soil Sponge vs. Sealed Asphalt', 'Suolo Spugna vs Cemento'],
        math: 'Natural earth absorbs storm rain · Concrete accelerates floods',
        desc: ['Stopping riverbed construction and protecting dry-stone terraces sharply cuts landslide tragedies.', 'Evitare cemento negli alvei e curare i terrazzamenti riduce drasticamente alluvioni e frane.']
      },
      {
        name: ['Shrinking Glaciers & MOSE', 'Ghiacciai Alpini e MOSE'],
        math: 'Less summer Po water + air-lifted Venice floodgates',
        desc: ['Cutting structural vulnerability through seismic codes and adaptive engineering saves lives.', 'Norme antisismiche e barriere mobili come il MOSE riducono vulnerabilità e danni.']
      }
    ],
    example: [
      'Seismic retrofits cannot stop tectonic Hazard, yet they slash building Vulnerability to save lives.',
      'L’adeguamento antisismico non elimina i terremoti, ma abbatte la vulnerabilità salvando vite.'
    ],
    visualKey: 'gg11_soil_sealing_sponge'
  }
];

import type { ArcInfo, Mission, UnitInfo } from '../types';
import { makeHistGeoMission, q } from './histGeoCommon';

// ============================================================================
// Grade 10 Geography (Level 2 · 2° Superiore · World Regions & Globalization)
// ============================================================================
export const GEO10_UNIT: UnitInfo = {
  title: ['Level 2 · Globalization & World Regions', 'Livello 2 · Globalizzazione e Macroregioni del Mondo'],
  ch: 'Cap. 1–3',
  subject: 'geo10'
};

export const GEO10_ARCS: ArcInfo[] = [
  {
    n: 1,
    unit: 0,
    subject: 'geo10',
    title: ['Globalization, HDI & Inequality', 'Globalizzazione, ISU e Disuguaglianze'],
    pages: '1–85'
  },
  {
    n: 2,
    unit: 0,
    subject: 'geo10',
    title: ['Asia, Africa & The Americas', 'Asia, Africa e Americhe a Confronto'],
    pages: '86–195'
  },
  {
    n: 3,
    unit: 0,
    subject: 'geo10',
    title: ['Energy Transition & UN Agenda 2030', 'Transizione Energetica e Agenda 2030'],
    pages: '196–260'
  }
];

export const GEO10_MISSIONS: Mission[] = [
  makeHistGeoMission({
    id: 'geo_l2_m1',
    arc: 0,
    sec: '1.1',
    pages: '6–45',
    hue: 192,
    horns: 2,
    eyes: 2,
    title: ['Globalization & Supply Chains', 'Globalizzazione e Catene del Valore'],
    topic: ['Container ships, offshoring, glocal & digital networks', 'Navi portacontainer, delocalizzazione, glocal e reti digitali'],
    demon: ['Tariff Kraken', 'Kraken delle Tariffe'],
    tech: ['Supply-Chain Tracker', 'Tracciatore Filiere'],
    lessons: [
      {
        vis: 'gg10_smartphone_supply_chain',
        text: [
          'Pull a smartphone out of your pocket: it was designed in California, its chips etched in Taiwan, screens crafted in South Korea, cobalt mined in Congo, and final box assembled in Shenzhen or Vietnam—before riding a giant container ship to an Italian store! That worldwide assembly line is <b>globalization</b>.',
          'Guarda il tuo smartphone: progettato in California, processore prodotto a Taiwan, schermo in Corea del Sud, cobalto dal Congo e assemblaggio in Cina o Vietnam, poi su nave portacontainer fino a un negozio italiano. Questa filiera planetaria è la <b>globalizzazione</b>.'
        ]
      },
      {
        vis: 'gg10_container_digital_shrink',
        text: [
          'Why did trade explode after 1970? Standardized metal <b>shipping containers</b> slashed cargo loading times, undersea <b>fiber-optic cables</b> carry internet data in milliseconds, and <b>multinational corporations</b> locate factories where wages or skills fit best (<b>offshoring / delocalizzazione</b>).',
          'Perché i commerci sono esplosi? Il <b>container</b> standardizzato ha abbattuto i tempi di carico nei porti, i cavi in <b>fibra ottica</b> sottomarini inviano dati in millisecondi e le <b>multinazionali</b> praticano la <b>delocalizzazione</b> dove i costi o le competenze convengono.'
        ]
      },
      {
        vis: 'gg10_glocal_balance',
        text: [
          'Globalization isn’t purely one-way uniform fast food: smart regions practice <b>glocalization ("glocal")</b>—blending global reach with proud local identity, like Parmesan DOP cheese or Emilia-Romagna sports cars sold worldwide via e-commerce without losing local artisan roots.',
          'La globalizzazione non cancella per forza le identità locali: molte aree praticano il modello <b>glocal</b> (globale + locale), esportando eccellenze uniche come il Parmigiano Reggiano DOP o la Motor Valley emiliana in tutto il mondo tramite il commercio digitale.'
        ]
      }
    ],
    taunt: [
      'Every product comes from a single neighborhood workshop—borders stop supply chains cold!',
      'Ogni oggetto nasce in un solo quartiere: le filiere globali non esistono!'
    ],
    quiz: [
      q(
        'Why do the design, microchips, minerals, and assembly of a single smartphone cross four or more continents?',
        'Perché progettazione, microchip, minerali e assemblaggio di uno smartphone attraversano più continenti?',
        [
          ['Global value chains split stages across countries with specialized skills, resources, or lower costs', 'Le catene globali del valore dividono ogni fase dove esistono materie prime, competenze o costi competitivi'],
          ['Because international container ships cannot travel under 50 000 km', 'Perché le navi portacontainer non possono fare tragitti brevi'],
          ['Because laws forbid factories from opening inside Asia or Europe', 'Perché la legge vieta le fabbriche'],
          ['Because raw silicon can only be shipped by hot air balloon', 'Perché il silicio viaggia solo in mongolfiera']
        ],
        ['Multinational supply chains fragment production globally before assembling finished goods near shipping hubs.', 'La produzione viene frammentata su scala globale per sfruttare specializzazioni e vantaggi logistici.']
      ),
      q(
        'What physical invention drastically lowered global ocean freight costs since the 1950s?',
        'Quale invenzione fisica ha ridotto drasticamente i costi del trasporto marittimo dagli anni Cinquanta?',
        [
          ['The standardized intermodal shipping container', 'Il container intermodale standardizzato'],
          ['Wooden Viking longboats', 'Le navi vichinghe in legno'],
          ['Hot-air courier balloons', 'Le mongolfiere cargo'],
          ['Horse-drawn coastal barges', 'Chiatte trainate da cavalli']
        ],
        ['Intermodal containers fit cleanly onto ships, trains, and trucks without repacking goods at every port.', 'Il container standard passa direttamente da nave a treno e camion senza scaricare i singoli colli.']
      ),
      q(
        'What does the geographic term "glocal" describe?',
        'Che cosa descrive il concetto geografico "glocal"?',
        [
          ['Connecting unique local traditions and products to global markets and networks', 'L’integrazione tra specificità locali e mercati o reti globali'],
          ['Melting arctic glaciers near coastal ports', 'Lo scioglimento dei ghiacciai artici'],
          ['Banning all international websites in cities', 'Il divieto di siti web internazionali'],
          ['Moving every village factory underground', 'Spostare tutte le fabbriche sottoterra']
        ],
        ['Protected food labels (DOP/IGP) sold worldwide combine local heritage with global trade.', 'Prodotti locali unici come le eccellenze DOP vendute nel mondo uniscono radici locali e mercato globale.']
      ),
      q(
        'What is a potential social risk when companies practice rapid offshoring (delocalizzazione)?',
        'Quale rischio sociale può comportare una rapida delocalizzazione produttiva?',
        [
          ['Job losses in original home towns alongside low wages or weak environmental rules abroad', 'Perdita di posti di lavoro nei territori d’origine e possibile sfruttamento lavorativo o ambientale altrove'],
          ['Instant doubling of local train speeds', 'Raddoppio immediato della velocità dei treni'],
          ['Disappearance of ocean saltiness', 'Scomparsa della salinità marina'],
          ['Automatic equalization of all world salaries in 24 hours', 'Uguaglianza immediata di tutti gli stipendi mondiali']
        ],
        ['Globalization creates enormous wealth and cheaper goods, yet unequal worker protections remain a challenge.', 'La globalizzazione crea ricchezza e prezzi più bassi, ma richiede regole eque per lavoro e ambiente.']
      )
    ]
  }),
  makeHistGeoMission({
    id: 'geo_l2_m2',
    arc: 0,
    sec: '1.2',
    pages: '46–85',
    hue: 265,
    horns: 2,
    eyes: 2,
    title: ['Development, HDI & Global Migration', 'Sviluppo, ISU e Migrazioni Globali'],
    topic: ['GDP vs HDI (life, school, income) & South–North migration flows', 'PIL vs ISU (salute, istruzione, reddito) e rotte migratorie'],
    demon: ['Blind Metric', 'Indice Cieco'],
    tech: ['Human-Index Gauge', 'Misuratore ISU'],
    lessons: [
      {
        vis: 'gg10_gdp_vs_hdi',
        text: [
          'Imagine measuring how well a class is doing ONLY by adding up total pocket money! Two towns could have identical average wealth (<b>GDP per capita</b>), yet one spends it on hospitals and free schools while one tiny billionaire holds everything. That is why the UN created the <b>HDI (Human Development Index / ISU)</b> blending life expectancy, schooling years, and fair income.',
          'Misurare il benessere di un Paese solo col <b>PIL pro capite</b> è come valutare una classe sommando le paghette senza guardare chi studia o sta bene! Per questo l’ONU usa l’<b>ISU (Indice di Sviluppo Umano)</b>, che unisce speranza di vita, istruzione e reddito.'
        ]
      },
      {
        vis: 'gg10_global_inequality',
        text: [
          'Geography still reveals sharp contrasts between the "Global North" and parts of the "Global South"—plus deep pockets of poverty inside rich cities too! Access to clean water, girls’ secondary education, and reliable clinics separates nations far faster than natural resources alone.',
          'Esistono ancora forti divari economici e sociali tra Paesi avanzati ed economie fragili, oltre a disuguaglianze dentro le stesse metropoli. Accesso all’acqua potabile, istruzione femminile e sanità fanno la vera differenza per lo sviluppo.'
        ]
      },
      {
        vis: 'gg10_migration_corridors',
        text: [
          'Around <b>280 million international migrants</b> live outside their birth country—most moving legally for work or study, while millions more flee war or climate drought as <b>refugees</b>. The central Mediterranean route turns southern Italian islands like Lampedusa into Europe’s front doorstep.',
          'Circa <b>280 milioni di persone</b> vivono fuori dal Paese di nascita per studio o lavoro, mentre milioni di <b>rifugiati</b> fuggono da guerre, persecuzioni o siccità climatiche. Il Mediterraneo centrale rende il Sud Italia una delle principali frontiere d’Europa.'
        ]
      }
    ],
    taunt: [
      'Just count total dollars—health, literacy, and inequality never matter!',
      'Conta solo i dollari totali: salute, scuola e disuguaglianze non contano nulla!'
    ],
    quiz: [
      q(
        'Which three pillars make up the UN’s Human Development Index (HDI / ISU)?',
        'Quali tre dimensioni compongono l’Indice di Sviluppo Umano (ISU / HDI) dell’ONU?',
        [
          ['Life expectancy (health), years of education, and per-capita income (standard of living)', 'Speranza di vita (salute), istruzione e reddito pro capite'],
          ['Total stadium seats, oil barrels, and gold reserves', 'Numero di stadi, barili di petrolio e riserve d’oro'],
          ['Mountain peak height, coastline length, and rainfall', 'Altezza dei monti, lunghezza delle coste e piovosità'],
          ['Army tanks, skyscrapers, and export containers', 'Carri armati, grattacieli e container']
        ],
        ['HDI tracks from 0 to 1 whether economic output actually translates into healthy, educated lives.', 'L’ISU varia da 0 a 1 per misurare se la ricchezza si traduce in vita sana e istruzione.']
      ),
      q(
        'Why can a country have high GDP per capita yet lower HDI social wellbeing?',
        'Perché un Paese può avere un PIL pro capite alto ma un benessere sociale inferiore?',
        [
          ['Because wealth may be concentrated in a tiny elite without broad education or healthcare', 'Perché la ricchezza può essere concentrata in poche mani senza scuole o sanità diffuse'],
          ['Because GDP counts only bicycle production', 'Perché il PIL conta solo la produzione di biciclette'],
          ['Because schools always reduce life expectancy', 'Perché le scuole riducono la durata della vita'],
          ['Because HDI ignores human health completely', 'Perché l’ISU ignora la salute']
        ],
        ['GDP measures total production divided by population, hiding how unevenly income and public services are shared.', 'Il PIL è una media matematica che nasconde le disuguaglianze nella distribuzione di redditi e servizi.']
      ),
      q(
        'What distinguishes an asylum-seeking refugee from an economic or student migrant under international law?',
        'Che cosa distingue giuridicamente un rifugiato da un migrante economico o per studio?',
        [
          ['A refugee flees well-founded fear of war, persecution, or violence and cannot safely return home', 'Il rifugiato fugge da guerre, persecuzioni o violenze gravi e non può tornare in sicurezza nel proprio Paese'],
          ['A refugee travels strictly for summer beach vacations', 'Il rifugiato viaggia solo per turismo estivo'],
          ['Refugees are forbidden from applying for protection in Europe', 'I rifugiati non possono chiedere protezione in Europa'],
          ['Migrants move only inside a single city block', 'I migranti si spostano solo nello stesso isolato']
        ],
        ['The 1951 Geneva Convention protects refugees from forced return ("non-refoulement") to danger.', 'La Convenzione di Ginevra del 1951 garantisce protezione internazionale a chi fugge da persecuzioni e conflitti.']
      ),
      q(
        'Why does girls’ secondary education strongly improve a region’s long-term HDI?',
        'Perché l’istruzione secondaria delle ragazze accelera fortemente lo sviluppo umano di un Paese?',
        [
          ['Educated women earn higher incomes, raise healthier children, and drive demographic balance', 'Donne istruite ottengono redditi migliori, tutelano la salute familiare e favoriscono l’equilibrio demografico'],
          ['It stops agriculture completely', 'Ferma completamente l’agricoltura'],
          ['It halves clean drinking water supplies', 'Dimezza l’acqua potabile'],
          ['It bans hospital construction', 'Vieta la costruzione di ospedali']
        ],
        ['Every additional year of girls’ schooling correlates globally with lower infant mortality and stronger communities.', 'Ogni anno in più di scuola riduce la mortalità infantile e rafforza economia e diritti.']
      )
    ]
  }),
  makeHistGeoMission({
    id: 'geo_l2_m3',
    arc: 1,
    sec: '2.1',
    pages: '86–124',
    hue: 350,
    horns: 2,
    eyes: 2,
    title: ['Asia & The Indo-Pacific Powerhouse', 'Asia e Potenze dell’Indo-Pacifico'],
    topic: ['Himalayas & monsoons, China manufacturing, India IT & Japan/Korea', 'Himalaya e monsoni, Cina, India tecnologica, Giappone e Corea'],
    demon: ['Monsoon Titan', 'Titano dei Monsoni'],
    tech: ['Pacific Trade Axis', 'Asse Commerciale Pacifico'],
    lessons: [
      {
        vis: 'gg10_asia_monsoons',
        text: [
          'Asia holds <b>nearly 60% of humanity</b>! Towered over by the <b>Himalayas (Mount Everest, 8 848 m)</b>, South and East Asia pulse to <b>seasonal monsoons</b>: warm wet ocean winds bring vital summer rice rains across India, China, and Southeast Asia—while dry winter winds blow off inland deserts.',
          'L’Asia ospita <b>quasi il 60% dell’umanità</b>! Dominata dall’<b>Himalaya (Everest, 8 848 m)</b>, l’Asia meridionale e orientale segue il ritmo dei <b>monsoni</b>: venti estivi umidi che portano le piogge vitali per il riso, seguiti da inverni secchi.'
        ]
      },
      {
        vis: 'gg10_china_india_engines',
        text: [
          'Over four decades, Asia shifted from rural farms into the world’s factory and digital lab: <b>China</b> became a giant in solar panels, EVs, high-speed rail, and exports; <b>India</b> surpassed China as the world’s most populous nation (over 1,4 billion) with thriving space tech, pharmaceuticals, and Bengaluru software services.',
          'In quarant’anni l’Asia è diventata fabbrica e laboratorio digitale globale: la <b>Cina</b> guida pannelli solari, auto elettriche e ferrovie veloci; l’<b>India</b> ha superato 1,4 miliardi di abitanti puntando su spazio, farmaceutica e informatica (Bengaluru).'
        ]
      },
      {
        vis: 'gg10_japan_korea_tigers',
        text: [
          'Resource-scarce island & peninsula economies like <b>Japan</b> and <b>South Korea</b> built prosperity on ultra-high education, robotics, semiconductors, and cultural exports—though both now face rapid demographic aging and intense Pacific competition.',
          'Poveri di materie prime ma ricchissimi di ricerca e istruzione, <b>Giappone</b> e <b>Corea del Sud</b> hanno puntato su robotica, semiconduttori e tecnologia avanzata, affrontando oggi la sfida di un rapido invecchiamento demografico.'
        ]
      }
    ],
    taunt: [
      'A continent built only of frozen steppes—where could half of humanity live?',
      'Un continente solo di steppe vuote: dove mai vivrebbe metà dell’umanità?'
    ],
    quiz: [
      q(
        'Why are summer monsoon winds crucial to feeding billions of people in South and Southeast Asia?',
        'Perché i monsoni estivi sono vitali per l’alimentazione di miliardi di persone in Asia?',
        [
          ['Moist winds sweeping inland from the Indian & Pacific Oceans water staple crops like rice', 'Venti umidi provenienti dall’Oceano Indiano e Pacifico portano le piogge essenziali per coltivazioni come il riso'],
          ['Monsoons freeze the Ganges river solid in July', 'Congelano il fiume Gange in piena estate'],
          ['Monsoons blow away all Asian mountain ranges', 'Spazzano via le catene montuose'],
          ['They stop rainfall across China and India for 10 months', 'Impediscono qualsiasi pioggia in Cina e India']
        ],
        ['Reversing seasonal land-sea pressure pulls humid ocean air over warm plains every summer.', 'L’inversione termica tra oceano e continente attira piogge abbondanti indispensabili all’agricoltura.']
      ),
      q(
        'Which Asian country recently became the world’s most populous nation while growing into a major software and pharmaceutical hub?',
        'Quale Paese asiatico è diventato recentemente il più popoloso al mondo crescendo come polo informatico e farmaceutico?',
        [
          ['India', 'L’India'],
          ['Mongolia', 'La Mongolia'],
          ['Japan', 'Il Giappone'],
          ['Sri Lanka', 'Lo Sri Lanka']
        ],
        ['India’s young population topped 1.4 billion while cities like Bengaluru and Hyderabad lead global IT exports.', 'Con oltre 1,4 miliardi di abitanti e una forte quota di giovani, l’India è un polo mondiale dell’IT.']
      ),
      q(
        'How did resource-poor countries like Japan and South Korea become industrial and tech giants?',
        'Come hanno fatto Paesi poveri di risorse naturali come Giappone e Corea del Sud a diventare giganti tecnologici?',
        [
          ['By investing heavily in education, R&D, robotics, electronics, and skilled human capital', 'Investendo massicciamente in istruzione, ricerca, robotica, elettronica e capitale umano'],
          ['By pumping vast Arabian oil fields under Tokyo', 'Estraendo petrolio sotto Tokyo'],
          ['By banning every university science degree', 'Vietando le facoltà scientifiche'],
          ['By halting foreign shipping forever', 'Chiudendo per sempre tutti i porti']
        ],
        ['Lacking fossil fuels or iron ore, both economies turned imported raw materials into high-value electronics and machines.', 'Senza materie prime locali, hanno puntato su ingegneria, ricerca e industria ad altissimo valore aggiunto.']
      ),
      q(
        'Roughly what fraction of the world’s human population lives in Asia?',
        'Circa quale frazione della popolazione mondiale vive oggi in Asia?',
        [
          ['Nearly 60% (about 3 out of every 5 people on Earth)', 'Quasi il 60% (circa 3 persone su 5 nel mondo)'],
          ['Less than 10%', 'Meno del 10%'],
          ['Exactly 20%', 'Esattamente il 20%'],
          ['Zero north of the Equator', 'Nessuno a nord dell’Equatore']
        ],
        ['Asia holds roughly 4.7 billion of Earth’s 8 billion people.', 'L’Asia ospita circa 4,7 miliardi degli oltre 8 miliardi di abitanti terrestri.']
      )
    ]
  }),
  makeHistGeoMission({
    id: 'geo_l2_m4',
    arc: 1,
    sec: '2.2',
    pages: '125–158',
    hue: 38,
    horns: 2,
    eyes: 2,
    title: ['Africa: Youth, Resources & Climate Challenge', 'Africa: Giovani, Risorse e Sfida Climatica'],
    topic: ['Nile/Congo/Sahara/Rift Valley, youngest median age & leapfrogging', 'Nilo, Sahara e Rift Valley, continente più giovane e risorse critiche'],
    demon: ['Sahel Mirage', 'Miraggio del Sahel'],
    tech: ['Solar Leapfrog Grid', 'Rete Solare Africana'],
    lessons: [
      {
        vis: 'gg10_africa_belts_rift',
        text: [
          'Think of Africa’s biomes like mirror bands stretching north and south from the lush <b>Congo rainforest</b> at the Equator: tropical savannas, then the vast <b>Sahara</b> (plus Kalahari/Namib in the south), and fertile Mediterranean tips—split down East Africa by the dramatic <b>Great Rift Valley</b> lakes and plateaus.',
          'I biomi africani si dispongono in fasce simmetriche rispetto all’Equatore: foresta pluviale del <b>Congo</b>, savane, i grandi deserti del <b>Sahara</b> e Kalahari fino alle coste mediterranee e australi, solcate a est dalla spettacolare fossa tettonica della <b>Rift Valley</b>.'
        ]
      },
      {
        vis: 'gg10_africa_youth_leapfrog',
        text: [
          'While Europe ages, Africa’s median age is around <b>19 years</b>—making it Earth’s youngest continent! Millions skip legacy copper wires entirely via "<b>technological leapfrogging</b>", using solar micro-grids and mobile phone banking (like M-Pesa in Kenya) straight in rural villages.',
          'Mentre l’Europa invecchia, l’Africa ha un’età mediana di circa <b>19 anni</b>: è il continente più giovane! In molte aree si pratica il "<b>salto tecnologico</b>" (<i>leapfrogging</i>): pagamenti digitali via cellulare e micro-reti solari senza passare dai vecchi cavi fissi.'
        ]
      },
      {
        vis: 'gg10_africa_minerals_sahel',
        text: [
          'Africa holds critical clean-tech minerals—<b>cobalt</b>, platinum, lithium, and solar desert potential—yet many states still export raw ores rather than keeping factory value at home, while the dry <b>Sahel</b> belt south of the Sahara battles desertification.',
          'L’Africa custodisce minerali strategici per la transizione ecologica (<b>cobalto</b>, litio, platino), ma molti Paesi esportano ancora materie prime grezze invece di trasformarle in loco, mentre il <b>Sahel</b> lotta contro la desertificazione.'
        ]
      }
    ],
    taunt: [
      'Sahara from coast to coast—nothing green, young, or digital exists across Africa!',
      'Solo deserto da una costa all’altra: in Africa non esistono innovazione né gioventù!'
    ],
    quiz: [
      q(
        'How does Africa’s age profile compare with Europe’s today?',
        'Come si confronta il profilo demografico dell’Africa rispetto a quello dell’Europa?',
        [
          ['Africa is Earth’s youngest continent (median age ~19), whereas Europe has the oldest aging population', 'L’Africa è il continente più giovane (età mediana ~19 anni), mentre l’Europa invecchia rapidamente'],
          ['Africa has a higher median age than Italy and Japan', 'L’Africa ha un’età mediana più alta di Italia e Giappone'],
          ['Both continents have identical 50-year median ages', 'Entrambi i continenti hanno la stessa età media di 50 anni'],
          ['Neither continent contains growing cities', 'Nessuno dei due continenti ha grandi città']
        ],
        ['Youthful demographics offer Africa a vast future workforce if schools, clinics, and clean-tech jobs expand.', 'Una popolazione giovanissima rappresenta un enorme potenziale se accompagnata da istruzione e lavoro.']
      ),
      q(
        'What is "technological leapfrogging" seen across African economies like Kenya or Rwanda?',
        'Che cosa significa "leapfrogging tecnologico" (salto tecnologico) osservato in Paesi come Kenya o Ruanda?',
        [
          ['Jumping directly to mobile banking and off-grid solar without building costly 20th-century landlines', 'Passare direttamente a pagamenti mobili e micro-reti solari saltando le costose infrastrutture fisse del Novecento'],
          ['Banning cellphones in favor of carrier pigeons', 'Vietare i cellulari a favore dei piccioni viaggiatori'],
          ['Returning every port to wind-only wooden galleons', 'Tornare solo ai velieri in legno'],
          ['Closing all technical universities', 'Chiudere gli istituti tecnici']
        ],
        ['Mobile money networks and decentralized solar panels bypass old centralized wire bottlenecks.', 'Telefonia mobile e fotovoltaico diffuso superano la mancanza di reti fisse tradizionali.']
      ),
      q(
        'Which semi-arid transition belt bordering the southern Sahara faces severe drought and desertification risk?',
        'Quale fascia semi-arida a sud del Sahara affronta forti rischi di siccità e desertificazione?',
        [
          ['The Sahel', 'Il Sahel'],
          ['The Po Valley', 'La Pianura Padana'],
          ['Patagonia', 'La Patagonia'],
          ['Scandinavia', 'La Scandinavia']
        ],
        ['The Sahel stretches from Senegal to Sudan between the Sahara Desert and humid savannas.', 'Il Sahel attraversa l’Africa dal Senegal al Sudan tra deserto del Sahara e savana.']
      ),
      q(
        'What is the Great Rift Valley in East Africa?',
        'Che cos’è la Great Rift Valley nell’Africa orientale?',
        [
          ['A massive tectonic fracture zone where Africa is slowly splitting, lined by deep lakes and volcanoes', 'Una grande fossa tettonica con laghi profondi e vulcani dove la placca africana si sta lentamente dividendo'],
          ['An artificial shipping canal dug across Egypt', 'Un canale artificiale scavato in Egitto'],
          ['A permanent glacier covering Morocco', 'Un ghiacciaio perenne in Marocco'],
          ['A highway tunnel under the Atlantic', 'Un tunnel sotto l’Atlantico']
        ],
        ['Lake Tanganyika, Lake Malawi, and Mount Kilimanjaro trace Africa’s active continental rift.', 'Laghi profondi come il Tanganica e grandi vulcani segnano questa frattura della crosta terrestre.']
      )
    ]
  }),
  makeHistGeoMission({
    id: 'geo_l2_m5',
    arc: 1,
    sec: '2.3',
    pages: '159–195',
    hue: 150,
    horns: 2,
    eyes: 2,
    title: ['The Americas: North & Latin Contrasts', 'Le Americhe: Contrasti fra Nord e Sud'],
    topic: ['Rockies to Andes, Silicon Valley US economy & Amazon carbon lung', 'Rocciose e Ande, economia USA e Amazzonia polmone verde'],
    demon: ['Deforest Saw', 'Sega della Foresta'],
    tech: ['Hemisphere Meridian Shield', 'Scudo Meridiano Americano'],
    lessons: [
      {
        vis: 'gg10_americas_spine',
        text: [
          'Picture the Americas stretching almost from Arctic ice to Antarctic winds along one unbroken western mountain spine: the <b>Rocky Mountains</b> in North America continuing as the towering <b>Andes</b> along South America’s Pacific coast—while vast fertile plains (Mississippi, Amazon, Pampas) open to the east.',
          'Le Americhe corrono da nord a sud quasi da un polo all’altro lungo un’unica spina dorsale occidentale: le <b>Montagne Rocciose</b> a nord e le altissime <b>Ande</b> a sud, mentre a est si stendono immense pianure e bacini (Mississippi, Rio delle Amazzoni, Pampa).'
        ]
      },
      {
        vis: 'gg10_usa_tech_economy',
        text: [
          'In Anglo-America, the <b>United States</b> and <b>Canada</b> combine vast farmland, university research centers, and tech corridors like <b>Silicon Valley</b>—powering software, aerospace, and finance—alongside deep regional debates over healthcare access, urban inequality, and immigration.',
          'Nell’America anglosassone <b>Stati Uniti</b> e <b>Canada</b> uniscono agricoltura meccanizzata, grandi università e poli tecnologici come la <b>Silicon Valley</b>, tra sfide sociali legate a disuguaglianze urbane e sostenibilità.'
        ]
      },
      {
        vis: 'gg10_latin_amazon_biome',
        text: [
          'In <b>Latin America</b> (Mexico through Brazil and Argentina), young megacities like São Paulo and Mexico City sit beside vital global ecosystems: the <b>Amazon rainforest</b> stores billions of tons of carbon and hosts unmatched biodiversity—making deforestation a planetary climate issue, not merely regional.',
          'L’<b>America Latina</b> unisce grandi metropoli come San Paolo e Città del Messico a ecosistemi cruciali per tutto il pianeta: la <b>foresta amazzonica</b> assorbe enormi quantità di CO₂ e regola il clima globale, rendendo la sua tutela una priorità mondiale.'
        ]
      }
    ],
    taunt: [
      'Chop down the Amazon rainforest—tropical trees have zero effect on rain or climate outside Brazil!',
      'Taglia tutta l’Amazzonia: le foreste tropicali non c’entrano niente con il clima del pianeta!'
    ],
    quiz: [
      q(
        'Which pair forms the long western mountain backbone stretching from Alaska to Cape Horn?',
        'Quali due catene formano la lunga spina dorsale montuosa occidentale dalle zone artiche al Capo Horn?',
        [
          ['The Rocky Mountains in North America and the Andes in South America', 'Le Montagne Rocciose in Nord America e le Ande in Sud America'],
          ['The Alps and Pyrenees', 'Alpi e Pirenei'],
          ['The Urals and Apennines', 'Urali e Appennini'],
          ['The Himalayas and Atlas', 'Himalaya e Atlante']
        ],
        ['Subduction along the eastern Pacific rim raised the Rockies and the younger, higher Andes.', 'La subduzione lungo il margine pacifico ha sollevato Montagne Rocciose e Ande.']
      ),
      q(
        'Why does protecting the Amazon Basin matter directly to every continent’s climate?',
        'Perché proteggere il bacino dell’Amazzonia è cruciale per il clima dell’intero pianeta?',
        [
          ['Its vast rainforest absorbs massive CO₂ carbon stores, releases moisture ("flying rivers"), and guards biodiversity', 'Assorbe enormi quantità di CO₂, alimenta il ciclo delle piogge e custodisce un’immensa biodiversità'],
          ['It generates all European winter snowfall directly from sand', 'Produce tutta la neve europea dalla sabbia'],
          ['It supplies 90% of Mediterranean seawater', 'Fornisce il 90% dell’acqua del Mediterraneo'],
          ['It melts Arctic polar ice on purpose', 'Serve a sciogliere i ghiacci polari']
        ],
        ['Deforestation releases stored carbon and disrupts South American rainfall patterns.', 'La deforestazione libera carbonio e altera il regime idrico e climatico globale.']
      ),
      q(
        'Which economic region in California became synonymous with software, semiconductors, and venture capital?',
        'Quale area californiana è diventata sinonimo mondiale di informatica, semiconduttori e innovazione digitale?',
        [
          ['Silicon Valley (San Francisco Bay Area)', 'La Silicon Valley (Area della Baia di San Francisco)'],
          ['Patagonia', 'La Patagonia'],
          ['The Pampas grasslands', 'La Pampa argentina'],
          ['Hudson Bay', 'La Baia di Hudson']
        ],
        ['Close links between Stanford/Berkeley labs and tech startups fueled the modern digital economy.', 'Lo stretto legame tra università, ricerca e startup ha guidato la rivoluzione digitale.']
      ),
      q(
        'What historical cultural divide explains the labels "Anglo-America" vs. "Latin America"?',
        'Quale eredità storica spiega la distinzione culturale tra America Anglosassone e America Latina?',
        [
          ['Predominant English/French heritage in the North vs. Spanish/Portuguese language and heritage from Mexico south', 'Prevalenza di retaggio anglosassone a nord rispetto a lingue e tradizioni spagnola e portoghese dal Messico in giù'],
          ['Different volcanic rock colors', 'Il diverso colore delle rocce vulcaniche'],
          ['Absence of rivers in South America', 'L’assenza di fiumi in Sud America'],
          ['Exclusive Greek colonization in Brazil', 'La colonizzazione greca in Brasile']
        ],
        ['Languages spoken across the hemisphere still reflect 16th–18th century colonial histories alongside Indigenous and African roots.', 'Le lingue diffuse riflettono la storia coloniale intrecciata alle culture indigene e afroamericane.']
      )
    ]
  }),
  makeHistGeoMission({
    id: 'geo_l2_m6',
    arc: 2,
    sec: '3.1 · BOSS',
    pages: '196–260',
    hue: 142,
    horns: 3,
    eyes: 3,
    boss: true,
    title: ['Energy Transition & UN Agenda 2030', 'Transizione Energetica e Agenda 2030'],
    topic: ['Fossil fuels vs renewables, circular economy & SDGs 2030', 'Fonti fossili vs rinnovabili, economia circolare e Agenda 2030'],
    demon: ['Carbon Smoglord', 'Signore dello Smog'],
    tech: ['Circular SDG Core', 'Nucleo Circolare 2030'],
    lessons: [
      {
        vis: 'gg10_energy_mix_compare',
        text: [
          'For 150 years humanity ran on ancient buried sunlight—<b>coal, oil, and natural gas</b>—releasing greenhouse CO₂ that traps extra heat like a closed car in July! Clean <b>renewables</b> (solar panels, wind turbines, hydroelectric alpine dams, geothermal steam in Tuscany’s Larderello) power economies without exhausting finite deposits or warming the sky.',
          'Per 150 anni abbiamo bruciato <b>carbone, petrolio e gas</b>, accumulando CO₂ che intrappola calore come un’auto al sole! Le <b>energie rinnovabili</b> (solare, eolico, idroelettrico alpino e geotermico come a Larderello in Toscana) producono energia pulita e inesauribile.'
        ]
      },
      {
        vis: 'gg10_circular_economy',
        text: [
          'Our old economy followed a straight waste line: <i>Take → Make → Throw away</i>. The <b>circular economy</b> bends that line into a loop: design phones and clothes to be repaired, shared, disassembled, and recycled so one factory’s scrap becomes another factory’s raw material!',
          'L’economia lineare seguiva la retta: <i>Estrai → Produci → Getta</i>. L’<b>economia circolare</b> chiude il cerchio: progettare beni durevoli, riparabili e riciclabili così che lo scarto di una filiera diventi nuova materia prima!'
        ]
      },
      {
        vis: 'gg10_agenda_2030_sdgs',
        text: [
          'Signed by 193 countries in 2015, the <b>UN Agenda 2030</b> sets <b>17 Sustainable Development Goals (SDGs)</b>—proving planet and people belong together: ending poverty & hunger (Goals 1–2), quality education & gender equality (Goals 4–5), clean energy & cities (Goals 7, 11), and climate action (Goal 13).',
          'Sottoscritta da 193 Paesi nel 2015, l’<b>Agenda 2030 dell’ONU</b> fissa <b>17 Obiettivi di Sviluppo Sostenibile</b> legando giustizia sociale ed ecologia: zero povertà, istruzione di qualità, parità di genere, energia pulita, città sostenibili e lotta al cambiamento climatico.'
        ]
      }
    ],
    taunt: [
      'Dig, burn, toss into landfills, repeat forever—planetary limits are a myth!',
      'Estrai, brucia, getta in discarica per sempre: i limiti del pianeta sono solo un’invenzione!'
    ],
    quiz: [
      q(
        'How does a "circular economy" fundamentally improve on the traditional linear model?',
        'In che cosa l’economia circolare supera il modello lineare tradizionale?',
        [
          ['It designs products for repair, reuse, and recycling so waste loops back as new inputs', 'Progetta prodotti per riparazione, riuso e riciclo affinché gli scarti tornino nuove risorse'],
          ['It burns plastic packaging faster outdoors', 'Brucia gli imballaggi più velocemente all’aperto'],
          ['It forces electronics to break after six months', 'Programma la rottura rapida dei dispositivi'],
          ['It doubles landfill mountain heights every decade', 'Raddoppia le discariche ogni dieci anni']
        ],
        ['Extending product lifespan and recovering materials lowers mining pressure, energy use, and pollution.', 'Allungare la vita dei beni e recuperare materiali riduce estrazione, consumi energetici e rifiuti.']
      ),
      q(
        'Which pioneer Italian site has generated renewable geothermal electricity from volcanic steam since 1904?',
        'Quale località italiana produce energia geotermica rinnovabile dal vapore terrestre fin dal 1904?',
        [
          ['Larderello in Tuscany', 'Larderello in Toscana'],
          ['Sanremo in Liguria', 'Sanremo in Liguria'],
          ['Rimini in Emilia-Romagna', 'Rimini in Emilia-Romagna'],
          ['Lecce in Puglia', 'Lecce in Puglia']
        ],
        ['Larderello built the world’s first geothermal power plant, harnessing underground volcanic heat.', 'A Larderello nacque la prima centrale geotermoelettrica della storia.']
      ),
      q(
        'What core principle unites the 17 goals of the UN Agenda 2030?',
        'Quale principio chiave unisce i 17 obiettivi dell’Agenda 2030 dell’ONU?',
        [
          ['Environmental protection, fair human prosperity, and social justice must advance together', 'Tutela ambientale, prosperità economica equa e diritti sociali devono procedere insieme'],
          ['Only coal-mining towns receive clean water', 'Solo le aree minerarie ricevono acqua pulita'],
          ['Rich nations halt all education programs abroad', 'I Paesi ricchi sospendono ogni cooperazione'],
          ['Oceans should warm by at least 4 °C', 'Gli oceani devono scaldarsi di almeno 4 °C']
        ],
        ['Sustainability balances ecological ceilings with dignified lives for present and future generations.', 'La sostenibilità coniuga i limiti ecologici con la dignità delle generazioni presenti e future.']
      ),
      q(
        'Why do greenhouse gases like CO₂ warm Earth’s lower atmosphere?',
        'Perché i gas serra come la CO₂ riscaldano la bassa atmosfera terrestre?',
        [
          ['They let incoming sunlight pass through while trapping outgoing infrared heat radiation', 'Lasciano passare la luce solare in entrata ma trattengono parte del calore infrarosso in uscita'],
          ['They turn clouds into solid coal mirrors', 'Trasformano le nuvole in specchi di carbone'],
          ['They stop Earth from orbiting the Sun', 'Fermano la rivoluzione terrestre attorno al Sole'],
          ['They cool oceans by freezing seawater salt', 'Raffreddano gli oceani congelando il sale']
        ],
        ['Excess fossil CO₂ thickens the natural thermal blanket, raising global average temperatures.', 'L’eccesso di CO₂ da combustibili fossili amplifica l’effetto serra naturale alzando la temperatura media.']
      )
    ]
  })
];

// ============================================================================
// Grade 11 Geography (Level 3 · 3°/4° Superiore · Geopolitics & Italy Territory)
// ============================================================================
export const GEO11_UNIT: UnitInfo = {
  title: ['Level 3 · Geopolitics, Networks & Italian Risk', 'Livello 3 · Geopolitica, Reti e Territorio Italiano'],
  ch: 'Cap. 1–2',
  subject: 'geo11'
};

export const GEO11_ARCS: ArcInfo[] = [
  {
    n: 1,
    unit: 0,
    subject: 'geo11',
    title: ['Geopolitics, Chokepoints & Cultural Economy', 'Geopolitica, Stretti Strategici e Cultura'],
    pages: '1–115'
  },
  {
    n: 2,
    unit: 0,
    subject: 'geo11',
    title: ['TEN-T Corridors & Italian Climate Hazards', 'Corridoi TEN-T e Rischi del Territorio'],
    pages: '116–220'
  }
];

export const GEO11_MISSIONS: Mission[] = [
  makeHistGeoMission({
    id: 'geo_l3_m1',
    arc: 0,
    sec: '1.1',
    pages: '6–60',
    hue: 210,
    horns: 2,
    eyes: 2,
    title: ['Geopolitics, Chokepoints & Critical Minerals', 'Geopolitica, Stretti e Materie Critiche'],
    topic: ['Suez/Malacca/Hormuz chokepoints, lithium/rare earths & Arctic routes', 'Stretti di Suez/Malacca/Hormuz, terre rare, litio e rotte artiche'],
    demon: ['Strait Blockade', 'Blocco dello Stretto'],
    tech: ['Chokepoint Sat-Link', 'Link Satellitare Stretti'],
    lessons: [
      {
        vis: 'gg11_chokepoints_map',
        text: [
          'Picture global trade like blood flowing through narrow arteries! Half of world shipping squeezes through fragile maritime <b>chokepoints</b>: the <b>Suez Canal</b> (Europe–Asia shortcut straight past Italy!), the <b>Strait of Hormuz</b> (oil), <b>Malacca</b> (East Asia), and the <b>Panama Canal</b>. When one ship wedged Suez in 2021, billions in goods stalled daily.',
          'Il commercio mondiale passa per strettoie marittime vitali (<b>chokepoints</b>): <b>Canale di Suez</b> (porta naturale tra Asia e Italia!), <b>Stretto di Hormuz</b> (petrolio), <b>Malacca</b> e <b>Panama</b>. Basta il blocco di Suez per fermare miliardi di merci al giorno!'
        ]
      },
      {
        vis: 'gg11_critical_minerals',
        text: [
          'In the 20th century geopolitics revolved around oil; in the 21st century it shifts toward <b>critical raw materials</b>—<b>lithium</b> for EV batteries, <b>rare earth elements</b> for wind turbines and phones, and ultra-pure <b>silicon semiconductors</b>—concentrated in only a handful of processing countries.',
          'Se il Novecento fu dominato dal petrolio, il XXI secolo ruota intorno alle <b>materie prime critiche</b>—<b>litio</b> per batterie, <b>terre rare</b> per eolico e smartphone, <b>semiconduttori</b>—la cui estrazione e raffinazione è concentrata in pochissimi Paesi.'
        ]
      },
      {
        vis: 'gg11_mediterranean_crossroads',
        text: [
          'For Italy, geopolitics begins in the <b>Enlarged Mediterranean (Mediterraneo Allargato)</b>: submarine energy pipelines, data cables landing in Genoa and Sicily, and port hubs from Trieste to Gioia Tauro connect Europe, North Africa, and Indo-Pacific shipping directly.',
          'Per l’Italia la geopolitica parte dal <b>Mediterraneo Allargato</b>: dorsali sottomarine in fibra ottica che approdano a Genova e in Sicilia, corridoi energetici dal Nord Africa e porti come Trieste e Gioia Tauro collegano Europa e Indo-Pacifico.'
        ]
      }
    ],
    taunt: [
      'A 400-meter strip of canal water cannot disrupt factories across another continent!',
      'Un piccolo canale di 400 metri non può certo fermare le fabbriche di un altro continente!'
    ],
    quiz: [
      q(
        'Why is the Suez Canal strategically vital to Italian and European ports like Trieste and Genoa?',
        'Perché il Canale di Suez è strategico per porti italiani ed europei come Trieste e Genova?',
        [
          ['It avoids sailing all the way around Africa, channeling Asia–Europe sea trade directly through the Mediterranean', 'Evita di circumnavigare l’Africa portando le merci tra Asia ed Europa direttamente nel Mediterraneo'],
          ['It carries freshwater trains across the Sahara', 'Trasporta treni d’acqua dolce nel Sahara'],
          ['It isolates Sicily from Atlantic cargo', 'Isola la Sicilia dai traffici'],
          ['It operates only during winter blizzards', 'È aperto solo durante le tempeste invernali']
        ],
        ['Suez cuts the Singapore–Mediterranean voyage by ~8 000 km compared with the Cape of Good Hope.', 'Suez accorcia la rotta tra Asia e Mediterraneo di circa 8 000 km rispetto al Capo di Buona Speranza.']
      ),
      q(
        'Why do governments classify lithium, cobalt, and rare earth elements as "critical raw materials"?',
        'Perché governi e UE classificano litio, cobalto e terre rare come "materie prime critiche"?',
        [
          ['They are essential for batteries, renewables, and chips while supply chains depend heavily on very few suppliers', 'Sono indispensabili per batterie, rinnovabili ed elettronica e provengono da pochi fornitori concentrati'],
          ['They dissolve harmlessly inside rainwater', 'Si sciolgono subito nella pioggia'],
          ['They are found exclusively inside Roman marble', 'Si trovano solo nel marmo romano'],
          ['Modern wind turbines do not use magnets or electronics', 'Le turbine eoliche non usano elettronica']
        ],
        ['High strategic importance plus supply concentration risk motivates recycling and diversified sourcing.', 'Alta importanza strategica unita a rischi di fornitura spinge verso riciclo e diversificazione.']
      ),
      q(
        'Which narrow strait connects the Persian Gulf oil routes to the Arabian Sea?',
        'Quale stretto strategico collega le rotte energetiche del Golfo Persico al Mare Arabico?',
        [
          ['The Strait of Hormuz', 'Lo Stretto di Hormuz'],
          ['The Strait of Messina', 'Lo Stretto di Messina'],
          ['The Bering Strait', 'Lo Stretto di Bering'],
          ['The English Channel', 'Il Canale della Manica']
        ],
        ['Roughly one-fifth of global seaborne petroleum transits the narrow Strait of Hormuz.', 'Circa un quinto del petrolio trasportato via mare passa ogni giorno dallo Stretto di Hormuz.']
      ),
      q(
        'What geopolitical role do cities like Genoa and Mazara del Vallo/Palermo increasingly play in digital infrastructure?',
        'Quale ruolo strategico svolgono sempre più città come Genova e la Sicilia nelle reti digitali?',
        [
          ['Landing hubs for intercontinental submarine fiber-optic cables linking Europe, Africa, and Asia', 'Nodi di approdo dei cavi sottomarini in fibra ottica tra Europa, Africa e Asia'],
          ['Rocket launch pads for Mars colonies', 'Basi di lancio per missioni umane su Marte'],
          ['Coal storage depots for steam trains', 'Depositi di carbone per treni a vapore'],
          ['Exclusive Arctic icebreaker ports', 'Porti esclusivi per rompighiaccio artici']
        ],
        ['Submarine fiber cables carry over 95% of intercontinental internet traffic, making Mediterranean landings critical.', 'Oltre il 95% del traffico internet intercontinentale viaggia su cavi sottomarini con snodi nel Mediterraneo.']
      )
    ]
  }),
  makeHistGeoMission({
    id: 'geo_l3_m2',
    arc: 0,
    sec: '1.2',
    pages: '61–115',
    hue: 36,
    horns: 2,
    eyes: 2,
    title: ['Landscape Heritage & Sustainable Tourism', 'Paesaggio, UNESCO e Turismo Sostenibile'],
    topic: ['Article 9 Constitution, overtourism Venice/Florence vs slow borghi', 'Articolo 9 Costituzione, overtourism vs turismo lento nei borghi'],
    demon: ['Concrete Speculator', 'Speculatore di Cemento'],
    tech: ['Carrying-Capacity Lens', 'Lente Capacità di Carico'],
    lessons: [
      {
        vis: 'gg11_article9_landscape',
        text: [
          'Read <b>Article 9 of Italy’s Constitution</b>: the Republic protects both <b>landscape and historical heritage</b> AND (expanded in 2022!) the <b>environment, biodiversity, and ecosystems</b> in the interest of future generations. In Italy, geography literally carries constitutional weight!',
          'L’<b>Articolo 9 della Costituzione italiana</b> tutela il <b>paesaggio e il patrimonio storico-artistico</b> e, dal 2022, anche l’<b>ambiente, la biodiversità e gli ecosistemi</b> nell’interesse delle future generazioni: la geografia è protetta dalla Carta costituzionale!'
        ]
      },
      {
        vis: 'gg11_overtourism_vs_slow',
        text: [
          'When 30 million tourists crowd tiny medieval lanes in <b>Venice</b> or <b>Florence</b>, rents skyrocket and residents get pushed out—a trap called <b>overtourism</b> exceeding a site’s <b>carrying capacity</b>. Compare that with <b>slow tourism</b> spreading travelers by bike or rail into mountain parks, Sicily’s valleys, and Umbrian hills.',
          'Quando milioni di visitatori affollano solo pochi centri storici come <b>Venezia</b> o <b>Firenze</b>, si supera la <b>capacità di carico</b> (<i>overtourism</i>) facendo crescere i prezzi ed espellendo i residenti. La risposta è il <b>turismo lento</b> in treno o bici tra borghi, parchi e aree interne.'
        ]
      },
      {
        vis: 'gg11_cultural_economy',
        text: [
          'Cultural heritage isn’t passive stone: museums, restoration labs, artisan workshops, and agro-landscape districts create high-skill Italian careers when managed sustainably across all four seasons instead of concentrated into two summer months.',
          'Il patrimonio culturale non è un museo immobile: restauro, artigianato, musei e distretti agroalimentari creano lavoro qualificato tutto l’anno se gestiti in modo equilibrato su tutte le stagioni.'
        ]
      }
    ],
    taunt: [
      'Pack ten cruise ships into one tiny lagoon every morning—nothing can break heritage!',
      'Riempi una piccola laguna di masse infinite ogni mattina: il patrimonio regge tutto!'
    ],
    quiz: [
      q(
        'What milestone protection did Italy add explicitly to Article 9 of its Constitution in 2022?',
        'Quale tutela esplicita è stata aggiunta all’Articolo 9 della Costituzione italiana nel 2022?',
        [
          ['Protection of the environment, biodiversity, and ecosystems, also in the interest of future generations', 'Tutela dell’ambiente, della biodiversità e degli ecosistemi, anche nell’interesse delle future generazioni'],
          ['Permission to pave all national parks', 'L’autorizzazione a cementificare tutti i parchi nazionali'],
          ['Closing all public museums permanently', 'La chiusura permanente di tutti i musei'],
          ['Replacing trains exclusively with private helicopters', 'Sostituire i treni con elicotteri privati']
        ],
        ['Italy became one of the first major democracies to write intergenerational environmental protection into core constitutional principles.', 'La riforma ha affiancato ambiente, biodiversità e animali alla tutela storica di paesaggio e cultura.']
      ),
      q(
        'What does exceeding a city’s "carrying capacity" cause during overtourism in Venice or Florence?',
        'Che cosa provoca il superamento della "capacità di carico" (overtourism) in città come Venezia o Firenze?',
        [
          ['Housing shortages for locals, congested streets, degraded monuments, and strained municipal services', 'Spopolamento dei residenti per affitti elevati, strade congestionate e usura dei monumenti e servizi'],
          ['Immediate doubling of year-round local primary school classrooms', 'Raddoppio delle scuole elementari in centro storico'],
          ['Cooling of lagoon water temperatures by 10 °C', 'Raffreddamento della laguna di 10 °C'],
          ['Zero plastic waste or ferry wake waves', 'Azzeramento di rifiuti e moto ondoso']
        ],
        ['Visitor management, timed tickets, and off-peak regional dispersal help keep living historic cities habitable.', 'Flussi regolati, biglietti programmati e itinerari diffusi aiutano a preservare la vita nei centri storici.']
      ),
      q(
        'How does "slow tourism" strengthen Italy’s rural inland towns (aree interne)?',
        'Come aiuta le aree interne e i piccoli borghi il cosiddetto "turismo lento"?',
        [
          ['By spreading respectful spending to local farms, trails, crafts, and small towns year-round', 'Distribuendo reddito tutto l’anno tra produzioni locali, sentieri, artigianato e piccoli comuni'],
          ['By forcing every visitor to take supersonic flights', 'Obbligando a voli supersonici continui'],
          ['By demolishing stone villages for mega-malls', 'Demolendo i borghi per mega centri commerciali'],
          ['By restricting tourists strictly to airport lounges', 'Limitando i viaggiatori alle sale aeroportuali']
        ],
        ['Cycling routes, Appennine paths, and regional trains sustain communities without overwhelming fragile sites.', 'Ciclovie, cammini e treni regionali sostengono l’economia locale evitando la saturazione.']
      ),
      q(
        'Why do UNESCO terraced vineyards like Cinque Terre or Prosecco Hills depend on active local farmers?',
        'Perché paesaggi UNESCO come i terrazzamenti delle Cinque Terre dipendono dai contadini locali?',
        [
          ['Maintaining dry-stone walls prevents winter rain from washing steep hillside soil into coastal villages', 'La manutenzione dei muretti a secco impedisce frane e smottamenti durante le piogge intense'],
          ['Vines hold tectonic faults shut underwater', 'Le viti chiudono le faglie sottomarine'],
          ['Farmers import snow daily from Switzerland', 'Gli agricoltori importano neve dalla Svizzera'],
          ['Terraces exist automatically without human care', 'I terrazzamenti si riparano da soli senza manutenzione']
        ],
        ['Abandoned agricultural terraces lose drainage and trigger hydrogeological landslides during cloudbursts.', 'L’abbandono dei muretti a secco aumenta gravemente il rischio di frane nei borghi sottostanti.']
      )
    ]
  }),
  makeHistGeoMission({
    id: 'geo_l3_m3',
    arc: 1,
    sec: '2.1',
    pages: '116–168',
    hue: 185,
    horns: 2,
    eyes: 2,
    title: ['TEN-T Corridors, Rail & Smart Cities', 'Corridoi TEN-T, Alta Velocità e Smart City'],
    topic: ['EU TEN-T alpine base tunnels, Frecciarossa backbone & smart mobility', 'Reti TEN-T e trafori alpini, Alta Velocità e città intelligenti'],
    demon: ['Gridlock Smog', 'Ingorgo Urbano'],
    tech: ['TEN-T Intermodal Grid', 'Rete Intermodale TEN-T'],
    lessons: [
      {
        vis: 'gg11_tent_corridors',
        text: [
          'Four giant European highway-and-rail arteries—the <b>TEN-T Corridors</b>—cross right through Italy! High-speed lines link Milan–Rome–Naples in under 4 hours, while massive Alpine railway base tunnels (<b>Gotthard, Brenner, Lyon–Turin</b>) shift noisy polluting mountain trucks onto electric freight trains.',
          'Quattro grandi corridoi europei <b>TEN-T</b> attraversano l’Italia! L’Alta Velocità collega Milano–Roma–Napoli in meno di 4 ore, mentre i grandi trafori ferroviari di base alpini (<b>Gottardo, Brennero</b>) spostano le merci dai camion inquinanti ai treni elettrici.'
        ]
      },
      {
        vis: 'gg11_intermodal_hubs',
        text: [
          'True efficiency comes from <b>intermodality</b>: letting a freight container glide seamlessly from ship → freight train → short last-mile electric van—cutting road accidents, diesel emissions, and mountain bottlenecks while linking southern ports like Bari and Taranto cleanly north.',
          'La chiave è l’<b>intermodalità</b>: far passare il carico senza attriti da nave a treno merci fino all’ultimo miglio con furgoni elettrici, riducendo traffico su gomma ed emissioni e collegando i porti del Sud al resto d’Europa.'
        ]
      },
      {
        vis: 'gg11_smart_15min_city',
        text: [
          'A <b>Smart & 15-Minute City</b> uses smart grids, LED street sensors, bike lanes, and neighborhood clinics/schools within a 15-minute walk or ride—cooling urban "heat islands" with parks and green roofs instead of endless asphalt parking.',
          'Una <b>Smart City ("città dei 15 minuti")</b> usa sensori energetici, piste ciclabili, trasporto pubblico frequente e servizi di quartiere raggiungibili in 15 minuti a piedi o in bici, contrastando le isole di calore con parchi e alberi urbani.'
        ]
      }
    ],
    sort: {
      type: 'sort',
      title: ['Transport & Urban Mobility Sort', 'Trasporti TEN-T e Smart City'],
      hint: ['Sort each infrastructure choice into Freight/Rail Network or Green Urban Planning.', 'Dividi tra Corridoi Merci/Ferrovia oppure Pianificazione Urbana Sostenibile.'],
      cats: [['TEN-T Freight & Rail', 'Corridoi TEN-T e Ferrovia'], ['Smart & Green Cities', 'Città Intelligenti e Verdi']],
      items: [
        { n: ['Brenner railway base tunnel across Alps', 'Traforo ferroviario di base del Brennero'], i: '🚆', c: 0, why: ['Low-gradient electric rail shifts heavy cargo off steep mountain highways.', 'Ferrovia a bassa pendenza che sposta merci dai TIR ai treni elettrici.'] },
        { n: ['Tree-lined bike corridors cooling asphalt', 'Corsie ciclabili alberate contro isole di calore'], i: '🚲', c: 1, why: ['Urban canopy shades streets and cuts short-trip car congestion.', 'L’ombra degli alberi riduce le temperature estive e il traffico locale.'] },
        { n: ['Port-to-rail intermodal container yard', 'Interporto mare-ferrovia per container'], i: '📦', c: 0, why: ['Direct cranes shift sea freight straight onto long electric trains.', 'Gru dirette spostano i container dalle navi ai convogli ferroviari.'] },
        { n: ['Smart micro-grid & 15-min neighborhood schools', 'Micro-reti intelligenti e servizi in 15 min'], i: '🏙️', c: 1, why: ['Brings daily work, clinics, and transit within short sustainable reach.', 'Avvicina scuole, lavoro e servizi riducendo gli spostamenti obbligati.'] }
      ]
    },
    taunt: [
      'Build ten-lane diesel highways over glaciers and pave every city park!',
      'Costruisci solo autostrade a dieci corsie sui ghiacciai e asfalta ogni parco urbano!'
    ],
    quiz: [
      q(
        'Why does the European Union build flat Alpine railway "base tunnels" along TEN-T corridors?',
        'Perché l’Unione Europea costruisce trafori ferroviari alpini "di base" lungo i corridoi TEN-T?',
        [
          ['Low-elevation flat tracks let heavy electric freight trains replace polluting mountain highway trucks', 'Binari pianeggianti in galleria permettono ai treni elettrici merci di sostituire i camion sulle salite alpine'],
          ['Tunnels raise trains higher above snowy peaks', 'Per far salire i treni fin sopra le vette innevate'],
          ['To dry up Alpine lakes beneath Lombardy', 'Per prosciugare i laghi alpini'],
          ['To slow rail traffic below walking speed', 'Per rallentare i treni a passo d’uomo']
        ],
        ['Avoiding steep climbs dramatically saves traction electricity and unlocks continuous Genoa–Rotterdam freight flows.', 'Evitare ripide pendenze riduce l’energia richiesta e collega direttamente i porti italiani al Nord Europa.']
      ),
      q(
        'What does "intermodal freight transport" mean?',
        'Che cosa indica il "trasporto intermodale" delle merci?',
        [
          ['Moving standardized cargo units seamlessly across ship, rail, and road in one integrated chain', 'Trasferire unità di carico standardizzate in sequenza coordinata tra nave, treno e camion'],
          ['Driving an empty truck back and forth continuously', 'Far viaggiare camion sempre vuoti'],
          ['Shipping goods only via wooden rowboats', 'Usare solo barche a remi'],
          ['Banning ports from connecting to railway stations', 'Vietare i binari dentro i porti']
        ],
        ['Ports connected to interports shift long-haul distance onto rail while trucks handle short local distribution.', 'Porti e interporti spostano le lunghe tratte su ferrovia lasciando ai mezzi stradali solo l’ultimo miglio.']
      ),
      q(
        'How does urban tree canopy combat the "urban heat island" effect in cities like Milan, Rome, or Bologna?',
        'Come contrasta il verde urbano l’effetto "isola di calore" nelle città estive?',
        [
          ['Trees shade dark asphalt and cool city air naturally via water evapotranspiration', 'Gli alberi ombreggiano asfalto e facciate e rinfrescano l’aria tramite evapotraspirazione'],
          ['Leaves reflect heat underground into subways', 'Le foglie concentrano il calore nella metropolitana'],
          ['Green parks block night breezes intentionally', 'I parchi bloccano le brezze notturne'],
          ['Asphalt cools air better than shaded gardens', 'L’asfalto rinfresca più dei prati alberati']
        ],
        ['Shaded green boulevards can measure several degrees cooler than bare dark paved squares.', 'Viali alberati e superfici permeabili possono ridurre la temperatura locale di diversi gradi.']
      ),
      q(
        'What is the core goal of the "15-minute city" urban planning idea?',
        'Qual è l’obiettivo centrale del modello urbano della "città dei 15 minuti"?',
        [
          ['Ensuring daily essentials—schools, parks, groceries, transit—lie within a 15-minute walk or bike ride', 'Rendere scuole, parchi, negozi, salute e trasporti raggiungibili entro 15 minuti a piedi o in bici'],
          ['Forcing every citizen to commute 3 hours daily', 'Obbligare tutti a tre ore di pendolarismo'],
          ['Closing all neighborhood clinics in favor of outer highways', 'Chiudere gli ambulatori di quartiere'],
          ['Restricting sidewalks solely to luxury cars', 'Riservare i marciapiedi alle auto']
        ],
        ['Mixed-use neighborhoods reduce emissions, congestion, and social isolation simultaneously.', 'Quartieri ricchi di servizi di prossimità migliorano qualità della vita e sostenibilità.']
      )
    ]
  }),
  makeHistGeoMission({
    id: 'geo_l3_m4',
    arc: 1,
    sec: '2.2 · BOSS',
    pages: '169–220',
    hue: 145,
    horns: 4,
    eyes: 3,
    boss: true,
    title: ['Italian Hazards: Quakes, Floods & Venice MOSE', 'Rischi in Italia: Sismi, Frane e MOSE'],
    topic: ['Seismic zones, soil sealing floods, glacier melt & Venice lagoon MOSE', 'Rischio sismico, consumo di suolo, ghiacciai e barriere MOSE'],
    demon: ['Acqua Alta Surge', 'Onda di Acqua Alta'],
    tech: ['Resilient Territory Shield', 'Scudo Resilienza Italia'],
    lessons: [
      {
        vis: 'gg11_italian_hazards_map',
        text: [
          'Think of natural risk as a simple formula: <b>Risk = Hazard × Vulnerability × Exposure</b>! Italy sits on active tectonic plates (quakes/volcanoes) AND experiences extreme rainstorms—yet building houses over dry riverbeds or sealing fertile plains under concrete multiplies flash floods and landslides (<b>hydrogeological risk</b>).',
          'Il rischio segue una legge chiara: <b>Rischio = Pericolosità × Vulnerabilità × Esposizione</b>! L’Italia è terra sismica e vulcanica, ma costruire negli alvei dei fiumi o impermeabilizzare i suoli con troppo cemento moltiplica frane e alluvioni (<b>rischio idrogeologico</b>).'
        ]
      },
      {
        vis: 'gg11_soil_sealing_sponge',
        text: [
          'Compare a forest floor to an asphalt parking lot during a summer cloudburst: healthy forest soil acts like a giant <b>sponge</b> soaking up rainwater slowly into aquifers, while paved asphalt acts like a waterproof slide sending torrents racing downhill into towns!',
          'Confronta un bosco e un parcheggio asfaltato sotto un nubifragio: il suolo naturale funziona come una <b>spugna</b> che assorbe l’acqua in falda; il cemento e l’asfalto funzionano come uno scivolo che scatena piene improvvise verso i centri abitati!'
        ]
      },
      {
        vis: 'gg11_glaciers_venice_mose',
        text: [
          'Across the Alps, glaciers like the Marmolada have retreated rapidly in warming decades, destabilizing high peaks and shrinking summer rivers. Meanwhile on the Adriatic lagoon, Venice’s <b>MOSE mobile seafloor floodgates</b> rise during exceptional high tides (<i>acqua alta</i>) to shield St. Mark’s Square from rising seas.',
          'Sulle Alpi i ghiacciai come la Marmolada arretrano rapidamente, riducendo le riserve idriche estive. Intanto a Venezia le barriere mobili del <b>MOSE</b> si sollevano dal fondale durante l’<i>acqua alta</i> eccezionale per proteggere la laguna e Piazza San Marco dall’innalzamento marino.'
        ]
      }
    ],
    taunt: [
      'Pave every riverbed, ignore building codes, and forget rising seas—what could possibly go wrong?',
      'Cementifica i letti dei fiumi, ignora le norme antisismiche e scorda il mare che sale: cosa potrà mai accadere?!'
    ],
    quiz: [
      q(
        'How does soil sealing (paving natural fields with asphalt and concrete) worsen flood risk during heavy storms?',
        'Perché il consumo di suolo (cementificazione e asfalto) aggrava le alluvioni durante i nubifragi?',
        [
          ['Water cannot soak underground into soil sponges, creating rapid surface runoff torrents', 'L’acqua non riesce a infiltrarsi nel terreno e scorre velocissima in superficie causando piene improvvise'],
          ['Asphalt absorbs double the rainwater of forest earth', 'L’asfalto assorbe il doppio d’acqua rispetto a un bosco'],
          ['Concrete blocks ocean winds from blowing rain clouds away', 'Il cemento ferma i venti'],
          ['Paved plains convert all rain directly into snow', 'Le piane asfaltate trasformano la pioggia in neve']
        ],
        ['Preserving permeable floodplains, wetlands, and green roofs slows peak storm discharge safely.', 'Preservare aree golenali, suoli permeabili e vasche di laminazione riduce la violenza delle piene.']
      ),
      q(
        'In the disaster formula Risk = Hazard × Vulnerability × Exposure, how do seismic retrofits protect Italian schools?',
        'Nella formula Rischio = Pericolosità × Vulnerabilità × Esposizione, come agisce l’adeguamento antisismico?',
        [
          ['By reducing structural vulnerability so buildings withstand earthquake shaking without collapsing', 'Riduce la vulnerabilità degli edifici affinché resistano alle scosse senza crollare'],
          ['By deleting tectonic faults underground permanently', 'Eliminando fisicamente le faglie sotto terra'],
          ['By tripling building occupancy above capacity', 'Triplicando l’affollamento'],
          ['By raising coastal sea levels', 'Alzando il livello del mare']
        ],
        ['We cannot turn off earthquakes (Hazard), but resilient engineering sharply cuts Vulnerability and saves lives.', 'Non possiamo spegnere i terremoti (Pericolosità), ma abbattere la Vulnerabilità salva vite umane.']
      ),
      q(
        'How does Venice’s MOSE system protect the city against extreme "acqua alta" tides?',
        'Come protegge Venezia il sistema MOSE dalle maree eccezionali di "acqua alta"?',
        [
          ['78 hinged submerged barriers fill with compressed air and rise at lagoon inlets to block surges', '78 paratoie mobili adagiate sul fondale si sollevano tramite aria compressa bloccando le onde alle bocche di porto'],
          ['Giant fans blow seawater all the way to Milan', 'Ventilatori spingono il mare fino a Milano'],
          ['Venice’s islands are lifted 20 meters by helicopters', 'Le isole vengono sollevate di 20 metri'],
          ['Permanent concrete walls cut Venice off from the Adriatic forever', 'Muri fissi chiudono per sempre la laguna al mare']
        ],
        ['Between normal tides the gates rest invisible underwater so lagoon water exchange and ships still circulate.', 'In condizioni normali le paratoie restano adagiate sul fondo garantendo ricambio idrico e navigazione.']
      ),
      q(
        'Why do retreating Alpine glaciers combine BOTH a water-supply risk and a mountain-safety risk?',
        'Perché il ritiro dei ghiacciai alpini genera sia un rischio idrico sia un rischio di instabilità in quota?',
        [
          ['Less summer meltwater starves valleys while melting permafrost destabilizes steep high slopes', 'Meno riserva idrica estiva riduce la portata dei fiumi mentre lo scongelamento del permafrost rende instabili le pareti'],
          ['Melting glaciers freeze coastal southern ports in August', 'I ghiacciai in ritiro congelano i porti del Sud'],
          ['Glacier retreat creates volcanic eruptions in Turin', 'Genera eruzioni vulcaniche a Torino'],
          ['It stops winter rainfall everywhere across Sicily', 'Blocca le piogge in Sicilia']
        ],
        ['Warming mountains lose frozen "glue" (permafrost) inside rock faces as well as vital seasonal snow reserves.', 'Il riscaldamento indebolisce la stabilità delle pareti rocciose oltre a ridurre le scorte d’acqua estive.']
      )
    ]
  })
];

import type { ArcInfo, Mission, UnitInfo } from '../types';
import { makeHistGeoMission, q } from './histGeoCommon';

export const GEO5_UNIT: UnitInfo = {
  title: ['Grade 5 · Italy Physical & Regions', '5ª Primaria · Italia Fisica e Regioni'],
  ch: 'Un. 1',
  subject: 'geo5'
};

export const GEO5_ARCS: ArcInfo[] = [
  {
    n: 1,
    unit: 0,
    subject: 'geo5',
    title: ['Reading Maps & Italy’s 20 Regions', 'Carte Geografiche e le 20 Regioni d’Italia'],
    pages: '1–96'
  }
];

export const GEO5_MISSIONS: Mission[] = [
  makeHistGeoMission({
    id: 'geo_g5_m1',
    arc: 0,
    sec: 'G5.1',
    pages: '4–24',
    hue: 194,
    horns: 1,
    eyes: 2,
    title: ['Reading Maps, Scale & Coordinates', 'Leggere le Carte, Scala e Coordinate'],
    topic: ['Compass rose, scale 1:100 000, latitude & longitude', 'Rosa dei venti, scala di riduzione, latitudine e longitudine'],
    demon: ['Lost Compass', 'Bussola Smarrita'],
    tech: ['Grid Navigator', 'Griglia Orientamento'],
    lessons: [
      {
        vis: 'gg5_compass_maps',
        text: [
          'Imagine zooming in on your phone map: city view shows every street, while a country view shows only highways. Geographers pick map types by job—<b>physical maps</b> show mountains and rivers in brown/green/blue, <b>political maps</b> highlight borders and capitals, and <b>thematic maps</b> track weather, rainfall, or train lines.',
          'Immagina lo zoom sul cellulare: da vicino vedi le vie, da lontano solo le autostrade. Le <b>carte fisiche</b> mostrano monti e fiumi (marrone, verde, blu), le <b>carte politiche</b> confini e capoluoghi, le <b>carte tematiche</b> piogge, clima o ferrovie.'
        ]
      },
      {
        vis: 'gg5_map_scale',
        text: [
          'A <b>map scale</b> works like a shrink ray: a <b>1:100 000</b> scale means 1 cm on paper equals 100 000 cm = <b>1 km</b> in real life! Big denominator (1:5 000 000) means zoomed far out showing whole nations; small denominator (1:10 000) means zoomed close onto your neighborhood.',
          'La <b>scala di riduzione</b> è come un raggio rimpicciolente: <b>1 : 100 000</b> vuol dire che 1 cm sulla carta vale 100 000 cm = <b>1 km</b> reale! Denominatore grande (1 : 5 000 000) = vista ampia su interi Stati; denominatore piccolo = zoom sul quartiere.'
        ]
      },
      {
        vis: 'gg5_lat_long_grid',
        text: [
          'How does GPS find a hiker anywhere on Earth? With a giant imaginary net! <b>Parallels</b> wrap horizontally around Earth from the Equator (0°) to the Poles—measuring <b>latitude</b> (North/South)—while <b>meridians</b> slice vertically through Greenwich (0°)—measuring <b>longitude</b> (East/West).',
          'Come fa il GPS a trovare un escursionista ovunque? Con una rete immaginaria! I <b>paralleli</b> misurano la <b>latitudine</b> (Nord/Sud dall’Equatore, 0°), mentre i <b>meridiani</b> misurano la <b>longitudine</b> (Est/Ovest dal meridiano di Greenwich, 0°).'
        ]
      }
    ],
    sort: {
      type: 'sort',
      title: ['Map Detective · Physical or Political?', 'Detective delle Carte · Fisica o Politica?'],
      hint: ['Sort each map clue under Physical Geography or Political/Grid Geography.', 'Dividi ogni indizio tra Geografia Fisica oppure Politica e Coordinate.'],
      cats: [['Physical & Relief Features', 'Elementi Fisici e Rilievi'], ['Borders, Capitals & Grid', 'Confini, Capoluoghi e Reticolo']],
      items: [
        { n: ['Mountain altitude tints & river basins', 'Altitudini dei monti e bacini fluviali'], i: '⛰️', c: 0, why: ['Physical maps color lowlands green, hills yellow, mountains brown.', 'Le carte fisiche usano verde per pianure, giallo per colline e marrone per monti.'] },
        { n: ['Regional borders & provincial capitals', 'Confini regionali e capoluoghi'], i: '📍', c: 1, why: ['Political maps highlight administrative territories and capital cities.', 'Le carte politiche mostrano confini amministrativi e capoluoghi.'] },
        { n: ['Latitude north of the Equator', 'Latitudine a nord dell’Equatore'], i: '🌐', c: 1, why: ['Parallels measure north–south coordinate angle from the Equator.', 'I paralleli misurano la distanza angolare dall’Equatore.'] },
        { n: ['Coastal cliffs & sea depth blues', 'Coste e profondità marine in blu'], i: '🌊', c: 0, why: ['Bathymetric shades show shallow seas (light blue) vs deep trenches (dark blue).', 'Le sfumature di blu indicano mari bassi e abissi marini.'] }
      ]
    },
    taunt: [
      'West or East, centimeters or kilometers—one wrong scale sends travelers into the sea!',
      'Ovest o Est, centimetri o chilometri: basta sbagliare scala per finire in mezzo al mare!'
    ],
    quiz: [
      q(
        'On a 1:100 000 scale map, how many real kilometers equal 3 cm measured with a ruler?',
        'Su una carta in scala 1 : 100 000, a quanti chilometri reali corrispondono 3 cm?',
        [
          ['3 km', '3 km'],
          ['300 km', '300 km'],
          ['30 m', '30 m'],
          ['3 000 km', '3 000 km']
        ],
        ['Since 100 000 cm = 1 km, each centimeter equals 1 km, so 3 cm = 3 km.', 'Poiché 100 000 cm = 1 km, ogni centimetro vale 1 km, quindi 3 cm = 3 km.']
      ),
      q(
        'Which imaginary lines measure East–West distance (longitude) from the Prime Meridian in Greenwich?',
        'Quali linee immaginarie misurano la longitudine (Est–Ovest) dal meridiano di Greenwich?',
        [
          ['Meridians', 'I meridiani'],
          ['Parallels', 'I paralleli'],
          ['Contour altitude lines', 'Le isoipse di altitudine'],
          ['Ocean currents', 'Le correnti oceaniche']
        ],
        ['Meridians run from Pole to Pole and measure longitude East or West of 0° Greenwich.', 'I meridiani collegano i due Poli e misurano la longitudine a Est o a Ovest di Greenwich.']
      ),
      q(
        'Which type of map would you open to check Italy’s average July rainfall or high-speed train network?',
        'Quale tipo di carta sceglieresti per vedere le piogge medie di luglio o i treni ad alta velocità?',
        [
          ['A thematic map', 'Una carta tematica'],
          ['An ancient star chart', 'Una mappa stellare antica'],
          ['A pure political border map without data', 'Una carta politica muta senza dati'],
          ['A geological rock fossil diagram', 'Uno schema fossile delle rocce']
        ],
        ['Thematic maps visualize one specific topic such as climate, population density, or transport.', 'Le carte tematiche rappresentano un fenomeno specifico come clima, densità o trasporti.']
      ),
      q(
        'On a physical map of Italy, what do dark green areas like the Po Valley represent?',
        'Su una carta fisica dell’Italia, che cosa indica il colore verde intenso della Pianura Padana?',
        [
          ['Flat lowlands close to sea level', 'Terreni pianeggianti vicini al livello del mare'],
          ['Glacier peaks above 3 000 meters', 'Vette glaciali oltre i 3 000 metri'],
          ['Deep underwater trenches', 'Fosse marine profonde'],
          ['Active lava lakes', 'Laghi di lava attivi']
        ],
        ['Hypsometric colors go from green (plains) to yellow (hills) to brown/white (high mountains).', 'I colori altimetrici passano dal verde (pianura) al giallo (collina) al marrone (montagna).']
      )
    ]
  }),
  makeHistGeoMission({
    id: 'geo_g5_m2',
    arc: 0,
    sec: 'G5.2',
    pages: '25–48',
    hue: 162,
    horns: 2,
    eyes: 2,
    title: ['Italy Physical: Alps, Apennines & Seas', 'Italia Fisica: Alpi, Appennini e Mari'],
    topic: ['Alps vs Apennines, Po River, lakes, seas & volcanoes', 'Alpi e Appennini, fiume Po, laghi, mari e vulcani'],
    demon: ['Landslide Troll', 'Troll delle Frane'],
    tech: ['Peninsula Relief Scan', 'Scansione Rilievi Italia'],
    lessons: [
      {
        vis: 'gg5_alps_apennines',
        text: [
          'Picture Italy like a boot wearing a tall rocky crown and a long rocky spine! Across the north arc rise the young jagged <b>Alps</b>—crowned by <b>Mont Blanc (4 808 m)</b>, Europe’s highest alpine giant—while down the entire peninsula runs the gentler, older <b>Apennine</b> backbone up to Gran Sasso (2 912 m).',
          'Immagina l’Italia come uno stivale con una corona a nord e una spina dorsale lungo tutto il corpo! A nord si alzano le <b>Alpi</b> (con il <b>Monte Bianco, 4 808 m</b>), mentre lungo tutta la penisola scendono gli <b>Appennini</b> fino al Gran Sasso (2 912 m).'
        ]
      },
      {
        vis: 'gg5_po_lakes_seas',
        text: [
          'Melting alpine snow feeds Italy’s longest river, the <b>Po (652 km)</b>, carving the fertile <b>Po Valley</b> before emptying into the shallow <b>Adriatic Sea</b>. Along alpine valleys lie deep glacial lakes shaped like ribbons—led by <b>Lake Garda</b>, Italy’s largest lake—while Sardinia and Sicily break four seas: Ligurian, Tyrrhenian, Ionian, and Adriatic.',
          'I ghiacciai alpini alimentano il fiume più lungo d’Italia, il <b>Po (652 km)</b>, che attraversa la fertile <b>Pianura Padana</b> fino al <b>Mar Adriatico</b>. Ai piedi delle Alpi brillano grandi laghi glaciali come il <b>Lago di Garda</b> (il più esteso), tra i mari Ligure, Tirreno, Ionio e Adriatico.'
        ]
      },
      {
        vis: 'gg5_italian_volcanoes',
        text: [
          'Because Italy sits right where Africa pushes slowly northward under Eurasia, southern Italy hosts active volcanoes! <b>Mount Etna</b> in Sicily is Europe’s tallest active volcano; <b>Vesuvius</b> overlooks Naples; and <b>Stromboli</b> ("Lighthouse of the Mediterranean") erupts gentle glowing fountains every few minutes.',
          'Poiché l’Italia si trova sul margine tra placca africana ed eurasiatica, il Sud ospita grandi vulcani attivi: l’<b>Etna</b> in Sicilia (il vulcano attivo più alto d’Europa), il <b>Vesuvio</b> vicino a Napoli e lo <b>Stromboli</b>, detto "Faro del Mediterraneo".'
        ]
      }
    ],
    taunt: [
      'Alps, Apennines, Tyrrhenian or Ionian—all Italian rocks and waters blur together!',
      'Alpi, Appennini, Tirreno o Ionio: per te sono solo sassi e onde uguali!'
    ],
    quiz: [
      q(
        'Which mountain system runs vertically along the length of the Italian peninsula like a spine?',
        'Quale catena montuosa percorre verticalmente tutta la penisola italiana come una spina dorsale?',
        [
          ['The Apennines', 'Gli Appennini'],
          ['The Dolomites only', 'Solo le Dolomiti'],
          ['The Pyrenees', 'I Pirenei'],
          ['The Carpathians', 'I Carpazi']
        ],
        ['The Alps form Italy’s northern arc while the Apennines stretch from Liguria down into Calabria and Sicily.', 'Le Alpi chiudono il Nord ad arco, mentre gli Appennini scendono dalla Liguria fino a Calabria e Sicilia.']
      ),
      q(
        'Which is Italy’s longest river, crossing Turin and the northern plain to a delta on the Adriatic Sea?',
        'Qual è il fiume più lungo d’Italia, che sfocia con un ampio delta nel Mar Adriatico?',
        [
          ['The Po River', 'Il fiume Po'],
          ['The Tiber River', 'Il fiume Tevere'],
          ['The Arno River', 'Il fiume Arno'],
          ['The Adige River', 'Il fiume Adige']
        ],
        ['At 652 km, the Po collects alpine and Apennine tributaries across Piedmont, Lombardy, Emilia-Romagna, and Veneto.', 'Lungo 652 km, il Po raccoglie affluenti alpini e appenninici attraversando la Pianura Padana.']
      ),
      q(
        'Which island volcano off Sicily is known as the "Lighthouse of the Mediterranean" for its frequent glowing bursts?',
        'Quale vulcano insulare vicino alla Sicilia è detto il "Faro del Mediterraneo" per le sue frequenti eruzioni?',
        [
          ['Stromboli', 'Stromboli'],
          ['Mont Blanc', 'Monte Bianco'],
          ['Gran Sasso', 'Gran Sasso'],
          ['Monte Rosa', 'Monte Rosa']
        ],
        ['Stromboli’s mild, steady rhythmic explosions have guided sailors in the Tyrrhenian Sea for millennia.', 'Le piccole eruzioni ritmiche dello Stromboli orientano i naviganti nel Tirreno fin dall’antichità.']
      ),
      q(
        'What is the largest lake in Italy by surface area?',
        'Qual è il lago più esteso d’Italia per superficie?',
        [
          ['Lake Garda', 'Lago di Garda'],
          ['Lake Trasimeno', 'Lago Trasimeno'],
          ['Lake Bolsena', 'Lago di Bolsena'],
          ['Lake Orta', 'Lago d’Orta']
        ],
        ['Glacial Lake Garda borders Lombardy, Veneto, and Trentino-Alto Adige.', 'Il Lago di Garda, di origine glaciale, bagna Lombardia, Veneto e Trentino-Alto Adige.']
      )
    ]
  }),
  makeHistGeoMission({
    id: 'geo_g5_m3',
    arc: 0,
    sec: 'G5.3',
    pages: '49–72',
    hue: 40,
    horns: 2,
    eyes: 2,
    title: ['Northern & Central Regions and Capitals', 'Regioni del Nord e Centro e Capoluoghi'],
    topic: ['Piedmont to Lazio: regional capitals, ports, Alps & Renaissance', 'Dal Piemonte al Lazio: capoluoghi, porti, Alpi e città d’arte'],
    demon: ['Border Jester', 'Giullare dei Confini'],
    tech: ['Regional Capital Radar', 'Radar dei Capoluoghi'],
    lessons: [
      {
        vis: 'gg5_north_west_regions',
        text: [
          'Italy has <b>20 regions</b> grouped into North, Center, South, and Islands. Starting in the North-West: <b>Piedmont</b> (Turin—car engineering & Savoy palaces), tiny alpine <b>Aosta Valley</b> (Aosta), coastal <b>Liguria</b> (Genoa—historic maritime port), and powerhouse <b>Lombardy</b> (Milan—fashion, finance & lakes).',
          'L’Italia ha <b>20 regioni</b>. Partendo dal Nord-Ovest troviamo <b>Piemonte</b> (Torino), la montuosa <b>Valle d’Aosta</b> (Aosta), la costiera <b>Liguria</b> (Genova, grande porto) e la popolosa <b>Lombardia</b> (Milano, capitale economica).'
        ]
      },
      {
        vis: 'gg5_north_east_regions',
        text: [
          'Slide into the North-East: mountain-crowned <b>Trentino-Alto Adige</b> (Trento), Dolomite-to-lagoon <b>Veneto</b> (Venice—built across 118 islands!), eastern border <b>Friuli-Venezia Giulia</b> (Trieste), and fertile <b>Emilia-Romagna</b> (Bologna—home to Europe’s oldest university from 1088 and famed cuisine).',
          'Passando al Nord-Est incontriamo il <b>Trentino-Alto Adige</b> (Trento), il <b>Veneto</b> (Venezia, costruita su 118 isole), il <b>Friuli-Venezia Giulia</b> (Trieste) e la fertile <b>Emilia-Romagna</b> (Bologna, sede della più antica università del mondo dal 1088).'
        ]
      },
      {
        vis: 'gg5_central_regions',
        text: [
          'In Central Italy stand four cultural treasures: hilly <b>Tuscany</b> (Florence—Renaissance birthplace), green landlocked <b>Umbria</b> (Perugia—the "green heart of Italy"), Adriatic <b>Marche</b> (Ancona), and <b>Lazio</b>—centered on <b>Rome</b>, capital of the Italian Republic and surrounding Vatican City!',
          'Al Centro brillano quattro regioni: <b>Toscana</b> (Firenze, culla del Rinascimento), l’<b>Umbria</b> senza sbocco sul mare (Perugia, "cuore verde d’Italia"), le <b>Marche</b> (Ancona) e il <b>Lazio</b> con <b>Roma</b>, capitale della Repubblica Italiana.'
        ]
      }
    ],
    taunt: [
      'Venice in Piedmont? Bologna in Tuscany? Mix up the capitals and lose your way!',
      'Venezia in Piemonte? Bologna in Toscana? Confondi i capoluoghi e perdi la rotta!'
    ],
    quiz: [
      q(
        'Which northern Italian region has Venice as its regional capital?',
        'Quale regione del Nord Italia ha Venezia come capoluogo?',
        [
          ['Veneto', 'Il Veneto'],
          ['Lombardy', 'La Lombardia'],
          ['Piedmont', 'Il Piemonte'],
          ['Liguria', 'La Liguria']
        ],
        ['Veneto spans from the Dolomites to Lake Garda and the Adriatic lagoon of Venice.', 'Il Veneto si estende dalle Dolomiti fino alla laguna adriatica di Venezia.']
      ),
      q(
        'Which central Italian region is famous as Italy’s only peninsula region without any sea coastline ("the green heart")?',
        'Quale regione del Centro Italia non ha alcuno sbocco sul mare ed è detta il "cuore verde"?',
        [
          ['Umbria (Perugia)', 'L’Umbria (Perugia)'],
          ['Tuscany (Florence)', 'La Toscana (Firenze)'],
          ['Marche (Ancona)', 'Le Marche (Ancona)'],
          ['Liguria (Genoa)', 'La Liguria (Genova)']
        ],
        ['Landlocked Umbria lies nestled inside the central Apennines with Lake Trasimeno.', 'L’Umbria è interamente circondata da Toscana, Marche e Lazio, con il Lago Trasimeno.']
      ),
      q(
        'Which regional capital hosts Europe’s oldest continuously operating university (1088)?',
        'Quale capoluogo regionale ospita l’università più antica d’Europa (fondata nel 1088)?',
        [
          ['Bologna (Emilia-Romagna)', 'Bologna (Emilia-Romagna)'],
          ['Trieste (Friuli-Venezia Giulia)', 'Trieste (Friuli-Venezia Giulia)'],
          ['Aosta (Valle d’Aosta)', 'Aosta (Valle d’Aosta)'],
          ['Ancona (Marche)', 'Ancona (Marche)']
        ],
        ['Alma Mater Studiorum in Bologna dates back to 1088 and anchors Emilia-Romagna.', 'L’Alma Mater Studiorum di Bologna risale al 1088 ed è il simbolo dell’Emilia-Romagna.']
      ),
      q(
        'Which region’s capital is Genoa, one of the Mediterranean’s busiest historic seaports?',
        'Di quale regione è capoluogo Genova, uno dei maggiori porti storici del Mediterraneo?',
        [
          ['Liguria', 'La Liguria'],
          ['Lazio', 'Il Lazio'],
          ['Piedmont', 'Il Piemonte'],
          ['Tuscany', 'La Toscana']
        ],
        ['Curving around the Gulf of Genoa, Liguria faces the Ligurian Sea.', 'Affacciata sul Mar Ligure ad arco, la Liguria ha Genova come capoluogo.']
      )
    ]
  }),
  makeHistGeoMission({
    id: 'geo_g5_m4',
    arc: 0,
    sec: 'G5.4 · BOSS',
    pages: '73–96',
    hue: 145,
    horns: 3,
    eyes: 3,
    boss: true,
    title: ['South, Islands & UNESCO Italy', 'Sud, Isole e Patrimonio UNESCO'],
    topic: ['Abruzzo to Sicily & Sardinia, autonomous statutes & UNESCO sites', 'Dall’Abruzzo a Sicilia e Sardegna, statuti speciali e siti UNESCO'],
    demon: ['Sirocco Mirage', 'Miraggio dello Scirocco'],
    tech: ['UNESCO Compass Crown', 'Bussola UNESCO d’Italia'],
    lessons: [
      {
        vis: 'gg5_south_regions',
        text: [
          'Head south into sun-warmed mountains and two-coast seas! Discover rugged <b>Abruzzo</b> (L’Aquila—national parks & chamois), quiet <b>Molise</b> (Campobasso), vibrant <b>Campania</b> (Naples, Vesuvius & Pompeii), long olive-rich <b>Puglia</b> (Bari—the heel of the boot), hilltop <b>Basilicata</b> (Potenza—plus Matera’s ancient Sassi), and mountain-framed <b>Calabria</b> (Catanzaro—the toe).',
          'Scendendo al Sud troviamo <b>Abruzzo</b> (L’Aquila), <b>Molise</b> (Campobasso), <b>Campania</b> (Napoli, Vesuvio e Pompei), <b>Puglia</b> (Bari, tacco d’Italia), <b>Basilicata</b> (Potenza e i Sassi di Matera) e <b>Calabria</b> (Catanzaro, punta dello stivale).'
        ]
      },
      {
        vis: 'gg5_islands_autonomous',
        text: [
          'Two giant Mediterranean islands complete the map: <b>Sicily</b> (Palermo—home to Greek temples in Agrigento and Mount Etna) and <b>Sardinia</b> (Cagliari—granite coasts and ancient Bronze Age <i>nuraghi</i>). Along with Aosta Valley, Trentino-Alto Adige, and Friuli-Venezia Giulia, Sicily and Sardinia are Italy’s <b>5 Autonomous Special-Statute Regions</b>.',
          'Due grandi isole completano lo stivale: la <b>Sicilia</b> (Palermo, tra l’Etna e i templi di Agrigento) e la <b>Sardegna</b> (Cagliari, con i misteriosi <i>nuraghi</i>). Insieme a Valle d’Aosta, Trentino-Alto Adige e Friuli-Venezia Giulia formano le <b>5 Regioni a Statuto Speciale</b>.'
        ]
      },
      {
        vis: 'gg5_unesco_italy',
        text: [
          'Think of <b>UNESCO World Heritage</b> as Earth’s Hall of Fame—and Italy holds <b>over 60 UNESCO sites</b>, the highest count of any country on Earth! From the Dolomites, Venice, Florence, and Rome to Pompeii, Alberobello’s trulli, and Sicily’s Val di Noto, geography teaches us to protect beauty for the future.',
          'La lista <b>UNESCO</b> protegge i tesori dell’umanità: l’Italia detiene il record mondiale con <b>oltre 60 siti UNESCO</b>! Dalle Dolomiti a Venezia, Firenze, Roma, Pompei, i trulli di Alberobello e la Val di Noto, studiare geografia significa anche imparare a custodirli.'
        ]
      }
    ],
    taunt: [
      'Twenty regions, five special statutes, volcanic islands, and ancient wonders—prove you know all of Italy!',
      'Venti regioni, cinque statuti speciali, vulcani e tesori UNESCO: dimostra di conoscere tutta l’Italia!'
    ],
    quiz: [
      q(
        'Which two Italian regions are the Mediterranean’s largest islands AND enjoy Special Autonomous Statute?',
        'Quali due grandi isole italiane sono anche Regioni a Statuto Speciale?',
        [
          ['Sicily (Palermo) and Sardinia (Cagliari)', 'Sicilia (Palermo) e Sardegna (Cagliari)'],
          ['Campania and Calabria', 'Campania e Calabria'],
          ['Lazio and Abruzzo', 'Lazio e Abruzzo'],
          ['Puglia and Basilicata', 'Puglia e Basilicata']
        ],
        ['Italy’s 5 autonomous regions are Sicily, Sardinia, Aosta Valley, Trentino-Alto Adige, and Friuli-Venezia Giulia.', 'Le 5 regioni a statuto speciale sono Sicilia, Sardegna, Valle d’Aosta, Trentino-Alto Adige e Friuli-Venezia Giulia.']
      ),
      q(
        'Which southern region forms the "heel" of the Italian boot with Bari as its capital?',
        'Quale regione meridionale forma il "tacco" dello stivale italiano con capoluogo Bari?',
        [
          ['Puglia', 'La Puglia'],
          ['Calabria', 'La Calabria'],
          ['Molise', 'Il Molise'],
          ['Abruzzo', 'L’Abruzzo']
        ],
        ['Puglia stretches southeast between the Adriatic and Ionian seas, famed for olive groves and Alberobello.', 'La Puglia si affaccia su Adriatico e Ionio fino a Santa Maria di Leuca.']
      ),
      q(
        'In which region do Naples, Mount Vesuvius, and ancient Pompeii lie?',
        'In quale regione si trovano Napoli, il Vesuvio e l’antica Pompei?',
        [
          ['Campania', 'In Campania'],
          ['Basilicata', 'In Basilicata'],
          ['Sicily', 'In Sicilia'],
          ['Umbria', 'In Umbria']
        ],
        ['Campania wraps around the Bay of Naples on the Tyrrhenian Sea.', 'La Campania si affaccia sul Golfo di Napoli sul Mar Tirreno.']
      ),
      q(
        'Why does Italy hold a world record on the UNESCO World Heritage list?',
        'Perché l’Italia detiene un primato mondiale nella lista UNESCO?',
        [
          ['It has more recognized natural and cultural World Heritage sites than any other nation', 'Custodisce il maggior numero al mondo di siti culturali e naturali protetti'],
          ['It owns all glaciers on Antarctica', 'Possiede tutti i ghiacciai dell’Antartide'],
          ['It has the largest desert on Earth', 'Ospita il deserto più grande della Terra'],
          ['It contains no mountains above 500 meters', 'Non ha rilievi sopra i 500 metri']
        ],
        ['From alpine Dolomites to ancient Roman ruins and Renaissance cities, Italy’s heritage spans every region.', 'Dalle Dolomiti alle città d’arte e ai parchi naturali, ogni regione custodisce tesori unici.']
      )
    ]
  })
];

// ============================================================================
// Grade 9 Geography (Level 1 · 1° Superiore · Physical & Human Foundations)
// ============================================================================
export const GEO9_UNIT: UnitInfo = {
  title: ['Level 1 · Earth Systems, People & Europe', 'Livello 1 · Sistema Terra, Popolazione ed Europa'],
  ch: 'Cap. 1–3',
  subject: 'geo9'
};

export const GEO9_ARCS: ArcInfo[] = [
  {
    n: 1,
    unit: 0,
    subject: 'geo9',
    title: ['Cartography, GIS & Tectonic Earth', 'Cartografia, GIS e Dinamica Terrestre'],
    pages: '1–88'
  },
  {
    n: 2,
    unit: 0,
    subject: 'geo9',
    title: ['Atmosphere, Climate Biomes & Water Cycle', 'Atmosfera, Biomi Climatici e Idrosfera'],
    pages: '89–168'
  },
  {
    n: 3,
    unit: 0,
    subject: 'geo9',
    title: ['Demographics, Cities & Italy in Europe', 'Popolazione, Città e Italia in Europa'],
    pages: '169–250'
  }
];

export const GEO9_MISSIONS: Mission[] = [
  makeHistGeoMission({
    id: 'geo_l1_m1',
    arc: 0,
    sec: '1.1',
    pages: '6–44',
    hue: 190,
    horns: 2,
    eyes: 2,
    title: ['Cartography, Projections & GIS', 'Cartografia, Proiezioni e GIS'],
    topic: ['Geoid vs orange peel, Mercator vs Peters & GPS/GIS layers', 'Geoide, proiezioni di Mercatore vs Peters e strati GIS/GPS'],
    demon: ['Warp Sphere', 'Sfera Distorta'],
    tech: ['GIS Multi-Layer Lens', 'Lente Multistrato GIS'],
    lessons: [
      {
        vis: 'gg9_orange_peel_projection',
        text: [
          'Try flattening an orange peel cleanly onto a desk—it ALWAYS tears or stretches! Because Earth is a curved <b>geoid</b>, every flat world map must distort either <b>shape</b> or <b>area</b>: <b>Mercator</b> (1569) kept compass angles true for sailors but made Greenland look huge as Africa (Africa is actually 14× larger!), while <b>Gall–Peters</b> preserves real area.',
          'Prova a schiacciare la buccia di un’arancia sul tavolo: si strappa o si allunga! Perché la Terra è un <b>geoide</b>, ogni planisfero deforma forma o area: <b>Mercatore</b> conserva gli angoli per la navigazione ma ingrandisce enormemente le zone polari, mentre <b>Gall–Peters</b> rispetta le superfici reali.'
        ]
      },
      {
        vis: 'gg9_contour_lines',
        text: [
          'Topographic maps show 3D mountains on flat paper using <b>contour lines (isoipse)</b>—each ring traces constant altitude above sea level. Just like stairs: tightly packed lines mean a steep cliff, while widely spaced lines mean a gentle slope!',
          'Le carte topografiche rappresentano il 3D su carta piana con le <b>isoipse (curve di livello)</b>, linee che uniscono punti alla stessa altitudine. Come in una scalinata: linee fitte = pendio ripido; linee distanziate = pendio dolce!'
        ]
      },
      {
        vis: 'gg9_gis_layers',
        text: [
          'Modern geographers stack digital transparency sheets inside a <b>GIS (Geographic Information System)</b>: layer 1 shows rivers, layer 2 flood zones, layer 3 roads and hospitals, while <b>GPS</b> satellites pinpoint exact coordinates by measuring radio travel time from at least four satellites.',
          'Oggi i geografi sovrappongono strati digitali in un <b>GIS</b> (fiumi + zone alluvionali + strade + ospedali), mentre i satelliti <b>GPS/Galileo</b> calcolano la posizione esatta incrociando il tempo di arrivo dei segnali radio.'
        ]
      }
    ],
    taunt: [
      'A flat map never lies—Greenland really IS bigger than Africa, right?!',
      'Le carte piane non mentono mai: la Groenlandia è davvero grande quanto l’Africa, no?!'
    ],
    quiz: [
      q(
        'Why must every flat world map introduce some distortion?',
        'Perché ogni planisfero su foglio piano introduce inevitabilmente delle deformazioni?',
        [
          ['Because a 3D spherical/geoid surface cannot be flattened onto a 2D plane without stretching or tearing', 'Perché la superficie curva del geoide non può essere stesa su un piano senza stiramenti o tagli'],
          ['Because Earth rotates too slowly for ink to dry', 'Perché la Terra ruota troppo lentamente'],
          ['Because oceans change size every winter', 'Perché gli oceani cambiano dimensione ogni inverno'],
          ['Because compass needles only point East', 'Perché l’ago della bussola indica solo l’Est']
        ],
        ['Like flattening an orange peel, projecting a curved globe onto a plane trades off area, shape, or distance.', 'Come schiacciare una buccia d’arancia, ogni proiezione sceglie quale proprietà sacrificare tra forma, area o distanze.']
      ),
      q(
        'What does a tightly packed cluster of contour lines (isoipse) on a hiking map tell you?',
        'Che cosa indicano isoipse (curve di livello) molto ravvicinate su una carta escursionistica?',
        [
          ['A very steep slope or cliff', 'Un pendio molto ripido o una parete scoscesa'],
          ['A completely flat sandy beach', 'Una spiaggia perfettamente pianeggiante'],
          ['An ocean trench below zero meters', 'Una fossa oceanica sottomarina'],
          ['A train tunnel under a flat city', 'Una galleria ferroviaria in pianura']
        ],
        ['Each line represents an equal jump in elevation; crowded lines mean elevation rises rapidly over short distance.', 'Ogni linea segna lo stesso dislivello: più sono vicine, più rapidamente sale la quota.']
      ),
      q(
        'In which way did Mercator’s 1569 projection help Renaissance sailors while misleading size comparisons?',
        'In che modo la proiezione di Mercatore (1569) aiutava i marinai pur alterando le superfici?',
        [
          ['It kept compass bearings accurate (conformal) while inflating polar lands like Greenland relative to tropical Africa', 'Conservava gli angoli di rotta ingrandendo enormemente le terre polari rispetto all’Africa'],
          ['It printed South America upside down deliberately', 'Stampava il Sudamerica capovolto'],
          ['It removed all lines of latitude from maps', 'Eliminava tutti i paralleli'],
          ['It kept exact square-kilometer area everywhere with zero shape warp', 'Manteneva aree esatte ovunque senza deformazioni']
        ],
        ['Mercator preserved straight compass lines at the cost of huge high-latitude area magnification.', 'Mercatore conservò le rotte lossodromiche sacrificando il rapporto tra le superfici alle alte latitudini.']
      ),
      q(
        'How does a GIS (Geographic Information System) differ from a static paper map?',
        'In che cosa si differenzia un sistema GIS da una tradizionale carta su carta?',
        [
          ['It stacks interactive geospatial data layers (elevation, roads, risk zones) for live spatial analysis', 'Sovrappone strati di dati georeferenziati (rilievi, strade, rischi) per analisi dinamiche'],
          ['It only displays hand-drawn medieval sea monsters', 'Mostra soltanto disegni medievali a mano'],
          ['It cannot accept GPS coordinates', 'Non accetta coordinate satellitari GPS'],
          ['It works exclusively without computers or coordinates', 'Funziona esclusivamente senza computer']
        ],
        ['Urban planners, civil protection teams, and delivery apps query stacked GIS layers in real time.', 'Protezione Civile, urbanisti e navigatori incrociano in tempo reale strati di dati GIS.']
      )
    ]
  }),
  makeHistGeoMission({
    id: 'geo_l1_m2',
    arc: 0,
    sec: '1.2',
    pages: '45–88',
    hue: 18,
    horns: 2,
    eyes: 2,
    title: ['Plate Tectonics, Volcanoes & Quakes', 'Tettonica a Placche, Vulcani e Terremoti'],
    topic: ['Lithospheric plates, subduction, Ring of Fire & Italy seismicity', 'Placche litosferiche, subduzione, terremoti ed Etna/Vesuvio'],
    demon: ['Mantle Magma', 'Magma del Mantello'],
    tech: ['Seismograph Pulse', 'Onda Sismografica'],
    lessons: [
      {
        vis: 'gg9_plate_boundaries',
        text: [
          'Picture Earth’s outer shell (<b>lithosphere</b>) cracked like puzzle pieces floating atop hot slowly churning rock in the mantle! Three things happen where plates meet: they <b>diverge</b> (forming mid-ocean ridges), <b>converge</b> (building Himalayas or sinking in subduction to feed volcanoes), or <b>transform</b> (grinding sideways like San Andreas).',
          'Immagina la crosta terrestre (<b>litosfera</b>) divisa in tessere di un puzzle sopra un mantello lento e caldissimo! Ai confini le placche <b>divergono</b> (dorsali), <b>convergono</b> (catene montuose e vulcani da subduzione) o <b>scorrono lateralmente</b> (faglie trasformi).'
        ]
      },
      {
        vis: 'gg9_volcano_types',
        text: [
          'Not all volcanoes erupt alike! Runny, gas-poor basaltic lava builds gentle <b>shield volcanoes</b> with calm flows (like Hawaii or parts of Etna). Thick, sticky silica-rich magma traps gas like a shaken soda bottle until it blasts explosively—creating steep <b>stratovolcanoes</b> like dangerous <b>Vesuvius</b>.',
          'Non tutti i vulcani eruttano allo stesso modo! Magmi fluidi creano <b>vulcani a scudo</b> con colate calme; magmi densi e ricchi di gas intrappolano pressione come una bottiglia agitata generando <b>stratovulcani esplosivi</b> come il pericoloso <b>Vesuvio</b>.'
        ]
      },
      {
        vis: 'gg9_earthquake_epicenter',
        text: [
          'When locked tectonic rocks snap suddenly, seismic waves radiate outward from the underground <b>hypocenter</b>; the spot directly above on the surface is the <b>epicenter</b>. In Italy, the slow push of Africa against Eurasia runs right up the Apennines—making seismic building codes essential.',
          'Quando rocce bloccate si spezzano all’improvviso, le onde sismiche partono dall’<b>ipocentro</b> sotterraneo; in superficie sopra di esso sta l’<b>epicentro</b>. In Italia la spinta tra placca africana ed eurasiatica rende vitale la prevenzione antisismica.'
        ]
      }
    ],
    taunt: [
      'Solid stone under your feet never moves—until the fault snaps beneath you!',
      'La roccia sotto i piedi sembra immobile… finché la faglia non scatta!'
    ],
    quiz: [
      q(
        'What drives lithospheric tectonic plates to drift a few centimeters each year?',
        'Che cosa mette in lento movimento le placche litosferiche di qualche centimetro l’anno?',
        [
          ['Slow thermal convection currents inside Earth’s hot mantle', 'Lenti moti convettivi termici nel mantello terrestre'],
          ['Surface ocean winds alone', 'Soltanto i venti oceanici superficiali'],
          ['Seasonal winter snowfall on mountains', 'Le nevicate invernali sulle montagne'],
          ['Tidal waves from coastal ferries', 'Le onde dei traghetti costieri']
        ],
        ['Internal planetary heat causes hotter deep rock to rise and cooler rock to sink in convection loops.', 'Il calore interno della Terra genera celle convettive nel mantello che trascinano le placche.']
      ),
      q(
        'Why is Vesuvius near Naples far more explosively dangerous than calm Hawaiian shield volcanoes?',
        'Perché il Vesuvio vicino a Napoli è molto più esplosivo dei vulcani a scudo hawaiani?',
        [
          ['Its viscous silica-rich magma traps pressurized gases before violently bursting out', 'Il suo magma viscoso ricco di silice intrappola gas ad alta pressione fino all’esplosione'],
          ['Its lava flows only underwater below freezing point', 'La sua lava scorre solo sotto zero'],
          ['It has no magma chamber beneath Campania', 'Non possiede alcuna camera magmatica'],
          ['It erupts purely liquid freshwater', 'Eruisce soltanto acqua dolce']
        ],
        ['High viscosity traps steam and gas bubbles until catastrophic Plinian blasts occur.', 'L’elevata viscosità impedisce al gas di uscire dolcemente, accumulando pressione esplosiva.']
      ),
      q(
        'On a seismic report, what is the difference between the hypocenter and the epicenter?',
        'In un bollettino sismico, qual è la differenza tra ipocentro ed epicentro?',
        [
          ['The hypocenter is the underground rupture point; the epicenter sits directly above it on Earth’s surface', 'L’ipocentro è il punto sotterraneo della rottura; l’epicentro è la sua proiezione sulla superficie'],
          ['The hypocenter measures rainfall while epicenter measures wind speed', 'L’ipocentro misura la pioggia e l’epicentro il vento'],
          ['Both words always refer exclusively to ocean volcanoes', 'Entrambi indicano solo vulcani marini'],
          ['The epicenter sits at Earth’s liquid iron core', 'L’epicentro si trova al centro del nucleo terrestre']
        ],
        ['Seismic waves travel up from the deep hypocenter (focus) to strike strongest near the surface epicenter.', 'Le onde partono in profondità dall’ipocentro e colpiscono con maggior forza presso l’epicentro.']
      ),
      q(
        'Which tectonic collision helps explain both Italy’s Apennine quakes and southern Mediterranean volcanoes?',
        'Quale scontro tettonico spiega sia i terremoti appenninici sia i vulcani del Sud Italia?',
        [
          ['Slow convergence between the African plate and the Eurasian plate', 'La lenta convergenza tra la placca africana e la placca eurasiatica'],
          ['Separation between Greenland and Canada', 'L’allontanamento tra Groenlandia e Canada'],
          ['Sliding along California’s San Andreas Fault', 'Lo scorrimento lungo la faglia di Sant’Andrea'],
          ['Collision between India and Australia', 'La collisione tra India e Australia']
        ],
        ['Subduction and compression along the Mediterranean boundary drive Italy’s volcanic arcs and faults.', 'La convergenza nel Mediterraneo alimenta subduzione, archi vulcanici e faglie attive.']
      )
    ]
  }),
  makeHistGeoMission({
    id: 'geo_l1_m3',
    arc: 1,
    sec: '2.1',
    pages: '89–128',
    hue: 215,
    horns: 2,
    eyes: 2,
    title: ['Atmosphere, Weather & Climate Biomes', 'Atmosfera, Climi e Biomi della Terra'],
    topic: ['Troposphere weather vs climate, Köppen zones & Mediterranean biome', 'Meteo vs clima, fascia climatica e macchia mediterranea'],
    demon: ['Monsoon Cyclone', 'Ciclone dei Monsoni'],
    tech: ['Climate Belt Prism', 'Prisma delle Fasce Climatiche'],
    lessons: [
      {
        vis: 'gg9_weather_vs_climate',
        text: [
          'Think of <b>weather</b> as what outfit you wear today (raincoat vs sunglasses), and <b>climate</b> as what fills your closet all year! Weather describes today’s temperature, pressure, wind, and rain in the lowest atmospheric layer (<b>troposphere</b>), while climate is the 30-year average pattern.',
          'Pensa al <b>tempo atmosferico (meteo)</b> come ai vestiti di oggi, e al <b>clima</b> come a tutto il tuo guardaroba stagionale! Il meteo riguarda pioggia, vento e temperatura di oggi nella <b>troposfera</b>; il clima è la media su almeno trent’anni.'
        ]
      },
      {
        vis: 'gg9_climate_factors',
        text: [
          'Why is Palermo mild in winter while Bolzano freezes and Milan gets fog? Four master dials control climate: <b>latitude</b> (sun angle), <b>altitude</b> (temperature drops roughly 6 °C per 1 000 m climb), <b>distance from the sea</b> (water warms/cools slowly like a heat battery), and <b>mountain barriers</b> blocking cold winds.',
          'Quattro fattori regolano il clima: la <b>latitudine</b> (inclinazione dei raggi solari), l’<b>altitudine</b> (-6 °C circa ogni 1 000 m di quota), la <b>distanza dal mare</b> (che mitiga le coste) e le <b>barriere montuose</b> come le Alpi.'
        ]
      },
      {
        vis: 'gg9_biomes_mediterranean',
        text: [
          'Earth’s major climate belts nurture matching living ecosystems called <b>biomes</b>: lush Equatorial rainforests, tropical savannas, arid deserts, cool taiga, frozen tundra—and Italy’s iconic <b>Mediterranean scrub (macchia mediterranea)</b> with drought-tough olive, laurel, rosemary, and holm oak adapted to dry summers and mild wet winters.',
          'Le fasce climatiche generano grandi ecosistemi detti <b>biomi</b>: foresta pluviale, savana, deserto, taiga, tundra e la nostra <b>macchia mediterranea</b> (ulivi, lecci, rosmarino e alloro) perfetta per estati secche e inverni miti.'
        ]
      }
    ],
    sort: {
      type: 'sort',
      title: ['Weather vs Climate & Biome Match', 'Meteo, Clima e Fattori Geografici'],
      hint: ['Sort each clue into Weather Snapshot or Long-Term Climate Factor.', 'Distribuisci gli indizi tra Meteo del Giorno o Clima e Fattori.'],
      cats: [['Short-Term Weather', 'Meteo Giornaliero'], ['Climate & Biomes', 'Clima e Biomi']],
      items: [
        { n: ['Heavy thunderstorm over Rome this afternoon', 'Temporale pomeridiano oggi su Roma'], i: '⛈️', c: 0, why: ['Short-lived atmospheric event inside the troposphere.', 'Fenomeno atmosferico locale di breve durata.'] },
        { n: ['30-year dry summer / mild winter average', 'Media trentennale di estati secche e inverni miti'], i: '☀️', c: 1, why: ['Multi-decade seasonal pattern defining Mediterranean climate.', 'Andamento medio pluridecennale tipico del clima mediterraneo.'] },
        { n: ['Sea heat moderating Genoa winter nights', 'Mare che mitiga le notti invernali a Genova'], i: '🌊', c: 1, why: ['High specific heat capacity of coastal seawater stabilizes climate.', 'Il mare accumula calore d’estate e lo cede lentamente d’inverno.'] },
        { n: ['Sudden cold wind gust ahead of a front', 'Raffica improvvisa prima di un fronte freddo'], i: '💨', c: 0, why: ['Hour-by-hour pressure change creates daily wind.', 'Variazione giornaliera di pressione atmosferica.'] }
      ]
    },
    taunt: [
      'One chilly rainstorm in August proves there is no warming anywhere—weather IS climate!',
      'Basta un acquazzone estivo per dimostrare che meteo e clima sono la stessa cosa!'
    ],
    quiz: [
      q(
        'How does the temperature of air typically change as you climb 1 000 meters up an Italian Alpine valley?',
        'Come varia in media la temperatura salendo di 1 000 metri lungo una valle alpina?',
        [
          ['It drops by roughly 6 °C', 'Diminuisce di circa 6 °C'],
          ['It rises by 15 °C', 'Aumenta di 15 °C'],
          ['It stays strictly identical at every peak', 'Resta identica su ogni cima'],
          ['It always doubles at night', 'Raddoppia sempre di notte']
        ],
        ['Atmospheric air cools as altitude rises because thin higher air holds less heat radiated from Earth’s ground.', 'La temperatura cala con l’altitudine (circa 0,6 °C ogni 100 m) per la minore densità dell’aria.']
      ),
      q(
        'Why do coastal towns like Genoa or Bari have milder winters than inland Milan at similar latitude?',
        'Perché città costiere come Genova o Bari hanno inverni più miti rispetto a Milano?',
        [
          ['Seawater heats up and cools down far more slowly than land, buffering winter cold', 'L’acqua del mare si riscalda e si raffredda molto più lentamente della terraferma'],
          ['Coastal cities sit much higher above sea level', 'Le città costiere sono molto più in alto sul livello del mare'],
          ['Sunlight never reaches Milan in winter', 'Il sole non illumina mai Milano'],
          ['Lakes generate lava beneath Liguria', 'Sotto la Liguria scorre lava liquida']
        ],
        ['Maritime proximity creates a smaller annual temperature range than continental interiors.', 'Il mare funge da volano termico riducendo l’escursione termica annua.']
      ),
      q(
        'Which vegetation biome thrives naturally around mild wet winters and dry sunny summers in Italy?',
        'Quale bioma naturale è adattato a estati calde e secche e inverni miti e piovosi in Italia?',
        [
          ['Mediterranean scrub (macchia mediterranea: holm oak, olive, rosemary)', 'La macchia mediterranea (leccio, ulivo, mirto, rosmarino)'],
          ['Frozen Arctic lichen tundra', 'La tundra artica ghiacciata'],
          ['Boreal spruce taiga permafrost', 'La taiga boreale su permafrost'],
          ['Equatorial mangrove swamp', 'La foresta pluviale equatoriale']
        ],
        ['Waxy evergreen leaves help Mediterranean plants conserve water through dry summer months.', 'Le foglie coriacee e sempreverdi limitano la perdita d’acqua durante l’estate secca.']
      ),
      q(
        'In which atmospheric layer do clouds, rain, winds, and everyday weather occur?',
        'In quale strato dell’atmosfera si formano nuvole, piogge e venti?',
        [
          ['The troposphere', 'La troposfera'],
          ['The thermosphere', 'La termosfera'],
          ['Outer interplanetary space', 'Lo spazio interplanetario'],
          ['Earth’s inner core', 'Il nucleo interno']
        ],
        ['The lowest ~12 km troposphere holds ~75% of atmospheric mass and nearly all water vapor.', 'La troposfera contiene quasi tutto il vapore acqueo e ospita i fenomeni meteorologici.']
      )
    ]
  }),
  makeHistGeoMission({
    id: 'geo_l1_m4',
    arc: 1,
    sec: '2.2',
    pages: '129–168',
    hue: 198,
    horns: 2,
    eyes: 2,
    title: ['Hydrosphere, Oceans & Water Crisis', 'Idrosfera, Mari e Gestione dell’Acqua'],
    topic: ['97% salty vs 3% fresh, Gulf Stream, watersheds & blue footprint', '97% salata vs 3% dolce, Corrente del Golfo, bacini e impronta idrica'],
    demon: ['Thirst Drought', 'Siccità Arida'],
    tech: ['Hydro-Cycle Turbine', 'Turbina del Ciclo Idrico'],
    lessons: [
      {
        vis: 'gg9_water_distribution',
        text: [
          'Picture 100 liters filling a tub to represent all water on Earth: <b>97 liters</b> are salty ocean water, <b>2 liters</b> sit frozen inside glaciers and ice caps, and less than <b>1 liter</b> sits inside rivers, lakes, and reachable groundwater for 8 billion people! That tiny liquid freshwater share makes conservation urgent.',
          'Immagina 100 litri per tutta l’acqua della Terra: <b>97 litri</b> sono mare salato, <b>2 litri</b> ghiacciai e calotte polari, e meno di <b>1 litro</b> scorre in fiumi, laghi e falde accessibili a 8 miliardi di persone! Ecco perché l’acqua dolce è preziosissima.'
        ]
      },
      {
        vis: 'gg9_ocean_currents',
        text: [
          'Oceans act like global conveyor belts moving heat around the planet: the warm <b>Gulf Stream</b> carries tropical Atlantic warmth northeast so Ireland, Britain, and Norway stay far milder than icy Canadian coasts at the exact same latitude.',
          'Gli oceani funzionano come nastri trasportatori di calore: la calda <b>Corrente del Golfo</b> porta tepore tropicale verso l’Europa nord-occidentale, rendendo Irlanda e Norvegia molto più miti del Canada alla stessa latitudine.'
        ]
      },
      {
        vis: 'gg9_water_footprint',
        text: [
          'Your morning shower uses visible tap water—but your <b>water footprint</b> counts all hidden water used to grow food and manufacture clothes (one cotton T-shirt takes ~2 500 liters!). Protecting alpine glaciers and fixing leaky aqueducts keeps river basins healthy from source to mouth.',
          'La doccia usa acqua visibile, ma l’<b>impronta idrica</b> somma tutta l’acqua nascosta usata per cibo e abiti (una maglietta di cotone richiede circa 2 500 litri!). Tutelare ghiacciai alpini e reti idriche protegge l’intero bacino idrografico.'
        ]
      }
    ],
    taunt: [
      'Oceans cover 71% of Earth—waste every drop, water is infinite!',
      'Gli oceani coprono il 71% del pianeta: spreca pure, l’acqua è infinita!'
    ],
    quiz: [
      q(
        'Roughly what share of all water on Earth is liquid freshwater readily accessible in rivers, lakes, and shallow aquifers?',
        'Circa quale quota di tutta l’acqua terrestre è acqua dolce liquida accessibile in fiumi, laghi e falde?',
        [
          ['Less than 1% of Earth’s total water', 'Meno dell’1% di tutta l’acqua terrestre'],
          ['About 97% of Earth’s water', 'Circa il 97% dell’acqua terrestre'],
          ['Exactly 50% of all oceans', 'Esattamente il 50% degli oceani'],
          ['80% inside clouds alone', 'L’80% nelle sole nuvole']
        ],
        ['97% is saline ocean and ~2% is locked in ice caps and glaciers, leaving <1% accessible liquid freshwater.', 'Il 97% è acqua marina salata e il 2% è intrappolato nei ghiacci, lasciando meno dell’1% disponibile.']
      ),
      q(
        'How does the warm Gulf Stream ocean current affect Western and Northern Europe?',
        'Quale effetto produce la calda Corrente del Golfo sull’Europa occidentale e settentrionale?',
        [
          ['It keeps ports like Bergen and coastal UK far warmer than regions at the same latitude in Canada', 'Mantiene porti come Bergen e la Gran Bretagna molto più miti del Canada alla stessa latitudine'],
          ['It freezes the Mediterranean Sea every January', 'Congela il Mar Mediterraneo ogni gennaio'],
          ['It reverses Earth’s magnetic poles', 'Inverte i poli magnetici'],
          ['It dries up all rainfall in Ireland', 'Prosciuga tutte le piogge in Irlanda']
        ],
        ['Warm Atlantic surface currents transfer tropical thermal energy northward to Europe’s shores.', 'Il trasporto di acqua calda tropicale mitiga profondamente il clima costiero europeo.']
      ),
      q(
        'What does the "water footprint" (impronta idrica) measure?',
        'Che cosa misura l’"impronta idrica" di un prodotto o di una persona?',
        [
          ['The total direct and hidden virtual freshwater consumed to produce goods, food, and services', 'Il volume totale di acqua dolce diretta e indiretta usata per produrre beni e cibo'],
          ['Only the water poured directly from a bathroom faucet', 'Solo l’acqua bevuta direttamente dal rubinetto'],
          ['The salt concentration of Arctic seawater', 'La salinità del Mar Glaciale Artico'],
          ['The height of waves during storms', 'L’altezza delle onde durante una burrasca']
        ],
        ['Agriculture (meat, cotton, crops) accounts for ~70% of global freshwater withdrawals.', 'L’agricoltura e la produzione di beni racchiudono gran parte dell’acqua "nascosta" nei nostri consumi.']
      ),
      q(
        'Why do melting Alpine glaciers threaten northern Italy’s summer agriculture in the Po Valley?',
        'Perché la riduzione dei ghiacciai alpini minaccia l’agricoltura estiva della Pianura Padana?',
        [
          ['Glaciers act as summer water reservoirs feeding rivers like the Po during dry hot months', 'I ghiacciai funzionano da serbatoi naturali che rilasciano acqua proprio nei mesi estivi secchi'],
          ['Glaciers directly block Mediterranean winds from reaching Rome', 'I ghiacciai bloccano i venti verso Roma'],
          ['Po Valley crops grow exclusively on saltwater', 'Le colture padane usano solo acqua salata'],
          ['Glaciers turn summer snow into desert sand', 'Trasformano la neve in sabbia desertica']
        ],
        ['When snowpack and glacier reserves shrink, summer river discharge drops sharply right when irrigation peaks.', 'Meno neve e ghiaccio in quota significano portate ridotte del Po durante i picchi di irrigazione estiva.']
      )
    ]
  }),
  makeHistGeoMission({
    id: 'geo_l1_m5',
    arc: 2,
    sec: '3.1',
    pages: '169–210',
    hue: 292,
    horns: 2,
    eyes: 2,
    title: ['Demographics, Pyramids & Mega-Cities', 'Demografia, Piramidi dell’Età e Città'],
    topic: ['Demographic transition, age pyramids & push/pull migration', 'Transizione demografica, piramidi dell’età e urbanizzazione'],
    demon: ['Census Phantom', 'Fantasma del Censimento'],
    tech: ['Age-Pyramid Scanner', 'Scanner Piramide Demografica'],
    lessons: [
      {
        vis: 'gg9_age_pyramids',
        text: [
          'An <b>age pyramid</b> is a country’s X-ray! A wide-base triangle (many children, fewer elders) signals fast population growth in countries like Niger; an urn or top-heavy shape (few babies, many elders over 65) shows Italy and Japan today—creating tough questions about pensions and healthcare.',
          'La <b>piramide delle età</b> è la radiografia di un Paese! Una base larga a triangolo indica forte crescita e tanti giovani (es. Africa subsahariana); una forma "a urna" stretta alla base (pochi nati, tanti anziani) caratterizza l’Italia e il Giappone.'
        ]
      },
      {
        vis: 'gg9_demographic_transition',
        text: [
          'Over the past 200 years, societies rode the <b>Demographic Transition</b>: first better sanitation and medicine cut death rates rapidly while birth rates stayed high (population boom!); later, education, women’s careers, and urban living lowered birth rates too until growth leveled off.',
          'Con la <b>transizione demografica</b>, prima crolla la mortalità grazie a igiene e medicina mentre le nascite restano alte (boom demografico); poi istruzione e vita urbana riducono anche la natalità fino alla stabilizzazione.'
        ]
      },
      {
        vis: 'gg9_urbanization_push_pull',
        text: [
          'Today over <b>56% of humanity lives in cities</b>! People move due to <b>push factors</b> (drought, war, lack of rural jobs) and <b>pull factors</b> (universities, hospitals, jobs)—forming giant <b>metropolitan areas</b> and coastal <b>megalopolises</b> like Tokyo, São Paulo, or Europe’s Blue Banana corridor.',
          'Oggi oltre il <b>56% dell’umanità vive in città</b>! Ci si sposta per <b>fattori di spinta</b> (guerre, siccità, crisi rurali) e <b>fattori di attrazione</b> (lavoro, università, servizi), creando immense aree metropolitane e megalopoli.'
        ]
      }
    ],
    taunt: [
      'A country with 80-year-old grandparents outnumbering toddlers works just like a baby boom!',
      'Un Paese con più ottantenni che bambini funziona identico a uno in pieno boom giovanile!'
    ],
    quiz: [
      q(
        'What does an "urn-shaped" age pyramid (narrow base, bulging middle/top) indicate about a country like Italy?',
        'Che cosa indica una piramide demografica "a urna" (base stretta, rigonfia in alto) come quella italiana?',
        [
          ['Low birth rates and an aging population with rising life expectancy', 'Bassa natalità, invecchiamento della popolazione e lunga speranza di vita'],
          ['Explosive infant population boom and 40-year life expectancy', 'Esplosione di nascite e vita media di 40 anni'],
          ['Zero migration across all borders', 'Assenza totale di qualsiasi movimento'],
          ['Equal population in every age group from 0 to 100', 'Popolazione identica da 0 a 100 anni']
        ],
        ['Fewer births shrink the bottom bars while longer life widens the senior top bars.', 'Meno culle stringono la base mentre la maggiore longevità allarga le fasce anziane.']
      ),
      q(
        'During Stage 2 of the Demographic Transition, why does total population grow explosively?',
        'Nella fase 2 della transizione demografica, perché la popolazione cresce rapidamente?',
        [
          ['Death rates drop sharply thanks to healthcare and sanitation while birth rates stay temporarily high', 'La mortalità crolla grazie a igiene e cure mediche mentre la natalità resta ancora alta'],
          ['People suddenly stop aging altogether', 'Le persone smettono di invecchiare'],
          ['Earth doubles its land continents', 'I continenti raddoppiano di superficie'],
          ['Birth rates triple immediately while hospitals close', 'La natalità triplica mentre chiudono gli ospedali']
        ],
        ['The wide gap between still-high births and newly lowered deaths produces rapid natural increase.', 'Lo scarto tra natalità ancora alta e mortalità ormai bassa genera forte crescita naturale.']
      ),
      q(
        'Which pair illustrates a Push factor vs. a Pull factor in human migration?',
        'Quale coppia distingue correttamente un fattore di spinta (push) da uno di attrazione (pull)?',
        [
          ['Push: armed conflict or severe drought; Pull: university education and steady employment', 'Spinta: conflitti armati o siccità; Attrazione: istruzione universitaria e lavoro stabile'],
          ['Push: affordable healthcare; Pull: collapsing wages', 'Spinta: buona sanità; Attrazione: crollo dei salari'],
          ['Both words always mean forced exile only', 'Entrambi indicano solo deportazione forzata'],
          ['Push and pull refer exclusively to ocean tides', 'Indicano soltanto le maree oceaniche']
        ],
        ['Push factors drive migrants out of an origin region; pull factors attract them toward a destination.', 'I fattori di spinta allontanano dal luogo d’origine, quelli di attrazione attirano verso la meta.']
      ),
      q(
        'Approximately what share of the global human population now lives in urban areas?',
        'Circa quale quota della popolazione mondiale vive oggi in aree urbane?',
        [
          ['More than half (around 56% and rising)', 'Oltre la metà (circa il 56% e in crescita)'],
          ['Less than 5% globally', 'Meno del 5% nel mondo'],
          ['Strictly 100% everywhere on Earth', 'Il 100% esatto ovunque'],
          ['Only 10%, identical to 1800', 'Solo il 10%, come nel 1800']
        ],
        ['Urbanization passed the 50% milestone globally in 2007 and keeps expanding across Asia and Africa.', 'La soglia del 50% urbano fu superata nel 2007 e continua a crescere soprattutto in Asia e Africa.']
      )
    ]
  }),
  makeHistGeoMission({
    id: 'geo_l1_m6',
    arc: 2,
    sec: '3.2 · BOSS',
    pages: '211–250',
    hue: 145,
    horns: 3,
    eyes: 3,
    boss: true,
    title: ['Italy & Europe’s Geographic Mosaic', 'L’Italia e il Mosaico d’Europa'],
    topic: ['EU institutions, Schengen/Eurozone & Italy’s landscape & industries', 'Istituzioni UE, Schengen/Euro e paesaggi ed economia d’Italia'],
    demon: ['Customs Barrier', 'Barriera Doganale'],
    tech: ['European Compass', 'Bussola Europea'],
    lessons: [
      {
        vis: 'gg9_europe_regions_map',
        text: [
          'Picture Europe as a jagged peninsula of peninsulas bordered by the Atlantic, Mediterranean, and Ural Mountains—deeply indented with natural harbors and mild ocean climates. Four major physical zones stretch north to south: ancient Scandinavian Shield, broad Central-Eastern Plains, Alpine-Carpathian mountain arc, and warm Mediterranean peninsulas.',
          'L’Europa è una "penisola di penisole" tra Atlantico, Mediterraneo e Monti Urali, ricca di coste articolate e climi temperati: scudo scandinavo a nord, grande pianura centro-orientale, arco alpino-carpatico e penisole mediterranee a sud.'
        ]
      },
      {
        vis: 'gg9_eu_schengen_euro',
        text: [
          'Today the <b>European Union (27 Member States)</b> turns former wartime rivals into partners: <b>Schengen</b> lets citizens cross most internal borders without passport queues, while 20 nations share the <b>Euro (€)</b> currency and Erasmus student exchanges link universities from Bologna to Stockholm.',
          'Oggi l’<b>Unione Europea (27 Paesi)</b> unisce ex rivali: l’area <b>Schengen</b> consente di attraversare i confini interni senza controlli sistematici, 20 Paesi adottano l’<b>Euro (€)</b> e il programma Erasmus collega le università europee.'
        ]
      },
      {
        vis: 'gg9_italy_in_europe',
        text: [
          'At the center of the Mediterranean bridge sits <b>Italy</b>—Europe’s second-largest manufacturing hub famous for precision machinery, design, pharmaceuticals, and high-quality agriculture (PDO/PGI). Balancing northern industrial districts, tourism heritage, and southern port hubs inside the Mediterranean shapes Italy’s 21st-century future.',
          'Al centro del ponte mediterraneo l’<b>Italia</b> è la seconda potenza manifatturiera europea (meccanica di precisione, design, farmaceutica, agroalimentare DOP/IGP), chiamata a valorizzare distretti produttivi, turismo sostenibile e porti del Mezzogiorno.'
        ]
      }
    ],
    taunt: [
      'Borders, currencies, mountains, and factories—can you connect physical geography with European integration?',
      'Confini, monete, montagne e distretti industriali: sai collegare geografia fisica e integrazione europea?'
    ],
    quiz: [
      q(
        'What practical freedom does the Schengen Area provide inside Europe?',
        'Quale libertà pratica garantisce lo Spazio Schengen in Europa?',
        [
          ['Free movement of people across internal borders without routine passport checks', 'La libera circolazione delle persone tra confini interni senza controlli sistematici ai passaporti'],
          ['Free gasoline for every driver worldwide', 'Benzina gratuita per tutti nel mondo'],
          ['Replacing all European languages with Latin', 'Sostituzione di tutte le lingue europee con il latino'],
          ['Building taller border walls between EU states', 'Costruzione di muri di confine tra gli Stati UE']
        ],
        ['Schengen removes internal border checkpoints while coordinating external European frontier security.', 'Schengen abolisce i controlli alle frontiere interne coordinando quelle esterne comuni.']
      ),
      q(
        'Why has Europe’s deeply indented coastline helped its history of trade and maritime cities?',
        'Perché la forma molto articolata e frastagliata delle coste europee ha favorito commerci e porti?',
        [
          ['Peninsulas, bays, and deep natural harbors kept almost no region far from sea routes', 'Penisole, golfi e porti naturali hanno tenuto gran parte del continente vicina alle rotte marittime'],
          ['It eliminated all rivers across Germany and Italy', 'Ha eliminato tutti i fiumi europei'],
          ['It isolated every port behind 5 000 m cliffs', 'Ha isolato ogni porto dietro scogliere di 5 000 m'],
          ['It kept the Atlantic permanently frozen', 'Ha mantenuto l’Atlantico ghiacciato']
        ],
        ['High coastline-to-area ratio made coastal and river shipping cheap and accessible for centuries.', 'L’altissimo sviluppo costiero ha reso i trasporti marittimi e fluviali rapidi ed economici.']
      ),
      q(
        'Beyond tourism and food, in which economic pillar is Italy currently Europe’s second-strongest producer?',
        'Oltre a turismo e agroalimentare, in quale settore economico l’Italia è la seconda potenza europea?',
        [
          ['Precision manufacturing (machinery, fashion, pharmaceuticals, design)', 'Nell’industria manifatturiera (meccanica di precisione, moda, farmaceutica, design)'],
          ['Crude oil extraction in Rome', 'Estrazione di petrolio greggio a Roma'],
          ['Tropical banana plantations', 'Piantagioni tropicali di banane'],
          ['Arctic diamond mining', 'Miniere artiche di diamanti']
        ],
        ['Italian "Made in Italy" exports depend heavily on specialized industrial districts (machinery, mechatronics, food, fashion).', 'L’export italiano poggia su distretti industriali specializzati in meccanica, moda, design e cibo.']
      ),
      q(
        'What are Italy’s eastern natural border mountains dividing Europe geographically from Asia?',
        'Quale catena montuosa segna tradizionalmente il confine naturale orientale dell’Europa verso l’Asia?',
        [
          ['The Ural Mountains', 'I Monti Urali'],
          ['The Apennines', 'Gli Appennini'],
          ['The Andes', 'Le Ande'],
          ['The Atlas Mountains', 'I Monti dell’Atlante']
        ],
        ['Geographers draw the conventional Europe–Asia continental boundary along the Ural Mountains and Caucasus.', 'Convenzionalmente il confine tra Europa e Asia segue i Monti Urali e il Caucaso.']
      )
    ]
  })
];

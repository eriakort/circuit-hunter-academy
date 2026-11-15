import type { Language } from '../types';

type Pair = [string, string];
const l = (lang: Language, p: Pair) => (lang === 'it' ? p[1] : p[0]);

const svg = (label: string, body: string, h = 215) =>
  `<svg viewBox="0 0 640 ${h}" class="dia" role="img" aria-label="${label}">${body}</svg>`;

const panel = (x: number, y: number, w: number, h: number, stroke: string, bg = 'rgba(255,255,255,0.03)') =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="${bg}" stroke="${stroke}" stroke-width="1.6"/>`;

export const GEO_VISUAL_BUILDERS_5_9: Record<string, (lang: Language) => string> = {
  // ---------------- GRADE 5 GEOGRAPHY (12) ----------------
  gg5_compass_maps: lang => svg('Compass Rose & Map Types', `
    ${panel(18, 16, 604, 182, '#45d8ff')}
    <circle cx="115" cy="106" r="46" fill="rgba(69,216,255,0.1)" stroke="#45d8ff" stroke-width="2"/>
    <polygon points="115,62 124,106 115,100 106,106" fill="#ff6b8b"/>
    <polygon points="115,150 124,106 115,112 106,106" fill="#9fb0c8"/>
    <text x="115" y="54" text-anchor="middle" fill="#ff6b8b" font-weight="800">N</text>
    <text x="115" y="168" text-anchor="middle" class="sm">S</text>
    <text x="171" y="110" text-anchor="middle" class="sm">${l(lang, ['E', 'E'])}</text>
    <text x="58" y="110" text-anchor="middle" class="sm">${l(lang, ['W', 'O'])}</text>
    ${panel(205, 34, 130, 146, '#38ef7d', 'rgba(56,239,125,0.08)')}
    <text x="270" y="66" text-anchor="middle" fill="#38ef7d" font-weight="800">⛰️ ${l(lang, ['PHYSICAL', 'FISICA'])}</text>
    <text x="270" y="102" text-anchor="middle" class="sm">${l(lang, ['Mountains, rivers,', 'Monti, fiumi,'])}</text>
    <text x="270" y="124" text-anchor="middle" class="sm">${l(lang, ['plains & lakes', 'pianure e mari'])}</text>
    ${panel(345, 34, 130, 146, '#ffd166', 'rgba(255,209,102,0.08)')}
    <text x="410" y="66" text-anchor="middle" fill="#ffd166" font-weight="800">📍 ${l(lang, ['POLITICAL', 'POLITICA'])}</text>
    <text x="410" y="102" text-anchor="middle" class="sm">${l(lang, ['Borders, regions,', 'Confini, regioni,'])}</text>
    <text x="410" y="124" text-anchor="middle" class="sm">${l(lang, ['& capitals', 'città e Stati'])}</text>
    ${panel(485, 34, 122, 146, '#a88bff', 'rgba(168,139,255,0.08)')}
    <text x="546" y="66" text-anchor="middle" fill="#a88bff" font-weight="800">🌧️ ${l(lang, ['THEMATIC', 'TEMATICA'])}</text>
    <text x="546" y="102" text-anchor="middle" class="sm">${l(lang, ['Climate, crops,', 'Climi, piogge,'])}</text>
    <text x="546" y="124" text-anchor="middle" class="sm">${l(lang, ['rail & people', 'treni, industrie'])}</text>
  `),
  gg5_map_scale: lang => svg('Geographic Map Scale Ratio', `
    ${panel(18, 16, 604, 182, '#ffd166')}
    <text x="320" y="42" text-anchor="middle" fill="#ffd166" font-weight="800">${l(lang, ['MAP SCALE · SHRINKING REAL DISTANCE ONTO PAPER', 'SCALA DI RIDUZIONE · DA REALTÀ A CARTA'])}</text>
    <rect x="70" y="70" width="200" height="16" fill="#45d8ff" stroke="#ffffff"/>
    <rect x="70" y="70" width="100" height="16" fill="#ffd166"/>
    <text x="70" y="104" text-anchor="middle" class="sm">0</text>
    <text x="170" y="104" text-anchor="middle" fill="#ffd166" font-weight="700">1 cm = 1 km</text>
    <text x="270" y="104" text-anchor="middle" class="sm">2 km</text>
    <text x="170" y="138" text-anchor="middle" fill="#45d8ff" font-weight="800">1 : 100 000</text>
    <text x="170" y="162" text-anchor="middle" class="sm">1 cm → 100 000 cm = 1 000 m</text>
    ${panel(336, 60, 264, 118, '#38ef7d', 'rgba(56,239,125,0.08)')}
    <text x="468" y="88" text-anchor="middle" fill="#38ef7d" font-weight="700">${l(lang, ['Zoom Compare:', 'Confronto Zoom:'])}</text>
    <text x="468" y="118" text-anchor="middle" class="sm">🔍 1 : 10 000 = ${l(lang, ['Your neighborhood!', 'Zoom sul quartiere!'])}</text>
    <text x="468" y="146" text-anchor="middle" class="sm">🌍 1 : 5 000 000 = ${l(lang, ['Entire Italy', 'Intera Italia'])}</text>
  `),
  gg5_lat_long_grid: lang => svg('Latitude Parallels & Longitude Meridians', `
    ${panel(18, 16, 604, 182, '#45d8ff')}
    <circle cx="155" cy="108" r="66" fill="rgba(69,216,255,0.1)" stroke="#45d8ff" stroke-width="2.4"/>
    <line x1="89" y1="108" x2="221" y2="108" stroke="#ff6b8b" stroke-width="2.6"/>
    <line x1="155" y1="42" x2="155" y2="174" stroke="#ffd166" stroke-width="2.6"/>
    <ellipse cx="155" cy="108" rx="34" ry="66" fill="none" stroke="#ffd166" stroke-width="1.3" opacity="0.6"/>
    <path d="M98 80 Q155 88 212 80 M98 136 Q155 128 212 136" fill="none" stroke="#ff6b8b" stroke-width="1.3" opacity="0.6"/>
    <circle cx="176" cy="84" r="5" fill="#38ef7d"/>
    ${panel(265, 36, 336, 66, '#ff6b8b', 'rgba(255,107,139,0.08)')}
    <text x="433" y="64" text-anchor="middle" fill="#ff6b8b" font-weight="800">${l(lang, ['PARALLELS → LATITUDE (N / S)', 'PARALLELI → LATITUDINE (N / S)'])}</text>
    <text x="433" y="86" text-anchor="middle" class="sm">${l(lang, ['Horizontal rings from Equator (0°)', 'Cerchi orizzontali dall’Equatore (0°)'])}</text>
    ${panel(265, 114, 336, 66, '#ffd166', 'rgba(255,209,102,0.08)')}
    <text x="433" y="142" text-anchor="middle" fill="#ffd166" font-weight="800">${l(lang, ['MERIDIANS → LONGITUDE (E / W)', 'MERIDIANI → LONGITUDINE (E / O)'])}</text>
    <text x="433" y="164" text-anchor="middle" class="sm">${l(lang, ['Vertical arcs from Greenwich (0°)', 'Semicerchi verticali da Greenwich (0°)'])}</text>
  `),
  gg5_alps_apennines: lang => svg('Alps and Apennines cross-section', `
    ${panel(18, 16, 604, 182, '#38ef7d')}
    <text x="320" y="40" text-anchor="middle" fill="#ffd166" font-weight="800">${l(lang, ['ITALY RELIEF PROFILE · ALPS, PO VALLEY & APENNINES', 'PROFILO FISICO D’ITALIA · ALPI, PIANURA E APPENNINI'])}</text>
    <polyline points="42,158 95,66 135,112 170,74 225,152 380,152 435,96 485,126 530,90 595,158" fill="rgba(56,239,125,0.16)" stroke="#38ef7d" stroke-width="3"/>
    <text x="125" y="56" text-anchor="middle" fill="#45d8ff" font-weight="700">${l(lang, ['Alps (4 808 m)', 'Alpi · Monte Bianco'])}</text>
    <text x="302" y="142" text-anchor="middle" fill="#38ef7d" font-weight="700">${l(lang, ['Po Plain', 'Pianura Padana'])}</text>
    <text x="485" y="80" text-anchor="middle" fill="#ff9f45" font-weight="700">${l(lang, ['Apennines (2 912 m)', 'Appennini · Gran Sasso'])}</text>
    <text x="320" y="182" text-anchor="middle" class="sm">${l(lang, ['~35% Mountains · ~42% Hills · ~23% Plains', '~35% Montagne · ~42% Colline · ~23% Pianure'])}</text>
  `),
  gg5_po_lakes_seas: lang => svg('Po River Lakes and Four Italian Seas', `
    ${panel(18, 16, 604, 182, '#45d8ff')}
    <text x="320" y="42" text-anchor="middle" fill="#45d8ff" font-weight="800">${l(lang, ['ITALY’S WATERS · PO RIVER, GLACIAL LAKES & FOUR SEAS', 'ACQUE D’ITALIA · PO, LAGHI E QUATTRO MARI'])}</text>
    ${panel(36, 64, 175, 114, '#45d8ff', 'rgba(69,216,255,0.08)')}
    <text x="123" y="92" text-anchor="middle" fill="#45d8ff" font-weight="700">🌊 ${l(lang, ['Po River (652 km)', 'Fiume Po (652 km)'])}</text>
    <text x="123" y="122" text-anchor="middle" class="sm">${l(lang, ['Monviso → Adriatic Delta', 'Monviso → Delta Adriatico'])}</text>
    <text x="123" y="144" text-anchor="middle" class="sm">${l(lang, ['+ Tiber & Arno south', '+ Tevere e Arno'])}</text>
    ${panel(232, 64, 175, 114, '#38ef7d', 'rgba(56,239,125,0.08)')}
    <text x="319" y="92" text-anchor="middle" fill="#38ef7d" font-weight="700">💧 ${l(lang, ['Lakes', 'Laghi Principali'])}</text>
    <text x="319" y="122" text-anchor="middle" class="sm">${l(lang, ['Garda (largest), Maggiore,', 'Garda (il più grande),'])}</text>
    <text x="319" y="144" text-anchor="middle" class="sm">${l(lang, ['Como & Trasimeno', 'Maggiore, Como, Trasimeno'])}</text>
    ${panel(428, 64, 175, 114, '#ffd166', 'rgba(255,209,102,0.08)')}
    <text x="515" y="92" text-anchor="middle" fill="#ffd166" font-weight="700">⛵ ${l(lang, ['4 Surrounding Seas', '4 Mari attorno'])}</text>
    <text x="515" y="122" text-anchor="middle" class="sm">${l(lang, ['Ligurian · Tyrrhenian', 'Ligure · Tirreno'])}</text>
    <text x="515" y="144" text-anchor="middle" class="sm">${l(lang, ['Ionian · Adriatic', 'Ionio · Adriatico'])}</text>
  `),
  gg5_italian_volcanoes: lang => svg('Active Italian Volcanoes Etna Vesuvius Stromboli', `
    ${panel(18, 16, 604, 182, '#ff6b8b')}
    <text x="320" y="42" text-anchor="middle" fill="#ff6b8b" font-weight="800">${l(lang, ['ITALY’S ACTIVE VOLCANOES · LIVING GEOLOGY', 'I VULCANI ATTIVI D’ITALIA'])}</text>
    <polygon points="85,168 145,86 205,168" fill="rgba(255,107,139,0.28)" stroke="#ff6b8b" stroke-width="2"/>
    <circle cx="145" cy="72" r="8" fill="#ffd166"/>
    <text x="145" y="186" text-anchor="middle" font-weight="700">🌋 ${l(lang, ['Etna (Sicily · 3 350 m)', 'Etna (Sicilia)'])}</text>
    <polygon points="260,168 320,96 380,168" fill="rgba(255,159,69,0.28)" stroke="#ff9f45" stroke-width="2"/>
    <text x="320" y="186" text-anchor="middle" font-weight="700">🌋 ${l(lang, ['Vesuvius (Campania)', 'Vesuvio (Napoli)'])}</text>
    <polygon points="435,168 495,104 555,168" fill="rgba(255,209,102,0.28)" stroke="#ffd166" stroke-width="2"/>
    <circle cx="495" cy="86" r="6" fill="#ff9f45"/>
    <text x="495" y="186" text-anchor="middle" font-weight="700">🌋 Stromboli</text>
    <text x="320" y="64" text-anchor="middle" class="sm">${l(lang, ['Europe’s tallest volcano (Etna) + Naples Bay (Vesuvius) + Lighthouse (Stromboli)', 'Etna (più alto d’Europa), Vesuvio (golfo di Napoli) e Stromboli (Faro del Mediterraneo)'])}</text>
  `),
  gg5_north_west_regions: lang => svg('North-West Italian Regions', `
    ${panel(18, 16, 604, 182, '#45d8ff')}
    <text x="320" y="42" text-anchor="middle" fill="#45d8ff" font-weight="800">${l(lang, ['NORTH-WEST ITALY · 4 REGIONS & CAPITALS', 'NORD-OVEST · 4 REGIONI E CAPOLUOGHI'])}</text>
    ${panel(32, 64, 136, 114, '#ffd166', 'rgba(255,209,102,0.08)')}<text x="100" y="92" text-anchor="middle" fill="#ffd166" font-weight="800">${l(lang, ['Piedmont', 'Piemonte'])}</text><text x="100" y="122" text-anchor="middle" class="sm">📍 ${l(lang, ['Turin', 'Torino'])}</text><text x="100" y="144" text-anchor="middle" class="sm">${l(lang, ['Alps & Industry', 'Alpi e Auto'])}</text>
    ${panel(178, 64, 136, 114, '#a88bff', 'rgba(168,139,255,0.08)')}<text x="246" y="92" text-anchor="middle" fill="#a88bff" font-weight="800">${l(lang, ['Aosta Valley', 'Valle d’Aosta'])}</text><text x="246" y="122" text-anchor="middle" class="sm">📍 Aosta</text><text x="246" y="144" text-anchor="middle" class="sm">${l(lang, ['Mont Blanc · Special', 'Monte Bianco'])}</text>
    ${panel(324, 64, 136, 114, '#38ef7d', 'rgba(56,239,125,0.08)')}<text x="392" y="92" text-anchor="middle" fill="#38ef7d" font-weight="800">Liguria</text><text x="392" y="122" text-anchor="middle" class="sm">📍 ${l(lang, ['Genoa', 'Genova'])}</text><text x="392" y="144" text-anchor="middle" class="sm">${l(lang, ['Port & Cinque Terre', 'Porto e Cinque Terre'])}</text>
    ${panel(470, 64, 136, 114, '#ff9f45', 'rgba(255,159,69,0.08)')}<text x="538" y="92" text-anchor="middle" fill="#ff9f45" font-weight="800">${l(lang, ['Lombardy', 'Lombardia'])}</text><text x="538" y="122" text-anchor="middle" class="sm">📍 ${l(lang, ['Milan', 'Milano'])}</text><text x="538" y="144" text-anchor="middle" class="sm">${l(lang, ['Finance & Lakes', 'Economia e Laghi'])}</text>
  `),
  gg5_north_east_regions: lang => svg('North-East Italian Regions', `
    ${panel(18, 16, 604, 182, '#38ef7d')}
    <text x="320" y="42" text-anchor="middle" fill="#38ef7d" font-weight="800">${l(lang, ['NORTH-EAST ITALY · 4 REGIONS & CAPITALS', 'NORD-EST · 4 REGIONI E CAPOLUOGHI'])}</text>
    ${panel(32, 64, 136, 114, '#a88bff', 'rgba(168,139,255,0.08)')}<text x="100" y="92" text-anchor="middle" fill="#a88bff" font-weight="800">Trentino-A.A.</text><text x="100" y="122" text-anchor="middle" class="sm">📍 Trento</text><text x="100" y="144" text-anchor="middle" class="sm">${l(lang, ['Dolomites · Special', 'Dolomiti · Speciale'])}</text>
    ${panel(178, 64, 136, 114, '#45d8ff', 'rgba(69,216,255,0.08)')}<text x="246" y="92" text-anchor="middle" fill="#45d8ff" font-weight="800">Veneto</text><text x="246" y="122" text-anchor="middle" class="sm">📍 ${l(lang, ['Venice', 'Venezia'])}</text><text x="246" y="144" text-anchor="middle" class="sm">${l(lang, ['118-Island Lagoon', 'Laguna e Cortina'])}</text>
    ${panel(324, 64, 136, 114, '#ffd166', 'rgba(255,209,102,0.08)')}<text x="392" y="92" text-anchor="middle" fill="#ffd166" font-weight="800">Friuli-V.G.</text><text x="392" y="122" text-anchor="middle" class="sm">📍 Trieste</text><text x="392" y="144" text-anchor="middle" class="sm">${l(lang, ['Karst · Special', 'Carso · Speciale'])}</text>
    ${panel(470, 64, 136, 114, '#ff6b8b', 'rgba(255,107,139,0.08)')}<text x="538" y="92" text-anchor="middle" fill="#ff6b8b" font-weight="800">Emilia-Romagna</text><text x="538" y="122" text-anchor="middle" class="sm">📍 Bologna</text><text x="538" y="144" text-anchor="middle" class="sm">${l(lang, ['Uni 1088 & Po', 'Univ. 1088 e Food'])}</text>
  `),
  gg5_central_regions: lang => svg('Central Italian Regions', `
    ${panel(18, 16, 604, 182, '#ffd166')}
    <text x="320" y="42" text-anchor="middle" fill="#ffd166" font-weight="800">${l(lang, ['CENTRAL ITALY · 4 REGIONS & CAPITALS', 'ITALIA CENTRALE · 4 REGIONI E CAPOLUOGHI'])}</text>
    ${panel(32, 64, 136, 114, '#ff9f45', 'rgba(255,159,69,0.08)')}<text x="100" y="92" text-anchor="middle" fill="#ff9f45" font-weight="800">${l(lang, ['Tuscany', 'Toscana'])}</text><text x="100" y="122" text-anchor="middle" class="sm">📍 ${l(lang, ['Florence', 'Firenze'])}</text><text x="100" y="144" text-anchor="middle" class="sm">${l(lang, ['Renaissance Art', 'Rinascimento'])}</text>
    ${panel(178, 64, 136, 114, '#38ef7d', 'rgba(56,239,125,0.08)')}<text x="246" y="92" text-anchor="middle" fill="#38ef7d" font-weight="800">Umbria</text><text x="246" y="122" text-anchor="middle" class="sm">📍 Perugia</text><text x="246" y="144" text-anchor="middle" class="sm">${l(lang, ['Landlocked Green', 'Cuore verde'])}</text>
    ${panel(324, 64, 136, 114, '#45d8ff', 'rgba(69,216,255,0.08)')}<text x="392" y="92" text-anchor="middle" fill="#45d8ff" font-weight="800">Marche</text><text x="392" y="122" text-anchor="middle" class="sm">📍 Ancona</text><text x="392" y="144" text-anchor="middle" class="sm">${l(lang, ['Hills to Adriatic', 'Colline e Conero'])}</text>
    ${panel(470, 64, 136, 114, '#ff6b8b', 'rgba(255,107,139,0.08)')}<text x="538" y="92" text-anchor="middle" fill="#ff6b8b" font-weight="800">Lazio</text><text x="538" y="122" text-anchor="middle" class="sm">📍 ${l(lang, ['Rome (Capital)', 'Roma (Capitale)'])}</text><text x="538" y="144" text-anchor="middle" class="sm">${l(lang, ['Tiber & Vatican', 'Tevere e Vaticano'])}</text>
  `),
  gg5_south_regions: lang => svg('Southern Italian Regions', `
    ${panel(18, 16, 604, 182, '#ff9f45')}
    <text x="320" y="42" text-anchor="middle" fill="#ff9f45" font-weight="800">${l(lang, ['SOUTHERN ITALY · 6 MAINLAND REGIONS', 'ITALIA MERIDIONALE · 6 REGIONI'])}</text>
    ${panel(32, 64, 180, 52, '#38ef7d', 'rgba(56,239,125,0.08)')}<text x="122" y="95" text-anchor="middle" font-size="12" font-weight="700">Abruzzo → L’Aquila</text>
    ${panel(230, 64, 180, 52, '#45d8ff', 'rgba(69,216,255,0.08)')}<text x="320" y="95" text-anchor="middle" font-size="12" font-weight="700">Molise → Campobasso</text>
    ${panel(428, 64, 180, 52, '#ff6b8b', 'rgba(255,107,139,0.08)')}<text x="518" y="95" text-anchor="middle" font-size="12" font-weight="700">Campania → ${l(lang, ['Naples', 'Napoli'])}</text>
    ${panel(32, 128, 180, 52, '#ffd166', 'rgba(255,209,102,0.08)')}<text x="122" y="159" text-anchor="middle" font-size="12" font-weight="700">Puglia → Bari</text>
    ${panel(230, 128, 180, 52, '#a88bff', 'rgba(168,139,255,0.08)')}<text x="320" y="159" text-anchor="middle" font-size="12" font-weight="700">Basilicata → Potenza</text>
    ${panel(428, 128, 180, 52, '#ff9f45', 'rgba(255,159,69,0.08)')}<text x="518" y="159" text-anchor="middle" font-size="12" font-weight="700">Calabria → Catanzaro</text>
  `),
  gg5_islands_autonomous: lang => svg('Sicily Sardinia & 5 Autonomous Regions', `
    ${panel(18, 16, 286, 182, '#ffd166', 'rgba(255,209,102,0.08)')}
    <text x="161" y="46" text-anchor="middle" fill="#ffd166" font-weight="800">🏝️ ${l(lang, ['SICILY & SARDINIA', 'SICILIA E SARDEGNA'])}</text>
    <text x="161" y="84" text-anchor="middle" class="sm">🌋 ${l(lang, ['Sicily (Palermo): Etna & temples', 'Sicilia (Palermo): Etna e templi'])}</text>
    <text x="161" y="118" text-anchor="middle" class="sm">🗿 ${l(lang, ['Sardinia (Cagliari): Nuraghi towers', 'Sardegna (Cagliari): Nuraghi e coste'])}</text>
    ${panel(336, 16, 286, 182, '#45d8ff', 'rgba(69,216,255,0.08)')}
    <text x="479" y="46" text-anchor="middle" fill="#45d8ff" font-weight="800">${l(lang, ['5 SPECIAL-STATUTE REGIONS', '5 REGIONI A STATUTO SPECIALE'])}</text>
    <text x="479" y="84" text-anchor="middle" class="sm">1. ${l(lang, ['Sicily · 2. Sardinia', 'Sicilia · 2. Sardegna'])}</text>
    <text x="479" y="114" text-anchor="middle" class="sm">3. ${l(lang, ['Aosta Valley · 4. Trentino-A.A.', 'Valle d’Aosta · 4. Trentino-A.A.'])}</text>
    <text x="479" y="144" text-anchor="middle" class="sm">5. Friuli-Venezia Giulia</text>
  `),
  gg5_unesco_italy: lang => svg('UNESCO Italy 60+ Heritage Sites', `
    ${panel(18, 16, 604, 182, '#38ef7d')}
    <text x="320" y="42" text-anchor="middle" fill="#38ef7d" font-weight="800">${l(lang, ['UNESCO WORLD HERITAGE · ITALY #1 IN THE WORLD (60+ SITES)', 'PATRIMONIO UNESCO · L’ITALIA PRIMA AL MONDO (60+ SITI)'])}</text>
    ${panel(36, 66, 175, 110, '#ffd166', 'rgba(255,209,102,0.08)')}
    <text x="123" y="96" text-anchor="middle" fill="#ffd166" font-weight="700">🏛️ ${l(lang, ['Historic Cities', 'Città d’Arte'])}</text>
    <text x="123" y="128" text-anchor="middle" class="sm">${l(lang, ['Rome, Venice, Florence', 'Roma, Venezia, Firenze'])}</text>
    ${panel(232, 66, 175, 110, '#45d8ff', 'rgba(69,216,255,0.08)')}
    <text x="319" y="96" text-anchor="middle" fill="#45d8ff" font-weight="700">🏔️ ${l(lang, ['Natural Wonders', 'Siti Naturali'])}</text>
    <text x="319" y="128" text-anchor="middle" class="sm">${l(lang, ['Dolomites, Etna, Aeolian', 'Dolomiti, Etna, Eolie'])}</text>
    ${panel(428, 66, 175, 110, '#a88bff', 'rgba(168,139,255,0.08)')}
    <text x="515" y="96" text-anchor="middle" fill="#a88bff" font-weight="700">🗿 ${l(lang, ['Ancient Marvels', 'Tesori Antichi'])}</text>
    <text x="515" y="128" text-anchor="middle" class="sm">${l(lang, ['Pompeii, Matera, Alberobello', 'Pompei, Matera, Alberobello'])}</text>
  `),

  // ---------------- GRADE 9 GEOGRAPHY (18) ----------------
  gg9_orange_peel_projection: lang => svg('Map Projections Mercator vs Peters', `
    ${panel(18, 16, 286, 182, '#ff9f45', 'rgba(255,159,69,0.08)')}
    <text x="161" y="44" text-anchor="middle" fill="#ff9f45" font-weight="800">${l(lang, ['MERCATOR (1569) · Angles OK', 'MERCATORE (1569) · Isogonica'])}</text>
    <circle cx="110" cy="108" r="28" fill="rgba(255,159,69,0.3)" stroke="#ff9f45"/>
    <text x="110" y="112" text-anchor="middle" font-size="11" font-weight="700">${l(lang, ['Greenland', 'Groenlandia'])}</text>
    <circle cx="218" cy="108" r="28" fill="rgba(56,239,125,0.3)" stroke="#38ef7d"/>
    <text x="218" y="112" text-anchor="middle" font-size="11" font-weight="700">Africa</text>
    <text x="161" y="166" text-anchor="middle" class="sm">${l(lang, ['Illusion: look equal! True Africa = 14×!', 'Sembra uguale! In realtà Africa = 14×!'])}</text>
    ${panel(336, 16, 286, 182, '#38ef7d', 'rgba(56,239,125,0.08)')}
    <text x="479" y="44" text-anchor="middle" fill="#38ef7d" font-weight="800">${l(lang, ['GALL–PETERS · Real Area OK', 'GALL–PETERS · Equivalente'])}</text>
    <circle cx="410" cy="108" r="11" fill="rgba(255,159,69,0.4)" stroke="#ff9f45"/>
    <ellipse cx="520" cy="112" rx="34" ry="44" fill="rgba(56,239,125,0.3)" stroke="#38ef7d"/>
    <text x="479" y="172" text-anchor="middle" class="sm">${l(lang, ['Preserves true km² areas (orange peel rule!)', 'Rispetta le vere superfici (buccia d’arancia!)'])}</text>
  `),
  gg9_contour_lines: lang => svg('Contour Lines Isoipse Slope', `
    ${panel(18, 16, 604, 182, '#38ef7d')}
    <text x="320" y="42" text-anchor="middle" fill="#38ef7d" font-weight="800">${l(lang, ['CONTOUR LINES (ISOIPSE) · STEEP VS GENTLE SLOPES', 'ISOIPSE (CURVE DI LIVELLO) · PENDENZA'])}</text>
    <ellipse cx="145" cy="118" rx="88" ry="52" fill="none" stroke="#ffd166" stroke-width="2"/>
    <ellipse cx="130" cy="118" rx="64" ry="38" fill="none" stroke="#ffd166" stroke-width="2"/>
    <ellipse cx="118" cy="118" rx="38" ry="22" fill="none" stroke="#ff6b8b" stroke-width="2"/>
    <text x="118" y="122" text-anchor="middle" fill="#ff6b8b" font-size="11" font-weight="800">300m</text>
    ${panel(276, 62, 324, 114, '#45d8ff', 'rgba(69,216,255,0.08)')}
    <text x="438" y="92" text-anchor="middle" fill="#45d8ff" font-weight="700">${l(lang, ['How to Read Spacing Like Stairs:', 'Regola d’Oro delle Isoipse:'])}</text>
    <text x="438" y="122" text-anchor="middle" class="sm">⛰️ ${l(lang, ['Crowded lines (left) = STEEP CLIFF!', 'Linee fitte = PENDIO RIPIDO!'])}</text>
    <text x="438" y="148" text-anchor="middle" class="sm">🌿 ${l(lang, ['Wide lines (right) = GENTLE WALK!', 'Linee distanziate = PENDIO DOLCE!'])}</text>
  `),
  gg9_gis_layers: lang => svg('GIS Stacked Digital Data Layers', `
    ${panel(18, 16, 604, 182, '#a88bff')}
    <text x="320" y="42" text-anchor="middle" fill="#a88bff" font-weight="800">${l(lang, ['GIS STACKED LAYERS + SATELLITE GPS', 'SISTEMA GIS A STRATI + SATELLITI GPS'])}</text>
    <polygon points="90,82 270,60 330,90 150,112" fill="rgba(69,216,255,0.22)" stroke="#45d8ff" stroke-width="2"/>
    <polygon points="90,118 270,96 330,126 150,148" fill="rgba(255,209,102,0.22)" stroke="#ffd166" stroke-width="2"/>
    <polygon points="90,154 270,132 330,162 150,184" fill="rgba(56,239,125,0.22)" stroke="#38ef7d" stroke-width="2"/>
    <text x="465" y="88" text-anchor="middle" fill="#45d8ff" font-weight="700">1. ${l(lang, ['Rivers & Flood Zones', 'Fiumi e Rischio Alluvioni'])}</text>
    <text x="465" y="122" text-anchor="middle" fill="#ffd166" font-weight="700">2. ${l(lang, ['Roads, Rails & Hospitals', 'Strade, Ferrovie e Ospedali'])}</text>
    <text x="465" y="156" text-anchor="middle" fill="#38ef7d" font-weight="700">3. ${l(lang, ['Satellite Terrain + Population', 'Altimetria e Densità'])}</text>
  `),
  gg9_plate_boundaries: lang => svg('Plate Tectonics Three Boundary Types', `
    ${panel(18, 16, 604, 182, '#ff9f45')}
    <text x="320" y="42" text-anchor="middle" fill="#ff9f45" font-weight="800">${l(lang, ['PLATE TECTONICS · THREE BOUNDARY MOTIONS', 'TETTONICA A PLACCHE · TRE MARGINI'])}</text>
    ${panel(36, 64, 175, 114, '#45d8ff', 'rgba(69,216,255,0.08)')}
    <text x="123" y="92" text-anchor="middle" fill="#45d8ff" font-weight="800">←  |  →</text>
    <text x="123" y="122" text-anchor="middle" font-weight="700">${l(lang, ['Divergent', 'Divergente'])}</text>
    <text x="123" y="144" text-anchor="middle" class="sm">${l(lang, ['Mid-ocean magma ridge', 'Dorsali oceaniche'])}</text>
    ${panel(232, 64, 175, 114, '#ff6b8b', 'rgba(255,107,139,0.08)')}
    <text x="319" y="92" text-anchor="middle" fill="#ff6b8b" font-weight="800">→  ⛰️  ←</text>
    <text x="319" y="122" text-anchor="middle" font-weight="700">${l(lang, ['Convergent', 'Convergente'])}</text>
    <text x="319" y="144" text-anchor="middle" class="sm">${l(lang, ['Alps, Andes & subduction', 'Alpi, vulcani, subduzione'])}</text>
    ${panel(428, 64, 175, 114, '#ffd166', 'rgba(255,209,102,0.08)')}
    <text x="515" y="92" text-anchor="middle" fill="#ffd166" font-weight="800">↑  ||  ↓</text>
    <text x="515" y="122" text-anchor="middle" font-weight="700">${l(lang, ['Transform', 'Trasforme'])}</text>
    <text x="515" y="144" text-anchor="middle" class="sm">${l(lang, ['Sideways friction quakes', 'Faglie sismiche (San Andrea)'])}</text>
  `),
  gg9_volcano_types: lang => svg('Effusive Shield vs Explosive Stratovolcano', `
    ${panel(18, 16, 286, 182, '#ffd166', 'rgba(255,209,102,0.08)')}
    <text x="161" y="44" text-anchor="middle" fill="#ffd166" font-weight="800">${l(lang, ['SHIELD VOLCANO · EFFUSIVE', 'A SCUDO · ERUZIONE EFFUSIVA'])}</text>
    <path d="M55 156 Q161 95 267 156 Z" fill="rgba(255,209,102,0.3)" stroke="#ffd166" stroke-width="2"/>
    <text x="161" y="178" text-anchor="middle" class="sm">${l(lang, ['Fluid runny lava · gentle slopes (Hawaii)', 'Lava fluida · colate calme e pendii dolci'])}</text>
    ${panel(336, 16, 286, 182, '#ff6b8b', 'rgba(255,107,139,0.08)')}
    <text x="479" y="44" text-anchor="middle" fill="#ff6b8b" font-weight="800">${l(lang, ['STRATOVOLCANO · EXPLOSIVE', 'STRATOVULCANO · ESPLOSIVO'])}</text>
    <polygon points="405,156 479,78 553,156" fill="rgba(255,107,139,0.3)" stroke="#ff6b8b" stroke-width="2"/>
    <circle cx="479" cy="64" r="10" fill="#ff9f45" opacity="0.7"/>
    <text x="479" y="178" text-anchor="middle" class="sm">${l(lang, ['Sticky silica magma traps gas (Vesuvius!)', 'Magma viscoso intrappola gas (Vesuvio!)'])}</text>
  `),
  gg9_earthquake_epicenter: lang => svg('Hypocenter vs Epicenter Seismic Waves', `
    ${panel(18, 16, 604, 182, '#45d8ff')}
    <text x="320" y="40" text-anchor="middle" fill="#45d8ff" font-weight="800">${l(lang, ['EARTHQUAKE FOCUS · HYPOCENTER VS EPICENTER', 'TERREMOTO · IPOCENTRO ED EPICENTRO'])}</text>
    <line x1="42" y1="86" x2="598" y2="86" stroke="#38ef7d" stroke-width="3"/>
    <circle cx="240" cy="86" r="8" fill="#ffd166"/>
    <text x="240" y="70" text-anchor="middle" fill="#ffd166" font-weight="800">${l(lang, ['EPICENTER (Surface)', 'EPICENTRO (Superficie)'])}</text>
    <line x1="240" y1="86" x2="240" y2="152" stroke="#ffffff" stroke-dasharray="4,3"/>
    <circle cx="240" cy="152" r="10" fill="#ff6b8b"/>
    <circle cx="240" cy="152" r="24" fill="none" stroke="#ff6b8b" stroke-dasharray="4,3"/>
    <circle cx="240" cy="152" r="40" fill="none" stroke="#ff6b8b" opacity="0.5"/>
    <text x="435" y="148" text-anchor="middle" fill="#ff6b8b" font-weight="800">${l(lang, ['HYPOCENTER (Deep Fault)', 'IPOCENTRO (Sotto Terra)'])}</text>
    <text x="435" y="172" text-anchor="middle" class="sm">${l(lang, ['Africa–Eurasia push powers Italian quakes', 'Spinta Africa–Eurasia lungo gli Appennini'])}</text>
  `),
  gg9_weather_vs_climate: lang => svg('Weather Today vs 30-Year Climate', `
    ${panel(18, 16, 286, 182, '#45d8ff', 'rgba(69,216,255,0.08)')}
    <text x="161" y="46" text-anchor="middle" fill="#45d8ff" font-weight="800">🌦️ ${l(lang, ['WEATHER = TODAY’S OUTFIT', 'METEO = VESTITI DI OGGI'])}</text>
    <text x="161" y="88" text-anchor="middle" class="sm">${l(lang, ['Short-term rain, wind & temperature', 'Pioggia, vento e temperatura di oggi'])}</text>
    <text x="161" y="122" text-anchor="middle" class="sm">${l(lang, ['Inside lowest Troposphere (~12 km)', 'Avviene nella Troposfera (~12 km)'])}</text>
    ${panel(336, 16, 286, 182, '#ffd166', 'rgba(255,209,102,0.08)')}
    <text x="479" y="46" text-anchor="middle" fill="#ffd166" font-weight="800">🗓️ ${l(lang, ['CLIMATE = FULL WARDROBE', 'CLIMA = INTERO GUARDAROBA'])}</text>
    <text x="479" y="88" text-anchor="middle" class="sm">${l(lang, ['30+ year statistical average pattern', 'Media statistica su 30+ anni di misure'])}</text>
    <text x="479" y="122" text-anchor="middle" class="sm">${l(lang, ['Defines seasonal habitats worldwide', 'Determina biomi ed ecosistemi locali'])}</text>
  `),
  gg9_climate_factors: lang => svg('Four Geographic Climate Controls', `
    ${panel(18, 16, 604, 182, '#ffd166')}
    <text x="320" y="42" text-anchor="middle" fill="#ffd166" font-weight="800">${l(lang, ['FOUR MASTER DIALS OF REGIONAL CLIMATE', 'I QUATTRO FATTORI DEL CLIMA'])}</text>
    ${panel(32, 64, 136, 114, '#ff6b8b', 'rgba(255,107,139,0.08)')}<text x="100" y="92" text-anchor="middle" fill="#ff6b8b" font-weight="700">☀️ ${l(lang, ['Latitude', 'Latitudine'])}</text><text x="100" y="124" text-anchor="middle" class="sm">${l(lang, ['Equator hot vs', 'Angolo solare:'])}</text><text x="100" y="144" text-anchor="middle" class="sm">${l(lang, ['Poles slanted sun', 'Equatore vs Poli'])}</text>
    ${panel(178, 64, 136, 114, '#45d8ff', 'rgba(69,216,255,0.08)')}<text x="246" y="92" text-anchor="middle" fill="#45d8ff" font-weight="700">🏔️ ${l(lang, ['Altitude', 'Altitudine'])}</text><text x="246" y="124" text-anchor="middle" class="sm">${l(lang, ['-6 °C every', '-6 °C ogni'])}</text><text x="246" y="144" text-anchor="middle" class="sm">1 000 m up</text>
    ${panel(324, 64, 136, 114, '#38ef7d', 'rgba(56,239,125,0.08)')}<text x="392" y="92" text-anchor="middle" fill="#38ef7d" font-weight="700">🌊 ${l(lang, ['Sea Distance', 'Marittimità'])}</text><text x="392" y="124" text-anchor="middle" class="sm">${l(lang, ['Water buffers', 'Il mare mitiga'])}</text><text x="392" y="144" text-anchor="middle" class="sm">${l(lang, ['winter & summer', 'estate e inverno'])}</text>
    ${panel(470, 64, 136, 114, '#a88bff', 'rgba(168,139,255,0.08)')}<text x="538" y="92" text-anchor="middle" fill="#a88bff" font-weight="700">🌬️ ${l(lang, ['Relief Walls', 'Rilievi'])}</text><text x="538" y="124" text-anchor="middle" class="sm">${l(lang, ['Alps shield Po', 'Alpi riparano da'])}</text><text x="538" y="144" text-anchor="middle" class="sm">${l(lang, ['from polar air', 'venti polari'])}</text>
  `),
  gg9_biomes_mediterranean: lang => svg('Earth Biomes & Macchia Mediterranea', `
    ${panel(18, 16, 604, 182, '#38ef7d')}
    <text x="320" y="42" text-anchor="middle" fill="#38ef7d" font-weight="800">${l(lang, ['GLOBAL BIOMES · MEDITERRANEAN SCRUB ADAPTATION', 'BIOMI TERRESTRI · MACCHIA MEDITERRANEA'])}</text>
    ${panel(38, 66, 260, 110, '#ffd166', 'rgba(255,209,102,0.08)')}
    <text x="168" y="94" text-anchor="middle" fill="#ffd166" font-weight="700">🌿 ${l(lang, ['Macchia Mediterranea', 'Macchia Mediterranea'])}</text>
    <text x="168" y="124" text-anchor="middle" class="sm">${l(lang, ['Olive, holm oak, rosemary, laurel', 'Ulivo, leccio, mirto, rosmarino'])}</text>
    <text x="168" y="148" text-anchor="middle" class="sm">${l(lang, ['Waxy leaves resist summer drought', 'Foglie cerose contro siccità estiva'])}</text>
    ${panel(342, 66, 260, 110, '#45d8ff', 'rgba(69,216,255,0.08)')}
    <text x="472" y="94" text-anchor="middle" fill="#45d8ff" font-weight="700">🌍 ${l(lang, ['From Equator to Poles', 'Dall’Equatore ai Poli'])}</text>
    <text x="472" y="124" text-anchor="middle" class="sm">${l(lang, ['Rainforest → Savanna → Desert', 'Pluviale → Savana → Deserto'])}</text>
    <text x="472" y="148" text-anchor="middle" class="sm">${l(lang, ['→ Temperate → Taiga → Tundra', '→ Temperato → Taiga → Tundra'])}</text>
  `),
  gg9_water_distribution: lang => svg('Earth 97% Salty 2% Ice <1% Freshwater', `
    ${panel(18, 16, 604, 182, '#45d8ff')}
    <text x="320" y="42" text-anchor="middle" fill="#45d8ff" font-weight="800">${l(lang, ['EARTH WATER BUCKET · OUT OF 100 LITERS...', 'L’ACQUA SULLA TERRA · SU 100 LITRI TOTALI...'])}</text>
    <rect x="46" y="70" width="548" height="36" rx="8" fill="#1e293b" stroke="#45d8ff"/>
    <rect x="46" y="70" width="510" height="36" rx="6" fill="#0ea5e9" opacity="0.75"/>
    <rect x="556" y="70" width="24" height="36" fill="#e2e8f0"/>
    <rect x="580" y="70" width="14" height="36" fill="#38ef7d"/>
    <text x="295" y="93" text-anchor="middle" fill="#ffffff" font-weight="800">97 L · ${l(lang, ['SALTY OCEANS', 'MARI E OCEANI SALATI'])}</text>
    <text x="165" y="142" text-anchor="middle" fill="#e2e8f0" font-weight="700">❄️ 2 L · ${l(lang, ['Glaciers & Polar Ice', 'Ghiacciai e Poli'])}</text>
    <text x="465" y="142" text-anchor="middle" fill="#38ef7d" font-weight="800">💧 &lt; 1 L · ${l(lang, ['Rivers, Lakes & Aquifers!', 'Fiumi, Laghi e Falde!'])}</text>
    <text x="320" y="174" text-anchor="middle" class="sm">${l(lang, ['Tiny accessible freshwater share serves all 8 billion humans', 'Meno dell’1% alimenta bere, agricoltura e vita di 8 miliardi di persone'])}</text>
  `),
  gg9_ocean_currents: lang => svg('Gulf Stream Warm Ocean Current', `
    ${panel(18, 16, 604, 182, '#45d8ff')}
    <text x="320" y="42" text-anchor="middle" fill="#45d8ff" font-weight="800">${l(lang, ['THE GULF STREAM · ATLANTIC HEAT CONVEYOR', 'CORRENTE DEL GOLFO · NASTRO TERMICO EUROPEO'])}</text>
    <path d="M95 148 Q265 112 525 66" fill="none" stroke="#ff6b8b" stroke-width="8" stroke-linecap="round"/>
    <polygon points="525,66 508,60 512,78" fill="#ff6b8b"/>
    <text x="125" y="172" text-anchor="middle" fill="#ffd166" font-weight="700">${l(lang, ['Tropical Caribbean', 'Golfo del Messico'])}</text>
    <text x="515" y="96" text-anchor="middle" fill="#38ef7d" font-weight="700">${l(lang, ['Mild Ireland & Norway!', 'Irlanda e Norvegia miti!'])}</text>
    <text x="315" y="88" text-anchor="middle" class="sm">${l(lang, ['Carries tropical ocean heat across Atlantic', 'Porta calore tropicale alle coste europee'])}</text>
  `),
  gg9_water_footprint: lang => svg('Water Footprint & Alpine Glaciers', `
    ${panel(18, 16, 604, 182, '#38ef7d')}
    <text x="320" y="42" text-anchor="middle" fill="#38ef7d" font-weight="800">${l(lang, ['HIDDEN WATER FOOTPRINT & GLACIER RESERVOIRS', 'IMPRONTA IDRICA E RISERVE ALPINE'])}</text>
    ${panel(38, 66, 260, 110, '#45d8ff', 'rgba(69,216,255,0.08)')}
    <text x="168" y="94" text-anchor="middle" fill="#45d8ff" font-weight="700">👕 1 Cotton T-Shirt = ~2 500 L</text>
    <text x="168" y="124" text-anchor="middle" class="sm">${l(lang, ['Virtual water hidden inside crops & factories', 'Acqua invisibile usata per colture e tessuti'])}</text>
    ${panel(342, 66, 260, 110, '#ffd166', 'rgba(255,209,102,0.08)')}
    <text x="472" y="94" text-anchor="middle" fill="#ffd166" font-weight="700">🏔️ ${l(lang, ['Glaciers Feed Summer Po', 'Ghiacciai e Portata Estiva'])}</text>
    <text x="472" y="124" text-anchor="middle" class="sm">${l(lang, ['~70% freshwater goes to farming irrigation', 'Circa il 70% dell’acqua dolce va in agricoltura'])}</text>
  `),
  gg9_age_pyramids: lang => svg('Age Pyramids Growing Triangle vs Aging Urn', `
    ${panel(18, 16, 286, 182, '#38ef7d', 'rgba(56,239,125,0.08)')}
    <text x="161" y="42" text-anchor="middle" fill="#38ef7d" font-weight="800">${l(lang, ['TRIANGLE · YOUNG GROWTH', 'TRIANGOLO · POPOLAZIONE GIOVANE'])}</text>
    <rect x="148" y="64" width="26" height="16" fill="#38ef7d"/><rect x="132" y="84" width="58" height="16" fill="#38ef7d"/><rect x="110" y="104" width="102" height="16" fill="#38ef7d"/><rect x="84" y="124" width="154" height="16" fill="#38ef7d"/>
    <text x="161" y="166" text-anchor="middle" class="sm">${l(lang, ['Wide base = many children (e.g. Niger)', 'Base larga = molte nascite e giovani'])}</text>
    ${panel(336, 16, 286, 182, '#ffd166', 'rgba(255,209,102,0.08)')}
    <text x="479" y="42" text-anchor="middle" fill="#ffd166" font-weight="800">${l(lang, ['URN SHAPE · AGING ITALY/JAPAN', 'A URNA · INVECCHIAMENTO (ITALIA)'])}</text>
    <rect x="442" y="64" width="74" height="16" fill="#ff6b8b"/><rect x="424" y="84" width="110" height="16" fill="#ffd166"/><rect x="434" y="104" width="90" height="16" fill="#ffd166"/><rect x="454" y="124" width="50" height="16" fill="#45d8ff"/>
    <text x="479" y="166" text-anchor="middle" class="sm">${l(lang, ['Narrow base = low births + long life', 'Base stretta = pochi nati e molti over 65'])}</text>
  `),
  gg9_demographic_transition: lang => svg('Demographic Transition Four Stages', `
    ${panel(18, 16, 604, 182, '#a88bff')}
    <text x="320" y="42" text-anchor="middle" fill="#a88bff" font-weight="800">${l(lang, ['DEMOGRAPHIC TRANSITION MODEL · WHY POPULATION BOOMED', 'TRANSIZIONE DEMOGRAFICA · DAL BOOM ALLA STABILITÀ'])}</text>
    <path d="M55 76 L210 78 Q340 82 435 144 L585 146" fill="none" stroke="#38ef7d" stroke-width="3.5"/>
    <path d="M55 78 Q170 78 245 144 L585 148" fill="none" stroke="#ff6b8b" stroke-width="3.5" stroke-dasharray="6,4"/>
    <text x="120" y="168" text-anchor="middle" class="sm">1. ${l(lang, ['High Birth/Death', 'Alti tassi'])}</text>
    <text x="270" y="168" text-anchor="middle" fill="#ffd166" font-weight="700">2. ${l(lang, ['Deaths Fall → BOOM!', 'Mortalità giù → BOOM!'])}</text>
    <text x="430" y="168" text-anchor="middle" class="sm">3. ${l(lang, ['Births Fall', 'Natalità cala'])}</text>
    <text x="550" y="168" text-anchor="middle" class="sm">4. ${l(lang, ['Balanced', 'Stabile'])}</text>
    <text x="470" y="76" text-anchor="middle" fill="#38ef7d" font-size="11">${l(lang, ['— Birth Rate · -- Death Rate', '— Natalità · -- Mortalità'])}</text>
  `),
  gg9_urbanization_push_pull: lang => svg('Urbanization 56% Push vs Pull Factors', `
    ${panel(18, 16, 604, 182, '#ffd166')}
    <text x="320" y="42" text-anchor="middle" fill="#ffd166" font-weight="800">${l(lang, ['56%+ HUMANITY IN CITIES · PUSH VS PULL FACTORS', 'OLTRE IL 56% IN CITTÀ · FATTORI DI SPINTA E ATTRAZIONE'])}</text>
    ${panel(38, 66, 260, 110, '#ff6b8b', 'rgba(255,107,139,0.08)')}
    <text x="168" y="94" text-anchor="middle" fill="#ff6b8b" font-weight="700">⬅️ ${l(lang, ['PUSH FACTORS (Leave)', 'FATTORI DI SPINTA (Push)'])}</text>
    <text x="168" y="126" text-anchor="middle" class="sm">${l(lang, ['War, climate drought, few rural jobs', 'Guerre, siccità, disoccupazione rurale'])}</text>
    ${panel(342, 66, 260, 110, '#38ef7d', 'rgba(56,239,125,0.08)')}
    <text x="472" y="94" text-anchor="middle" fill="#38ef7d" font-weight="700">➡️ ${l(lang, ['PULL FACTORS (Arrive)', 'FATTORI DI ATTRAZIONE (Pull)'])}</text>
    <text x="472" y="126" text-anchor="middle" class="sm">${l(lang, ['Jobs, universities, hospitals & safety', 'Lavoro, scuole, ospedali e sicurezza'])}</text>
  `),
  gg9_europe_regions_map: lang => svg('Europe Peninsula of Peninsulas', `
    ${panel(18, 16, 604, 182, '#45d8ff')}
    <text x="320" y="42" text-anchor="middle" fill="#45d8ff" font-weight="800">${l(lang, ['EUROPE · FOUR MAJOR PHYSICAL ZONES (ATLANTIC → URALS)', 'EUROPA · LE QUATTRO GRANDI AREE FISICHE'])}</text>
    ${panel(32, 64, 136, 114, '#a88bff', 'rgba(168,139,255,0.08)')}<text x="100" y="92" text-anchor="middle" fill="#a88bff" font-weight="700">${l(lang, ['North Shield', 'Nord'])}</text><text x="100" y="124" text-anchor="middle" class="sm">${l(lang, ['Scandinavia & fjords', 'Scandinavia e fiordi'])}</text>
    ${panel(178, 64, 136, 114, '#38ef7d', 'rgba(56,239,125,0.08)')}<text x="246" y="92" text-anchor="middle" fill="#38ef7d" font-weight="700">${l(lang, ['Great Plain', 'Bassopiano'])}</text><text x="246" y="124" text-anchor="middle" class="sm">${l(lang, ['France to Urals rivers', 'Grandi pianure e fiumi'])}</text>
    ${panel(324, 64, 136, 114, '#ffd166', 'rgba(255,209,102,0.08)')}<text x="392" y="92" text-anchor="middle" fill="#ffd166" font-weight="700">${l(lang, ['Alpine Arc', 'Arco Alpino'])}</text><text x="392" y="124" text-anchor="middle" class="sm">${l(lang, ['Pyrenees, Alps, Carpathians', 'Alpi, Pirenei, Carpazi'])}</text>
    ${panel(470, 64, 136, 114, '#ff9f45', 'rgba(255,159,69,0.08)')}<text x="538" y="92" text-anchor="middle" fill="#ff9f45" font-weight="700">${l(lang, ['South', 'Mediterraneo'])}</text><text x="538" y="124" text-anchor="middle" class="sm">${l(lang, ['Iberia, Italy, Balkans', 'Iberia, Italia, Balcani'])}</text>
  `),
  gg9_eu_schengen_euro: lang => svg('EU 27 Schengen and Eurozone', `
    ${panel(18, 16, 604, 182, '#45d8ff')}
    <text x="320" y="42" text-anchor="middle" fill="#45d8ff" font-weight="800">${l(lang, ['EUROPEAN UNION (27) · COOPERATION IN ACTION', 'UNIONE EUROPEA (27 PAESI) · INTEGRAZIONE CONCRETA'])}</text>
    ${panel(36, 64, 175, 114, '#ffd166', 'rgba(255,209,102,0.08)')}<text x="123" y="94" text-anchor="middle" fill="#ffd166" font-weight="700">🛂 Schengen</text><text x="123" y="126" text-anchor="middle" class="sm">${l(lang, ['Open internal borders', 'Confini interni senza'])}</text><text x="123" y="148" text-anchor="middle" class="sm">${l(lang, ['without passport lines', 'controlli passaporto'])}</text>
    ${panel(232, 64, 175, 114, '#38ef7d', 'rgba(56,239,125,0.08)')}<text x="319" y="94" text-anchor="middle" fill="#38ef7d" font-weight="700">💶 Eurozone (20)</text><text x="319" y="126" text-anchor="middle" class="sm">${l(lang, ['Shared € currency', 'Moneta unica Euro'])}</text><text x="319" y="148" text-anchor="middle" class="sm">${l(lang, ['& single trade market', 'e mercato unico'])}</text>
    ${panel(428, 64, 175, 114, '#a88bff', 'rgba(168,139,255,0.08)')}<text x="515" y="94" text-anchor="middle" fill="#a88bff" font-weight="700">🎓 Erasmus+</text><text x="515" y="126" text-anchor="middle" class="sm">${l(lang, ['Students study across', 'Mobilità studenti in'])}</text><text x="515" y="148" text-anchor="middle" class="sm">${l(lang, ['partner universities', 'tutta Europa'])}</text>
  `),
  gg9_italy_in_europe: lang => svg('Italy Manufacturing & Mediterranean Bridge', `
    ${panel(18, 16, 604, 182, '#38ef7d')}
    <text x="320" y="42" text-anchor="middle" fill="#38ef7d" font-weight="800">${l(lang, ['ITALY IN EUROPE · BRIDGE BETWEEN ALPS & MEDITERRANEAN', 'L’ITALIA IN EUROPA · PONTE DEL MEDITERRANEO'])}</text>
    ${panel(38, 66, 260, 110, '#ffd166', 'rgba(255,209,102,0.08)')}
    <text x="168" y="94" text-anchor="middle" fill="#ffd166" font-weight="700">⚙️ ${l(lang, ['EU #2 Manufacturing Hub', '2ª Manifattura d’Europa'])}</text>
    <text x="168" y="124" text-anchor="middle" class="sm">${l(lang, ['Precision machinery, fashion & pharma', 'Meccanica, moda, design e farmaceutica'])}</text>
    ${panel(342, 66, 260, 110, '#45d8ff', 'rgba(69,216,255,0.08)')}
    <text x="472" y="94" text-anchor="middle" fill="#45d8ff" font-weight="700">🌾 ${l(lang, ['PDO Food & Sea Hubs', 'Agroalimentare DOP e Porti'])}</text>
    <text x="472" y="124" text-anchor="middle" class="sm">${l(lang, ['High-quality exports + southern ports', 'Eccellenze DOP/IGP + snodi portuali al Sud'])}</text>
  `)
};

import type { Language } from '../types';

type Pair = [string, string];
const l = (lang: Language, p: Pair) => (lang === 'it' ? p[1] : p[0]);

const svg = (label: string, body: string, h = 215) =>
  `<svg viewBox="0 0 640 ${h}" class="dia" role="img" aria-label="${label}">${body}</svg>`;

const panel = (x: number, y: number, w: number, h: number, stroke: string, bg = 'rgba(255,255,255,0.03)') =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="${bg}" stroke="${stroke}" stroke-width="1.6"/>`;

const arrow = (x1: number, y1: number, x2: number, y2: number, col = '#ffd166') =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${col}" stroke-width="2.4" stroke-linecap="round"/><polygon points="${x2},${y2} ${x2 - 8},${y2 - 5} ${x2 - 8},${y2 + 5}" fill="${col}"/>`;

export const GEO_VISUAL_BUILDERS_10_11: Record<string, (lang: Language) => string> = {
  // ---------------- GRADE 10 GEOGRAPHY (18) ----------------
  gg10_smartphone_supply_chain: lang => svg('Global Smartphone Value Chain', `
    ${panel(18, 16, 604, 182, '#45d8ff')}
    <text x="320" y="42" text-anchor="middle" fill="#45d8ff" font-weight="800">${l(lang, ['ONE SMARTPHONE · GLOBAL VALUE CHAIN ACROSS 5 CONTINENTS', 'UNO SMARTPHONE · CATENA GLOBALE DEL VALORE'])}</text>
    ${panel(32, 66, 130, 108, '#a88bff', 'rgba(168,139,255,0.08)')}<text x="97" y="96" text-anchor="middle" fill="#a88bff" font-weight="700">💻 USA</text><text x="97" y="128" text-anchor="middle" class="sm">${l(lang, ['Chip & OS design', 'Design e software'])}</text>
    ${arrow(168, 120, 188, 120, '#ffd166')}
    ${panel(194, 66, 130, 108, '#ff9f45', 'rgba(255,159,69,0.08)')}<text x="259" y="96" text-anchor="middle" fill="#ff9f45" font-weight="700">⛏️ Congo / Chile</text><text x="259" y="128" text-anchor="middle" class="sm">${l(lang, ['Cobalt & Lithium', 'Cobalto e Litio'])}</text>
    ${arrow(330, 120, 350, 120, '#ffd166')}
    ${panel(356, 66, 130, 108, '#38ef7d', 'rgba(56,239,125,0.08)')}<text x="421" y="96" text-anchor="middle" fill="#38ef7d" font-weight="700">🔬 Taiwan / Korea</text><text x="421" y="128" text-anchor="middle" class="sm">${l(lang, ['Fab chips & OLED', 'Microchip e schermi'])}</text>
    ${arrow(492, 120, 512, 120, '#ffd166')}
    ${panel(518, 66, 90, 108, '#ffd166', 'rgba(255,209,102,0.08)')}<text x="563" y="96" text-anchor="middle" fill="#ffd166" font-weight="700">📦 Asia</text><text x="563" y="128" text-anchor="middle" class="sm">${l(lang, ['Assembly', 'Assemblaggio'])}</text>
  `),
  gg10_container_digital_shrink: lang => svg('Containers & Undersea Fiber Cables', `
    ${panel(18, 16, 286, 182, '#ffd166', 'rgba(255,209,102,0.08)')}
    <text x="161" y="46" text-anchor="middle" fill="#ffd166" font-weight="800">🚢 ${l(lang, ['INTERMODAL CONTAINERS', 'CONTAINER INTERMODALI'])}</text>
    <rect x="65" y="72" width="60" height="32" fill="#45d8ff" opacity="0.8"/><rect x="130" y="72" width="60" height="32" fill="#ff6b8b" opacity="0.8"/><rect x="195" y="72" width="60" height="32" fill="#38ef7d" opacity="0.8"/>
    <text x="161" y="138" text-anchor="middle" class="sm">${l(lang, ['Ship → Rail → Truck without repacking', 'Da nave a treno e TIR in pochi minuti'])}</text>
    ${panel(336, 16, 286, 182, '#45d8ff', 'rgba(69,216,255,0.08)')}
    <text x="479" y="46" text-anchor="middle" fill="#45d8ff" font-weight="800">🌐 ${l(lang, ['SUBMARINE FIBER CABLES', 'FIBRA OTTICA SOTTOMARINA'])}</text>
    <path d="M360 112 Q420 75 479 112 T596 112" fill="none" stroke="#38ef7d" stroke-width="3.5"/>
    <text x="479" y="150" text-anchor="middle" class="sm">${l(lang, ['95%+ of global internet travels on ocean floor!', 'Oltre il 95% dei dati corre sui fondali marini!'])}</text>
  `),
  gg10_glocal_balance: lang => svg('Glocal Balance Local Identity & Global Market', `
    ${panel(18, 16, 604, 182, '#38ef7d')}
    <text x="320" y="42" text-anchor="middle" fill="#38ef7d" font-weight="800">${l(lang, ['"GLOCAL" = LOCAL ROOTS + GLOBAL NETWORK', 'MODELLO "GLOCAL" = RADICI LOCALI + RETE GLOBALE'])}</text>
    ${panel(40, 68, 250, 108, '#ffd166', 'rgba(255,209,102,0.08)')}
    <text x="165" y="96" text-anchor="middle" fill="#ffd166" font-weight="700">🧀 ${l(lang, ['Local Craft & PDO Quality', 'Qualità Locale DOP/IGP'])}</text>
    <text x="165" y="128" text-anchor="middle" class="sm">${l(lang, ['Parmesan, Murano glass, Italian bikes', 'Parmigiano, moda, artigianato unico'])}</text>
    <text x="320" y="124" text-anchor="middle" fill="#38ef7d" font-size="22" font-weight="800">⇄</text>
    ${panel(350, 68, 250, 108, '#45d8ff', 'rgba(69,216,255,0.08)')}
    <text x="475" y="96" text-anchor="middle" fill="#45d8ff" font-weight="700">🌍 ${l(lang, ['Global E-Commerce & Trade', 'Mercato ed E-Commerce Globale'])}</text>
    <text x="475" y="128" text-anchor="middle" class="sm">${l(lang, ['World customers without erasing heritage', 'Esportati nel mondo restando autentici'])}</text>
  `),
  gg10_gdp_vs_hdi: lang => svg('GDP vs Human Development Index HDI', `
    ${panel(18, 16, 286, 182, '#ff9f45', 'rgba(255,159,69,0.08)')}
    <text x="161" y="46" text-anchor="middle" fill="#ff9f45" font-weight="800">💰 ${l(lang, ['GDP PER CAPITA ONLY', 'SOLO PIL PRO CAPITE'])}</text>
    <text x="161" y="88" text-anchor="middle" class="sm">${l(lang, ['Measures total money ÷ population', 'Media matematica dei redditi prodotti'])}</text>
    <text x="161" y="124" text-anchor="middle" class="sm">⚠️ ${l(lang, ['Hides extreme inequality & bad schools!', 'Nasconde disuguaglianze e scarsi servizi!'])}</text>
    ${panel(336, 16, 286, 182, '#38ef7d', 'rgba(56,239,125,0.08)')}
    <text x="479" y="46" text-anchor="middle" fill="#38ef7d" font-weight="800">📊 ${l(lang, ['UN HDI / ISU (0 to 1)', 'ISU ONU · 3 DIMENSIONI'])}</text>
    <text x="479" y="84" text-anchor="middle" class="sm">1. 🩺 ${l(lang, ['Life Expectancy (Health)', 'Speranza di vita (Salute)'])}</text>
    <text x="479" y="114" text-anchor="middle" class="sm">2. 🎓 ${l(lang, ['Years of Schooling', 'Anni di istruzione'])}</text>
    <text x="479" y="144" text-anchor="middle" class="sm">3. 💵 ${l(lang, ['Real Living Income', 'Reddito reale dignitoso'])}</text>
  `),
  gg10_global_inequality: lang => svg('Development Catalysts Clean Water & Schools', `
    ${panel(18, 16, 604, 182, '#a88bff')}
    <text x="320" y="42" text-anchor="middle" fill="#a88bff" font-weight="800">${l(lang, ['WHAT MULTIPLIES HUMAN DEVELOPMENT FASTEST?', 'CHE COSA ACCELERA LO SVILUPPO UMANO?'])}</text>
    ${panel(36, 64, 175, 114, '#45d8ff', 'rgba(69,216,255,0.08)')}<text x="123" y="92" text-anchor="middle" fill="#45d8ff" font-weight="700">💧 ${l(lang, ['Clean Water', 'Acqua Potabile'])}</text><text x="123" y="126" text-anchor="middle" class="sm">${l(lang, ['Cuts child disease', 'Riduce malattie e'])}</text><text x="123" y="148" text-anchor="middle" class="sm">${l(lang, ['& frees school hours', 'libera tempo studio'])}</text>
    ${panel(232, 64, 175, 114, '#38ef7d', 'rgba(56,239,125,0.08)')}<text x="319" y="92" text-anchor="middle" fill="#38ef7d" font-weight="700">👩‍🎓 ${l(lang, ['Girls’ Schooling', 'Scuola Femminile'])}</text><text x="319" y="126" text-anchor="middle" class="sm">${l(lang, ['Better jobs, health', 'Redditi più alti, salute'])}</text><text x="319" y="148" text-anchor="middle" class="sm">${l(lang, ['& balanced families', 'e scelte consapevoli'])}</text>
    ${panel(428, 64, 175, 114, '#ffd166', 'rgba(255,209,102,0.08)')}<text x="515" y="92" text-anchor="middle" fill="#ffd166" font-weight="700">🏥 ${l(lang, ['Primary Clinics', 'Sanità di Base'])}</text><text x="515" y="126" text-anchor="middle" class="sm">${l(lang, ['Vaccines & sanitation', 'Vaccini e prevenzione'])}</text><text x="515" y="148" text-anchor="middle" class="sm">${l(lang, ['lift life expectancy', 'alzano la vita media'])}</text>
  `),
  gg10_migration_corridors: lang => svg('Global Migration & Mediterranean Route', `
    ${panel(18, 16, 604, 182, '#ffd166')}
    <text x="320" y="42" text-anchor="middle" fill="#ffd166" font-weight="800">${l(lang, ['~280M GLOBAL MIGRANTS · ITALY ON THE CENTRAL MEDITERRANEAN', 'CIRCA 280M DI MIGRANTI · ROTTA MEDITERRANEA'])}</text>
    ${panel(38, 66, 260, 110, '#45d8ff', 'rgba(69,216,255,0.08)')}
    <text x="168" y="94" text-anchor="middle" fill="#45d8ff" font-weight="700">✈️ ${l(lang, ['Voluntary Migrants', 'Migranti Economici / Studio'])}</text>
    <text x="168" y="124" text-anchor="middle" class="sm">${l(lang, ['Move for university, careers & skills', 'Spostamenti per studio, lavoro o famiglia'])}</text>
    ${panel(342, 66, 260, 110, '#ff6b8b', 'rgba(255,107,139,0.08)')}
    <text x="472" y="94" text-anchor="middle" fill="#ff6b8b" font-weight="700">🛡️ ${l(lang, ['Refugees (1951 Geneva Law)', 'Rifugiati (Convenzione 1951)'])}</text>
    <text x="472" y="124" text-anchor="middle" class="sm">${l(lang, ['Fleeing war or climate disaster to safety', 'Fuga da guerre o persecuzioni · asilo'])}</text>
  `),
  gg10_asia_monsoons: lang => svg('Asian Monsoon Wind Reversal', `
    ${panel(18, 16, 604, 182, '#ff6b8b')}
    <text x="320" y="42" text-anchor="middle" fill="#ff6b8b" font-weight="800">${l(lang, ['ASIAN MONSOONS · FEEDING ~60% OF EARTH’S PEOPLE', 'I MONSONI ASIATICI · QUASI IL 60% DELL’UMANITÀ'])}</text>
    <path d="M90 154 Q210 118 320 96" fill="none" stroke="#45d8ff" stroke-width="5"/>
    <polygon points="320,96 303,92 308,108" fill="#45d8ff"/>
    <text x="175" y="172" text-anchor="middle" fill="#45d8ff" font-weight="700">🌧️ ${l(lang, ['Summer: Wet Ocean → Warm Land (Rice!)', 'Estate: Oceano Umido → Terra (Riso!)'])}</text>
    <line x1="360" y1="62" x2="360" y2="178" stroke="rgba(255,255,255,0.16)"/>
    <text x="485" y="98" text-anchor="middle" fill="#ffd166" font-weight="800">🏔️ ${l(lang, ['Himalayas · 8 848 m', 'Himalaya · Everest'])}</text>
    <text x="485" y="134" text-anchor="middle" class="sm">${l(lang, ['Indus, Ganges, Yangtze & Mekong', 'Indo, Gange, Fiume Azzurro, Mekong'])}</text>
  `),
  gg10_china_india_engines: lang => svg('China & India Economic Engines', `
    ${panel(18, 16, 286, 182, '#ff6b8b', 'rgba(255,107,139,0.08)')}
    <text x="161" y="46" text-anchor="middle" fill="#ff6b8b" font-weight="800">🇨🇳 ${l(lang, ['CHINA · INDUSTRIAL GIANT', 'CINA · COLOSSO MANIFATTURIERO'])}</text>
    <text x="161" y="88" text-anchor="middle" class="sm">⚡ ${l(lang, ['World #1 solar, EVs & high-speed rail', 'Leader in pannelli solari, auto EV, treni'])}</text>
    <text x="161" y="122" text-anchor="middle" class="sm">🏙️ ${l(lang, ['Coastal megacities · rapid aging', 'Megalopoli costiere e invecchiamento'])}</text>
    ${panel(336, 16, 286, 182, '#ff9f45', 'rgba(255,159,69,0.08)')}
    <text x="479" y="46" text-anchor="middle" fill="#ff9f45" font-weight="800">🇮🇳 ${l(lang, ['INDIA · #1 POPULATION & IT', 'INDIA · RECORD DEMOGRAFICO E IT'])}</text>
    <text x="479" y="88" text-anchor="middle" class="sm">💻 ${l(lang, ['1,4B+ young people · Bengaluru software', 'Oltre 1,4 mld giovani · polo informatico'])}</text>
    <text x="479" y="122" text-anchor="middle" class="sm">🚀 ${l(lang, ['Space & pharma exports rising rapidly', 'Farmaci e missioni spaziali in crescita'])}</text>
  `),
  gg10_japan_korea_tigers: lang => svg('Japan & South Korea Tech Giants', `
    ${panel(18, 16, 604, 182, '#45d8ff')}
    <text x="320" y="42" text-anchor="middle" fill="#45d8ff" font-weight="800">${l(lang, ['JAPAN & SOUTH KOREA · BRAINPOWER OVER RAW ORES', 'GIAPPONE E COREA DEL SUD · RICERCA E ALTA TECNOLOGIA'])}</text>
    ${panel(40, 68, 255, 108, '#ff6b8b', 'rgba(255,107,139,0.08)')}
    <text x="167" y="96" text-anchor="middle" fill="#ff6b8b" font-weight="700">🤖 ${l(lang, ['Few Fossil Fuels/Mines', 'Scarse Materie Prime'])}</text>
    <text x="167" y="126" text-anchor="middle" class="sm">${l(lang, ['Import iron & energy by container port', 'Importano energia e minerali via mare'])}</text>
    ${arrow(302, 122, 338, 122, '#38ef7d')}
    ${panel(345, 68, 255, 108, '#38ef7d', 'rgba(56,239,125,0.08)')}
    <text x="472" y="96" text-anchor="middle" fill="#38ef7d" font-weight="700">🔬 ${l(lang, ['Education, Robotics & Chips', 'Istruzione, Robotica e Chip'])}</text>
    <text x="472" y="126" text-anchor="middle" class="sm">${l(lang, ['World leaders in semiconductors & R&D', 'Leader mondiali in elettronica e ricerca'])}</text>
  `),
  gg10_africa_belts_rift: lang => svg('Africa Biomes & East Rift Valley', `
    ${panel(18, 16, 604, 182, '#ffd166')}
    <text x="320" y="42" text-anchor="middle" fill="#ffd166" font-weight="800">${l(lang, ['AFRICA · SYMMETRIC BIOMES + GREAT RIFT VALLEY', 'AFRICA · FASCE SIMMETRICHE E RIFT VALLEY'])}</text>
    ${panel(36, 66, 175, 110, '#38ef7d', 'rgba(56,239,125,0.08)')}<text x="123" y="94" text-anchor="middle" fill="#38ef7d" font-weight="700">🌳 Equator</text><text x="123" y="124" text-anchor="middle" class="sm">${l(lang, ['Congo rainforest', 'Foresta del Congo'])}</text><text x="123" y="146" text-anchor="middle" class="sm">${l(lang, ['& Nile/Congo basins', 'e grandi bacini'])}</text>
    ${panel(232, 66, 175, 110, '#ff9f45', 'rgba(255,159,69,0.08)')}<text x="319" y="94" text-anchor="middle" fill="#ff9f45" font-weight="700">🏜️ Sahara / Kalahari</text><text x="319" y="124" text-anchor="middle" class="sm">${l(lang, ['Savannas & deserts', 'Savane e deserti'])}</text><text x="319" y="146" text-anchor="middle" class="sm">${l(lang, ['North & South', 'a Nord e Sud'])}</text>
    ${panel(428, 66, 175, 110, '#ff6b8b', 'rgba(255,107,139,0.08)')}<text x="515" y="94" text-anchor="middle" fill="#ff6b8b" font-weight="700">⛰️ East Rift Valley</text><text x="515" y="124" text-anchor="middle" class="sm">${l(lang, ['Tectonic lakes &', 'Fossa tettonica con'])}</text><text x="515" y="146" text-anchor="middle" class="sm">${l(lang, ['Kilimanjaro peaks', 'laghi e Kilimangiaro'])}</text>
  `),
  gg10_africa_youth_leapfrog: lang => svg('Africa 19 Median Age & Leapfrogging', `
    ${panel(18, 16, 604, 182, '#38ef7d')}
    <text x="320" y="42" text-anchor="middle" fill="#38ef7d" font-weight="800">${l(lang, ['MEDIAN AGE ~19 · TECHNOLOGICAL LEAPFROGGING', 'ETÀ MEDIANA ~19 ANNI · SALTO TECNOLOGICO'])}</text>
    ${panel(38, 66, 260, 110, '#ffd166', 'rgba(255,209,102,0.08)')}
    <text x="168" y="94" text-anchor="middle" fill="#ffd166" font-weight="700">📱 ${l(lang, ['Mobile Finance (Kenya)', 'Banca sul Cellulare'])}</text>
    <text x="168" y="124" text-anchor="middle" class="sm">${l(lang, ['Skipped 20th-century copper cables cleanly', 'Salto diretto ai servizi mobili e pagamenti'])}</text>
    ${panel(342, 66, 260, 110, '#45d8ff', 'rgba(69,216,255,0.08)')}
    <text x="472" y="94" text-anchor="middle" fill="#45d8ff" font-weight="700">☀️ ${l(lang, ['Off-Grid Village Solar', 'Micro-Reti Solari'])}</text>
    <text x="472" y="124" text-anchor="middle" class="sm">${l(lang, ['Clean electricity without mega-coal grids', 'Elettricità pulita locale senza grandi reti'])}</text>
  `),
  gg10_africa_minerals_sahel: lang => svg('African Critical Minerals & Sahel Belt', `
    ${panel(18, 16, 604, 182, '#ff9f45')}
    <text x="320" y="42" text-anchor="middle" fill="#ff9f45" font-weight="800">${l(lang, ['AFRICA · GREEN MINERALS & SAHEL DROUGHT BELT', 'MATERIE CRITICHE E FASCIA DEL SAHEL'])}</text>
    ${panel(38, 66, 260, 110, '#45d8ff', 'rgba(69,216,255,0.08)')}
    <text x="168" y="94" text-anchor="middle" fill="#45d8ff" font-weight="700">🔋 ${l(lang, ['Cobalt, Lithium, Platinum', 'Cobalto, Litio e Platino'])}</text>
    <text x="168" y="124" text-anchor="middle" class="sm">${l(lang, ['Goal: refine value locally, not raw export', 'Sfida: lavorare le risorse in loco creando lavoro'])}</text>
    ${panel(342, 66, 260, 110, '#ff6b8b', 'rgba(255,107,139,0.08)')}
    <text x="472" y="94" text-anchor="middle" fill="#ff6b8b" font-weight="700">🌾 ${l(lang, ['Sahel Green Wall vs Desert', 'Sahel contro la Desertificazione'])}</text>
    <text x="472" y="124" text-anchor="middle" class="sm">${l(lang, ['Semi-arid zone south of Sahara needs water care', 'Fascia arida a sud del Sahara a rischio siccità'])}</text>
  `),
  gg10_americas_spine: lang => svg('Americas Rockies & Andes Mountain Spine', `
    ${panel(18, 16, 604, 182, '#38ef7d')}
    <text x="320" y="42" text-anchor="middle" fill="#38ef7d" font-weight="800">${l(lang, ['THE AMERICAS · CONTINUOUS WESTERN MOUNTAIN SPINE', 'LE AMERICHE · DA NORD A SUD TRA MONTI E PIANURE'])}</text>
    ${panel(38, 66, 260, 110, '#ffd166', 'rgba(255,209,102,0.08)')}
    <text x="168" y="94" text-anchor="middle" fill="#ffd166" font-weight="700">⛰️ ${l(lang, ['West: Rockies → Andes', 'Ovest: Rocciose → Ande'])}</text>
    <text x="168" y="124" text-anchor="middle" class="sm">${l(lang, ['Young tectonic rim bordering Pacific Ocean', 'Catena continua sul margine pacifico'])}</text>
    ${panel(342, 66, 260, 110, '#45d8ff', 'rgba(69,216,255,0.08)')}
    <text x="472" y="94" text-anchor="middle" fill="#45d8ff" font-weight="700">🌊 ${l(lang, ['East: Huge River Plains', 'Est: Grandi Bacini Fluviali'])}</text>
    <text x="472" y="124" text-anchor="middle" class="sm">${l(lang, ['Mississippi, Amazon Basin & Argentine Pampas', 'Mississippi, Rio delle Amazzoni e Pampa'])}</text>
  `),
  gg10_usa_tech_economy: lang => svg('Anglo-America USA & Canada Economy', `
    ${panel(18, 16, 604, 182, '#45d8ff')}
    <text x="320" y="42" text-anchor="middle" fill="#45d8ff" font-weight="800">${l(lang, ['ANGLO-AMERICA · RESEARCH, TECH & CONTRASTS', 'AMERICA ANGLOSASSONE · RICERCA, TECH E SFIDE'])}</text>
    ${panel(38, 66, 260, 110, '#38ef7d', 'rgba(56,239,125,0.08)')}
    <text x="168" y="94" text-anchor="middle" fill="#38ef7d" font-weight="700">💻 ${l(lang, ['Silicon Valley & Labs', 'Silicon Valley e Università'])}</text>
    <text x="168" y="124" text-anchor="middle" class="sm">${l(lang, ['Global software, aerospace & AI clusters', 'Polo mondiale informatico, aerospaziale e ricerca'])}</text>
    ${panel(342, 66, 260, 110, '#ff9f45', 'rgba(255,159,69,0.08)')}
    <text x="472" y="94" text-anchor="middle" fill="#ff9f45" font-weight="700">⚖️ ${l(lang, ['High GDP vs Inequality', 'PIL Elevato e Divari Sociali'])}</text>
    <text x="472" y="124" text-anchor="middle" class="sm">${l(lang, ['Healthcare, climate energy & urban divide', 'Accesso a sanità, energia e disuguaglianze'])}</text>
  `),
  gg10_latin_amazon_biome: lang => svg('Amazon Rainforest Global Carbon Lung', `
    ${panel(18, 16, 604, 182, '#38ef7d')}
    <text x="320" y="42" text-anchor="middle" fill="#38ef7d" font-weight="800">${l(lang, ['LATIN AMERICA & AMAZON BASIN · PLANETARY CLIMATE SHIELD', 'AMERICA LATINA E AMAZZONIA · POLMONE DEL PIANETA'])}</text>
    ${panel(38, 66, 260, 110, '#38ef7d', 'rgba(56,239,125,0.08)')}
    <text x="168" y="94" text-anchor="middle" fill="#38ef7d" font-weight="700">🌴 ${l(lang, ['Carbon Sink & Flying Rivers', 'Pozzo di CO₂ e Piogge'])}</text>
    <text x="168" y="124" text-anchor="middle" class="sm">${l(lang, ['Locks carbon & waters regional farming', 'Assorbe carbonio e regola il ciclo delle piogge'])}</text>
    ${panel(342, 66, 260, 110, '#ffd166', 'rgba(255,209,102,0.08)')}
    <text x="472" y="94" text-anchor="middle" fill="#ffd166" font-weight="700">🏙️ ${l(lang, ['São Paulo · Mexico City', 'Città del Messico · San Paolo'])}</text>
    <text x="472" y="124" text-anchor="middle" class="sm">${l(lang, ['Dynamic cities + Indigenous forest guardians', 'Grandi metropoli e tutela dei popoli indigeni'])}</text>
  `),
  gg10_energy_mix_compare: lang => svg('Fossil Fuels vs Clean Renewables', `
    ${panel(18, 16, 286, 182, '#ff6b8b', 'rgba(255,107,139,0.08)')}
    <text x="161" y="46" text-anchor="middle" fill="#ff6b8b" font-weight="800">🛢️ ${l(lang, ['FOSSIL FUELS (FINITE)', 'FONTI FOSSILI (ESAURIBILI)'])}</text>
    <text x="161" y="88" text-anchor="middle" class="sm">${l(lang, ['Coal, oil & natural gas', 'Carbone, petrolio e gas naturale'])}</text>
    <text x="161" y="122" text-anchor="middle" class="sm">🌡️ ${l(lang, ['Add CO₂ thickening greenhouse blanket', 'Liberano CO₂ aumentando l’effetto serra'])}</text>
    ${panel(336, 16, 286, 182, '#38ef7d', 'rgba(56,239,125,0.08)')}
    <text x="479" y="46" text-anchor="middle" fill="#38ef7d" font-weight="800">☀️ ${l(lang, ['RENEWABLES (CLEAN)', 'RINNOVABILI (PULITE)'])}</text>
    <text x="479" y="88" text-anchor="middle" class="sm">${l(lang, ['Solar, wind, alpine hydro', 'Solare, eolico, idroelettrico'])}</text>
    <text x="479" y="122" text-anchor="middle" class="sm">🌋 ${l(lang, ['+ Tuscany Larderello geothermal (1904!)', '+ Geotermia a Larderello dal 1904!'])}</text>
  `),
  gg10_circular_economy: lang => svg('Linear Waste vs Circular Economy Loop', `
    ${panel(18, 16, 604, 182, '#38ef7d')}
    <text x="320" y="40" text-anchor="middle" fill="#ffd166" font-weight="800">${l(lang, ['FROM LINEAR WASTE TO CIRCULAR LOOP', 'DALL’ECONOMIA LINEARE ALL’ECONOMIA CIRCOLARE'])}</text>
    <text x="320" y="74" text-anchor="middle" fill="#ff6b8b" font-weight="700">❌ ${l(lang, ['Linear: Mine → Make → Use → Dump Trash', 'Lineare: Estrai → Produci → Usa → Getta'])}</text>
    <line x1="60" y1="92" x2="580" y2="92" stroke="rgba(255,255,255,0.14)"/>
    <circle cx="320" cy="142" r="40" fill="none" stroke="#38ef7d" stroke-width="3.5" stroke-dasharray="10,4"/>
    <text x="320" y="146" text-anchor="middle" fill="#38ef7d" font-weight="800">♻️ LOOP</text>
    <text x="145" y="146" text-anchor="middle" class="sm">🔧 ${l(lang, ['Repair & Share', 'Ripara e Condividi'])}</text>
    <text x="495" y="146" text-anchor="middle" class="sm">🔄 ${l(lang, ['Recycle → New Inputs', 'Ricicla → Nuove Risorse'])}</text>
  `),
  gg10_agenda_2030_sdgs: lang => svg('UN Agenda 2030 17 Sustainable Goals', `
    ${panel(18, 16, 604, 182, '#45d8ff')}
    <text x="320" y="42" text-anchor="middle" fill="#45d8ff" font-weight="800">${l(lang, ['UN AGENDA 2030 · 17 GOALS CONNECTING PLANET & PEOPLE', 'AGENDA 2030 ONU · 17 OBIETTIVI INTEGRATI'])}</text>
    ${panel(36, 66, 175, 110, '#ff6b8b', 'rgba(255,107,139,0.08)')}<text x="123" y="94" text-anchor="middle" fill="#ff6b8b" font-weight="700">1–5 · ${l(lang, ['Dignity', 'Persone'])}</text><text x="123" y="126" text-anchor="middle" class="sm">${l(lang, ['Zero poverty, health,', 'Zero povertà, scuola'])}</text><text x="123" y="146" text-anchor="middle" class="sm">${l(lang, ['schools & equality', 'e parità di genere'])}</text>
    ${panel(232, 66, 175, 110, '#ffd166', 'rgba(255,209,102,0.08)')}<text x="319" y="94" text-anchor="middle" fill="#ffd166" font-weight="700">7–11 · ${l(lang, ['Prosperity', 'Città e Lavoro'])}</text><text x="319" y="126" text-anchor="middle" class="sm">${l(lang, ['Clean energy, decent', 'Energia pulita, lavoro'])}</text><text x="319" y="146" text-anchor="middle" class="sm">${l(lang, ['jobs & green cities', 'e città sostenibili'])}</text>
    ${panel(428, 66, 175, 110, '#38ef7d', 'rgba(56,239,125,0.08)')}<text x="515" y="94" text-anchor="middle" fill="#38ef7d" font-weight="700">13–15 · ${l(lang, ['Planet', 'Pianeta'])}</text><text x="515" y="126" text-anchor="middle" class="sm">${l(lang, ['Climate action, clean', 'Clima, tutela mari'])}</text><text x="515" y="146" text-anchor="middle" class="sm">${l(lang, ['seas & forests', 'e biodiversità'])}</text>
  `),

  // ---------------- GRADE 11 GEOGRAPHY (12) ----------------
  gg11_chokepoints_map: lang => svg('World Maritime Chokepoints Suez Hormuz Malacca', `
    ${panel(18, 16, 604, 182, '#45d8ff')}
    <text x="320" y="42" text-anchor="middle" fill="#45d8ff" font-weight="800">${l(lang, ['GLOBAL MARITIME CHOKEPOINTS · NARROW TRADE ARTERIES', 'STRETTI STRATEGICI · ARTERIE DEL COMMERCIO MONDIALE'])}</text>
    ${panel(32, 64, 136, 114, '#ffd166', 'rgba(255,209,102,0.08)')}<text x="100" y="92" text-anchor="middle" fill="#ffd166" font-weight="800">🇪🇬 Suez</text><text x="100" y="122" text-anchor="middle" class="sm">${l(lang, ['Saves ~8 000 km', 'Accorcia 8 000 km'])}</text><text x="100" y="144" text-anchor="middle" class="sm">${l(lang, ['into Mediterranean', 'verso l’Italia!'])}</text>
    ${panel(178, 64, 136, 114, '#ff6b8b', 'rgba(255,107,139,0.08)')}<text x="246" y="92" text-anchor="middle" fill="#ff6b8b" font-weight="800">⛽ Hormuz</text><text x="246" y="122" text-anchor="middle" class="sm">${l(lang, ['~20% world sea', '~20% petrolio'])}</text><text x="246" y="144" text-anchor="middle" class="sm">${l(lang, ['oil corridor', 'mondiale via mare'])}</text>
    ${panel(324, 64, 136, 114, '#38ef7d', 'rgba(56,239,125,0.08)')}<text x="392" y="92" text-anchor="middle" fill="#38ef7d" font-weight="800">🌏 Malacca</text><text x="392" y="122" text-anchor="middle" class="sm">${l(lang, ['Links India–China', 'Collega Oceano'])}</text><text x="392" y="144" text-anchor="middle" class="sm">${l(lang, ['& Japan trade', 'Indiano e Pacifico'])}</text>
    ${panel(470, 64, 136, 114, '#a88bff', 'rgba(168,139,255,0.08)')}<text x="538" y="92" text-anchor="middle" fill="#a88bff" font-weight="800">🇵🇦 Panama</text><text x="538" y="122" text-anchor="middle" class="sm">${l(lang, ['Links Atlantic', 'Collega Atlantico'])}</text><text x="538" y="144" text-anchor="middle" class="sm">${l(lang, ['& Pacific locks', 'e Pacifico'])}</text>
  `),
  gg11_critical_minerals: lang => svg('Critical Raw Materials Supply Concentration', `
    ${panel(18, 16, 604, 182, '#a88bff')}
    <text x="320" y="42" text-anchor="middle" fill="#a88bff" font-weight="800">${l(lang, ['21ST-CENTURY GEOPOLITICS · CRITICAL RAW MATERIALS', 'GEOPOLITICA DEL XXI SECOLO · MATERIE PRIME CRITICHE'])}</text>
    ${panel(36, 64, 175, 114, '#38ef7d', 'rgba(56,239,125,0.08)')}<text x="123" y="92" text-anchor="middle" fill="#38ef7d" font-weight="700">🔋 ${l(lang, ['Lithium & Cobalt', 'Litio e Cobalto'])}</text><text x="123" y="124" text-anchor="middle" class="sm">${l(lang, ['EV batteries & grid', 'Batterie per EV e reti'])}</text>
    ${panel(232, 64, 175, 114, '#ffd166', 'rgba(255,209,102,0.08)')}<text x="319" y="92" text-anchor="middle" fill="#ffd166" font-weight="700">🧲 ${l(lang, ['Rare Earths', 'Terre Rare'])}</text><text x="319" y="124" text-anchor="middle" class="sm">${l(lang, ['Wind magnets & screens', 'Turbine e smartphone'])}</text>
    ${panel(428, 64, 175, 114, '#45d8ff', 'rgba(69,216,255,0.08)')}<text x="515" y="92" text-anchor="middle" fill="#45d8ff" font-weight="700">💾 Semiconductors</text><text x="515" y="124" text-anchor="middle" class="sm">${l(lang, ['Tiny fabs require global', 'Richiedono filiere'])}</text><text x="515" y="146" text-anchor="middle" class="sm">${l(lang, ['diversification + recycling', 'diversificate e riciclo'])}</text>
  `),
  gg11_mediterranean_crossroads: lang => svg('Italy Central Mediterranean Crossroads', `
    ${panel(18, 16, 604, 182, '#ffd166')}
    <text x="320" y="42" text-anchor="middle" fill="#ffd166" font-weight="800">${l(lang, ['ITALY IN THE ENLARGED MEDITERRANEAN', 'L’ITALIA NEL MEDITERRANEO ALLARGATO'])}</text>
    <circle cx="320" cy="112" r="40" fill="rgba(56,239,125,0.16)" stroke="#38ef7d" stroke-width="2.5"/>
    <text x="320" y="116" text-anchor="middle" fill="#38ef7d" font-weight="800">🇮🇹 HUB</text>
    <text x="125" y="92" text-anchor="middle" class="sm">🌐 ${l(lang, ['Genoa & Sicily Fiber', 'Cavi sottomarini Genova/Sicilia'])}</text>
    <text x="125" y="138" text-anchor="middle" class="sm">🚢 ${l(lang, ['Trieste & Gioia Tauro Ports', 'Porti Trieste e Gioia Tauro'])}</text>
    <text x="515" y="92" text-anchor="middle" class="sm">⚡ ${l(lang, ['North Africa Clean Energy', 'Energia e gas dal Nord Africa'])}</text>
    <text x="515" y="138" text-anchor="middle" class="sm">🧭 ${l(lang, ['Europe ↔ Indo-Pacific Link', 'Ponte Europa–Indo-Pacifico'])}</text>
  `),
  gg11_article9_landscape: lang => svg('Article 9 Constitution Landscape & Biodiversity', `
    ${panel(18, 16, 604, 182, '#38ef7d')}
    <text x="320" y="42" text-anchor="middle" fill="#38ef7d" font-weight="800">${l(lang, ['ARTICLE 9 OF ITALY’S CONSTITUTION (UPDATED 2022)', 'ARTICOLO 9 DELLA COSTITUZIONE ITALIANA'])}</text>
    ${panel(38, 66, 260, 110, '#ffd166', 'rgba(255,209,102,0.08)')}
    <text x="168" y="94" text-anchor="middle" fill="#ffd166" font-weight="700">🏛️ ${l(lang, ['Landscape & Culture (1948)', 'Paesaggio e Cultura (1948)'])}</text>
    <text x="168" y="124" text-anchor="middle" class="sm">${l(lang, ['Protects historic cities, terraces & monuments', 'Tutela paesaggio, città storiche e beni culturali'])}</text>
    ${panel(342, 66, 260, 110, '#38ef7d', 'rgba(56,239,125,0.08)')}
    <text x="472" y="94" text-anchor="middle" fill="#38ef7d" font-weight="700">🌱 ${l(lang, ['Environment & Future (2022)', 'Ambiente e Futuro (2022)'])}</text>
    <text x="472" y="124" text-anchor="middle" class="sm">${l(lang, ['Protects ecosystems & biodiversity for youth!', 'Tutela ambiente, biodiversità e future generazioni!'])}</text>
  `),
  gg11_overtourism_vs_slow: lang => svg('Overtourism Congestion vs Slow Tourism', `
    ${panel(18, 16, 286, 182, '#ff6b8b', 'rgba(255,107,139,0.08)')}
    <text x="161" y="46" text-anchor="middle" fill="#ff6b8b" font-weight="800">⚠️ ${l(lang, ['OVERTOURISM TRAP', 'OVERTOURISM (SOVRACCARICO)'])}</text>
    <text x="161" y="88" text-anchor="middle" class="sm">${l(lang, ['Exceeds carrying capacity in Venice/Florence', 'Supera la capacità di carico locale'])}</text>
    <text x="161" y="122" text-anchor="middle" class="sm">${l(lang, ['Soaring rents push residents away', 'Affitti alle stelle espellono i residenti'])}</text>
    ${panel(336, 16, 286, 182, '#38ef7d', 'rgba(56,239,125,0.08)')}
    <text x="479" y="46" text-anchor="middle" fill="#38ef7d" font-weight="800">🚲 ${l(lang, ['SLOW TOURISM SOLUTION', 'TURISMO LENTO E DIFFUSO'])}</text>
    <text x="479" y="88" text-anchor="middle" class="sm">${l(lang, ['Bike trails, trains & inland borghi all year', 'Treni regionali, ciclovie e borghi 4 stagioni'])}</text>
    <text x="479" y="122" text-anchor="middle" class="sm">${l(lang, ['Dry-stone terrace care protects villages', 'Agricoltura locale cura e protegge i versanti'])}</text>
  `),
  gg11_cultural_economy: lang => svg('Living Cultural Economy Ecosystems', `
    ${panel(18, 16, 604, 182, '#ffd166')}
    <text x="320" y="42" text-anchor="middle" fill="#ffd166" font-weight="800">${l(lang, ['CULTURE AS LIVING WORK · NOT JUST POSTCARDS', 'ECONOMIA DELLA CULTURA · LAVORO QUALIFICATO TUTTO L’ANNO'])}</text>
    ${panel(36, 66, 175, 110, '#a88bff', 'rgba(168,139,255,0.08)')}<text x="123" y="96" text-anchor="middle" fill="#a88bff" font-weight="700">🎨 ${l(lang, ['Restoration', 'Restauro'])}</text><text x="123" y="128" text-anchor="middle" class="sm">${l(lang, ['Art science & museums', 'Scienza dei beni culturali'])}</text>
    ${panel(232, 66, 175, 110, '#38ef7d', 'rgba(56,239,125,0.08)')}<text x="319" y="96" text-anchor="middle" fill="#38ef7d" font-weight="700">🍷 ${l(lang, ['Agro-Landscape', 'Paesaggio DOP'])}</text><text x="319" y="128" text-anchor="middle" class="sm">${l(lang, ['Cinque Terre · Langhe', 'Cinque Terre · Langhe'])}</text>
    ${panel(428, 66, 175, 110, '#45d8ff', 'rgba(69,216,255,0.08)')}<text x="515" y="96" text-anchor="middle" fill="#45d8ff" font-weight="700">🧵 ${l(lang, ['Artisan Workshops', 'Botteghe e Design'])}</text><text x="515" y="128" text-anchor="middle" class="sm">${l(lang, ['Ceramic, glass & craft', 'Ceramica, vetro, moda'])}</text>
  `),
  gg11_tent_corridors: lang => svg('EU TEN-T Rail Corridors & Alpine Base Tunnels', `
    ${panel(18, 16, 604, 182, '#45d8ff')}
    <text x="320" y="40" text-anchor="middle" fill="#45d8ff" font-weight="800">${l(lang, ['TEN-T ALPINE BASE TUNNELS · FLAT RAIL UNDER PEAKS', 'CORRIDOI TEN-T · TRAFORI FERROVIARI DI BASE'])}</text>
    <polyline points="60,145 190,62 320,124 445,62 580,145" fill="rgba(159,176,200,0.16)" stroke="#9fb0c8" stroke-width="2"/>
    <line x1="55" y1="145" x2="585" y2="145" stroke="#38ef7d" stroke-width="6"/>
    <text x="320" y="168" text-anchor="middle" fill="#38ef7d" font-weight="800">🚆 ${l(lang, ['Gotthard & Brenner Base Tunnels · Flat Electric Freight!', 'Gottardo e Brennero · Treni elettrici merci al posto dei TIR!'])}</text>
    <text x="320" y="186" text-anchor="middle" class="sm">${l(lang, ['4 EU Corridors cross Italy · Milan–Rome–Naples HSR in < 4h', '4 Corridoi UE attraversano l’Italia con Alta Velocità nord-sud'])}</text>
  `),
  gg11_intermodal_hubs: lang => svg('Intermodal Port Rail Truck Chain', `
    ${panel(18, 16, 604, 182, '#38ef7d')}
    <text x="320" y="42" text-anchor="middle" fill="#38ef7d" font-weight="800">${l(lang, ['INTERMODALITY · SEAMLESS SHIP → RAIL → ELECTRIC LAST MILE', 'INTERMODALITÀ · DA NAVE A TRENO FINO ALL’ULTIMO MIGLIO'])}</text>
    ${panel(40, 74, 150, 90, '#45d8ff', 'rgba(69,216,255,0.08)')}<text x="115" y="110" text-anchor="middle" font-weight="800">🚢 ${l(lang, ['Sea Port', 'Porto'])}</text><text x="115" y="136" text-anchor="middle" class="sm">${l(lang, ['Trieste · Genoa', 'Trieste · Genova'])}</text>
    ${arrow(196, 118, 224, 118, '#ffd166')}
    ${panel(230, 74, 180, 90, '#ffd166', 'rgba(255,209,102,0.08)')}<text x="320" y="110" text-anchor="middle" font-weight="800">🚆 ${l(lang, ['Freight Rail', 'Treno Merci'])}</text><text x="320" y="136" text-anchor="middle" class="sm">${l(lang, ['Long haul low CO₂', 'Lunga tratta pulita'])}</text>
    ${arrow(416, 118, 444, 118, '#38ef7d')}
    ${panel(450, 74, 150, 90, '#38ef7d', 'rgba(56,239,125,0.08)')}<text x="525" y="110" text-anchor="middle" font-weight="800">🚐 ${l(lang, ['Electric Van', 'Furgone EV'])}</text><text x="525" y="136" text-anchor="middle" class="sm">${l(lang, ['Short city delivery', 'Consegna urbana'])}</text>
  `),
  gg11_smart_15min_city: lang => svg('Smart & 15-Minute City Concept', `
    ${panel(18, 16, 604, 182, '#ffd166')}
    <text x="320" y="42" text-anchor="middle" fill="#ffd166" font-weight="800">${l(lang, ['SMART & 15-MINUTE CITY · DESIGNED FOR PEOPLE', 'SMART CITY E CITTÀ DEI 15 MINUTI'])}</text>
    <circle cx="320" cy="116" r="52" fill="rgba(56,239,125,0.12)" stroke="#38ef7d" stroke-width="2.5" stroke-dasharray="6,4"/>
    <text x="320" y="112" text-anchor="middle" fill="#38ef7d" font-weight="800">🏠 15 min</text>
    <text x="320" y="132" text-anchor="middle" class="sm">${l(lang, ['Walk / Bike', 'Piedi / Bici'])}</text>
    <text x="125" y="92" text-anchor="middle" class="sm">🏫 ${l(lang, ['Schools & Clinics nearby', 'Scuole e ambulatori vicini'])}</text>
    <text x="125" y="142" text-anchor="middle" class="sm">🌳 ${l(lang, ['Parks cool Heat Islands', 'Parchi contro isole di calore'])}</text>
    <text x="515" y="92" text-anchor="middle" class="sm">⚡ ${l(lang, ['Smart Grids & LED Sensors', 'Smart grid e sensori'])}</text>
    <text x="515" y="142" text-anchor="middle" class="sm">🚋 ${l(lang, ['Frequent Clean Transit', 'Trasporto pubblico pulito'])}</text>
  `),
  gg11_italian_hazards_map: lang => svg('Risk Formula Hazard x Vulnerability x Exposure', `
    ${panel(18, 16, 604, 182, '#ff6b8b')}
    <text x="320" y="42" text-anchor="middle" fill="#ff6b8b" font-weight="800">${l(lang, ['RISK = HAZARD × VULNERABILITY × EXPOSURE', 'RISCHIO = PERICOLOSITÀ × VULNERABILITÀ × ESPOSIZIONE'])}</text>
    ${panel(36, 66, 175, 110, '#ff9f45', 'rgba(255,159,69,0.08)')}<text x="123" y="94" text-anchor="middle" fill="#ff9f45" font-weight="700">⚡ ${l(lang, ['Hazard (Nature)', 'Pericolosità'])}</text><text x="123" y="126" text-anchor="middle" class="sm">${l(lang, ['Quake, cloudburst or', 'Terremoto, nubifragio'])}</text><text x="123" y="146" text-anchor="middle" class="sm">${l(lang, ['steep hillside', 'o versante ripido'])}</text>
    ${panel(232, 66, 175, 110, '#38ef7d', 'rgba(56,239,125,0.08)')}<text x="319" y="94" text-anchor="middle" fill="#38ef7d" font-weight="700">🛡️ ${l(lang, ['Vulnerability', 'Vulnerabilità'])}</text><text x="319" y="126" text-anchor="middle" class="sm">${l(lang, ['Seismic school retrofits', 'Edifici antisismici'])}</text><text x="319" y="146" text-anchor="middle" class="sm">${l(lang, ['& permeable soil cut it!', 'e prevenzione!'])}</text>
    ${panel(428, 66, 175, 110, '#45d8ff', 'rgba(69,216,255,0.08)')}<text x="515" y="94" text-anchor="middle" fill="#45d8ff" font-weight="700">🏘️ ${l(lang, ['Exposure', 'Esposizione'])}</text><text x="515" y="126" text-anchor="middle" class="sm">${l(lang, ['Never build homes', 'Mai costruire dentro'])}</text><text x="515" y="146" text-anchor="middle" class="sm">${l(lang, ['over dry riverbeds!', 'gli alvei dei fiumi!'])}</text>
  `),
  gg11_soil_sealing_sponge: lang => svg('Forest Sponge vs Asphalt Flood Slide', `
    ${panel(18, 16, 286, 182, '#38ef7d', 'rgba(56,239,125,0.08)')}
    <text x="161" y="44" text-anchor="middle" fill="#38ef7d" font-weight="800">🌲 ${l(lang, ['NATURAL SOIL = GIANT SPONGE', 'SUOLO NATURALE = SPUGNA'])}</text>
    <text x="161" y="88" text-anchor="middle" class="sm">🌧️ ↓ 💧 ↓ 💧 ↓</text>
    <text x="161" y="122" text-anchor="middle" class="sm">${l(lang, ['Rainwater soaks gently into aquifers', 'L’acqua penetra lentamente in falda'])}</text>
    <text x="161" y="152" text-anchor="middle" fill="#38ef7d" font-weight="700">${l(lang, ['Low flash-flood peak!', 'Piena fluviale ridotta!'])}</text>
    ${panel(336, 16, 286, 182, '#ff6b8b', 'rgba(255,107,139,0.08)')}
    <text x="479" y="44" text-anchor="middle" fill="#ff6b8b" font-weight="800">🛣️ ${l(lang, ['SEALED ASPHALT = WATER SLIDE', 'CEMENTO E ASFALTO = SCIVOLO'])}</text>
    <text x="479" y="88" text-anchor="middle" class="sm">🌧️ ➔ 🌊🌊➔ 🏠</text>
    <text x="479" y="122" text-anchor="middle" class="sm">${l(lang, ['100% runoff races straight into streets', 'Zero infiltrazione: tutta l’acqua corre via'])}</text>
    <text x="479" y="152" text-anchor="middle" fill="#ff6b8b" font-weight="700">${l(lang, ['Triggers flash floods & landslides!', 'Scatena frane e alluvioni lampo!'])}</text>
  `),
  gg11_glaciers_venice_mose: lang => svg('Alpine Glaciers Retreat & Venice MOSE Floodgates', `
    ${panel(18, 16, 286, 182, '#45d8ff', 'rgba(69,216,255,0.08)')}
    <text x="161" y="44" text-anchor="middle" fill="#45d8ff" font-weight="800">🏔️ ${l(lang, ['ALPINE GLACIERS & MARMOLADA', 'GHIACCIAI ALPINI IN RITIRO'])}</text>
    <text x="161" y="88" text-anchor="middle" class="sm">${l(lang, ['Warming shrinks snow reserves for rivers', 'Meno scorte d’acqua estive per i fiumi'])}</text>
    <text x="161" y="122" text-anchor="middle" class="sm">${l(lang, ['& thaws permafrost rock slopes', 'e permafrost sciolto rende instabili le vette'])}</text>
    ${panel(336, 16, 286, 182, '#ffd166', 'rgba(255,209,102,0.08)')}
    <text x="479" y="44" text-anchor="middle" fill="#ffd166" font-weight="800">🌊 ${l(lang, ['VENICE MOSE FLOODGATES', 'BARRIERE MOSE A VENEZIA'])}</text>
    <rect x="385" y="106" width="18" height="44" transform="rotate(-24 385 150)" fill="#ffd166"/>
    <rect x="425" y="106" width="18" height="44" transform="rotate(-24 425 150)" fill="#ffd166"/>
    <rect x="465" y="106" width="18" height="44" transform="rotate(-24 465 150)" fill="#ffd166"/>
    <text x="530" y="132" text-anchor="middle" class="sm">${l(lang, ['78 air-lifted gates', '78 paratoie mobili'])}</text>
    <text x="479" y="176" text-anchor="middle" class="sm">${l(lang, ['Rise during surges; rest flat on seafloor normally', 'Si alzano solo con acqua alta eccezionale'])}</text>
  `)
};

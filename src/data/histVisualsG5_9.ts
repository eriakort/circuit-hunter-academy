import type { Language } from '../types';

type Pair = [string, string];
const l = (lang: Language, p: Pair) => (lang === 'it' ? p[1] : p[0]);

const svg = (label: string, body: string, h = 215) =>
  `<svg viewBox="0 0 640 ${h}" class="dia" role="img" aria-label="${label}">${body}</svg>`;

const panel = (x: number, y: number, w: number, h: number, stroke: string, bg = 'rgba(255,255,255,0.03)') =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="${bg}" stroke="${stroke}" stroke-width="1.6"/>`;

const arrow = (x1: number, y1: number, x2: number, y2: number, col = '#ffd166') =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${col}" stroke-width="2.4" stroke-linecap="round"/><polygon points="${x2},${y2} ${x2 - 8},${y2 - 5} ${x2 - 8},${y2 + 5}" fill="${col}"/>`;

export const HIST_VISUAL_BUILDERS_5_9: Record<string, (lang: Language) => string> = {
  // ---------------- GRADE 5 HISTORY (12) ----------------
  hg5_greek_polis: lang => svg('Greek Polis hillside', `
    ${panel(16, 14, 608, 186, '#ffd166')}
    <path d="M40 175 L155 62 L295 175 Z" fill="rgba(255,209,102,0.16)" stroke="#ffd166" stroke-width="2"/>
    <path d="M128 62 h54 M134 62 v-22 M146 62 v-22 M162 62 v-22 M174 62 v-22 M124 40 l31-18 l31 18 Z" fill="none" stroke="#ffd166" stroke-width="2.2"/>
    <text x="155" y="106" text-anchor="middle" fill="#ffd166" font-weight="800">${l(lang, ['ACROPOLIS', 'ACROPOLI'])}</text>
    <text x="155" y="124" text-anchor="middle" class="sm">${l(lang, ['Sacred citadel & temples', 'Parte alta · templi sacri'])}</text>
    ${panel(320, 34, 280, 66, '#45d8ff', 'rgba(69,216,255,0.08)')}
    <text x="460" y="60" text-anchor="middle" fill="#45d8ff" font-weight="800">${l(lang, ['AGORÀ · Open Market Square', 'AGORÀ · Piazza dei Cittadini'])}</text>
    <text x="460" y="82" text-anchor="middle" class="sm">${l(lang, ['Trade, debates & votes', 'Commerci, discussioni e leggi'])}</text>
    ${panel(320, 114, 280, 66, '#38ef7d', 'rgba(56,239,125,0.08)')}
    <text x="460" y="140" text-anchor="middle" fill="#38ef7d" font-weight="800">${l(lang, ['CHORA · Farms & Harbors', 'CHORA · Campagne e Porti'])}</text>
    <text x="460" y="162" text-anchor="middle" class="sm">${l(lang, ['Olives, grain & fishing ships', 'Ulivi, grano e navi mercantili'])}</text>
  `),
  hg5_athens_sparta: lang => svg('Athens vs Sparta comparison', `
    ${panel(18, 16, 290, 182, '#45d8ff', 'rgba(69,216,255,0.08)')}
    <text x="163" y="44" text-anchor="middle" fill="#45d8ff" font-weight="800" font-size="16">${l(lang, ['ATHENS · Sea & Ideas', 'ATENE · Mare e Idee'])}</text>
    <text x="163" y="76" text-anchor="middle">🦉 ${l(lang, ['Assembly votes by citizens', 'Assemblea: voto dei cittadini'])}</text>
    <text x="163" y="106" text-anchor="middle" class="sm">🎭 ${l(lang, ['Theater, philosophy & navy', 'Teatro, filosofia e flotta'])}</text>
    <text x="163" y="136" text-anchor="middle" class="sm">⚠️ ${l(lang, ['Women & enslaved excluded', 'Donne e schiavi esclusi'])}</text>
    <text x="163" y="170" text-anchor="middle" fill="#ffd166" font-size="12" font-weight="700">${l(lang, ['Patron: Athena', 'Dea protettrice: Atena'])}</text>

    ${panel(332, 16, 290, 182, '#ff6b8b', 'rgba(255,107,139,0.08)')}
    <text x="477" y="44" text-anchor="middle" fill="#ff6b8b" font-weight="800" font-size="16">${l(lang, ['SPARTA · Discipline', 'SPARTA · Disciplina'])}</text>
    <text x="477" y="76" text-anchor="middle">🛡️ ${l(lang, ['2 Kings + Elders (Oligarchy)', '2 Re + Anziani (Oligarchia)'])}</text>
    <text x="477" y="106" text-anchor="middle" class="sm">⚔️ ${l(lang, ['Agogé training from age 7', 'Addestramento dai 7 anni'])}</text>
    <text x="477" y="136" text-anchor="middle" class="sm">🏃‍♀️ ${l(lang, ['Spartan women managed estates', 'Le donne gestivano terre e casa'])}</text>
    <text x="477" y="170" text-anchor="middle" fill="#ffd166" font-size="12" font-weight="700">${l(lang, ['Elite land infantry', 'Opliti invincibili via terra'])}</text>
  `),
  hg5_olympics: lang => svg('Greek Olympics & Shared Heritage', `
    ${panel(18, 16, 604, 182, '#ffd166')}
    <circle cx="150" cy="96" r="24" fill="none" stroke="#45d8ff" stroke-width="4"/>
    <circle cx="195" cy="96" r="24" fill="none" stroke="#ffd166" stroke-width="4"/>
    <circle cx="240" cy="96" r="24" fill="none" stroke="#38ef7d" stroke-width="4"/>
    <text x="195" y="48" text-anchor="middle" fill="#ffd166" font-weight="800">${l(lang, ['776 BCE · OLYMPIC TRUCE', '776 a.C. · TREGUA OLIMPICA'])}</text>
    <text x="195" y="152" text-anchor="middle" class="sm">${l(lang, ['All Greek wars paused for 5 days', 'Le guerre tra polis si fermavano'])}</text>
    <line x1="310" y1="30" x2="310" y2="180" stroke="rgba(255,255,255,0.16)"/>
    <text x="462" y="62" text-anchor="middle" fill="#45d8ff" font-weight="800">${l(lang, ['SHARED GREEK CULTURE', 'CULTURA GRECA COMUNE'])}</text>
    <text x="462" y="96" text-anchor="middle" class="sm">🏛️ ${l(lang, ['One language & alphabet', 'Stessa lingua e alfabeto'])}</text>
    <text x="462" y="126" text-anchor="middle" class="sm">⚡ ${l(lang, ['Olympian gods & myths', 'Dei dell’Olimpo e miti'])}</text>
    <text x="462" y="156" text-anchor="middle" class="sm">🌿 ${l(lang, ['Olive-branch prize for glory', 'Corona d’ulivo · gloria'])}</text>
  `),
  hg5_italic_peoples: lang => svg('Italic Peoples map zones', `
    ${panel(18, 16, 604, 182, '#38ef7d')}
    <text x="320" y="42" text-anchor="middle" fill="#ffd166" font-weight="800">${l(lang, ['PRE-ROMAN ITALY · A MOSAIC OF PEOPLES', 'L’ITALIA PRIMA DI ROMA · UN MOSAICO'])}</text>
    ${panel(36, 62, 130, 114, '#ff9f45', 'rgba(255,159,69,0.1)')}
    <text x="101" y="90" text-anchor="middle" fill="#ff9f45" font-weight="700">${l(lang, ['North', 'Nord'])}</text>
    <text x="101" y="118" text-anchor="middle" class="sm">${l(lang, ['Celts, Ligurians', 'Celti, Liguri'])}</text>
    <text x="101" y="140" text-anchor="middle" class="sm">${l(lang, ['Veneti, Camuni', 'Veneti, Camuni'])}</text>
    ${panel(180, 62, 130, 114, '#ffd166', 'rgba(255,209,102,0.1)')}
    <text x="245" y="90" text-anchor="middle" fill="#ffd166" font-weight="700">${l(lang, ['Center-West', 'Centro-Ovest'])}</text>
    <text x="245" y="118" text-anchor="middle" class="sm">${l(lang, ['Etruscans &', 'Etruschi e'])}</text>
    <text x="245" y="140" text-anchor="middle" class="sm">${l(lang, ['Latins (Tiber)', 'Latini (Tevere)'])}</text>
    ${panel(324, 62, 130, 114, '#ff6b8b', 'rgba(255,107,139,0.1)')}
    <text x="389" y="90" text-anchor="middle" fill="#ff6b8b" font-weight="700">${l(lang, ['Apennines', 'Appennini'])}</text>
    <text x="389" y="118" text-anchor="middle" class="sm">${l(lang, ['Samnites,', 'Sanniti, Sabini,'])}</text>
    <text x="389" y="140" text-anchor="middle" class="sm">${l(lang, ['Umbrians', 'Umbri, Piceni'])}</text>
    ${panel(468, 62, 136, 114, '#45d8ff', 'rgba(69,216,255,0.1)')}
    <text x="536" y="90" text-anchor="middle" fill="#45d8ff" font-weight="700">${l(lang, ['South & Islands', 'Sud e Isole'])}</text>
    <text x="536" y="118" text-anchor="middle" class="sm">${l(lang, ['Magna Graecia,', 'Magna Grecia,'])}</text>
    <text x="536" y="140" text-anchor="middle" class="sm">${l(lang, ['Nuragic Sardinia', 'Sardi nuragici'])}</text>
  `),
  hg5_etruscan_arch: lang => svg('Etruscan Arch and Engineering', `
    ${panel(18, 16, 604, 182, '#ff9f45')}
    <path d="M80 170 L80 110 A70 70 0 0 1 220 110 L220 170" fill="none" stroke="#ffd166" stroke-width="18"/>
    <polygon points="150,28 164,52 136,52" fill="#45d8ff"/>
    <text x="150" y="142" text-anchor="middle" fill="#ffd166" font-weight="800">${l(lang, ['KEYSTONE', 'CHIAVE DI VOLTA'])}</text>
    <text x="150" y="164" text-anchor="middle" class="sm">${l(lang, ['Distributes weight outward', 'Scarica il peso sui pilastri'])}</text>
    <line x1="270" y1="26" x2="270" y2="184" stroke="rgba(255,255,255,0.15)"/>
    <text x="442" y="54" text-anchor="middle" fill="#ff9f45" font-weight="800">${l(lang, ['ETRUSCAN INNOVATIONS', 'INNOVAZIONI ETRUSCHE'])}</text>
    <text x="442" y="88" text-anchor="middle" class="sm">🧱 ${l(lang, ['Rounded stone arch & vaults', 'Arco a tutto sesto e volte'])}</text>
    <text x="442" y="118" text-anchor="middle" class="sm">🌾 ${l(lang, ['Drained marshes & aqueducts', 'Bonifica paludi e acquedotti'])}</text>
    <text x="442" y="148" text-anchor="middle" class="sm">⚒️ ${l(lang, ['Elba iron furnaces & goldwork', 'Ferro dell’Elba e oreficeria'])}</text>
  `),
  hg5_etruscan_necropolis: lang => svg('Etruscan Tumulus Necropolis', `
    ${panel(18, 16, 604, 182, '#a88bff')}
    <path d="M55 155 Q165 40 275 155 Z" fill="rgba(168,139,255,0.18)" stroke="#a88bff" stroke-width="2.4"/>
    <rect x="132" y="116" width="66" height="39" fill="rgba(255,209,102,0.18)" stroke="#ffd166"/>
    <text x="165" y="178" text-anchor="middle" fill="#a88bff" font-weight="700">${l(lang, ['CERVETERI · TARQUINIA TUMULUS', 'TOMBA A TUMULO ETRUSCA'])}</text>
    ${panel(315, 36, 286, 140, '#ffd166', 'rgba(255,209,102,0.07)')}
    <text x="458" y="66" text-anchor="middle" fill="#ffd166" font-weight="800">${l(lang, ['CITY OF THE LIVING = DEAD', 'CITTÀ DEI VIVI E DEI MORTI'])}</text>
    <text x="458" y="98" text-anchor="middle" class="sm">🎨 ${l(lang, ['Banquet frescoes, music & joy', 'Affreschi con banchetti e musica'])}</text>
    <text x="458" y="126" text-anchor="middle" class="sm">🏺 ${l(lang, ['Everyday pottery, toys & jewelry', 'Vasi, oggetti e gioielli reali'])}</text>
    <text x="458" y="154" text-anchor="middle" class="sm">👩 ${l(lang, ['Women pictured beside husbands', 'Donne sedute libere ai banchetti'])}</text>
  `),
  hg5_seven_hills: lang => svg('Rome 7 Hills & Tiber Island', `
    ${panel(18, 16, 604, 182, '#ff6b8b')}
    <path d="M36 146 Q150 130 270 156 T590 144" fill="none" stroke="#45d8ff" stroke-width="10" opacity="0.5"/>
    <ellipse cx="220" cy="144" rx="28" ry="11" fill="#ffd166"/>
    <text x="220" y="176" text-anchor="middle" fill="#45d8ff" font-size="12" font-weight="700">${l(lang, ['Tiber Island Ford', 'Isola Tiberina · Guado'])}</text>
    <path d="M80 120 L130 74 L185 120 M240 120 L295 68 L350 120 M380 120 L435 76 L490 120" fill="rgba(255,107,139,0.22)" stroke="#ff6b8b" stroke-width="2"/>
    <text x="130" y="64" text-anchor="middle" class="sm">Palatino</text>
    <text x="295" y="58" text-anchor="middle" class="sm">Campidoglio</text>
    <text x="435" y="66" text-anchor="middle" class="sm">Aventino · +4</text>
    <text x="530" y="96" text-anchor="middle" fill="#ffd166" font-weight="800">${l(lang, ['SALT ROAD', 'VIA SALARIA'])}</text>
    <text x="530" y="116" text-anchor="middle" class="sm">${l(lang, ['753 BCE Crossroads', '753 a.C. Crocevia'])}</text>
  `),
  hg5_patricians_plebeians: lang => svg('Patricians vs Plebeians Balance', `
    ${panel(18, 16, 286, 182, '#ffd166', 'rgba(255,209,102,0.08)')}
    <text x="161" y="46" text-anchor="middle" fill="#ffd166" font-weight="800">${l(lang, ['PATRICIANS · Wealthy Families', 'PATRIZI · Famiglie Nobili'])}</text>
    <text x="161" y="84" text-anchor="middle" class="sm">🏛️ ${l(lang, ['Owned large estates & Senate seats', 'Grandes terre e seggi in Senato'])}</text>
    <text x="161" y="118" text-anchor="middle" class="sm">📜 ${l(lang, ['Held early consulship monopolies', 'Monopolio iniziale delle cariche'])}</text>
    ${panel(336, 16, 286, 182, '#38ef7d', 'rgba(56,239,125,0.08)')}
    <text x="479" y="46" text-anchor="middle" fill="#38ef7d" font-weight="800">${l(lang, ['PLEBEIANS · Working Majority', 'PLEBEI · La Maggioranza'])}</text>
    <text x="479" y="84" text-anchor="middle" class="sm">⚒️ ${l(lang, ['Farmers, artisans & merchants', 'Contadini, artigiani e mercanti'])}</text>
    <text x="479" y="118" text-anchor="middle" class="sm">✋ ${l(lang, ['494 BCE Strike won Tribunes', '494 a.C.: Tribuni della Plebe'])}</text>
    <text x="479" y="152" text-anchor="middle" fill="#45d8ff" font-weight="700">${l(lang, ['+ Written XII Tables Law', '+ Leggi scritte delle XII Tavole'])}</text>
  `),
  hg5_roman_legion: lang => svg('Roman Legion Testudo & Equipment', `
    ${panel(18, 16, 604, 182, '#ff6b8b')}
    <rect x="48" y="48" width="160" height="32" rx="6" fill="#ffd166" opacity="0.85"/>
    <rect x="48" y="86" width="76" height="58" rx="6" fill="#ff6b8b" opacity="0.8"/>
    <rect x="132" y="86" width="76" height="58" rx="6" fill="#ff6b8b" opacity="0.8"/>
    <text x="128" y="168" text-anchor="middle" fill="#ffd166" font-weight="800">${l(lang, ['TESTUDO SHIELD WALL', 'FORMAZIONE A TESTUGGINE'])}</text>
    <line x1="250" y1="28" x2="250" y2="184" stroke="rgba(255,255,255,0.16)"/>
    <text x="430" y="54" text-anchor="middle" fill="#45d8ff" font-weight="800">${l(lang, ['ROMAN LEGION TOOLKIT', 'EQUIPAGGIAMENTO LEGIONARIO'])}</text>
    <text x="430" y="86" text-anchor="middle" class="sm">🛡️ ${l(lang, ['Scutum curved shield + Gladius sword', 'Scudo curvo e spada corta (gladio)'])}</text>
    <text x="430" y="116" text-anchor="middle" class="sm">🥾 ${l(lang, ['March 30 km/day + build fortified camp', 'Marcia 30 km/g e costruisce il castrum'])}</text>
    <text x="430" y="146" text-anchor="middle" class="sm">🌉 ${l(lang, ['Also built stone roads & bridges!', 'I soldati costruivano ponti e strade!'])}</text>
  `),
  hg5_roman_roads: lang => svg('Roman Paved Road Layers & Aqueduct', `
    ${panel(18, 16, 290, 182, '#ffd166')}
    <text x="163" y="42" text-anchor="middle" fill="#ffd166" font-weight="800">${l(lang, ['4-LAYER ROMAN ROAD', 'STRADA ROMANA A 4 STRATI'])}</text>
    <rect x="48" y="58" width="230" height="24" rx="4" fill="#9fb0c8"/>
    <text x="163" y="75" text-anchor="middle" fill="#0b1020" font-weight="800" font-size="11">${l(lang, ['1. Flat Paving Stones (Summa Crusta)', '1. Basoli levigati (lastricato)'])}</text>
    <rect x="48" y="88" width="230" height="24" rx="4" fill="#ffd166" opacity="0.7"/>
    <text x="163" y="105" text-anchor="middle" fill="#0b1020" font-weight="700" font-size="11">${l(lang, ['2. Crushed Stone & Lime', '2. Pietrisco e calce drenante'])}</text>
    <rect x="48" y="118" width="230" height="24" rx="4" fill="#ff9f45" opacity="0.7"/>
    <text x="163" y="135" text-anchor="middle" fill="#0b1020" font-weight="700" font-size="11">${l(lang, ['3. Mortar + Deep Rubble Base', '3. Sassi grandi e malta solida'])}</text>
    <text x="163" y="172" text-anchor="middle" class="sm">${l(lang, ['80 000 km · Via Appia still lasts!', '80 000 km · La Via Appia dura tuttora!'])}</text>

    ${panel(332, 16, 290, 182, '#45d8ff', 'rgba(69,216,255,0.06)')}
    <text x="477" y="42" text-anchor="middle" fill="#45d8ff" font-weight="800">${l(lang, ['GRAVITY AQUEDUCT', 'ACQUEDOTTO A GRAVITÀ'])}</text>
    <line x1="352" y1="68" x2="598" y2="82" stroke="#45d8ff" stroke-width="5"/>
    <path d="M370 154 v-44 a24 24 0 0 1 48 0 v44 M440 154 v-44 a24 24 0 0 1 48 0 v44 M510 154 v-44 a24 24 0 0 1 48 0 v44" fill="none" stroke="#ffd166" stroke-width="4"/>
    <text x="477" y="176" text-anchor="middle" class="sm">${l(lang, ['Gentle slope feeds fountains & baths', 'Pendenza costante fino a fontane e terme'])}</text>
  `),
  hg5_domus_insulae: lang => svg('Roman Domus vs Insulae housing', `
    ${panel(18, 16, 290, 182, '#38ef7d', 'rgba(56,239,125,0.07)')}
    <text x="163" y="44" text-anchor="middle" fill="#38ef7d" font-weight="800">${l(lang, ['DOMUS · Courtyard Home', 'DOMUS · Casa Signorile'])}</text>
    <rect x="64" y="62" width="198" height="82" rx="6" fill="none" stroke="#38ef7d" stroke-width="2"/>
    <rect x="134" y="88" width="58" height="30" fill="rgba(69,216,255,0.35)" stroke="#45d8ff"/>
    <text x="163" y="107" text-anchor="middle" fill="#45d8ff" font-size="11">Impluvium</text>
    <text x="163" y="168" text-anchor="middle" class="sm">${l(lang, ['Rain pool, atrium & garden', 'Atrio aperto, vasca e giardino'])}</text>

    ${panel(332, 16, 290, 182, '#ff9f45', 'rgba(255,159,69,0.07)')}
    <text x="477" y="44" text-anchor="middle" fill="#ff9f45" font-weight="800">${l(lang, ['INSULAE · City Apartments', 'INSULAE · Condomini Popolari'])}</text>
    <rect x="415" y="58" width="124" height="92" fill="rgba(255,159,69,0.16)" stroke="#ff9f45"/>
    <line x1="415" y1="88" x2="539" y2="88" stroke="#ff9f45"/>
    <line x1="415" y1="118" x2="539" y2="118" stroke="#ff9f45"/>
    <text x="477" y="77" text-anchor="middle" class="sm">${l(lang, ['Small upper rooms', 'Piani alti affollati'])}</text>
    <text x="477" y="107" text-anchor="middle" class="sm">${l(lang, ['No indoor plumbing', 'Senza acqua in casa'])}</text>
    <text x="477" y="138" text-anchor="middle" class="sm">${l(lang, ['Street shops below', 'Botteghe a piano terra'])}</text>
    <text x="477" y="172" text-anchor="middle" class="sm">${l(lang, ['Ostia Antica preserves 4-story blocks', 'Esempi conservati a Ostia Antica'])}</text>
  `),
  hg5_rome_legacy: lang => svg('Rome Legacy in Daily Life', `
    ${panel(18, 16, 604, 182, '#ffd166')}
    <text x="320" y="44" text-anchor="middle" fill="#ffd166" font-weight="800">${l(lang, ['ROME’S LIVING HERITAGE TODAY', 'L’EREDITÀ VIVA DI ROMA OGGI'])}</text>
    ${panel(36, 62, 134, 114, '#45d8ff', 'rgba(69,216,255,0.08)')}
    <text x="103" y="92" text-anchor="middle" fill="#45d8ff" font-weight="700">🗣️ ${l(lang, ['Languages', 'Lingue'])}</text>
    <text x="103" y="122" text-anchor="middle" class="sm">${l(lang, ['Italian, Spanish,', 'Italiano, spagnolo,'])}</text>
    <text x="103" y="144" text-anchor="middle" class="sm">${l(lang, ['French & Latin words', 'francese dal latino'])}</text>
    ${panel(182, 62, 134, 114, '#38ef7d', 'rgba(56,239,125,0.08)')}
    <text x="249" y="92" text-anchor="middle" fill="#38ef7d" font-weight="700">📅 ${l(lang, ['Calendar', 'Calendario'])}</text>
    <text x="249" y="122" text-anchor="middle" class="sm">${l(lang, ['July (Julius),', 'Luglio (Giulio),'])}</text>
    <text x="249" y="144" text-anchor="middle" class="sm">${l(lang, ['August & leap year', 'Agosto e bisestile'])}</text>
    ${panel(328, 62, 134, 114, '#ff9f45', 'rgba(255,159,69,0.08)')}
    <text x="395" y="92" text-anchor="middle" fill="#ff9f45" font-weight="700">⚖️ ${l(lang, ['Roman Law', 'Diritto'])}</text>
    <text x="395" y="122" text-anchor="middle" class="sm">${l(lang, ['Contracts, courts,', 'Contratti, processi,'])}</text>
    <text x="395" y="144" text-anchor="middle" class="sm">${l(lang, ['citizen rights', 'diritti dei cittadini'])}</text>
    ${panel(474, 62, 134, 114, '#a88bff', 'rgba(168,139,255,0.08)')}
    <text x="541" y="92" text-anchor="middle" fill="#a88bff" font-weight="700">🏙️ ${l(lang, ['Cities', 'Città'])}</text>
    <text x="541" y="122" text-anchor="middle" class="sm">${l(lang, ['Turin, Bologna,', 'Torino, Bologna,'])}</text>
    <text x="541" y="144" text-anchor="middle" class="sm">${l(lang, ['grid & concrete domes', 'cardini, decumani, archi'])}</text>
  `),

  // ---------------- GRADE 9 HISTORY (24) ----------------
  hg9_sources_timeline: lang => svg('Historical Sources & Timeline', `
    ${panel(18, 16, 604, 182, '#45d8ff')}
    <text x="320" y="42" text-anchor="middle" fill="#45d8ff" font-weight="800">${l(lang, ['HISTORIAN’S TIMELINE & SOURCES', 'LINEA DEL TEMPO E FONTI STORICHE'])}</text>
    <line x1="56" y1="88" x2="584" y2="88" stroke="#ffd166" stroke-width="3"/>
    <circle cx="320" cy="88" r="8" fill="#ff6b8b"/>
    <text x="320" y="70" text-anchor="middle" fill="#ff6b8b" font-weight="800">${l(lang, ['Year 1 CE · Pivot', 'Anno 1 d.C. · Centro'])}</text>
    <text x="150" y="72" text-anchor="middle" class="sm">← 753 a.C. · 490 a.C. (BCE)</text>
    <text x="485" y="72" text-anchor="middle" class="sm">(CE) 476 · 1492 · 1861 →</text>
    ${panel(40, 114, 175, 68, '#ffd166', 'rgba(255,209,102,0.08)')}
    <text x="127" y="140" text-anchor="middle" fill="#ffd166" font-weight="700">📜 ${l(lang, ['Written', 'Scritte'])}</text>
    <text x="127" y="164" text-anchor="middle" class="sm">${l(lang, ['Laws, letters, clay', 'Leggi, diari, papiri'])}</text>
    ${panel(232, 114, 175, 68, '#38ef7d', 'rgba(56,239,125,0.08)')}
    <text x="319" y="140" text-anchor="middle" fill="#38ef7d" font-weight="700">🏺 ${l(lang, ['Material', 'Materiali'])}</text>
    <text x="319" y="164" text-anchor="middle" class="sm">${l(lang, ['Tools, coins, bones', 'Utensili, monete, resti'])}</text>
    ${panel(424, 114, 175, 68, '#a88bff', 'rgba(168,139,255,0.08)')}
    <text x="511" y="140" text-anchor="middle" fill="#a88bff" font-weight="700">🖼️ ${l(lang, ['Visual / Oral', 'Iconografiche'])}</text>
    <text x="511" y="164" text-anchor="middle" class="sm">${l(lang, ['Frescoes, monuments', 'Affreschi, sculture'])}</text>
  `),
  hg9_paleo_neo: lang => svg('Paleolithic vs Neolithic Revolution', `
    ${panel(18, 16, 266, 182, '#ff9f45', 'rgba(255,159,69,0.08)')}
    <text x="151" y="44" text-anchor="middle" fill="#ff9f45" font-weight="800">${l(lang, ['PALEOLITHIC · Hunters', 'PALEOLITICO · Nomadi'])}</text>
    <text x="151" y="80" text-anchor="middle" class="sm">🪨 ${l(lang, ['Chipped stone tools & fire', 'Pietra scheggiata e fuoco'])}</text>
    <text x="151" y="110" text-anchor="middle" class="sm">🦌 ${l(lang, ['Followed wild herds & berries', 'Caccia, pesca e raccolta'])}</text>
    <text x="151" y="140" text-anchor="middle" class="sm">🎨 ${l(lang, ['Cave paintings (Lascaux)', 'Arte rupestre nelle caverne'])}</text>
    ${arrow(290, 108, 344, 108, '#38ef7d')}
    <text x="317" y="92" text-anchor="middle" fill="#38ef7d" font-size="11" font-weight="800">~10 000 a.C.</text>
    ${panel(354, 16, 268, 182, '#38ef7d', 'rgba(56,239,125,0.08)')}
    <text x="488" y="44" text-anchor="middle" fill="#38ef7d" font-weight="800">${l(lang, ['NEOLITHIC · Farmers', 'NEOLITICO · Villaggi'])}</text>
    <text x="488" y="80" text-anchor="middle" class="sm">🌾 ${l(lang, ['Wheat, barley & herding', 'Agricoltura e allevamento'])}</text>
    <text x="488" y="110" text-anchor="middle" class="sm">🏺 ${l(lang, ['Clay pots, loom & polished axe', 'Ceramica, telaio, pietra levigata'])}</text>
    <text x="488" y="140" text-anchor="middle" class="sm">🏘️ ${l(lang, ['Permanent homes & food surplus', 'Villaggi fissi e scorte di cibo'])}</text>
  `),
  hg9_metals_era: lang => svg('Copper Bronze Iron Timeline', `
    ${panel(18, 16, 604, 182, '#ffd166')}
    <text x="320" y="42" text-anchor="middle" fill="#ffd166" font-weight="800">${l(lang, ['AGE OF METALS · TECH LEAPS', 'ETÀ DEI METALLI · PROGRESSO'])}</text>
    ${panel(38, 66, 174, 110, '#ff9f45', 'rgba(255,159,69,0.1)')}
    <text x="125" y="94" text-anchor="middle" fill="#ff9f45" font-weight="800">${l(lang, ['COPPER (~4000 BCE)', 'RAME (~4000 a.C.)'])}</text>
    <text x="125" y="124" text-anchor="middle" class="sm">${l(lang, ['Ötzi’s Alpine axe!', 'L’ascia di Ötzi il Similaun!'])}</text>
    <text x="125" y="148" text-anchor="middle" class="sm">${l(lang, ['Soft first smelted metal', 'Primo metallo fuso'])}</text>
    ${panel(233, 66, 174, 110, '#ffd166', 'rgba(255,209,102,0.1)')}
    <text x="320" y="94" text-anchor="middle" fill="#ffd166" font-weight="800">${l(lang, ['BRONZE (~3000 BCE)', 'BRONZO (~3000 a.C.)'])}</text>
    <text x="320" y="124" text-anchor="middle" class="sm">${l(lang, ['Copper + Tin alloy!', 'Lega di Rame + Stagno!'])}</text>
    <text x="320" y="148" text-anchor="middle" class="sm">${l(lang, ['Hard plows & trade cities', 'Aratri robusti e commerci'])}</text>
    ${panel(428, 66, 174, 110, '#45d8ff', 'rgba(69,216,255,0.1)')}
    <text x="515" y="94" text-anchor="middle" fill="#45d8ff" font-weight="800">${l(lang, ['IRON (~1200 BCE)', 'FERRO (~1200 a.C.)'])}</text>
    <text x="515" y="124" text-anchor="middle" class="sm">${l(lang, ['Hot furnaces > 1 500 °C', 'Forni oltre 1 500 °C'])}</text>
    <text x="515" y="148" text-anchor="middle" class="sm">${l(lang, ['Common, ultra-tough tools', 'Diffuso ed economico'])}</text>
  `),
  hg9_fertile_crescent: lang => svg('Fertile Crescent River Civilizations', `
    ${panel(18, 16, 604, 182, '#38ef7d')}
    <path d="M90 165 Q210 36 470 110 L545 148" fill="none" stroke="#38ef7d" stroke-width="24" opacity="0.22" stroke-linecap="round"/>
    <path d="M120 170 L130 90 M360 72 L530 142 M385 62 L545 128" stroke="#45d8ff" stroke-width="4" stroke-linecap="round"/>
    <text x="128" y="182" text-anchor="middle" fill="#45d8ff" font-weight="700">${l(lang, ['Nile River', 'Fiume Nilo'])}</text>
    <text x="455" y="70" text-anchor="middle" fill="#45d8ff" font-weight="700">${l(lang, ['Tigris & Euphrates', 'Tigri ed Eufrate'])}</text>
    <text x="305" y="42" text-anchor="middle" fill="#ffd166" font-weight="800">${l(lang, ['THE FERTILE CRESCENT (~3500 BCE)', 'LA MEZZALUNA FERTILE (~3500 a.C.)'])}</text>
    <text x="330" y="156" text-anchor="middle" class="sm">🌾 ${l(lang, ['Canals + food surplus → scribes, ziggurats, taxes & cities!', 'Canali + eccedenze agricole → scribi, ziggurat, leggi e città!'])}</text>
  `),
  hg9_cuneiform_hammurabi: lang => svg('Cuneiform Clay & Hammurabi Stele', `
    ${panel(18, 16, 286, 182, '#ff9f45', 'rgba(255,159,69,0.08)')}
    <rect x="64" y="56" width="194" height="88" rx="10" fill="rgba(255,209,102,0.16)" stroke="#ffd166"/>
    <text x="161" y="44" text-anchor="middle" fill="#ff9f45" font-weight="800">${l(lang, ['SUMERIAN CUNEIFORM', 'SCRITTURA CUNEIFORME'])}</text>
    <text x="161" y="92" text-anchor="middle" fill="#ffd166" font-size="16">𒀀  𒁉  𒌓  ▸  ▾</text>
    <text x="161" y="124" text-anchor="middle" class="sm">${l(lang, ['Reed stylus wedges on wet clay', 'Canna su argilla umida (3200 a.C.)'])}</text>
    <text x="161" y="174" text-anchor="middle" class="sm">${l(lang, ['Grain receipts → epic poems', 'Conti dei raccolti → poemi epici'])}</text>

    ${panel(336, 16, 286, 182, '#45d8ff', 'rgba(69,216,255,0.08)')}
    <rect x="435" y="48" width="88" height="106" rx="44" fill="rgba(69,216,255,0.15)" stroke="#45d8ff"/>
    <text x="479" y="100" text-anchor="middle" fill="#45d8ff" font-weight="800" font-size="12">282</text>
    <text x="479" y="118" text-anchor="middle" fill="#45d8ff" font-weight="800" font-size="12">${l(lang, ['LAWS', 'LEGGI'])}</text>
    <text x="479" y="176" text-anchor="middle" class="sm">${l(lang, ['Hammurabi Stele · Public justice', 'Codice di Hammurabi · Leggi pubbliche'])}</text>
  `),
  hg9_egypt_nile: lang => svg('Egypt Nile Seasons & Hierarchy', `
    ${panel(18, 16, 326, 182, '#ffd166')}
    <polygon points="85,152 145,62 205,152" fill="rgba(255,209,102,0.28)" stroke="#ffd166" stroke-width="2"/>
    <text x="145" y="44" text-anchor="middle" fill="#ffd166" font-weight="800">${l(lang, ['EGYPTIAN PYRAMID OF POWER', 'SOCIETÀ EGIZIA A PIRAMIDE'])}</text>
    <text x="275" y="76" text-anchor="middle" fill="#ffd166" font-size="12" font-weight="700">${l(lang, ['Pharaoh', 'Faraone'])}</text>
    <text x="275" y="102" text-anchor="middle" class="sm">${l(lang, ['Priests · Scribes', 'Sacerdoti · Scribi'])}</text>
    <text x="275" y="128" text-anchor="middle" class="sm">${l(lang, ['Artisans · Farmers', 'Artigiani · Contadini'])}</text>
    <text x="180" y="176" text-anchor="middle" class="sm">${l(lang, ['Nile gift: fertile black silt (kemet)', 'Dono del Nilo: limo nero fertile'])}</text>
    ${panel(360, 16, 262, 182, '#45d8ff', 'rgba(69,216,255,0.08)')}
    <text x="491" y="44" text-anchor="middle" fill="#45d8ff" font-weight="800">${l(lang, ['ROSETTA STONE', 'STELE DI ROSETTA'])}</text>
    <text x="491" y="84" text-anchor="middle" class="sm">1. ${l(lang, ['Hieroglyphs (Sacred)', 'Geroglifici (Sacro)'])}</text>
    <text x="491" y="114" text-anchor="middle" class="sm">2. ${l(lang, ['Demotic (Everyday)', 'Demotico (Quotidiano)'])}</text>
    <text x="491" y="144" text-anchor="middle" class="sm">3. ${l(lang, ['Ancient Greek (Key!)', 'Greco antico (Chiave!)'])}</text>
    <text x="491" y="174" text-anchor="middle" fill="#38ef7d" font-size="11" font-weight="700">Champollion · 1822</text>
  `),
  hg9_alphabet_compare: lang => svg('Phonetic Alphabet Revolution', `
    ${panel(18, 16, 604, 182, '#38ef7d')}
    <text x="320" y="42" text-anchor="middle" fill="#38ef7d" font-weight="800">${l(lang, ['FROM THOUSANDS OF SIGNS TO 22 LETTERS', 'DA MIGLIAIA DI SEGNI A 22 LETTERE'])}</text>
    ${panel(36, 64, 170, 110, '#ff9f45', 'rgba(255,159,69,0.08)')}
    <text x="121" y="94" text-anchor="middle" fill="#ff9f45" font-weight="700">${l(lang, ['Hieroglyphs / Cuneiform', 'Geroglifici / Cuneiformi'])}</text>
    <text x="121" y="128" text-anchor="middle" fill="#ffffff" font-weight="800">700–1 000+</text>
    <text x="121" y="152" text-anchor="middle" class="sm">${l(lang, ['Elite scribes only', 'Solo pochi scribi'])}</text>
    ${arrow(214, 118, 250, 118, '#ffd166')}
    ${panel(258, 64, 160, 110, '#ffd166', 'rgba(255,209,102,0.08)')}
    <text x="338" y="94" text-anchor="middle" fill="#ffd166" font-weight="700">${l(lang, ['Phoenician', 'Fenicio'])}</text>
    <text x="338" y="128" text-anchor="middle" fill="#ffffff" font-weight="800">22 ${l(lang, ['sounds', 'suoni'])}</text>
    <text x="338" y="152" text-anchor="middle" class="sm">${l(lang, ['Consonants for trade', 'Consonanti mercantili'])}</text>
    ${arrow(426, 118, 462, 118, '#45d8ff')}
    ${panel(470, 64, 134, 110, '#45d8ff', 'rgba(69,216,255,0.08)')}
    <text x="537" y="94" text-anchor="middle" fill="#45d8ff" font-weight="700">${l(lang, ['Greek + Latin', 'Greco + Latino'])}</text>
    <text x="537" y="128" text-anchor="middle" fill="#ffffff" font-weight="800">+ A E I O U</text>
    <text x="537" y="152" text-anchor="middle" class="sm">${l(lang, ['Added vowels!', 'Aggiunse vocali!'])}</text>
  `),
  hg9_phoenician_routes: lang => svg('Phoenician Mediterranean Sea Network', `
    ${panel(18, 16, 604, 182, '#a88bff')}
    <text x="320" y="42" text-anchor="middle" fill="#a88bff" font-weight="800">${l(lang, ['PHOENICIAN MARITIME NETWORK (TYRE → CARTHAGE)', 'ROTTE FENICIE NEL MEDITERRANEO'])}</text>
    <path d="M555 120 Q410 75 265 118 T70 112" fill="none" stroke="#ffd166" stroke-width="3" stroke-dasharray="6,4"/>
    <circle cx="555" cy="120" r="8" fill="#a88bff"/><text x="555" y="146" text-anchor="middle" class="sm">${l(lang, ['Tyre & Sidon', 'Tiro e Sidone'])}</text>
    <circle cx="325" cy="108" r="8" fill="#ffd166"/><text x="325" y="138" text-anchor="middle" class="sm">${l(lang, ['Motya (Sicily)', 'Mozia (Sicilia)'])}</text>
    <circle cx="240" cy="124" r="9" fill="#ff6b8b"/><text x="240" y="152" text-anchor="middle" fill="#ff6b8b" font-weight="700">${l(lang, ['Carthage', 'Cartagine'])}</text>
    <circle cx="70" cy="112" r="8" fill="#45d8ff"/><text x="86" y="142" text-anchor="middle" class="sm">${l(lang, ['Gadir · Atlantic', 'Cadice · Atlantica'])}</text>
    <text x="320" y="178" text-anchor="middle" class="sm">🟣 ${l(lang, ['Cedar wood, glass, purple murex dye & sea navigation by Polaris', 'Legno di cedro, vetro, porpora e navigazione con la Stella Polare'])}</text>
  `),
  hg9_hebrew_monotheism: lang => svg('Ancient Hebrews Ethical Monotheism', `
    ${panel(18, 16, 604, 182, '#ffd166')}
    <text x="320" y="44" text-anchor="middle" fill="#ffd166" font-weight="800">${l(lang, ['ANCIENT HEBREWS · ETHICAL MONOTHEISM', 'ANTICO ISRAELE · MONOTEISMO ETICO'])}</text>
    ${panel(38, 66, 270, 112, '#45d8ff', 'rgba(69,216,255,0.08)')}
    <text x="173" y="96" text-anchor="middle" fill="#45d8ff" font-weight="700">☀️ ${l(lang, ['One Universal Creator', 'Un Unico Dio Creatore'])}</text>
    <text x="173" y="128" text-anchor="middle" class="sm">${l(lang, ['Portable faith survived Babylonian exile', 'Fede non legata a un luogo: resiste all’esilio'])}</text>
    ${panel(332, 66, 270, 112, '#38ef7d', 'rgba(56,239,125,0.08)')}
    <text x="467" y="96" text-anchor="middle" fill="#38ef7d" font-weight="700">📜 ${l(lang, ['Written Torah & Moral Law', 'Torah e Legge Morale Scritta'])}</text>
    <text x="467" y="128" text-anchor="middle" class="sm">${l(lang, ['Foundation of Judaism, Christianity & Islam', 'Radice comune di Ebraismo, Cristianesimo, Islam'])}</text>
  `),
  hg9_minoan_mycenaean: lang => svg('Minoan Knossos vs Mycenaean Citadels', `
    ${panel(18, 16, 290, 182, '#45d8ff', 'rgba(69,216,255,0.08)')}
    <text x="163" y="44" text-anchor="middle" fill="#45d8ff" font-weight="800">${l(lang, ['MINOANS · CRETE (KNOSSOS)', 'MINOICI · CRETA (CNOSSO)'])}</text>
    <text x="163" y="80" text-anchor="middle" class="sm">🌊 ${l(lang, ['Thalassocracy · Unwalled palaces', 'Talassocrazia · Palazzi senza mura'])}</text>
    <text x="163" y="110" text-anchor="middle" class="sm">🐬 ${l(lang, ['Dolphin frescoes & Linear A script', 'Affreschi luminosi e Lineare A'])}</text>
    <text x="163" y="144" text-anchor="middle" fill="#ffd166" font-size="12" font-weight="700">~2000–1450 BCE</text>
    ${panel(332, 16, 290, 182, '#ff9f45', 'rgba(255,159,69,0.08)')}
    <text x="477" y="44" text-anchor="middle" fill="#ff9f45" font-weight="800">${l(lang, ['MYCENAEANS · FORTRESSES', 'MICENEI · CITTÀ FORTIFICATE'])}</text>
    <text x="477" y="80" text-anchor="middle" class="sm">🦁 ${l(lang, ['Cyclopean stone walls (Lion Gate)', 'Mura ciclopiche (Porta dei Leoni)'])}</text>
    <text x="477" y="110" text-anchor="middle" class="sm">⚔️ ${l(lang, ['Linear B = earliest Greek!', 'Lineare B = primo greco decifrato!'])}</text>
    <text x="477" y="144" text-anchor="middle" fill="#ffd166" font-size="12" font-weight="700">~1600–1200 BCE</text>
  `),
  hg9_hoplite_phalanx: lang => svg('Hoplite Phalanx & Citizen Rights', `
    ${panel(18, 16, 604, 182, '#38ef7d')}
    <text x="320" y="42" text-anchor="middle" fill="#38ef7d" font-weight="800">${l(lang, ['HOPLITE PHALANX → CITIZEN EQUALITY', 'FALANGE OPLITICA → UGUAGLIANZA CIVICA'])}</text>
    <circle cx="95" cy="95" r="24" fill="rgba(255,209,102,0.22)" stroke="#ffd166" stroke-width="3"/>
    <circle cx="135" cy="95" r="24" fill="rgba(255,209,102,0.22)" stroke="#ffd166" stroke-width="3"/>
    <circle cx="175" cy="95" r="24" fill="rgba(255,209,102,0.22)" stroke="#ffd166" stroke-width="3"/>
    <text x="135" y="144" text-anchor="middle" class="sm">${l(lang, ['Each shield guards left neighbor!', 'Ogni scudo protegge il compagno!'])}</text>
    ${arrow(220, 95, 286, 95, '#38ef7d')}
    ${panel(300, 62, 300, 114, '#45d8ff', 'rgba(69,216,255,0.08)')}
    <text x="450" y="92" text-anchor="middle" fill="#45d8ff" font-weight="700">${l(lang, ['POLITICAL CONSEQUENCE', 'EFFETTO POLITICO'])}</text>
    <text x="450" y="122" text-anchor="middle" class="sm">${l(lang, ['Farmers & artisans who defend the city', 'Chi difende la città con le proprie armi'])}</text>
    <text x="450" y="146" text-anchor="middle" class="sm">${l(lang, ['demand laws, assembly & written rights!', 'chiede leggi scritte e voto in Assemblea!'])}</text>
  `),
  hg9_magna_graecia: lang => svg('Magna Graecia Colonies in Italy', `
    ${panel(18, 16, 604, 182, '#45d8ff')}
    <text x="320" y="42" text-anchor="middle" fill="#45d8ff" font-weight="800">${l(lang, ['MAGNA GRAECIA IN SOUTHERN ITALY (8th–6th c. BCE)', 'LA MAGNA GRECIA IN ITALIA MERIDIONALE'])}</text>
    ${panel(38, 64, 174, 114, '#ffd166', 'rgba(255,209,102,0.08)')}
    <text x="125" y="92" text-anchor="middle" fill="#ffd166" font-weight="700">🏛️ ${l(lang, ['Syracuse & Agrigento', 'Siracusa e Agrigento'])}</text>
    <text x="125" y="122" text-anchor="middle" class="sm">${l(lang, ['Archimedes & Valley of Temples', 'Archimede e Valle dei Templi'])}</text>
    ${panel(232, 64, 174, 114, '#38ef7d', 'rgba(56,239,125,0.08)')}
    <text x="319" y="92" text-anchor="middle" fill="#38ef7d" font-weight="700">🌊 ${l(lang, ['Cumae & Paestum', 'Cuma e Paestum'])}</text>
    <text x="319" y="122" text-anchor="middle" class="sm">${l(lang, ['Brought Greek alphabet to Rome!', 'Portarono l’alfabeto a Roma!'])}</text>
    ${panel(426, 64, 176, 114, '#ff9f45', 'rgba(255,159,69,0.08)')}
    <text x="514" y="92" text-anchor="middle" fill="#ff9f45" font-weight="700">📐 ${l(lang, ['Taranto & Croton', 'Taranto e Crotone'])}</text>
    <text x="514" y="122" text-anchor="middle" class="sm">${l(lang, ['Pythagoras school & ports', 'Scuola di Pitagora e porti'])}</text>
  `),
  hg9_athens_democracy: lang => svg('Athenian Direct Democracy Reformers', `
    ${panel(18, 16, 604, 182, '#45d8ff')}
    <text x="320" y="42" text-anchor="middle" fill="#45d8ff" font-weight="800">${l(lang, ['ROAD TO ATHENIAN DIRECT DEMOCRACY', 'TAPPE DELLA DEMOCRAZIA ATENIESE'])}</text>
    ${panel(36, 66, 175, 112, '#ff9f45', 'rgba(255,159,69,0.08)')}
    <text x="123" y="92" text-anchor="middle" fill="#ff9f45" font-weight="700">594 BCE · ${l(lang, ['Solon', 'Solone'])}</text>
    <text x="123" y="122" text-anchor="middle" class="sm">${l(lang, ['Ended debt slavery;', 'Abolì schiavitù per debiti'])}</text>
    <text x="123" y="144" text-anchor="middle" class="sm">${l(lang, ['wealth-based classes', 'e divise per censo'])}</text>
    ${panel(232, 66, 175, 112, '#ffd166', 'rgba(255,209,102,0.08)')}
    <text x="319" y="92" text-anchor="middle" fill="#ffd166" font-weight="700">508 BCE · ${l(lang, ['Cleisthenes', 'Clistene'])}</text>
    <text x="319" y="122" text-anchor="middle" class="sm">${l(lang, ['Mixed tribes (demes);', 'Tribù miste sul territorio;'])}</text>
    <text x="319" y="144" text-anchor="middle" class="sm">${l(lang, ['isonomia & ostracism', 'isonomia e ostracismo'])}</text>
    ${panel(428, 66, 175, 112, '#38ef7d', 'rgba(56,239,125,0.08)')}
    <text x="515" y="92" text-anchor="middle" fill="#38ef7d" font-weight="700">450 BCE · ${l(lang, ['Pericles', 'Pericle'])}</text>
    <text x="515" y="122" text-anchor="middle" class="sm">${l(lang, ['Pay for jury & public', 'Indennità ai magistrati'])}</text>
    <text x="515" y="144" text-anchor="middle" class="sm">${l(lang, ['roles + Parthenon', 'e Partenone'])}</text>
  `),
  hg9_persian_wars: lang => svg('Persian Wars Marathon & Salamis', `
    ${panel(18, 16, 604, 182, '#ff6b8b')}
    <text x="320" y="42" text-anchor="middle" fill="#ff6b8b" font-weight="800">${l(lang, ['GREEK POLIS VS PERSIAN EMPIRE (490–479 BCE)', 'GUERRE PERSIANE (490–479 a.C.)'])}</text>
    ${panel(36, 64, 175, 114, '#38ef7d', 'rgba(56,239,125,0.08)')}
    <text x="123" y="92" text-anchor="middle" fill="#38ef7d" font-weight="700">490 BCE · ${l(lang, ['Marathon', 'Maratona'])}</text>
    <text x="123" y="124" text-anchor="middle" class="sm">${l(lang, ['Athenian hoplites halt', 'Opliti ateniesi fermano'])}</text>
    <text x="123" y="146" text-anchor="middle" class="sm">${l(lang, ['Darius I on land', 'Dario I a piedi'])}</text>
    ${panel(232, 64, 175, 114, '#ffd166', 'rgba(255,209,102,0.08)')}
    <text x="319" y="92" text-anchor="middle" fill="#ffd166" font-weight="700">480 BCE · ${l(lang, ['Thermopylae', 'Termopili'])}</text>
    <text x="319" y="124" text-anchor="middle" class="sm">${l(lang, ['Leonidas & 300 Spartans', 'Leonida e 300 Spartani'])}</text>
    <text x="319" y="146" text-anchor="middle" class="sm">${l(lang, ['buy precious time', 'sacrificati al passo'])}</text>
    ${panel(428, 64, 175, 114, '#45d8ff', 'rgba(69,216,255,0.08)')}
    <text x="515" y="92" text-anchor="middle" fill="#45d8ff" font-weight="700">480 BCE · ${l(lang, ['Salamis', 'Salamina'])}</text>
    <text x="515" y="124" text-anchor="middle" class="sm">${l(lang, ['Agile Greek triremes', 'Agili triremi greche'])}</text>
    <text x="515" y="146" text-anchor="middle" class="sm">${l(lang, ['trap Xerxes’ fleet', 'battono la flotta di Serse'])}</text>
  `),
  hg9_classical_golden: lang => svg('Classical Greek Golden Age vs Peloponnesian War', `
    ${panel(18, 16, 290, 182, '#ffd166', 'rgba(255,209,102,0.08)')}
    <text x="163" y="44" text-anchor="middle" fill="#ffd166" font-weight="800">${l(lang, ['GOLDEN AGE OF ATHENS', 'ETÀ D’ORO DI ATENE'])}</text>
    <text x="163" y="80" text-anchor="middle" class="sm">🏛️ Parthenon & Phidias</text>
    <text x="163" y="110" text-anchor="middle" class="sm">🦉 Socrates · Plato · Aristotle</text>
    <text x="163" y="140" text-anchor="middle" class="sm">📜 Herodotus & Thucydides</text>
    ${panel(332, 16, 290, 182, '#ff6b8b', 'rgba(255,107,139,0.08)')}
    <text x="477" y="44" text-anchor="middle" fill="#ff6b8b" font-weight="800">${l(lang, ['PELOPONNESIAN WAR (431–404 BCE)', 'GUERRA DEL PELOPONNESO'])}</text>
    <text x="477" y="84" text-anchor="middle" class="sm">${l(lang, ['Delian Sea League vs Sparta League', 'Lega di Delo contro Lega Peloponnesiaca'])}</text>
    <text x="477" y="116" text-anchor="middle" class="sm">${l(lang, ['27 years exhausted all Greece,', '27 anni di guerra civile greca'])}</text>
    <text x="477" y="146" text-anchor="middle" class="sm">${l(lang, ['opening door to Macedon', 'che aprirono la strada alla Macedonia'])}</text>
  `),
  hg9_alexander_map: lang => svg('Alexander the Great Empire Route', `
    ${panel(18, 16, 604, 182, '#ffd166')}
    <text x="320" y="42" text-anchor="middle" fill="#ffd166" font-weight="800">${l(lang, ['ALEXANDER’S MARCH (334–323 BCE)', 'LA SPEDIZIONE DI ALESSANDRO MAGNO'])}</text>
    <circle cx="80" cy="100" r="8" fill="#45d8ff"/><text x="80" y="128" text-anchor="middle" class="sm">Pella</text>
    ${arrow(94, 100, 186, 118, '#ffd166')}
    <circle cx="195" cy="120" r="8" fill="#38ef7d"/><text x="195" y="148" text-anchor="middle" class="sm">${l(lang, ['Alexandria', 'Alessandria'])}</text>
    ${arrow(208, 118, 326, 94, '#ffd166')}
    <circle cx="335" cy="92" r="8" fill="#ff9f45"/><text x="335" y="120" text-anchor="middle" class="sm">${l(lang, ['Gaugamela / Babylon', 'Gaugamela / Babilonia'])}</text>
    ${arrow(348, 92, 488, 104, '#ffd166')}
    <circle cx="498" cy="105" r="8" fill="#ff6b8b"/><text x="520" y="134" text-anchor="middle" class="sm">${l(lang, ['Indus River (326 BCE)', 'Fiume Indo (326 a.C.)'])}</text>
    <text x="320" y="176" text-anchor="middle" class="sm">${l(lang, ['11 years undefeated · Never lost a battle · United Greece, Egypt & Persia', '11 anni senza sconfitte · Unì Grecia, Egitto, Persia fino all’Indo'])}</text>
  `),
  hg9_hellenism_fusion: lang => svg('Hellenism Cultural Blend & Kingdoms', `
    ${panel(18, 16, 604, 182, '#a88bff')}
    <text x="320" y="42" text-anchor="middle" fill="#a88bff" font-weight="800">${l(lang, ['HELLENISM = GREEK + EASTERN FUSION', 'ELLENISMO = FUSIONE GRECO-ORIENTALE'])}</text>
    ${panel(40, 68, 168, 96, '#45d8ff', 'rgba(69,216,255,0.08)')}
    <text x="124" y="102" text-anchor="middle" fill="#45d8ff" font-weight="700">${l(lang, ['Greek Polis', 'Cultura Greca'])}</text>
    <text x="124" y="130" text-anchor="middle" class="sm">${l(lang, ['Koiné Greek & science', 'Koinè greca e scienza'])}</text>
    <text x="234" y="122" text-anchor="middle" fill="#ffd166" font-size="24" font-weight="800">+</text>
    ${panel(260, 68, 168, 96, '#ff9f45', 'rgba(255,159,69,0.08)')}
    <text x="344" y="102" text-anchor="middle" fill="#ff9f45" font-weight="700">${l(lang, ['Egypt & Persia', 'Egitto e Oriente'])}</text>
    <text x="344" y="130" text-anchor="middle" class="sm">${l(lang, ['Astronomy & royal art', 'Astronomia e monarchie'])}</text>
    <text x="454" y="122" text-anchor="middle" fill="#ffd166" font-size="24" font-weight="800">=</text>
    ${panel(480, 68, 124, 96, '#38ef7d', 'rgba(56,239,125,0.08)')}
    <text x="542" y="102" text-anchor="middle" fill="#38ef7d" font-weight="700">${l(lang, ['Global Age', 'Mondo Unito'])}</text>
    <text x="542" y="130" text-anchor="middle" class="sm">${l(lang, ['Cosmopolis', 'Cosmopoli'])}</text>
  `),
  hg9_alexandria_library: lang => svg('Alexandria Library & Hellenistic Science', `
    ${panel(18, 16, 604, 182, '#45d8ff')}
    <text x="320" y="42" text-anchor="middle" fill="#45d8ff" font-weight="800">${l(lang, ['ALEXANDRIA MOUSEION & SCIENCE', 'BIBLIOTECA E SCIENZA AD ALESSANDRIA'])}</text>
    ${panel(36, 64, 175, 114, '#ffd166', 'rgba(255,209,102,0.08)')}
    <text x="123" y="92" text-anchor="middle" fill="#ffd166" font-weight="700">📐 Euclid</text>
    <text x="123" y="122" text-anchor="middle" class="sm">${l(lang, ['Elements of Geometry', 'Elementi di Geometria'])}</text>
    ${panel(232, 64, 175, 114, '#38ef7d', 'rgba(56,239,125,0.08)')}
    <text x="319" y="92" text-anchor="middle" fill="#38ef7d" font-weight="700">🌍 Eratosthenes</text>
    <text x="319" y="122" text-anchor="middle" class="sm">${l(lang, ['Measured Earth within ~2%!', 'Misurò la Terra con scarto < 2%!'])}</text>
    ${panel(428, 64, 175, 114, '#ff9f45', 'rgba(255,159,69,0.08)')}
    <text x="515" y="92" text-anchor="middle" fill="#ff9f45" font-weight="700">⚙️ Archimedes</text>
    <text x="515" y="122" text-anchor="middle" class="sm">${l(lang, ['Levers, screw & buoyancy', 'Leve, vite e spinta idrostatica'])}</text>
  `),
  hg9_etruscan_cities: lang => svg('Etruscan League & Italic Context', `
    ${panel(18, 16, 604, 182, '#ff9f45')}
    <text x="320" y="44" text-anchor="middle" fill="#ff9f45" font-weight="800">${l(lang, ['ETRUSCAN DODECAPOLIS · 12 LEAGUE CITIES', 'DODECAPOLI ETRUSCA · LEGA DI 12 CITTÀ'])}</text>
    <text x="320" y="82" text-anchor="middle" class="sm">🏛️ Veio · Tarquinia · Cerveteri · Vulci · Volterra · Chiusi · Perugia · Arezzo</text>
    ${panel(42, 102, 260, 78, '#ffd166', 'rgba(255,209,102,0.08)')}
    <text x="172" y="130" text-anchor="middle" fill="#ffd166" font-weight="700">${l(lang, ['Loose Religious League', 'Confederazione Religiosa'])}</text>
    <text x="172" y="156" text-anchor="middle" class="sm">${l(lang, ['United by shrines, not single king', 'Città indipendenti senza Stato unico'])}</text>
    ${panel(336, 102, 260, 78, '#45d8ff', 'rgba(69,216,255,0.08)')}
    <text x="466" y="130" text-anchor="middle" fill="#45d8ff" font-weight="700">${l(lang, ['Gift to Early Rome', 'Eredità donata a Roma'])}</text>
    <text x="466" y="156" text-anchor="middle" class="sm">${l(lang, ['Cloaca Maxima, arches & fasces', 'Fognature, archi, fasci e alfabeto'])}</text>
  `),
  hg9_roman_kings: lang => svg('Seven Kings of Rome 753-509 BCE', `
    ${panel(18, 16, 604, 182, '#ff6b8b')}
    <text x="320" y="42" text-anchor="middle" fill="#ff6b8b" font-weight="800">${l(lang, ['ROMAN KINGDOM (753–509 BCE) · 7 KINGS', 'MONARCHIA ROMANA (753–509 a.C.) · 7 RE'])}</text>
    ${panel(40, 66, 266, 112, '#ffd166', 'rgba(255,209,102,0.08)')}
    <text x="173" y="94" text-anchor="middle" fill="#ffd166" font-weight="700">${l(lang, ['1–4: Latin–Sabine Kings', '1–4: Re Latino-Sabini'])}</text>
    <text x="173" y="122" text-anchor="middle" class="sm">Romulus · Numa · Tullus · Ancus</text>
    <text x="173" y="148" text-anchor="middle" class="sm">${l(lang, ['Founded Senate, calendar & Ostia', 'Senato, riti religiosi e porto di Ostia'])}</text>
    ${panel(334, 66, 268, 112, '#ff9f45', 'rgba(255,159,69,0.08)')}
    <text x="468" y="94" text-anchor="middle" fill="#ff9f45" font-weight="700">${l(lang, ['5–7: Etruscan Kings', '5–7: Re Etruschi'])}</text>
    <text x="468" y="122" text-anchor="middle" class="sm">Tarquinius Priscus · Servius · Superbus</text>
    <text x="468" y="148" text-anchor="middle" class="sm">${l(lang, ['Stone walls, Forum & wealth army', 'Mura serviane, Foro e riforma censitaria'])}</text>
  `),
  hg9_monarchy_to_republic: lang => svg('From Monarchy to SPQR Republic 509 BCE', `
    ${panel(18, 16, 240, 182, '#ff6b8b', 'rgba(255,107,139,0.08)')}
    <text x="138" y="48" text-anchor="middle" fill="#ff6b8b" font-weight="800">${l(lang, ['ONE KING FOR LIFE', 'UN RE A VITA'])}</text>
    <text x="138" y="94" text-anchor="middle" class="sm">${l(lang, ['Expelled in 509 BCE!', 'Cacciato nel 509 a.C.!'])}</text>
    <text x="138" y="130" text-anchor="middle" class="sm">${l(lang, ['Romans feared tyranny', 'Paura eterna della tirannia'])}</text>
    ${arrow(266, 108, 326, 108, '#ffd166')}
    ${panel(336, 16, 286, 182, '#38ef7d', 'rgba(56,239,125,0.08)')}
    <text x="479" y="48" text-anchor="middle" fill="#38ef7d" font-weight="800">${l(lang, ['RES PUBLICA (SPQR)', 'REPUBBLICA (SPQR)'])}</text>
    <text x="479" y="88" text-anchor="middle" class="sm">👥 ${l(lang, ['2 Consuls · 1-year term + VETO', '2 Consoli · Carica annuale + VETO'])}</text>
    <text x="479" y="120" text-anchor="middle" class="sm">🏛️ ${l(lang, ['Senate advises laws & foreign policy', 'Senato guida finanze ed esteri'])}</text>
    <text x="479" y="152" text-anchor="middle" class="sm">🗳️ ${l(lang, ['Citizen assemblies vote laws', 'Comizi eleggono e votano'])}</text>
  `),
  hg9_cursus_honorum: lang => svg('Roman Cursus Honorum Ladder', `
    ${panel(18, 16, 604, 182, '#ffd166')}
    <text x="320" y="42" text-anchor="middle" fill="#ffd166" font-weight="800">${l(lang, ['CURSUS HONORUM · REPUBLICAN LADDER', 'CURSUS HONORUM · CARRIERA DELLE CARICHE'])}</text>
    <rect x="65" y="136" width="120" height="40" rx="6" fill="rgba(69,216,255,0.18)" stroke="#45d8ff"/>
    <text x="125" y="160" text-anchor="middle" font-size="12" font-weight="700">1. ${l(lang, ['Quaestor (Tax)', 'Questore (Conti)'])}</text>
    <rect x="200" y="110" width="120" height="40" rx="6" fill="rgba(56,239,125,0.18)" stroke="#38ef7d"/>
    <text x="260" y="134" text-anchor="middle" font-size="12" font-weight="700">2. ${l(lang, ['Aedile (City)', 'Edile (Città)'])}</text>
    <rect x="335" y="84" width="120" height="40" rx="6" fill="rgba(255,159,69,0.18)" stroke="#ff9f45"/>
    <text x="395" y="108" text-anchor="middle" font-size="12" font-weight="700">3. ${l(lang, ['Praetor (Law)', 'Pretore (Giudice)'])}</text>
    <rect x="470" y="58" width="132" height="40" rx="6" fill="rgba(255,209,102,0.28)" stroke="#ffd166"/>
    <text x="536" y="82" text-anchor="middle" font-size="12" font-weight="800">4. ${l(lang, ['Consul (2x)', 'Console (2x)'])}</text>
    <text x="415" y="164" text-anchor="middle" class="sm">${l(lang, ['Plus Plebeian Tribunes holding sacred VETO power!', 'Oltre ai Tribuni della Plebe con diritto di VETO!'])}</text>
  `),
  hg9_twelve_tables: lang => svg('Law of the Twelve Tables 450 BCE', `
    ${panel(18, 16, 604, 182, '#45d8ff')}
    <text x="320" y="44" text-anchor="middle" fill="#45d8ff" font-weight="800">${l(lang, ['450 BCE · THE TWELVE TABLES IN THE FORUM', '450 a.C. · LE DODICI TAVOLE NEL FORO'])}</text>
    ${panel(40, 68, 260, 108, '#ff9f45', 'rgba(255,159,69,0.08)')}
    <text x="170" y="98" text-anchor="middle" fill="#ff9f45" font-weight="700">${l(lang, ['BEFORE: Secret Memory', 'PRIMA: Leggi Orali Segrete'])}</text>
    <text x="170" y="130" text-anchor="middle" class="sm">${l(lang, ['Only patrician priests judged by rumor', 'Interpretazione arbitraria solo patrizia'])}</text>
    ${panel(340, 68, 260, 108, '#38ef7d', 'rgba(56,239,125,0.08)')}
    <text x="470" y="98" text-anchor="middle" fill="#38ef7d" font-weight="700">${l(lang, ['AFTER: Public Bronze Law', 'DOPO: Bronzo Pubblico per Tutti'])}</text>
    <text x="470" y="130" text-anchor="middle" class="sm">${l(lang, ['Same written rules for patricians & plebeians', 'Regole scritte uguali per patrizi e plebei'])}</text>
  `),
  hg9_punic_wars: lang => svg('Rome vs Carthage 3 Punic Wars', `
    ${panel(18, 16, 604, 182, '#ff6b8b')}
    <text x="320" y="42" text-anchor="middle" fill="#ff6b8b" font-weight="800">${l(lang, ['THE THREE PUNIC WARS (264–146 BCE)', 'LE TRE GUERRE PUNICHE (264–146 a.C.)'])}</text>
    ${panel(36, 64, 175, 114, '#45d8ff', 'rgba(69,216,255,0.08)')}
    <text x="123" y="92" text-anchor="middle" fill="#45d8ff" font-weight="700">1ª (264–241)</text>
    <text x="123" y="122" text-anchor="middle" class="sm">${l(lang, ['Sea corvus bridges;', 'Corvi navali: Roma vince'])}</text>
    <text x="123" y="144" text-anchor="middle" class="sm">${l(lang, ['Sicily 1st province', 'Sicilia, prima provincia'])}</text>
    ${panel(232, 64, 175, 114, '#ffd166', 'rgba(255,209,102,0.08)')}
    <text x="319" y="92" text-anchor="middle" fill="#ffd166" font-weight="700">2ª (218–202)</text>
    <text x="319" y="122" text-anchor="middle" class="sm">${l(lang, ['Hannibal crosses Alps;', 'Annibale valica le Alpi;'])}</text>
    <text x="319" y="144" text-anchor="middle" class="sm">${l(lang, ['Scipio wins Zama', 'Scipione vince a Zama'])}</text>
    ${panel(428, 64, 175, 114, '#ff6b8b', 'rgba(255,107,139,0.08)')}
    <text x="515" y="92" text-anchor="middle" fill="#ff6b8b" font-weight="700">3ª (149–146)</text>
    <text x="515" y="122" text-anchor="middle" class="sm">${l(lang, ['Carthage destroyed;', 'Cartagine distrutta;'])}</text>
    <text x="515" y="144" text-anchor="middle" class="sm">${l(lang, ['Mare Nostrum master', 'Padrona del Mediterraneo'])}</text>
  `)
};

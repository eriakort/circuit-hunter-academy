import type { Language } from '../types';

type Pair = [string, string];
const l = (lang: Language, p: Pair) => (lang === 'it' ? p[1] : p[0]);

const svg = (label: string, body: string, h = 215) =>
  `<svg viewBox="0 0 640 ${h}" class="dia" role="img" aria-label="${label}">${body}</svg>`;

const panel = (x: number, y: number, w: number, h: number, stroke: string, bg = 'rgba(255,255,255,0.03)') =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="${bg}" stroke="${stroke}" stroke-width="1.6"/>`;

const arrow = (x1: number, y1: number, x2: number, y2: number, col = '#ffd166') =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${col}" stroke-width="2.4" stroke-linecap="round"/><polygon points="${x2},${y2} ${x2 - 8},${y2 - 5} ${x2 - 8},${y2 + 5}" fill="${col}"/>`;

export const HIST_VISUAL_BUILDERS_10_11: Record<string, (lang: Language) => string> = {
  // ---------------- GRADE 10 HISTORY (24) ----------------
  hg10_gracchi_crisis: lang => svg('Gracchi brothers agrarian crisis', `
    ${panel(18, 16, 604, 182, '#ff6b8b')}
    <text x="320" y="42" text-anchor="middle" fill="#ff6b8b" font-weight="800">${l(lang, ['LATE REPUBLIC CRISIS & GRACCHI REFORMS (133–121 BCE)', 'CRISI REPUBBLICANA E RIFORME DEI GRACCHI'])}</text>
    ${panel(36, 66, 260, 112, '#ff9f45', 'rgba(255,159,69,0.08)')}
    <text x="166" y="94" text-anchor="middle" fill="#ff9f45" font-weight="700">${l(lang, ['Small Farmers Ruined', 'Piccoli Contadini in Crisi'])}</text>
    <text x="166" y="124" text-anchor="middle" class="sm">${l(lang, ['Years at war → lost farms to slave villas', 'Anni in guerra → terre vendute ai latifondi'])}</text>
    <text x="166" y="148" text-anchor="middle" class="sm">${l(lang, ['Crowded landless urban plebs', 'Proletariato urbano senza terre'])}</text>
    ${arrow(304, 122, 344, 122, '#ffd166')}
    ${panel(352, 66, 250, 112, '#45d8ff', 'rgba(69,216,255,0.08)')}
    <text x="477" y="94" text-anchor="middle" fill="#45d8ff" font-weight="700">${l(lang, ['Tiberius & Gaius Gracchus', 'Tiberio e Gaio Gracco'])}</text>
    <text x="477" y="124" text-anchor="middle" class="sm">${l(lang, ['Cap ager publicus & share plots', 'Limite ai latifondi e ridistribuzione'])}</text>
    <text x="477" y="148" text-anchor="middle" class="sm">${l(lang, ['+ Marius loyal paid legions (107 BCE)', '+ Esercito professionale di Mario'])}</text>
  `),
  hg10_caesar_augustus: lang => svg('Caesar to Augustus transition', `
    ${panel(18, 16, 604, 182, '#ffd166')}
    <text x="320" y="42" text-anchor="middle" fill="#ffd166" font-weight="800">${l(lang, ['CAESAR (49 BCE) → AUGUSTUS PRINCIPATE (27 BCE)', 'DA CESARE AL PRINCIPATO DI AUGUSTO'])}</text>
    ${panel(36, 66, 175, 110, '#ff6b8b', 'rgba(255,107,139,0.08)')}
    <text x="123" y="94" text-anchor="middle" fill="#ff6b8b" font-weight="700">49–44 BCE</text>
    <text x="123" y="122" text-anchor="middle" class="sm">${l(lang, ['Julius Caesar crosses', 'Cesare varca il Rubicone;'])}</text>
    <text x="123" y="144" text-anchor="middle" class="sm">${l(lang, ['Rubicon; Julian calendar', 'dittatore e riformatore'])}</text>
    ${arrow(218, 120, 240, 120, '#ffd166')}
    ${panel(246, 66, 175, 110, '#a88bff', 'rgba(168,139,255,0.08)')}
    <text x="333" y="94" text-anchor="middle" fill="#a88bff" font-weight="700">31 BCE · Actium</text>
    <text x="333" y="122" text-anchor="middle" class="sm">${l(lang, ['Octavian defeats Mark', 'Ottaviano batte Antonio'])}</text>
    <text x="333" y="144" text-anchor="middle" class="sm">${l(lang, ['Antony & Cleopatra', 'e Cleopatra ad Azio'])}</text>
    ${arrow(428, 120, 450, 120, '#38ef7d')}
    ${panel(456, 66, 148, 110, '#38ef7d', 'rgba(56,239,125,0.08)')}
    <text x="530" y="94" text-anchor="middle" fill="#38ef7d" font-weight="700">27 BCE</text>
    <text x="530" y="122" text-anchor="middle" class="sm">${l(lang, ['Augustus: kept Senate', 'Augusto: forma antica,'])}</text>
    <text x="530" y="144" text-anchor="middle" class="sm">${l(lang, ['outer shell, held army', 'ma potere imperiale'])}</text>
  `),
  hg10_pax_romana: lang => svg('Pax Romana Mediterranean trade & citizenship', `
    ${panel(18, 16, 604, 182, '#38ef7d')}
    <text x="320" y="42" text-anchor="middle" fill="#38ef7d" font-weight="800">${l(lang, ['PAX ROMANA (27 BCE – 180 CE) · 50–60M CITIZENS LINKED', 'PAX ROMANA · UN MONDO UNITO DA STRADE E DIRITTO'])}</text>
    <circle cx="320" cy="112" r="44" fill="rgba(255,209,102,0.16)" stroke="#ffd166" stroke-width="2.5"/>
    <text x="320" y="116" text-anchor="middle" fill="#ffd166" font-weight="800">ROMA</text>
    <text x="125" y="90" text-anchor="middle" class="sm">🌾 ${l(lang, ['Egypt & Africa Grain', 'Grano da Egitto e Africa'])}</text>
    <text x="125" y="138" text-anchor="middle" class="sm">🍷 ${l(lang, ['Gaul & Hispania Wine/Oil', 'Olio e vino da Gallia e Spagna'])}</text>
    <text x="515" y="90" text-anchor="middle" class="sm">📜 ${l(lang, ['212 CE Caracalla Edict', '212 d.C. Editto di Caracalla'])}</text>
    <text x="515" y="138" text-anchor="middle" class="sm">🛤️ ${l(lang, ['One coin, one sea, roads', 'Moneta unica, strade, porti'])}</text>
  `),
  hg10_empire_split: lang => svg('Diocletian & 395 CE West East Split', `
    ${panel(18, 16, 286, 182, '#ff9f45', 'rgba(255,159,69,0.08)')}
    <text x="161" y="46" text-anchor="middle" fill="#ff9f45" font-weight="800">${l(lang, ['WESTERN ROMAN EMPIRE', 'IMPERO D’OCCIDENTE'])}</text>
    <text x="161" y="84" text-anchor="middle" class="sm">🏛️ ${l(lang, ['Rome → Milan → Ravenna', 'Roma → Milano → Ravenna'])}</text>
    <text x="161" y="118" text-anchor="middle" class="sm">📉 ${l(lang, ['Tax decline & frontier raids', 'Crisi fiscale e pressione ai confini'])}</text>
    <text x="161" y="152" text-anchor="middle" fill="#ff6b8b" font-weight="700">${l(lang, ['Fell 476 CE', 'Cade nel 476 d.C.'])}</text>
    ${panel(336, 16, 286, 182, '#ffd166', 'rgba(255,209,102,0.08)')}
    <text x="479" y="46" text-anchor="middle" fill="#ffd166" font-weight="800">${l(lang, ['EASTERN EMPIRE (BYZANTIUM)', 'IMPERO D’ORIENTE (BISANZIO)'])}</text>
    <text x="479" y="84" text-anchor="middle" class="sm">🏰 ${l(lang, ['Constantinople (330 CE)', 'Costantinopoli (330 d.C.)'])}</text>
    <text x="479" y="118" text-anchor="middle" class="sm">💰 ${l(lang, ['Wealthy trade cities & fleet', 'Città ricche, commerci e flotta'])}</text>
    <text x="479" y="152" text-anchor="middle" fill="#38ef7d" font-weight="700">${l(lang, ['Survived to 1453 CE!', 'Sopravvive fino al 1453!'])}</text>
  `),
  hg10_christianity_edicts: lang => svg('313 Milan Edict vs 380 Thessalonica', `
    ${panel(18, 16, 604, 182, '#45d8ff')}
    <text x="320" y="42" text-anchor="middle" fill="#45d8ff" font-weight="800">${l(lang, ['CHRISTIANITY IN THE EMPIRE · TWO KEY DATES', 'DUE DATE CHIAVE PER IL CRISTIANESIMO'])}</text>
    ${panel(40, 68, 250, 110, '#38ef7d', 'rgba(56,239,125,0.08)')}
    <text x="165" y="96" text-anchor="middle" fill="#38ef7d" font-weight="800">313 CE · ${l(lang, ['Edict of Milan', 'Editto di Milano'])}</text>
    <text x="165" y="126" text-anchor="middle" class="sm">${l(lang, ['Constantine grants religious freedom:', 'Costantino riconosce libertà di culto:'])}</text>
    <text x="165" y="148" text-anchor="middle" class="sm">${l(lang, ['ends persecutions across Rome', 'fine delle persecuzioni'])}</text>
    ${arrow(298, 122, 342, 122, '#ffd166')}
    ${panel(350, 68, 250, 110, '#ffd166', 'rgba(255,209,102,0.08)')}
    <text x="475" y="96" text-anchor="middle" fill="#ffd166" font-weight="800">380 CE · ${l(lang, ['Thessalonica', 'Tessalonica'])}</text>
    <text x="475" y="126" text-anchor="middle" class="sm">${l(lang, ['Theodosius makes Nicene', 'Teodosio dichiara il Cristianesimo'])}</text>
    <text x="475" y="148" text-anchor="middle" class="sm">${l(lang, ['Christianity the official religion', 'religione ufficiale dell’Impero'])}</text>
  `),
  hg10_migrations_476: lang => svg('476 CE Romano-Germanic Kingdoms', `
    ${panel(18, 16, 604, 182, '#a88bff')}
    <text x="320" y="42" text-anchor="middle" fill="#a88bff" font-weight="800">${l(lang, ['476 CE · ROMULO AUGUSTOLO → ROMANO-GERMANIC FUSION', '476 d.C. · FINE DELL’IMPERO D’OCCIDENTE E FUSIONE'])}</text>
    ${panel(38, 66, 266, 110, '#ff9f45', 'rgba(255,159,69,0.08)')}
    <text x="171" y="96" text-anchor="middle" fill="#ff9f45" font-weight="700">${l(lang, ['Odoacer Deposes Romulus (476)', 'Odoacre depone Romolo Augustolo'])}</text>
    <text x="171" y="126" text-anchor="middle" class="sm">${l(lang, ['Symbolic hinge: Antiquity → Middle Ages', 'Svolta simbolica: nasce il Medioevo'])}</text>
    ${panel(336, 66, 266, 110, '#38ef7d', 'rgba(56,239,125,0.08)')}
    <text x="469" y="96" text-anchor="middle" fill="#38ef7d" font-weight="700">${l(lang, ['New Kingdoms Kept Roman Roots', 'Regni Romano-Germanici'])}</text>
    <text x="469" y="126" text-anchor="middle" class="sm">${l(lang, ['Franks, Ostrogoths (Theoderic), Visigoths', 'Franchi, Ostrogoti (Teodorico), Visigoti'])}</text>
  `),
  hg10_justinian_ravenna: lang => svg('Justinian Corpus Iuris Civilis & Ravenna', `
    ${panel(18, 16, 604, 182, '#ffd166')}
    <text x="320" y="42" text-anchor="middle" fill="#ffd166" font-weight="800">${l(lang, ['JUSTINIAN (527–565) · BYZANTIUM & RAVENNA', 'GIUSTINIANO · DIRITTO ROMANO E MOSAICI A RAVENNA'])}</text>
    ${panel(36, 64, 175, 114, '#45d8ff', 'rgba(69,216,255,0.08)')}
    <text x="123" y="94" text-anchor="middle" fill="#45d8ff" font-weight="700">⚖️ Corpus Iuris Civilis</text>
    <text x="123" y="124" text-anchor="middle" class="sm">${l(lang, ['Preserved Roman Law', 'Codificò il diritto romano'])}</text>
    <text x="123" y="146" text-anchor="middle" class="sm">${l(lang, ['for modern Europe', 'per l’Europa moderna'])}</text>
    ${panel(232, 64, 175, 114, '#ffd166', 'rgba(255,209,102,0.08)')}
    <text x="319" y="94" text-anchor="middle" fill="#ffd166" font-weight="700">⛪ ${l(lang, ['Hagia Sophia & San Vitale', 'Santa Sofia e San Vitale'])}</text>
    <text x="319" y="124" text-anchor="middle" class="sm">${l(lang, ['Gold mosaics gleaming', 'Mosaici d’oro patrimonio'])}</text>
    <text x="319" y="146" text-anchor="middle" class="sm">${l(lang, ['in Ravenna today', 'UNESCO a Ravenna'])}</text>
    ${panel(428, 64, 175, 114, '#ff6b8b', 'rgba(255,107,139,0.08)')}
    <text x="515" y="94" text-anchor="middle" fill="#ff6b8b" font-weight="700">⚔️ ${l(lang, ['Gothic War (535–553)', 'Guerra Greco-Gotica'])}</text>
    <text x="515" y="124" text-anchor="middle" class="sm">${l(lang, ['Reconquest exhausted Italy', 'Devastò l’Italia prima'])}</text>
    <text x="515" y="146" text-anchor="middle" class="sm">${l(lang, ['before 568 Lombards', 'dei Longobardi (568)'])}</text>
  `),
  hg10_lombards_italy: lang => svg('Lombard vs Byzantine divided Italy 568', `
    ${panel(18, 16, 604, 182, '#ff9f45')}
    <text x="320" y="42" text-anchor="middle" fill="#ff9f45" font-weight="800">${l(lang, ['568 CE · ITALY DIVIDED FOR CENTURIES', '568 d.C. · L’ITALIA DIVISA TRA LONGOBARDI E BIZANTINI'])}</text>
    ${panel(38, 66, 264, 112, '#ff9f45', 'rgba(255,159,69,0.08)')}
    <text x="170" y="94" text-anchor="middle" fill="#ff9f45" font-weight="700">${l(lang, ['Lombard Kingdom (Pavia)', 'Regno Longobardo (Pavia)'])}</text>
    <text x="170" y="122" text-anchor="middle" class="sm">${l(lang, ['Po Valley, Tuscany, Spoleto & Benevento', 'Nord, Toscana, ducati di Spoleto e Benevento'])}</text>
    <text x="170" y="146" text-anchor="middle" fill="#ffd166" font-size="11">${l(lang, ['643 Rothari Edict · money fines', '643 Editto di Rotari · guidrigildo'])}</text>
    ${panel(338, 66, 264, 112, '#45d8ff', 'rgba(69,216,255,0.08)')}
    <text x="470" y="94" text-anchor="middle" fill="#45d8ff" font-weight="700">${l(lang, ['Byzantine Coastal Italy', 'Domini Bizantini sulle Coste'])}</text>
    <text x="470" y="122" text-anchor="middle" class="sm">${l(lang, ['Ravenna, Rome, Venice, Naples & South', 'Ravenna, Roma, Venezia, Napoli, Sicilia'])}</text>
    <text x="470" y="146" text-anchor="middle" class="sm">${l(lang, ['Sparked regional fragmentation', 'Avviò una divisione plurisecolare'])}</text>
  `),
  hg10_monastic_ora_et_labora: lang => svg('Benedictine Monasteries Ora et Labora', `
    ${panel(18, 16, 604, 182, '#38ef7d')}
    <text x="320" y="42" text-anchor="middle" fill="#38ef7d" font-weight="800">${l(lang, ['ST. BENEDICT (529 CE) · ORA ET LABORA', 'SAN BENEDETTO · ORA ET LABORA'])}</text>
    ${panel(40, 68, 255, 108, '#ffd166', 'rgba(255,209,102,0.08)')}
    <text x="167" y="98" text-anchor="middle" fill="#ffd166" font-weight="700">📖 ${l(lang, ['SCRIPTORIUM (Preserve Books)', 'SCRIPTORIUM (Salva i Libri)'])}</text>
    <text x="167" y="128" text-anchor="middle" class="sm">${l(lang, ['Monks copied Plato, Virgil & Cicero', 'Copiavano i classici greci e latini'])}</text>
    ${panel(345, 68, 255, 108, '#38ef7d', 'rgba(56,239,125,0.08)')}
    <text x="472" y="98" text-anchor="middle" fill="#38ef7d" font-weight="700">🌾 ${l(lang, ['LABOR (Drained Forests & Aid)', 'LAVORO (Bonifiche e Ospitalità)'])}</text>
    <text x="472" y="128" text-anchor="middle" class="sm">${l(lang, ['Farms, pharmacies & traveler inns', 'Campi coltivati, erboristerie e scuole'])}</text>
  `),
  hg10_islam_timeline: lang => svg('Rise of Islam 622 CE & Golden Expansion', `
    ${panel(18, 16, 604, 182, '#38ef7d')}
    <text x="320" y="42" text-anchor="middle" fill="#38ef7d" font-weight="800">${l(lang, ['MECCA → MEDINA (622 CE HIJRA) → BAGHDAD', 'DALLA MECCA A MEDINA (EGIRA 622) A BAGHDAD'])}</text>
    ${panel(36, 66, 175, 110, '#ffd166', 'rgba(255,209,102,0.08)')}
    <text x="123" y="94" text-anchor="middle" fill="#ffd166" font-weight="700">622 CE · ${l(lang, ['Hijra', 'Egira'])}</text>
    <text x="123" y="124" text-anchor="middle" class="sm">${l(lang, ['Year 1 of Islamic calendar;', 'Anno 1 calendario islamico;'])}</text>
    <text x="123" y="146" text-anchor="middle" class="sm">${l(lang, ['Five Pillars community', 'comunità unita'])}</text>
    ${arrow(218, 120, 240, 120, '#38ef7d')}
    ${panel(246, 66, 175, 110, '#45d8ff', 'rgba(69,216,255,0.08)')}
    <text x="333" y="94" text-anchor="middle" fill="#45d8ff" font-weight="700">8th c. · ${l(lang, ['Caliphate', 'Califfato'])}</text>
    <text x="333" y="124" text-anchor="middle" class="sm">${l(lang, ['Persia to Spain (Al-Andalus);', 'Dalla Persia alla Spagna;'])}</text>
    <text x="333" y="146" text-anchor="middle" class="sm">${l(lang, ['Arabic common trade tongue', 'arabo lingua franca'])}</text>
    ${arrow(428, 120, 450, 120, '#38ef7d')}
    ${panel(456, 66, 148, 110, '#a88bff', 'rgba(168,139,255,0.08)')}
    <text x="530" y="94" text-anchor="middle" fill="#a88bff" font-weight="700">${l(lang, ['Bridge Role', 'Ponte'])}</text>
    <text x="530" y="124" text-anchor="middle" class="sm">${l(lang, ['Linked Indian, Greek', 'Unì scienza greca,'])}</text>
    <text x="530" y="146" text-anchor="middle" class="sm">${l(lang, ['& Arab scholars', 'indiana e araba'])}</text>
  `),
  hg10_baghdad_science: lang => svg('House of Wisdom Science Legacy', `
    ${panel(18, 16, 604, 182, '#45d8ff')}
    <text x="320" y="42" text-anchor="middle" fill="#45d8ff" font-weight="800">${l(lang, ['BAGHDAD HOUSE OF WISDOM · GIFTS TO EUROPE', 'CASA DELLA SAPIENZA · DONI ALL’EUROPA'])}</text>
    ${panel(36, 64, 175, 114, '#ffd166', 'rgba(255,209,102,0.08)')}
    <text x="123" y="94" text-anchor="middle" fill="#ffd166" font-weight="700">🔢 0 1 2 3 ... 9</text>
    <text x="123" y="124" text-anchor="middle" class="sm">${l(lang, ['Al-Khwarizmi: Algebra', 'Al-Khwarizmi: Algebra'])}</text>
    <text x="123" y="146" text-anchor="middle" class="sm">${l(lang, ['& Algorithm + Zero', 'e Algoritmo + Zero'])}</text>
    ${panel(232, 64, 175, 114, '#38ef7d', 'rgba(56,239,125,0.08)')}
    <text x="319" y="94" text-anchor="middle" fill="#38ef7d" font-weight="700">🩺 Avicenna (Ibn Sina)</text>
    <text x="319" y="124" text-anchor="middle" class="sm">${l(lang, ['Canon of Medicine', 'Canone della Medicina'])}</text>
    <text x="319" y="146" text-anchor="middle" class="sm">${l(lang, ['studied in Italy for 500 yrs', 'usato a Salerno e Bologna'])}</text>
    ${panel(428, 64, 175, 114, '#a88bff', 'rgba(168,139,255,0.08)')}
    <text x="515" y="94" text-anchor="middle" fill="#a88bff" font-weight="700">🔭 ${l(lang, ['Optics & Paper', 'Ottica e Carta'])}</text>
    <text x="515" y="124" text-anchor="middle" class="sm">${l(lang, ['Astrolabe, chemistry &', 'Astrolabio, alambicco,'])}</text>
    <text x="515" y="146" text-anchor="middle" class="sm">${l(lang, ['Greek manuscripts saved', 'filosofia salvata'])}</text>
  `),
  hg10_sicily_crossroads: lang => svg('Arab-Norman Palermo Cultural Crossroads', `
    ${panel(18, 16, 604, 182, '#ffd166')}
    <text x="320" y="42" text-anchor="middle" fill="#ffd166" font-weight="800">${l(lang, ['SICILY · THREE CULTURES IN ONE ISLAND', 'SICILIA ARABO-NORMANNA · CROCEVIA DI CULTURE'])}</text>
    ${panel(36, 66, 175, 110, '#38ef7d', 'rgba(56,239,125,0.08)')}
    <text x="123" y="96" text-anchor="middle" fill="#38ef7d" font-weight="700">🍋 ${l(lang, ['Arab Science & Crops', 'Agronomia e Scienza Araba'])}</text>
    <text x="123" y="126" text-anchor="middle" class="sm">${l(lang, ['Citrus, cotton, pistachios', 'Agrumi, cotone, pistacchio'])}</text>
    <text x="123" y="146" text-anchor="middle" class="sm">${l(lang, ['& qanat irrigation', 'e canali d’irrigazione'])}</text>
    ${panel(232, 66, 175, 110, '#45d8ff', 'rgba(69,216,255,0.08)')}
    <text x="319" y="96" text-anchor="middle" fill="#45d8ff" font-weight="700">🏛️ ${l(lang, ['Greek-Byzantine', 'Arte Bizantina'])}</text>
    <text x="319" y="126" text-anchor="middle" class="sm">${l(lang, ['Monreale gold mosaics', 'Mosaici d’oro di Monreale'])}</text>
    <text x="319" y="146" text-anchor="middle" class="sm">${l(lang, ['& classical learning', 'e lingua greca'])}</text>
    ${panel(428, 66, 175, 110, '#ff9f45', 'rgba(255,159,69,0.08)')}
    <text x="515" y="96" text-anchor="middle" fill="#ff9f45" font-weight="700">👑 ${l(lang, ['Latin-Norman Rule', 'Corte Normanna'])}</text>
    <text x="515" y="126" text-anchor="middle" class="sm">${l(lang, ['Palermo Palatine Chapel:', 'Cappella Palatina:'])}</text>
    <text x="515" y="146" text-anchor="middle" class="sm">${l(lang, ['Al-Idrisi world map', 'mappa di Al-Idrisi'])}</text>
  `),
  hg10_charlemagne_empire: lang => svg('Charlemagne 800 CE Empire & Missi Dominici', `
    ${panel(18, 16, 604, 182, '#ffd166')}
    <text x="320" y="42" text-anchor="middle" fill="#ffd166" font-weight="800">${l(lang, ['800 CE · CHARLEMAGNE HOLY ROMAN EMPIRE', '800 d.C. · SACRO ROMANO IMPERO DI CARLO MAGNO'])}</text>
    ${panel(40, 68, 255, 108, '#45d8ff', 'rgba(69,216,255,0.08)')}
    <text x="167" y="96" text-anchor="middle" fill="#45d8ff" font-weight="700">🗺️ ${l(lang, ['Counties & Marches + Inspectors', 'Contee, Marche e Missi Dominici'])}</text>
    <text x="167" y="126" text-anchor="middle" class="sm">${l(lang, ['Pair of lay + bishop envoys audited justice', 'Coppie laico + ecclesiastico ispezionavano le province'])}</text>
    ${panel(345, 68, 255, 108, '#38ef7d', 'rgba(56,239,125,0.08)')}
    <text x="472" y="96" text-anchor="middle" fill="#38ef7d" font-weight="700">✍️ ${l(lang, ['Carolingian Renaissance', 'Rinascita Carolingia'])}</text>
    <text x="472" y="126" text-anchor="middle" class="sm">${l(lang, ['Schola Palatina & crisp Carolingian minuscule', 'Minuscola carolina · base dei caratteri moderni!'])}</text>
  `),
  hg10_feudal_pyramid: lang => svg('Feudal Social Hierarchy Pyramid', `
    ${panel(18, 16, 604, 182, '#a88bff')}
    <text x="320" y="40" text-anchor="middle" fill="#a88bff" font-weight="800">${l(lang, ['FEUDAL CONTRACT PYRAMID', 'PIRAMIDE FEUDALE · VASSALLAGGIO'])}</text>
    <polygon points="180,52 100,178 260,178" fill="rgba(168,139,255,0.18)" stroke="#a88bff" stroke-width="2"/>
    <line x1="152" y1="96" x2="208" y2="96" stroke="#a88bff"/>
    <line x1="126" y1="138" x2="234" y2="138" stroke="#a88bff"/>
    <text x="180" y="84" text-anchor="middle" font-size="11" font-weight="700">${l(lang, ['King / Emperor', 'Re / Imperatore'])}</text>
    <text x="180" y="122" text-anchor="middle" font-size="11">${l(lang, ['Vassals / Lords', 'Vassalli / Conti'])}</text>
    <text x="180" y="164" text-anchor="middle" font-size="11">${l(lang, ['Serfs & Peasants', 'Contadini e Servi'])}</text>
    ${panel(296, 60, 306, 120, '#ffd166', 'rgba(255,209,102,0.08)')}
    <text x="449" y="88" text-anchor="middle" fill="#ffd166" font-weight="700">${l(lang, ['FIEF = LAND + PROTECTION ↔ LOYALTY', 'FEUDO = TERRA ↔ FEDELTÀ MILITARE'])}</text>
    <text x="449" y="118" text-anchor="middle" class="sm">🤝 ${l(lang, ['Lord grants land estate (benefice)', 'Il signore concede il feudo (terra)'])}</text>
    <text x="449" y="144" text-anchor="middle" class="sm">⚔️ ${l(lang, ['Vassal owes armed aid & council', 'Il vassallo giura fedeltà e servizio'])}</text>
  `),
  hg10_curtis_manor: lang => svg('Early Medieval Curtis Manor Map', `
    ${panel(18, 16, 604, 182, '#38ef7d')}
    <text x="320" y="42" text-anchor="middle" fill="#38ef7d" font-weight="800">${l(lang, ['THE CURTIS ESTATE · SELF-SUFFICIENT MANOR', 'LA CURTIS MEDIEVALE · ECONOMIA CHIUSA'])}</text>
    ${panel(38, 66, 260, 112, '#ff9f45', 'rgba(255,159,69,0.09)')}
    <text x="168" y="94" text-anchor="middle" fill="#ff9f45" font-weight="700">${l(lang, ['PARS DOMINICA (Lord’s Share)', 'PARS DOMINICA (Del Signore)'])}</text>
    <text x="168" y="124" text-anchor="middle" class="sm">${l(lang, ['Castle, mill, forge & direct fields', 'Castello, mulino, forno e terre dirette'])}</text>
    <text x="168" y="148" text-anchor="middle" class="sm">${l(lang, ['Worked free via peasant corvées', 'Coltivata dai contadini con le corvée'])}</text>
    ${panel(342, 66, 260, 112, '#45d8ff', 'rgba(69,216,255,0.09)')}
    <text x="472" y="94" text-anchor="middle" fill="#45d8ff" font-weight="700">${l(lang, ['PARS MASSARICIA (Peasant Plots)', 'PARS MASSARICIA (Mansi Contadini)'])}</text>
    <text x="472" y="124" text-anchor="middle" class="sm">${l(lang, ['Family huts + small strips to farm', 'Capanne e campi in cambio di raccolti'])}</text>
    <text x="472" y="148" text-anchor="middle" class="sm">${l(lang, ['Bound to estate (servi della gleba)', 'Legati alla terra e ai tributi locali'])}</text>
  `),
  hg10_three_field: lang => svg('Three-Field Crop Rotation After 1000', `
    ${panel(18, 16, 604, 182, '#38ef7d')}
    <text x="320" y="42" text-anchor="middle" fill="#38ef7d" font-weight="800">${l(lang, ['AFTER YEAR 1000 · THREE-FIELD ROTATION (+33% FOOD!)', 'DOPO IL MILLE · ROTAZIONE TRIENNALE'])}</text>
    ${panel(36, 66, 175, 108, '#ffd166', 'rgba(255,209,102,0.1)')}
    <text x="123" y="96" text-anchor="middle" fill="#ffd166" font-weight="800">${l(lang, ['FIELD A · Autumn', 'CAMPO A · Autunno'])}</text>
    <text x="123" y="128" text-anchor="middle" class="sm">🌾 ${l(lang, ['Winter Wheat & Rye', 'Grano e segale'])}</text>
    ${panel(232, 66, 175, 108, '#38ef7d', 'rgba(56,239,125,0.1)')}
    <text x="319" y="96" text-anchor="middle" fill="#38ef7d" font-weight="800">${l(lang, ['FIELD B · Spring', 'CAMPO B · Primavera'])}</text>
    <text x="319" y="128" text-anchor="middle" class="sm">🫛 ${l(lang, ['Peas, Beans & Oats', 'Legumi e avena (azoto!)'])}</text>
    ${panel(428, 66, 175, 108, '#9fb0c8', 'rgba(159,176,200,0.08)')}
    <text x="515" y="96" text-anchor="middle" fill="#9fb0c8" font-weight="800">${l(lang, ['FIELD C · Fallow', 'CAMPO C · Maggese'])}</text>
    <text x="515" y="128" text-anchor="middle" class="sm">🐄 ${l(lang, ['Rest & cattle graze (only 1/3)', 'Riposo e pascolo (solo 1/3!)'])}</text>
  `),
  hg10_maritime_republics: lang => svg('Four Italian Maritime Republics', `
    ${panel(18, 16, 604, 182, '#45d8ff')}
    <text x="320" y="42" text-anchor="middle" fill="#45d8ff" font-weight="800">${l(lang, ['ITALIAN MARITIME REPUBLICS · SEA INNOVATORS', 'LE REPUBBLICHE MARINARE ITALIANE'])}</text>
    ${panel(32, 64, 136, 114, '#ffd166', 'rgba(255,209,102,0.09)')}
    <text x="100" y="92" text-anchor="middle" fill="#ffd166" font-weight="800">🦁 ${l(lang, ['Venice', 'Venezia'])}</text>
    <text x="100" y="122" text-anchor="middle" class="sm">${l(lang, ['Arsenal assembly line', 'Arsenale e spezie'])}</text>
    ${panel(178, 64, 136, 114, '#ff6b8b', 'rgba(255,107,139,0.09)')}
    <text x="246" y="92" text-anchor="middle" fill="#ff6b8b" font-weight="800">⚓ ${l(lang, ['Genoa', 'Genova'])}</text>
    <text x="246" y="122" text-anchor="middle" class="sm">${l(lang, ['Bank of San Giorgio', 'Banche e rotte nord'])}</text>
    ${panel(324, 64, 136, 114, '#ff9f45', 'rgba(255,159,69,0.09)')}
    <text x="392" y="92" text-anchor="middle" fill="#ff9f45" font-weight="800">🧭 Amalfi</text>
    <text x="392" y="122" text-anchor="middle" class="sm">${l(lang, ['Amalfi Sea Code & compass', 'Tavole Amalfitane e bussola'])}</text>
    ${panel(470, 64, 136, 114, '#38ef7d', 'rgba(56,239,125,0.09)')}
    <text x="538" y="92" text-anchor="middle" fill="#38ef7d" font-weight="800">⛵ Pisa</text>
    <text x="538" y="122" text-anchor="middle" class="sm">${l(lang, ['Fibonacci & Piazza Miracoli', 'Fibonacci e scambi'])}</text>
  `),
  hg10_italian_comuni: lang => svg('Medieval Italian Comune Self-Government', `
    ${panel(18, 16, 604, 182, '#ffd166')}
    <text x="320" y="42" text-anchor="middle" fill="#ffd166" font-weight="800">${l(lang, ['MEDIEVAL ITALIAN COMUNE · CITIZEN TOWN HALL', 'IL COMUNE MEDIEVALE · AUTOGOVERNO URBANO'])}</text>
    ${panel(38, 66, 266, 110, '#38ef7d', 'rgba(56,239,125,0.08)')}
    <text x="171" y="94" text-anchor="middle" fill="#38ef7d" font-weight="700">🏛️ ${l(lang, ['Consuls → Neutral Podestà', 'Consoli → Podestà Imparziale'])}</text>
    <text x="171" y="124" text-anchor="middle" class="sm">${l(lang, ['Citizens drafted statutes, taxes & bridges', 'Statuti scritti, tasse e opere pubbliche'])}</text>
    ${panel(336, 66, 266, 110, '#45d8ff', 'rgba(69,216,255,0.08)')}
    <text x="469" y="94" text-anchor="middle" fill="#45d8ff" font-weight="700">🎓 ${l(lang, ['Guilds (Arti) & Bologna 1088', 'Corporazioni (Arti) e Università'])}</text>
    <text x="469" y="124" text-anchor="middle" class="sm">${l(lang, ['"City air makes you free" · first university', '"L’aria della città rende liberi" · Bologna 1088'])}</text>
  `),
  hg10_papacy_empire: lang => svg('Investiture Conflict Pope vs Emperor', `
    ${panel(18, 16, 266, 182, '#ffd166', 'rgba(255,209,102,0.08)')}
    <text x="151" y="46" text-anchor="middle" fill="#ffd166" font-weight="800">${l(lang, ['PAPACY (GUELPHS)', 'PAPATO (GUELFI)'])}</text>
    <text x="151" y="84" text-anchor="middle" class="sm">🔑 ${l(lang, ['Pope Gregory VII · 1075 Dictatus', 'Papa Gregorio VII · autonomia Chiesa'])}</text>
    <text x="151" y="118" text-anchor="middle" class="sm">${l(lang, ['Canossa (1077) humility show', 'Canossa 1077 · Enrico IV perdono'])}</text>
    <text x="320" y="106" text-anchor="middle" fill="#ff6b8b" font-weight="800">⚡ VS ⚡</text>
    ${panel(356, 16, 266, 182, '#45d8ff', 'rgba(69,216,255,0.08)')}
    <text x="489" y="46" text-anchor="middle" fill="#45d8ff" font-weight="800">${l(lang, ['EMPIRE (GHIBELLINES)', 'IMPERO (GHIBELLINI)'])}</text>
    <text x="489" y="84" text-anchor="middle" class="sm">👑 ${l(lang, ['Emperor appointed bishop-counts', 'Imperatore nominava vescovi-conti'])}</text>
    <text x="489" y="118" text-anchor="middle" class="sm">${l(lang, ['1122 Concordat of Worms split roles', '1122 Worms distingue pastorale e scettro'])}</text>
  `),
  hg10_lombard_league: lang => svg('Lombard League vs Barbarossa 1176', `
    ${panel(18, 16, 604, 182, '#38ef7d')}
    <text x="320" y="42" text-anchor="middle" fill="#38ef7d" font-weight="800">${l(lang, ['1167 PONTIDA → 1176 LEGNANO → 1183 PEACE OF CONSTANCE', 'LEGA LOMBARDA · LEGNANO (1176) E PACE DI COSTANZA'])}</text>
    <rect x="44" y="68" width="175" height="106" rx="10" fill="rgba(255,209,102,0.1)" stroke="#ffd166"/>
    <text x="131" y="96" text-anchor="middle" fill="#ffd166" font-weight="700">🤝 1167 · Pontida</text>
    <text x="131" y="126" text-anchor="middle" class="sm">${l(lang, ['Rival Comuni swore unity', 'Città rivali unite contro'])}</text>
    <text x="131" y="148" text-anchor="middle" class="sm">${l(lang, ['behind the Carroccio', 'Federico Barbarossa'])}</text>
    ${arrow(226, 120, 250, 120, '#38ef7d')}
    <rect x="256" y="68" width="160" height="106" rx="10" fill="rgba(56,239,125,0.1)" stroke="#38ef7d"/>
    <text x="336" y="96" text-anchor="middle" fill="#38ef7d" font-weight="700">⚔️ 1176 · Legnano</text>
    <text x="336" y="126" text-anchor="middle" class="sm">${l(lang, ['Citizen militias defeated', 'Fanteria cittadina vince'])}</text>
    <text x="336" y="148" text-anchor="middle" class="sm">${l(lang, ['Imperial cavalry', 'sui cavalieri imperiali'])}</text>
    ${arrow(422, 120, 446, 120, '#45d8ff')}
    <rect x="452" y="68" width="150" height="106" rx="10" fill="rgba(69,216,255,0.1)" stroke="#45d8ff"/>
    <text x="527" y="96" text-anchor="middle" fill="#45d8ff" font-weight="700">📜 1183 · Constance</text>
    <text x="527" y="126" text-anchor="middle" class="sm">${l(lang, ['Won self-government,', 'Autonomia comunale'])}</text>
    <text x="527" y="148" text-anchor="middle" class="sm">${l(lang, ['courts & taxes', 'e leggi riconosciute'])}</text>
  `),
  hg10_frederick2: lang => svg('Frederick II Stupor Mundi Palermo Court', `
    ${panel(18, 16, 604, 182, '#ffd166')}
    <text x="320" y="42" text-anchor="middle" fill="#ffd166" font-weight="800">${l(lang, ['FREDERICK II "STUPOR MUNDI" · PALERMO & MELFI (1231)', 'FEDERICO II · PALERMO, MELFI E SCUOLA SICILIANA'])}</text>
    ${panel(38, 66, 174, 110, '#45d8ff', 'rgba(69,216,255,0.08)')}
    <text x="125" y="96" text-anchor="middle" fill="#45d8ff" font-weight="700">📜 1231 Melfi</text>
    <text x="125" y="126" text-anchor="middle" class="sm">${l(lang, ['Unified royal law code;', 'Costituzioni di Melfi;'])}</text>
    <text x="125" y="148" text-anchor="middle" class="sm">${l(lang, ['University of Naples', 'Università di Napoli 1224'])}</text>
    ${panel(233, 66, 174, 110, '#ffd166', 'rgba(255,209,102,0.08)')}
    <text x="320" y="96" text-anchor="middle" fill="#ffd166" font-weight="700">✍️ ${l(lang, ['Sicilian School', 'Scuola Siciliana'])}</text>
    <text x="320" y="126" text-anchor="middle" class="sm">${l(lang, ['Born Italian sonnet & poetry!', 'Nasce il sonetto in italiano!'])}</text>
    ${panel(428, 66, 174, 110, '#38ef7d', 'rgba(56,239,125,0.08)')}
    <text x="515" y="96" text-anchor="middle" fill="#38ef7d" font-weight="700">🏰 Castel del Monte</text>
    <text x="515" y="126" text-anchor="middle" class="sm">${l(lang, ['Octagonal science court:', 'Corte multiculturale:'])}</text>
    <text x="515" y="148" text-anchor="middle" class="sm">${l(lang, ['Latin, Arab & Jewish scholars', 'arabi, greci, latini, ebrei'])}</text>
  `),
  hg10_1300s_crisis: lang => svg('14th Century Crisis & Black Death 1347', `
    ${panel(18, 16, 604, 182, '#ff6b8b')}
    <text x="320" y="42" text-anchor="middle" fill="#ff6b8b" font-weight="800">${l(lang, ['CRISIS OF THE 1300s · FAMINE + WAR + PLAGUE (1347–1351)', 'CRISI DEL TRECENTO · CARESTIA, GUERRE E PESTE NERA'])}</text>
    ${panel(38, 66, 260, 110, '#ff9f45', 'rgba(255,159,69,0.08)')}
    <text x="168" y="94" text-anchor="middle" fill="#ff9f45" font-weight="700">🌧️ ${l(lang, ['Little Ice Age → Hunger', 'Clima freddo e carestie'])}</text>
    <text x="168" y="124" text-anchor="middle" class="sm">${l(lang, ['Overcrowded cities weakened immunity', 'Sovraffollamento e denutrizione'])}</text>
    ${panel(342, 66, 260, 110, '#ff6b8b', 'rgba(255,107,139,0.08)')}
    <text x="472" y="94" text-anchor="middle" fill="#ff6b8b" font-weight="700">🚢 1347 · ${l(lang, ['Black Death Ships', 'Peste Nera (Messina/Genova)'])}</text>
    <text x="472" y="124" text-anchor="middle" class="sm">${l(lang, ['Yersinia pestis via trade fleas → ~1/3–1/2 lost', 'Circa 1/3 della popolazione europea colpito'])}</text>
  `),
  hg10_quarantine_recovery: lang => svg('Venice Quarantina & Post-Plague Wage Shift', `
    ${panel(18, 16, 604, 182, '#38ef7d')}
    <text x="320" y="42" text-anchor="middle" fill="#38ef7d" font-weight="800">${l(lang, ['QUARANTINE (40 DAYS) & SOCIAL RECOVERY', 'QUARANTENA A VENEZIA E CAMBIAMENTO ECONOMICO'])}</text>
    ${panel(38, 66, 260, 110, '#45d8ff', 'rgba(69,216,255,0.08)')}
    <text x="168" y="94" text-anchor="middle" fill="#45d8ff" font-weight="700">⚓ ${l(lang, ['"Quaranta Giorni" · Venice', 'Quarantena · Salute Pubblica'])}</text>
    <text x="168" y="124" text-anchor="middle" class="sm">${l(lang, ['First public health isolation rules', 'Navi isolate 40 giorni · termine ancora usato!'])}</text>
    ${panel(342, 66, 260, 110, '#38ef7d', 'rgba(56,239,125,0.08)')}
    <text x="472" y="94" text-anchor="middle" fill="#38ef7d" font-weight="700">📈 ${l(lang, ['Scarce Labor → Better Pay', 'Meno Braccia → Salari più Alti'])}</text>
    <text x="472" y="124" text-anchor="middle" class="sm">${l(lang, ['Workers won rights (Ciompi 1378)', 'Contadini più liberi e rivolte urbane'])}</text>
  `),
  hg10_comuni_to_signorie: lang => svg('Comuni to Signorie Regional States', `
    ${panel(18, 16, 240, 182, '#ff9f45', 'rgba(255,159,69,0.08)')}
    <text x="138" y="48" text-anchor="middle" fill="#ff9f45" font-weight="800">${l(lang, ['FACTIONS IN COMUNI', 'LOTTA GUELFI E GHIBELLINI'])}</text>
    <text x="138" y="96" text-anchor="middle" class="sm">${l(lang, ['Constant civil feuds drained cities', 'Scontri interni stancarono le città'])}</text>
    ${arrow(266, 108, 326, 108, '#ffd166')}
    ${panel(336, 16, 286, 182, '#ffd166', 'rgba(255,209,102,0.08)')}
    <text x="479" y="48" text-anchor="middle" fill="#ffd166" font-weight="800">${l(lang, ['SIGNORIE & 5 REGIONAL STATES', 'SIGNORIE E 5 STATI REGIONALI'])}</text>
    <text x="479" y="88" text-anchor="middle" class="sm">🏰 ${l(lang, ['Visconti/Sforza (Milan) · Medici (Florence)', 'Visconti/Sforza (Milano) · Medici (Firenze)'])}</text>
    <text x="479" y="120" text-anchor="middle" class="sm">🕊️ ${l(lang, ['1454 Peace of Lodi = 40 years peace!', '1454 Pace di Lodi: equilibrio diplomatico!'])}</text>
  `),

  // ---------------- GRADE 11 HISTORY (24) ----------------
  hg11_humanism_philology: lang => svg('Philology Text Detective', `
    ${panel(18, 16, 604, 182, '#ffd166')}
    <text x="320" y="42" text-anchor="middle" fill="#ffd166" font-weight="800">${l(lang, ['HUMANISM & PHILOLOGY · CRITICAL READING', 'UMANESIMO E FILOLOGIA · DETECTIVE DEI TESTI'])}</text>
    ${panel(40, 68, 255, 108, '#45d8ff', 'rgba(69,216,255,0.08)')}
    <text x="167" y="96" text-anchor="middle" fill="#45d8ff" font-weight="700">🔎 ${l(lang, ['Lorenzo Valla (1440)', 'Lorenzo Valla (1440)'])}</text>
    <text x="167" y="126" text-anchor="middle" class="sm">${l(lang, ['Caught wrong Latin terms proving a forged deed', 'Smascherò anacronismi nella Donazione di Costantino'])}</text>
    ${panel(345, 68, 255, 108, '#38ef7d', 'rgba(56,239,125,0.08)')}
    <text x="472" y="96" text-anchor="middle" fill="#38ef7d" font-weight="700">🏛️ ${l(lang, ['Studia Humanitatis', 'Centralità dell’Uomo'])}</text>
    <text x="472" y="126" text-anchor="middle" class="sm">${l(lang, ['Classical Greek/Latin + dignity of human reason', 'Riscoperta dei classici e fiducia nella ragione'])}</text>
  `),
  hg11_renaissance_perspective: lang => svg('Brunelleschi Linear Perspective', `
    ${panel(18, 16, 604, 182, '#45d8ff')}
    <text x="320" y="40" text-anchor="middle" fill="#45d8ff" font-weight="800">${l(lang, ['LINEAR PERSPECTIVE · GEOMETRY IN ART', 'PROSPETTIVA LINEARE · GEOMETRIA E ARTE'])}</text>
    <line x1="60" y1="108" x2="580" y2="108" stroke="rgba(255,255,255,0.28)" stroke-dasharray="5,4"/>
    <circle cx="320" cy="108" r="7" fill="#ffd166"/>
    <line x1="80" y1="184" x2="320" y2="108" stroke="#45d8ff" stroke-width="2"/>
    <line x1="560" y1="184" x2="320" y2="108" stroke="#45d8ff" stroke-width="2"/>
    <line x1="80" y1="54" x2="320" y2="108" stroke="#38ef7d" stroke-width="1.6"/>
    <line x1="560" y1="54" x2="320" y2="108" stroke="#38ef7d" stroke-width="1.6"/>
    <text x="320" y="92" text-anchor="middle" fill="#ffd166" font-weight="700">${l(lang, ['Vanishing Point (Brunelleschi)', 'Punto di Fuga'])}</text>
    <text x="320" y="176" text-anchor="middle" class="sm">${l(lang, ['Artist = Scientist · Leonardo da Vinci & Medici Florence', 'Artista-scienziato · Leonardo e Firenze dei Medici'])}</text>
  `),
  hg11_gutenberg_press: lang => svg('Gutenberg Movable Type Press 1455', `
    ${panel(18, 16, 604, 182, '#ff9f45')}
    <text x="320" y="42" text-anchor="middle" fill="#ff9f45" font-weight="800">${l(lang, ['GUTENBERG PRESS (1455) · EUROPE’S FIRST MASS MEDIUM', 'STAMPA A CARATTERI MOBILI (1455)'])}</text>
    <rect x="44" y="68" width="168" height="106" rx="10" fill="rgba(255,209,102,0.12)" stroke="#ffd166"/>
    <text x="128" y="102" text-anchor="middle" fill="#ffd166" font-size="18" font-weight="800">[ A ] [ B ] [ C ]</text>
    <text x="128" y="138" text-anchor="middle" class="sm">${l(lang, ['Reusable metal letters', 'Caratteri metallici mobili'])}</text>
    ${arrow(222, 120, 268, 120, '#38ef7d')}
    <rect x="278" y="68" width="322" height="106" rx="10" fill="rgba(56,239,125,0.08)" stroke="#38ef7d"/>
    <text x="439" y="96" text-anchor="middle" fill="#38ef7d" font-weight="700">📚 ${l(lang, ['100× Faster & Cheaper Knowledge', 'Cultura 100× Più Rapida'])}</text>
    <text x="439" y="126" text-anchor="middle" class="sm">${l(lang, ['Aldo Manuzio in Venice invented italic pocket books!', 'Aldo Manuzio a Venezia lanciò il libro tascabile in corsivo!'])}</text>
  `),
  hg11_caravel_instruments: lang => svg('Caravel Sails Astrolabe Compass', `
    ${panel(18, 16, 604, 182, '#45d8ff')}
    <text x="320" y="42" text-anchor="middle" fill="#45d8ff" font-weight="800">${l(lang, ['OCEAN TOOLKIT · CARAVEL + COMPASS + ASTROLABE', 'STRUMENTI OCEANICI · CARAVELLA, BUSSOLA E ASTROLABIO'])}</text>
    <path d="M90 150 Q150 174 210 150 L195 130 L105 130 Z" fill="#ff9f45" opacity="0.8"/>
    <rect x="132" y="64" width="36" height="62" fill="#ffd166" opacity="0.8"/>
    <polygon points="175,126 175,70 218,126" fill="#45d8ff" opacity="0.8"/>
    <text x="150" y="182" text-anchor="middle" class="sm">${l(lang, ['Square + Lateen Sails', 'Vele quadre + latine'])}</text>
    ${panel(270, 62, 332, 114, '#ffd166', 'rgba(255,209,102,0.08)')}
    <text x="436" y="92" text-anchor="middle" fill="#ffd166" font-weight="700">🧭 ${l(lang, ['Open-Ocean Navigation', 'Navigazione in Mare Aperto'])}</text>
    <text x="436" y="122" text-anchor="middle" class="sm">${l(lang, ['Compass tracks North · Astrolabe measures star latitude', 'Bussola indica il Nord · Astrolabio calcola la latitudine'])}</text>
  `),
  hg11_voyages_routes: lang => svg('1492 Columbus & 1498 Da Gama Routes', `
    ${panel(18, 16, 604, 182, '#38ef7d')}
    <text x="320" y="42" text-anchor="middle" fill="#38ef7d" font-weight="800">${l(lang, ['TWO ATLANTIC HIGHWAYS (1492–1522)', 'DUE GRANDI ROTTE OCEANICHE'])}</text>
    ${panel(36, 64, 175, 114, '#ffd166', 'rgba(255,209,102,0.08)')}
    <text x="123" y="92" text-anchor="middle" fill="#ffd166" font-weight="700">1492 · ${l(lang, ['Columbus', 'Colombo'])}</text>
    <text x="123" y="122" text-anchor="middle" class="sm">${l(lang, ['Sailed West across Atlantic', 'Verso Ovest nell’Atlantico'])}</text>
    <text x="123" y="144" text-anchor="middle" class="sm">${l(lang, ['Reached the Americas', 'Raggiunse le Americhe'])}</text>
    ${panel(232, 64, 175, 114, '#45d8ff', 'rgba(69,216,255,0.08)')}
    <text x="319" y="92" text-anchor="middle" fill="#45d8ff" font-weight="700">1498 · Da Gama</text>
    <text x="319" y="122" text-anchor="middle" class="sm">${l(lang, ['Rounded Cape Good Hope', 'Doppiò l’Africa del Sud'])}</text>
    <text x="319" y="144" text-anchor="middle" class="sm">${l(lang, ['Direct sea trade to India', 'Rotta marittima per l’India'])}</text>
    ${panel(428, 64, 175, 114, '#a88bff', 'rgba(168,139,255,0.08)')}
    <text x="515" y="92" text-anchor="middle" fill="#a88bff" font-weight="700">1519 · ${l(lang, ['Magellan', 'Magellano'])}</text>
    <text x="515" y="122" text-anchor="middle" class="sm">${l(lang, ['First circumnavigation', 'Prima circumnavigazione'])}</text>
    <text x="515" y="144" text-anchor="middle" class="sm">${l(lang, ['Pigafetta journal!', 'diario di Pigafetta!'])}</text>
  `),
  hg11_columbian_exchange: lang => svg('Columbian Exchange Two-Way Flow', `
    ${panel(18, 16, 264, 182, '#ff6b8b', 'rgba(255,107,139,0.08)')}
    <text x="150" y="46" text-anchor="middle" fill="#ff6b8b" font-weight="800">${l(lang, ['AMERICAS → EUROPE', 'AMERICHE → EUROPA'])}</text>
    <text x="150" y="88" text-anchor="middle" class="sm">🍅 ${l(lang, ['Tomato, Potato, Corn', 'Pomodoro, Patata, Mais'])}</text>
    <text x="150" y="120" text-anchor="middle" class="sm">🍫 ${l(lang, ['Cacao, Vanilla, Squash', 'Cacao, Vaniglia, Zucca'])}</text>
    <text x="150" y="152" text-anchor="middle" fill="#ffd166" font-size="11">${l(lang, ['Changed global food!', 'Rivoluzionò la cucina!'])}</text>
    <text x="320" y="112" text-anchor="middle" fill="#ffd166" font-size="22" font-weight="800">⇄</text>
    ${panel(358, 16, 264, 182, '#45d8ff', 'rgba(69,216,255,0.08)')}
    <text x="490" y="46" text-anchor="middle" fill="#45d8ff" font-weight="800">${l(lang, ['EUROPE/AFRICA → AMERICAS', 'EUROPA → AMERICHE'])}</text>
    <text x="490" y="88" text-anchor="middle" class="sm">🐎 ${l(lang, ['Horses, Cattle, Wheat, Coffee', 'Cavalli, Bovini, Grano, Caffè'])}</text>
    <text x="490" y="120" text-anchor="middle" class="sm">⚠️ ${l(lang, ['Epidemics decimated Natives', 'Epidemie decimarono i nativi'])}</text>
    <text x="490" y="152" text-anchor="middle" fill="#ff6b8b" font-size="11">${l(lang, ['+ Forced Atlantic slave trade', '+ Tratta atlantica degli schiavi'])}</text>
  `),
  hg11_luther_95_theses: lang => svg('Luther 95 Theses 1517 Core Ideas', `
    ${panel(18, 16, 604, 182, '#a88bff')}
    <text x="320" y="42" text-anchor="middle" fill="#a88bff" font-weight="800">${l(lang, ['1517 · MARTIN LUTHER & THE 95 THESES', '1517 · MARTIN LUTERO E LE 95 TESI'])}</text>
    ${panel(38, 66, 260, 110, '#ff6b8b', 'rgba(255,107,139,0.08)')}
    <text x="168" y="96" text-anchor="middle" fill="#ff6b8b" font-weight="700">${l(lang, ['Rejected Paid Indulgences', 'No alle Indulgenze a Pagamento'])}</text>
    <text x="168" y="126" text-anchor="middle" class="sm">${l(lang, ['Forgiveness cannot be sold with silver coins', 'La salvezza non si compra col denaro'])}</text>
    ${panel(342, 66, 260, 110, '#38ef7d', 'rgba(56,239,125,0.08)')}
    <text x="472" y="96" text-anchor="middle" fill="#38ef7d" font-weight="700">${l(lang, ['Sola Fide & Sola Scriptura', 'Sola Fede e Bibbia in Tedesco'])}</text>
    <text x="472" y="126" text-anchor="middle" class="sm">${l(lang, ['Everyone reads Scripture directly via print', 'Tutti leggono la Scrittura grazie alla stampa'])}</text>
  `),
  hg11_europe_confessions: lang => svg('European Reformation Branches & Augsburg 1555', `
    ${panel(18, 16, 604, 182, '#45d8ff')}
    <text x="320" y="42" text-anchor="middle" fill="#45d8ff" font-weight="800">${l(lang, ['EUROPE’S CONFESSIONAL SPLIT & 1555 AUGSBURG', 'EUROPA DIVISA E PACE DI AUGUSTA (1555)'])}</text>
    ${panel(36, 64, 175, 114, '#ffd166', 'rgba(255,209,102,0.08)')}
    <text x="123" y="92" text-anchor="middle" fill="#ffd166" font-weight="700">${l(lang, ['Lutheran', 'Luterani'])}</text>
    <text x="123" y="124" text-anchor="middle" class="sm">${l(lang, ['N. Germany & Scandinavia', 'Germania Nord e Nord Europa'])}</text>
    ${panel(232, 64, 175, 114, '#38ef7d', 'rgba(56,239,125,0.08)')}
    <text x="319" y="92" text-anchor="middle" fill="#38ef7d" font-weight="700">${l(lang, ['Calvinist', 'Calvinisti'])}</text>
    <text x="319" y="124" text-anchor="middle" class="sm">${l(lang, ['Geneva, Holland & Scotland', 'Ginevra, Olanda, Scozia'])}</text>
    ${panel(428, 64, 175, 114, '#ff9f45', 'rgba(255,159,69,0.08)')}
    <text x="515" y="92" text-anchor="middle" fill="#ff9f45" font-weight="700">${l(lang, ['1555 Augsburg', '1555 Augusta'])}</text>
    <text x="515" y="124" text-anchor="middle" class="sm">${l(lang, ['Ruler sets local faith', 'Cuius regio, eius religio'])}</text>
  `),
  hg11_council_of_trent: lang => svg('Council of Trent 1545-1563', `
    ${panel(18, 16, 604, 182, '#ffd166')}
    <text x="320" y="42" text-anchor="middle" fill="#ffd166" font-weight="800">${l(lang, ['COUNCIL OF TRENT (1545–1563) · DUAL RESPONSE', 'CONCILIO DI TRENTO (1545–1563)'])}</text>
    ${panel(38, 66, 260, 110, '#38ef7d', 'rgba(56,239,125,0.08)')}
    <text x="168" y="94" text-anchor="middle" fill="#38ef7d" font-weight="700">${l(lang, ['INTERNAL REFORM', 'RIFORMA CATTOLICA'])}</text>
    <text x="168" y="126" text-anchor="middle" class="sm">${l(lang, ['Ended paid indulgences; created seminaries', 'Stop abusi; seminari per formare il clero'])}</text>
    ${panel(342, 66, 260, 110, '#ff6b8b', 'rgba(255,107,139,0.08)')}
    <text x="472" y="94" text-anchor="middle" fill="#ff6b8b" font-weight="700">${l(lang, ['COUNTER-REFORMATION', 'CONTRORIFORMA'])}</text>
    <text x="472" y="126" text-anchor="middle" class="sm">${l(lang, ['Kept 7 sacraments · Index of Books · Inquisition', '7 sacramenti, Indice dei Libri e Inquisizione'])}</text>
  `),
  hg11_galileo_method: lang => svg('Galileo Scientific Method Cycle', `
    ${panel(18, 16, 604, 182, '#45d8ff')}
    <text x="320" y="42" text-anchor="middle" fill="#45d8ff" font-weight="800">${l(lang, ['GALILEO’S EXPERIMENTAL SCIENTIFIC METHOD', 'IL METODO SPERIMENTALE DI GALILEO'])}</text>
    <rect x="34" y="76" width="122" height="72" rx="10" fill="rgba(69,216,255,0.12)" stroke="#45d8ff"/>
    <text x="95" y="106" text-anchor="middle" font-size="12" font-weight="700">1. ${l(lang, ['Observe', 'Osserva'])}</text>
    <text x="95" y="128" text-anchor="middle" class="sm">${l(lang, ['Data & sky', 'Fenomeni reali'])}</text>
    ${arrow(162, 112, 182, 112, '#ffd166')}
    <rect x="188" y="76" width="122" height="72" rx="10" fill="rgba(255,209,102,0.12)" stroke="#ffd166"/>
    <text x="249" y="106" text-anchor="middle" font-size="12" font-weight="700">2. ${l(lang, ['Math Hypothesis', 'Ipotesi Mat.'])}</text>
    <text x="249" y="128" text-anchor="middle" class="sm">${l(lang, ['Predict relation', 'Modello matematico'])}</text>
    ${arrow(316, 112, 336, 112, '#ffd166')}
    <rect x="342" y="76" width="122" height="72" rx="10" fill="rgba(56,239,125,0.12)" stroke="#38ef7d"/>
    <text x="403" y="106" text-anchor="middle" font-size="12" font-weight="700">3. ${l(lang, ['Test', 'Esperimento'])}</text>
    <text x="403" y="128" text-anchor="middle" class="sm">${l(lang, ['Repeat & measure', 'Prove controllate'])}</text>
    ${arrow(470, 112, 490, 112, '#ffd166')}
    <rect x="496" y="76" width="112" height="72" rx="10" fill="rgba(168,139,255,0.12)" stroke="#a88bff"/>
    <text x="552" y="106" text-anchor="middle" font-size="12" font-weight="700">4. ${l(lang, ['Natural Law', 'Legge'])}</text>
    <text x="552" y="128" text-anchor="middle" class="sm">${l(lang, ['Published openly', 'Verificabile'])}</text>
  `),
  hg11_absolutism_versailles: lang => svg('Louis XIV Absolutism at Versailles', `
    ${panel(18, 16, 604, 182, '#ffd166')}
    <text x="320" y="42" text-anchor="middle" fill="#ffd166" font-weight="800">${l(lang, ['FRENCH ABSOLUTISM · LOUIS XIV AT VERSAILLES', 'ASSOLUTISMO DI LUIGI XIV A VERSAILLES'])}</text>
    <circle cx="320" cy="112" r="36" fill="rgba(255,209,102,0.22)" stroke="#ffd166" stroke-width="2.5"/>
    <text x="320" y="116" text-anchor="middle" fill="#ffd166" font-weight="800">👑 ${l(lang, ['KING', 'RE'])}</text>
    <text x="125" y="92" text-anchor="middle" class="sm">🏛️ ${l(lang, ['Makes Law & Taxes Alone', 'Fa Leggi e Impone Tasse'])}</text>
    <text x="125" y="138" text-anchor="middle" class="sm">📋 ${l(lang, ['Intendants bypass nobles', 'Intendenti obbediscono al Re'])}</text>
    <text x="515" y="92" text-anchor="middle" class="sm">🎭 ${l(lang, ['Nobles busy at Court luxury', 'Nobili occupati dall’etichetta'])}</text>
    <text x="515" y="138" text-anchor="middle" class="sm">⚔️ ${l(lang, ['Standing Royal Army', 'Esercito permanente fedele'])}</text>
  `),
  hg11_bill_of_rights: lang => svg('1689 English Constitutional Monarchy', `
    ${panel(18, 16, 604, 182, '#38ef7d')}
    <text x="320" y="42" text-anchor="middle" fill="#38ef7d" font-weight="800">${l(lang, ['1689 ENGLISH BILL OF RIGHTS · PARLIAMENT ABOVE CROWN', '1689 BILL OF RIGHTS · MONARCHIA COSTITUZIONALE'])}</text>
    ${panel(40, 68, 255, 108, '#45d8ff', 'rgba(69,216,255,0.08)')}
    <text x="167" y="96" text-anchor="middle" fill="#45d8ff" font-weight="700">🏛️ ${l(lang, ['Elected Parliament Rules', 'Parlamento Sovrano'])}</text>
    <text x="167" y="126" text-anchor="middle" class="sm">${l(lang, ['Approves taxes, army & open debate', 'Approva tasse, leggi e libertà di parola'])}</text>
    ${panel(345, 68, 255, 108, '#ffd166', 'rgba(255,209,102,0.08)')}
    <text x="472" y="96" text-anchor="middle" fill="#ffd166" font-weight="700">👑 ${l(lang, ['King Bound by Written Law', 'Re Vincolato alla Legge'])}</text>
    <text x="472" y="126" text-anchor="middle" class="sm">${l(lang, ['Cannot suspend laws or arrest arbitrarily', 'Stop ad arresti o imposte arbitrarie'])}</text>
  `),
  hg11_montesquieu_powers: lang => svg('Montesquieu Separation of Powers Triangle', `
    ${panel(18, 16, 604, 182, '#ffd166')}
    <text x="320" y="40" text-anchor="middle" fill="#ffd166" font-weight="800">${l(lang, ['MONTESQUIEU · SEPARATION OF POWERS (1748)', 'MONTESQUIEU · SEPARAZIONE DEI POTERI'])}</text>
    ${panel(215, 52, 210, 44, '#45d8ff', 'rgba(69,216,255,0.12)')}
    <text x="320" y="79" text-anchor="middle" fill="#45d8ff" font-weight="800">${l(lang, ['LEGISLATIVE · Writes Laws', 'LEGISLATIVO · Fa le Leggi'])}</text>
    ${panel(40, 128, 235, 52, '#38ef7d', 'rgba(56,239,125,0.12)')}
    <text x="157" y="159" text-anchor="middle" fill="#38ef7d" font-weight="800">${l(lang, ['EXECUTIVE · Governs', 'ESECUTIVO · Governa'])}</text>
    ${panel(365, 128, 235, 52, '#a88bff', 'rgba(168,139,255,0.12)')}
    <text x="482" y="159" text-anchor="middle" fill="#a88bff" font-weight="800">${l(lang, ['JUDICIAL · Fair Courts', 'GIUDIZIARIO · Giudica'])}</text>
    <line x1="250" y1="98" x2="180" y2="126" stroke="#ffd166" stroke-width="2"/>
    <line x1="390" y1="98" x2="460" y2="126" stroke="#ffd166" stroke-width="2"/>
    <line x1="278" y1="154" x2="362" y2="154" stroke="#ffd166" stroke-width="2"/>
  `),
  hg11_encyclopedie_ideas: lang => svg('Enlightenment Thinkers & Encyclopedie', `
    ${panel(18, 16, 604, 182, '#45d8ff')}
    <text x="320" y="42" text-anchor="middle" fill="#45d8ff" font-weight="800">${l(lang, ['AGE OF ENLIGHTENMENT · LIGHT OF REASON', 'ILLUMINISMO · LA RAGIONE APERTA A TUTTI'])}</text>
    ${panel(36, 64, 175, 114, '#ffd166', 'rgba(255,209,102,0.08)')}
    <text x="123" y="92" text-anchor="middle" fill="#ffd166" font-weight="700">🕯️ Voltaire</text>
    <text x="123" y="124" text-anchor="middle" class="sm">${l(lang, ['Free speech & tolerance', 'Tolleranza e libertà'])}</text>
    ${panel(232, 64, 175, 114, '#38ef7d', 'rgba(56,239,125,0.08)')}
    <text x="319" y="92" text-anchor="middle" fill="#38ef7d" font-weight="700">📜 Rousseau</text>
    <text x="319" y="124" text-anchor="middle" class="sm">${l(lang, ['Social contract & citizens', 'Sovranità popolare'])}</text>
    ${panel(428, 64, 175, 114, '#a88bff', 'rgba(168,139,255,0.08)')}
    <text x="515" y="92" text-anchor="middle" fill="#a88bff" font-weight="700">📚 Encyclopédie</text>
    <text x="515" y="124" text-anchor="middle" class="sm">${l(lang, ['Science + artisan crafts', 'Scienza e arti meccaniche'])}</text>
  `),
  hg11_beccaria_justice: lang => svg('Cesare Beccaria & 1786 Tuscany Milestone', `
    ${panel(18, 16, 604, 182, '#38ef7d')}
    <text x="320" y="42" text-anchor="middle" fill="#38ef7d" font-weight="800">${l(lang, ['CESARE BECCARIA (1764) → TUSCANY ABOLISHES DEATH PENALTY (1786)', 'CESARE BECCARIA · DEI DELITTI E DELLE PENE'])}</text>
    ${panel(38, 66, 260, 110, '#ff6b8b', 'rgba(255,107,139,0.08)')}
    <text x="168" y="94" text-anchor="middle" fill="#ff6b8b" font-weight="700">✕ ${l(lang, ['Torture & Vengeance', 'Tortura e Pena di Morte'])}</text>
    <text x="168" y="126" text-anchor="middle" class="sm">${l(lang, ['Force innocent suspects into false confessions', 'Estorcono false confessioni e non prevengono'])}</text>
    ${arrow(304, 120, 336, 120, '#38ef7d')}
    ${panel(344, 66, 258, 110, '#38ef7d', 'rgba(56,239,125,0.08)')}
    <text x="473" y="94" text-anchor="middle" fill="#38ef7d" font-weight="700">✓ ${l(lang, ['Certain, Humane Law', 'Pena Certa e Proporzionata'])}</text>
    <text x="473" y="126" text-anchor="middle" class="sm">${l(lang, ['1786 Tuscany: world’s 1st modern abolition!', '1786 Toscana: primo Stato al mondo senza patibolo!'])}</text>
  `),
  hg11_watt_steam_engine: lang => svg('James Watt Coal Steam Engine 1769', `
    ${panel(18, 16, 604, 182, '#ff9f45')}
    <text x="320" y="42" text-anchor="middle" fill="#ff9f45" font-weight="800">${l(lang, ['JAMES WATT STEAM ENGINE (1769) · UNLIMITED POWER', 'MACCHINA A VAPORE DI WATT (1769)'])}</text>
    <rect x="52" y="126" width="110" height="44" rx="8" fill="rgba(255,107,139,0.28)" stroke="#ff6b8b"/>
    <text x="107" y="152" text-anchor="middle" fill="#ff6b8b" font-weight="700">🔥 ${l(lang, ['Coal Boiler', 'Caldaia Carbone'])}</text>
    ${arrow(168, 140, 212, 110, '#45d8ff')}
    <rect x="218" y="80" width="90" height="72" rx="8" fill="rgba(69,216,255,0.16)" stroke="#45d8ff"/>
    <text x="263" y="114" text-anchor="middle" fill="#45d8ff" font-weight="700">${l(lang, ['Steam', 'Vapore'])}</text>
    <text x="263" y="134" text-anchor="middle" class="sm">${l(lang, ['Piston ↑↓', 'Pistone ↑↓'])}</text>
    ${arrow(314, 116, 358, 116, '#ffd166')}
    <circle cx="404" cy="116" r="34" fill="rgba(255,209,102,0.16)" stroke="#ffd166" stroke-width="3"/>
    <text x="404" y="120" text-anchor="middle" fill="#ffd166" font-weight="800">⚙️ ${l(lang, ['Wheel', 'Ruota'])}</text>
    <text x="530" y="96" text-anchor="middle" class="sm">🏭 ${l(lang, ['Works 24/7 anywhere!', 'Ovunque, non solo ai fiumi!'])}</text>
    <text x="530" y="128" text-anchor="middle" class="sm">🚂 ${l(lang, ['Factories, ships & trains', 'Fabbriche, navi, treni'])}</text>
  `),
  hg11_factory_textiles: lang => svg('Why Industrial Revolution Started in Britain', `
    ${panel(18, 16, 604, 182, '#ffd166')}
    <text x="320" y="42" text-anchor="middle" fill="#ffd166" font-weight="800">${l(lang, ['BRITAIN’S INDUSTRIAL RECIPE (1760–1830)', 'PERCHÉ PARTÌ IN GRAN BRETAGNA'])}</text>
    ${panel(36, 64, 175, 114, '#ff9f45', 'rgba(255,159,69,0.08)')}
    <text x="123" y="92" text-anchor="middle" fill="#ff9f45" font-weight="700">⛏️ ${l(lang, ['Coal & Iron', 'Carbone e Ferro'])}</text>
    <text x="123" y="124" text-anchor="middle" class="sm">${l(lang, ['Abundant deposits near ports', 'Giacimenti vicini a porti'])}</text>
    ${panel(232, 64, 175, 114, '#45d8ff', 'rgba(69,216,255,0.08)')}
    <text x="319" y="92" text-anchor="middle" fill="#45d8ff" font-weight="700">🧵 ${l(lang, ['Cotton Looms', 'Telai del Cotone'])}</text>
    <text x="319" y="124" text-anchor="middle" class="sm">${l(lang, ['Manchester mechanization', 'Produzione moltiplicata'])}</text>
    ${panel(428, 64, 175, 114, '#38ef7d', 'rgba(56,239,125,0.08)')}
    <text x="515" y="92" text-anchor="middle" fill="#38ef7d" font-weight="700">🌾 ${l(lang, ['Enclosures & Capital', 'Campi e Capitali'])}</text>
    <text x="515" y="124" text-anchor="middle" class="sm">${l(lang, ['Labor moved to factory cities', 'Manodopera in città'])}</text>
  `),
  hg11_industrial_society: lang => svg('Railways & Factory Workers Conditions', `
    ${panel(18, 16, 604, 182, '#45d8ff')}
    <text x="320" y="42" text-anchor="middle" fill="#45d8ff" font-weight="800">${l(lang, ['RAILWAYS SHRANK SPACE · WORKERS FOUGHT FOR RIGHTS', 'FERROVIE E QUESTIONE OPERAIA'])}</text>
    ${panel(38, 66, 260, 110, '#38ef7d', 'rgba(56,239,125,0.08)')}
    <text x="168" y="94" text-anchor="middle" fill="#38ef7d" font-weight="700">🚂 1829–1830 · ${l(lang, ['Steam Rail', 'Ferrovie a Vapore'])}</text>
    <text x="168" y="126" text-anchor="middle" class="sm">${l(lang, ['Liverpool–Manchester linked towns rapidly', 'Tempi e costi di trasporto crollati'])}</text>
    ${panel(342, 66, 260, 110, '#ff6b8b', 'rgba(255,107,139,0.08)')}
    <text x="472" y="94" text-anchor="middle" fill="#ff6b8b" font-weight="700">⚒️ ${l(lang, ['14h Shifts → Trade Unions', 'Turni di 14 Ore → Sindacati'])}</text>
    <text x="472" y="126" text-anchor="middle" class="sm">${l(lang, ['Unions fought for child bans & fair hours', 'Lotte per limitare orari e lavoro minorile'])}</text>
  `),
  hg11_american_revolution: lang => svg('1776 US Declaration & 1787 Constitution', `
    ${panel(18, 16, 604, 182, '#45d8ff')}
    <text x="320" y="42" text-anchor="middle" fill="#45d8ff" font-weight="800">${l(lang, ['1776 AMERICAN REVOLUTION · ENLIGHTENMENT IN ACTION', '1776 RIVOLUZIONE AMERICANA · DIRITTI CONCRETI'])}</text>
    ${panel(38, 66, 260, 110, '#ffd166', 'rgba(255,209,102,0.08)')}
    <text x="168" y="94" text-anchor="middle" fill="#ffd166" font-weight="700">📜 July 4, 1776</text>
    <text x="168" y="126" text-anchor="middle" class="sm">${l(lang, ['"No taxation without representation" · equal rights', 'Niente tasse senza voto · diritto alla felicità'])}</text>
    ${panel(342, 66, 260, 110, '#38ef7d', 'rgba(56,239,125,0.08)')}
    <text x="472" y="94" text-anchor="middle" fill="#38ef7d" font-weight="700">🏛️ 1787 Federal Republic</text>
    <text x="472" y="126" text-anchor="middle" class="sm">${l(lang, ['President, Congress & Supreme Court balance', 'Prima repubblica federale a poteri separati'])}</text>
  `),
  hg11_french_1789: lang => svg('1789 French Three Estates & Bastille', `
    ${panel(18, 16, 604, 182, '#ff6b8b')}
    <text x="320" y="42" text-anchor="middle" fill="#ff6b8b" font-weight="800">${l(lang, ['1789 · END OF FEUDAL PRIVILEGES & RIGHTS OF MAN', '1789 · PRESA DELLA BASTIGLIA E DIRITTI DEL CITTADINO'])}</text>
    ${panel(36, 66, 175, 110, '#ff9f45', 'rgba(255,159,69,0.08)')}
    <text x="123" y="94" text-anchor="middle" fill="#ff9f45" font-weight="700">1° & 2° (2%)</text>
    <text x="123" y="124" text-anchor="middle" class="sm">${l(lang, ['Clergy & Nobility', 'Clero e Nobiltà'])}</text>
    <text x="123" y="146" text-anchor="middle" class="sm">${l(lang, ['Tax-exempt privilege!', 'Esenti dalle tasse!'])}</text>
    ${panel(232, 66, 175, 110, '#ffd166', 'rgba(255,209,102,0.08)')}
    <text x="319" y="94" text-anchor="middle" fill="#ffd166" font-weight="700">3° Estate (98%)</text>
    <text x="319" y="124" text-anchor="middle" class="sm">${l(lang, ['Paid ALL taxes →', 'Pagava TUTTE le tasse →'])}</text>
    <text x="319" y="146" text-anchor="middle" class="sm">${l(lang, ['14 July Bastille!', '14 Luglio Bastiglia!'])}</text>
    ${panel(428, 66, 175, 110, '#38ef7d', 'rgba(56,239,125,0.08)')}
    <text x="515" y="94" text-anchor="middle" fill="#38ef7d" font-weight="700">Aug 1789 Law</text>
    <text x="515" y="124" text-anchor="middle" class="sm">${l(lang, ['All citizens equal', 'Tutti i cittadini uguali'])}</text>
    <text x="515" y="146" text-anchor="middle" class="sm">${l(lang, ['before public law', 'davanti alla legge'])}</text>
  `),
  hg11_napoleon_code: lang => svg('Napoleon 1804 Civil Code Legacy', `
    ${panel(18, 16, 604, 182, '#a88bff')}
    <text x="320" y="42" text-anchor="middle" fill="#a88bff" font-weight="800">${l(lang, ['NAPOLEON (1799–1815) · THE 1804 CIVIL CODE', 'NAPOLEONE · IL CODICE CIVILE DEL 1804'])}</text>
    ${panel(38, 66, 260, 110, '#45d8ff', 'rgba(69,216,255,0.08)')}
    <text x="168" y="94" text-anchor="middle" fill="#45d8ff" font-weight="700">⚖️ ${l(lang, ['Legal Equality & Property', 'Uguaglianza Giuridica'])}</text>
    <text x="168" y="126" text-anchor="middle" class="sm">${l(lang, ['Buried noble feudal birth rights permanently', 'Fine dei privilegi feudali di nascita e diritto moderno'])}</text>
    ${panel(342, 66, 260, 110, '#ffd166', 'rgba(255,209,102,0.08)')}
    <text x="472" y="94" text-anchor="middle" fill="#ffd166" font-weight="700">🇮🇹 ${l(lang, ['Sparked National Awakening', 'Risvegliò l’Idea Italiana'])}</text>
    <text x="472" y="126" text-anchor="middle" class="sm">${l(lang, ['Brought Tricolore (1797) & unified modern codes', 'Portò il Tricolore (1797) e riforme amministrative'])}</text>
  `),
  hg11_divided_italy_1815: lang => svg('Divided Italy After 1815 Vienna Congress', `
    ${panel(18, 16, 604, 182, '#ff6b8b')}
    <text x="320" y="42" text-anchor="middle" fill="#ff6b8b" font-weight="800">${l(lang, ['1815 CONGRESS OF VIENNA · DIVIDED ITALY', '1815 CONGRESSO DI VIENNA · SETTE STATI DIVISI'])}</text>
    ${panel(36, 64, 175, 114, '#45d8ff', 'rgba(69,216,255,0.08)')}
    <text x="123" y="92" text-anchor="middle" fill="#45d8ff" font-weight="700">${l(lang, ['North', 'Nord'])}</text>
    <text x="123" y="122" text-anchor="middle" class="sm">${l(lang, ['Sardinia-Piedmont +', 'Regno di Sardegna +'])}</text>
    <text x="123" y="144" text-anchor="middle" class="sm">${l(lang, ['Austrian Lombardy-Veneto', 'Lombardo-Veneto austriaco'])}</text>
    ${panel(232, 64, 175, 114, '#ffd166', 'rgba(255,209,102,0.08)')}
    <text x="319" y="92" text-anchor="middle" fill="#ffd166" font-weight="700">${l(lang, ['Center', 'Centro'])}</text>
    <text x="319" y="122" text-anchor="middle" class="sm">${l(lang, ['Tuscany, Duchies &', 'Toscana, Ducati e'])}</text>
    <text x="319" y="144" text-anchor="middle" class="sm">${l(lang, ['Papal States (Rome)', 'Stato della Chiesa'])}</text>
    ${panel(428, 64, 175, 114, '#ff9f45', 'rgba(255,159,69,0.08)')}
    <text x="515" y="92" text-anchor="middle" fill="#ff9f45" font-weight="700">${l(lang, ['South', 'Sud'])}</text>
    <text x="515" y="122" text-anchor="middle" class="sm">${l(lang, ['Bourbon Kingdom of', 'Regno delle Due Sicilie'])}</text>
    <text x="515" y="144" text-anchor="middle" class="sm">${l(lang, ['Two Sicilies (Naples)', '(Borbone a Napoli)'])}</text>
  `),
  hg11_risorgimento_leaders: lang => svg('Mazzini Cavour Garibaldi Synthesis', `
    ${panel(18, 16, 604, 182, '#38ef7d')}
    <text x="320" y="42" text-anchor="middle" fill="#38ef7d" font-weight="800">${l(lang, ['THREE ARCHITECTS OF ITALIAN UNITY', 'I PROTAGONISTI DEL RISORGIMENTO'])}</text>
    ${panel(36, 64, 175, 114, '#45d8ff', 'rgba(69,216,255,0.08)')}
    <text x="123" y="92" text-anchor="middle" fill="#45d8ff" font-weight="700">💡 Giuseppe Mazzini</text>
    <text x="123" y="122" text-anchor="middle" class="sm">${l(lang, ['1831 Giovine Italia:', '1831 Giovine Italia:'])}</text>
    <text x="123" y="144" text-anchor="middle" class="sm">${l(lang, ['National soul & republic', 'ideale di nazione libera'])}</text>
    ${panel(232, 64, 175, 114, '#ffd166', 'rgba(255,209,102,0.08)')}
    <text x="319" y="92" text-anchor="middle" fill="#ffd166" font-weight="700">🤝 Camillo Cavour</text>
    <text x="319" y="122" text-anchor="middle" class="sm">${l(lang, ['Piedmont rail, banks &', 'Diplomazia, ferrovie e'])}</text>
    <text x="319" y="144" text-anchor="middle" class="sm">${l(lang, ['1859 French alliance', 'alleanza 1859 con Francia'])}</text>
    ${panel(428, 64, 175, 114, '#ff6b8b', 'rgba(255,107,139,0.08)')}
    <text x="515" y="92" text-anchor="middle" fill="#ff6b8b" font-weight="700">🚢 Giuseppe Garibaldi</text>
    <text x="515" y="122" text-anchor="middle" class="sm">${l(lang, ['1860 The Thousand (I Mille)', '1860 Spedizione dei Mille'])}</text>
    <text x="515" y="144" text-anchor="middle" class="sm">${l(lang, ['liberated Sicily & Naples', 'liberò Sicilia e Sud'])}</text>
  `),
  hg11_unification_timeline_1861: lang => svg('Italian Unification Timeline 1848 to 1870', `
    ${panel(18, 16, 604, 182, '#ffd166')}
    <text x="320" y="42" text-anchor="middle" fill="#ffd166" font-weight="800">${l(lang, ['1848 → 1861 KINGDOM OF ITALY → 1870 ROME CAPITAL', 'TAPPE DELL’UNITÀ D’ITALIA (1848–1870)'])}</text>
    <line x1="48" y1="108" x2="592" y2="108" stroke="#38ef7d" stroke-width="3"/>
    <circle cx="88" cy="108" r="8" fill="#45d8ff"/><text x="88" y="84" text-anchor="middle" fill="#45d8ff" font-weight="700">1848</text><text x="88" y="140" text-anchor="middle" class="sm">${l(lang, ['Statuto Albertino', 'Statuto Albertino'])}</text>
    <circle cx="212" cy="108" r="8" fill="#ffd166"/><text x="212" y="84" text-anchor="middle" fill="#ffd166" font-weight="700">1860</text><text x="212" y="140" text-anchor="middle" class="sm">${l(lang, ['Garibaldi & Teano', 'I Mille e Teano'])}</text>
    <circle cx="348" cy="108" r="10" fill="#38ef7d"/><text x="348" y="84" text-anchor="middle" fill="#38ef7d" font-weight="800">17 Mar 1861</text><text x="348" y="140" text-anchor="middle" font-weight="700">${l(lang, ['Kingdom Proclaimed!', 'Regno d’Italia!'])}</text>
    <circle cx="476" cy="108" r="8" fill="#ff9f45"/><text x="476" y="84" text-anchor="middle" fill="#ff9f45" font-weight="700">1866</text><text x="476" y="140" text-anchor="middle" class="sm">Veneto</text>
    <circle cx="566" cy="108" r="8" fill="#ff6b8b"/><text x="566" y="84" text-anchor="middle" fill="#ff6b8b" font-weight="700">1870</text><text x="566" y="140" text-anchor="middle" class="sm">${l(lang, ['Rome Capital', 'Roma Capitale'])}</text>
  `)
};

import React, { useState } from 'react';
import type { Language } from '../../types';
import { Analogy, PlayToggle, Readout, Slider, fmt, pick } from '../chemLabs/chemLabShared';

type Props = { lang: Language };

// ============================================================================
// GRADE 5 GEOGRAPHY LABS (geo_g5_m1 .. geo_g5_m4)
// ============================================================================

// geo_g5_m1 — Map Scale 1:100 000 & GPS Lat/Long
export const MapScaleCoordLab: React.FC<Props> = ({ lang }) => {
  const [cmOnMap, setCmOnMap] = useState(4);
  const [scaleDenom, setScaleDenom] = useState<100000 | 500000>(100000);
  const kmReal = (cmOnMap * scaleDenom) / 100000;
  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 360 190" role="img" aria-label={pick(lang, 'Map scale ruler calculator', 'Calcolatore scala cartografica')}>
          <rect x="24" y="26" width="312" height="44" rx="8" fill="rgba(69,216,255,0.12)" stroke="#45d8ff" />
          <line x1="48" y1="48" x2={48 + cmOnMap * 26} y2="48" stroke="#ffd166" strokeWidth="6" strokeLinecap="round" />
          <text x="180" y="96" textAnchor="middle" fill="#ffd166" fontSize="14" fontWeight="800">
            {cmOnMap} cm × 1:{scaleDenom.toLocaleString()} = {fmt(lang, kmReal, 0)} km!
          </text>
          <text x="180" y="132" textAnchor="middle" fill="#38ef7d" fontSize="11" fontWeight="700">
            {pick(lang, 'Latitude (Parallels, 0° Equator) · Longitude (Meridians, 0° Greenwich)', 'Latitudine (Paralleli, Equatore 0°) · Longitudine (Meridiani, Greenwich 0°)')}
          </text>
          <text x="180" y="156" textAnchor="middle" fill="#9fb0c8" fontSize="10.5">
            {pick(lang, 'Small denominator = street close-up · Large denominator = wide country view', 'Denominatore piccolo = dettaglio vie · Denominatore grande = vista ampia')}
          </text>
        </svg>
      </div>
      <div className="cl-controls">
        <Slider label={pick(lang, 'Centimeters on paper map', 'Centimetri misurati sulla carta')} value={cmOnMap} min={1} max={10} unit="cm" lang={lang} onChange={setCmOnMap} />
        <div className="cl-row">
          <button type="button" className={`cl-btn ${scaleDenom === 100000 ? 'primary' : ''}`} onClick={() => setScaleDenom(100000)}>1 : 100 000 (1 cm = 1 km)</button>
          <button type="button" className={`cl-btn ${scaleDenom === 500000 ? 'primary' : ''}`} onClick={() => setScaleDenom(500000)}>1 : 500 000 (1 cm = 5 km)</button>
        </div>
        <Readout label={pick(lang, 'Real Hiking Distance', 'Distanza Reale')} value={`${fmt(lang, kmReal, 0)} km`} />
        <Analogy
          lang={lang}
          en="Map scale works like camera zoom: 1:100 000 turns 1 km of real trail into 1 tiny centimeter on your paper!"
          it="La scala funziona come lo zoom: con 1 : 100 000, ogni chilometro reale diventa 1 solo centimetro sul foglio!"
        />
      </div>
    </div>
  );
};

// geo_g5_m2 — Italy Alps, Apennines, Po & Volcanoes Explorer
export const ItalyPhysicalLab: React.FC<Props> = ({ lang }) => {
  const [feature, setFeature] = useState<'alps' | 'po' | 'volcanoes'>('alps');
  const data = {
    alps: { head: '⛰️ Alps (4 808 m) & Apennines (2 912 m)', desc: ['Northern arc shields Italy; Apennines run down the peninsula spine', 'Corona delle Alpi a nord (Monte Bianco); Appennini spina dorsale lungo lo stivale'] },
    po: { head: '🌊 Po River (652 km) & Lake Garda', desc: ['Snowmelt feeds Italy’s longest river through the fertile Po Valley to the Adriatic', 'Il fiume più lungo sfocia nell’Adriatico; grandi laghi glaciali prealpini (Garda)'] },
    volcanoes: { head: '🌋 Etna, Vesuvius & Stromboli', desc: ['Active southern volcanoes sit along Europe–Africa tectonic meeting zone', 'Etna, Vesuvio e Stromboli ("Faro del Mediterraneo") lungo le placche attive'] }
  }[feature];
  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 360 190" role="img" aria-label={pick(lang, 'Italy physical geography relief', 'Geografia fisica dell’Italia')}>
          <rect x="20" y="24" width="320" height="84" rx="10" fill="rgba(56,239,125,0.12)" stroke="#38ef7d" />
          <text x="180" y="56" textAnchor="middle" fill="#ffd166" fontSize="13.5" fontWeight="800">{data.head}</text>
          <text x="180" y="84" textAnchor="middle" fill="#ffffff" fontSize="10.5">{pick(lang, data.desc[0], data.desc[1])}</text>
          <text x="180" y="148" textAnchor="middle" fill="#45d8ff" fontSize="11.5" fontWeight="700">
            {pick(lang, 'Four Seas: Ligurian · Tyrrhenian · Ionian · Adriatic', 'Quattro Mari: Ligure · Tirreno · Ionio · Adriatico')}
          </text>
        </svg>
      </div>
      <div className="cl-controls">
        <div className="cl-row">
          <button type="button" className={`cl-btn ${feature === 'alps' ? 'primary' : ''}`} onClick={() => setFeature('alps')}>{pick(lang, 'Alps & Spine', 'Alpi e Appennini')}</button>
          <button type="button" className={`cl-btn ${feature === 'po' ? 'primary' : ''}`} onClick={() => setFeature('po')}>{pick(lang, 'Po & Lakes', 'Po e Laghi')}</button>
          <button type="button" className={`cl-btn ${feature === 'volcanoes' ? 'primary' : ''}`} onClick={() => setFeature('volcanoes')}>{pick(lang, 'Volcanoes', 'Vulcani')}</button>
        </div>
        <Readout label={pick(lang, 'Italian Relief Rule', 'Chiave Fisica')} value={pick(lang, 'Physical green = plains · yellow = hills · brown = high peaks', 'Verde = pianura · Giallo = collina · Marrone = montagne')} />
        <Analogy
          lang={lang}
          en="Picture Italy’s boot protected up top by tall icy Alps while wearing an Apennine backbone all the way to the sea!"
          it="Immagina lo stivale italiano riparato a nord dalle altissime Alpi con gli Appennini come colonna vertebrale!"
        />
      </div>
    </div>
  );
};

// geo_g5_m3 — Northern & Central Regions Explorer
export const NorthCenterRegionsLab: React.FC<Props> = ({ lang }) => {
  const [zone, setZone] = useState<'nw' | 'ne' | 'center'>('nw');
  const items = {
    nw: ['Piedmont (Turin) · Aosta · Liguria (Genoa) · Lombardy (Milan)', 'Piemonte (Torino) · Valle d’Aosta · Liguria (Genova) · Lombardia (Milano)'],
    ne: ['Trentino-Alto Adige (Trento) · Veneto (Venice) · Friuli-VG (Trieste) · Emilia-Romagna (Bologna)', 'Trentino-AA (Trento) · Veneto (Venezia) · Friuli-VG (Trieste) · Emilia-Romagna (Bologna)'],
    center: ['Tuscany (Florence) · Umbria (Perugia — no sea!) · Marche (Ancona) · Lazio (Rome Capital)', 'Toscana (Firenze) · Umbria (Perugia, senza mare!) · Marche (Ancona) · Lazio (Roma Capitale)']
  }[zone];
  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 360 190" role="img" aria-label={pick(lang, 'Northern and Central Italian regions', 'Regioni italiane Nord e Centro')}>
          <rect x="20" y="24" width="320" height="92" rx="10" fill="rgba(255,209,102,0.12)" stroke="#ffd166" />
          <text x="180" y="54" textAnchor="middle" fill="#ffd166" fontSize="13.5" fontWeight="800">
            {zone === 'nw' ? pick(lang, 'North-West Italy (4 Regions)', 'Italia Nord-Occidentale (4)') : zone === 'ne' ? pick(lang, 'North-East Italy (4 Regions)', 'Italia Nord-Orientale (4)') : pick(lang, 'Central Italy (4 Regions)', 'Italia Centrale (4)')}
          </text>
          <text x="180" y="88" textAnchor="middle" fill="#ffffff" fontSize="10.5">{pick(lang, items[0], items[1])}</text>
          <text x="180" y="150" textAnchor="middle" fill="#38ef7d" fontSize="11" fontWeight="700">
            {pick(lang, 'Fact: Umbria is the only peninsular region without a sea coast!', 'Primato: l’Umbria è l’unica regione peninsulare senza sbocco sul mare!')}
          </text>
        </svg>
      </div>
      <div className="cl-controls">
        <div className="cl-row">
          <button type="button" className={`cl-btn ${zone === 'nw' ? 'primary' : ''}`} onClick={() => setZone('nw')}>{pick(lang, 'North-West', 'Nord-Ovest')}</button>
          <button type="button" className={`cl-btn ${zone === 'ne' ? 'primary' : ''}`} onClick={() => setZone('ne')}>{pick(lang, 'North-East', 'Nord-Est')}</button>
          <button type="button" className={`cl-btn ${zone === 'center' ? 'primary' : ''}`} onClick={() => setZone('center')}>{pick(lang, 'Center', 'Centro')}</button>
        </div>
        <Readout label={pick(lang, 'Region Capitals', 'Capoluoghi')} value={pick(lang, items[0], items[1])} />
        <Analogy
          lang={lang}
          en="12 of Italy’s 20 regions sit across North and Center—linking Alpine tunnels, Po factories, Venice’s lagoon, Florence’s art, and Rome!"
          it="Dodici delle 20 regioni italiane uniscono Alpi, porti liguri, laguna veneta, università di Bologna, Firenze e Roma!"
        />
      </div>
    </div>
  );
};

// geo_g5_m4 — South, Islands, Autonomous Statutes & UNESCO World Record
export const SouthIslandsUnescoLab: React.FC<Props> = ({ lang }) => {
  const [tab, setTab] = useState<'south' | 'autonomous' | 'unesco'>('autonomous');
  const note = {
    south: ['Abruzzo (L’Aquila) · Molise (Campobasso) · Campania (Naples) · Puglia (Bari) · Basilicata (Potenza) · Calabria (Catanzaro)', 'Abruzzo (L’Aquila) · Molise (Campobasso) · Campania (Napoli) · Puglia (Bari) · Basilicata (Potenza) · Calabria (Catanzaro)'],
    autonomous: ['5 Special-Statute Regions: Sicily, Sardinia, Aosta Valley, Trentino-Alto Adige, Friuli-Venezia Giulia ✓', '5 Regioni a Statuto Speciale: Sicilia, Sardegna, Valle d’Aosta, Trentino-Alto Adige, Friuli-Venezia Giulia ✓'],
    unesco: ['60+ UNESCO Sites (#1 in the World!): Dolomites, Venice, Pompeii, Matera, Alberobello, Val di Noto!', 'Oltre 60 Siti UNESCO (1° posto al mondo!): Dolomiti, Venezia, Pompei, Matera, Alberobello, Val di Noto!']
  }[tab];
  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 360 190" role="img" aria-label={pick(lang, 'Southern Italy Islands and UNESCO sites', 'Sud Italia, Isole e siti UNESCO')}>
          <rect x="20" y="24" width="320" height="92" rx="10" fill="rgba(56,239,125,0.12)" stroke="#38ef7d" />
          <text x="180" y="54" textAnchor="middle" fill="#ffd166" fontSize="14" fontWeight="800">
            {tab === 'south' ? '🌊 6 Southern Mainland Regions' : tab === 'autonomous' ? '🏝️ 5 Special-Statute Regions' : '🏛️ UNESCO #1 Record'}
          </text>
          <text x="180" y="88" textAnchor="middle" fill="#ffffff" fontSize="10.5">{pick(lang, note[0], note[1])}</text>
          <text x="180" y="150" textAnchor="middle" fill="#45d8ff" fontSize="11" fontWeight="700">
            {pick(lang, '20 Regions Total: 8 North + 4 Center + 6 South + 2 Major Islands', '20 Regioni Totali: 8 Nord + 4 Centro + 6 Sud + 2 Grandi Isole')}
          </text>
        </svg>
      </div>
      <div className="cl-controls">
        <div className="cl-row">
          <button type="button" className={`cl-btn ${tab === 'south' ? 'primary' : ''}`} onClick={() => setTab('south')}>{pick(lang, '6 South Regions', 'Sud (6)')}</button>
          <button type="button" className={`cl-btn ${tab === 'autonomous' ? 'primary' : ''}`} onClick={() => setTab('autonomous')}>{pick(lang, '5 Special Statutes', 'Statuto Speciale')}</button>
          <button type="button" className={`cl-btn ${tab === 'unesco' ? 'primary' : ''}`} onClick={() => setTab('unesco')}>UNESCO #1</button>
        </div>
        <Readout label={pick(lang, 'Key Takeaway', 'Sintesi')} value={pick(lang, note[0], note[1])} />
        <Analogy
          lang={lang}
          en="Italy tops the entire world’s UNESCO list—making natural parks and ancient cities a treasure every region shares!"
          it="L’Italia è prima al mondo per siti UNESCO: proteggere coste, vulcani e città d’arte riguarda tutti noi!"
        />
      </div>
    </div>
  );
};

// ============================================================================
// GRADE 9 GEOGRAPHY LABS (geo_l1_m1 .. geo_l1_m6)
// ============================================================================

// geo_l1_m1 — Mercator vs Peters Projection & Slope Isoipse Lab
export const ProjectionsGisLab: React.FC<Props> = ({ lang }) => {
  const [proj, setProj] = useState<'mercator' | 'peters'>('mercator');
  const [spacing, setSpacing] = useState(8);
  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 360 190" role="img" aria-label={pick(lang, 'Map projection & contour steepness simulator', 'Proiezioni e isoipse topografiche')}>
          <rect x="20" y="22" width="165" height="90" rx="10" fill="rgba(69,216,255,0.12)" stroke="#45d8ff" />
          <text x="102" y="48" textAnchor="middle" fill="#ffd166" fontSize="12" fontWeight="800">{proj === 'mercator' ? 'Mercator (Angles ✓)' : 'Gall-Peters (Area ✓)'}</text>
          <rect x="44" y="64" width={proj === 'mercator' ? 56 : 16} height="22" rx="4" fill="#38ef7d" />
          <text x="72" y="102" textAnchor="middle" fill="#cbd5e1" fontSize="9.5">{proj === 'mercator' ? 'Greenland looks 14× huge!' : 'Real Africa 14× size ✓'}</text>
          <rect x="200" y="22" width="140" height="90" rx="10" fill="rgba(255,209,102,0.1)" stroke="#ffd166" />
          {[0, 1, 2, 3].map(i => (
            <ellipse key={i} cx="270" cy="67" rx={14 + i * spacing} ry={10 + i * (spacing * 0.6)} fill="none" stroke="#38ef7d" strokeWidth="1.5" />
          ))}
          <text x="180" y="148" textAnchor="middle" fill="#45d8ff" fontSize="11.5" fontWeight="700">
            {spacing <= 6 ? pick(lang, 'Crowded isoipse = Steep Cliff! ⛰️', 'Isoipse vicine = Pendio Ripido! ⛰️') : pick(lang, 'Wide isoipse = Gentle Slope ✓', 'Isoipse distanziate = Pendio Dolce ✓')}
          </text>
        </svg>
      </div>
      <div className="cl-controls">
        <div className="cl-row">
          <button type="button" className={`cl-btn ${proj === 'mercator' ? 'primary' : ''}`} onClick={() => setProj('mercator')}>Mercator</button>
          <button type="button" className={`cl-btn ${proj === 'peters' ? 'primary' : ''}`} onClick={() => setProj('peters')}>Gall–Peters</button>
        </div>
        <Slider label={pick(lang, 'Contour line (isoipse) spacing', 'Distanza tra isoipse')} value={spacing} min={4} max={12} unit="mm" lang={lang} onChange={setSpacing} />
        <Analogy
          lang={lang}
          en="You can’t flatten an orange peel without tearing or stretching—and crowded topographic contour rings warn hikers of steep cliffs!"
          it="Nessun planisfero stende una sfera senza deformarla; intanto sulle carte escursionistiche le isoipse fitte avvisano di pareti ripide!"
        />
      </div>
    </div>
  );
};

// geo_l1_m2 — Plate Boundaries & Vesuvius vs Shield Viscosity Lab
export const PlateVolcanoLab: React.FC<Props> = ({ lang }) => {
  const [silica, setSilica] = useState<'fluid' | 'viscous'>('viscous');
  const [playing, setPlaying] = useState(true);
  return (
    <div className="cl-grid">
      <div className={`cl-visual ${playing ? '' : 'chem-paused'}`}>
        <svg viewBox="0 0 360 190" role="img" aria-label={pick(lang, 'Volcano magma viscosity and plate subduction', 'Viscosità magma e subduzione')}>
          <polygon points="80,150 180,45 280,150" fill="rgba(255,107,139,0.22)" stroke="#ff6b8b" strokeWidth="2.5" />
          <circle cx="180" cy="40" r={silica === 'viscous' ? 18 : 8} fill="#ffd166" className="chem-anim-float" />
          <text x="180" y="128" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="800">
            {silica === 'viscous' ? pick(lang, 'Stratovolcano (Vesuvius): Trapped Gas Blast! 💥', 'Stratovulcano (Vesuvio): Gas Intrappolati → Esplosione! 💥') : pick(lang, 'Shield Flow (Hawaii/Etna): Calm Lava River ✓', 'Vulcano a Scudo: Magma Fluido e Colate Calme ✓')}
          </text>
          <text x="180" y="168" textAnchor="middle" fill="#45d8ff" fontSize="10.5" fontWeight="700">
            {pick(lang, 'Hypocenter (deep rupture) → Epicenter (point on surface)', 'Ipocentro (rottura sotterranea) → Epicentro (verticale in superficie)')}
          </text>
        </svg>
      </div>
      <div className="cl-controls">
        <div className="cl-row">
          <button type="button" className={`cl-btn ${silica === 'fluid' ? 'primary' : ''}`} onClick={() => setSilica('fluid')}>{pick(lang, 'Fluid Magma', 'Magma Fluido')}</button>
          <button type="button" className={`cl-btn ${silica === 'viscous' ? 'primary' : ''}`} onClick={() => setSilica('viscous')}>{pick(lang, 'Sticky Viscous (Vesuvius)', 'Magma Viscoso (Vesuvio)')}</button>
          <PlayToggle playing={playing} onToggle={() => setPlaying(p => !p)} lang={lang} />
        </div>
        <Readout label={pick(lang, 'Italian Plate Engine', 'Motore Tettonico')} value={pick(lang, 'African Plate slowly pushing under Eurasian Plate', 'La placca africana converge sotto quella eurasiatica')} />
        <Analogy
          lang={lang}
          en="Think of opening water vs. shaking thick fizzy honey: sticky silica traps magma gas bubbles until a violent cork pop!"
          it="Il magma viscoso trattiene i gas come una bottiglia agitata chiusa: ecco perché il Vesuvio è molto più esplosivo dei vulcani a scudo!"
        />
      </div>
    </div>
  );
};

// geo_l1_m3 — Altitude Lapse Rate (-6 °C / 1000 m) & Coastal Moderation
export const ClimateFactorsLab: React.FC<Props> = ({ lang }) => {
  const [altitudeM, setAltitudeM] = useState(1500);
  const [coastal, setCoastal] = useState(false);
  const baseTemp = 22;
  const tempC = baseTemp - (altitudeM / 1000) * 6 + (coastal ? 3 : 0);
  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 360 190" role="img" aria-label={pick(lang, 'Altitude temperature lapse simulator', 'Simulatore gradiente termico altitudinale')}>
          <polygon points="30,158 180,38 330,158" fill="rgba(69,216,255,0.14)" stroke="#45d8ff" strokeWidth="2" />
          <circle cx={30 + (altitudeM / 3000) * 150} cy={158 - (altitudeM / 3000) * 120} r="9" fill="#ffd166" />
          <text x="180" y="132" textAnchor="middle" fill="#ffd166" fontSize="16" fontWeight="800">
            {altitudeM} m → {fmt(lang, tempC, 1)} °C
          </text>
          <text x="180" y="176" textAnchor="middle" fill="#38ef7d" fontSize="11" fontWeight="700">
            {pick(lang, 'Rule: ~6 °C cooler every +1 000 m climbed!', 'Regola: circa -6 °C ogni 1 000 m di salita!')}
          </text>
        </svg>
      </div>
      <div className="cl-controls">
        <Slider label={pick(lang, 'Mountain Altitude', 'Altitudine sul mare')} value={altitudeM} min={0} max={3000} step={500} unit="m" lang={lang} onChange={setAltitudeM} />
        <div className="cl-row">
          <button type="button" className={`cl-btn ${coastal ? 'primary' : ''}`} onClick={() => setCoastal(c => !c)}>🌊 {pick(lang, 'Sea Moderation (+Winter Mildness)', 'Effetto Mitigatore del Mare')}</button>
        </div>
        <Readout label={pick(lang, 'Troposphere Biome Match', 'Bioma Troposferico')} value={tempC < 6 ? pick(lang, 'Alpine Glacier / Tundra', 'Alta Montagna Alpina') : pick(lang, 'Mediterranean / Mild Hill Belt', 'Macchia Mediterranea / Collina')} />
        <Analogy
          lang={lang}
          en="Climbing 2 000 m cools air by ~12 °C—that’s why glaciers top the Alps even while sunny beaches bask down in Liguria!"
          it="Salire di 2 000 m raffredda l’aria di ~12 °C: così abbiamo nevi alpine sopra pianure e coste mediterranee!"
        />
      </div>
    </div>
  );
};

// geo_l1_m4 — Freshwater 1% Budget & Gulf Stream
export const HydrosphereBudgetLab: React.FC<Props> = ({ lang }) => {
  const [gulfOn, setGulfOn] = useState(true);
  const [showerMin, setShowerMin] = useState(6);
  const virtualLiters = 2500 + showerMin * 12;
  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 360 190" role="img" aria-label={pick(lang, 'Earth freshwater fraction and Gulf Stream', 'Acqua dolce disponibile e Corrente del Golfo')}>
          <rect x="20" y="24" width="320" height="32" rx="8" fill="rgba(69,216,255,0.2)" stroke="#45d8ff" />
          <rect x="20" y="24" width="12" height="32" rx="4" fill="#38ef7d" />
          <text x="185" y="45" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="700">{pick(lang, '97% Salty Ocean · 2% Ice · <1% Liquid Freshwater!', '97% Mare Salato · 2% Ghiacci · <1% Acqua Dolce Liquida!')}</text>
          <rect x="20" y="74" width="320" height="54" rx="10" fill="rgba(255,209,102,0.12)" stroke="#ffd166" />
          <text x="180" y="106" textAnchor="middle" fill="#ffd166" fontSize="12" fontWeight="800">
            🌊 Gulf Stream {gulfOn ? pick(lang, 'ON → Mild Norway & UK Ports ✓', 'ATTIVA → Coste Europee Miti ✓') : pick(lang, 'OFF → Frozen Icy Winters ❄️', 'SPENTA → Inverni Gelidi ❄️')}
          </text>
          <text x="180" y="156" textAnchor="middle" fill="#38ef7d" fontSize="11.5" fontWeight="700">
            👕 + 🚿 {pick(lang, `Daily Water Footprint (1 T-shirt + shower): ~${virtualLiters.toLocaleString()} L`, `Impronta Idrica (1 maglietta + doccia): ~${virtualLiters.toLocaleString()} L`)}
          </text>
        </svg>
      </div>
      <div className="cl-controls">
        <div className="cl-row">
          <button type="button" className={`cl-btn ${gulfOn ? 'primary' : ''}`} onClick={() => setGulfOn(g => !g)}>🌊 {pick(lang, 'Toggle Gulf Stream', 'Attiva/Spegni Corrente del Golfo')}</button>
        </div>
        <Slider label={pick(lang, 'Shower minutes added to 2 500 L cotton shirt', 'Minuti di doccia (+2 500 L maglietta)')} value={showerMin} min={2} max={15} unit="min" lang={lang} onChange={setShowerMin} />
        <Analogy
          lang={lang}
          en="Think of Earth’s water as a 100-liter tank: 97 L are salty, 2 L frozen—leaving barely 1 glass for all rivers, farms, and people!"
          it="Su 100 litri d’acqua sulla Terra, 97 sono salati e 2 sono ghiaccio: resta meno di 1 litro liquido per 8 miliardi di persone!"
        />
      </div>
    </div>
  );
};

// geo_l1_m5 — Age Pyramid Morph (Triangle Growth vs Urn Aging Italy)
export const AgePyramidLab: React.FC<Props> = ({ lang }) => {
  const [country, setCountry] = useState<'young' | 'italy'>('italy');
  const bars = country === 'young' ? [95, 76, 54, 34, 16] : [34, 48, 72, 86, 62];
  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 360 190" role="img" aria-label={pick(lang, 'Population age pyramid shape', 'Forma della piramide delle età')}>
          {bars.map((w, idx) => (
            <rect key={idx} x={180 - w} y={134 - idx * 24} width={w * 2} height="18" rx="4" fill={country === 'young' ? '#38ef7d' : '#ffd166'} />
          ))}
          <text x="180" y="24" textAnchor="middle" fill="#45d8ff" fontSize="12.5" fontWeight="800">
            {country === 'young' ? pick(lang, 'Triangle Pyramid: Fast Growth (Young Continent)', 'Piramide a Triangolo: Forte Natalità e Giovani') : pick(lang, 'Urn Shape (Italy): Few Births & Long Life!', 'Forma a Urna (Italia): Pochi Nati e Tanti Anziani!')}
          </text>
          <text x="180" y="176" textAnchor="middle" fill="#cbd5e1" fontSize="10.5">{pick(lang, 'Bottom bar = Ages 0–14 · Top bar = Seniors 65+', 'Base = Fascia 0–14 anni · Alto = Oltre 65 anni')}</text>
        </svg>
      </div>
      <div className="cl-controls">
        <div className="cl-row">
          <button type="button" className={`cl-btn ${country === 'young' ? 'primary' : ''}`} onClick={() => setCountry('young')}>{pick(lang, 'Triangle (Growth)', 'Triangolo (Giovane)')}</button>
          <button type="button" className={`cl-btn ${country === 'italy' ? 'primary' : ''}`} onClick={() => setCountry('italy')}>{pick(lang, 'Urn (Italy/Japan)', 'Urna (Italia)')}</button>
        </div>
        <Readout label={pick(lang, 'Urban Milestone', 'Svolta Urbana')} value={pick(lang, '>56% of humanity lives in cities · Push vs Pull factors', 'Oltre il 56% vive in città · Fattori Push e Pull')} />
        <Analogy
          lang={lang}
          en="An age pyramid is a nation’s X-ray—showing whether a country needs to build more elementary schools or more senior clinics!"
          it="La piramide demografica è la radiografia di un Paese: rivela se servono più asili e scuole o più ospedali e pensioni!"
        />
      </div>
    </div>
  );
};

// geo_l1_m6 — EU Schengen / Eurozone & Italian Districts Lab
export const EuropeIntegrationLab: React.FC<Props> = ({ lang }) => {
  const [borderMode, setBorderMode] = useState<'customs' | 'schengen'>('schengen');
  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 360 190" role="img" aria-label={pick(lang, 'Schengen free movement vs customs checkpoint', 'Spazio Schengen vs barriere doganali')}>
          <rect x="20" y="28" width="130" height="72" rx="10" fill="rgba(69,216,255,0.12)" stroke="#45d8ff" />
          <text x="85" y="69" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="800">🇮🇹 {pick(lang, 'Italy', 'Italia')}</text>
          <rect x="210" y="28" width="130" height="72" rx="10" fill="rgba(56,239,125,0.12)" stroke="#38ef7d" />
          <text x="275" y="69" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="800">🇫🇷 🇩🇪 EU</text>
          <line x1="150" y1="64" x2="210" y2="64" stroke={borderMode === 'schengen' ? '#38ef7d' : '#ff6b8b'} strokeWidth="4" strokeDasharray={borderMode === 'schengen' ? '6 4' : 'none'} />
          <text x="180" y="134" textAnchor="middle" fill={borderMode === 'schengen' ? '#38ef7d' : '#ff6b8b'} fontSize="12" fontWeight="800">
            {borderMode === 'schengen' ? pick(lang, 'Schengen + Euro (€) + Erasmus: Fast Flow! ✓', 'Schengen + Euro (€) + Erasmus: Circolazione Libera! ✓') : pick(lang, 'Pre-1995: Passport checks & currency swap queues ✕', 'Pre-1995: Code ai valichi e cambio valuta ✕')}
          </text>
          <text x="180" y="162" textAnchor="middle" fill="#ffd166" fontSize="10.5" fontWeight="700">
            {pick(lang, 'Italy = #2 Manufacturing Hub in Europe (Machinery, Food, Design)', 'Italia = 2ª manifattura d’Europa (meccanica, design, DOP)')}
          </text>
        </svg>
      </div>
      <div className="cl-controls">
        <div className="cl-row">
          <button type="button" className={`cl-btn ${borderMode === 'customs' ? 'primary' : ''}`} onClick={() => setBorderMode('customs')}>{pick(lang, 'Old Customs', 'Vecchie Dogane')}</button>
          <button type="button" className={`cl-btn ${borderMode === 'schengen' ? 'primary' : ''}`} onClick={() => setBorderMode('schengen')}>{pick(lang, 'EU Schengen + €', 'UE Schengen + €')}</button>
        </div>
        <Readout label={pick(lang, 'Continental Boundary', 'Confine Naturale')} value={pick(lang, 'Ural Mountains & Caucasus separate Europe & Asia', 'Monti Urali e Caucaso separano Europa e Asia')} />
        <Analogy
          lang={lang}
          en="Think of Schengen like one giant campus hallway: students, trains, and Made-in-Italy goods cross cleanly between European partners!"
          it="Schengen e l’Euro hanno trasformato frontiere storiche in passaggi aperti per studenti Erasmus, treni e imprese italiane!"
        />
      </div>
    </div>
  );
};

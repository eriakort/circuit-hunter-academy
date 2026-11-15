import React, { useState } from 'react';
import type { Language } from '../../types';
import { Analogy, fmt, pick, PlayToggle, Readout, Slider } from './chemLabShared';

// ---------------- L3 M1: Calorimeter & Gibbs ΔG Explorer ----------------
export const ThermoGibbsLab: React.FC<{ lang: Language }> = ({ lang }) => {
  const [deltaH, setDeltaH] = useState(-40); // kJ
  const [deltaS, setDeltaS] = useState(0.12); // kJ/K
  const [tempK, setTempK] = useState(300);
  const deltaG = deltaH - tempK * deltaS;
  const exo = deltaH < 0;
  const spontaneous = deltaG < 0;

  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 360 195" role="img" aria-label={pick(lang, 'Calorimeter and Gibbs spontaneity', 'Calorimetro ed energia libera ΔG')}>
          <rect x="76" y="42" width="128" height="126" rx="14" fill={exo ? 'rgba(255,106,61,.18)' : 'rgba(69,216,255,.18)'} stroke={exo ? '#ff6a3d' : '#45d8ff'} strokeWidth="2.5" />
          {/* Thermometer */}
          <rect x="132" y="24" width="16" height="114" rx="8" fill="#101329" stroke="#99a8cc" />
          <rect x="135" y={exo ? 46 : 86} width="10" height={exo ? 84 : 44} rx="5" fill={exo ? '#ff6a3d' : '#45d8ff'} />
          <circle cx="140" cy="132" r="11" fill={exo ? '#ff6a3d' : '#45d8ff'} />
          {/* Heat waves */}
          {exo ? (
            <>
              <path d="M56 84 L32 84" stroke="#ff6a3d" strokeWidth="3" className="chem-anim-heat" />
              <path d="M224 84 L248 84" stroke="#ff6a3d" strokeWidth="3" className="chem-anim-heat" />
            </>
          ) : (
            <>
              <path d="M32 84 L56 84" stroke="#45d8ff" strokeWidth="3" className="chem-anim-pulse" />
              <path d="M248 84 L224 84" stroke="#45d8ff" strokeWidth="3" className="chem-anim-pulse" />
            </>
          )}
          <text x="140" y="184" textAnchor="middle" fill={exo ? '#ff6a3d' : '#45d8ff'} fontSize="12" fontWeight="800">
            {exo ? pick(lang, 'Exothermic (releases heat)', 'Esotermica (libera calore)') : pick(lang, 'Endothermic (absorbs heat)', 'Endotermica (assorbe calore)')}
          </text>
          {/* Spontaneity badge */}
          <rect x="234" y="54" width="112" height="96" rx="12" fill={spontaneous ? 'rgba(56,239,125,.14)' : 'rgba(255,93,143,.14)'} stroke={spontaneous ? '#38ef7d' : '#ff5d8f'} strokeWidth="2" />
          <text x="290" y="84" textAnchor="middle" fill={spontaneous ? '#38ef7d' : '#ff5d8f'} fontSize="13" fontWeight="800">
            {spontaneous ? pick(lang, 'SPONTANEOUS', 'SPONTANEA') : pick(lang, 'NON-SPONT.', 'NON SPONT.')}
          </text>
          <text x="290" y="112" textAnchor="middle" fill="#ffd166" fontSize="16" fontWeight="800">
            {fmt(lang, deltaG, 1)} kJ
          </text>
          <text x="290" y="134" textAnchor="middle" fill="#99a8cc" fontSize="11">ΔG = ΔH − TΔS</text>
        </svg>
      </div>
      <div className="cl-controls">
        <Slider label="ΔH" value={deltaH} min={-100} max={100} step={10} unit="kJ" lang={lang} onChange={setDeltaH} />
        <Slider label="ΔS" value={deltaS} min={-0.3} max={0.3} step={0.04} decimals={2} unit="kJ/K" lang={lang} onChange={setDeltaS} />
        <Slider label="T" value={tempK} min={100} max={700} step={25} unit="K" lang={lang} onChange={setTempK} />
        <Analogy
          lang={lang}
          en="ΔH is heat (exo = campfire, endo = ice pack). ΔS is messiness! Even an endothermic process melts spontaneously if high T makes −TΔS win."
          it="ΔH è il calore (esotermica = falò, endotermica = ghiaccio istantaneo). ΔS è il disordine: ad alta T il termine −TΔS può far vincere comunque la spontaneità!"
        />
      </div>
    </div>
  );
};

// ---------------- L3 M2: Animated Kinetics Barrier & Colliding Particles ----------------
export const KineticsLab: React.FC<{ lang: Language }> = ({ lang }) => {
  const [catalyzed, setCatalyzed] = useState(false);
  const [temp, setTemp] = useState(320);
  const Ea = catalyzed ? 38 : 72;
  const speed = Math.round((temp / 320) * (catalyzed ? 2.4 : 1) * 100);

  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 360 190" role="img" aria-label={pick(lang, 'Activation energy hill', 'Collina dell’energia di attivazione')}>
          <line x1="34" y1="162" x2="334" y2="162" stroke="#99a8cc" strokeWidth="1.5" />
          <path d="M48 108 C110 108, 134 26, 180 26 C226 26, 250 144, 316 144" fill="none" stroke="#ff6a3d" strokeWidth="3" />
          {catalyzed && (
            <path d="M48 108 C110 108, 134 66, 180 66 C226 66, 250 144, 316 144" fill="none" stroke="#38ef7d" strokeWidth="3.5" strokeDasharray="6 4" />
          )}
          {/* Animated moving reactant particles */}
          <circle cx="84" cy="96" r="7" fill="#45d8ff" className={temp > 350 ? 'chem-anim-bounce-fast' : 'chem-anim-float'} />
          <circle cx="282" cy="134" r="7" fill="#ffd166" className={catalyzed ? 'chem-anim-float' : 'chem-anim-pulse'} />
          <text x="180" y="182" textAnchor="middle" fill={catalyzed ? '#38ef7d' : '#ff6a3d'} fontSize="12" fontWeight="800">
            Eₐ = {Ea} kJ/mol · ΔH = −35 kJ/mol ({pick(lang, 'unchanged!', 'invariato!')})
          </text>
        </svg>
      </div>
      <div className="cl-controls">
        <div className="cl-mode-tabs">
          <button type="button" className={!catalyzed ? 'active' : ''} onClick={() => setCatalyzed(false)}>
            {pick(lang, 'No Catalyst (High Hill)', 'Senza Catalizzatore')}
          </button>
          <button type="button" className={catalyzed ? 'active' : ''} onClick={() => setCatalyzed(true)}>
            {pick(lang, 'With Catalyst (Shortcut)', 'Con Catalizzatore')}
          </button>
        </div>
        <Slider label={pick(lang, 'Temperature (T)', 'Temperatura (T)')} value={temp} min={250} max={450} step={10} unit="K" lang={lang} onChange={setTemp} />
        <div className="cl-readout-row">
          <Readout label="Eₐ" value={`${Ea} kJ/mol`} />
          <Readout label={pick(lang, 'Relative Rate', 'Velocità Rel.')} value={`${speed}%`} />
        </div>
        <Analogy
          lang={lang}
          en="A catalyst is like digging a mountain tunnel: start and finish altitudes (ΔH) stay identical, but cars cross the mountain way faster!"
          it="Il catalizzatore è come scavare un tunnel nella montagna: partenza e arrivo (ΔH) non cambiano, ma si passa dall’altra parte molto più in fretta!"
        />
      </div>
    </div>
  );
};

// ---------------- L3 M3: Le Chatelier Dynamic Equilibrium Bench ----------------
export const EquilibriumLab: React.FC<{ lang: Language }> = ({ lang }) => {
  const [stress, setStress] = useState<'eq' | 'addR' | 'addP' | 'highP' | 'highT' | 'cat'>('eq');
  const shiftRight = stress === 'addR' || stress === 'highP';
  const shiftLeft = stress === 'addP' || stress === 'highT';
  const nh3Pct = shiftRight ? 68 : shiftLeft ? 28 : 48;

  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 360 190" role="img" aria-label={pick(lang, 'Le Chatelier equilibrium shift', 'Spostamento equilibrio Le Châtelier')}>
          <text x="180" y="24" textAnchor="middle" fill="#ffd166" fontSize="14" fontWeight="800">
            N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g) (ΔH &lt; 0)
          </text>
          {/* Reactant side */}
          <rect x="24" y="48" width="116" height="96" rx="12" fill="rgba(69,216,255,.12)" stroke="#45d8ff" strokeWidth="2" />
          <text x="82" y="72" textAnchor="middle" fill="#45d8ff" fontSize="12" fontWeight="800">{pick(lang, '4 Gas Moles', '4 Moli Gas')}</text>
          <text x="82" y="102" textAnchor="middle" fill="#ffffff" fontSize="20" fontWeight="800">{100 - nh3Pct}%</text>
          {/* Bidirectional Animated Arrows */}
          <path d="M148 86 H212" stroke={shiftRight ? '#38ef7d' : '#99a8cc'} strokeWidth={shiftRight ? 5 : 2.5} className="chem-anim-dash" />
          <path d="M212 108 H148" stroke={shiftLeft ? '#ff6a3d' : '#99a8cc'} strokeWidth={shiftLeft ? 5 : 2.5} className="chem-anim-dash" />
          {/* Product side */}
          <rect x="220" y="48" width="116" height="96" rx="12" fill="rgba(56,239,125,.12)" stroke="#38ef7d" strokeWidth="2" />
          <text x="278" y="72" textAnchor="middle" fill="#38ef7d" fontSize="12" fontWeight="800">{pick(lang, '2 Gas Moles', '2 Moli Gas')}</text>
          <text x="278" y="102" textAnchor="middle" fill="#ffffff" fontSize="20" fontWeight="800">{nh3Pct}%</text>
          <text x="180" y="172" textAnchor="middle" fill={shiftRight ? '#38ef7d' : shiftLeft ? '#ff6a3d' : '#ffd166'} fontSize="12.5" fontWeight="800">
            {shiftRight
              ? pick(lang, '→ Shifts RIGHT to make more NH₃!', '→ Sposta a DESTRA per produrre NH₃!')
              : shiftLeft
                ? pick(lang, '← Shifts LEFT to relieve stress!', '← Sposta a SINISTRA per opporsi!')
                : stress === 'cat'
                  ? pick(lang, '⚖️ Catalyst: reaches equilibrium faster, NO shift!', '⚖️ Catalizzatore: equilibrio più rapido, NESSUNO spostamento!')
                  : pick(lang, '⚖️ Balanced rates: v_fwd = v_rev', '⚖️ Velocità uguali: v_dir = v_inv')}
          </text>
        </svg>
      </div>
      <div className="cl-controls">
        <div className="cl-mode-tabs">
          <button type="button" className={stress === 'addR' ? 'active' : ''} onClick={() => setStress('addR')}>+ N₂</button>
          <button type="button" className={stress === 'addP' ? 'active' : ''} onClick={() => setStress('addP')}>+ NH₃</button>
          <button type="button" className={stress === 'highP' ? 'active' : ''} onClick={() => setStress('highP')}>{pick(lang, '↑ Pressure', '↑ Pressione')}</button>
          <button type="button" className={stress === 'highT' ? 'active' : ''} onClick={() => setStress('highT')}>{pick(lang, '↑ Temp', '↑ Temp')}</button>
        </div>
        <div className="cl-mode-tabs">
          <button type="button" className={stress === 'cat' ? 'active' : ''} onClick={() => setStress('cat')}>{pick(lang, '+ Catalyst', '+ Catalizz.')}</button>
          <button type="button" className={stress === 'eq' ? 'active' : ''} onClick={() => setStress('eq')}>{pick(lang, 'Reset', 'Reset')}</button>
        </div>
        <Analogy
          lang={lang}
          en="Equilibrium is a stubborn crowd: push them left, they push back right! Squeeze the room (high P), they pack onto the side with fewer molecules."
          it="L’equilibrio è testardo: se aggiungi da un lato scappa dall’altro; se stringi la stanza (alta P) si rifugia dove ci sono meno molecole di gas!"
        />
      </div>
    </div>
  );
};

// ---------------- L3 M4: Brønsted-Lowry Proton Hop Visualizer ----------------
export const BronstedHopLab: React.FC<{ lang: Language }> = ({ lang }) => {
  const [caseIdx, setCaseIdx] = useState(0);
  const [hopped, setHopped] = useState(true);
  const cases = [
    { acid: 'HCl', base: 'H₂O', conjB: 'Cl⁻', conjA: 'H₃O⁺', note: ['HCl gives its H⁺ to Water (making hydronium H₃O⁺).', 'HCl cede il protone H⁺ all’acqua formando H₃O⁺.'] },
    { acid: 'H₂O', base: 'NH₃', conjB: 'OH⁻', conjA: 'NH₄⁺', note: ['Water acts as an ACID here, handing H⁺ to NH₃!', 'Qui l’acqua fa da ACIDO cedendo H⁺ all’ammoniaca!'] }
  ];
  const cur = cases[caseIdx];

  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 360 190" role="img" aria-label={pick(lang, 'Proton hop animation', 'Salto del protone H+')}>
          <rect x="24" y="64" width="96" height="62" rx="12" fill="rgba(255,93,143,.16)" stroke="#ff5d8f" strokeWidth="2" />
          <text x="72" y="100" textAnchor="middle" fill="#ffffff" fontSize="18" fontWeight="800">{hopped ? cur.conjB : cur.acid}</text>
          <text x="72" y="48" textAnchor="middle" fill="#ff5d8f" fontSize="11" fontWeight="800">{hopped ? pick(lang, 'Conj. Base', 'Base Coniug.') : pick(lang, 'Acid (Donor)', 'Acido (Dona)')}</text>

          <rect x="240" y="64" width="96" height="62" rx="12" fill="rgba(69,216,255,.16)" stroke="#45d8ff" strokeWidth="2" />
          <text x="288" y="100" textAnchor="middle" fill="#ffffff" fontSize="18" fontWeight="800">{hopped ? cur.conjA : cur.base}</text>
          <text x="288" y="48" textAnchor="middle" fill="#45d8ff" fontSize="11" fontWeight="800">{hopped ? pick(lang, 'Conj. Acid', 'Acido Coniug.') : pick(lang, 'Base (Acceptor)', 'Base (Accetta)')}</text>

          {/* Proton Hop Arc */}
          <path d="M114 68 Q180 18 246 68" fill="none" stroke="#ffd166" strokeWidth="2.5" className="chem-anim-dash" />
          <circle cx={hopped ? 246 : 114} cy="68" r="13" fill="#ffd166" className="chem-anim-pulse" />
          <text x={hopped ? 246 : 114} y="73" textAnchor="middle" fill="#0b1026" fontSize="12" fontWeight="800">H⁺</text>

          <text x="180" y="164" textAnchor="middle" fill="#ffd166" fontSize="12" fontWeight="700">
            {pick(lang, cur.note[0], cur.note[1])}
          </text>
        </svg>
      </div>
      <div className="cl-controls">
        <div className="cl-mode-tabs">
          <button type="button" className={caseIdx === 0 ? 'active' : ''} onClick={() => setCaseIdx(0)}>HCl + H₂O</button>
          <button type="button" className={caseIdx === 1 ? 'active' : ''} onClick={() => setCaseIdx(1)}>NH₃ + H₂O</button>
        </div>
        <button type="button" className="cl-btn primary" onClick={() => setHopped(h => !h)}>
          {hopped ? pick(lang, '↺ Undo H⁺ Hop', '↺ Riporta H⁺') : pick(lang, '⚡ Hop Proton H⁺', '⚡ Passa il protone H⁺')}
        </button>
        <Analogy
          lang={lang}
          en="Think of Brønsted–Lowry as passing a basketball named H⁺: the player throwing it is the Acid, the player catching it is the Base!"
          it="È come passarsi un pallone chiamato H⁺: chi lancia è l’Acido (donatore), chi lo prende è la Base (accettore)!"
        />
      </div>
    </div>
  );
};

// ---------------- L3 M5: Animated Burette Titration & pH Curve ----------------
export const TitrationLab: React.FC<{ lang: Language }> = ({ lang }) => {
  const [vb, setVb] = useState(25);
  const molH = 25 * 0.1;
  const molOH = vb * 0.1;
  const totalVol = 25 + vb;
  let ph = 7.0;
  if (Math.abs(molH - molOH) < 1e-6) {
    ph = 7.0;
  } else if (molH > molOH) {
    ph = -Math.log10((molH - molOH) / totalVol);
  } else {
    ph = 14 + Math.log10((molOH - molH) / totalVol);
  }
  const flaskColor = ph < 7 ? 'rgba(69,216,255,.35)' : ph <= 8.2 ? 'rgba(56,239,125,.35)' : 'rgba(255,93,143,.58)';

  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 360 195" role="img" aria-label={pick(lang, 'Burette titration apparatus', 'Buretta di titolazione')}>
          {/* Burette */}
          <rect x="64" y="14" width="16" height="84" rx="4" fill="rgba(255,255,255,.08)" stroke="#99a8cc" strokeWidth="1.5" />
          <rect x="66" y={18 + (vb / 50) * 65} width="12" height={Math.max(8, 78 - (vb / 50) * 65)} fill="rgba(255,209,102,.5)" />
          <circle cx="72" cy="106" r="4" fill="#ffd166" className="chem-anim-drip" />
          {/* Erlenmeyer flask */}
          <path d="M58 122 L58 134 L36 178 L108 178 L86 134 L86 122 Z" fill={flaskColor} stroke="#99a8cc" strokeWidth="2" />
          <text x="72" y="164" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="800">pH {fmt(lang, ph, 1)}</text>

          {/* Mini S-Curve on right */}
          <line x1="154" y1="168" x2="342" y2="168" stroke="#99a8cc" strokeWidth="1.5" />
          <line x1="154" y1="26" x2="154" y2="168" stroke="#99a8cc" strokeWidth="1.5" />
          <path d="M158 156 L236 146 L248 96 L260 44 L334 36" fill="none" stroke="#ffd166" strokeWidth="2.5" />
          <circle cx={154 + (vb / 50) * 180} cy={168 - (ph / 14) * 136} r="6.5" fill="#38ef7d" stroke="#ffffff" strokeWidth="1.5" />
          <text x="248" y="185" textAnchor="middle" fill="#99a8cc" fontSize="11">{pick(lang, 'NaOH added (mL)', 'NaOH aggiunto (mL)')}</text>
        </svg>
      </div>
      <div className="cl-controls">
        <Slider label={pick(lang, '0.10 M NaOH Volume', 'Volume NaOH 0,10 M')} value={vb} min={0} max={50} step={1} decimals={1} unit="mL" lang={lang} onChange={setVb} />
        <div className="cl-actions">
          <button type="button" className="cl-btn" onClick={() => setVb(v => Math.min(50, v + 1))}>+1 mL</button>
          <button type="button" className="cl-btn primary" onClick={() => setVb(25)}>{pick(lang, 'Equivalence (25.0 mL)', 'Equivalenza (25,0 mL)')}</button>
          <button type="button" className="cl-btn" onClick={() => setVb(0)}>0 mL</button>
        </div>
        <div className="cl-readout-row">
          <Readout label="pH" value={fmt(lang, ph, 2)} />
          <Readout label="pOH" value={fmt(lang, 14 - ph, 2)} />
        </div>
      </div>
    </div>
  );
};

// ---------------- L3 M6: Live Animated Daniell Galvanic Cell ----------------
export const GalvanicCellLab: React.FC<{ lang: Language }> = ({ lang }) => {
  const [playing, setPlaying] = useState(true);
  const [pair, setPair] = useState<'zn-cu' | 'mg-cu'>('zn-cu');
  const volts = pair === 'zn-cu' ? 1.1 : 2.71;
  const anodeSym = pair === 'zn-cu' ? 'Zn' : 'Mg';

  return (
    <div className={`cl-grid ${!playing ? 'chem-paused' : ''}`}>
      <div className="cl-visual">
        <svg viewBox="0 0 360 195" role="img" aria-label={pick(lang, 'Galvanic battery cell', 'Pila galvanica di Daniell')}>
          {/* Wire + Voltmeter */}
          <path d="M74 62 L74 28 L286 28 L286 62" fill="none" stroke="#ffd166" strokeWidth="3" className="chem-anim-dash" />
          <rect x="138" y="10" width="84" height="32" rx="8" fill="#101329" stroke="#38ef7d" strokeWidth="2" />
          <text x="180" y="31" textAnchor="middle" fill="#38ef7d" fontSize="14" fontWeight="800">+{fmt(lang, volts, 2)} V</text>
          <text x="180" y="54" textAnchor="middle" fill="#ffd166" fontSize="11" fontWeight="800">e⁻ ────→</text>

          {/* Left Beaker (Anode) */}
          <rect x="34" y="76" width="100" height="96" rx="8" fill="rgba(255,106,61,.12)" stroke="#99a8cc" strokeWidth="2" />
          <rect x="64" y="60" width="18" height="90" rx="3" fill="#ff6a3d" />
          <text x="73" y="110" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="800">{anodeSym}</text>
          <text x="84" y="186" textAnchor="middle" fill="#ff6a3d" fontSize="11" fontWeight="800">{pick(lang, 'ANODE (−) Ox.', 'ANODO (−) Ox.')}</text>

          {/* Right Beaker (Cathode) */}
          <rect x="226" y="76" width="100" height="96" rx="8" fill="rgba(69,216,255,.18)" stroke="#99a8cc" strokeWidth="2" />
          <rect x="276" y="60" width="18" height="90" rx="3" fill="#45d8ff" />
          <text x="285" y="110" textAnchor="middle" fill="#0b1026" fontSize="12" fontWeight="800">Cu</text>
          <text x="276" y="186" textAnchor="middle" fill="#45d8ff" fontSize="11" fontWeight="800">{pick(lang, 'CATHODE (+) Red.', 'CATODO (+) Rid.')}</text>

          {/* Salt Bridge */}
          <path d="M116 112 L116 74 L244 74 L244 112" fill="none" stroke="#ffd166" strokeWidth="10" strokeOpacity="0.35" strokeLinecap="round" />
          <text x="180" y="92" textAnchor="middle" fill="#ffd166" fontSize="10" fontWeight="700">{pick(lang, 'Salt Bridge', 'Ponte Salino')}</text>
        </svg>
      </div>
      <div className="cl-controls">
        <div className="cl-mode-tabs">
          <button type="button" className={pair === 'zn-cu' ? 'active' : ''} onClick={() => setPair('zn-cu')}>Zn | Cu (+{fmt(lang, 1.1, 2)} V)</button>
          <button type="button" className={pair === 'mg-cu' ? 'active' : ''} onClick={() => setPair('mg-cu')}>Mg | Cu (+{fmt(lang, 2.71, 2)} V)</button>
        </div>
        <PlayToggle playing={playing} onToggle={() => setPlaying(p => !p)} lang={lang} />
        <Analogy
          lang={lang}
          en="AN OX & RED CAT! ANode = OXidation (loses e⁻ through the wire); REDuction = CAThode (catches e⁻ to grow solid copper). The salt bridge stops charge jam!"
          it="Anodo = Ossidazione (perde e⁻ nel filo); Catodo = Riduzione (cattura e⁻ e deposita rame). Il ponte salino chiude il circuito ionico!"
        />
      </div>
    </div>
  );
};

// ---------------- L3 M7: Hydrocarbon Hybridization & Bond Builder ----------------
export const HydrocarbonBuilderLab: React.FC<{ lang: Language }> = ({ lang }) => {
  const [order, setOrder] = useState<1 | 2 | 3>(1);
  const info =
    order === 1
      ? { name: ['Ethane (C₂H₆)', 'Etano (C₂H₆)'], hyb: pick(lang, 'sp³ · 109.5°', 'sp³ · 109,5°'), kind: ['Alkane (Single)', 'Alcano (Singolo)'], col: '#38ef7d' }
      : order === 2
        ? { name: ['Ethene (C₂H₄)', 'Etene (C₂H₄)'], hyb: 'sp² · 120°', kind: ['Alkene (Double)', 'Alchene (Doppio)'], col: '#45d8ff' }
        : { name: ['Ethyne (C₂H₂)', 'Etino (C₂H₂)'], hyb: 'sp · 180°', kind: ['Alkyne (Triple)', 'Alchino (Triplo)'], col: '#ffd166' };

  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 360 185" role="img" aria-label={info.name[0]}>
          <text x="180" y="24" textAnchor="middle" fill={info.col} fontSize="14" fontWeight="800">{pick(lang, info.name[0], info.name[1])}</text>
          {/* Carbon centers */}
          <line x1="130" y1="96" x2="230" y2="96" stroke={info.col} strokeWidth="4" />
          {order >= 2 && <line x1="130" y1="88" x2="230" y2="88" stroke="#ff5d8f" strokeWidth="3" className="chem-anim-pulse" />}
          {order === 3 && <line x1="130" y1="104" x2="230" y2="104" stroke="#ff5d8f" strokeWidth="3" className="chem-anim-pulse" />}
          <circle cx="130" cy="96" r="18" fill="#181e42" stroke={info.col} strokeWidth="2.5" />
          <text x="130" y="102" textAnchor="middle" fill="#ffffff" fontSize="15" fontWeight="800">C</text>
          <circle cx="230" cy="96" r="18" fill="#181e42" stroke={info.col} strokeWidth="2.5" />
          <text x="230" y="102" textAnchor="middle" fill="#ffffff" fontSize="15" fontWeight="800">C</text>
          {/* Hydrogens to keep 4 bonds per C */}
          {order === 1 && [[82, 62], [82, 130], [116, 46], [278, 62], [278, 130], [244, 46]].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="9" fill="#ffffff" />
          ))}
          {order === 2 && [[88, 62], [88, 130], [272, 62], [272, 130]].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="9" fill="#ffffff" />
          ))}
          {order === 3 && [[74, 96], [286, 96]].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="9" fill="#ffffff" />
          ))}
          <text x="180" y="168" textAnchor="middle" fill="#ffd166" fontSize="13" fontWeight="800">{info.hyb}</text>
        </svg>
      </div>
      <div className="cl-controls">
        <div className="cl-mode-tabs cols-3">
          <button type="button" className={order === 1 ? 'active' : ''} onClick={() => setOrder(1)}>C–C (sp³)</button>
          <button type="button" className={order === 2 ? 'active' : ''} onClick={() => setOrder(2)}>C=C (sp²)</button>
          <button type="button" className={order === 3 ? 'active' : ''} onClick={() => setOrder(3)}>C≡C (sp)</button>
        </div>
        <div className="cl-readout-row">
          <Readout label={pick(lang, 'Family', 'Famiglia')} value={pick(lang, info.kind[0], info.kind[1])} />
          <Readout label={pick(lang, 'Bonds per Carbon', 'Legami per Carbonio')} value={pick(lang, '4 (always!)', '4 (sempre!)')} />
        </div>
        <Analogy
          lang={lang}
          en="Carbon always has 4 hands! When two carbons hold hands twice (C=C) or three times (C≡C), fewer hands remain free to hold Hydrogen."
          it="Il Carbonio ha sempre 4 mani! Se due atomi C si stringono due o tre mani tra loro (C=C o C≡C), restano meno mani libere per gli Idrogeni."
        />
      </div>
    </div>
  );
};

// ---------------- L3 M8: Functional Groups & Benzene Resonance Inspector ----------------
const FUNC_GROUPS = [
  { id: 'oh', label: '–OH', title: ['Alcohol (Ethanol)', 'Alcol (Etanolo)'], note: ['–OH lets molecules form H-bonds → much higher boiling point!', '–OH crea legami a idrogeno → punto di ebollizione alto!'], col: '#45d8ff' },
  { id: 'cooh', label: '–COOH', title: ['Carboxylic Acid (Acetic)', 'Acido Carbossilico'], note: ['Weak organic acid: donates H⁺ from –COOH (vinegar!).', 'Acido organico debole: cede H⁺ dal gruppo –COOH (aceto!).'], col: '#ff5d8f' },
  { id: 'benz', label: 'C₆H₆', title: ['Benzene (Aromatic Ring)', 'Benzene (Anello Aromatico)'], note: ['6 π electrons race smoothly around the hexagon → extra stability!', '6 elettroni π ruotano sull’esagono rendendolo stabilissimo!'], col: '#ffd166' }
] as const;

export const FunctionalGroupLab: React.FC<{ lang: Language }> = ({ lang }) => {
  const [grpIdx, setGrpIdx] = useState(2);
  const g = FUNC_GROUPS[grpIdx];

  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 360 185" role="img" aria-label={g.title[0]}>
          {g.id === 'benz' ? (
            <>
              <polygon points="180,38 232,68 232,126 180,156 128,126 128,68" fill="rgba(255,209,102,.08)" stroke="#ffd166" strokeWidth="3" />
              <circle cx="180" cy="97" r="32" fill="none" stroke="#45d8ff" strokeWidth="3.5" strokeDasharray="8 5" className="chem-anim-orbit" style={{ transformOrigin: '180px 97px' }} />
              <text x="180" y="102" textAnchor="middle" fill="#ffd166" fontSize="14" fontWeight="800">6 π e⁻</text>
            </>
          ) : (
            <>
              <rect x="64" y="68" width="116" height="54" rx="12" fill="rgba(255,255,255,.06)" stroke="#99a8cc" strokeWidth="2" />
              <text x="122" y="101" textAnchor="middle" fill="#ffffff" fontSize="18" fontWeight="800">R — CH₂</text>
              <line x1="180" y1="95" x2="218" y2="95" stroke={g.col} strokeWidth="4" />
              <rect x="218" y="62" width="96" height="66" rx="14" fill="rgba(69,216,255,.15)" stroke={g.col} strokeWidth="3" className="chem-anim-pulse" />
              <text x="266" y="102" textAnchor="middle" fill={g.col} fontSize="18" fontWeight="800">{g.label}</text>
            </>
          )}
          <text x="180" y="176" textAnchor="middle" fill={g.col} fontSize="12" fontWeight="800">{pick(lang, g.title[0], g.title[1])}</text>
        </svg>
      </div>
      <div className="cl-controls">
        <div className="cl-mode-tabs cols-3">
          {FUNC_GROUPS.map((item, i) => (
            <button key={item.id} type="button" className={grpIdx === i ? 'active' : ''} onClick={() => setGrpIdx(i)}>
              {item.label}
            </button>
          ))}
        </div>
        <Analogy lang={lang} en={g.note[0]} it={g.note[1]} />
      </div>
    </div>
  );
};

// ---------------- L3 M9: Esterification & Polymer Chain Zipper ----------------
export const PolymerEsterLab: React.FC<{ lang: Language }> = ({ lang }) => {
  const [tab, setTab] = useState<'ester' | 'poly'>('ester');
  const [reacted, setReacted] = useState(true);
  const [monomers, setMonomers] = useState(3);

  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 360 190" role="img" aria-label={pick(lang, 'Esterification or Polymer chain', 'Esterificazione o catena polimerica')}>
          {tab === 'ester' ? (
            <>
              <text x="180" y="24" textAnchor="middle" fill="#ffd166" fontSize="13" fontWeight="800">
                {reacted ? pick(lang, 'ESTER FORMED (+ H₂O drops out!)', 'ESTERE FORMATO (+ esce una goccia d’H₂O!)') : pick(lang, 'Carboxylic Acid + Alcohol (Needs H⁺ & Heat)', 'Acido Carbossilico + Alcol (Serve H⁺ e Calore)')}
              </text>
              <rect x="40" y="64" width="124" height="58" rx="10" fill="rgba(255,93,143,.16)" stroke="#ff5d8f" strokeWidth="2" />
              <text x="102" y="98" textAnchor="middle" fill="#ffffff" fontSize="15" fontWeight="800">{reacted ? 'CH₃–COO' : 'CH₃–COOH'}</text>
              <rect x={reacted ? 168 : 194} y="64" width="114" height="58" rx="10" fill="rgba(56,239,125,.16)" stroke="#38ef7d" strokeWidth="2" />
              <text x={reacted ? 225 : 251} y="98" textAnchor="middle" fill="#ffffff" fontSize="15" fontWeight="800">{reacted ? '–C₂H₅ (🍌)' : 'HO–C₂H₅'}</text>
              {reacted && (
                <g transform="translate(316, 134)" className="chem-anim-drip">
                  <circle cx="0" cy="0" r="14" fill="rgba(69,216,255,.32)" stroke="#45d8ff" strokeWidth="2" />
                  <text x="0" y="4" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="800">H₂O</text>
                </g>
              )}
            </>
          ) : (
            <>
              <text x="180" y="24" textAnchor="middle" fill="#38ef7d" fontSize="13" fontWeight="800">
                {pick(lang, `POLYMER CHAIN: ${monomers} monomers zipped together!`, `CATENA POLIMERICA: ${monomers} monomeri agganciati!`)}
              </text>
              {Array.from({ length: monomers }, (_, i) => (
                <g key={i} transform={`translate(${44 + i * 62}, 86)`} className="chem-anim-float" style={{ animationDelay: `${i * 0.15}s` }}>
                  <rect width="50" height="42" rx="8" fill="rgba(69,216,255,.2)" stroke="#45d8ff" strokeWidth="2" />
                  <text x="25" y="26" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="800">CH₂–CH₂</text>
                  {i < monomers - 1 && <line x1="50" y1="21" x2="62" y2="21" stroke="#ffd166" strokeWidth="3.5" />}
                </g>
              ))}
            </>
          )}
        </svg>
      </div>
      <div className="cl-controls">
        <div className="cl-mode-tabs">
          <button type="button" className={tab === 'ester' ? 'active' : ''} onClick={() => setTab('ester')}>
            {pick(lang, 'Ester Condensation', 'Esterificazione')}
          </button>
          <button type="button" className={tab === 'poly' ? 'active' : ''} onClick={() => setTab('poly')}>
            {pick(lang, 'Polymer Zipper', 'Polimerizzazione')}
          </button>
        </div>
        {tab === 'ester' ? (
          <button type="button" className="cl-btn primary" onClick={() => setReacted(r => !r)}>
            {reacted ? pick(lang, '↺ Separate Reactants', '↺ Separa Reagenti') : pick(lang, '🔥 Heat & Form Ester', '🔥 Riscalda e Crea Estere')}
          </button>
        ) : (
          <div className="cl-actions">
            <button type="button" className="cl-btn" onClick={() => setMonomers(m => Math.max(1, m - 1))}>−1 {pick(lang, 'Monomer', 'Monomero')}</button>
            <button type="button" className="cl-btn primary" onClick={() => setMonomers(m => Math.min(5, m + 1))}>+1 {pick(lang, 'Zip Monomer', 'Aggancia Monomero')}</button>
          </div>
        )}
        <Analogy
          lang={lang}
          en="Esters smell fruity when Acid + Alcohol snap together and squeeze out 1 water drop. Polymers unzip C=C double bonds to hook thousands of Lego monomers in a chain!"
          it="Gli esteri danno profumi di frutta unendo Acido + Alcol e scartando 1 goccia d’acqua. I polimeri aprono il doppio legame C=C per agganciare i monomeri a catena!"
        />
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import type { Language } from '../../types';
import { Analogy, fmt, pick, PlayToggle, Readout, Slider } from './chemLabShared';

// ---------------- L2 M1: Ionic Crystal Transfer vs Metallic Sea ----------------
export const IonicMetallicLab: React.FC<{ lang: Language }> = ({ lang }) => {
  const [tab, setTab] = useState<'ionic' | 'metal'>('ionic');
  const [transferred, setTransferred] = useState(true);
  const [hammered, setHammered] = useState(false);

  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 360 205" role="img" aria-label={pick(lang, 'Ionic transfer or metallic sea', 'Trasferimento ionico o mare di elettroni')}>
          {tab === 'ionic' ? (
            <>
              <text x="180" y="22" textAnchor="middle" fill="#ff6a3d" fontSize="13" fontWeight="800">
                {hammered
                  ? pick(lang, 'HAMMER HIT: + meets + → Crystal shatters!', 'URTO: + tocca + → Il cristallo si spezza!')
                  : transferred
                    ? pick(lang, 'IONIC TRANSFER: Na gives 1 e⁻ → Na⁺ & Cl⁻ lock!', 'TRASFERIMENTO: Na cede 1 e⁻ → Na⁺ e Cl⁻ si attraggono!')
                    : pick(lang, 'BEFORE: Neutral Na (1 outer e⁻) + Cl (7 outer e⁻)', 'PRIMA: Na neutro (1 e⁻ esterno) + Cl (7 e⁻ esterni)')}
              </text>
              {!hammered ? (
                <>
                  <circle cx="106" cy="96" r={transferred ? 24 : 34} fill="rgba(255,106,61,.25)" stroke="#ff6a3d" strokeWidth="2.5" />
                  <text x="106" y="102" textAnchor="middle" fill="#ffffff" fontSize="16" fontWeight="800">
                    {transferred ? 'Na⁺' : 'Na'}
                  </text>
                  <circle cx="246" cy="96" r={transferred ? 34 : 26} fill="rgba(56,239,125,.25)" stroke="#38ef7d" strokeWidth="2.5" />
                  <text x="246" y="102" textAnchor="middle" fill="#ffffff" fontSize="16" fontWeight="800">
                    {transferred ? 'Cl⁻' : 'Cl'}
                  </text>
                  {!transferred ? (
                    <circle cx="144" cy="96" r="5.5" fill="#ffd166" className="chem-anim-pulse" />
                  ) : (
                    <>
                      <path d="M132 76 Q176 48 212 76" fill="none" stroke="#ffd166" strokeWidth="2.5" className="chem-anim-dash" />
                      <circle cx="212" cy="76" r="5.5" fill="#ffd166" />
                      <text x="176" y="154" textAnchor="middle" fill="#ffd166" fontSize="12" fontWeight="700">
                        {pick(lang, 'Opposite charges attract into rigid + / − grid', 'Cariche opposte formano un reticolo rigido + / −')}
                      </text>
                    </>
                  )}
                </>
              ) : (
                <>
                  {/* Shifted broken crystal */}
                  {[0, 1, 2].map(c => (
                    <g key={`top-${c}`}>
                      <circle cx={100 + c * 46} cy="72" r="16" fill={c % 2 ? 'rgba(56,239,125,.3)' : 'rgba(255,106,61,.3)'} stroke={c % 2 ? '#38ef7d' : '#ff6a3d'} strokeWidth="2" />
                      <text x={100 + c * 46} y="77" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="800">{c % 2 ? '−' : '+'}</text>
                    </g>
                  ))}
                  {[0, 1, 2].map(c => (
                    <g key={`bot-${c}`}>
                      <circle cx={146 + c * 46} cy="112" r="16" fill={c % 2 ? 'rgba(255,106,61,.3)' : 'rgba(56,239,125,.3)'} stroke={c % 2 ? '#ff6a3d' : '#38ef7d'} strokeWidth="2" />
                      <text x={146 + c * 46} y="117" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="800">{c % 2 ? '+' : '−'}</text>
                    </g>
                  ))}
                  <text x="180" y="164" textAnchor="middle" fill="#ff5d8f" fontSize="12" fontWeight="800">
                    {pick(lang, '💥 Like charges repel cleanly along cleavage plane!', '💥 Cariche uguali si respingono e spaccano il sale!')}
                  </text>
                </>
              )}
            </>
          ) : (
            <>
              <text x="180" y="22" textAnchor="middle" fill="#ffd166" fontSize="13" fontWeight="800">
                {hammered
                  ? pick(lang, 'HAMMER HIT: Electron sea cushions layers — bends instead of breaking!', 'URTO: Il mare di elettroni ammortizza — il metallo si piega!')
                  : pick(lang, 'METALLIC SEA: Mobile e⁻ glide smoothly around metal cations', 'MARE DI ELETTRONI: Gli e⁻ scorrono liberi tra i cationi')}
              </text>
              <rect x="44" y="48" width="272" height="106" rx="16" fill="rgba(69,216,255,.12)" stroke="#45d8ff" strokeWidth="2" />
              {[0, 1, 2, 3].map(c => (
                <React.Fragment key={c}>
                  <circle cx={(hammered ? 98 : 86) + c * 56} cy="80" r="14" fill="rgba(255,209,102,.32)" stroke="#ffd166" strokeWidth="2" />
                  <text x={(hammered ? 98 : 86) + c * 56} y="85" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="800">Cu⁺</text>
                  <circle cx={86 + c * 56} cy="126" r="14" fill="rgba(255,209,102,.32)" stroke="#ffd166" strokeWidth="2" />
                  <text x={86 + c * 56} y="131" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="800">Cu⁺</text>
                </React.Fragment>
              ))}
              <path d="M56 103 H304" stroke="#45d8ff" strokeWidth="3" className="chem-anim-dash" />
              <text x="180" y="176" textAnchor="middle" fill="#38ef7d" fontSize="12" fontWeight="700">
                {pick(lang, 'Free electrons carry electricity & glue bent sheets together', 'Gli e⁻ liberi conducono corrente e tengono unite le lamine')}
              </text>
            </>
          )}
        </svg>
      </div>
      <div className="cl-controls">
        <div className="cl-mode-tabs">
          <button type="button" className={tab === 'ionic' ? 'active' : ''} onClick={() => { setTab('ionic'); setHammered(false); }}>
            {pick(lang, 'Ionic Crystal', 'Cristallo Ionico')}
          </button>
          <button type="button" className={tab === 'metal' ? 'active' : ''} onClick={() => { setTab('metal'); setHammered(false); }}>
            {pick(lang, 'Metallic Sea', 'Mare Metallico')}
          </button>
        </div>
        <div className="cl-actions">
          {tab === 'ionic' && (
            <button type="button" className="cl-btn primary" onClick={() => { setTransferred(t => !t); setHammered(false); }}>
              {transferred ? pick(lang, '↺ Reset Atoms', '↺ Torna Neutri') : pick(lang, '⚡ Transfer e⁻', '⚡ Trasferisci e⁻')}
            </button>
          )}
          <button type="button" className="cl-btn" onClick={() => setHammered(h => !h)}>
            🔨 {hammered ? pick(lang, 'Repair Lattice', 'Ripristina') : pick(lang, 'Strike with Hammer', 'Colpisci col Martello')}
          </button>
        </div>
        <Analogy
          lang={lang}
          en="Salt is like stiff magnets locked checkerboard-style (+/−/+): slide one row and magnets snap apart! Metals are balls floating in thick honey (e⁻ sea): squish them and they stay glued."
          it="Il sale è come calamite (+/−) a scacchiera: se sposti una fila si respingono e si spaccano. Il metallo è come sfere immerse nel miele (e⁻): puoi schiacciarle senza romperle!"
        />
      </div>
    </div>
  );
};

// ---------------- L2 M2: Animated Bond Polarity Tug-of-War ----------------
const ATOMS = [
  { sym: 'H', en: 2.2 },
  { sym: 'C', en: 2.55 },
  { sym: 'N', en: 3.04 },
  { sym: 'Cl', en: 3.16 },
  { sym: 'O', en: 3.44 },
  { sym: 'F', en: 3.98 },
  { sym: 'Na', en: 0.93 },
  { sym: 'Mg', en: 1.31 }
];

export const BondPolarityLab: React.FC<{ lang: Language }> = ({ lang }) => {
  const [leftIdx, setLeftIdx] = useState(0);
  const [rightIdx, setRightIdx] = useState(3);
  const left = ATOMS[leftIdx];
  const right = ATOMS[rightIdx];
  const diff = Math.abs(left.en - right.en);
  const kind = diff < 0.4 ? 'nonpolar' : diff <= 1.7 ? 'polar' : 'ionic';
  const shift = ((right.en - left.en) / 3.05) * 44;

  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 360 190" role="img" aria-label={pick(lang, 'Electron tug-of-war', 'Tiro alla fune degli elettroni')}>
          <ellipse
            cx={180 + shift}
            cy="92"
            rx={kind === 'ionic' ? 48 : 88}
            ry="44"
            fill={kind === 'ionic' ? 'rgba(255,106,61,.2)' : kind === 'polar' ? 'rgba(69,216,255,.22)' : 'rgba(56,239,125,.2)'}
            stroke={kind === 'ionic' ? '#ff6a3d' : kind === 'polar' ? '#45d8ff' : '#38ef7d'}
            strokeWidth="2"
            className="chem-anim-pulse"
          />
          <circle cx="106" cy="92" r="24" fill="#1b2048" stroke="#ffffff" strokeWidth="2" />
          <text x="106" y="98" textAnchor="middle" fill="#ffffff" fontSize="16" fontWeight="800">{left.sym}</text>
          <text x="106" y="132" textAnchor="middle" fill="#99a8cc" fontSize="11">χ = {fmt(lang, left.en, 2)}</text>

          <circle cx="254" cy="92" r="24" fill="#1b2048" stroke="#ffffff" strokeWidth="2" />
          <text x="254" y="98" textAnchor="middle" fill="#ffffff" fontSize="16" fontWeight="800">{right.sym}</text>
          <text x="254" y="132" textAnchor="middle" fill="#99a8cc" fontSize="11">χ = {fmt(lang, right.en, 2)}</text>

          <g className="chem-anim-vibrate">
            <circle cx={180 + shift} cy="86" r="5" fill="#ffd166" />
            <circle cx={180 + shift} cy="99" r="5" fill="#ffd166" />
          </g>
          {diff >= 0.4 && (
            <text x="180" y="164" textAnchor="middle" fill="#ffd166" fontSize="13" fontWeight="800">
              {left.en < right.en ? `${left.sym}(δ⁺) ──→ ${right.sym}(δ⁻)` : `${left.sym}(δ⁻) ←── ${right.sym}(δ⁺)`}
            </text>
          )}
        </svg>
      </div>
      <div className="cl-controls">
        <div className="cl-readout-row">
          <label className="cl-control">
            <span>{pick(lang, 'Atom A', 'Atomo A')}</span>
            <select value={leftIdx} onChange={e => setLeftIdx(Number(e.target.value))}>
              {ATOMS.map((a, i) => <option key={a.sym} value={i}>{a.sym} (χ={fmt(lang, a.en, 2)})</option>)}
            </select>
          </label>
          <label className="cl-control">
            <span>{pick(lang, 'Atom B', 'Atomo B')}</span>
            <select value={rightIdx} onChange={e => setRightIdx(Number(e.target.value))}>
              {ATOMS.map((a, i) => <option key={a.sym} value={i}>{a.sym} (χ={fmt(lang, a.en, 2)})</option>)}
            </select>
          </label>
        </div>
        <div className="cl-readout-row">
          <Readout label="Δχ = |χ_A − χ_B|" value={fmt(lang, diff, 2)} />
          <Readout
            label={pick(lang, 'Bond Type', 'Tipo di Legame')}
            value={kind === 'nonpolar' ? pick(lang, 'Nonpolar Covalent', 'Covalente Puro') : kind === 'polar' ? pick(lang, 'Polar Covalent', 'Covalente Polare') : pick(lang, 'Ionic', 'Ionico')}
          />
        </div>
        <Analogy
          lang={lang}
          en="Bonding is a tug-of-war over shared electrons: equal strength = fair share (nonpolar), stronger pull = hogged electrons (polar), total overpower = stolen e⁻ (ionic)!"
          it="Il legame è un tiro alla fune sugli elettroni: forza uguale = condivisione equa (puro), uno tira di più = nube spostata (polare), strappo netto = ionico!"
        />
      </div>
    </div>
  );
};

// ---------------- L2 M3: Animated VSEPR Shape & Dipole Simulator ----------------
const MOLECULES = [
  { formula: 'CO₂', shape: ['Linear', 'Lineare'] as const, angle: '180°', bonds: 2, lone: 0, polar: false, note: ['Two equal bond dipoles point opposite ways and cancel out.', 'Due dipoli uguali puntano in versi opposti e si annullano.'] },
  { formula: 'BF₃', shape: ['Trigonal planar', 'Trigonale planare'] as const, angle: '120°', bonds: 3, lone: 0, polar: false, note: ['Three identical bonds at 120° cancel symmetrically.', 'Tre legami identici a 120° formano risultante nulla.'] },
  { formula: 'CH₄', shape: ['Tetrahedral', 'Tetraedrica'] as const, angle: ['109.5°', '109,5°'] as const, bonds: 4, lone: 0, polar: false, note: ['Four C–H dipoles point symmetrically in 3D.', 'Quattro legami C–H simmetrici nello spazio 3D si annullano.'] },
  { formula: 'NH₃', shape: ['Trigonal pyramidal', 'Piramidale trigonale'] as const, angle: ['107°', '107°'] as const, bonds: 3, lone: 1, polar: true, note: ['One top lone pair pushes N–H bonds down; net upward dipole.', 'Una coppia solitaria in alto spinge giù i legami → molecola polare.'] },
  { formula: 'H₂O', shape: ['Bent (V-shaped)', 'Piegata (a V)'] as const, angle: ['104.5°', '104,5°'] as const, bonds: 2, lone: 2, polar: true, note: ['Two lone pairs compress H–O–H angle to 104.5°; strongly polar.', 'Due coppie solitarie comprimono l’angolo a 104,5° → fortemente polare.'] }
];

export const VseprShapeLab: React.FC<{ lang: Language }> = ({ lang }) => {
  const [idx, setIdx] = useState(4);
  const mol = MOLECULES[idx];

  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 360 190" role="img" aria-label={mol.formula}>
          <g className="chem-anim-float">
            <circle cx="180" cy="100" r="18" fill="#ff6a3d" />
            <text x="180" y="105" textAnchor="middle" fill="#ffffff" fontSize="14" fontWeight="800">{mol.formula.replace(/[₀₁₂₃₄]/g, '')}</text>
            {mol.formula === 'CO₂' && (
              <>
                <line x1="86" y1="100" x2="274" y2="100" stroke="#45d8ff" strokeWidth="4" />
                <circle cx="86" cy="100" r="14" fill="#ff5d8f" />
                <circle cx="274" cy="100" r="14" fill="#ff5d8f" />
              </>
            )}
            {mol.formula === 'BF₃' && (
              <>
                <line x1="180" y1="100" x2="180" y2="34" stroke="#45d8ff" strokeWidth="3.5" />
                <line x1="180" y1="100" x2="120" y2="140" stroke="#45d8ff" strokeWidth="3.5" />
                <line x1="180" y1="100" x2="240" y2="140" stroke="#45d8ff" strokeWidth="3.5" />
                <circle cx="180" cy="34" r="12" fill="#38ef7d" />
                <circle cx="120" cy="140" r="12" fill="#38ef7d" />
                <circle cx="240" cy="140" r="12" fill="#38ef7d" />
              </>
            )}
            {mol.formula === 'CH₄' && (
              <>
                <line x1="180" y1="100" x2="180" y2="34" stroke="#ffd166" strokeWidth="3" />
                <line x1="180" y1="100" x2="122" y2="136" stroke="#ffd166" strokeWidth="3" />
                <line x1="180" y1="100" x2="238" y2="136" stroke="#ffd166" strokeWidth="3" />
                <line x1="180" y1="100" x2="208" y2="152" stroke="#ffd166" strokeWidth="2.5" strokeDasharray="4 2" />
                {[[180, 34], [122, 136], [238, 136], [208, 152]].map(([x, y], i) => (
                  <circle key={i} cx={x} cy={y} r="10" fill="#ffffff" />
                ))}
              </>
            )}
            {mol.formula === 'NH₃' && (
              <>
                <ellipse cx="180" cy="54" rx="22" ry="12" fill="rgba(255,209,102,.32)" stroke="#ffd166" className="chem-anim-pulse" />
                <line x1="180" y1="100" x2="124" y2="142" stroke="#45d8ff" strokeWidth="3.5" />
                <line x1="180" y1="100" x2="180" y2="152" stroke="#45d8ff" strokeWidth="3.5" />
                <line x1="180" y1="100" x2="236" y2="142" stroke="#45d8ff" strokeWidth="3.5" />
                {[[124, 142], [180, 152], [236, 142]].map(([x, y], i) => (
                  <circle key={i} cx={x} cy={y} r="10" fill="#ffffff" />
                ))}
              </>
            )}
            {mol.formula === 'H₂O' && (
              <>
                <ellipse cx="152" cy="58" rx="16" ry="10" fill="rgba(255,209,102,.32)" stroke="#ffd166" className="chem-anim-pulse" />
                <ellipse cx="208" cy="58" rx="16" ry="10" fill="rgba(255,209,102,.32)" stroke="#ffd166" className="chem-anim-pulse" />
                <line x1="180" y1="100" x2="126" y2="144" stroke="#45d8ff" strokeWidth="3.5" />
                <line x1="180" y1="100" x2="234" y2="144" stroke="#45d8ff" strokeWidth="3.5" />
                <circle cx="126" cy="144" r="11" fill="#ffffff" />
                <circle cx="234" cy="144" r="11" fill="#ffffff" />
              </>
            )}
          </g>
          <text x="180" y="182" textAnchor="middle" fill={mol.polar ? '#ff5d8f' : '#38ef7d'} fontSize="13" fontWeight="800">
            {mol.polar ? pick(lang, 'Net Dipole μ ≠ 0 (POLAR)', 'Dipolo Netto μ ≠ 0 (POLARE)') : pick(lang, 'Symmetric Cancel μ = 0 (NONPOLAR)', 'Simmetria μ = 0 (APOLARE)')}
          </text>
        </svg>
      </div>
      <div className="cl-controls">
        <label className="cl-control">
          <span>{pick(lang, 'Molecule', 'Molecola')}</span>
          <select value={idx} onChange={e => setIdx(Number(e.target.value))}>
            {MOLECULES.map((m, i) => <option key={m.formula} value={i}>{m.formula} — {pick(lang, m.shape[0], m.shape[1])}</option>)}
          </select>
        </label>
        <div className="cl-readout-row">
          <Readout label={pick(lang, 'Shape & Angle', 'Forma e Angolo')} value={`${pick(lang, mol.shape[0], mol.shape[1])} · ${Array.isArray(mol.angle) ? pick(lang, mol.angle[0], mol.angle[1]) : mol.angle}`} />
          <Readout label={pick(lang, 'Pairs (Bond / Lone)', 'Coppie (Leg. / Sol.)')} value={`${mol.bonds} / ${mol.lone}`} />
        </div>
        <Analogy lang={lang} en={mol.note[0]} it={mol.note[1]} />
      </div>
    </div>
  );
};

// ---------------- L2 M4: Ion Criss-Cross Formula Builder ----------------
const CATIONS = [
  { sym: 'Na⁺', base: 'Na', chg: 1, iupac: ['Sodium', 'sodio'], trad: ['', ''] },
  { sym: 'Ca²⁺', base: 'Ca', chg: 2, iupac: ['Calcium', 'calcio'], trad: ['', ''] },
  { sym: 'Fe²⁺', base: 'Fe', chg: 2, iupac: ['Iron(II)', 'ferro(II)'], trad: ['Ferrous', 'ferroso'] },
  { sym: 'Fe³⁺', base: 'Fe', chg: 3, iupac: ['Iron(III)', 'ferro(III)'], trad: ['Ferric', 'ferrico'] },
  { sym: 'Al³⁺', base: 'Al', chg: 3, iupac: ['Aluminum', 'alluminio'], trad: ['', ''] }
];
const ANIONS = [
  { sym: 'Cl⁻', base: 'Cl', chg: 1, name: ['chloride', 'Cloruro di'] },
  { sym: 'O²⁻', base: 'O', chg: 2, name: ['oxide', 'Ossido di'] },
  { sym: 'S²⁻', base: 'S', chg: 2, name: ['sulfide', 'Solfuro di'] },
  { sym: 'N³⁻', base: 'N', chg: 3, name: ['nitride', 'Nitruro di'] }
];
const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));

export const CrissCrossLab: React.FC<{ lang: Language }> = ({ lang }) => {
  const [catIdx, setCatIdx] = useState(3); // Fe3+
  const [anIdx, setAnIdx] = useState(1); // O2-
  const cat = CATIONS[catIdx];
  const an = ANIONS[anIdx];
  const d = gcd(cat.chg, an.chg);
  const subC = an.chg / d;
  const subA = cat.chg / d;
  const subTxt = (n: number) => (n === 1 ? '' : String(n).replace(/[0-9]/g, ch => '₀₁₂₃₄₅₆₇₈₉'[Number(ch)]));
  const formula = `${cat.base}${subTxt(subC)}${an.base}${subTxt(subA)}`;

  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 360 195" role="img" aria-label={pick(lang, 'Criss-cross ion charge balancer', 'Incrocio dei numeri di ossidazione')}>
          <text x="180" y="24" textAnchor="middle" fill="#ffd166" fontSize="13" fontWeight="800">
            {pick(lang, 'CRISS-CROSS RULE · Charges cross down to subscripts', 'REGOLA DELL’INCROCIO · Le cariche si scambiano in basso')}
          </text>
          {/* Top ions */}
          <rect x="64" y="42" width="84" height="50" rx="10" fill="rgba(255,106,61,.18)" stroke="#ff6a3d" strokeWidth="2" />
          <text x="106" y="74" textAnchor="middle" fill="#ffffff" fontSize="22" fontWeight="800">{cat.sym}</text>
          <rect x="212" y="42" width="84" height="50" rx="10" fill="rgba(69,216,255,.18)" stroke="#45d8ff" strokeWidth="2" />
          <text x="254" y="74" textAnchor="middle" fill="#ffffff" fontSize="22" fontWeight="800">{an.sym}</text>
          {/* Crossed Arrows */}
          <path d="M128 84 L232 128" stroke="#ffd166" strokeWidth="2.5" className="chem-anim-dash" />
          <path d="M232 84 L128 128" stroke="#38ef7d" strokeWidth="2.5" className="chem-anim-dash" />
          {/* Resulting Formula */}
          <rect x="96" y="132" width="168" height="48" rx="12" fill="rgba(56,239,125,.14)" stroke="#38ef7d" strokeWidth="2.5" />
          <text x="180" y="164" textAnchor="middle" fill="#ffd166" fontSize="26" fontWeight="800">{formula}</text>
        </svg>
      </div>
      <div className="cl-controls">
        <div className="cl-readout-row">
          <label className="cl-control">
            <span>{pick(lang, 'Cation (+)', 'Catione (+)')}</span>
            <select value={catIdx} onChange={e => setCatIdx(Number(e.target.value))}>
              {CATIONS.map((c, i) => <option key={c.sym} value={i}>{c.sym}</option>)}
            </select>
          </label>
          <label className="cl-control">
            <span>{pick(lang, 'Anion (−)', 'Anione (−)')}</span>
            <select value={anIdx} onChange={e => setAnIdx(Number(e.target.value))}>
              {ANIONS.map((a, i) => <option key={a.sym} value={i}>{a.sym}</option>)}
            </select>
          </label>
        </div>
        <div className="cl-readout-row">
          <Readout label={pick(lang, 'Zero-Sum Check', 'Verifica Somma = 0')} value={`${subC}×(+${cat.chg}) + ${subA}×(−${an.chg}) = 0`} />
          <Readout label="IUPAC" value={lang === 'it' ? `${an.name[1]} ${cat.iupac[1]}` : `${cat.iupac[0]} ${an.name[0]}`} />
        </div>
        <Analogy
          lang={lang}
          en={`To pay a debt evenly between +${cat.chg} coins and −${an.chg} bills, simply swap the numbers (and simplify if both divide evenly)!`}
          it={`Per pareggiare esattamente +${cat.chg} e −${an.chg} fino a zero, basta incrociare i numeri in basso (e semplificare se divisibili)!`}
        />
      </div>
    </div>
  );
};

// ---------------- L2 M5: Acid, Base & Salt Synthesizer Flasks ----------------
const REACTIONS_L2M5 = [
  { label: ['Metal Oxide + H₂O → Hydroxide', 'Ossido Basico + H₂O → Idrossido'], left: 'CaO', right: 'H₂O', prod: 'Ca(OH)₂', note: ['Calcium hydroxide (base turns indicator blue!)', 'Idrossido di calcio (base: colore blu!)'], color: '#45d8ff' },
  { label: ['Acidic Oxide + H₂O → Oxyacid (-ico)', 'Anidride + H₂O → Ossiacido (-ico)'], left: 'SO₃', right: 'H₂O', prod: 'H₂SO₄', note: ['Sulfuric acid (-ic / -ico for higher +6 state)', 'Acido solforico (-ico perché S ha N.O. +6 alto)'], color: '#ff5d8f' },
  { label: ['Oxyacid + Base → Ternary Salt (-ato)', 'Ossiacido + Idrossido → Sale (-ato)'], left: 'HNO₃', right: 'NaOH', prod: 'NaNO₃ + H₂O', note: ['Nitric acid (-ic) becomes Sodium nitrATE (-ate / -ato)', 'Da acido nitrICO nasce nitrATO di sodio'], color: '#38ef7d' }
];

export const TernaryFlaskLab: React.FC<{ lang: Language }> = ({ lang }) => {
  const [rxnIdx, setRxnIdx] = useState(2);
  const rxn = REACTIONS_L2M5[rxnIdx];

  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 360 195" role="img" aria-label={rxn.prod}>
          <rect x="26" y="42" width="76" height="62" rx="10" fill="rgba(255,209,102,.12)" stroke="#ffd166" strokeWidth="2" />
          <text x="64" y="78" textAnchor="middle" fill="#ffd166" fontSize="16" fontWeight="800">{rxn.left}</text>
          <text x="120" y="78" textAnchor="middle" fill="#ffffff" fontSize="20" fontWeight="800">+</text>
          <rect x="138" y="42" width="76" height="62" rx="10" fill="rgba(69,216,255,.12)" stroke="#45d8ff" strokeWidth="2" />
          <text x="176" y="78" textAnchor="middle" fill="#45d8ff" fontSize="16" fontWeight="800">{rxn.right}</text>
          <path d="M222 73 H250" stroke={rxn.color} strokeWidth="3" className="chem-anim-dash" />
          {/* Product Flask */}
          <path d="M276 42 L276 68 L252 132 L336 132 L312 68 L312 42 Z" fill={rxn.color} fillOpacity="0.22" stroke={rxn.color} strokeWidth="2.5" />
          <circle cx="286" cy="116" r="4" fill="#ffffff" className="chem-anim-bubble" />
          <circle cx="304" cy="120" r="3.5" fill="#ffffff" className="chem-anim-bubble" style={{ animationDelay: '.5s' }} />
          <text x="294" y="156" textAnchor="middle" fill="#ffd166" fontSize="15" fontWeight="800">{rxn.prod}</text>
          <text x="180" y="182" textAnchor="middle" fill="#99a8cc" fontSize="11.5">{pick(lang, rxn.note[0], rxn.note[1])}</text>
        </svg>
      </div>
      <div className="cl-controls">
        <label className="cl-control">
          <span>{pick(lang, 'Synthesis Pathway', 'Percorso di Sintesi')}</span>
          <select value={rxnIdx} onChange={e => setRxnIdx(Number(e.target.value))}>
            {REACTIONS_L2M5.map((r, i) => <option key={r.prod} value={i}>{pick(lang, r.label[0], r.label[1])}</option>)}
          </select>
        </label>
        <div className="cl-formula">-oso → -ito &nbsp;|&nbsp; -ico → -ato</div>
        <Analogy
          lang={lang}
          en="Easy suffix trick: Metal + Water = Hydroxide (OH). Nonmetal Oxide + Water = Oxyacid (-ous / -ic). Mix them together to make a Salt (-ite / -ate)!"
          it="Trucco dei suffissi: Ossido + Acqua = Idrossido (OH). Anidride + Acqua = Ossiacido (-oso / -ico). Acido + Base = Sale (-ito / -ato)!"
        />
      </div>
    </div>
  );
};

// ---------------- L2 M6: Interactive Equation Balancer & Atom Beam Scale ----------------
const BAL_EQS = [
  { label: 'H₂ + O₂ → H₂O', r1: 'H₂', r2: 'O₂', p1: 'H₂O', ans: [2, 1, 2], counts: (a: number, b: number, c: number) => ({ lhs: { H: 2 * a, O: 2 * b }, rhs: { H: 2 * c, O: c } }) },
  { label: 'N₂ + H₂ → NH₃', r1: 'N₂', r2: 'H₂', p1: 'NH₃', ans: [1, 3, 2], counts: (a: number, b: number, c: number) => ({ lhs: { N: 2 * a, H: 2 * b }, rhs: { N: c, H: 3 * c } }) },
  { label: 'Fe + O₂ → Fe₂O₃', r1: 'Fe', r2: 'O₂', p1: 'Fe₂O₃', ans: [4, 3, 2], counts: (a: number, b: number, c: number) => ({ lhs: { Fe: a, O: 2 * b }, rhs: { Fe: 2 * c, O: 3 * c } }) }
];

export const EquationBalanceLab: React.FC<{ lang: Language }> = ({ lang }) => {
  const [eqIdx, setEqIdx] = useState(0);
  const [c1, setC1] = useState(1);
  const [c2, setC2] = useState(1);
  const [c3, setC3] = useState(1);
  const eq = BAL_EQS[eqIdx];
  const { lhs, rhs } = eq.counts(c1, c2, c3);
  const keys = Object.keys(lhs) as Array<keyof typeof lhs>;
  const balanced = keys.every(k => lhs[k] === rhs[k]);
  const lTotal = keys.reduce((s, k) => s + lhs[k], 0);
  const rTotal = keys.reduce((s, k) => s + rhs[k], 0);
  const tilt = Math.max(-14, Math.min(14, (rTotal - lTotal) * 2.4));

  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 360 195" role="img" aria-label={eq.label}>
          <text x="180" y="24" textAnchor="middle" fill={balanced ? '#38ef7d' : '#ffd166'} fontSize="15" fontWeight="800">
            {c1} {eq.r1} + {c2} {eq.r2} → {c3} {eq.p1} {balanced ? '✓' : ''}
          </text>
          {/* Atom Scale */}
          <polygon points="168,162 192,162 180,136" fill="#99a8cc" />
          <g transform={`rotate(${tilt} 180 134)`} style={{ transition: 'transform 0.25s ease' }}>
            <line x1="62" y1="134" x2="298" y2="134" stroke={balanced ? '#38ef7d' : '#ffd166'} strokeWidth="4" strokeLinecap="round" />
            <rect x="44" y="84" width="108" height="44" rx="8" fill="rgba(69,216,255,.14)" stroke="#45d8ff" />
            <text x="98" y="102" textAnchor="middle" fill="#45d8ff" fontSize="11" fontWeight="700">{pick(lang, 'Reactants', 'Reagenti')}</text>
            <text x="98" y="120" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="800">
              {keys.map(k => `${k}:${lhs[k]}`).join('  ')}
            </text>

            <rect x="208" y="84" width="108" height="44" rx="8" fill="rgba(56,239,125,.14)" stroke="#38ef7d" />
            <text x="262" y="102" textAnchor="middle" fill="#38ef7d" fontSize="11" fontWeight="700">{pick(lang, 'Products', 'Prodotti')}</text>
            <text x="262" y="120" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="800">
              {keys.map(k => `${k}:${rhs[k]}`).join('  ')}
            </text>
          </g>
          <text x="180" y="182" textAnchor="middle" fill={balanced ? '#38ef7d' : '#ff6a3d'} fontSize="12" fontWeight="800">
            {balanced
              ? pick(lang, '⚖️ Balanced! Same atoms on both pans!', '⚖️ Bilanciata! Stessi atomi sui due piatti!')
              : pick(lang, 'Adjust front coefficients until both pans match!', 'Modifica i coefficienti davanti finché i piatti sono in pari!')}
          </text>
        </svg>
      </div>
      <div className="cl-controls">
        <label className="cl-control">
          <span>{pick(lang, 'Reaction', 'Reazione')}</span>
          <select value={eqIdx} onChange={e => { setEqIdx(Number(e.target.value)); setC1(1); setC2(1); setC3(1); }}>
            {BAL_EQS.map((q, i) => <option key={q.label} value={i}>{q.label}</option>)}
          </select>
        </label>
        <div className="cl-eq-row">
          <div className="cl-coeff">
            <button type="button" onClick={() => setC1(v => Math.max(1, v - 1))}>−</button>
            <span>{c1} {eq.r1}</span>
            <button type="button" onClick={() => setC1(v => Math.min(5, v + 1))}>+</button>
          </div>
          <div className="cl-coeff">
            <button type="button" onClick={() => setC2(v => Math.max(1, v - 1))}>−</button>
            <span>{c2} {eq.r2}</span>
            <button type="button" onClick={() => setC2(v => Math.min(5, v + 1))}>+</button>
          </div>
          <div className="cl-coeff">
            <button type="button" onClick={() => setC3(v => Math.max(1, v - 1))}>−</button>
            <span>{c3} {eq.p1}</span>
            <button type="button" onClick={() => setC3(v => Math.min(5, v + 1))}>+</button>
          </div>
        </div>
        <Analogy
          lang={lang}
          en="You can change how many packs you buy (big front numbers), NEVER open a sealed pack and change subscripts like H₂O → H₂O₂!"
          it="Puoi cambiare il numero di confezioni (coefficienti davanti), MAI cambiare i numerini piccoli dentro la formula!"
        />
      </div>
    </div>
  );
};

// ---------------- L2 M7: 3-Step Stoichiometry Mole Bridge ----------------
export const MoleBridgeLab: React.FC<{ lang: Language }> = ({ lang }) => {
  const [massH2, setMassH2] = useState(4.0);
  const nH2 = massH2 / 2.016;
  const nH2O = nH2; // 2 H2 : 2 H2O -> 1:1
  const massH2O = nH2O * 18.015;

  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 360 190" role="img" aria-label={pick(lang, '3-step mole bridge', 'Ponte della mole in 3 passi')}>
          <text x="180" y="24" textAnchor="middle" fill="#ffd166" fontSize="13" fontWeight="800">2 H₂ + O₂ → 2 H₂O</text>
          {[
            { x: 16, lbl: pick(lang, '1. Mass H₂', '1. Massa H₂'), val: `${fmt(lang, massH2, 1)} g`, col: '#45d8ff' },
            { x: 100, lbl: '2. n(H₂)', val: `${fmt(lang, nH2, 2)} mol`, col: '#ffd166' },
            { x: 184, lbl: '3. n(H₂O)', val: `${fmt(lang, nH2O, 2)} mol`, col: '#38ef7d' },
            { x: 268, lbl: pick(lang, '4. Mass H₂O', '4. Massa H₂O'), val: `${fmt(lang, massH2O, 1)} g`, col: '#ff6a3d' }
          ].map((box, i) => (
            <g key={i}>
              <rect x={box.x} y="56" width="76" height="72" rx="10" fill="rgba(255,255,255,.05)" stroke={box.col} strokeWidth="2" />
              <text x={box.x + 38} y="82" textAnchor="middle" fill={box.col} fontSize="10.5" fontWeight="800">{box.lbl}</text>
              <text x={box.x + 38} y="108" textAnchor="middle" fill="#ffffff" fontSize="12.5" fontWeight="800">{box.val}</text>
              {i < 3 && <line x1={box.x + 76} y1="92" x2={box.x + 84} y2="92" stroke="#ffd166" strokeWidth="3" className="chem-anim-dash" />}
            </g>
          ))}
          <text x="180" y="162" textAnchor="middle" fill="#99a8cc" fontSize="11.5">
            {`÷ ${fmt(lang, 2.02, 2)} g/mol   →   × ${pick(lang, '(2/2 ratio)', '(rapporto 2/2)')}   →   × ${fmt(lang, 18.02, 2)} g/mol`}
          </text>
        </svg>
      </div>
      <div className="cl-controls">
        <Slider label={pick(lang, 'Reacting H₂ mass', 'Massa di H₂ reagente')} value={massH2} min={2} max={20} step={1} decimals={1} unit="g" lang={lang} onChange={setMassH2} />
        <div className="cl-readout-row">
          <Readout label={pick(lang, 'Moles (Both)', 'Moli (Uguali 2:2)')} value={`${fmt(lang, nH2, 2)} mol`} />
          <Readout label={pick(lang, 'Water Produced', 'Acqua Prodotta')} value={`${fmt(lang, massH2O, 1)} g`} />
        </div>
        <Analogy
          lang={lang}
          en="Recipes count ITEMS (2 slices + 1 cheese), not grams! Convert grams → moles first, follow the recipe ratio, then convert back to grams."
          it="Le ricette contano i PEZZI (moli), mai i grammi! Prima trasforma i grammi in moli, usa il rapporto dell’equazione, poi torna ai grammi."
        />
      </div>
    </div>
  );
};

// ---------------- L2 M8: Animated Limiting Reagent & Yield Bench ----------------
export const LimitingYieldLab: React.FC<{ lang: Language }> = ({ lang }) => {
  const [molH2, setMolH2] = useState(4.0);
  const [molO2, setMolO2] = useState(3.0);
  const [yieldPct, setYieldPct] = useState(85);
  const h2Ratio = molH2 / 2;
  const o2Ratio = molO2 / 1;
  const limiting = Math.abs(h2Ratio - o2Ratio) < 0.05 ? 'none' : h2Ratio < o2Ratio ? 'H₂' : 'O₂';
  const theoreticalH2O = Math.min(molH2, 2 * molO2);
  const actualH2O = theoreticalH2O * (yieldPct / 100);
  const excessO2 = Math.max(0, molO2 - theoreticalH2O / 2);
  const excessH2 = Math.max(0, molH2 - theoreticalH2O);

  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 360 190" role="img" aria-label={pick(lang, 'Limiting reagent reactor', 'Reattore del reagente limitante')}>
          <rect x="24" y="20" width="312" height="150" rx="14" fill="rgba(56,239,125,.05)" stroke="#38ef7d" strokeWidth="2" />
          <text x="180" y="42" textAnchor="middle" fill="#ffd166" fontSize="13" fontWeight="800">
            2 H₂ + O₂ → 2 H₂O
          </text>
          {/* Product molecules */}
          {Array.from({ length: Math.min(8, Math.round(actualH2O)) }, (_, i) => (
            <g key={`p-${i}`} transform={`translate(${54 + i * 36}, 92)`} className="chem-anim-float" style={{ animationDelay: `${i * 0.15}s` }}>
              <circle cx="0" cy="0" r="9" fill="#45d8ff" />
              <circle cx="-10" cy="7" r="4.5" fill="#ffffff" />
              <circle cx="10" cy="7" r="4.5" fill="#ffffff" />
            </g>
          ))}
          <text x="180" y="138" textAnchor="middle" fill={limiting === 'none' ? '#38ef7d' : '#ff6a3d'} fontSize="13" fontWeight="800">
            {limiting === 'none'
              ? pick(lang, 'Exact stoichiometric mix!', 'Miscela stechiometrica perfetta!')
              : `${pick(lang, 'Limiting:', 'Limitante:')} ${limiting} · ${pick(lang, 'Leftover:', 'Avanzo:')} ${excessH2 > 0 ? `${fmt(lang, excessH2, 1)} mol H₂` : `${fmt(lang, excessO2, 1)} mol O₂`}`}
          </text>
        </svg>
      </div>
      <div className="cl-controls">
        <Slider label={pick(lang, 'Initial H₂', 'H₂ Iniziale')} value={molH2} min={1} max={8} step={0.5} decimals={1} unit="mol" lang={lang} onChange={setMolH2} />
        <Slider label={pick(lang, 'Initial O₂', 'O₂ Iniziale')} value={molO2} min={0.5} max={5} step={0.5} decimals={1} unit="mol" lang={lang} onChange={setMolO2} />
        <Slider label={pick(lang, 'Percent Yield', 'Resa Percentuale')} value={yieldPct} min={40} max={100} step={5} unit="%" lang={lang} onChange={setYieldPct} />
        <div className="cl-readout-row">
          <Readout label={pick(lang, 'Theoretical H₂O', 'Resa Teorica')} value={`${fmt(lang, theoreticalH2O, 2)} mol`} />
          <Readout label={pick(lang, 'Actual Yield', 'Resa Effettiva')} value={`${fmt(lang, actualH2O, 2)} mol`} />
        </div>
      </div>
    </div>
  );
};

// ---------------- L2 M9: Animated Molarity & Dilution Pouring Lab ----------------
export const SolutionsLab: React.FC<{ lang: Language }> = ({ lang }) => {
  const [mode, setMode] = useState<'make' | 'dilute'>('make');
  const [soluteMol, setSoluteMol] = useState(0.5);
  const [volumeL, setVolumeL] = useState(1.0);
  const [stockM, setStockM] = useState(2.0);
  const [v1mL, setV1mL] = useState(100);
  const [waterAdd, setWaterAdd] = useState(300);

  const M = mode === 'make' ? soluteMol / volumeL : (stockM * v1mL) / (v1mL + waterAdd);
  const fillOpacity = Math.min(0.85, Math.max(0.14, M * 0.25));

  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 360 190" role="img" aria-label={pick(lang, 'Solution concentration beaker', 'Becher di concentrazione')}>
          {mode === 'dilute' && (
            <path d="M180 18 L180 68" stroke="#45d8ff" strokeWidth="5" className="chem-anim-dash" />
          )}
          <path d="M114 48 L114 162 Q114 174 126 174 L234 174 Q246 174 246 162 L246 48" fill="none" stroke="#99a8cc" strokeWidth="2.5" />
          <rect x="118" y={170 - (mode === 'make' ? (volumeL / 2) * 105 : Math.min(110, ((v1mL + waterAdd) / 800) * 105))} width="124" height={mode === 'make' ? (volumeL / 2) * 105 : Math.min(110, ((v1mL + waterAdd) / 800) * 105)} rx="6" fill={`rgba(56,239,125,${fillOpacity})`} />
          {Array.from({ length: Math.min(14, Math.max(4, Math.round(M * 6))) }, (_, i) => (
            <circle key={i} cx={136 + ((i * 29) % 88)} cy={96 + ((i * 19) % 62)} r="4" fill="#ffd166" className="chem-anim-float" style={{ animationDelay: `${(i % 4) * 0.2}s` }} />
          ))}
          <text x="180" y="188" textAnchor="middle" fill="#ffd166" fontSize="13" fontWeight="800">
            M = {fmt(lang, M, 2)} mol/L
          </text>
        </svg>
      </div>
      <div className="cl-controls">
        <div className="cl-mode-tabs">
          <button type="button" className={mode === 'make' ? 'active' : ''} onClick={() => setMode('make')}>M = n / V</button>
          <button type="button" className={mode === 'dilute' ? 'active' : ''} onClick={() => setMode('dilute')}>M₁V₁ = M₂V₂</button>
        </div>
        {mode === 'make' ? (
          <>
            <Slider label={pick(lang, 'Solute Moles (n)', 'Moli Soluto (n)')} value={soluteMol} min={0.1} max={2.0} step={0.1} decimals={1} unit="mol" lang={lang} onChange={setSoluteMol} />
            <Slider label={pick(lang, 'Solution Volume (V)', 'Volume Soluzione (V)')} value={volumeL} min={0.25} max={2.0} step={0.25} decimals={2} unit="L" lang={lang} onChange={setVolumeL} />
          </>
        ) : (
          <>
            <Slider label={pick(lang, 'Stock Molarity (M₁)', 'Molarità Madre (M₁)')} value={stockM} min={0.5} max={4.0} step={0.5} decimals={1} unit="M" lang={lang} onChange={setStockM} />
            <Slider label={pick(lang, 'Water Added (+V)', 'Acqua Aggiunta (+V)')} value={waterAdd} min={0} max={500} step={50} unit="mL" lang={lang} onChange={setWaterAdd} />
          </>
        )}
        <Analogy
          lang={lang}
          en="Like fruit syrup in water: adding more water doesn't remove any syrup molecules, it just spreads them thinner so the color & molarity fade!"
          it="Come lo sciroppo nell’acqua: aggiungere acqua non toglie sciroppo (moli uguali!), lo diluisce soltanto rendendo il colore e M più deboli!"
        />
      </div>
    </div>
  );
};

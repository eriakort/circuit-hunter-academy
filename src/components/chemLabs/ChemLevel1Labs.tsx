import React, { useMemo, useState } from 'react';
import type { Language } from '../../types';
import { Analogy, fmt, pick, PlayToggle, Readout, Slider } from './chemLabShared';

type Props = { missionId: string; lang: Language };

// ---------------- L1 M1: States of Matter & Physical vs Chemical ----------------
export const StatesTransformLab: React.FC<{ lang: Language }> = ({ lang }) => {
  const [tab, setTab] = useState<'phase' | 'change'>('phase');
  const [temp, setTemp] = useState(25);
  const [playing, setPlaying] = useState(true);
  const [changeKind, setChangeKind] = useState<'physical' | 'chemical'>('physical');

  const phase: 'solid' | 'liquid' | 'gas' = temp < 0 ? 'solid' : temp < 100 ? 'liquid' : 'gas';
  const phaseColor = phase === 'solid' ? '#45d8ff' : phase === 'liquid' ? '#38ef7d' : '#ffd166';
  const animCls = !playing
    ? ''
    : phase === 'solid'
      ? 'chem-anim-vibrate'
      : phase === 'liquid'
        ? 'chem-anim-float'
        : 'chem-anim-bounce-fast';

  return (
    <div className={`cl-grid ${!playing ? 'chem-paused' : ''}`}>
      <div className="cl-visual">
        {tab === 'phase' ? (
          <svg viewBox="0 0 360 210" role="img" aria-label={pick(lang, 'Particle chamber by temperature', 'Camera delle particelle per temperatura')}>
            {/* Thermometer */}
            <rect x="20" y="24" width="22" height="162" rx="11" fill="rgba(255,255,255,.06)" stroke="#99a8cc" strokeWidth="1.5" />
            <rect
              x="25"
              y={170 - ((temp + 30) / 180) * 130}
              width="12"
              height={Math.max(12, ((temp + 30) / 180) * 130 + 6)}
              rx="6"
              fill={phaseColor}
            />
            <circle cx="31" cy="176" r="13" fill={phaseColor} />
            <text x="31" y="18" textAnchor="middle" fill={phaseColor} fontSize="11" fontWeight="800">
              {temp} °C
            </text>

            {/* Beaker / Chamber */}
            <rect x="74" y="26" width="260" height="156" rx="14" fill="rgba(255,255,255,.04)" stroke={phaseColor} strokeWidth="2.5" />
            {phase === 'liquid' && (
              <rect x="76" y="106" width="256" height="74" rx="10" fill="rgba(56,239,125,.12)" />
            )}
            {phase === 'gas' && (
              <rect x="76" y="28" width="256" height="152" rx="12" fill="rgba(255,209,102,.08)" />
            )}
            <text x="204" y="46" textAnchor="middle" fill={phaseColor} fontSize="13" fontWeight="800">
              {phase === 'solid'
                ? pick(lang, 'SOLID · Tightly locked grid', 'SOLIDO · Reticolo ordinato')
                : phase === 'liquid'
                  ? pick(lang, 'LIQUID · Sliding past each other', 'LIQUIDO · Scorrono vicine')
                  : pick(lang, 'GAS · Fast collisions everywhere', 'AERIFORME · Libere e veloci')}
            </text>

            {phase === 'solid' &&
              [0, 1, 2, 3].flatMap(r =>
                [0, 1, 2, 3, 4].map(c => (
                  <circle
                    key={`s-${r}-${c}`}
                    className={animCls}
                    style={{ animationDelay: `${((r + c) % 4) * 0.08}s` }}
                    cx={146 + c * 28}
                    cy={82 + r * 24}
                    r="9"
                    fill="#45d8ff"
                    stroke="#0b1026"
                    strokeWidth="1.5"
                  />
                ))
              )}

            {phase === 'liquid' &&
              Array.from({ length: 16 }, (_, i) => (
                <circle
                  key={`l-${i}`}
                  className={animCls}
                  style={{ animationDelay: `${(i % 5) * 0.3}s` }}
                  cx={98 + (i % 8) * 30 + (i > 7 ? 10 : 0)}
                  cy={126 + Math.floor(i / 8) * 30}
                  r="9"
                  fill="#38ef7d"
                  stroke="#0b1026"
                  strokeWidth="1.5"
                />
              ))}

            {phase === 'gas' &&
              [
                [112, 72],
                [172, 92],
                [238, 68],
                [294, 88],
                [134, 134],
                [202, 146],
                [268, 128],
                [306, 152],
                [152, 66],
                [252, 102]
              ].map(([x, y], i) => (
                <g key={`g-${i}`} className={animCls} style={{ animationDelay: `${(i % 4) * 0.25}s` }}>
                  <circle cx={x} cy={y} r="7.5" fill="#ffd166" />
                  <line x1={x} y1={y} x2={x + (i % 2 ? 12 : -12)} y2={y - 8} stroke="#ffd166" strokeWidth="1.5" strokeOpacity="0.6" />
                </g>
              ))}
          </svg>
        ) : (
          <svg viewBox="0 0 360 210" role="img" aria-label={pick(lang, 'Physical vs Chemical change', 'Trasformazione fisica o chimica')}>
            <rect x="12" y="20" width="336" height="170" rx="14" fill="rgba(255,255,255,.04)" stroke={changeKind === 'physical' ? '#45d8ff' : '#ff6a3d'} strokeWidth="2" />
            {changeKind === 'physical' ? (
              <>
                <text x="180" y="44" textAnchor="middle" fill="#45d8ff" fontSize="13" fontWeight="800">
                  {pick(lang, 'PHYSICAL: Same H₂O molecules, just unlocked!', 'FISICA: Stesse molecole H₂O, solo più libere!')}
                </text>
                {[82, 120].map((x, i) => (
                  <g key={i} transform={`translate(${x}, 96)`} className={playing ? 'chem-anim-vibrate' : ''}>
                    <circle cx="0" cy="0" r="10" fill="#ff5d8f" />
                    <circle cx="-11" cy="9" r="5.5" fill="#ffffff" />
                    <circle cx="11" cy="9" r="5.5" fill="#ffffff" />
                  </g>
                ))}
                <text x="180" y="106" textAnchor="middle" fill="#ffd166" fontSize="20" fontWeight="800">
                  →
                </text>
                {[240, 286].map((x, i) => (
                  <g key={i} transform={`translate(${x}, ${88 + i * 24})`} className={playing ? 'chem-anim-float' : ''}>
                    <circle cx="0" cy="0" r="10" fill="#ff5d8f" />
                    <circle cx="-11" cy="9" r="5.5" fill="#ffffff" />
                    <circle cx="11" cy="9" r="5.5" fill="#ffffff" />
                  </g>
                ))}
                <text x="180" y="168" textAnchor="middle" fill="#99a8cc" fontSize="12">
                  {pick(lang, 'Ice → Liquid water (reversible, zero new formulas)', 'Ghiaccio → Acqua liquida (reversibile, formula identica)')}
                </text>
              </>
            ) : (
              <>
                <text x="180" y="44" textAnchor="middle" fill="#ff6a3d" fontSize="13" fontWeight="800">
                  {pick(lang, 'CHEMICAL: Atoms swap partners & build NEW molecules!', 'CHIMICA: Gli atomi cambiano partner e creano NUOVE molecole!')}
                </text>
                {/* Methane + O2 */}
                <g transform="translate(76, 98)">
                  <circle cx="0" cy="0" r="11" fill="#99a8cc" />
                  <circle cx="-14" cy="0" r="5" fill="#ffffff" />
                  <circle cx="14" cy="0" r="5" fill="#ffffff" />
                  <circle cx="0" cy="-14" r="5" fill="#ffffff" />
                  <circle cx="0" cy="14" r="5" fill="#ffffff" />
                </g>
                <g transform="translate(130, 98)" className={playing ? 'chem-anim-float' : ''}>
                  <circle cx="-8" cy="0" r="8" fill="#ff5d8f" />
                  <circle cx="8" cy="0" r="8" fill="#ff5d8f" />
                </g>
                <text x="180" y="105" textAnchor="middle" fill="#ffd166" fontSize="20" fontWeight="800">
                  🔥→
                </text>
                {/* CO2 + H2O */}
                <g transform="translate(238, 98)" className={playing ? 'chem-anim-pulse' : ''}>
                  <circle cx="-14" cy="0" r="8" fill="#ff5d8f" />
                  <circle cx="0" cy="0" r="10" fill="#99a8cc" />
                  <circle cx="14" cy="0" r="8" fill="#ff5d8f" />
                </g>
                <g transform="translate(296, 102)" className={playing ? 'chem-anim-float' : ''}>
                  <circle cx="0" cy="0" r="8" fill="#ff5d8f" />
                  <circle cx="-9" cy="8" r="4.5" fill="#ffffff" />
                  <circle cx="9" cy="8" r="4.5" fill="#ffffff" />
                </g>
                <text x="180" y="168" textAnchor="middle" fill="#ffd166" fontSize="12">
                  {pick(lang, 'CH₄ + 2 O₂ → CO₂ + 2 H₂O (new substances formed!)', 'CH₄ + 2 O₂ → CO₂ + 2 H₂O (nascono sostanze nuove!)')}
                </text>
              </>
            )}
          </svg>
        )}
      </div>

      <div className="cl-controls">
        <div className="cl-mode-tabs">
          <button type="button" className={tab === 'phase' ? 'active' : ''} onClick={() => setTab('phase')}>
            {pick(lang, 'States of Matter', 'Stati di Aggregazione')}
          </button>
          <button type="button" className={tab === 'change' ? 'active' : ''} onClick={() => setTab('change')}>
            {pick(lang, 'Physical vs Chemical', 'Fisica vs Chimica')}
          </button>
        </div>
        {tab === 'phase' ? (
          <>
            <Slider label={pick(lang, 'Temperature', 'Temperatura')} value={temp} min={-30} max={150} step={5} unit="°C" lang={lang} onChange={setTemp} />
            <div className="cl-readout-row">
              <Readout label={pick(lang, 'Current Phase', 'Stato Attuale')} value={phase === 'solid' ? pick(lang, 'Solid (Ice)', 'Solido (Ghiaccio)') : phase === 'liquid' ? pick(lang, 'Liquid', 'Liquido') : pick(lang, 'Gas (Steam)', 'Gas (Vapore)')} />
              <Readout label={pick(lang, 'Kelvin', 'Kelvin')} value={`${fmt(lang, temp + 273.15, 1)} K`} />
            </div>
          </>
        ) : (
          <div className="cl-mode-tabs">
            <button type="button" className={changeKind === 'physical' ? 'active' : ''} onClick={() => setChangeKind('physical')}>
              {pick(lang, 'Ice Melting (Physical)', 'Fusione (Fisica)')}
            </button>
            <button type="button" className={changeKind === 'chemical' ? 'active' : ''} onClick={() => setChangeKind('chemical')}>
              {pick(lang, 'Gas Burning (Chemical)', 'Combustione (Chimica)')}
            </button>
          </div>
        )}
        <PlayToggle playing={playing} onToggle={() => setPlaying(p => !p)} lang={lang} />
        <Analogy
          lang={lang}
          en="Think of particles like dancers: frozen in neat rows (solid), holding hands and weaving (liquid), or sprinting across the whole room (gas)!"
          it="Pensa alle particelle come a ballerini: fermi in fila (solido), vicini che scorrono tra loro (liquido) o liberi di correre ovunque (gas)!"
        />
      </div>
    </div>
  );
};

// ---------------- L1 M2: Pure Substances vs Mixtures Microscope ----------------
export const MixturesLensLab: React.FC<{ lang: Language }> = ({ lang }) => {
  const [sample, setSample] = useState<'elem' | 'comp' | 'homo' | 'hetero'>('homo');
  const [stirSeed, setStirSeed] = useState(0);

  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 360 210" role="img" aria-label={pick(lang, 'Beaker and particle magnifier', 'Becher con lente sulle particelle')}>
          {/* Beaker */}
          <path d="M36 44 L36 172 Q36 184 48 184 L132 184 Q144 184 144 172 L144 44" fill="rgba(69,216,255,.07)" stroke="#99a8cc" strokeWidth="2.5" />
          {sample === 'elem' && <rect x="44" y="138" width="92" height="42" rx="4" fill="#ffd166" opacity="0.85" />}
          {sample === 'comp' && <rect x="40" y="88" width="100" height="92" rx="6" fill="rgba(69,216,255,.35)" />}
          {sample === 'homo' && (
            <>
              <rect x="40" y="88" width="100" height="92" rx="6" fill="rgba(56,239,125,.28)" />
              <circle cx="72" cy="116" r="3" fill="#ffd166" className="chem-anim-float" />
              <circle cx="108" cy="144" r="3" fill="#ff5d8f" className="chem-anim-float" />
            </>
          )}
          {sample === 'hetero' && (
            <>
              <rect x="40" y="110" width="100" height="70" rx="6" fill="rgba(69,216,255,.28)" />
              <rect x="40" y="86" width="100" height="24" rx="4" fill="rgba(255,209,102,.5)" />
              {[54, 70, 88, 106, 122, 64, 96, 114].map((x, i) => (
                <circle key={i} cx={x} cy={172 - (i % 2) * 6} r="4.5" fill="#d99b52" />
              ))}
            </>
          )}
          <text x="90" y="28" textAnchor="middle" fill="#ffd166" fontSize="12" fontWeight="800">
            {pick(lang, 'Lab Beaker', 'Becher Reale')}
          </text>

          {/* Zoom Bridge */}
          <line x1="126" y1="120" x2="188" y2="105" stroke="#45d8ff" strokeWidth="1.5" strokeDasharray="4 3" />
          {/* Zoomed Particle Lens */}
          <circle cx="264" cy="105" r="76" fill="rgba(10,14,40,.92)" stroke="#45d8ff" strokeWidth="3" />
          <text x="264" y="20" textAnchor="middle" fill="#45d8ff" fontSize="12" fontWeight="800">
            {pick(lang, 'Microscope Lens', 'Lente Molecolare')}
          </text>

          {sample === 'elem' &&
            [0, 1, 2].flatMap(r =>
              [0, 1, 2].map(c => (
                <circle key={`${r}-${c}-${stirSeed}`} cx={232 + c * 32} cy={74 + r * 32} r="11" fill="#ffd166" className="chem-anim-vibrate" />
              ))
            )}

          {sample === 'comp' &&
            [
              [234, 80],
              [288, 86],
              [248, 132],
              [294, 136]
            ].map(([x, y], i) => (
              <g key={`${i}-${stirSeed}`} transform={`translate(${x}, ${y})`} className="chem-anim-float">
                <circle cx="0" cy="0" r="10" fill="#ff5d8f" />
                <circle cx="-11" cy="8" r="5.5" fill="#ffffff" />
                <circle cx="11" cy="8" r="5.5" fill="#ffffff" />
              </g>
            ))}

          {sample === 'homo' &&
            [
              [224, 78, '#45d8ff'],
              [262, 68, '#ffd166'],
              [298, 92, '#38ef7d'],
              [232, 128, '#38ef7d'],
              [274, 122, '#45d8ff'],
              [254, 148, '#ffd166'],
              [304, 132, '#45d8ff']
            ].map(([x, y, col], i) => (
              <circle key={`${i}-${stirSeed}`} cx={Number(x)} cy={Number(y)} r="8.5" fill={String(col)} className="chem-anim-float" style={{ animationDelay: `${i * 0.15}s` }} />
            ))}

          {sample === 'hetero' && (
            <>
              <rect x="202" y="54" width="124" height="32" rx="14" fill="rgba(255,209,102,.32)" />
              {[224, 250, 276, 302].map((x, i) => (
                <circle key={`o-${i}-${stirSeed}`} cx={x} cy={70} r="8" fill="#ffd166" />
              ))}
              {[226, 264, 296].map((x, i) => (
                <circle key={`w-${i}-${stirSeed}`} cx={x} cy={108} r="7" fill="#45d8ff" className="chem-anim-float" />
              ))}
              {[220, 240, 260, 280, 300].map((x, i) => (
                <rect key={`s-${i}-${stirSeed}`} x={x - 7} y={142 + (i % 2) * 5} width="14" height="12" rx="3" fill="#d99b52" />
              ))}
            </>
          )}
        </svg>
      </div>

      <div className="cl-controls">
        <div className="cl-mode-tabs">
          <button type="button" className={sample === 'elem' ? 'active' : ''} onClick={() => setSample('elem')}>
            {pick(lang, 'Pure Element (Au)', 'Elemento Puro (Au)')}
          </button>
          <button type="button" className={sample === 'comp' ? 'active' : ''} onClick={() => setSample('comp')}>
            {pick(lang, 'Pure Compound (H₂O)', 'Composto Puro (H₂O)')}
          </button>
          <button type="button" className={sample === 'homo' ? 'active' : ''} onClick={() => setSample('homo')}>
            {pick(lang, 'Homogeneous (Salt+H₂O)', 'Omogeneo (Acqua+Sale)')}
          </button>
          <button type="button" className={sample === 'hetero' ? 'active' : ''} onClick={() => setSample('hetero')}>
            {pick(lang, 'Heterogeneous (Oil+Sand)', 'Eterogeneo (Olio+Sabbia)')}
          </button>
        </div>
        <div className="cl-readout-row">
          <Readout
            label={pick(lang, 'Category', 'Categoria')}
            value={sample === 'elem' || sample === 'comp' ? pick(lang, 'Pure Substance', 'Sostanza Pura') : pick(lang, 'Mixture', 'Miscuglio')}
          />
          <Readout label={pick(lang, 'Visible Phases', 'Fasi Visibili')} value={sample === 'hetero' ? '3 (Oil, H₂O, Sand)' : '1'} />
        </div>
        <button type="button" className="cl-btn" onClick={() => setStirSeed(s => s + 1)}>
          🌀 {pick(lang, 'Stir sample', 'Mescola campione')}
        </button>
        <Analogy
          lang={lang}
          en="A pure substance is like a box of identical bricks. A mixture puts different bricks together—evenly mixed (1 phase) or stacked in layers (2+ phases)."
          it="Una sostanza pura ha mattoncini tutti identici. Un miscuglio unisce mattoncini diversi: fusi alla vista (1 fase) o separati a strati (2+ fasi)."
        />
      </div>
    </div>
  );
};

// ---------------- L1 M3: Real-Lab Separation Bench ----------------
export const SeparationLab: React.FC<{ lang: Language }> = ({ lang }) => {
  const [method, setMethod] = useState<'filter' | 'distill' | 'centrifuge' | 'chrom'>('distill');
  const [rpm, setRpm] = useState(3000);

  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 360 215" role="img" aria-label={pick(lang, 'Separation apparatus animation', 'Animazione apparecchio di separazione')}>
          {method === 'filter' && (
            <>
              <text x="180" y="22" textAnchor="middle" fill="#45d8ff" fontSize="13" fontWeight="800">
                {pick(lang, 'FILTRATION · Traps solid grains by size', 'FILTRAZIONE · Trattiene i grani più grandi')}
              </text>
              {/* Funnel & filter paper */}
              <polygon points="120,46 240,46 190,114 170,114" fill="rgba(255,209,102,.12)" stroke="#99a8cc" strokeWidth="2.5" />
              <line x1="172" y1="114" x2="172" y2="142" stroke="#99a8cc" strokeWidth="2.5" />
              <line x1="188" y1="114" x2="188" y2="142" stroke="#99a8cc" strokeWidth="2.5" />
              {/* Trapped sand */}
              {[166, 178, 190, 173, 184].map((x, i) => (
                <circle key={i} cx={x} cy={92 - (i % 2) * 8} r="4.5" fill="#d99b52" />
              ))}
              {/* Dripping clean water */}
              <circle cx="180" cy="144" r="4.5" fill="#45d8ff" className="chem-anim-drip" />
              {/* Flask */}
              <path d="M148 194 L166 154 L194 154 L212 194 Z" fill="rgba(69,216,255,.22)" stroke="#45d8ff" strokeWidth="2" />
              <text x="275" y="96" fill="#d99b52" fontSize="11" fontWeight="700">{pick(lang, 'Residue (Sand)', 'Residuo (Sabbia)')}</text>
              <text x="275" y="176" fill="#45d8ff" fontSize="11" fontWeight="700">{pick(lang, 'Clear Filtrate', 'Filtrato Limpido')}</text>
            </>
          )}

          {method === 'distill' && (
            <>
              <text x="180" y="22" textAnchor="middle" fill="#38ef7d" fontSize="13" fontWeight="800">
                {pick(lang, 'DISTILLATION · Boil → Cool Vapor → Collect Pure Liquid', 'DISTILLAZIONE · Bolli → Condensa Vapore → Liquido Puro')}
              </text>
              {/* Bunsen flame */}
              <path d="M84 188 Q94 166 94 154 Q102 168 104 188 Z" fill="#ff6a3d" className="chem-anim-flame" />
              {/* Boiling flask */}
              <circle cx="94" cy="128" r="32" fill="rgba(56,239,125,.18)" stroke="#99a8cc" strokeWidth="2.5" />
              <circle cx="88" cy="138" r="4" fill="#ffffff" opacity="0.7" className="chem-anim-bubble" />
              <circle cx="100" cy="142" r="3" fill="#ffffff" opacity="0.7" className="chem-anim-bubble" style={{ animationDelay: '.5s' }} />
              {/* Vapor neck & condenser */}
              <path d="M94 96 L94 64 L250 112 L250 140" fill="none" stroke="#99a8cc" strokeWidth="8" strokeLinecap="round" />
              <path d="M94 96 L94 64 L250 112 L250 140" fill="none" stroke="#ffd166" strokeWidth="3" className="chem-anim-dash" />
              {/* Cooling jacket */}
              <rect x="142" y="76" width="84" height="22" rx="8" transform="rotate(17 184 87)" fill="rgba(69,216,255,.22)" stroke="#45d8ff" strokeWidth="1.8" />
              <text x="184" y="64" textAnchor="middle" fill="#45d8ff" fontSize="10" fontWeight="700">{pick(lang, 'Cold water jacket', 'Refrigerante')}</text>
              {/* Drip & receiver */}
              <circle cx="250" cy="140" r="4" fill="#45d8ff" className="chem-anim-drip" />
              <rect x="228" y="160" width="46" height="36" rx="6" fill="rgba(69,216,255,.25)" stroke="#45d8ff" strokeWidth="2" />
              <text x="294" y="182" fill="#45d8ff" fontSize="11" fontWeight="700">{pick(lang, 'Pure Distillate', 'Distillato')}</text>
            </>
          )}

          {method === 'centrifuge' && (
            <>
              <text x="180" y="22" textAnchor="middle" fill="#ffd166" fontSize="13" fontWeight="800">
                {pick(lang, 'CENTRIFUGATION · Spin forces denser solids to tip', 'CENTRIFUGAZIONE · La rotazione spinge i solidi densi sul fondo')}
              </text>
              <g transform="translate(115, 118)">
                <g className={rpm > 0 ? 'chem-anim-orbit-fast' : ''} style={{ animationDuration: `${Math.max(0.4, 3000 / Math.max(500, rpm))}s` }}>
                  <circle cx="0" cy="0" r="50" fill="none" stroke="#ffd166" strokeWidth="2" strokeDasharray="6 4" />
                  <rect x="-10" y="-48" width="20" height="32" rx="8" fill="rgba(69,216,255,.25)" stroke="#ffd166" />
                  <rect x="-10" y="16" width="20" height="32" rx="8" fill="rgba(69,216,255,.25)" stroke="#ffd166" />
                </g>
                <circle cx="0" cy="0" r="8" fill="#ffd166" />
              </g>
              {/* Result tube */}
              <rect x="242" y="54" width="38" height="126" rx="16" fill="rgba(69,216,255,.2)" stroke="#99a8cc" strokeWidth="2.5" />
              <path d="M244 152 L278 152 L278 164 Q261 182 244 164 Z" fill="#ff6a3d" />
              <text x="288" y="96" fill="#45d8ff" fontSize="11" fontWeight="700">{pick(lang, 'Liquid layer', 'Surnatante')}</text>
              <text x="288" y="168" fill="#ff6a3d" fontSize="11" fontWeight="700">{pick(lang, 'Dense pellet', 'Pellet denso')}</text>
            </>
          )}

          {method === 'chrom' && (
            <>
              <text x="180" y="22" textAnchor="middle" fill="#ff5d8f" fontSize="13" fontWeight="800">
                {pick(lang, 'CHROMATOGRAPHY · Pigments race upward at different speeds', 'CROMATOGRAFIA · I pigmenti salgono a velocità diverse')}
              </text>
              <rect x="135" y="42" width="90" height="148" rx="6" fill="rgba(255,255,255,.08)" stroke="#99a8cc" strokeWidth="2" />
              <rect x="137" y="156" width="86" height="32" rx="4" fill="rgba(69,216,255,.22)" />
              <ellipse cx="180" cy="68" rx="22" ry="8" fill="#45d8ff" className="chem-anim-float" />
              <ellipse cx="180" cy="100" rx="20" ry="7" fill="#ffd166" className="chem-anim-float" style={{ animationDelay: '.4s' }} />
              <ellipse cx="180" cy="130" rx="18" ry="7" fill="#ff5d8f" className="chem-anim-float" style={{ animationDelay: '.8s' }} />
              <text x="238" y="72" fill="#45d8ff" fontSize="11" fontWeight="700">{pick(lang, 'Fastest dye', 'Più veloce')}</text>
              <text x="238" y="104" fill="#ffd166" fontSize="11" fontWeight="700">{pick(lang, 'Medium dye', 'Medio')}</text>
              <text x="238" y="134" fill="#ff5d8f" fontSize="11" fontWeight="700">{pick(lang, 'Slowest dye', 'Più lento')}</text>
            </>
          )}
        </svg>
      </div>

      <div className="cl-controls">
        <div className="cl-mode-tabs">
          <button type="button" className={method === 'filter' ? 'active' : ''} onClick={() => setMethod('filter')}>
            {pick(lang, 'Filtration', 'Filtrazione')}
          </button>
          <button type="button" className={method === 'distill' ? 'active' : ''} onClick={() => setMethod('distill')}>
            {pick(lang, 'Distillation', 'Distillazione')}
          </button>
          <button type="button" className={method === 'centrifuge' ? 'active' : ''} onClick={() => setMethod('centrifuge')}>
            {pick(lang, 'Centrifuge', 'Centrifuga')}
          </button>
          <button type="button" className={method === 'chrom' ? 'active' : ''} onClick={() => setMethod('chrom')}>
            {pick(lang, 'Chromatography', 'Cromatografia')}
          </button>
        </div>
        {method === 'centrifuge' && (
          <Slider label={pick(lang, 'Spin Speed', 'Velocità')} value={rpm} min={1000} max={6000} step={500} unit="RPM" lang={lang} onChange={setRpm} />
        )}
        <div className="cl-readout-row">
          <Readout
            label={pick(lang, 'Property Used', 'Proprietà Sfruttata')}
            value={
              method === 'filter'
                ? pick(lang, 'Particle Size', 'Dimensione grani')
                : method === 'distill'
                  ? pick(lang, 'Boiling Point', 'Punto ebollizione')
                  : method === 'centrifuge'
                    ? pick(lang, 'Density', 'Densità')
                    : pick(lang, 'Affinity / Speed', 'Affinità / Velocità')
            }
          />
          <Readout
            label={pick(lang, 'Mix Type', 'Tipo Miscuglio')}
            value={method === 'filter' || method === 'centrifuge' ? pick(lang, 'Heterogeneous', 'Eterogeneo') : pick(lang, 'Homogeneous', 'Omogeneo')}
          />
        </div>
        <Analogy
          lang={lang}
          en="Sieves strain pasta by size (filtration); a salad spinner flings water outward (centrifuge); boiling salt water traps only pure steam (distillation)!"
          it="Come scolare la pasta (filtrazione), la centrifuga dell’insalata (densità) o raccogliere il vapore sul coperchio (distillazione)!"
        />
      </div>
    </div>
  );
};

// ---------------- L1 M4: Lavoisier Scale & Dalton Atom Blocks ----------------
export const LawsScaleLab: React.FC<{ lang: Language }> = ({ lang }) => {
  const [sealed, setSealed] = useState(true);
  const [reacted, setReacted] = useState(true);
  const [oxide, setOxide] = useState<'CO' | 'CO2'>('CO2');
  const [mode, setMode] = useState<'lavoisier' | 'dalton'>('lavoisier');

  const finalMass = !reacted ? 150.0 : sealed ? 150.0 : 145.6;

  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 360 210" role="img" aria-label={pick(lang, 'Lavoisier scale or Dalton atom blocks', 'Bilancia di Lavoisier o blocchi di Dalton')}>
          {mode === 'lavoisier' ? (
            <>
              <text x="180" y="22" textAnchor="middle" fill="#38ef7d" fontSize="13" fontWeight="800">
                {sealed
                  ? pick(lang, 'CLOSED SYSTEM · Gas trapped → Mass stays exact!', 'SISTEMA CHIUSO · Il gas resta dentro → Massa identica!')
                  : pick(lang, 'OPEN FLASK · CO₂ gas escapes → Scale reads less!', 'SISTEMA APERTO · La CO₂ esce → La bilancia segna meno!')}
              </text>
              {/* Balloon / Stopper */}
              {sealed ? (
                <ellipse cx="180" cy={reacted ? 44 : 58} rx={reacted ? 26 : 12} ry={reacted ? 20 : 10} fill="rgba(255,209,102,.32)" stroke="#ffd166" strokeWidth="2" className={reacted ? 'chem-anim-pulse' : ''} />
              ) : reacted ? (
                <>
                  <circle cx="172" cy="48" r="5" fill="#ffd166" className="chem-anim-bubble" />
                  <circle cx="188" cy="42" r="4" fill="#ffd166" className="chem-anim-bubble" style={{ animationDelay: '.4s' }} />
                  <text x="234" y="48" fill="#ff6a3d" fontSize="11" fontWeight="700">{pick(lang, 'CO₂ escaping!', 'CO₂ fugge via!')}</text>
                </>
              ) : null}
              {/* Flask */}
              <path d="M168 62 L168 92 L134 150 L226 150 L192 92 L192 62 Z" fill="rgba(69,216,255,.16)" stroke="#45d8ff" strokeWidth="2.5" />
              {reacted && (
                <>
                  <circle cx="168" cy="138" r="3.5" fill="#ffffff" className="chem-anim-bubble" />
                  <circle cx="190" cy="142" r="3.5" fill="#ffffff" className="chem-anim-bubble" style={{ animationDelay: '.5s' }} />
                </>
              )}
              {/* Digital Scale */}
              <rect x="108" y="152" width="144" height="44" rx="8" fill="#181e42" stroke="#99a8cc" strokeWidth="2" />
              <rect x="132" y="162" width="96" height="24" rx="4" fill="#090d22" stroke="#38ef7d" />
              <text x="180" y="179" textAnchor="middle" fill={finalMass === 150 ? '#38ef7d' : '#ff6a3d'} fontSize="15" fontWeight="800">
                {fmt(lang, finalMass, 1)} g
              </text>
            </>
          ) : (
            <>
              <text x="180" y="24" textAnchor="middle" fill="#ffd166" fontSize="13" fontWeight="800">
                {pick(lang, 'DALTON ATOM BLOCKS · Whole-number oxygen ratio 1 : 2', 'BLOCCHI DI DALTON · Rapporto intero tra ossigeni 1 : 2')}
              </text>
              <g transform="translate(86, 104)">
                <circle cx="0" cy="0" r="22" fill="#99a8cc" />
                <text x="0" y="5" textAnchor="middle" fill="#0b1026" fontSize="14" fontWeight="800">C (12 g)</text>
                <circle cx="48" cy="0" r="19" fill="#ff5d8f" />
                <text x="48" y="4" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="800">O (16 g)</text>
                {oxide === 'CO2' && (
                  <>
                    <circle cx="-48" cy="0" r="19" fill="#ff5d8f" className="chem-anim-pulse" />
                    <text x="-48" y="4" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="800">O (16 g)</text>
                  </>
                )}
              </g>
              <rect x="205" y="66" width="134" height="82" rx="10" fill="rgba(56,239,125,.08)" stroke="#38ef7d" />
              <text x="272" y="96" textAnchor="middle" fill="#ffd166" fontSize="18" fontWeight="800">{oxide === 'CO' ? 'CO' : 'CO₂'}</text>
              <text x="272" y="120" textAnchor="middle" fill="#ffffff" fontSize="12">12 g C : {oxide === 'CO' ? '16' : '32'} g O</text>
              <text x="272" y="138" textAnchor="middle" fill="#38ef7d" fontSize="11" fontWeight="700">
                {oxide === 'CO' ? pick(lang, '1 O per C atom', '1 O per atomo C') : pick(lang, '2 O per C atom (2×)', '2 O per atomo C (doppio!)')}
              </text>
            </>
          )}
        </svg>
      </div>

      <div className="cl-controls">
        <div className="cl-mode-tabs">
          <button type="button" className={mode === 'lavoisier' ? 'active' : ''} onClick={() => setMode('lavoisier')}>
            {pick(lang, 'Lavoisier Scale', 'Bilancia Lavoisier')}
          </button>
          <button type="button" className={mode === 'dalton' ? 'active' : ''} onClick={() => setMode('dalton')}>
            {pick(lang, 'Dalton Blocks', 'Blocchi Dalton')}
          </button>
        </div>
        {mode === 'lavoisier' ? (
          <>
            <div className="cl-mode-tabs">
              <button type="button" className={sealed ? 'active' : ''} onClick={() => setSealed(true)}>
                {pick(lang, 'Balloon Sealed', 'Palloncino Chiuso')}
              </button>
              <button type="button" className={!sealed ? 'active' : ''} onClick={() => setSealed(false)}>
                {pick(lang, 'Open Top', 'Bocca Aperta')}
              </button>
            </div>
            <button type="button" className="cl-btn primary" onClick={() => setReacted(r => !r)}>
              {reacted ? pick(lang, '↺ Reset Reactants', '↺ Ripristina Reagenti') : pick(lang, '⚡ Mix Vinegar + Soda', '⚡ Fai Reagire')}
            </button>
            <div className="cl-readout-row">
              <Readout label={pick(lang, 'Before', 'Prima')} value="150,0 g" />
              <Readout label={pick(lang, 'After Reaction', 'Dopo Reazione')} value={`${fmt(lang, finalMass, 1)} g`} />
            </div>
          </>
        ) : (
          <div className="cl-mode-tabs">
            <button type="button" className={oxide === 'CO' ? 'active' : ''} onClick={() => setOxide('CO')}>CO (1:1)</button>
            <button type="button" className={oxide === 'CO2' ? 'active' : ''} onClick={() => setOxide('CO2')}>CO₂ (1:2)</button>
          </div>
        )}
        <Analogy
          lang={lang}
          en="Atoms are like Lego bricks: you can rebuild a house into a car using the exact same bricks—total weight only changes if bricks fly out an open window!"
          it="Gli atomi sono come mattoncini Lego: se smonti una casa per farne un’auto il peso resta uguale, a meno che qualche pezzo non voli fuori dalla finestra!"
        />
      </div>
    </div>
  );
};

// ---------------- L1 M5: Enhanced Animated Mole Chamber ----------------
const COMPOUNDS = [
  { formula: 'H₂O', name: ['Water', 'Acqua'] as const, M: 18.02, color: '#45d8ff' },
  { formula: 'CO₂', name: ['Carbon dioxide', 'Diossido di carbonio'] as const, M: 44.01, color: '#ffd166' },
  { formula: 'NaCl', name: ['Sodium chloride', 'Cloruro di sodio'] as const, M: 58.44, color: '#38ef7d' },
  { formula: 'C₆H₁₂O₆', name: ['Glucose', 'Glucosio'] as const, M: 180.16, color: '#ff6a3d' }
];

export const MoleLab: React.FC<{ lang: Language }> = ({ lang }) => {
  const [compIndex, setCompIndex] = useState(0);
  const [mass, setMass] = useState(36);
  const comp = COMPOUNDS[compIndex];
  const moles = mass / comp.M;
  const particlesScaled = moles * 6.022;
  const dotCount = Math.min(28, Math.max(2, Math.round(moles * 6)));

  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 360 190" role="img" aria-label={pick(lang, 'Mole chamber', 'Camera della mole')}>
          <rect x="26" y="16" width="308" height="158" rx="14" fill="rgba(56,239,125,.05)" stroke={comp.color} strokeWidth="2" />
          <text x="180" y="40" textAnchor="middle" fill={comp.color} fontSize="14" fontWeight="800">
            {comp.formula} (M = {fmt(lang, comp.M, 2)} g/mol)
          </text>
          {Array.from({ length: dotCount }, (_, i) => {
            const col = i % 7;
            const row = Math.floor(i / 7);
            return (
              <circle
                key={i}
                className="chem-anim-float"
                style={{ animationDelay: `${(i % 5) * 0.25}s` }}
                cx={68 + col * 36}
                cy={72 + row * 24}
                r="7.5"
                fill={comp.color}
                opacity={0.9}
              />
            );
          })}
          <text x="180" y="160" textAnchor="middle" fill="#ffd166" fontSize="12" fontWeight="700">
            {fmt(lang, moles, 2)} mol ≈ {fmt(lang, particlesScaled, 2)} × 10²³ {pick(lang, 'particles', 'particelle')}
          </text>
        </svg>
      </div>
      <div className="cl-controls">
        <label className="cl-control">
          <span>{pick(lang, 'Substance', 'Sostanza')}</span>
          <select value={compIndex} onChange={e => setCompIndex(Number(e.target.value))}>
            {COMPOUNDS.map((c, idx) => (
              <option key={c.formula} value={idx}>
                {c.formula} — {pick(lang, c.name[0], c.name[1])} ({fmt(lang, c.M, 2)} g/mol)
              </option>
            ))}
          </select>
        </label>
        <Slider label={pick(lang, 'Sample Mass (m)', 'Massa Campione (m)')} value={mass} min={10} max={200} step={2} unit="g" lang={lang} onChange={setMass} />
        <div className="cl-readout-row">
          <Readout label={pick(lang, 'Moles (n = m / M)', 'Moli (n = m / M)')} value={`${fmt(lang, moles, 2)} mol`} />
          <Readout label={pick(lang, 'Particles (N)', 'Particelle (N)')} value={`${fmt(lang, particlesScaled, 2)} × 10²³`} />
        </div>
        <Analogy
          lang={lang}
          en="A dozen eggs is always 12 whether quail eggs or ostrich eggs; 1 mole is always 6,022×10²³ particles—heavier molecules just weigh more per mole!"
          it="Una dozzina vale sempre 12 (uova piccole o grandi); una mole vale sempre 6,022×10²³ particelle: cambia solo quanto pesa in grammi!"
        />
      </div>
    </div>
  );
};

// ---------------- L1 M6: Enhanced Animated Ideal Gas Piston ----------------
export const GasPistonLab: React.FC<{ lang: Language }> = ({ lang }) => {
  const [moles, setMoles] = useState(1.0);
  const [tempC, setTempC] = useState(25);
  const [vol, setVol] = useState(24.5);
  const [playing, setPlaying] = useState(true);
  const tempK = tempC + 273.15;
  const P = (moles * 0.0821 * tempK) / vol;
  const pistonY = 148 - ((vol - 5) / 45) * 94;
  const gasSpeedCls = !playing ? '' : tempC > 120 ? 'chem-anim-bounce-fast' : 'chem-anim-bounce';

  return (
    <div className={`cl-grid ${!playing ? 'chem-paused' : ''}`}>
      <div className="cl-visual">
        <svg viewBox="0 0 360 195" role="img" aria-label={pick(lang, 'Gas piston chamber', 'Camera a pistone')}>
          <rect x="64" y="20" width="160" height="156" rx="8" fill="rgba(69,216,255,.06)" stroke="#99a8cc" strokeWidth="2.5" />
          <rect x="66" y={pistonY} width="156" height="10" fill="#ffd166" />
          <rect x="138" y="8" width="12" height={Math.max(8, pistonY - 8)} fill="#99a8cc" />
          {Array.from({ length: Math.min(18, Math.max(4, Math.round(moles * 6))) }, (_, i) => {
            const x = 86 + ((i * 37) % 118);
            const span = Math.max(18, 162 - pistonY);
            const y = pistonY + 18 + ((i * 29) % span);
            return (
              <circle
                key={i}
                className={gasSpeedCls}
                style={{ animationDelay: `${(i % 5) * 0.18}s` }}
                cx={x}
                cy={Math.min(168, y)}
                r="4.5"
                fill="#45d8ff"
              />
            );
          })}
          {/* Pressure Gauge */}
          <circle cx="290" cy="96" r="40" fill="rgba(255,209,102,.08)" stroke="#ffd166" strokeWidth="2.5" />
          <text x="290" y="92" textAnchor="middle" fill="#ffd166" fontSize="15" fontWeight="800">
            {fmt(lang, P, 2)}
          </text>
          <text x="290" y="109" textAnchor="middle" fill="#99a8cc" fontSize="11">atm</text>
          <text x="144" y="190" textAnchor="middle" fill="#38ef7d" fontSize="12" fontWeight="700">
            V = {fmt(lang, vol, 1)} L · T = {fmt(lang, tempK, 1)} K
          </text>
        </svg>
      </div>
      <div className="cl-controls">
        <Slider label={pick(lang, 'Moles (n)', 'Moli (n)')} value={moles} min={0.5} max={3.0} step={0.1} decimals={1} unit="mol" lang={lang} onChange={setMoles} />
        <Slider label={pick(lang, 'Temperature (t)', 'Temperatura (t)')} value={tempC} min={-50} max={250} step={5} unit="°C" lang={lang} onChange={setTempC} />
        <Slider label={pick(lang, 'Volume (V)', 'Volume (V)')} value={vol} min={5} max={50} step={0.5} decimals={1} unit="L" lang={lang} onChange={setVol} />
        <PlayToggle playing={playing} onToggle={() => setPlaying(p => !p)} lang={lang} />
        <div className="cl-readout-row">
          <Readout label={pick(lang, 'Pressure (P)', 'Pressione (P)')} value={`${fmt(lang, P, 2)} atm`} />
          <Readout label={pick(lang, 'Kelvin (T)', 'Kelvin (T)')} value={`${fmt(lang, tempK, 1)} K`} />
        </div>
      </div>
    </div>
  );
};

// ---------------- L1 M7: Animated Bohr Atom & Isotope Builder ----------------
const ELEMENTS = [
  { z: 1, sym: 'H', name: ['Hydrogen', 'Idrogeno'] as const, stableN: [0, 1] },
  { z: 2, sym: 'He', name: ['Helium', 'Elio'] as const, stableN: [2] },
  { z: 3, sym: 'Li', name: ['Lithium', 'Litio'] as const, stableN: [3, 4] },
  { z: 4, sym: 'Be', name: ['Beryllium', 'Berillio'] as const, stableN: [5] },
  { z: 5, sym: 'B', name: ['Boron', 'Boro'] as const, stableN: [5, 6] },
  { z: 6, sym: 'C', name: ['Carbon', 'Carbonio'] as const, stableN: [6, 7] },
  { z: 7, sym: 'N', name: ['Nitrogen', 'Azoto'] as const, stableN: [7, 8] },
  { z: 8, sym: 'O', name: ['Oxygen', 'Ossigeno'] as const, stableN: [8, 9, 10] }
];

export const IsotopeBuilderLab: React.FC<{ lang: Language }> = ({ lang }) => {
  const [protons, setProtons] = useState(6);
  const [neutrons, setNeutrons] = useState(6);
  const [playing, setPlaying] = useState(true);
  const el = ELEMENTS[protons - 1];
  const massNumber = protons + neutrons;
  const isStable = el.stableN.includes(neutrons);

  const shell1 = Math.min(2, protons);
  const shell2 = Math.max(0, protons - 2);

  return (
    <div className={`cl-grid ${!playing ? 'chem-paused' : ''}`}>
      <div className="cl-visual">
        <svg viewBox="0 0 360 195" role="img" aria-label={pick(lang, 'Bohr atom and nucleus', 'Atomo di Bohr e nucleo')}>
          {/* Rotating Electron Shells */}
          <circle cx="152" cy="96" r="44" fill="none" stroke="rgba(69,216,255,.35)" strokeWidth="1.5" strokeDasharray="4 4" />
          <g style={{ transformOrigin: '152px 96px' }} className="chem-anim-orbit-fast">
            {Array.from({ length: shell1 }, (_, i) => {
              const a = (i * Math.PI * 2) / Math.max(1, shell1);
              return <circle key={`s1-${i}`} cx={152 + Math.cos(a) * 44} cy={96 + Math.sin(a) * 44} r="5.5" fill="#45d8ff" />;
            })}
          </g>
          {shell2 > 0 && (
            <>
              <circle cx="152" cy="96" r="76" fill="none" stroke="rgba(56,239,125,.35)" strokeWidth="1.5" strokeDasharray="4 4" />
              <g style={{ transformOrigin: '152px 96px' }} className="chem-anim-orbit">
                {Array.from({ length: shell2 }, (_, i) => {
                  const a = (i * Math.PI * 2) / shell2;
                  return <circle key={`s2-${i}`} cx={152 + Math.cos(a) * 76} cy={96 + Math.sin(a) * 76} r="5.5" fill="#38ef7d" />;
                })}
              </g>
            </>
          )}
          {/* Nucleus */}
          <g className="chem-anim-pulse">
            {Array.from({ length: protons }, (_, i) => {
              const a = i * 2.3;
              const r = 4 + (i % 3) * 4.5;
              return <circle key={`p-${i}`} cx={152 + Math.cos(a) * r} cy={96 + Math.sin(a) * r} r="5.5" fill="#ff5d8f" />;
            })}
            {Array.from({ length: Math.min(12, neutrons) }, (_, i) => {
              const a = i * 1.9 + 0.6;
              const r = 5 + (i % 3) * 5;
              return <circle key={`n-${i}`} cx={152 + Math.cos(a) * r} cy={96 + Math.sin(a) * r} r="5" fill="#ffd166" />;
            })}
          </g>
          {/* Nuclide Notation */}
          <text x="275" y="74" textAnchor="middle" fill="#ffd166" fontSize="14" fontWeight="800">A = {massNumber}</text>
          <text x="275" y="106" textAnchor="middle" fill="#ffffff" fontSize="28" fontWeight="800">{el.sym}</text>
          <text x="275" y="130" textAnchor="middle" fill="#ff5d8f" fontSize="14" fontWeight="800">Z = {protons}</text>
          <text x="275" y="158" textAnchor="middle" fill={isStable ? '#38ef7d' : '#ff6a3d'} fontSize="12" fontWeight="800">
            {isStable ? pick(lang, '✓ Stable isotope', '✓ Isotopo stabile') : pick(lang, '☢ Radioactive isotope', '☢ Isotopo instabile')}
          </text>
        </svg>
      </div>
      <div className="cl-controls">
        <Slider label={pick(lang, 'Protons (Z)', 'Protoni (Z)')} value={protons} min={1} max={8} step={1} lang={lang} onChange={v => { setProtons(v); setNeutrons(ELEMENTS[v - 1].stableN[0]); }} />
        <Slider label={pick(lang, 'Neutrons (N)', 'Neutroni (N)')} value={neutrons} min={0} max={12} step={1} lang={lang} onChange={setNeutrons} />
        <PlayToggle playing={playing} onToggle={() => setPlaying(p => !p)} lang={lang} />
        <div className="cl-readout-row">
          <Readout label={pick(lang, 'Element', 'Elemento')} value={`${pick(lang, el.name[0], el.name[1])} (${el.sym})`} />
          <Readout label={pick(lang, 'Isotope Mass (A)', 'Numero di Massa (A)')} value={`${massNumber} (${el.sym}-${massNumber})`} />
        </div>
      </div>
    </div>
  );
};

// ---------------- L1 M8: Interactive Aufbau & Hund Orbital Filler ----------------
const H_NE_CONFIG = [
  { z: 1, sym: 'H', name: ['Hydrogen', 'Idrogeno'], rule: ['Aufbau: fill 1s first', 'Aufbau: riempi prima 1s'] },
  { z: 2, sym: 'He', name: ['Helium', 'Elio'], rule: ['Pauli: 1s pairs opposite spins (↑↓)', 'Pauli: 1s accoppia spin opposti (↑↓)'] },
  { z: 3, sym: 'Li', name: ['Lithium', 'Litio'], rule: ['Aufbau: 1s full → step up to 2s', 'Aufbau: 1s pieno → sali al 2s'] },
  { z: 4, sym: 'Be', name: ['Beryllium', 'Berillio'], rule: ['Pauli: fill 2s with ↑↓', 'Pauli: completa 2s con ↑↓'] },
  { z: 5, sym: 'B', name: ['Boron', 'Boro'], rule: ['Aufbau: enter 2p subshell', 'Aufbau: inizia il sottolivello 2p'] },
  { z: 6, sym: 'C', name: ['Carbon', 'Carbonio'], rule: ['Hund: 2pₓ↑ 2p_y↑ sit in separate rooms first!', 'Hund: 2pₓ↑ 2p_y↑ scelgono stanze vuote!'] },
  { z: 7, sym: 'N', name: ['Nitrogen', 'Azoto'], rule: ['Hund: 3 unpaired parallel spins (↑ ↑ ↑)', 'Hund: 3 elettroni spaiati paralleli (↑ ↑ ↑)'] },
  { z: 8, sym: 'O', name: ['Oxygen', 'Ossigeno'], rule: ['Pauli + Hund: now pair up 2pₓ(↑↓)', 'Pauli + Hund: ora si accoppia 2pₓ(↑↓)'] },
  { z: 9, sym: 'F', name: ['Fluorine', 'Fluoro'], rule: ['1 spot left to complete 2p octet!', 'Manca 1 solo posto per l’ottetto!'] },
  { z: 10, sym: 'Ne', name: ['Neon', 'Neon'], rule: ['Octet full (2s² 2p⁶) — noble gas!', 'Ottetto completo (2s² 2p⁶) — gas nobile!'] }
] as const;

export const AufbauOrbitalLab: React.FC<{ lang: Language }> = ({ lang }) => {
  const [z, setZ] = useState(7);
  const info = H_NE_CONFIG[z - 1];

  const boxArrows = (count: number) => (count >= 2 ? '↑↓' : count === 1 ? '↑' : '·');
  const s1 = Math.min(2, z);
  const s2 = Math.min(2, Math.max(0, z - 2));
  const pTot = Math.max(0, z - 4);
  const pBoxes = [
    (pTot >= 1 ? 1 : 0) + (pTot >= 4 ? 1 : 0),
    (pTot >= 2 ? 1 : 0) + (pTot >= 5 ? 1 : 0),
    (pTot >= 3 ? 1 : 0) + (pTot >= 6 ? 1 : 0)
  ];

  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 360 205" role="img" aria-label={pick(lang, 'Aufbau orbital diagram', 'Diagramma degli orbitali Aufbau')}>
          <text x="180" y="22" textAnchor="middle" fill="#ffd166" fontSize="14" fontWeight="800">
            {info.sym} (Z = {z}) · 1s{s1} {s2 > 0 ? `2s${s2}` : ''} {pTot > 0 ? `2p${pTot}` : ''}
          </text>
          {/* 2p boxes */}
          <text x="58" y="68" fill="#45d8ff" fontSize="14" fontWeight="800">2p</text>
          {pBoxes.map((cnt, i) => (
            <g key={`p-${i}`} transform={`translate(${94 + i * 64}, 42)`}>
              <rect width="52" height="42" rx="8" fill={cnt > 0 ? 'rgba(69,216,255,.18)' : 'rgba(255,255,255,.04)'} stroke="#45d8ff" strokeWidth="2" />
              <text x="26" y="29" textAnchor="middle" fill="#ffffff" fontSize="20" fontWeight="800">{boxArrows(cnt)}</text>
            </g>
          ))}
          {/* 2s box */}
          <text x="58" y="122" fill="#38ef7d" fontSize="14" fontWeight="800">2s</text>
          <g transform="translate(94, 96)">
            <rect width="52" height="42" rx="8" fill={s2 > 0 ? 'rgba(56,239,125,.18)' : 'rgba(255,255,255,.04)'} stroke="#38ef7d" strokeWidth="2" />
            <text x="26" y="29" textAnchor="middle" fill="#ffffff" fontSize="20" fontWeight="800">{boxArrows(s2)}</text>
          </g>
          {/* 1s box */}
          <text x="58" y="176" fill="#ffd166" fontSize="14" fontWeight="800">1s</text>
          <g transform="translate(94, 150)">
            <rect width="52" height="42" rx="8" fill="rgba(255,209,102,.18)" stroke="#ffd166" strokeWidth="2" />
            <text x="26" y="29" textAnchor="middle" fill="#ffffff" fontSize="20" fontWeight="800">{boxArrows(s1)}</text>
          </g>
          <text x="235" y="140" textAnchor="middle" fill="#99a8cc" fontSize="11">{pick(lang, 'Energy ↑', 'Energia ↑')}</text>
          <path d="M295 170 V52" stroke="#ffd166" strokeWidth="2" />
          <polygon points="295,46 289,58 301,58" fill="#ffd166" />
        </svg>
      </div>
      <div className="cl-controls">
        <Slider label={pick(lang, 'Electrons / Atomic Number (Z)', 'Elettroni / Numero Atomico (Z)')} value={z} min={1} max={10} step={1} lang={lang} onChange={setZ} />
        <div className="cl-actions">
          <button type="button" className="cl-btn" onClick={() => setZ(v => Math.max(1, v - 1))}>−1 e⁻</button>
          <button type="button" className="cl-btn primary" onClick={() => setZ(v => Math.min(10, v + 1))}>+1 e⁻</button>
        </div>
        <div className="cl-formula">{pick(lang, info.rule[0], info.rule[1])}</div>
        <Analogy
          lang={lang}
          en="Think of orbitals like bus seats: passengers fill front rows first (Aufbau), pick empty 2p double seats alone before sharing (Hund), and max 2 per seat!"
          it="Pensa agli orbitali come ai posti sul bus: si riempiono prima le file davanti (Aufbau), ci si siede da soli finché ci sono posti liberi (Hund) e massimo 2 per sedile!"
        />
      </div>
    </div>
  );
};

// ---------------- L1 M9: Interactive Periodic Trends Explorer ----------------
const PT_CELLS = [
  { z: 1, sym: 'H', rad: 53, en: 2.2, ie: 1312, grp: 1 },
  { z: 2, sym: 'He', rad: 31, en: 0.0, ie: 2372, grp: 18 },
  { z: 3, sym: 'Li', rad: 167, en: 0.98, ie: 520, grp: 1 },
  { z: 6, sym: 'C', rad: 67, en: 2.55, ie: 1086, grp: 14 },
  { z: 8, sym: 'O', rad: 48, en: 3.44, ie: 1314, grp: 16 },
  { z: 9, sym: 'F', rad: 42, en: 3.98, ie: 1681, grp: 17 },
  { z: 11, sym: 'Na', rad: 190, en: 0.93, ie: 496, grp: 1 },
  { z: 12, sym: 'Mg', rad: 145, en: 1.31, ie: 738, grp: 2 },
  { z: 14, sym: 'Si', rad: 111, en: 1.9, ie: 787, grp: 14 },
  { z: 16, sym: 'S', rad: 88, en: 2.58, ie: 1000, grp: 16 },
  { z: 17, sym: 'Cl', rad: 79, en: 3.16, ie: 1251, grp: 17 },
  { z: 18, sym: 'Ar', rad: 71, en: 0.0, ie: 1521, grp: 18 }
];

export const PeriodicTrendsLab: React.FC<{ lang: Language }> = ({ lang }) => {
  const [idx, setIdx] = useState(5); // F default
  const el = PT_CELLS[idx];
  const radiusPx = useMemo(() => Math.max(14, (el.rad / 190) * 56), [el.rad]);

  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 360 190" role="img" aria-label={pick(lang, 'Atomic radius and electronegativity viewer', 'Visualizzatore di raggio atomico ed elettronegatività')}>
          <circle cx="96" cy="95" r={radiusPx} fill="rgba(69,216,255,.2)" stroke="#45d8ff" strokeWidth="2.5" className="chem-anim-pulse" />
          <text x="96" y="101" textAnchor="middle" fill="#ffffff" fontSize="20" fontWeight="800">{el.sym}</text>
          <text x="96" y="172" textAnchor="middle" fill="#45d8ff" fontSize="12" fontWeight="700">
            {pick(lang, 'Atomic radius:', 'Raggio:')} {el.rad} pm
          </text>
          {/* Trend Bars */}
          <text x="184" y="54" fill="#ffd166" fontSize="12" fontWeight="800">
            {pick(lang, 'Electronegativity (χ):', 'Elettronegatività (χ):')} {el.en > 0 ? fmt(lang, el.en, 2) : pick(lang, 'Noble gas (0)', 'Gas nobile (0)')}
          </text>
          <rect x="184" y="62" width="150" height="14" rx="7" fill="rgba(255,255,255,.08)" />
          <rect x="184" y="62" width={(el.en / 4) * 150} height="14" rx="7" fill="#ffd166" />

          <text x="184" y="110" fill="#38ef7d" fontSize="12" fontWeight="800">
            {pick(lang, 'Ionization Energy:', 'Energia di Ionizzazione:')} {el.ie} kJ/mol
          </text>
          <rect x="184" y="118" width="150" height="14" rx="7" fill="rgba(255,255,255,.08)" />
          <rect x="184" y="118" width={(el.ie / 2400) * 150} height="14" rx="7" fill="#38ef7d" />

          <text x="259" y="164" textAnchor="middle" fill="#99a8cc" fontSize="11">
            {pick(lang, 'Group', 'Gruppo')} {el.grp} · Z = {el.z}
          </text>
        </svg>
      </div>
      <div className="cl-controls">
        <div className="cl-pt-grid">
          {PT_CELLS.map((cell, i) => (
            <button key={cell.sym} type="button" className={`cl-pt-cell ${i === idx ? 'active' : ''}`} onClick={() => setIdx(i)}>
              <small>{cell.z}</small>
              <strong>{cell.sym}</strong>
            </button>
          ))}
        </div>
        <Analogy
          lang={lang}
          en="Going DOWN adds whole new onion layers (bigger radius). Going RIGHT adds nuclear magnets inside the same layer, pulling electrons tight (small atom, high χ)!"
          it="Scendendo si aggiungono nuovi strati come in una cipolla (atomo più grande). Andando a DESTRA aumentano i protoni nello stesso guscio e stringono gli elettroni!"
        />
      </div>
    </div>
  );
};

import React, { useEffect, useState } from 'react';
import type { Language } from '../../types';
import { Analogy, PlayToggle, Readout, Slider, fmt, pick } from '../chemLabs/chemLabShared';

type LabProps = { lang: Language };

// 1) math_l2_m1: Linear Systems 2x2 Line Crosser
export const LinearSystemCrosserLab: React.FC<LabProps> = ({ lang }) => {
  const [m1, setM1] = useState(1);
  const [q1, setQ1] = useState(-1);
  const [m2, setM2] = useState(-1);
  const [q2, setQ2] = useState(3);

  const det = m1 - m2;
  const isParallel = det === 0 && q1 !== q2;
  const isCoincident = det === 0 && q1 === q2;
  const ix = det !== 0 ? (q2 - q1) / det : 0;
  const iy = det !== 0 ? m1 * ix + q1 : 0;

  // Map Cartesian [-5, 5] x [-5, 5] -> SVG [30, 310] x [180, 20]
  const px = (x: number) => 170 + x * 24;
  const py = (y: number) => 100 - y * 16;

  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 340 205" role="img" aria-label={pick(lang, 'Two linear equations plotted on a coordinate plane', 'Due rette nel piano cartesiano')}>
          <line x1="30" y1="100" x2="310" y2="100" stroke="#6f74a6" strokeWidth="1.5" />
          <line x1="170" y1="16" x2="170" y2="188" stroke="#6f74a6" strokeWidth="1.5" />
          <line x1={px(-5)} y1={py(m1 * -5 + q1)} x2={px(5)} y2={py(m1 * 5 + q1)} stroke="#45d8ff" strokeWidth="3" />
          <line x1={px(-5)} y1={py(m2 * -5 + q2)} x2={px(5)} y2={py(m2 * 5 + q2)} stroke="#ffd166" strokeWidth="3" strokeDasharray={isCoincident ? '6 4' : undefined} />
          {det !== 0 && Math.abs(ix) <= 5.5 && Math.abs(iy) <= 5.5 && (
            <>
              <circle cx={px(ix)} cy={py(iy)} r="6.5" fill="#ff6a3d" stroke="#fff" strokeWidth="2" />
              <text x={px(ix) + 9} y={py(iy) - 8} fill="#ff9f45" fontSize="11" fontWeight="800">
                ({fmt(lang, ix, 1)}, {fmt(lang, iy, 1)})
              </text>
            </>
          )}
          <text x="36" y="30" fill="#45d8ff" fontSize="11" fontWeight="700">r₁: y = {m1}x {q1 >= 0 ? `+ ${q1}` : `− ${Math.abs(q1)}`}</text>
          <text x="36" y="46" fill="#ffd166" fontSize="11" fontWeight="700">r₂: y = {m2}x {q2 >= 0 ? `+ ${q2}` : `− ${Math.abs(q2)}`}</text>
        </svg>
        <div className="cl-readout-row">
          <Readout
            label={pick(lang, 'System type', 'Tipo di sistema')}
            value={isCoincident ? pick(lang, 'Indeterminate (∞)', 'Indeterminato (∞)') : isParallel ? pick(lang, 'Impossible (0)', 'Impossibile (0)') : pick(lang, 'Determined (1)', 'Determinato (1)')}
          />
          <Readout
            label={pick(lang, 'Intersection (x, y)', 'Soluzione (x, y)')}
            value={det === 0 ? (isCoincident ? '∞' : '∅') : `(${fmt(lang, ix, 2)}, ${fmt(lang, iy, 2)})`}
          />
        </div>
      </div>
      <div className="cl-controls">
        <Slider label={pick(lang, 'Line 1 slope m₁', 'Pendenza r₁ (m₁)')} value={m1} min={-3} max={3} step={1} lang={lang} onChange={setM1} />
        <Slider label={pick(lang, 'Line 1 intercept q₁', 'Quota r₁ (q₁)')} value={q1} min={-4} max={4} step={1} lang={lang} onChange={setQ1} />
        <Slider label={pick(lang, 'Line 2 slope m₂', 'Pendenza r₂ (m₂)')} value={m2} min={-3} max={3} step={1} lang={lang} onChange={setM2} />
        <Slider label={pick(lang, 'Line 2 intercept q₂', 'Quota r₂ (q₂)')} value={q2} min={-4} max={4} step={1} lang={lang} onChange={setQ2} />
        <div className="cl-actions">
          <button type="button" className="cl-btn" onClick={() => { setM1(2); setQ1(1); setM2(2); setQ2(-2); }}>
            {pick(lang, 'Parallel test', 'Test parallele')}
          </button>
          <button type="button" className="cl-btn" onClick={() => { setM1(1); setQ1(2); setM2(1); setQ2(2); }}>
            {pick(lang, 'Coincident test', 'Test coincidenti')}
          </button>
        </div>
        <Analogy lang={lang} en="Make m₁ = m₂ with q₁ ≠ q₂ to see parallel train tracks with zero solutions!" it="Imposta m₁ = m₂ con q₁ ≠ q₂ per vedere binari paralleli senza soluzioni!" />
      </div>
    </div>
  );
};

// 2) math_l2_m2: Radicals Existence & Simplifier
export const RadicalSimplifierLab: React.FC<LabProps> = ({ lang }) => {
  const [index, setIndex] = useState<2 | 3>(2);
  const [factor, setFactor] = useState(3);
  const [base, setBase] = useState(2);

  const radicand = Math.pow(factor, index) * base;
  const exists = index === 3 || radicand >= 0;
  const absFactor = Math.abs(factor);
  const signedOuter = index === 3 ? factor : absFactor;
  const inner = base;
  const numericVal = exists ? signedOuter * Math.cbrt(index === 3 ? inner : 1) * (index === 2 ? Math.sqrt(inner) : 1) : NaN;

  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <div className="cl-formula">
          {index === 2 ? '√' : '∛'}({radicand}) ={' '}
          {!exists
            ? pick(lang, 'NOT REAL IN ℝ', 'NON ESISTE IN ℝ')
            : inner === 1
              ? `${signedOuter}`
              : inner === -1 && index === 3
                ? `${-signedOuter}`
                : `${signedOuter} · ${index === 2 ? '√' : '∛'}(${inner})`}
        </div>
        <svg viewBox="0 0 340 155" role="img" aria-label={pick(lang, 'Factor extraction out of a radical', 'Trasporto di fattori fuori radice')}>
          <rect x="24" y="20" width="126" height="106" rx="12" fill="rgba(69,216,255,.1)" stroke="#45d8ff" strokeWidth="2" />
          <text x="87" y="46" textAnchor="middle" fill="#45d8ff" fontSize="11" fontWeight="800">{pick(lang, 'INSIDE RADICAL', 'DENTRO LA RADICE')}</text>
          <text x="87" y="78" textAnchor="middle" fill="#eeecf8" fontSize="18" fontWeight="800">
            {factor < 0 ? `(${factor})` : factor}{index === 2 ? '²' : '³'} · ({base})
          </text>
          <text x="87" y="106" textAnchor="middle" fill="#ffd166" fontSize="13">= {radicand}</text>

          <path d="M158 74 H188 M180 67 L188 74 L180 81" fill="none" stroke="#ffd166" strokeWidth="2.8" strokeLinecap="round" />

          <rect x="196" y="20" width="120" height="106" rx="12" fill={exists ? 'rgba(56,239,125,.1)' : 'rgba(255,106,61,.14)'} stroke={exists ? '#38ef7d' : '#ff6a3d'} strokeWidth="2" />
          <text x="256" y="46" textAnchor="middle" fill={exists ? '#38ef7d' : '#ff6a3d'} fontSize="11" fontWeight="800">
            {exists ? pick(lang, 'PULLED OUT!', 'PORTATO FUORI!') : pick(lang, 'BLOCKED IN ℝ', 'BLOCCATO IN ℝ')}
          </text>
          <text x="256" y="84" textAnchor="middle" fill="#ffd166" fontSize="20" fontWeight="800">
            {!exists ? '∅' : `${signedOuter}${index === 2 ? '√' : '∛'}(${inner})`}
          </text>
          <text x="256" y="108" textAnchor="middle" fill="#b7bce2" fontSize="11">
            {exists ? `≈ ${fmt(lang, numericVal, 2)}` : pick(lang, 'Even root < 0!', 'Indice pari < 0!')}
          </text>
        </svg>
        <div className="cl-readout-row">
          <Readout label={pick(lang, 'Rule', 'Regola')} value={index === 2 ? '√(k²·b) = |k|√b' : '∛(k³·b) = k∛b'} />
          <Readout label={pick(lang, 'Existence C.E.', 'Esistenza C.E.')} value={exists ? pick(lang, 'Valid in ℝ', 'Valido in ℝ') : pick(lang, 'Undefined in ℝ', 'Non reale')} />
        </div>
      </div>
      <div className="cl-controls">
        <div className="cl-mode-tabs">
          <button type="button" className={index === 2 ? 'active' : ''} onClick={() => setIndex(2)}>
            {pick(lang, 'Square root (n=2)', 'Radice quadrata (n=2)')}
          </button>
          <button type="button" className={index === 3 ? 'active' : ''} onClick={() => setIndex(3)}>
            {pick(lang, 'Cube root (n=3)', 'Radice cubica (n=3)')}
          </button>
        </div>
        <Slider label={pick(lang, 'Hidden factor k', 'Fattore k')} value={factor} min={-4} max={5} step={1} lang={lang} onChange={setFactor} />
        <Slider label={pick(lang, 'Remaining core b', 'Nucleo b')} value={base} min={-3} max={7} step={1} lang={lang} onChange={setBase} />
        <Analogy lang={lang} en="Every full group of n identical factors escapes outside the root sign; switch b < 0 between n=2 and n=3!" it="Ogni gruppo di n fattori uguali esce dalla radice; prova b < 0 cambiando tra n=2 e n=3!" />
      </div>
    </div>
  );
};

// 3) math_l2_m3: Cartesian Line & Orthogonal Explorer
export const CartesianLineSlopeLab: React.FC<LabProps> = ({ lang }) => {
  const [x1, setX1] = useState(-2);
  const [y1, setY1] = useState(-1);
  const [x2, setX2] = useState(2);
  const [y2, setY2] = useState(3);
  const [mode, setMode] = useState<'parallel' | 'perp'>('perp');

  const dx = x2 - x1;
  const dy = y2 - y1;
  const dist = Math.hypot(dx, dy);
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const hasSlope = dx !== 0;
  const m = hasSlope ? dy / dx : null;
  const q = m !== null ? y1 - m * x1 : null;
  const m2 = m === null ? 0 : mode === 'parallel' ? m : (m !== 0 ? -1 / m : null);

  const px = (x: number) => 170 + x * 24;
  const py = (y: number) => 100 - y * 16;

  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 340 205" role="img" aria-label={pick(lang, 'Cartesian plane segment, slope and parallel or perpendicular line', 'Segmento, pendenza e retta parallela/perpendicolare')}>
          <line x1="30" y1="100" x2="310" y2="100" stroke="#6f74a6" strokeWidth="1.4" />
          <line x1="170" y1="16" x2="170" y2="188" stroke="#6f74a6" strokeWidth="1.4" />
          {m !== null && q !== null ? (
            <line x1={px(-5)} y1={py(m * -5 + q)} x2={px(5)} y2={py(m * 5 + q)} stroke="#45d8ff" strokeWidth="3" />
          ) : (
            <line x1={px(x1)} y1="16" x2={px(x1)} y2="188" stroke="#45d8ff" strokeWidth="3" />
          )}
          {m2 !== null ? (
            <line x1={px(-5)} y1={py(m2 * (-5 - mx) + my)} x2={px(5)} y2={py(m2 * (5 - mx) + my)} stroke="#ffd166" strokeWidth="2.4" strokeDasharray="5 4" />
          ) : (
            <line x1={px(mx)} y1="16" x2={px(mx)} y2="188" stroke="#ffd166" strokeWidth="2.4" strokeDasharray="5 4" />
          )}
          <circle cx={px(x1)} cy={py(y1)} r="5.5" fill="#38ef7d" />
          <circle cx={px(x2)} cy={py(y2)} r="5.5" fill="#ff6a3d" />
          <circle cx={px(mx)} cy={py(my)} r="4.5" fill="#ffd166" />
          <text x={px(x1) + 7} y={py(y1) - 6} fill="#38ef7d" fontSize="10" fontWeight="700">A({x1},{y1})</text>
          <text x={px(x2) + 7} y={py(y2) - 6} fill="#ff6a3d" fontSize="10" fontWeight="700">B({x2},{y2})</text>
        </svg>
        <div className="cl-readout-row">
          <Readout label={pick(lang, 'Slope m & Distance d', 'Pendenza m e Distanza d')} value={`m = ${m === null ? '∞' : fmt(lang, m, 2)} · d = ${fmt(lang, dist, 2)}`} />
          <Readout label={pick(lang, 'Midpoint M & Helper m₂', 'Punto medio M e m₂')} value={`M(${fmt(lang, mx, 1)}, ${fmt(lang, my, 1)}) · m₂ = ${m2 === null ? '∞' : fmt(lang, m2, 2)}`} />
        </div>
      </div>
      <div className="cl-controls">
        <div className="cl-mode-tabs">
          <button type="button" className={mode === 'parallel' ? 'active' : ''} onClick={() => setMode('parallel')}>
            {pick(lang, 'Parallel (m₂ = m)', 'Parallela (m₂ = m)')}
          </button>
          <button type="button" className={mode === 'perp' ? 'active' : ''} onClick={() => setMode('perp')}>
            {pick(lang, 'Perpendicular (90°)', 'Perpendicolare (90°)')}
          </button>
        </div>
        <Slider label="A: x₁" value={x1} min={-4} max={4} lang={lang} onChange={setX1} />
        <Slider label="A: y₁" value={y1} min={-4} max={4} lang={lang} onChange={setY1} />
        <Slider label="B: x₂" value={x2} min={-4} max={4} lang={lang} onChange={setX2} />
        <Slider label="B: y₂" value={y2} min={-4} max={4} lang={lang} onChange={setY2} />
        <Analogy lang={lang} en="Staircase rise Δy divided by run Δx gives slope m; perpendicular lines flip and negate m." it="Dislivello Δy diviso passo Δx dà m; la perpendicolare capovolge e cambia segno!" />
      </div>
    </div>
  );
};

// 4) math_l2_m4: Quadratic Delta & Roots Lab
export const QuadraticDeltaLab: React.FC<LabProps> = ({ lang }) => {
  const [a, setA] = useState(1);
  const [b, setB] = useState(-2);
  const [c, setC] = useState(-3);

  const delta = b * b - 4 * a * c;
  const r1 = delta >= 0 ? (-b - Math.sqrt(delta)) / (2 * a) : null;
  const r2 = delta >= 0 ? (-b + Math.sqrt(delta)) / (2 * a) : null;
  const px = (x: number) => 170 + x * 24;
  const py = (y: number) => 115 - y * 12;

  let path = '';
  for (let i = -50; i <= 50; i++) {
    const x = i / 10;
    const y = a * x * x + b * x + c;
    const clampedY = Math.max(-12, Math.min(12, y));
    path += `${i === -50 ? 'M' : 'L'}${px(x).toFixed(1)} ${py(clampedY).toFixed(1)} `;
  }

  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 340 205" role="img" aria-label={pick(lang, 'Parabola crossing the x-axis according to delta', 'Parabola rispetto all’asse x secondo il Delta')}>
          <line x1="25" y1="115" x2="315" y2="115" stroke="#6f74a6" strokeWidth="1.6" />
          <line x1="170" y1="15" x2="170" y2="190" stroke="#6f74a6" strokeWidth="1.4" />
          <path d={path} fill="none" stroke="#45d8ff" strokeWidth="3" />
          {r1 !== null && Math.abs(r1) <= 5 && <circle cx={px(r1)} cy={115} r="5.5" fill="#ffd166" />}
          {r2 !== null && Math.abs(r2) <= 5 && <circle cx={px(r2)} cy={115} r="5.5" fill="#ffd166" />}
          <text x="34" y="30" fill="#ffd166" fontSize="12" fontWeight="800">
            {a === 1 ? '' : a === -1 ? '−' : a}x² {b >= 0 ? `+ ${b}` : `− ${Math.abs(b)}`}x {c >= 0 ? `+ ${c}` : `− ${Math.abs(c)}`} = 0
          </text>
        </svg>
        <div className="cl-readout-row">
          <Readout label="Discriminant Δ = b² − 4ac" value={`Δ = ${delta} (${delta > 0 ? pick(lang, '2 real roots', '2 radici reali') : delta === 0 ? pick(lang, '1 double root', '1 radice doppia') : pick(lang, '0 in ℝ', '0 in ℝ')})`} />
          <Readout label={pick(lang, 'Solutions', 'Soluzioni')} value={delta < 0 ? '∅ (no real roots)' : delta === 0 ? `x = ${fmt(lang, r1!, 2)}` : `x₁ = ${fmt(lang, Math.min(r1!, r2!), 2)}, x₂ = ${fmt(lang, Math.max(r1!, r2!), 2)}`} />
        </div>
      </div>
      <div className="cl-controls">
        <Slider label="a (≠ 0)" value={a} min={-2} max={2} step={1} lang={lang} onChange={v => setA(v === 0 ? 1 : v)} />
        <Slider label="b" value={b} min={-6} max={6} step={1} lang={lang} onChange={setB} />
        <Slider label="c" value={c} min={-5} max={6} step={1} lang={lang} onChange={setC} />
        <Analogy lang={lang} en="Raise c to lift the U-shaped parabola: watch the 2 yellow roots merge into 1 at Δ=0, then lift off into Δ<0!" it="Alza c per sollevare la parabola: osserva le 2 radici unirsi a Δ=0 e poi sparire per Δ<0!" />
      </div>
    </div>
  );
};

// 5) math_l2_m5: Viete & Degree-2 System Lab
export const VieteSumProductLab: React.FC<LabProps> = ({ lang }) => {
  const [x1, setX1] = useState(2);
  const [x2, setX2] = useState(5);
  const sum = x1 + x2;
  const prod = x1 * x2;

  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <div className="cl-formula">
          x² {sum === 0 ? '' : sum > 0 ? `− ${sum}x` : `+ ${Math.abs(sum)}x`} {prod === 0 ? '' : prod > 0 ? `+ ${prod}` : `− ${Math.abs(prod)}`} = 0
        </div>
        <svg viewBox="0 0 340 165" role="img" aria-label={pick(lang, 'Viete parabola factoring and roots', 'Parabola e scomposizione con Viète')}>
          <line x1="25" y1="110" x2="315" y2="110" stroke="#6f74a6" strokeWidth="1.6" />
          <line x1="170" y1="16" x2="170" y2="150" stroke="#6f74a6" strokeWidth="1.2" />
          {(() => {
            let d = '';
            for (let i = -55; i <= 55; i++) {
              const x = i / 10;
              const y = (x - x1) * (x - x2);
              const sy = Math.max(-6, Math.min(10, y));
              d += `${i === -55 ? 'M' : 'L'}${(170 + x * 24).toFixed(1)} ${(110 - sy * 8).toFixed(1)} `;
            }
            return <path d={d} fill="none" stroke="#38ef7d" strokeWidth="3" />;
          })()}
          <circle cx={170 + x1 * 24} cy="110" r="6" fill="#ffd166" />
          <circle cx={170 + x2 * 24} cy="110" r="6" fill="#ff6a3d" />
          <text x="170" y="144" textAnchor="middle" fill="#45d8ff" fontSize="12" fontWeight="700">
            (x {x1 >= 0 ? `− ${x1}` : `+ ${Math.abs(x1)}`})(x {x2 >= 0 ? `− ${x2}` : `+ ${Math.abs(x2)}`}) = 0
          </text>
        </svg>
        <div className="cl-readout-row">
          <Readout label="S = x₁ + x₂ = −b/a" value={`${x1} + ${x2} = ${sum}`} />
          <Readout label="P = x₁ · x₂ = c/a" value={`${x1} · ${x2} = ${prod}`} />
        </div>
      </div>
      <div className="cl-controls">
        <Slider label={pick(lang, 'Root x₁', 'Radice x₁')} value={x1} min={-4} max={5} lang={lang} onChange={setX1} />
        <Slider label={pick(lang, 'Root x₂', 'Radice x₂')} value={x2} min={-4} max={5} lang={lang} onChange={setX2} />
        <Analogy lang={lang} en="Pick any two roots x₁, x₂ and watch x² − Sx + P = 0 build itself automatically!" it="Scegli due radici x₁ e x₂ e osserva come x² − Sx + P = 0 si costruisce subito da solo!" />
      </div>
    </div>
  );
};

// 6) math_l2_m6: Quadratic Inequality Sign Lab
export const QuadraticInequalityLab: React.FC<LabProps> = ({ lang }) => {
  const [r1, setR1] = useState(-2);
  const [r2, setR2] = useState(3);
  const [signGoal, setSignGoal] = useState<'gt' | 'lt'>('gt');
  const lo = Math.min(r1, r2);
  const hi = Math.max(r1, r2);
  const px = (x: number) => 170 + x * 24;

  let path = '';
  for (let i = -50; i <= 50; i++) {
    const x = i / 10;
    const y = (x - lo) * (x - hi);
    const cy = Math.max(-7, Math.min(9, y));
    path += `${i === -50 ? 'M' : 'L'}${px(x).toFixed(1)} ${(105 - cy * 9).toFixed(1)} `;
  }

  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 340 190" role="img" aria-label={pick(lang, 'Parabola inequality sign intervals', 'Parabola e intervalli della disequazione di 2° grado')}>
          <line x1="25" y1="105" x2="315" y2="105" stroke="#6f74a6" strokeWidth="2" />
          {signGoal === 'gt' ? (
            <>
              <line x1="25" y1="105" x2={px(lo)} y2="105" stroke="#38ef7d" strokeWidth="6" />
              <line x1={px(hi)} y1="105" x2="315" y2="105" stroke="#38ef7d" strokeWidth="6" />
            </>
          ) : (
            <line x1={px(lo)} y1="105" x2={px(hi)} y2="105" stroke="#ff6a3d" strokeWidth="6" />
          )}
          <path d={path} fill="none" stroke="#ffd166" strokeWidth="3" />
          <circle cx={px(lo)} cy="105" r="5" fill="#111936" stroke="#ffd166" strokeWidth="2.5" />
          <circle cx={px(hi)} cy="105" r="5" fill="#111936" stroke="#ffd166" strokeWidth="2.5" />
          <text x="170" y="170" textAnchor="middle" fill={signGoal === 'gt' ? '#38ef7d' : '#ff6a3d'} fontSize="13" fontWeight="800">
            {lo === hi
              ? (signGoal === 'gt' ? `∀ x ≠ ${lo}` : '∅')
              : signGoal === 'gt'
                ? `x < ${lo}  ∨  x > ${hi}`
                : `${lo} < x < ${hi}`}
          </text>
        </svg>
        <div className="cl-readout-row">
          <Readout label={pick(lang, 'Rule (with a > 0)', 'Regola (con a > 0)')} value={signGoal === 'gt' ? pick(lang, 'OUTSIDE roots', 'Valori ESTERNI') : pick(lang, 'BETWEEN roots', 'Valori INTERNI')} />
          <Readout label={pick(lang, 'Factored check', 'Forma scomposta')} value={`(x ${lo >= 0 ? `− ${lo}` : `+ ${Math.abs(lo)}`})(x ${hi >= 0 ? `− ${hi}` : `+ ${Math.abs(hi)}`}) ${signGoal === 'gt' ? '> 0' : '< 0'}`} />
        </div>
      </div>
      <div className="cl-controls">
        <div className="cl-mode-tabs">
          <button type="button" className={signGoal === 'gt' ? 'active' : ''} onClick={() => setSignGoal('gt')}>&gt; 0 ({pick(lang, 'Above axis', 'Sopra asse')})</button>
          <button type="button" className={signGoal === 'lt' ? 'active' : ''} onClick={() => setSignGoal('lt')}>&lt; 0 ({pick(lang, 'Below axis', 'Sotto asse')})</button>
        </div>
        <Slider label={pick(lang, 'Left root x₁', 'Radice x₁')} value={r1} min={-4} max={4} lang={lang} onChange={setR1} />
        <Slider label={pick(lang, 'Right root x₂', 'Radice x₂')} value={r2} min={-4} max={4} lang={lang} onChange={setR2} />
        <Analogy lang={lang} en="Above sea level (> 0) is OUTSIDE the roots; underwater (< 0) is trapped BETWEEN them!" it="Sopra il livello del mare (> 0) = ESTERNI; sott’acqua (< 0) = INTERNI!" />
      </div>
    </div>
  );
};

// 7) math_l2_m7: Euclid 1st & 2nd Theorem Interactive Triangle
export const EuclidTriangleLab: React.FC<LabProps> = ({ lang }) => {
  const [p1, setP1] = useState(4);
  const [p2, setP2] = useState(9);

  const a = p1 + p2;
  const h = Math.sqrt(p1 * p2);
  const b = Math.sqrt(a * p1);
  const c = Math.sqrt(a * p2);

  // Scale into SVG [40..300]
  const scale = 250 / a;
  const xA = 45;
  const xH = xA + p1 * scale;
  const xB = xA + a * scale;
  const yBase = 162;
  const yC = Math.max(24, yBase - h * scale);

  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 340 195" role="img" aria-label={pick(lang, 'Right triangle showing projections p1, p2 and altitude h', 'Triangolo rettangolo con proiezioni p1, p2 e altezza h')}>
          <polygon points={`${xA},${yBase} ${xH},${yC} ${xB},${yBase}`} fill="rgba(69,216,255,.15)" stroke="#45d8ff" strokeWidth="2.8" />
          <line x1={xH} y1={yC} x2={xH} y2={yBase} stroke="#ffd166" strokeWidth="2.6" strokeDasharray="5 3" />
          <line x1={xA} y1={yBase} x2={xH} y2={yBase} stroke="#38ef7d" strokeWidth="4" />
          <line x1={xH} y1={yBase} x2={xB} y2={yBase} stroke="#ff6a3d" strokeWidth="4" />
          <text x={(xA + xH) / 2} y="180" textAnchor="middle" fill="#38ef7d" fontSize="11" fontWeight="700">p₁ = {p1}</text>
          <text x={(xH + xB) / 2} y="180" textAnchor="middle" fill="#ff6a3d" fontSize="11" fontWeight="700">p₂ = {p2}</text>
          <text x={xH + 6} y={(yC + yBase) / 2} fill="#ffd166" fontSize="11" fontWeight="800">h = {fmt(lang, h, 2)}</text>
        </svg>
        <div className="cl-readout-row">
          <Readout label="2° Euclide: h = √(p₁ · p₂)" value={`√(${p1} · ${p2}) = ${fmt(lang, h, 2)}`} />
          <Readout label="1° Euclide: b = √(a · p₁)" value={`b = ${fmt(lang, b, 2)}, c = ${fmt(lang, c, 2)}, a = ${a}`} />
        </div>
      </div>
      <div className="cl-controls">
        <Slider label={pick(lang, 'Projection p₁', 'Proiezione p₁')} value={p1} min={1} max={12} lang={lang} onChange={setP1} />
        <Slider label={pick(lang, 'Projection p₂', 'Proiezione p₂')} value={p2} min={1} max={12} lang={lang} onChange={setP2} />
        <div className="cl-actions">
          <button type="button" className="cl-btn" onClick={() => { setP1(4); setP2(9); }}>4 & 9 → h = 6</button>
          <button type="button" className="cl-btn" onClick={() => { setP1(9); setP2(16); }}>9 & 16 → h = 12</button>
        </div>
        <Analogy lang={lang} en="Two shadows p₁ and p₂ under the overhead sun uniquely fix the whole right triangle!" it="Due ombre p₁ e p₂ sull’ipotenusa fissano subito altezza h e cateti b, c!" />
      </div>
    </div>
  );
};

// 8) math_l2_m8: Circle Central vs Inscribed Angle + Scaling Law
export const ThalesCircleLab: React.FC<LabProps> = ({ lang }) => {
  const [centralDeg, setCentralDeg] = useState(110);
  const [scaleK, setScaleK] = useState(2);
  const inscribedDeg = centralDeg / 2;

  const rad1 = (210 * Math.PI) / 180;
  const rad2 = ((210 - centralDeg) * Math.PI) / 180;
  const cx = 120;
  const cy = 104;
  const R = 64;
  const x1 = cx + R * Math.cos(rad1);
  const y1 = cy - R * Math.sin(rad1);
  const x2 = cx + R * Math.cos(rad2);
  const y2 = cy - R * Math.sin(rad2);
  const vx = cx;
  const vy = cy - R;

  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 340 195" role="img" aria-label={pick(lang, 'Central angle is twice the inscribed angle', 'Angolo al centro doppio dell’angolo alla circonferenza')}>
          <circle cx={cx} cy={cy} r={R} fill="rgba(69,216,255,.08)" stroke="#45d8ff" strokeWidth="2.5" />
          <polygon points={`${vx},${vy} ${x1},${y1} ${x2},${y2}`} fill="rgba(56,239,125,.14)" stroke="#38ef7d" strokeWidth="2.2" />
          <polygon points={`${cx},${cy} ${x1},${y1} ${x2},${y2}`} fill="rgba(255,209,102,.18)" stroke="#ffd166" strokeWidth="2" />
          <circle cx={cx} cy={cy} r="4" fill="#ffd166" />
          <text x={cx} y="26" textAnchor="middle" fill="#38ef7d" fontSize="11" fontWeight="800">{pick(lang, 'Inscribed', 'Circonferenza')}: {fmt(lang, inscribedDeg, 1)}°</text>
          <text x="260" y="74" textAnchor="middle" fill="#ffd166" fontSize="12" fontWeight="800">{pick(lang, 'Central', 'Al centro')} = {centralDeg}°</text>
          <text x="260" y="108" textAnchor="middle" fill="#45d8ff" fontSize="12" fontWeight="700">{pick(lang, 'Side scale', 'Scala lati')} k = {scaleK}×</text>
          <text x="260" y="132" textAnchor="middle" fill="#ff9f45" fontSize="13" fontWeight="800">{pick(lang, 'Area scale', 'Scala area')} k² = {scaleK * scaleK}×</text>
        </svg>
        <div className="cl-readout-row">
          <Readout label={pick(lang, 'Inscribed angle', 'Angolo alla circonferenza')} value={`${fmt(lang, inscribedDeg, 1)}° (= ½ · ${centralDeg}°)`} />
          <Readout label={pick(lang, 'Similarity area ratio', 'Rapporto aree k²')} value={`k = ${scaleK} → ${scaleK * scaleK}× area`} />
        </div>
      </div>
      <div className="cl-controls">
        <Slider label={pick(lang, 'Central angle (°)', 'Angolo al centro (°)')} value={centralDeg} min={40} max={180} step={10} lang={lang} onChange={setCentralDeg} />
        <Slider label={pick(lang, 'Similarity ratio k', 'Fattore di scala k')} value={scaleK} min={1} max={5} step={1} lang={lang} onChange={setScaleK} />
        <div className="cl-actions">
          <button type="button" className="cl-btn" onClick={() => setCentralDeg(180)}>{pick(lang, 'Semicircle 180° → 90°', 'Semicirconferenza 180° → 90°')}</button>
        </div>
        <Analogy lang={lang} en="Set central angle to 180° (diameter) and watch the top corner always lock to 90°!" it="Metti l’angolo al centro a 180° (diametro) e vedrai l’angolo inscritto bloccarsi a 90°!" />
      </div>
    </div>
  );
};

// 9) math_l2_m9: Probability Urn & Law of Large Numbers Simulator
export const ProbabilityUrnLab: React.FC<LabProps> = ({ lang }) => {
  const [favorable, setFavorable] = useState(3);
  const [total, setTotal] = useState(10);
  const [draws, setDraws] = useState(0);
  const [hits, setHits] = useState(0);
  const [playing, setPlaying] = useState(false);

  const safeFav = Math.min(favorable, total);
  const pTheo = safeFav / total;

  useEffect(() => {
    if (!playing) return;
    const id = window.setInterval(() => {
      setDraws(d => d + 10);
      let newHits = 0;
      for (let i = 0; i < 10; i++) {
        if (Math.random() < pTheo) newHits++;
      }
      setHits(h => h + newHits);
    }, 350);
    return () => window.clearInterval(id);
  }, [playing, pTheo]);

  const freq = draws > 0 ? hits / draws : 0;

  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <div className="cl-bars">
          <div className="cl-bar-item">
            <span>
              <b>{pick(lang, 'Theoretical P(E) = f / n', 'Probabilità teorica P(E)')}</b>
              <b>{(pTheo * 100).toFixed(1)}% ({safeFav}/{total})</b>
            </span>
            <div className="cl-bar-track"><div style={{ width: `${pTheo * 100}%`, background: '#45d8ff' }} /></div>
          </div>
          <div className="cl-bar-item">
            <span>
              <b>{pick(lang, 'Experimental frequency f/N', 'Frequenza osservata f/N')}</b>
              <b>{draws > 0 ? `${(freq * 100).toFixed(1)}% (${hits}/${draws})` : '—'}</b>
            </span>
            <div className="cl-bar-track"><div style={{ width: `${freq * 100}%`, background: '#38ef7d' }} /></div>
          </div>
        </div>
        <svg viewBox="0 0 340 124" aria-hidden="true">
          <rect x="64" y="16" width="212" height="96" rx="18" fill="#0b102c" stroke="#45d8ff" strokeWidth="2.2" />
          <line x1="94" y1="16" x2="246" y2="16" stroke="#0b102c" strokeWidth="5" />
          <path d="M90 16 L104 34 L236 34 L250 16" fill="none" stroke="#45d8ff" strokeWidth="2" opacity="0.65" />
          {Array.from({ length: total }, (_, i) => {
            const col = i % 6;
            const row = Math.floor(i / 6);
            const cx = 98 + col * 29;
            const cy = 54 + row * 32;
            const isFav = i < safeFav;
            return (
              <circle
                key={i}
                cx={cx}
                cy={cy}
                r={10}
                fill={isFav ? '#38ef7d' : '#ff6a3d'}
                stroke="#ffffff"
                strokeOpacity="0.4"
                strokeWidth="1.5"
                className={playing && isFav ? 'chem-anim-pulse' : undefined}
              />
            );
          })}
          <text x="170" y="106" textAnchor="middle" fill="#b4bcdb" fontSize="10" fontWeight="bold">
            {pick(lang, `Urn: ${safeFav} green / ${total} total`, `Urna: ${safeFav} verdi / ${total} totali`)}
          </text>
        </svg>
        <div className="cl-readout-row">
          <Readout label="P(Ē) = 1 − P(E)" value={`${((1 - pTheo) * 100).toFixed(1)}%`} />
          <Readout label={pick(lang, 'Total simulated trials', 'Prove simulate')} value={String(draws)} />
        </div>
      </div>
      <div className="cl-controls">
        <Slider label={pick(lang, 'Green (favorable) balls', 'Palline verdi (favorevoli)')} value={safeFav} min={0} max={total} lang={lang} onChange={v => { setFavorable(v); setDraws(0); setHits(0); }} />
        <Slider label={pick(lang, 'Total balls in urn', 'Totale palline nell’urna')} value={total} min={2} max={12} lang={lang} onChange={t => { setTotal(t); setFavorable(f => Math.min(f, t)); setDraws(0); setHits(0); }} />
        <div className="cl-actions">
          <PlayToggle playing={playing} onToggle={() => setPlaying(p => !p)} lang={lang} />
          <button type="button" className="cl-btn" onClick={() => { setDraws(0); setHits(0); setPlaying(false); }}>
            {pick(lang, 'Reset', 'Azzera')}
          </button>
        </div>
        <Analogy lang={lang} en="Press Play motion to draw 10 marbles repeatedly and watch observed frequency lock onto theoretical P(E)!" it="Premi Avvia moto per estrarre decine di palline e vedere la frequenza stabilizzarsi su P(E)!" />
      </div>
    </div>
  );
};

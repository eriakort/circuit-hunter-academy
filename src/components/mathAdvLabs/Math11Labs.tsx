import React, { useEffect, useState } from 'react';
import type { Language } from '../../types';
import { Analogy, PlayToggle, Readout, Slider, fmt, pick } from '../chemLabs/chemLabShared';

type LabProps = { lang: Language };

// 1) math_l3_m1: Real Functions Parity & Inverse Mirror Lab
export const FunctionsSymmetryLab: React.FC<LabProps> = ({ lang }) => {
  const [fnType, setFnType] = useState<'square' | 'cube' | 'inv' | 'sqrt'>('cube');
  const [testX, setTestX] = useState(2);

  const evalFn = (x: number) => {
    if (fnType === 'square') return x * x;
    if (fnType === 'cube') return x * x * x / 4;
    if (fnType === 'inv') return x === 0 ? NaN : 2 / x;
    return x >= 0 ? Math.sqrt(x * 2) : NaN;
  };
  const yPos = evalFn(testX);
  const yNeg = evalFn(-testX);
  const px = (x: number) => 170 + x * 24;
  const py = (y: number) => 102 - y * 15;

  const meta = {
    square: { dom: 'ℝ', sym: pick(lang, 'Even (y-axis)', 'Pari (asse y)'), inv: pick(lang, 'No on all ℝ', 'No su tutto ℝ') },
    cube: { dom: 'ℝ', sym: pick(lang, 'Odd (origin)', 'Dispari (origine)'), inv: pick(lang, 'Yes: ∛(4x)', 'Sì: ∛(4x)') },
    inv: { dom: 'x ≠ 0', sym: pick(lang, 'Odd (origin)', 'Dispari (origine)'), inv: pick(lang, 'Yes: 2/x', 'Sì: 2/x') },
    sqrt: { dom: 'x ≥ 0', sym: pick(lang, 'Neither', 'Né pari né dispari'), inv: pick(lang, 'Yes on x≥0', 'Sì su x≥0') }
  }[fnType];

  let d = '';
  let started = false;
  for (let i = -45; i <= 45; i++) {
    const x = i / 10;
    const y = evalFn(x);
    if (!Number.isFinite(y) || Math.abs(y) > 7) { started = false; continue; }
    d += `${started ? 'L' : 'M'}${px(x).toFixed(1)} ${py(y).toFixed(1)} `;
    started = true;
  }

  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 340 205" role="img" aria-label={pick(lang, 'Function graph showing domain and symmetry', 'Grafico di funzione con dominio e simmetria')}>
          <line x1="25" y1="102" x2="315" y2="102" stroke="#6f74a6" strokeWidth="1.4" />
          <line x1="170" y1="15" x2="170" y2="190" stroke="#6f74a6" strokeWidth="1.4" />
          <line x1="65" y1="190" x2="275" y2="15" stroke="#6f74a6" strokeWidth="1.2" strokeDasharray="4 4" />
          <path d={d} fill="none" stroke="#45d8ff" strokeWidth="3" />
          {Number.isFinite(yPos) && Math.abs(yPos) <= 6 && <circle cx={px(testX)} cy={py(yPos)} r="5.5" fill="#38ef7d" />}
          {Number.isFinite(yNeg) && Math.abs(yNeg) <= 6 && <circle cx={px(-testX)} cy={py(yNeg)} r="5.5" fill="#ffd166" />}
        </svg>
        <div className="cl-readout-row">
          <Readout label={pick(lang, 'Domain & Symmetry', 'Dominio e Simmetria')} value={`${meta.dom} · ${meta.sym}`} />
          <Readout label="f(x) vs f(−x)" value={`f(${testX})=${Number.isFinite(yPos) ? fmt(lang, yPos, 2) : '∅'} · f(${-testX})=${Number.isFinite(yNeg) ? fmt(lang, yNeg, 2) : '∅'}`} />
        </div>
      </div>
      <div className="cl-controls">
        <div className="cl-mode-tabs">
          <button type="button" className={fnType === 'square' ? 'active' : ''} onClick={() => setFnType('square')}>x²</button>
          <button type="button" className={fnType === 'cube' ? 'active' : ''} onClick={() => setFnType('cube')}>x³/4</button>
          <button type="button" className={fnType === 'inv' ? 'active' : ''} onClick={() => setFnType('inv')}>2/x</button>
          <button type="button" className={fnType === 'sqrt' ? 'active' : ''} onClick={() => setFnType('sqrt')}>√(2x)</button>
        </div>
        <Slider label={pick(lang, 'Sample x', 'Valore test x')} value={testX} min={1} max={4} step={0.5} decimals={1} lang={lang} onChange={setTestX} />
        <Readout label={pick(lang, 'Invertible?', 'Invertibile?')} value={meta.inv} />
        <Analogy lang={lang} en="Compare the green point (+x) and gold point (−x): same height = Even; flipped height = Odd!" it="Confronta il punto verde (+x) e oro (−x): stessa altezza = Pari; altezza opposta = Dispari!" />
      </div>
    </div>
  );
};

// 2) math_l3_m2: Absolute Value V-Bounce Lab
export const ModulusVGraphLab: React.FC<LabProps> = ({ lang }) => {
  const [center, setCenter] = useState(1);
  const [radius, setRadius] = useState(3);
  const [cmp, setCmp] = useState<'lt' | 'gt'>('lt');
  const px = (x: number) => 170 + x * 20;
  const py = (y: number) => 156 - y * 18;
  const lo = center - radius;
  const hi = center + radius;

  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 340 195" role="img" aria-label={pick(lang, 'Absolute value V-graph and solution interval', 'Grafico a V del valore assoluto e intervallo soluzione')}>
          <line x1="25" y1="156" x2="315" y2="156" stroke="#6f74a6" strokeWidth="1.8" />
          <line x1="170" y1="18" x2="170" y2="175" stroke="#6f74a6" strokeWidth="1.4" />
          <line x1="25" y1={py(radius)} x2="315" y2={py(radius)} stroke="#ffd166" strokeWidth="2" strokeDasharray="5 3" />
          <polyline points={`${px(center - 6)},${py(6)} ${px(center)},156 ${px(center + 6)},${py(6)}`} fill="none" stroke="#45d8ff" strokeWidth="3.2" />
          {cmp === 'lt' ? (
            <line x1={px(Math.max(-6, lo))} y1="156" x2={px(Math.min(6, hi))} y2="156" stroke="#38ef7d" strokeWidth="6" />
          ) : (
            <>
              <line x1="25" y1="156" x2={px(Math.max(-6, lo))} y2="156" stroke="#ff6a3d" strokeWidth="6" />
              <line x1={px(Math.min(6, hi))} y1="156" x2="315" y2="156" stroke="#ff6a3d" strokeWidth="6" />
            </>
          )}
          <circle cx={px(lo)} cy={py(radius)} r="4.5" fill="#ffd166" />
          <circle cx={px(hi)} cy={py(radius)} r="4.5" fill="#ffd166" />
          <text x="170" y="182" textAnchor="middle" fill={cmp === 'lt' ? '#38ef7d' : '#ff6a3d'} fontSize="13" fontWeight="800">
            {cmp === 'lt' ? `${lo} < x < ${hi}` : `x < ${lo}  ∨  x > ${hi}`}
          </text>
        </svg>
        <div className="cl-readout-row">
          <Readout label={pick(lang, 'Inequality', 'Disequazione')} value={`|x ${center >= 0 ? `− ${center}` : `+ ${Math.abs(center)}`}| ${cmp === 'lt' ? '<' : '>'} ${radius}`} />
          <Readout label={pick(lang, 'Distance meaning', 'Significato distanza')} value={cmp === 'lt' ? pick(lang, `Within ${radius} steps of ${center}`, `Entro ${radius} passi da ${center}`) : pick(lang, `More than ${radius} away`, `Oltre ${radius} passi da ${center}`)} />
        </div>
      </div>
      <div className="cl-controls">
        <div className="cl-mode-tabs">
          <button type="button" className={cmp === 'lt' ? 'active' : ''} onClick={() => setCmp('lt')}>&lt; k ({pick(lang, 'Inside', 'Interno')})</button>
          <button type="button" className={cmp === 'gt' ? 'active' : ''} onClick={() => setCmp('gt')}>&gt; k ({pick(lang, 'Outside', 'Esterno')})</button>
        </div>
        <Slider label={pick(lang, 'Vertex center c', 'Centro c')} value={center} min={-3} max={3} lang={lang} onChange={setCenter} />
        <Slider label={pick(lang, 'Distance limit k', 'Limite k')} value={radius} min={1} max={5} lang={lang} onChange={setRadius} />
        <Analogy lang={lang} en="The modulus |x − c| makes a sharp V-bounce at c; < k traps points below the yellow roof!" it="Il modulo |x − c| rimbalza a V in c; < k seleziona i punti sotto la linea gialla!" />
      </div>
    </div>
  );
};

// 3) math_l3_m3: Irrational Equation Squaring Ghost Detector
export const IrrationalSquaringLab: React.FC<LabProps> = ({ lang }) => {
  const [shift, setShift] = useState(3);
  const [lineOffset, setLineOffset] = useState(-3);
  // Solve sqrt(x + shift) = x + lineOffset -> x + shift = (x + lineOffset)^2
  const bCoef = 2 * lineOffset - 1;
  const cCoef = lineOffset * lineOffset - shift;
  const disc = bCoef * bCoef - 4 * cCoef;
  const candidates = disc >= 0 ? [(-bCoef - Math.sqrt(disc)) / 2, (-bCoef + Math.sqrt(disc)) / 2] : [];
  const validRoots = candidates.filter(x => x + shift >= -1e-6 && x + lineOffset >= -1e-6);
  const ghostRoots = candidates.filter(x => x + shift >= -1e-6 && x + lineOffset < -1e-6);

  const px = (x: number) => 170 + x * 20;
  const py = (y: number) => 115 - y * 16;

  let rootCurve = '';
  for (let i = 0; i <= 70; i++) {
    const x = -shift + i * 0.14;
    if (x > 6.5) break;
    rootCurve += `${i === 0 ? 'M' : 'L'}${px(x).toFixed(1)} ${py(Math.sqrt(Math.max(0, x + shift))).toFixed(1)} `;
  }

  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 340 195" role="img" aria-label={pick(lang, 'Square root curve and straight line intersections', 'Curva radice quadrata e retta con verifica soluzioni estranee')}>
          <line x1="25" y1="115" x2="315" y2="115" stroke="#6f74a6" strokeWidth="1.5" />
          <line x1="170" y1="15" x2="170" y2="180" stroke="#6f74a6" strokeWidth="1.4" />
          <path d={rootCurve} fill="none" stroke="#45d8ff" strokeWidth="3" />
          <line x1={px(-6)} y1={py(-6 + lineOffset)} x2={px(6)} y2={py(6 + lineOffset)} stroke="#ffd166" strokeWidth="2.5" />
          {validRoots.map((x, idx) => (
            <circle key={idx} cx={px(x)} cy={py(x + lineOffset)} r="6" fill="#38ef7d" stroke="#fff" strokeWidth="1.5" />
          ))}
          {ghostRoots.map((x, idx) => (
            <circle key={`g${idx}`} cx={px(x)} cy={py(x + lineOffset)} r="5.5" fill="none" stroke="#ff6a3d" strokeWidth="2.5" strokeDasharray="3 2" />
          ))}
        </svg>
        <div className="cl-readout-row">
          <Readout label={pick(lang, 'Valid root (B ≥ 0)', 'Soluzione valida')} value={validRoots.length ? validRoots.map(v => `x = ${fmt(lang, v, 2)}`).join(', ') : '∅'} />
          <Readout label={pick(lang, 'Rejected ghosts (B < 0)', 'Scartate per B < 0')} value={ghostRoots.length ? ghostRoots.map(v => `x = ${fmt(lang, v, 2)}`).join(', ') : pick(lang, 'None', 'Nessuna')} />
        </div>
      </div>
      <div className="cl-controls">
        <Slider label="A(x) = x + k  (k)" value={shift} min={0} max={5} lang={lang} onChange={setShift} />
        <Slider label="B(x) = x + q  (q)" value={lineOffset} min={-4} max={2} lang={lang} onChange={setLineOffset} />
        <Readout label={pick(lang, 'Equation', 'Equazione')} value={`√(x + ${shift}) = x ${lineOffset >= 0 ? `+ ${lineOffset}` : `− ${Math.abs(lineOffset)}`}`} />
        <Analogy lang={lang} en="The blue √ curve only lives ABOVE the x-axis: any quadratic root sitting below the axis is a ghost root!" it="La curva √ vive solo SOPRA l’asse x: se la retta è negativa lì, la soluzione è fantasma e va scartata!" />
      </div>
    </div>
  );
};

// 4) math_l3_m4: Parabola & Circle Builder
export const ParabolaCircleBuilderLab: React.FC<LabProps> = ({ lang }) => {
  const [conic, setConic] = useState<'parabola' | 'circle'>('circle');
  const [h, setH] = useState(1);
  const [k, setK] = useState(-1);
  const [param, setParam] = useState(3); // R for circle, a*2 for parabola

  const px = (x: number) => 170 + x * 20;
  const py = (y: number) => 102 - y * 16;

  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 340 200" role="img" aria-label={pick(lang, 'Parabola or Circle on the Cartesian plane', 'Parabola o Circonferenza nel piano cartesiano')}>
          <line x1="25" y1="102" x2="315" y2="102" stroke="#6f74a6" strokeWidth="1.4" />
          <line x1="170" y1="16" x2="170" y2="188" stroke="#6f74a6" strokeWidth="1.4" />
          {conic === 'circle' ? (
            <>
              <ellipse cx={px(h)} cy={py(k)} rx={param * 20} ry={param * 16} fill="rgba(69,216,255,.12)" stroke="#45d8ff" strokeWidth="3" />
              <line x1={px(h)} y1={py(k)} x2={px(h + param)} y2={py(k)} stroke="#ffd166" strokeWidth="2.5" />
              <circle cx={px(h)} cy={py(k)} r="5" fill="#ff6a3d" />
            </>
          ) : (
            (() => {
              const aVal = (param - 2.5) * 0.4 || 0.4;
              let d = '';
              for (let i = -55; i <= 55; i++) {
                const x = i / 10;
                const y = aVal * (x - h) * (x - h) + k;
                const cy = Math.max(-5.5, Math.min(5.5, y));
                d += `${i === -55 ? 'M' : 'L'}${px(x).toFixed(1)} ${py(cy).toFixed(1)} `;
              }
              return (
                <>
                  <path d={d} fill="none" stroke="#ffd166" strokeWidth="3" />
                  <circle cx={px(h)} cy={py(k)} r="5" fill="#38ef7d" />
                  <circle cx={px(h)} cy={py(k + 1 / (4 * aVal))} r="4" fill="#ff6a3d" />
                </>
              );
            })()
          )}
        </svg>
        <div className="cl-readout-row">
          <Readout
            label={conic === 'circle' ? pick(lang, 'Center & Radius', 'Centro e Raggio') : pick(lang, 'Vertex & Focus y', 'Vertice e Fuoco')}
            value={conic === 'circle' ? `C(${h}, ${k}) · R = ${param}` : `V(${h}, ${k}) · a = ${fmt(lang, (param - 2.5) * 0.4 || 0.4, 2)}`}
          />
          <Readout
            label={pick(lang, 'Standard form', 'Equazione canonica')}
            value={conic === 'circle' ? `(x−${h})² + (y−${k})² = ${param * param}` : `y = a(x−${h})² + (${k})`}
          />
        </div>
      </div>
      <div className="cl-controls">
        <div className="cl-mode-tabs">
          <button type="button" className={conic === 'circle' ? 'active' : ''} onClick={() => setConic('circle')}>{pick(lang, 'Circle', 'Circonferenza')}</button>
          <button type="button" className={conic === 'parabola' ? 'active' : ''} onClick={() => setConic('parabola')}>{pick(lang, 'Parabola', 'Parabola')}</button>
        </div>
        <Slider label="x₀ (h)" value={h} min={-3} max={3} lang={lang} onChange={setH} />
        <Slider label="y₀ (k)" value={k} min={-3} max={3} lang={lang} onChange={setK} />
        <Slider label={conic === 'circle' ? pick(lang, 'Radius R', 'Raggio R') : pick(lang, 'Opening slider', 'Apertura a')} value={param} min={1} max={4} lang={lang} onChange={setParam} />
        <Analogy lang={lang} en="Shift (x₀, y₀) to slide the circle or parabola across the grid without changing its size!" it="Sposta (x₀, y₀) per traslare la circonferenza o il vertice della parabola sul piano!" />
      </div>
    </div>
  );
};

// 5) math_l3_m5: Ellipse & Hyperbola Eccentricity Lab
export const EllipseHyperbolaLab: React.FC<LabProps> = ({ lang }) => {
  const [kind, setKind] = useState<'ellipse' | 'hyperbola'>('ellipse');
  const [a, setA] = useState(5);
  const [b, setB] = useState(3);

  const cVal = kind === 'ellipse' ? Math.sqrt(Math.abs(a * a - b * b)) : Math.sqrt(a * a + b * b);
  const ecc = cVal / Math.max(a, kind === 'ellipse' ? b : a);
  const sc = 18;
  const cx = 170;
  const cy = 100;

  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 340 198" role="img" aria-label={pick(lang, 'Ellipse or Hyperbola foci and asymptotes', 'Ellisse o Iperbole con fuochi e asintoti')}>
          <line x1="25" y1={cy} x2="315" y2={cy} stroke="#6f74a6" strokeWidth="1.4" />
          <line x1={cx} y1="14" x2={cx} y2="186" stroke="#6f74a6" strokeWidth="1.4" />
          {kind === 'ellipse' ? (
            <>
              <ellipse cx={cx} cy={cy} rx={a * sc} ry={b * sc} fill="rgba(56,239,125,.12)" stroke="#38ef7d" strokeWidth="3" />
              {a >= b ? (
                <>
                  <circle cx={cx - cVal * sc} cy={cy} r="5" fill="#ffd166" />
                  <circle cx={cx + cVal * sc} cy={cy} r="5" fill="#ffd166" />
                </>
              ) : (
                <>
                  <circle cx={cx} cy={cy - cVal * sc} r="5" fill="#ffd166" />
                  <circle cx={cx} cy={cy + cVal * sc} r="5" fill="#ffd166" />
                </>
              )}
            </>
          ) : (
            <>
              <line x1={cx - 120} y1={cy + (b / a) * 120} x2={cx + 120} y2={cy - (b / a) * 120} stroke="#ffd166" strokeWidth="1.6" strokeDasharray="5 3" />
              <line x1={cx - 120} y1={cy - (b / a) * 120} x2={cx + 120} y2={cy + (b / a) * 120} stroke="#ffd166" strokeWidth="1.6" strokeDasharray="5 3" />
              {(() => {
                let rBranch = '';
                let lBranch = '';
                for (let t = -22; t <= 22; t++) {
                  const s = t / 10;
                  const x = a * Math.cosh(s);
                  const y = b * Math.sinh(s);
                  if (x * sc > 140) continue;
                  rBranch += `${rBranch ? 'L' : 'M'}${(cx + x * sc).toFixed(1)} ${(cy - y * sc).toFixed(1)} `;
                  lBranch += `${lBranch ? 'L' : 'M'}${(cx - x * sc).toFixed(1)} ${(cy - y * sc).toFixed(1)} `;
                }
                return (
                  <>
                    <path d={rBranch} fill="none" stroke="#ff6a3d" strokeWidth="3" />
                    <path d={lBranch} fill="none" stroke="#ff6a3d" strokeWidth="3" />
                  </>
                );
              })()}
              <circle cx={cx - cVal * sc} cy={cy} r="5" fill="#ffd166" />
              <circle cx={cx + cVal * sc} cy={cy} r="5" fill="#ffd166" />
            </>
          )}
        </svg>
        <div className="cl-readout-row">
          <Readout label="Foci c & Eccentricity e" value={`c = ${fmt(lang, cVal, 2)} · e = ${fmt(lang, ecc, 2)}`} />
          <Readout label={kind === 'ellipse' ? 'x²/a² + y²/b² = 1' : pick(lang, 'Asymptotes y = ±(b/a)x', 'Asintoti y = ±(b/a)x')} value={kind === 'ellipse' ? `x²/${a * a} + y²/${b * b} = 1` : `y = ±(${b}/${a})x`} />
        </div>
      </div>
      <div className="cl-controls">
        <div className="cl-mode-tabs">
          <button type="button" className={kind === 'ellipse' ? 'active' : ''} onClick={() => setKind('ellipse')}>{pick(lang, 'Ellipse (+)', 'Ellisse (+)')}</button>
          <button type="button" className={kind === 'hyperbola' ? 'active' : ''} onClick={() => setKind('hyperbola')}>{pick(lang, 'Hyperbola (−)', 'Iperbole (−)')}</button>
        </div>
        <Slider label={pick(lang, 'Semi-axis a', 'Semiasse a')} value={a} min={2} max={6} lang={lang} onChange={setA} />
        <Slider label={pick(lang, 'Semi-axis b', 'Semiasse b')} value={b} min={1} max={5} lang={lang} onChange={setB} />
        <Analogy lang={lang} en="In an ellipse, set a = b and watch c → 0, e → 0 (a perfect circle!); in a hyperbola e is always > 1!" it="Nell’ellisse prova a = b per vedere e = 0 (circonferenza!); nell’iperbole e è sempre > 1!" />
      </div>
    </div>
  );
};

// 6) math_l3_m6: Line–Conic Secant / Tangent / External Lab
export const ConicTangentLab: React.FC<LabProps> = ({ lang }) => {
  const [lineY, setLineY] = useState(3);
  const R = 3; // circle radius
  const state = Math.abs(lineY) < R ? 'secant' : Math.abs(lineY) === R ? 'tangent' : 'external';

  const px = (x: number) => 170 + x * 22;
  const py = (y: number) => 104 - y * 20;
  const hitX = Math.abs(lineY) <= R ? Math.sqrt(R * R - lineY * lineY) : 0;

  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 340 198" role="img" aria-label={pick(lang, 'Line sweeping across a circle of radius 3', 'Retta orizzontale rispetto a una circonferenza di raggio 3')}>
          <line x1="25" y1={py(0)} x2="315" y2={py(0)} stroke="#6f74a6" strokeWidth="1.4" />
          <line x1={px(0)} y1="16" x2={px(0)} y2="186" stroke="#6f74a6" strokeWidth="1.4" />
          <circle cx={px(0)} cy={py(0)} r={R * 20} fill="rgba(69,216,255,.1)" stroke="#45d8ff" strokeWidth="3" />
          <line x1="35" y1={py(lineY)} x2="305" y2={py(lineY)} stroke={state === 'secant' ? '#38ef7d' : state === 'tangent' ? '#ffd166' : '#ff6a3d'} strokeWidth="3" />
          {state === 'secant' && (
            <>
              <circle cx={px(-hitX)} cy={py(lineY)} r="5.5" fill="#38ef7d" />
              <circle cx={px(hitX)} cy={py(lineY)} r="5.5" fill="#38ef7d" />
            </>
          )}
          {state === 'tangent' && <circle cx={px(0)} cy={py(lineY)} r="6" fill="#ffd166" stroke="#fff" strokeWidth="1.5" />}
        </svg>
        <div className="cl-readout-row">
          <Readout label="Distance d(C, line) vs R=3" value={`d = ${Math.abs(lineY)} vs R = 3`} />
          <Readout label={pick(lang, 'Position & Δ', 'Posizione e Δ')} value={state === 'secant' ? pick(lang, 'Secant (Δ > 0 · 2 hits)', 'Secante (Δ > 0 · 2 punti)') : state === 'tangent' ? pick(lang, 'Tangent (Δ = 0 · 1 hit)', 'Tangente (Δ = 0 · 1 punto)') : pick(lang, 'External (Δ < 0 · 0 hits)', 'Esterna (Δ < 0 · 0 punti)')} />
        </div>
      </div>
      <div className="cl-controls">
        <Slider label={pick(lang, 'Line height y = q', 'Altezza retta y = q')} value={lineY} min={-4} max={4} step={0.5} decimals={1} lang={lang} onChange={setLineY} />
        <div className="cl-actions">
          <button type="button" className="cl-btn" onClick={() => setLineY(3)}>{pick(lang, 'Snap to tangent', 'Blocca su tangente')}</button>
          <button type="button" className="cl-btn" onClick={() => setLineY(1.5)}>{pick(lang, 'Secant', 'Secante')}</button>
        </div>
        <Analogy lang={lang} en="Slide the line to q = ±3: at d = R, the two green hits kiss into ONE gold tangent point!" it="Sposta la retta a q = ±3: per d = R i due punti verdi si fondono in un solo punto tangente!" />
      </div>
    </div>
  );
};

// 7) math_l3_m7: Exponential & Logarithm Mirror + pH Lab
export const ExpLogMirrorLab: React.FC<LabProps> = ({ lang }) => {
  const [base, setBase] = useState(2);
  const [xVal, setXVal] = useState(3);
  const expY = Math.pow(base, Math.min(3.5, xVal));
  const logY = xVal > 0 ? Math.log(xVal) / Math.log(base) : NaN;
  const px = (x: number) => 120 + x * 20;
  const py = (y: number) => 130 - y * 16;

  let expPath = '';
  let logPath = '';
  for (let i = -30; i <= 35; i++) {
    const x = i / 10;
    const ey = Math.pow(base, x);
    if (ey <= 7.5) expPath += `${expPath ? 'L' : 'M'}${px(x).toFixed(1)} ${py(ey).toFixed(1)} `;
  }
  for (let i = 2; i <= 75; i++) {
    const x = i / 10;
    const ly = Math.log(x) / Math.log(base);
    if (Math.abs(ly) <= 6) logPath += `${logPath ? 'L' : 'M'}${px(x).toFixed(1)} ${py(ly).toFixed(1)} `;
  }

  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 340 198" role="img" aria-label={pick(lang, 'Exponential and logarithm graphs mirrored across y=x', 'Esponenziale e logaritmo simmetrici rispetto y=x')}>
          <line x1="25" y1={py(0)} x2="315" y2={py(0)} stroke="#6f74a6" strokeWidth="1.4" />
          <line x1={px(0)} y1="15" x2={px(0)} y2="188" stroke="#6f74a6" strokeWidth="1.4" />
          <line x1="55" y1="186" x2="275" y2="16" stroke="#6f74a6" strokeWidth="1.3" strokeDasharray="4 4" />
          <path d={expPath} fill="none" stroke="#45d8ff" strokeWidth="3" />
          <path d={logPath} fill="none" stroke="#ffd166" strokeWidth="3" />
          <circle cx={px(0)} cy={py(1)} r="4" fill="#45d8ff" />
          <circle cx={px(1)} cy={py(0)} r="4" fill="#ffd166" />
          <text x="245" y="42" fill="#45d8ff" fontSize="11" fontWeight="800">y = {base}ˣ</text>
          <text x="245" y="106" fill="#ffd166" fontSize="11" fontWeight="800">y = log({xVal})</text>
        </svg>
        <div className="cl-readout-row">
          <Readout label={`log_${base}(${xVal})`} value={Number.isFinite(logY) ? fmt(lang, logY, 3) : '∅'} />
          <Readout label={`${base}^${xVal} & pH (${base === 10 ? '10⁻ˣ' : '10⁻³'})`} value={`${fmt(lang, expY, 2)} · pH = ${base === 10 ? xVal : 3}`} />
        </div>
      </div>
      <div className="cl-controls">
        <div className="cl-mode-tabs cols-3">
          <button type="button" className={base === 0.5 ? 'active' : ''} onClick={() => setBase(0.5)}>a = 0.5</button>
          <button type="button" className={base === 2 ? 'active' : ''} onClick={() => setBase(2)}>a = 2</button>
          <button type="button" className={base === 10 ? 'active' : ''} onClick={() => setBase(10)}>a = 10</button>
        </div>
        <Slider label={pick(lang, 'Input x', 'Valore x')} value={xVal} min={1} max={10} step={1} lang={lang} onChange={setXVal} />
        <Analogy lang={lang} en="Switch between a = 2 and a = 0.5: when base < 1, both curves slope DOWNWARD instead of up!" it="Cambia tra a = 2 e a = 0,5: quando la base è < 1, entrambe le curve diventano decrescenti!" />
      </div>
    </div>
  );
};

// 8) math_l3_m8: Animated Unit Circle Ferris Wheel Lab
export const UnitCircleFerrisLab: React.FC<LabProps> = ({ lang }) => {
  const [deg, setDeg] = useState(30);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!playing) return;
    const id = window.setInterval(() => setDeg(d => (d + 5) % 360), 90);
    return () => window.clearInterval(id);
  }, [playing]);

  const rad = (deg * Math.PI) / 180;
  const c = Math.cos(rad);
  const s = Math.sin(rad);
  const cx = 135;
  const cy = 102;
  const R = 70;
  const px = cx + R * c;
  const py = cy - R * s;

  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 340 202" role="img" aria-label={pick(lang, 'Unit circle showing cosine and sine projections', 'Circonferenza goniometrica con seno e coseno')}>
          <line x1="35" y1={cy} x2="235" y2={cy} stroke="#6f74a6" strokeWidth="1.5" />
          <line x1={cx} y1="16" x2={cx} y2="188" stroke="#6f74a6" strokeWidth="1.5" />
          <circle cx={cx} cy={cy} r={R} fill="rgba(176,139,255,.1)" stroke="#b08bff" strokeWidth="2.8" />
          <line x1={cx} y1={cy} x2={px} y2={py} stroke="#ffd166" strokeWidth="2.8" />
          <line x1={cx} y1={cy} x2={px} y2={cy} stroke="#45d8ff" strokeWidth="3.8" />
          <line x1={px} y1={cy} x2={px} y2={py} stroke="#38ef7d" strokeWidth="3.8" />
          <circle cx={px} cy={py} r="6" fill="#ffd166" stroke="#fff" strokeWidth="1.5" />
          <text x="276" y="64" textAnchor="middle" fill="#45d8ff" fontSize="13" fontWeight="800">cos = {fmt(lang, c, 3)}</text>
          <text x="276" y="96" textAnchor="middle" fill="#38ef7d" fontSize="13" fontWeight="800">sin = {fmt(lang, s, 3)}</text>
          <text x="276" y="128" textAnchor="middle" fill="#ffd166" fontSize="12" fontWeight="700">{deg}° = {fmt(lang, deg / 180, 2)}π</text>
          <text x="276" y="156" textAnchor="middle" fill="#b7bce2" fontSize="11">sin²+cos² = {fmt(lang, s * s + c * c, 2)}</text>
        </svg>
        <div className="cl-readout-row">
          <Readout label="sin α / cos α" value={`sin = ${fmt(lang, s, 3)} · cos = ${fmt(lang, c, 3)}`} />
          <Readout label="tan α" value={Math.abs(c) < 1e-4 ? '∞ (undefined)' : fmt(lang, s / c, 3)} />
        </div>
      </div>
      <div className="cl-controls">
        <Slider label={pick(lang, 'Angle α', 'Angolo α')} value={deg} min={0} max={360} step={15} unit="°" lang={lang} onChange={setDeg} />
        <div className="cl-actions">
          <PlayToggle playing={playing} onToggle={() => setPlaying(p => !p)} lang={lang} />
          <button type="button" className="cl-btn" onClick={() => setDeg(30)}>30°</button>
          <button type="button" className="cl-btn" onClick={() => setDeg(45)}>45°</button>
          <button type="button" className="cl-btn" onClick={() => setDeg(60)}>60°</button>
        </div>
        <Analogy lang={lang} en="Blue horizontal bar = cos α; green vertical height = sin α. Press Play to ride the unit-circle Ferris wheel!" it="Barra blu orizzontale = cos α; altezza verde = sin α. Avvia il moto per far ruotare la ruota!" />
      </div>
    </div>
  );
};

// 9) math_l3_m9: Carnot Cosine Theorem & Law of Sines Lab
export const TriangleCarnotLab: React.FC<LabProps> = ({ lang }) => {
  const [b, setB] = useState(5);
  const [c, setC] = useState(8);
  const [gamma, setGamma] = useState(60);

  const rad = (gamma * Math.PI) / 180;
  const aSq = b * b + c * c - 2 * b * c * Math.cos(rad);
  const a = Math.sqrt(Math.max(0.01, aSq));
  const area = 0.5 * b * c * Math.sin(rad);

  // Plot C at (65, 162), B at (65 + c*18, 162), A at C + (b*cos(gamma), -b*sin(gamma))*18
  const sc = 17;
  const xC = 75;
  const yC = 162;
  const xB = xC + c * sc;
  const yB = yC;
  const xA = xC + b * Math.cos(rad) * sc;
  const yA = yC - b * Math.sin(rad) * sc;

  return (
    <div className="cl-grid">
      <div className="cl-visual">
        <svg viewBox="0 0 340 198" role="img" aria-label={pick(lang, 'Triangle updating side a and area with angle gamma', 'Triangolo dinamico per teorema di Carnot')}>
          <polygon points={`${xC},${yC} ${xB},${yB} ${xA.toFixed(1)},${yA.toFixed(1)}`} fill="rgba(56,239,125,.14)" stroke="#38ef7d" strokeWidth="2.8" />
          <text x={(xC + xB) / 2} y="179" textAnchor="middle" fill="#45d8ff" fontSize="11" fontWeight="700">c = {c}</text>
          <text x={(xC + xA) / 2 - 12} y={(yC + yA) / 2} fill="#ffd166" fontSize="11" fontWeight="700">b = {b}</text>
          <text x={(xA + xB) / 2 + 8} y={(yA + yB) / 2} fill="#ff6a3d" fontSize="12" fontWeight="800">a = {fmt(lang, a, 2)}</text>
          <text x={xC + 16} y={yC - 10} fill="#ffd166" fontSize="11" fontWeight="700">{gamma}°</text>
        </svg>
        <div className="cl-readout-row">
          <Readout label="Carnot: a = √(b²+c²−2bc cos γ)" value={`a = ${fmt(lang, a, 2)}`} />
          <Readout label={pick(lang, 'Area = ½ b·c·sin γ', 'Area = ½ b·c·sin γ')} value={`${fmt(lang, area, 2)}`} />
        </div>
      </div>
      <div className="cl-controls">
        <Slider label={pick(lang, 'Side b', 'Lato b')} value={b} min={3} max={7} lang={lang} onChange={setB} />
        <Slider label={pick(lang, 'Side c', 'Lato c')} value={c} min={4} max={10} lang={lang} onChange={setC} />
        <Slider label={pick(lang, 'Included angle γ', 'Angolo compreso γ')} value={gamma} min={30} max={150} step={15} unit="°" lang={lang} onChange={setGamma} />
        <div className="cl-actions">
          <button type="button" className="cl-btn" onClick={() => { setB(5); setC(8); setGamma(60); }}>5, 8, 60° → a = 7</button>
          <button type="button" className="cl-btn" onClick={() => setGamma(90)}>90° (Pythagoras)</button>
        </div>
        <Analogy lang={lang} en="Lock γ to 90° to recover Pythagoras; push γ > 90° and cos γ turns negative, making side a longer!" it="Imposta γ = 90° per ritrovare Pitagora; oltre 90° cos γ è negativo e allunga il lato opposto a!" />
      </div>
    </div>
  );
};

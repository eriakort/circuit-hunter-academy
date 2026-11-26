import React, { useState } from 'react';
import type { GhanaMathLabMode } from './ghanaMathLabConfig';

const Control: React.FC<{
  label: string;
  valueText: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (n: number) => void;
}> = ({ label, valueText, value, min, max, step = 1, onChange }) => (
  <label className="ml-control">
    <span>
      {label}
      <b className="tabular-nums">{valueText}</b>
    </span>
    <input type="range" min={min} max={max} step={step} value={value} onChange={e => onChange(Number(e.target.value))} />
    <small className="tabular-nums">{min} – {max}</small>
  </label>
);

export const GhanaAlgebraGraphsLab: React.FC<{ mode: GhanaMathLabMode }> = ({ mode }) => {
  // Equation balance
  const [coeffA, setCoeffA] = useState(2);
  const [constB, setConstB] = useState(4);
  const [rhs, setRhs] = useState(14);

  // Algebra tiles
  const [p, setP] = useState(2);
  const [q, setQ] = useState(3);

  // Sequences
  const [seqKind, setSeqKind] = useState<'ap' | 'gp'>('ap');
  const [firstTerm, setFirstTerm] = useState(3);
  const [stepVal, setStepVal] = useState(4);

  // Linear systems
  const [m1, setM1] = useState(1);
  const [c1, setC1] = useState(1);
  const [m2, setM2] = useState(-1);
  const [c2, setC2] = useState(5);

  // Quadratic
  const [qa, setQa] = useState(1);
  const [qb, setQb] = useState(-2);
  const [qc, setQc] = useState(-3);

  // Logic
  const [propP, setPropP] = useState(true);
  const [propQ, setPropQ] = useState(false);

  if (mode === 'equation-balance') {
    const xSol = (rhs - constB) / coeffA;
    return (
      <div className="ml-grid">
        <div className="ml-stage">
          <div className="ml-balance">
            <div>
              <span>{coeffA}x {constB >= 0 ? `+ ${constB}` : `− ${Math.abs(constB)}`}</span>
              <b>=</b>
              <span>{rhs}</span>
            </div>
            <div className="ml-eq-result tabular-nums">
              {coeffA}x = {rhs - constB} → x = {Number.isInteger(xSol) ? xSol : xSol.toFixed(2)}
            </div>
          </div>
          <div className="ml-result" aria-live="polite">
            <small>Balance check</small>
            <strong className="tabular-nums">
              {coeffA}({Number.isInteger(xSol) ? xSol : xSol.toFixed(2)}) {constB >= 0 ? `+ ${constB}` : `− ${Math.abs(constB)}`} = {rhs} ✓
            </strong>
          </div>
        </div>
        <div className="ml-controls">
          <Control label="Coefficient a" valueText={String(coeffA)} value={coeffA} min={1} max={6} onChange={setCoeffA} />
          <Control label="Constant b" valueText={String(constB)} value={constB} min={-8} max={12} onChange={setConstB} />
          <Control label="Right-hand side" valueText={String(rhs)} value={rhs} min={-6} max={24} onChange={setRhs} />
        </div>
      </div>
    );
  }

  if (mode === 'algebra-tiles') {
    const midSum = p + q;
    const prod = p * q;
    return (
      <div className="ml-grid">
        <div className="ml-stage">
          <div className="ml-distribute">
            <div>(x + {p})(x + {q})</div>
            <div className="ml-area">
              <span style={{ width: '48%' }}>x² + {q}x</span>
              <span style={{ width: '52%' }}>{p}x + {prod}</span>
            </div>
          </div>
          <div className="ml-result" aria-live="polite">
            <small>Expanded & collected form</small>
            <strong className="tabular-nums">
              x² + {midSum}x + {prod}
            </strong>
          </div>
        </div>
        <div className="ml-controls">
          <Control label="Factor constant p" valueText={String(p)} value={p} min={1} max={9} onChange={setP} />
          <Control label="Factor constant q" valueText={String(q)} value={q} min={1} max={9} onChange={setQ} />
        </div>
      </div>
    );
  }

  if (mode === 'sequences') {
    const r = Math.min(3, Math.max(2, stepVal));
    const terms = Array.from({ length: 6 }, (_, i) => {
      const n = i + 1;
      return seqKind === 'ap' ? firstTerm + (n - 1) * stepVal : firstTerm * Math.pow(r, n - 1);
    });
    const maxV = Math.max(...terms, 10);
    return (
      <div className="ml-grid">
        <div className="ml-stage">
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <button type="button" className={seqKind === 'ap' ? 'btn cyan sm' : 'btn ghost sm'} onClick={() => setSeqKind('ap')}>Arithmetic (AP)</button>
            <button type="button" className={seqKind === 'gp' ? 'btn cyan sm' : 'btn ghost sm'} onClick={() => setSeqKind('gp')}>Geometric (GP)</button>
          </div>
          <svg viewBox="0 0 400 165" role="img" aria-label="Sequence term bars">
            <line x1="24" y1="138" x2="380" y2="138" stroke="var(--muted)" strokeWidth="2" />
            {terms.map((val, idx) => {
              const h = Math.max(10, (val / maxV) * 108);
              const x = 36 + idx * 56;
              return (
                <g key={idx}>
                  <rect x={x} y={138 - h} width="38" height={h} rx="5" fill={idx % 2 === 0 ? 'var(--data)' : 'var(--gold)'} />
                  <text x={x + 19} y={132 - h} textAnchor="middle" fill="var(--text)" fontSize="11" fontWeight="700">{val}</text>
                  <text x={x + 19} y="156" textAnchor="middle" fill="var(--muted)" fontSize="11">U{idx + 1}</text>
                </g>
              );
            })}
          </svg>
          <div className="ml-result" aria-live="polite">
            <small>{seqKind === 'ap' ? `Formula: Uₙ = ${firstTerm} + (n−1)(${stepVal})` : `Formula: Uₙ = ${firstTerm} × ${r}^(n−1)`}</small>
            <strong className="tabular-nums">6th term U₆ = {terms[5]}</strong>
          </div>
        </div>
        <div className="ml-controls">
          <Control label="First term a" valueText={String(firstTerm)} value={firstTerm} min={1} max={10} onChange={setFirstTerm} />
          {seqKind === 'ap' ? (
            <Control label="Common difference d" valueText={String(stepVal)} value={stepVal} min={1} max={10} onChange={setStepVal} />
          ) : (
            <Control label="Common ratio r" valueText={String(r)} value={r} min={2} max={3} onChange={setStepVal} />
          )}
        </div>
      </div>
    );
  }

  if (mode === 'linear-systems') {
    const toSvg = (x: number, y: number): [number, number] => [190 + x * 24, 92 - y * 12];
    const p1a = toSvg(-7, m1 * -7 + c1);
    const p1b = toSvg(7, m1 * 7 + c1);
    const p2a = toSvg(-7, m2 * -7 + c2);
    const p2b = toSvg(7, m2 * 7 + c2);
    const parallel = m1 === m2;
    const ix = parallel ? null : (c2 - c1) / (m1 - m2);
    const iy = ix === null ? null : m1 * ix + c1;
    const isPt = ix !== null && iy !== null ? toSvg(ix, iy) : null;
    return (
      <div className="ml-grid">
        <div className="ml-stage">
          <svg viewBox="0 0 380 185" role="img" aria-label="Simultaneous linear equations graph">
            <line x1="20" y1="92" x2="360" y2="92" stroke="var(--muted)" strokeWidth="1.5" />
            <line x1="190" y1="12" x2="190" y2="174" stroke="var(--muted)" strokeWidth="1.5" />
            <line x1={p1a[0]} y1={p1a[1]} x2={p1b[0]} y2={p1b[1]} stroke="var(--data)" strokeWidth="3.5" />
            <line x1={p2a[0]} y1={p2a[1]} x2={p2b[0]} y2={p2b[1]} stroke="var(--ember)" strokeWidth="3.5" />
            {isPt && isPt[0] >= 10 && isPt[0] <= 370 && isPt[1] >= 6 && isPt[1] <= 178 && (
              <circle cx={isPt[0]} cy={isPt[1]} r="6.5" fill="var(--gold)" stroke="var(--text)" strokeWidth="2" />
            )}
          </svg>
          <div className="ml-result" aria-live="polite">
            <small>y = {m1}x {c1 >= 0 ? `+ ${c1}` : `− ${Math.abs(c1)}`} &nbsp;|&nbsp; y = {m2}x {c2 >= 0 ? `+ ${c2}` : `− ${Math.abs(c2)}`}</small>
            <strong className="tabular-nums">
              {parallel
                ? c1 === c2
                  ? 'Coincident lines (∞ solutions)'
                  : 'Parallel lines (No solution)'
                : `Intersection: (${ix!.toFixed(2)}, ${iy!.toFixed(2)})`}
            </strong>
          </div>
        </div>
        <div className="ml-controls">
          <Control label="Line 1 slope m₁" valueText={String(m1)} value={m1} min={-3} max={3} onChange={setM1} />
          <Control label="Line 1 intercept c₁" valueText={String(c1)} value={c1} min={-5} max={6} onChange={setC1} />
          <Control label="Line 2 slope m₂" valueText={String(m2)} value={m2} min={-3} max={3} onChange={setM2} />
          <Control label="Line 2 intercept c₂" valueText={String(c2)} value={c2} min={-5} max={6} onChange={setC2} />
        </div>
      </div>
    );
  }

  if (mode === 'quadratic-graph') {
    const a = qa === 0 ? 1 : qa;
    const disc = qb * qb - 4 * a * qc;
    const vx = -qb / (2 * a);
    const vy = a * vx * vx + qb * vx + qc;
    const toSvg = (x: number, y: number): [number, number] => [190 + x * 24, 96 - y * 8];
    const pts = Array.from({ length: 49 }, (_, i) => {
      const x = -6 + i * 0.25;
      const y = a * x * x + qb * x + qc;
      const [sx, sy] = toSvg(x, y);
      return `${sx.toFixed(1)},${Math.max(4, Math.min(182, sy)).toFixed(1)}`;
    }).join(' ');
    const [vsx, vsy] = toSvg(vx, vy);
    const roots =
      disc > 0
        ? [(-qb - Math.sqrt(disc)) / (2 * a), (-qb + Math.sqrt(disc)) / (2 * a)]
        : disc === 0
        ? [vx]
        : [];
    return (
      <div className="ml-grid">
        <div className="ml-stage">
          <svg viewBox="0 0 380 185" role="img" aria-label={`Parabola y = ${a}x^2 + ${qb}x + ${qc}`}>
            <line x1="20" y1="96" x2="360" y2="96" stroke="var(--muted)" strokeWidth="1.5" />
            <line x1="190" y1="10" x2="190" y2="176" stroke="var(--muted)" strokeWidth="1.5" />
            <line x1={vsx} y1="10" x2={vsx} y2="176" stroke="var(--gold)" strokeWidth="1.5" strokeDasharray="5 4" />
            <polyline points={pts} fill="none" stroke="var(--data)" strokeWidth="3.5" />
            <circle cx={vsx} cy={Math.max(8, Math.min(176, vsy))} r="6" fill="var(--ember)" />
            {roots.map((r, idx) => {
              const [rx, ry] = toSvg(r, 0);
              return <circle key={idx} cx={rx} cy={ry} r="5.5" fill="var(--good)" />;
            })}
          </svg>
          <div className="ml-result" aria-live="polite">
            <small>Vertex ({vx.toFixed(2)}, {vy.toFixed(2)}) · Δ = b² − 4ac = {disc}</small>
            <strong className="tabular-nums">
              {roots.length === 2
                ? `Roots: x = ${roots[0].toFixed(2)}, ${roots[1].toFixed(2)}`
                : roots.length === 1
                ? `Double root: x = ${roots[0].toFixed(2)}`
                : 'No real roots (Δ < 0)'}
            </strong>
          </div>
        </div>
        <div className="ml-controls">
          <Control label="Coefficient a" valueText={String(a)} value={a} min={-2} max={3} onChange={v => setQa(v === 0 ? 1 : v)} />
          <Control label="Coefficient b" valueText={String(qb)} value={qb} min={-6} max={6} onChange={setQb} />
          <Control label="Constant c" valueText={String(qc)} value={qc} min={-6} max={6} onChange={setQc} />
        </div>
      </div>
    );
  }

  // Logic truth evaluator
  const andVal = propP && propQ;
  const orVal = propP || propQ;
  const impVal = !propP || propQ;
  const iffVal = propP === propQ;
  return (
    <div className="ml-grid">
      <div className="ml-stage">
        <div className="ml-logic" aria-live="polite">
          <span>P ∧ Q = <b>{andVal ? 'TRUE' : 'FALSE'}</b></span>
          <span>P ∨ Q = <b>{orVal ? 'TRUE' : 'FALSE'}</b></span>
          <strong>P ⇒ Q = {impVal ? 'TRUE' : 'FALSE'}</strong>
          <span>P ⇔ Q = <b>{iffVal ? 'TRUE' : 'FALSE'}</b></span>
        </div>
        <div className="ml-result">
          <small>Active input state</small>
          <strong className="tabular-nums">
            P = {propP ? 'True (T)' : 'False (F)'} · Q = {propQ ? 'True (T)' : 'False (F)'}
          </strong>
        </div>
      </div>
      <div className="ml-controls">
        <button type="button" className={propP ? 'btn cyan sm' : 'btn ghost sm'} onClick={() => setPropP(v => !v)}>
          Toggle P (Currently {propP ? 'TRUE' : 'FALSE'})
        </button>
        <button type="button" className={propQ ? 'btn cyan sm' : 'btn ghost sm'} onClick={() => setPropQ(v => !v)}>
          Toggle Q (Currently {propQ ? 'TRUE' : 'FALSE'})
        </button>
      </div>
    </div>
  );
};

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

const gcd = (a: number, b: number): number => (b === 0 ? Math.abs(a) : gcd(b, a % b));

function simplifySurd(n: number): { outside: number; inside: number } {
  let out = 1;
  let rem = n;
  for (let k = Math.floor(Math.sqrt(rem)); k >= 2; k--) {
    const sq = k * k;
    if (rem % sq === 0) {
      out *= k;
      rem = rem / sq;
      break;
    }
  }
  return { outside: out, inside: rem };
}

export const GhanaNumberFinanceLab: React.FC<{ mode: GhanaMathLabMode }> = ({ mode }) => {
  // Number line
  const [startNum, setStartNum] = useState(-3);
  const [moveBy, setMoveBy] = useState(5);

  // Fractions & Percentages
  const [num, setNum] = useState(3);
  const [den, setDen] = useState(4);

  // Ratio share
  const [ratioA, setRatioA] = useState(2);
  const [ratioB, setRatioB] = useState(3);
  const [totalCedis, setTotalCedis] = useState(120);

  // Sets & Venn
  const [setA, setSetA] = useState(24);
  const [setB, setSetB] = useState(18);
  const [bothAB, setBothAB] = useState(8);
  const [outside, setOutside] = useState(6);
  const [vennHighlight, setVennHighlight] = useState<'intersection' | 'union' | 'aOnly' | 'complement'>('intersection');

  // Indices & Standard Form
  const [base, setBase] = useState(2);
  const [expM, setExpM] = useState(3);
  const [expN, setExpN] = useState(2);

  // Surds & Modulo
  const [subTab, setSubTab] = useState<'modulo' | 'surd'>('modulo');
  const [modBase, setModBase] = useState(7);
  const [modValA, setModValA] = useState(5);
  const [modValB, setModValB] = useState(4);
  const [modOp, setModOp] = useState<'+' | '×'>('+');
  const [radicand, setRadicand] = useState(72);

  // Finance
  const [principal, setPrincipal] = useState(1000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(5);

  // Variation
  const [varKind, setVarKind] = useState<'direct' | 'inverse'>('direct');
  const [varK, setVarK] = useState(12);
  const [varX, setVarX] = useState(3);

  if (mode === 'number-line') {
    const endNum = startNum + moveBy;
    const toX = (v: number) => 40 + ((Math.max(-10, Math.min(10, v)) + 10) / 20) * 520;
    const x1 = toX(startNum);
    const x2 = toX(endNum);
    return (
      <div className="ml-grid">
        <div className="ml-stage">
          <svg viewBox="0 0 600 175" role="img" aria-label={`Number line operation ${startNum} + ${moveBy} = ${endNum}`}>
            <line x1="24" y1="112" x2="576" y2="112" stroke="var(--muted)" strokeWidth="3" />
            {Array.from({ length: 21 }, (_, idx) => {
              const v = idx - 10;
              const tx = toX(v);
              return (
                <g key={v}>
                  <line x1={tx} y1="104" x2={tx} y2="120" stroke={v === 0 ? 'var(--gold)' : 'var(--muted)'} strokeWidth={v === 0 ? 3 : 1.5} />
                  {v % 2 === 0 && <text x={tx} y="142" textAnchor="middle" fill="var(--text)" fontSize="13">{v}</text>}
                </g>
              );
            })}
            <path
              d={`M ${x1} 102 Q ${(x1 + x2) / 2} 36 ${x2} 102`}
              fill="none"
              stroke="var(--gold)"
              strokeWidth="4"
            />
            <circle cx={x1} cy="112" r="7" fill="var(--data)" />
            <circle cx={x2} cy="112" r="9" fill="var(--good)" />
            <text x={(x1 + x2) / 2} y="54" textAnchor="middle" fill="var(--gold)" fontSize="16" fontWeight="700">
              {moveBy >= 0 ? `+${moveBy}` : moveBy}
            </text>
          </svg>
          <div className="ml-result" aria-live="polite">
            <small>Operation on ℝ</small>
            <strong className="tabular-nums">
              {startNum} {moveBy >= 0 ? `+ ${moveBy}` : `− ${Math.abs(moveBy)}`} = {endNum}
            </strong>
          </div>
        </div>
        <div className="ml-controls">
          <Control label="Start position" valueText={String(startNum)} value={startNum} min={-8} max={8} onChange={setStartNum} />
          <Control label="Step change" valueText={moveBy >= 0 ? `+${moveBy}` : String(moveBy)} value={moveBy} min={-8} max={8} onChange={setMoveBy} />
          <button type="button" className="btn ghost sm" onClick={() => { setStartNum(-3); setMoveBy(5); }}>Reset example</button>
        </div>
      </div>
    );
  }

  if (mode === 'fractions-pct') {
    const safeNum = Math.min(num, den);
    const pct = (safeNum / den) * 100;
    const dec = (safeNum / den).toFixed(3).replace(/\.?0+$/, '');
    const g = gcd(safeNum, den);
    return (
      <div className="ml-grid">
        <div className="ml-stage">
          <div className="ml-fraction">
            <div className="ml-fraction-bar" aria-label={`${safeNum} out of ${den} equal parts shaded`}>
              {Array.from({ length: den }, (_, i) => (
                <i key={i} className={i < safeNum ? 'filled' : ''} />
              ))}
            </div>
            <div className="ml-percent" style={{ width: 'min(100%, 340px)' }}>
              <div style={{ width: `${pct.toFixed(1)}%` }} />
              <b className="tabular-nums">{pct.toFixed(1)}%</b>
            </div>
          </div>
          <div className="ml-result" aria-live="polite">
            <small>Exact equivalences</small>
            <strong className="tabular-nums">
              {safeNum}/{den} {g > 1 ? `= ${safeNum / g}/${den / g}` : ''} = {dec} = {pct.toFixed(1)}%
            </strong>
          </div>
        </div>
        <div className="ml-controls">
          <Control label="Numerator (parts taken)" valueText={String(safeNum)} value={safeNum} min={0} max={den} onChange={setNum} />
          <Control label="Denominator (equal parts)" valueText={String(den)} value={den} min={2} max={12} onChange={v => { setDen(v); if (num > v) setNum(v); }} />
        </div>
      </div>
    );
  }

  if (mode === 'ratio-share') {
    const totalParts = ratioA + ratioB;
    const unitShare = totalCedis / totalParts;
    const shareA = unitShare * ratioA;
    const shareB = unitShare * ratioB;
    return (
      <div className="ml-grid">
        <div className="ml-stage">
          <div className="ml-bars">
            <div className="ml-bar-row">
              <span>Share A ({ratioA} parts)</span>
              <i style={{ width: `${(ratioA / totalParts) * 100}%`, background: 'var(--data)' }} />
            </div>
            <div className="ml-bar-row">
              <span>Share B ({ratioB} parts)</span>
              <i style={{ width: `${(ratioB / totalParts) * 100}%`, background: 'var(--gold)' }} />
            </div>
          </div>
          <div className="ml-result" aria-live="polite">
            <small>1 part = GH₵ {unitShare.toFixed(2)} ({totalParts} parts total)</small>
            <strong className="tabular-nums">
              GH₵ {shareA.toFixed(2)} : GH₵ {shareB.toFixed(2)}
            </strong>
          </div>
        </div>
        <div className="ml-controls">
          <Control label="Part A" valueText={String(ratioA)} value={ratioA} min={1} max={8} onChange={setRatioA} />
          <Control label="Part B" valueText={String(ratioB)} value={ratioB} min={1} max={8} onChange={setRatioB} />
          <Control label="Total amount" valueText={`GH₵ ${totalCedis}`} value={totalCedis} min={20} max={500} step={10} onChange={setTotalCedis} />
        </div>
      </div>
    );
  }

  if (mode === 'sets-venn') {
    const safeBoth = Math.min(bothAB, setA, setB);
    const onlyA = setA - safeBoth;
    const onlyB = setB - safeBoth;
    const union = onlyA + safeBoth + onlyB;
    const universe = union + outside;
    const focusValue =
      vennHighlight === 'intersection'
        ? `n(A ∩ B) = ${safeBoth}`
        : vennHighlight === 'union'
        ? `n(A ∪ B) = ${onlyA} + ${safeBoth} + ${onlyB} = ${union}`
        : vennHighlight === 'aOnly'
        ? `n(A ∩ B') = ${setA} − ${safeBoth} = ${onlyA}`
        : `n((A ∪ B)') = ${outside}`;
    return (
      <div className="ml-grid">
        <div className="ml-stage">
          <svg viewBox="0 0 420 185" role="img" aria-label="Interactive two-set Venn diagram">
            <rect
              x="16"
              y="12"
              width="388"
              height="160"
              rx="14"
              fill={vennHighlight === 'complement' ? 'var(--gold)' : 'var(--panel)'}
              fillOpacity={vennHighlight === 'complement' ? 0.16 : 1}
              stroke="var(--line)"
              strokeWidth="2.5"
            />
            <text x="30" y="34" fill="var(--muted)" fontSize="14" fontWeight="700">n(U) = {universe}</text>
            <circle
              cx="165"
              cy="94"
              r="58"
              fill="var(--data)"
              fillOpacity={vennHighlight === 'union' || vennHighlight === 'aOnly' ? 0.28 : 0.12}
              stroke="var(--data)"
              strokeWidth="3"
            />
            <circle
              cx="255"
              cy="94"
              r="58"
              fill="var(--gold)"
              fillOpacity={vennHighlight === 'union' ? 0.28 : 0.14}
              stroke="var(--gold)"
              strokeWidth="3"
            />
            <ellipse
              cx="210"
              cy="94"
              rx="15"
              ry="38"
              fill="var(--good)"
              fillOpacity={vennHighlight === 'intersection' ? 0.36 : 0}
            />
            <text x="135" y="99" textAnchor="middle" fill="var(--data)" fontSize="20" fontWeight="800">{onlyA}</text>
            <text x="210" y="99" textAnchor="middle" fill="var(--good)" fontSize="20" fontWeight="800">{safeBoth}</text>
            <text x="285" y="99" textAnchor="middle" fill="var(--gold)" fontSize="20" fontWeight="800">{onlyB}</text>
            <text x="382" y="156" textAnchor="end" fill="var(--muted)" fontSize="14" fontWeight="700">Outside: {outside}</text>
          </svg>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {(
              [
                ['intersection', 'A ∩ B'],
                ['union', 'A ∪ B'],
                ['aOnly', 'A only'],
                ['complement', "(A ∪ B)'"]
              ] as const
            ).map(([id, lbl]) => (
              <button
                key={id}
                type="button"
                className={vennHighlight === id ? 'btn cyan sm' : 'btn ghost sm'}
                onClick={() => setVennHighlight(id)}
              >
                {lbl}
              </button>
            ))}
          </div>
          <div className="ml-result" aria-live="polite">
            <small>Region readout</small>
            <strong className="tabular-nums">{focusValue}</strong>
          </div>
        </div>
        <div className="ml-controls">
          <Control label="Set A size n(A)" valueText={String(setA)} value={setA} min={5} max={40} onChange={v => { setSetA(v); if (bothAB > v) setBothAB(v); }} />
          <Control label="Set B size n(B)" valueText={String(setB)} value={setB} min={5} max={40} onChange={v => { setSetB(v); if (bothAB > v) setBothAB(v); }} />
          <Control label="Overlap n(A ∩ B)" valueText={String(safeBoth)} value={safeBoth} min={0} max={Math.min(setA, setB)} onChange={setBothAB} />
          <Control label="Neither (outside)" valueText={String(outside)} value={outside} min={0} max={20} onChange={setOutside} />
        </div>
      </div>
    );
  }

  if (mode === 'indices-std') {
    const prodExp = expM + expN;
    const quotExp = expM - expN;
    const sciVal = base * Math.pow(10, expM);
    return (
      <div className="ml-grid">
        <div className="ml-stage">
          <div className="ml-factor-grid">
            <div>
              <span>Product Law</span>
              <b className="tabular-nums">{base}<sup>{expM}</sup> × {base}<sup>{expN}</sup> = {base}<sup>{prodExp}</sup></b>
            </div>
            <div>
              <span>Quotient Law</span>
              <b className="tabular-nums">{base}<sup>{expM}</sup> ÷ {base}<sup>{expN}</sup> = {base}<sup>{quotExp}</sup></b>
            </div>
          </div>
          <div className="ml-result" aria-live="polite">
            <small>Standard Form Link (A × 10ᵐ)</small>
            <strong className="tabular-nums">
              {base}.0 × 10^{expM} = {sciVal.toLocaleString('en-US')}
            </strong>
          </div>
        </div>
        <div className="ml-controls">
          <Control label="Base a" valueText={String(base)} value={base} min={2} max={9} onChange={setBase} />
          <Control label="First exponent m" valueText={String(expM)} value={expM} min={1} max={6} onChange={setExpM} />
          <Control label="Second exponent n" valueText={String(expN)} value={expN} min={0} max={5} onChange={setExpN} />
        </div>
      </div>
    );
  }

  if (mode === 'surds-modulo') {
    const raw = modOp === '+' ? modValA + modValB : modValA * modValB;
    const modAns = ((raw % modBase) + modBase) % modBase;
    const { outside: surdOut, inside: surdIn } = simplifySurd(radicand);
    return (
      <div className="ml-grid">
        <div className="ml-stage">
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <button type="button" className={subTab === 'modulo' ? 'btn cyan sm' : 'btn ghost sm'} onClick={() => setSubTab('modulo')}>Modulo Clock</button>
            <button type="button" className={subTab === 'surd' ? 'btn cyan sm' : 'btn ghost sm'} onClick={() => setSubTab('surd')}>Surd Simplifier</button>
          </div>
          {subTab === 'modulo' ? (
            <>
              <svg viewBox="0 0 300 185" role="img" aria-label={`Modulo ${modBase} clock showing remainder ${modAns}`}>
                <circle cx="150" cy="94" r="72" fill="var(--panel)" stroke="var(--gold)" strokeWidth="3" />
                {Array.from({ length: modBase }, (_, k) => {
                  const angle = -Math.PI / 2 + (k * 2 * Math.PI) / modBase;
                  const tx = 150 + Math.cos(angle) * 52;
                  const ty = 99 + Math.sin(angle) * 52;
                  return (
                    <text
                      key={k}
                      x={tx}
                      y={ty}
                      textAnchor="middle"
                      fill={k === modAns ? 'var(--good)' : 'var(--text)'}
                      fontSize={k === modAns ? '18' : '14'}
                      fontWeight="800"
                    >
                      {k}
                    </text>
                  );
                })}
                {(() => {
                  const angle = -Math.PI / 2 + (modAns * 2 * Math.PI) / modBase;
                  return (
                    <line
                      x1="150"
                      y1="94"
                      x2={150 + Math.cos(angle) * 38}
                      y2={94 + Math.sin(angle) * 38}
                      stroke="var(--ember)"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  );
                })()}
                <circle cx="150" cy="94" r="5" fill="var(--gold)" />
              </svg>
              <div className="ml-result" aria-live="polite">
                <small>Remainder mod {modBase}</small>
                <strong className="tabular-nums">
                  {modValA} {modOp} {modValB} = {raw} ≡ {modAns} (mod {modBase})
                </strong>
              </div>
            </>
          ) : (
            <>
              <div className="ml-power" aria-live="polite">
                <span>
                  √{radicand} ={' '}
                  <b style={{ color: 'var(--gold)' }}>
                    {surdIn === 1 ? surdOut : surdOut === 1 ? `√${surdIn}` : `${surdOut}√${surdIn}`}
                  </b>
                </span>
              </div>
              <div className="ml-result">
                <small>Perfect-square factorisation</small>
                <strong className="tabular-nums">
                  √({surdOut * surdOut} × {surdIn}) = {surdOut} × {surdIn === 1 ? '1' : `√${surdIn}`} ≈ {Math.sqrt(radicand).toFixed(3)}
                </strong>
              </div>
            </>
          )}
        </div>
        <div className="ml-controls">
          {subTab === 'modulo' ? (
            <>
              <div style={{ display: 'flex', gap: 6 }}>
                <button type="button" className={modOp === '+' ? 'btn cyan sm' : 'btn ghost sm'} onClick={() => setModOp('+')}>Add (⊕)</button>
                <button type="button" className={modOp === '×' ? 'btn cyan sm' : 'btn ghost sm'} onClick={() => setModOp('×')}>Multiply (⊗)</button>
              </div>
              <Control label="Modulus m" valueText={String(modBase)} value={modBase} min={3} max={12} onChange={setModBase} />
              <Control label="First number a" valueText={String(modValA)} value={modValA} min={0} max={modBase - 1} onChange={setModValA} />
              <Control label="Second number b" valueText={String(modValB)} value={modValB} min={0} max={modBase - 1} onChange={setModValB} />
            </>
          ) : (
            <Control label="Radicand N" valueText={String(radicand)} value={radicand} min={8} max={144} onChange={setRadicand} />
          )}
        </div>
      </div>
    );
  }

  if (mode === 'finance-interest') {
    const simpleTotal = principal * (1 + (rate / 100) * years);
    const compoundTotal = principal * Math.pow(1 + rate / 100, years);
    const maxTotal = Math.max(compoundTotal, simpleTotal, principal * 1.2);
    const bars = Array.from({ length: years + 1 }, (_, t) => {
      const s = principal * (1 + (rate / 100) * t);
      const c = principal * Math.pow(1 + rate / 100, t);
      return { t, s, c };
    });
    return (
      <div className="ml-grid">
        <div className="ml-stage">
          <svg viewBox="0 0 420 175" role="img" aria-label="Simple vs compound interest growth chart">
            <line x1="36" y1="146" x2="396" y2="146" stroke="var(--muted)" strokeWidth="2" />
            {bars.map(({ t, s, c }) => {
              const stepW = 340 / (years + 1);
              const x = 44 + t * stepW;
              const hs = (s / maxTotal) * 116;
              const hc = (c / maxTotal) * 116;
              return (
                <g key={t}>
                  <rect x={x} y={146 - hs} width={Math.max(8, stepW * 0.34)} height={hs} rx="3" fill="var(--data)" />
                  <rect x={x + Math.max(9, stepW * 0.36)} y={146 - hc} width={Math.max(8, stepW * 0.34)} height={hc} rx="3" fill="var(--gold)" />
                  <text x={x + stepW * 0.35} y="164" textAnchor="middle" fill="var(--muted)" fontSize="11">Y{t}</text>
                </g>
              );
            })}
            <text x="48" y="20" fill="var(--data)" fontSize="12" fontWeight="700">Simple Interest</text>
            <text x="172" y="20" fill="var(--gold)" fontSize="12" fontWeight="700">Compound Interest</text>
          </svg>
          <div className="ml-result" aria-live="polite">
            <small>After {years} years at {rate}% p.a.</small>
            <strong className="tabular-nums">
              Simple: GH₵ {simpleTotal.toFixed(0)} · Compound: GH₵ {compoundTotal.toFixed(0)}
            </strong>
          </div>
        </div>
        <div className="ml-controls">
          <Control label="Principal P" valueText={`GH₵ ${principal}`} value={principal} min={200} max={5000} step={100} onChange={setPrincipal} />
          <Control label="Rate r (% p.a.)" valueText={`${rate}%`} value={rate} min={2} max={25} onChange={setRate} />
          <Control label="Time t (years)" valueText={`${years} yr`} value={years} min={1} max={10} onChange={setYears} />
        </div>
      </div>
    );
  }

  // Variation
  const yVal = varKind === 'direct' ? varK * varX : varK / varX;
  const pts = Array.from({ length: 16 }, (_, i) => {
    const xv = 1 + i * 0.6;
    const yv = varKind === 'direct' ? varK * xv : varK / xv;
    const sx = 40 + (xv / 10) * 330;
    const sy = 152 - Math.min(130, (yv / (varKind === 'direct' ? 120 : 24)) * 124);
    return `${sx.toFixed(1)},${sy.toFixed(1)}`;
  }).join(' ');
  const curSx = 40 + (varX / 10) * 330;
  const curSy = 152 - Math.min(130, (yVal / (varKind === 'direct' ? 120 : 24)) * 124);

  return (
    <div className="ml-grid">
      <div className="ml-stage">
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <button type="button" className={varKind === 'direct' ? 'btn cyan sm' : 'btn ghost sm'} onClick={() => setVarKind('direct')}>Direct: y = kx</button>
          <button type="button" className={varKind === 'inverse' ? 'btn cyan sm' : 'btn ghost sm'} onClick={() => setVarKind('inverse')}>Inverse: y = k/x</button>
        </div>
        <svg viewBox="0 0 400 175" role="img" aria-label={`${varKind} variation curve`}>
          <line x1="40" y1="152" x2="380" y2="152" stroke="var(--muted)" strokeWidth="2" />
          <line x1="40" y1="16" x2="40" y2="152" stroke="var(--muted)" strokeWidth="2" />
          <polyline points={pts} fill="none" stroke={varKind === 'direct' ? 'var(--good)' : 'var(--ember)'} strokeWidth="3.5" />
          <circle cx={curSx} cy={curSy} r="7" fill="var(--gold)" />
        </svg>
        <div className="ml-result" aria-live="polite">
          <small>{varKind === 'direct' ? 'y ∝ x (constant ratio y/x)' : 'y ∝ 1/x (constant product x·y)'}</small>
          <strong className="tabular-nums">
            x = {varX}, k = {varK} ⇒ y = {yVal.toFixed(2).replace(/\.?0+$/, '')}
          </strong>
        </div>
      </div>
      <div className="ml-controls">
        <Control label="Constant k" valueText={String(varK)} value={varK} min={2} max={24} onChange={setVarK} />
        <Control label="Input x" valueText={String(varX)} value={varX} min={1} max={10} onChange={setVarX} />
      </div>
    </div>
  );
};

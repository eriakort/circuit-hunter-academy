import React, { useState } from 'react';
import type { Language } from '../../types';
import { g5Dec, g5Div, g5Txt, type Grade5MathLabMode } from './grade5MathLabConfig';

const Control: React.FC<{
  label: string;
  valueText: string;
  value: number;
  min: number;
  max: number;
  onChange: (n: number) => void;
}> = ({ label, valueText, value, min, max, onChange }) => (
  <label className="ml-control">
    <span>
      {label}
      <b className="tabular-nums">{valueText}</b>
    </span>
    <input type="range" min={min} max={max} value={value} onChange={e => onChange(Number(e.target.value))} />
    <small className="tabular-nums">{min} – {max}</small>
  </label>
);

export const Grade5DataLogicLab: React.FC<{
  mode: Grade5MathLabMode;
  lang: Language;
}> = ({ mode, lang }) => {
  // Problems & direct proportion
  const [packQty, setPackQty] = useState(3);
  const [unitCost, setUnitCost] = useState(4);
  const [targetQty, setTargetQty] = useState(7);

  // Logic & Venn
  const [propP, setPropP] = useState(true);
  const [propQ, setPropQ] = useState(false);

  // Averages
  const [score5, setScore5] = useState(10);

  // Probability spinner
  const [fav, setFav] = useState(3);
  const [tot, setTot] = useState(8);
  const [spins, setSpins] = useState(0);
  const [hits, setHits] = useState(0);

  if (mode === 'problems-proportion') {
    const bundleCost = packQty * unitCost;
    const finalCost = targetQty * unitCost;
    return (
      <div className="ml-grid">
        <div className="ml-stage">
          <div className="ml-factor-grid">
            <div>
              <span>{packQty} {g5Txt(lang, 'items', 'oggetti')}</span>
              <b className="tabular-nums">€ {bundleCost}</b>
            </div>
            <div>
              <span>1 {g5Txt(lang, 'unit', 'unità')}</span>
              <b className="tabular-nums">€ {unitCost}</b>
            </div>
            <div>
              <span>{targetQty} {g5Txt(lang, 'items', 'oggetti')}</span>
              <b className="tabular-nums">€ {finalCost}</b>
            </div>
          </div>
          <div className="ml-result" aria-live="polite">
            <small>{g5Txt(lang, 'Unitary expression', 'Espressione risolutiva')}</small>
            <strong className="tabular-nums">
              ({bundleCost} {g5Div(lang)} {packQty}) × {targetQty} = {unitCost} × {targetQty} = € {finalCost}
            </strong>
          </div>
        </div>
        <div className="ml-controls">
          <Control label={g5Txt(lang, 'Bundle size', 'Oggetti nel pacco')} valueText={String(packQty)} value={packQty} min={2} max={8} onChange={setPackQty} />
          <Control label={g5Txt(lang, 'Unit price (€)', 'Costo unitario (€)')} valueText={`€ ${unitCost}`} value={unitCost} min={1} max={12} onChange={setUnitCost} />
          <Control label={g5Txt(lang, 'Target quantity', 'Quantità richiesta')} valueText={String(targetQty)} value={targetQty} min={1} max={15} onChange={setTargetQty} />
        </div>
      </div>
    );
  }

  if (mode === 'logic-venn') {
    const tLabel = g5Txt(lang, 'TRUE', 'VERO');
    const fLabel = g5Txt(lang, 'FALSE', 'FALSO');
    return (
      <div className="ml-grid">
        <div className="ml-stage">
          <div className="ml-logic" aria-live="polite">
            <span>{g5Txt(lang, 'NOT P', 'NON P')} = <b>{!propP ? tLabel : fLabel}</b></span>
            <span>P {g5Txt(lang, 'AND', 'E')} Q = <b>{propP && propQ ? tLabel : fLabel}</b></span>
            <strong>P {g5Txt(lang, 'OR', 'O')} Q = {propP || propQ ? tLabel : fLabel}</strong>
            <span>P ∈ Venn(A ∩ B) = <b>{propP && propQ ? g5Txt(lang, 'inside overlap', 'nell’intersezione') : g5Txt(lang, 'outside overlap', 'fuori dall’intersezione')}</b></span>
          </div>
          <div className="ml-result">
            <small>{g5Txt(lang, 'Active truth values', 'Valori di verità attivi')}</small>
            <strong className="tabular-nums">P = {propP ? tLabel : fLabel} · Q = {propQ ? tLabel : fLabel}</strong>
          </div>
        </div>
        <div className="ml-controls">
          <button type="button" className={propP ? 'btn cyan sm' : 'btn ghost sm'} onClick={() => setPropP(v => !v)}>
            {g5Txt(lang, 'Toggle P', 'Cambia P')}: {propP ? tLabel : fLabel}
          </button>
          <button type="button" className={propQ ? 'btn cyan sm' : 'btn ghost sm'} onClick={() => setPropQ(v => !v)}>
            {g5Txt(lang, 'Toggle Q', 'Cambia Q')}: {propQ ? tLabel : fLabel}
          </button>
        </div>
      </div>
    );
  }

  if (mode === 'data-averages') {
    const data = [4, 6, 6, 8, score5].sort((a, b) => a - b);
    const mean = data.reduce((s, v) => s + v, 0) / data.length;
    const median = data[2];
    const counts = new Map<number, number>();
    for (const v of data) counts.set(v, (counts.get(v) || 0) + 1);
    const modeVal = [...counts.entries()].sort((a, b) => b[1] - a[1])[0][0];
    const maxV = Math.max(...data, 10);
    const meanY = 128 - (mean / maxV) * 96;

    return (
      <div className="ml-grid">
        <div className="ml-stage">
          <svg viewBox="0 0 360 155" role="img" aria-label={g5Txt(lang, 'Sorted bars with average line', 'Barre ordinate con linea della media')}>
            <line x1="20" y1="128" x2="340" y2="128" stroke="var(--muted)" strokeWidth="2" />
            {data.map((val, idx) => {
              const h = Math.max(8, (val / maxV) * 96);
              const x = 36 + idx * 60;
              return (
                <g key={idx}>
                  <rect x={x} y={128 - h} width="36" height={h} rx="5" fill={idx === 2 ? 'var(--good)' : 'var(--data)'} />
                  <text x={x + 18} y={122 - h} textAnchor="middle" fill="var(--text)" fontSize="11" fontWeight="700">{val}</text>
                </g>
              );
            })}
            <line x1="20" y1={meanY} x2="340" y2={meanY} stroke="var(--gold)" strokeWidth="2" strokeDasharray="5 4" />
          </svg>
          <div className="ml-result" aria-live="polite">
            <small>{g5Txt(lang, 'Sorted', 'Ordinati')}: {data.join(', ')}</small>
            <strong className="tabular-nums">
              {g5Txt(lang, 'Mode', 'Moda')} {modeVal} · {g5Txt(lang, 'Median', 'Mediana')} {median} · {g5Txt(lang, 'Mean', 'Media')} {g5Dec(lang, mean, 1)}
            </strong>
          </div>
        </div>
        <div className="ml-controls">
          <Control label={g5Txt(lang, '5th value', '5° valore')} valueText={String(score5)} value={score5} min={2} max={24} onChange={setScore5} />
        </div>
      </div>
    );
  }

  // probability-spinner
  const clampedFav = Math.min(fav, tot);
  const theory = (clampedFav / tot) * 100;
  const runSpins = (count: number) => {
    let h = 0;
    for (let i = 0; i < count; i++) {
      if (Math.random() < clampedFav / tot) h += 1;
    }
    setSpins(s => s + count);
    setHits(x => x + h);
  };

  return (
    <div className="ml-grid">
      <div className="ml-stage">
        <div className="ml-factor-grid">
          <div>
            <span>{g5Txt(lang, 'Fraction', 'Frazione')}</span>
            <b className="tabular-nums">{clampedFav}/{tot}</b>
          </div>
          <div>
            <span>{g5Txt(lang, 'Theoretical', 'Teorica')}</span>
            <b className="tabular-nums">{g5Dec(lang, theory, 1)}%</b>
          </div>
          <div>
            <span>{g5Txt(lang, 'Trials', 'Prove')} ({hits}/{spins})</span>
            <b className="tabular-nums">{spins > 0 ? `${g5Dec(lang, (hits / spins) * 100, 1)}%` : '—'}</b>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <button type="button" className="btn cyan sm" onClick={() => runSpins(1)}>{g5Txt(lang, 'Spin 1', 'Gira 1')}</button>
          <button type="button" className="btn sm" onClick={() => runSpins(40)}>{g5Txt(lang, 'Spin 40', 'Gira 40')}</button>
          <button type="button" className="btn ghost sm" onClick={() => { setSpins(0); setHits(0); }}>{g5Txt(lang, 'Reset', 'Azzera')}</button>
        </div>
        <div className="ml-result" aria-live="polite">
          <small>{g5Txt(lang, 'Probability ratio', 'Rapporto favorevoli / possibili')}</small>
          <strong className="tabular-nums">P = {clampedFav} {g5Div(lang)} {tot} = {g5Dec(lang, clampedFav / tot, 2)} ({g5Dec(lang, theory, 1)}%)</strong>
        </div>
      </div>
      <div className="ml-controls">
        <Control label={g5Txt(lang, 'Favourable sectors', 'Settori favorevoli')} valueText={String(clampedFav)} value={clampedFav} min={1} max={12} onChange={v => { setFav(Math.min(v, tot)); setSpins(0); setHits(0); }} />
        <Control label={g5Txt(lang, 'Total sectors', 'Settori totali')} valueText={String(tot)} value={tot} min={2} max={12} onChange={v => { setTot(v); setFav(prev => Math.min(prev, v)); setSpins(0); setHits(0); }} />
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import type { GhanaMathLabMode } from './ghanaMathLabConfig';

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

export const GhanaDataProbabilityLab: React.FC<{ mode: GhanaMathLabMode }> = ({ mode }) => {
  // Data averages & displays
  const [scores, setScores] = useState([12, 18, 18, 22, 26]);
  const [adjustable, setAdjustable] = useState(26);

  // Probability urn & tree
  const [redCount, setRedCount] = useState(3);
  const [goldCount, setGoldCount] = useState(2);
  const [withReplacement, setWithReplacement] = useState(true);
  const [trials, setTrials] = useState(0);
  const [bothRedHits, setBothRedHits] = useState(0);

  if (mode === 'data-averages') {
    const dataset = [...scores.slice(0, 4), adjustable].sort((a, b) => a - b);
    const n = dataset.length;
    const mean = dataset.reduce((acc, v) => acc + v, 0) / n;
    const median = dataset[Math.floor(n / 2)];
    const range = dataset[n - 1] - dataset[0];
    const variance = dataset.reduce((acc, v) => acc + Math.pow(v - mean, 2), 0) / n;
    const sd = Math.sqrt(variance);
    const maxBar = Math.max(...dataset, 10);

    return (
      <div className="ml-grid">
        <div className="ml-stage">
          <svg viewBox="0 0 380 165" role="img" aria-label="Sorted dataset bar chart with mean line">
            <line x1="24" y1="138" x2="360" y2="138" stroke="var(--muted)" strokeWidth="2" />
            {dataset.map((val, idx) => {
              const h = (val / maxBar) * 105;
              const x = 40 + idx * 62;
              return (
                <g key={idx}>
                  <rect x={x} y={138 - h} width="38" height={h} rx="5" fill={idx === 2 ? 'var(--good)' : 'var(--data)'} />
                  <text x={x + 19} y={132 - h} textAnchor="middle" fill="var(--text)" fontSize="12" fontWeight="700">{val}</text>
                  <text x={x + 19} y="156" textAnchor="middle" fill="var(--muted)" fontSize="11">#{idx + 1}</text>
                </g>
              );
            })}
            <line x1="24" y1={138 - (mean / maxBar) * 105} x2="360" y2={138 - (mean / maxBar) * 105} stroke="var(--gold)" strokeWidth="2" strokeDasharray="5 4" />
          </svg>
          <div className="ml-result" aria-live="polite">
            <small>Sorted: {dataset.join(', ')}</small>
            <strong className="tabular-nums">
              Mean {mean.toFixed(1)} · Median {median} · Range {range} · SD {sd.toFixed(2)}
            </strong>
          </div>
        </div>
        <div className="ml-controls">
          <Control label="Adjust 5th data value" valueText={String(adjustable)} value={adjustable} min={5} max={60} onChange={setAdjustable} />
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            <button type="button" className="btn ghost sm" onClick={() => { setScores([12, 18, 18, 22, 26]); setAdjustable(26); }}>Balanced scores</button>
            <button type="button" className="btn ghost sm" onClick={() => { setScores([12, 18, 18, 22, 58]); setAdjustable(58); }}>Outlier effect (58)</button>
          </div>
        </div>
      </div>
    );
  }

  // Probability tree simulator
  const total = redCount + goldCount;
  const pRed1 = redCount / total;
  const pRed2 = withReplacement ? redCount / total : Math.max(0, redCount - 1) / Math.max(1, total - 1);
  const theoreticalRR = pRed1 * pRed2;
  const expRate = trials > 0 ? bothRedHits / trials : null;

  const runBatch = (count: number) => {
    let hits = 0;
    for (let i = 0; i < count; i++) {
      const firstIsRed = Math.random() < redCount / total;
      if (!firstIsRed) continue;
      const secondIsRed = withReplacement
        ? Math.random() < redCount / total
        : total > 1 && Math.random() < (redCount - 1) / (total - 1);
      if (secondIsRed) hits += 1;
    }
    setTrials(t => t + count);
    setBothRedHits(h => h + hits);
  };

  return (
    <div className="ml-grid">
      <div className="ml-stage">
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <button
            type="button"
            className={withReplacement ? 'btn cyan sm' : 'btn ghost sm'}
            onClick={() => { setWithReplacement(true); setTrials(0); setBothRedHits(0); }}
          >
            With replacement (Independent)
          </button>
          <button
            type="button"
            className={!withReplacement ? 'btn cyan sm' : 'btn ghost sm'}
            onClick={() => { setWithReplacement(false); setTrials(0); setBothRedHits(0); }}
          >
            Without replacement (Dependent)
          </button>
        </div>
        <div className="ml-factor-grid">
          <div>
            <span>Theoretical P(Red, Red)</span>
            <b className="tabular-nums">{(theoreticalRR * 100).toFixed(1)}%</b>
          </div>
          <div>
            <span>Experimental ({bothRedHits}/{trials})</span>
            <b className="tabular-nums">{expRate !== null ? `${(expRate * 100).toFixed(1)}%` : 'Run trials'}</b>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <button type="button" className="btn cyan sm" onClick={() => runBatch(1)}>Draw 1 pair</button>
          <button type="button" className="btn sm" onClick={() => runBatch(50)}>Run 50 trials</button>
          <button type="button" className="btn ghost sm" onClick={() => { setTrials(0); setBothRedHits(0); }}>Reset count</button>
        </div>
        <div className="ml-result" aria-live="polite">
          <small>2-stage branch product</small>
          <strong className="tabular-nums">
            ({redCount}/{total}) × ({withReplacement ? redCount : Math.max(0, redCount - 1)}/{withReplacement ? total : Math.max(1, total - 1)}) = {theoreticalRR.toFixed(3)}
          </strong>
        </div>
      </div>
      <div className="ml-controls">
        <Control label="Red counters" valueText={String(redCount)} value={redCount} min={1} max={8} onChange={v => { setRedCount(v); setTrials(0); setBothRedHits(0); }} />
        <Control label="Gold counters" valueText={String(goldCount)} value={goldCount} min={1} max={8} onChange={v => { setGoldCount(v); setTrials(0); setBothRedHits(0); }} />
      </div>
    </div>
  );
};

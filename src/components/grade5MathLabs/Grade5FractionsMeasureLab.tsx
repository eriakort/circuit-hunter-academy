import React, { useState } from 'react';
import type { Language } from '../../types';
import { g5Dec, g5Div, g5Txt, type Grade5MathLabMode } from './grade5MathLabConfig';

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

const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));

type UnitKind = 'length' | 'capacity' | 'mass' | 'area' | 'volume' | 'time';

export const Grade5FractionsMeasureLab: React.FC<{
  mode: Grade5MathLabMode;
  missionId: string;
  lang: Language;
}> = ({ mode, missionId, lang }) => {
  const [num, setNum] = useState(3);
  const [den, setDen] = useState(4);
  const [whole, setWhole] = useState(40);
  const [pct, setPct] = useState(25);
  const [price, setPrice] = useState(80);

  const initialUnit: UnitKind =
    missionId === 'g5m-capacity' ? 'capacity' :
    missionId === 'g5m-mass' ? 'mass' :
    missionId === 'g5m-area-units' ? 'area' :
    missionId === 'g5m-volume-units' ? 'volume' :
    missionId === 'g5m-time' ? 'time' : 'length';
  const [unitKind, setUnitKind] = useState<UnitKind>(initialUnit);
  const [qty, setQty] = useState(4);

  const [speed, setSpeed] = useState(60);
  const [hours, setHours] = useState(3);
  const [cost, setCost] = useState(35);
  const [revenue, setRevenue] = useState(48);

  if (mode === 'fractions-decimals') {
    const g = gcd(num, den);
    const simpN = num / g;
    const simpD = den / g;
    const decVal = num / den;
    const fractionClass =
      num % den === 0
        ? g5Txt(lang, 'Apparent fraction (whole)', 'Frazione apparente')
        : num < den
        ? g5Txt(lang, 'Proper fraction (< 1)', 'Frazione propria (< 1)')
        : g5Txt(lang, 'Improper fraction (> 1)', 'Frazione impropria (> 1)');
    const partValue = (whole / den) * num;

    return (
      <div className="ml-grid">
        <div className="ml-stage">
          <div className="ml-fraction">
            <div className="ml-fraction-bar">
              {Array.from({ length: den }, (_, i) => (
                <i key={i} className={i < num ? 'filled' : ''} />
              ))}
            </div>
            <strong className="tabular-nums">
              {num}/{den} = {simpN}/{simpD} = {g5Dec(lang, decVal, 3)}
            </strong>
          </div>
          <div className="ml-result" aria-live="polite">
            <small>{fractionClass}</small>
            <strong className="tabular-nums">
              {num}/{den} {g5Txt(lang, 'of', 'di')} {whole} = ({whole} {g5Div(lang)} {den}) × {num} = {g5Dec(lang, partValue, 2)}
            </strong>
          </div>
        </div>
        <div className="ml-controls">
          <Control label={g5Txt(lang, 'Numerator', 'Numeratore')} valueText={String(num)} value={num} min={1} max={12} onChange={setNum} />
          <Control label={g5Txt(lang, 'Denominator', 'Denominatore')} valueText={String(den)} value={den} min={2} max={12} onChange={setDen} />
          <Control label={g5Txt(lang, 'Whole quantity', 'Quantità intera')} valueText={String(whole)} value={whole} min={12} max={120} step={4} onChange={setWhole} />
        </div>
      </div>
    );
  }

  if (mode === 'percentages-money') {
    const discount = (price * pct) / 100;
    const finalPrice = price - discount;
    return (
      <div className="ml-grid">
        <div className="ml-stage">
          <div className="ml-percent">
            <div style={{ width: `${pct}%` }} />
            <b className="tabular-nums">{pct}%</b>
          </div>
          <div className="ml-factor-grid">
            <div>
              <span>{g5Txt(lang, 'Fraction', 'Frazione')}</span>
              <b className="tabular-nums">{pct}/100</b>
            </div>
            <div>
              <span>{g5Txt(lang, 'Decimal', 'Decimale')}</span>
              <b className="tabular-nums">{g5Dec(lang, pct / 100, 2)}</b>
            </div>
            <div>
              <span>{g5Txt(lang, 'Savings', 'Risparmio')}</span>
              <b className="tabular-nums">€ {g5Dec(lang, discount, 2)}</b>
            </div>
          </div>
          <div className="ml-result" aria-live="polite">
            <small>{pct}% {g5Txt(lang, 'discount off', 'di sconto su')} € {price}</small>
            <strong className="tabular-nums">{g5Txt(lang, 'Final price', 'Prezzo finale')}: € {g5Dec(lang, finalPrice, 2)}</strong>
          </div>
        </div>
        <div className="ml-controls">
          <Control label={g5Txt(lang, 'Percentage', 'Percentuale')} valueText={`${pct}%`} value={pct} min={5} max={95} step={5} onChange={setPct} />
          <Control label={g5Txt(lang, 'Original price (€)', 'Prezzo iniziale (€)')} valueText={`€ ${price}`} value={price} min={20} max={200} step={5} onChange={setPrice} />
        </div>
      </div>
    );
  }

  if (mode === 'metric-time') {
    const summaryMap: Record<UnitKind, { label: [string, string]; big: string; small: string }> = {
      length: {
        label: ['Length (km ↔ mm)', 'Lunghezza (km ↔ mm)'],
        big: `${g5Dec(lang, qty / 1000, 3)} km`,
        small: `${qty} m = ${qty * 10} dm = ${qty * 100} cm = ${qty * 1000} mm`
      },
      capacity: {
        label: ['Capacity (hl ↔ ml)', 'Capacità (hl ↔ ml)'],
        big: `${g5Dec(lang, qty / 100, 2)} hl`,
        small: `${qty} l = ${qty * 10} dl = ${qty * 100} cl = ${qty * 1000} ml`
      },
      mass: {
        label: ['Mass (Mg ↔ g)', 'Massa (Mg ↔ g)'],
        big: `${g5Dec(lang, qty / 1000, 3)} Mg`,
        small: `${qty} kg = ${qty * 10} hg = ${qty * 100} dag = ${qty * 1000} g`
      },
      area: {
        label: ['Area (× 100 steps)', 'Superficie (× 100)'],
        big: `${g5Dec(lang, qty / 100, 2)} dam²`,
        small: `${qty} m² = ${(qty * 100).toLocaleString()} dm² = ${(qty * 10000).toLocaleString()} cm²`
      },
      volume: {
        label: ['Volume (× 1 000 steps)', 'Volume (× 1 000)'],
        big: `${qty} m³`,
        small: `${(qty * 1000).toLocaleString()} dm³ (${(qty * 1000).toLocaleString()} l)`
      },
      time: {
        label: ['Time (base 60)', 'Tempo (base 60)'],
        big: `${qty} h`,
        small: `${qty * 60} min = ${(qty * 3600).toLocaleString()} s`
      }
    };
    const info = summaryMap[unitKind];
    return (
      <div className="ml-grid">
        <div className="ml-stage">
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {(Object.keys(summaryMap) as UnitKind[]).map(kind => (
              <button key={kind} type="button" className={unitKind === kind ? 'btn cyan sm' : 'btn ghost sm'} onClick={() => setUnitKind(kind)}>
                {g5Txt(lang, summaryMap[kind].label[0], summaryMap[kind].label[1])}
              </button>
            ))}
          </div>
          <div className="ml-result" aria-live="polite" style={{ marginTop: 10 }}>
            <small>{info.big}</small>
            <strong className="tabular-nums">{info.small}</strong>
          </div>
        </div>
        <div className="ml-controls">
          <Control label={g5Txt(lang, 'Base quantity', 'Quantità base')} valueText={String(qty)} value={qty} min={1} max={25} onChange={setQty} />
        </div>
      </div>
    );
  }

  // speed-trade
  const isTrade = missionId === 'g5m-money-trade' || missionId === 'g5m-exchange-online';
  if (isTrade) {
    const diff = revenue - cost;
    const isProfit = diff >= 0;
    const usdRate = 1.1;
    return (
      <div className="ml-grid">
        <div className="ml-stage">
          <div className="ml-factor-grid">
            <div>
              <span>{g5Txt(lang, 'Cost', 'Spesa')}</span>
              <b className="tabular-nums">€ {cost}</b>
            </div>
            <div>
              <span>{g5Txt(lang, 'Revenue', 'Ricavo')}</span>
              <b className="tabular-nums">€ {revenue}</b>
            </div>
            <div>
              <span>{isProfit ? g5Txt(lang, 'Profit', 'Guadagno') : g5Txt(lang, 'Loss', 'Perdita')}</span>
              <b className="tabular-nums">€ {Math.abs(diff)}</b>
            </div>
          </div>
          <div className="ml-result" aria-live="polite">
            <small>{g5Txt(lang, 'Exchange rate €1 = $1.10', 'Cambio €1 = $1,10')}</small>
            <strong className="tabular-nums">
              {isProfit ? g5Txt(lang, 'Net profit', 'Guadagno netto') : g5Txt(lang, 'Net loss', 'Perdita netta')}: € {Math.abs(diff)} · € {revenue} ≈ $ {g5Dec(lang, revenue * usdRate, 2)}
            </strong>
          </div>
        </div>
        <div className="ml-controls">
          <Control label={g5Txt(lang, 'Cost (€)', 'Spesa (€)')} valueText={`€ ${cost}`} value={cost} min={10} max={100} onChange={setCost} />
          <Control label={g5Txt(lang, 'Revenue (€)', 'Ricavo (€)')} valueText={`€ ${revenue}`} value={revenue} min={10} max={100} onChange={setRevenue} />
        </div>
      </div>
    );
  }

  const dist = speed * hours;
  return (
    <div className="ml-grid">
      <div className="ml-stage">
        <div className="ml-percent">
          <div style={{ width: `${Math.min(100, Math.round((dist / 500) * 100))}%` }} />
          <b className="tabular-nums">{dist} km</b>
        </div>
        <div className="ml-result" aria-live="polite">
          <small>v = {speed} km/h · t = {hours} h</small>
          <strong className="tabular-nums">
            {g5Txt(lang, 'Distance', 'Spazio')}: {speed} × {hours} = {dist} km · v = {dist} {g5Div(lang)} {hours} = {speed} km/h
          </strong>
        </div>
      </div>
      <div className="ml-controls">
        <Control label={g5Txt(lang, 'Speed (km/h)', 'Velocità (km/h)')} valueText={`${speed} km/h`} value={speed} min={20} max={100} step={10} onChange={setSpeed} />
        <Control label={g5Txt(lang, 'Time (hours)', 'Tempo (ore)')} valueText={`${hours} h`} value={hours} min={1} max={5} onChange={setHours} />
      </div>
    </div>
  );
};

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

const toRoman = (n: number): { roman: string; tokens: string[] } => {
  const table: Array<[number, string]> = [
    [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
    [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
    [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']
  ];
  let rem = Math.max(1, Math.min(2026, Math.round(n)));
  const tokens: string[] = [];
  let roman = '';
  for (const [val, sym] of table) {
    while (rem >= val) {
      roman += sym;
      tokens.push(`${sym}=${val}`);
      rem -= val;
    }
  }
  return { roman, tokens };
};

const primeFactors = (n: number): number[] => {
  const res: number[] = [];
  let cur = Math.max(2, Math.floor(n));
  let f = 2;
  while (f * f <= cur) {
    while (cur % f === 0) {
      res.push(f);
      cur /= f;
    }
    f += 1;
  }
  if (cur > 1) res.push(cur);
  return res;
};

const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));

export const Grade5NumbersLab: React.FC<{
  mode: Grade5MathLabMode;
  missionId: string;
  lang: Language;
}> = ({ mode, missionId, lang }) => {
  const [digits, setDigits] = useState([4, 6, 2, 0, 8]);
  const [base, setBase] = useState(2);
  const [exp, setExp] = useState(4);
  const [romanNum, setRomanNum] = useState(1984);
  const [decimalTenths, setDecimalTenths] = useState(34);
  const [negNum, setNegNum] = useState(-3);
  const [shiftPower, setShiftPower] = useState<10 | 100 | 1000>(10);
  const [opA, setOpA] = useState(6);
  const [opB, setOpB] = useState(4);
  const [opC, setOpC] = useState(5);
  const [withBrackets, setWithBrackets] = useState(true);
  const [numVal, setNumVal] = useState(36);
  const [pairVal, setPairVal] = useState(24);

  if (mode === 'place-powers') {
    const isPowers = missionId === 'g5m-powers' || missionId === 'g5m-big-numbers';
    if (isPowers) {
      const powerVal = Math.pow(base, exp);
      const expansion = exp === 0 ? '1' : Array.from({ length: exp }, () => String(base)).join(' × ');
      return (
        <div className="ml-grid">
          <div className="ml-stage">
            <div className="ml-power">
              <span>{base}</span>
              <sup>{exp}</sup>
            </div>
            <div className="ml-power-result tabular-nums">
              {expansion} = {powerVal.toLocaleString(lang === 'it' ? 'it-IT' : 'en-US')}
            </div>
            <div className="ml-result" aria-live="polite">
              <small>{g5Txt(lang, 'Polynomial & power of 10 comparison', 'Valore della potenza')}</small>
              <strong className="tabular-nums">
                10^{exp} = {Math.pow(10, exp).toLocaleString(lang === 'it' ? 'it-IT' : 'en-US')}
              </strong>
            </div>
          </div>
          <div className="ml-controls">
            <Control label={g5Txt(lang, 'Base', 'Base')} valueText={String(base)} value={base} min={2} max={10} onChange={setBase} />
            <Control label={g5Txt(lang, 'Exponent', 'Esponente')} valueText={String(exp)} value={exp} min={0} max={6} onChange={setExp} />
          </div>
        </div>
      );
    }

    const total = digits[0] * 10000 + digits[1] * 1000 + digits[2] * 100 + digits[3] * 10 + digits[4];
    const places = ['dak', 'uk', 'h', 'da', 'u'];
    return (
      <div className="ml-grid">
        <div className="ml-stage">
          <div className="ml-factor-grid">
            {digits.map((d, i) => (
              <div key={places[i]}>
                <span>{places[i]}</span>
                <b className="tabular-nums">{d}</b>
              </div>
            ))}
          </div>
          <div className="ml-result" aria-live="polite">
            <small>{g5Txt(lang, 'Composed number', 'Numero composto')}</small>
            <strong className="tabular-nums">{total.toLocaleString(lang === 'it' ? 'it-IT' : 'en-US')}</strong>
          </div>
        </div>
        <div className="ml-controls">
          <Control label={g5Txt(lang, 'Ten-thousands (dak)', 'Decine di migliaia (dak)')} valueText={String(digits[0])} value={digits[0]} min={0} max={9} onChange={v => setDigits([v, digits[1], digits[2], digits[3], digits[4]])} />
          <Control label={g5Txt(lang, 'Thousands (uk)', 'Migliaia (uk)')} valueText={String(digits[1])} value={digits[1]} min={0} max={9} onChange={v => setDigits([digits[0], v, digits[2], digits[3], digits[4]])} />
          <Control label={g5Txt(lang, 'Hundreds (h)', 'Centinaia (h)')} valueText={String(digits[2])} value={digits[2]} min={0} max={9} onChange={v => setDigits([digits[0], digits[1], v, digits[3], digits[4]])} />
        </div>
      </div>
    );
  }

  if (mode === 'roman-numerals') {
    const { roman, tokens } = toRoman(romanNum);
    return (
      <div className="ml-grid">
        <div className="ml-stage">
          <div className="ml-digit tabular-nums">{roman}</div>
          <div className="ml-divisibility">
            {tokens.slice(0, 6).map((tok, i) => (
              <span key={`${tok}-${i}`}>{tok}</span>
            ))}
          </div>
          <div className="ml-result" aria-live="polite">
            <small>{g5Txt(lang, 'Decimal value', 'Valore decimale')}</small>
            <strong className="tabular-nums">{romanNum} = {roman}</strong>
          </div>
        </div>
        <div className="ml-controls">
          <Control label={g5Txt(lang, 'Number (1 – 2026)', 'Numero (1 – 2026)')} valueText={String(romanNum)} value={romanNum} min={1} max={2026} onChange={setRomanNum} />
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {[4, 19, 49, 99, 444, 1999].map(preset => (
              <button key={preset} type="button" className="btn ghost sm" onClick={() => setRomanNum(preset)}>
                {preset}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (mode === 'number-rounding') {
    if (missionId === 'g5m-negative-numbers') {
      const markerX = 40 + ((negNum + 5) / 10) * 300;
      return (
        <div className="ml-grid">
          <div className="ml-stage">
            <svg viewBox="0 0 380 110" role="img" aria-label={g5Txt(lang, 'Integer number line from -5 to +5', 'Retta dei numeri interi da -5 a +5')}>
              <line x1="30" y1="54" x2="350" y2="54" stroke="var(--muted)" strokeWidth="2.5" />
              {Array.from({ length: 11 }, (_, i) => {
                const v = i - 5;
                const tx = 40 + i * 30;
                return (
                  <g key={v}>
                    <line x1={tx} y1="46" x2={tx} y2="62" stroke="var(--muted)" strokeWidth="2" />
                    <text x={tx} y="82" textAnchor="middle" fill={v === 0 ? 'var(--gold)' : 'var(--muted)'} fontSize="11" fontWeight="700">
                      {v > 0 ? `+${v}` : v}
                    </text>
                  </g>
                );
              })}
              <circle cx={markerX} cy="54" r="9" fill="var(--ember)" stroke="var(--text)" strokeWidth="2" />
              <text x={markerX} y="30" textAnchor="middle" fill="var(--ember)" fontSize="14" fontWeight="800">
                {negNum > 0 ? `+${negNum}` : negNum}
              </text>
            </svg>
            <div className="ml-result" aria-live="polite">
              <small>{g5Txt(lang, 'Distance from zero', 'Distanza dallo zero')}</small>
              <strong className="tabular-nums">
                {negNum > 0 ? `+${negNum}` : negNum} · |n| = {Math.abs(negNum)} · {negNum < 0 ? g5Txt(lang, 'Negative (< 0)', 'Negativo (< 0)') : negNum > 0 ? g5Txt(lang, 'Positive (> 0)', 'Positivo (> 0)') : g5Txt(lang, 'Neutral zero', 'Zero neutro')}
              </strong>
            </div>
          </div>
          <div className="ml-controls">
            <Control label={g5Txt(lang, 'Integer position', 'Posizione sulla retta')} valueText={negNum > 0 ? `+${negNum}` : String(negNum)} value={negNum} min={-5} max={5} onChange={setNegNum} />
          </div>
        </div>
      );
    }

    const val = decimalTenths / 10;
    const rounded = Math.round(val);
    const shifted = val * shiftPower;
    return (
      <div className="ml-grid">
        <div className="ml-stage">
          <div className="ml-operation">
            <span className="tabular-nums">{g5Dec(lang, val, 1)}</span>
            <b>→</b>
            <strong className="tabular-nums">
              {missionId === 'g5m-times-10-100-1000'
                ? g5Dec(lang, shifted, 1)
                : String(rounded)}
            </strong>
          </div>
          <div className="ml-result" aria-live="polite">
            <small>
              {missionId === 'g5m-times-10-100-1000'
                ? `${g5Dec(lang, val, 1)} × ${shiftPower}`
                : g5Txt(lang, 'Rounded to nearest unit (tenth digit decides)', 'Arrotondamento all’unità (decide la cifra dei decimi)')}
            </small>
            <strong className="tabular-nums">
              {g5Dec(lang, val, 1)} × {shiftPower} = {g5Dec(lang, shifted, 1)} · {g5Dec(lang, val, 1)} {g5Div(lang)} {shiftPower} = {g5Dec(lang, val / shiftPower, 4)}
            </strong>
          </div>
        </div>
        <div className="ml-controls">
          <Control label={g5Txt(lang, 'Decimal value', 'Numero decimale')} valueText={g5Dec(lang, val, 1)} value={decimalTenths} min={10} max={99} onChange={setDecimalTenths} />
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {([10, 100, 1000] as const).map(f => (
              <button key={f} type="button" className={shiftPower === f ? 'btn cyan sm' : 'btn ghost sm'} onClick={() => setShiftPower(f)}>
                × {f} / {g5Div(lang)} {f}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (mode === 'operations-order') {
    const valWith = opA * (opB + opC);
    const valWithout = opA * opB + opC;
    const shown = withBrackets ? valWith : valWithout;
    return (
      <div className="ml-grid">
        <div className="ml-stage">
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <button type="button" className={withBrackets ? 'btn cyan sm' : 'btn ghost sm'} onClick={() => setWithBrackets(true)}>
              {g5Txt(lang, 'With brackets: a × (b + c)', 'Con parentesi: a × (b + c)')}
            </button>
            <button type="button" className={!withBrackets ? 'btn cyan sm' : 'btn ghost sm'} onClick={() => setWithBrackets(false)}>
              {g5Txt(lang, 'No brackets: a × b + c', 'Senza parentesi: a × b + c')}
            </button>
          </div>
          <div className="ml-area" style={{ marginTop: 10 }}>
            <span style={{ width: `${Math.round((opB / (opB + opC)) * 100)}%` }}>{opA} × {opB} = {opA * opB}</span>
            <span style={{ width: `${Math.round((opC / (opB + opC)) * 100)}%` }}>{opA} × {opC} = {opA * opC}</span>
          </div>
          <div className="ml-result" aria-live="polite">
            <small>
              {withBrackets
                ? `${opA} × (${opB} + ${opC}) = ${opA} × ${opB + opC}`
                : `${opA} × ${opB} + ${opC} = ${opA * opB} + ${opC}`}
            </small>
            <strong className="tabular-nums">= {shown}</strong>
          </div>
        </div>
        <div className="ml-controls">
          <Control label="a" valueText={String(opA)} value={opA} min={2} max={12} onChange={setOpA} />
          <Control label="b" valueText={String(opB)} value={opB} min={1} max={10} onChange={setOpB} />
          <Control label="c" valueText={String(opC)} value={opC} min={1} max={10} onChange={setOpC} />
        </div>
      </div>
    );
  }

  // factors-primes
  const factors = primeFactors(numVal);
  const isPrime = factors.length === 1;
  const divisors = Array.from({ length: numVal }, (_, i) => i + 1).filter(d => numVal % d === 0);
  const gVal = gcd(numVal, pairVal);
  const lcmVal = (numVal * pairVal) / gVal;
  return (
    <div className="ml-grid">
      <div className="ml-stage">
        <div className="ml-digit tabular-nums">{numVal} = {factors.join(' × ')}</div>
        <div className="ml-divisibility">
          {[2, 3, 5, 9, 10].map(d => (
            <span key={d}>{d}: <b>{numVal % d === 0 ? g5Txt(lang, 'yes', 'sì') : 'no'}</b></span>
          ))}
        </div>
        <div className="ml-result" aria-live="polite">
          <small>
            {isPrime
              ? g5Txt(lang, 'Prime number! Only 1 and itself divide it.', 'Numero primo! Ha solo due divisori: 1 e se stesso.')
              : `${g5Txt(lang, 'Divisors', 'Divisori')}: ${divisors.join(', ')}`}
          </small>
          <strong className="tabular-nums">
            {g5Txt(lang, 'GCD', 'M.C.D.')}({numVal}, {pairVal}) = {gVal} · {g5Txt(lang, 'LCM', 'm.c.m.')} = {lcmVal}
          </strong>
        </div>
      </div>
      <div className="ml-controls">
        <Control label={g5Txt(lang, 'Primary number n', 'Numero principale n')} valueText={String(numVal)} value={numVal} min={2} max={60} onChange={setNumVal} />
        <Control label={g5Txt(lang, 'Second number m', 'Secondo numero m')} valueText={String(pairVal)} value={pairVal} min={2} max={48} onChange={setPairVal} />
      </div>
    </div>
  );
};

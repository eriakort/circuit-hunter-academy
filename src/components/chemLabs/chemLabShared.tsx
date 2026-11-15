import React from 'react';
import type { Language } from '../../types';

export const pick = (lang: Language, en: string, it: string) => (lang === 'it' ? it : en);

export const fmt = (lang: Language, value: number, decimals = 2) => {
  const s = value.toFixed(decimals);
  return lang === 'it' ? s.replace('.', ',') : s;
};

export function Slider({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  decimals = 0,
  lang,
  onChange
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  unit?: string;
  decimals?: number;
  lang: Language;
  onChange: (n: number) => void;
}) {
  return (
    <label className="cl-control">
      <span>
        {label}
        <b>
          {fmt(lang, value, decimals)} {unit}
        </b>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={e => onChange(Number(e.target.value))}
      />
      <small>
        {fmt(lang, min, decimals)}–{fmt(lang, max, decimals)} {unit}
      </small>
    </label>
  );
}

export function Readout({ label, value }: { label: string; value: string }) {
  return (
    <div className="cl-readout">
      <small>{label}</small>
      <strong>{value}</strong>
    </div>
  );
}

export function Analogy({ lang, en, it }: { lang: Language; en: string; it: string }) {
  return (
    <div className="cl-analogy">
      <strong>{pick(lang, 'Simple picture:', 'Immagine semplice:')}</strong> {pick(lang, en, it)}
    </div>
  );
}

export function PlayToggle({
  playing,
  onToggle,
  lang
}: {
  playing: boolean;
  onToggle: () => void;
  lang: Language;
}) {
  return (
    <button type="button" className={`cl-btn ${playing ? 'primary' : ''}`} onClick={onToggle}>
      {playing ? pick(lang, '⏸ Pause motion', '⏸ Pausa moto') : pick(lang, '▶ Play motion', '▶ Avvia moto')}
    </button>
  );
}

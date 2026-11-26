import React, { useState } from 'react';
import type { Language } from '../../types';
import { g5Coord, g5Dec, g5Div, g5Txt, type Grade5MathLabMode } from './grade5MathLabConfig';

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

const APOTHEMS: Record<number, number> = {
  3: 0.289,
  4: 0.5,
  5: 0.688,
  6: 0.866,
  8: 1.207
};

type ShapeKind = 'rectangle' | 'rhomboid' | 'rhombus' | 'trapezium' | 'triangle';

export const Grade5GeometryLab: React.FC<{
  mode: Grade5MathLabMode;
  missionId: string;
  lang: Language;
}> = ({ mode, missionId, lang }) => {
  // Cartesian & Isometry
  const [px, setPx] = useState(3);
  const [py, setPy] = useState(4);
  const [isoMode, setIsoMode] = useState<'none' | 'translate' | 'reflect'>(missionId === 'g5m-isometries' ? 'reflect' : 'none');

  // Angles & regular polygons
  const [deg, setDeg] = useState(60);
  const [polySides, setPolySides] = useState(6);
  const [sideLen, setSideLen] = useState(10);

  // Plane areas
  const initialShape: ShapeKind =
    missionId === 'g5m-trapezium' ? 'trapezium' :
    missionId === 'g5m-triangle' ? 'triangle' :
    missionId === 'g5m-rhomboid-rhombus' ? 'rhombus' : 'rectangle';
  const [shape, setShape] = useState<ShapeKind>(initialShape);
  const [baseA, setBaseA] = useState(10);
  const [baseB, setBaseB] = useState(6);
  const [height, setHeight] = useState(5);

  // Circle & Solids
  const [radius, setRadius] = useState(5);
  const [solidMode, setSolidMode] = useState(missionId.includes('solid') || missionId === 'g5m-volume');
  const [boxL, setBoxL] = useState(6);
  const [boxW, setBoxW] = useState(4);
  const [boxH, setBoxH] = useState(5);

  if (mode === 'cartesian-isometry') {
    const toSvg = (x: number, y: number): [number, number] => [40 + x * 42, 164 - y * 24];
    const [ax, ay] = toSvg(px, py);
    const tx = isoMode === 'translate' ? Math.min(7, px + 2) : isoMode === 'reflect' ? 7 - px : px;
    const ty = isoMode === 'translate' ? Math.max(1, py - 1) : py;
    const [bx, by] = toSvg(tx, ty);

    return (
      <div className="ml-grid">
        <div className="ml-stage">
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            <button type="button" className={isoMode === 'none' ? 'btn cyan sm' : 'btn ghost sm'} onClick={() => setIsoMode('none')}>
              {g5Txt(lang, 'Point A', 'Punto A')}
            </button>
            <button type="button" className={isoMode === 'translate' ? 'btn cyan sm' : 'btn ghost sm'} onClick={() => setIsoMode('translate')}>
              {g5Txt(lang, 'Translate (+2, −1)', 'Trasla (+2, −1)')}
            </button>
            <button type="button" className={isoMode === 'reflect' ? 'btn cyan sm' : 'btn ghost sm'} onClick={() => setIsoMode('reflect')}>
              {g5Txt(lang, 'Mirror x = 3.5', 'Simmetria')}
            </button>
          </div>
          <svg viewBox="0 0 360 185" role="img" aria-label={g5Txt(lang, 'Cartesian plane grid', 'Piano cartesiano')}>
            {Array.from({ length: 8 }, (_, i) => (
              <g key={i}>
                <line x1={40 + i * 42} y1="20" x2={40 + i * 42} y2="164" stroke="var(--line)" strokeWidth="1" />
                <text x={40 + i * 42} y="178" textAnchor="middle" fill="var(--muted)" fontSize="10">{i}</text>
              </g>
            ))}
            {Array.from({ length: 7 }, (_, j) => (
              <line key={j} x1="40" y1={164 - j * 24} x2="334" y2={164 - j * 24} stroke="var(--line)" strokeWidth="1" />
            ))}
            <line x1="40" y1="164" x2="342" y2="164" stroke="var(--muted)" strokeWidth="2" />
            <line x1="40" y1="164" x2="40" y2="14" stroke="var(--muted)" strokeWidth="2" />
            {isoMode === 'reflect' && <line x1={40 + 3.5 * 42} y1="20" x2={40 + 3.5 * 42} y2="164" stroke="var(--gold)" strokeWidth="2" strokeDasharray="5 4" />}
            <circle cx={ax} cy={ay} r="6.5" fill="var(--ember)" />
            <text x={ax + 10} y={ay - 6} fill="var(--ember)" fontSize="12" fontWeight="800">A {g5Coord(lang, px, py)}</text>
            {isoMode !== 'none' && (
              <>
                <circle cx={bx} cy={by} r="6.5" fill="var(--good)" />
                <text x={bx + 10} y={by + 14} fill="var(--good)" fontSize="12" fontWeight="800">A′ {g5Coord(lang, tx, ty)}</text>
              </>
            )}
          </svg>
          <div className="ml-result" aria-live="polite">
            <small>{g5Txt(lang, 'Coordinates', 'Coordinate')}</small>
            <strong className="tabular-nums">
              A = {g5Coord(lang, px, py)}{isoMode !== 'none' ? ` → A′ = ${g5Coord(lang, tx, ty)}` : ''}
            </strong>
          </div>
        </div>
        <div className="ml-controls">
          <Control label={g5Txt(lang, 'Horizontal x', 'Ascissa x')} valueText={String(px)} value={px} min={1} max={6} onChange={setPx} />
          <Control label={g5Txt(lang, 'Vertical y', 'Ordinata y')} valueText={String(py)} value={py} min={1} max={6} onChange={setPy} />
        </div>
      </div>
    );
  }

  if (mode === 'angles-regular') {
    if (missionId === 'g5m-lines-angles') {
      const rad = (deg * Math.PI) / 180;
      const ex = 140 + 85 * Math.cos(rad);
      const ey = 132 - 85 * Math.sin(rad);
      const kind =
        deg < 90 ? g5Txt(lang, 'Acute angle (< 90°)', 'Angolo acuto (< 90°)') :
        deg === 90 ? g5Txt(lang, 'Right angle (= 90°)', 'Angolo retto (= 90°)') :
        deg < 180 ? g5Txt(lang, 'Obtuse angle (90°–180°)', 'Angolo ottuso (90°–180°)') :
        g5Txt(lang, 'Straight angle (= 180°)', 'Angolo piatto (= 180°)');
      return (
        <div className="ml-grid">
          <div className="ml-stage">
            <svg viewBox="0 0 280 165" role="img" aria-label={g5Txt(lang, 'Protractor angle view', 'Goniometro')}>
              <line x1="140" y1="132" x2="230" y2="132" stroke="var(--data)" strokeWidth="4" strokeLinecap="round" />
              <line x1="140" y1="132" x2={ex} y2={ey} stroke="var(--gold)" strokeWidth="4" strokeLinecap="round" />
              <circle cx="140" cy="132" r="5" fill="var(--text)" />
              <text x="140" y="28" textAnchor="middle" fill="var(--gold)" fontSize="22" fontWeight="800">{deg}°</text>
            </svg>
            <div className="ml-result" aria-live="polite">
              <small>{g5Txt(lang, 'Angle class', 'Classificazione')}</small>
              <strong className="tabular-nums">{kind}</strong>
            </div>
          </div>
          <div className="ml-controls">
            <Control label={g5Txt(lang, 'Angle (degrees)', 'Ampiezza (gradi)')} valueText={`${deg}°`} value={deg} min={15} max={180} step={5} onChange={setDeg} />
          </div>
        </div>
      );
    }

    const apConst = APOTHEMS[polySides] ?? 0.866;
    const perimeter = polySides * sideLen;
    const apothem = sideLen * apConst;
    const area = (perimeter * apothem) / 2;
    const intSum = (polySides - 2) * 180;
    return (
      <div className="ml-grid">
        <div className="ml-stage">
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {[3, 4, 5, 6, 8].map(n => (
              <button key={n} type="button" className={polySides === n ? 'btn cyan sm' : 'btn ghost sm'} onClick={() => setPolySides(n)}>
                {n} {g5Txt(lang, 'sides', 'lati')}
              </button>
            ))}
          </div>
          <div className="ml-factor-grid" style={{ marginTop: 10 }}>
            <div>
              <span>{g5Txt(lang, 'Perimeter P', 'Perimetro P')}</span>
              <b className="tabular-nums">{perimeter} cm</b>
            </div>
            <div>
              <span>{g5Txt(lang, 'Apothem a', 'Apotema a')}</span>
              <b className="tabular-nums">{g5Dec(lang, apothem, 2)} cm</b>
            </div>
            <div>
              <span>{g5Txt(lang, 'Angle sum', 'Somma angoli')}</span>
              <b className="tabular-nums">{intSum}°</b>
            </div>
          </div>
          <div className="ml-result" aria-live="polite">
            <small>A = P × a {g5Div(lang)} 2</small>
            <strong className="tabular-nums">{g5Txt(lang, 'Area', 'Area')} = {g5Dec(lang, area, 2)} cm²</strong>
          </div>
        </div>
        <div className="ml-controls">
          <Control label={g5Txt(lang, 'Side length l (cm)', 'Lato l (cm)')} valueText={`${sideLen} cm`} value={sideLen} min={4} max={20} onChange={setSideLen} />
        </div>
      </div>
    );
  }

  if (mode === 'plane-areas') {
    const area =
      shape === 'rectangle' ? baseA * height :
      shape === 'rhomboid' ? baseA * height :
      shape === 'rhombus' ? (baseA * baseB) / 2 :
      shape === 'trapezium' ? ((baseA + baseB) * height) / 2 :
      (baseA * height) / 2;

    const formula =
      shape === 'rectangle' ? 'b × h' :
      shape === 'rhomboid' ? 'b × h' :
      shape === 'rhombus' ? `(D × d) ${g5Div(lang)} 2` :
      shape === 'trapezium' ? `(B + b) × h ${g5Div(lang)} 2` :
      `(b × h) ${g5Div(lang)} 2`;

    const shapeTabs: Array<[ShapeKind, [string, string]]> = [
      ['rectangle', ['Rectangle', 'Rettangolo']],
      ['rhomboid', ['Rhomboid', 'Romboide']],
      ['rhombus', ['Rhombus', 'Rombo']],
      ['trapezium', ['Trapezium', 'Trapezio']],
      ['triangle', ['Triangle', 'Triangolo']]
    ];

    return (
      <div className="ml-grid">
        <div className="ml-stage">
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {shapeTabs.map(([k, lbl]) => (
              <button key={k} type="button" className={shape === k ? 'btn cyan sm' : 'btn ghost sm'} onClick={() => setShape(k)}>
                {g5Txt(lang, lbl[0], lbl[1])}
              </button>
            ))}
          </div>
          <div className="ml-factor-grid" style={{ marginTop: 10 }}>
            <div>
              <span>{g5Txt(lang, 'Formula', 'Formula')}</span>
              <b>{formula}</b>
            </div>
            <div>
              <span>{g5Txt(lang, 'Area', 'Area')}</span>
              <b className="tabular-nums">{g5Dec(lang, area, 1)} cm²</b>
            </div>
          </div>
          <div className="ml-result" aria-live="polite">
            <small>{g5Txt(lang, 'Live area result', 'Calcolo dell’area')}</small>
            <strong className="tabular-nums">A = {g5Dec(lang, area, 1)} cm²</strong>
          </div>
        </div>
        <div className="ml-controls">
          <Control label={shape === 'rhombus' ? 'D' : 'B / b'} valueText={`${baseA} cm`} value={baseA} min={4} max={20} onChange={setBaseA} />
          {(shape === 'rhombus' || shape === 'trapezium') && (
            <Control label={shape === 'rhombus' ? 'd' : 'b'} valueText={`${baseB} cm`} value={baseB} min={2} max={14} onChange={setBaseB} />
          )}
          {shape !== 'rhombus' && (
            <Control label={g5Txt(lang, 'Height h', 'Altezza h')} valueText={`${height} cm`} value={height} min={2} max={15} onChange={setHeight} />
          )}
        </div>
      </div>
    );
  }

  // circle-solids
  const d = radius * 2;
  const circ = d * Math.PI;
  const cArea = radius * radius * Math.PI;
  const vol = boxL * boxW * boxH;
  const latArea = 2 * (boxL + boxW) * boxH;
  const totArea = latArea + 2 * (boxL * boxW);

  return (
    <div className="ml-grid">
      <div className="ml-stage">
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <button type="button" className={!solidMode ? 'btn cyan sm' : 'btn ghost sm'} onClick={() => setSolidMode(false)}>
            {g5Txt(lang, 'Circle & π', 'Cerchio e π')}
          </button>
          <button type="button" className={solidMode ? 'btn cyan sm' : 'btn ghost sm'} onClick={() => setSolidMode(true)}>
            {g5Txt(lang, '3D Solids & Volume', 'Solidi e volume')}
          </button>
        </div>

        {!solidMode ? (
          <div className="ml-result" aria-live="polite" style={{ marginTop: 10 }}>
            <small>r = {radius} cm · d = {d} cm</small>
            <strong className="tabular-nums">
              C = {g5Dec(lang, circ, 2)} cm · A = {g5Dec(lang, cArea, 2)} cm²
            </strong>
          </div>
        ) : (
          <div className="ml-result" aria-live="polite" style={{ marginTop: 10 }}>
            <small>S_lat = {latArea} cm² · S_tot = {totArea} cm²</small>
            <strong className="tabular-nums">V = {boxL} × {boxW} × {boxH} = {vol} cm³</strong>
          </div>
        )}
      </div>
      <div className="ml-controls">
        {!solidMode ? (
          <Control label={g5Txt(lang, 'Radius r (cm)', 'Raggio r (cm)')} valueText={`${radius} cm`} value={radius} min={1} max={12} onChange={setRadius} />
        ) : (
          <>
            <Control label={g5Txt(lang, 'Length l', 'Lunghezza l')} valueText={`${boxL} cm`} value={boxL} min={2} max={12} onChange={setBoxL} />
            <Control label={g5Txt(lang, 'Width w', 'Larghezza p')} valueText={`${boxW} cm`} value={boxW} min={2} max={10} onChange={setBoxW} />
            <Control label={g5Txt(lang, 'Height h', 'Altezza h')} valueText={`${boxH} cm`} value={boxH} min={2} max={10} onChange={setBoxH} />
          </>
        )}
      </div>
    </div>
  );
};

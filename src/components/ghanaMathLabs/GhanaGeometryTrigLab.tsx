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

export const GhanaGeometryTrigLab: React.FC<{ mode: GhanaMathLabMode }> = ({ mode }) => {
  // Parallel lines
  const [transAngle, setTransAngle] = useState(55);

  // Pythagoras & Polygons
  const [legA, setLegA] = useState(3);
  const [legB, setLegB] = useState(4);
  const [polySides, setPolySides] = useState(5);
  const [polyTab, setPolyTab] = useState<'pythagoras' | 'polygon'>('pythagoras');

  // Transformations
  const [tfType, setTfType] = useState<'reflectY' | 'reflectX' | 'rotate90' | 'translate'>('reflectY');
  const [dx, setDx] = useState(3);
  const [dy, setDy] = useState(-2);

  // Vectors & Bearings
  const [bearing, setBearing] = useState(60);
  const [vecX, setVecX] = useState(4);
  const [vecY, setVecY] = useState(3);

  // Trigonometry elevation
  const [elevDeg, setElevDeg] = useState(38);
  const [groundDist, setGroundDist] = useState(20);

  // Trig waves
  const [waveFn, setWaveFn] = useState<'sin' | 'cos'>('sin');
  const [amp, setAmp] = useState(2);
  const [freq, setFreq] = useState(1);
  const [targetY, setTargetY] = useState(1);

  // Circle theorems
  const [circleRule, setCircleRule] = useState<'central' | 'cyclic' | 'tangent'>('central');
  const [arcSpread, setArcSpread] = useState(50);
  const [vertexShift, setVertexShift] = useState(20);

  // Mensuration
  const [solidKind, setSolidKind] = useState<'cylinder' | 'cone' | 'cuboid'>('cylinder');
  const [rad, setRad] = useState(5);
  const [height, setHeight] = useState(10);

  if (mode === 'angles-parallel') {
    const radAng = (transAngle * Math.PI) / 180;
    const dxLine = 82 / Math.tan(radAng);
    const supp = 180 - transAngle;
    return (
      <div className="ml-grid">
        <div className="ml-stage">
          <svg viewBox="0 0 380 175" role="img" aria-label={`Parallel lines cut at ${transAngle} degrees`}>
            <line x1="30" y1="54" x2="350" y2="54" stroke="var(--data)" strokeWidth="4" />
            <line x1="30" y1="126" x2="350" y2="126" stroke="var(--data)" strokeWidth="4" />
            <line x1={190 - dxLine} y1="164" x2={190 + dxLine} y2="16" stroke="var(--gold)" strokeWidth="4" />
            <text x="236" y="46" fill="var(--good)" fontSize="14" fontWeight="800">{transAngle}°</text>
            <text x="150" y="118" fill="var(--good)" fontSize="14" fontWeight="800">{transAngle}°</text>
            <text x="134" y="46" fill="var(--ember)" fontSize="14" fontWeight="800">{supp}°</text>
          </svg>
          <div className="ml-result" aria-live="polite">
            <small>Corresponding = Alternate = {transAngle}°</small>
            <strong className="tabular-nums">Co-interior pair: {transAngle}° + {supp}° = 180°</strong>
          </div>
        </div>
        <div className="ml-controls">
          <Control label="Transversal angle θ" valueText={`${transAngle}°`} value={transAngle} min={25} max={85} onChange={setTransAngle} />
        </div>
      </div>
    );
  }

  if (mode === 'pythagoras-polygons') {
    const hyp = Math.sqrt(legA * legA + legB * legB);
    const interiorSum = (polySides - 2) * 180;
    const eachInterior = interiorSum / polySides;
    const polyPts = Array.from({ length: polySides }, (_, i) => {
      const a = -Math.PI / 2 + (i * 2 * Math.PI) / polySides;
      return `${(190 + 58 * Math.cos(a)).toFixed(1)},${(92 + 58 * Math.sin(a)).toFixed(1)}`;
    }).join(' ');
    return (
      <div className="ml-grid">
        <div className="ml-stage">
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <button type="button" className={polyTab === 'pythagoras' ? 'btn cyan sm' : 'btn ghost sm'} onClick={() => setPolyTab('pythagoras')}>Right Triangle (a²+b²=c²)</button>
            <button type="button" className={polyTab === 'polygon' ? 'btn cyan sm' : 'btn ghost sm'} onClick={() => setPolyTab('polygon')}>Regular Polygons</button>
          </div>
          {polyTab === 'pythagoras' ? (
            <>
              <svg viewBox="0 0 380 175" role="img" aria-label={`Right triangle with legs ${legA} and ${legB}`}>
                <polygon
                  points={`90,145 ${90 + legA * 18},145 ${90 + legA * 18},${145 - legB * 10}`}
                  fill="rgba(56,239,125,0.16)"
                  stroke="var(--good)"
                  strokeWidth="3.5"
                />
                <text x={90 + legA * 9} y="164" textAnchor="middle" fill="var(--data)" fontSize="14" fontWeight="800">a = {legA}</text>
                <text x={102 + legA * 18} y={145 - legB * 5} fill="var(--ember)" fontSize="14" fontWeight="800">b = {legB}</text>
                <text x={78 + legA * 7} y={136 - legB * 6} fill="var(--gold)" fontSize="15" fontWeight="800">c = {hyp.toFixed(2)}</text>
              </svg>
              <div className="ml-result" aria-live="polite">
                <small>{legA}² + {legB}² = {legA * legA} + {legB * legB} = {legA * legA + legB * legB}</small>
                <strong className="tabular-nums">c = √{legA * legA + legB * legB} = {hyp.toFixed(3)}</strong>
              </div>
            </>
          ) : (
            <>
              <svg viewBox="0 0 380 175" role="img" aria-label={`Regular ${polySides}-sided polygon`}>
                <polygon points={polyPts} fill="rgba(69,216,255,0.18)" stroke="var(--data)" strokeWidth="3.5" />
                <text x="190" y="98" textAnchor="middle" fill="var(--gold)" fontSize="18" fontWeight="800">{polySides} sides</text>
              </svg>
              <div className="ml-result" aria-live="polite">
                <small>Interior sum = ({polySides} − 2) × 180° = {interiorSum}°</small>
                <strong className="tabular-nums">Each interior: {eachInterior.toFixed(1)}° · Exterior: {(360 / polySides).toFixed(1)}°</strong>
              </div>
            </>
          )}
        </div>
        <div className="ml-controls">
          {polyTab === 'pythagoras' ? (
            <>
              <Control label="Leg a" valueText={String(legA)} value={legA} min={2} max={12} onChange={setLegA} />
              <Control label="Leg b" valueText={String(legB)} value={legB} min={2} max={12} onChange={setLegB} />
            </>
          ) : (
            <Control label="Number of sides n" valueText={String(polySides)} value={polySides} min={3} max={10} onChange={setPolySides} />
          )}
        </div>
      </div>
    );
  }

  if (mode === 'transformations') {
    const obj: Array<[number, number]> = [[1, 1], [4, 1], [2, 4]];
    const mapPt = ([x, y]: [number, number]): [number, number] => {
      if (tfType === 'reflectY') return [-x, y];
      if (tfType === 'reflectX') return [x, -y];
      if (tfType === 'rotate90') return [-y, x];
      return [x + dx, y + dy];
    };
    const img = obj.map(mapPt);
    const toSvg = ([x, y]: [number, number]) => `${190 + x * 18},${94 - y * 14}`;
    const ruleLabel =
      tfType === 'reflectY'
        ? '(x, y) → (−x, y) across y-axis'
        : tfType === 'reflectX'
        ? '(x, y) → (x, −y) across x-axis'
        : tfType === 'rotate90'
        ? '(x, y) → (−y, x) 90° anticlockwise'
        : `(x, y) → (x + ${dx}, y + ${dy}) translation`;
    return (
      <div className="ml-grid">
        <div className="ml-stage">
          <svg viewBox="0 0 380 185" role="img" aria-label="Coordinate transformation grid">
            <line x1="20" y1="94" x2="360" y2="94" stroke="var(--muted)" strokeWidth="1.5" />
            <line x1="190" y1="10" x2="190" y2="178" stroke="var(--muted)" strokeWidth="1.5" />
            <polygon points={obj.map(toSvg).join(' ')} fill="rgba(69,216,255,0.22)" stroke="var(--data)" strokeWidth="3" />
            <polygon points={img.map(toSvg).join(' ')} fill="rgba(56,239,125,0.25)" stroke="var(--good)" strokeWidth="3" />
          </svg>
          <div className="ml-result" aria-live="polite">
            <small>{ruleLabel}</small>
            <strong className="tabular-nums">
              {img.map(([x, y], i) => `${['A′', 'B′', 'C′'][i]}(${x},${y})`).join(' · ')}
            </strong>
          </div>
        </div>
        <div className="ml-controls">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
            <button type="button" className={tfType === 'reflectY' ? 'btn cyan sm' : 'btn ghost sm'} onClick={() => setTfType('reflectY')}>Reflect y-axis</button>
            <button type="button" className={tfType === 'reflectX' ? 'btn cyan sm' : 'btn ghost sm'} onClick={() => setTfType('reflectX')}>Reflect x-axis</button>
            <button type="button" className={tfType === 'rotate90' ? 'btn cyan sm' : 'btn ghost sm'} onClick={() => setTfType('rotate90')}>Rotate 90°</button>
            <button type="button" className={tfType === 'translate' ? 'btn cyan sm' : 'btn ghost sm'} onClick={() => setTfType('translate')}>Translate</button>
          </div>
          {tfType === 'translate' && (
            <>
              <Control label="Shift dx" valueText={String(dx)} value={dx} min={-5} max={5} onChange={setDx} />
              <Control label="Shift dy" valueText={String(dy)} value={dy} min={-5} max={3} onChange={setDy} />
            </>
          )}
        </div>
      </div>
    );
  }

  if (mode === 'vectors-bearings') {
    const radB = ((bearing - 90) * Math.PI) / 180;
    const backBearing = (bearing + 180) % 360;
    const mag = Math.sqrt(vecX * vecX + vecY * vecY);
    return (
      <div className="ml-grid">
        <div className="ml-stage">
          <svg viewBox="0 0 380 175" role="img" aria-label={`Compass bearing ${bearing} degrees and vector (${vecX}, ${vecY})`}>
            <circle cx="95" cy="92" r="58" fill="rgba(255,255,255,0.03)" stroke="var(--gold)" strokeWidth="3" />
            <line x1="95" y1="92" x2="95" y2="28" stroke="var(--muted)" strokeWidth="2" strokeDasharray="4 3" />
            <text x="95" y="22" textAnchor="middle" fill="var(--gold)" fontSize="13" fontWeight="800">N</text>
            <line x1="95" y1="92" x2={95 + 48 * Math.cos(radB)} y2={92 + 48 * Math.sin(radB)} stroke="var(--ember)" strokeWidth="4" strokeLinecap="round" />
            <circle cx="95" cy="92" r="5" fill="var(--gold)" />
            <line x1="210" y1="138" x2={210 + vecX * 14} y2="138" stroke="var(--data)" strokeWidth="3" />
            <line x1={210 + vecX * 14} y1="138" x2={210 + vecX * 14} y2={138 - vecY * 14} stroke="var(--good)" strokeWidth="3" />
            <line x1="210" y1="138" x2={210 + vecX * 14} y2={138 - vecY * 14} stroke="var(--gold)" strokeWidth="4" />
            <text x="275" y="158" textAnchor="middle" fill="var(--data)" fontSize="13">x = {vecX}, y = {vecY}</text>
          </svg>
          <div className="ml-result" aria-live="polite">
            <small>Bearing {String(bearing).padStart(3, '0')}° · Back bearing {String(backBearing).padStart(3, '0')}°</small>
            <strong className="tabular-nums">Column vector ({vecX}, {vecY}) ⇒ |v| = {mag.toFixed(2)}</strong>
          </div>
        </div>
        <div className="ml-controls">
          <Control label="Bearing from North" valueText={`${String(bearing).padStart(3, '0')}°`} value={bearing} min={0} max={355} step={5} onChange={setBearing} />
          <Control label="Vector x-component" valueText={String(vecX)} value={vecX} min={1} max={8} onChange={setVecX} />
          <Control label="Vector y-component" valueText={String(vecY)} value={vecY} min={1} max={6} onChange={setVecY} />
        </div>
      </div>
    );
  }

  if (mode === 'trig-elevation') {
    const radT = (elevDeg * Math.PI) / 180;
    const heightTower = groundDist * Math.tan(radT);
    const hyp = groundDist / Math.cos(radT);
    const drawH = Math.min(110, Math.max(25, Math.tan(radT) * 95));
    return (
      <div className="ml-grid">
        <div className="ml-stage">
          <svg viewBox="0 0 380 175" role="img" aria-label={`Right triangle with elevation ${elevDeg} degrees`}>
            <polygon points={`70,145 290,145 290,${145 - drawH}`} fill="rgba(69,216,255,0.16)" stroke="var(--data)" strokeWidth="3.5" />
            <path d="M 118 145 A 48 48 0 0 0 112 126" fill="none" stroke="var(--ember)" strokeWidth="3.5" />
            <text x="132" y="136" fill="var(--ember)" fontSize="14" fontWeight="800">{elevDeg}°</text>
            <text x="180" y="164" textAnchor="middle" fill="var(--muted)" fontSize="13">Adjacent = {groundDist} m</text>
            <text x="302" y={145 - drawH / 2} fill="var(--gold)" fontSize="13" fontWeight="800">{heightTower.toFixed(1)} m</text>
          </svg>
          <div className="ml-result" aria-live="polite">
            <small>sin {elevDeg}° = {Math.sin(radT).toFixed(3)} · cos {elevDeg}° = {Math.cos(radT).toFixed(3)} · tan {elevDeg}° = {Math.tan(radT).toFixed(3)}</small>
            <strong className="tabular-nums">Height = {heightTower.toFixed(2)} m · Sightline = {hyp.toFixed(2)} m</strong>
          </div>
        </div>
        <div className="ml-controls">
          <Control label="Angle of elevation θ" valueText={`${elevDeg}°`} value={elevDeg} min={15} max={70} onChange={setElevDeg} />
          <Control label="Ground distance (Adjacent)" valueText={`${groundDist} m`} value={groundDist} min={10} max={50} onChange={setGroundDist} />
        </div>
      </div>
    );
  }

  if (mode === 'trig-waves') {
    const pts = Array.from({ length: 73 }, (_, i) => {
      const deg = i * 5;
      const radW = (freq * deg * Math.PI) / 180;
      const y = amp * (waveFn === 'sin' ? Math.sin(radW) : Math.cos(radW));
      const sx = 34 + (deg / 360) * 320;
      const sy = 90 - y * 24;
      return `${sx.toFixed(1)},${sy.toFixed(1)}`;
    }).join(' ');
    const targetSy = 90 - targetY * 24;
    const roots: number[] = [];
    for (let deg = 0; deg <= 360; deg += 1) {
      const radW = (freq * deg * Math.PI) / 180;
      const y = amp * (waveFn === 'sin' ? Math.sin(radW) : Math.cos(radW));
      const radNext = (freq * (deg + 1) * Math.PI) / 180;
      const yNext = amp * (waveFn === 'sin' ? Math.sin(radNext) : Math.cos(radNext));
      if ((y - targetY) * (yNext - targetY) <= 0 && roots.every(r => Math.abs(r - deg) > 8)) {
        roots.push(deg);
      }
    }
    return (
      <div className="ml-grid">
        <div className="ml-stage">
          <div style={{ display: 'flex', gap: 8 }}>
            <button type="button" className={waveFn === 'sin' ? 'btn cyan sm' : 'btn ghost sm'} onClick={() => setWaveFn('sin')}>y = A sin(kx)</button>
            <button type="button" className={waveFn === 'cos' ? 'btn cyan sm' : 'btn ghost sm'} onClick={() => setWaveFn('cos')}>y = A cos(kx)</button>
          </div>
          <svg viewBox="0 0 380 175" role="img" aria-label={`Trigonometric wave y = ${amp} ${waveFn}(${freq}x)`}>
            <line x1="34" y1="90" x2="354" y2="90" stroke="var(--muted)" strokeWidth="1.5" />
            <line x1="34" y1="16" x2="34" y2="164" stroke="var(--muted)" strokeWidth="1.5" />
            <line x1="34" y1={targetSy} x2="354" y2={targetSy} stroke="var(--gold)" strokeWidth="2" strokeDasharray="6 4" />
            <polyline points={pts} fill="none" stroke="var(--data)" strokeWidth="3.5" />
            {roots.slice(0, 6).map(r => (
              <circle key={r} cx={34 + (r / 360) * 320} cy={targetSy} r="5" fill="var(--ember)" />
            ))}
          </svg>
          <div className="ml-result" aria-live="polite">
            <small>Amplitude = {amp} · Period = {(360 / freq).toFixed(0)}°</small>
            <strong className="tabular-nums">
              {roots.length ? `Solutions ≈ ${roots.slice(0, 5).map(r => `${r}°`).join(', ')}` : 'No intersection in [0°, 360°]'}
            </strong>
          </div>
        </div>
        <div className="ml-controls">
          <Control label="Amplitude A" valueText={String(amp)} value={amp} min={1} max={3} onChange={setAmp} />
          <Control label="Frequency k" valueText={String(freq)} value={freq} min={1} max={3} onChange={setFreq} />
          <Control label="Target line y = c" valueText={targetY.toFixed(1)} value={targetY} min={-2.5} max={2.5} step={0.5} onChange={setTargetY} />
        </div>
      </div>
    );
  }

  if (mode === 'circle-theorems') {
    const central = arcSpread * 2;
    const inscribed = arcSpread;
    const oppositeCyclic = 180 - inscribed;
    const topAngle = ((-90 + vertexShift) * Math.PI) / 180;
    const topX = 190 + 66 * Math.cos(topAngle);
    const topY = 92 + 66 * Math.sin(topAngle);
    const leftAngle = ((180 - arcSpread) * Math.PI) / 180;
    const rightAngle = (arcSpread * Math.PI) / 180;
    const lx = 190 + 66 * Math.cos(leftAngle);
    const ly = 92 + 66 * Math.sin(leftAngle);
    const rx = 190 + 66 * Math.cos(rightAngle);
    const ry = 92 + 66 * Math.sin(rightAngle);
    return (
      <div className="ml-grid">
        <div className="ml-stage">
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            <button type="button" className={circleRule === 'central' ? 'btn cyan sm' : 'btn ghost sm'} onClick={() => setCircleRule('central')}>Centre = 2×Circumference</button>
            <button type="button" className={circleRule === 'cyclic' ? 'btn cyan sm' : 'btn ghost sm'} onClick={() => setCircleRule('cyclic')}>Cyclic Quad 180°</button>
            <button type="button" className={circleRule === 'tangent' ? 'btn cyan sm' : 'btn ghost sm'} onClick={() => setCircleRule('tangent')}>Tangent ⊥ Radius</button>
          </div>
          <svg viewBox="0 0 380 175" role="img" aria-label="Interactive circle theorem diagram">
            <circle cx="190" cy="92" r="66" fill="rgba(69,216,255,0.08)" stroke="var(--data)" strokeWidth="3" />
            {circleRule === 'central' && (
              <>
                <line x1={lx} y1={ly} x2="190" y2="92" stroke="var(--gold)" strokeWidth="3" />
                <line x1={rx} y1={ry} x2="190" y2="92" stroke="var(--gold)" strokeWidth="3" />
                <line x1={lx} y1={ly} x2={topX} y2={topY} stroke="var(--good)" strokeWidth="3" />
                <line x1={rx} y1={ry} x2={topX} y2={topY} stroke="var(--good)" strokeWidth="3" />
                <circle cx="190" cy="92" r="4.5" fill="var(--gold)" />
                <circle cx={topX} cy={topY} r="5.5" fill="var(--good)" />
              </>
            )}
            {circleRule === 'cyclic' && (
              <polygon points={`${topX},${topY} ${rx},${ry} 190,158 ${lx},${ly}`} fill="rgba(255,209,102,0.16)" stroke="var(--gold)" strokeWidth="3" />
            )}
            {circleRule === 'tangent' && (
              <>
                <line x1="190" y1="92" x2="256" y2="92" stroke="var(--gold)" strokeWidth="3.5" />
                <line x1="256" y1="16" x2="256" y2="168" stroke="var(--ember)" strokeWidth="4" />
                <rect x="242" y="78" width="14" height="14" fill="none" stroke="var(--good)" strokeWidth="2.5" />
              </>
            )}
          </svg>
          <div className="ml-result" aria-live="polite">
            <small>
              {circleRule === 'central'
                ? 'Same arc theorem'
                : circleRule === 'cyclic'
                ? 'Opposite vertices on circle'
                : 'Point of tangency'}
            </small>
            <strong className="tabular-nums">
              {circleRule === 'central'
                ? `Central = ${central}° · Inscribed = ${inscribed}°`
                : circleRule === 'cyclic'
                ? `Top = ${inscribed}° · Bottom = ${oppositeCyclic}° (Sum 180°)`
                : 'Radius ⊥ Tangent = 90°'}
            </strong>
          </div>
        </div>
        <div className="ml-controls">
          <Control label="Arc spread" valueText={`${arcSpread}°`} value={arcSpread} min={25} max={75} onChange={setArcSpread} />
          <Control label="Slide circumference vertex" valueText={`${vertexShift}°`} value={vertexShift} min={-40} max={40} onChange={setVertexShift} />
        </div>
      </div>
    );
  }

  // Mensuration
  const vol =
    solidKind === 'cylinder'
      ? Math.PI * rad * rad * height
      : solidKind === 'cone'
      ? (Math.PI * rad * rad * height) / 3
      : rad * 2 * rad * height;
  const tsa =
    solidKind === 'cylinder'
      ? 2 * Math.PI * rad * (rad + height)
      : solidKind === 'cone'
      ? Math.PI * rad * (rad + Math.sqrt(rad * rad + height * height))
      : 2 * (rad * 2 * rad + rad * height + 2 * rad * height);
  return (
    <div className="ml-grid">
      <div className="ml-stage">
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <button type="button" className={solidKind === 'cylinder' ? 'btn cyan sm' : 'btn ghost sm'} onClick={() => setSolidKind('cylinder')}>Cylinder</button>
          <button type="button" className={solidKind === 'cone' ? 'btn cyan sm' : 'btn ghost sm'} onClick={() => setSolidKind('cone')}>Cone</button>
          <button type="button" className={solidKind === 'cuboid' ? 'btn cyan sm' : 'btn ghost sm'} onClick={() => setSolidKind('cuboid')}>Prism / Cuboid</button>
        </div>
        <div className="ml-factor-grid">
          <div>
            <span>Volume</span>
            <b className="tabular-nums">{vol.toFixed(1)} cm³</b>
          </div>
          <div>
            <span>Total Surface Area</span>
            <b className="tabular-nums">{tsa.toFixed(1)} cm²</b>
          </div>
        </div>
        <div className="ml-result" aria-live="polite">
          <small>Capacity check (1,000 cm³ = 1 L)</small>
          <strong className="tabular-nums">{(vol / 1000).toFixed(3)} litres</strong>
        </div>
      </div>
      <div className="ml-controls">
        <Control label={solidKind === 'cuboid' ? 'Width w (cm)' : 'Radius r (cm)'} valueText={`${rad} cm`} value={rad} min={2} max={12} onChange={setRad} />
        <Control label="Height h (cm)" valueText={`${height} cm`} value={height} min={3} max={20} onChange={setHeight} />
      </div>
    </div>
  );
};

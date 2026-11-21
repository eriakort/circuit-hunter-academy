import React, { useRef, useState } from 'react';
import { MotionScene, type MotionStep } from './MotionScene';
import { ChoiceRow } from './ChoiceRow';
import { MoreDetails } from './MoreDetails';
import { useSmilPause } from './useSmilPause';

export const PRESSURE_STEPS: MotionStep[] = [
  { id: 'pressure', label: 'Pressure', caption: 'Pressure = force ÷ area, measured in pascals (Pa), where 1 Pa = 1 N/m². For the same force, a smaller contact area produces greater pressure.' },
  { id: 'balance', label: 'Balanced and unbalanced forces', caption: "Equal forces in opposite directions give a resultant force of 0 N, so motion does not change (Newton's First Law: inertia). When one force is larger, the object accelerates in the direction of the resultant force." },
  { id: 'second', label: "Newton's Second Law", caption: 'Resultant force (N) = mass (kg) × acceleration (m/s²). For the same mass, greater acceleration needs greater resultant force.' },
  { id: 'third', label: "Newton's Third Law", caption: 'Equal and opposite forces act on different objects, so they do not cancel. The balloon pushes escaping air backwards; the air pushes the balloon forwards.' }
];

type Case = { id: string; title: string; force: number; area: number; note: string; width: number; depth: number };
const CASES: Case[] = [
  { id: 'knife', title: 'Sharp knife edge', force: 20, area: 0.0001, note: 'A very small contact area creates high pressure, helping the blade cut.', width: 8, depth: 62 },
  { id: 'shoe', title: 'Flat shoe sole', force: 400, area: 0.02, note: 'A wider contact area spreads the force and reduces pressure on the ground.', width: 110, depth: 18 },
  { id: 'tyre', title: 'Wide tyre on soft ground', force: 800, area: 0.08, note: 'A wider contact area spreads the load and helps reduce sinking into soft ground.', width: 220, depth: 9 }
];
const GROUND = 250;

const Arrow: React.FC<{ x1: number; x2: number; y: number; colour: string }> = ({ x1, x2, y, colour }) => {
  const dir = Math.sign(x2 - x1) || 1;
  return <g><line x1={x1} y1={y} x2={x2 - dir * 10} y2={y} stroke={colour} strokeWidth="6" strokeLinecap="round" /><polygon points={`${x2},${y} ${x2 - dir * 16},${y - 9} ${x2 - dir * 16},${y + 9}`} fill={colour} /></g>;
};

const Down: React.FC<{ x: number; y1: number; y2: number; colour: string }> = ({ x, y1, y2, colour }) => (
  <g><line x1={x} y1={y1} x2={x} y2={y2 - 10} stroke={colour} strokeWidth="6" strokeLinecap="round" /><polygon points={`${x},${y2} ${x - 9},${y2 - 16} ${x + 9},${y2 - 16}`} fill={colour} /></g>
);

const PressureArt: React.FC<{ anim: boolean; c: Case }> = ({ anim, c }) => {
  const p = c.force / c.area;
  const w = c.width;
  return (
    <g key={c.id}>
      <g>
        <rect x={320 - 60} y="90" width="120" height="70" rx="6" fill="#d5a43b" stroke="#2b2f2a" strokeWidth="3" />
        <path d={`M${320 - w / 2} 160 H${320 + w / 2} V${GROUND - 10} H${320 - w / 2} Z`} fill="#8a8a8a" stroke="#2b2f2a" strokeWidth="3" />
        <text x="320" y="132" textAnchor="middle" className="sm-force" fill="#2b2f2a" style={{ stroke: 'none' }}>{c.force} N</text>
        {anim && <animateTransform attributeName="transform" type="translate" values={`0 0;0 ${c.depth};0 ${c.depth};0 0`} keyTimes="0;.4;.8;1" dur="4s" repeatCount="indefinite" />}
      </g>
      <rect x="0" y={GROUND} width="640" height="110" fill="#a68a5a" />
      <rect x="0" y={GROUND} width="640" height="8" fill="#6f9a4a" />
      <text x="320" y={GROUND + 40} textAnchor="middle" className="sm-force" fill="#fff" style={{ stroke: '#5a4a2a' }}>Soft ground</text>
      <Down x={320} y1={20} y2={84} colour="#b5392f" />
      <text x="470" y="140" className="sm-force" fill="#2b2f2a">Contact area: {c.area} m²</text>
      <text x="470" y="164" className="sm-force" fill="#b5392f">Pressure: {p.toLocaleString('en-US')} Pa</text>
      <text x="470" y="188" className="sm-note sm-note--dark">{c.title}</text>
    </g>
  );
};

const BalanceArt: React.FC<{ anim: boolean }> = ({ anim }) => (
  <g>
    <rect x="0" y="220" width="640" height="130" fill="#d8d2c2" />
    <rect x="0" y="220" width="640" height="6" fill="#8a8272" />
    <g>
      <rect x="240" y="150" width="120" height="70" rx="8" fill="#d5a43b" stroke="#2b2f2a" strokeWidth="3" />
      <text x="300" y="192" textAnchor="middle" className="sm-force" fill="#2b2f2a" style={{ stroke: 'none' }}>Box</text>
      {anim && <animateTransform attributeName="transform" type="translate" values="0 0;0 0;150 0" keyTimes="0;.5;1" calcMode="spline" keySplines="0 0 1 1;.5 0 1 .6" dur="8s" repeatCount="indefinite" />}
      <g>
        <Arrow x1={100} x2={236} y={185} colour="#2468a8" />
        <g><Arrow x1={500} x2={364} y={185} colour="#b5392f" />{anim && <animate attributeName="opacity" values="1;1;0;0" keyTimes="0;.49;.5;1" dur="8s" repeatCount="indefinite" />}</g>
        <g opacity="0">{anim && <animate attributeName="opacity" values="0;0;1;1" keyTimes="0;.49;.5;1" dur="8s" repeatCount="indefinite" />}<Arrow x1={470} x2={364} y={185} colour="#b5392f" /></g>
      </g>
    </g>
    <g>
      <text x="320" y="80" textAnchor="middle" className="sm-title">First half: equal forces, resultant force = 0 N, no change in motion</text>
      {anim && <animate attributeName="opacity" values="1;1;0;0" keyTimes="0;.49;.5;1" dur="8s" repeatCount="indefinite" />}
    </g>
    <g opacity="0">
      {anim && <animate attributeName="opacity" values="0;0;1;1" keyTimes="0;.49;.5;1" dur="8s" repeatCount="indefinite" />}
      <text x="320" y="80" textAnchor="middle" className="sm-title">Second half: a larger force on one side, so the box accelerates</text>
    </g>
  </g>
);

const SecondArt: React.FC<{ anim: boolean; mass: number; accel: number }> = ({ anim, mass, accel }) => {
  const force = mass * accel;
  const size = 36 + mass * 5;
  const T = 3;
  const xs = [0, 0.2, 0.4, 0.6, 0.8, 1].map(f => 0.5 * accel * (f * T) ** 2 * 11);
  const arrowLen = 40 + force * 3.2;
  return (
    <g key={`${mass}-${accel}`}>
      <rect x="0" y="230" width="640" height="120" fill="#d8d2c2" /><rect x="0" y="230" width="640" height="6" fill="#8a8272" />
      <g>
        <rect x="170" y={230 - size} width={size} height={size} rx="6" fill="#d5a43b" stroke="#2b2f2a" strokeWidth="3" />
        <text x={170 + size / 2} y={230 - size / 2 + 5} textAnchor="middle" className="sm-force" fill="#2b2f2a" style={{ stroke: 'none' }}>{mass} kg</text>
        <Arrow x1={170 - arrowLen} x2={166} y={230 - size / 2} colour="#b5392f" />
        {anim && <animateTransform attributeName="transform" type="translate" values={xs.map(x => `${x} 0`).join(';')} keyTimes="0;.2;.4;.6;.8;1" dur="3s" repeatCount="indefinite" />}
      </g>
      <text x="320" y="60" textAnchor="middle" className="sm-title">F = ma = {mass} kg × {accel} m/s² = {force} N</text>
      <text x="320" y="86" textAnchor="middle" className="sm-note sm-note--dark">A bigger resultant force (longer arrow) gives a bigger acceleration</text>
    </g>
  );
};

const ThirdArt: React.FC<{ anim: boolean }> = ({ anim }) => (
  <g>
    <line x1="30" y1="170" x2="610" y2="170" stroke="#8a8272" strokeWidth="3" />
    <g>
      <ellipse cx="150" cy="170" rx="46" ry="32" fill="#e0574c" stroke="#2b2f2a" strokeWidth="3" />
      <path d="M104 170 l-18 -8 v16 Z" fill="#e0574c" stroke="#2b2f2a" strokeWidth="3" />
      <Arrow x1={170} x2={270} y={120} colour="#2468a8" />
      <text x="170" y="104" className="sm-force" fill="#2468a8">Air pushes balloon forwards</text>
      {anim && <animateTransform attributeName="transform" type="translate" values="0 0;300 0" dur="4s" calcMode="spline" keySplines=".5 0 1 .8" keyTimes="0;1" repeatCount="indefinite" />}
      {anim && [0, 1, 2, 3].map(i => <circle key={i} cy="170" r="5" fill="#cfe6f2" stroke="#5c8aa6" strokeWidth="1.5"><animate attributeName="cx" values="100;20" dur="0.9s" begin={`${i * 0.22}s`} repeatCount="indefinite" /><animate attributeName="opacity" values="1;0" dur="0.9s" begin={`${i * 0.22}s`} repeatCount="indefinite" /></circle>)}
      <Arrow x1={110} x2={40} y={215} colour="#b5392f" />
      <text x="40" y="240" className="sm-force" fill="#b5392f">Balloon pushes air backwards</text>
    </g>
    <text x="320" y="50" textAnchor="middle" className="sm-title">Two forces, on two different objects, so they do not cancel</text>
    <text x="320" y="320" textAnchor="middle" className="sm-note sm-note--dark">Walking: your foot pushes the ground backwards; the ground pushes you forwards.</text>
  </g>
);

const PressureArtSvg: React.FC<{ stepId: string; playing: boolean; reducedMotion: boolean; c: Case; mass: number; accel: number }> = ({ stepId, playing, reducedMotion, c, mass, accel }) => {
  const svg = useRef<SVGSVGElement>(null);
  useSmilPause(svg, playing, reducedMotion, stepId, c.id, mass, accel);
  const anim = !reducedMotion;
  return (
    <svg ref={svg} className="sm-art" viewBox="0 0 640 350" role="img" aria-label={`Forces: ${PRESSURE_STEPS.find(s => s.id === stepId)?.label}`}>
      <rect width="640" height="350" fill="#f6f2e8" />
      <g key={stepId}>
        {stepId === 'pressure' && <PressureArt anim={anim} c={c} />}
        {stepId === 'balance' && <BalanceArt anim={anim} />}
        {stepId === 'second' && <SecondArt anim={anim} mass={mass} accel={accel} />}
        {stepId === 'third' && <ThirdArt anim={anim} />}
      </g>
    </svg>
  );
};

export const PressureForceScene: React.FC = () => {
  const [caseId, setCaseId] = useState('knife');
  const [mass, setMass] = useState(5);
  const [accel, setAccel] = useState(2);
  const c = CASES.find(x => x.id === caseId) ?? CASES[0];
  return (
    <MotionScene
      title="The Force and Motion Strategist"
      description="Explore pressure, balanced forces, Newton's three laws and the relationship F = ma."
      steps={PRESSURE_STEPS}
      stepMs={8000}
      extraControls={
        <>
          <div className="gh-jhs1-science-interaction">
            <strong>Compare pressure (step 1)</strong>
            <ChoiceRow label="Pressure example" options={CASES.map(x => ({ id: x.id, label: x.title }))} value={caseId} onChange={setCaseId} />
            <div className="gh-jhs1-science-readout" aria-live="polite">
              <strong>{c.title}: {(c.force / c.area).toLocaleString('en-US')} Pa</strong>
              <p>Force: {c.force} N · Contact area: {c.area} m². {c.note}</p>
              <p>Compare: sharp knife edge = 200,000 Pa; flat shoe sole = 20,000 Pa; wide tyre = 10,000 Pa. These examples use different forces and areas to show how pressure depends on both.</p>
            </div>
          </div>
          <div className="gh-jhs1-science-interaction">
            <strong>Calculate F = ma (step 3)</strong>
            <ChoiceRow label="Mass" options={[2, 5, 10].map(m => ({ id: String(m), label: `${m} kg` }))} value={String(mass)} onChange={m => setMass(Number(m))} />
            <ChoiceRow label="Acceleration" options={[1, 2, 3].map(a => ({ id: String(a), label: `${a} m/s²` }))} value={String(accel)} onChange={a => setAccel(Number(a))} />
            <div className="gh-jhs1-science-readout" aria-live="polite">
              <strong>Resultant force: {mass * accel} N</strong>
              <p>F = ma = {mass} kg × {accel} m/s² = {mass * accel} N.</p>
            </div>
          </div>
        </>
      }
      footer={
        <>
          <p>Use the models to explore ideas, not as instructions for risky experiments. For the balloon demonstration, use a soft balloon, a straw and string with teacher or adult supervision; never aim it at a person.</p>
          <MoreDetails summary="Newton's three laws and action–reaction pairs">
            <p><b>First Law (inertia):</b> an object stays at rest or moves at constant velocity in a straight line unless a resultant external force acts on it.</p>
            <p><b>Second Law:</b> the resultant force equals mass multiplied by acceleration. Measure mass in kilograms and acceleration in metres per second squared.</p>
            <p><b>Third Law:</b> object A pushes object B backwards; object B pushes object A forwards with an equal-sized force. The forces do not cancel because they act on different objects.</p>
            <p>Friction and air resistance oppose motion. A force is a push or pull that can change speed, direction or shape.</p>
          </MoreDetails>
          <MoreDetails summary="Check the key ideas">
            <p><b>Pressure:</b> force ÷ area. Smaller area means greater pressure for the same force.</p>
            <p><b>Balanced forces:</b> zero resultant force, so motion does not change. <b>Unbalanced forces:</b> non-zero resultant force causes acceleration.</p>
            <p><b>Balloon demonstration:</b> escaping air moves backwards while the balloon moves forwards.</p>
          </MoreDetails>
        </>
      }
    >
      {({ step, playing, reducedMotion }) => <PressureArtSvg stepId={step.id} playing={playing} reducedMotion={reducedMotion} c={c} mass={mass} accel={accel} />}
    </MotionScene>
  );
};

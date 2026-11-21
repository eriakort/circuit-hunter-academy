import React, { useRef, useState } from 'react';
import { MotionScene, type MotionStep } from './MotionScene';
import { ChoiceRow } from './ChoiceRow';
import { MoreDetails } from './MoreDetails';
import { useSmilPause } from './useSmilPause';
import { ChainArt, type Device } from './EnergyChainScene';

const Cap: React.FC<{ x: number; y: number; text: string; anchor?: 'start' | 'middle' | 'end' }> = ({ x, y, text, anchor = 'middle' }) => (
  <text x={x} y={y} textAnchor={anchor} className="sm-note sm-note--dark">{text}</text>
);
const Tok: React.FC<{ path: string; dur: number; begin?: number; fill?: string; r?: number }> = ({ path, dur, begin = 0, fill = '#e9b949', r = 7 }) => (
  <circle r={r} fill={fill} stroke="#fff" strokeWidth="1.5"><animateMotion dur={`${dur}s`} begin={`${begin}s`} repeatCount="indefinite" path={path} /></circle>
);

/* ---------- Shared: a chain scene driven by a list of devices ---------- */
const ChainScene: React.FC<{ title: string; description: string; devices: (Device & { action?: string })[]; defaultId: string; footer: React.ReactNode; label: string }> = ({ title, description, devices, defaultId, footer, label }) => {
  const [id, setId] = useState(defaultId);
  const device = devices.find(d => d.id === id) ?? devices[0];
  const steps: MotionStep[] = device.steps.map((s, i) => ({
    id: `${device.id}-${i}`, label: s,
    caption: i === 0 ? `Input: ${device.input}.` : i === device.steps.length - 1 ? `Useful output: ${device.useful}. Other transfers: ${device.other}` : `Energy passes through this form on the way to the output. ${device.other}`
  }));
  return (
    <MotionScene
      key={device.id}
      title={title}
      description={description}
      steps={steps}
      stepMs={4500}
      extraControls={
        <>
          <ChoiceRow label={label} options={devices.map(d => ({ id: d.id, label: d.title }))} value={id} onChange={setId} />
          <div className="gh-jhs1-science-readout" aria-live="polite">
            <strong>{device.title}</strong>
            <p><b>Input:</b> {device.input}. <b>Useful output:</b> {device.useful}. <b>Other transfers:</b> {device.other}</p>
            {device.action && <p><b>Conservation action:</b> {device.action}</p>}
          </div>
        </>
      }
      footer={footer}
    >
      {({ stepIndex, playing, reducedMotion }) => <ChainArt device={device} stepIndex={stepIndex} playing={playing} reducedMotion={reducedMotion} />}
    </MotionScene>
  );
};

export const EnergySourcesScene: React.FC = () => (
  <ChainScene
    title="The Energy Conversion Pathfinder"
    description="Trace energy changes in familiar devices and a hydroelectric station."
    label="Energy pathway"
    defaultId="torch"
    devices={[
      { id: 'torch', title: 'Battery torch', input: 'Chemical energy', useful: 'Light energy', other: 'Some energy is also transferred as heat. The battery supplies electrical energy to the lamp.', steps: ['Chemical energy', 'Electrical energy', 'Light energy + thermal energy'] },
      { id: 'bicycle', title: 'Bicycle braking', input: 'Kinetic energy', useful: 'Slowing the bicycle', other: 'Friction slows the bicycle and transfers kinetic energy to the surroundings as heat.', steps: ['Kinetic energy', 'Friction at the brakes', 'Thermal energy'] },
      { id: 'hydro', title: 'Hydroelectric station', input: 'Gravitational potential energy of stored water', useful: 'Electrical energy', other: 'Moving water turns a turbine connected to a generator.', steps: ['Gravitational potential energy of stored water', 'Kinetic energy of flowing water', 'Mechanical energy in the turbine', 'Electrical energy'] }
    ]}
    footer={<p>Energy is transferred or changed from one form to another; it is not created from nothing.</p>}
  />
);

export const ConservationScene: React.FC = () => (
  <ChainScene
    title="The Energy Steward"
    description="Identify useful and other energy transfers, then choose a practical conservation action."
    label="Device"
    defaultId="fan"
    devices={[
      { id: 'fan', title: 'Electric fan', input: 'Electrical energy', useful: 'Kinetic energy (moving air)', other: 'Sound and thermal energy', action: 'Switch the fan off when the room is empty.', steps: ['Electrical energy', 'Kinetic energy (moving air)'] },
      { id: 'cooker', title: 'Cooker', input: 'Chemical energy in cooking gas', useful: 'Thermal energy for cooking', other: 'Heat transferred to the surroundings', action: 'Use a suitable pot and cover to reduce cooking time.', steps: ['Chemical energy in cooking gas', 'Thermal energy for cooking'] },
      { id: 'solar', title: 'Solar lamp', input: 'Light energy from the Sun', useful: 'Electrical energy, then light from the lamp', other: 'Some energy is transferred as heat', action: 'Place the panel where it can receive sunlight and maintain it.', steps: ['Light energy from the Sun', 'Electrical energy', 'Light from the lamp'] }
    ]}
    footer={
      <>
        <p>Energy is conserved even when some transfers are not useful for the task.</p>
        <MoreDetails summary="Remember the conservation principle">
          <p>Energy is not created or destroyed. It is transferred or converted; some may spread into the surroundings as heat or sound.</p>
        </MoreDetails>
      </>
    }
  />
);

/* ---------- Electricity network ---------- */
export const GRID_STEPS: MotionStep[] = [
  { id: 'station', label: 'Generating station', caption: '1 · Generate. A turbine can turn a generator. The generator converts mechanical energy into electrical energy.' },
  { id: 'stepup', label: 'Step-up transformer', caption: '2 · Raise voltage. The transformer raises voltage so electricity can be transmitted with lower current and reduced resistive losses.' },
  { id: 'lines', label: 'Transmission lines', caption: '3 · Transmit. High-voltage lines carry electrical energy over long distances to substations.' },
  { id: 'substation', label: 'Substation', caption: '4 · Lower voltage. Transformers lower the voltage to levels suitable for the distribution network.' },
  { id: 'home', label: 'Homes and schools', caption: '5 · Distribute. Distribution lines deliver electricity to consumers. Protective devices help isolate faults.' }
];
const GRID_X = [60, 190, 320, 450, 580];
const GRID_NAMES = ['Station', 'Step-up', 'Lines', 'Substation', 'Users'];
const PYLON_Y = 150;

const GridArt: React.FC<{ stepIndex: number; cap: 'charging' | 'discharging'; playing: boolean; reducedMotion: boolean }> = ({ stepIndex, cap, playing, reducedMotion }) => {
  const svg = useRef<SVGSVGElement>(null);
  useSmilPause(svg, playing, reducedMotion, stepIndex, cap);
  const anim = !reducedMotion;
  const path = `M${GRID_X[0] + 30} ${PYLON_Y} H${GRID_X[4] - 30}`;
  return (
    <svg ref={svg} className="sm-art" viewBox="0 0 640 380" role="img" aria-label={`Electricity network: ${GRID_STEPS[stepIndex].label}`}>
      <rect width="640" height="380" fill="#eef3f6" />
      <path d={path} stroke="#5c5a50" strokeWidth="5" />
      {anim && [0, 1, 2, 3, 4, 5].map(i => <Tok key={i} path={path} dur={6} begin={-i} r={6} />)}
      {GRID_X.map((x, i) => (
        <g key={i} transform={`translate(${x} ${PYLON_Y})`}>
          <rect x="-40" y="-34" width="80" height="68" rx="12" fill={i === stepIndex ? '#e9b949' : '#9bc4a1'} stroke={i === stepIndex ? '#2b2f2a' : '#326b65'} strokeWidth={i === stepIndex ? 5 : 2}>
            {anim && i === stepIndex && <animate attributeName="stroke-width" values="3;7;3" dur="1.4s" repeatCount="indefinite" />}
          </rect>
          <text y="4" textAnchor="middle" className="sm-note sm-note--dark">{GRID_NAMES[i]}</text>
          <text y="62" textAnchor="middle" className="sm-note sm-note--dark">{['Generate', 'Raise V', 'Transmit', 'Lower V', 'Distribute'][i]}</text>
        </g>
      ))}
      <text x="320" y="40" textAnchor="middle" className="sm-title">Electrical energy travels from the station to the users</text>
      {/* Capacitor mini-circuit */}
      <g transform="translate(0 250)">
        <rect x="60" y="0" width="520" height="110" rx="14" fill="#fff" stroke="#8a8272" strokeWidth="2" />
        <text x="76" y="24" className="sm-note sm-note--dark">Capacitor demonstration (low voltage)</text>
        <path d="M110 70 H260 M320 70 H430" stroke="#2b2f2a" strokeWidth="4" fill="none" />
        <path d="M290 40 V100 M310 40 V100" stroke="#2b2f2a" strokeWidth="6" />
        <rect x="293" y="42" width="14" height="56" fill="#3f9fc3" opacity="0">{anim && <animate attributeName="opacity" values={cap === 'charging' ? '0;.8' : '.8;0'} dur="4s" repeatCount="indefinite" />}</rect>
        <rect x="90" y="52" width="34" height="36" rx="6" fill="#58a05a" stroke="#2f6a31" strokeWidth="2" /><text x="107" y="76" textAnchor="middle" className="sm-note" style={{ fill: '#fff', stroke: 'none' }}>Cell</text>
        <rect x="430" y="52" width="60" height="36" rx="8" fill="#d9b66a" stroke="#6b4a2b" strokeWidth="2" /><text x="460" y="76" textAnchor="middle" className="sm-note sm-note--dark">Resistor</text>
        {anim && [0, 1, 2].map(i => <Tok key={i} path={cap === 'charging' ? 'M130 70 H285' : 'M315 70 H425'} dur={2} begin={-i * 0.7} fill="#2468a8" r={5} />)}
        <text x="540" y="24" textAnchor="end" className="sm-note sm-note--dark">{cap === 'charging' ? 'Charging: storing energy' : 'Discharging: releasing energy'}</text>
      </g>
    </svg>
  );
};

export const ElectricityNetworkScene: React.FC = () => {
  const [cap, setCap] = useState<'charging' | 'discharging'>('charging');
  return (
    <MotionScene
      title="The Electricity Network Engineer"
      description="Explore the electricity journey and a simple low-voltage capacitor circuit."
      steps={GRID_STEPS}
      stepMs={5000}
      extraControls={
        <div className="gh-jhs1-science-interaction">
          <strong>What is the capacitor doing?</strong>
          <ChoiceRow label="Capacitor" options={[{ id: 'charging', label: 'Charging' }, { id: 'discharging', label: 'Discharging' }]} value={cap} onChange={c => setCap(c as 'charging' | 'discharging')} />
          <div className="gh-jhs1-science-readout" aria-live="polite">
            <strong>{cap === 'charging' ? 'Storing energy' : 'Releasing energy'}</strong>
            <p>{cap === 'charging' ? 'A capacitor stores energy in an electric field as charge builds on its plates.' : 'With a suitable discharge path, a capacitor releases stored energy into the circuit. A resistor can control the rate.'}</p>
          </div>
        </div>
      }
      footer={<p>Classroom circuit activities must use teacher-approved low-voltage equipment. Never experiment with mains electricity.</p>}
    >
      {({ stepIndex, playing, reducedMotion }) => <GridArt stepIndex={stepIndex} cap={cap} playing={playing} reducedMotion={reducedMotion} />}
    </MotionScene>
  );
};

/* ---------- Magnetism and motion ---------- */
export const MAGNET_STEPS: MotionStep[] = [
  { id: 'unlike', label: 'Unlike poles', caption: 'Attraction. A north pole and a south pole attract each other.' },
  { id: 'like', label: 'Like poles', caption: 'Repulsion. Two north poles or two south poles repel each other.' },
  { id: 'fma', label: "Newton's Second Law", caption: 'F = m × a. A lighter trolley has a larger acceleration for the same force; increasing mass reduces acceleration when the resultant force stays the same.' }
];
const Magnet: React.FC<{ x: number; left: 'N' | 'S'; right: 'N' | 'S' }> = ({ x, left, right }) => (
  <g transform={`translate(${x} 130)`}>
    <rect x="-80" y="-24" width="80" height="48" fill={left === 'N' ? '#d1452f' : '#2468a8'} stroke="#2b2f2a" strokeWidth="3" />
    <rect x="0" y="-24" width="80" height="48" fill={right === 'N' ? '#d1452f' : '#2468a8'} stroke="#2b2f2a" strokeWidth="3" />
    <text x="-40" y="6" textAnchor="middle" className="sm-name" style={{ fill: '#fff', stroke: 'none' }}>{left}</text><text x="40" y="6" textAnchor="middle" className="sm-name" style={{ fill: '#fff', stroke: 'none' }}>{right}</text>
  </g>
);

const MagnetArt: React.FC<{ stepId: string; mass: number; force: number; playing: boolean; reducedMotion: boolean }> = ({ stepId, mass, force, playing, reducedMotion }) => {
  const svg = useRef<SVGSVGElement>(null);
  useSmilPause(svg, playing, reducedMotion, stepId, mass, force);
  const anim = !reducedMotion;
  const accel = force / mass;
  const xs = [0, 0.2, 0.4, 0.6, 0.8, 1].map(f => 0.5 * accel * (f * 3) ** 2 * 18);
  return (
    <svg ref={svg} className="sm-art" viewBox="0 0 640 300" role="img" aria-label={`Magnetism and motion: ${MAGNET_STEPS.find(s => s.id === stepId)?.label}`}>
      <rect width="640" height="300" fill="#f3efe6" />
      <g key={`${stepId}-${mass}-${force}`}>
        {(stepId === 'unlike' || stepId === 'like') && (
          <g>
            <g>
              <Magnet x={160} left="S" right="N" />
              {anim && <animateTransform attributeName="transform" type="translate" values={stepId === 'unlike' ? '-30 0;30 0;-30 0' : '30 0;-30 0;30 0'} dur="3s" repeatCount="indefinite" />}
            </g>
            <g>
              <Magnet x={480} left={stepId === 'unlike' ? 'S' : 'N'} right={stepId === 'unlike' ? 'N' : 'S'} />
              {anim && <animateTransform attributeName="transform" type="translate" values={stepId === 'unlike' ? '30 0;-30 0;30 0' : '-30 0;30 0;-30 0'} dur="3s" repeatCount="indefinite" />}
            </g>
            <text x="320" y="48" textAnchor="middle" className="sm-title">{stepId === 'unlike' ? 'Unlike poles attract' : 'Like poles repel'}</text>
            <path d={stepId === 'unlike' ? 'M250 200 H300 M290 192 L300 200 L290 208 M390 200 H340 M350 192 L340 200 L350 208' : 'M300 200 H250 M260 192 L250 200 L260 208 M340 200 H390 M380 192 L390 200 L380 208'} stroke="#2b2f2a" strokeWidth="5" fill="none" strokeLinecap="round" />
          </g>
        )}
        {stepId === 'fma' && (
          <g>
            <rect x="0" y="230" width="640" height="70" fill="#d8d2c2" /><rect x="0" y="230" width="640" height="5" fill="#8a8272" />
            <g>
              <rect x="80" y={190 - mass * 1.5} width={50 + mass * 2} height={40 + mass * 1.5} rx="6" fill="#d5a43b" stroke="#2b2f2a" strokeWidth="3" />
              <text x={105 + mass} y={218} textAnchor="middle" className="sm-name sm-name--sm">{mass} kg</text>
              <path d={`M${80 - force * 3 - 20} 210 H76 M66 202 L76 210 L66 218`} stroke="#b5392f" strokeWidth="6" fill="none" strokeLinecap="round" />
              {anim && <animateTransform attributeName="transform" type="translate" values={xs.map(x => `${x} 0`).join(';')} keyTimes="0;.2;.4;.6;.8;1" dur="3s" repeatCount="indefinite" />}
            </g>
            <text x="320" y="48" textAnchor="middle" className="sm-title">a = F ÷ m = {force} ÷ {mass} = {accel} m/s²</text>
          </g>
        )}
      </g>
    </svg>
  );
};

export const MagnetismMotionScene: React.FC = () => {
  const [mass, setMass] = useState(2);
  const [force, setForce] = useState(10);
  const acceleration = force / mass;
  return (
    <MotionScene
      title="The Magnetism and Motion Defender"
      description="Explore magnetic poles and use Newton’s Second Law to predict acceleration."
      steps={MAGNET_STEPS}
      stepMs={6000}
      extraControls={
        <div className="gh-jhs1-science-interaction">
          <strong>Newton’s Second Law calculator (step 3)</strong>
          <p>Choose the trolley mass and the resultant force.</p>
          <ChoiceRow label="Mass" options={[2, 5, 10].map(m => ({ id: String(m), label: `${m} kg` }))} value={String(mass)} onChange={m => setMass(Number(m))} />
          <ChoiceRow label="Force" options={[5, 10, 20].map(f => ({ id: String(f), label: `${f} N` }))} value={String(force)} onChange={f => setForce(Number(f))} />
          <div className="gh-jhs1-science-readout" aria-live="polite">
            <strong>a = F ÷ m = {force} ÷ {mass} = {acceleration} m/s²</strong>
            <p>{mass === 2 ? 'A lighter trolley has a larger acceleration for the same force.' : mass === 10 ? 'A heavier trolley has a smaller acceleration for the same force.' : 'Increasing mass reduces acceleration when the resultant force stays the same.'}</p>
          </div>
        </div>
      }
      footer={<p>F = m × a. The resultant force is measured in newtons (N), mass in kilograms (kg), and acceleration in metres per second squared (m/s²).</p>}
    >
      {({ step, playing, reducedMotion }) => <MagnetArt stepId={step.id} mass={mass} force={force} playing={playing} reducedMotion={reducedMotion} />}
    </MotionScene>
  );
};

/* ---------- JHS 1 energy forms ---------- */
type Form = { id: string; name: string; example: string; detail: string };
export const FORMS: Form[] = [
  { id: 'kinetic', name: 'Kinetic', example: 'A rolling football', detail: 'Kinetic energy is the energy of movement. Flowing water in a Ghanaian river and a moving bicycle also have kinetic energy.' },
  { id: 'potential', name: 'Gravitational potential', example: 'Water held behind Akosombo Dam', detail: 'An object can store energy because of its position. Water high behind a dam has gravitational potential energy.' },
  { id: 'chemical', name: 'Chemical', example: 'Food, charcoal and batteries', detail: 'Chemical energy is stored in substances. Food gives our bodies energy; charcoal and batteries also store chemical energy.' },
  { id: 'thermal', name: 'Thermal (heat)', example: 'Sun-warmed ground', detail: 'Thermal energy is related to the motion of particles. The Sun warms roofs, soil and water around us.' },
  { id: 'light', name: 'Light', example: 'Sunlight and a lamp', detail: 'Light energy can travel from the Sun or a lamp and can be converted by solar panels into electrical energy.' },
  { id: 'sound', name: 'Sound', example: 'A talking drum', detail: 'Sound energy is carried by vibrations through a medium such as air. A talking drum produces sound when its skin vibrates.' },
  { id: 'electrical', name: 'Electrical', example: 'A powered fan', detail: 'Electrical energy is transferred by electric currents and powers devices such as lights, phones and fans.' }
];
export const FORM_STEPS: MotionStep[] = FORMS.map(f => ({ id: f.id, label: f.name, caption: `${f.example}. ${f.detail}` }));

const FormArt: React.FC<{ id: string; playing: boolean; reducedMotion: boolean }> = ({ id, playing, reducedMotion }) => {
  const svg = useRef<SVGSVGElement>(null);
  useSmilPause(svg, playing, reducedMotion, id);
  const anim = !reducedMotion;
  const f = FORMS.find(x => x.id === id) ?? FORMS[0];
  return (
    <svg ref={svg} className="sm-art" viewBox="0 0 640 300" role="img" aria-label={`${f.name} energy: ${f.example}`}>
      <rect width="640" height="300" fill="#f3efe6" />
      <rect y="240" width="640" height="60" fill="#8fa85a" />
      <g key={id}>
        {id === 'kinetic' && (
          <g>
            <circle cx="120" cy="214" r="26" fill="#fff" stroke="#2b2f2a" strokeWidth="3">{anim && <animate attributeName="cx" values="120;520;120" keyTimes="0;.5;1" dur="4s" repeatCount="indefinite" />}</circle>
            <path d="M60 190 h40 M50 206 h50 M60 222 h40" stroke="#8a8272" strokeWidth="4" strokeLinecap="round" />
          </g>
        )}
        {id === 'potential' && (
          <g>
            <rect x="60" y="60" width="150" height="180" fill="#3e91c8" /><rect x="40" y="60" width="26" height="180" fill="#8a8272" /><rect x="40" y="46" width="170" height="16" fill="#8a8272" />
            <circle r="12" fill="#cfe6f2" stroke="#2468a8" strokeWidth="2"><animateMotion dur="2.4s" repeatCount={anim ? 'indefinite' : '1'} path="M120 80 V220" /></circle>
            <path d="M66 240 H600" stroke="#3e91c8" strokeWidth="6" strokeDasharray="12 8">{anim && <animate attributeName="stroke-dashoffset" values="0;-40" dur="1.4s" repeatCount="indefinite" />}</path>
            <Cap x={420} y={110} text="Stored water high up has potential energy" />
          </g>
        )}
        {id === 'chemical' && (
          <g>
            <rect x="170" y="110" width="70" height="110" rx="8" fill="#58a05a" stroke="#2f6a31" strokeWidth="3" /><rect x="190" y="96" width="30" height="14" fill="#2f6a31" /><text x="205" y="172" textAnchor="middle" className="sm-name" style={{ fill: '#fff', stroke: 'none' }}>+ −</text>
            <circle cx="360" cy="190" r="34" fill="#d1452f" stroke="#7a1d18" strokeWidth="3" /><path d="M360 156 q4 -18 18 -22" stroke="#2f6a31" strokeWidth="5" fill="none" />
            <path d="M470 220 l14 -40 l18 20 l14 -30 l18 50 Z" fill="#2b2b2b" />
            <circle cx="205" cy="165" r="50" fill="#e9b949" opacity=".3">{anim && <animate attributeName="r" values="40;62;40" dur="2.4s" repeatCount="indefinite" />}</circle>
            <Cap x={205} y={246} text="Battery" /><Cap x={360} y={246} text="Food" /><Cap x={490} y={246} text="Charcoal" />
          </g>
        )}
        {id === 'thermal' && (
          <g>
            <circle cx="90" cy="60" r="30" fill="#f2b93b" />
            {anim && [0, 1, 2].map(i => <path key={i} d={`M${150 + i * 40} 120 L${170 + i * 40} 218`} stroke="#f2b93b" strokeWidth="4" strokeDasharray="8 8"><animate attributeName="stroke-dashoffset" values="0;-32" dur="1.2s" repeatCount="indefinite" /></path>)}
            <rect x="80" y="216" width="480" height="24" fill="#a9803f" />
            {Array.from({ length: 9 }, (_, i) => <circle key={i} cx={110 + i * 52} cy="228" r="7" fill="#e0763a">{anim && <animate attributeName="cy" values="225;231;225;228" dur={`${0.4 + (i % 3) * 0.12}s`} repeatCount="indefinite" />}</circle>)}
            {anim && [0, 1, 2].map(i => <path key={i} d={`M${200 + i * 110} 205 q-10 -14 0 -28 q10 -14 0 -28`} fill="none" stroke="#e0763a" strokeWidth="4" strokeLinecap="round"><animate attributeName="opacity" values="1;.1;1" dur={`${1.3 + i * 0.2}s`} repeatCount="indefinite" /></path>)}
            <Cap x={320} y={270} text="Warm ground: its particles move faster" />
          </g>
        )}
        {id === 'light' && (
          <g>
            <circle cx="110" cy="80" r="34" fill="#f2b93b" stroke="#fff" strokeWidth="3" />
            {anim && [0, 1, 2, 3].map(i => <Tok key={i} path={`M140 ${90 + i * 8} L${420} ${150 + i * 30}`} dur={2.6} begin={-i * 0.65} fill="#f6d34a" r={7} />)}
            <rect x="420" y="130" width="110" height="80" rx="6" fill="#3a5a8a" stroke="#1d2a4a" strokeWidth="3" /><path d="M420 160 H530 M420 185 H530 M450 130 V210 M490 130 V210" stroke="#7aa8d8" strokeWidth="2" />
            <Cap x={475} y={236} text="Solar panel" /><Cap x={110} y={140} text="Sun" />
          </g>
        )}
        {id === 'sound' && (
          <g>
            <ellipse cx="200" cy="150" rx="70" ry="44" fill="#a9803f" stroke="#6b4a2b" strokeWidth="4" /><ellipse cx="200" cy="112" rx="64" ry="14" fill="#e8d4a8" stroke="#6b4a2b" strokeWidth="3">{anim && <animate attributeName="ry" values="14;9;14" dur=".25s" repeatCount="indefinite" />}</ellipse>
            {anim && [0, 1, 2].map(i => <circle key={i} cx="200" cy="112" r="20" fill="none" stroke="#9b7acb" strokeWidth="4"><animate attributeName="r" values="20;220" dur="2.4s" begin={`${-i * 0.8}s`} repeatCount="indefinite" /><animate attributeName="opacity" values=".9;0" dur="2.4s" begin={`${-i * 0.8}s`} repeatCount="indefinite" /></circle>)}
            <Cap x={200} y={276} text="Talking drum: the skin vibrates" />
          </g>
        )}
        {id === 'electrical' && (
          <g>
            <path d="M120 150 V80 H520 V150 V220 H120 Z" fill="none" stroke="#2b2f2a" strokeWidth="4" />
            <rect x="100" y="130" width="40" height="40" fill="#f3efe6" /><path d="M104 140 H136 M112 154 H128" stroke="#2b2f2a" strokeWidth="6" />
            {anim && [0, 1, 2, 3, 4, 5].map(i => <Tok key={i} path="M120 150 V80 H520 V150 V220 H120 Z" dur={4.8} begin={-i * 0.8} r={6} />)}
            <g transform="translate(520 150)"><g>{[0, 120, 240].map(a => <path key={a} d="M0 0 Q-14 -22 0 -40 Q14 -22 0 0" fill="#4a90c0" transform={`rotate(${a})`} />)}{anim && <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur=".8s" repeatCount="indefinite" />}</g><circle r="6" fill="#33353a" /></g>
            <Cap x={320} y={260} text="Electric current powers a fan" />
          </g>
        )}
      </g>
    </svg>
  );
};

export const EnergyFormsScene: React.FC = () => (
  <MotionScene
    title="The Energy Form Explorer"
    description="Choose an example to identify its main energy form. One situation can involve several forms at once."
    steps={FORM_STEPS}
    stepMs={5000}
    footer={<p>Ghana examples connect energy ideas to rivers, farms, homes and everyday transport.</p>}
  >
    {({ step, playing, reducedMotion }) => <FormArt id={step.id} playing={playing} reducedMotion={reducedMotion} />}
  </MotionScene>
);

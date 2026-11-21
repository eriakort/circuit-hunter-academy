import React, { useRef, useState } from 'react';
import { MotionScene, type MotionStep } from './MotionScene';
import { ChoiceRow } from './ChoiceRow';
import { Icon as BaseIcon, type Kind as BaseKind } from './ElectricityScene';
import { useSmilPause } from './useSmilPause';

type Kind = BaseKind | 'battery' | 'socket' | 'motor' | 'blades' | 'coal' | 'waves' | 'ballhigh' | 'ballfall' | 'ballmove';
type Device = { id: 'torch' | 'fan' | 'stove' | 'ball'; name: string; kinds: Kind[]; steps: MotionStep[] };

export const DEVICES: Device[] = [
  {
    id: 'torch', name: 'Torch', kinds: ['battery', 'current', 'bulb'],
    steps: [
      { id: 'chemical', label: 'Chemical', caption: 'Energy is stored chemically in the battery.' },
      { id: 'transfer', label: 'Electrical transfer', caption: 'The energy is transferred through the circuit as an electric current.' },
      { id: 'light', label: 'Light + heat', caption: 'The LED changes the electrical energy into light and some thermal energy.' }
    ]
  },
  {
    id: 'fan', name: 'Electric fan', kinds: ['socket', 'motor', 'blades'],
    steps: [
      { id: 'electrical', label: 'Electrical', caption: 'Electrical energy arrives from the supply.' },
      { id: 'motor', label: 'Motor', caption: 'The motor converts electrical energy into movement.' },
      { id: 'movement', label: 'Movement + sound + heat', caption: 'The motor converts electrical energy mainly into kinetic energy in the spinning blades. Some energy is also transferred as sound and heat.' }
    ]
  },
  {
    id: 'stove', name: 'Charcoal stove', kinds: ['coal', 'fuel', 'waves'],
    steps: [
      { id: 'chemical', label: 'Chemical', caption: 'Chemical energy is stored in charcoal.' },
      { id: 'burning', label: 'Burning fuel', caption: 'Burning releases the stored chemical energy.' },
      { id: 'heat', label: 'Heat + light', caption: 'Energy is transferred to the surroundings as thermal energy and light. Use charcoal stoves only with safe ventilation.' }
    ]
  },
  {
    id: 'ball', name: 'Falling ball', kinds: ['ballhigh', 'ballfall', 'ballmove'],
    steps: [
      { id: 'potential', label: 'Gravitational potential', caption: 'A ball held high up stores gravitational potential energy.' },
      { id: 'motion', label: 'Motion', caption: 'As the ball falls, gravitational potential energy is transferred mainly into kinetic energy.' },
      { id: 'kinetic', label: 'Kinetic', caption: 'The moving ball has kinetic energy. Air resistance also transfers some energy to the surroundings.' }
    ]
  }
];

const XS = [110, 320, 530];
const Y = 170;

const ConvIcon: React.FC<{ kind: Kind; anim: boolean }> = ({ kind, anim }) => {
  switch (kind) {
    case 'battery': return <g><rect x="-30" y="-40" width="60" height="80" rx="8" fill="#58a05a" stroke="#2f6a31" strokeWidth="3" /><rect x="-10" y="-50" width="20" height="10" fill="#2f6a31" /><text y="8" textAnchor="middle" className="sm-force" fill="#fff" stroke="none">+ −</text></g>;
    case 'socket': return <g><rect x="-36" y="-32" width="72" height="64" rx="10" fill="#eef1f4" stroke="#5c5a50" strokeWidth="3" /><rect x="-18" y="-12" width="8" height="22" fill="#33353a" /><rect x="10" y="-12" width="8" height="22" fill="#33353a" /><path d="M2 -24 L-6 -14 H0 L-4 -6" stroke="#d1a62a" strokeWidth="3" fill="none" /></g>;
    case 'motor': return <g><rect x="-40" y="-26" width="64" height="52" rx="8" fill="#7a8794" stroke="#4a5560" strokeWidth="3" /><rect x="24" y="-6" width="22" height="12" fill="#c0c6cc" /><g transform="translate(46 0)"><path d="M-6 -6 h12 M-6 0 h12 M-6 6 h12" stroke="#4a5560" strokeWidth="2"><animate attributeName="opacity" values="1;.3;1" dur=".25s" repeatCount={anim ? 'indefinite' : '1'} /></path></g></g>;
    case 'blades': return <g><circle r="42" fill="none" stroke="#c0c6cc" strokeWidth="3" strokeDasharray="3 5" /><g>{[0, 120, 240].map(a => <path key={a} d="M0 0 Q-16 -22 0 -40 Q16 -22 0 0" fill="#4a90c0" transform={`rotate(${a})`} />)}{anim && <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur=".7s" repeatCount="indefinite" />}</g><circle r="6" fill="#33353a" /></g>;
    case 'coal': return <g fill="#2b2b2b" stroke="#555" strokeWidth="2"><path d="M-40 28 L-28 0 L-6 6 L-12 30 Z" /><path d="M-6 30 L2 -8 L26 -2 L34 30 Z" /><path d="M20 30 L30 12 L44 18 L44 30 Z" /></g>;
    case 'waves': return <g><circle cy="30" r="22" fill="#f08a3a" opacity=".5" /><g stroke="#d65a3a" strokeWidth="4" fill="none" strokeLinecap="round">{[-24, 0, 24].map((x, i) => <path key={x} d={`M${x} 28 q-8 -12 0 -24 t0 -24 t0 -24`}>{anim && <animate attributeName="opacity" values="1;.2;1" dur="1.2s" begin={`${i * 0.3}s`} repeatCount="indefinite" />}</path>)}</g></g>;
    case 'ballhigh': return <g><rect x="-44" y="-8" width="88" height="10" fill="#8a6a3a" /><circle cy="-30" r="18" fill="#e9b949" stroke="#a9811b" strokeWidth="3" /><path d="M58 -40 V40 M52 -30 L58 -42 L64 -30 M52 30 L58 42 L64 30" stroke="#5c5a50" strokeWidth="2" fill="none" /><text x="-50" y="38" className="sm-note">height</text></g>;
    case 'ballfall': return <g><circle r="18" fill="#e9b949" stroke="#a9811b" strokeWidth="3">{anim && <animate attributeName="cy" values="-36;30;-36" keyTimes="0;.6;1" dur="2s" calcMode="spline" keySplines=".5 0 1 .6;0 0 .5 1" repeatCount="indefinite" />}</circle><path d="M-26 -40 v20 M26 -40 v20" stroke="#5c5a50" strokeWidth="3" opacity=".5" strokeLinecap="round" /></g>;
    case 'ballmove': return <g><circle cy="10" r="18" fill="#e9b949" stroke="#a9811b" strokeWidth="3">{anim && <animate attributeName="cx" values="-30;30;-30" keyTimes="0;.5;1" dur="1.6s" repeatCount="indefinite" />}</circle><path d="M-48 4 h22 M-52 14 h26 M-48 24 h22" stroke="#5c5a50" strokeWidth="3" strokeLinecap="round" opacity=".5" /></g>;
    default: return <BaseIcon kind={kind as BaseKind} anim={anim} />;
  }
};

const ConversionArt: React.FC<{ device: Device; stepIndex: number; playing: boolean; reducedMotion: boolean }> = ({ device, stepIndex, playing, reducedMotion }) => {
  const svg = useRef<SVGSVGElement>(null);
  useSmilPause(svg, playing, reducedMotion, device.id, stepIndex);
  const anim = !reducedMotion;
  const route = stepIndex === 0 ? '' : `M${XS[stepIndex - 1] + 62} ${Y} H${XS[stepIndex] - 62}`;
  return (
    <svg ref={svg} className="sm-art" viewBox="0 0 640 300" role="img" aria-label={`${device.name}: ${device.steps.map(s => s.label).join(' to ')}. ${device.steps[stepIndex].label} is selected.`}>
      <rect width="640" height="300" fill="#f3efe6" />
      <defs><marker id="cv-head" viewBox="0 0 10 10" refX="7" refY="5" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#5c5a50" /></marker></defs>
      {XS.slice(0, -1).map((x, i) => <path key={i} d={`M${x + 66} ${Y} H${XS[i + 1] - 70}`} className={`sm-link${stepIndex === i + 1 ? ' is-active' : ''}`} markerEnd="url(#cv-head)" />)}
      {device.kinds.map((kind, i) => (
        <g key={kind + i}>
          <g className={`sm-stage${stepIndex === i ? ' is-active' : ''}`}><rect x={XS[i] - 62} y={Y - 74} width="124" height="148" rx="16" /></g>
          <g transform={`translate(${XS[i]} ${Y - 6})`}><ConvIcon kind={kind} anim={anim} /></g>
          <text x={XS[i]} y={Y + 98} textAnchor="middle" className={`sm-organism${stepIndex === i ? ' is-active' : ''}`}>{device.steps[i].label}</text>
        </g>
      ))}
      <path id="cv-route" d={route} fill="none" stroke="none" />
      {anim && stepIndex > 0 && (
        <g key={`${device.id}-${stepIndex}`}>
          {[0, 1, 2].map(i => <circle key={i} r="7" className="sm-energy"><animateMotion dur="1.8s" begin={`${-i * 0.6}s`} repeatCount="indefinite"><mpath href="#cv-route" /></animateMotion></circle>)}
        </g>
      )}
      <text x="320" y="26" textAnchor="middle" className="sm-title">{device.name}: energy changes form, it does not vanish</text>
    </svg>
  );
};

export const ConversionScene: React.FC = () => {
  const [id, setId] = useState<Device['id']>('torch');
  const device = DEVICES.find(d => d.id === id) ?? DEVICES[0];
  return (
    <MotionScene
      key={device.id}
      title="The Energy Transformation Alchemist"
      description="Trace energy transfers in familiar devices. Energy changes form; it does not vanish."
      steps={device.steps}
      stepMs={5000}
      extraControls={<ChoiceRow label="Device" options={DEVICES.map(d => ({ id: d.id, label: d.name }))} value={device.id} onChange={value => setId(value as Device['id'])} />}
      footer="Conservation of energy: in a closed system, total energy is not created or destroyed; it is transferred or transformed."
    >
      {({ stepIndex, playing, reducedMotion }) => <ConversionArt device={device} stepIndex={stepIndex} playing={playing} reducedMotion={reducedMotion} />}
    </MotionScene>
  );
};

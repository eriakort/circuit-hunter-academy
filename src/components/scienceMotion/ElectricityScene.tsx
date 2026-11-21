import React, { useRef, useState } from 'react';
import { MotionScene, type MotionStep } from './MotionScene';
import { ChoiceRow } from './ChoiceRow';
import { useSmilPause } from './useSmilPause';

export type Kind = 'reservoir' | 'flow' | 'turbine' | 'generator' | 'fuel' | 'heat' | 'sun' | 'panel' | 'current' | 'bulb';
type Source = { id: 'hydro' | 'thermal' | 'solar'; name: string; kinds: Kind[]; steps: MotionStep[]; detail: string; tradeoff: string };

export const SOURCES: Source[] = [
  {
    id: 'hydro', name: 'Hydroelectricity', kinds: ['reservoir', 'flow', 'turbine', 'generator'],
    steps: [
      { id: 'stored', label: 'Stored water', caption: 'Water stored in a reservoir behind a dam has gravitational potential energy.' },
      { id: 'flowing', label: 'Flowing water', caption: 'Released water flows downhill and gains kinetic energy.' },
      { id: 'turbine', label: 'Turbine', caption: 'The moving water pushes the turbine blades round.' },
      { id: 'generator', label: 'Generator', caption: 'The turbine drives a generator that produces electricity.' }
    ],
    detail: 'Water released from a reservoir turns a turbine. The turbine drives a generator that produces electricity. Akosombo and Kpong are Ghanaian examples.',
    tradeoff: 'Dams provide large amounts of power, but can change river habitats and affect communities.'
  },
  {
    id: 'thermal', name: 'Thermal power', kinds: ['fuel', 'heat', 'turbine', 'generator'],
    steps: [
      { id: 'fuel', label: 'Fuel', caption: 'A fuel such as natural gas stores chemical energy.' },
      { id: 'heat', label: 'Heat or engine', caption: 'Burning the fuel produces heat, or drives an engine.' },
      { id: 'turbine', label: 'Turbine / engine', caption: 'Hot gases or steam push a turbine, or the engine turns, spinning a shaft.' },
      { id: 'generator', label: 'Generator', caption: 'The turbine or engine turns a generator that produces electricity.' }
    ],
    detail: 'Fuel such as natural gas is used to produce heat or drive an engine connected to a generator.',
    tradeoff: 'Thermal stations can provide dependable power, but burning fuel releases greenhouse gases and air pollutants.'
  },
  {
    id: 'solar', name: 'Solar photovoltaic', kinds: ['sun', 'panel', 'current', 'bulb'],
    steps: [
      { id: 'sunlight', label: 'Sunlight', caption: 'Sunlight carries light energy to the panels.' },
      { id: 'cells', label: 'Solar cells', caption: 'Solar cells convert light directly into electrical energy.' },
      { id: 'current', label: 'Electric current', caption: 'The electrical energy flows as an electric current through wires.' },
      { id: 'devices', label: 'Useful devices', caption: 'The current powers lights, phones, fans and other devices.' }
    ],
    detail: 'Solar cells convert light directly into electrical energy. Panels can supply homes, schools and clinics, especially where sunlight is available.',
    tradeoff: 'Solar power produces no exhaust while operating, but output changes with sunlight and storage may be needed.'
  }
];

const XS = [80, 240, 400, 560];
const Y = 170;

const Spin: React.FC<{ seconds: number; anim: boolean }> = ({ seconds, anim }) => (anim ? <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur={`${seconds}s`} repeatCount="indefinite" /> : null);

export const Icon: React.FC<{ kind: Kind; anim: boolean }> = ({ kind, anim }) => {
  switch (kind) {
    case 'reservoir': return <g><rect x="-48" y="-46" width="96" height="84" rx="6" fill="#bfe3f2" stroke="#3f9fc3" strokeWidth="3" /><path d="M-48 -18 q12 -8 24 0 t24 0 t24 0 t24 0 V38 H-48Z" fill="#3f9fc3" /><rect x="-58" y="-52" width="12" height="96" fill="#8a8a82" /></g>;
    case 'flow': return <g><path d="M-44 -30 L40 30" stroke="#8a8a82" strokeWidth="26" strokeLinecap="round" /><path d="M-44 -30 L40 30" stroke="#3f9fc3" strokeWidth="14" strokeLinecap="round" strokeDasharray="12 10"><animate attributeName="stroke-dashoffset" values="0;-22" dur=".6s" repeatCount="indefinite" /></path></g>;
    case 'turbine': return <g><circle r="42" fill="#eef1f4" stroke="#5c5a50" strokeWidth="3" /><g>{[0, 90, 180, 270].map(a => <path key={a} d="M0 0 L-9 -36 Q0 -42 9 -36 Z" fill="#5c7080" transform={`rotate(${a})`} />)}<Spin seconds={1.4} anim={anim} /></g><circle r="6" fill="#33353a" /></g>;
    case 'generator': return <g><rect x="-44" y="-34" width="88" height="68" rx="10" fill="#f2c84a" stroke="#8a6d12" strokeWidth="3" /><path d="M6 -22 L-10 4 H2 L-6 24 L14 -6 H2 Z" fill="#8a3b00" /><circle cx="0" cy="0" r="30" fill="none" stroke="#8a6d12" strokeWidth="2" strokeDasharray="4 6" /></g>;
    case 'fuel': return <g><rect x="-38" y="6" width="76" height="30" rx="6" fill="#4b4b4b" /><path d="M0 -40 q22 22 0 44 q-22 -22 0 -44 Z" fill="#f08a3a"><animate attributeName="opacity" values="1;.7;1" dur=".5s" repeatCount="indefinite" /></path><path d="M0 -18 q10 12 0 24 q-10 -12 0 -24 Z" fill="#f7d36a" /></g>;
    case 'heat': return <g><rect x="-40" y="-8" width="80" height="44" rx="8" fill="#9a9a94" stroke="#5c5a50" strokeWidth="3" /><path d="M-18 -14 q-8 -12 0 -24 M0 -14 q-8 -12 0 -24 M18 -14 q-8 -12 0 -24" stroke="#d65a3a" strokeWidth="4" fill="none" strokeLinecap="round"><animate attributeName="opacity" values="1;.3;1" dur="1s" repeatCount="indefinite" /></path></g>;
    case 'sun': return <g><circle r="26" fill="#f2b93b" />{Array.from({ length: 8 }, (_, i) => { const a = (i * Math.PI) / 4; return <line key={i} x1={Math.cos(a) * 34} y1={Math.sin(a) * 34} x2={Math.cos(a) * 46} y2={Math.sin(a) * 46} stroke="#e9a93a" strokeWidth="5" strokeLinecap="round" />; })}</g>;
    case 'panel': return <g><path d="M-46 24 L-30 -34 H46 L30 24 Z" fill="#274a7a" stroke="#9fb7d6" strokeWidth="3" /><path d="M-38 -10 H38 M-10 -34 L-18 24 M16 -34 L10 24" stroke="#9fb7d6" strokeWidth="2" /></g>;
    case 'current': return <g><path d="M-44 0 H44" stroke="#33353a" strokeWidth="6" /><path d="M-44 0 H44" stroke="#f2c84a" strokeWidth="6" strokeDasharray="4 14" strokeLinecap="round"><animate attributeName="stroke-dashoffset" values="0;-18" dur=".5s" repeatCount="indefinite" /></path></g>;
    case 'bulb': return <g><circle r="26" fill="#ffe27a"><animate attributeName="opacity" values="1;.75;1" dur="1.2s" repeatCount="indefinite" /></circle><rect x="-12" y="24" width="24" height="14" rx="3" fill="#8a8a82" /><path d="M-6 6 L0 -6 L6 6" stroke="#b9852a" strokeWidth="2" fill="none" /></g>;
  }
};

const ElectricityArt: React.FC<{ source: Source; stepIndex: number; playing: boolean; reducedMotion: boolean }> = ({ source, stepIndex, playing, reducedMotion }) => {
  const svg = useRef<SVGSVGElement>(null);
  useSmilPause(svg, playing, reducedMotion, source.id, stepIndex);
  const anim = !reducedMotion;
  const route = stepIndex === 0 ? '' : `M${XS[stepIndex - 1] + 60} ${Y} H${XS[stepIndex] - 60}`;
  return (
    <svg ref={svg} className="sm-art" viewBox="0 0 640 300" role="img" aria-label={`${source.name}: ${source.steps.map(s => s.label).join(' to ')}. ${source.steps[stepIndex].label} is selected.`}>
      <rect width="640" height="300" fill="#e9f1f6" />
      {XS.slice(0, -1).map((x, i) => <path key={i} d={`M${x + 62} ${Y} H${XS[i + 1] - 68}`} className={`sm-link${stepIndex === i + 1 ? ' is-active' : ''}`} markerEnd="url(#el-head)" />)}
      <defs><marker id="el-head" viewBox="0 0 10 10" refX="7" refY="5" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#5c5a50" /></marker></defs>
      {source.kinds.map((kind, i) => (
        <g key={kind + i}>
          <g className={`sm-stage${stepIndex === i ? ' is-active' : ''}`}>
            <rect x={XS[i] - 60} y={Y - 74} width="120" height="148" rx="16" />
          </g>
          <g transform={`translate(${XS[i]} ${Y - 6}) scale(.9)`}><Icon kind={kind} anim={anim} /></g>
          <text x={XS[i]} y={Y + 98} textAnchor="middle" className={`sm-organism${stepIndex === i ? ' is-active' : ''}`}>{i + 1}. {source.steps[i].label}</text>
        </g>
      ))}
      <path id="el-route" d={route} fill="none" stroke="none" />
      {anim && stepIndex > 0 && (
        <g key={`${source.id}-${stepIndex}`}>
          {[0, 1, 2].map(i => <circle key={i} r="7" className="sm-energy"><animateMotion dur="2s" begin={`${-i * 0.66}s`} repeatCount="indefinite"><mpath href="#el-route" /></animateMotion></circle>)}
        </g>
      )}
      <text x="320" y="26" textAnchor="middle" className="sm-title">{source.name}: from energy source to electricity</text>
    </svg>
  );
};

export const ElectricityScene: React.FC = () => {
  const [id, setId] = useState<Source['id']>('hydro');
  const source = SOURCES.find(s => s.id === id) ?? SOURCES[0];
  return (
    <MotionScene
      key={source.id}
      title="The Electricity Generation Guardian"
      description="Select a generation method and trace how electricity is produced."
      steps={source.steps}
      stepMs={5000}
      extraControls={
        <>
          <ChoiceRow label="Generation method" options={SOURCES.map(s => ({ id: s.id, label: s.name }))} value={source.id} onChange={value => setId(value as Source['id'])} />
          <div className="gh-jhs1-science-readout" aria-live="polite"><strong>{source.name}</strong><p>{source.detail}</p><p>{source.tradeoff}</p></div>
        </>
      }
      footer="Compare reliability, cost, available resources and environmental effects before choosing an energy source."
    >
      {({ stepIndex, playing, reducedMotion }) => <ElectricityArt source={source} stepIndex={stepIndex} playing={playing} reducedMotion={reducedMotion} />}
    </MotionScene>
  );
};

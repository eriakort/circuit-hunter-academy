import React, { useRef, useState } from 'react';
import { MotionScene, type MotionStep } from './MotionScene';
import { ChoiceRow } from './ChoiceRow';
import { useSmilPause } from './useSmilPause';

export type Organism = { id: 'fly' | 'plant' | 'chicken' | 'mosquito'; name: string; steps: MotionStep[]; hint: string };

export const ORGANISMS: Organism[] = [
  {
    id: 'fly', name: 'Housefly', hint: 'Cover food, wash hands and dispose of waste safely to reduce contact between flies and food.',
    steps: [
      { id: 'egg', label: 'Egg', caption: 'An adult fly lays eggs, often on moist decaying waste.' },
      { id: 'larva', label: 'Larva (maggot)', caption: 'The larva feeds and grows. It is commonly called a maggot.' },
      { id: 'pupa', label: 'Pupa', caption: 'The pupa is a resting stage in which the adult body develops.' },
      { id: 'adult', label: 'Adult', caption: 'The adult emerges and can reproduce, beginning the cycle again.' }
    ]
  },
  {
    id: 'plant', name: 'Maize plant', hint: 'A plant needs light, water, air, nutrients and space to grow well.',
    steps: [
      { id: 'seed', label: 'Seed', caption: 'A viable maize seed contains an embryo and stored food.' },
      { id: 'germination', label: 'Germination', caption: 'With suitable water, air and warmth, the embryo begins to grow.' },
      { id: 'seedling', label: 'Seedling', caption: 'The young seedling develops roots and leaves.' },
      { id: 'mature', label: 'Mature plant', caption: 'The plant grows, using light, water, air and nutrients.' },
      { id: 'flower', label: 'Flower and seed', caption: 'Flowers develop and produce seeds for another generation.' }
    ]
  },
  {
    id: 'chicken', name: 'Chicken', hint: 'Not all animals have the same life cycle. A butterfly and a housefly have egg, larva, pupa and adult stages.',
    steps: [
      { id: 'egg', label: 'Egg', caption: 'A fertilised egg can contain a developing embryo.' },
      { id: 'hatch', label: 'Hatching chick', caption: 'After incubation, a chick hatches from the egg.' },
      { id: 'young', label: 'Young chicken', caption: 'The chick grows feathers and becomes a young chicken.' },
      { id: 'adult', label: 'Adult hen or rooster', caption: 'An adult chicken can reproduce and begin another generation.' }
    ]
  }
];

export const Icon: React.FC<{ organism: Organism['id']; stage: string }> = ({ organism, stage }) => {
  const key = `${organism}:${stage}`;
  switch (key) {
    case 'fly:egg': return <ellipse rx="10" ry="15" fill="#f8f4e8" stroke="#b9ae92" strokeWidth="2" />;
    case 'fly:larva': return <g><rect x="-22" y="-8" width="44" height="16" rx="8" fill="#efe6c6" stroke="#b9ae92" strokeWidth="2" /><path d="M-8 -7v14M2 -7v14M12 -7v14" stroke="#b9ae92" strokeWidth="1.5" /></g>;
    case 'fly:pupa': return <g><ellipse rx="11" ry="19" fill="#8a5a2b" stroke="#5a3a1a" strokeWidth="2" /><path d="M-9 -7h18M-10 0h20M-9 7h18" stroke="#5a3a1a" strokeWidth="1.5" /></g>;
    case 'fly:adult': return <g><ellipse rx="14" ry="7" fill="#33353a" /><circle cx="15" cy="0" r="6" fill="#33353a" /><circle cx="18" cy="-2" r="2.4" fill="#c0392b" /><ellipse cx="-2" cy="-8" rx="13" ry="7" fill="#9ecbe8" opacity=".75"><animate attributeName="ry" values="8;2;8" dur=".3s" repeatCount="indefinite" /></ellipse></g>;
    case 'plant:seed': return <path d="M-9 -12 Q0 -16 9 -12 L6 12 Q0 15 -6 12 Z" fill="#e6b93a" stroke="#a9811b" strokeWidth="2" />;
    case 'plant:germination': return <g><path d="M-8 4 Q0 -2 8 4 L5 16 Q0 18 -5 16 Z" fill="#e6b93a" stroke="#a9811b" strokeWidth="2" /><path d="M0 16 Q-4 24 -2 30" stroke="#e8d6b0" strokeWidth="3" fill="none" strokeLinecap="round" /><path d="M2 4 Q6 -8 4 -16" stroke="#6bb35f" strokeWidth="3" fill="none" strokeLinecap="round" /></g>;
    case 'plant:seedling': return <g><path d="M0 22 V-6" stroke="#3f8a4a" strokeWidth="4" /><path d="M0 4 q-16 -2 -18 -16 q16 0 18 16 M0 -4 q16 -2 18 -16 q-16 0 -18 16" fill="#5aa35f" /><path d="M0 22 q-8 6 -10 10 M0 22 q6 6 8 10" stroke="#e8d6b0" strokeWidth="2.5" fill="none" /></g>;
    case 'plant:mature': return <g><path d="M0 26 V-24" stroke="#3f8a4a" strokeWidth="5" /><path d="M0 14 q-24 -4 -28 -24 M0 2 q24 -4 28 -24 M0 -10 q-16 -6 -18 -20" stroke="#5aa35f" strokeWidth="5" fill="none" strokeLinecap="round" /><ellipse cx="6" cy="8" rx="5" ry="10" fill="#e6b93a" /></g>;
    case 'plant:flower': return <g><path d="M0 26 V-6" stroke="#3f8a4a" strokeWidth="5" /><path d="M0 -6 V-26 M0 -10 l-10 -14 M0 -10 l10 -14" stroke="#b58b2a" strokeWidth="3" fill="none" strokeLinecap="round" /><ellipse cx="8" cy="10" rx="5" ry="10" fill="#e6b93a" stroke="#a9811b" strokeWidth="1.5" /><circle cx="-10" cy="-26" r="2.5" fill="#e6b93a" /><circle cx="10" cy="-26" r="2.5" fill="#e6b93a" /></g>;
    case 'chicken:egg': return <ellipse rx="12" ry="16" fill="#ecd7b5" stroke="#b79a6a" strokeWidth="2" />;
    case 'chicken:hatch': return <g><path d="M-14 4 L-8 -4 L-3 4 L3 -4 L8 4 L14 -4 V8 Q14 22 0 22 Q-14 22 -14 8 Z" fill="#ecd7b5" stroke="#b79a6a" strokeWidth="2" /><circle cx="0" cy="-8" r="9" fill="#f6d34a" /><circle cx="3" cy="-10" r="1.8" fill="#222" /><path d="M8 -7 l6 2 l-6 2" fill="#e08a3c" /></g>;
    case 'chicken:young': return <g><ellipse cx="0" cy="8" rx="16" ry="12" fill="#e8c35a" /><circle cx="12" cy="-8" r="8" fill="#e8c35a" /><circle cx="14" cy="-10" r="1.8" fill="#222" /><path d="M19 -8 l7 2 l-7 2" fill="#e08a3c" /><path d="M-4 20 v8 M6 20 v8" stroke="#e08a3c" strokeWidth="2.5" /></g>;
    case 'chicken:adult': return <g><ellipse cx="-2" cy="6" rx="22" ry="15" fill="#a8582e" /><path d="M-22 -2 q-10 -16 2 -22 q-2 10 6 12" fill="#7a3a1a" /><circle cx="16" cy="-10" r="9" fill="#a8582e" /><path d="M12 -19 q4 -8 8 0 q4 -6 6 2" fill="#c0392b" /><circle cx="19" cy="-12" r="1.8" fill="#222" /><path d="M24 -9 l8 2 l-8 3" fill="#e08a3c" /><path d="M-6 20 v10 M8 20 v10" stroke="#e08a3c" strokeWidth="3" /></g>;
    case 'mosquito:egg': return <g><path d="M-34 22 h68" stroke="#3f9fc3" strokeWidth="4" /><g fill="#4a4a42">{[-24, -8, 8, 24].map(x => <ellipse key={x} cx={x} cy="12" rx="4" ry="9" />)}</g></g>;
    case 'mosquito:larva': return <g><path d="M-34 -20 h68" stroke="#3f9fc3" strokeWidth="4" /><path d="M-18 -18 q4 20 20 26 q22 4 26 -6" stroke="#7a6a4a" strokeWidth="8" fill="none" strokeLinecap="round" /><path d="M-18 -18 v-6" stroke="#7a6a4a" strokeWidth="3" /></g>;
    case 'mosquito:pupa': return <g><path d="M-34 -22 h68" stroke="#3f9fc3" strokeWidth="4" /><path d="M-6 -8 q-16 8 -8 22 q10 12 22 2 q4 -8 -4 -14 q-8 -4 -10 -10 Z" fill="#8a6a4a" stroke="#5a3f27" strokeWidth="2" /></g>;
    case 'mosquito:adult': return <g><ellipse cx="-4" cy="2" rx="18" ry="5" fill="#4a4a42" /><circle cx="16" cy="0" r="5" fill="#4a4a42" /><path d="M20 2 l16 8" stroke="#4a4a42" strokeWidth="2" /><ellipse cx="-6" cy="-8" rx="14" ry="5" fill="#9ecbe8" opacity=".75"><animate attributeName="ry" values="6;1;6" dur=".18s" repeatCount="indefinite" /></ellipse><path d="M-14 6 l-10 16 M-4 7 l-2 18 M6 6 l8 16" stroke="#4a4a42" strokeWidth="1.8" fill="none" /></g>;
    default: return null;
  }
};

export const LifeCycleArt: React.FC<{ organism: Organism; stepIndex: number; playing: boolean; reducedMotion: boolean }> = ({ organism, stepIndex, playing, reducedMotion }) => {
  const svg = useRef<SVGSVGElement>(null);
  useSmilPause(svg, playing, reducedMotion, organism.id);
  const n = organism.steps.length;
  const cx = 320, cy = 160, rx = 230, ry = 112;
  const pos = organism.steps.map((_, i) => { const a = -Math.PI / 2 + (i * 2 * Math.PI) / n; return [cx + rx * Math.cos(a), cy + ry * Math.sin(a)] as const; });
  const track = `M${cx} ${cy - ry} A${rx} ${ry} 0 1 1 ${cx} ${cy + ry} A${rx} ${ry} 0 1 1 ${cx} ${cy - ry}`;
  return (
    <svg ref={svg} className="sm-art" viewBox="0 0 640 340" role="img" aria-label={`Life cycle of a ${organism.name}: ${organism.steps.map(s => s.label).join(', then ')}. ${organism.steps[stepIndex].label} is selected.`}>
      <rect width="640" height="340" fill="#eef5e6" />
      <path id="lc-track" d={track} fill="none" stroke="#5c5a50" strokeWidth="3" strokeDasharray="7 7" opacity=".45" />
      <text x={cx} y={cy + 6} textAnchor="middle" className="sm-title">{organism.name} life cycle</text>
      <text x={cx} y={cy + 24} textAnchor="middle" className="sm-note">and round again</text>
      {!reducedMotion && (
        <circle r="8" className="sm-energy">
          <animateMotion dur={`${n * 3}s`} repeatCount="indefinite" rotate="0"><mpath href="#lc-track" /></animateMotion>
        </circle>
      )}
      {organism.steps.map((step, i) => {
        const [x, y] = pos[i];
        const active = i === stepIndex;
        return (
          <g key={step.id} transform={`translate(${x} ${y})`}>
            <circle r="42" className={`sm-bubble${active ? ' is-active' : ''}`} />
            <g transform={active ? 'scale(1.15)' : undefined}><Icon organism={organism.id} stage={step.id} /></g>
            <text y="62" textAnchor="middle" className={`sm-organism${active ? ' is-active' : ''}`}>{i + 1}. {step.label}</text>
          </g>
        );
      })}
    </svg>
  );
};

export const LifeCycleScene: React.FC = () => {
  const [id, setId] = useState<Organism['id']>('fly');
  const organism = ORGANISMS.find(o => o.id === id) ?? ORGANISMS[0];
  return (
    <MotionScene
      key={organism.id}
      title="The Life Cycle Guardian"
      description="Select an organism and follow its life cycle round the loop. Different living things have different stages."
      steps={organism.steps}
      stepMs={5000}
      extraControls={<ChoiceRow label="Organism" options={ORGANISMS.map(o => ({ id: o.id, label: o.name }))} value={organism.id} onChange={value => setId(value as Organism['id'])} />}
      footer={organism.hint}
    >
      {({ stepIndex, playing, reducedMotion }) => <LifeCycleArt organism={organism} stepIndex={stepIndex} playing={playing} reducedMotion={reducedMotion} />}
    </MotionScene>
  );
};

const MOSQUITO: Organism = {
  id: 'mosquito', name: 'Anopheles mosquito', hint: 'Use insecticide-treated nets as directed and remove standing water safely. Never breed or handle mosquitoes as a home experiment.',
  steps: [
    { id: 'egg', label: 'Egg', caption: 'A female Anopheles mosquito lays eggs on water. The eggs hatch into larvae.' },
    { id: 'larva', label: 'Larva', caption: 'The larva lives in water, feeds and grows. It must come to the surface to breathe.' },
    { id: 'pupa', label: 'Pupa', caption: 'The pupa remains in water while the adult mosquito develops. It does not feed.' },
    { id: 'adult', label: 'Adult', caption: 'An adult mosquito emerges. An infected female Anopheles can transmit malaria parasites when she bites.' }
  ]
};

export const MosquitoLifeCycleScene: React.FC = () => (
  <MotionScene
    title="The Mosquito Life-Cycle Defender"
    description="Follow the four stages of the Anopheles mosquito life cycle in order."
    steps={MOSQUITO.steps}
    footer={MOSQUITO.hint}
  >
    {({ stepIndex, playing, reducedMotion }) => <LifeCycleArt organism={MOSQUITO} stepIndex={stepIndex} playing={playing} reducedMotion={reducedMotion} />}
  </MotionScene>
);

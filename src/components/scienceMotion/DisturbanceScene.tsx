import React, { useRef } from 'react';
import { MotionScene, type MotionStep } from './MotionScene';
import { MoreDetails } from './MoreDetails';
import { Icon, type Kind } from './EcosystemScene';
import { useSmilPause } from './useSmilPause';

type Disturbance = { step: MotionStep; hit: number; after: number[] };

const ORGANISMS: { kind: Kind; label: string; role: string }[] = [
  { kind: 'grass', label: 'Grass', role: 'Producer' },
  { kind: 'grasshopper', label: 'Grasshopper', role: 'Primary consumer' },
  { kind: 'lizard', label: 'Lizard', role: 'Secondary consumer' },
  { kind: 'hawk', label: 'Hawk', role: 'Predator' }
];

// Relative population levels (0 to 1). They show the direction of change only, not real numbers.
const BASE = 0.7;
export const DISTURBANCES: Disturbance[] = [
  {
    hit: 0, after: [0.22, 0.5, 0.55, 0.6],
    step: { id: 'grass', label: 'Fewer grass plants', caption: 'A drought or habitat damage reduces the producer population. Grasshoppers have less food, so their population may fall. Lizards may then have fewer grasshoppers to eat. Hawks may be affected as prey becomes less available. A change at the start of a food chain can affect several populations.' }
  },
  {
    hit: 1, after: [0.95, 0.22, 0.5, 0.58],
    step: { id: 'grasshopper', label: 'Fewer grasshoppers', caption: 'A pesticide or other disturbance reduces the primary consumer population. Grass may increase because fewer grasshoppers eat it. Lizards have less food and may decrease or switch prey. Hawks may also be affected if lizards become less available.' }
  },
  {
    hit: 2, after: [0.5, 0.95, 0.22, 0.55],
    step: { id: 'lizard', label: 'Fewer lizards', caption: 'Habitat loss or hunting reduces the secondary consumer population. Grasshoppers may increase because fewer lizards eat them. More grasshoppers may eat more grass. Hawks may have less lizard prey and may hunt other animals. Predators help regulate prey populations.' }
  }
];

const XS = [100, 250, 400, 550];
const ICON_Y = 120;
const BAR_BASE = 318;
const BAR_MAX = 100;

const DisturbanceArt: React.FC<{ index: number; playing: boolean; reducedMotion: boolean }> = ({ index, playing, reducedMotion }) => {
  const svg = useRef<SVGSVGElement>(null);
  useSmilPause(svg, playing, reducedMotion, index);
  const d = DISTURBANCES[index];
  return (
    <svg ref={svg} className="sm-art" viewBox="0 0 640 360" role="img" aria-label={`Grassland food chain: grass, grasshopper, lizard, hawk. Disturbance: ${d.step.label}. Bars show how each population may change.`}>
      <rect width="640" height="360" fill="#eaf3e0" />
      <text x="320" y="24" textAnchor="middle" className="sm-title">Energy moves along the arrows. Bars show the population idea over time (not real numbers).</text>
      {XS.slice(0, -1).map((x, i) => <path key={i} d={`M${x + 46} ${ICON_Y} H${XS[i + 1] - 52}`} className="sm-link" markerEnd="url(#db-head)" />)}
      <defs><marker id="db-head" viewBox="0 0 10 10" refX="7" refY="5" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#5c5a50" /></marker></defs>
      {ORGANISMS.map((organism, i) => {
        const hit = i === d.hit;
        const baseH = BASE * BAR_MAX;
        const afterH = d.after[i] * BAR_MAX;
        const change = d.after[i] > BASE + 0.05 ? '↑ may rise' : d.after[i] < BASE - 0.05 ? '↓ may fall' : '';
        return (
          <g key={organism.kind}>
            <circle cx={XS[i]} cy={ICON_Y} r="46" className={`sm-bubble${hit ? ' is-hit' : ''}`} />
            <Icon kind={organism.kind} x={XS[i]} y={ICON_Y} />
            <text x={XS[i]} y={ICON_Y + 66} textAnchor="middle" className="sm-organism">{organism.label}</text>
            <text x={XS[i]} y={ICON_Y + 82} textAnchor="middle" className="sm-note">{organism.role}</text>
            {/* Population bar */}
            <rect x={XS[i] - 24} y={BAR_BASE - BAR_MAX} width="48" height={BAR_MAX} rx="4" fill="#fff" opacity=".6" />
            <line x1={XS[i] - 28} x2={XS[i] + 28} y1={BAR_BASE - baseH} y2={BAR_BASE - baseH} stroke="#5c5a50" strokeDasharray="4 3" />
            <rect x={XS[i] - 24} y={BAR_BASE - (reducedMotion ? afterH : baseH)} width="48" height={reducedMotion ? afterH : baseH} rx="4" fill={hit ? '#c0463c' : '#4f9a5a'}>
              {!reducedMotion && <animate attributeName="y" values={`${BAR_BASE - baseH};${BAR_BASE - baseH};${BAR_BASE - afterH};${BAR_BASE - afterH};${BAR_BASE - baseH}`} keyTimes="0;.2;.4;.85;1" dur="7s" repeatCount="indefinite" />}
              {!reducedMotion && <animate attributeName="height" values={`${baseH};${baseH};${afterH};${afterH};${baseH}`} keyTimes="0;.2;.4;.85;1" dur="7s" repeatCount="indefinite" />}
            </rect>
            <text x={XS[i]} y={BAR_BASE + 16} textAnchor="middle" className="sm-force" fill={hit ? '#b5392f' : '#1f6b4f'}>{hit ? 'disturbed' : change}</text>
          </g>
        );
      })}
      <text x="40" y="354" className="sm-note">Decomposers recycle nutrients from dead organisms and waste.</text>
    </svg>
  );
};

export const DisturbanceScene: React.FC = () => (
  <MotionScene
    title="The Ecosystem Balance Explorer"
    description="Explore how living things depend on one another and how a change in one population can affect a whole food web."
    steps={DISTURBANCES.map(d => d.step)}
    stepMs={8000}
    footer={
      <>
        <p>This simplified grassland food web is a learning model. Real ecosystems contain many more species and feeding relationships.</p>
        <MoreDetails summary="Food chains, and living and non-living components">
          <p>Energy moves from the food source to the organism that eats it. The arrows point in the direction of energy transfer.</p>
          <p><b>Producer:</b> grass makes food using light energy. <b>Consumers:</b> grasshoppers eat plants, lizards eat insects and hawks may eat lizards.</p>
          <p><b>Biotic (living):</b> plants, animals, fungi and microorganisms. <b>Abiotic (non-living):</b> sunlight, water, air, soil and temperature.</p>
          <p><b>Habitat:</b> the place where an organism lives. <b>Ecosystem:</b> the living community, non-living environment and the interactions between them.</p>
          <p><b>Decomposers:</b> fungi and bacteria break down dead material and return nutrients to the environment.</p>
        </MoreDetails>
        <MoreDetails summary="Protect ecosystem balance">
          <p>Droughts, floods and fires can change habitats. Human activities such as pollution, bush burning, overhunting, mining and careless pesticide use can also disrupt food webs.</p>
          <p>Protect habitats, avoid pollution, use farm chemicals carefully and practise sustainable farming. Every species has a role in the ecosystem.</p>
        </MoreDetails>
      </>
    }
  >
    {({ stepIndex, playing, reducedMotion }) => <DisturbanceArt index={stepIndex} playing={playing} reducedMotion={reducedMotion} />}
  </MotionScene>
);

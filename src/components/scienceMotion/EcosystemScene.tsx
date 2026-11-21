import React, { useRef, useState } from 'react';
import { MotionScene, type MotionStep } from './MotionScene';
import { useSmilPause } from './useSmilPause';

type Habitat = { id: 'savanna' | 'pond'; name: string; kinds: Kind[]; steps: MotionStep[]; roles?: string[] };
export type Kind = 'grass' | 'grasshopper' | 'frog' | 'snake' | 'algae' | 'insect' | 'smallfish' | 'bigfish' | 'lizard' | 'hawk';

export const HABITATS: Habitat[] = [
  {
    id: 'savanna', name: 'Ghanaian savanna', kinds: ['grass', 'grasshopper', 'frog', 'snake'],
    steps: [
      { id: 'grass', label: 'Grass', caption: 'Grass is a producer: it makes food using sunlight.' },
      { id: 'grasshopper', label: 'Grasshopper', caption: 'A grasshopper is a consumer that feeds on plants.' },
      { id: 'frog', label: 'Frog', caption: 'A frog eats insects and transfers energy along the food chain.' },
      { id: 'snake', label: 'Snake', caption: 'A snake may prey on frogs; changes in one population can affect others.' }
    ]
  },
  {
    id: 'pond', name: 'Freshwater pond', kinds: ['algae', 'insect', 'smallfish', 'bigfish'],
    steps: [
      { id: 'algae', label: 'Algae', caption: 'Algae use light to make food.' },
      { id: 'insect', label: 'Water insect', caption: 'Water insects feed on algae or plant material.' },
      { id: 'smallfish', label: 'Small fish', caption: 'Small fish may eat aquatic insects.' },
      { id: 'bigfish', label: 'Large fish', caption: 'Larger fish may feed on smaller fish.' }
    ]
  }
];

const X = [100, 250, 400, 550];
const Y = 250;

export const Icon: React.FC<{ kind: Kind; x: number; y?: number }> = ({ kind, x, y = Y }) => {
  const g = (children: React.ReactNode) => <g transform={`translate(${x} ${y})`}>{children}</g>;
  switch (kind) {
    case 'grass': return g(<g stroke="#3f8a4a" strokeWidth="5" strokeLinecap="round" fill="none"><path d="M-16 18 Q-20 -6 -26 -22" /><path d="M-6 18 Q-6 -10 -4 -30" /><path d="M6 18 Q8 -8 16 -26" /><path d="M16 18 Q22 0 30 -12" /></g>);
    case 'grasshopper': return g(<><ellipse cx="0" cy="0" rx="26" ry="9" fill="#7fb04a" /><circle cx="24" cy="-4" r="8" fill="#7fb04a" /><circle cx="27" cy="-6" r="2" fill="#173b39" /><path d="M-16 4 L-26 -16 L-6 16 M-16 4 L-30 20" stroke="#4f7a2e" strokeWidth="3" fill="none" /><path d="M28 -10 q8 -14 18 -14" stroke="#4f7a2e" strokeWidth="2" fill="none" /></>);
    case 'frog': return g(<><ellipse cx="0" cy="6" rx="26" ry="16" fill="#58a05a" /><circle cx="-12" cy="-10" r="8" fill="#58a05a" /><circle cx="12" cy="-10" r="8" fill="#58a05a" /><circle cx="-12" cy="-11" r="3" fill="#173b39" /><circle cx="12" cy="-11" r="3" fill="#173b39" /><path d="M-22 18 q-10 8 -2 10 M22 18 q10 8 2 10" stroke="#3b7a3e" strokeWidth="4" fill="none" strokeLinecap="round" /></>);
    case 'snake': return g(<><path d="M-30 12 q10 -22 20 0 t20 0 t20 -4" stroke="#b9843c" strokeWidth="9" fill="none" strokeLinecap="round" /><circle cx="32" cy="-2" r="7" fill="#b9843c" /><circle cx="34" cy="-4" r="1.8" fill="#173b39" /><path d="M38 0 l8 2" stroke="#c0392b" strokeWidth="2" /></>);
    case 'algae': return g(<g fill="#4c9a4a"><circle cx="-16" cy="6" r="12" /><circle cx="6" cy="-4" r="14" /><circle cx="22" cy="10" r="10" /><circle cx="-2" cy="14" r="9" fill="#6bb35f" /></g>);
    case 'insect': return g(<><ellipse cx="0" cy="0" rx="20" ry="9" fill="#7a5a3a" /><circle cx="20" cy="-2" r="6" fill="#7a5a3a" /><path d="M-8 6 l-6 14 M2 6 l0 15 M12 5 l6 14 M-8 -6 l-6 -14 M4 -8 l4 -14" stroke="#5a3f27" strokeWidth="2" fill="none" /></>);
    case 'smallfish': return g(<><ellipse cx="0" cy="0" rx="24" ry="12" fill="#e08a3c" /><path d="M-22 0 L-38 -12 L-38 12 Z" fill="#e08a3c" /><circle cx="14" cy="-3" r="2.5" fill="#173b39" /></>);
    case 'lizard': return g(<><path d="M-30 6 Q-10 -4 10 4 Q24 8 34 -2" stroke="#8a9a3a" strokeWidth="10" fill="none" strokeLinecap="round" /><ellipse cx="34" cy="-4" rx="9" ry="6" fill="#8a9a3a" /><circle cx="37" cy="-6" r="1.8" fill="#173b39" /><path d="M-8 6 l-8 12 M14 8 l8 12 M0 2 l-4 -12 M18 4 l6 -10" stroke="#6b7a2a" strokeWidth="3" fill="none" strokeLinecap="round" /></>);
    case 'hawk': return g(<><path d="M-34 -4 Q-18 -24 0 -8 Q18 -24 34 -4 Q16 -10 0 6 Q-16 -10 -34 -4Z" fill="#7a4a2a" /><ellipse cx="0" cy="2" rx="9" ry="13" fill="#9a6a3a" /><circle cx="0" cy="-12" r="6" fill="#9a6a3a" /><path d="M0 -12 l5 3 l-5 1" fill="#e9b949" /><circle cx="-2" cy="-14" r="1.4" fill="#173b39" /></>);
    case 'bigfish': return g(<><ellipse cx="0" cy="0" rx="34" ry="18" fill="#5b7fa8" /><path d="M-32 0 L-52 -16 L-52 16 Z" fill="#5b7fa8" /><path d="M-6 -16 q8 -12 18 -2" fill="#47688c" /><circle cx="20" cy="-4" r="3" fill="#173b39" /></>);
  }
};

const EcosystemArt: React.FC<{ habitat: Habitat; stepIndex: number; playing: boolean; reducedMotion: boolean }> = ({ habitat, stepIndex, playing, reducedMotion }) => {
  const svg = useRef<SVGSVGElement>(null);
  useSmilPause(svg, playing, reducedMotion, habitat.id, stepIndex);
  const pond = habitat.id === 'pond';
  const route = stepIndex === 0 ? `M96 96 Q${X[0] - 4} 170 ${X[0]} 208` : `M${X[stepIndex - 1] + 40} ${Y} H${X[stepIndex] - 40}`;
  return (
    <svg ref={svg} className="sm-art" viewBox="0 0 640 360" role="img" aria-label={`Food chain in a ${habitat.name}: ${habitat.steps.map(s => s.label).join(', ')}. ${habitat.steps[stepIndex].label} is selected.`}>
      <defs>
        <linearGradient id={`eco-bg-${habitat.id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={pond ? '#cfe8f3' : '#d6ecf5'} /><stop offset="1" stopColor={pond ? '#8cc7dc' : '#efe3b5'} />
        </linearGradient>
      </defs>
      <rect width="640" height="360" fill={`url(#eco-bg-${habitat.id})`} />
      {!pond && <rect y="300" width="640" height="60" fill="#c8a45a" />}
      {pond && <path d="M0 300 q40 -10 80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 V360 H0Z" fill="#4aa0c6" opacity=".6" />}

      {/* Sun */}
      <g>
        <circle cx="70" cy="56" r="26" fill="#f2b93b" />
        <g stroke="#e9a93a" strokeWidth="4" strokeLinecap="round">{Array.from({ length: 8 }, (_, i) => { const a = (i * Math.PI) / 4; return <line key={i} x1={70 + Math.cos(a) * 34} y1={56 + Math.sin(a) * 34} x2={70 + Math.cos(a) * 44} y2={56 + Math.sin(a) * 44} />; })}</g>
      </g>
      <text x="70" y="118" textAnchor="middle" className="sm-note">Sunlight</text>

      {/* Links */}
      {X.slice(0, -1).map((x, i) => (
        <path key={i} d={`M${x + 40} ${Y} H${X[i + 1] - 46}`} className={`sm-link${stepIndex === i + 1 ? ' is-active' : ''}`} markerEnd="url(#eco-head)" />
      ))}
      <defs><marker id="eco-head" viewBox="0 0 10 10" refX="7" refY="5" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#5c5a50" /></marker></defs>

      {/* Organisms */}
      {habitat.kinds.map((kind, i) => (
        <g key={kind}>
          <circle cx={X[i]} cy={Y} r="46" className={`sm-bubble${stepIndex === i ? ' is-active' : ''}`} />
          <Icon kind={kind} x={X[i]} />
          <text x={X[i]} y={Y + 74} textAnchor="middle" className={`sm-organism${stepIndex === i ? ' is-active' : ''}`}>{habitat.steps[i].label}</text>
          <text x={X[i]} y={Y + 92} textAnchor="middle" className="sm-note">{habitat.roles?.[i] ?? (i === 0 ? 'Producer' : i === 3 ? 'Top consumer' : 'Consumer')}</text>
        </g>
      ))}

      {/* Energy moving into the chosen organism */}
      <path id="eco-route" d={route} fill="none" stroke="none" />
      {!reducedMotion && (
        <g key={`${habitat.id}-${stepIndex}`}>
          {[0, 1, 2].map(i => (
            <circle key={i} r="7" className="sm-energy">
              <animateMotion dur="2.4s" begin={`${-i * 0.8}s`} repeatCount="indefinite" path={route} />
            </circle>
          ))}
        </g>
      )}
      <text x="320" y="24" textAnchor="middle" className="sm-title">{habitat.name}: energy flows along the arrows</text>
    </svg>
  );
};

type SceneOptions = { title: string; description: string; footer: string; habitats: Habitat[] };

const FOOD_WEB_HABITAT: Habitat = {
  ...HABITATS[0],
  roles: ['Producer', 'Primary consumer', 'Secondary consumer', 'Tertiary consumer'],
  steps: [
    { id: 'grass', label: 'Grass', caption: 'Producer: Grass uses sunlight to make food by photosynthesis. It forms the base of this food chain.' },
    { id: 'grasshopper', label: 'Grasshopper', caption: 'Primary consumer: The grasshopper eats grass and obtains energy stored in plant material.' },
    { id: 'frog', label: 'Frog', caption: 'Secondary consumer: The frog eats grasshoppers and transfers energy to the next feeding level.' },
    { id: 'snake', label: 'Snake', caption: 'Tertiary consumer: The snake may eat frogs. Changes in one population can affect other organisms in the food web.' }
  ]
};

const EcosystemBase: React.FC<SceneOptions> = options => {
  const [habitatId, setHabitatId] = useState<Habitat['id']>(options.habitats[0].id);
  const habitat = options.habitats.find(h => h.id === habitatId) ?? options.habitats[0];
  return <EcosystemInner key={habitat.id} habitat={habitat} habitats={options.habitats} onHabitat={setHabitatId} title={options.title} description={options.description} footer={options.footer} />;
};

export const EcosystemScene: React.FC = () => (
  <EcosystemBase title="The Ecosystem Balance Keeper" description="Explore a food chain and see how energy moves between organisms." footer="Water, soil, air, sunlight and temperature are non-living factors that also shape each ecosystem." habitats={HABITATS} />
);

export const FoodWebScene: React.FC = () => (
  <EcosystemBase title="The Ecosystem Food-Web Strategist" description="Follow energy through a Ghanaian savanna food chain and identify each organism's role." footer="Arrows in a food chain point from the organism being eaten to the organism that eats it." habitats={[FOOD_WEB_HABITAT]} />
);

const EcosystemInner: React.FC<{ habitat: Habitat; habitats: Habitat[]; onHabitat: (id: Habitat['id']) => void; title: string; description: string; footer: string }> = ({ habitat, habitats, onHabitat, title, description, footer }) => (
  <MotionScene
    title={title}
    description={description}
    steps={habitat.steps}
    extraControls={habitats.length > 1 ? (
      <div className="gh-jhs1-science-interaction">
        <div className="gh-jhs1-science-choices" role="group" aria-label="Habitat">
          {habitats.map(item => (
            <button key={item.id} type="button" className={`gh-jhs1-science-choice${habitat.id === item.id ? ' is-active' : ''}`} aria-pressed={habitat.id === item.id} onClick={() => onHabitat(item.id)}>{item.id === 'savanna' ? 'Savanna' : 'Pond'}</button>
          ))}
        </div>
      </div>
    ) : undefined}
    footer={footer}
  >
    {({ stepIndex, playing, reducedMotion }) => <EcosystemArt habitat={habitat} stepIndex={stepIndex} playing={playing} reducedMotion={reducedMotion} />}
  </MotionScene>
);

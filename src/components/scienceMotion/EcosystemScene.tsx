import React, { useRef, useState } from 'react';
import { MotionScene, type MotionStep } from './MotionScene';
import { useSmilPause } from './useSmilPause';

type Habitat = { id: 'savanna' | 'pond'; name: string; kinds: Kind[]; steps: MotionStep[] };
type Kind = 'grass' | 'grasshopper' | 'frog' | 'snake' | 'algae' | 'insect' | 'smallfish' | 'bigfish';

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

const Icon: React.FC<{ kind: Kind; x: number }> = ({ kind, x }) => {
  const g = (children: React.ReactNode) => <g transform={`translate(${x} ${Y})`}>{children}</g>;
  switch (kind) {
    case 'grass': return g(<g stroke="#3f8a4a" strokeWidth="5" strokeLinecap="round" fill="none"><path d="M-16 18 Q-20 -6 -26 -22" /><path d="M-6 18 Q-6 -10 -4 -30" /><path d="M6 18 Q8 -8 16 -26" /><path d="M16 18 Q22 0 30 -12" /></g>);
    case 'grasshopper': return g(<><ellipse cx="0" cy="0" rx="26" ry="9" fill="#7fb04a" /><circle cx="24" cy="-4" r="8" fill="#7fb04a" /><circle cx="27" cy="-6" r="2" fill="#173b39" /><path d="M-16 4 L-26 -16 L-6 16 M-16 4 L-30 20" stroke="#4f7a2e" strokeWidth="3" fill="none" /><path d="M28 -10 q8 -14 18 -14" stroke="#4f7a2e" strokeWidth="2" fill="none" /></>);
    case 'frog': return g(<><ellipse cx="0" cy="6" rx="26" ry="16" fill="#58a05a" /><circle cx="-12" cy="-10" r="8" fill="#58a05a" /><circle cx="12" cy="-10" r="8" fill="#58a05a" /><circle cx="-12" cy="-11" r="3" fill="#173b39" /><circle cx="12" cy="-11" r="3" fill="#173b39" /><path d="M-22 18 q-10 8 -2 10 M22 18 q10 8 2 10" stroke="#3b7a3e" strokeWidth="4" fill="none" strokeLinecap="round" /></>);
    case 'snake': return g(<><path d="M-30 12 q10 -22 20 0 t20 0 t20 -4" stroke="#b9843c" strokeWidth="9" fill="none" strokeLinecap="round" /><circle cx="32" cy="-2" r="7" fill="#b9843c" /><circle cx="34" cy="-4" r="1.8" fill="#173b39" /><path d="M38 0 l8 2" stroke="#c0392b" strokeWidth="2" /></>);
    case 'algae': return g(<g fill="#4c9a4a"><circle cx="-16" cy="6" r="12" /><circle cx="6" cy="-4" r="14" /><circle cx="22" cy="10" r="10" /><circle cx="-2" cy="14" r="9" fill="#6bb35f" /></g>);
    case 'insect': return g(<><ellipse cx="0" cy="0" rx="20" ry="9" fill="#7a5a3a" /><circle cx="20" cy="-2" r="6" fill="#7a5a3a" /><path d="M-8 6 l-6 14 M2 6 l0 15 M12 5 l6 14 M-8 -6 l-6 -14 M4 -8 l4 -14" stroke="#5a3f27" strokeWidth="2" fill="none" /></>);
    case 'smallfish': return g(<><ellipse cx="0" cy="0" rx="24" ry="12" fill="#e08a3c" /><path d="M-22 0 L-38 -12 L-38 12 Z" fill="#e08a3c" /><circle cx="14" cy="-3" r="2.5" fill="#173b39" /></>);
    case 'bigfish': return g(<><ellipse cx="0" cy="0" rx="34" ry="18" fill="#5b7fa8" /><path d="M-32 0 L-52 -16 L-52 16 Z" fill="#5b7fa8" /><path d="M-6 -16 q8 -12 18 -2" fill="#47688c" /><circle cx="20" cy="-4" r="3" fill="#173b39" /></>);
  }
};

const EcosystemArt: React.FC<{ habitat: Habitat; stepIndex: number; playing: boolean; reducedMotion: boolean }> = ({ habitat, stepIndex, playing, reducedMotion }) => {
  const svg = useRef<SVGSVGElement>(null);
  useSmilPause(svg, playing, reducedMotion, habitat.id, stepIndex);
  const pond = habitat.id === 'pond';
  const route = stepIndex === 0 ? `M96 96 Q${X[0] - 4} 170 ${X[0]} 208` : `M${X[stepIndex - 1] + 40} ${Y} H${X[stepIndex] - 40}`;
  return (
    <svg ref={svg} className="sm" viewBox="0 0 640 360" role="img" aria-label={`Food chain in a ${habitat.name}: ${habitat.steps.map(s => s.label).join(', ')}. ${habitat.steps[stepIndex].label} is selected.`}>
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
          <text x={X[i]} y={Y + 92} textAnchor="middle" className="sm-note">{i === 0 ? 'Producer' : i === 3 ? 'Top consumer' : 'Consumer'}</text>
        </g>
      ))}

      {/* Energy moving into the chosen organism */}
      <path id="eco-route" d={route} fill="none" stroke="none" />
      {!reducedMotion && (
        <g key={`${habitat.id}-${stepIndex}`}>
          {[0, 1, 2].map(i => (
            <circle key={i} r="7" className="sm-energy">
              <animateMotion dur="2.4s" begin={`${-i * 0.8}s`} repeatCount="indefinite"><mpath href="#eco-route" /></animateMotion>
            </circle>
          ))}
        </g>
      )}
      <text x="320" y="24" textAnchor="middle" className="sm-title">{habitat.name}: energy flows along the arrows</text>
    </svg>
  );
};

export const EcosystemScene: React.FC = () => {
  const [habitatId, setHabitatId] = useState<Habitat['id']>('savanna');
  const habitat = HABITATS.find(h => h.id === habitatId) ?? HABITATS[0];
  return <EcosystemInner key={habitat.id} habitat={habitat} onHabitat={setHabitatId} />;
};

const EcosystemInner: React.FC<{ habitat: Habitat; onHabitat: (id: Habitat['id']) => void }> = ({ habitat, onHabitat }) => (
  <MotionScene
    title="The Ecosystem Balance Keeper"
    description="Explore a food chain and see how energy moves between organisms."
    steps={habitat.steps}
    extraControls={
      <div className="gh-jhs1-science-interaction">
        <div className="gh-jhs1-science-choices" role="group" aria-label="Habitat">
          {HABITATS.map(item => (
            <button key={item.id} type="button" className={`gh-jhs1-science-choice${habitat.id === item.id ? ' is-active' : ''}`} aria-pressed={habitat.id === item.id} onClick={() => onHabitat(item.id)}>{item.id === 'savanna' ? 'Savanna' : 'Pond'}</button>
          ))}
        </div>
      </div>
    }
    footer="Water, soil, air, sunlight and temperature are non-living factors that also shape each ecosystem."
  >
    {({ stepIndex, playing, reducedMotion }) => <EcosystemArt habitat={habitat} stepIndex={stepIndex} playing={playing} reducedMotion={reducedMotion} />}
  </MotionScene>
);

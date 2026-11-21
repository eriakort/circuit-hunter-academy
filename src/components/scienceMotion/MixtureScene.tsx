import React, { useRef, useState } from 'react';
import { MotionScene, type MotionStep } from './MotionScene';
import { ChoiceRow } from './ChoiceRow';
import { useSmilPause } from './useSmilPause';

export const MIXTURE_STEPS: MotionStep[] = [
  { id: 'filter', label: 'Filtration', caption: 'Filtration retains insoluble solids while liquid passes through. Here sand stays on the filter paper and clear water drips through.' },
  { id: 'evaporate', label: 'Evaporation', caption: 'Evaporation removes a liquid and can leave a dissolved solid behind. Here the water leaves as vapour and the salt stays in the dish.' },
  { id: 'sieve', label: 'Sieving', caption: 'Sieving separates solids with different particle sizes. Here the small sand grains fall through while the larger stones stay on top.' },
  { id: 'magnet', label: 'Magnetic separation', caption: 'A magnet attracts magnetic materials such as iron from a mixture. Here iron filings jump to the magnet and the sand stays behind.' }
];

type Sample = { id: string; name: string; kind: string; detail: string };
export const SAMPLES: Sample[] = [
  { id: 'salt', name: 'Salt water', kind: 'Homogeneous solution', detail: 'Salt is the solute and water is the solvent. Evaporation can recover the dissolved salt.' },
  { id: 'sand', name: 'Sand and water', kind: 'Heterogeneous suspension', detail: 'Sand does not dissolve. Let it settle, then decant or use filtration.' },
  { id: 'oil', name: 'Oil and water', kind: 'Heterogeneous mixture', detail: 'The liquids form separate layers because they are immiscible and have different densities. A separating funnel can help.' },
  { id: 'milk', name: 'Milk', kind: 'Colloid', detail: 'Tiny dispersed droplets make milk a colloid. Colloids can scatter light (Tyndall effect).' }
];

const grains = (n: number, x0: number, y0: number, w: number, h: number) =>
  Array.from({ length: n }, (_, i) => [x0 + ((i * 37) % w), y0 + ((i * 53) % h)] as const);

const Filtration: React.FC = () => (
  <g>
    <path d="M230 70 H410 L340 170 H300 Z" fill="#f4efe0" stroke="#8a8a82" strokeWidth="4" />
    <rect x="312" y="170" width="16" height="30" fill="#8a8a82" />
    <path d="M250 74 H390 L338 160 H302 Z" fill="#cfa86a" opacity=".35" />
    {grains(14, 285, 135, 50, 22).map(([x, y]) => <circle key={`${x}${y}`} cx={x} cy={y} r="4" fill="#b9873d" />)}
    {[0, 1, 2, 3].map(i => <circle key={i} r="4.5" fill="#3f9fc3"><animateMotion dur="1.6s" begin={`${-i * 0.4}s`} repeatCount="indefinite" path="M320 92 V250" /></circle>)}
    {[0, 1, 2].map(i => <circle key={i} r="5" fill="#b9873d" opacity=".9"><animate attributeName="cy" values="82;118;82" dur="2.4s" begin={`${-i * 0.8}s`} repeatCount="indefinite" /><animate attributeName="cx" values={`${290 + i * 20};${310 + i * 10};${290 + i * 20}`} dur="2.4s" begin={`${-i * 0.8}s`} repeatCount="indefinite" /></circle>)}
    <path d="M250 250 h140 v60 q0 8 -8 8 h-124 q-8 0 -8 -8 Z" fill="#e6f1f7" stroke="#5c5a50" strokeWidth="4" />
    <rect x="256" y="282" width="128" height="30" fill="#3f9fc3" opacity=".75" />
    <text x="320" y="48" textAnchor="middle" className="sm-note sm-note--dark">Sand + water mixture</text>
    <text x="440" y="130" className="sm-note sm-note--dark">Filter paper holds the sand</text>
    <text x="440" y="296" className="sm-note sm-note--dark">Clear water (filtrate)</text>
  </g>
);

const Evaporation: React.FC = () => (
  <g>
    <path d="M200 160 q120 120 240 0 Z" fill="#f4efe0" stroke="#8a8a82" strokeWidth="5" />
    <g clipPath="url(#mx-dish)">
      <rect x="200" y="190" width="240" height="60" fill="#3f9fc3" opacity=".8"><animate attributeName="y" values="172;236;236" keyTimes="0;.8;1" dur="7s" repeatCount="indefinite" /><animate attributeName="height" values="80;16;16" keyTimes="0;.8;1" dur="7s" repeatCount="indefinite" /></rect>
      <g fill="#fff" stroke="#b9b9b0" strokeWidth="1"><animate attributeName="opacity" values="0;0;1;1" keyTimes="0;.5;.85;1" dur="7s" repeatCount="indefinite" />{grains(14, 270, 198, 100, 8).map(([x, y]) => <rect key={`${x}${y}`} x={x} y={y} width="7" height="7" />)}</g>
    </g>
    <defs><clipPath id="mx-dish"><path d="M200 160 q120 120 240 0 Z" /></clipPath></defs>
    {[0, 1, 2, 3].map(i => <path key={i} d={`M${260 + i * 40} 150 q-8 -14 0 -28 q8 -14 0 -28`} fill="none" stroke="#9fb7c4" strokeWidth="4" strokeLinecap="round"><animate attributeName="opacity" values="0;.9;0" dur="2s" begin={`${i * 0.5}s`} repeatCount="indefinite" /></path>)}
    <rect x="250" y="278" width="140" height="10" rx="5" fill="#5c5a50" />
    {[0, 1, 2, 3, 4].map(i => <path key={i} d={`M${270 + i * 25} 276 q-9 -14 0 -26 q9 12 0 26`} fill="#f08a3a"><animate attributeName="opacity" values="1;.6;1" dur=".5s" begin={`${i * 0.1}s`} repeatCount="indefinite" /></path>)}
    <text x="320" y="48" textAnchor="middle" className="sm-note sm-note--dark">Salt water is heated gently</text>
    <text x="400" y="110" className="sm-note sm-note--dark">Water leaves as vapour</text>
    <text x="320" y="312" textAnchor="middle" className="sm-note sm-note--dark">Salt crystals are left in the dish</text>
  </g>
);

const Sieving: React.FC = () => (
  <g>
    <path d="M210 150 L430 170" stroke="#5c5a50" strokeWidth="8" strokeLinecap="round" />
    <path d="M210 150 L430 170" stroke="#9fb7c4" strokeWidth="3" strokeDasharray="2 7" />
    {[[250, 130], [300, 136], [350, 142], [390, 146]].map(([x, y], i) => (
      <ellipse key={i} cx={x} cy={y} rx="14" ry="10" fill="#8a8a82" stroke="#5c5a50" strokeWidth="2"><animate attributeName="cy" values={`${y};${y - 2};${y}`} dur="0.7s" begin={`${i * 0.15}s`} repeatCount="indefinite" /></ellipse>
    ))}
    {[0, 1, 2, 3, 4, 5].map(i => <circle key={i} r="3.5" fill="#b9873d"><animateMotion dur="1.8s" begin={`${-i * 0.3}s`} repeatCount="indefinite" path={`M${270 + i * 25} 158 V262`} /></circle>)}
    <path d="M250 280 q70 -40 140 0 Z" fill="#c9a05a" />
    <rect x="120" y="282" width="400" height="10" fill="#8c6a43" />
    <text x="320" y="48" textAnchor="middle" className="sm-note sm-note--dark">Sand and stones are shaken on a sieve</text>
    <text x="450" y="130" className="sm-note sm-note--dark">Large stones stay</text>
    <text x="320" y="312" textAnchor="middle" className="sm-note sm-note--dark">Small grains fall through</text>
  </g>
);

const Magnet: React.FC = () => (
  <g>
    <path d="M280 70 v40 a40 40 0 0 0 80 0 v-40 h-24 v40 a16 16 0 0 1 -32 0 v-40 Z" fill="#d6453d" stroke="#5c1f1b" strokeWidth="3" />
    <rect x="280" y="62" width="24" height="16" fill="#e8e8e8" /><rect x="336" y="62" width="24" height="16" fill="#e8e8e8" />
    <path d="M200 250 h240 v40 q0 12 -12 12 h-216 q-12 0 -12 -12 Z" fill="#c9b27a" stroke="#7a5534" strokeWidth="4" />
    {grains(26, 225, 240, 190, 12).map(([x, y]) => <circle key={`${x}${y}`} cx={x} cy={y} r="3.2" fill="#d9b86a" />)}
    {[0, 1, 2, 3, 4, 5].map(i => <rect key={i} width="9" height="3" rx="1" fill="#3a3f45"><animateMotion dur="2.4s" begin={`${-i * 0.4}s`} repeatCount="indefinite" path={`M${250 + i * 28} 244 L${i % 2 ? 340 : 300} 150`} /></rect>)}
    <text x="320" y="44" textAnchor="middle" className="sm-note sm-note--dark">Magnet</text>
    <text x="470" y="270" className="sm-note sm-note--dark">Sand stays behind</text>
    <text x="440" y="190" className="sm-note sm-note--dark">Iron filings are attracted</text>
  </g>
);

const MixtureArt: React.FC<{ stepId: string; playing: boolean; reducedMotion: boolean }> = ({ stepId, playing, reducedMotion }) => {
  const svg = useRef<SVGSVGElement>(null);
  useSmilPause(svg, playing, reducedMotion, stepId);
  const label = MIXTURE_STEPS.find(s => s.id === stepId)?.label;
  return (
    <svg ref={svg} className="sm-art" viewBox="0 0 640 330" role="img" aria-label={`Separation technique: ${label}`}>
      <rect width="640" height="330" fill="#f3efe6" />
      <g key={stepId}>
        {stepId === 'filter' && <Filtration />}
        {stepId === 'evaporate' && <Evaporation />}
        {stepId === 'sieve' && <Sieving />}
        {stepId === 'magnet' && <Magnet />}
      </g>
    </svg>
  );
};

export const MixtureScene: React.FC = () => {
  const [id, setId] = useState('salt');
  const sample = SAMPLES.find(s => s.id === id) ?? SAMPLES[0];
  return (
    <MotionScene
      title="The Mixture Separation Engineer"
      description="Identify mixture types and choose a separation method based on physical properties."
      steps={MIXTURE_STEPS}
      stepMs={7000}
      extraControls={
        <>
          <ChoiceRow label="Investigate a mixture" options={SAMPLES.map(s => ({ id: s.id, label: s.name }))} value={sample.id} onChange={setId} />
          <div className="gh-jhs1-science-readout" aria-live="polite"><strong>{sample.name} · {sample.kind}</strong><p>{sample.detail}</p></div>
        </>
      }
      footer="Never assume a classroom filter makes unsafe water drinkable. Follow trusted water-treatment guidance."
    >
      {({ step, playing, reducedMotion }) => <MixtureArt stepId={step.id} playing={playing} reducedMotion={reducedMotion} />}
    </MotionScene>
  );
};

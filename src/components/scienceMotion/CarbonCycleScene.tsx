import React, { useRef } from 'react';
import { MotionScene, type MotionStep } from './MotionScene';
import { useSmilPause } from './useSmilPause';

export const CARBON_STEPS: MotionStep[] = [
  { id: 'photosynthesis', label: 'Photosynthesis', caption: 'Green plants take in carbon dioxide and use light energy to make food. Carbon becomes part of plant material.' },
  { id: 'feeding', label: 'Feeding', caption: 'Animals obtain carbon when they eat plants or other animals. Carbon moves through food chains.' },
  { id: 'respiration', label: 'Respiration', caption: 'Plants, animals and microorganisms release carbon dioxide as they use food for energy.' },
  { id: 'decay', label: 'Decomposition', caption: 'Decomposers break down dead organisms and return carbon to the soil and air.' },
  { id: 'burning', label: 'Burning', caption: 'Burning wood and fossil fuels releases carbon dioxide into the atmosphere.' }
];

const ROUTES: Record<string, string> = {
  photosynthesis: 'M240 70 C160 94 112 140 106 190',
  feeding: 'M130 244 C190 268 236 262 270 252',
  respiration: 'M312 212 C330 156 322 116 318 80',
  decay: 'M440 296 C512 232 470 124 396 72',
  burning: 'M548 196 C566 130 480 92 410 66'
};
const BADGES: Record<string, [number, number]> = { photosynthesis: [136, 124], feeding: [196, 230], respiration: [342, 150], decay: [482, 190], burning: [540, 112] };

const CarbonArt: React.FC<{ stepId: string; playing: boolean; reducedMotion: boolean }> = ({ stepId, playing, reducedMotion }) => {
  const svg = useRef<SVGSVGElement>(null);
  useSmilPause(svg, playing, reducedMotion, stepId);
  const label = CARBON_STEPS.find(s => s.id === stepId)?.label;
  return (
    <svg ref={svg} className="sm" viewBox="0 0 640 360" role="img" aria-label={`Carbon cycle, ${label}: ${CARBON_STEPS.find(s => s.id === stepId)?.caption}`}>
      <defs>
        <linearGradient id="cc-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#cfe8f3" /><stop offset="1" stopColor="#eef3e6" /></linearGradient>
        <marker id="cc-head" viewBox="0 0 10 10" refX="7" refY="5" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#ffffff" fillOpacity=".75" /></marker>
        <marker id="cc-head-on" viewBox="0 0 10 10" refX="7" refY="5" markerUnits="userSpaceOnUse" markerWidth="14" markerHeight="14" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#2b2f2a" /></marker>
        {Object.entries(ROUTES).map(([id, d]) => <path key={id} id={`cc-route-${id}`} d={d} />)}
      </defs>
      <rect width="640" height="360" fill="url(#cc-sky)" />
      <rect y="262" width="640" height="98" fill="#8c6a43" />
      <path d="M0 262 H640" stroke="#5f8f45" strokeWidth="8" />

      <g transform="translate(320 46)">
        <rect x="-120" y="-26" width="240" height="46" rx="23" fill="#fff" opacity=".88" />
        <text y="5" textAnchor="middle" className="sm-name">CO₂ in the air</text>
      </g>

      {/* Tree */}
      <g>
        <path d="M104 262 V196" stroke="#6b4a2b" strokeWidth="10" />
        <circle cx="104" cy="170" r="36" fill="#3f8a4a" /><circle cx="80" cy="190" r="22" fill="#4a9a52" /><circle cx="130" cy="188" r="22" fill="#4a9a52" />
        <text x="104" y="298" textAnchor="middle" className="sm-name sm-name--light">Plants</text>
      </g>
      {/* Animal (goat) */}
      <g>
        <ellipse cx="310" cy="236" rx="34" ry="18" fill="#c8a47a" /><circle cx="348" cy="222" r="11" fill="#c8a47a" /><path d="M352 212 l6 -10 M346 211 l0 -10" stroke="#6b4a2b" strokeWidth="3" />
        <path d="M290 250 v12 M306 252 v10 M322 252 v10 M334 250 v12" stroke="#6b4a2b" strokeWidth="4" />
        <text x="312" y="298" textAnchor="middle" className="sm-name sm-name--light">Animals</text>
      </g>
      {/* Dead matter and decomposers */}
      <g>
        <ellipse cx="440" cy="296" rx="40" ry="10" fill="#5e432a" />
        <path d="M418 290 q10 -14 22 -2 M440 288 q12 -14 24 0" stroke="#c49a4a" strokeWidth="4" fill="none" />
        <text x="440" y="326" textAnchor="middle" className="sm-name sm-name--light">Dead matter + decomposers</text>
      </g>
      {/* Burning */}
      <g>
        <rect x="536" y="196" width="22" height="66" fill="#6b6b66" /><rect x="528" y="190" width="38" height="10" fill="#4b4b46" />
        <path d="M600 262 q-14 -30 4 -50 q8 22 16 8 q14 20 -4 42 Z" fill="#f08a3a" /><path d="M606 262 q-6 -14 2 -26 q8 12 4 26 Z" fill="#f7d36a" />
        <text x="580" y="298" textAnchor="middle" className="sm-name sm-name--light">Burning</text>
      </g>

      {Object.entries(ROUTES).map(([id, d]) => <path key={id} d={d} className={`sm-croute${id === stepId ? ' is-active' : ''}`} markerEnd={id === stepId ? 'url(#cc-head-on)' : 'url(#cc-head)'} />)}

      {!reducedMotion && (
        <g key={stepId}>
          {[0, 1, 2].map(i => (
            <g key={i}>
              <circle r="10" className="sm-carbon" /><text y="4" textAnchor="middle" className="sm-carbon-text">C</text>
              <animateMotion dur="3s" begin={`${-i}s`} repeatCount="indefinite" rotate="0"><mpath href={`#cc-route-${stepId}`} /></animateMotion>
            </g>
          ))}
        </g>
      )}

      {CARBON_STEPS.map((item, index) => {
        const [x, y] = BADGES[item.id];
        return (
          <g key={item.id} className={`wc-badge${item.id === stepId ? ' is-active' : ''}`}>
            <circle cx={x} cy={y} r="13" /><text x={x} y={y + 5} textAnchor="middle">{index + 1}</text>
          </g>
        );
      })}
    </svg>
  );
};

export const CarbonCycleScene: React.FC = () => (
  <MotionScene
    title="The Carbon Cycle Guardian"
    description="Follow carbon as it moves between the atmosphere, living things and the environment."
    steps={CARBON_STEPS}
    footer="Extra carbon dioxide from burning fossil fuels strengthens the greenhouse effect. The diagram is a simplified model."
  >
    {({ step, playing, reducedMotion }) => <CarbonArt stepId={step.id} playing={playing} reducedMotion={reducedMotion} />}
  </MotionScene>
);

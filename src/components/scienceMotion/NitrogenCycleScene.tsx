import React, { useEffect, useRef } from 'react';
import { MotionScene, type MotionStep } from './MotionScene';

const STEPS: MotionStep[] = [
  { id: 'fixation', label: 'Nitrogen fixation', caption: 'Bacteria in the root nodules of legumes such as beans and groundnuts (and some bacteria living freely in the soil) turn nitrogen gas from the air into ammonium.' },
  { id: 'nitrification', label: 'Nitrification', caption: 'Nitrifying bacteria in the soil change ammonium into nitrites and then into nitrates.' },
  { id: 'assimilation', label: 'Assimilation', caption: 'Plant roots take in nitrates and use the nitrogen to build proteins. Animals get nitrogen by eating plants or other animals.' },
  { id: 'ammonification', label: 'Ammonification', caption: 'When plants and animals die or produce waste, decomposers (bacteria and fungi) break it down and return the nitrogen to the soil as ammonium.' },
  { id: 'denitrification', label: 'Denitrification', caption: 'In waterlogged, low-oxygen soil, denitrifying bacteria turn nitrates back into nitrogen gas, which returns to the air. The cycle continues.' }
];

/** The route a nitrogen atom takes in each step. */
const ROUTES: Record<string, string> = {
  fixation: 'M300 74 C230 110 176 168 178 246 Q190 270 232 280',
  nitrification: 'M296 304 C336 322 392 322 430 304',
  assimilation: 'M488 286 C504 254 528 232 534 172',
  ammonification: 'M522 176 C478 176 424 180 394 194 C342 214 292 252 268 284',
  denitrification: 'M462 284 C444 220 424 140 362 70'
};

const BADGES: Record<string, [number, number]> = {
  fixation: [214, 140], nitrification: [362, 338], assimilation: [534, 238], ammonification: [330, 232], denitrification: [446, 150]
};

/** Nitrogen cycle where an "N" atom travels along the route of the chosen step. */
export const NitrogenCycleScene: React.FC = () => (
  <MotionScene
    title="The Nitrogen Cycle Guardian"
    description="Follow a nitrogen atom (N) as it moves between the air, the soil and living things."
    steps={STEPS}
    footer="Protect soil fertility: rotate crops with beans or groundnuts, avoid bush burning and use fertiliser carefully. The diagram is a simplified model; real soils contain many organisms."
  >
    {({ step, playing, reducedMotion }) => <NitrogenArt stepId={step.id} playing={playing} reducedMotion={reducedMotion} />}
  </MotionScene>
);

const NitrogenArt: React.FC<{ stepId: string; playing: boolean; reducedMotion: boolean }> = ({ stepId, playing, reducedMotion }) => {
  const svg = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const element = svg.current;
    if (!element || typeof element.pauseAnimations !== 'function') return;
    if (playing && !reducedMotion) element.unpauseAnimations(); else element.pauseAnimations();
  }, [playing, reducedMotion, stepId]);

  return (
    <svg ref={svg} className="nc" viewBox="0 0 640 360" role="img" aria-label={`Nitrogen cycle, ${STEPS.find(s => s.id === stepId)?.label}: ${STEPS.find(s => s.id === stepId)?.caption}`}>
      <defs>
        <linearGradient id="nc-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#cfe8f3" /><stop offset="1" stopColor="#eef3e6" /></linearGradient>
        <linearGradient id="nc-soil" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#a57a4f" /><stop offset="1" stopColor="#7c5734" /></linearGradient>
        <marker id="nc-head" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#ffffff" fillOpacity=".7" /></marker>
        <marker id="nc-head-active" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="4" markerHeight="4" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#7b5ea7" /></marker>
        {Object.entries(ROUTES).map(([id, d]) => <path key={id} id={`nc-route-${id}`} d={d} />)}
      </defs>

      <rect width="640" height="200" fill="url(#nc-sky)" />
      <rect y="200" width="640" height="160" fill="url(#nc-soil)" />
      <path d="M0 200 H640" stroke="#5f8f45" strokeWidth="8" />

      {/* Air: nitrogen gas */}
      <g transform="translate(322 50)">
        <rect x="-124" y="-30" width="260" height="52" rx="26" fill="#ffffff" opacity=".85" />
        <circle cx="-102" cy="-4" r="10" className="nc-atom" /><circle cx="-82" cy="-4" r="10" className="nc-atom" />
        <text x="-102" y="0" textAnchor="middle" className="nc-atom-text">N</text><text x="-82" y="0" textAnchor="middle" className="nc-atom-text">N</text>
        <text x="26" y="2" textAnchor="middle" className="nc-node">Nitrogen gas (N₂) in air</text>
      </g>

      {/* Legume with root nodules */}
      <g>
        <path d="M178 200 V120" stroke="#3f8a4a" strokeWidth="5" />
        <path d="M178 150 q-30 -6 -34 -30 q28 0 34 30 M178 132 q28 -8 30 -32 q-26 2 -30 32" fill="#5aa35f" />
        <path d="M178 200 q-6 30 -18 52 M178 200 q4 34 16 56 M178 200 v62" stroke="#e8d6b0" strokeWidth="3" fill="none" />
        {[[166, 232], [190, 240], [178, 256], [160, 252]].map(([x, y]) => <circle key={`${x}${y}`} cx={x} cy={y} r="6" fill="#f2c5c5" stroke="#b06060" strokeWidth="1.5" />)}
        <text x="96" y="122" textAnchor="middle" className="nc-small">Bean plant</text>
        <text x="96" y="262" textAnchor="middle" className="nc-small nc-small--light">Root nodules</text>
      </g>

      {/* Maize plant and goat for assimilation */}
      <g>
        <path d="M534 200 V100" stroke="#3f8a4a" strokeWidth="5" />
        <path d="M534 170 q-34 -10 -40 -36 M534 150 q34 -10 40 -40 M534 126 q-26 -14 -26 -40" stroke="#5aa35f" strokeWidth="6" fill="none" strokeLinecap="round" />
        <path d="M534 200 q-10 30 -24 46 M534 200 q10 28 22 44" stroke="#e8d6b0" strokeWidth="3" fill="none" />
        <text x="600" y="110" textAnchor="middle" className="nc-small">Plants</text>
        <text x="600" y="128" textAnchor="middle" className="nc-small">→ animals</text>
      </g>

      {/* Dead leaves, droppings and decomposers on the surface */}
      <g>
        <ellipse cx="392" cy="196" rx="30" ry="7" fill="#8a6a3a" />
        <path d="M372 192 q8 -10 18 -2 M396 190 q10 -12 20 0" stroke="#c49a4a" strokeWidth="4" fill="none" />
        <path d="M410 196 v-12 m-8 0 h16 a8 6 0 0 0 -16 0" fill="#e8d6b0" stroke="#8a6a3a" strokeWidth="1.5" />
        <text x="392" y="176" textAnchor="middle" className="nc-small">Dead matter + waste</text>
      </g>

      {/* Soil compounds */}
      <g className="nc-box"><rect x="196" y="282" width="104" height="40" rx="10" /><text x="248" y="300" textAnchor="middle">Ammonium</text><text x="248" y="315" textAnchor="middle" className="nc-formula">NH₄⁺</text></g>
      <g className="nc-box"><rect x="430" y="282" width="104" height="40" rx="10" /><text x="482" y="300" textAnchor="middle">Nitrate</text><text x="482" y="315" textAnchor="middle" className="nc-formula">NO₃⁻</text></g>

      {/* All routes, dim; the current one is bold */}
      {Object.entries(ROUTES).map(([id, d]) => (
        <path key={id} d={d} className={`nc-route${id === stepId ? ' is-active' : ''}`} markerEnd={id === stepId ? 'url(#nc-head-active)' : 'url(#nc-head)'} />
      ))}

      {/* Travelling nitrogen atoms on the current route */}
      {!reducedMotion && (
        <g key={stepId}>
          {[0, 1, 2].map(i => (
            <g key={i} className="nc-token">
              <circle r="10" className="nc-atom" /><text y="5" textAnchor="middle" className="nc-atom-text">N</text>
              <animateMotion dur="3s" begin={`${-i}s`} repeatCount="indefinite" rotate="0"><mpath href={`#nc-route-${stepId}`} /></animateMotion>
            </g>
          ))}
        </g>
      )}

      {STEPS.map((item, index) => {
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

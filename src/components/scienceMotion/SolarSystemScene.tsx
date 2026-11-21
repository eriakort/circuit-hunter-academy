import React, { useRef } from 'react';
import { MotionScene, type MotionStep } from './MotionScene';
import { useSmilPause } from './useSmilPause';

type Planet = { id: string; name: string; order: number; radius: number; size: number; colour: string; seconds: number; ring?: 'flat' | 'tilted' };

// Orbit times are scaled from the real ones (88, 225, 365 and 687 days) so inner planets really do go round faster.
const PLANETS: Planet[] = [
  { id: 'mercury', name: 'Mercury', order: 1, radius: 50, size: 7, colour: '#9b8a79', seconds: 3.9 },
  { id: 'venus', name: 'Venus', order: 2, radius: 88, size: 10, colour: '#d9ad77', seconds: 9.9 },
  { id: 'earth', name: 'Earth', order: 3, radius: 126, size: 11, colour: '#3e91c8', seconds: 16 },
  { id: 'mars', name: 'Mars', order: 4, radius: 164, size: 9, colour: '#b95b43', seconds: 30 }
];

export const SOLAR_STEPS: MotionStep[] = [
  { id: 'mercury', label: 'Mercury', caption: 'Planet 1: Small, rocky and closest to the Sun. It has the shortest orbit, so it goes round the Sun fastest.' },
  { id: 'venus', label: 'Venus', caption: 'Planet 2: A thick atmosphere traps heat, making its surface extremely hot.' },
  { id: 'earth', label: 'Earth', caption: 'Planet 3: Our home has abundant surface water and conditions that support life. One orbit takes a year.' },
  { id: 'mars', label: 'Mars', caption: 'Planet 4: A cold, rocky world with a reddish surface. It has the longest orbit of the four, so it takes the longest to go round the Sun.' }
];

const CX = 320;
const CY = 200;

export const OUTER_PLANETS: Planet[] = [
  { id: 'jupiter', name: 'Jupiter', order: 5, radius: 62, size: 17, colour: '#c99b65', seconds: 8 },
  { id: 'saturn', name: 'Saturn', order: 6, radius: 102, size: 13, colour: '#d8c7a0', seconds: 15, ring: 'flat' },
  { id: 'uranus', name: 'Uranus', order: 7, radius: 138, size: 10, colour: '#80cbd2', seconds: 26, ring: 'tilted' },
  { id: 'neptune', name: 'Neptune', order: 8, radius: 170, size: 10, colour: '#4778c8', seconds: 38 }
];

export const OUTER_STEPS: MotionStep[] = [
  { id: 'jupiter', label: 'Jupiter', caption: 'Planet 5 · Gas giant: The largest planet; known for the Great Red Spot, a giant storm.' },
  { id: 'saturn', label: 'Saturn', caption: 'Planet 6 · Gas giant: Has a broad, bright ring system made mainly of ice and rocky particles.' },
  { id: 'uranus', label: 'Uranus', caption: 'Planet 7 · Ice giant: Rotates with an extreme tilt, almost on its side.' },
  { id: 'neptune', label: 'Neptune', caption: 'Planet 8 · Ice giant: A distant ice giant with very fast winds.' }
];

export const SolarSystemScene: React.FC = () => (
  <MotionScene
    title="The Inner Planet Navigator"
    description="Watch the four rocky worlds nearest the Sun orbit, and select a planet to compare them."
    steps={SOLAR_STEPS}
    stepMs={6000}
    footer="The Sun’s gravity keeps planets in orbit; rotation is a separate movement around each planet’s axis. Sizes and distances are not to scale, and orbit times are scaled down."
  >
    {({ step, playing, reducedMotion }) => <SolarArt planets={PLANETS} steps={SOLAR_STEPS} stepId={step.id} playing={playing} reducedMotion={reducedMotion} />}
  </MotionScene>
);

export const OuterPlanetsScene: React.FC = () => (
  <MotionScene
    title="The Outer Planet Navigator"
    description="Compare the four outer planets and distinguish gas giants from ice giants."
    steps={OUTER_STEPS}
    stepMs={6000}
    footer="The outer planets have extreme environments and are not suitable for life as we know it. Sizes and distances are not to scale, and orbit times are scaled down and compressed so you can see them."
  >
    {({ step, playing, reducedMotion }) => <SolarArt planets={OUTER_PLANETS} steps={OUTER_STEPS} stepId={step.id} playing={playing} reducedMotion={reducedMotion} />}
  </MotionScene>
);

const SolarArt: React.FC<{ planets: Planet[]; steps: MotionStep[]; stepId: string; playing: boolean; reducedMotion: boolean }> = ({ planets, steps, stepId, playing, reducedMotion }) => {
  const svg = useRef<SVGSVGElement>(null);
  useSmilPause(svg, playing, reducedMotion, stepId);
  return (
    <svg ref={svg} className="sm-art sm-art--space" viewBox="0 0 640 380" role="img" aria-label={`Sun and four inner planets orbiting. ${steps.find(s => s.id === stepId)?.label} is selected.`}>
      <rect width="640" height="380" fill="#10213a" />
      {Array.from({ length: 26 }, (_, i) => <circle key={i} cx={(i * 97) % 640} cy={(i * 59 + 13) % 380} r={i % 3 === 0 ? 1.6 : 1} fill="#fff" opacity=".6" />)}

      <circle cx={CX} cy={CY} r="26" fill="#f2b544" />
      <circle cx={CX} cy={CY} r="34" fill="none" stroke="#f2b544" strokeWidth="5" opacity=".35"><animate attributeName="r" values="32;40;32" dur="3s" repeatCount="indefinite" /></circle>
      <text x={CX} y={CY + 5} textAnchor="middle" className="sm-sun">Sun</text>

      {planets.map(planet => {
        const active = planet.id === stepId;
        return (
          <g key={planet.id}>
            <circle cx={CX} cy={CY} r={planet.radius} fill="none" className={`sm-orbit${active ? ' is-active' : ''}`} />
            <g>
              {!reducedMotion && <animateTransform attributeName="transform" type="rotate" from={`0 ${CX} ${CY}`} to={`360 ${CX} ${CY}`} dur={`${planet.seconds}s`} repeatCount="indefinite" />}
              {active && <circle cx={CX + planet.radius} cy={CY} r={planet.size + 7} fill="none" stroke="#e9b949" strokeWidth="3" />}
              <circle cx={CX + planet.radius} cy={CY} r={planet.size} fill={planet.colour} stroke={active ? '#e9b949' : '#ffffff'} strokeWidth={active ? 3 : 1} strokeOpacity={active ? 1 : 0.5} />
              {planet.ring === 'flat' && <ellipse cx={CX + planet.radius} cy={CY} rx={planet.size + 9} ry="4" fill="none" stroke="#c99b65" strokeWidth="3" />}
              {planet.ring === 'tilted' && <ellipse cx={CX + planet.radius} cy={CY} rx="4" ry={planet.size + 7} fill="none" stroke="#a9dde2" strokeWidth="2" />}
            </g>
            <text x={CX} y={CY - planet.radius - 5} textAnchor="middle" className={`sm-planet-label${active ? ' is-active' : ''}`}>{planet.order}. {planet.name}</text>
          </g>
        );
      })}
    </svg>
  );
};

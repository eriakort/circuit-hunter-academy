import React, { useRef, useState } from 'react';
import { MotionScene, type MotionStep } from './MotionScene';
import { ChoiceRow } from './ChoiceRow';
import { MoreDetails } from './MoreDetails';
import { useSmilPause } from './useSmilPause';

export const CLIMATE_STEPS: MotionStep[] = [
  { id: 'sunlight', label: 'Incoming sunlight', caption: "Energy from the Sun passes through the atmosphere and warms Earth's surface." },
  { id: 'infrared', label: 'Outgoing heat', caption: 'The warm surface releases energy as infrared radiation.' },
  { id: 'gases', label: 'Greenhouse gases', caption: 'Gases such as carbon dioxide and methane absorb and re-emit some outgoing infrared energy, warming the lower atmosphere.' },
  { id: 'enhanced', label: 'Enhanced greenhouse effect', caption: 'Human activities increase greenhouse-gas concentrations, strengthening this warming influence and changing the climate.' }
];

type Action = { id: string; label: string; impact: string; evidence: string };
const ACTIONS: Action[] = [
  { id: 'forests', label: 'Protect and restore forests', impact: 'Healthy forests store carbon, protect habitats, reduce erosion and support water cycles.', evidence: 'Track tree survival, forest cover, biodiversity and community participation over time.' },
  { id: 'energy', label: 'Use cleaner energy efficiently', impact: 'Renewable electricity, efficient appliances and clean cooking can reduce fossil-fuel use and air pollution.', evidence: 'Compare energy generated or saved, reliability, affordability and emissions avoided.' },
  { id: 'communities', label: 'Build climate-resilient communities', impact: 'Flood-aware planning, drainage maintenance, early warnings and climate-smart farming can reduce local risks.', evidence: 'Monitor flood impacts, crop losses, access to warnings and who benefits from each action.' }
];

const Dot: React.FC<{ path: string; dur: number; begin: number; fill: string; r?: number }> = ({ path, dur, begin, fill, r = 6 }) => (
  <circle r={r} fill={fill} stroke="#fff" strokeWidth="1.5"><animateMotion dur={`${dur}s`} begin={`${begin}s`} repeatCount="indefinite" path={path} /></circle>
);
const GAS_Y = 150;
const NS = { stroke: 'none' } as const;
const gases = (xs: number[]) => xs.map((x, i) => (
  <g key={x} transform={`translate(${x} ${GAS_Y + (i % 2) * 18})`}>
    <circle r="13" fill="#7a6a9a" stroke="#fff" strokeWidth="2" /><text y="4" textAnchor="middle" className="sm-force" fill="#fff" style={{ ...NS, fontSize: 10 }}>CO₂</text>
  </g>
));

const ClimateArt: React.FC<{ stepId: string; playing: boolean; reducedMotion: boolean }> = ({ stepId, playing, reducedMotion }) => {
  const svg = useRef<SVGSVGElement>(null);
  useSmilPause(svg, playing, reducedMotion, stepId);
  const anim = !reducedMotion;
  const showIr = stepId !== 'sunlight';
  const gasXs = stepId === 'gases' ? [250, 400] : stepId === 'enhanced' ? [180, 250, 320, 390, 460, 530] : [];
  const bounce = stepId === 'gases' ? 1 : stepId === 'enhanced' ? 3 : 0;
  return (
    <svg ref={svg} className="sm-art" viewBox="0 0 640 360" role="img" aria-label={`Greenhouse effect: ${CLIMATE_STEPS.find(s => s.id === stepId)?.label}`}>
      <rect width="640" height="360" fill="#1d2a4a" />
      <rect y="110" width="640" height="190" fill="#6fa8d8" opacity=".5" />
      <text x="620" y="130" textAnchor="end" className="sm-note sm-name--light">Atmosphere</text>
      <text x="620" y="30" textAnchor="end" className="sm-note sm-name--light">Space</text>
      <rect y="300" width="640" height="60" fill="#3f8a4f" />
      <rect x="0" y="300" width="640" height="10" fill={stepId === 'enhanced' ? '#c0463c' : stepId === 'gases' ? '#d1884a' : '#6fae3f'} opacity=".8" />
      <text x="20" y="338" className="sm-note sm-name--light">Earth&apos;s surface</text>
      <circle cx="60" cy="52" r="30" fill="#f2b93b" stroke="#fff" strokeWidth="3" />
      <text x="60" y="100" textAnchor="middle" className="sm-note sm-name--light">Sun</text>
      {gases(gasXs)}
      {gasXs.length > 0 && <text x="320" y="214" textAnchor="middle" className="sm-force" fill="#e8e0ff" style={NS}>Greenhouse gas molecules</text>}
      {anim && [0, 1, 2].map(i => <Dot key={`s${i}`} path={`M${90 + i * 20} ${70 + i * 8} L${200 + i * 110} 298`} dur={3} begin={-i} fill="#f6d34a" r={7} />)}
      {showIr && anim && [0, 1, 2, 3, 4].map(i => {
        const x = 200 + i * 80;
        const hit = i < bounce * 2 && gasXs.length > 0;
        if (gasXs.length === 0) return <Dot key={`i${i}`} path={`M${x} 296 V20`} dur={3.4} begin={-i * 0.7} fill="#ff6a3d" />;
        const gx = gasXs[i % gasXs.length];
        return hit
          ? <Dot key={`i${i}`} path={`M${gx} 296 V${GAS_Y + 16} L${gx + 30} 296`} dur={3.4} begin={-i * 0.7} fill="#ff6a3d" />
          : <Dot key={`i${i}`} path={`M${x} 296 V20`} dur={3.4} begin={-i * 0.7} fill="#ff6a3d" />;
      })}
      <text x="620" y="284" textAnchor="end" className="sm-force" fill="#f6d34a" style={NS}>{stepId === 'sunlight' ? 'Sunlight warms the ground' : ''}</text>
      {showIr && <text x="620" y="60" textAnchor="end" className="sm-force" fill="#ffb59a" style={NS}>Infrared (heat) escaping to space</text>}
      {stepId === 'gases' && <text x="320" y="260" textAnchor="middle" className="sm-force" fill="#ffd9c9" style={NS}>Some heat is sent back down</text>}
      {stepId === 'enhanced' && <text x="320" y="260" textAnchor="middle" className="sm-force" fill="#ffd9c9" style={NS}>More gases: more heat returned. Surface warms further.</text>}
    </svg>
  );
};

export const ClimateScene: React.FC = () => {
  const [selected, setSelected] = useState('forests');
  const action = ACTIONS.find(a => a.id === selected) ?? ACTIONS[0];
  return (
    <MotionScene
      title="The Ghana Climate Action Observatory"
      description="Explore the greenhouse effect, distinguish climate drivers and evaluate practical actions using evidence."
      steps={CLIMATE_STEPS}
      stepMs={6500}
      extraControls={
        <div className="gh-jhs1-science-interaction">
          <strong>Investigate a climate action</strong>
          <ChoiceRow label="Climate action" options={ACTIONS.map(a => ({ id: a.id, label: a.label }))} value={selected} onChange={setSelected} />
          <div className="gh-jhs1-science-readout" aria-live="polite">
            <strong>{action.label}</strong>
            <p><b>Potential benefits:</b> {action.impact}</p>
            <p><b>Evidence to collect:</b> {action.evidence}</p>
          </div>
        </div>
      }
      footer={
        <>
          <p>Climate solutions should be assessed fairly: consider effectiveness, cost, reliability, local needs and long-term effects.</p>
          <MoreDetails summary="Separate climate drivers">
            <p><b>Natural influences:</b> volcanic eruptions, changes in solar energy and long-term variations in Earth&apos;s orbit can affect climate.</p>
            <p><b>Human influences:</b> burning fossil fuels, deforestation, some farming practices and industrial processes add greenhouse gases or change land surfaces.</p>
            <p><b>Weather and climate:</b> weather describes short-term atmospheric conditions; climate describes patterns measured over many years.</p>
          </MoreDetails>
          <MoreDetails summary="Mitigation and adaptation">
            <p><b>Mitigation</b> reduces greenhouse-gas emissions or increases carbon storage. <b>Adaptation</b> prepares people and ecosystems for climate impacts that occur or are expected.</p>
            <p>A strong climate plan can combine mitigation and adaptation while protecting livelihoods and biodiversity.</p>
          </MoreDetails>
          <MoreDetails summary="Evaluate a green-economy initiative">
            <p>A <b>green economy</b> aims to improve well-being and livelihoods while reducing environmental risks and pressure on natural resources.</p>
            <p>Compare cost, emissions, jobs, fairness, reliability, resource use and long-term results. Use trustworthy measurements and identify who benefits or may be left out.</p>
            <p>In Ghana, examples to investigate include forest restoration, renewable energy, clean cooking, sustainable farming and improved waste management. Distinguish measured outcomes from promises or misinformation.</p>
          </MoreDetails>
        </>
      }
    >
      {({ step, playing, reducedMotion }) => <ClimateArt stepId={step.id} playing={playing} reducedMotion={reducedMotion} />}
    </MotionScene>
  );
};

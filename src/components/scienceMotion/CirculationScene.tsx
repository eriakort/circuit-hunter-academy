import React, { useRef, useState } from 'react';
import { MotionScene, type MotionStep } from './MotionScene';
import { ChoiceRow } from './ChoiceRow';
import { MoreDetails } from './MoreDetails';
import { useSmilPause } from './useSmilPause';

export const CIRCULATION_STEPS: MotionStep[] = [
  { id: 'body', label: 'Body tissues', caption: 'The left side of the heart pumps oxygen-rich blood through arteries. Capillaries allow oxygen and nutrients to move from blood into cells. Route: Heart → body tissues → veins.' },
  { id: 'lungs', label: 'Lungs and alveoli', caption: 'Blood arriving from the right side of the heart passes through lung capillaries. Oxygen diffuses from air in the alveoli into blood; carbon dioxide diffuses into the alveoli. Route: Heart → lungs → heart.' },
  { id: 'heart', label: 'Heart chambers', caption: 'The right atrium receives blood returning from the body and the right ventricle sends it to the lungs. The left atrium receives blood from the lungs and the left ventricle pumps it to the body. Valves help prevent backflow.' }
];

const PARTS = [
  { id: 'plasma', label: 'Plasma', role: 'Liquid transport medium', detail: 'Carries dissolved nutrients, hormones, carbon dioxide and waste products around the body.' },
  { id: 'red', label: 'Red blood cells', role: 'Oxygen transport', detail: 'Contain haemoglobin, which binds oxygen in the lungs and releases it to body tissues.' },
  { id: 'white', label: 'White blood cells', role: 'Body defence', detail: 'Help protect the body by recognising and responding to pathogens.' },
  { id: 'platelets', label: 'Platelets', role: 'Blood clotting', detail: 'Help form a clot at a damaged blood vessel and reduce blood loss.' }
];

const RED = '#e0524a';
const BLUE = '#4a6fd1';
// Blood changes colour where it picks up or gives away oxygen.
const LUNG_PATH = 'M298 138 C262 104 246 92 236 82 H404 C394 92 376 106 342 138';
const BODY_PATH = 'M342 206 C380 250 470 262 470 304 H170 C170 262 262 250 298 206';

const Token: React.FC<{ path: string; dur: number; begin: number; from: string; to: string; opacity: number }> = ({ path, dur, begin, from, to, opacity }) => (
  <circle r="7" fill={from} stroke="#fff" strokeWidth="1.5" opacity={opacity}>
    <animateMotion dur={`${dur}s`} begin={`${begin}s`} repeatCount="indefinite" path={path} />
    <animate attributeName="fill" values={`${from};${from};${to};${to}`} keyTimes="0;.42;.58;1" dur={`${dur}s`} begin={`${begin}s`} repeatCount="indefinite" />
  </circle>
);

const CirculationArt: React.FC<{ stepId: string; playing: boolean; reducedMotion: boolean }> = ({ stepId, playing, reducedMotion }) => {
  const svg = useRef<SVGSVGElement>(null);
  useSmilPause(svg, playing, reducedMotion, stepId);
  const lungs = stepId === 'lungs' || stepId === 'heart';
  const body = stepId === 'body' || stepId === 'heart';
  const chambers = stepId === 'heart';
  return (
    <svg ref={svg} className="sm-art" viewBox="0 0 640 350" role="img" aria-label={`Simplified circulation: heart, lungs and body tissues. ${stepId} selected. Red is oxygen-rich blood, blue is oxygen-poor blood.`}>
      <rect width="640" height="350" fill="#fbf4ee" />
      {/* Lungs */}
      <g opacity={lungs ? 1 : 0.45}>
        <path d="M236 80 C200 70 170 100 176 140 C180 160 216 160 236 140 Z" fill="#f6c9c9" stroke="#c98080" strokeWidth="3" />
        <path d="M404 80 C440 70 470 100 464 140 C460 160 424 160 404 140 Z" fill="#f6c9c9" stroke="#c98080" strokeWidth="3" />
        {[[200, 110], [214, 126], [196, 132], [222, 106]].map(([x, y]) => <circle key={`l${x}`} cx={x} cy={y} r="6" fill="#fff" stroke="#c98080" />)}
        {[[440, 110], [426, 126], [444, 132], [418, 106]].map(([x, y]) => <circle key={`r${x}`} cx={x} cy={y} r="6" fill="#fff" stroke="#c98080" />)}
        <text x="206" y="186" textAnchor="middle" className="sm-name sm-name--sm">Lungs (alveoli)</text>
        {stepId === 'lungs' && <g><text x="130" y="86" className="sm-force" fill="#1f6b4f">O₂ in</text><text x="130" y="104" className="sm-force" fill="#6a5a3a">CO₂ out</text></g>}
      </g>
      {/* Body tissues */}
      <g opacity={body ? 1 : 0.45}>
        <rect x="150" y="296" width="340" height="34" rx="12" fill="#f0d9c4" stroke="#b58b66" strokeWidth="3" />
        <text x="320" y="318" textAnchor="middle" className="sm-name sm-name--sm">Body tissues (capillaries)</text>
        {stepId === 'body' && <g><text x="510" y="296" className="sm-force" fill="#1f6b4f">O₂ to cells</text><text x="510" y="314" className="sm-force" fill="#6a5a3a">CO₂ to blood</text></g>}
      </g>

      {/* Vessels */}
      <path d={LUNG_PATH} fill="none" stroke={lungs ? '#b9a5c9' : '#e2d8e9'} strokeWidth="7" strokeLinecap="round" />
      <path d={BODY_PATH} fill="none" stroke={body ? '#b9a5c9' : '#e2d8e9'} strokeWidth="7" strokeLinecap="round" />

      {/* Heart */}
      <g transform="translate(320 172)">
        <g>
          {!reducedMotion && <animateTransform attributeName="transform" type="scale" values="1;1.06;1;1" keyTimes="0;.15;.3;1" dur="1.1s" repeatCount="indefinite" />}
          <rect x="-56" y="-44" width="56" height="88" rx="22" fill="#9db4ee" stroke="#4a6fd1" strokeWidth="3" />
          <rect x="0" y="-44" width="56" height="88" rx="22" fill="#f2a29c" stroke="#e0524a" strokeWidth="3" />
          <path d="M-56 0 H56" stroke="#fff" strokeWidth="2" strokeDasharray="4 3" />
        </g>
        <g className="sm-force" style={{ pointerEvents: 'none' }} fontSize="10">
          <text x="-28" y="-18" textAnchor="middle" className="sm-heartlab">{chambers ? 'Right atrium' : ''}</text>
          <text x="-28" y="26" textAnchor="middle" className="sm-heartlab">{chambers ? 'Right ventricle' : ''}</text>
          <text x="28" y="-18" textAnchor="middle" className="sm-heartlab">{chambers ? 'Left atrium' : ''}</text>
          <text x="28" y="26" textAnchor="middle" className="sm-heartlab">{chambers ? 'Left ventricle' : ''}</text>
        </g>
        {!chambers && <text y="4" textAnchor="middle" className="sm-name">Heart</text>}
      </g>

      {/* Blood cells travelling round: they change colour where oxygen changes */}
      {!reducedMotion && (
        <g>
          {[0, 1, 2].map(i => <Token key={`b${i}`} path={BODY_PATH} dur={6} begin={-i * 2} from={RED} to={BLUE} opacity={body ? 1 : 0.18} />)}
          {[0, 1, 2].map(i => <Token key={`l${i}`} path={LUNG_PATH} dur={4.5} begin={-i * 1.5} from={BLUE} to={RED} opacity={lungs ? 1 : 0.18} />)}
        </g>
      )}
      <g transform="translate(24 24)">
        <circle cx="8" cy="8" r="7" fill={RED} /><text x="22" y="13" className="sm-note sm-note--dark">Oxygen-rich blood</text>
        <circle cx="8" cy="30" r="7" fill={BLUE} /><text x="22" y="35" className="sm-note sm-note--dark">Oxygen-poor blood</text>
      </g>
    </svg>
  );
};

export const CirculationScene: React.FC = () => {
  const [part, setPart] = useState('red');
  const selected = PARTS.find(p => p.id === part) ?? PARTS[1];
  return (
    <MotionScene
      title="The Circulation and Respiration Navigator"
      description="Follow oxygen from the air to body cells and discover how the heart, blood and blood vessels work together."
      steps={CIRCULATION_STEPS}
      stepMs={7000}
      extraControls={
        <>
          <ChoiceRow label="Explore the four parts of blood" options={PARTS.map(p => ({ id: p.id, label: p.label }))} value={part} onChange={setPart} />
          <div className="gh-jhs1-science-readout" aria-live="polite">
            <strong>{selected.label}</strong>
            <p><b>Main role:</b> {selected.role}.</p>
            <p>{selected.detail}</p>
          </div>
        </>
      }
      footer={
        <>
          <p>This learning model simplifies the human circulatory and respiratory systems. It is for science education, not for diagnosing or treating health conditions.</p>
          <MoreDetails summary="Breathing is not the same as cellular respiration">
            <p><b>Breathing (ventilation):</b> movement of air into and out of the lungs.</p>
            <p><b>Gas exchange:</b> oxygen moves from alveoli into blood, while carbon dioxide moves from blood into alveoli.</p>
            <p><b>Cellular respiration:</b> a chemical process in cells that releases energy from glucose. In aerobic respiration, glucose and oxygen produce carbon dioxide, water and energy.</p>
            <p><b>Remember:</b> the lungs bring oxygen into the blood; the circulatory system transports it to cells; cells use it during aerobic respiration.</p>
          </MoreDetails>
          <MoreDetails summary="Check your understanding">
            <p><b>Arteries:</b> carry blood away from the heart. They do not always carry oxygen-rich blood.</p>
            <p><b>Veins:</b> carry blood towards the heart. They do not always carry oxygen-poor blood.</p>
            <p><b>Capillaries:</b> tiny vessels with thin walls where substances are exchanged between blood and tissues.</p>
            <p><b>Valves:</b> help keep blood moving in the correct direction through the heart and some veins.</p>
          </MoreDetails>
        </>
      }
    >
      {({ step, playing, reducedMotion }) => <CirculationArt stepId={step.id} playing={playing} reducedMotion={reducedMotion} />}
    </MotionScene>
  );
};

import React, { useRef } from 'react';
import { MotionScene, type MotionStep } from './MotionScene';
import { useSmilPause } from './useSmilPause';

export const DIGESTION_STEPS: MotionStep[] = [
  { id: 'mouth', label: 'Mouth', caption: 'Teeth break food into smaller pieces. Saliva moistens food and begins starch digestion.' },
  { id: 'oesophagus', label: 'Oesophagus', caption: 'Muscular movements push swallowed food towards the stomach.' },
  { id: 'stomach', label: 'Stomach', caption: 'Muscles churn food and mix it with digestive juices.' },
  { id: 'small', label: 'Small intestine', caption: 'Digestion is completed and nutrients pass through the intestinal wall into the blood.' },
  { id: 'large', label: 'Large intestine', caption: 'Much of the remaining water is absorbed before waste leaves the body.' }
];

const ROUTES: Record<string, string> = {
  mouth: 'M296 50 Q320 66 344 50 Q320 40 296 50',
  oesophagus: 'M320 74 V160',
  stomach: 'M318 176 C296 190 306 226 338 226 C378 226 392 196 366 184 C350 176 334 184 322 176',
  small: 'M340 244 V272 H266 Q252 272 252 285 Q252 298 266 298 H428 Q442 298 442 311 Q442 324 428 324 H266 Q252 324 252 337 Q252 350 266 350 H440',
  large: 'M470 350 V262 H206 V384'
};

const ORGAN: Record<string, string> = { mouth: 'm', oesophagus: 'o', stomach: 's', small: 'si', large: 'li' };

export const DigestionScene: React.FC = () => (
  <MotionScene
    title="The Digestion Defender"
    description="Follow food through the digestive system and discover each organ’s role."
    steps={DIGESTION_STEPS}
    footer="A balanced diet, clean water and safe food handling support digestive health. The drawing is simplified and not to scale."
  >
    {({ step, playing, reducedMotion }) => <DigestionArt stepId={step.id} playing={playing} reducedMotion={reducedMotion} />}
  </MotionScene>
);

const DigestionArt: React.FC<{ stepId: string; playing: boolean; reducedMotion: boolean }> = ({ stepId, playing, reducedMotion }) => {
  const svg = useRef<SVGSVGElement>(null);
  useSmilPause(svg, playing, reducedMotion, stepId);
  const on = (id: string) => (stepId === id ? ' is-active' : '');
  const label = DIGESTION_STEPS.find(s => s.id === stepId)?.label;
  const speed = stepId === 'small' ? 7 : stepId === 'large' ? 6 : stepId === 'stomach' ? 3 : 2.4;
  return (
    <svg ref={svg} className="sm-art" viewBox="0 0 640 400" role="img" aria-label={`Digestive system, ${label}`}>
      <rect width="640" height="400" fill="#f6efe3" />
      {/* Body side label */}
      <text x="40" y="60" className="sm-note">Food goes in here</text>
      <text x="40" y="390" className="sm-note">Waste leaves the body</text>

      {/* Organs */}
      <path d="M470 372 V262 H206 V380" className={`sm-organ sm-organ--large${on('large')}`} />
      <path d="M340 244 V272 H266 Q252 272 252 285 Q252 298 266 298 H428 Q442 298 442 311 Q442 324 428 324 H266 Q252 324 252 337 Q252 350 266 350 H440 H470" className={`sm-organ sm-organ--small${on('small')}`} />
      <path d="M320 74 V168" className={`sm-organ sm-organ--tube${on('oesophagus')}`} />
      <path d="M310 160 C280 172 282 240 340 244 C396 246 420 206 394 186 C378 174 352 180 340 170 L336 158 Z" className={`sm-organ sm-organ--fill${on('stomach')}`} />
      <ellipse cx="320" cy="50" rx="34" ry="20" className={`sm-organ sm-organ--fill${on('mouth')}`} />
      <path d="M298 48 Q320 60 342 48" className="sm-mouthline" />

      {/* Organ names */}
      <text x="372" y="52" className="sm-name">Mouth</text>
      <text x="338" y="124" className="sm-name">Oesophagus</text>
      <text x="408" y="214" className="sm-name">Stomach</text>
      <text x="522" y="338" className="sm-name sm-name--sm">Small</text><text x="522" y="353" className="sm-name sm-name--sm">intestine</text>
      <text x="96" y="312" className="sm-name sm-name--sm">Large</text><text x="96" y="327" className="sm-name sm-name--sm">intestine</text>

      {/* Route of the food in the chosen step */}
      <path d={ROUTES[stepId]} className="sm-route is-active" id={`dg-${ORGAN[stepId]}`} fill="none" />

      {/* Blood vessel next to the intestines */}
      <path d="M504 262 V372" className="sm-vessel" />
      <text x="518" y="278" className="sm-name sm-name--sm sm-name--red">Blood</text>
      {/* Nutrients pass into the blood (small intestine) */}
      {stepId === 'small' && [0, 1, 2, 3].map(i => (
        <circle key={i} r="6" className="sm-nutrient"><animateMotion dur="2.4s" begin={`${-i * 0.6}s`} repeatCount="indefinite" path={`M${436 + (i % 2) * 6} ${[298, 324, 350, 311][i]} H504`} /></circle>
      ))}
      {stepId === 'small' && <text x="518" y="298" className="sm-note">Nutrients</text>}
      {/* Water is absorbed (large intestine) */}
      {stepId === 'large' && [0, 1, 2].map(i => (
        <path key={i} d="M0 -6 q5 6 0 10 q-5 -4 0 -10" className="sm-drop"><animateMotion dur="2.2s" begin={`${-i * 0.7}s`} repeatCount="indefinite" path={`M470 ${290 + i * 28} H504`} /></path>
      ))}
      {stepId === 'large' && <text x="518" y="298" className="sm-note">Water</text>}

      {/* Food moving along the chosen route */}
      {!reducedMotion && (
        <g key={stepId}>
          {[0, 1, 2].map(i => (
            <circle key={i} r={stepId === 'mouth' ? 5 : 8} className="sm-food">
              {stepId === 'mouth' && <animate attributeName="r" values="9;3;9" dur="1.2s" begin={`${-i * 0.4}s`} repeatCount="indefinite" />}
              <animateMotion dur={`${speed}s`} begin={`${-(i * speed) / 3}s`} repeatCount="indefinite" rotate="0"><mpath href={`#dg-${ORGAN[stepId]}`} /></animateMotion>
            </circle>
          ))}
        </g>
      )}
      {reducedMotion && <circle cx="320" cy="50" r="9" className="sm-food" />}
    </svg>
  );
};

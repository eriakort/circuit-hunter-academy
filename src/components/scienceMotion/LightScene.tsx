import React, { useRef, useState } from 'react';
import { MotionScene, type MotionStep } from './MotionScene';
import { ChoiceRow } from './ChoiceRow';
import { MoreDetails } from './MoreDetails';
import { useSmilPause } from './useSmilPause';

export const LIGHT_STEPS: MotionStep[] = [
  { id: 'pinhole', label: 'Pinhole camera', caption: 'Light travels in straight lines through a uniform transparent medium. Rays from the top and bottom of an object cross at the tiny aperture. The image on the screen is inverted: the top of the object appears at the bottom, and the bottom appears at the top.' },
  { id: 'shadow', label: 'Shadows', caption: 'An opaque object blocks light. The umbra is the fully shaded central region; the penumbra is the partly shaded region produced by a source with noticeable size. Move an object closer to a torch and its shadow usually becomes larger; closer to the screen and the shadow usually becomes smaller.' },
  { id: 'refraction', label: 'Refraction', caption: 'When light passes between materials such as air and water, its speed changes. Its direction may bend at the boundary; this is refraction. A straw partly under water can appear bent or displaced; the straw is not actually broken.' }
];

const Ray: React.FC<{ path: string; dur: number; begin: number; colour?: string }> = ({ path, dur, begin, colour = '#f2b93b' }) => (
  <circle r="5" fill={colour} stroke="#fff" strokeWidth="1.5"><animateMotion dur={`${dur}s`} begin={`${begin}s`} repeatCount="indefinite" path={path} /></circle>
);

const Pinhole: React.FC<{ anim: boolean }> = ({ anim }) => {
  const up = 'M96 96 L330 206 L540 304';
  const down = 'M96 300 L330 206 L540 108';
  return (
    <g>
      <rect x="318" y="40" width="24" height="160" fill="#4a4a42" /><rect x="318" y="212" width="24" height="108" fill="#4a4a42" />
      <text x="330" y="34" textAnchor="middle" className="sm-note sm-note--dark">Tiny hole</text>
      <rect x="534" y="84" width="10" height="244" fill="#e8e0cf" stroke="#8a8272" strokeWidth="2" />
      <text x="540" y="352" textAnchor="middle" className="sm-note sm-note--dark">Screen</text>
      {/* Object: an upright arrow (candle flame) */}
      <path d="M96 300 V96 M84 112 L96 94 L108 112" stroke="#d1452f" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <text x="96" y="326" textAnchor="middle" className="sm-note sm-note--dark">Object</text>
      {/* Inverted image */}
      <path d="M540 108 V304 M530 290 L540 306 L550 290" stroke="#d1452f" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity=".75" />
      <text x="486" y="206" textAnchor="end" className="sm-force" fill="#b5392f">Inverted image</text>
      <path d={up} fill="none" stroke="#f2b93b" strokeWidth="2" opacity=".5" /><path d={down} fill="none" stroke="#f2b93b" strokeWidth="2" opacity=".5" />
      {anim && [0, 1, 2].map(i => <React.Fragment key={i}><Ray path={up} dur={3} begin={-i} /><Ray path={down} dur={3} begin={-i} colour="#ffb870" /></React.Fragment>)}
    </g>
  );
};

// Point source at x=60. Shadow of a 60-unit object on a screen at x=540, for three object positions.
const SOURCE_X = 60;
const SCREEN_X = 540;
const CY = 190;
const OBJ_H = 60;
const POSITIONS = [170, 300, 420];
const shadowHalf = (x: number) => (OBJ_H / 2) * ((SCREEN_X - SOURCE_X) / (x - SOURCE_X));
const polygon = (x: number, pad: number) => { const h = shadowHalf(x) + pad; return `${x},${CY - OBJ_H / 2} ${SCREEN_X},${CY - h} ${SCREEN_X},${CY + h} ${x},${CY + OBJ_H / 2}`; };
const seq = (values: string[]) => [...values, values[1], values[0]].join(';');

const Shadow: React.FC<{ anim: boolean }> = ({ anim }) => {
  const order = [0, 1, 2, 1, 0].map(i => POSITIONS[i]);
  const dur = '8s';
  const kt = '0;.25;.5;.75;1';
  return (
    <g>
      {/* Penumbra and umbra on the way to the screen */}
      <polygon points={polygon(POSITIONS[1], 36)} fill="#8a8a82" opacity=".25">
        {anim && <animate attributeName="points" values={order.map(x => polygon(x, 36)).join(';')} keyTimes={kt} dur={dur} repeatCount="indefinite" />}
      </polygon>
      <polygon points={polygon(POSITIONS[1], 0)} fill="#33353a" opacity=".55">
        {anim && <animate attributeName="points" values={order.map(x => polygon(x, 0)).join(';')} keyTimes={kt} dur={dur} repeatCount="indefinite" />}
      </polygon>
      <rect x={SCREEN_X} y="30" width="10" height="320" fill="#e8e0cf" stroke="#8a8272" strokeWidth="2" />
      <text x={SCREEN_X + 4} y="368" textAnchor="middle" className="sm-note sm-note--dark">Screen</text>
      <circle cx={SOURCE_X} cy={CY} r="14" fill="#f2b93b" stroke="#fff" strokeWidth="3" />
      <text x={SOURCE_X} y={CY + 38} textAnchor="middle" className="sm-note sm-note--dark">Torch</text>
      <rect x={POSITIONS[1] - 7} y={CY - OBJ_H / 2} width="14" height={OBJ_H} rx="4" fill="#6b4a2b">
        {anim && <animate attributeName="x" values={order.map(x => x - 7).join(';')} keyTimes={kt} dur={dur} repeatCount="indefinite" />}
      </rect>
      <text x="330" y="70" textAnchor="middle" className="sm-note sm-note--dark">Opaque object moves towards and away from the torch</text>
      <text x="500" y={CY - 6} textAnchor="end" className="sm-force" fill="#33353a">umbra</text>
      <text x="500" y={CY - 62} textAnchor="end" className="sm-force" fill="#6a6a62">penumbra</text>
    </g>
  );
};

// Light going from air into water: it slows and bends towards the normal (about 55° in air to about 38° in water).
const Refraction: React.FC<{ anim: boolean }> = ({ anim }) => {
  const path = 'M110 60 L320 207 L422 345';
  return (
    <g>
      <rect x="0" y="207" width="640" height="143" fill="#bfe3f2" />
      <path d="M0 207 H640" stroke="#3f9fc3" strokeWidth="3" />
      <text x="24" y="190" className="sm-note sm-note--dark">Air</text><text x="24" y="232" className="sm-note sm-note--dark">Water</text>
      <path d="M320 60 V345" stroke="#5c5a50" strokeDasharray="5 5" strokeWidth="1.5" />
      <text x="328" y="78" className="sm-note sm-note--dark">Normal (a line at right angles to the surface)</text>
      <path d={path} fill="none" stroke="#f2b93b" strokeWidth="3" opacity=".6" />
      {anim && [0, 1, 2].map(i => <Ray key={i} path={path} dur={3.2} begin={-i * 1.06} />)}
      <text x="150" y="118" className="sm-force" fill="#8a5a00">Light ray</text>
      <text x="436" y="300" className="sm-force" fill="#8a5a00">Bends towards the normal</text>
      <text x="436" y="318" className="sm-force" fill="#8a5a00">as it slows down</text>
      {/* A straw that looks bent */}
      <path d="M540 90 L574 207" stroke="#d1452f" strokeWidth="8" strokeLinecap="round" />
      <path d="M574 207 L590 262" stroke="#d1452f" strokeWidth="8" strokeLinecap="round" opacity=".85" transform="translate(-18 0)" />
      <text x="590" y="130" className="sm-note sm-note--dark">A straw looks bent</text>
      <text x="590" y="146" className="sm-note sm-note--dark">(it is not broken)</text>
    </g>
  );
};

const LightArt: React.FC<{ stepId: string; playing: boolean; reducedMotion: boolean }> = ({ stepId, playing, reducedMotion }) => {
  const svg = useRef<SVGSVGElement>(null);
  useSmilPause(svg, playing, reducedMotion, stepId);
  const anim = !reducedMotion;
  const label = LIGHT_STEPS.find(s => s.id === stepId)?.label;
  return (
    <svg ref={svg} className="sm-art" viewBox="0 0 640 380" role="img" aria-label={`Light: ${label}`}>
      <rect width="640" height="380" fill="#f6f2e8" />
      <g key={stepId}>
        {stepId === 'pinhole' && <Pinhole anim={anim} />}
        {stepId === 'shadow' && <Shadow anim={anim} />}
        {stepId === 'refraction' && <Refraction anim={anim} />}
      </g>
    </svg>
  );
};

const WATTS = [500, 1000, 2000];
const HOURS = [1, 2, 3, 4];

export const LightScene: React.FC = () => {
  const [watts, setWatts] = useState(1000);
  const [hours, setHours] = useState(3);
  const kw = watts / 1000;
  const energy = kw * hours;
  return (
    <MotionScene
      title="The Energy Conservation Guardian"
      description="Explore practical energy saving, calculate electricity use and investigate how light travels."
      steps={LIGHT_STEPS}
      stepMs={8000}
      extraControls={
        <div className="gh-jhs1-science-interaction">
          <strong>Calculate electrical energy</strong>
          <ChoiceRow label="Appliance power" options={WATTS.map(w => ({ id: String(w), label: `${w.toLocaleString('en-GB')} W appliance` }))} value={String(watts)} onChange={value => setWatts(Number(value))} />
          <ChoiceRow label="Time used" options={HOURS.map(h => ({ id: String(h), label: h === 1 ? '1 hour' : `${h} hours` }))} value={String(hours)} onChange={value => setHours(Number(value))} />
          <div className="gh-jhs1-science-readout" aria-live="polite">
            <strong>Energy used: {energy.toFixed(2)} kWh</strong>
            <p>{watts} W = {kw.toFixed(2)} kW; {kw.toFixed(2)} kW × {hours} hours = {energy.toFixed(2)} kWh.</p>
            <p>Remember: energy (kWh) = power (kW) × time (hours).</p>
          </div>
        </div>
      }
      footer={
        <>
          <p>Use safe classroom equipment such as a torch, card and screen. Never look directly at the Sun or use a laser for these investigations.</p>
          <MoreDetails summary="Reduce energy waste">
            <p>Switch off lights and appliances when they are not needed. Choose efficient lamps and appliances, avoid unnecessary standby use, and use electricity thoughtfully.</p>
            <p>Energy is transferred between forms. It is not created from nothing or destroyed; the total amount is conserved in a closed system.</p>
          </MoreDetails>
          <MoreDetails summary="Check your understanding">
            <p><b>Pinhole image:</b> inverted because light rays cross at the aperture.</p>
            <p><b>Shadow:</b> formed when an opaque object blocks light; identify the umbra and penumbra.</p>
            <p><b>Refraction:</b> bending of light as it changes speed between different materials.</p>
            <p>Keep these ideas distinct: a pinhole image is formed by straight-line travel, a shadow by blocked light, and refraction by a change in direction at a boundary.</p>
          </MoreDetails>
        </>
      }
    >
      {({ step, playing, reducedMotion }) => <LightArt stepId={step.id} playing={playing} reducedMotion={reducedMotion} />}
    </MotionScene>
  );
};

import React, { useRef } from 'react';
import { MotionScene, type MotionStep } from './MotionScene';
import { useSmilPause } from './useSmilPause';

export const FORCE_STEPS: MotionStep[] = [
  { id: 'football', label: 'Kicking a football', caption: 'Foot pushes the ball; friction and air resistance oppose motion. An unbalanced force changes the ball’s motion. A stronger or differently directed kick changes its speed or direction.' },
  { id: 'book', label: 'Book resting on a desk', caption: 'Gravity pulls down; the desk pushes up. These forces are balanced, so the book remains at rest. A stationary object can still have forces acting on it.' },
  { id: 'bicycle', label: 'Bicycle slowing down', caption: 'Brakes create friction; air resistance and rolling resistance oppose motion. The backward resultant force slows the bicycle. Friction is useful for braking and for walking without slipping.' },
  { id: 'lever', label: 'Wheelbarrow lifting a load', caption: 'The wheel is the fulcrum; the load lies between the wheel and the effort at the handles. A wheelbarrow is a second-class lever. It helps move a heavy load with less effort.' }
];

const Arrow: React.FC<{ x: number; y: number; dx: number; dy: number; colour: string; label?: string; labelDx?: number; labelDy?: number }> = ({ x, y, dx, dy, colour, label, labelDx = 0, labelDy = 0 }) => {
  const len = Math.hypot(dx, dy) || 1;
  const ux = dx / len, uy = dy / len;
  const ex = x + dx, ey = y + dy;
  const head = `${ex},${ey} ${ex - ux * 14 - uy * 8},${ey - uy * 14 + ux * 8} ${ex - ux * 14 + uy * 8},${ey - uy * 14 - ux * 8}`;
  return (
    <g>
      <line x1={x} y1={y} x2={ex - ux * 8} y2={ey - uy * 8} stroke={colour} strokeWidth="6" strokeLinecap="round" />
      <polygon points={head} fill={colour} />
      {label && <text x={ex + labelDx} y={ey + labelDy} textAnchor="middle" className="sm-force" fill={colour}>{label}</text>}
    </g>
  );
};

const GROUND = 250;
const GREEN = '#1f7a4f';
const RED = '#b5392f';
const BLUE = '#2468a8';

const Football: React.FC<{ anim: boolean }> = ({ anim }) => (
  <g>
    <g><path d="M60 232 q22 -4 36 10 l-6 10 q-22 4 -34 -2 Z" fill="#6b4a2b" />{anim && <animateTransform attributeName="transform" type="translate" values="0 0;30 0;0 0;0 0" keyTimes="0;.08;.2;1" dur="3.2s" repeatCount="indefinite" />}</g>
    <text x="76" y="278" textAnchor="middle" className="sm-note">Foot</text>
    <g>
      {anim && <animateTransform attributeName="transform" type="translate" values="0 0;380 0" keyTimes="0;1" calcMode="spline" keySplines=".15 .7 .35 1" dur="3.2s" repeatCount="indefinite" />}
      <circle cx="130" cy={GROUND - 20} r="20" fill="#fff" stroke="#33353a" strokeWidth="3" />
      <path d="M130 212 l9 7 -3 11 h-12 l-3 -11 Z" fill="#33353a" />
      <g>{anim && <animate attributeName="opacity" values="1;1;0;0" keyTimes="0;.12;.2;1" dur="3.2s" repeatCount="indefinite" />}<Arrow x={104} y={GROUND - 66} dx={64} dy={0} colour={GREEN} label="Kick (push)" labelDy={-12} labelDx={-20} /></g>
      <Arrow x={160} y={GROUND - 20} dx={-40} dy={0} colour={RED} />
      <text x="130" y={GROUND + 26} textAnchor="middle" className="sm-force" fill={RED}>Friction + air resistance</text>
    </g>
  </g>
);

const Book: React.FC<{ anim: boolean }> = ({ anim }) => (
  <g>
    <rect x="180" y="190" width="280" height="14" rx="4" fill="#8a6a3a" />
    <rect x="200" y="204" width="14" height="46" fill="#6b4a2b" /><rect x="426" y="204" width="14" height="46" fill="#6b4a2b" />
    <rect x="270" y="150" width="100" height="40" rx="3" fill="#3e7fb0" stroke="#27597f" strokeWidth="3" />
    <path d="M280 150 v40" stroke="#27597f" strokeWidth="3" />
    <g>{anim && <animate attributeName="opacity" values="1;.45;1" dur="1.6s" repeatCount="indefinite" />}<Arrow x={320} y={106} dx={0} dy={34} colour={RED} /></g>
    <text x="320" y="96" textAnchor="middle" className="sm-force" fill={RED}>Gravity (down)</text>
    <g>{anim && <animate attributeName="opacity" values="1;.45;1" dur="1.6s" repeatCount="indefinite" />}<Arrow x={320} y={236} dx={0} dy={-30} colour={GREEN} /></g>
    <text x="336" y="226" className="sm-force" fill={GREEN}>Desk pushes up</text>
    <text x="320" y="296" textAnchor="middle" className="sm-title">Balanced forces: no change in motion</text>
  </g>
);

const Bicycle: React.FC<{ anim: boolean }> = ({ anim }) => {
  const wheel = (cx: number) => (
    <g transform={`translate(${cx} ${GROUND - 34})`}>
      <circle r="34" fill="none" stroke="#33353a" strokeWidth="5" />
      <g>
        {anim && <animateTransform attributeName="transform" type="rotate" values="0;720" keyTimes="0;1" calcMode="spline" keySplines=".15 .7 .35 1" dur="3.6s" repeatCount="indefinite" />}
        <path d="M-34 0h68M0 -34v68M-24 -24l48 48M24 -24l-48 48" stroke="#33353a" strokeWidth="1.5" />
      </g>
    </g>
  );
  return (
    <g>
      <g>
        {anim && <animateTransform attributeName="transform" type="translate" values="0 0;300 0" keyTimes="0;1" calcMode="spline" keySplines=".15 .7 .35 1" dur="3.6s" repeatCount="indefinite" />}
        {wheel(110)}{wheel(210)}
        <path d="M110 216 L150 170 H190 L210 216 M150 170 L110 216 M190 170 L170 150 H156 M190 170 v-18 h14" fill="none" stroke="#c0392b" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        <Arrow x={300} y={GROUND - 34} dx={-50} dy={0} colour={RED} />
        <text x="190" y={GROUND + 28} textAnchor="middle" className="sm-force" fill={RED}>Brakes: friction slows it</text>
      </g>
    </g>
  );
};

const Lever: React.FC<{ anim: boolean }> = ({ anim }) => (
  <g>
    <g>
      {anim && <animateTransform attributeName="transform" type="rotate" values="0 190 216;-7 190 216;0 190 216" dur="3s" repeatCount="indefinite" />}
      <path d="M190 190 L250 160 H380 L420 150 L560 130 M250 160 L300 200 H390 L380 160" fill="none" stroke="#6b4a2b" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M262 160 L300 200 H380 L394 160 Z" fill="#b99b6a" stroke="#6b4a2b" strokeWidth="3" />
      <ellipse cx="330" cy="148" rx="46" ry="14" fill="#8a5a2b" />
      <Arrow x={330} y={92} dx={0} dy={40} colour={RED} label="Load" labelDy={-46} />
      <Arrow x={546} y={160} dx={0} dy={-44} colour={GREEN} label="Effort" labelDy={-6} />
    </g>
    <circle cx="190" cy="216" r="30" fill="none" stroke="#33353a" strokeWidth="6" />
    <circle cx="190" cy="216" r="5" fill="#d1a62a" />
    <text x="190" y={GROUND + 36} textAnchor="middle" className="sm-force" fill={BLUE}>Wheel = fulcrum</text>
  </g>
);

export const ForceMotionScene: React.FC = () => (
  <MotionScene
    title="The Force and Motion Pathfinder"
    description="Watch everyday situations and inspect the forces acting. Arrows show the direction and size of each force."
    steps={FORCE_STEPS}
    stepMs={6500}
    footer="Forces are pushes or pulls. Their size and direction determine whether motion changes."
  >
    {({ step, playing, reducedMotion }) => <ForceArt stepId={step.id} playing={playing} reducedMotion={reducedMotion} />}
  </MotionScene>
);

const ForceArt: React.FC<{ stepId: string; playing: boolean; reducedMotion: boolean }> = ({ stepId, playing, reducedMotion }) => {
  const svg = useRef<SVGSVGElement>(null);
  useSmilPause(svg, playing, reducedMotion, stepId);
  const anim = !reducedMotion;
  const label = FORCE_STEPS.find(s => s.id === stepId)?.label;
  return (
    <svg ref={svg} className="sm" viewBox="0 70 640 240" role="img" aria-label={`Forces: ${label}`}>
      <rect y="70" width="640" height="240" fill="#e6f1f7" />
      <rect y={GROUND} width="640" height="60" fill="#c9b27a" />
      <path d={`M0 ${GROUND}H640`} stroke="#7a5534" strokeWidth="3" />
      <g key={stepId}>
        {stepId === 'football' && <Football anim={anim} />}
        {stepId === 'book' && <Book anim={anim} />}
        {stepId === 'bicycle' && <Bicycle anim={anim} />}
        {stepId === 'lever' && <Lever anim={anim} />}
      </g>
    </svg>
  );
};

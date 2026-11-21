import React, { useRef } from 'react';
import { MotionScene, type MotionStep } from './MotionScene';
import { useSmilPause } from './useSmilPause';

const SHARED = 'Shared by both cell types: cell membrane, cytoplasm, ribosomes and genetic material.';

export const CELL_STEPS: MotionStep[] = [
  { id: 'prokaryote', label: 'Prokaryotic cell', caption: `No membrane-bound nucleus; DNA is in a nucleoid region. Example: bacteria. ${SHARED}` },
  { id: 'plant', label: 'Plant eukaryotic cell', caption: `Has a membrane-bound nucleus and membrane-bound organelles. Plants; photosynthetic tissues often contain chloroplasts, and plant cells typically have a cellulose wall and large vacuole. ${SHARED}` },
  { id: 'animal', label: 'Animal eukaryotic cell', caption: `Has a membrane-bound nucleus and membrane-bound organelles. Examples: animals, including humans. ${SHARED}` }
];

const Label: React.FC<{ x: number; y: number; text: string; anchor?: 'start' | 'end' | 'middle'; x2?: number; y2?: number }> = ({ x, y, text, anchor = 'start', x2, y2 }) => (
  <g>
    {x2 !== undefined && y2 !== undefined && <line x1={x} y1={y} x2={x2} y2={y2} stroke="#5c5a50" strokeWidth="1.5" />}
    <text x={anchor === 'end' ? x - 6 : anchor === 'start' ? x + 6 : x} y={y + 4} textAnchor={anchor} className="sm-note sm-note--dark">{text}</text>
  </g>
);

const Ribosomes: React.FC<{ pts: [number, number][] }> = ({ pts }) => <g fill="#7a5aa0">{pts.map(([x, y]) => <circle key={`${x}${y}`} cx={x} cy={y} r="3" />)}</g>;

const Streaming: React.FC<{ path: string; count?: number; dur?: number; fill?: string; r?: number }> = ({ path, count = 3, dur = 12, fill = '#e9b949', r = 4 }) => (
  <>
    <path id={`cs-${path.length}`} d={path} fill="none" stroke="none" />
    {Array.from({ length: count }, (_, i) => (
      <circle key={i} r={r} fill={fill} opacity=".9"><animateMotion dur={`${dur}s`} begin={`${-(i * dur) / count}s`} repeatCount="indefinite"><mpath href={`#cs-${path.length}`} /></animateMotion></circle>
    ))}
  </>
);

const Prokaryote: React.FC = () => (
  <g>
    <rect x="130" y="100" width="340" height="140" rx="70" fill="#e8f2d8" stroke="#6b8a3a" strokeWidth="9" />
    <rect x="139" y="109" width="322" height="122" rx="62" fill="#f6fbe9" stroke="#8aa75a" strokeWidth="3" />
    <path d="M250 150 q20 -30 40 -5 t40 0 q-6 30 -34 22 t-46 -6 q-6 -8 0 -11Z" fill="none" stroke="#7a3b9a" strokeWidth="4" strokeLinecap="round" />
    <path d="M470 170 q25 -24 50 0 t50 0" fill="none" stroke="#6b8a3a" strokeWidth="4" strokeLinecap="round">
      <animate attributeName="d" values="M470 170 q25 -24 50 0 t50 0;M470 170 q25 24 50 0 t50 0;M470 170 q25 -24 50 0 t50 0" dur="1.2s" repeatCount="indefinite" />
    </path>
    <Ribosomes pts={[[190, 150], [200, 195], [230, 130], [340, 215], [380, 130], [420, 190], [410, 150], [360, 205]]} />
    <Streaming path="M190 170 q0 -45 130 -45 t130 45 q0 45 -130 45 t-130 -45" dur={14} fill="#c9a23a" />
    <Label x={130} y={170} text="Cell wall" anchor="end" x2={138} y2={170} />
    <Label x={300} y={262} text="Nucleoid (DNA, no nucleus)" anchor="middle" x2={300} y2={168} />
    <Label x={570} y={132} text="Flagellum" anchor="middle" />
  </g>
);

const Plant: React.FC = () => (
  <g>
    <rect x="120" y="80" width="360" height="190" rx="14" fill="#e8f2d8" stroke="#4f8a3a" strokeWidth="10" />
    <rect x="130" y="90" width="340" height="170" rx="8" fill="#f6fbe9" stroke="#8aa75a" strokeWidth="2.5" />
    <rect x="215" y="115" width="170" height="120" rx="40" fill="#cfe9f5" stroke="#6aa8c8" strokeWidth="3" />
    <circle cx="170" cy="130" r="26" fill="#d9c8ef" stroke="#7a3b9a" strokeWidth="3" /><circle cx="170" cy="130" r="8" fill="#7a3b9a" />
    <Ribosomes pts={[[150, 200], [190, 232], [410, 235], [425, 120], [440, 190]]} />
    <g fill="#4fae55" stroke="#2f7a38" strokeWidth="2"><ellipse cx="160" cy="215" rx="14" ry="8" /><ellipse cx="445" cy="150" rx="14" ry="8" /><ellipse cx="420" cy="230" rx="14" ry="8" /></g>
    <Streaming path="M150 105 H440 q18 0 18 18 V230 q0 18 -18 18 H160 q-18 0 -18 -18 V123 q0 -18 18 -18Z" count={4} dur={18} fill="#e9b949" r={4} />
    <Label x={120} y={175} text="Cell wall" anchor="end" x2={124} y2={175} />
    <Label x={300} y={285} text="Large vacuole" anchor="middle" x2={300} y2={236} />
    <Label x={170} y={64} text="Nucleus" anchor="middle" x2={170} y2={104} />
    <Label x={490} y={112} text="Chloroplasts" anchor="start" x2={452} y2={145} />
  </g>
);

const Animal: React.FC = () => (
  <g>
    <ellipse cx="300" cy="170" rx="180" ry="105" fill="#fde6df" stroke="#c9705e" strokeWidth="5" />
    <circle cx="300" cy="165" r="38" fill="#d9c8ef" stroke="#7a3b9a" strokeWidth="3" /><circle cx="300" cy="165" r="12" fill="#7a3b9a" />
    <Ribosomes pts={[[200, 130], [210, 215], [390, 120], [400, 220], [250, 245], [350, 100]]} />
    <g fill="#f0a35a" stroke="#b5652a" strokeWidth="2"><ellipse cx="225" cy="125" rx="18" ry="9" transform="rotate(-20 225 125)" /><ellipse cx="385" cy="215" rx="18" ry="9" transform="rotate(20 385 215)" /></g>
    <Streaming path="M190 170 q0 -75 110 -75 t110 75 q0 75 -110 75 t-110 -75" count={3} dur={16} fill="#e9b949" r={4} />
    <Label x={120} y={170} text="Cell membrane" anchor="end" x2={122} y2={170} />
    <Label x={300} y={270} text="Nucleus" anchor="middle" x2={300} y2={205} />
    <Label x={470} y={100} text="Mitochondria" anchor="start" x2={395} y2={208} />
  </g>
);

const CellArt: React.FC<{ stepId: string; playing: boolean; reducedMotion: boolean }> = ({ stepId, playing, reducedMotion }) => {
  const svg = useRef<SVGSVGElement>(null);
  useSmilPause(svg, playing, reducedMotion, stepId);
  const label = CELL_STEPS.find(s => s.id === stepId)?.label;
  return (
    <svg ref={svg} className="sm" viewBox="0 20 640 290" role="img" aria-label={`Simplified drawing of a ${label}. Particles in the cytoplasm drift slowly around the cell.`}>
      <rect y="20" width="640" height="290" fill="#eef2f6" />
      <g key={stepId}>
        {stepId === 'prokaryote' && <Prokaryote />}
        {stepId === 'plant' && <Plant />}
        {stepId === 'animal' && <Animal />}
      </g>
      <text x="320" y="44" textAnchor="middle" className="sm-title">{label} (drawings are simplified; cells are microscopic)</text>
    </svg>
  );
};

export const CellScene: React.FC = () => (
  <MotionScene
    title="The Cell Type Investigator"
    description="Compare prokaryotic and eukaryotic cells and identify structures shared by both."
    steps={CELL_STEPS}
    stepMs={7000}
    footer="Some microorganisms are useful, while others can cause disease. Handwashing and safe food handling reduce risk."
  >
    {({ step, playing, reducedMotion }) => <CellArt stepId={step.id} playing={playing} reducedMotion={reducedMotion} />}
  </MotionScene>
);

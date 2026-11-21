import React, { useRef, useState } from 'react';
import { MotionScene, type MotionStep } from './MotionScene';
import { ChoiceRow } from './ChoiceRow';
import { MoreDetails } from './MoreDetails';
import { useSmilPause } from './useSmilPause';

export const COMPOST_STEPS: MotionStep[] = [
  { id: 'choose', label: 'Choose and sort', caption: 'Select clean plant residues and properly managed livestock manure. Remove plastic, glass, metal, treated wood and unknown waste.' },
  { id: 'layers', label: 'Build balanced layers', caption: 'Alternate moist green materials, such as fresh trimmings, with dry brown materials, such as dry leaves. Chop bulky pieces so they break down more easily.' },
  { id: 'moisture', label: 'Add moisture and air', caption: 'Keep the heap as moist as a wrung-out sponge. Turn or mix it periodically so oxygen reaches decomposers.' },
  { id: 'cure', label: 'Allow it to cure', caption: 'Give the material time to mature. Finished compost is dark, crumbly and earthy-smelling, with no recognisable fresh scraps.' }
];

export const CONDITIONS = [
  { id: 'dry', label: 'Heap is dry and dusty', answer: 'Add a little water and mix it through. Decomposer organisms need moisture to remain active.', action: 'Add water gradually', level: 18, drops: 1 },
  { id: 'wet', label: 'Heap is soggy and smells bad', answer: 'Excess water can block air spaces. Add dry brown material and turn the heap to improve drainage and aeration.', action: 'Add dry material and turn', level: 92, drops: 6 },
  { id: 'healthy', label: 'Heap is moist and earthy-smelling', answer: 'These are useful signs. Keep checking moisture and allow the compost to cure until it is dark and crumbly.', action: 'Maintain and allow curing', level: 55, drops: 3 }
] as const;
type Condition = (typeof CONDITIONS)[number];

const HEAP = 'M150 300 L210 170 H430 L490 300 Z';
const Token: React.FC<{ path: string; dur: number; begin: number; fill: string; r?: number }> = ({ path, dur, begin, fill, r = 9 }) => (
  <circle r={r} fill={fill} stroke="#fff" strokeWidth="2"><animateMotion dur={`${dur}s`} begin={`${begin}s`} repeatCount="indefinite" path={path} /></circle>
);

const Choose: React.FC<{ anim: boolean }> = ({ anim }) => (
  <g>
    <path d={HEAP} fill="#6b4a2b" opacity=".35" />
    <text x="320" y="248" textAnchor="middle" className="sm-note sm-note--dark">Compost heap</text>
    <text x="90" y="52" textAnchor="middle" className="sm-name">Suitable</text>
    <text x="548" y="52" textAnchor="middle" className="sm-name sm-name--red">Keep out</text>
    {anim && [0, 1, 2].map(i => <Token key={`g${i}`} path={`M70 ${80 + i * 34} C200 ${80 + i * 34} 250 150 320 200`} dur={3.6} begin={-i * 1.2} fill={['#6fae3f', '#c98a3a', '#8bbf4b'][i]} />)}
    <text x="90" y="260" textAnchor="middle" className="sm-note sm-note--dark">Leaves, peels, clean</text>
    <text x="90" y="276" textAnchor="middle" className="sm-note sm-note--dark">plant waste, manure</text>
    {[0, 1, 2].map(i => (
      <g key={i} transform={`translate(${548 + (i - 1) * 40} ${110 + (i % 2) * 20})`}>
        <rect x="-14" y="-14" width="28" height="28" rx="5" fill={['#8fb4c9', '#9aa3ab', '#d6d6d0'][i]} stroke="#5c5a50" strokeWidth="2" />
        <path d="M-10 -10 L10 10 M10 -10 L-10 10" stroke="#c0463c" strokeWidth="4" strokeLinecap="round" />
        {anim && <animateTransform attributeName="transform" type="translate" additive="sum" values="0 0;6 0;0 0" dur="1.2s" begin={`${i * 0.3}s`} repeatCount="indefinite" />}
      </g>
    ))}
    <text x="548" y="196" textAnchor="middle" className="sm-note sm-note--dark">Plastic, glass, metal,</text>
    <text x="548" y="212" textAnchor="middle" className="sm-note sm-note--dark">treated wood, unknown waste</text>
  </g>
);

const BANDS = [
  { y: 262, h: 36, c: '#6fae3f', n: 'Green (moist)' },
  { y: 226, h: 36, c: '#a9803f', n: 'Brown (dry)' },
  { y: 190, h: 36, c: '#6fae3f', n: 'Green (moist)' },
  { y: 154, h: 36, c: '#a9803f', n: 'Brown (dry)' }
];
const Layers: React.FC<{ anim: boolean }> = ({ anim }) => (
  <g>
    <clipPath id="cp-heap"><path d="M130 300 L190 150 H450 L510 300 Z" /></clipPath>
    <g clipPath="url(#cp-heap)">
      {BANDS.map((b, i) => (
        <rect key={i} x="120" y={b.y} width="400" height={b.h} fill={b.c} opacity={anim ? 0 : 1}>
          {anim && <animate attributeName="opacity" values="0;0;1;1" keyTimes={`0;${(i * 0.16).toFixed(2)};${(i * 0.16 + 0.12).toFixed(2)};1`} dur="6s" repeatCount="indefinite" />}
        </rect>
      ))}
    </g>
    {BANDS.map((b, i) => <text key={i} x="518" y={b.y + 24} className="sm-note sm-note--dark">{b.n}</text>)}
    <text x="320" y="130" textAnchor="middle" className="sm-title">Alternate green and brown layers; chop big pieces</text>
  </g>
);

const MoistureAir: React.FC<{ anim: boolean; condition: Condition }> = ({ anim, condition }) => {
  const wet = condition.id === 'wet';
  const dry = condition.id === 'dry';
  return (
    <g>
      <path d={HEAP} fill={dry ? '#b59a6a' : wet ? '#4a3524' : '#6b4a2b'} />
      {Array.from({ length: condition.drops }).map((_, i) => anim && (
        <ellipse key={i} rx="5" ry="8" fill="#3f9fc3"><animateMotion dur="1.8s" begin={`${-i * (1.8 / condition.drops)}s`} repeatCount="indefinite" path={`M${250 + i * 28} 60 V190`} /></ellipse>
      ))}
      {wet && <ellipse cx="320" cy="304" rx="170" ry="9" fill="#3f9fc3" opacity=".5" />}
      {dry && <g fill="#e8dcc0">{[200, 260, 330, 400].map((x, i) => <circle key={x} cx={x} cy={190 + (i % 2) * 20} r="3" />)}</g>}
      {wet ? (
        <g stroke="#c0463c" strokeWidth="5" strokeLinecap="round"><path d="M100 230 H132 M114 218 L132 230 L114 242" fill="none" /><path d="M540 230 H508 M526 218 L508 230 L526 242" fill="none" /></g>
      ) : anim && [0, 1].map(i => (
        <React.Fragment key={i}>
          <Token path={`M70 ${210 + i * 36} H210`} dur={2.4} begin={-i * 1.2} fill="#cfe6f2" r={6} />
          <Token path={`M590 ${210 + i * 36} H430`} dur={2.4} begin={-i * 1.2 - 0.6} fill="#cfe6f2" r={6} />
        </React.Fragment>
      ))}
      <text x="80" y="200" className="sm-note sm-note--dark">Air (oxygen)</text>
      {wet && <path d="M300 130 q-10 -14 0 -28 t0 -28" stroke="#7a8a2a" strokeWidth="3" fill="none" opacity=".7">{anim && <animate attributeName="opacity" values=".2;.9;.2" dur="1.6s" repeatCount="indefinite" />}</path>}
      {/* Moisture gauge */}
      <rect x="580" y="70" width="22" height="170" rx="8" fill="#e8e0cf" stroke="#8a8272" strokeWidth="2" />
      <rect x="580" y="130" width="22" height="50" fill="#9bd08a" opacity=".7" />
      <rect x="582" y={240 - condition.level * 1.7} width="18" height={condition.level * 1.7} rx="6" fill="#3f9fc3" />
      <text x="591" y="256" textAnchor="middle" className="sm-note sm-note--dark">Moisture</text>
      <text x="591" y="62" textAnchor="middle" className="sm-note sm-note--dark">Wet</text>
      <text x="544" y="160" textAnchor="end" className="sm-force" fill="#2f6a31">Wrung-out sponge</text>
    </g>
  );
};

const Cure: React.FC<{ anim: boolean }> = ({ anim }) => (
  <g>
    <path d={HEAP} fill="#6fae3f">
      {anim && <animate attributeName="fill" values="#9aa44a;#5b3f27;#3b2a1c;#3b2a1c" keyTimes="0;.5;.8;1" dur="6s" repeatCount="indefinite" />}
    </path>
    {anim && [0, 1, 2, 3, 4].map(i => <Token key={i} path={`M${230 + i * 45} 270 q20 -40 0 -80 t10 -60`} dur={3} begin={-i * 0.6} fill="#e8dcc0" r={4} />)}
    <text x="320" y="330" textAnchor="middle" className="sm-note sm-note--dark">Decomposers (tiny organisms) break down the material</text>
    <g transform="translate(560 300)"><path d="M0 0 V-40" stroke="#2f6a31" strokeWidth="4" strokeLinecap="round" /><path d="M0 -30 q-22 -4 -24 -20 q20 0 24 20 M0 -38 q22 -4 24 -20 q-20 0 -24 20" fill="#6fae3f" />
      {anim && <animateTransform attributeName="transform" type="scale" values="0.3;0.3;1;1" keyTimes="0;.5;.8;1" dur="6s" repeatCount="indefinite" additive="sum" />}
    </g>
    <text x="320" y="100" textAnchor="middle" className="sm-title">Finished compost: dark, crumbly and earthy-smelling</text>
  </g>
);

const CompostArt: React.FC<{ stepId: string; condition: Condition; playing: boolean; reducedMotion: boolean }> = ({ stepId, condition, playing, reducedMotion }) => {
  const svg = useRef<SVGSVGElement>(null);
  useSmilPause(svg, playing, reducedMotion, stepId, condition.id);
  const anim = !reducedMotion;
  return (
    <svg ref={svg} className="sm-art" viewBox="0 0 640 340" role="img" aria-label={`Composting: ${COMPOST_STEPS.find(s => s.id === stepId)?.label}`}>
      <rect width="640" height="340" fill="#eef3e2" />
      <rect y="300" width="640" height="40" fill="#8a6a3a" />
      <g key={`${stepId}-${condition.id}`}>
        {stepId === 'choose' && <Choose anim={anim} />}
        {stepId === 'layers' && <Layers anim={anim} />}
        {stepId === 'moisture' && <MoistureAir anim={anim} condition={condition} />}
        {stepId === 'cure' && <Cure anim={anim} />}
      </g>
    </svg>
  );
};

export const CompostScene: React.FC = () => {
  const [id, setId] = useState<Condition['id']>('dry');
  const condition = CONDITIONS.find(c => c.id === id) ?? CONDITIONS[0];
  return (
    <MotionScene
      title="The Composting Field Lab"
      description="Build a safe composting process, balance the materials and diagnose what a compost heap needs."
      steps={COMPOST_STEPS}
      stepMs={6000}
      extraControls={
        <div className="gh-jhs1-science-interaction">
          <strong>Diagnose the compost heap (shown in step 3)</strong>
          <ChoiceRow label="Heap condition" options={CONDITIONS.map(c => ({ id: c.id, label: c.label }))} value={id} onChange={value => setId(value as Condition['id'])} />
          <div className="gh-jhs1-science-readout" aria-live="polite">
            <strong>Recommended action: {condition.action}</strong>
            <p>{condition.answer}</p>
          </div>
        </div>
      }
      footer={
        <>
          <p>Learning model: composting speed varies with materials, moisture, temperature, oxygen and management.</p>
          <MoreDetails summary="What does a healthy compost heap need?">
            <p><b>Suitable materials:</b> clean plant residues and properly treated livestock manure. Keep plastics, glass, metals, batteries and chemical waste out.</p>
            <p><b>Moisture:</b> a wrung-out-sponge feel supports decomposers. Too little water slows decomposition; excess water can reduce oxygen.</p>
            <p><b>Oxygen:</b> turning and mixing introduce air. A compact, waterlogged heap may develop unpleasant smells.</p>
            <p><b>Curing:</b> mature compost is dark, crumbly and earthy-smelling. Time to maturity depends on materials, weather and management.</p>
          </MoreDetails>
          <MoreDetails summary="Protect people and the environment">
            <p>Use gloves, cover cuts, wash hands after handling compost and keep the heap away from drinking-water sources and food preparation areas. Ask a trained adult for guidance.</p>
            <p>Never handle human excreta or animal carcasses as ordinary school compost. These can carry pathogens and require trained, regulated treatment. Do not apply fresh manure directly to food crops; follow local agricultural guidance.</p>
          </MoreDetails>
        </>
      }
    >
      {({ step, playing, reducedMotion }) => <CompostArt stepId={step.id} condition={condition} playing={playing} reducedMotion={reducedMotion} />}
    </MotionScene>
  );
};

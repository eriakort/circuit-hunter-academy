import React, { useRef, useState } from 'react';
import { MotionScene, type MotionStep } from './MotionScene';
import { ChoiceRow } from './ChoiceRow';
import { MoreDetails } from './MoreDetails';
import { useSmilPause } from './useSmilPause';

/** One 640x300 SVG stage that pauses with the scene and re-syncs when `depKey` changes. */
const Stage: React.FC<{ label: string; depKey: string; playing: boolean; reducedMotion: boolean; bg?: string; children: React.ReactNode }> = ({ label, depKey, playing, reducedMotion, bg = '#eef3e6', children }) => {
  const ref = useRef<SVGSVGElement>(null);
  useSmilPause(ref, playing, reducedMotion, depKey);
  return (
    <svg ref={ref} className="sm-art" viewBox="0 0 640 300" role="img" aria-label={label}>
      <rect width="640" height="300" fill={bg} />
      <g key={depKey}>{children}</g>
    </svg>
  );
};
const Cap: React.FC<{ x: number; y: number; text: string; anchor?: 'start' | 'middle' | 'end' }> = ({ x, y, text, anchor = 'middle' }) => (
  <text x={x} y={y} textAnchor={anchor} className="sm-note sm-note--dark">{text}</text>
);
const Ground: React.FC<{ y?: number; colour?: string }> = ({ y = 240, colour = '#a77b50' }) => (
  <g><rect y={y} width="640" height={300 - y} fill={colour} /><rect y={y} width="640" height="5" fill="#7a5a36" /></g>
);
const Drops: React.FC<{ x0: number; x1: number; y0: number; y1: number; n: number; colour?: string; dur?: number }> = ({ x0, x1, y0, y1, n, colour = '#3e91c8', dur = 1.2 }) => (
  <g>
    {Array.from({ length: n }, (_, i) => {
      const x = x0 + ((x1 - x0) * (i + 0.5)) / n;
      return (
        <ellipse key={i} cx={x} rx="4" ry="7" fill={colour}>
          <animate attributeName="cy" values={`${y0};${y1}`} dur={`${dur}s`} begin={`${-(i % 5) * (dur / 5)}s`} repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;1;0" keyTimes="0;.8;1" dur={`${dur}s`} begin={`${-(i % 5) * (dur / 5)}s`} repeatCount="indefinite" />
        </ellipse>
      );
    })}
  </g>
);
const Plant: React.FC<{ x: number; y: number; h: number; colour?: string; grow?: boolean; top?: React.ReactNode }> = ({ x, y, h, colour = '#4b8b48', grow, top }) => (
  <g transform={`translate(${x} ${y})`}>
    <g>
      <path d={`M0 0 V${-h}`} stroke={colour} strokeWidth="5" strokeLinecap="round" />
      <path d={`M0 ${-h * 0.5} q-22 -10 -26 -28 q22 2 26 28 M0 ${-h * 0.7} q22 -10 26 -28 q-22 2 -26 28`} fill="#76a85b" stroke={colour} strokeWidth="2" />
      {top}
      {grow && <animateTransform attributeName="transform" type="scale" values="1 .35;1 1;1 1" keyTimes="0;.6;1" dur="3.6s" repeatCount="indefinite" additive="sum" />}
    </g>
  </g>
);
const Sun: React.FC<{ x?: number; y?: number }> = ({ x = 560, y = 56 }) => (
  <g transform={`translate(${x} ${y})`}><circle r="26" fill="#f2b93b" stroke="#fff" strokeWidth="3" /><g>{[0, 45, 90, 135, 180, 225, 270, 315].map(a => <path key={a} d="M0 -34 V-46" stroke="#f2b93b" strokeWidth="4" strokeLinecap="round" transform={`rotate(${a})`} />)}<animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="20s" repeatCount="indefinite" /></g></g>
);
const Hoe: React.FC = () => (
  <g><path d="M0 0 L60 -150" stroke="#8a6a3a" strokeWidth="8" strokeLinecap="round" /><path d="M-26 -8 L26 -8 L16 22 L-16 22 Z" fill="#8a96a0" stroke="#4b5560" strokeWidth="3" transform="rotate(-20)" /></g>
);

const SoftSteps = (items: [string, string, string][]): MotionStep[] => items.map(([id, label, caption]) => ({ id, label, caption }));

/* ---------- JHS 1 crop production ---------- */
const CROP_PHASES = SoftSteps([
  ['prepare', 'Prepare the land', 'Choose a suitable site, check soil and water, clear safely and prepare beds or ridges. Protect trees and avoid burning vegetation.'],
  ['plant', 'Plant', 'Use healthy seeds or planting materials, plant at the right depth and leave suitable spacing.'],
  ['care', 'Care for the crop', 'Water when needed, control weeds, monitor pests and diseases, and use compost or labelled fertiliser safely.'],
  ['harvest', 'Harvest and store', 'Harvest at the right stage, handle produce gently and store it in clean, dry, well-ventilated conditions.']
]);
const CROPS: Record<string, { name: string; colour: string }> = { maize: { name: 'Maize', colour: '#e9b949' }, cassava: { name: 'Cassava', colour: '#b98555' }, cocoa: { name: 'Cocoa', colour: '#c0602f' } };

const CropArt: React.FC<{ phase: string; crop: string; playing: boolean; reducedMotion: boolean }> = ({ phase, crop, playing, reducedMotion }) => {
  const anim = !reducedMotion;
  const c = CROPS[crop];
  return (
    <Stage label={`${c.name}: ${phase}`} depKey={`${phase}-${crop}`} playing={playing} reducedMotion={reducedMotion}>
      <Ground />
      <Sun />
      {phase === 'prepare' && (
        <g>
          {[110, 210, 310, 410, 510].map(x => <path key={x} d={`M${x - 40} 240 q40 -26 80 0`} fill="#8b6b45" />)}
          <g transform="translate(170 235)"><Hoe />{anim && <animateTransform attributeName="transform" type="rotate" values="-8;14;-8" dur="2s" repeatCount="indefinite" additive="sum" />}</g>
          <Cap x={320} y={285} text="Clear, loosen and shape the soil into ridges" />
        </g>
      )}
      {phase === 'plant' && (
        <g>
          {[130, 250, 370, 490].map((x, i) => (
            <g key={x}>
              <ellipse cx={x} cy="246" rx="14" ry="5" fill="#5d4126" />
              <circle r="6" fill={c.colour} stroke="#6b4a2b" strokeWidth="1.5"><animate attributeName="cx" values={`${x};${x}`} dur="2.4s" repeatCount="indefinite" /><animate attributeName="cy" values="90;244;244" keyTimes="0;.5;1" dur="2.4s" begin={`${-i * 0.5}s`} repeatCount="indefinite" /></circle>
            </g>
          ))}
          <Cap x={320} y={285} text="Healthy seed or planting material, right depth, even spacing" />
        </g>
      )}
      {phase === 'care' && (
        <g>
          {[130, 250, 370, 490].map(x => <Plant key={x} x={x} y={240} h={80} grow />)}
          <Drops x0={100} x1={520} y0={90} y1={235} n={14} />
          <g transform="translate(100 60)"><rect x="-30" y="-14" width="60" height="30" rx="6" fill="#58a05a" stroke="#2f6a31" strokeWidth="3" /><path d="M30 -2 L60 -22" stroke="#2f6a31" strokeWidth="6" strokeLinecap="round" /></g>
          <Cap x={320} y={285} text="Water, weed, watch for pests, feed the soil" />
        </g>
      )}
      {phase === 'harvest' && (
        <g>
          {[110, 200, 290].map(x => <Plant key={x} x={x} y={240} h={90} top={<circle cy="-90" r="9" fill={c.colour} stroke="#6b4a2b" strokeWidth="2" />} />)}
          <path d="M440 200 h130 l-14 44 h-102 z" fill="#c4953f" stroke="#7a5a1a" strokeWidth="3" />
          {[0, 1, 2].map(i => <circle key={i} r="9" fill={c.colour} stroke="#6b4a2b" strokeWidth="2"><animateMotion dur="3s" begin={`${-i}s`} repeatCount="indefinite" path={`M${110 + i * 90} 150 Q380 60 ${480 + i * 30} 200`} /></circle>)}
          <Cap x={505} y={270} text="Store clean, dry and ventilated" />
        </g>
      )}
    </Stage>
  );
};

export const CropProductionScene: React.FC = () => {
  const [crop, setCrop] = useState('maize');
  const [phaseId, setPhaseId] = useState('prepare');
  const steps = CROP_PHASES.map(p => ({ ...p, caption: `${CROPS[crop].name}: ${p.caption}` }));
  return (
    <MotionScene
      key={crop}
      stepId={phaseId}
      onStepChange={setPhaseId}
      title="The Crop Care Strategist"
      description="Plan a crop journey from site selection to safe storage using familiar Ghanaian crops."
      steps={steps}
      stepMs={5000}
      extraControls={
        <>
          <ChoiceRow label="Crop" options={Object.entries(CROPS).map(([id, v]) => ({ id, label: v.name }))} value={crop} onChange={setCrop} />
        </>
      }
      footer={<p>Crop needs vary: always adapt planting time and care to local conditions and agricultural guidance.</p>}
    >
      {({ step, playing, reducedMotion }) => <CropArt phase={step.id} crop={crop} playing={playing} reducedMotion={reducedMotion} />}
    </MotionScene>
  );
};

/* ---------- JHS 1 animal production ---------- */
const ANIMAL_DATA: Record<string, { name: string; group: string; food: string; care: string; uses: string; body: string }> = {
  goat: { name: 'Goat', group: 'Ruminant', food: 'Browses on leaves, grasses and suitable forage.', care: 'Needs clean water, suitable shelter, space and regular health checks.', uses: 'May provide meat, skins and sometimes milk, depending on local practice.', body: '#b98555' },
  cattle: { name: 'Cattle', group: 'Ruminant', food: 'Eat grasses and other suitable forage; clean water is essential.', care: 'Need adequate grazing or feed, shade, clean water and veterinary care.', uses: 'Can provide milk, meat, hides and, in some settings, draught power.', body: '#7a5a3a' },
  pig: { name: 'Pig', group: 'Monogastric', food: 'Needs balanced, clean feed and constant access to clean water.', care: 'Needs a clean, ventilated pen, space, shade and appropriate veterinary care.', uses: 'Commonly reared for meat; local laws and customs should be respected.', body: '#e3a5a0' },
  chicken: { name: 'Chicken', group: 'Poultry', food: 'Needs suitable poultry feed, grit where appropriate and clean water.', care: 'Needs a dry, secure coop, enough space, protection from predators and disease prevention.', uses: 'Can provide eggs, meat and income for households.', body: '#f1ece0' }
};
const ANIMAL_STEPS: MotionStep[] = [
  { id: 'food', label: 'Feeding', caption: '' }, { id: 'care', label: 'Welfare', caption: '' }, { id: 'uses', label: 'Uses', caption: '' }
];
const AnimalBody: React.FC<{ kind: string; colour: string; bob: boolean }> = ({ kind, colour, bob }) => (
  <g>
    {kind === 'chicken' ? (
      <g><ellipse cx="0" cy="-40" rx="40" ry="30" fill={colour} stroke="#6b5a3a" strokeWidth="3" /><circle cx="36" cy="-70" r="16" fill={colour} stroke="#6b5a3a" strokeWidth="3" /><path d="M50 -70 l16 6 -16 6z" fill="#e9b949" /><path d="M30 -88 q6 -14 12 0 q6 -10 8 4" fill="#d1452f" /><path d="M-10 -8 V0 M10 -8 V0" stroke="#e0a030" strokeWidth="4" /></g>
    ) : (
      <g><rect x="-60" y="-70" width="120" height="50" rx="22" fill={colour} stroke="#4a3a2a" strokeWidth="3" /><rect x="-50" y="-24" width="12" height="26" fill={colour} stroke="#4a3a2a" strokeWidth="3" /><rect x="34" y="-24" width="12" height="26" fill={colour} stroke="#4a3a2a" strokeWidth="3" /><ellipse cx="68" cy="-64" rx="24" ry={kind === 'pig' ? 18 : 16} fill={colour} stroke="#4a3a2a" strokeWidth="3" /><circle cx="76" cy="-68" r="3" fill="#2b2f2a" />{kind === 'cattle' && <path d="M62 -80 l-8 -14 M78 -80 l8 -14" stroke="#e8dcb8" strokeWidth="5" strokeLinecap="round" />}{kind === 'goat' && <path d="M62 -80 q-4 -16 6 -22" stroke="#4a3a2a" strokeWidth="4" fill="none" />}{kind === 'pig' && <circle cx="90" cy="-62" r="7" fill="#d98a85" stroke="#4a3a2a" strokeWidth="2" />}</g>
    )}
    {bob && <animateTransform attributeName="transform" type="translate" values="0 0;0 -4;0 0" dur=".8s" repeatCount="indefinite" />}
  </g>
);
const AnimalArt: React.FC<{ animal: string; focus: string; playing: boolean; reducedMotion: boolean }> = ({ animal, focus, playing, reducedMotion }) => {
  const anim = !reducedMotion;
  const a = ANIMAL_DATA[animal];
  return (
    <Stage label={`${a.name}: ${focus}`} depKey={`${animal}-${focus}`} playing={playing} reducedMotion={reducedMotion} bg="#f1ecdc">
      <Ground colour="#8fa85a" />
      <g transform="translate(300 240)"><AnimalBody kind={animal} colour={a.body} bob={anim && focus === 'food'} /></g>
      {focus === 'food' && (
        <g>
          <path d="M440 240 l12 -34 h80 l12 34z" fill="#8a6a3a" stroke="#5a4020" strokeWidth="3" />
          {anim && [0, 1, 2].map(i => <circle key={i} r="5" fill="#e9b949"><animateMotion dur="2s" begin={`${-i * 0.66}s`} repeatCount="indefinite" path="M490 205 Q420 150 380 180" /></circle>)}
          <Cap x={492} y={275} text="Suitable feed and clean water" />
        </g>
      )}
      {focus === 'care' && (
        <g>
          <path d="M120 130 L220 70 L320 130 Z" fill="#c4953f" stroke="#7a5a1a" strokeWidth="3" /><path d="M136 130 V240 M304 130 V240" stroke="#7a5a1a" strokeWidth="6" />
          <Sun x={540} y={60} />
          <path d="M520 220 q-20 -30 0 -50 q20 20 0 50z" fill="#d1452f" opacity=".9"><animateTransform attributeName="transform" type="scale" values="1;1.15;1" additive="sum" dur="1.1s" repeatCount="indefinite" /></path>
          <Cap x={520} y={270} text="Shade, space, observation" />
        </g>
      )}
      {focus === 'uses' && (
        <g>
          {animal === 'chicken' ? <ellipse cx="500" cy="210" rx="24" ry="30" fill="#f6f1e4" stroke="#8a7a5a" strokeWidth="3"><animateTransform attributeName="transform" type="translate" values="0 0;0 -10;0 0" dur="1.6s" repeatCount="indefinite" /></ellipse> : <g><rect x="470" y="170" width="60" height="70" rx="10" fill="#f6f1e4" stroke="#8a7a5a" strokeWidth="3" /><rect x="470" y="170" width="60" height="22" rx="6" fill="#58a05a" /><animateTransform attributeName="transform" type="translate" values="0 0;0 -8;0 0" dur="1.6s" repeatCount="indefinite" /></g>}
          <Cap x={500} y={275} text={animal === 'chicken' ? 'Eggs and meat' : 'Products and income'} />
        </g>
      )}
    </Stage>
  );
};

export const AnimalProductionScene: React.FC = () => {
  const [animal, setAnimal] = useState('goat');
  const a = ANIMAL_DATA[animal];
  const steps: MotionStep[] = [
    { id: 'food', label: 'Feeding', caption: a.food }, { id: 'care', label: 'Welfare', caption: a.care }, { id: 'uses', label: 'Uses', caption: a.uses }
  ];
  return (
    <MotionScene
      key={animal}
      title="The Animal Welfare Keeper"
      description="Compare domestic animals by digestive group, feeding needs, care and uses."
      steps={steps}
      stepMs={5500}
      extraControls={
        <>
          <ChoiceRow label="Animal" options={Object.entries(ANIMAL_DATA).map(([id, v]) => ({ id, label: v.name }))} value={animal} onChange={setAnimal} />
          <div className="gh-jhs1-science-readout"><strong>{a.name} · {a.group}</strong></div>
        </>
      }
      footer={<p>Examples are common in Ghanaian communities, but the animals kept vary by household and location.</p>}
    >
      {({ step, playing, reducedMotion }) => <AnimalArt animal={animal} focus={step.id} playing={playing} reducedMotion={reducedMotion} />}
    </MotionScene>
  );
};

/* ---------- Farming systems (JHS 1 and JHS 2) ---------- */
type SystemDef = { id: string; name: string; description: string; benefit: string };
const FARM_STEPS = (list: SystemDef[]): MotionStep[] => list.map(s => ({ id: s.id, label: s.name, caption: `${s.description} Possible benefit: ${s.benefit}` }));
const SYSTEMS_J1: SystemDef[] = [
  { id: 'rotation', name: 'Crop rotation', description: 'Different crops are grown on the same field in a planned sequence over seasons.', benefit: 'Can help manage soil nutrients, pests and diseases.' },
  { id: 'mixed', name: 'Mixed cropping', description: 'Two or more crops grow together on the same piece of land.', benefit: 'Can spread risk and make use of space, depending on crop choices.' },
  { id: 'mixedFarm', name: 'Mixed farming', description: 'Crop production is combined with keeping livestock on the same farm.', benefit: 'Suitable manure can support soil fertility when safely managed.' },
  { id: 'land', name: 'Land rotation', description: 'A farmer uses one area for a time and allows it to rest while another area is used.', benefit: 'Rest periods may allow vegetation and soil conditions to recover.' },
  { id: 'organic', name: 'Organic farming', description: 'The farm uses ecological practices such as compost, crop diversity and biological pest control.', benefit: 'Aims to build a healthy farm ecosystem and reduce reliance on synthetic inputs.' }
];
const SYSTEMS_J2: SystemDef[] = [
  { id: 'rotation', name: 'Crop rotation', description: 'Different crops are grown on the same field in a planned sequence over seasons.', benefit: 'Can help manage soil nutrients, pests and diseases.' },
  { id: 'mixed', name: 'Mixed cropping', description: 'Two or more crops are grown together on the same piece of land.', benefit: 'Can use available space and spread some production risks.' },
  { id: 'mixedFarm', name: 'Mixed farming', description: 'Crop production is combined with keeping livestock on the same farm.', benefit: 'Manure can support soil fertility when safely managed.' },
  { id: 'land', name: 'Land rotation', description: 'A farmer uses one area for a time and allows it to rest while another area is used.', benefit: 'Rest periods may allow vegetation and soil conditions to recover.' }
];
const CROP_FILLS = ['#e9b949', '#76a85b', '#c0602f'];
const SystemArt: React.FC<{ id: string; playing: boolean; reducedMotion: boolean }> = ({ id, playing, reducedMotion }) => {
  const anim = !reducedMotion;
  return (
    <Stage label={`Farming system: ${id}`} depKey={id} playing={playing} reducedMotion={reducedMotion}>
      <Ground y={220} colour="#9a7a4a" />
      {id === 'rotation' && (
        <g>
          {[0, 1, 2].map(i => (
            <g key={i}>
              <rect x={60 + i * 190} y="110" width="170" height="100" rx="8" fill="#8b6b45" stroke="#5a4020" strokeWidth="3" />
              <rect x={72 + i * 190} y="122" width="146" height="76" rx="6" fill={CROP_FILLS[i]}>{anim && <animate attributeName="fill" values={[0, 1, 2, 0].map(k => CROP_FILLS[(i + k) % 3]).join(';')} dur="9s" repeatCount="indefinite" />}</rect>
              <Cap x={145 + i * 190} y={100} text={`Field ${i + 1}`} />
            </g>
          ))}
          <Cap x={320} y={262} text="Each season the crop on every field changes" />
        </g>
      )}
      {id === 'mixed' && (
        <g>
          <rect x="80" y="90" width="480" height="120" rx="8" fill="#8b6b45" stroke="#5a4020" strokeWidth="3" />
          {[0, 1, 2, 3, 4, 5, 6, 7].map(i => <Plant key={i} x={115 + i * 56} y={200} h={i % 2 ? 70 : 50} colour={i % 2 ? '#c88a1a' : '#4b8b48'} grow />)}
          <Cap x={320} y={262} text="Two or more crops share the same land" />
        </g>
      )}
      {id === 'mixedFarm' && (
        <g>
          <rect x="60" y="120" width="280" height="90" rx="8" fill="#8b6b45" stroke="#5a4020" strokeWidth="3" />
          {[0, 1, 2, 3, 4].map(i => <Plant key={i} x={100 + i * 55} y={200} h={60} grow />)}
          <g transform="translate(500 218) scale(.8)"><AnimalBody kind="goat" colour="#b98555" bob={anim} /></g>
          {anim && [0, 1, 2].map(i => <circle key={i} r="6" fill="#6b4a2b"><animateMotion dur="3s" begin={`${-i}s`} repeatCount="indefinite" path="M470 220 Q400 170 330 200" /></circle>)}
          <Cap x={410} y={262} text="Manure returns to the crop field" />
        </g>
      )}
      {id === 'land' && (
        <g>
          <rect x="60" y="100" width="230" height="110" rx="8" fill="#8b6b45" stroke="#5a4020" strokeWidth="3" /><rect x="350" y="100" width="230" height="110" rx="8" fill="#8b6b45" stroke="#5a4020" strokeWidth="3" />
          {[0, 1, 2, 3].map(i => <Plant key={i} x={95 + i * 55} y={200} h={60} grow />)}
          {[0, 1, 2, 3].map(i => <g key={i} transform={`translate(${385 + i * 55} 200)`}><path d="M0 0 q-4 -20 -12 -26 M0 0 q4 -26 12 -30 M0 0 V-18" stroke="#8fa85a" strokeWidth="4" fill="none" strokeLinecap="round" /></g>)}
          <Cap x={175} y={92} text="In use" /><Cap x={465} y={92} text="Resting" />
          <path d="M300 160 H340 M330 150 L340 160 L330 170" stroke="#2b2f2a" strokeWidth="5" fill="none" strokeLinecap="round">{anim && <animate attributeName="opacity" values="1;.2;1" dur="2s" repeatCount="indefinite" />}</path>
          <Cap x={320} y={262} text="Use one area, rest another" />
        </g>
      )}
      {id === 'organic' && (
        <g>
          <path d="M70 220 q10 -60 70 -60 q60 0 70 60z" fill="#6b4a2b" stroke="#3b2a14" strokeWidth="3" />
          {anim && [0, 1, 2].map(i => <path key={i} d={`M${110 + i * 30} 150 q-8 -14 0 -26 q8 -14 0 -26`} fill="none" stroke="#c0a070" strokeWidth="3" strokeLinecap="round"><animate attributeName="opacity" values="0;1;0" dur="2s" begin={`${-i * 0.6}s`} repeatCount="indefinite" /></path>)}
          <Cap x={140} y={250} text="Compost" />
          {[290, 350, 410, 470, 530].map((x, i) => <Plant key={x} x={x} y={215} h={50 + (i % 3) * 14} colour={i % 2 ? '#c88a1a' : '#4b8b48'} grow />)}
          <g><ellipse rx="9" ry="7" fill="#d1452f" stroke="#2b2f2a" strokeWidth="2"><animateMotion dur="5s" repeatCount="indefinite" path="M290 140 Q410 100 530 140 Q410 170 290 140" /></ellipse></g>
          <Cap x={410} y={262} text="Diverse crops and natural pest control" />
        </g>
      )}
    </Stage>
  );
};
const makeSystemsScene = (list: SystemDef[], description: string): React.FC => () => (
  <MotionScene
    title="The Farming Systems Strategist"
    description={description}
    steps={FARM_STEPS(list)}
    stepMs={5500}
    footer={<p>The best system depends on rainfall, soil, available land, labour and local farming advice.</p>}
  >
    {({ step, playing, reducedMotion }) => <SystemArt id={step.id} playing={playing} reducedMotion={reducedMotion} />}
  </MotionScene>
);
export const FarmingSystemsJ1Scene = makeSystemsScene(SYSTEMS_J1, 'Compare ways Ghanaian farmers organise crops, land and livestock.');
export const FarmingSystemsJ2Scene = makeSystemsScene(SYSTEMS_J2, 'Compare ways farmers organise crops, land and livestock.');

/* ---------- Seed beds ---------- */
const BEDS = SoftSteps([
  ['flat', 'Flat bed', 'A level planting surface for soil with suitable drainage and moisture. Remember: avoid waterlogging; check drainage before planting.'],
  ['raised', 'Raised bed', 'The planting surface is higher than surrounding ground. It can improve drainage in wet conditions. Remember: raised beds may dry out faster, so monitor moisture.'],
  ['sunken', 'Sunken bed', 'A shallow depression can collect and conserve water in dry conditions. Remember: do not use where water remains stagnant for long periods.'],
  ['ridge', 'Ridge or mound', 'Raised rows or planting spots can suit crops that need particular soil and drainage conditions. Remember: keep spacing consistent and protect soil from erosion.']
]);
const BedArt: React.FC<{ id: string; playing: boolean; reducedMotion: boolean }> = ({ id, playing, reducedMotion }) => {
  const anim = !reducedMotion;
  const profile: Record<string, string> = {
    flat: 'M0 200 H640 V300 H0 Z',
    raised: 'M0 220 H160 L200 170 H440 L480 220 H640 V300 H0 Z',
    sunken: 'M0 190 H170 L210 240 H430 L470 190 H640 V300 H0 Z',
    ridge: 'M0 230 Q80 150 160 230 Q240 150 320 230 Q400 150 480 230 Q560 150 640 230 V300 H0 Z'
  };
  const plants: Record<string, number[]> = { flat: [130, 250, 370, 490], raised: [250, 320, 390], sunken: [260, 320, 380], ridge: [80, 240, 400, 560] };
  const plantY: Record<string, (x: number) => number> = { flat: () => 200, raised: () => 170, sunken: () => 240, ridge: () => 185 };
  return (
    <Stage label={`Seed bed: ${id}`} depKey={id} playing={playing} reducedMotion={reducedMotion} bg="#e8eef2">
      <Drops x0={40} x1={600} y0={20} y1={190} n={16} dur={1.4} />
      <path d={profile[id]} fill="#a77b50" stroke="#7a5a36" strokeWidth="4" />
      {id === 'sunken' && <rect x="214" y="236" width="212" height="6" fill="#3e91c8" opacity=".8">{anim && <animate attributeName="height" values="2;12;2" dur="3s" repeatCount="indefinite" />}</rect>}
      {id === 'flat' && <rect x="0" y="198" width="640" height="4" fill="#3e91c8" opacity=".5" />}
      {plants[id].map(x => <Plant key={x} x={x} y={plantY[id](x)} h={60} />)}
      {id === 'raised' && anim && [[170, 220], [470, 220]].map(([x, y], i) => <path key={i} d={`M${x} ${y} h${i ? 40 : -40}`} stroke="#3e91c8" strokeWidth="5" strokeLinecap="round" strokeDasharray="6 8"><animate attributeName="stroke-dashoffset" values="0;-28" dur="1s" repeatCount="indefinite" /></path>)}
      <Cap x={320} y={285} text={{ flat: 'Level surface', raised: 'Water drains away from the bed', sunken: 'Water collects in the dip', ridge: 'Water runs into the furrows' }[id]!} />
    </Stage>
  );
};
export const SeedBedsScene: React.FC = () => (
  <MotionScene
    title="The Seed-Bed Design Strategist"
    description="Compare seed-bed designs and match them to local growing conditions."
    steps={BEDS}
    stepMs={5500}
    footer={<p>The best design depends on crop, soil, rainfall, drainage and local experience.</p>}
  >
    {({ step, playing, reducedMotion }) => <BedArt id={step.id} playing={playing} reducedMotion={reducedMotion} />}
  </MotionScene>
);

/* ---------- Animal feed and water ---------- */
const CARE = SoftSteps([
  ['water', 'Clean water', 'Animals need continuous access to clean water. Check drinkers, refill them and clean them regularly.'],
  ['feed', 'Balanced feed', 'Provide suitable feed for the animal species and stage of growth. Store feed safely and prevent mould.'],
  ['shelter', 'Suitable shelter', 'Provide enough space, ventilation, shade and protection from rain, heat and predators.'],
  ['hygiene', 'Hygiene and observation', 'Keep housing clean, observe animals daily and seek veterinary advice when an animal appears unwell.']
]);
const CareArt: React.FC<{ id: string; playing: boolean; reducedMotion: boolean }> = ({ id, playing, reducedMotion }) => {
  const anim = !reducedMotion;
  return (
    <Stage label={`Animal care: ${id}`} depKey={id} playing={playing} reducedMotion={reducedMotion} bg="#f1ecdc">
      <Ground colour="#8fa85a" />
      {id === 'water' && (
        <g>
          <path d="M360 240 l10 -40 h140 l10 40z" fill="#8a96a0" stroke="#4b5560" strokeWidth="3" />
          <rect x="376" y="212" width="108" height="22" fill="#3e91c8">{anim && <animate attributeName="y" values="226;212;226" dur="3s" repeatCount="indefinite" />}</rect>
          <Drops x0={420} x1={440} y0={60} y1={206} n={3} dur={1} />
          <path d="M400 40 h60 v20 h-60z M430 60 v-0" fill="#8a96a0" stroke="#4b5560" strokeWidth="3" />
          <g transform="translate(200 240)"><AnimalBody kind="goat" colour="#b98555" bob={anim} /></g>
          <Cap x={430} y={275} text="Refill and clean the drinker" />
        </g>
      )}
      {id === 'feed' && (
        <g>
          <path d="M360 240 l10 -34 h140 l10 34z" fill="#8a6a3a" stroke="#5a4020" strokeWidth="3" />
          {[0, 1, 2, 3, 4, 5].map(i => <circle key={i} cx={390 + i * 22} cy={212 - (i % 2) * 4} r="6" fill="#e9b949" />)}
          {anim && [0, 1, 2].map(i => <circle key={i} r="5" fill="#e9b949"><animateMotion dur="2s" begin={`${-i * 0.66}s`} repeatCount="indefinite" path="M430 200 Q360 140 300 170" /></circle>)}
          <g transform="translate(220 240)"><AnimalBody kind="goat" colour="#b98555" bob={anim} /></g>
          <rect x="560" y="190" width="50" height="50" rx="6" fill="#d9b66a" stroke="#7a5a1a" strokeWidth="3" /><Cap x={585} y={266} text="Dry feed store" />
        </g>
      )}
      {id === 'shelter' && (
        <g>
          <path d="M90 130 L260 50 L430 130 Z" fill="#c4953f" stroke="#7a5a1a" strokeWidth="3" /><rect x="110" y="130" width="300" height="110" fill="#e8d4a8" opacity=".6" /><path d="M110 130 V240 M410 130 V240" stroke="#7a5a1a" strokeWidth="6" />
          <g transform="translate(260 240)"><AnimalBody kind="goat" colour="#b98555" bob={false} /></g>
          <Sun x={540} y={70} />
          {anim && [0, 1, 2].map(i => <path key={i} d={`M${470 + i * 30} 130 v30`} stroke="#3e91c8" strokeWidth="4" strokeLinecap="round" strokeDasharray="4 6"><animate attributeName="stroke-dashoffset" values="0;-20" dur=".8s" repeatCount="indefinite" /></path>)}
          <Cap x={260} y={275} text="Space, shade, ventilation and protection" />
        </g>
      )}
      {id === 'hygiene' && (
        <g>
          <g transform="translate(200 240)"><AnimalBody kind="goat" colour="#b98555" bob={false} /></g>
          <g><circle r="26" fill="#cfe6f2" fillOpacity=".7" stroke="#2468a8" strokeWidth="5" /><path d="M18 18 L44 44" stroke="#2468a8" strokeWidth="8" strokeLinecap="round" /><animateMotion dur="5s" repeatCount="indefinite" path="M120 130 Q250 70 380 130 Q250 190 120 130" /></g>
          <g transform="translate(500 240)"><path d="M0 0 L-30 -100" stroke="#8a6a3a" strokeWidth="7" strokeLinecap="round" /><path d="M-14 -6 h28 l8 18 h-44z" fill="#c4953f" stroke="#7a5a1a" strokeWidth="2" />{anim && <animateTransform attributeName="transform" type="translate" values="0 0;-60 0;0 0" dur="2s" repeatCount="indefinite" />}</g>
          <Cap x={330} y={275} text="Clean housing; observe every day" />
        </g>
      )}
    </Stage>
  );
};
export const AnimalCareScene: React.FC = () => (
  <MotionScene
    title="The Animal Production Care Planner"
    description="Explore the basic needs that support healthy animal production."
    steps={CARE}
    stepMs={5500}
    footer={<p>Follow local veterinary and animal-welfare guidance.</p>}
  >
    {({ step, playing, reducedMotion }) => <CareArt id={step.id} playing={playing} reducedMotion={reducedMotion} />}
  </MotionScene>
);

/* ---------- Dental health ---------- */
const TEETH = SoftSteps([
  ['enamel', 'Enamel', 'The hard outer covering protects the crown of the tooth. Acids produced by plaque bacteria can weaken it.'],
  ['dentine', 'Dentine', 'Dentine forms much of the tooth beneath the enamel. It surrounds and protects the pulp.'],
  ['pulp', 'Pulp', 'The pulp contains nerves and blood vessels that help keep the tooth alive.'],
  ['root', 'Root', 'The root anchors the tooth in the jaw. The crown is the part normally visible above the gum.'],
  ['gum', 'Gum', 'Gum tissue surrounds and supports the teeth. Plaque near the gum line can cause inflammation.']
]);
const ToothArt: React.FC<{ id: string; playing: boolean; reducedMotion: boolean }> = ({ id, playing, reducedMotion }) => {
  const anim = !reducedMotion;
  const hl = (part: string) => (id === part ? { stroke: '#d1452f', strokeWidth: 6 } : {});
  const pulse = (part: string) => id === part && anim && <animate attributeName="opacity" values="1;.35;1" dur="1.2s" repeatCount="indefinite" />;
  return (
    <Stage label={`Tooth structure: ${id}`} depKey={id} playing={playing} reducedMotion={reducedMotion} bg="#f3efe6">
      <g transform="translate(50 50) scale(1.6)">
        <path d="M105 13Q150 -2 195 13Q210 28 193 58L177 100Q169 111 160 91L150 65L140 91Q131 111 123 100L107 58Q90 28 105 13Z" fill="#f7f4ea" stroke="#8b6b45" strokeWidth="2" />
        <path d="M105 13Q150 -2 195 13Q210 28 193 58" fill="none" stroke={id === 'enamel' ? '#d1452f' : '#cfc7b0'} strokeWidth={id === 'enamel' ? 5 : 3}>{pulse('enamel')}</path>
        <path d="M113 22Q150 9 187 22L174 57 160 88 150 58 140 88 126 57Z" fill="#e8b85f" {...hl('dentine')}>{pulse('dentine')}</path>
        <path d="M139 30Q150 24 161 30L156 59 150 76 144 59Z" fill="#c97955" {...hl('pulp')}>{pulse('pulp')}</path>
        <path d="M107 58L123 100Q131 111 140 91 M193 58L177 100Q169 111 160 91" fill="none" stroke={id === 'root' ? '#d1452f' : '#8b6b45'} strokeWidth={id === 'root' ? 5 : 2}>{pulse('root')}</path>
        <path d="M95 30Q150 42 205 30" fill="none" stroke="#397d49" strokeWidth={id === 'gum' ? 11 : 7}>{pulse('gum')}</path>
      </g>
      <g fontSize="14" className="sm-name sm-name--sm">
        <text x="400" y="70" className="sm-note sm-note--dark">Enamel</text><text x="400" y="120" className="sm-note sm-note--dark">Dentine</text><text x="400" y="170" className="sm-note sm-note--dark">Pulp</text><text x="400" y="220" className="sm-note sm-note--dark">Root</text><text x="400" y="270" className="sm-note sm-note--dark">Gum</text>
      </g>
      {['enamel', 'dentine', 'pulp', 'root', 'gum'].map((p, i) => <circle key={p} cx="385" cy={66 + i * 50} r="7" fill={id === p ? '#d1452f' : '#b8b09a'} />)}
      {id === 'enamel' && anim && [0, 1, 2].map(i => <circle key={i} r="6" fill="#7a4f9a" opacity=".8"><animateMotion dur="2.4s" begin={`${-i * 0.8}s`} repeatCount="indefinite" path="M300 40 Q250 20 220 50" /></circle>)}
    </Stage>
  );
};
export const DentalScene: React.FC = () => (
  <MotionScene
    title="The Dental Health Guardian"
    description="Explore tooth structures and learn how to protect teeth and gums."
    steps={TEETH}
    stepMs={5000}
    footer={<p>Brush twice daily with fluoride toothpaste, clean between teeth and seek dental advice for pain or bleeding gums.</p>}
  >
    {({ step, playing, reducedMotion }) => <ToothArt id={step.id} playing={playing} reducedMotion={reducedMotion} />}
  </MotionScene>
);

/* ---------- Farm tools (JHS 1 and JHS 2) ---------- */
type ToolDef = { id: string; short?: string; art: 'hoe' | 'cutlass' | 'rake' | 'wheelbarrow' | 'can' | 'spade'; name: string; task: string; detail: string; safety: string };
const ToolArt: React.FC<{ art: ToolDef['art']; playing: boolean; reducedMotion: boolean }> = ({ art, playing, reducedMotion }) => {
  const anim = !reducedMotion;
  return (
    <Stage label={`Farm tool: ${art}`} depKey={art} playing={playing} reducedMotion={reducedMotion}>
      <Ground />
      {(art === 'hoe' || art === 'spade') && (
        <g>
          {[110, 190, 270].map(x => <path key={x} d={`M${x} 240 q30 -20 60 0`} fill="#8b6b45" />)}
          <g transform="translate(360 240)">
            <g>
              <path d="M0 0 L40 -150" stroke="#8a6a3a" strokeWidth="9" strokeLinecap="round" />
              {art === 'hoe' ? <path d="M-34 -6 L22 -2 L14 26 L-30 22 Z" fill="#8a96a0" stroke="#4b5560" strokeWidth="3" /> : <path d="M-18 -4 H18 L14 34 H-14 Z" fill="#8a96a0" stroke="#4b5560" strokeWidth="3" />}
              {anim && <animateTransform attributeName="transform" type="rotate" values="-12;12;-12" dur="2s" repeatCount="indefinite" />}
            </g>
          </g>
          <Cap x={320} y={282} text={art === 'hoe' ? 'The wedge-shaped blade cuts into soil' : 'The blade cuts in; the handle lifts and turns soil'} />
        </g>
      )}
      {art === 'cutlass' && (
        <g>
          {[360, 420, 480, 540].map((x, i) => <g key={x}><path d={`M${x} 240 V170`} stroke="#4b8b48" strokeWidth="6" strokeLinecap="round" /><path d={`M${x} 190 q-14 -8 -18 -22`} stroke="#76a85b" strokeWidth="5" fill="none" />{anim && <animateTransform attributeName="transform" type="translate" values="0 0;0 0;40 70" keyTimes="0;.5;1" dur={`${3 + i * 0.2}s`} repeatCount="indefinite" />}</g>)}
          <g transform="translate(250 190)"><g><path d="M0 0 L50 -60" stroke="#6b4a2b" strokeWidth="9" strokeLinecap="round" /><path d="M50 -60 Q110 -70 150 -20 L130 -14 Q96 -40 56 -42Z" fill="#8a96a0" stroke="#4b5560" strokeWidth="3" />{anim && <animateTransform attributeName="transform" type="rotate" values="-18;16;-18" dur="2.6s" repeatCount="indefinite" />}</g></g>
          <Cap x={320} y={282} text="Sharp blade: point down and away, keep others clear" />
        </g>
      )}
      {art === 'rake' && (
        <g>
          {[0, 1, 2, 3, 4].map(i => <path key={i} d={`M${200 + i * 70} ${228 + (i % 2) * 6} q10 -10 20 0`} fill="none" stroke="#8fa85a" strokeWidth="6" strokeLinecap="round" />)}
          <g transform="translate(140 240)"><g><path d="M0 -150 L60 -20" stroke="#8a6a3a" strokeWidth="8" strokeLinecap="round" /><path d="M40 -12 H100" stroke="#6b4a2b" strokeWidth="7" />{[44, 56, 68, 80, 92].map(x => <path key={x} d={`M${x} -12 v22`} stroke="#4b5560" strokeWidth="4" />)}{anim && <animateTransform attributeName="transform" type="translate" values="0 0;300 0;0 0" dur="4s" repeatCount="indefinite" />}</g></g>
          <Cap x={320} y={282} text="Teeth gather loose leaves; long handle helps apply force" />
        </g>
      )}
      {art === 'wheelbarrow' && (
        <g>
          <g transform="translate(100 240)"><g>
            <path d="M40 -90 H190 L170 -40 H60 Z" fill="#d1452f" stroke="#7a1d18" strokeWidth="3" />
            <path d="M40 -90 L-20 -120 M60 -50 L10 -40" stroke="#8a6a3a" strokeWidth="7" strokeLinecap="round" />
            <circle cx="190" cy="-24" r="24" fill="#2b2f2a" /><circle cx="190" cy="-24" r="9" fill="#9a9a9a" />
            <circle cx="110" cy="-94" r="14" fill="#e9b949" stroke="#6b4a2b" strokeWidth="2" /><circle cx="140" cy="-96" r="14" fill="#e9b949" stroke="#6b4a2b" strokeWidth="2" />
            {anim && <animateTransform attributeName="transform" type="translate" values="0 0;260 0;0 0" dur="5s" repeatCount="indefinite" />}
          </g></g>
          <Cap x={320} y={282} text="Wheel as fulcrum: the load sits between the wheel and the handles" />
        </g>
      )}
      {art === 'can' && (
        <g>
          {[110, 230, 350].map(x => <Plant key={x} x={x} y={240} h={50} grow />)}
          <g transform="translate(480 120)"><g><rect x="-36" y="-10" width="72" height="56" rx="10" fill="#58a05a" stroke="#2f6a31" strokeWidth="3" /><path d="M-36 20 L-86 -6 L-90 10 L-36 36" fill="#58a05a" stroke="#2f6a31" strokeWidth="3" /><path d="M36 0 q30 -10 30 20 q0 24 -30 20" fill="none" stroke="#2f6a31" strokeWidth="6" />{anim && <animateTransform attributeName="transform" type="rotate" values="0;-14;0" dur="3s" repeatCount="indefinite" />}</g></g>
          <Drops x0={390} x1={410} y0={130} y1={236} n={3} dur={1} />
          <Cap x={320} y={282} text="Gravity moves the water through the spout; keep the flow gentle" />
        </g>
      )}
    </Stage>
  );
};
const SAFETY_HABITS = ['Carry sharp blades pointed down and away', 'Keep a safe distance from other workers', 'Check tools and handles before use', 'Clean and store tools securely after use'];
const makeToolScene = (tools: ToolDef[], description: string, withChecklist = false): React.FC => () => {
  const [toolId, setToolId] = useState(tools[0].id);
  const [checks, setChecks] = useState<boolean[]>(SAFETY_HABITS.map(() => false));
  const steps: MotionStep[] = tools.map(t => ({ id: t.id, label: t.short ?? t.name, caption: `${withChecklist ? `Recommended tool: ${t.name}. ` : ''}${t.task}. ${t.detail} Safety: ${t.safety}${withChecklist ? ` Safety habits checked: ${checks.filter(Boolean).length}/${SAFETY_HABITS.length}.` : ''}` }));
  return (
    <MotionScene
      stepId={toolId}
      onStepChange={setToolId}
      extraControls={withChecklist ? (
        <>
          <div className="gh-jhs1-science-interaction">
            <strong>Farm safety check</strong>
            <div className="gh-jhs1-science-choices">
              {SAFETY_HABITS.map((h, i) => (
                <label key={h} className="gh-jhs1-science-choice"><input type="checkbox" checked={checks[i]} onChange={() => setChecks(c => c.map((v, j) => (j === i ? !v : v)))} />{h}</label>
              ))}
            </div>
          </div>
        </>
      ) : undefined}
      title="The Farm Tool Engineer"
      description={description}
      steps={steps}
      stepMs={6000}
      footer={
        <>
          <p>Choose tools that match the learner, task and conditions. School-garden activities require teacher supervision.</p>
          <MoreDetails summary="Farm safety habits">
            <p>Check tools and handles before use, carry sharp blades pointed down and away, keep a safe distance from other workers, and clean and store tools securely after use.</p>
          </MoreDetails>
        </>
      }
    >
      {({ step, playing, reducedMotion }) => <ToolArt art={tools.find(t => t.id === step.id)!.art} playing={playing} reducedMotion={reducedMotion} />}
    </MotionScene>
  );
};
export const FarmToolsJ1Scene = makeToolScene([
  { id: 'hoe', short: 'Loosen soil', art: 'hoe', name: 'Hoe', task: 'Loosening soil and weeding', detail: 'Simple machine: wedge. The broad blade acts like a wedge. Its sharp edge concentrates force to cut into soil and weeds.', safety: 'Keep the blade pointed away from your body and other workers.' },
  { id: 'cutlass', short: 'Clear vegetation', art: 'cutlass', name: 'Cutlass', task: 'Clearing vegetation', detail: 'Simple machine: wedge. The blade is a wedge that helps cut vegetation. It is a sharp tool and requires careful handling and enough clear space.', safety: 'Carry it with the blade pointed down and away; never swing near another person.' },
  { id: 'rake', short: 'Gather leaves', art: 'rake', name: 'Rake', task: 'Gathering leaves and plant material', detail: 'Simple machine: lever-like handle. The long handle helps apply force while the teeth gather loose leaves, weeds and plant material.', safety: 'Point the teeth down when carrying it and keep the working area clear.' },
  { id: 'wheelbarrow', short: 'Move a harvest load', art: 'wheelbarrow', name: 'Wheelbarrow', task: 'Moving harvested produce or soil', detail: 'Simple machine: wheel and axle plus a second-class lever. The wheel is the fulcrum, the load sits between the wheel and the effort applied at the handles.', safety: 'Do not overload it; keep both hands on the handles and use a clear path.' },
  { id: 'can', short: 'Water seedlings', art: 'can', name: 'Watering can', task: 'Watering seedlings', detail: 'Gravity and a spout. Water flows from the raised container through the spout under gravity. A gentle flow helps water seedlings without washing soil away.', safety: 'Lift a manageable amount of water and avoid slippery spills.' },
  { id: 'spade', short: 'Dig and turn soil', art: 'spade', name: 'Spade', task: 'Digging and turning soil', detail: 'Simple machine: wedge and lever action. The blade cuts into soil like a wedge. Pressing the handle can use leverage to lift and turn the soil.', safety: 'Use a stable stance and keep feet and hands clear of the blade.' }
], 'Match farm tools to real tasks, discover the simple machines they use and practise safe handling.', true);
export const FarmToolsJ2Scene = makeToolScene([
  { id: 'soil', art: 'hoe', name: 'Hoe', task: 'Prepare soil: loosen soil, make planting ridges and remove weeds', detail: 'Each tool is designed for a different task.', safety: 'Check the handle, keep a safe distance from others and use controlled movements.' },
  { id: 'carry', art: 'wheelbarrow', name: 'Wheelbarrow', task: 'Move a load: transport soil, compost, tools or harvested crops', detail: 'A wheelbarrow combines a wheel-and-axle with a lever to help move a load.', safety: 'Balance the load, use a clear path and avoid overloading.' },
  { id: 'water', art: 'can', name: 'Watering can', task: 'Water seedlings: apply water gently to seedlings and growing plants', detail: 'Water flows through the spout under gravity.', safety: 'Carry a manageable amount of water and avoid slippery paths.' },
  { id: 'clear', art: 'cutlass', name: 'Cutlass', task: 'Clear vegetation: clear vegetation and cut small stems when appropriate', detail: 'The blade acts as a wedge.', safety: 'Only use under close adult supervision; carry the blade pointed down and away from people.' },
  { id: 'level', art: 'rake', name: 'Rake', task: 'Gather leaves: gather leaves and level the soil surface', detail: 'The long handle helps apply force.', safety: 'Inspect the handle and tines, and store the rake safely after use.' }
], 'Match a farm task to a suitable tool and review safe working practice.');

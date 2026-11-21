import React, { useState } from 'react';
import { type MotionStep } from './MotionScene';
import { MotionScene } from './MotionScene';
import { ChoiceRow } from './ChoiceRow';
import { Stage, Cap, Ground, Drops, Sun } from './FieldScenes';
import { J2Scene } from './EnvironmentScenesJ2';

/* ---------- Liquids ---------- */
const LIQUIDS = [
  { id: 'water', label: 'Clean water', body: 'People drink it, prepare food and wash. Communities may collect water from a protected borehole, well or treated supply. Keep water sources free from waste.' },
  { id: 'blood', label: 'Blood', body: 'Blood travels through blood vessels. It carries oxygen and nutrients to body cells and helps transport some wastes away.' },
  { id: 'sap', label: 'Plant sap', body: 'Water and dissolved minerals move from roots towards leaves. Sugars made in leaves are transported to other parts of the plant.' },
  { id: 'household', label: 'Household liquids', body: 'Cooking oil helps prepare food and liquid soap helps remove dirt. Medicines and fuels must only be used as directed by responsible adults. Never taste an unknown liquid.' }
];
const liquidArt = (id: string, playing: boolean, reducedMotion: boolean) => {
  const anim = !reducedMotion;
  return (
    <Stage label={`Liquid: ${id}`} depKey={id} playing={playing} reducedMotion={reducedMotion}>
      {id === 'water' && (
        <g>
          <Ground y={250} colour="#a77b50" />
          <rect x="120" y="120" width="90" height="130" fill="#8a8272" stroke="#4a4a4a" strokeWidth="4" /><rect x="105" y="108" width="120" height="16" fill="#6b6558" stroke="#4a4a4a" strokeWidth="3" />
          <path d="M210 150 H300" stroke="#8a96a0" strokeWidth="10" /><path d="M300 150 v20" stroke="#8a96a0" strokeWidth="10" />
          <Drops x0={298} x1={302} y0={175} y1={232} n={3} dur={0.9} />
          <path d="M270 232 h60 l-8 18 h-44z" fill="#d9b66a" stroke="#7a5a1a" strokeWidth="3" />
          <rect x="420" y="170" width="70" height="80" rx="6" fill="#cfe6f2" stroke="#2468a8" strokeWidth="4" /><rect x="424" y="200" width="62" height="46" fill="#3e91c8">{anim && <animate attributeName="y" values="214;196;214" dur="3s" repeatCount="indefinite" />}</rect>
          <Cap x={165} y={285} text="Protected borehole" /><Cap x={455} y={285} text="Safe drinking water" />
        </g>
      )}
      {id === 'blood' && (
        <g>
          <path d="M80 150 H560" stroke="#d1452f" strokeWidth="46" strokeLinecap="round" opacity=".25" /><path d="M80 130 H560 M80 170 H560" stroke="#a83a2a" strokeWidth="5" />
          {anim && [0, 1, 2, 3, 4, 5].map(i => <ellipse key={i} rx="14" ry="9" fill="#d1452f" stroke="#7a1d18" strokeWidth="2"><animateMotion dur="5s" begin={`${-i * 0.83}s`} repeatCount="indefinite" path="M90 150 H550" /></ellipse>)}
          {anim && [0, 1, 2].map(i => <circle key={i} r="5" fill="#3e91c8"><animateMotion dur="5s" begin={`${-i * 1.6 - 0.4}s`} repeatCount="indefinite" path="M90 158 H550" /></circle>)}
          <path d="M320 70 q-24 -28 -44 -6 q-16 20 44 52 q60 -32 44 -52 q-20 -22 -44 6z" fill="#d1452f" stroke="#7a1d18" strokeWidth="3">{anim && <animateTransform attributeName="transform" type="scale" values="1;1.1;1" additive="sum" dur=".9s" repeatCount="indefinite" />}</path>
          <Cap x={320} y={235} text="Blood carries oxygen and nutrients to body cells" />
        </g>
      )}
      {id === 'sap' && (
        <g>
          <Ground y={250} colour="#a77b50" />
          <path d="M320 250 V70" stroke="#4b8b48" strokeWidth="14" strokeLinecap="round" />
          <path d="M320 130 q-90 -20 -110 -70 q80 -4 110 70 M320 100 q90 -20 110 -70 q-80 -4 -110 70" fill="#76a85b" stroke="#2f6a31" strokeWidth="3" />
          <path d="M320 250 q-60 20 -100 10 M320 250 q60 20 100 10 M320 250 q0 20 0 30" stroke="#8a6a3a" strokeWidth="5" fill="none" />
          {anim && [0, 1, 2, 3].map(i => <circle key={i} cx="316" r="5" fill="#3e91c8"><animate attributeName="cy" values="250;80" dur="3s" begin={`${-i * 0.75}s`} repeatCount="indefinite" /></circle>)}
          {anim && [0, 1, 2].map(i => <circle key={i} cx="326" r="5" fill="#e9b949"><animate attributeName="cy" values="90;240" dur="3.6s" begin={`${-i * 1.2}s`} repeatCount="indefinite" /></circle>)}
          <Cap x={170} y={150} text="Water and minerals rise" anchor="middle" /><Cap x={480} y={190} text="Sugars travel to other parts" anchor="middle" />
        </g>
      )}
      {id === 'household' && (
        <g>
          <Ground y={250} colour="#c9c2ae" />
          <g transform="translate(150 250)"><path d="M-30 0 V-90 q0 -14 14 -14 h4 v-18 h24 v18 h4 q14 0 14 14 V0z" fill="#e0b13a" stroke="#7a5a1a" strokeWidth="3" /><rect x="-30" y="-60" width="60" height="34" fill="#f6e6a0" /></g>
          <g transform="translate(300 250)"><path d="M-30 0 V-80 q0 -14 14 -14 h10 v-24 h18 l10 -8 v36 q14 0 14 14 V0z" fill="#58a5d0" stroke="#2468a8" strokeWidth="3" /></g>
          {anim && [0, 1, 2, 3].map(i => <circle key={i} cx={282 + i * 14} r={6 - (i % 2)} fill="#fff" stroke="#2468a8" strokeWidth="1.5"><animate attributeName="cy" values="130;60" dur="2.4s" begin={`${-i * 0.6}s`} repeatCount="indefinite" /><animate attributeName="opacity" values="1;0" dur="2.4s" begin={`${-i * 0.6}s`} repeatCount="indefinite" /></circle>)}
          <g transform="translate(480 160)"><rect x="-26" y="-20" width="52" height="60" rx="8" fill="#f1ece0" stroke="#8a7a5a" strokeWidth="3" /><circle r="48" fill="none" stroke="#d1452f" strokeWidth="7" /><path d="M-34 -34 L34 34" stroke="#d1452f" strokeWidth="7" />{anim && <animate attributeName="opacity" values="1;.4;1" dur="1.8s" repeatCount="indefinite" />}</g>
          <Cap x={150} y={285} text="Cooking oil" /><Cap x={300} y={285} text="Liquid soap" /><Cap x={480} y={285} text="Never taste unknown liquids" />
        </g>
      )}
    </Stage>
  );
};
export const LiquidsScene: React.FC = () => (
  <J2Scene
    title="The Life-Giving Liquids Guardian"
    description="Choose a liquid to follow its role in people, plants and everyday Ghanaian life."
    steps={LIQUIDS.map(l => ({ id: l.id, label: l.label, caption: l.body }))}
    footer={<p>A community borehole, a healthy body and a growing maize plant are connected by the importance of safe, useful liquids.</p>}
    art={liquidArt}
  />
);

/* ---------- Materials ---------- */
const MATERIALS = [
  { id: 'metal', label: 'Metal', property: 'Strong and conducts heat', use: 'A metal saucepan transfers heat to food. Its handle should be made or covered with a safer heat-insulating material.' },
  { id: 'wood', label: 'Wood', property: 'Can be strong and shaped', use: 'Wood is used for desks, stools and furniture. Keep it dry and away from open flames.' },
  { id: 'plastic', label: 'Plastic', property: 'Often light and water-resistant', use: 'A reusable water container can be light. Reuse it safely and dispose of damaged plastic responsibly.' },
  { id: 'glass', label: 'Glass', property: 'Transparent but can break', use: 'Glass lets light pass through, so it is useful for windows. Broken glass can cause injury and must be handled by an adult.' },
  { id: 'rubber', label: 'Rubber', property: 'Flexible and can grip surfaces', use: 'Rubber is useful for shoe soles, seals and some grips. Its flexibility helps it bend without breaking easily.' }
];
const materialArt = (id: string, playing: boolean, reducedMotion: boolean) => {
  const anim = !reducedMotion;
  return (
    <Stage label={`Material: ${id}`} depKey={id} playing={playing} reducedMotion={reducedMotion}>
      <Ground y={250} colour="#c9c2ae" />
      {id === 'metal' && (
        <g>
          <path d="M200 250 V160 H400 V250z" fill="#8a96a0" stroke="#4b5560" strokeWidth="4" /><rect x="400" y="180" width="110" height="16" rx="6" fill="#6b4a2b" stroke="#3b2a14" strokeWidth="3" />
          {anim && [0, 1, 2, 3].map(i => <path key={i} d={`M${230 + i * 45} 150 q-10 -16 0 -30 q10 -14 0 -30`} fill="none" stroke="#e0763a" strokeWidth="5" strokeLinecap="round"><animate attributeName="opacity" values="1;.1;1" dur="1.6s" begin={`${-i * 0.4}s`} repeatCount="indefinite" /></path>)}
          <Cap x={300} y={285} text="Conducts heat; the handle is insulated" />
        </g>
      )}
      {id === 'wood' && (
        <g>
          <rect x="200" y="150" width="240" height="22" fill="#a77b50" stroke="#6b4a2b" strokeWidth="4" /><rect x="214" y="172" width="20" height="78" fill="#a77b50" stroke="#6b4a2b" strokeWidth="4" /><rect x="406" y="172" width="20" height="78" fill="#a77b50" stroke="#6b4a2b" strokeWidth="4" />
          <path d="M220 161 q40 -6 80 0 t80 0" stroke="#6b4a2b" strokeWidth="2" fill="none" />
          <g><rect x="-30" y="-24" width="60" height="24" rx="4" fill="#d1452f" />{anim && <animateTransform attributeName="transform" type="translate" values="300 150;300 140;300 150" dur="2s" repeatCount="indefinite" />}</g>
          <Cap x={320} y={285} text="Strong enough for desks and stools; keep it dry" />
        </g>
      )}
      {id === 'plastic' && (
        <g>
          <g transform="translate(320 250)"><g><path d="M-44 0 V-110 q0 -20 20 -20 h8 v-24 h32 v24 h8 q20 0 20 20 V0z" fill="#cfe6f2" fillOpacity=".8" stroke="#2468a8" strokeWidth="4" /><rect x="-40" y="-60" width="80" height="56" fill="#3e91c8" opacity=".7" />{anim && <animateTransform attributeName="transform" type="rotate" values="-2;2;-2" additive="sum" dur="2.4s" repeatCount="indefinite" />}</g></g>
          <Drops x0={500} x1={540} y0={80} y1={240} n={4} />
          <Cap x={320} y={285} text="Light and water-resistant; reuse safely" />
        </g>
      )}
      {id === 'glass' && (
        <g>
          <rect x="230" y="70" width="180" height="170" fill="#cfe6f2" fillOpacity=".5" stroke="#4b5560" strokeWidth="8" /><path d="M320 70 V240 M230 155 H410" stroke="#4b5560" strokeWidth="5" />
          <Sun x={90} y={80} />
          {anim && [0, 1, 2].map(i => <path key={i} d={`M140 ${90 + i * 22} L560 ${120 + i * 40}`} stroke="#f2b93b" strokeWidth="4" strokeDasharray="10 10" strokeLinecap="round"><animate attributeName="stroke-dashoffset" values="0;-40" dur="1.2s" repeatCount="indefinite" /></path>)}
          <Cap x={320} y={285} text="Light passes through; broken glass needs an adult" />
        </g>
      )}
      {id === 'rubber' && (
        <g>
          <g transform="translate(320 220)"><g><path d="M-140 0 Q-40 -34 40 -20 Q130 -10 150 10 V24 H-140z" fill="#33353a" stroke="#1a1b1e" strokeWidth="4" />{[-110, -70, -30, 10, 50, 90, 124].map(x => <path key={x} d={`M${x} 24 V12`} stroke="#6b6e75" strokeWidth="4" />)}{anim && <animateTransform attributeName="transform" type="skewX" values="0;-14;0" dur="2s" repeatCount="indefinite" />}</g></g>
          <Cap x={320} y={285} text="Flexible and grippy: it bends without breaking" />
        </g>
      )}
    </Stage>
  );
};
export const MaterialsScene: React.FC = () => (
  <J2Scene
    title="The Everyday Materials Engineer"
    description="Choose a material to compare its property with a familiar object and its purpose."
    steps={MATERIALS.map(m => ({ id: m.id, label: m.label, caption: `${m.property}. ${m.use}` }))}
    footer={<p>Think of a cooking pot, school desk, water container, window and sandals found in many Ghanaian homes and schools.</p>}
    art={materialArt}
  />
);

/* ---------- Living cells ---------- */
const PARTS: Record<string, { name: string; job: string }> = {
  nucleus: { name: 'Nucleus', job: 'Contains genetic information and helps coordinate cell activities.' },
  membrane: { name: 'Cell membrane', job: 'Controls what enters and leaves the cell.' },
  cytoplasm: { name: 'Cytoplasm', job: 'Jelly-like material where many cell activities take place.' },
  wall: { name: 'Cell wall', job: 'Plant cells have a strong outer wall for support and protection.' },
  chloroplast: { name: 'Chloroplast', job: 'Contains chlorophyll and absorbs light for photosynthesis.' },
  vacuole: { name: 'Large vacuole', job: 'Stores cell sap and helps keep many plant cells firm.' }
};
const CellArt: React.FC<{ cell: 'plant' | 'animal'; part: string; playing: boolean; reducedMotion: boolean }> = ({ cell, part, playing, reducedMotion }) => {
  const anim = !reducedMotion;
  const hl = (p: string) => (part === p ? { stroke: '#d1452f', strokeWidth: 7 } : {});
  const pulse = (p: string) => part === p && anim && <animate attributeName="opacity" values="1;.45;1" dur="1.2s" repeatCount="indefinite" />;
  const plant = cell === 'plant';
  return (
    <Stage label={`${plant ? 'Plant' : 'Animal'} cell: ${PARTS[part].name}`} depKey={`${cell}-${part}`} playing={playing} reducedMotion={reducedMotion} bg="#eef3ee">
      {plant ? <rect x="120" y="40" width="400" height="220" rx="40" fill="#cfe6b8" stroke="#2f6a31" strokeWidth={part === 'wall' ? 12 : 7} {...(part === 'wall' ? { stroke: '#d1452f' } : {})}>{pulse('wall')}</rect> : null}
      {plant
        ? <rect x="134" y="54" width="372" height="192" rx="32" fill="#e3f0cf" stroke="#58a05a" strokeWidth="4" {...hl('membrane')}>{pulse('membrane')}</rect>
        : <ellipse cx="320" cy="150" rx="220" ry="120" fill="#f4dede" stroke="#c0602f" strokeWidth="5" {...hl('membrane')}>{pulse('membrane')}</ellipse>}
      {anim && Array.from({ length: 6 }, (_, i) => <circle key={i} r="4" fill="#9bb58a" opacity=".7"><animateMotion dur={`${12 + i}s`} begin={`${-i * 2}s`} repeatCount="indefinite" path={plant ? 'M170 90 H470 V210 H170 Z' : 'M170 120 Q320 40 470 130 Q320 250 170 150Z'} /></circle>)}
      {plant && <ellipse cx="380" cy="150" rx="86" ry="62" fill="#cfe6f2" stroke="#2468a8" strokeWidth="4" {...hl('vacuole')}>{pulse('vacuole')}</ellipse>}
      {plant && [[180, 100], [190, 200], [250, 70]].map(([x, y], i) => <ellipse key={i} cx={x} cy={y} rx="24" ry="13" fill="#3f8a4a" stroke="#2f6a31" strokeWidth="3" {...hl('chloroplast')}>{pulse('chloroplast')}</ellipse>)}
      <circle cx={plant ? 250 : 320} cy={plant ? 150 : 150} r="34" fill="#9b7acb" stroke="#4a2f6a" strokeWidth="4" {...hl('nucleus')}>{pulse('nucleus')}</circle>
      <circle cx={plant ? 250 : 320} cy={plant ? 150 : 150} r="10" fill="#4a2f6a" />
      {part === 'cytoplasm' && <rect x="136" y="56" width="368" height="188" rx="30" fill="none" stroke="#d1452f" strokeWidth="6" strokeDasharray="12 10">{anim && <animate attributeName="stroke-dashoffset" values="0;-44" dur="1.4s" repeatCount="indefinite" />}</rect>}
      <Cap x={320} y={288} text={`${plant ? 'Plant' : 'Animal'} cell: ${PARTS[part].name}`} />
    </Stage>
  );
};
export const LivingCellScene: React.FC = () => {
  const [cell, setCell] = useState<'plant' | 'animal'>('plant');
  const keys = cell === 'plant' ? Object.keys(PARTS) : ['nucleus', 'membrane', 'cytoplasm'];
  const steps: MotionStep[] = keys.map(k => ({ id: k, label: PARTS[k].name, caption: PARTS[k].job }));
  return (
    <MotionScene
      key={cell}
      title="The Living Cell Investigator"
      description="Switch between a typical plant cell and an animal cell, then select a structure to discover its job."
      steps={steps}
      stepMs={5000}
      extraControls={<ChoiceRow label="Cell type" options={[{ id: 'plant', label: 'Plant cell' }, { id: 'animal', label: 'Animal cell' }]} value={cell} onChange={c => setCell(c as 'plant' | 'animal')} />}
      footer={<p>Plant cells have a cell wall, chloroplasts and usually a large central vacuole. Animal cells do not have these structures.</p>}
    >
      {({ step, playing, reducedMotion }) => <CellArt cell={cell} part={step.id} playing={playing} reducedMotion={reducedMotion} />}
    </MotionScene>
  );
};

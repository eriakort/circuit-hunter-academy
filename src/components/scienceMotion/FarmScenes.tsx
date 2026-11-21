import React, { useRef, useState } from 'react';
import { MotionScene, type MotionStep } from './MotionScene';
import { ChoiceRow } from './ChoiceRow';
import { MoreDetails } from './MoreDetails';
import { useSmilPause } from './useSmilPause';
import { CROP_DETAILS, FEED_ANIMALS, PREPARATION_STEPS, NUTRITION_ANIMALS, NUTRITION_STAGES, TASKS, MATERIALS, GROUPS, type Material } from '../../data/ghanaJhs3ScienceLessons';

const Cap: React.FC<{ x: number; y: number; text: string; anchor?: 'start' | 'middle' | 'end'; dark?: boolean }> = ({ x, y, text, anchor = 'middle' }) => (
  <text x={x} y={y} textAnchor={anchor} className="sm-note sm-note--dark">{text}</text>
);
const Tok: React.FC<{ path: string; dur: number; begin?: number; fill: string; r?: number }> = ({ path, dur, begin = 0, fill, r = 7 }) => (
  <circle r={r} fill={fill} stroke="#fff" strokeWidth="1.5"><animateMotion dur={`${dur}s`} begin={`${begin}s`} repeatCount="indefinite" path={path} /></circle>
);

/* ---------- Crop maturity ---------- */
type CropId = 'maize' | 'beans' | 'leafy';
const CROP_IDS: CropId[] = ['maize', 'beans', 'leafy'];
const STAGE_COLOURS: Record<CropId, string[][]> = {
  maize: [['#6fae3f', '#c8e08a'], ['#8fa83a', '#e9c349'], ['#b59a4a', '#9a6a2b']],
  beans: [['#6fae3f', '#8fd060'], ['#7aa83a', '#c9c860'], ['#a9904a', '#8a6a3a']],
  leafy: [['#8fd060', '#8fd060'], ['#4f9a3a', '#4f9a3a'], ['#b8b84a', '#e9d349']]
};

const CropPlant: React.FC<{ crop: CropId; stage: number; anim: boolean }> = ({ crop, stage, anim }) => {
  const [leaf, fruit] = STAGE_COLOURS[crop][stage];
  const sway = anim && (
    <animateTransform attributeName="transform" type="rotate" values="-1.5 320 300;1.5 320 300;-1.5 320 300" dur="4s" repeatCount="indefinite" />
  );
  return (
    <g>
      <g key={`${crop}-${stage}`}>
        {crop === 'maize' && (
          <g>
            {sway}
            <path d="M320 300 V70" stroke={leaf} strokeWidth="10" strokeLinecap="round" />
            {[250, 200, 150, 110].map((y, i) => <path key={y} d={`M320 ${y} Q${i % 2 ? 400 : 240} ${y - 40} ${i % 2 ? 430 : 210} ${y + 14}`} fill="none" stroke={leaf} strokeWidth="12" strokeLinecap="round" />)}
            <ellipse cx="345" cy="170" rx={10 + stage * 3} ry={30 + stage * 4} fill={fruit} stroke="#6b4a2b" strokeWidth="2" />
            {stage === 0 && <path d="M345 135 q8 -26 20 -30 M345 135 q-2 -28 6 -36" stroke="#e9c3a0" strokeWidth="3" fill="none" />}
            {stage > 0 && <path d="M345 135 q8 -20 18 -22" stroke="#9a6a2b" strokeWidth="3" fill="none" />}
          </g>
        )}
        {crop === 'beans' && (
          <g>
            {sway}
            <path d="M320 300 C300 240 340 200 310 150 C290 110 330 90 320 60" stroke={leaf} strokeWidth="7" fill="none" strokeLinecap="round" />
            {[[300, 220], [340, 180], [305, 130]].map(([x, y], i) => <ellipse key={i} cx={x} cy={y} rx="26" ry="14" fill={leaf} transform={`rotate(${i % 2 ? 24 : -24} ${x} ${y})`} />)}
            {[[285, 250], [350, 215], [292, 165], [338, 120]].map(([x, y], i) => (
              <g key={i} transform={`translate(${x} ${y}) rotate(${i % 2 ? -14 : 14})`}>
                <rect x="-8" y="0" width={8 + (stage === 0 ? 0 : 6)} height={stage === 0 ? 40 : 56} rx="6" fill={fruit} stroke="#4a5a2a" strokeWidth="2" />
                {stage > 0 && <g fill="#fff" opacity=".35"><circle cx="-1" cy="14" r="3" /><circle cx="-1" cy="28" r="3" /><circle cx="-1" cy="42" r="3" /></g>}
              </g>
            ))}
          </g>
        )}
        {crop === 'leafy' && (
          <g>
            {sway}
            {Array.from({ length: stage === 0 ? 4 : 7 }, (_, i) => {
              const angle = -70 + i * (140 / (stage === 0 ? 3 : 6));
              const len = stage === 0 ? 46 : 80;
              return <ellipse key={i} cx="320" cy={300 - len / 2} rx={stage === 0 ? 14 : 22} ry={len / 2} fill={leaf} stroke="#2f6a31" strokeWidth="2" transform={`rotate(${angle} 320 300)`} />;
            })}
            {stage === 2 && <g><path d="M320 300 V120" stroke="#8aa23a" strokeWidth="6" /><circle cx="320" cy="110" r="14" fill="#f2d03b" stroke="#a9811b" strokeWidth="2" /></g>}
          </g>
        )}
      </g>
    </g>
  );
};

const CropArt: React.FC<{ crop: CropId; stageIndex: number; playing: boolean; reducedMotion: boolean }> = ({ crop, stageIndex, playing, reducedMotion }) => {
  const svg = useRef<SVGSVGElement>(null);
  useSmilPause(svg, playing, reducedMotion, crop, stageIndex);
  const anim = !reducedMotion;
  const stage = CROP_DETAILS[crop].stages[stageIndex];
  return (
    <svg ref={svg} className="sm-art" viewBox="0 0 640 340" role="img" aria-label={`${CROP_DETAILS[crop].name}: ${stage.title}. ${stage.signs}`}>
      <rect width="640" height="340" fill="#eaf3dc" />
      <rect y="300" width="640" height="40" fill="#8a6a3a" />
      <circle cx="560" cy="50" r="26" fill="#f2b93b">{anim && <animate attributeName="r" values="26;29;26" dur="3s" repeatCount="indefinite" />}</circle>
      <g transform={`translate(320 300) scale(${[0.68, 0.95, 1][stageIndex]}) translate(-320 -300)`}><CropPlant crop={crop} stage={stageIndex} anim={anim} /></g>
      <g>
        <rect x="40" y="30" width="190" height="14" rx="7" fill="#e8e0cf" stroke="#8a8272" strokeWidth="2" />
        <rect x="42" y="32" width={(stageIndex + 1) * 62} height="10" rx="5" fill="#5aa23a" />
        <Cap x={40} y={64} text="Growth over time" anchor="start" />
      </g>
      <Cap x={40} y={100} text={`Stage ${stageIndex + 1} of 3: ${stage.title}`} anchor="start" />
    </svg>
  );
};

export const CropMaturityScene: React.FC = () => {
  const [crop, setCrop] = useState<CropId>('maize');
  const details = CROP_DETAILS[crop];
  const steps: MotionStep[] = details.stages.map((s, i) => ({ id: `${crop}-${i}`, label: s.title, caption: `What to observe: ${s.signs} Possible use: ${s.use}` }));
  return (
    <MotionScene
      key={crop}
      title="The Crop Maturity Investigator"
      description="Compare visible growth signs and choose a harvest stage that matches how the crop will be used."
      steps={steps}
      stepMs={5500}
      extraControls={<ChoiceRow label="Crop" options={CROP_IDS.map(id => ({ id, label: CROP_DETAILS[id].name }))} value={crop} onChange={id => setCrop(id as CropId)} />}
      footer={
        <>
          <p>Maturity signs and harvest timing vary by crop variety, climate and intended use. Use local agricultural guidance.</p>
          <MoreDetails summary="Compare two seed beds fairly">
            <p>Observe the same crop in Bed A and Bed B at regular intervals. Record plant height, leaf development, flowering, fruit or pod formation, seed filling and colour changes.</p>
            <p><b>Bed A:</b> record the date and visible growth signs. <b>Bed B:</b> record the same signs on the same dates.</p>
            <p><b>Keep it fair:</b> use the same crop variety and planting date where possible. Record differences in soil, water, nutrients, sunlight and seed-bed conditions instead of guessing what caused them.</p>
            <p><b>Remember:</b> repeated observations in a table or graph provide stronger evidence than a single measurement.</p>
          </MoreDetails>
        </>
      }
    >
      {({ stepIndex, playing, reducedMotion }) => <CropArt crop={crop} stageIndex={stepIndex} playing={playing} reducedMotion={reducedMotion} />}
    </MotionScene>
  );
};

/* ---------- Animal feed preparation ---------- */
type FeedId = 'poultry' | 'ruminants' | 'pigs' | 'fish';
const FEED_IDS: FeedId[] = ['poultry', 'ruminants', 'pigs', 'fish'];
const INGREDIENT_COLOURS = ['#e9c349', '#a9803f', '#8fbf4a'];
export const FEED_STEPS: MotionStep[] = PREPARATION_STEPS.map((s, i) => ({ id: `prep-${i}`, label: s.title.replace(/^\d\. /, ''), caption: s.detail }));

const FeedPrepArt: React.FC<{ stepIndex: number; animal: FeedId; playing: boolean; reducedMotion: boolean }> = ({ stepIndex, animal, playing, reducedMotion }) => {
  const svg = useRef<SVGSVGElement>(null);
  useSmilPause(svg, playing, reducedMotion, stepIndex, animal);
  const anim = !reducedMotion;
  const info = FEED_ANIMALS[animal];
  return (
    <svg ref={svg} className="sm-art" viewBox="0 0 640 340" role="img" aria-label={`Feed preparation for ${info.name}: ${FEED_STEPS[stepIndex].label}`}>
      <rect width="640" height="340" fill="#f3efe2" />
      <rect y="290" width="640" height="50" fill="#b8a77a" />
      <g key={`${stepIndex}-${animal}`}>
        {stepIndex === 0 && (
          <g>
            <circle cx="150" cy="160" r="70" fill="#fff" stroke="#8a6a3a" strokeWidth="4" /><text x="150" y="156" textAnchor="middle" className="sm-name">{info.name.split(' ')[0]}</text><text x="150" y="176" textAnchor="middle" className="sm-note sm-note--dark">species, age, purpose</text>
            {info.ingredients.map((_, i) => <g key={i} transform={`translate(${430} ${90 + i * 70})`}><rect x="-150" y="-24" width="300" height="48" rx="12" fill={INGREDIENT_COLOURS[i]} stroke="#6b4a2b" strokeWidth="2" /><text x="0" y="5" textAnchor="middle" className="sm-note sm-note--dark">{info.ingredients[i].split(' — ')[0]}</text></g>)}
            <path d="M230 160 H270" stroke="#2468a8" strokeWidth="5" strokeDasharray="8 6">{anim && <animate attributeName="stroke-dashoffset" values="0;-28" dur="1s" repeatCount="indefinite" />}</path>
            <Cap x={320} y={40} text="Match the ration to the animal" />
          </g>
        )}
        {stepIndex === 1 && (
          <g>
            <rect x="60" y="230" width="520" height="14" fill="#8a6a3a" />
            {anim && [0, 1, 2, 3].map(i => <Tok key={i} path="M40 210 H600" dur={8} begin={-i * 2} fill={i === 2 ? '#6a7a4a' : INGREDIENT_COLOURS[i % 3]} r={16} />)}
            <g transform="translate(320 120)"><circle r="44" fill="#cfe6f2" opacity=".6" stroke="#2468a8" strokeWidth="5" /><path d="M32 32 L60 60" stroke="#2468a8" strokeWidth="8" strokeLinecap="round" /></g>
            <rect x="400" y="60" width="180" height="50" rx="10" fill="#fff" stroke="#c0463c" strokeWidth="3" /><Cap x={490} y={90} text="Reject mouldy or damp feed" />
            <Cap x={320} y={318} text="Check every ingredient before it is used" />
          </g>
        )}
        {stepIndex === 2 && (
          <g>
            <g>
              <path d="M320 240 V150" stroke="#5c5a50" strokeWidth="8" /><path d="M320 150 L180 164 M320 150 L460 164" stroke="#5c5a50" strokeWidth="6" />
              {anim && <animateTransform attributeName="transform" type="rotate" values="-3 320 150;3 320 150;-3 320 150" dur="3s" repeatCount="indefinite" />}
              <rect x="150" y="164" width="60" height="10" fill="#8a6a3a" /><rect x="430" y="164" width="60" height="10" fill="#8a6a3a" />
              <rect x="164" y="134" width="32" height="30" fill={INGREDIENT_COLOURS[0]} stroke="#6b4a2b" strokeWidth="2" /><rect x="444" y="134" width="32" height="30" fill={INGREDIENT_COLOURS[1]} stroke="#6b4a2b" strokeWidth="2" />
            </g>
            <rect x="290" y="240" width="60" height="14" rx="4" fill="#5c5a50" />
            <Cap x={320} y={318} text="Weigh or measure each ingredient accurately" />
          </g>
        )}
        {stepIndex === 3 && (
          <g>
            <path d="M200 120 H440 L420 260 H220 Z" fill="#cfd6dc" stroke="#5c5a50" strokeWidth="4" />
            {[0, 1, 2, 3, 4, 5].map(i => <circle key={i} r="9" fill={INGREDIENT_COLOURS[i % 3]} stroke="#fff" strokeWidth="1.5"><animateMotion dur="3s" begin={`${-i * 0.5}s`} repeatCount={anim ? 'indefinite' : '1'} path="M250 170 Q320 140 390 170 Q320 230 250 170 Z" /></circle>)}
            <g>
              <path d="M320 70 V210" stroke="#8a6a3a" strokeWidth="8" strokeLinecap="round" />
              {anim && <animateTransform attributeName="transform" type="rotate" values="-14 320 70;14 320 70;-14 320 70" dur="2s" repeatCount="indefinite" />}
            </g>
            <Cap x={320} y={318} text="Mix measured ingredients evenly with clean equipment" />
          </g>
        )}
        {stepIndex === 4 && (
          <g>
            <rect x="220" y="150" width="200" height="120" rx="8" fill="#6b8fb0" stroke="#2f4a63" strokeWidth="4" />
            <rect x="210" y="130" width="220" height="24" rx="6" fill="#4a6a8a" stroke="#2f4a63" strokeWidth="4">{anim && <animate attributeName="y" values="100;100;130;130;100" keyTimes="0;.15;.35;.85;1" dur="6s" repeatCount="indefinite" />}</rect>
            <rect x="250" y="190" width="140" height="44" rx="6" fill="#fff" /><text x="320" y="218" textAnchor="middle" className="sm-note sm-note--dark">FEED · dry · labelled</text>
            {anim && [0, 1].map(i => <circle key={i} r="9" fill="#8a7a6a"><animateMotion dur="3s" begin={`${-i * 1.5}s`} repeatCount="indefinite" path="M600 270 H440 L430 250 L470 270 H600" /></circle>)}
            <Cap x={520} y={318} text="Pests kept out" /><Cap x={320} y={60} text="Store feed in a clean, dry, labelled, protected container" />
          </g>
        )}
      </g>
    </svg>
  );
};

export const FeedPreparationScene: React.FC = () => {
  const [animal, setAnimal] = useState<FeedId>('poultry');
  const info = FEED_ANIMALS[animal];
  return (
    <MotionScene
      title="The Animal Feed Formulator"
      description="Explore suitable feed ingredients for different farm animals and follow a safe, careful preparation process."
      steps={FEED_STEPS}
      stepMs={5500}
      extraControls={
        <div className="gh-jhs1-science-interaction">
          <strong>Choose an animal to investigate</strong>
          <ChoiceRow label="Animal" options={FEED_IDS.map(id => ({ id, label: id === 'ruminants' ? 'Cattle, sheep and goats' : FEED_ANIMALS[id].name.replace(' (chickens)', '') }))} value={animal} onChange={id => setAnimal(id as FeedId)} />
          <div className="gh-jhs1-science-readout" aria-live="polite">
            <strong>{info.name}</strong>
            <p><b>What the animal needs:</b> {info.needs}</p>
            <p><b>Possible ingredients:</b></p>
            <ul>{info.ingredients.map(item => <li key={item}>{item}</li>)}</ul>
            <p><b>Important:</b> {info.note}</p>
          </div>
        </div>
      }
      footer={
        <>
          <p>Ingredient examples are for learning, not a complete feed formula. Exact proportions depend on species, age, health and production stage. Follow qualified local agricultural or veterinary guidance.</p>
          <MoreDetails summary="Check feed quality and safety">
            <p><b>Clean equipment:</b> use clean, dry tools and containers to reduce contamination.</p>
            <p><b>Safe ingredients:</b> never use mouldy or spoiled feed. Some moulds can produce harmful toxins.</p>
            <p><b>Safe storage:</b> protect feed from rain, dampness, rodents and insects. Keep it labelled and use it according to appropriate storage guidance.</p>
            <p><b>Ask an expert:</b> seek advice from an agricultural extension officer, animal nutritionist or veterinarian when selecting commercial rations or feeding an ill animal.</p>
          </MoreDetails>
        </>
      }
    >
      {({ stepIndex, playing, reducedMotion }) => <FeedPrepArt stepIndex={stepIndex} animal={animal} playing={playing} reducedMotion={reducedMotion} />}
    </MotionScene>
  );
};

/* ---------- Livestock nutrition / feed selection ---------- */
type NutId = keyof typeof NUTRITION_ANIMALS;
type StageId = keyof typeof NUTRITION_STAGES;
const NUT_IDS = Object.keys(NUTRITION_ANIMALS) as NutId[];
const STAGE_IDS = Object.keys(NUTRITION_STAGES) as StageId[];
const NUT_STEPS: MotionStep[] = [
  { id: 'animal', label: 'Identify the animal', caption: 'Identify the species first: a ruminant needs fibre-rich forage for its rumen, while a non-ruminant needs a balanced ration.' },
  { id: 'stage', label: 'Match the stage', caption: 'Young, growing, adult and producing animals have different needs. Match the ration to the growth or production stage.' },
  { id: 'feed', label: 'Roughage and concentrates', caption: 'Roughage is bulky and fibre-rich, such as grass, hay and silage. Concentrates give more energy or protein in a smaller amount, and should complement a suitable ration, not be chosen by guesswork. Always provide fresh, clean water.' },
  { id: 'decide', label: 'Make a safe decision', caption: 'Identify the species and stage, read the ingredient and nutrient information, check freshness and suitability, and ask a trained adviser when uncertain.' }
];
const RUMINANTS: NutId[] = ['cattle', 'sheep'];
const CHECKS = ['Species', 'Stage', 'Freshness', 'Clean water'];

const NutritionArt: React.FC<{ stepId: string; animal: NutId; stage: StageId; playing: boolean; reducedMotion: boolean }> = ({ stepId, animal, stage, playing, reducedMotion }) => {
  const svg = useRef<SVGSVGElement>(null);
  useSmilPause(svg, playing, reducedMotion, stepId, animal, stage);
  const anim = !reducedMotion;
  const ruminant = RUMINANTS.includes(animal);
  const info = NUTRITION_ANIMALS[animal];
  const scale = stage === 'young' ? 0.6 : stage === 'growing' ? 0.8 : 1;
  const Body: React.FC<{ s: number }> = ({ s }) => (
    <g transform={`translate(0 ${(1 - s) * 80}) scale(${s})`}>
      <ellipse cx="0" cy="0" rx="80" ry="46" fill={ruminant ? '#b08a5a' : '#e9c3a0'} stroke="#6b4a2b" strokeWidth="3" />
      <circle cx="88" cy="-18" r="24" fill={ruminant ? '#b08a5a' : '#e9c3a0'} stroke="#6b4a2b" strokeWidth="3" />
      <path d="M-40 40 v34 M-10 44 v32 M30 44 v32 M60 40 v34" stroke="#6b4a2b" strokeWidth="8" strokeLinecap="round" />
    </g>
  );
  return (
    <svg ref={svg} className="sm-art" viewBox="0 0 640 340" role="img" aria-label={`${info.name}: ${NUT_STEPS.find(s => s.id === stepId)?.label}`}>
      <rect width="640" height="340" fill="#eef1e0" />
      <rect y="290" width="640" height="50" fill="#8fa85a" />
      <g key={`${stepId}-${animal}-${stage}`}>
        {stepId === 'animal' && (
          <g>
            <g transform="translate(240 200)"><Body s={1} />
              <ellipse cx="-4" cy="-4" rx={ruminant ? 44 : 22} ry={ruminant ? 26 : 18} fill="#e9c349" opacity=".85" stroke="#8a6a1a" strokeWidth="2">{anim && <animate attributeName="opacity" values=".6;1;.6" dur="2s" repeatCount="indefinite" />}</ellipse>
              <text x="-4" y="1" textAnchor="middle" className="sm-note sm-note--dark">{ruminant ? 'Rumen' : 'Stomach'}</text>
            </g>
            <Cap x={470} y={140} text={info.name} anchor="start" />
            <Cap x={470} y={166} text={ruminant ? 'Ruminant: fibre-rich' : 'Non-ruminant: balanced'} anchor="start" /><Cap x={470} y={188} text={ruminant ? 'forage supports the rumen' : 'ration needed'} anchor="start" />
          </g>
        )}
        {stepId === 'stage' && (
          <g>
            {STAGE_IDS.map((id, i) => (
              <g key={id} transform={`translate(${90 + i * 150} 210)`} opacity={id === stage ? 1 : 0.4}>
                <g transform={`scale(${0.28 + (i < 3 ? i * 0.1 : 0.3)})`}><Body s={1} /></g>
                <text y="76" textAnchor="middle" className="sm-note sm-note--dark">{NUTRITION_STAGES[id].label.split(' ')[0]}</text>
              </g>
            ))}
            <g transform={`translate(${90 + STAGE_IDS.indexOf(stage) * 150} 140)`}><path d="M0 0 L-10 -16 H10 Z" fill="#2b2f2a">{anim && <animateTransform attributeName="transform" type="translate" values="0 0;0 8;0 0" dur="1.2s" repeatCount="indefinite" />}</path></g>
            <Cap x={320} y={60} text={`${NUTRITION_STAGES[stage].label}: ${info.name}`} />
          </g>
        )}
        {stepId === 'feed' && (
          <g>
            <g transform="translate(470 200)"><Body s={0.75} /></g>
            <rect x="70" y="80" width="130" height={ruminant ? 120 : 50} rx="8" fill="#8fbf4a" stroke="#4f7a22" strokeWidth="3" /><Cap x={135} y={ruminant ? 224 : 154} text={ruminant ? 'Roughage' : 'Greens (supplement)'} />
            <rect x="230" y="120" width="110" height="80" rx="8" fill="#e9c349" stroke="#8a6a1a" strokeWidth="3" /><Cap x={285} y={224} text="Concentrate" />
            {anim && [0, 1, 2].map(i => <Tok key={`r${i}`} path="M200 140 C300 120 380 150 430 190" dur={3} begin={-i} fill="#8fbf4a" r={ruminant ? 8 : 5} />)}
            {anim && [0, 1].map(i => <Tok key={`c${i}`} path="M340 150 C380 160 410 170 430 190" dur={2.4} begin={-i * 1.2} fill="#e9c349" r={7} />)}
            <Cap x={320} y={50} text={`${info.name}: forage and concentrate`} />
            <Cap x={320} y={300} text="Always provide fresh, clean water" />
          </g>
        )}
        {stepId === 'decide' && (
          <g>
            {CHECKS.map((c, i) => (
              <g key={c} transform={`translate(${200} ${80 + i * 58})`}>
                <rect x="0" y="-24" width="240" height="46" rx="10" fill="#fff" stroke="#8a8272" strokeWidth="3" /><text x="30" y="5" className="sm-name sm-name--sm">{c}</text>
                <path d="M190 -2 l12 14 l24 -30" fill="none" stroke="#2f8a4a" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" opacity={anim ? 0 : 1}>
                  {anim && <animate attributeName="opacity" values="0;0;1;1" keyTimes={`0;${(0.1 + i * 0.18).toFixed(2)};${(0.18 + i * 0.18).toFixed(2)};1`} dur="6s" repeatCount="indefinite" />}
                </path>
              </g>
            ))}
            <Cap x={320} y={40} text="Check before you choose the feed" />
          </g>
        )}
      </g>
    </svg>
  );
};

export const FeedSelectionScene: React.FC = () => {
  const [animal, setAnimal] = useState<NutId>('cattle');
  const [stage, setStage] = useState<StageId>('growing');
  const info = NUTRITION_ANIMALS[animal];
  const st = NUTRITION_STAGES[stage];
  return (
    <MotionScene
      title="The Livestock Nutrition Strategist"
      description="Match feed choices to an animal’s digestive system, growth stage and production needs."
      steps={NUT_STEPS}
      stepMs={6000}
      extraControls={
        <div className="gh-jhs1-science-interaction">
          <strong>Choose the animal and its stage</strong>
          <ChoiceRow label="Animal" options={NUT_IDS.map(id => ({ id, label: NUTRITION_ANIMALS[id].name }))} value={animal} onChange={id => setAnimal(id as NutId)} />
          <ChoiceRow label="Growth or production stage" options={STAGE_IDS.map(id => ({ id, label: NUTRITION_STAGES[id].label }))} value={stage} onChange={id => setStage(id as StageId)} />
          <div className="gh-jhs1-science-readout" aria-live="polite">
            <strong>{info.name}</strong>
            <p>{info.system}</p>
            <p><b>Forage / roughage example:</b> {info.forage}</p>
            <p><b>Concentrate / complete-feed example:</b> {info.concentrate}</p>
            <p><b>{st.label}:</b> {st.note}</p>
            <p><b>For {info.name.toLowerCase()}:</b> {info.checks}</p>
          </div>
        </div>
      }
      footer={
        <>
          <p>This learning guide gives examples, not exact rations or feeding quantities. Feed quality and nutrient needs vary. Follow a reliable local feed guide or advice from an agricultural extension officer, animal nutritionist or veterinarian.</p>
          <MoreDetails summary="Make a safe feeding decision">
            <p>Identify the species and stage before choosing feed. Read the ingredient and nutrient information, check freshness and suitability, and consider cost without sacrificing animal needs.</p>
            <p>Introduce changes gradually, avoid unverified additives and observe how the animal responds. Record the feed offered, amount eaten and any unusual behaviour during supervised practical work.</p>
            <p>Never assume one ration suits every animal. Ask a trained farm supervisor or qualified adviser when uncertain.</p>
          </MoreDetails>
        </>
      }
    >
      {({ step, playing, reducedMotion }) => <NutritionArt stepId={step.id} animal={animal} stage={stage} playing={playing} reducedMotion={reducedMotion} />}
    </MotionScene>
  );
};

/* ---------- Agricultural tools ---------- */
type ToolId = keyof typeof TASKS;
const TOOL_IDS = Object.keys(TASKS) as ToolId[];
const TOOL_STEPS: MotionStep[] = [
  { id: 'task', label: 'Identify the farm task', caption: 'Find out what the farmer needs the tool to do. A tool should be fit for its task, comfortable, strong, repairable and affordable.' },
  { id: 'sketch', label: 'Sketch and choose materials', caption: 'Draw and label the blade or working head, handle and joint. Select materials for strength, durability, availability, cost and safe handling.' },
  { id: 'measure', label: 'Measure and prepare parts', caption: 'Measure and mark the parts. A trained adult should cut, shape or drill metal with suitable equipment and supervision. Learners must not attempt these operations alone.' },
  { id: 'join', label: 'Join and inspect', caption: 'Use an appropriate bolt, rivet, screw or strong binding. Smooth unsafe edges and check that the handle is secure, comfortable and free of splinters.' },
  { id: 'test', label: 'Test and improve', caption: 'With teacher supervision, test the prototype on a small soil bed. Record what works, identify a weakness and suggest one improvement.' }
];
const SAFETY = ['A trained adult supervises cutting, shaping and drilling.', 'Suitable eye and hand protection is used where required.', 'Materials are secured and the work area is kept clear.', 'The finished tool has a tight joint, smooth handle and no sharp burrs or splinters.'];

const ToolShape: React.FC<{ tool: ToolId }> = ({ tool }) => (
  <g>
    <rect x="-5" y="-130" width="10" height="130" rx="4" fill="#a9803f" stroke="#6b4a2b" strokeWidth="2" />
    {tool === 'hoe' && <path d="M-8 0 H58 L48 40 H-4 Z" fill="#9aa3ab" stroke="#4a5560" strokeWidth="3" />}
    {tool === 'trowel' && <path d="M-22 0 H22 Q18 50 0 66 Q-18 50 -22 0 Z" fill="#9aa3ab" stroke="#4a5560" strokeWidth="3" />}
    {tool === 'rake' && <g><rect x="-44" y="0" width="88" height="10" fill="#9aa3ab" stroke="#4a5560" strokeWidth="2" />{[-40, -26, -12, 2, 16, 30].map(x => <rect key={x} x={x} y="10" width="6" height="26" fill="#9aa3ab" stroke="#4a5560" strokeWidth="1.5" />)}</g>}
  </g>
);

const ToolsArt: React.FC<{ stepIndex: number; tool: ToolId; playing: boolean; reducedMotion: boolean }> = ({ stepIndex, tool, playing, reducedMotion }) => {
  const svg = useRef<SVGSVGElement>(null);
  useSmilPause(svg, playing, reducedMotion, stepIndex, tool);
  const anim = !reducedMotion;
  const info = TASKS[tool];
  return (
    <svg ref={svg} className="sm-art" viewBox="0 0 640 340" role="img" aria-label={`${info.title}: ${TOOL_STEPS[stepIndex].label}`}>
      <rect width="640" height="340" fill="#f1ece0" />
      <rect y="280" width="640" height="60" fill="#8a6a3a" />
      <g key={`${stepIndex}-${tool}`}>
        {stepIndex === 0 && (
          <g>
            <g transform="translate(300 210)"><g>
              <ToolShape tool={tool} />
              {anim && <animateTransform attributeName="transform" type="rotate" values="-18 0 0;14 0 0;-18 0 0" dur="2s" repeatCount="indefinite" />}
            </g></g>
            {anim && [0, 1, 2].map(i => <circle key={i} r="5" fill="#6b4a2b"><animateMotion dur="2s" begin={`${-i * 0.6}s`} repeatCount="indefinite" path={`M${330 + i * 14} 272 q18 -40 40 -10`} /></circle>)}
            <Cap x={320} y={40} text={`Task: ${info.purpose.toLowerCase()}`} />
          </g>
        )}
        {stepIndex === 1 && (
          <g>
            <g transform="translate(260 220)"><ToolShape tool={tool} /></g>
            {[['Handle', 330, 120], ['Joint', 330, 220], ['Working head', 330, 250]].map(([t, x, y], i) => (
              <g key={t as string} opacity={anim ? 0 : 1}>
                <path d={`M${264} ${y} H${(x as number) + 10}`} stroke="#5c5a50" strokeWidth="2" />
                <text x={(x as number) + 20} y={(y as number) + 4} className="sm-note sm-note--dark">{t as string}</text>
                {anim && <animate attributeName="opacity" values="0;0;1;1" keyTimes={`0;${(0.1 + i * 0.25).toFixed(2)};${(0.2 + i * 0.25).toFixed(2)};1`} dur="5s" repeatCount="indefinite" />}
              </g>
            ))}
            <Cap x={320} y={40} text={`${info.blade}; ${info.handle.toLowerCase()}`} />
          </g>
        )}
        {stepIndex === 2 && (
          <g>
            <g transform="translate(240 215)"><ToolShape tool={tool} /></g>
            <rect x="120" y="262" width="260" height="14" fill="#f2d03b" stroke="#a9811b" strokeWidth="2" />
            {Array.from({ length: 13 }, (_, i) => <path key={i} d={`M${130 + i * 20} 262 v${i % 2 ? 6 : 10}`} stroke="#5c5a50" strokeWidth="2" />)}
            <path d="M120 250 H380" stroke="#2468a8" strokeWidth="4" strokeDasharray="10 6">{anim && <animate attributeName="stroke-dashoffset" values="0;-32" dur="1.4s" repeatCount="indefinite" />}</path>
            <rect x="430" y="90" width="170" height="70" rx="10" fill="#fff" stroke="#c0463c" strokeWidth="3" /><Cap x={515} y={120} text="Cutting and drilling:" /><Cap x={515} y={140} text="trained adult only" />
          </g>
        )}
        {stepIndex === 3 && (
          <g>
            <g transform="translate(300 215)">
              <rect x="-5" y="-130" width="10" height="130" rx="4" fill="#a9803f" stroke="#6b4a2b" strokeWidth="2" />
              <g>{anim && <animateTransform attributeName="transform" type="translate" values="-100 -20;0 0;0 0;-100 -20" keyTimes="0;.35;.85;1" dur="5s" repeatCount="indefinite" />}
                {tool === 'hoe' && <path d="M-8 0 H58 L48 40 H-4 Z" fill="#9aa3ab" stroke="#4a5560" strokeWidth="3" />}
                {tool === 'trowel' && <path d="M-22 0 H22 Q18 50 0 66 Q-18 50 -22 0 Z" fill="#9aa3ab" stroke="#4a5560" strokeWidth="3" />}
                {tool === 'rake' && <g><rect x="-44" y="0" width="88" height="10" fill="#9aa3ab" stroke="#4a5560" strokeWidth="2" />{[-40, -26, -12, 2, 16, 30].map(x => <rect key={x} x={x} y="10" width="6" height="26" fill="#9aa3ab" stroke="#4a5560" strokeWidth="1.5" />)}</g>}
              </g>
              <circle cx="0" cy="4" r="7" fill="#d5a43b" stroke="#6b4a2b" strokeWidth="2" />
            </g>
            <Cap x={400} y={215} text="Secure joint" anchor="start" /><Cap x={400} y={237} text="Smooth handle, no burrs" anchor="start" />
          </g>
        )}
        {stepIndex === 4 && (
          <g>
            <g transform="translate(260 205)"><g>
              <ToolShape tool={tool} />
              {anim && <animateTransform attributeName="transform" type="rotate" values="-16 0 0;12 0 0;-16 0 0" dur="2.4s" repeatCount="indefinite" />}
            </g></g>
            <path d="M470 150 l24 30 l50 -64" fill="none" stroke="#2f8a4a" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" opacity={anim ? 0 : 1}>{anim && <animate attributeName="opacity" values="0;0;1;1" keyTimes="0;.4;.55;1" dur="4s" repeatCount="indefinite" />}</path>
            <Cap x={320} y={40} text="Test on a small soil bed with teacher supervision" />
            <Cap x={490} y={230} text={info.check.slice(0, 38)} /><Cap x={490} y={250} text={info.check.slice(38, 80)} />
          </g>
        )}
      </g>
    </svg>
  );
};

export const AgriToolsScene: React.FC = () => {
  const [tool, setTool] = useState<ToolId>('hoe');
  const [checks, setChecks] = useState([false, false, false, false]);
  const info = TASKS[tool];
  return (
    <MotionScene
      title="The Agricultural Tool Designer"
      description="Plan a useful, durable and safe hand tool by matching its job, materials, parts and joining method."
      steps={TOOL_STEPS}
      stepMs={6000}
      extraControls={
        <>
          <div className="gh-jhs1-science-interaction">
            <strong>Choose the farm task</strong>
            <ChoiceRow label="Tool" options={TOOL_IDS.map(id => ({ id, label: TASKS[id].title }))} value={tool} onChange={id => setTool(id as ToolId)} />
            <div className="gh-jhs1-science-readout" aria-live="polite">
              <strong>{info.title}</strong>
              <p><b>Purpose:</b> {info.purpose}.</p>
              <p><b>Working part:</b> {info.blade}. <b>Handle:</b> {info.handle}. <b>Joint:</b> {info.joint}.</p>
            </div>
          </div>
          <div className="gh-jhs1-science-interaction">
            <strong>Workshop safety and final inspection</strong>
            <div className="gh-jhs1-science-readout">
              {SAFETY.map((item, index) => (
                <label key={item} style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start', margin: '0.55rem 0' }}>
                  <input type="checkbox" checked={checks[index]} onChange={event => setChecks(previous => previous.map((value, i) => i === index ? event.target.checked : value))} />
                  <span>{item}</span>
                </label>
              ))}
              <p aria-live="polite"><b>Safety review:</b> {checks.filter(Boolean).length} of 4 checks completed.</p>
              <p><b>Safe field test:</b> {info.check}</p>
            </div>
          </div>
        </>
      }
      footer={
        <>
          <p>This is a design-planning activity, not a workshop instruction. Cutting, drilling or shaping metal must be done only by a trained adult with suitable tools, protective equipment and supervision.</p>
          <MoreDetails summary="Materials and joining methods">
            <p><b>Handle materials:</b> well-finished wood or a durable recycled material can be suitable when strong, comfortable and safe.</p>
            <p><b>Working parts:</b> suitable metal may provide strength and durability. Avoid sharp, rusty or contaminated scrap.</p>
            <p><b>Joining methods:</b> bolts, rivets, screws or strong bindings can hold parts together when correctly selected and fitted.</p>
            <p><b>Selection test:</b> consider strength, durability, availability, cost, repairability, comfort and safe handling.</p>
            <p>Store sharp tools safely. Never use a damaged tool in the field.</p>
          </MoreDetails>
        </>
      }
    >
      {({ stepIndex, playing, reducedMotion }) => <ToolsArt stepIndex={stepIndex} tool={tool} playing={playing} reducedMotion={reducedMotion} />}
    </MotionScene>
  );
};

/* ---------- Manure materials sorting ---------- */
const GROUP_STEPS: MotionStep[] = [
  { id: 'plant', label: 'Suitable plant materials', caption: 'Dry leaves, crop residues, grass cuttings and vegetable peels can add organic matter.' },
  { id: 'animal', label: 'Animal manure materials', caption: 'Cattle dung, goat and sheep droppings, and poultry litter may be used only when properly managed and treated.' },
  { id: 'reject', label: 'Remove from compost', caption: 'Plastics, glass and metals must be removed. They do not decompose and contaminate the heap.' },
  { id: 'special', label: 'Specialist treatment only', caption: 'Human excreta and animal carcasses can carry pathogens and are not ordinary school-compost materials.' }
];
const BIN_COLOURS: Record<string, string> = { plant: '#6fae3f', animal: '#a9803f', reject: '#7a7a72', special: '#c0463c' };

const ManureArt: React.FC<{ stepId: string; material: Material; placed: string | undefined; playing: boolean; reducedMotion: boolean }> = ({ stepId, material, placed, playing, reducedMotion }) => {
  const svg = useRef<SVGSVGElement>(null);
  useSmilPause(svg, playing, reducedMotion, stepId, material.name, placed);
  const anim = !reducedMotion;
  const binX = (id: string) => 95 + GROUPS.findIndex(g => g.id === id) * 150;
  return (
    <svg ref={svg} className="sm-art" viewBox="0 0 640 340" role="img" aria-label={`Sorting ${material.name}. Active group: ${GROUP_STEPS.find(s => s.id === stepId)?.label}`}>
      <rect width="640" height="340" fill="#eef1e4" />
      <rect y="300" width="640" height="40" fill="#b8b4a4" />
      {GROUPS.map((g, i) => (
        <g key={g.id} transform={`translate(${95 + i * 150} 0)`} opacity={g.id === stepId ? 1 : 0.5}>
          <path d="M-50 190 H50 L44 300 H-44 Z" fill={BIN_COLOURS[g.id]} stroke="#2b2f2a" strokeWidth={g.id === stepId ? 4 : 2}>{anim && g.id === stepId && <animate attributeName="stroke-width" values="3;8;3" dur="1.6s" repeatCount="indefinite" />}</path>
          <text y="246" textAnchor="middle" className="sm-note" style={{ fill: '#fff', stroke: 'none' }}>{g.label.split(' ').slice(0, 2).join(' ')}</text>
        </g>
      ))}
      {anim && placed && <circle r="13" fill="#fff" stroke="#2b2f2a" strokeWidth="3" key={`${material.name}-${placed}`}><animateMotion dur="2.4s" repeatCount="indefinite" path={`M320 50 C320 90 ${binX(placed)} 90 ${binX(placed)} 178`} /></circle>}
      <text x="320" y="36" textAnchor="middle" className="sm-title">{material.name}{placed ? '' : ' (choose a group below)'}</text>
      <Cap x={320} y={322} text={GROUP_STEPS.find(s => s.id === stepId)?.label ?? ''} />
    </svg>
  );
};

export const ManureMaterialsScene: React.FC = () => {
  const [selected, setSelected] = useState(0);
  const [sorted, setSorted] = useState<Record<string, Material['group']>>({});
  const material = MATERIALS[selected];
  const correct = Object.entries(sorted).filter(([name, group]) => MATERIALS.find(item => item.name === name)?.group === group).length;
  const completed = Object.keys(sorted).length;
  return (
    <MotionScene
      title="The Manure Materials Sorting Lab"
      description="Identify useful organic materials, remove contaminants and recognise wastes that need specialist treatment."
      steps={GROUP_STEPS}
      stepMs={5000}
      extraControls={
        <div className="gh-jhs1-science-interaction">
          <strong>Sort the materials</strong>
          <p>Select a material, then place it in the best group. Your score updates as you work.</p>
          <div className="gh-jhs1-science-choices">
            {MATERIALS.map((item, index) => (
              <button type="button" key={item.name} className={`gh-jhs1-science-choice${selected === index ? ' is-active' : ''}`} aria-pressed={selected === index} onClick={() => setSelected(index)}>
                {item.name}{sorted[item.name] ? ' ✓' : ''}
              </button>
            ))}
          </div>
          <div className="gh-jhs1-science-readout" aria-live="polite">
            <strong>{material.name}</strong>
            <p>{material.reason}</p>
            <div className="gh-jhs1-science-choices">
              {GROUPS.map(group => (
                <button type="button" key={group.id} className={`gh-jhs1-science-choice${sorted[material.name] === group.id ? ' is-active' : ''}`} aria-pressed={sorted[material.name] === group.id} onClick={() => setSorted(previous => ({ ...previous, [material.name]: group.id }))}>
                  {group.label}
                </button>
              ))}
            </div>
            <p><b>Sorting progress:</b> {completed} / {MATERIALS.length} · <b>Correct placements:</b> {correct}</p>
            {completed === MATERIALS.length && <p role="status"><b>Sorting complete!</b> You correctly placed {correct} of {MATERIALS.length} materials.</p>}
          </div>
        </div>
      }
      footer={
        <>
          <p>Classroom learning model: only clean, suitable materials and properly treated livestock manure should enter a compost process.</p>
          <MoreDetails summary="Why does organic matter help soil?">
            <p>As suitable materials decompose, they form organic matter that can improve soil structure, help soil hold water and support nutrient cycling.</p>
            <p>Compost needs suitable materials, moisture and air. Animal manure must be treated safely and allowed to mature according to agricultural guidance.</p>
          </MoreDetails>
          <MoreDetails summary="Work safely">
            <p>Do not touch unknown waste with bare hands. Keep compost away from drinking water and food preparation areas. Use appropriate protective equipment, wash hands after handling materials and ask a trained adult for guidance.</p>
            <p>Never add batteries, chemicals, motor oil, plastics, glass or metal to compost. Never handle human excreta or animal carcasses as ordinary compost.</p>
          </MoreDetails>
        </>
      }
    >
      {({ step, playing, reducedMotion }) => <ManureArt stepId={step.id} material={material} placed={sorted[material.name]} playing={playing} reducedMotion={reducedMotion} />}
    </MotionScene>
  );
};

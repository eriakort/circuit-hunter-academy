import React, { useRef } from 'react';
import { MotionScene, type MotionStep } from './MotionScene';
import { MoreDetails } from './MoreDetails';
import { useSmilPause } from './useSmilPause';

type Stream = { id: string; label: string; examples: string; method: string; reason: string; colour: string; items: string[]; tag: string };
export const STREAMS: Stream[] = [
  { id: 'organic', tag: 'Compost it', label: 'Organic waste', colour: '#6fae3f', items: ['peel', 'leaf', 'scrap'], examples: 'Fruit peels, vegetable scraps, dry leaves and suitable plant cuttings', method: 'Separate clean organic material for a managed composting process.', reason: 'Decomposers break it down into a useful soil conditioner when moisture and air are suitable.' },
  { id: 'recyclable', tag: 'Keep clean and dry, then recycle', label: 'Recyclable materials', colour: '#3e7fb0', items: ['paper', 'bottle', 'can'], examples: 'Clean paper, cardboard, glass bottles and accepted metal or plastic containers', method: 'Keep materials clean and dry, then send them to an appropriate recovery or recycling collection.', reason: 'Recovered materials can become inputs for new products and reduce demand for raw materials.' },
  { id: 'hazardous', tag: 'Specialist collection only', label: 'Hazardous or special waste', colour: '#c0463c', items: ['battery', 'chem', 'phone'], examples: 'Batteries, electronic waste, chemical containers and medical waste', method: 'Keep separate, do not open, burn or mix with ordinary rubbish, and use approved specialist collection.', reason: 'Some items can release harmful substances or carry infection risks and need controlled handling.' },
  { id: 'residual', tag: 'Authorised local collection', label: 'Residual waste', colour: '#7a7a72', items: ['wrapper', 'sachet', 'mixed'], examples: 'Contaminated wrappers and items that cannot be safely reused, recycled or composted locally', method: 'Use the local authorised collection and disposal service.', reason: 'Safe collection prevents litter, blocked drains and uncontrolled dumping.' }
];
export const WASTE_STEPS: MotionStep[] = STREAMS.map(s => ({ id: s.id, label: s.label, caption: `${s.examples}. Best next step: ${s.method} ${s.reason}` }));

const BIN_X = [95, 245, 395, 545];
const ITEM_COLOURS: Record<string, string> = { peel: '#e9b949', leaf: '#6fae3f', scrap: '#c98a3a', paper: '#f4f0e4', bottle: '#8fb4c9', can: '#b8c0c8', battery: '#33353a', chem: '#d65a3a', phone: '#5a6a7a', wrapper: '#d8c24a', sachet: '#9aa3ab', mixed: '#b8a98a' };

const WasteArt: React.FC<{ stepIndex: number; playing: boolean; reducedMotion: boolean }> = ({ stepIndex, playing, reducedMotion }) => {
  const svg = useRef<SVGSVGElement>(null);
  useSmilPause(svg, playing, reducedMotion, stepIndex);
  const anim = !reducedMotion;
  const active = STREAMS[stepIndex];
  const bx = BIN_X[stepIndex];
  return (
    <svg ref={svg} className="sm-art" viewBox="0 0 640 340" role="img" aria-label={`Waste sorting: ${active.label} goes to its own bin. ${active.method}`}>
      <rect width="640" height="340" fill="#eef1ea" />
      <rect x="0" y="300" width="640" height="40" fill="#b8b4a4" />
      {STREAMS.map((s, i) => (
        <g key={s.id} transform={`translate(${BIN_X[i]} 0)`} opacity={i === stepIndex ? 1 : 0.45}>
          <path d="M-44 190 H44 L38 300 H-38 Z" fill={s.colour} stroke="#2b2f2a" strokeWidth={i === stepIndex ? 4 : 2} />
          <rect x="-50" y="180" width="100" height="14" rx="4" fill={s.colour} stroke="#2b2f2a" strokeWidth="2" />
          <text y="250" textAnchor="middle" className="sm-name sm-name--light sm-name--sm">{s.label.split(' ')[0]}</text>
        </g>
      ))}
      <text x="320" y="30" textAnchor="middle" className="sm-title">Sort at the source: {active.label}</text>
      {anim && active.items.map((item, i) => (
        <circle key={`${active.id}-${item}`} r="11" fill={ITEM_COLOURS[item]} stroke="#2b2f2a" strokeWidth="2">
          <animateMotion dur="3.6s" begin={`${-i * 1.2}s`} repeatCount="indefinite" path={`M${bx - 90 + i * 30} 60 C${bx - 40} 70 ${bx} 90 ${bx} 176`} />
        </circle>
      ))}
      {!anim && <circle cx={bx} cy="150" r="11" fill="#2b2f2a" />}
      {active.id === 'hazardous' && <g stroke="#c0463c" strokeWidth="4" fill="none"><path d={`M${bx - 20} 120 L${bx} 90 L${bx + 20} 120 Z`} /><path d={`M${bx} 100 V110 M${bx} 115 V116`} /></g>}
      <text x={Math.min(Math.max(bx, 140), 500)} y="324" textAnchor="middle" className="sm-force" fill="#2b2f2a">{active.tag}</text>
    </svg>
  );
};

export const WasteScene: React.FC = () => (
  <MotionScene
    title="The Community Waste Solutions Lab"
    description="Sort common waste safely, choose a suitable recovery method and plan a practical school waste audit."
    steps={WASTE_STEPS}
    stepMs={6000}
    footer={
      <>
        <p>Local recycling and collection options vary. Follow school rules and approved local services, especially for hazardous waste.</p>
        <MoreDetails summary="Remember the order: the waste hierarchy">
          <ol>
            <li><b>Prevent and reduce:</b> avoid unnecessary packaging and choose durable items.</li>
            <li><b>Reuse and repair:</b> use items again or repair them when safe.</li>
            <li><b>Recycle and compost:</b> recover clean materials and compost suitable organic waste.</li>
            <li><b>Treat and dispose:</b> use approved treatment and collection for remaining or hazardous waste.</li>
          </ol>
          <p>Preventing waste is usually better than dealing with it after it has been created. Recycling helps, but it does not replace reducing unnecessary consumption.</p>
          <p>Never burn mixed waste or dump rubbish into drains, streams or open spaces. Litter can pollute waterways and cause blocked drains. Keep batteries, chemicals, electronic waste and medical waste out of ordinary bins.</p>
          <p>Keep hazardous waste separate and use approved specialist collection. Never handle unknown, leaking or sharp waste without trained adult supervision.</p>
        </MoreDetails>
        <MoreDetails summary="Run a school waste audit">
          <p><b>Observe:</b> identify where waste is produced, such as classrooms, the canteen and the school grounds.</p>
          <p><b>Measure:</b> with teacher supervision and safe handling, record the types and amounts collected over the same time period.</p>
          <p><b>Analyse:</b> look for the largest waste streams and items that could be prevented, reused, recycled or composted.</p>
          <p><b>Improve:</b> agree on clearly labelled collection points, responsible collection arrangements and a date to check progress.</p>
        </MoreDetails>
        <MoreDetails summary="Design a safer community solution">
          <p>Compare options using safety, cost, local availability, collection reliability, environmental impact and the amount of waste prevented.</p>
          <p>A new bin is not enough on its own. A successful plan needs correct sorting, regular collection, community participation and monitoring.</p>
          <p>Ask a trained adult to handle hazardous or unknown waste. Never sort sharp, leaking, medical or chemical waste by hand.</p>
        </MoreDetails>
      </>
    }
  >
    {({ stepIndex, playing, reducedMotion }) => <WasteArt stepIndex={stepIndex} playing={playing} reducedMotion={reducedMotion} />}
  </MotionScene>
);

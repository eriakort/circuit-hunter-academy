import React, { useRef } from 'react';
import { MotionScene, type MotionStep } from './MotionScene';
import { MoreDetails } from './MoreDetails';
import { useSmilPause } from './useSmilPause';
import { PLANT_PARTS, INDUSTRIES, CONDITION_GUIDES } from '../../data/ghanaJhs3ScienceLessons';

const Cap: React.FC<{ x: number; y: number; text: string; anchor?: 'start' | 'middle' | 'end' }> = ({ x, y, text, anchor = 'middle' }) => (
  <text x={x} y={y} textAnchor={anchor} className="sm-note sm-note--dark">{text}</text>
);
const Tok: React.FC<{ path: string; dur: number; begin?: number; fill: string; r?: number }> = ({ path, dur, begin = 0, fill, r = 6 }) => (
  <circle r={r} fill={fill} stroke="#fff" strokeWidth="1.5"><animateMotion dur={`${dur}s`} begin={`${begin}s`} repeatCount="indefinite" path={path} /></circle>
);

/* ---------- Plant resources ---------- */
type PartId = keyof typeof PLANT_PARTS;
const PART_IDS = Object.keys(PLANT_PARTS) as PartId[];
export const PLANT_STEPS: MotionStep[] = PART_IDS.map(id => {
  const p = PLANT_PARTS[id];
  return { id, label: p.label, caption: `${p.role} Agricultural uses: ${p.agricultural.join(' ')} Other uses: ${p.other.join(' ')} Responsible use: ${p.care}` };
});
const HALO: Record<PartId, [number, number, number]> = { roots: [320, 292, 60], stems: [320, 175, 34], leaves: [320, 150, 90], flowers: [320, 64, 36], fruits: [415, 205, 34] };

const PlantArt: React.FC<{ part: PartId; playing: boolean; reducedMotion: boolean }> = ({ part, playing, reducedMotion }) => {
  const svg = useRef<SVGSVGElement>(null);
  useSmilPause(svg, playing, reducedMotion, part);
  const anim = !reducedMotion;
  const [hx, hy, hr] = HALO[part];
  return (
    <svg ref={svg} className="sm-art" viewBox="0 0 640 340" role="img" aria-label={`Plant resources: ${PLANT_PARTS[part].label}`}>
      <rect width="640" height="340" fill="#eaf3dc" />
      <rect y="250" width="640" height="90" fill="#8a6a3a" />
      <circle cx={hx} cy={hy} r={hr} fill="#fff6a8" opacity=".75">{anim && <animate attributeName="r" values={`${hr};${hr + 10};${hr}`} dur="1.6s" repeatCount="indefinite" />}</circle>
      <path d="M320 250 C300 280 270 295 250 320 M320 250 C340 280 372 296 392 322 M320 250 V330 M290 285 L262 292 M350 290 L376 288" stroke="#e8d4a8" strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M320 250 V100" stroke="#287653" strokeWidth="12" strokeLinecap="round" />
      <ellipse cx="262" cy="170" rx="52" ry="22" fill="#8fc99a" stroke="#287653" strokeWidth="3" transform="rotate(-22 262 170)" />
      <ellipse cx="380" cy="138" rx="52" ry="22" fill="#8fc99a" stroke="#287653" strokeWidth="3" transform="rotate(22 380 138)" />
      <g transform="translate(320 70)">{[0, 72, 144, 216, 288].map(a => <ellipse key={a} cx="0" cy="-20" rx="11" ry="18" fill="#f4c7d3" stroke="#a94350" strokeWidth="2" transform={`rotate(${a})`} />)}<circle r="8" fill="#e8b84b" stroke="#a77919" strokeWidth="1.5" /></g>
      <path d="M335 175 Q380 180 405 195" stroke="#287653" strokeWidth="5" fill="none" />
      <circle cx="415" cy="205" r="22" fill="#f0a24a" stroke="#9b7134" strokeWidth="3">{anim && part === 'fruits' && <animate attributeName="r" values="22;26;22" dur="1.6s" repeatCount="indefinite" />}</circle>
      {anim && [0, 1, 2].map(i => <Tok key={`w${i}`} path="M320 300 V105" dur={3} begin={-i} fill="#3f9fc3" r={5} />)}
      {anim && [0, 1].map(i => <Tok key={`s${i}`} path={`M${230 + i * 90} 40 L${280 + i * 90} ${130 + i * 10}`} dur={2.6} begin={-i * 1.3} fill="#f6d34a" r={6} />)}
      {anim && <g><ellipse rx="7" ry="5" fill="#e9c349" stroke="#2b2f2a" strokeWidth="1.5"><animateMotion dur="4s" repeatCount="indefinite" path="M200 40 C260 20 280 60 320 50 C360 40 330 100 300 80 C260 60 220 90 200 40" /></ellipse></g>}
      <Cap x={620} y={30} text="Water and minerals rise from the roots; sunlight reaches the leaves" anchor="end" />
      <Cap x={20} y={60} text={`Selected part: ${PLANT_PARTS[part].label}`} anchor="start" />
    </svg>
  );
};

export const PlantResourcesScene: React.FC = () => (
  <MotionScene
    title="The Plant Resources Explorer"
    description="Discover how roots, stems, leaves, flowers and fruits support life and provide useful materials for people."
    steps={PLANT_STEPS}
    stepMs={6500}
    footer={
      <>
        <p>Plant uses vary by species and local practice. Use correctly identified, safe materials and protect biodiversity.</p>
        <MoreDetails summary="Parts of a plant at a glance">
          <p><b>Roots:</b> anchorage and absorption. <b>Stems:</b> support and transport. <b>Leaves:</b> photosynthesis. <b>Flowers:</b> reproduction. <b>Fruits:</b> seed protection and dispersal.</p>
          <p><b>Examples:</b> cassava and yam roots, sugarcane and bamboo stems, leafy vegetables and animal fodder, flowers that support pollinators, and mango fruits. Timber from suitable trees can be used for furniture.</p>
        </MoreDetails>
        <MoreDetails summary="From plant material to useful product">
          <p><b>Food:</b> cassava roots, leafy vegetables and mango fruits provide food.</p>
          <p><b>Building and craft:</b> timber and bamboo stems can become furniture, structures and crafts.</p>
          <p><b>Farming:</b> suitable leaves and crop residues can provide fodder, mulch or compost.</p>
          <p><b>Culture and daily life:</b> leaves may wrap food, while flowers can be used for decoration.</p>
          <p>Before using a plant, identify it correctly and check whether the material is safe and suitable for the intended purpose.</p>
        </MoreDetails>
        <MoreDetails summary="Protect plant resources">
          <p>Plants provide renewable resources only when they can grow back and reproduce. Excessive harvesting, deforestation and habitat destruction can reduce plant populations and biodiversity.</p>
          <p>Choose responsibly sourced materials, protect habitats, avoid damaging rare plants, reduce waste and replant suitable species. Never assume that a natural plant product is automatically safe to eat or use as medicine.</p>
        </MoreDetails>
      </>
    }
  >
    {({ step, playing, reducedMotion }) => <PlantArt part={step.id as PartId} playing={playing} reducedMotion={reducedMotion} />}
  </MotionScene>
);

/* ---------- Industry ---------- */
type IndId = keyof typeof INDUSTRIES;
const IND_IDS = Object.keys(INDUSTRIES) as IndId[];
export const INDUSTRY_STEPS: MotionStep[] = IND_IDS.map(id => {
  const p = INDUSTRIES[id];
  return { id, label: p.label, caption: `Materials and inputs: ${p.inputs}. Science in action: ${p.science} Quality and safety checks: ${p.checks}.` };
});
const IND_SHORT: Record<IndId, { inputs: string[]; product: string; process: string }> = {
  food: { inputs: ['Crops', 'Clean water', 'Energy'], product: 'Preserved food', process: 'Drying and heating' },
  textiles: { inputs: ['Fibres', 'Yarn', 'Dyes'], product: 'Woven cloth', process: 'Spinning and weaving' },
  pottery: { inputs: ['Clay', 'Water', 'Kiln'], product: 'Hard ceramic pot', process: 'Shaping, drying, firing' },
  soap: { inputs: ['Oils or fats', 'Alkali (adults only)', 'Water'], product: 'Soap + glycerol', process: 'Saponification' }
};

const IndustryArt: React.FC<{ id: IndId; playing: boolean; reducedMotion: boolean }> = ({ id, playing, reducedMotion }) => {
  const svg = useRef<SVGSVGElement>(null);
  useSmilPause(svg, playing, reducedMotion, id);
  const anim = !reducedMotion;
  const d = IND_SHORT[id];
  return (
    <svg ref={svg} className="sm-art" viewBox="0 0 640 340" role="img" aria-label={`${INDUSTRIES[id].label}: ${d.inputs.join(', ')} become ${d.product} by ${d.process}`}>
      <rect width="640" height="340" fill="#f3efe6" />
      <text x="320" y="30" textAnchor="middle" className="sm-title">{INDUSTRIES[id].label}: inputs → process → product</text>
      {d.inputs.map((t, i) => <g key={t}><rect x="20" y={80 + i * 70} width="130" height="46" rx="10" fill="#e8e0cf" stroke="#8a8272" strokeWidth="2" /><text x="85" y={108 + i * 70} textAnchor="middle" className="sm-note sm-note--dark">{t}</text></g>)}
      {d.inputs.map((_, i) => <path key={i} d={`M150 ${103 + i * 70} C200 ${103 + i * 70} 190 170 230 170`} fill="none" stroke="#8a8272" strokeWidth="3" strokeDasharray="6 6" />)}
      {anim && d.inputs.map((_, i) => <Tok key={i} path={`M150 ${103 + i * 70} C200 ${103 + i * 70} 190 170 230 170`} dur={3} begin={-i} fill="#e9b949" />)}
      <rect x="230" y="70" width="190" height="200" rx="16" fill="#fff" stroke="#5c5a50" strokeWidth="4" />
      <Cap x={325} y={92} text={d.process} />
      <g key={id}>
        {id === 'food' && (
          <g>
            <circle cx="290" cy="130" r="14" fill="#f2b93b" />
            <path d="M270 240 q55 -50 110 0 Z" fill="#e9c349" stroke="#a9803f" strokeWidth="2" />
            {anim && [0, 1, 2, 3].map(i => <circle key={i} r="5" fill="#cfe6f2" opacity=".9"><animateMotion dur="2.6s" begin={`${-i * 0.65}s`} repeatCount="indefinite" path={`M${300 + i * 22} 225 q10 -30 -6 -60`} /><animate attributeName="opacity" values=".9;0" dur="2.6s" begin={`${-i * 0.65}s`} repeatCount="indefinite" /></circle>)}
            <Cap x={325} y={256} text="Moisture leaves the food" />
          </g>
        )}
        {id === 'textiles' && (
          <g>
            {[0, 1, 2, 3, 4, 5].map(i => <path key={i} d={`M${262 + i * 28} 110 V240`} stroke="#c0463c" strokeWidth="4" />)}
            {[0, 1, 2, 3].map(i => <path key={i} d={`M248 ${135 + i * 26} H402`} stroke="#2468a8" strokeWidth="5" opacity=".75" strokeDasharray="12 8" />)}
            {anim && <circle r="8" fill="#e9b949" stroke="#fff" strokeWidth="2"><animateMotion dur="3.2s" repeatCount="indefinite" path="M248 135 H402 L248 161 H402 L248 187 H402 L248 213 H402 L248 135" /></circle>}
            <Cap x={325} y={256} text="Yarn is interlaced to make fabric" />
          </g>
        )}
        {id === 'pottery' && (
          <g>
            <path d="M285 230 C270 190 285 150 310 140 H340 C365 150 380 190 365 230 Z" fill="#a9803f" stroke="#6b4a2b" strokeWidth="3">{anim && <animate attributeName="fill" values="#9a8a78;#9a8a78;#c0623a;#c0623a;#9a8a78" keyTimes="0;.15;.5;.85;1" dur="6s" repeatCount="indefinite" />}</path>
            {anim && [0, 1, 2].map(i => <path key={i} d={`M${295 + i * 30} 250 q-10 -14 0 -28 q10 -14 0 -28`} fill="none" stroke="#f08a3a" strokeWidth="6" strokeLinecap="round"><animate attributeName="opacity" values="1;.2;1" dur={`${0.9 + i * 0.2}s`} repeatCount="indefinite" /></path>)}
            <Cap x={325} y={256} text="Heat makes the clay hard and durable" />
          </g>
        )}
        {id === 'soap' && (
          <g>
            <path d="M300 120 H350 L370 220 Q325 250 280 220 Z" fill="#cfe6f2" stroke="#5c5a50" strokeWidth="3" opacity=".9" />
            {anim && [0, 1, 2].map(i => <Tok key={`o${i}`} path="M270 80 Q290 110 322 190" dur={2.4} begin={-i * 0.8} fill="#e9c349" />)}
            {anim && [0, 1, 2].map(i => <Tok key={`a${i}`} path="M380 80 Q360 110 328 190" dur={2.4} begin={-i * 0.8 - 0.4} fill="#7aa8d8" />)}
            <rect x="300" y="190" width="50" height="40" rx="8" fill="#f4f0e4">{anim && <animate attributeName="opacity" values="0;0;1;1" keyTimes="0;.4;.6;1" dur="4s" repeatCount="indefinite" />}</rect>
            <Cap x={325} y={256} text="Oil + alkali → soap + glycerol" />
          </g>
        )}
      </g>
      <path d="M420 170 H500" stroke="#2b2f2a" strokeWidth="5" /><polygon points="510,170 494,160 494,180" fill="#2b2f2a" />
      <rect x="515" y="130" width="110" height="80" rx="12" fill="#e8f0d8" stroke="#5aa23a" strokeWidth="3" /><text x="570" y="165" textAnchor="middle" className="sm-note sm-note--dark">Product:</text><text x="570" y="186" textAnchor="middle" className="sm-note sm-note--dark">{d.product}</text>
    </svg>
  );
};

export const IndustryScene: React.FC = () => (
  <MotionScene
    title="The Ghana Industry Innovation Studio"
    description="Trace the science in familiar products, compare production methods and evaluate how industry can serve people and the environment."
    steps={INDUSTRY_STEPS}
    stepMs={6500}
    footer={
      <>
        <p>Industrial processes require trained workers, suitable equipment and safety controls. Never experiment with industrial chemicals or hot equipment without qualified supervision.</p>
        <MoreDetails summary="Key idea">
          <p>Industries use scientific knowledge, materials, energy and skilled work to turn inputs into useful goods or services.</p>
          <p>Food processing, textiles, pottery, soap making, cement production, mining and wood processing are examples of industrial activities found in Ghana. Soap making uses saponification, a reaction between fats or oils and an alkali.</p>
        </MoreDetails>
        <MoreDetails summary="Compare indigenous and modern methods">
          <p><b>Indigenous production:</b> locally developed knowledge and skills passed through communities, such as traditional weaving, pottery, shea butter processing and food fermentation.</p>
          <p><b>Modern production:</b> may use powered machinery, automated controls, precise measurement and large-scale energy systems.</p>
          <p>Both approaches use science and skilled work. Modern tools can improve speed or consistency, while local knowledge can preserve cultural value and suit local materials and needs.</p>
        </MoreDetails>
        <MoreDetails summary="Follow the production chain">
          <ol>
            <li><b>Choose inputs:</b> identify suitable raw materials, water, energy and tools.</li>
            <li><b>Prepare:</b> clean, measure, sort or process materials safely.</li>
            <li><b>Transform:</b> use a physical or chemical process to make the product.</li>
            <li><b>Check quality:</b> test whether the product meets safety and quality requirements.</li>
            <li><b>Package and distribute:</b> protect the product and transport it responsibly.</li>
          </ol>
        </MoreDetails>
        <MoreDetails summary="Evaluate an industry responsibly">
          <p><b>Product and people:</b> consider quality, affordability, worker skills, employment and cultural value.</p>
          <p><b>Resources and environment:</b> consider energy and water use, raw materials, emissions, waste and safe disposal.</p>
          <p><b>Fair comparison:</b> assess safety, cost, reliability and environmental effects using evidence rather than assuming one method is always better.</p>
          <p>Local knowledge and modern technology can complement one another. Innovation should improve livelihoods while protecting workers, communities and the environment.</p>
        </MoreDetails>
      </>
    }
  >
    {({ step, playing, reducedMotion }) => <IndustryArt id={step.id as IndId} playing={playing} reducedMotion={reducedMotion} />}
  </MotionScene>
);

/* ---------- Human health ---------- */
export const HEALTH_STEPS: MotionStep[] = [
  { id: 'communicable', label: 'Communicable conditions', caption: `Examples: ${CONDITION_GUIDES.communicable.examples}. ${CONDITION_GUIDES.communicable.spread} ${CONDITION_GUIDES.communicable.response}` },
  { id: 'nonCommunicable', label: 'Non-communicable diseases (NCDs)', caption: `Examples: ${CONDITION_GUIDES.nonCommunicable.examples}. ${CONDITION_GUIDES.nonCommunicable.spread} ${CONDITION_GUIDES.nonCommunicable.response}` },
  { id: 'chain', label: 'Chain of infection', caption: 'Germ, source, route, entry, prevention: interrupt the relevant route using safe, disease-specific measures. For example, safe water and sanitation can reduce some water-borne infections, while appropriate insect-control measures can reduce diseases spread by insect vectors.' }
];

const Person: React.FC<{ x: number; y: number; fill: string; label: string }> = ({ x, y, fill, label }) => (
  <g transform={`translate(${x} ${y})`}><circle cy="-34" r="20" fill={fill} stroke="#2b2f2a" strokeWidth="3" /><path d="M-30 40 Q-30 -6 0 -6 Q30 -6 30 40 Z" fill={fill} stroke="#2b2f2a" strokeWidth="3" /><text y="64" textAnchor="middle" className="sm-note sm-note--dark">{label}</text></g>
);
const CHAIN = [['Germ', 'virus, bacterium, fungus or parasite'], ['Source', 'where it lives'], ['Route', 'water, droplets, insect, contact'], ['Entry', 'how it enters the body'], ['Prevention', 'interrupt the route']];

const HealthArt: React.FC<{ id: string; playing: boolean; reducedMotion: boolean }> = ({ id, playing, reducedMotion }) => {
  const svg = useRef<SVGSVGElement>(null);
  useSmilPause(svg, playing, reducedMotion, id);
  const anim = !reducedMotion;
  return (
    <svg ref={svg} className="sm-art" viewBox="0 0 640 320" role="img" aria-label={`Health: ${HEALTH_STEPS.find(s => s.id === id)?.label}`}>
      <rect width="640" height="320" fill="#eef3f6" />
      <g key={id}>
        {id === 'communicable' && (
          <g>
            <Person x={110} y={170} fill="#e9b6a0" label="Infected person" />
            <Person x={530} y={170} fill="#e9d8b0" label="Another person" />
            <path d="M160 150 C260 90 380 90 480 150" fill="none" stroke="#8a8272" strokeWidth="3" strokeDasharray="6 6" />
            {anim && [0, 1, 2].map(i => <Tok key={i} path="M160 150 C260 90 380 90 480 150" dur={3.6} begin={-i * 1.2} fill="#7a9a2a" r={8} />)}
            <g transform="translate(320 100)"><path d="M0 -40 L34 -26 V6 Q34 36 0 52 Q-34 36 -34 6 V-26 Z" fill="#cfe6f2" stroke="#2468a8" strokeWidth="4" opacity=".95">{anim && <animate attributeName="opacity" values=".4;1;.4" dur="3.6s" repeatCount="indefinite" />}</path><text y="8" textAnchor="middle" className="sm-note sm-note--dark">Prevent</text></g>
            <Cap x={320} y={34} text="Germs spread by a route (water, air, insects, contact)" />
            <Cap x={320} y={290} text="Match the prevention to the route" />
          </g>
        )}
        {id === 'nonCommunicable' && (
          <g>
            <Person x={320} y={190} fill="#e9d8b0" label="Person" />
            {['Individual: nutrition, activity, inherited', 'Environmental: air, water, safety', 'Social: education, income, support'].map((t, i) => {
              const x = [110, 320, 530][i];
              return <g key={t}><rect x={x - 100} y="40" width="200" height="40" rx="10" fill="#fff" stroke="#8a8272" strokeWidth="2" /><text x={x} y="65" textAnchor="middle" className="sm-note sm-note--dark">{t.split(':')[0]}</text>
                {anim && <Tok path={`M${x} 82 L320 150`} dur={3} begin={-i} fill="#e9b949" />}</g>;
            })}
            <Person x={560} y={220} fill="#d8d8d0" label="Other person" />
            <path d="M370 200 H510" stroke="#8a8272" strokeWidth="3" strokeDasharray="6 6" /><path d="M425 182 L455 218 M455 182 L425 218" stroke="#c0463c" strokeWidth="6" strokeLinecap="round" />
            <Cap x={440} y={170} text="No direct spread" /><Cap x={320} y={300} text="Several risk factors, not a germ passed from person to person" />
          </g>
        )}
        {id === 'chain' && (
          <g>
            {CHAIN.map(([t, d], i) => (
              <g key={t} transform={`translate(${70 + i * 125} 140)`}>
                <rect x="-56" y="-44" width="112" height="88" rx="12" fill={i === 4 ? '#cfe6f2' : '#fff'} stroke={i === 4 ? '#2468a8' : '#8a8272'} strokeWidth="3">
                  {anim && <animate attributeName="stroke-width" values="3;3;8;3;3" keyTimes={`0;${(i * 0.16).toFixed(2)};${(i * 0.16 + 0.06).toFixed(2)};${(i * 0.16 + 0.14).toFixed(2)};1`} dur="6s" repeatCount="indefinite" />}
                </rect>
                <text y="-8" textAnchor="middle" className="sm-name sm-name--sm">{t}</text>
                <text y="14" textAnchor="middle" className="sm-note sm-note--dark" style={{ fontSize: 10 }}>{d.length > 18 ? d.slice(0, d.lastIndexOf(' ', 18)) : d}</text>
                {d.length > 18 && <text y="28" textAnchor="middle" className="sm-note sm-note--dark" style={{ fontSize: 10 }}>{d.slice(d.lastIndexOf(' ', 18) + 1)}</text>}
                {i < 4 && <path d="M60 0 H69" stroke="#2b2f2a" strokeWidth="4" />}
              </g>
            ))}
            <Cap x={320} y={50} text="Break any link on the chain to stop the spread" />
          </g>
        )}
      </g>
    </svg>
  );
};

export const HealthScene: React.FC = () => (
  <MotionScene
    title="The Community Health Detective Lab"
    description="Compare communicable and non-communicable diseases, investigate risk factors and choose evidence-based prevention."
    steps={HEALTH_STEPS}
    stepMs={7000}
    footer={
      <>
        <p>This learning activity is for science education. It does not diagnose illness or replace advice from a qualified healthcare professional.</p>
        <MoreDetails summary="Key difference">
          <p>Communicable conditions can be transmitted by particular routes; non-communicable diseases (NCDs) do not spread directly from person to person. These are the two groups being compared in this lab.</p>
          <p>Not every infection spreads in the same way, and not every NCD has the same risk factors. Always match prevention to the condition and reliable health guidance.</p>
        </MoreDetails>
        <MoreDetails summary="Investigate health risk factors">
          <p><b>Individual factors:</b> nutrition, physical activity, sleep, personal choices and inherited characteristics can influence health.</p>
          <p><b>Environmental factors:</b> clean air and water, housing, sanitation, workplace safety and access to healthcare also matter.</p>
          <p><b>Social factors:</b> education, income, support networks and access to reliable information can affect opportunities to stay healthy.</p>
          <p>Risk factors change probabilities; they do not prove that a person will develop a disease. Avoid blaming or labelling people who are ill.</p>
        </MoreDetails>
        <MoreDetails summary="Choose a responsible health response">
          <p>Use trustworthy public-health information, follow local health guidance, and seek a qualified healthcare professional for worrying or persistent symptoms.</p>
          <p>Do not diagnose someone from a single symptom, spread rumours, share prescription medicines or use unverified treatments.</p>
          <p>Healthy communities combine prevention, respectful support, safe environments and access to appropriate healthcare.</p>
        </MoreDetails>
      </>
    }
  >
    {({ step, playing, reducedMotion }) => <HealthArt id={step.id} playing={playing} reducedMotion={reducedMotion} />}
  </MotionScene>
);

import React from 'react';
import { Stage, Cap, Ground, Drops, Plant, Sun } from './FieldScenes';
import { Person, Bin, J2Scene } from './EnvironmentScenesJ2';

/* ---------- JHS 1 waste ---------- */
type WasteStep = { id: string; label: string; head: string; detail: string; kind: 'bin' | 'water' | 'r'; colour?: string; short?: string };
const WASTE_STEPS: WasteStep[] = [
  { id: 'scraps', label: 'Fruit and vegetable scraps', head: 'Compost', detail: 'Suitable food and garden scraps can decompose into compost that improves soil. Keep plastics and batteries out.', kind: 'bin', colour: '#58a05a', short: 'Compost' },
  { id: 'paper', label: 'Clean paper and cardboard', head: 'Reuse or paper recycling', detail: 'Use the clean side again where possible, then place accepted paper in the local recycling collection.', kind: 'bin', colour: '#e0b13a', short: 'Paper' },
  { id: 'bottle', label: 'Clean plastic bottle', head: 'Reuse or plastics collection', detail: 'A refillable bottle can reduce single-use waste. Recycle only where a suitable collection system exists.', kind: 'bin', colour: '#3e91c8', short: 'Plastics' },
  { id: 'battery', label: 'Used battery', head: 'Separate hazardous-waste collection', detail: 'Do not put batteries in ordinary mixed rubbish, burn them or open them. Use an appropriate collection point.', kind: 'bin', colour: '#d1452f', short: 'Hazardous' },
  { id: 'water', label: 'Wastewater', head: 'Safe wastewater treatment', detail: 'Wastewater needs suitable treatment before release or reuse. Do not pour chemicals or oils into drains.', kind: 'water' },
  { id: 'reduce', label: 'Reduce', head: 'Reduce', detail: 'Prevent waste: choose only what is needed, avoid excess packaging and carry a refillable bottle.', kind: 'r' },
  { id: 'reuse', label: 'Reuse', head: 'Reuse', detail: 'Use an item again for the same or a safe new purpose before discarding it.', kind: 'r' },
  { id: 'recycle', label: 'Recycle', head: 'Recycle', detail: 'Sort suitable materials so they can be processed into new products where collection is available.', kind: 'r' },
  { id: 'compost', label: 'Compost', head: 'Compost', detail: 'Let suitable organic scraps break down under managed conditions to make a soil improver.', kind: 'r' }
];
const WasteIcon: React.FC<{ id: string }> = ({ id }) => {
  if (id === 'scraps' || id === 'compost') return <circle r="14" fill="#d1452f" stroke="#7a1d18" strokeWidth="2" />;
  if (id === 'paper') return <g><rect x="-14" y="-18" width="28" height="36" fill="#fff" stroke="#8a7a5a" strokeWidth="2" /><path d="M-8 -8 H8 M-8 0 H8" stroke="#8a7a5a" strokeWidth="2" /></g>;
  if (id === 'battery') return <g><rect x="-10" y="-16" width="20" height="32" rx="3" fill="#58a05a" stroke="#2f6a31" strokeWidth="2" /><rect x="-4" y="-22" width="8" height="6" fill="#2f6a31" /></g>;
  return <g><rect x="-8" y="-18" width="16" height="36" rx="5" fill="#cfe6f2" stroke="#2468a8" strokeWidth="2" /><rect x="-4" y="-24" width="8" height="8" fill="#2468a8" /></g>;
};
const wasteArt = (id: string, playing: boolean, reducedMotion: boolean) => {
  const s = WASTE_STEPS.find(w => w.id === id)!;
  const anim = !reducedMotion;
  return (
    <Stage label={`Waste: ${s.label}`} depKey={id} playing={playing} reducedMotion={reducedMotion}>
      <Ground y={250} colour="#9aa07a" />
      {s.kind === 'bin' && (
        <g>
          <Bin x={320} y={248} colour={s.colour!} label={s.short!} />
          <g><WasteIcon id={id} />{anim && <animateMotion dur="3s" repeatCount="indefinite" path="M120 70 Q220 40 320 150" />}</g>
          <Cap x={320} y={30} text={`${s.label} → ${s.head}`} />
        </g>
      )}
      {s.kind === 'water' && (
        <g>
          <rect x="60" y="120" width="120" height="14" fill="#8a96a0" stroke="#4b5560" strokeWidth="3" />
          {anim && [0, 1, 2].map(i => <circle key={i} cx="150" r="7" fill="#8a6a3a"><animate attributeName="cy" values="140;190" dur="1.2s" begin={`${-i * 0.4}s`} repeatCount="indefinite" /></circle>)}
          <rect x="240" y="150" width="160" height="100" rx="10" fill="#e8f0f4" stroke="#4b5560" strokeWidth="4" /><path d="M250 190 h140 M250 215 h140" stroke="#9bb5c4" strokeWidth="6" />
          <rect x="470" y="190" width="100" height="60" fill="#cfe6f2" stroke="#2468a8" strokeWidth="3" />
          {anim && [0, 1, 2].map(i => <circle key={i} r="7" fill="#8a6a3a"><animate attributeName="fill" values="#8a6a3a;#8a6a3a;#3e91c8" keyTimes="0;.5;1" dur="4s" begin={`${-i * 1.3}s`} repeatCount="indefinite" /><animateMotion dur="4s" begin={`${-i * 1.3}s`} repeatCount="indefinite" path="M180 190 Q320 190 480 215" /></circle>)}
          <Cap x={120} y={285} text="Dirty water" /><Cap x={320} y={285} text="Treatment" /><Cap x={520} y={285} text="Safer to release or reuse" />
        </g>
      )}
      {id === 'reduce' && (
        <g>
          <path d="M200 120 h140 l-14 120 h-112z" fill="#e0b13a" stroke="#7a5a1a" strokeWidth="3" /><path d="M240 120 q30 -40 60 0" fill="none" stroke="#7a5a1a" strokeWidth="5" />
          {[0, 1, 2].map(i => <circle key={i} cx={250 + i * 24} cy="190" r="10" fill="#d1452f" />)}
          {[0, 1, 2].map(i => <g key={i} transform={`translate(${420 + i * 40} 110)`}><rect x="-12" y="-14" width="24" height="28" fill="#cfe6f2" stroke="#2468a8" strokeWidth="2" />{anim && <animate attributeName="opacity" values="1;1;0;0" keyTimes="0;.4;.6;1" dur="3s" begin={`${i * 0.4}s`} repeatCount="indefinite" />}</g>)}
          <g transform="translate(300 40)"><rect x="-8" y="-4" width="16" height="36" rx="5" fill="#cfe6f2" stroke="#2468a8" strokeWidth="2" /></g>
          <Cap x={320} y={285} text="Choose only what you need; avoid extra packaging" />
        </g>
      )}
      {(id === 'reuse' || id === 'recycle') && (
        <g>
          <ellipse cx="320" cy="150" rx="140" ry="70" fill="none" stroke="#58a05a" strokeWidth="6" strokeDasharray="14 10">{anim && <animate attributeName="stroke-dashoffset" values="0;-48" dur="1.6s" repeatCount="indefinite" />}</ellipse>
          {[0, 1, 2].map(i => (
            <g key={i}>
              <WasteIcon id={id === 'reuse' ? 'bottle' : i === 0 ? 'paper' : i === 1 ? 'bottle' : 'battery'} />
              {anim && <animateMotion dur="6s" begin={`${-i * 2}s`} repeatCount="indefinite" path="M320 80 A140 70 0 1 1 319.9 80" />}
            </g>
          ))}
          <Cap x={320} y={285} text={id === 'reuse' ? 'Use it again for the same or a new purpose' : 'Sorted materials become new products'} />
        </g>
      )}
      {id === 'compost' && (
        <g>
          <path d="M240 250 q10 -80 80 -80 q70 0 80 80z" fill="#6b4a2b" stroke="#3b2a14" strokeWidth="3" />
          {anim && [0, 1, 2].map(i => <path key={i} d={`M${290 + i * 30} 160 q-8 -14 0 -26 q8 -14 0 -26`} fill="none" stroke="#c0a070" strokeWidth="3" strokeLinecap="round"><animate attributeName="opacity" values="0;1;0" dur="2s" begin={`${-i * 0.6}s`} repeatCount="indefinite" /></path>)}
          {anim && [0, 1, 2].map(i => <circle key={i} r="8" fill="#d1452f"><animateMotion dur="3s" begin={`${-i}s`} repeatCount="indefinite" path="M120 90 Q220 60 320 190" /></circle>)}
          <Cap x={320} y={285} text="Managed decay makes a soil improver" />
        </g>
      )}
    </Stage>
  );
};
export const WasteJ1Scene: React.FC = () => (
  <J2Scene
    title="The Waste-Wise Community Guardian"
    description="Sort common waste safely, then explore the 3Rs and composting."
    steps={WASTE_STEPS.map(s => ({ id: s.id, label: s.label, caption: `${s.head}. ${s.detail}` }))}
    stepMs={5000}
    footer={<p>A clean community protects drains, soil, water and health. Follow local collection guidance.</p>}
    art={wasteArt}
  />
);

/* ---------- JHS 1 health ---------- */
const NUTRIENTS = [
  { id: 'a', label: 'Vitamin A', problem: 'Night blindness', detail: 'Vitamin A supports normal vision. Foods such as orange-fleshed sweet potato, carrots and dark-green leafy vegetables can contribute vitamin A.', food: '#e08a2a' },
  { id: 'c', label: 'Vitamin C', problem: 'Scurvy', detail: 'Vitamin C helps maintain healthy tissues. Fruits such as oranges and other vitamin-C-rich foods help prevent deficiency.', food: '#f2a93b' },
  { id: 'd', label: 'Vitamin D', problem: 'Rickets', detail: 'Vitamin D helps the body use calcium for bones. Safe sunlight exposure and suitable foods support vitamin D needs.', food: '#f2d34a' },
  { id: 'protein', label: 'Protein', problem: 'Kwashiorkor (severe protein deficiency)', detail: 'Protein is needed for growth and tissue repair. Beans, eggs, fish and groundnuts are examples of protein-containing foods.', food: '#b98555' },
  { id: 'iron', label: 'Iron', problem: 'Anaemia', detail: 'Iron is needed to make haemoglobin in red blood cells. Beans, leafy vegetables, meat and fortified foods can provide iron.', food: '#4b8b48' }
];
const ROUTES1 = [
  { id: 'air', label: 'Respiratory particles', detail: 'Some viruses spread through particles released when an infected person breathes, speaks, coughs or sneezes. Prevention: improve ventilation, cover coughs and sneezes, clean hands and follow current public-health advice.' },
  { id: 'fluids', label: 'Infected body fluids', detail: 'Some infections, including Ebola, can spread through direct contact with blood or other infectious body fluids. Prevention: avoid contact with body fluids, use trained health workers and follow official outbreak guidance.' },
  { id: 'depends', label: 'Prevention depends on the disease', detail: 'COVID-19, influenza H1N1 and Ebola do not all spread in the same way. Their risks and symptoms differ. Do not self-diagnose: tell a trusted adult and seek advice from a qualified health professional if unwell.' }
];
const healthArt = (id: string, playing: boolean, reducedMotion: boolean) => {
  const anim = !reducedMotion;
  const n = NUTRIENTS.find(x => x.id === id);
  return (
    <Stage label={`Health: ${id}`} depKey={id} playing={playing} reducedMotion={reducedMotion} bg="#eef2f5">
      <Ground y={250} colour="#c9c2ae" />
      {n && (
        <g>
          <circle cx="130" cy="190" r="40" fill={n.food} stroke="#4a3a2a" strokeWidth="3" />
          {id === 'd' && <Sun x={130} y={70} />}
          {anim && [0, 1, 2].map(i => <circle key={i} r="7" fill={n.food} stroke="#fff" strokeWidth="1.5"><animateMotion dur="2.4s" begin={`${-i * 0.8}s`} repeatCount="indefinite" path="M170 185 L400 185" /></circle>)}
          <Person x={470} y={250} colour="#4a90c0" />
          <circle cx="470" cy="160" r="26" fill="none" stroke="#58a05a" strokeWidth="5">{anim && <animate attributeName="r" values="22;32;22" dur="1.6s" repeatCount="indefinite" />}</circle>
          <Cap x={130} y={285} text={n.label} /><Cap x={470} y={285} text={`Lack of it can cause ${n.problem.split(' (')[0].toLowerCase()}`} />
        </g>
      )}
      {id === 'air' && (
        <g>
          <Person x={170} y={250} colour="#c0602f" /><Person x={470} y={250} colour="#4a90c0" mask />
          {anim && [0, 1, 2, 3, 4].map(i => <circle key={i} r="5" fill="#9b7acb"><animateMotion dur="3s" begin={`${-i * 0.6}s`} repeatCount="indefinite" path={`M200 ${160 + (i % 3) * 8} Q330 ${100 + i * 10} 440 ${160 + (i % 3) * 8}`} /><animate attributeName="opacity" values="1;1;0" dur="3s" begin={`${-i * 0.6}s`} repeatCount="indefinite" /></circle>)}
          <Cap x={320} y={50} text="Ventilation, covered coughs and clean hands" />
        </g>
      )}
      {id === 'fluids' && (
        <g>
          <Person x={190} y={250} colour="#c0602f" /><Person x={450} y={250} colour="#4a90c0" />
          <path d="M215 170 H425" stroke="#d1452f" strokeWidth="5" strokeDasharray="10 10">{anim && <animate attributeName="stroke-dashoffset" values="0;-40" dur="1.2s" repeatCount="indefinite" />}</path>
          <g transform="translate(320 120)"><circle r="30" fill="none" stroke="#d1452f" strokeWidth="6" /><path d="M-22 -22 L22 22" stroke="#d1452f" strokeWidth="6" /></g>
          <Cap x={320} y={285} text="Avoid contact; trained health workers use protection" />
        </g>
      )}
      {id === 'depends' && (
        <g>
          {[{ x: 130, t: 'COVID-19', a: true }, { x: 320, t: 'Influenza H1N1', a: true }, { x: 510, t: 'Ebola', a: false }].map(v => (
            <g key={v.t} transform={`translate(${v.x} 140)`}>
              <circle r="38" fill="#cfe6f2" stroke="#2468a8" strokeWidth="4" />
              <text y="5" textAnchor="middle" className="sm-note sm-note--dark">{v.t}</text>
              <path d={v.a ? 'M-20 70 q20 -22 40 0' : 'M-20 70 h40'} stroke="#9b7acb" strokeWidth="5" fill="none" strokeLinecap="round" strokeDasharray="6 6">{anim && <animate attributeName="stroke-dashoffset" values="0;-24" dur="1s" repeatCount="indefinite" />}</path>
              <text y="102" textAnchor="middle" className="sm-note sm-note--dark">{v.a ? 'Particles in air' : 'Body fluids'}</text>
            </g>
          ))}
          <Cap x={320} y={285} text="Different diseases spread in different ways" />
        </g>
      )}
    </Stage>
  );
};
export const HealthJ1Scene: React.FC = () => (
  <J2Scene
    title="The Healthy Body Protector"
    description="Connect nutrients to deficiency diseases and compare how infections can spread."
    steps={[
      ...NUTRIENTS.map(n => ({ id: n.id, label: n.label, caption: `Deficiency disease: ${n.problem}. ${n.detail}` })),
      ...ROUTES1.map(r => ({ id: r.id, label: r.label, caption: r.detail }))
    ]}
    stepMs={5500}
    footer={<p>A varied balanced diet supports health. Infection prevention must match the disease.</p>}
    art={healthArt}
  />
);

/* ---------- JHS 1 science careers ---------- */
const CAREERS = [
  { id: 'agri', label: 'Agricultural scientist', question: 'How can crops grow well with healthy soil and less waste?', method: 'Compare soil samples, observe crops and test a careful change such as spacing or compost.', impact: 'Supports farmers, food production and sustainable land care.' },
  { id: 'lab', label: 'Medical laboratory scientist', question: 'What can a carefully analysed sample tell a health team?', method: 'Follow safe procedures, analyse samples with suitable equipment and report accurate results.', impact: 'Provides evidence that helps qualified professionals investigate health conditions.' },
  { id: 'eng', label: 'Engineer', question: 'How can a design make a bridge, machine or water system work safely?', method: 'Define the problem, sketch a design, build and test a model, then improve it using evidence.', impact: 'Develops structures, machines and services used by communities and industries.' },
  { id: 'env', label: 'Environmental scientist', question: 'What is changing in a stream, forest or community environment?', method: 'Observe, measure, collect suitable samples and compare results over time.', impact: 'Helps communities understand pollution, habitats and natural resources.' },
  { id: 'phys', label: 'Physicist', question: 'How do energy, light, forces or materials behave?', method: 'Ask a testable question, measure carefully, analyse data and share an explanation.', impact: 'Contributes knowledge used in technology, energy, communication and education.' }
];
const careerArt = (id: string, playing: boolean, reducedMotion: boolean) => {
  const anim = !reducedMotion;
  return (
    <Stage label={`Science career: ${id}`} depKey={id} playing={playing} reducedMotion={reducedMotion}>
      <Ground y={250} colour="#9aa07a" />
      {id === 'agri' && (
        <g>
          {[120, 220, 320, 420, 520].map((x, i) => <Plant key={x} x={x} y={250} h={50 + i * 8} grow />)}
          <g><circle r="30" fill="#cfe6f2" fillOpacity=".7" stroke="#2468a8" strokeWidth="5" /><path d="M21 21 L44 44" stroke="#2468a8" strokeWidth="8" strokeLinecap="round" />{anim && <animateMotion dur="6s" repeatCount="indefinite" path="M120 150 Q320 90 520 150 Q320 190 120 150" />}</g>
          <Cap x={320} y={285} text="Observe crops and test a change carefully" />
        </g>
      )}
      {id === 'lab' && (
        <g>
          {[0, 1, 2].map(i => <g key={i} transform={`translate(${220 + i * 80} 230)`}><path d="M-14 -90 V-10 q14 20 28 0 V-90z" fill="#e8f0f4" stroke="#4b5560" strokeWidth="3" /><rect x="-12" y={-40 + i * 8} width="24" height={34 - i * 8} fill={['#d1452f', '#58a05a', '#3e91c8'][i]}>{anim && <animate attributeName="opacity" values=".6;1;.6" dur="2s" begin={`${i * 0.4}s`} repeatCount="indefinite" />}</rect></g>)}
          <Cap x={320} y={285} text="Follow safe procedures; report accurate results" />
        </g>
      )}
      {id === 'eng' && (
        <g>
          <path d="M80 190 H560" stroke="#4b5560" strokeWidth="10" /><path d="M80 190 L180 120 L280 190 L380 120 L480 190 L560 120" fill="none" stroke="#8a96a0" strokeWidth="6" />
          <path d="M80 190 V250 M560 190 V250" stroke="#4b5560" strokeWidth="10" />
          <g><rect x="-22" y="-26" width="44" height="26" rx="5" fill="#d1452f" stroke="#7a1d18" strokeWidth="3" /><circle cx="-12" cy="2" r="6" fill="#2b2f2a" /><circle cx="12" cy="2" r="6" fill="#2b2f2a" />{anim && <animateMotion dur="5s" repeatCount="indefinite" path="M110 184 H530" />}</g>
          <Cap x={320} y={285} text="Design, build, test and improve with evidence" />
        </g>
      )}
      {id === 'env' && (
        <g>
          <path d="M0 220 Q160 190 320 220 T640 220 V300 H0Z" fill="#3e91c8" opacity=".75">{anim && <animate attributeName="d" values="M0 220 Q160 190 320 220 T640 220 V300 H0Z;M0 220 Q160 250 320 220 T640 220 V300 H0Z;M0 220 Q160 190 320 220 T640 220 V300 H0Z" dur="4s" repeatCount="indefinite" />}</path>
          <g transform="translate(320 110)"><rect x="-22" y="-10" width="44" height="64" rx="8" fill="#e8f0f4" fillOpacity=".8" stroke="#4b5560" strokeWidth="4" /><rect x="-18" y="18" width="36" height="32" fill="#3e91c8" />{anim && <animateTransform attributeName="transform" type="translate" values="0 0;0 70;0 0" additive="sum" dur="4s" repeatCount="indefinite" />}</g>
          {[130, 520].map(x => <path key={x} d={`M${x} 230 V160 M${x - 12} 180 q12 -30 24 0`} stroke="#4b8b48" strokeWidth="5" fill="none" />)}
          <Cap x={320} y={285} text="Measure and sample, then compare over time" />
        </g>
      )}
      {id === 'phys' && (
        <g>
          <rect x="220" y="50" width="200" height="10" fill="#4b5560" />
          <g transform="translate(320 60)"><g><path d="M0 0 V150" stroke="#4b5560" strokeWidth="3" /><circle cy="150" r="22" fill="#d1452f" stroke="#7a1d18" strokeWidth="3" />{anim && <animateTransform attributeName="transform" type="rotate" values="-30;30;-30" keyTimes="0;.5;1" dur="2.4s" repeatCount="indefinite" calcMode="spline" keySplines=".45 0 .55 1;.45 0 .55 1" />}</g></g>
          <Cap x={320} y={285} text="Ask a testable question and measure carefully" />
        </g>
      )}
    </Stage>
  );
};
export const CareersJ1Scene: React.FC = () => (
  <J2Scene
    title="The Science Career Pathfinder"
    description="Explore how science careers use evidence to solve problems in Ghanaian communities."
    steps={CAREERS.map(c => ({ id: c.id, label: c.label, caption: `Question: ${c.question} Method: ${c.method} Community impact: ${c.impact}` }))}
    stepMs={6000}
    footer={<p>Scientific work often combines teamwork, curiosity, careful methods and honest communication.</p>}
    art={careerArt}
  />
);

/* ---------- JHS 1 climate ---------- */
const CLIMATE1 = [
  { id: 'natural', label: 'Natural greenhouse effect', detail: 'Greenhouse gases absorb and re-emit some outgoing heat. This natural process keeps Earth warm enough for life; it is not itself a human-made problem.' },
  { id: 'enhanced', label: 'Enhanced greenhouse effect', detail: 'Burning fossil fuels and some land-use changes add greenhouse gases such as carbon dioxide. Extra greenhouse gases strengthen warming and contribute to climate change, affecting rainfall, heat, farming and ecosystems.' },
  { id: 'forest', label: 'Forest carbon storage', detail: 'Trees take in carbon dioxide as they grow and store carbon in wood and soils. Deforestation and burning can release stored carbon and reduce future carbon uptake.' },
  { id: 'solar', label: 'Solar power', detail: 'Photovoltaic panels convert sunlight into electricity without burning fuel during operation. Output depends on sunlight, storage, cost, panel materials and suitable installation.' },
  { id: 'hydro', label: 'Hydropower', detail: 'Moving water turns turbines connected to generators; Ghana has hydroelectric stations. Dams can alter river habitats, water flows and communities, and output can vary with rainfall.' },
  { id: 'efficiency', label: 'Energy efficiency', detail: 'Switching off unused lights and choosing efficient appliances reduces energy demand. Small actions work best when maintained and combined with reliable energy planning.' }
];
const climateArt = (id: string, playing: boolean, reducedMotion: boolean) => {
  const anim = !reducedMotion;
  const gasCount = id === 'enhanced' ? 14 : 6;
  return (
    <Stage label={`Climate and energy: ${id}`} depKey={id} playing={playing} reducedMotion={reducedMotion} bg="#eaf1f4">
      {(id === 'natural' || id === 'enhanced') && (
        <g>
          <rect y="90" width="640" height="70" fill="#9bb5c4" opacity=".35" />
          {Array.from({ length: gasCount }, (_, i) => <circle key={i} cx={40 + ((i * 97) % 560)} cy={105 + ((i * 31) % 45)} r="7" fill="#7a7a8a" />)}
          <rect y="250" width="640" height="50" fill="#58a05a" /><Cap x={320} y={282} text="Earth's surface" />
          <Sun x={90} y={40} />
          {anim && [0, 1, 2].map(i => <circle key={i} r="6" fill="#f2b93b"><animateMotion dur="3s" begin={`${-i}s`} repeatCount="indefinite" path={`M${130 + i * 10} 50 L${220 + i * 40} 250`} /></circle>)}
          {anim && Array.from({ length: id === 'enhanced' ? 5 : 3 }, (_, i) => <circle key={i} r="6" fill="#d1452f"><animateMotion dur="3s" begin={`${-i * 0.6}s`} repeatCount="indefinite" path={`M${300 + i * 55} 245 L${330 + i * 55} 150 L${300 + i * 55 + 20} 245`} /></circle>)}
          {anim && Array.from({ length: id === 'enhanced' ? 2 : 4 }, (_, i) => <circle key={i} r="6" fill="#d1452f"><animateMotion dur="3s" begin={`${-i * 0.75}s`} repeatCount="indefinite" path={`M${480 + i * 40} 245 L${500 + i * 40} 20`} /></circle>)}
          <Cap x={430} y={70} text={id === 'enhanced' ? 'More gas traps more heat' : 'Some heat is trapped; some escapes'} />
        </g>
      )}
      {id === 'forest' && (
        <g>
          <Ground y={250} colour="#8fa85a" />
          {[150, 250, 350, 450, 550].map(x => <g key={x}><rect x={x - 6} y="170" width="12" height="80" fill="#6b4a2b" /><circle cx={x} cy="150" r="42" fill="#58a05a" stroke="#2f6a31" strokeWidth="3" /></g>)}
          {anim && [0, 1, 2, 3, 4].map(i => <circle key={i} r="6" fill="#9a9a9a"><animateMotion dur="3s" begin={`${-i * 0.6}s`} repeatCount="indefinite" path={`M${100 + i * 100} 30 L${150 + i * 100} 130`} /></circle>)}
          <Cap x={320} y={285} text="Trees take in CO₂ and store carbon" />
        </g>
      )}
      {id === 'solar' && (
        <g>
          <Ground y={250} colour="#8fa85a" /><Sun x={110} y={60} />
          <g transform="translate(380 190) rotate(-20)"><rect x="-90" y="-30" width="180" height="60" fill="#3a5a8a" stroke="#1d2a4a" strokeWidth="4" /><path d="M-30 -30 V30 M30 -30 V30 M-90 0 H90" stroke="#7aa8d8" strokeWidth="2" /></g>
          {anim && [0, 1, 2].map(i => <circle key={i} r="7" fill="#f6d34a"><animateMotion dur="2.6s" begin={`${-i * 0.86}s`} repeatCount="indefinite" path="M150 80 L350 170" /></circle>)}
          <circle cx="540" cy="150" r="24" fill="#f6d34a" stroke="#7a5a1a" strokeWidth="3">{anim && <animate attributeName="opacity" values=".5;1;.5" dur="2s" repeatCount="indefinite" />}</circle>
          <Cap x={320} y={285} text="Sunlight becomes electricity with no fuel burned" />
        </g>
      )}
      {id === 'hydro' && (
        <g>
          <rect x="60" y="60" width="130" height="190" fill="#3e91c8" /><rect x="190" y="60" width="26" height="190" fill="#8a8272" /><rect x="40" y="50" width="180" height="14" fill="#8a8272" />
          <path d="M216 190 H420" stroke="#3e91c8" strokeWidth="10" strokeDasharray="14 10">{anim && <animate attributeName="stroke-dashoffset" values="0;-48" dur="1s" repeatCount="indefinite" />}</path>
          <g transform="translate(450 190)"><g>{[0, 120, 240].map(a => <path key={a} d="M0 0 Q-16 -26 0 -46 Q16 -26 0 0" fill="#4a90c0" transform={`rotate(${a})`} />)}{anim && <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur=".9s" repeatCount="indefinite" />}</g><circle r="7" fill="#33353a" /></g>
          <path d="M490 190 H590" stroke="#d1a62a" strokeWidth="6" />
          <Cap x={320} y={285} text="Moving water turns a turbine and generator" />
        </g>
      )}
      {id === 'efficiency' && (
        <g>
          <Ground y={250} colour="#c9c2ae" />
          {[170, 320, 470].map((x, i) => (
            <g key={x} transform={`translate(${x} 130)`}><circle r="32" fill="#f6d34a" stroke="#7a5a1a" strokeWidth="4">{anim && <animate attributeName="opacity" values={i === 1 ? '1;.15;.15;1' : '1;1;1;1'} keyTimes="0;.3;.7;1" dur="4s" repeatCount="indefinite" />}</circle><rect x="-14" y="30" width="28" height="22" fill="#8a96a0" /></g>
          ))}
          <Cap x={320} y={285} text="Switch off unused lights; choose efficient appliances" />
        </g>
      )}
    </Stage>
  );
};
export const ClimateJ1Scene: React.FC = () => (
  <J2Scene
    title="The Green Future Strategist"
    description="Distinguish the natural greenhouse effect from human-driven warming and compare sustainable choices."
    steps={CLIMATE1.map(c => ({ id: c.id, label: c.label, caption: c.detail }))}
    stepMs={6000}
    footer={<p>A green economy improves lives while using resources responsibly and reducing pollution.</p>}
    art={climateArt}
  />
);

/* ---------- JHS 1 habitats ---------- */
const HABITATS = [
  { id: 'forest', label: 'Moist forest', cond: 'Often shaded, with high rainfall and many layers of vegetation.', adapt: 'Broad leaves can capture light; some trees have buttress roots for support in shallow soils.', life: 'Tree, climber, insect and bird communities.' },
  { id: 'savanna', label: 'Guinea savanna', cond: 'Open grassland with scattered trees and a distinct wet and dry season.', adapt: 'Some grasses regrow from the base; some trees have deep roots and small leaves that reduce water loss.', life: 'Grasses, drought-tolerant trees, grazing animals and insects.' },
  { id: 'river', label: 'River and wetland', cond: 'Waterlogged soils or flowing water provide habitats for aquatic and waterside organisms.', adapt: 'Some plants have flexible stems or air spaces; fish have gills for extracting oxygen from water.', life: 'Reeds, water plants, fish, frogs and water birds.' },
  { id: 'coast', label: 'Coastal and mangrove area', cond: 'Tidal water, salty conditions and shifting sediments shape coastal habitats.', adapt: 'Mangroves tolerate salty conditions; specialised roots help anchor them in soft mud.', life: 'Mangroves, crabs, molluscs and coastal birds.' }
];
const RELATIONS = [
  { id: 'mutualism', label: 'Mutualism', def: 'Both organisms benefit.', ex: 'A pollinating insect gets nectar while helping a flower transfer pollen.' },
  { id: 'parasitism', label: 'Parasitism', def: 'One organism benefits while the host is harmed.', ex: 'A tick feeds on the blood of a host animal.' },
  { id: 'commensalism', label: 'Commensalism', def: 'One organism benefits while the other is not significantly helped or harmed.', ex: 'An epiphyte uses a tree for support without taking food from it.' }
];
const habitatArt = (id: string, playing: boolean, reducedMotion: boolean) => {
  const anim = !reducedMotion;
  return (
    <Stage label={`Habitat: ${id}`} depKey={id} playing={playing} reducedMotion={reducedMotion} bg="#e6f0e8">
      {id === 'forest' && (
        <g>
          <Ground y={250} colour="#4b6a3a" />
          {[110, 220, 330, 440, 550].map((x, i) => <g key={x}><rect x={x - 8} y={110 + (i % 2) * 20} width="16" height={140 - (i % 2) * 20} fill="#6b4a2b" /><ellipse cx={x} cy={100 + (i % 2) * 20} rx="55" ry="40" fill="#3f8a4a" stroke="#2f6a31" strokeWidth="3" /></g>)}
          <g><path d="M0 0 q8 -10 16 0 q8 -10 16 0" fill="none" stroke="#2b2f2a" strokeWidth="3" />{anim && <animateMotion dur="8s" repeatCount="indefinite" path="M60 60 Q320 20 580 70" />}</g>
          <Cap x={320} y={285} text="Shaded, rainy and layered with vegetation" />
        </g>
      )}
      {id === 'savanna' && (
        <g>
          <Ground y={240} colour="#c8b25a" />
          {[90, 170, 250, 400, 480, 560].map(x => <g key={x}><path d={`M${x} 240 q-4 -22 -12 -30 M${x} 240 q2 -26 10 -34 M${x} 240 V212`} stroke="#8fa85a" strokeWidth="4" fill="none" strokeLinecap="round" />{anim && <animateTransform attributeName="transform" type="rotate" values="-3;3;-3" dur="2.4s" repeatCount="indefinite" additive="sum" />}</g>)}
          <g><rect x="318" y="150" width="14" height="90" fill="#6b4a2b" /><path d="M250 150 q70 -50 140 0z" fill="#58a05a" stroke="#2f6a31" strokeWidth="3" /><path d="M325 240 V268" stroke="#6b4a2b" strokeWidth="4" strokeDasharray="6 5" /></g>
          <Sun x={560} y={50} />
          <Cap x={320} y={285} text="Deep roots, small leaves and regrowing grasses" />
        </g>
      )}
      {id === 'river' && (
        <g>
          <path d="M0 170 Q160 150 320 170 T640 170 V300 H0Z" fill="#3e91c8" opacity=".8">{anim && <animate attributeName="d" values="M0 170 Q160 150 320 170 T640 170 V300 H0Z;M0 170 Q160 190 320 170 T640 170 V300 H0Z;M0 170 Q160 150 320 170 T640 170 V300 H0Z" dur="4s" repeatCount="indefinite" />}</path>
          {[80, 560].map(x => <path key={x} d={`M${x} 190 V90 M${x - 14} 120 q14 -34 28 0`} stroke="#4b8b48" strokeWidth="6" fill="none" />)}
          <g><ellipse rx="26" ry="12" fill="#e9b949" stroke="#7a5a1a" strokeWidth="2" /><path d="M24 0 l16 -12 v24z" fill="#e9b949" stroke="#7a5a1a" strokeWidth="2" />{anim && <animateMotion dur="6s" repeatCount="indefinite" path="M120 230 Q320 200 520 240 Q320 270 120 230" />}</g>
          <Cap x={320} y={285} text="Fish use gills to take oxygen from the water" />
        </g>
      )}
      {id === 'coast' && (
        <g>
          <rect y="100" width="640" height="200" fill="#3e91c8" opacity=".5">{anim && <animate attributeName="y" values="120;90;120" dur="5s" repeatCount="indefinite" />}</rect>
          <rect y="250" width="640" height="50" fill="#a88a5a" />
          {[150, 320, 490].map(x => <g key={x}><path d={`M${x} 160 L${x - 40} 260 M${x} 160 L${x} 260 M${x} 160 L${x + 40} 260`} stroke="#6b4a2b" strokeWidth="6" fill="none" /><ellipse cx={x} cy="140" rx="48" ry="34" fill="#3f8a4a" stroke="#2f6a31" strokeWidth="3" /></g>)}
          <g><ellipse rx="14" ry="9" fill="#d1452f" stroke="#7a1d18" strokeWidth="2" />{anim && <animateMotion dur="5s" repeatCount="indefinite" path="M230 268 H420 H230" />}</g>
          <Cap x={320} y={290} text="Mangroves tolerate salt; stilt roots anchor in mud" />
        </g>
      )}
      {id === 'mutualism' && (
        <g>
          <Ground y={250} colour="#8fa85a" />
          <Plant x={420} y={250} h={110} top={<circle cy="-112" r="22" fill="#f2b93b" stroke="#7a5a1a" strokeWidth="3" />} />
          <g><ellipse rx="14" ry="10" fill="#f2d34a" stroke="#2b2f2a" strokeWidth="2" /><path d="M-6 -8 q-6 -14 4 -16 M6 -8 q6 -14 -4 -16" fill="#cfe6f2" stroke="#2468a8" strokeWidth="2" />{anim && <animateMotion dur="4s" repeatCount="indefinite" path="M140 70 Q300 30 420 120 Q300 90 140 70" />}</g>
          <Cap x={320} y={285} text="Insect gets nectar; the flower gets pollinated" />
        </g>
      )}
      {id === 'parasitism' && (
        <g>
          <Ground y={250} colour="#8fa85a" />
          <rect x="190" y="150" width="240" height="80" rx="34" fill="#b98555" stroke="#4a3a2a" strokeWidth="4" /><rect x="210" y="226" width="16" height="26" fill="#b98555" stroke="#4a3a2a" strokeWidth="3" /><rect x="390" y="226" width="16" height="26" fill="#b98555" stroke="#4a3a2a" strokeWidth="3" />
          <circle cx="320" cy="150" r="14" fill="#5a3a2a" stroke="#2b2f2a" strokeWidth="3">{anim && <animate attributeName="r" values="12;19;12" dur="3s" repeatCount="indefinite" />}</circle>
          {anim && [0, 1].map(i => <circle key={i} r="5" fill="#d1452f"><animateMotion dur="2s" begin={`${-i}s`} repeatCount="indefinite" path="M320 165 Q300 120 320 100" /></circle>)}
          <Cap x={320} y={285} text="The tick benefits; the host animal is harmed" />
        </g>
      )}
      {id === 'commensalism' && (
        <g>
          <Ground y={250} colour="#8fa85a" />
          <rect x="300" y="110" width="40" height="140" fill="#6b4a2b" /><ellipse cx="320" cy="90" rx="90" ry="50" fill="#3f8a4a" stroke="#2f6a31" strokeWidth="3" />
          <g transform="translate(320 160)"><path d="M0 0 q-24 -10 -22 -30 M0 0 q24 -10 22 -30 M0 0 V-34" stroke="#d1a62a" strokeWidth="6" fill="none" strokeLinecap="round" />{anim && <animateTransform attributeName="transform" type="translate" values="0 0;0 -4;0 0" additive="sum" dur="2s" repeatCount="indefinite" />}</g>
          <Cap x={320} y={285} text="The epiphyte gains support; the tree is not harmed" />
        </g>
      )}
    </Stage>
  );
};
export const HabitatJ1Scene: React.FC = () => (
  <J2Scene
    title="The Habitat and Adaptation Ranger"
    description="Explore Ghanaian habitats, survival adaptations and relationships among organisms."
    steps={[
      ...HABITATS.map(h => ({ id: h.id, label: h.label, caption: `Conditions: ${h.cond} Possible adaptations: ${h.adapt} Living things: ${h.life}` })),
      ...RELATIONS.map(r => ({ id: r.id, label: r.label, caption: `${r.def} ${r.ex}` }))
    ]}
    stepMs={6000}
    footer={<p>Observe living things carefully, record evidence and protect organisms and their habitats.</p>}
    art={habitatArt}
  />
);

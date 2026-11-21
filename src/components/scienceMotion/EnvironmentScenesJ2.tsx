import React from 'react';
import { MotionScene, type MotionStep } from './MotionScene';
import { MoreDetails } from './MoreDetails';
import { Stage, Cap, Ground, Drops, Plant, Sun } from './FieldScenes';

const Person: React.FC<{ x: number; y: number; colour?: string; flip?: boolean; mask?: boolean }> = ({ x, y, colour = '#4a90c0', flip, mask }) => (
  <g transform={`translate(${x} ${y}) scale(${flip ? -1 : 1} 1)`}>
    <circle cy="-92" r="16" fill="#8a5a3a" stroke="#4a2f1a" strokeWidth="2" />
    {mask && <rect x="-3" y="-92" width="22" height="12" rx="4" fill="#cfe6f2" stroke="#2468a8" strokeWidth="2" />}
    <rect x="-18" y="-74" width="36" height="52" rx="12" fill={colour} stroke="#2b2f2a" strokeWidth="2" />
    <path d="M-8 -22 V0 M8 -22 V0" stroke="#2b2f2a" strokeWidth="6" strokeLinecap="round" />
  </g>
);
const Bin: React.FC<{ x: number; y: number; colour: string; label: string }> = ({ x, y, colour, label }) => (
  <g transform={`translate(${x} ${y})`}>
    <path d="M-34 -70 H34 L28 0 H-28 Z" fill={colour} stroke="#2b2f2a" strokeWidth="3" /><rect x="-40" y="-82" width="80" height="12" rx="4" fill={colour} stroke="#2b2f2a" strokeWidth="3" />
    <text y="22" textAnchor="middle" className="sm-note sm-note--dark">{label}</text>
  </g>
);
const J2Scene: React.FC<{ title: string; description: string; steps: MotionStep[]; footer: React.ReactNode; art: (id: string, playing: boolean, reducedMotion: boolean) => React.ReactNode; stepMs?: number }> = ({ title, description, steps, footer, art, stepMs = 5500 }) => (
  <MotionScene title={title} description={description} steps={steps} stepMs={stepMs} footer={footer}>
    {({ step, playing, reducedMotion }) => art(step.id, playing, reducedMotion)}
  </MotionScene>
);

/* ---------- Waste ---------- */
const WASTE = {
  food: { label: 'Food scraps', bin: 'Organic waste', colour: '#58a05a', short: 'Compost', action: 'Compost where suitable facilities and safe practices are available.', reason: 'Food and garden scraps can decompose and form compost.' },
  bottle: { label: 'Plastic bottle', bin: 'Clean recyclable plastic', colour: '#3e91c8', short: 'Recycle', action: 'Reuse a safe bottle or place it in an accepted collection stream.', reason: 'Local recycling services determine which plastics are accepted.' },
  battery: { label: 'Used battery', bin: 'Special collection', colour: '#d1452f', short: 'Take-back', action: 'Keep separate and use an approved battery take-back or collection point.', reason: 'Battery materials can pollute soil and water if poorly handled.' },
  paper: { label: 'Paper', bin: 'Paper recycling', colour: '#e0b13a', short: 'Paper', action: 'Keep clean and dry, then use a local paper collection service.', reason: 'Clean paper can be processed into new paper products.' }
} as const;
export const WasteWiseScene: React.FC = () => (
  <J2Scene
    title="The Waste-Wise Community Guardian"
    description="Sort everyday waste and choose safe, sustainable actions."
    steps={Object.entries(WASTE).map(([id, w]) => ({ id, label: w.label, caption: `${w.bin}. ${w.action} ${w.reason}` }))}
    footer={
      <>
        <p>Prevent waste first, then reduce, reuse, recycle and safely manage what remains. Never burn mixed waste or dump it into drains or waterways.</p>
        <MoreDetails summary="The waste hierarchy"><p>Prevent → Reduce → Reuse → Recycle → Treat or safely dispose. The best option depends on the material and services available in the community.</p></MoreDetails>
      </>
    }
    art={(id, playing, reducedMotion) => {
      const w = WASTE[id as keyof typeof WASTE];
      const icon: Record<string, React.ReactNode> = {
        food: <circle r="14" fill="#d1452f" stroke="#7a1d18" strokeWidth="2" />,
        bottle: <g><rect x="-8" y="-18" width="16" height="36" rx="5" fill="#cfe6f2" stroke="#2468a8" strokeWidth="2" /><rect x="-4" y="-24" width="8" height="8" fill="#2468a8" /></g>,
        battery: <g><rect x="-10" y="-16" width="20" height="32" rx="3" fill="#58a05a" stroke="#2f6a31" strokeWidth="2" /><rect x="-4" y="-22" width="8" height="6" fill="#2f6a31" /></g>,
        paper: <g><rect x="-14" y="-18" width="28" height="36" fill="#fff" stroke="#8a7a5a" strokeWidth="2" /><path d="M-8 -8 H8 M-8 0 H8 M-8 8 H4" stroke="#8a7a5a" strokeWidth="2" /></g>
      };
      return (
        <Stage label={`Waste sorting: ${w.label}`} depKey={id} playing={playing} reducedMotion={reducedMotion}>
          <Ground y={250} colour="#9aa07a" />
          {Object.entries(WASTE).map(([key, b], i) => (
            <g key={key} opacity={key === id ? 1 : 0.35}><Bin x={110 + i * 140} y={248} colour={b.colour} label={b.short} /></g>
          ))}
          {(() => {
            const i = Object.keys(WASTE).indexOf(id);
            const tx = 110 + i * 140;
            return (
              <g>
                <g>{icon[id]}{!reducedMotion && <animateMotion dur="3s" repeatCount="indefinite" path={`M320 80 Q${(320 + tx) / 2} 60 ${tx} 150`} />}</g>
                <Cap x={320} y={20} text={`${w.label} → ${w.bin}`} />
              </g>
            );
          })()}
        </Stage>
      );
    }}
  />
);

/* ---------- Health ---------- */
const ROUTES = [
  { id: 'air', name: 'Respiratory particles', prevention: 'Improve ventilation, cover coughs and follow public-health advice; vaccination may be available for some diseases.', fact: 'Some infections spread through particles released when an infected person breathes, talks, coughs or sneezes.' },
  { id: 'food', name: 'Contaminated food or water', prevention: 'Wash hands, use safe water, cook food thoroughly and store it safely.', fact: 'Some germs spread when food or water becomes contaminated.' },
  { id: 'blood', name: 'Infected blood or body fluids', prevention: 'Never share needles or sharp equipment; use appropriate protective and health services.', fact: 'HIV is not spread by hugging, handshakes or sharing a classroom.' }
];
export const HealthDefenderScene: React.FC = () => (
  <J2Scene
    title="The Community Health Defender"
    description="Match prevention to the route of infection and challenge health misinformation."
    steps={ROUTES.map(r => ({ id: r.id, label: r.name, caption: `${r.fact} Prevention: ${r.prevention}` }))}
    footer={
      <>
        <p>This is learning content, not a diagnosis. Symptoms alone cannot identify a disease; seek qualified health advice. Respect privacy and never stigmatise people who are ill.</p>
        <MoreDetails summary="Remember"><p>Different diseases spread in different ways. Accurate information, vaccination where recommended, hygiene and professional care help protect communities.</p></MoreDetails>
      </>
    }
    art={(id, playing, reducedMotion) => {
      const anim = !reducedMotion;
      return (
        <Stage label={`Route of infection: ${id}`} depKey={id} playing={playing} reducedMotion={reducedMotion} bg="#eef2f5">
          <Ground y={250} colour="#c9c2ae" />
          {id === 'air' && (
            <g>
              <Person x={170} y={250} colour="#c0602f" /><Person x={470} y={250} colour="#4a90c0" mask />
              {anim && [0, 1, 2, 3, 4].map(i => <circle key={i} r="5" fill="#9b7acb"><animateMotion dur="3s" begin={`${-i * 0.6}s`} repeatCount="indefinite" path={`M200 ${160 + (i % 3) * 8} Q330 ${100 + i * 10} 440 ${160 + (i % 3) * 8}`} /><animate attributeName="opacity" values="1;1;0" dur="3s" begin={`${-i * 0.6}s`} repeatCount="indefinite" /></circle>)}
              <Cap x={330} y={50} text="Ventilation, covered coughs and a mask lower the spread" />
            </g>
          )}
          {id === 'food' && (
            <g>
              <path d="M90 200 h90 l-10 50 h-70z" fill="#cfe6f2" stroke="#2468a8" strokeWidth="3" />
              {anim && [0, 1, 2].map(i => <circle key={i} r="7" fill="#8a6a3a"><animateMotion dur="3s" begin={`${-i}s`} repeatCount="indefinite" path="M150 200 Q250 130 380 170" /></circle>)}
              <Person x={430} y={250} />
              <g transform="translate(540 220)"><path d="M0 0 q-14 -20 0 -34 q14 14 0 34z" fill="#3e91c8" />{anim && <animateTransform attributeName="transform" type="translate" values="0 0;0 12;0 0" dur="1.4s" repeatCount="indefinite" />}</g>
              <Cap x={330} y={50} text="Safe water, clean hands and thoroughly cooked food" />
            </g>
          )}
          {id === 'blood' && (
            <g>
              <Person x={190} y={250} colour="#58a05a" /><Person x={250} y={250} colour="#4a90c0" flip />
              <g transform="translate(220 140)"><path d="M-8 6 q8 -14 16 0" stroke="#d1452f" strokeWidth="4" fill="none" />{anim && <animateTransform attributeName="transform" type="scale" values="1;1.2;1" additive="sum" dur="1.6s" repeatCount="indefinite" />}</g>
              <path d="M175 125 l12 14 l24 -28" stroke="#2f8f4a" strokeWidth="6" fill="none" strokeLinecap="round" transform="translate(-50 -60)" />
              <g transform="translate(450 190)"><path d="M-50 20 L40 -30" stroke="#8a96a0" strokeWidth="7" strokeLinecap="round" /><rect x="30" y="-40" width="26" height="14" rx="3" fill="#8a96a0" transform="rotate(-30 40 -30)" /><circle r="46" fill="none" stroke="#d1452f" strokeWidth="7" /><path d="M-32 -32 L32 32" stroke="#d1452f" strokeWidth="7" />{anim && <animate attributeName="opacity" values="1;.4;1" dur="1.8s" repeatCount="indefinite" />}</g>
              <Cap x={220} y={285} text="Hugging and handshakes do not spread HIV" />
              <Cap x={450} y={285} text="Never share needles" />
            </g>
          )}
        </Stage>
      );
    }}
  />
);

/* ---------- Innovation ---------- */
const INNOV = [
  { id: 'farm', label: 'Farming', problem: 'Farmers need timely information about weather and markets.', benefit: 'Mobile phones can provide forecasts, prices and advisory information.', consider: 'Check information quality, network access, device cost and digital skills.' },
  { id: 'water', label: 'Safe water', problem: 'Communities need safer drinking water.', benefit: 'Water treatment and testing technologies can reduce health risks.', consider: 'Consider maintenance, trained operators, affordability and regular testing.' },
  { id: 'health', label: 'Health care', problem: 'Health workers need to identify illness accurately.', benefit: 'Diagnostic tests and medical imaging support clinical decisions.', consider: 'Equipment needs trained staff, reliable supplies and fair access.' }
];
export const InnovationScene: React.FC = () => (
  <J2Scene
    title="The Science and Innovation Builder"
    description="Evaluate Ghana-relevant innovations by the problem they solve, their benefits and their trade-offs."
    steps={INNOV.map(s => ({ id: s.id, label: s.label, caption: `Problem: ${s.problem} Possible innovation: ${s.benefit} Evaluate carefully: ${s.consider}` }))}
    footer={
      <>
        <p>Science uses evidence; technology applies knowledge; innovation improves an idea or process to create value.</p>
        <MoreDetails summary="Life-cycle thinking"><p>Consider materials, manufacture, transport, energy and water use, repair, reuse and end-of-life waste, not just whether a device is new.</p></MoreDetails>
      </>
    }
    art={(id, playing, reducedMotion) => {
      const anim = !reducedMotion;
      return (
        <Stage label={`Innovation: ${id}`} depKey={id} playing={playing} reducedMotion={reducedMotion}>
          <Ground y={250} colour="#9aa07a" />
          {id === 'farm' && (
            <g>
              <rect x="110" y="70" width="90" height="160" rx="14" fill="#2b2f2a" stroke="#fff" strokeWidth="3" /><rect x="120" y="88" width="70" height="120" rx="6" fill="#cfe6f2" />
              <circle cx="145" cy="120" r="14" fill="#f2b93b" /><path d="M130 160 h50 M130 178 h36" stroke="#2468a8" strokeWidth="5" strokeLinecap="round" />
              {anim && [0, 1, 2].map(i => <path key={i} d="M210 150 H330" stroke="#3e91c8" strokeWidth="5" strokeDasharray="8 10" strokeLinecap="round"><animate attributeName="stroke-dashoffset" values="0;-36" dur="1s" repeatCount="indefinite" /></path>)}
              {[400, 480, 560].map(x => <Plant key={x} x={x} y={250} h={70} grow />)}
              <Cap x={330} y={285} text="Forecasts, prices and advice reach the farm" />
            </g>
          )}
          {id === 'water' && (
            <g>
              <path d="M70 140 h110 l-10 100 h-90z" fill="#8a6a3a" fillOpacity=".6" stroke="#4a3a2a" strokeWidth="3" />
              <rect x="260" y="110" width="110" height="130" rx="10" fill="#e8f0f4" stroke="#4b5560" strokeWidth="4" /><path d="M270 150 h90 M270 175 h90 M270 200 h90" stroke="#9bb5c4" strokeWidth="6" />
              <path d="M440 140 h110 l-10 100 h-90z" fill="#cfe6f2" stroke="#2468a8" strokeWidth="3" />
              {anim && [0, 1, 2].map(i => <circle key={i} r="7" fill="#8a6a3a"><animate attributeName="fill" values="#8a6a3a;#8a6a3a;#3e91c8" keyTimes="0;.5;1" dur="4s" begin={`${-i * 1.3}s`} repeatCount="indefinite" /><animateMotion dur="4s" begin={`${-i * 1.3}s`} repeatCount="indefinite" path="M180 150 Q315 150 440 190" /></circle>)}
              <Cap x={125} y={270} text="Unsafe water" /><Cap x={315} y={270} text="Treatment" /><Cap x={495} y={270} text="Safer water" />
            </g>
          )}
          {id === 'health' && (
            <g>
              <rect x="150" y="70" width="340" height="170" rx="14" fill="#1f2a30" stroke="#8a96a0" strokeWidth="5" />
              <path d="M170 160 H250 L275 110 L305 205 L330 150 H470" fill="none" stroke="#58d07a" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="500" strokeDashoffset="0">{anim && <animate attributeName="stroke-dashoffset" values="500;0" dur="2.6s" repeatCount="indefinite" />}</path>
              <Cap x={320} y={285} text="Tests and imaging help health workers decide" />
            </g>
          )}
        </Stage>
      );
    }}
  />
);

/* ---------- Climate ---------- */
const CLIMATE = [
  { id: 'mitigation', label: 'Mitigation', head: 'Address the causes', definition: 'Reduce greenhouse-gas emissions or increase their removal.', examples: ['Protect and restore forests', 'Use energy efficiently', 'Choose cleaner energy where practical'] },
  { id: 'adaptation', label: 'Adaptation', head: 'Prepare for the effects', definition: 'Prepare for climate effects and reduce harm to people and ecosystems.', examples: ['Improve drainage and flood preparedness', 'Conserve water during dry periods', 'Use climate-resilient farming practices'] }
];
export const ClimateStrategistScene: React.FC = () => (
  <J2Scene
    title="The Climate Action Strategist"
    description="Distinguish climate mitigation from adaptation and select practical community actions."
    steps={CLIMATE.map(c => ({ id: c.id, label: c.label, caption: `${c.head}. ${c.definition} Examples: ${c.examples.join('; ')}.` }))}
    footer={
      <>
        <p>Weather describes short-term conditions; climate describes patterns over many years. Human greenhouse-gas emissions are the main driver of recent global warming.</p>
        <MoreDetails summary="Green economy"><p>Support livelihoods and well-being while using resources responsibly, reducing pollution and protecting ecosystems. Fair access and local needs matter.</p></MoreDetails>
      </>
    }
    art={(id, playing, reducedMotion) => {
      const anim = !reducedMotion;
      return (
        <Stage label={`Climate response: ${id}`} depKey={id} playing={playing} reducedMotion={reducedMotion} bg="#eaf1f4">
          <Ground y={250} colour="#8fa85a" />
          {id === 'mitigation' && (
            <g>
              <rect x="90" y="150" width="110" height="100" fill="#8a8272" stroke="#4a4a4a" strokeWidth="3" /><rect x="120" y="100" width="24" height="50" fill="#8a8272" stroke="#4a4a4a" strokeWidth="3" />
              {anim && [0, 1, 2].map(i => <circle key={i} cx="132" r="12" fill="#9a9a9a"><animate attributeName="cy" values="96;40" dur="3s" begin={`${-i}s`} repeatCount="indefinite" /><animate attributeName="opacity" values=".8;0" dur="3s" begin={`${-i}s`} repeatCount="indefinite" /></circle>)}
              {[330, 410, 490, 570].map(x => <g key={x}><rect x={x - 5} y="200" width="10" height="50" fill="#6b4a2b" /><circle cx={x} cy="185" r="32" fill="#58a05a" stroke="#2f6a31" strokeWidth="3" /></g>)}
              {anim && [0, 1, 2].map(i => <circle key={i} r="6" fill="#9a9a9a"><animateMotion dur="3s" begin={`${-i}s`} repeatCount="indefinite" path="M230 90 Q330 90 420 170" /><animate attributeName="opacity" values="1;1;0" dur="3s" begin={`${-i}s`} repeatCount="indefinite" /></circle>)}
              <Cap x={450} y={285} text="Forests remove CO₂; efficient energy emits less" />
            </g>
          )}
          {id === 'adaptation' && (
            <g>
              <rect x="300" y="140" width="130" height="90" fill="#e8d4a8" stroke="#7a5a1a" strokeWidth="3" /><path d="M285 140 L365 80 L445 140z" fill="#c4953f" stroke="#7a5a1a" strokeWidth="3" />
              <path d="M310 230 V250 M420 230 V250" stroke="#7a5a1a" strokeWidth="8" />
              <rect x="0" y="240" width="640" height="60" fill="#3e91c8" opacity=".5">{anim && <animate attributeName="y" values="250;232;250" dur="4s" repeatCount="indefinite" />}</rect>
              <Drops x0={40} x1={600} y0={20} y1={220} n={14} />
              <path d="M70 250 q30 -30 60 0" fill="none" stroke="#2b2f2a" strokeWidth="5" />
              <Cap x={320} y={285} text="Drainage, flood preparedness and resilient farming" />
            </g>
          )}
        </Stage>
      );
    }}
  />
);

/* ---------- Soils ---------- */
const SOILS = {
  sand: { label: 'Sand soil', texture: 'Large, gritty particles', water: 'Usually drains quickly and holds less water', use: 'May need organic matter and careful watering for many crops.', speed: 1.4, size: 9, colour: '#e0c27a' },
  clay: { label: 'Clay soil', texture: 'Very fine, sticky particles when wet', water: 'Can hold much water but may drain slowly', use: 'Avoid working it when very wet; manage compaction and drainage.', speed: 6, size: 3, colour: '#a85a3a' },
  loam: { label: 'Loam soil', texture: 'A mixture of sand, silt, clay and organic matter', water: 'Often balances drainage and water retention', use: 'Can support many plants, although crop needs and local conditions still matter.', speed: 3, size: 6, colour: '#6b4a2b' }
} as const;
export const SoilInvestigatorScene: React.FC = () => (
  <J2Scene
    title="The Soil and Plant Investigator"
    description="Compare soil texture and water behaviour, then connect soil properties to plant growth."
    steps={Object.entries(SOILS).map(([id, s]) => ({ id, label: s.label, caption: `Texture: ${s.texture}. Water behaviour: ${s.water}. Planting note: ${s.use}` }))}
    footer={
      <>
        <p>Roots anchor plants and absorb water and mineral nutrients. Root hairs increase surface area; water enters root cells by osmosis.</p>
        <MoreDetails summary="Fair soil investigation"><p>Use equal amounts of soil in identical containers. Add equal volumes of water and measure drainage over the same time. Keep other conditions the same, repeat trials and wash hands afterwards.</p></MoreDetails>
      </>
    }
    art={(id, playing, reducedMotion) => {
      const s = SOILS[id as keyof typeof SOILS];
      const anim = !reducedMotion;
      const particles = Array.from({ length: 36 }, (_, i) => ({ x: 232 + ((i * 37) % 176), y: 110 + ((i * 53) % 90) }));
      return (
        <Stage label={`Soil drainage: ${s.label}`} depKey={id} playing={playing} reducedMotion={reducedMotion} bg="#eef2f5">
          <path d="M220 90 H420 V215 H220 Z" fill={s.colour} fillOpacity=".55" stroke="#4a3a2a" strokeWidth="4" />
          {particles.map((p, i) => <circle key={i} cx={p.x} cy={p.y} r={s.size / 2 + (i % 3)} fill={s.colour} stroke="#4a3a2a" strokeWidth="1" />)}
          <path d="M240 215 H400" stroke="#4a3a2a" strokeWidth="6" strokeDasharray="10 6" />
          <path d="M215 240 H425 V290 H215 Z" fill="#e8f0f4" stroke="#4b5560" strokeWidth="3" />
          <rect x="217" y="288" width="206" height="0" fill="#3e91c8">{anim && <animate attributeName="height" values="0;0;40" keyTimes={`0;${Math.min(0.5, s.speed / 12)};1`} dur="6s" repeatCount="indefinite" />}{anim && <animate attributeName="y" values="288;288;248" keyTimes={`0;${Math.min(0.5, s.speed / 12)};1`} dur="6s" repeatCount="indefinite" />}</rect>
          <path d="M310 20 h20 v30 h-20z" fill="#3e91c8" />
          <Drops x0={312} x1={328} y0={55} y1={95} n={3} dur={0.8} />
          <Cap x={110} y={150} text="Pour equal water" anchor="middle" /><Cap x={110} y={175} text="onto each sample" anchor="middle" />
          <Cap x={530} y={150} text={s.speed < 2 ? 'Drains quickly' : s.speed > 4 ? 'Drains slowly' : 'Drains steadily'} />
        </Stage>
      );
    }}
  />
);

/* ---------- Rocks ---------- */
const ROCKS = [
  { id: 'igneous', label: 'Igneous', formation: 'Molten rock cools and solidifies.', clue: 'Interlocking crystals may be visible; some rocks have holes from gas bubbles.', example: 'Granite is a common example.' },
  { id: 'sedimentary', label: 'Sedimentary', formation: 'Deposited particles or materials become compacted and cemented.', clue: 'Layers and visible grains may provide clues.', example: 'Sandstone is a common example.' },
  { id: 'metamorphic', label: 'Metamorphic', formation: 'Existing rock changes under heat, pressure or fluids without completely melting.', clue: 'Minerals may become aligned or form bands.', example: 'Slate is a common example.' }
];
export const RockExplorerScene: React.FC = () => (
  <J2Scene
    title="The Rock and Soil Origins Explorer"
    description="Identify the three main rock groups and investigate how weathering contributes to soil formation."
    steps={ROCKS.map(r => ({ id: r.id, label: r.label, caption: `Formation: ${r.formation} Observation clue: ${r.clue} ${r.example}` }))}
    footer={
      <>
        <p>Weathering breaks down or alters rock at or near Earth&apos;s surface. Soil develops over long periods from weathered material mixed with organic matter, water, air and organisms.</p>
        <MoreDetails summary="How rocks help form soil"><p>Physical, chemical and biological weathering produce particles. These mix with decayed organic matter over time. Parent rock, climate, organisms, slope and time all influence soil formation.</p></MoreDetails>
      </>
    }
    art={(id, playing, reducedMotion) => {
      const anim = !reducedMotion;
      return (
        <Stage label={`Rock group: ${id}`} depKey={id} playing={playing} reducedMotion={reducedMotion} bg="#eef0f2">
          {id === 'igneous' && (
            <g>
              <path d="M120 270 L220 120 L320 270z" fill="#6b4a2b" />
              <path d="M200 140 L220 120 L240 140 Q220 170 200 140z" fill="#e0503a">{anim && <animate attributeName="fill" values="#e0503a;#e0503a;#7a7a7a" keyTimes="0;.4;1" dur="4s" repeatCount="indefinite" />}</path>
              <path d="M220 130 Q250 220 300 270 H250 Q230 200 220 130z" fill="#e0503a" opacity=".9">{anim && <animate attributeName="fill" values="#e0503a;#e0503a;#7a7a7a" keyTimes="0;.5;1" dur="4s" repeatCount="indefinite" />}</path>
              <g transform="translate(480 190)"><rect x="-80" y="-70" width="160" height="140" rx="12" fill="#9a9a9a" stroke="#4a4a4a" strokeWidth="4" />{[[-40, -30], [10, -10], [-20, 30], [40, 30], [0, -45]].map(([x, y], i) => <path key={i} d={`M${x} ${y} l14 -8 l12 10 l-6 16 l-18 2z`} fill={i % 2 ? '#f0e6d0' : '#4a3a3a'} stroke="#2b2f2a" strokeWidth="1.5" />)}</g>
              <Cap x={480} y={285} text="Cooled molten rock: interlocking crystals" />
            </g>
          )}
          {id === 'sedimentary' && (
            <g>
              {['#d9b66a', '#b98555', '#e8d4a8', '#a77b50'].map((c, i) => <rect key={i} x="200" y={230 - i * 32} width="240" height="30" fill={c} stroke="#7a5a36" strokeWidth="2" />)}
              {anim && Array.from({ length: 8 }, (_, i) => <circle key={i} cx={210 + i * 28} r="5" fill="#c0a070"><animate attributeName="cy" values="30;110" dur="2.4s" begin={`${-i * 0.3}s`} repeatCount="indefinite" /><animate attributeName="opacity" values="1;1;0" dur="2.4s" begin={`${-i * 0.3}s`} repeatCount="indefinite" /></circle>)}
              <Cap x={320} y={285} text="Deposited layers become compacted and cemented" />
            </g>
          )}
          {id === 'metamorphic' && (
            <g>
              <g transform="translate(320 150)">
                {['#8a8f99', '#c9ccd2', '#6b7078', '#b0b4bb', '#4a4f57'].map((c, i) => <rect key={i} x="-110" y={-60 + i * 24} width="220" height="22" fill={c} stroke="#2b2f2a" strokeWidth="1.5" />)}
                {anim && <animateTransform attributeName="transform" type="scale" values="1 1;1 .92;1 1" additive="sum" dur="3s" repeatCount="indefinite" />}
              </g>
              <path d="M320 40 V80 M308 68 L320 82 L332 68 M320 270 V230 M308 242 L320 228 L332 242" stroke="#d1452f" strokeWidth="6" fill="none" strokeLinecap="round" />
              <path d="M70 90 q30 -26 60 0 q30 -26 60 0" stroke="#e0763a" strokeWidth="5" fill="none" strokeLinecap="round" />
              <Cap x={320} y={285} text="Heat and pressure align and band the minerals" />
            </g>
          )}
        </Stage>
      );
    }}
  />
);

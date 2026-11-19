import React, { useState } from 'react';
import { GhanaScienceVisual } from './GhanaScienceVisual';

type Props = { missionId: string };
const Choice = ({ active, children, onClick }: { active: boolean; children: React.ReactNode; onClick: () => void }) => (
  <button type="button" className={`gh-jhs1-science-choice${active ? ' is-active' : ''}`} aria-pressed={active} onClick={onClick}>{children}</button>
);

const DentalHealth: React.FC = () => {
  const [part, setPart] = useState('enamel');
  const parts: Record<string, { name: string; detail: string }> = {
    enamel: { name: 'Enamel', detail: 'The hard outer covering protects the crown of the tooth. Acids produced by plaque bacteria can weaken it.' },
    dentine: { name: 'Dentine', detail: 'Dentine forms much of the tooth beneath the enamel. It surrounds and protects the pulp.' },
    pulp: { name: 'Pulp', detail: 'The pulp contains nerves and blood vessels that help keep the tooth alive.' },
    root: { name: 'Root', detail: 'The root anchors the tooth in the jaw. The crown is the part normally visible above the gum.' },
    gum: { name: 'Gum', detail: 'Gum tissue surrounds and supports the teeth. Plaque near the gum line can cause inflammation.' }
  };
  const current = parts[part];
  return <GhanaScienceVisual title="The Dental Health Guardian" description="Explore tooth structures and learn how to protect teeth and gums." lang="en" caption="Brush twice daily with fluoride toothpaste, clean between teeth and seek dental advice for pain or bleeding gums.">
    <svg viewBox="0 0 300 112" role="img" aria-label="Simplified cross-section of a tooth showing enamel, dentine, pulp and root">
      <path d="M105 13Q150 -2 195 13Q210 28 193 58L177 100Q169 111 160 91L150 65L140 91Q131 111 123 100L107 58Q90 28 105 13Z" fill="#f3eee0" stroke="#8b6b45" strokeWidth="2"/>
      <path d="M113 22Q150 9 187 22L174 57 160 88 150 58 140 88 126 57Z" fill="#e8b85f"/>
      <path d="M139 30Q150 24 161 30L156 59 150 76 144 59Z" fill="#c97955"/>
      <path d="M95 30Q150 42 205 30" fill="none" stroke="#397d49" strokeWidth="7"/>
      <g fontSize="10" fill="currentColor"><text x="12" y="17">Enamel</text><text x="215" y="45">Dentine</text><text x="215" y="73">Pulp</text><text x="15" y="91">Root</text></g>
      <path d="M60 18L105 23M205 43L175 45M205 70L157 48M63 87L126 83" stroke="currentColor" strokeWidth="1" fill="none"/>
    </svg>
    <div className="gh-jhs1-science-interaction"><h4>Inspect a tooth structure</h4><div className="gh-jhs1-science-choices">{Object.entries(parts).map(([key, item]) => <Choice key={key} active={part === key} onClick={() => setPart(key)}>{item.name}</Choice>)}</div><div className="gh-jhs1-science-readout" aria-live="polite"><strong>{current.name}</strong><p>{current.detail}</p></div></div>
  </GhanaScienceVisual>;
};

const OuterPlanets: React.FC = () => {
  const [planet, setPlanet] = useState('Jupiter');
  const planets: Record<string, { type: string; feature: string; order: number }> = {
    Jupiter: { type: 'Gas giant', feature: 'The largest planet; known for the Great Red Spot, a giant storm.', order: 5 },
    Saturn: { type: 'Gas giant', feature: 'Has a broad, bright ring system made mainly of ice and rocky particles.', order: 6 },
    Uranus: { type: 'Ice giant', feature: 'Rotates with an extreme tilt, almost on its side.', order: 7 },
    Neptune: { type: 'Ice giant', feature: 'A distant ice giant with very fast winds.', order: 8 }
  };
  const current = planets[planet];
  return <GhanaScienceVisual title="The Outer Planet Navigator" description="Compare the four outer planets and distinguish gas giants from ice giants." lang="en" caption="The outer planets have extreme environments and are not suitable for life as we know it.">
    <svg viewBox="0 0 300 95" role="img" aria-label="The four outer planets in order from the Sun"><circle cx="18" cy="42" r="12" fill="#e9b949"/><text x="18" y="68" textAnchor="middle" fontSize="9" fill="currentColor">Sun</text>{Object.entries(planets).map(([name, p], i) => <g key={name}><path d={`M32 42H${62 + i * 59}`} stroke="currentColor" opacity=".2"/><circle cx={70 + i * 59} cy="42" r={planet === name ? 14 : 10} fill={['#c99b65', '#d8c7a0', '#80cbd2', '#4778c8'][i]} stroke={planet === name ? '#e9b949' : '#52616b'} strokeWidth={planet === name ? 3 : 1}/>{name === 'Saturn' && <ellipse cx={129} cy="42" rx="18" ry="5" fill="none" stroke="#c99b65" strokeWidth="3"/>}<text x={70 + i * 59} y="75" textAnchor="middle" fontSize="9" fill="currentColor">{name}</text></g>)}</svg>
    <div className="gh-jhs1-science-interaction"><h4>Select an outer planet</h4><div className="gh-jhs1-science-choices">{Object.keys(planets).map(name => <Choice key={name} active={planet === name} onClick={() => setPlanet(name)}>{name}</Choice>)}</div><div className="gh-jhs1-science-readout" aria-live="polite"><strong>{planet} · {current.type} · Planet {current.order}</strong><p>{current.feature}</p></div></div>
  </GhanaScienceVisual>;
};

const FoodWeb: React.FC = () => {
  const [organism, setOrganism] = useState('grass');
  const chain: Record<string, { role: string; detail: string }> = {
    grass: { role: 'Producer', detail: 'Grass uses sunlight to make food by photosynthesis. It forms the base of this food chain.' },
    grasshopper: { role: 'Primary consumer', detail: 'The grasshopper eats grass and obtains energy stored in plant material.' },
    frog: { role: 'Secondary consumer', detail: 'The frog eats grasshoppers and transfers energy to the next feeding level.' },
    snake: { role: 'Tertiary consumer', detail: 'The snake may eat frogs. Changes in one population can affect other organisms in the food web.' }
  };
  const current = chain[organism];
  const names = Object.keys(chain);
  return <GhanaScienceVisual title="The Ecosystem Food-Web Strategist" description="Follow energy through a Ghanaian savanna food chain and identify each organism's role." lang="en" caption="Arrows in a food chain point from the organism being eaten to the organism that eats it.">
    <svg viewBox="0 0 300 88" role="img" aria-label="Savanna food chain from grass to grasshopper to frog to snake">{names.map((name, i) => <g key={name}><rect x={3 + i * 75} y="20" width="68" height="34" rx="7" fill={organism === name ? '#e9b949' : '#9bc4a1'} stroke="#326b65" strokeWidth="2"/><text x={37 + i * 75} y="41" textAnchor="middle" fontSize="9" fill="#173b39">{name}</text>{i < 3 && <path d={`M${72 + i * 75} 37h5m-3-3 4 3-4 3`} stroke="currentColor" strokeWidth="1.5" fill="none"/>}</g>)}</svg>
    <div className="gh-jhs1-science-interaction"><h4>Choose an organism</h4><div className="gh-jhs1-science-choices">{names.map(name => <Choice key={name} active={organism === name} onClick={() => setOrganism(name)}>{name[0].toUpperCase() + name.slice(1)} · {chain[name].role}</Choice>)}</div><div className="gh-jhs1-science-readout" aria-live="polite"><strong>{organism[0].toUpperCase() + organism.slice(1)} · {current.role}</strong><p>{current.detail}</p></div></div>
  </GhanaScienceVisual>;
};

const FarmingSystems: React.FC = () => {
  const [system, setSystem] = useState('mixed');
  const systems: Record<string, { name: string; description: string; benefit: string }> = {
    rotation: { name: 'Crop rotation', description: 'Different crops are grown on the same field in a planned sequence over seasons.', benefit: 'Can help manage soil nutrients, pests and diseases.' },
    mixed: { name: 'Mixed cropping', description: 'Two or more crops are grown together on the same piece of land.', benefit: 'Can use available space and spread some production risks.' },
    mixedFarm: { name: 'Mixed farming', description: 'Crop production is combined with keeping livestock on the same farm.', benefit: 'Manure can support soil fertility when safely managed.' },
    land: { name: 'Land rotation', description: 'A farmer uses one area for a time and allows it to rest while another area is used.', benefit: 'Rest periods may allow vegetation and soil conditions to recover.' }
  };
  const current = systems[system];
  return <GhanaScienceVisual title="The Farming Systems Strategist" description="Compare ways farmers organise crops, land and livestock." lang="en" caption="The best system depends on rainfall, soil, available land, labour and local farming advice.">
    <svg viewBox="0 0 300 90" role="img" aria-label="Farm field with different crop rows"><path d="M8 70h284" stroke="#9a7047" strokeWidth="16"/>{[35,85,135,185,235].map(x => <g key={x}><path d={`M${x} 68v-25m0 10-10-9m10 9 10-9`} stroke="#347c45" strokeWidth="3" fill="none"/><circle cx={x} cy="40" r="5" fill="#76a85b"/></g>)}</svg>
    <div className="gh-jhs1-science-interaction"><h4>Compare a farming system</h4><div className="gh-jhs1-science-choices">{Object.entries(systems).map(([key, item]) => <Choice key={key} active={system === key} onClick={() => setSystem(key)}>{item.name}</Choice>)}</div><div className="gh-jhs1-science-readout" aria-live="polite"><strong>{current.name}</strong><p>{current.description}</p><p><b>Possible benefit:</b> {current.benefit}</p></div></div>
  </GhanaScienceVisual>;
};

export const GhanaJhs2SystemsVisual: React.FC<Props> = ({ missionId }) => {
  if (missionId === 'gh-jhs2-science-teeth-dental-health') return <DentalHealth />;
  if (missionId === 'gh-jhs2-science-outer-planets') return <OuterPlanets />;
  if (missionId === 'gh-jhs2-science-ecosystem-feeding') return <FoodWeb />;
  if (missionId === 'gh-jhs2-science-farming-systems') return <FarmingSystems />;
  return null;
};

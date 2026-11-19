import React, { useState } from 'react';
import { GhanaScienceVisual } from './GhanaScienceVisual';

type Props = { missionId: string };
const Choice = ({ active, children, onClick }: { active: boolean; children: React.ReactNode; onClick: () => void }) => (
  <button type="button" className={`gh-jhs1-science-choice${active ? ' is-active' : ''}`} aria-pressed={active} onClick={onClick}>{children}</button>
);
const Panel = ({ title, children }: { title: string; children: React.ReactNode }) => <div className="gh-jhs1-science-readout" aria-live="polite"><strong>{title}</strong>{children}</div>;

const WasteWise: React.FC = () => {
  const [item, setItem] = useState('food');
  const data: Record<string, { bin: string; action: string; reason: string }> = {
    food: { bin: 'Organic waste', action: 'Compost where suitable facilities and safe practices are available.', reason: 'Food and garden scraps can decompose and form compost.' },
    bottle: { bin: 'Clean recyclable plastic', action: 'Reuse a safe bottle or place it in an accepted collection stream.', reason: 'Local recycling services determine which plastics are accepted.' },
    battery: { bin: 'Special collection', action: 'Keep separate and use an approved battery take-back or collection point.', reason: 'Battery materials can pollute soil and water if poorly handled.' },
    paper: { bin: 'Paper recycling', action: 'Keep clean and dry, then use a local paper collection service.', reason: 'Clean paper can be processed into new paper products.' }
  };
  const current = data[item];
  return <GhanaScienceVisual title="The Waste-Wise Community Guardian" description="Sort everyday waste and choose safe, sustainable actions." lang="en" caption="Prevent waste first, then reduce, reuse, recycle and safely manage what remains. Never burn mixed waste or dump it into drains or waterways.">
    <div className="gh-jhs1-science-interaction"><h4>Where should this item go?</h4><div className="gh-jhs1-science-choices">{Object.keys(data).map(k => <Choice key={k} active={item===k} onClick={()=>setItem(k)}>{k==='food'?'Food scraps':k==='bottle'?'Plastic bottle':k==='battery'?'Used battery':'Paper'}</Choice>)}</div><Panel title={current.bin}><p>{current.action}</p><p>{current.reason}</p></Panel></div>
    <Panel title="The waste hierarchy"><p>Prevent → Reduce → Reuse → Recycle → Treat or safely dispose. The best option depends on the material and services available in the community.</p></Panel>
  </GhanaScienceVisual>;
};

const HealthDefender: React.FC = () => {
  const [route,setRoute]=useState('air');
  const data:Record<string,{name:string;prevention:string;fact:string}>={
    air:{name:'Respiratory particles',prevention:'Improve ventilation, cover coughs and follow public-health advice; vaccination may be available for some diseases.',fact:'Some infections spread through particles released when an infected person breathes, talks, coughs or sneezes.'},
    food:{name:'Contaminated food or water',prevention:'Wash hands, use safe water, cook food thoroughly and store it safely.',fact:'Some germs spread when food or water becomes contaminated.'},
    blood:{name:'Infected blood or body fluids',prevention:'Never share needles or sharp equipment; use appropriate protective and health services.',fact:'HIV is not spread by hugging, handshakes or sharing a classroom.'}
  };
  const current=data[route];
  return <GhanaScienceVisual title="The Community Health Defender" description="Match prevention to the route of infection and challenge health misinformation." lang="en" caption="This is learning content, not a diagnosis. Symptoms alone cannot identify a disease; seek qualified health advice. Respect privacy and never stigmatise people who are ill.">
    <div className="gh-jhs1-science-interaction"><h4>Explore a transmission route</h4><div className="gh-jhs1-science-choices">{Object.keys(data).map(k=><Choice key={k} active={route===k} onClick={()=>setRoute(k)}>{data[k].name}</Choice>)}</div><Panel title={current.name}><p>{current.fact}</p><p><strong>Prevention:</strong> {current.prevention}</p></Panel></div>
    <Panel title="Remember"><p>Different diseases spread in different ways. Accurate information, vaccination where recommended, hygiene and professional care help protect communities.</p></Panel>
  </GhanaScienceVisual>;
};

const InnovationBuilder: React.FC = () => {
  const [solution,setSolution]=useState('farm');
  const data:Record<string,{problem:string;benefit:string;consider:string}>={
    farm:{problem:'Farmers need timely information about weather and markets.',benefit:'Mobile phones can provide forecasts, prices and advisory information.',consider:'Check information quality, network access, device cost and digital skills.'},
    water:{problem:'Communities need safer drinking water.',benefit:'Water treatment and testing technologies can reduce health risks.',consider:'Consider maintenance, trained operators, affordability and regular testing.'},
    health:{problem:'Health workers need to identify illness accurately.',benefit:'Diagnostic tests and medical imaging support clinical decisions.',consider:'Equipment needs trained staff, reliable supplies and fair access.'}
  };
  const current=data[solution];
  return <GhanaScienceVisual title="The Science and Innovation Builder" description="Evaluate Ghana-relevant innovations by the problem they solve, their benefits and their trade-offs." lang="en" caption="Science uses evidence; technology applies knowledge; innovation improves an idea or process to create value.">
    <div className="gh-jhs1-science-interaction"><h4>Choose a community challenge</h4><div className="gh-jhs1-science-choices"><Choice active={solution==='farm'} onClick={()=>setSolution('farm')}>Farming</Choice><Choice active={solution==='water'} onClick={()=>setSolution('water')}>Safe water</Choice><Choice active={solution==='health'} onClick={()=>setSolution('health')}>Health care</Choice></div><Panel title="Problem"><p>{current.problem}</p></Panel><Panel title="Possible innovation"><p>{current.benefit}</p></Panel><Panel title="Evaluate carefully"><p>{current.consider}</p></Panel></div>
    <Panel title="Life-cycle thinking"><p>Consider materials, manufacture, transport, energy and water use, repair, reuse and end-of-life waste—not just whether a device is new.</p></Panel>
  </GhanaScienceVisual>;
};

const ClimateStrategist: React.FC = () => {
  const [action,setAction]=useState('mitigation');
  const data:Record<string,{definition:string;examples:string[]}> = {
    mitigation:{definition:'Reduce greenhouse-gas emissions or increase their removal.',examples:['Protect and restore forests','Use energy efficiently','Choose cleaner energy where practical']},
    adaptation:{definition:'Prepare for climate effects and reduce harm to people and ecosystems.',examples:['Improve drainage and flood preparedness','Conserve water during dry periods','Use climate-resilient farming practices']}
  };
  const current=data[action];
  return <GhanaScienceVisual title="The Climate Action Strategist" description="Distinguish climate mitigation from adaptation and select practical community actions." lang="en" caption="Weather describes short-term conditions; climate describes patterns over many years. Human greenhouse-gas emissions are the main driver of recent global warming.">
    <div className="gh-jhs1-science-interaction"><h4>Choose the climate response</h4><div className="gh-jhs1-science-choices"><Choice active={action==='mitigation'} onClick={()=>setAction('mitigation')}>Mitigation</Choice><Choice active={action==='adaptation'} onClick={()=>setAction('adaptation')}>Adaptation</Choice></div><Panel title={action==='mitigation'?'Address the causes':'Prepare for the effects'}><p>{current.definition}</p><ul>{current.examples.map(x=><li key={x}>{x}</li>)}</ul></Panel></div>
    <Panel title="Green economy"><p>Support livelihoods and well-being while using resources responsibly, reducing pollution and protecting ecosystems. Fair access and local needs matter.</p></Panel>
  </GhanaScienceVisual>;
};

const SoilInvestigator: React.FC = () => {
  const [soil,setSoil]=useState('loam');
  const data:Record<string,{texture:string;water:string;use:string}> = {
    sand:{texture:'Large, gritty particles',water:'Usually drains quickly and holds less water',use:'May need organic matter and careful watering for many crops.'},
    clay:{texture:'Very fine, sticky particles when wet',water:'Can hold much water but may drain slowly',use:'Avoid working it when very wet; manage compaction and drainage.'},
    loam:{texture:'A mixture of sand, silt, clay and organic matter',water:'Often balances drainage and water retention',use:'Can support many plants, although crop needs and local conditions still matter.'}
  };
  const current=data[soil];
  return <GhanaScienceVisual title="The Soil and Plant Investigator" description="Compare soil texture and water behaviour, then connect soil properties to plant growth." lang="en" caption="Roots anchor plants and absorb water and mineral nutrients. Root hairs increase surface area; water enters root cells by osmosis.">
    <div className="gh-jhs1-science-interaction"><h4>Compare a soil sample</h4><div className="gh-jhs1-science-choices">{Object.keys(data).map(k=><Choice key={k} active={soil===k} onClick={()=>setSoil(k)}>{k[0].toUpperCase()+k.slice(1)} soil</Choice>)}</div><Panel title={soil[0].toUpperCase()+soil.slice(1)+' soil'}><p><strong>Texture:</strong> {current.texture}</p><p><strong>Water behaviour:</strong> {current.water}</p><p><strong>Planting note:</strong> {current.use}</p></Panel></div>
    <Panel title="Fair soil investigation"><p>Use equal amounts of soil in identical containers. Add equal volumes of water and measure drainage over the same time. Keep other conditions the same, repeat trials and wash hands afterwards.</p></Panel>
  </GhanaScienceVisual>;
};

const RockExplorer: React.FC = () => {
  const [rock,setRock]=useState('igneous');
  const data:Record<string,{formation:string;clue:string;example:string}> = {
    igneous:{formation:'Molten rock cools and solidifies.',clue:'Interlocking crystals may be visible; some rocks have holes from gas bubbles.',example:'Granite is a common example.'},
    sedimentary:{formation:'Deposited particles or materials become compacted and cemented.',clue:'Layers and visible grains may provide clues.',example:'Sandstone is a common example.'},
    metamorphic:{formation:'Existing rock changes under heat, pressure or fluids without completely melting.',clue:'Minerals may become aligned or form bands.',example:'Slate is a common example.'}
  };
  const current=data[rock];
  return <GhanaScienceVisual title="The Rock and Soil Origins Explorer" description="Identify the three main rock groups and investigate how weathering contributes to soil formation." lang="en" caption="Weathering breaks down or alters rock at or near Earth's surface. Soil develops over long periods from weathered material mixed with organic matter, water, air and organisms.">
    <div className="gh-jhs1-science-interaction"><h4>Explore a rock group</h4><div className="gh-jhs1-science-choices">{Object.keys(data).map(k=><Choice key={k} active={rock===k} onClick={()=>setRock(k)}>{k[0].toUpperCase()+k.slice(1)}</Choice>)}</div><Panel title={rock[0].toUpperCase()+rock.slice(1)+' rocks'}><p><strong>Formation:</strong> {current.formation}</p><p><strong>Observation clue:</strong> {current.clue}</p><p><strong>Example:</strong> {current.example}</p></Panel></div>
    <Panel title="How rocks help form soil"><p>Physical, chemical and biological weathering produce particles. These mix with decayed organic matter over time. Parent rock, climate, organisms, slope and time all influence soil formation.</p></Panel>
  </GhanaScienceVisual>;
};

export const GhanaJhs2HumansEnvironmentVisual: React.FC<Props> = ({missionId}) => {
  switch(missionId) {
    case 'gh-jhs2-science-waste-management': return <WasteWise />;
    case 'gh-jhs2-science-human-health': return <HealthDefender />;
    case 'gh-jhs2-science-science-industry': return <InnovationBuilder />;
    case 'gh-jhs2-science-climate-green-economy': return <ClimateStrategist />;
    case 'gh-jhs2-science-soils-plants': return <SoilInvestigator />;
    case 'gh-jhs2-science-rocks-soil-formation': return <RockExplorer />;
    default: return null;
  }
};

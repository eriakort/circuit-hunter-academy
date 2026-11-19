import React, { useState } from 'react';
import { GhanaScienceVisual } from './GhanaScienceVisual';

type Props = { missionId: string };
const Choice = ({ active, children, onClick }: { active: boolean; children: React.ReactNode; onClick: () => void }) => (
  <button type="button" className={`gh-jhs1-science-choice${active ? ' is-active' : ''}`} aria-pressed={active} onClick={onClick}>{children}</button>
);

const CarbonCycle: React.FC = () => {
  const [step, setStep] = useState('photosynthesis');
  const stages: Record<string, { title: string; detail: string }> = {
    photosynthesis: { title: 'Photosynthesis', detail: 'Green plants take in carbon dioxide and use light energy to make food. Carbon becomes part of plant material.' },
    feeding: { title: 'Feeding', detail: 'Animals obtain carbon when they eat plants or other animals. Carbon moves through food chains.' },
    respiration: { title: 'Respiration', detail: 'Plants, animals and microorganisms release carbon dioxide as they use food for energy.' },
    decay: { title: 'Decomposition', detail: 'Decomposers break down dead organisms and return carbon to the soil and air.' },
    burning: { title: 'Burning', detail: 'Burning wood and fossil fuels releases carbon dioxide into the atmosphere.' }
  };
  const current = stages[step];
  return <GhanaScienceVisual title="The Carbon Cycle Guardian" description="Follow carbon as it moves between the atmosphere, living things and the environment." lang="en" caption="Extra carbon dioxide from burning fossil fuels strengthens the greenhouse effect.">
    <svg viewBox="0 0 300 112" role="img" aria-label="Carbon moves between air, plants, animals and soil">
      <circle cx="150" cy="17" r="13" fill="#c6dce8" stroke="#326b65" strokeWidth="2"/><text x="150" y="21" textAnchor="middle" fontSize="9" fill="#173b35">CO₂</text>
      <path d="M150 31V48M144 42l6 7 6-7" stroke="#419ac7" strokeWidth="2" fill="none"/>
      <path d="M35 83q20-42 40 0M55 83V52m-15 13q15-19 15 0m0-3q17-18 20 0" stroke="#397d49" strokeWidth="4" fill="none"/>
      <path d="M110 83h80" stroke="#8abf78" strokeWidth="7"/><circle cx="230" cy="67" r="17" fill="#e9b949" stroke="#8b6c2f" strokeWidth="2"/>
      <path d="M75 61Q105 25 135 25M165 25Q205 25 220 48M215 87Q160 108 85 89" stroke="#419ac7" strokeWidth="2" strokeDasharray="4 4" fill="none"/>
      <text x="55" y="104" textAnchor="middle" fontSize="10" fill="currentColor">Plant</text><text x="150" y="104" textAnchor="middle" fontSize="10" fill="currentColor">Soil</text><text x="230" y="96" textAnchor="middle" fontSize="10" fill="currentColor">Animal</text>
    </svg>
    <div className="gh-jhs1-science-interaction"><h4>Explore a carbon transfer</h4><div className="gh-jhs1-science-choices">{Object.entries(stages).map(([key, item]) => <Choice key={key} active={step === key} onClick={() => setStep(key)}>{item.title}</Choice>)}</div><div className="gh-jhs1-science-readout" aria-live="polite"><strong>{current.title}</strong><p>{current.detail}</p></div></div>
  </GhanaScienceVisual>;
};

const MosquitoCycle: React.FC = () => {
  const [stage, setStage] = useState(0);
  const stages = [
    { name: 'Egg', detail: 'A female Anopheles mosquito lays eggs on water. The eggs hatch into larvae.' },
    { name: 'Larva', detail: 'The larva lives in water, feeds and grows. It must come to the surface to breathe.' },
    { name: 'Pupa', detail: 'The pupa remains in water while the adult mosquito develops. It does not feed.' },
    { name: 'Adult', detail: 'An adult mosquito emerges. An infected female Anopheles can transmit malaria parasites when she bites.' }
  ];
  const current = stages[stage];
  return <GhanaScienceVisual title="The Mosquito Life-Cycle Defender" description="Put the four stages of the Anopheles mosquito life cycle in order." lang="en" caption="Use insecticide-treated nets as directed and remove standing water safely. Never breed or handle mosquitoes as a home experiment.">
    <svg viewBox="0 0 300 82" role="img" aria-label="Four stages of the mosquito life cycle"><path d="M25 42H275" stroke="#7ba9a1" strokeWidth="3"/>{stages.map((s, i) => <g key={s.name}><circle cx={35 + i * 76} cy="42" r="17" fill={stage === i ? '#e9b949' : '#c6dce8'} stroke="#326b65" strokeWidth="2"/><text x={35 + i * 76} y="46" textAnchor="middle" fontSize="11" fill="#173b35">{i + 1}</text><text x={35 + i * 76} y="75" textAnchor="middle" fontSize="10" fill="currentColor">{s.name}</text></g>)}</svg>
    <div className="gh-jhs1-science-interaction"><h4>Select a life stage</h4><div className="gh-jhs1-science-choices">{stages.map((s, i) => <Choice key={s.name} active={stage === i} onClick={() => setStage(i)}>{i + 1}. {s.name}</Choice>)}</div><div className="gh-jhs1-science-readout" aria-live="polite"><strong>{current.name}</strong><p>{current.detail}</p></div></div>
  </GhanaScienceVisual>;
};

const SeedBeds: React.FC = () => {
  const [bed, setBed] = useState('raised');
  const beds: Record<string, { title: string; use: string; caution: string }> = {
    flat: { title: 'Flat bed', use: 'A level planting surface for soil with suitable drainage and moisture.', caution: 'Avoid waterlogging; check drainage before planting.' },
    raised: { title: 'Raised bed', use: 'The planting surface is higher than surrounding ground. It can improve drainage in wet conditions.', caution: 'Raised beds may dry out faster, so monitor moisture.' },
    sunken: { title: 'Sunken bed', use: 'A shallow depression can collect and conserve water in dry conditions.', caution: 'Do not use where water remains stagnant for long periods.' },
    ridge: { title: 'Ridge or mound', use: 'Raised rows or planting spots can suit crops that need particular soil and drainage conditions.', caution: 'Keep spacing consistent and protect soil from erosion.' }
  };
  const current = beds[bed];
  return <GhanaScienceVisual title="The Seed-Bed Design Strategist" description="Compare seed-bed designs and match them to local growing conditions." lang="en" caption="The best design depends on crop, soil, rainfall, drainage and local experience.">
    <svg viewBox="0 0 300 88" role="img" aria-label="Cross sections of flat, raised, sunken and ridge seed beds"><path d="M8 55H292" stroke="#8b6b45" strokeWidth="3"/><path d="M12 55h60v-8H12z" fill="#a77b50"/><path d="M82 55q0-28 30-28t30 28" fill="#a77b50"/><path d="M155 55q0-22 30-22t30 22" fill="#a77b50"/><path d="M225 55q0-22 30-22t30 22" fill="#a77b50"/><g fill="#397d49"><path d="M40 47V27m-9 9q9-12 18 0M112 28V9m-9 10q9-12 18 0M184 33V14m-9 10q9-12 18 0M255 33V14m-9 10q9-12 18 0" stroke="#397d49" strokeWidth="2"/></g><g fontSize="9" fill="currentColor" textAnchor="middle"><text x="42" y="76">Flat</text><text x="112" y="76">Raised</text><text x="184" y="76">Sunken</text><text x="255" y="76">Ridge</text></g></svg>
    <div className="gh-jhs1-science-interaction"><h4>Choose a bed design</h4><div className="gh-jhs1-science-choices">{Object.entries(beds).map(([key, item]) => <Choice key={key} active={bed === key} onClick={() => setBed(key)}>{item.title}</Choice>)}</div><div className="gh-jhs1-science-readout" aria-live="polite"><strong>{current.title}</strong><p>{current.use}</p><p><b>Remember:</b> {current.caution}</p></div></div>
  </GhanaScienceVisual>;
};

const AnimalCare: React.FC = () => {
  const [need, setNeed] = useState('water');
  const info: Record<string, { title: string; detail: string }> = {
    water: { title: 'Clean water', detail: 'Animals need continuous access to clean water. Check drinkers, refill them and clean them regularly.' },
    feed: { title: 'Balanced feed', detail: 'Provide suitable feed for the animal species and stage of growth. Store feed safely and prevent mould.' },
    shelter: { title: 'Suitable shelter', detail: 'Provide enough space, ventilation, shade and protection from rain, heat and predators.' },
    hygiene: { title: 'Hygiene and observation', detail: 'Keep housing clean, observe animals daily and seek veterinary advice when an animal appears unwell.' }
  };
  const current = info[need];
  return <GhanaScienceVisual title="The Animal Production Care Planner" description="Explore the basic needs that support healthy animal production." lang="en" caption="Follow local veterinary and animal-welfare guidance.">
    <svg viewBox="0 0 300 90" role="img" aria-label="Animal care needs: water, feed, shelter and hygiene"><path d="M150 12L270 75H30z" fill="#e4c98e" stroke="#8b6b45" strokeWidth="2"/><circle cx="150" cy="48" r="22" fill="#8abf78" stroke="#397d49" strokeWidth="2"/><text x="150" y="52" textAnchor="middle" fontSize="10" fill="#173b35">Care</text><text x="150" y="10" textAnchor="middle" fontSize="10" fill="currentColor">Water</text><text x="28" y="83" textAnchor="middle" fontSize="10" fill="currentColor">Feed</text><text x="272" y="83" textAnchor="middle" fontSize="10" fill="currentColor">Shelter</text></svg>
    <div className="gh-jhs1-science-interaction"><h4>Review an animal's needs</h4><div className="gh-jhs1-science-choices">{Object.entries(info).map(([key, item]) => <Choice key={key} active={need === key} onClick={() => setNeed(key)}>{item.title}</Choice>)}</div><div className="gh-jhs1-science-readout" aria-live="polite"><strong>{current.title}</strong><p>{current.detail}</p></div></div>
  </GhanaScienceVisual>;
};

export const GhanaJhs2CyclesVisual: React.FC<Props> = ({ missionId }) => {
  if (missionId === 'gh-jhs2-science-carbon-cycle') return <CarbonCycle />;
  if (missionId === 'gh-jhs2-science-anopheles-life-cycle') return <MosquitoCycle />;
  if (missionId === 'gh-jhs2-science-seed-beds') return <SeedBeds />;
  if (missionId === 'gh-jhs2-science-animal-production') return <AnimalCare />;
  return null;
};

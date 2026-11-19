import React, { useState } from 'react';
import { GhanaScienceVisual } from './GhanaScienceVisual';

type Props = { missionId: string };
const Choice = ({ active, children, onClick }: { active: boolean; children: React.ReactNode; onClick: () => void }) => (
  <button type="button" className={`gh-jhs1-science-choice${active ? ' is-active' : ''}`} aria-pressed={active} onClick={onClick}>{children}</button>
);

const EnergyPathfinder: React.FC = () => {
  const [example, setExample] = useState('torch');
  const examples: Record<string, { name: string; steps: string[]; note: string }> = {
    torch: { name: 'Battery torch', steps: ['Chemical energy', 'Electrical energy', 'Light energy + thermal energy'], note: 'The battery supplies electrical energy to the lamp. Some energy is also transferred as heat.' },
    bicycle: { name: 'Bicycle braking', steps: ['Kinetic energy', 'Friction at the brakes', 'Thermal energy'], note: 'Friction slows the bicycle and transfers kinetic energy to the surroundings as heat.' },
    hydro: { name: 'Hydroelectric station', steps: ['Gravitational potential energy of stored water', 'Kinetic energy of flowing water', 'Mechanical energy in the turbine', 'Electrical energy'], note: 'Moving water turns a turbine connected to a generator.' }
  };
  const current = examples[example];
  return <GhanaScienceVisual title="The Energy Conversion Pathfinder" description="Trace energy changes in familiar devices and a hydroelectric station." lang="en" caption="Energy is transferred or changed from one form to another; it is not created from nothing.">
    <div className="gh-jhs1-science-interaction">
      <h4>Choose an energy pathway</h4>
      <div className="gh-jhs1-science-choices">{Object.entries(examples).map(([key, item]) => <Choice key={key} active={example === key} onClick={() => setExample(key)}>{item.name}</Choice>)}</div>
      <ol className="gh-jhs1-science-readout">{current.steps.map((step, index) => <li key={step}><strong>{step}</strong>{index < current.steps.length - 1 && <span aria-hidden="true"> → </span>}</li>)}</ol>
      <div className="gh-jhs1-science-readout" aria-live="polite"><strong>{current.name}</strong><p>{current.note}</p></div>
    </div>
  </GhanaScienceVisual>;
};

const ElectricityNetwork: React.FC = () => {
  const [stage, setStage] = useState('station');
  const [capacitor, setCapacitor] = useState('charging');
  const stages: Record<string, { title: string; detail: string; order: string }> = {
    station: { title: 'Generating station', detail: 'A turbine can turn a generator. The generator converts mechanical energy into electrical energy.', order: '1 · Generate' },
    stepup: { title: 'Step-up transformer', detail: 'The transformer raises voltage so electricity can be transmitted with lower current and reduced resistive losses.', order: '2 · Raise voltage' },
    lines: { title: 'Transmission lines', detail: 'High-voltage lines carry electrical energy over long distances to substations.', order: '3 · Transmit' },
    substation: { title: 'Substation', detail: 'Transformers lower the voltage to levels suitable for the distribution network.', order: '4 · Lower voltage' },
    home: { title: 'Homes and schools', detail: 'Distribution lines deliver electricity to consumers. Protective devices help isolate faults.', order: '5 · Distribute' }
  };
  const current = stages[stage];
  return <GhanaScienceVisual title="The Electricity Network Engineer" description="Explore the electricity journey and a simple low-voltage capacitor circuit." lang="en" caption="Classroom circuit activities must use teacher-approved low-voltage equipment. Never experiment with mains electricity.">
    <svg viewBox="0 0 300 56" role="img" aria-label="Electricity route from generating station through transformers and transmission lines to consumers">
      {['Station', 'Step-up', 'Lines', 'Substation', 'Users'].map((label, index) => <g key={label}><rect x={index * 60 + 1} y="8" width="53" height="30" rx="5" fill={Object.keys(stages)[index] === stage ? '#e9b949' : '#9bc4a1'} stroke="#326b65"/><text x={index * 60 + 27} y="27" textAnchor="middle" fontSize="8" fill="#173b39">{label}</text>{index < 4 && <path d={`M${index * 60 + 54} 23h6m-3-3 3 3-3 3`} stroke="currentColor" fill="none"/>}</g>)}
    </svg>
    <div className="gh-jhs1-science-interaction"><h4>Inspect a stage in the grid</h4><div className="gh-jhs1-science-choices">{Object.keys(stages).map(key => <Choice key={key} active={stage === key} onClick={() => setStage(key)}>{stages[key].title}</Choice>)}</div><div className="gh-jhs1-science-readout" aria-live="polite"><strong>{current.order} · {current.title}</strong><p>{current.detail}</p></div></div>
    <div className="gh-jhs1-science-interaction"><h4>What is the capacitor doing?</h4><div className="gh-jhs1-science-choices"><Choice active={capacitor === 'charging'} onClick={() => setCapacitor('charging')}>Charging</Choice><Choice active={capacitor === 'discharging'} onClick={() => setCapacitor('discharging')}>Discharging</Choice></div><div className="gh-jhs1-science-readout" aria-live="polite"><strong>{capacitor === 'charging' ? 'Storing energy' : 'Releasing energy'}</strong><p>{capacitor === 'charging' ? 'A capacitor stores energy in an electric field as charge builds on its plates.' : 'With a suitable discharge path, a capacitor releases stored energy into the circuit. A resistor can control the rate.'}</p></div></div>
  </GhanaScienceVisual>;
};

const EnergySteward: React.FC = () => {
  const [device, setDevice] = useState('fan');
  const devices: Record<string, { input: string; useful: string; other: string; action: string }> = {
    fan: { input: 'Electrical energy', useful: 'Kinetic energy (moving air)', other: 'Sound and thermal energy', action: 'Switch the fan off when the room is empty.' },
    cooker: { input: 'Chemical energy in cooking gas', useful: 'Thermal energy for cooking', other: 'Heat transferred to the surroundings', action: 'Use a suitable pot and cover to reduce cooking time.' },
    solar: { input: 'Light energy from the Sun', useful: 'Electrical energy, then light from the lamp', other: 'Some energy is transferred as heat', action: 'Place the panel where it can receive sunlight and maintain it.' }
  };
  const current = devices[device];
  return <GhanaScienceVisual title="The Energy Steward" description="Identify useful and other energy transfers, then choose a practical conservation action." lang="en" caption="Energy is conserved even when some transfers are not useful for the task.">
    <div className="gh-jhs1-science-interaction"><h4>Choose a device</h4><div className="gh-jhs1-science-choices">{Object.keys(devices).map(key => <Choice key={key} active={device === key} onClick={() => setDevice(key)}>{key === 'fan' ? 'Electric fan' : key === 'cooker' ? 'Gas cooker' : 'Solar lamp'}</Choice>)}</div><div className="gh-jhs1-science-readout" aria-live="polite"><p><strong>Input:</strong> {current.input}</p><p><strong>Useful output:</strong> {current.useful}</p><p><strong>Other transfers:</strong> {current.other}</p><p><strong>Save energy:</strong> {current.action}</p></div></div>
    <div className="gh-jhs1-science-readout"><strong>Remember the conservation principle</strong><p>Energy is not created or destroyed. It is transferred or converted; some may spread into the surroundings as heat or sound.</p></div>
  </GhanaScienceVisual>;
};

const MagnetismMotion: React.FC = () => {
  const [pole, setPole] = useState('unlike');
  const [mass, setMass] = useState(2);
  const [force, setForce] = useState(10);
  const acceleration = force / mass;
  return <GhanaScienceVisual title="The Magnetism and Motion Defender" description="Explore magnetic poles and use Newton’s Second Law to predict acceleration." lang="en" caption="F = m × a. The resultant force is measured in newtons (N), mass in kilograms (kg), and acceleration in metres per second squared (m/s²).">
    <div className="gh-jhs1-science-interaction"><h4>Explore magnetic poles</h4><p>Unlike poles attract; like poles repel, producing repulsion.</p><div className="gh-jhs1-science-choices"><Choice active={pole === 'unlike'} onClick={() => setPole('unlike')}>Unlike poles</Choice><Choice active={pole === 'like'} onClick={() => setPole('like')}>Like poles</Choice></div><div className="gh-jhs1-science-readout" aria-live="polite"><strong>{pole === 'unlike' ? 'Attraction' : 'Repulsion'}</strong><p>{pole === 'unlike' ? 'A north pole and a south pole attract each other.' : 'Two north poles or two south poles repel each other.'}</p></div></div>
    <div className="gh-jhs1-science-interaction"><h4>Newton’s Second Law calculator</h4><p>Keep the resultant force at {force} N and change the trolley mass.</p><div className="gh-jhs1-science-choices">{[2, 5, 10].map(value => <Choice key={value} active={mass === value} onClick={() => setMass(value)}>{value} kg</Choice>)}</div><div className="gh-jhs1-science-choices">{[5, 10, 20].map(value => <Choice key={value} active={force === value} onClick={() => setForce(value)}>{value} N</Choice>)}</div><div className="gh-jhs1-science-readout" aria-live="polite"><strong>a = F ÷ m = {force} ÷ {mass} = {acceleration} m/s²</strong><p>{mass === 2 ? 'A lighter trolley has a larger acceleration for the same force.' : mass === 10 ? 'A heavier trolley has a smaller acceleration for the same force.' : 'Increasing mass reduces acceleration when the resultant force stays the same.'}</p></div></div>
  </GhanaScienceVisual>;
};

const FarmToolEngineer: React.FC = () => {
  const [task, setTask] = useState('soil');
  const tasks: Record<string, { tool: string; purpose: string; safety: string }> = {
    soil: { tool: 'Hoe', purpose: 'Loosen soil, make planting ridges and remove weeds.', safety: 'Check the handle, keep a safe distance from others and use controlled movements.' },
    carry: { tool: 'Wheelbarrow', purpose: 'Transport soil, compost, tools or harvested crops.', safety: 'Balance the load, use a clear path and avoid overloading.' },
    water: { tool: 'Watering can', purpose: 'Apply water gently to seedlings and growing plants.', safety: 'Carry a manageable amount of water and avoid slippery paths.' },
    clear: { tool: 'Cutlass', purpose: 'Clear vegetation and cut small stems when appropriate.', safety: 'Only use under close adult supervision; carry the blade pointed down and away from people.' },
    level: { tool: 'Rake', purpose: 'Gather leaves and level the soil surface.', safety: 'Inspect the handle and tines, and store the rake safely after use.' }
  };
  const current = tasks[task];
  return <GhanaScienceVisual title="The Farm Tool Engineer" description="Match a farm task to a suitable tool and review safe working practice." lang="en" caption="Choose tools that match the learner, task and conditions. School-garden activities require teacher supervision.">
    <div className="gh-jhs1-science-interaction"><h4>Choose the farm task</h4><div className="gh-jhs1-science-choices">{Object.keys(tasks).map(key => <Choice key={key} active={task === key} onClick={() => setTask(key)}>{key === 'soil' ? 'Prepare soil' : key === 'carry' ? 'Move a load' : key === 'water' ? 'Water seedlings' : key === 'clear' ? 'Clear vegetation' : 'Gather leaves'}</Choice>)}</div><div className="gh-jhs1-science-readout" aria-live="polite"><strong>Suitable tool: {current.tool}</strong><p>{current.purpose}</p><p><strong>Safety:</strong> {current.safety}</p></div></div>
    <div className="gh-jhs1-science-readout"><strong>Common farm tools</strong><p>Tools include a hoe, wheelbarrow, watering can, cutlass and rake. Each tool is designed for a different task.</p></div>
    <div className="gh-jhs1-science-readout"><strong>Simple machines on the farm</strong><p>A wheelbarrow combines a wheel-and-axle with a lever to help move a load. A shovel can act as a lever when lifting soil.</p></div>
  </GhanaScienceVisual>;
};

export const GhanaJhs2ForcesEnergyVisual: React.FC<Props> = ({ missionId }) => {
  if (missionId === 'gh-jhs2-science-energy-sources-heat') return <EnergyPathfinder />;
  if (missionId === 'gh-jhs2-science-electricity-electronics') return <ElectricityNetwork />;
  if (missionId === 'gh-jhs2-science-energy-conservation-impact') return <EnergySteward />;
  if (missionId === 'gh-jhs2-science-magnetism-force-machines') return <MagnetismMotion />;
  if (missionId === 'gh-jhs2-science-agricultural-tools') return <FarmToolEngineer />;
  return null;
};

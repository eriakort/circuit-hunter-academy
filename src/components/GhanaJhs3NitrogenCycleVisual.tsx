import React, { useState } from 'react';
import { GhanaScienceVisual } from './GhanaScienceVisual';

type Process = { id: string; name: string; location: string; explanation: string; outcome: string };

const PROCESSES: Process[] = [
  { id: 'fixation', name: 'Nitrogen fixation', location: 'Atmosphere → soil', explanation: 'Nitrogen-fixing bacteria convert nitrogen gas (N₂) into ammonia or ammonium compounds. Some live freely in soil; others live in root nodules of leguminous plants such as beans and groundnuts.', outcome: 'Nitrogen enters the soil in a form that can be changed into compounds plants can use.' },
  { id: 'nitrification', name: 'Nitrification', location: 'Soil', explanation: 'Nitrifying bacteria convert ammonium into nitrites and then nitrates. These nitrogen compounds can be absorbed by plant roots.', outcome: 'Nitrate becomes available in the soil for plant uptake.' },
  { id: 'assimilation', name: 'Assimilation', location: 'Soil → plants → animals', explanation: 'Plants absorb nitrate or ammonium through their roots and use the nitrogen to build proteins and other molecules. Animals obtain nitrogen by eating plants or other animals.', outcome: 'Nitrogen becomes part of living organisms.' },
  { id: 'ammonification', name: 'Ammonification', location: 'Dead matter and waste → soil', explanation: 'Decomposers break down waste and dead organisms, returning organic nitrogen to the soil as ammonia or ammonium.', outcome: 'Nitrogen in organic matter returns to the soil.' },
  { id: 'denitrification', name: 'Denitrification', location: 'Soil → atmosphere', explanation: 'Denitrifying bacteria convert nitrates into nitrogen gas, which returns to the atmosphere. This often happens in low-oxygen soil conditions.', outcome: 'Nitrogen returns to the atmosphere and the cycle continues.' }
];

const Choice = ({ active, children, onClick }: { active: boolean; children: React.ReactNode; onClick: () => void }) => (
  <button type="button" className={`gh-jhs1-science-choice${active ? ' is-active' : ''}`} aria-pressed={active} onClick={onClick}>{children}</button>
);

export const GhanaJhs3NitrogenCycleVisual: React.FC = () => {
  const [selected, setSelected] = useState('fixation');
  const process = PROCESSES.find(item => item.id === selected) ?? PROCESSES[0];
  return (
    <GhanaScienceVisual
      title="The Nitrogen Cycle Guardian"
      description="Trace how nitrogen moves between the atmosphere, soil, plants, animals and decomposers."
      lang="en"
      caption="The diagram is a simplified model. Several processes can occur at the same time, and real soil ecosystems contain many organisms."
    >
      <div className="gh-jhs1-science-interaction">
        <h4>Explore each stage of the nitrogen cycle</h4>
        <div className="gh-jhs1-science-choices">
          {PROCESSES.map(item => <Choice key={item.id} active={selected === item.id} onClick={() => setSelected(item.id)}>{item.name}</Choice>)}
        </div>
        <div className="gh-jhs1-science-readout" aria-live="polite">
          <strong>{process.name}</strong>
          <p><b>Where nitrogen moves:</b> {process.location}</p>
          <p>{process.explanation}</p>
          <p><b>Result:</b> {process.outcome}</p>
        </div>
      </div>
      <div className="gh-jhs1-science-interaction">
        <h4>Follow the cycle</h4>
        <div className="gh-jhs1-science-readout">
          <div role="img" aria-label="Nitrogen cycle: atmospheric nitrogen is fixed into soil compounds, nitrified into nitrates, assimilated by plants and animals, returned by decomposers through ammonification, and returned to the atmosphere by denitrification." style={{ display: 'grid', gap: '0.45rem', textAlign: 'center' }}>
            <div style={{ padding: '0.55rem', borderRadius: '0.5rem', background: 'rgba(123, 223, 242, 0.16)' }}><b>Atmosphere</b><br />Nitrogen gas (N₂)</div>
            <div aria-hidden="true">↓ Nitrogen fixation</div>
            <div style={{ padding: '0.55rem', borderRadius: '0.5rem', background: 'rgba(101, 169, 108, 0.16)' }}><b>Soil</b><br />Ammonium → nitrites → nitrates</div>
            <div aria-hidden="true">↓ Assimilation through plant roots</div>
            <div style={{ padding: '0.55rem', borderRadius: '0.5rem', background: 'rgba(255, 209, 102, 0.16)' }}><b>Plants → animals</b><br />Nitrogen in living tissues</div>
            <div aria-hidden="true">↓ Waste and dead organisms</div>
            <div style={{ padding: '0.55rem', borderRadius: '0.5rem', background: 'rgba(237, 139, 54, 0.16)' }}><b>Decomposers</b><br />Ammonification returns nitrogen to soil</div>
            <div aria-hidden="true">↓ Denitrification</div>
            <div style={{ padding: '0.55rem', borderRadius: '0.5rem', background: 'rgba(123, 223, 242, 0.16)' }}><b>Atmosphere</b><br />Nitrogen gas (N₂)</div>
          </div>
          <p><b>Remember:</b> nitrogen-fixing bacteria help make atmospheric nitrogen available to living things. Denitrifying bacteria return nitrogen gas to the atmosphere.</p>
        </div>
      </div>
      <div className="gh-jhs1-science-interaction">
        <h4>Protect soil fertility</h4>
        <div className="gh-jhs1-science-readout">
          <p><b>Legume crop rotation:</b> beans and groundnuts can support nitrogen-fixing bacteria in root nodules.</p>
          <p><b>Protect soil organisms:</b> avoid unnecessary bush burning and maintain organic matter.</p>
          <p><b>Reduce nutrient loss:</b> manage fertiliser carefully and reduce soil erosion and nitrate leaching.</p>
        </div>
      </div>
    </GhanaScienceVisual>
  );
};

import React, { useState } from 'react';
import { GhanaScienceVisual } from './GhanaScienceVisual';

const Choice = ({ active, children, onClick }: { active: boolean; children: React.ReactNode; onClick: () => void }) => (
  <button type="button" className={`gh-jhs1-science-choice${active ? ' is-active' : ''}`} aria-pressed={active} onClick={onClick}>{children}</button>
);

const STAGES = [
  { id: 'fixation', title: '1. Nitrogen fixation', detail: 'Nitrogen-fixing bacteria in soil and root nodules convert nitrogen gas (N₂) into ammonia or ammonium compounds. Lightning and industrial processes can also fix nitrogen.', location: 'Atmosphere → soil', colour: '#75b9e7' },
  { id: 'nitrification', title: '2. Nitrification', detail: 'Nitrifying soil bacteria convert ammonium into nitrites and then nitrates, which plant roots can take up.', location: 'Soil bacteria', colour: '#a78bfa' },
  { id: 'assimilation', title: '3. Assimilation', detail: 'Plants absorb nitrate or ammonium through their roots and use the nitrogen to build proteins and other molecules. Animals obtain nitrogen by eating plants or other animals.', location: 'Soil → plants → animals', colour: '#65b879' },
  { id: 'ammonification', title: '4. Ammonification', detail: 'Decomposers break down nitrogen-containing waste and dead organisms, returning nitrogen to the soil as ammonia or ammonium.', location: 'Dead matter and waste → soil', colour: '#d5a43b' },
  { id: 'denitrification', title: '5. Denitrification', detail: 'Denitrifying bacteria convert nitrates into nitrogen gas, returning nitrogen to the atmosphere. This completes an important pathway in the cycle.', location: 'Soil → atmosphere', colour: '#e58a68' }
];

const NitrogenCycleExplorer: React.FC = () => {
  const [selected, setSelected] = useState('fixation');
  const stage = STAGES.find(item => item.id === selected) ?? STAGES[0];
  return (
    <GhanaScienceVisual
      title="The Nitrogen Cycle Guardian"
      description="Trace nitrogen through the atmosphere, soil, plants, animals and decomposers."
      lang="en"
      caption="Nitrogen is recycled through several pathways. The arrows show a simplified teaching model; real soil systems contain many interacting organisms and chemical forms."
    >
      <svg viewBox="0 0 320 190" role="img" aria-label="Simplified nitrogen cycle: atmospheric nitrogen, soil bacteria, plants, animals and decomposers return nitrogen to the soil and air">
        <defs><marker id="nitrogen-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0 0L6 3L0 6" fill="#4b9bc5"/></marker></defs>
        <rect x="105" y="5" width="110" height="34" rx="10" fill="#d8edf8" stroke="#397da2" strokeWidth="2"/>
        <text x="160" y="26" textAnchor="middle" fontSize="12" fill="#173b35">Atmosphere · N₂</text>
        <rect x="8" y="76" width="92" height="40" rx="9" fill="#e4d9f7" stroke="#8063b4" strokeWidth="2"/>
        <text x="54" y="92" textAnchor="middle" fontSize="10" fill="#30224a">Soil</text><text x="54" y="105" textAnchor="middle" fontSize="9" fill="#30224a">bacteria</text>
        <rect x="116" y="76" width="88" height="40" rx="9" fill="#d9f0d8" stroke="#4d9655" strokeWidth="2"/>
        <text x="160" y="100" textAnchor="middle" fontSize="11" fill="#173b35">Plants</text>
        <rect x="220" y="76" width="92" height="40" rx="9" fill="#f7e7bd" stroke="#ad8432" strokeWidth="2"/>
        <text x="266" y="100" textAnchor="middle" fontSize="11" fill="#493817">Animals</text>
        <rect x="105" y="145" width="110" height="36" rx="9" fill="#f6dfd2" stroke="#b76e4e" strokeWidth="2"/>
        <text x="160" y="167" textAnchor="middle" fontSize="11" fill="#4b2b1e">Decomposers</text>
        <g fill="none" stroke="#4b9bc5" strokeWidth="2" markerEnd="url(#nitrogen-arrow)">
          <path d="M120 39Q80 48 58 72"/><path d="M100 96H112"/><path d="M204 96H216"/>
          <path d="M266 118Q250 155 220 160"/><path d="M110 163Q62 148 48 120"/>
          <path d="M160 144V120"/><path d="M205 76Q236 43 205 31"/>
        </g>
        <g fill="currentColor" fontSize="8"><text x="22" y="54">Fixation</text><text x="103" y="67">Nitrification</text><text x="211" y="66">Assimilation</text><text x="220" y="139">Waste and death</text><text x="15" y="140">Denitrification</text></g>
      </svg>
      <div className="gh-jhs1-science-interaction">
        <h4>Explore each nitrogen process</h4>
        <div className="gh-jhs1-science-choices">
          {STAGES.map(item => <Choice key={item.id} active={selected === item.id} onClick={() => setSelected(item.id)}>{item.title}</Choice>)}
        </div>
        <div className="gh-jhs1-science-readout" aria-live="polite">
          <strong>{stage.title}</strong>
          <p>{stage.detail}</p>
          <p><b>Where does nitrogen move?</b> {stage.location}</p>
        </div>
      </div>
      <div className="gh-jhs1-science-interaction">
        <h4>Protect nitrogen in Ghanaian soils</h4>
        <div className="gh-jhs1-science-readout">
          <p><b>Legume rotation:</b> beans and groundnuts can host nitrogen-fixing bacteria in root nodules, adding usable nitrogen to the soil and supporting soil fertility.</p>
          <p><b>Protect soil life:</b> avoid unnecessary bush burning and protect organic matter and soil organisms.</p>
          <p><b>Reduce nutrient loss:</b> maintain ground cover and use fertilisers responsibly to reduce nitrate leaching and runoff.</p>
          <p><b>Remember:</b> plants absorb nitrogen mainly as nitrate or ammonium compounds, not directly as nitrogen gas from the air.</p>
        </div>
      </div>
    </GhanaScienceVisual>
  );
};

export const GhanaJhs3CyclesVisual: React.FC<{ missionId: string }> = ({ missionId }) =>
  missionId === 'gh-jhs3-science-nitrogen-cycle' ? <NitrogenCycleExplorer /> : null;

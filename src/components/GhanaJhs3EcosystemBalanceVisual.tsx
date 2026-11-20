import React, { useState } from 'react';
import { GhanaScienceVisual } from './GhanaScienceVisual';

type Disturbance = 'grass' | 'grasshopper' | 'lizard';

const DISTURBANCES: Record<Disturbance, { label: string; change: string; effects: string[]; lesson: string }> = {
  grass: {
    label: 'Fewer grass plants',
    change: 'A drought or habitat damage reduces the producer population.',
    effects: ['Grasshoppers have less food, so their population may fall.', 'Lizards may then have fewer grasshoppers to eat.', 'Hawks may be affected as prey becomes less available.'],
    lesson: 'A change at the start of a food chain can affect several populations.'
  },
  grasshopper: {
    label: 'Fewer grasshoppers',
    change: 'A pesticide or other disturbance reduces the primary consumer population.',
    effects: ['Grass may increase because fewer grasshoppers eat it.', 'Lizards have less food and may decrease or switch prey.', 'Hawks may also be affected if lizards become less available.'],
    lesson: 'Removing one consumer can change both the populations it feeds on and the predators that depend on it.'
  },
  lizard: {
    label: 'Fewer lizards',
    change: 'Habitat loss or hunting reduces the secondary consumer population.',
    effects: ['Grasshoppers may increase because fewer lizards eat them.', 'More grasshoppers may eat more grass.', 'Hawks may have less lizard prey and may hunt other animals.'],
    lesson: 'Predators help regulate prey populations; food webs contain several connected pathways.'
  }
};

const Choice = ({ active, children, onClick }: { active: boolean; children: React.ReactNode; onClick: () => void }) => (
  <button type="button" className={`gh-jhs1-science-choice${active ? ' is-active' : ''}`} aria-pressed={active} onClick={onClick}>{children}</button>
);

export const GhanaJhs3EcosystemBalanceVisual: React.FC = () => {
  const [disturbance, setDisturbance] = useState<Disturbance>('grasshopper');
  const selected = DISTURBANCES[disturbance];

  return (
    <GhanaScienceVisual
      title="The Ecosystem Balance Explorer"
      description="Explore how living things depend on one another and how a change in one population can affect a whole food web."
      lang="en"
      caption="This simplified grassland food web is a learning model. Real ecosystems contain many more species and feeding relationships."
    >
      <div className="gh-jhs1-science-interaction">
        <h4>1. Build a food-chain pathway</h4>
        <p>Energy moves from the food source to the organism that eats it. The arrows point in the direction of energy transfer.</p>
        <div className="gh-jhs1-science-readout">
          <svg viewBox="0 0 340 150" role="img" aria-label="Food chain: sunlight to grass to grasshopper to lizard to hawk">
            <g stroke="currentColor" strokeWidth="1.5" fill="none">
              <path d="M56 62 H83 M122 62 H149 M188 62 H215 M254 62 H281" />
              <path d="M77 56 L83 62 L77 68 M143 56 L149 62 L143 68 M209 56 L215 62 L209 68 M275 56 L281 62 L275 68" />
            </g>
            <g fontSize="11" textAnchor="middle" fill="currentColor">
              <rect x="4" y="39" width="52" height="46" rx="8" fill="#fff1bf" stroke="#a77919"/>
              <text x="30" y="58" fill="#654a12">SUN</text><text x="30" y="72" fill="#654a12">light</text>
              <rect x="83" y="39" width="39" height="46" rx="8" fill="#dcefe7" stroke="#287653"/>
              <text x="102" y="66" fill="#174b36">Grass</text>
              <rect x="149" y="39" width="39" height="46" rx="8" fill="#f4e5c9" stroke="#9b7134"/>
              <text x="168" y="66" fill="#654a12">Insect</text>
              <rect x="215" y="39" width="39" height="46" rx="8" fill="#e4ebf7" stroke="#405f9b"/>
              <text x="234" y="66" fill="#263e69">Lizard</text>
              <rect x="281" y="39" width="55" height="46" rx="8" fill="#f5e3e3" stroke="#a94350"/>
              <text x="308" y="66" fill="#762d36">Hawk</text>
              <text x="170" y="112" fontSize="10">Producer → primary consumer → secondary consumer → predator</text>
              <text x="170" y="130" fontSize="10">Decomposers recycle nutrients from dead organisms and waste</text>
            </g>
          </svg>
          <p><b>Producer:</b> grass makes food using light energy. <b>Consumers:</b> grasshoppers eat plants, lizards eat insects and hawks may eat lizards.</p>
        </div>
      </div>
      <div className="gh-jhs1-science-interaction">
        <h4>2. Disturb the food web</h4>
        <p>Choose a population that becomes smaller. Predict how the other populations may respond.</p>
        <div className="gh-jhs1-science-choices">
          {(Object.keys(DISTURBANCES) as Disturbance[]).map(key => (
            <Choice key={key} active={disturbance === key} onClick={() => setDisturbance(key)}>{DISTURBANCES[key].label}</Choice>
          ))}
        </div>
        <div className="gh-jhs1-science-readout" aria-live="polite">
          <strong>{selected.label}</strong>
          <p>{selected.change}</p>
          <ul>{selected.effects.map(effect => <li key={effect}>{effect}</li>)}</ul>
          <p><b>What this teaches:</b> {selected.lesson}</p>
        </div>
      </div>
      <div className="gh-jhs1-science-interaction">
        <h4>3. Living and non-living components</h4>
        <div className="gh-jhs1-science-readout">
          <p><b>Biotic (living):</b> plants, animals, fungi and microorganisms.</p>
          <p><b>Abiotic (non-living):</b> sunlight, water, air, soil and temperature.</p>
          <p><b>Habitat:</b> the place where an organism lives. <b>Ecosystem:</b> the living community, non-living environment and the interactions between them.</p>
          <p><b>Decomposers:</b> fungi and bacteria break down dead material and return nutrients to the environment.</p>
        </div>
      </div>
      <div className="gh-jhs1-science-interaction">
        <h4>4. Protect ecosystem balance</h4>
        <div className="gh-jhs1-science-readout">
          <p>Droughts, floods and fires can change habitats. Human activities such as pollution, bush burning, overhunting, mining and careless pesticide use can also disrupt food webs.</p>
          <p>Protect habitats, avoid pollution, use farm chemicals carefully and practise sustainable farming. Every species has a role in the ecosystem.</p>
        </div>
      </div>
    </GhanaScienceVisual>
  );
};

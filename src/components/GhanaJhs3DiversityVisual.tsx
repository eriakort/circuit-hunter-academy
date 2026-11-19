import React, { useState } from 'react';
import { GhanaScienceVisual } from './GhanaScienceVisual';

type Props = { missionId: string };
type Compound = { name: string; formula: string; elements: string[]; ratio: string; model: string; note: string };

const COMPOUNDS: Record<string, Compound> = {
  water: {
    name: 'Water', formula: 'H₂O', elements: ['Hydrogen', 'Oxygen'], ratio: '2 hydrogen atoms : 1 oxygen atom',
    model: 'H — O — H', note: 'Each water molecule contains two hydrogen atoms chemically bonded to one oxygen atom.'
  },
  carbonDioxide: {
    name: 'Carbon dioxide', formula: 'CO₂', elements: ['Carbon', 'Oxygen'], ratio: '1 carbon atom : 2 oxygen atoms',
    model: 'O = C = O', note: 'The small 2 applies to oxygen: one carbon atom is joined to two oxygen atoms in each molecule.'
  },
  sodiumChloride: {
    name: 'Sodium chloride', formula: 'NaCl', elements: ['Sodium', 'Chlorine'], ratio: '1 sodium ion : 1 chloride ion',
    model: 'Na⁺  Cl⁻  Na⁺  Cl⁻', note: 'Sodium chloride is ionic. Its solid is a repeating lattice of oppositely charged ions, not separate NaCl molecules.'
  },
  magnesiumOxide: {
    name: 'Magnesium oxide', formula: 'MgO', elements: ['Magnesium', 'Oxygen'], ratio: '1 magnesium ion : 1 oxide ion',
    model: 'Mg²⁺  O²⁻  Mg²⁺  O²⁻', note: 'Magnesium and oxygen form oppositely charged ions in a repeating ionic lattice.'
  }
};

const Choice = ({ active, children, onClick }: { active: boolean; children: React.ReactNode; onClick: () => void }) => (
  <button type="button" className={`gh-jhs1-science-choice${active ? ' is-active' : ''}`} aria-pressed={active} onClick={onClick}>{children}</button>
);

const CompoundExplorer: React.FC = () => {
  const [selected, setSelected] = useState('water');
  const compound = COMPOUNDS[selected];
  return (
    <GhanaScienceVisual
      title="The Binary Compound Chemist"
      description="Read a chemical formula, identify its elements and compare the particle ratios in familiar compounds."
      lang="en"
      caption="A binary compound contains two different elements chemically combined in a fixed ratio. Models are simplified representations of particles."
    >
      <div className="gh-jhs1-science-interaction">
        <h4>Choose a compound to investigate</h4>
        <div className="gh-jhs1-science-choices">
          {Object.entries(COMPOUNDS).map(([key, item]) => (
            <Choice key={key} active={selected === key} onClick={() => setSelected(key)}>{item.name} · {item.formula}</Choice>
          ))}
        </div>
        <div className="gh-jhs1-science-readout" aria-live="polite">
          <strong>{compound.name} · {compound.formula}</strong>
          <p><b>Elements present:</b> {compound.elements.join(' and ')}</p>
          <p><b>Particle ratio:</b> {compound.ratio}</p>
          <p><b>Simplified particle model:</b></p>
          <div role="img" aria-label={compound.model} style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.08em', padding: '0.65rem', textAlign: 'center', borderRadius: '0.5rem', background: 'rgba(123, 223, 242, 0.12)' }}>{compound.model}</div>
          <p>{compound.note}</p>
        </div>
      </div>
      <div className="gh-jhs1-science-interaction">
        <h4>How to read a formula</h4>
        <div className="gh-jhs1-science-readout" aria-live="polite">
          <p>Element symbols begin with a capital letter. A second letter, if present, is lowercase: Na means sodium and Cl means chlorine.</p>
          <p>A small number after a symbol tells how many atoms of that element are represented. If there is no small number, the count is one.</p>
          <p>For ionic compounds, the formula shows the simplest whole-number ratio of ions in the lattice.</p>
        </div>
      </div>
    </GhanaScienceVisual>
  );
};

export const GhanaJhs3DiversityVisual: React.FC<Props> = ({ missionId }) => {
  if (missionId === 'gh-jhs3-science-binary-compounds') return <CompoundExplorer />;
  return null;
};

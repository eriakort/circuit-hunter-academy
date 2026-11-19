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

const SAMPLES = [
  { id: 'lemon', name: 'Lemon juice', ph: 'About 2', value: 2, type: 'Acidic', colour: '#e85b45', litmus: 'Blue litmus turns red.' , reason: 'Citric acid makes lemon juice acidic.' },
  { id: 'vinegar', name: 'Vinegar', ph: 'About 3', value: 3, type: 'Acidic', colour: '#ed8b36', litmus: 'Blue litmus turns red.', reason: 'Vinegar is a water solution containing ethanoic acid.' },
  { id: 'water', name: 'Pure water', ph: 'About 7', value: 7, type: 'Neutral', colour: '#55a9dc', litmus: 'Neither red nor blue litmus changes colour.', reason: 'Pure water is neutral at about room temperature.' },
  { id: 'baking', name: 'Baking soda solution', ph: 'About 8–9', value: 8.5, type: 'Alkaline', colour: '#65a96c', litmus: 'Red litmus turns blue.', reason: 'A solution of sodium hydrogencarbonate is mildly alkaline.' },
  { id: 'soap', name: 'Soapy water', ph: 'About 9–10', value: 9.5, type: 'Alkaline', colour: '#8069bd', litmus: 'Red litmus turns blue.', reason: 'Many soap solutions are alkaline; the exact pH depends on the product and dilution.' }
];

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
          <p>Many binary compounds, such as sodium chloride and magnesium oxide, form a repeating ionic lattice: a regular arrangement of positive and negative ions.</p>
        </div>
      </div>
    </GhanaScienceVisual>
  );
};

const PHExplorer: React.FC = () => {
  const [selected, setSelected] = useState('lemon');
  const sample = SAMPLES.find(item => item.id === selected) ?? SAMPLES[0];
  return (
    <GhanaScienceVisual
      title="The pH Scale Guardian"
      description="Investigate familiar aqueous solutions, read the pH scale and predict what litmus paper will show."
      lang="en"
      caption="These are approximate teaching examples, not laboratory measurements. Never taste, mix or directly test household products."
    >
      <div className="gh-jhs1-science-interaction">
        <h4>Choose a sample to investigate</h4>
        <div className="gh-jhs1-science-choices">
          {SAMPLES.map(item => (
            <Choice key={item.id} active={selected === item.id} onClick={() => setSelected(item.id)}>{item.name}</Choice>
          ))}
        </div>
        <div className="gh-jhs1-science-readout" aria-live="polite">
          <strong>{sample.name} · pH {sample.ph}</strong>
          <p><b>Classification:</b> {sample.type}</p>
          <p><b>Indicator prediction:</b> {sample.litmus}</p>
          <p>{sample.reason}</p>
          <div role="img" aria-label={`Illustrative universal indicator colour for ${sample.name}: ${sample.type}`} style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', padding: '0.7rem', borderRadius: '0.6rem', background: 'rgba(123, 223, 242, 0.10)' }}>
            <span aria-hidden="true" style={{ width: '2rem', height: '2rem', borderRadius: '50%', background: sample.colour, border: '2px solid currentColor', flexShrink: 0 }} />
            <span><b>Universal indicator guide:</b> illustrative colour for an {sample.type.toLowerCase()} solution</span>
          </div>
        </div>
      </div>
      <div className="gh-jhs1-science-interaction">
        <h4>Explore the pH scale</h4>
        <div className="gh-jhs1-science-readout">
          <div role="img" aria-label="pH scale from 0 to 14: acidic below 7, neutral at 7, alkaline above 7" style={{ display: 'grid', gridTemplateColumns: 'repeat(15, minmax(0, 1fr))', gap: '2px', margin: '0.5rem 0' }}>
            {Array.from({ length: 15 }, (_, value) => (
              <div key={value} style={{ textAlign: 'center', fontSize: '0.72rem', fontWeight: value === 7 ? 800 : 600, padding: '0.35rem 0', borderRadius: '0.2rem', background: value < 7 ? '#e97855' : value === 7 ? '#62a9d5' : '#6cab78', color: '#101820', outline: value === Math.round(sample.value) ? '3px solid currentColor' : 'none' }}>{value}</div>
            ))}
          </div>
          <p><b>0–6:</b> acidic · <b>7:</b> neutral · <b>8–14:</b> alkaline.</p>
          <p>A lower pH means a more acidic solution; a higher pH means a more alkaline solution. pH does not, by itself, tell you how concentrated an acid or alkali is.</p>
          <p>Blue litmus turns red in acid. Red litmus turns blue in alkali. Universal indicator shows a range of colours across the pH scale.</p>
        </div>
      </div>
      <div className="gh-jhs1-science-interaction">
        <h4>How can a salt form?</h4>
        <div className="gh-jhs1-science-readout" aria-live="polite">
          <p><b>Neutralisation:</b> acid + base → salt + water.</p>
          <p>Example: hydrochloric acid + sodium hydroxide → sodium chloride + water.</p>
          <p>In symbols: HCl + NaOH → NaCl + H₂O.</p>
          <p>The equation is a classroom model of a reaction. Do not try this reaction or handle acids and alkalis without a trained teacher, approved equipment and appropriate protective procedures.</p>
        </div>
      </div>
    </GhanaScienceVisual>
  );
};

export const GhanaJhs3DiversityVisual: React.FC<Props> = ({ missionId }) => {
  if (missionId === 'gh-jhs3-science-binary-compounds') return <CompoundExplorer />;
  if (missionId === 'gh-jhs3-science-acids-bases-salts') return <PHExplorer />;
  return null;
};

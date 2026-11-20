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


const BOND_TYPES = [
  {
    id: 'ionic', name: 'Ionic bonding', example: 'Sodium chloride (NaCl)',
    summary: 'Electrons are transferred from a metal atom to a non-metal atom. The resulting positive and negative ions attract.',
    detail: 'Sodium transfers one outer electron to chlorine. This forms Na⁺ and Cl⁻ ions, which attract and arrange in a giant ionic lattice.',
    model: 'Na  →  e⁻  →  Cl\nNa⁺       Cl⁻',
    electronAction: 'Transferred',
    structure: 'A repeating lattice of positive and negative ions'
  },
  {
    id: 'covalent', name: 'Covalent bonding', example: 'Water (H₂O)',
    summary: 'Non-metal atoms share pairs of electrons. The shared electrons attract the nuclei of the bonded atoms.',
    detail: 'In a water molecule, oxygen shares an electron pair with each of two hydrogen atoms. The simplified model shows two O–H covalent bonds.',
    model: 'H — O — H',
    electronAction: 'Shared in pairs',
    structure: 'Small molecules in water; other covalent substances can form giant networks'
  },
  {
    id: 'metallic', name: 'Metallic bonding', example: 'Copper (Cu)',
    summary: 'Positive metal ions are attracted to delocalised electrons that can move throughout the metallic structure.',
    detail: 'The mobile delocalised electrons help metals conduct electricity and heat. Layers of metal ions can also shift while metallic attraction remains.',
    model: 'Cu⁺   Cu⁺   Cu⁺\n e⁻  e⁻  e⁻\nCu⁺   Cu⁺   Cu⁺',
    electronAction: 'Delocalised and mobile',
    structure: 'Positive metal ions surrounded by delocalised electrons'
  }
];

const BondingExplorer: React.FC = () => {
  const [selected, setSelected] = useState('ionic');
  const bond = BOND_TYPES.find(item => item.id === selected) ?? BOND_TYPES[0];
  return (
    <GhanaScienceVisual
      title="The Chemical Bonding Architect"
      description="Compare how atoms and ions are held together in ionic, covalent and metallic bonding."
      lang="en"
      caption="These diagrams are simplified models. They show the key idea for each bond type, not exact particle sizes, distances or three-dimensional structures."
    >
      <div className="gh-jhs1-science-interaction">
        <h4>Choose a bonding model</h4>
        <div className="gh-jhs1-science-choices">
          {BOND_TYPES.map(item => (
            <Choice key={item.id} active={selected === item.id} onClick={() => setSelected(item.id)}>{item.name} · {item.example} — {item.electronAction}</Choice>
          ))}
        </div>
        <div className="gh-jhs1-science-readout" aria-live="polite">
          <strong>{bond.name} · {bond.example}</strong>
          <p>{bond.summary}</p>
          <p><b>What happens to the electrons?</b> {bond.electronAction}.</p>
          <pre role="img" aria-label={bond.name + ' simplified particle model'} style={{ whiteSpace: 'pre-wrap', textAlign: 'center', fontSize: '1.05rem', fontWeight: 700, padding: '0.8rem', borderRadius: '0.6rem', background: 'rgba(123, 223, 242, 0.12)' }}>{bond.model}</pre>
          <p>{bond.detail}</p>
          <p><b>Structure:</b> {bond.structure}.</p>
        </div>
      </div>
      <div className="gh-jhs1-science-interaction">
        <h4>Compare the three types</h4>
        <div className="gh-jhs1-science-readout" aria-live="polite">
          <p><b>Ionic:</b> electron transfer creates oppositely charged ions; electrostatic attraction holds the lattice together.</p>
          <p><b>Covalent:</b> non-metal atoms share pairs of electrons.</p>
          <p><b>Metallic:</b> positive metal ions are attracted to mobile, delocalised electrons.</p>
          <p>Remember: ionic bonding is not the same as covalent sharing, and metallic bonding is not simply electron transfer.</p>
        </div>
      </div>
    </GhanaScienceVisual>
  );
};


const PLANT_CELLS = [
  { id: 'epidermal', name: 'Epidermal cells', structure: 'Closely packed cells form the plant surface. A waxy cuticle often covers the epidermis.', function: 'Protect the plant and help reduce water loss. Root hair cells absorb water and mineral ions.', clue: 'Protective covering', model: '▥ ▥ ▥ ▥ ▥' },
  { id: 'guard', name: 'Guard cells', structure: 'A pair of curved cells surrounds a pore called a stoma. Their water content changes their shape.', function: 'Open and close the stoma to regulate gas exchange and water vapour loss.', clue: 'Stomatal control', model: '(  •  )' },
  { id: 'xylem', name: 'Xylem vessels', structure: 'Hollow, tube-like vessels are joined end to end. Thickened walls help support the plant.', function: 'Transport water and dissolved mineral ions from roots through the plant.', clue: 'Water transport', model: '║  ↑  ║' },
  { id: 'cambium', name: 'Cambium cells', structure: 'A thin layer of dividing cells in many dicotyledonous stems and roots.', function: 'Produce new vascular tissues and help stems and roots grow thicker.', clue: 'Growth in thickness', model: '│ · · │' }
];

const PlantCellExplorer: React.FC = () => {
  const [selected, setSelected] = useState('epidermal');
  const cell = PLANT_CELLS.find(item => item.id === selected) ?? PLANT_CELLS[0];
  return (
    <GhanaScienceVisual
      title="The Plant Cell Specialist"
      description="Explore how specialised plant cells are adapted to protect, regulate, transport and support growth."
      lang="en"
      caption="These are simplified teaching models. Real plant cells have more structures and vary in shape and arrangement."
    >
      <div className="gh-jhs1-science-interaction">
        <h4>Choose a specialised plant cell</h4>
        <div className="gh-jhs1-science-choices">
          {PLANT_CELLS.map(item => (
            <Choice key={item.id} active={selected === item.id} onClick={() => setSelected(item.id)}>{item.name} · {item.clue}</Choice>
          ))}
        </div>
        <div className="gh-jhs1-science-readout" aria-live="polite">
          <strong>{cell.name}</strong>
          <pre role="img" aria-label={cell.name + ' simplified structure model'} style={{ whiteSpace: 'pre-wrap', textAlign: 'center', fontSize: '1.2rem', fontWeight: 700, padding: '0.8rem', borderRadius: '0.6rem', background: 'rgba(123, 223, 242, 0.12)' }}>{cell.model}</pre>
          <p><b>Structure:</b> {cell.structure}</p>
          <p><b>Function:</b> {cell.function}</p>
        </div>
      </div>
      <div className="gh-jhs1-science-interaction">
        <h4>Follow the plant's transport and control</h4>
        <div className="gh-jhs1-science-readout" aria-live="polite">
          <p><b>Roots → xylem → leaves:</b> water and dissolved mineral ions move upwards through xylem vessels.</p>
          <p><b>Leaf surface:</b> epidermal cells protect the leaf, while guard cells adjust the opening of stomata.</p>
          <p><b>Stem and root growth:</b> cambium divides to make new vascular tissues and contributes to growth in thickness.</p>
          <p><b>Differentiation</b> is the process by which cells develop specialised structures and functions.</p>
        </div>
      </div>
    </GhanaScienceVisual>
  );
};


const HUMAN_CELLS = [
  { id: 'nerve', name: 'Nerve cell (neurone)', clue: 'Transmit signals', structure: 'A long axon carries electrical impulses over a distance. Branched ends connect with other cells.', function: 'Transmit electrical signals so the brain, spinal cord and nerves can coordinate body activities.', model: '  branches\n   \\ | /\n [cell body]══════════ axon →' },
  { id: 'red-blood', name: 'Red blood cell', clue: 'Carry oxygen', structure: 'A flexible, biconcave disc contains haemoglobin. A mature human red blood cell has no nucleus.', function: 'Carry oxygen from the lungs to body tissues using haemoglobin.', model: '   ______\n /        \\\n|  ____    |\n \\________/' },
  { id: 'muscle', name: 'Muscle cell', clue: 'Produce movement', structure: 'Elongated cells contain contractile protein fibres that slide past one another.', function: 'Shorten to generate force, helping move body parts and maintain posture.', model: '||||||||||||||||\n⇐ contract ⇒\n||||||||||||||||' },
  { id: 'sperm', name: 'Sperm cell', clue: 'Deliver genetic material', structure: 'The head contains genetic material; the midpiece has many mitochondria; a tail (flagellum) helps the cell swim.', function: 'Deliver male genetic material to an egg during fertilisation.', model: '  (head)─[midpiece]~~~~ tail' }
];

const HumanCellExplorer: React.FC = () => {
  const [selected, setSelected] = useState('nerve');
  const cell = HUMAN_CELLS.find(item => item.id === selected) ?? HUMAN_CELLS[0];
  return (
    <GhanaScienceVisual
      title="The Human Cell Function Ranger"
      description="Compare specialised human cells and discover how their structures help them perform different jobs."
      lang="en"
      caption="Simplified teaching models: real cells have detailed three-dimensional structures. Cell diagrams are not drawn to scale."
    >
      <div className="gh-jhs1-science-interaction">
        <h4>Choose a specialised human cell</h4>
        <div className="gh-jhs1-science-choices">
          {HUMAN_CELLS.map(item => (
            <Choice key={item.id} active={selected === item.id} onClick={() => setSelected(item.id)}>{item.name} · {item.clue}</Choice>
          ))}
        </div>
        <div className="gh-jhs1-science-readout" aria-live="polite">
          <strong>{cell.name}</strong>
          <pre role="img" aria-label={cell.name + ' simplified structure model'} style={{ whiteSpace: 'pre-wrap', textAlign: 'center', fontSize: '1rem', fontWeight: 700, padding: '0.8rem', borderRadius: '0.6rem', background: 'rgba(123, 223, 242, 0.12)' }}>{cell.model}</pre>
          <p><b>Structure:</b> {cell.structure}</p>
          <p><b>Function:</b> {cell.function}</p>
        </div>
      </div>
      <div className="gh-jhs1-science-interaction">
        <h4>From cells to body systems</h4>
        <div className="gh-jhs1-science-readout" aria-live="polite">
          <p><b>Cells → tissues → organs → organ systems:</b> specialised cells with related functions work together at increasingly larger levels of organisation.</p>
          <p><b>Nerve cells</b> coordinate activities by transmitting signals; <b>red blood cells</b> transport oxygen; <b>muscle cells</b> produce force and movement.</p>
          <p><b>Sperm cells</b> are reproductive cells. Their head, mitochondria-rich midpiece and tail each contribute to their role in fertilisation.</p>
          <p><b>Differentiation</b> is the process by which cells develop specialised structures and functions.</p>
        </div>
      </div>
    </GhanaScienceVisual>
  );
};

export const GhanaJhs3DiversityVisual: React.FC<Props> = ({ missionId }) => {
  if (missionId === 'gh-jhs3-science-binary-compounds') return <CompoundExplorer />;
  if (missionId === 'gh-jhs3-science-acids-bases-salts') return <PHExplorer />;
  if (missionId === 'gh-jhs3-science-chemical-bonding') return <BondingExplorer />;
  if (missionId === 'gh-jhs3-science-specialised-plant-cells') return <PlantCellExplorer />;
  if (missionId === 'gh-jhs3-science-specialised-human-cells') return <HumanCellExplorer />;
  return null;
};

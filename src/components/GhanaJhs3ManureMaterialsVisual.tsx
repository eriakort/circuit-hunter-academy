import React, { useState } from 'react';
import { GhanaScienceVisual } from './GhanaScienceVisual';

type Material = { name: string; group: 'plant' | 'animal' | 'reject' | 'special'; reason: string };
const MATERIALS: Material[] = [
  { name: 'Dry leaves', group: 'plant', reason: 'Plant matter breaks down and adds organic material to soil.' },
  { name: 'Crop residues', group: 'plant', reason: 'Suitable clean stalks and leaves can be composted.' },
  { name: 'Grass cuttings', group: 'plant', reason: 'Fresh green plant matter can contribute moisture and nutrients.' },
  { name: 'Vegetable peels', group: 'plant', reason: 'Clean vegetable scraps are biodegradable plant material.' },
  { name: 'Well-managed cattle dung', group: 'animal', reason: 'Properly treated livestock manure can supply nutrients.' },
  { name: 'Goat and sheep droppings', group: 'animal', reason: 'Livestock droppings can be used after suitable treatment.' },
  { name: 'Poultry litter', group: 'animal', reason: 'Poultry litter needs careful handling and appropriate treatment.' },
  { name: 'Plastic packaging', group: 'reject', reason: 'Plastic does not decompose as compost and contaminates the heap.' },
  { name: 'Broken glass', group: 'reject', reason: 'Glass can cause cuts and does not become compost.' },
  { name: 'Metal cans', group: 'reject', reason: 'Metal is not compostable and should be recycled separately.' },
  { name: 'Human excreta', group: 'special', reason: 'It can carry pathogens and must never be handled as ordinary school compost.' },
  { name: 'Animal carcasses', group: 'special', reason: 'They can carry pathogens and require trained, regulated treatment.' }
];
const GROUPS = [
  { id: 'plant', label: 'Suitable plant materials' },
  { id: 'animal', label: 'Animal manure materials' },
  { id: 'reject', label: 'Remove from compost' },
  { id: 'special', label: 'Specialist treatment only' }
] as const;

export const GhanaJhs3ManureMaterialsVisual: React.FC = () => {
  const [selected, setSelected] = useState(0);
  const [sorted, setSorted] = useState<Record<string, Material['group']>>({});
  const material = MATERIALS[selected];
  const correct = Object.entries(sorted).filter(([name, group]) => MATERIALS.find(item => item.name === name)?.group === group).length;
  const completed = Object.keys(sorted).length;
  return (
    <GhanaScienceVisual
      title="The Manure Materials Sorting Lab"
      description="Identify useful organic materials, remove contaminants and recognise wastes that need specialist treatment."
      lang="en"
      caption="Classroom learning model: only clean, suitable materials and properly treated livestock manure should enter a compost process."
    >
      <div className="gh-jhs1-science-interaction">
        <h4>1. Know the material groups</h4>
        <div className="gh-jhs1-science-readout">
          <p><b>Plant materials:</b> dry leaves, crop residues, grass cuttings and vegetable peels can add organic matter.</p>
          <p><b>Animal manure:</b> cattle dung, goat and sheep droppings, and poultry litter may be used only when properly managed and treated.</p>
          <p><b>Contaminants:</b> plastics, glass and metals must be removed. <b>Specialist wastes:</b> human excreta and animal carcasses can carry pathogens and are not ordinary school-compost materials.</p>
        </div>
      </div>
      <div className="gh-jhs1-science-interaction">
        <h4>2. Sort the materials</h4>
        <p>Select a material, then place it in the best group. Your score updates as you work.</p>
        <div className="gh-jhs1-science-choices">
          {MATERIALS.map((item, index) => (
            <button type="button" key={item.name} className={`gh-jhs1-science-choice${selected === index ? ' is-active' : ''}`} aria-pressed={selected === index} onClick={() => setSelected(index)}>
              {item.name}{sorted[item.name] ? ' ✓' : ''}
            </button>
          ))}
        </div>
        <div className="gh-jhs1-science-readout" aria-live="polite">
          <strong>{material.name}</strong>
          <p>{material.reason}</p>
          <div className="gh-jhs1-science-choices">
            {GROUPS.map(group => (
              <button type="button" key={group.id} className={`gh-jhs1-science-choice${sorted[material.name] === group.id ? ' is-active' : ''}`} aria-pressed={sorted[material.name] === group.id} onClick={() => setSorted(previous => ({ ...previous, [material.name]: group.id }))}>
                {group.label}
              </button>
            ))}
          </div>
          <p><b>Sorting progress:</b> {completed} / {MATERIALS.length} · <b>Correct placements:</b> {correct}</p>
          {completed === MATERIALS.length && <p role="status"><b>Sorting complete!</b> You correctly placed {correct} of {MATERIALS.length} materials.</p>}
        </div>
      </div>
      <div className="gh-jhs1-science-interaction">
        <h4>3. Why does organic matter help soil?</h4>
        <div className="gh-jhs1-science-readout">
          <p>As suitable materials decompose, they form organic matter that can improve soil structure, help soil hold water and support nutrient cycling.</p>
          <p>Compost needs suitable materials, moisture and air. Animal manure must be treated safely and allowed to mature according to agricultural guidance.</p>
        </div>
      </div>
      <div className="gh-jhs1-science-interaction">
        <h4>4. Work safely</h4>
        <div className="gh-jhs1-science-readout">
          <p>Do not touch unknown waste with bare hands. Keep compost away from drinking water and food preparation areas. Use appropriate protective equipment, wash hands after handling materials and ask a trained adult for guidance.</p>
          <p>Never add batteries, chemicals, motor oil, plastics, glass or metal to compost. Never handle human excreta or animal carcasses as ordinary compost.</p>
        </div>
      </div>
    </GhanaScienceVisual>
  );
};

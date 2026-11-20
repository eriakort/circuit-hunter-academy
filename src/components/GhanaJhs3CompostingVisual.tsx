import React, { useState } from 'react';
import { GhanaScienceVisual } from './GhanaScienceVisual';

const STAGES = [
  { title: 'Choose and sort', detail: 'Select clean plant residues and properly managed livestock manure. Remove plastic, glass, metal, treated wood and unknown waste.', check: 'Suitable materials only' },
  { title: 'Build balanced layers', detail: 'Alternate moist green materials, such as fresh trimmings, with dry brown materials, such as dry leaves. Chop bulky pieces so they break down more easily.', check: 'Green and brown layers' },
  { title: 'Add moisture and air', detail: 'Keep the heap as moist as a wrung-out sponge. Turn or mix it periodically so oxygen reaches decomposers.', check: 'Moist, not waterlogged; aerated' },
  { title: 'Allow it to cure', detail: 'Give the material time to mature. Finished compost is dark, crumbly and earthy-smelling, with no recognisable fresh scraps.', check: 'Mature and stable compost' }
] as const;

const CONDITIONS = [
  { id: 'dry', label: 'Heap is dry and dusty', answer: 'Add a little water and mix it through. Decomposer organisms need moisture to remain active.', action: 'Add water gradually' },
  { id: 'wet', label: 'Heap is soggy and smells bad', answer: 'Excess water can block air spaces. Add dry brown material and turn the heap to improve drainage and aeration.', action: 'Add dry material and turn' },
  { id: 'healthy', label: 'Heap is moist and earthy-smelling', answer: 'These are useful signs. Keep checking moisture and allow the compost to cure until it is dark and crumbly.', action: 'Maintain and allow curing' }
] as const;

export const GhanaJhs3CompostingVisual: React.FC = () => {
  const [stage, setStage] = useState(0);
  const [condition, setCondition] = useState<(typeof CONDITIONS)[number]['id']>('dry');
  const current = CONDITIONS.find(item => item.id === condition)!;
  return (
    <GhanaScienceVisual
      title="The Composting Field Lab"
      description="Build a safe composting process, balance the materials and diagnose what a compost heap needs."
      lang="en"
      caption="Learning model: composting speed varies with materials, moisture, temperature, oxygen and management."
    >
      <div className="gh-jhs1-science-interaction">
        <h4>1. Follow the four preparation stages</h4>
        <div className="gh-jhs1-science-choices">
          {STAGES.map((item, index) => (
            <button type="button" key={item.title} className={stage === index ? 'gh-jhs1-science-choice is-active' : 'gh-jhs1-science-choice'} aria-pressed={stage === index} onClick={() => setStage(index)}>
              {index + 1}. {item.title}
            </button>
          ))}
        </div>
        <div className="gh-jhs1-science-readout">
          <p><b>Remember:</b> balance moist green materials with dry brown materials. Keep the heap moist, not waterlogged, and turn it to provide oxygen. Allow finished compost to cure until it is dark, crumbly and earthy-smelling.</p>
        </div>
        <div className="gh-jhs1-science-readout" aria-live="polite">
          <strong>{STAGES[stage].title}</strong>
          <p>{STAGES[stage].detail}</p>
          <p><b>Stage check:</b> {STAGES[stage].check}</p>
        </div>
        <ol>
          {STAGES.map(item => <li key={item.title}>{item.title}</li>)}
        </ol>
      </div>
      <div className="gh-jhs1-science-interaction">
        <h4>2. Diagnose the compost heap</h4>
        <p>Choose the condition you observe and select the action that best supports decomposition.</p>
        <div className="gh-jhs1-science-choices">
          {CONDITIONS.map(item => (
            <button type="button" key={item.id} className={condition === item.id ? 'gh-jhs1-science-choice is-active' : 'gh-jhs1-science-choice'} aria-pressed={condition === item.id} onClick={() => setCondition(item.id)}>
              {item.label}
            </button>
          ))}
        </div>
        <div className="gh-jhs1-science-readout">
          <p><b>Heap too dry:</b> Add water gradually. <b>Heap soggy and smelly:</b> Add dry material and turn to restore air spaces. <b>Moist and earthy:</b> Maintain conditions and allow curing.</p>
        </div>
        <div className="gh-jhs1-science-readout" aria-live="polite">
          <strong>Recommended action: {current.action}</strong>
          <p>{current.answer}</p>
        </div>
      </div>
      <div className="gh-jhs1-science-interaction">
        <h4>3. What does a healthy compost heap need?</h4>
        <div className="gh-jhs1-science-readout">
          <p><b>Suitable materials:</b> clean plant residues and properly treated livestock manure. Keep plastics, glass, metals, batteries and chemical waste out.</p>
          <p><b>Moisture:</b> a wrung-out-sponge feel supports decomposers. Too little water slows decomposition; excess water can reduce oxygen.</p>
          <p><b>Oxygen:</b> turning and mixing introduce air. A compact, waterlogged heap may develop unpleasant smells.</p>
          <p><b>Curing:</b> mature compost is dark, crumbly and earthy-smelling. Time to maturity depends on materials, weather and management.</p>
        </div>
      </div>
      <div className="gh-jhs1-science-interaction">
        <h4>4. Protect people and the environment</h4>
        <div className="gh-jhs1-science-readout">
          <p>Use gloves, cover cuts, wash hands after handling compost and keep the heap away from drinking-water sources and food preparation areas. Ask a trained adult for guidance.</p>
          <p>Never handle human excreta or animal carcasses as ordinary school compost. These can carry pathogens and require trained, regulated treatment. Do not apply fresh manure directly to food crops; follow local agricultural guidance.</p>
        </div>
      </div>
    </GhanaScienceVisual>
  );
};

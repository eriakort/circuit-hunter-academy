import React, { useState } from 'react';
import { GhanaScienceVisual } from './GhanaScienceVisual';

type Animal = 'poultry' | 'ruminants' | 'pigs' | 'fish';
const ANIMALS: Record<Animal, { name: string; needs: string; ingredients: string[]; note: string }> = {
  poultry: {
    name: 'Poultry (chickens)',
    needs: 'A balanced mixture of energy, protein, minerals and vitamins. Chicks, growers and laying hens have different needs.',
    ingredients: ['Maize or another suitable grain — energy', 'Soybean meal or groundnut cake — protein', 'A suitable mineral and vitamin premix'],
    note: 'Use a poultry feed formula designed for the bird’s age and purpose. Chicks and laying hens should not automatically receive the same ration.'
  },
  ruminants: {
    name: 'Cattle, sheep and goats',
    needs: 'Fibrous forage supports rumen function. Additional energy, protein and minerals depend on the animal and its production stage.',
    ingredients: ['Clean grass, hay or suitable silage — fibre', 'Suitable legumes or oilseed meals — extra protein when needed', 'Appropriate mineral supplement and clean water'],
    note: 'Forage is important for ruminants. Any concentrate should complement the forage and follow reliable local feeding guidance.'
  },
  pigs: {
    name: 'Pigs',
    needs: 'A carefully balanced ration supplies energy, protein, minerals and vitamins. Requirements change as pigs grow.',
    ingredients: ['Maize or other suitable grains — energy', 'Soybean meal — protein', 'Suitable mineral and vitamin premix'],
    note: 'Use a pig-specific ration for the correct growth stage. Do not assume that a cattle or poultry formula is suitable for pigs.'
  },
  fish: {
    name: 'Farmed fish',
    needs: 'Feed must suit the fish species, size, feeding behaviour and production system.',
    ingredients: ['Suitable plant or grain ingredients — energy', 'Approved fishmeal or other suitable protein source', 'A balanced vitamin and mineral source'],
    note: 'Choose a feed made for the fish species and size. Pellet size, water stability and feeding rate also matter.'
  }
};

const PREPARATION_STEPS = [
  { title: '1. Select', detail: 'Identify the animal species, age, health and production purpose. Use a reliable feed formula for that animal.' },
  { title: '2. Inspect', detail: 'Check every ingredient. Reject mouldy, damp, spoiled or contaminated materials.' },
  { title: '3. Measure', detail: 'Weigh or measure each ingredient accurately. Do not guess proportions or copy an unrelated ration.' },
  { title: '4. Prepare and mix', detail: 'Grind coarse ingredients only when appropriate, then mix measured ingredients evenly using clean equipment.' },
  { title: '5. Store safely', detail: 'Keep prepared feed in a clean, dry, labelled and protected container away from pests and moisture.' }
];

const Choice = ({ active, children, onClick }: { active: boolean; children: React.ReactNode; onClick: () => void }) => (
  <button type="button" className={`gh-jhs1-science-choice${active ? ' is-active' : ''}`} aria-pressed={active} onClick={onClick}>{children}</button>
);

export const GhanaJhs3AnimalFeedPreparationVisual: React.FC = () => {
  const [animal, setAnimal] = useState<Animal>('poultry');
  const [stepIndex, setStepIndex] = useState(0);
  const selected = ANIMALS[animal];
  const step = PREPARATION_STEPS[stepIndex];

  return (
    <GhanaScienceVisual
      title="The Animal Feed Formulator"
      description="Explore suitable feed ingredients for different farm animals and follow a safe, careful preparation process."
      lang="en"
      caption="Ingredient examples are for learning, not a complete feed formula. Exact proportions depend on species, age, health and production stage. Follow qualified local agricultural or veterinary guidance."
    >
      <div className="gh-jhs1-science-interaction">
        <h4>Choose an animal to investigate</h4>
        <div className="gh-jhs1-science-choices">
          <Choice active={animal === 'poultry'} onClick={() => setAnimal('poultry')}>Poultry</Choice>
          <Choice active={animal === 'ruminants'} onClick={() => setAnimal('ruminants')}>Cattle, sheep and goats</Choice>
          <Choice active={animal === 'pigs'} onClick={() => setAnimal('pigs')}>Pigs</Choice>
          <Choice active={animal === 'fish'} onClick={() => setAnimal('fish')}>Farmed fish</Choice>
        </div>
        <div className="gh-jhs1-science-readout" aria-live="polite">
          <strong>{selected.name}</strong>
          <p><b>What the animal needs:</b> {selected.needs}</p>
          <p><b>Possible ingredients:</b></p>
          <ul>{selected.ingredients.map(item => <li key={item}>{item}</li>)}</ul>
          <p><b>Important:</b> {selected.note}</p>
        </div>
      </div>
      <div className="gh-jhs1-science-interaction">
        <h4>Follow the feed preparation process</h4>
        <div className="gh-jhs1-science-choices">
          {PREPARATION_STEPS.map((item, index) => <Choice key={item.title} active={stepIndex === index} onClick={() => setStepIndex(index)}>{item.title}</Choice>)}
        </div>
        <div className="gh-jhs1-science-readout" aria-live="polite">
          <strong>{step.title}</strong>
          <p>{step.detail}</p>
          <p><b>Preparation progress:</b> Step {stepIndex + 1} of {PREPARATION_STEPS.length}</p>
        </div>
      </div>
      <div className="gh-jhs1-science-interaction">
        <h4>Check feed quality and safety</h4>
        <div className="gh-jhs1-science-readout">
          <p><b>Clean equipment:</b> use clean, dry tools and containers to reduce contamination.</p>
          <p><b>Safe ingredients:</b> never use mouldy or spoiled feed. Some moulds can produce harmful toxins.</p>
          <p><b>Safe storage:</b> protect feed from rain, dampness, rodents and insects. Keep it labelled and use it according to appropriate storage guidance.</p>
          <p><b>Ask an expert:</b> seek advice from an agricultural extension officer, animal nutritionist or veterinarian when selecting commercial rations or feeding an ill animal.</p>
        </div>
      </div>
    </GhanaScienceVisual>
  );
};

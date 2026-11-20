import React, { useState } from 'react';
import { GhanaScienceVisual } from './GhanaScienceVisual';

type Animal = 'cattle' | 'sheep' | 'poultry' | 'pigs' | 'fish';
type Stage = 'young' | 'growing' | 'adult' | 'production';
const ANIMALS: Record<Animal, { name: string; system: string; forage: string; concentrate: string; checks: string }> = {
  cattle: { name: 'Cattle', system: 'Ruminant: the rumen helps digest fibrous plant material.', forage: 'Clean pasture grass, hay or suitable silage.', concentrate: 'A suitable grain, bran or protein meal when the animal needs extra nutrients.', checks: 'Distinguish a growing animal, a dry cow and a milk-producing cow. Their nutrient needs differ.' },
  sheep: { name: 'Sheep and goats', system: 'Ruminants: fibre-rich forage supports normal rumen function.', forage: 'Clean grass, browse, hay or suitable silage.', concentrate: 'A suitable energy or protein supplement when forage alone does not meet needs.', checks: 'Consider age, body condition, pregnancy, milk production and the quality of available forage.' },
  poultry: { name: 'Poultry', system: 'Non-ruminant birds need a balanced ration rather than a forage-only diet.', forage: 'Small amounts of suitable greens may supplement a complete ration; they do not replace it.', concentrate: 'A complete poultry ration with suitable energy, protein, minerals and vitamins.', checks: 'Choose a ration for chicks, growers or laying hens. Calcium and other nutrient needs change with stage.' },
  pigs: { name: 'Pigs', system: 'Non-ruminants need a balanced ration with digestible energy, protein, minerals and vitamins.', forage: 'Suitable safe plant material may supplement a balanced ration but should not replace it.', concentrate: 'A pig-specific balanced ration using suitable grains and protein sources.', checks: 'Select a ration for piglets, growers or breeding animals. Never copy a poultry or cattle formula.' },
  fish: { name: 'Farmed fish', system: 'Feed must match the fish species, size and feeding behaviour.', forage: 'Natural food in a pond may contribute, depending on the production system and species.', concentrate: 'A suitable complete pellet or formulated fish feed with appropriate protein and energy.', checks: 'Check species, fish size, pellet size, water stability and feeding guidance for the farm system.' }
};
const STAGES: Record<Stage, { label: string; note: string }> = {
  young: { label: 'Young animal', note: 'Young animals are developing quickly. Select a starter or young-animal ration designed for that species.' },
  growing: { label: 'Growing animal', note: 'Growing animals need nutrients for body development. Match the ration to growth rate and body condition.' },
  adult: { label: 'Adult maintenance', note: 'An adult not producing milk, eggs or offspring may have different needs from a working or breeding animal.' },
  production: { label: 'Production or breeding', note: 'Milk, egg, pregnancy or breeding demands can change nutrient requirements. Use stage-specific advice.' }
};
const Choice = ({ active, children, onClick }: { active: boolean; children: React.ReactNode; onClick: () => void }) => (
  <button type="button" className={`gh-jhs1-science-choice${active ? ' is-active' : ''}`} aria-pressed={active} onClick={onClick}>{children}</button>
);

export const GhanaJhs3AnimalFeedSelectionVisual: React.FC = () => {
  const [animal, setAnimal] = useState<Animal>('cattle');
  const [stage, setStage] = useState<Stage>('growing');
  const selected = ANIMALS[animal];
  const selectedStage = STAGES[stage];
  return (
    <GhanaScienceVisual
      title="The Livestock Nutrition Strategist"
      description="Match feed choices to an animal’s digestive system, growth stage and production needs."
      lang="en"
      caption="This learning guide gives examples, not exact rations or feeding quantities. Feed quality and nutrient needs vary. Follow a reliable local feed guide or advice from an agricultural extension officer, animal nutritionist or veterinarian."
    >
      <div className="gh-jhs1-science-interaction">
        <h4>1. Identify the animal</h4>
        <div className="gh-jhs1-science-choices">
          <Choice active={animal === 'cattle'} onClick={() => setAnimal('cattle')}>Cattle</Choice>
          <Choice active={animal === 'sheep'} onClick={() => setAnimal('sheep')}>Sheep and goats</Choice>
          <Choice active={animal === 'poultry'} onClick={() => setAnimal('poultry')}>Poultry</Choice>
          <Choice active={animal === 'pigs'} onClick={() => setAnimal('pigs')}>Pigs</Choice>
          <Choice active={animal === 'fish'} onClick={() => setAnimal('fish')}>Farmed fish</Choice>
        </div>
        <div className="gh-jhs1-science-readout" aria-live="polite">
          <strong>{selected.name}</strong>
          <p>{selected.system}</p>
          <p><b>Forage / roughage example:</b> {selected.forage}</p>
          <p><b>Concentrate / complete-feed example:</b> {selected.concentrate}</p>
        </div>
      </div>
      <div className="gh-jhs1-science-interaction">
        <h4>2. Match the growth or production stage</h4>
        <div className="gh-jhs1-science-choices">
          {Object.entries(STAGES).map(([key, value]) => <Choice key={key} active={stage === key} onClick={() => setStage(key as Stage)}>{value.label}</Choice>)}
        </div>
        <div className="gh-jhs1-science-readout" aria-live="polite">
          <strong>{selectedStage.label}: feeding considerations</strong>
          <p>{selectedStage.note}</p>
          <p><b>For {selected.name.toLowerCase()}:</b> {selected.checks}</p>
        </div>
      </div>
      <div className="gh-jhs1-science-interaction">
        <h4>3. Compare roughage and concentrates</h4>
        <div className="gh-jhs1-science-readout">
          <p><b>Roughage</b> is bulky feed rich in fibre, such as grass, hay and silage. It is especially important for cattle, sheep and goats because fibre supports normal rumen function.</p>
          <p><b>Concentrates</b> provide more energy or protein in a smaller amount. Examples include grains, bran and oilseed meals. They should complement a suitable ration, not be selected by guesswork.</p>
          <p><b>Always provide:</b> fresh, clean water and feed that is fresh, suitable and free from mould or contamination.</p>
        </div>
      </div>
      <div className="gh-jhs1-science-interaction">
        <h4>4. Make a safe feeding decision</h4>
        <div className="gh-jhs1-science-readout">
          <p>Identify the species and stage before choosing feed. Read the ingredient and nutrient information, check freshness and suitability, and consider cost without sacrificing animal needs.</p>
          <p>Introduce changes gradually, avoid unverified additives and observe how the animal responds. Record the feed offered, amount eaten and any unusual behaviour during supervised practical work.</p>
          <p>Never assume one ration suits every animal. Ask a trained farm supervisor or qualified adviser when uncertain.</p>
        </div>
      </div>
    </GhanaScienceVisual>
  );
};

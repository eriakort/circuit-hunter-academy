import React, { useState } from 'react';
import { GhanaScienceVisual } from './GhanaScienceVisual';

type Stage = { id: string; title: string; timing: string; description: string; feature: string };

const STAGES: Stage[] = [
  { id: 'egg', title: 'Egg', timing: 'Beginning of the life cycle', description: 'A female grasshopper lays eggs, often in a protective pod in the soil. The eggs contain developing young grasshoppers.', feature: 'Look for an egg pod in soil. The embryo develops inside each egg before hatching.' },
  { id: 'nymph', title: 'Nymph', timing: 'After hatching', description: 'A nymph is a young grasshopper. It resembles a small adult but has no fully developed wings and cannot reproduce.', feature: 'The nymph feeds and grows. It gradually develops wing buds.' },
  { id: 'moulting', title: 'Growth by moulting', timing: 'Repeated during the nymph stage', description: 'The nymph sheds its hard outer covering (exoskeleton) several times as its body grows. Each stage between moults is called an instar.', feature: 'A new, larger exoskeleton forms after each moult. Wing buds become more developed.' },
  { id: 'adult', title: 'Adult', timing: 'Final stage', description: 'The adult grasshopper has fully developed wings and reproductive organs. Adults can mate and females can lay eggs, starting the cycle again.', feature: 'The adult can reproduce. It has wings, although not every grasshopper species is a strong flyer.' }
];

const StageChoice = ({ active, children, onClick }: { active: boolean; children: React.ReactNode; onClick: () => void }) => (
  <button type="button" className={`gh-jhs1-science-choice${active ? ' is-active' : ''}`} aria-pressed={active} onClick={onClick}>{children}</button>
);

export const GhanaJhs3GrasshopperLifeCycleVisual: React.FC = () => {
  const [selected, setSelected] = useState('egg');
  const stage = STAGES.find(item => item.id === selected) ?? STAGES[0];

  return (
    <GhanaScienceVisual
      title="The Grasshopper Life-Cycle Ranger"
      description="Explore the three main life stages of a grasshopper and see how a nymph grows into an adult."
      lang="en"
      caption="Grasshoppers undergo incomplete metamorphosis. The diagram is a simplified model; the number and timing of moults vary with species and conditions."
    >
      <div className="gh-jhs1-science-interaction">
        <h4>Explore the life cycle</h4>
        <div className="gh-jhs1-science-choices">
          {STAGES.map(item => <StageChoice key={item.id} active={selected === item.id} onClick={() => setSelected(item.id)}>{item.title}</StageChoice>)}
        </div>
        <div className="gh-jhs1-science-readout" aria-live="polite">
          <strong>{stage.title}</strong>
          <p><b>When it happens:</b> {stage.timing}</p>
          <p>{stage.description}</p>
          <p><b>Key feature:</b> {stage.feature}</p>
        </div>
      </div>

      <div className="gh-jhs1-science-interaction">
        <h4>Follow the stages in order</h4>
        <div className="gh-jhs1-science-readout">
          <div role="img" aria-label="Grasshopper life cycle: egg, nymph, repeated moulting as the nymph grows, adult, then eggs again." style={{ display: 'grid', gap: '0.5rem', textAlign: 'center' }}>
            <div style={{ padding: '0.65rem', borderRadius: '0.5rem', background: 'rgba(123, 223, 242, 0.16)' }}><b>1. Egg</b><br />Egg pod in soil</div>
            <div aria-hidden="true">↓ Hatching</div>
            <div style={{ padding: '0.65rem', borderRadius: '0.5rem', background: 'rgba(101, 169, 108, 0.16)' }}><b>2. Nymph</b><br />Small, wingless young grasshopper</div>
            <div aria-hidden="true">↓ Repeated moulting and growth</div>
            <div style={{ padding: '0.65rem', borderRadius: '0.5rem', background: 'rgba(255, 209, 102, 0.16)' }}><b>3. Adult</b><br />Fully developed wings and reproductive organs</div>
            <div aria-hidden="true">↺ Adult lays eggs</div>
          </div>
          <p><b>Important:</b> there is no pupal stage in a grasshopper’s life cycle.</p>
        </div>
      </div>

      <div className="gh-jhs1-science-interaction">
        <h4>Compare incomplete and complete metamorphosis</h4>
        <div className="gh-jhs1-science-readout">
          <p><b>Grasshopper:</b> egg → nymph → adult. The nymph looks like a smaller, wingless adult and grows through moulting.</p>
          <p><b>Butterfly:</b> egg → larva (caterpillar) → pupa (chrysalis) → adult. The larva looks very different from the adult.</p>
          <p><b>Remember:</b> a grasshopper does not form a chrysalis or pass through a pupal stage.</p>
        </div>
      </div>
    </GhanaScienceVisual>
  );
};

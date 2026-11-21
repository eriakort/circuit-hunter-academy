import React, { useState } from 'react';
import { GhanaScienceVisual } from './GhanaScienceVisual';

type Crop = 'maize' | 'beans' | 'leafy';
export const CROP_DETAILS: Record<Crop, { name: string; stages: { title: string; signs: string; use: string }[] }> = {
  maize: {
    name: 'Maize',
    stages: [
      { title: 'Young / green', signs: 'Silks are fresh and kernels are soft and milky when tested on a suitable sample.', use: 'Green maize can be harvested for fresh eating.' },
      { title: 'Mature grain', signs: 'Kernels are full; husks and leaves begin to dry and the grain becomes harder.', use: 'Allow grain to dry appropriately before safe storage.' },
      { title: 'Over-mature / too dry', signs: 'The crop may be very dry; delayed harvest can increase exposure to pests, birds, lodging or weather losses.', use: 'Harvest promptly and handle or store grain carefully.' }
    ]
  },
  beans: {
    name: 'Beans',
    stages: [
      { title: 'Young pods', signs: 'Pods are green, tender and seeds inside are still developing.', use: 'Harvest suitable varieties as fresh green pods.' },
      { title: 'Mature pods', signs: 'Pods become full and begin to change colour as seeds develop.', use: 'Harvest at the stage suited to fresh seed or allow further drying.' },
      { title: 'Dry seed', signs: 'Pods are dry and seeds are firm; avoid leaving them exposed to rain.', use: 'Collect dry seeds for cooking or storage after proper drying.' }
    ]
  },
  leafy: {
    name: 'Leafy vegetables',
    stages: [
      { title: 'Young leaves', signs: 'Leaves are tender and still developing.', use: 'Often preferred for fresh, tender vegetables.' },
      { title: 'Established leaves', signs: 'Plants have enough healthy leaves for a useful harvest.', use: 'Harvest leaves while maintaining the plant where repeated picking is suitable.' },
      { title: 'Over-mature / flowering', signs: 'Leaves may become tougher or more bitter as the plant ages or flowers.', use: 'Quality may decline for leafy use; follow the crop’s intended harvest stage.' }
    ]
  }
};

const StageChoice = ({ active, children, onClick }: { active: boolean; children: React.ReactNode; onClick: () => void }) => (
  <button type="button" className={`gh-jhs1-science-choice${active ? ' is-active' : ''}`} aria-pressed={active} onClick={onClick}>{children}</button>
);

export const GhanaJhs3CropMaturityVisual: React.FC = () => {
  const [crop, setCrop] = useState<Crop>('maize');
  const [stageIndex, setStageIndex] = useState(0);
  const details = CROP_DETAILS[crop];
  const stage = details.stages[stageIndex];

  const chooseCrop = (next: Crop) => { setCrop(next); setStageIndex(0); };

  return (
    <GhanaScienceVisual
      title="The Crop Maturity Investigator"
      description="Compare visible growth signs and choose a harvest stage that matches how the crop will be used."
      lang="en"
      caption="Maturity signs and harvest timing vary by crop variety, climate and intended use. Use local agricultural guidance."
    >
      <div className="gh-jhs1-science-interaction">
        <h4>Choose a crop to investigate</h4>
        <div className="gh-jhs1-science-choices">
          <StageChoice active={crop === 'maize'} onClick={() => chooseCrop('maize')}>Maize</StageChoice>
          <StageChoice active={crop === 'beans'} onClick={() => chooseCrop('beans')}>Beans</StageChoice>
          <StageChoice active={crop === 'leafy'} onClick={() => chooseCrop('leafy')}>Leafy vegetables</StageChoice>
        </div>
      </div>
      <div className="gh-jhs1-science-interaction">
        <h4>Explore {details.name} maturity stages</h4>
        <div className="gh-jhs1-science-choices">
          {details.stages.map((item, index) => <StageChoice key={item.title} active={stageIndex === index} onClick={() => setStageIndex(index)}>{item.title}</StageChoice>)}
        </div>
        <div className="gh-jhs1-science-readout" aria-live="polite">
          <strong>{stage.title}</strong>
          <p><b>What to observe:</b> {stage.signs}</p>
          <p><b>Possible use:</b> {stage.use}</p>
        </div>
      </div>
      <div className="gh-jhs1-science-interaction">
        <h4>Compare two seed beds fairly</h4>
        <div className="gh-jhs1-science-readout">
          <p>Observe the same crop in Bed A and Bed B at regular intervals. Record plant height, leaf development, flowering, fruit or pod formation, seed filling and colour changes.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '0.6rem' }}>
            <div style={{ padding: '0.65rem', borderRadius: '0.5rem', background: 'rgba(123, 223, 242, 0.16)' }}><b>Bed A</b><p>Record the date and visible growth signs.</p></div>
            <div style={{ padding: '0.65rem', borderRadius: '0.5rem', background: 'rgba(101, 169, 108, 0.16)' }}><b>Bed B</b><p>Record the same signs on the same dates.</p></div>
          </div>
          <p><b>Keep it fair:</b> use the same crop variety and planting date where possible. Record differences in soil, water, nutrients, sunlight and seed-bed conditions instead of guessing what caused them.</p>
          <p><b>Remember:</b> repeated observations in a table or graph provide stronger evidence than a single measurement.</p>
        </div>
      </div>
    </GhanaScienceVisual>
  );
};

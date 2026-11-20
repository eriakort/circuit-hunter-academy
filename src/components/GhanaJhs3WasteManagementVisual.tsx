import React, { useState } from 'react';
import { GhanaScienceVisual } from './GhanaScienceVisual';

type WasteType = 'organic' | 'recyclable' | 'hazardous' | 'residual';

const WASTE_STREAMS: Record<WasteType, { label: string; examples: string; method: string; reason: string }> = {
  organic: {
    label: 'Organic waste',
    examples: 'Fruit peels, vegetable scraps, dry leaves and suitable plant cuttings',
    method: 'Separate clean organic material for a managed composting process.',
    reason: 'Decomposers break it down into a useful soil conditioner when moisture and air are suitable.'
  },
  recyclable: {
    label: 'Recyclable materials',
    examples: 'Clean paper, cardboard, glass bottles and accepted metal or plastic containers',
    method: 'Keep materials clean and dry, then send them to an appropriate recovery or recycling collection.',
    reason: 'Recovered materials can become inputs for new products and reduce demand for raw materials.'
  },
  hazardous: {
    label: 'Hazardous or special waste',
    examples: 'Batteries, electronic waste, chemical containers and medical waste',
    method: 'Keep separate, do not open, burn or mix with ordinary rubbish, and use approved specialist collection.',
    reason: 'Some items can release harmful substances or carry infection risks and need controlled handling.'
  },
  residual: {
    label: 'Residual waste',
    examples: 'Contaminated wrappers and items that cannot be safely reused, recycled or composted locally',
    method: 'Use the local authorised collection and disposal service.',
    reason: 'Safe collection prevents litter, blocked drains and uncontrolled dumping.'
  }
};

const ORDER: WasteType[] = ['organic', 'recyclable', 'hazardous', 'residual'];

export const GhanaJhs3WasteManagementVisual: React.FC = () => {
  const [selected, setSelected] = useState<WasteType>('organic');
  const current = WASTE_STREAMS[selected];

  return (
    <GhanaScienceVisual
      title="The Community Waste Solutions Lab"
      description="Sort common waste safely, choose a suitable recovery method and plan a practical school waste audit."
      lang="en"
      caption="Local recycling and collection options vary. Follow school rules and approved local services, especially for hazardous waste."
    >
      <div className="gh-jhs1-science-interaction">
        <h4>1. Sort the waste stream</h4>
        <p>Select a waste group to see examples and the safest next step.</p>
        <div className="gh-jhs1-science-choices">
          {ORDER.map(type => (
            <button type="button" key={type} className={selected === type ? 'gh-jhs1-science-choice is-active' : 'gh-jhs1-science-choice'} aria-pressed={selected === type} onClick={() => setSelected(type)}>
              {WASTE_STREAMS[type].label}
            </button>
          ))}
        </div>
        <div className="gh-jhs1-science-readout" aria-live="polite">
          <strong>{current.label}</strong>
          <p><b>Examples:</b> {current.examples}</p>
          <p><b>Best next step:</b> {current.method}</p>
          <p><b>Why it matters:</b> {current.reason}</p>
        </div>
        <div className="gh-jhs1-science-readout">
          <p><b>Remember the order:</b> prevent waste first, then reduce, reuse, recycle or compost suitable materials, and safely manage what remains.</p>
          <p>Never burn mixed waste or dump rubbish into drains, streams or open spaces. Litter can pollute waterways and cause blocked drains. Keep batteries, chemicals, electronic waste and medical waste out of ordinary bins.</p>
          <p>Keep hazardous waste separate and use approved specialist collection. Never handle unknown, leaking or sharp waste without trained adult supervision.</p>
        </div>
      </div>
      <div className="gh-jhs1-science-interaction">
        <h4>2. Follow the waste hierarchy</h4>
        <div className="gh-jhs1-science-readout">
          <ol>
            <li><b>Prevent and reduce:</b> avoid unnecessary packaging and choose durable items.</li>
            <li><b>Reuse and repair:</b> use items again or repair them when safe.</li>
            <li><b>Recycle and compost:</b> recover clean materials and compost suitable organic waste.</li>
            <li><b>Treat and dispose:</b> use approved treatment and collection for remaining or hazardous waste.</li>
          </ol>
          <p>Preventing waste is usually better than dealing with it after it has been created. Recycling helps, but it does not replace reducing unnecessary consumption.</p>
        </div>
      </div>
      <div className="gh-jhs1-science-interaction">
        <h4>3. Run a school waste audit</h4>
        <div className="gh-jhs1-science-readout">
          <p><b>Observe:</b> identify where waste is produced, such as classrooms, the canteen and the school grounds.</p>
          <p><b>Measure:</b> with teacher supervision and safe handling, record the types and amounts collected over the same time period.</p>
          <p><b>Analyse:</b> look for the largest waste streams and items that could be prevented, reused, recycled or composted.</p>
          <p><b>Improve:</b> agree on clearly labelled collection points, responsible collection arrangements and a date to check progress.</p>
        </div>
      </div>
      <div className="gh-jhs1-science-interaction">
        <h4>4. Design a safer community solution</h4>
        <div className="gh-jhs1-science-readout">
          <p>Compare options using safety, cost, local availability, collection reliability, environmental impact and the amount of waste prevented.</p>
          <p>A new bin is not enough on its own. A successful plan needs correct sorting, regular collection, community participation and monitoring.</p>
          <p>Ask a trained adult to handle hazardous or unknown waste. Never sort sharp, leaking, medical or chemical waste by hand.</p>
        </div>
      </div>
    </GhanaScienceVisual>
  );
};

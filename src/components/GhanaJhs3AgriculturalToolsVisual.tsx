import React, { useState } from 'react';
import { GhanaScienceVisual } from './GhanaScienceVisual';

type ToolTask = 'hoe' | 'trowel' | 'rake';
export const TASKS: Record<ToolTask, { title: string; purpose: string; blade: string; handle: string; joint: string; check: string }> = {
  hoe: { title: 'Hand hoe', purpose: 'Loosen soil and remove weeds', blade: 'Strong, suitable metal blade', handle: 'Smooth, durable wooden handle', joint: 'Secure, tight handle joint', check: 'The blade stays firmly attached while loosening a small patch of soil.' },
  trowel: { title: 'Hand trowel', purpose: 'Make small planting holes and move soil', blade: 'Small, strong metal scoop', handle: 'Comfortable, smooth handle', joint: 'Firm joint with no sharp edges', check: 'The scoop moves soil without bending or loosening from the handle.' },
  rake: { title: 'Hand rake', purpose: 'Gather leaves and level loose soil', blade: 'Strong head with safely finished teeth', handle: 'Long, durable handle', joint: 'Secure head-to-handle connection', check: 'The head remains fixed and the teeth have no dangerous burrs.' }
};
const Choice = ({ active, children, onClick }: { active: boolean; children: React.ReactNode; onClick: () => void }) => (
  <button type="button" className={`gh-jhs1-science-choice${active ? ' is-active' : ''}`} aria-pressed={active} onClick={onClick}>{children}</button>
);

export const GhanaJhs3AgriculturalToolsVisual: React.FC = () => {
  const [task, setTask] = useState<ToolTask>('hoe');
  const [stage, setStage] = useState(0);
  const [checks, setChecks] = useState([false, false, false, false]);
  const selected = TASKS[task];
  const stages = [
    { title: '1. Identify the farm task', detail: 'Find out what the farmer needs the tool to do. A tool should be fit for its task, comfortable, strong, repairable and affordable.' },
    { title: '2. Sketch and choose materials', detail: 'Draw and label the blade or working head, handle and joint. Select materials for strength, durability, availability, cost and safe handling.' },
    { title: '3. Measure and prepare parts', detail: 'Measure and mark the parts. A trained adult should cut, shape or drill metal with suitable equipment and supervision. Learners must not attempt these operations alone.' },
    { title: '4. Join and inspect', detail: 'Use an appropriate bolt, rivet, screw or strong binding. Smooth unsafe edges and check that the handle is secure, comfortable and free of splinters.' },
    { title: '5. Test and improve', detail: 'With teacher supervision, test the prototype on a small soil bed. Record what works, identify a weakness and suggest one improvement.' }
  ];
  return (
    <GhanaScienceVisual
      title="The Agricultural Tool Designer"
      description="Plan a useful, durable and safe hand tool by matching its job, materials, parts and joining method."
      lang="en"
      caption="This is a design-planning activity, not a workshop instruction. Cutting, drilling or shaping metal must be done only by a trained adult with suitable tools, protective equipment and supervision."
    >
      <div className="gh-jhs1-science-interaction">
        <h4>1. Choose the farm task</h4>
        <p>Select a tool and explore how its design matches the job.</p>
        <div className="gh-jhs1-science-choices">
          <Choice active={task === 'hoe'} onClick={() => setTask('hoe')}>Hand hoe</Choice>
          <Choice active={task === 'trowel'} onClick={() => setTask('trowel')}>Hand trowel</Choice>
          <Choice active={task === 'rake'} onClick={() => setTask('rake')}>Hand rake</Choice>
        </div>
        <div className="gh-jhs1-science-readout" aria-live="polite">
          <strong>{selected.title}</strong>
          <p><b>Purpose:</b> {selected.purpose}.</p>
          <svg viewBox="0 0 320 145" role="img" aria-label={`Concept sketch of a ${selected.title} with a working head, handle and joint`}>
            <path d={task === 'rake' ? 'M160 18 L160 112 M115 28 H205 M120 20 V36 M137 20 V36 M154 20 V36 M171 20 V36 M188 20 V36 M205 20 V36' : task === 'trowel' ? 'M160 22 L160 92 M143 92 Q160 135 177 92 Z' : 'M160 20 L160 104 M118 112 L202 112 L194 132 L126 132 Z'} fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="160" cy={task === 'rake' ? 28 : 103} r="5" fill="#d5a43b"/>
            <text x="172" y="70" fill="currentColor" fontSize="11">Handle</text>
            <text x="215" y={task === 'rake' ? 30 : 125} fill="currentColor" fontSize="11">Working head</text>
            <text x="160" y="143" textAnchor="middle" fill="currentColor" fontSize="10">Concept sketch · not to scale</text>
          </svg>
          <p><b>Working part:</b> {selected.blade}.</p>
          <p><b>Handle:</b> {selected.handle}.</p>
          <p><b>Joint:</b> {selected.joint}.</p>
        </div>
      </div>
      <div className="gh-jhs1-science-interaction">
        <h4>2. Explore the design process</h4>
        <div className="gh-jhs1-science-choices">
          {stages.map((item, index) => <Choice key={item.title} active={stage === index} onClick={() => setStage(index)}>{`Step ${index + 1}`}</Choice>)}
        </div>
        <div className="gh-jhs1-science-readout" aria-live="polite">
          <strong>{stages[stage].title}</strong>
          <p>{stages[stage].detail}</p>
          <p><b>Design focus:</b> {selected.title} — {selected.purpose.toLowerCase()}.</p>
        </div>
      </div>
      <div className="gh-jhs1-science-interaction">
        <h4>3. Materials and joining methods</h4>
        <div className="gh-jhs1-science-readout">
          <p><b>Handle materials:</b> well-finished wood or a durable recycled material can be suitable when strong, comfortable and safe.</p>
          <p><b>Working parts:</b> suitable metal may provide strength and durability. Avoid sharp, rusty or contaminated scrap.</p>
          <p><b>Joining methods:</b> bolts, rivets, screws or strong bindings can hold parts together when correctly selected and fitted.</p>
          <p><b>Selection test:</b> consider strength, durability, availability, cost, repairability, comfort and safe handling.</p>
        </div>
      </div>
      <div className="gh-jhs1-science-interaction">
        <h4>4. Workshop safety and final inspection</h4>
        <p>Tick each safety check as part of a supervised design review.</p>
        <div className="gh-jhs1-science-readout">
          {[
            'A trained adult supervises cutting, shaping and drilling.',
            'Suitable eye and hand protection is used where required.',
            'Materials are secured and the work area is kept clear.',
            'The finished tool has a tight joint, smooth handle and no sharp burrs or splinters.'
          ].map((item, index) => (
            <label key={item} style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start', margin: '0.55rem 0' }}>
              <input type="checkbox" checked={checks[index]} onChange={event => setChecks(previous => previous.map((value, i) => i === index ? event.target.checked : value))} />
              <span>{item}</span>
            </label>
          ))}
          <p aria-live="polite"><b>Safety review:</b> {checks.filter(Boolean).length} of 4 checks completed.</p>
          <p><b>Safe field test:</b> {selected.check}</p>
          <p>Store sharp tools safely. Never use a damaged tool in the field.</p>
        </div>
      </div>
    </GhanaScienceVisual>
  );
};

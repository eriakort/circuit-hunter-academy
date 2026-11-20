import React, { useState } from 'react';
import { GhanaScienceVisual } from './GhanaScienceVisual';

type PressureCase = 'knife' | 'shoe' | 'tyre';
const PRESSURE_CASES: Record<PressureCase, { title: string; force: number; area: number; note: string }> = {
  knife: { title: 'Sharp knife edge', force: 20, area: 0.0001, note: 'A very small contact area creates high pressure, helping the blade cut.' },
  shoe: { title: 'Flat shoe sole', force: 400, area: 0.02, note: 'A wider contact area spreads the force and reduces pressure on the ground.' },
  tyre: { title: 'Wide tyre on soft ground', force: 800, area: 0.08, note: 'A wider contact area spreads the load and helps reduce sinking into soft ground.' }
};
const Choice = ({ active, children, onClick }: { active: boolean; children: React.ReactNode; onClick: () => void }) => (
  <button type="button" className={`gh-jhs1-science-choice${active ? ' is-active' : ''}`} aria-pressed={active} onClick={onClick}>{children}</button>
);

export const GhanaJhs3ForceMotionVisual: React.FC = () => {
  const [pressureCase, setPressureCase] = useState<PressureCase>('knife');
  const [force, setForce] = useState(100);
  const [area, setArea] = useState(2);
  const [mass, setMass] = useState(5);
  const [acceleration, setAcceleration] = useState(2);
  const [motion, setMotion] = useState<'balanced' | 'unbalanced'>('balanced');
  const [law, setLaw] = useState<'first' | 'second' | 'third'>('first');
  const selected = PRESSURE_CASES[pressureCase];
  const pressure = force / area;
  const examplePressure = selected.force / selected.area;
  const resultantForce = mass * acceleration;

  return (
    <GhanaScienceVisual
      title="The Force and Motion Strategist"
      description="Explore pressure, balanced forces, Newton's three laws and the relationship F = ma."
      lang="en"
      caption="Use the models to explore ideas, not as instructions for risky experiments. For the balloon demonstration, use a soft balloon, a straw and string with teacher or adult supervision; never aim it at a person."
    >
      <div className="gh-jhs1-science-interaction">
        <h4>1. Pressure: force spread over an area</h4>
        <p><b>Pressure = force ÷ area</b>. Pressure is measured in pascals (Pa), where 1 Pa = 1 N/m².</p>
        <div className="gh-jhs1-science-choices">
          <Choice active={pressureCase === 'knife'} onClick={() => setPressureCase('knife')}>Sharp knife</Choice>
          <Choice active={pressureCase === 'shoe'} onClick={() => setPressureCase('shoe')}>Flat shoe</Choice>
          <Choice active={pressureCase === 'tyre'} onClick={() => setPressureCase('tyre')}>Wide tyre</Choice>
        </div>
        <div className="gh-jhs1-science-readout" aria-live="polite">
          <strong>{selected.title}</strong>
          <p>Force: {selected.force} N · Contact area: {selected.area} m²</p>
          <p><b>Pressure: {examplePressure.toLocaleString('en-US')} Pa</b></p>
          <p>{selected.note}</p>
          <p>For the same force, a smaller contact area produces greater pressure. Fluid pressure acts in all directions.</p>
        </div>
        <h4>Try your own pressure calculation</h4>
        <div className="gh-jhs1-science-choices">
          <Choice active={force === 100} onClick={() => setForce(100)}>100 N</Choice>
          <Choice active={force === 200} onClick={() => setForce(200)}>200 N</Choice>
          <Choice active={force === 400} onClick={() => setForce(400)}>400 N</Choice>
        </div>
        <div className="gh-jhs1-science-choices">
          <Choice active={area === 1} onClick={() => setArea(1)}>1 m²</Choice>
          <Choice active={area === 2} onClick={() => setArea(2)}>2 m²</Choice>
          <Choice active={area === 4} onClick={() => setArea(4)}>4 m²</Choice>
        </div>
        <div className="gh-jhs1-science-readout" aria-live="polite">
          <strong>{pressure.toFixed(1)} Pa</strong>
          <p>Pressure = {force} N ÷ {area} m² = {pressure.toFixed(1)} Pa.</p>
        </div>
      </div>
      <div className="gh-jhs1-science-interaction">
        <h4>2. Balanced and unbalanced forces</h4>
        <div className="gh-jhs1-science-choices">
          <Choice active={motion === 'balanced'} onClick={() => setMotion('balanced')}>Balanced forces</Choice>
          <Choice active={motion === 'unbalanced'} onClick={() => setMotion('unbalanced')}>Unbalanced forces</Choice>
        </div>
        <div className="gh-jhs1-science-readout" aria-live="polite">
          {motion === 'balanced' ? (
            <>
              <strong>Resultant force = 0 N</strong>
              <p>Equal forces act in opposite directions. The object's motion does not change: it stays at rest or continues at constant velocity in a straight line.</p>
              <svg viewBox="0 0 320 92" role="img" aria-label="Balanced equal forces push a box in opposite directions">
                <path d="M20 40 H116 M20 40 l12 -7 M20 40 l12 7 M300 40 H204 M300 40 l-12 -7 M300 40 l-12 7" fill="none" stroke="currentColor" strokeWidth="3"/>
                <rect x="116" y="18" width="88" height="46" rx="7" fill="#d5a43b" stroke="currentColor" strokeWidth="2"/>
                <text x="160" y="46" textAnchor="middle" fill="#172033" fontSize="12" fontWeight="bold">Box</text>
                <text x="160" y="84" textAnchor="middle" fill="currentColor" fontSize="11">Equal forces · no acceleration</text>
              </svg>
            </>
          ) : (
            <>
              <strong>Resultant force is not zero</strong>
              <p>One direction has a larger force. The object accelerates in the direction of the resultant force; its speed or direction changes.</p>
              <svg viewBox="0 0 320 92" role="img" aria-label="An unbalanced force pushes a box to the right">
                <path d="M20 40 H116 M20 40 l12 -7 M20 40 l12 7 M204 40 H300 M300 40 l-12 -7 M300 40 l-12 7" fill="none" stroke="currentColor" strokeWidth="3"/>
                <rect x="116" y="18" width="88" height="46" rx="7" fill="#d5a43b" stroke="currentColor" strokeWidth="2"/>
                <text x="160" y="46" textAnchor="middle" fill="#172033" fontSize="12" fontWeight="bold">Box</text>
                <text x="160" y="84" textAnchor="middle" fill="currentColor" fontSize="11">Larger force to the right · acceleration →</text>
              </svg>
            </>
          )}
          <p>Friction and air resistance oppose motion. A force is a push or pull that can change speed, direction or shape.</p>
        </div>
      </div>
      <div className="gh-jhs1-science-interaction">
        <h4>3. Newton's Second Law: calculate F = ma</h4>
        <p>Resultant force (N) = mass (kg) × acceleration (m/s²).</p>
        <div className="gh-jhs1-science-choices">
          <Choice active={mass === 2} onClick={() => setMass(2)}>2 kg</Choice>
          <Choice active={mass === 5} onClick={() => setMass(5)}>5 kg</Choice>
          <Choice active={mass === 10} onClick={() => setMass(10)}>10 kg</Choice>
        </div>
        <div className="gh-jhs1-science-choices">
          <Choice active={acceleration === 1} onClick={() => setAcceleration(1)}>1 m/s²</Choice>
          <Choice active={acceleration === 2} onClick={() => setAcceleration(2)}>2 m/s²</Choice>
          <Choice active={acceleration === 3} onClick={() => setAcceleration(3)}>3 m/s²</Choice>
        </div>
        <div className="gh-jhs1-science-readout" aria-live="polite">
          <strong>Resultant force: {resultantForce} N</strong>
          <p>F = ma = {mass} kg × {acceleration} m/s² = {resultantForce} N.</p>
          <p>For the same mass, greater acceleration needs greater resultant force.</p>
        </div>
      </div>
      <div className="gh-jhs1-science-interaction">
        <h4>4. Newton's three laws and action–reaction pairs</h4>
        <div className="gh-jhs1-science-choices">
          <Choice active={law === 'first'} onClick={() => setLaw('first')}>Newton's First Law</Choice>
          <Choice active={law === 'second'} onClick={() => setLaw('second')}>Newton's Second Law</Choice>
          <Choice active={law === 'third'} onClick={() => setLaw('third')}>Newton's Third Law</Choice>
        </div>
        <div className="gh-jhs1-science-readout" aria-live="polite">
          {law === 'first' && <><strong>Inertia</strong><p>An object stays at rest or moves at constant velocity in a straight line unless a resultant external force acts on it.</p></>}
          {law === 'second' && <><strong>F = ma</strong><p>The resultant force equals mass multiplied by acceleration. Measure mass in kilograms and acceleration in metres per second squared.</p></>}
          {law === 'third' && <><strong>Equal and opposite forces on different objects</strong><p>Object A pushes object B backwards; object B pushes object A forwards with an equal-sized force. The forces do not cancel because they act on different objects.</p></>}
          <p><b>Walking:</b> your foot pushes the ground backwards; the ground pushes you forwards.</p>
          <p><b>Balloon rocket:</b> the balloon pushes escaping air backwards; the air pushes the balloon forwards. These are two forces on two different objects.</p>
        </div>
      </div>
      <div className="gh-jhs1-science-interaction">
        <h4>5. Check the key ideas</h4>
        <div className="gh-jhs1-science-readout">
          <p><b>Pressure:</b> force ÷ area. Smaller area means greater pressure for the same force.</p>
          <p><b>Balanced forces:</b> zero resultant force, so motion does not change.</p>
          <p><b>Unbalanced forces:</b> non-zero resultant force causes acceleration.</p>
          <p><b>First Law:</b> inertia. <b>Second Law:</b> F = ma. <b>Third Law:</b> equal and opposite forces act on different objects.</p>
          <p><b>Balloon demonstration:</b> escaping air moves backwards while the balloon moves forwards. Use a soft balloon and string under adult supervision.</p>
        </div>
      </div>
    </GhanaScienceVisual>
  );
};

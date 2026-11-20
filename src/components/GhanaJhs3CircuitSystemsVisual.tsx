import React, { useState } from 'react';
import { GhanaScienceVisual } from './GhanaScienceVisual';

type Layout = 'series' | 'parallel';
type Component = 'resistor' | 'diode' | 'led' | 'capacitor';

const COMPONENTS: Record<Component, { title: string; role: string; note: string }> = {
  resistor: { title: 'Resistor', role: 'Limits current in a circuit.', note: 'Resistance is measured in ohms (Ω). A resistor can protect a component by limiting current.' },
  diode: { title: 'Diode', role: 'Allows current mainly in one direction.', note: 'A diode is forward-biased when connected in its conducting direction. Reverse connection greatly reduces current in a simple model.' },
  led: { title: 'Light-emitting diode (LED)', role: 'Produces light when current flows in the correct direction.', note: 'An LED is a diode. It needs the correct polarity and a suitable current-limiting resistor.' },
  capacitor: { title: 'Capacitor', role: 'Stores separated electric charge.', note: 'A capacitor charges when connected to a supply and can discharge through a suitable circuit.' }
};

const Choice = ({ active, children, onClick }: { active: boolean; children: React.ReactNode; onClick: () => void }) => (
  <button type="button" className={`gh-jhs1-science-choice${active ? ' is-active' : ''}`} aria-pressed={active} onClick={onClick}>{children}</button>
);

export const GhanaJhs3CircuitSystemsVisual: React.FC = () => {
  const [layout, setLayout] = useState<Layout>('series');
  const [voltage, setVoltage] = useState(12);
  const [resistance, setResistance] = useState(4);
  const [component, setComponent] = useState<Component>('resistor');
  const [forward, setForward] = useState(true);
  const current = voltage / resistance;
  const selected = COMPONENTS[component];

  return (
    <GhanaScienceVisual
      title="The Circuit Systems Engineer"
      description="Compare series and parallel circuits, calculate current with Ohm’s law and explore common electronic components."
      lang="en"
      caption="Use only low-voltage cells or approved classroom circuit kits. Never connect a learning circuit to mains electricity. Check component ratings and ask a teacher to inspect the circuit before switching it on."
    >
      <div className="gh-jhs1-science-interaction">
        <h4>1. Compare circuit layouts</h4>
        <div className="gh-jhs1-science-choices">
          <Choice active={layout === 'series'} onClick={() => setLayout('series')}>Series circuit</Choice>
          <Choice active={layout === 'parallel'} onClick={() => setLayout('parallel')}>Parallel circuit</Choice>
        </div>
        <div className="gh-jhs1-science-readout" aria-live="polite">
          {layout === 'series' ? (
            <>
              <strong>One complete path</strong>
              <p>Components share one path. The same current passes through each component, and the supply voltage is shared between them.</p>
              <p>If one lamp is removed or fails, the path opens and all lamps go out.</p>
              <svg viewBox="0 0 320 100" role="img" aria-label="Series circuit with a cell and two lamps on one path">
                <path d="M35 20 H285 V80 H35 V20 M35 42 V58 M43 46 V54 M285 20 V42" fill="none" stroke="currentColor" strokeWidth="2"/>
                <circle cx="130" cy="20" r="13" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M122 12 L138 28 M138 12 L122 28" stroke="currentColor" strokeWidth="2"/>
                <circle cx="215" cy="20" r="13" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M207 12 L223 28 M223 12 L207 28" stroke="currentColor" strokeWidth="2"/>
                <text x="35" y="94" fontSize="10" fill="currentColor">Cell</text><text x="130" y="48" textAnchor="middle" fontSize="10" fill="currentColor">Lamp 1</text><text x="215" y="48" textAnchor="middle" fontSize="10" fill="currentColor">Lamp 2</text>
              </svg>
            </>
          ) : (
            <>
              <strong>Separate branches</strong>
              <p>Each branch is connected across the supply, so each branch has the supply voltage. If one branch opens, another branch can still work.</p>
              <p>The total current from the supply is the sum of the currents in the branches.</p>
              <svg viewBox="0 0 320 120" role="img" aria-label="Parallel circuit with two lamp branches">
                <path d="M35 18 H285 V102 H35 V18 M35 43 V77 M43 48 V72 M130 18 V42 H215 V18 M130 42 V78 H215 V102" fill="none" stroke="currentColor" strokeWidth="2"/>
                <circle cx="172" cy="42" r="12" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M164 34 L180 50 M180 34 L164 50" stroke="currentColor" strokeWidth="2"/>
                <circle cx="172" cy="78" r="12" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M164 70 L180 86 M180 70 L164 86" stroke="currentColor" strokeWidth="2"/>
                <text x="35" y="115" fontSize="10" fill="currentColor">Cell</text><text x="200" y="45" fontSize="10" fill="currentColor">Branch 1</text><text x="200" y="82" fontSize="10" fill="currentColor">Branch 2</text>
              </svg>
            </>
          )}
        </div>
      </div>
      <div className="gh-jhs1-science-interaction">
        <h4>2. Use Ohm’s law</h4>
        <p>Ohm’s law for an ohmic conductor at constant temperature: voltage (V) = current (I) × resistance (R).</p>
        <div className="gh-jhs1-science-choices">
          <Choice active={voltage === 6} onClick={() => setVoltage(6)}>6 V</Choice>
          <Choice active={voltage === 9} onClick={() => setVoltage(9)}>9 V</Choice>
          <Choice active={voltage === 12} onClick={() => setVoltage(12)}>12 V</Choice>
        </div>
        <div className="gh-jhs1-science-choices">
          <Choice active={resistance === 2} onClick={() => setResistance(2)}>2 Ω</Choice>
          <Choice active={resistance === 4} onClick={() => setResistance(4)}>4 Ω</Choice>
          <Choice active={resistance === 6} onClick={() => setResistance(6)}>6 Ω</Choice>
        </div>
        <div className="gh-jhs1-science-readout" aria-live="polite">
          <strong>Current: {current.toFixed(2)} A</strong>
          <p>I = V ÷ R = {voltage} V ÷ {resistance} Ω = {current.toFixed(2)} A.</p>
          <p>For the same voltage, increasing resistance reduces current.</p>
        </div>
      </div>
      <div className="gh-jhs1-science-interaction">
        <h4>3. Identify electronic components</h4>
        <div className="gh-jhs1-science-choices">
          <Choice active={component === 'resistor'} onClick={() => setComponent('resistor')}>Resistor</Choice>
          <Choice active={component === 'diode'} onClick={() => setComponent('diode')}>Diode</Choice>
          <Choice active={component === 'led'} onClick={() => setComponent('led')}>LED</Choice>
          <Choice active={component === 'capacitor'} onClick={() => setComponent('capacitor')}>Capacitor</Choice>
        </div>
        <div className="gh-jhs1-science-readout" aria-live="polite">
          <strong>{selected.title}</strong>
          <p>{selected.role}</p>
          <p>{selected.note}</p>
          {(component === 'diode' || component === 'led') && (
            <>
              <div className="gh-jhs1-science-choices">
                <Choice active={forward} onClick={() => setForward(true)}>Forward direction</Choice>
                <Choice active={!forward} onClick={() => setForward(false)}>Reverse direction</Choice>
              </div>
              <p>{forward ? 'In the forward direction, a diode can conduct when its forward voltage is reached.' : 'In the reverse direction, a diode normally blocks current in this basic circuit model.'}</p>
            </>
          )}
        </div>
      </div>
      <div className="gh-jhs1-science-interaction">
        <h4>4. Check the key ideas</h4>
        <div className="gh-jhs1-science-readout">
          <p><b>Series:</b> one path; the same current flows through every component.</p>
          <p><b>Parallel:</b> separate branches; each branch has the supply voltage across it.</p>
          <p><b>Resistor:</b> limits current. <b>Diode:</b> conducts mainly in one direction.</p>
          <p><b>Light-emitting diode (LED):</b> emits light when correctly connected. <b>Capacitor:</b> stores and releases electric charge.</p>
        </div>
      </div>
    </GhanaScienceVisual>
  );
};

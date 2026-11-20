import React, { useState } from 'react';
import { GhanaScienceVisual } from './GhanaScienceVisual';

type Device = 'battery' | 'lamp' | 'fan' | 'solar' | 'hydro';
const DEVICES: Record<Device, { title: string; input: string; useful: string; other: string; steps: string[] }> = {
  battery: { title: 'Battery', input: 'Chemical energy', useful: 'Electrical energy', other: 'Some energy is transferred as thermal energy because of internal resistance.', steps: ['Chemical', 'Electrical'] },
  lamp: { title: 'Electric lamp', input: 'Electrical energy', useful: 'Light energy', other: 'Thermal energy also spreads into the surroundings.', steps: ['Electrical', 'Light + thermal'] },
  fan: { title: 'Electric fan', input: 'Electrical energy', useful: 'Kinetic energy in the moving blades and air', other: 'Sound and thermal energy are also transferred to the surroundings.', steps: ['Electrical', 'Kinetic + sound + thermal'] },
  solar: { title: 'Solar panel', input: 'Light energy', useful: 'Electrical energy', other: 'Some incoming light is reflected or not converted by the panel.', steps: ['Light', 'Electrical'] },
  hydro: { title: 'Hydroelectric station', input: 'Gravitational potential energy of stored water', useful: 'Electrical energy', other: 'Some energy is transferred as sound and thermal energy during the process.', steps: ['Gravitational potential', 'Kinetic', 'Mechanical', 'Electrical'] }
};
const Choice = ({ active, children, onClick }: { active: boolean; children: React.ReactNode; onClick: () => void }) => (
  <button type="button" className={`gh-jhs1-science-choice${active ? ' is-active' : ''}`} aria-pressed={active} onClick={onClick}>{children}</button>
);

export const GhanaJhs3EnergyConversionVisual: React.FC = () => {
  const [device, setDevice] = useState<Device>('fan');
  const [input, setInput] = useState(100);
  const [useful, setUseful] = useState(80);
  const selected = DEVICES[device];
  const efficiency = (useful / input) * 100;
  return (
    <GhanaScienceVisual
      title="The Energy Transformation Alchemist"
      description="Trace energy changes in everyday devices, distinguish conversion from conservation, and calculate efficiency."
      lang="en"
      caption="Energy is conserved: it is transferred between stores and forms, not created or destroyed. Use only safe, teacher-approved classroom equipment for demonstrations."
    >
      <div className="gh-jhs1-science-interaction">
        <h4>1. Trace an energy transformation</h4>
        <div className="gh-jhs1-science-choices">
          <Choice active={device === 'battery'} onClick={() => setDevice('battery')}>Battery</Choice>
          <Choice active={device === 'lamp'} onClick={() => setDevice('lamp')}>Lamp</Choice>
          <Choice active={device === 'fan'} onClick={() => setDevice('fan')}>Fan</Choice>
          <Choice active={device === 'solar'} onClick={() => setDevice('solar')}>Solar panel</Choice>
          <Choice active={device === 'hydro'} onClick={() => setDevice('hydro')}>Hydroelectric station</Choice>
        </div>
        <div className="gh-jhs1-science-readout" aria-live="polite">
          <strong>{selected.title}</strong>
          <p><b>Input:</b> {selected.input}</p>
          <div className="gh-jhs1-science-choices" aria-label="Energy transformation stages">
            {selected.steps.map((step, index) => <span className="gh-jhs1-science-choice is-active" key={step}>{step}{index < selected.steps.length - 1 ? ' →' : ''}</span>)}
          </div>
          <p><b>Useful output:</b> {selected.useful}</p>
          <p><b>Other transfers:</b> {selected.other}</p>
        </div>
      </div>
      <div className="gh-jhs1-science-interaction">
        <h4>2. Conversion is not conservation</h4>
        <div className="gh-jhs1-science-readout">
          <p><b>Energy conversion</b> is a change from one form to another, such as electrical energy becoming light and thermal energy in a lamp.</p>
          <p><b>Conservation of energy</b> means the total energy in a closed system remains constant. Energy that spreads into the surroundings has not disappeared; it has become less useful for the task.</p>
          <p>For a fan, electrical input becomes useful movement plus sound and thermal transfers. All the energy transfers must be accounted for.</p>
        </div>
      </div>
      <div className="gh-jhs1-science-interaction">
        <h4>3. Calculate energy efficiency</h4>
        <p>Efficiency = (useful energy output ÷ total energy input) × 100%.</p>
        <div className="gh-jhs1-science-choices">
          <Choice active={input === 100} onClick={() => { setInput(100); setUseful(80); }}>100 J input</Choice>
          <Choice active={input === 200} onClick={() => { setInput(200); setUseful(150); }}>200 J input</Choice>
          <Choice active={input === 500} onClick={() => { setInput(500); setUseful(350); }}>500 J input</Choice>
        </div>
        <div className="gh-jhs1-science-choices">
          <Choice active={useful === 80 && input === 100} onClick={() => { setInput(100); setUseful(80); }}>80 J useful</Choice>
          <Choice active={useful === 150 && input === 200} onClick={() => { setInput(200); setUseful(150); }}>150 J useful</Choice>
          <Choice active={useful === 350 && input === 500} onClick={() => { setInput(500); setUseful(350); }}>350 J useful</Choice>
        </div>
        <div className="gh-jhs1-science-readout" aria-live="polite">
          <strong>Efficiency: {efficiency.toFixed(0)}%</strong>
          <p>({useful} J ÷ {input} J) × 100% = {efficiency.toFixed(0)}%.</p>
          <p>Energy transferred in other ways: {input - useful} J. The useful output cannot be greater than the total input.</p>
        </div>
      </div>
      <div className="gh-jhs1-science-interaction">
        <h4>4. Check the key ideas</h4>
        <div className="gh-jhs1-science-readout">
          <p><b>Battery:</b> chemical → electrical energy.</p>
          <p><b>Lamp:</b> electrical → light + thermal energy.</p>
          <p><b>Fan:</b> electrical → kinetic + sound + thermal energy.</p>
          <p><b>Solar panel:</b> light → electrical energy.</p>
          <p><b>Hydroelectric station:</b> gravitational potential → kinetic → mechanical → electrical energy.</p>
          <p><b>Efficiency:</b> useful output divided by total input, multiplied by 100%.</p>
        </div>
      </div>
    </GhanaScienceVisual>
  );
};

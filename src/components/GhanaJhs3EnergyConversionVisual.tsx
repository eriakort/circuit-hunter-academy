import React, { useState } from 'react';
import { GhanaScienceVisual } from './GhanaScienceVisual';

type Device = 'battery' | 'lamp' | 'fan' | 'solar' | 'hydro';
const DEVICES: Record<Device, { title: string; chain: string[]; useful: string; other: string; explanation: string }> = {
  battery: { title: 'Battery powering a torch', chain: ['Chemical', 'Electrical', 'Light'], useful: 'Light energy', other: 'Thermal energy in the battery and lamp', explanation: 'Stored chemical energy in the battery is transferred electrically to the lamp, which produces light and heat.' },
  lamp: { title: 'Electric lamp', chain: ['Electrical', 'Light + thermal'], useful: 'Light energy', other: 'Thermal energy warms the surroundings', explanation: 'A lamp changes electrical energy into light and thermal energy. The heat is a by-product when the goal is illumination.' },
  fan: { title: 'Electric fan', chain: ['Electrical', 'Kinetic', 'Sound + thermal'], useful: 'Kinetic energy of moving air', other: 'Sound and thermal energy', explanation: 'The motor transfers electrical energy into movement of the blades and air. Some energy is also transferred to the surroundings as sound and heat.' },
  solar: { title: 'Solar panel', chain: ['Light', 'Electrical'], useful: 'Electrical energy', other: 'Some energy is reflected or transferred as thermal energy', explanation: 'Photovoltaic cells convert energy carried by sunlight into electrical energy.' },
  hydro: { title: 'Hydroelectric station', chain: ['Gravitational potential', 'Kinetic', 'Mechanical', 'Electrical'], useful: 'Electrical energy', other: 'Sound and thermal energy in equipment and surroundings', explanation: 'Water stored at height has gravitational potential energy. Falling water moves a turbine, which drives a generator to produce electrical energy.' }
};
const Choice = ({ active, children, onClick }: { active: boolean; children: React.ReactNode; onClick: () => void }) => (
  <button type="button" className={`gh-jhs1-science-choice${active ? ' is-active' : ''}`} aria-pressed={active} onClick={onClick}>{children}</button>
);

export const GhanaJhs3EnergyConversionVisual: React.FC = () => {
  const [device, setDevice] = useState<Device>('fan');
  const [useful, setUseful] = useState(80);
  const [input, setInput] = useState(100);
  const selected = DEVICES[device];
  const efficiency = input > 0 ? Math.min(100, (useful / input) * 100) : 0;
  return (
    <GhanaScienceVisual
      title="The Energy Transformation Alchemist"
      description="Trace energy through everyday devices, identify useful and other transfers, and calculate efficiency."
      lang="en"
      caption="Energy is not destroyed when a device warms up. It is transferred to the surroundings, often becoming less useful for the device's main task."
    >
      <div className="gh-jhs1-science-interaction">
        <h4>1. Follow the energy transformations</h4>
        <div className="gh-jhs1-science-choices">
          <Choice active={device === 'battery'} onClick={() => setDevice('battery')}>Battery and torch</Choice>
          <Choice active={device === 'lamp'} onClick={() => setDevice('lamp')}>Electric lamp</Choice>
          <Choice active={device === 'fan'} onClick={() => setDevice('fan')}>Electric fan</Choice>
          <Choice active={device === 'solar'} onClick={() => setDevice('solar')}>Solar panel</Choice>
          <Choice active={device === 'hydro'} onClick={() => setDevice('hydro')}>Hydroelectric station</Choice>
        </div>
        <div className="gh-jhs1-science-readout" aria-live="polite">
          <strong>{selected.title}</strong>
          <div className="gh-jhs1-science-choices" aria-label="Energy transformation sequence">
            {selected.chain.map((step, index) => <React.Fragment key={step}>
              <span className="gh-jhs1-science-choice is-active">{step} energy</span>
              {index < selected.chain.length - 1 && <span aria-hidden="true">→</span>}
            </React.Fragment>)}
          </div>
          <p>{selected.explanation}</p>
          <p><b>Useful output:</b> {selected.useful}.</p>
          <p><b>Other transfers:</b> {selected.other}.</p>
        </div>
      </div>
      <div className="gh-jhs1-science-interaction">
        <h4>2. Conversion is not destruction</h4>
        <div className="gh-jhs1-science-readout">
          <p><b>Energy conversion</b> changes energy from one form to another. <b>Conservation</b> means the total energy in a closed system remains constant.</p>
          <p>A warm motor has not made energy disappear. Some input energy has been transferred to the surroundings as thermal energy and sound. It may be less useful for turning the fan, but it still exists.</p>
          <p><b>Remember:</b> useful energy + other energy transfers account for the total energy input.</p>
        </div>
      </div>
      <div className="gh-jhs1-science-interaction">
        <h4>3. Calculate efficiency</h4>
        <div className="gh-jhs1-science-choices">
          <Choice active={useful === 80} onClick={() => setUseful(80)}>80 J useful output</Choice>
          <Choice active={useful === 60} onClick={() => setUseful(60)}>60 J useful output</Choice>
          <Choice active={useful === 45} onClick={() => setUseful(45)}>45 J useful output</Choice>
        </div>
        <div className="gh-jhs1-science-choices">
          <Choice active={input === 100} onClick={() => setInput(100)}>100 J input</Choice>
          <Choice active={input === 120} onClick={() => setInput(120)}>120 J input</Choice>
          <Choice active={input === 150} onClick={() => setInput(150)}>150 J input</Choice>
        </div>
        <div className="gh-jhs1-science-readout" aria-live="polite">
          <strong>Efficiency: {efficiency.toFixed(1)}%</strong>
          <p>Efficiency = (useful energy output ÷ total energy input) × 100%</p>
          <p>({useful} J ÷ {input} J) × 100% = {efficiency.toFixed(1)}%.</p>
          <p>For the default example, 80 J ÷ 100 J × 100% = 80%. The remaining 20 J is transferred in other forms.</p>
          {useful > input && <p role="alert">Useful output cannot exceed total input in this simple energy account.</p>}
        </div>
      </div>
      <div className="gh-jhs1-science-interaction">
        <h4>4. Improve a device</h4>
        <div className="gh-jhs1-science-readout">
          <p>Reduce unwanted transfers: lubricate moving parts to reduce friction, use efficient motors and lamps, insulate hot equipment where appropriate, and switch off devices when they are not needed.</p>
          <p>Higher efficiency means a greater fraction of the input energy becomes the useful output. It does not mean energy is created or that all other transfers vanish.</p>
        </div>
      </div>
    </GhanaScienceVisual>
  );
};

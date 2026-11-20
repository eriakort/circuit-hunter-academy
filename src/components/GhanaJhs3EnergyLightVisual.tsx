import React, { useState } from 'react';
import { GhanaScienceVisual } from './GhanaScienceVisual';

type Lab = 'energy' | 'pinhole' | 'shadow' | 'refraction';
const LABS: Record<Lab, { title: string; explanation: string; observation: string }> = {
  energy: {
    title: 'Electrical energy use',
    explanation: 'Electrical energy in kilowatt-hours (kWh) = power in kilowatts (kW) × time in hours. Divide watts by 1,000 to convert watts to kilowatts.',
    observation: 'A 1,000 W appliance is 1 kW. If it runs for 3 hours, it uses 3 kWh.'
  },
  pinhole: {
    title: 'Pinhole camera',
    explanation: 'Light travels in straight lines through a uniform transparent medium. Rays from the top and bottom of an object cross at the tiny aperture.',
    observation: 'The image on the screen is inverted: the top of the object appears at the bottom, and the bottom appears at the top.'
  },
  shadow: {
    title: 'Shadows and light',
    explanation: 'An opaque object blocks light. The umbra is the fully shaded central region; the penumbra is the partly shaded region produced by a source with noticeable size.',
    observation: 'Move an object closer to a torch and its shadow usually becomes larger. Move it closer to the screen and the shadow usually becomes smaller.'
  },
  refraction: {
    title: 'Refraction',
    explanation: 'When light passes between materials such as air and water, its speed changes. Its direction may bend at the boundary; this is refraction.',
    observation: 'A straw partly under water can appear bent or displaced. The straw is not actually broken.'
  }
};
const Choice = ({ active, children, onClick }: { active: boolean; children: React.ReactNode; onClick: () => void }) => (
  <button type="button" className={`gh-jhs1-science-choice${active ? ' is-active' : ''}`} aria-pressed={active} onClick={onClick}>{children}</button>
);

export const GhanaJhs3EnergyLightVisual: React.FC = () => {
  const [lab, setLab] = useState<Lab>('energy');
  const [watts, setWatts] = useState(1000);
  const [hours, setHours] = useState(3);
  const selected = LABS[lab];
  const energy = (watts / 1000) * hours;
  return (
    <GhanaScienceVisual
      title="The Energy Conservation Guardian"
      description="Explore practical energy saving, calculate electricity use and investigate how light travels."
      lang="en"
      caption="Use safe classroom equipment such as a torch, card and screen. Never look directly at the Sun or use a laser for these investigations."
    >
      <div className="gh-jhs1-science-interaction">
        <h4>1. Reduce energy waste</h4>
        <div className="gh-jhs1-science-readout">
          <p>Switch off lights and appliances when they are not needed. Choose efficient lamps and appliances, avoid unnecessary standby use, and use electricity thoughtfully.</p>
          <p>Energy is transferred between forms. It is not created from nothing or destroyed; the total amount is conserved in a closed system.</p>
        </div>
      </div>
      <div className="gh-jhs1-science-interaction">
        <h4>2. Calculate electrical energy</h4>
        <div className="gh-jhs1-science-choices">
          <Choice active={watts === 500} onClick={() => setWatts(500)}>500 W appliance</Choice>
          <Choice active={watts === 1000} onClick={() => setWatts(1000)}>1,000 W appliance</Choice>
          <Choice active={watts === 2000} onClick={() => setWatts(2000)}>2,000 W appliance</Choice>
        </div>
        <div className="gh-jhs1-science-choices">
          <Choice active={hours === 1} onClick={() => setHours(1)}>1 hour</Choice>
          <Choice active={hours === 2} onClick={() => setHours(2)}>2 hours</Choice>
          <Choice active={hours === 3} onClick={() => setHours(3)}>3 hours</Choice>
          <Choice active={hours === 4} onClick={() => setHours(4)}>4 hours</Choice>
        </div>
        <div className="gh-jhs1-science-readout" aria-live="polite">
          <strong>Energy used: {energy.toFixed(2)} kWh</strong>
          <p>{watts} W = {(watts / 1000).toFixed(2)} kW; {(watts / 1000).toFixed(2)} kW × {hours} hours = {energy.toFixed(2)} kWh.</p>
          <p>Remember: energy (kWh) = power (kW) × time (hours).</p>
        </div>
      </div>
      <div className="gh-jhs1-science-interaction">
        <h4>3. Explore light</h4>
        <div className="gh-jhs1-science-choices">
          <Choice active={lab === 'pinhole'} onClick={() => setLab('pinhole')}>Pinhole camera</Choice>
          <Choice active={lab === 'shadow'} onClick={() => setLab('shadow')}>Shadows</Choice>
          <Choice active={lab === 'refraction'} onClick={() => setLab('refraction')}>Refraction</Choice>
        </div>
        <div className="gh-jhs1-science-readout" aria-live="polite">
          <strong>{selected.title}</strong>
          <p>{selected.explanation}</p>
          <p><b>What to observe:</b> {selected.observation}</p>
        </div>
      </div>
      <div className="gh-jhs1-science-interaction">
        <h4>4. Check your understanding</h4>
        <div className="gh-jhs1-science-readout">
          <p><b>Pinhole image:</b> inverted because light rays cross at the aperture.</p>
          <p><b>Shadow:</b> formed when an opaque object blocks light; identify the umbra and penumbra.</p>
          <p><b>Refraction:</b> bending of light as it changes speed between different materials.</p>
          <p>Keep these ideas distinct: a pinhole image is formed by straight-line travel, a shadow by blocked light, and refraction by a change in direction at a boundary.</p>
        </div>
      </div>
    </GhanaScienceVisual>
  );
};

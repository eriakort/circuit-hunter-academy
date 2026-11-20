import React, { useState } from 'react';
import { GhanaScienceVisual } from './GhanaScienceVisual';

type Route = 'body' | 'lungs' | 'heart';
type BloodPart = 'plasma' | 'red' | 'white' | 'platelets';

const PARTS: Record<BloodPart, { label: string; role: string; detail: string }> = {
  plasma: { label: 'Plasma', role: 'Liquid transport medium', detail: 'Carries dissolved nutrients, hormones, carbon dioxide and waste products around the body.' },
  red: { label: 'Red blood cells', role: 'Oxygen transport', detail: 'Contain haemoglobin, which binds oxygen in the lungs and releases it to body tissues.' },
  white: { label: 'White blood cells', role: 'Body defence', detail: 'Help protect the body by recognising and responding to pathogens.' },
  platelets: { label: 'Platelets', role: 'Blood clotting', detail: 'Help form a clot at a damaged blood vessel and reduce blood loss.' }
};

const Choice = ({ active, children, onClick }: { active: boolean; children: React.ReactNode; onClick: () => void }) => (
  <button type="button" className={`gh-jhs1-science-choice${active ? ' is-active' : ''}`} aria-pressed={active} onClick={onClick}>{children}</button>
);

export const GhanaJhs3CirculationRespirationVisual: React.FC = () => {
  const [route, setRoute] = useState<Route>('body');
  const [part, setPart] = useState<BloodPart>('red');
  const routeDetails: Record<Route, { title: string; description: string; oxygen: string; direction: string }> = {
    body: { title: 'Body tissues', description: 'The left side of the heart pumps oxygen-rich blood through arteries. Capillaries allow oxygen and nutrients to move from blood into cells.', oxygen: 'Oxygen moves from blood into body cells.', direction: 'Heart → body tissues → veins' },
    lungs: { title: 'Lungs and alveoli', description: 'Blood arriving from the right side of the heart passes through lung capillaries. Oxygen diffuses from air in the alveoli into blood; carbon dioxide diffuses into the alveoli.', oxygen: 'Blood releases carbon dioxide and takes up oxygen.', direction: 'Heart → lungs → heart' },
    heart: { title: 'Heart chambers', description: 'The right atrium receives blood returning from the body and the right ventricle sends it to the lungs. The left atrium receives blood from the lungs and the left ventricle pumps it to the body. Valves help prevent backflow.', oxygen: 'Right side: blood to lungs. Left side: blood to body.', direction: 'Body → right heart → lungs → left heart → body' }
  };
  const selected = routeDetails[route];
  return (
    <GhanaScienceVisual
      title="The Circulation and Respiration Navigator"
      description="Follow oxygen from the air to body cells and discover how the heart, blood and blood vessels work together."
      lang="en"
      caption="This learning model simplifies the human circulatory and respiratory systems. It is for science education, not for diagnosing or treating health conditions."
    >
      <div className="gh-jhs1-science-interaction">
        <h4>1. Trace the blood route</h4>
        <p>Choose a part of the journey to see what happens there.</p>
        <div className="gh-jhs1-science-choices">
          <Choice active={route === 'body'} onClick={() => setRoute('body')}>Body tissues</Choice>
          <Choice active={route === 'lungs'} onClick={() => setRoute('lungs')}>Lungs and alveoli</Choice>
          <Choice active={route === 'heart'} onClick={() => setRoute('heart')}>Heart chambers</Choice>
        </div>
        <div className="gh-jhs1-science-readout" aria-live="polite">
          <strong>{selected.title}</strong>
          <svg viewBox="0 0 320 150" role="img" aria-label="Simplified circulation route connecting heart, lungs and body tissues">
            <rect x="12" y="28" width="82" height="56" rx="12" fill="#dcefe7" stroke="#287653" strokeWidth="2"/>
            <rect x="119" y="28" width="82" height="56" rx="12" fill="#f8e4e5" stroke="#a94350" strokeWidth="2"/>
            <rect x="226" y="28" width="82" height="56" rx="12" fill="#e5eafa" stroke="#405f9b" strokeWidth="2"/>
            <g fill="#20352c" fontSize="11" textAnchor="middle"><text x="53" y="52">BODY</text><text x="53" y="67">TISSUES</text><text x="160" y="52">HEART</text><text x="160" y="67">PUMP</text><text x="267" y="52">LUNGS</text><text x="267" y="67">ALVEOLI</text></g>
            <path d="M94 42 H119 M201 42 H226" stroke="#b34450" strokeWidth="4" fill="none"/><path d="M226 72 H201 M119 72 H94" stroke="#426da4" strokeWidth="4" fill="none"/>
            <path d="M113 37 l6 5 -6 5 M220 37 l6 5 -6 5 M207 67 l-6 5 6 5 M100 67 l-6 5 6 5" stroke="#20352c" strokeWidth="2" fill="none"/>
            <text x="160" y="111" fill="currentColor" fontSize="10" textAnchor="middle">Red: oxygen-rich · Blue: oxygen-poor</text>
            <text x="160" y="129" fill="currentColor" fontSize="10" textAnchor="middle">Arteries carry blood away; veins return it</text>
          </svg>
          <p>{selected.description}</p>
          <p><b>Oxygen change:</b> {selected.oxygen}</p>
          <p><b>Route summary:</b> {selected.direction}</p>
        </div>
      </div>
      <div className="gh-jhs1-science-interaction">
        <h4>2. Explore the four parts of blood</h4>
        <div className="gh-jhs1-science-choices">
          {(Object.keys(PARTS) as BloodPart[]).map(key => <Choice key={key} active={part === key} onClick={() => setPart(key)}>{PARTS[key].label}</Choice>)}
        </div>
        <div className="gh-jhs1-science-readout" aria-live="polite">
          <strong>{PARTS[part].label}</strong>
          <p><b>Main role:</b> {PARTS[part].role}.</p>
          <p>{PARTS[part].detail}</p>
        </div>
      </div>
      <div className="gh-jhs1-science-interaction">
        <h4>3. Breathing is not the same as cellular respiration</h4>
        <div className="gh-jhs1-science-readout">
          <p><b>Breathing (ventilation):</b> movement of air into and out of the lungs.</p>
          <p><b>Gas exchange:</b> oxygen moves from alveoli into blood, while carbon dioxide moves from blood into alveoli.</p>
          <p><b>Cellular respiration:</b> a chemical process in cells that releases energy from glucose. In aerobic respiration, glucose and oxygen produce carbon dioxide, water and energy.</p>
          <p><b>Remember:</b> the lungs bring oxygen into the blood; the circulatory system transports it to cells; cells use it during aerobic respiration.</p>
        </div>
      </div>
      <div className="gh-jhs1-science-interaction">
        <h4>4. Check your understanding</h4>
        <div className="gh-jhs1-science-readout">
          <p><b>Arteries:</b> carry blood away from the heart. They do not always carry oxygen-rich blood.</p>
          <p><b>Veins:</b> carry blood towards the heart. They do not always carry oxygen-poor blood.</p>
          <p><b>Capillaries:</b> tiny vessels with thin walls where substances are exchanged between blood and tissues.</p>
          <p><b>Valves:</b> help keep blood moving in the correct direction through the heart and some veins.</p>
        </div>
      </div>
    </GhanaScienceVisual>
  );
};

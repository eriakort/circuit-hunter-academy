import React, { useState } from 'react';
import { GhanaScienceVisual } from './GhanaScienceVisual';

type ConditionType = 'communicable' | 'nonCommunicable';

const CONDITION_GUIDES: Record<ConditionType, { label: string; examples: string; spread: string; response: string }> = {
  communicable: {
    label: 'Communicable conditions',
    examples: 'Some respiratory infections, malaria and ringworm',
    spread: 'Depending on the disease, germs may spread through air, contaminated food or water, insects, blood or direct contact.',
    response: 'Use disease-specific prevention, such as clean water, hand hygiene, appropriate insect protection and advice from qualified health workers.'
  },
  nonCommunicable: {
    label: 'Non-communicable diseases (NCDs)',
    examples: 'Some heart diseases, diabetes and many cancers',
    spread: 'NCDs do not spread directly from one person to another. They can have several causes, including inherited, environmental and behavioural factors.',
    response: 'Support healthy environments and habits, reduce known risk exposures, and use appropriate screening and professional healthcare advice.'
  }
};

export const GhanaJhs3HumanHealthVisual: React.FC = () => {
  const [selected, setSelected] = useState<ConditionType>('communicable');
  const guide = CONDITION_GUIDES[selected];

  return (
    <GhanaScienceVisual
      title="The Community Health Detective Lab"
      description="Compare communicable and non-communicable diseases, investigate risk factors and choose evidence-based prevention."
      lang="en"
      caption="This learning activity is for science education. It does not diagnose illness or replace advice from a qualified healthcare professional."
    >
      <div className="gh-jhs1-science-interaction">
        <h4>1. Classify the condition</h4>
        <p>Choose a group to compare how conditions affect communities.</p>
        <div className="gh-jhs1-science-choices">
          <button type="button" className={selected === 'communicable' ? 'gh-jhs1-science-choice is-active' : 'gh-jhs1-science-choice'} aria-pressed={selected === 'communicable'} onClick={() => setSelected('communicable')}>Communicable</button>
          <button type="button" className={selected === 'nonCommunicable' ? 'gh-jhs1-science-choice is-active' : 'gh-jhs1-science-choice'} aria-pressed={selected === 'nonCommunicable'} onClick={() => setSelected('nonCommunicable')}>Non-communicable</button>
        </div>
        <div className="gh-jhs1-science-readout" aria-live="polite">
          <strong>{guide.label}</strong>
          <p><b>Examples:</b> {guide.examples}</p>
          <p><b>How it behaves:</b> {guide.spread}</p>
          <p><b>Prevention and response:</b> {guide.response}</p>
        </div>
        <div className="gh-jhs1-science-readout">
          <p><b>Key difference:</b> communicable conditions can be transmitted by particular routes; non-communicable diseases (NCDs) do not spread directly from person to person. These are the two groups being compared in this lab.</p>
          <p>Not every infection spreads in the same way, and not every NCD has the same risk factors. Always match prevention to the condition and reliable health guidance.</p>
        </div>
      </div>
      <div className="gh-jhs1-science-interaction">
        <h4>2. Trace the chain of infection</h4>
        <div className="gh-jhs1-science-readout">
          <ol>
            <li><b>Germ:</b> an infectious organism, such as a virus, bacterium, fungus or parasite.</li>
            <li><b>Source:</b> where the germ lives or comes from.</li>
            <li><b>Route:</b> how it reaches another person, such as through contaminated water, droplets, an insect vector or direct contact.</li>
            <li><b>Entry:</b> how it enters the body.</li>
            <li><b>Prevention:</b> interrupt the relevant route using safe, disease-specific measures.</li>
          </ol>
          <p>For example, safe water and sanitation can reduce some water-borne infections, while appropriate insect-control measures can reduce diseases spread by insect vectors.</p>
        </div>
      </div>
      <div className="gh-jhs1-science-interaction">
        <h4>3. Investigate health risk factors</h4>
        <div className="gh-jhs1-science-readout">
          <p><b>Individual factors:</b> nutrition, physical activity, sleep, personal choices and inherited characteristics can influence health.</p>
          <p><b>Environmental factors:</b> clean air and water, housing, sanitation, workplace safety and access to healthcare also matter.</p>
          <p><b>Social factors:</b> education, income, support networks and access to reliable information can affect opportunities to stay healthy.</p>
          <p>Risk factors change probabilities; they do not prove that a person will develop a disease. Avoid blaming or labelling people who are ill.</p>
        </div>
      </div>
      <div className="gh-jhs1-science-interaction">
        <h4>4. Choose a responsible health response</h4>
        <div className="gh-jhs1-science-readout">
          <p>Use trustworthy public-health information, follow local health guidance, and seek a qualified healthcare professional for worrying or persistent symptoms.</p>
          <p>Do not diagnose someone from a single symptom, spread rumours, share prescription medicines or use unverified treatments.</p>
          <p>Healthy communities combine prevention, respectful support, safe environments and access to appropriate healthcare.</p>
        </div>
      </div>
    </GhanaScienceVisual>
  );
};

import React, { useState } from 'react';
import { GhanaScienceVisual } from './GhanaScienceVisual';

type Action = 'forests' | 'energy' | 'communities';
const ACTIONS: Record<Action, { label: string; impact: string; evidence: string }> = {
  forests: {
    label: 'Protect and restore forests',
    impact: 'Healthy forests store carbon, protect habitats, reduce erosion and support water cycles.',
    evidence: 'Track tree survival, forest cover, biodiversity and community participation over time.'
  },
  energy: {
    label: 'Use cleaner energy efficiently',
    impact: 'Renewable electricity, efficient appliances and clean cooking can reduce fossil-fuel use and air pollution.',
    evidence: 'Compare energy generated or saved, reliability, affordability and emissions avoided.'
  },
  communities: {
    label: 'Build climate-resilient communities',
    impact: 'Flood-aware planning, drainage maintenance, early warnings and climate-smart farming can reduce local risks.',
    evidence: 'Monitor flood impacts, crop losses, access to warnings and who benefits from each action.'
  }
};

export const GhanaJhs3ClimateActionVisual: React.FC = () => {
  const [selected, setSelected] = useState<Action>('forests');
  const action = ACTIONS[selected];

  return (
    <GhanaScienceVisual
      title="The Ghana Climate Action Observatory"
      description="Explore the greenhouse effect, distinguish climate drivers and evaluate practical actions using evidence."
      lang="en"
      caption="Climate solutions should be assessed fairly: consider effectiveness, cost, reliability, local needs and long-term effects."
    >
      <div className="gh-jhs1-science-interaction">
        <h4>1. Trace the greenhouse effect</h4>
        <div className="gh-jhs1-science-readout">
          <p><b>Incoming sunlight:</b> energy from the Sun passes through the atmosphere and warms Earth's surface.</p>
          <p><b>Outgoing heat:</b> the warm surface releases energy as infrared radiation.</p>
          <p><b>Greenhouse gases:</b> gases such as carbon dioxide and methane absorb and re-emit some outgoing infrared energy, warming the lower atmosphere.</p>
          <p><b>Enhanced greenhouse effect:</b> human activities increase greenhouse-gas concentrations, strengthening this warming influence and changing the climate.</p>
        </div>
      </div>
      <div className="gh-jhs1-science-interaction">
        <h4>2. Separate climate drivers</h4>
        <div className="gh-jhs1-science-readout">
          <p><b>Natural influences:</b> volcanic eruptions, changes in solar energy and long-term variations in Earth's orbit can affect climate.</p>
          <p><b>Human influences:</b> burning fossil fuels, deforestation, some farming practices and industrial processes add greenhouse gases or change land surfaces.</p>
          <p><b>Weather and climate:</b> weather describes short-term atmospheric conditions; climate describes patterns measured over many years.</p>
        </div>
      </div>
      <div className="gh-jhs1-science-interaction">
        <h4>3. Investigate a climate action</h4>
        <p>Select an action to examine its benefits and the evidence that could show whether it works.</p>
        <div className="gh-jhs1-science-choices">
          {(Object.keys(ACTIONS) as Action[]).map(key => (
            <button type="button" key={key} className={selected === key ? 'gh-jhs1-science-choice is-active' : 'gh-jhs1-science-choice'} aria-pressed={selected === key} onClick={() => setSelected(key)}>
              {ACTIONS[key].label}
            </button>
          ))}
        </div>
        <div className="gh-jhs1-science-readout" aria-live="polite">
          <strong>{action.label}</strong>
          <p><b>Potential benefits:</b> {action.impact}</p>
          <p><b>Evidence to collect:</b> {action.evidence}</p>
        </div>
        <div className="gh-jhs1-science-readout">
          <p><b>Mitigation</b> reduces greenhouse-gas emissions or increases carbon storage. <b>Adaptation</b> prepares people and ecosystems for climate impacts that occur or are expected.</p>
          <p>A strong climate plan can combine mitigation and adaptation while protecting livelihoods and biodiversity.</p>
        </div>
      </div>
      <div className="gh-jhs1-science-interaction">
        <h4>4. Evaluate a green-economy initiative</h4>
        <div className="gh-jhs1-science-readout">
          <p>A <b>green economy</b> aims to improve well-being and livelihoods while reducing environmental risks and pressure on natural resources.</p>
          <p>Compare cost, emissions, jobs, fairness, reliability, resource use and long-term results. Use trustworthy measurements and identify who benefits or may be left out.</p>
          <p>In Ghana, examples to investigate include forest restoration, renewable energy, clean cooking, sustainable farming and improved waste management. Distinguish measured outcomes from promises or misinformation.</p>
        </div>
      </div>
    </GhanaScienceVisual>
  );
};

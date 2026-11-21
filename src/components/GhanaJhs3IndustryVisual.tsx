import React, { useState } from 'react';
import { GhanaScienceVisual } from './GhanaScienceVisual';

type Industry = 'food' | 'textiles' | 'pottery' | 'soap';

export const INDUSTRIES: Record<Industry, { label: string; inputs: string; science: string; checks: string }> = {
  food: {
    label: 'Food processing',
    inputs: 'Crops, clean water, suitable containers and energy',
    science: 'Drying removes moisture; heating can destroy many microorganisms; fermentation uses helpful microorganisms to change food.',
    checks: 'Clean equipment, safe temperatures, suitable storage and product quality'
  },
  textiles: {
    label: 'Textiles and weaving',
    inputs: 'Fibres, yarn, dyes, looms and skilled labour',
    science: 'Fibres are spun into yarn and interlaced to make fabric. Dyes attach colour to fibres through physical and chemical processes.',
    checks: 'Fibre strength, colour fastness, pattern accuracy and safe dye handling'
  },
  pottery: {
    label: 'Pottery and ceramics',
    inputs: 'Suitable clay, water, shaping tools and a kiln',
    science: 'Clay is shaped, dried and fired. Heating drives out water and causes changes that make the ceramic hard and durable.',
    checks: 'Even drying, controlled firing, cracks and suitability for the intended use'
  },
  soap: {
    label: 'Soap production',
    inputs: 'Suitable oils or fats, an alkali handled by trained adults, water and safe equipment',
    science: 'Saponification is a chemical reaction between fats or oils and an alkali that produces soap and glycerol.',
    checks: 'Correct formulation, safe handling, product quality and appropriate curing'
  }
};

const TYPES: Industry[] = ['food', 'textiles', 'pottery', 'soap'];

export const GhanaJhs3IndustryVisual: React.FC = () => {
  const [selected, setSelected] = useState<Industry>('food');
  const process = INDUSTRIES[selected];

  return (
    <GhanaScienceVisual
      title="The Ghana Industry Innovation Studio"
      description="Trace the science in familiar products, compare production methods and evaluate how industry can serve people and the environment."
      lang="en"
      caption="Industrial processes require trained workers, suitable equipment and safety controls. Never experiment with industrial chemicals or hot equipment without qualified supervision."
    >
      <div className="gh-jhs1-science-interaction">
        <h4>1. Explore a production process</h4>
        <p>Select an industry to investigate its materials, scientific principles and quality checks.</p>
        <div className="gh-jhs1-science-choices">
          {TYPES.map(type => (
            <button type="button" key={type} className={selected === type ? 'gh-jhs1-science-choice is-active' : 'gh-jhs1-science-choice'} aria-pressed={selected === type} onClick={() => setSelected(type)}>
              {INDUSTRIES[type].label}
            </button>
          ))}
        </div>
        <div className="gh-jhs1-science-readout" aria-live="polite">
          <strong>{process.label}</strong>
          <p><b>Materials and inputs:</b> {process.inputs}</p>
          <p><b>Science in action:</b> {process.science}</p>
          <p><b>Quality and safety checks:</b> {process.checks}</p>
        </div>
        <div className="gh-jhs1-science-readout">
          <p><b>Key idea:</b> industries use scientific knowledge, materials, energy and skilled work to turn inputs into useful goods or services.</p>
          <p>Food processing, textiles, pottery, soap making, cement production, mining and wood processing are examples of industrial activities found in Ghana. Soap making uses saponification, a reaction between fats or oils and an alkali that produces soap and glycerol.</p>
        </div>
      </div>
      <div className="gh-jhs1-science-interaction">
        <h4>2. Compare indigenous and modern methods</h4>
        <div className="gh-jhs1-science-readout">
          <p><b>Indigenous production:</b> locally developed knowledge and skills passed through communities, such as traditional weaving, pottery, shea butter processing and food fermentation.</p>
          <p><b>Modern production:</b> may use powered machinery, automated controls, precise measurement and large-scale energy systems.</p>
          <p>Both approaches use science and skilled work. Modern tools can improve speed or consistency, while local knowledge can preserve cultural value and suit local materials and needs.</p>
        </div>
      </div>
      <div className="gh-jhs1-science-interaction">
        <h4>3. Follow the production chain</h4>
        <div className="gh-jhs1-science-readout">
          <ol>
            <li><b>Choose inputs:</b> identify suitable raw materials, water, energy and tools.</li>
            <li><b>Prepare:</b> clean, measure, sort or process materials safely.</li>
            <li><b>Transform:</b> use a physical or chemical process to make the product.</li>
            <li><b>Check quality:</b> test whether the product meets safety and quality requirements.</li>
            <li><b>Package and distribute:</b> protect the product and transport it responsibly.</li>
          </ol>
          <p>Different industries use different processes. A food factory may heat or dry materials, while a textile workshop spins fibres and weaves yarn.</p>
        </div>
      </div>
      <div className="gh-jhs1-science-interaction">
        <h4>4. Evaluate an industry responsibly</h4>
        <div className="gh-jhs1-science-readout">
          <p><b>Product and people:</b> consider quality, affordability, worker skills, employment and cultural value.</p>
          <p><b>Resources and environment:</b> consider energy and water use, raw materials, emissions, waste and safe disposal.</p>
          <p><b>Fair comparison:</b> assess safety, cost, reliability and environmental effects using evidence rather than assuming one method is always better.</p>
          <p>Local knowledge and modern technology can complement one another. Innovation should improve livelihoods while protecting workers, communities and the environment.</p>
        </div>
      </div>
    </GhanaScienceVisual>
  );
};

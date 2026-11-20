import React, { useState } from 'react';
import { GhanaScienceVisual } from './GhanaScienceVisual';

type PlantPart = 'roots' | 'stems' | 'leaves' | 'flowers' | 'fruits';

const PLANT_PARTS: Record<PlantPart, { label: string; role: string; agricultural: string[]; other: string[]; care: string }> = {
  roots: {
    label: 'Roots',
    role: 'Roots anchor many plants and absorb water and mineral nutrients. Some roots also store food.',
    agricultural: ['Cassava and yam roots are important foods.', 'Some root materials can be used in animal feed after safe preparation.'],
    other: ['Some roots provide fibres or materials used in traditional crafts.'],
    care: 'Harvest edible roots carefully and replant or manage crops so the soil remains covered and productive.'
  },
  stems: {
    label: 'Stems',
    role: 'Stems support leaves and flowers and transport water, minerals and sugars. Some stems store food.',
    agricultural: ['Sugarcane stems are processed for sugar.', 'Stems and crop residues can be used as mulch or compost when suitable.'],
    other: ['Timber from suitable trees can be used for furniture and construction.', 'Bamboo stems can be used for crafts and simple structures.'],
    care: 'Use timber and bamboo from responsibly managed sources. Avoid damaging protected trees and habitats.'
  },
  leaves: {
    label: 'Leaves',
    role: 'Leaves capture light for photosynthesis and exchange gases with the air.',
    agricultural: ['Some leaves are eaten as vegetables.', 'Suitable leaves and crop residues can be used as animal fodder or compost.'],
    other: ['Leaves can be used for wrapping food, weaving and crafts.'],
    care: 'Collect only what is needed. Leave enough healthy leaves for the plant to keep growing.'
  },
  flowers: {
    label: 'Flowers',
    role: 'Flowers are involved in plant reproduction. After pollination and fertilisation, some flowers develop into fruits and seeds.',
    agricultural: ['Some flowers are foods or spices.', 'Flowers support pollinators that help many crops produce fruits and seeds.'],
    other: ['Flowers are used for decoration and some cultural activities.'],
    care: 'Protect pollinators and avoid collecting flowers from rare or protected plants.'
  },
  fruits: {
    label: 'Fruits',
    role: 'Fruits develop from flowers and often protect seeds. Many fruits are important foods.',
    agricultural: ['Mango, orange, pawpaw and tomato fruits are used as food.', 'Fruit remains can be composted when they are free from unsuitable contaminants.'],
    other: ['Some fruits provide oils, fibres, dyes or materials for crafts.'],
    care: 'Reduce food waste, use safe processing methods and avoid harvesting unripe or protected wild fruits.'
  }
};

const Choice = ({ active, children, onClick }: { active: boolean; children: React.ReactNode; onClick: () => void }) => (
  <button type="button" className={`gh-jhs1-science-choice${active ? ' is-active' : ''}`} aria-pressed={active} onClick={onClick}>{children}</button>
);

export const GhanaJhs3PlantResourcesVisual: React.FC = () => {
  const [part, setPart] = useState<PlantPart>('roots');
  const selected = PLANT_PARTS[part];

  return (
    <GhanaScienceVisual
      title="The Plant Resources Explorer"
      description="Discover how roots, stems, leaves, flowers and fruits support life and provide useful materials for people."
      lang="en"
      caption="Plant uses vary by species and local practice. Use correctly identified, safe materials and protect biodiversity."
    >
      <div className="gh-jhs1-science-interaction">
        <h4>1. Explore the parts of a plant</h4>
        <p>Each plant part has a role in growth and survival. Select a part to investigate its functions and useful products.</p>
        <div className="gh-jhs1-science-readout">
          <svg viewBox="0 0 340 220" role="img" aria-label="Plant diagram showing roots, stem, leaves, flower and fruit">
            <g fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M166 116 C166 93 165 67 166 35" stroke="#287653" strokeWidth="7"/>
              <path d="M166 72 C145 58 125 56 110 63 C124 81 143 84 166 78" fill="#8fc99a" stroke="#287653" strokeWidth="2"/>
              <path d="M166 87 C188 67 207 65 224 73 C211 90 191 96 166 92" fill="#8fc99a" stroke="#287653" strokeWidth="2"/>
              <path d="M166 36 C154 25 148 14 154 7 C166 10 171 20 166 36 M166 36 C171 18 182 11 191 16 C190 29 180 36 166 36" fill="#f4c7d3" stroke="#a94350" strokeWidth="2"/>
              <circle cx="166" cy="35" r="5" fill="#e8b84b" stroke="#a77919" strokeWidth="1"/>
              <path d="M166 116 C153 137 144 151 132 169 M166 116 C178 139 188 151 199 173 M166 116 C164 143 165 160 165 190 M132 169 L116 184 M132 169 L139 194 M199 173 L215 188 M199 173 L191 199 M165 190 L154 207 M165 190 L177 207" stroke="#9b7134" strokeWidth="4"/>
              <path d="M205 105 C219 99 232 107 229 119 C226 132 210 133 204 121 C200 115 201 109 205 105" fill="#f0a24a" stroke="#9b7134" strokeWidth="2"/>
            </g>
            <g fill="currentColor" fontSize="11" fontWeight="600">
              <text x="12" y="28">Flower</text><path d="M53 25 L145 25" stroke="currentColor" strokeWidth="1"/>
              <text x="12" y="73">Leaf</text><path d="M43 70 L117 70" stroke="currentColor" strokeWidth="1"/>
              <text x="247" y="105">Fruit</text><path d="M240 108 L226 112" stroke="currentColor" strokeWidth="1"/>
              <text x="246" y="52">Stem</text><path d="M241 55 L171 55" stroke="currentColor" strokeWidth="1"/>
              <text x="12" y="194">Roots</text><path d="M48 190 L130 177" stroke="currentColor" strokeWidth="1"/>
            </g>
          </svg>
          <p><b>Roots:</b> anchorage and absorption. <b>Stems:</b> support and transport. <b>Leaves:</b> photosynthesis. <b>Flowers:</b> reproduction. <b>Fruits:</b> seed protection and dispersal.</p>
        </div>
      </div>

      <div className="gh-jhs1-science-interaction">
        <h4>2. Match each plant part to its uses</h4>
        <p>Choose a plant part to see agricultural and non-agricultural examples.</p>
        <div className="gh-jhs1-science-choices">
          {(Object.keys(PLANT_PARTS) as PlantPart[]).map(key => (
            <Choice key={key} active={part === key} onClick={() => setPart(key)}>{PLANT_PARTS[key].label}</Choice>
          ))}
        </div>
        <div className="gh-jhs1-science-readout" aria-live="polite">
          <strong>{selected.label}</strong>
          <p>{selected.role}</p>
          <p><b>Agricultural uses</b></p>
          <ul>{selected.agricultural.map(item => <li key={item}>{item}</li>)}</ul>
          <p><b>Other uses</b></p>
          <ul>{selected.other.map(item => <li key={item}>{item}</li>)}</ul>
          <p><b>Responsible use:</b> {selected.care}</p>
        </div>
      </div>

      <div className="gh-jhs1-science-interaction">
        <h4>3. From plant material to useful product</h4>
        <div className="gh-jhs1-science-readout">
          <p><b>Food:</b> cassava roots, leafy vegetables and mango fruits provide food.</p>
          <p><b>Building and craft:</b> timber and bamboo stems can become furniture, structures and crafts.</p>
          <p><b>Farming:</b> suitable leaves and crop residues can provide fodder, mulch or compost.</p>
          <p><b>Culture and daily life:</b> leaves may wrap food, while flowers can be used for decoration.</p>
          <p>Before using a plant, identify it correctly and check whether the material is safe and suitable for the intended purpose.</p>
        </div>
      </div>

      <div className="gh-jhs1-science-interaction">
        <h4>4. Protect plant resources</h4>
        <div className="gh-jhs1-science-readout">
          <p>Plants provide renewable resources only when they can grow back and reproduce. Excessive harvesting, deforestation and habitat destruction can reduce plant populations and biodiversity.</p>
          <p>Choose responsibly sourced materials, protect habitats, avoid damaging rare plants, reduce waste and replant suitable species. Never assume that a natural plant product is automatically safe to eat or use as medicine.</p>
        </div>
      </div>
    </GhanaScienceVisual>
  );
};

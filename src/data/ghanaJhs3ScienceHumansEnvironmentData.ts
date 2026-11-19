import type { ArcInfo, Mission, UnitInfo } from '../types';

export const GHANA_JHS3_SCIENCE_HUMANS_ENVIRONMENT_UNIT: UnitInfo = {
  title: 'Humans and the Environment',
  ch: 'JHS 3 · NaCCA Science · Strand 5',
  subject: 'ghjhs3science'
};

export const GHANA_JHS3_SCIENCE_HUMANS_ENVIRONMENT_ARCS: ArcInfo[] = [
  { n: 1, unit: 0, subject: 'ghjhs3science', title: 'Waste Management and Sustainability', pages: 'NaCCA CCP · JHS 3 Science · B9.5.1' },
  { n: 2, unit: 0, subject: 'ghjhs3science', title: 'Human Health and Disease Prevention', pages: 'NaCCA CCP · JHS 3 Science · B9.5.2' },
  { n: 3, unit: 0, subject: 'ghjhs3science', title: 'Science, Technology and Industry', pages: 'NaCCA CCP · JHS 3 Science · B9.5.3' },
  { n: 4, unit: 0, subject: 'ghjhs3science', title: 'Climate Change and the Green Economy', pages: 'NaCCA CCP · JHS 3 Science · B9.5.4' },
  { n: 5, unit: 0, subject: 'ghjhs3science', title: 'Plant Resources and Their Uses', pages: 'NaCCA CCP · JHS 3 Science · B9.5.5' }
];

const q = (prompt: string, answers: string[], explanation: string) => ({ q: prompt, a: answers, why: explanation });
const lesson = (text: string) => ({ who: 's' as const, text });

export const GHANA_JHS3_SCIENCE_HUMANS_ENVIRONMENT_MISSIONS: Mission[] = [
  {
    id: 'gh-jhs3-science-waste-management', arc: 0, sec: 'Humans and the Environment', pages: 'NaCCA CCP · JHS 3 Science · B9.5.1.1.1, B9.5.1.2.1',
    hue: 130, horns: 2, eyes: 2, title: 'The Waste-Wise Community Guardian',
    topic: 'Investigate scientific waste-management methods, evaluate their effectiveness and describe innovative approaches for sustainable Ghanaian communities.',
    demon: 'The Waste Wave', tech: 'Sustainability Form · First Technique: Sort, Recover and Renew',
    scenes: [
      lesson('<p><b>Waste</b> is material that people discard or no longer need. Poorly managed waste can block drains, pollute soil and water, attract disease-carrying pests and harm wildlife. Waste management protects public health and the environment.</p>'),
      lesson('<p>Scientific methods include <b>reduce, reuse, recycle, composting</b> and safe treatment or disposal. Recycling separates useful materials such as paper, metals, glass and some plastics so they can become new products. Composting uses decomposers to turn suitable organic waste into a soil conditioner.</p>'),
      lesson('<p>Different wastes need different methods. Keep hazardous chemicals, batteries, electronic waste and medical waste separate from ordinary rubbish and use approved collection routes. Do not burn mixed waste or dump it into streams. In a school waste audit, record the types and amounts produced, where they arise and how they are currently handled.</p>'),
      lesson('<p>Innovative solutions can include source separation, community recycling, composting, material recovery and safe treatment. Compare options by cost, safety, local availability, environmental impact and how much waste they prevent. A good plan includes participation, reliable collection and monitoring—not just a new bin.</p>'),
      { who: 'd', vis: 'demon', text: 'I have mixed food scraps, plastics, batteries and paper into one pile. Design a safer sorting plan and choose the right recovery method for each material!' },
      { type: 'battle' }
    ],
    quiz: [
      q('Which method turns suitable food and plant waste into a useful soil conditioner?', ['Composting', 'Open burning', 'Dumping in a stream', 'Mixing with batteries'], 'Composting uses decomposers to break down suitable organic material.'),
      q('What is the first useful step in a school waste audit?', ['Identify and record the types and amounts of waste', 'Burn all waste together', 'Pour waste into a drain', 'Ignore where waste comes from'], 'An audit begins by gathering evidence about the waste produced and how it is handled.'),
      q('Why should batteries be kept separate from ordinary rubbish?', ['They may contain hazardous materials that need special collection', 'They become food when buried', 'They are always safe to burn', 'They improve compost quality'], 'Batteries can release harmful substances and require appropriate collection and treatment.'),
      q('Which action best follows the waste hierarchy?', ['Reduce unnecessary packaging before recycling what remains', 'Buy more single-use items', 'Dump rubbish in open spaces', 'Burn plastic near homes'], 'Preventing waste in the first place is generally better than managing it after it is created.'),
      q('How should a community compare waste-management options?', ['Consider safety, cost, effectiveness and environmental impact', 'Choose only the most colourful bins', 'Ignore local collection capacity', 'Select the option that creates the most waste'], 'A fair evaluation uses practical and environmental criteria.') 
    ]
  },
  {
    id: 'gh-jhs3-science-human-health', arc: 1, sec: 'Humans and the Environment', pages: 'NaCCA CCP · JHS 3 Science · B9.5.2.1.1, B9.5.2.2.1, B9.5.2.2.2',
    hue: 350, horns: 2, eyes: 2, title: 'The Human Health Defender',
    topic: 'Explain health and disease, compare common communicable and non-communicable conditions, and describe risk reduction and prevention.',
    demon: 'The Disease Confuser', tech: 'Wellness Form · Second Technique: Understand, Prevent and Protect',
    scenes: [
      lesson('<p><b>Health</b> is more than the absence of illness. It includes physical, mental and social well-being. A <b>disease</b> is a condition that disrupts normal body function. Good health is influenced by nutrition, clean water, safe housing, working conditions, physical activity and access to healthcare.</p>'),
      lesson('<p><b>Non-communicable diseases (NCDs)</b> do not spread directly from one person to another. Risk factors can include tobacco or harmful drug exposure, unhealthy diets, inactivity, some workplace exposures and inherited factors. Some cancers are linked to lifestyle and environmental risks, but cancer is not one single disease.</p>'),
      lesson('<p>Prevention can include balanced meals, physical activity, avoiding tobacco and harmful drug use, reducing exposure to hazardous substances, protective equipment at work and appropriate health screening. Warning signs vary by condition. A symptom is not enough to diagnose a disease; seek qualified healthcare advice rather than relying on rumours or self-medication.</p>'),
      lesson('<p>Common diseases in a community may be communicable or non-communicable. Fungal infections such as ringworm can spread through direct contact or shared contaminated items; keeping skin clean and dry, avoiding shared personal items and following professional treatment advice can help prevent spread. Candidiasis and nail fungal infections also need appropriate clinical guidance. Do not stigmatise people who are ill.</p>'),
      { who: 'd', vis: 'demon', text: 'I have confused infection with lifestyle disease and spread misleading health claims. Classify the risks, identify sensible prevention and choose reliable health information!' },
      { type: 'battle' }
    ],
    quiz: [
      q('Which statement best describes a non-communicable disease?', ['It does not spread directly from one person to another', 'It is always caused by a virus', 'It spreads through every handshake', 'It affects only children'], 'Non-communicable diseases are not transmitted directly between people.'),
      q('Which is a sensible way to reduce some NCD risks?', ['Avoid tobacco and harmful drug use and maintain healthy habits', 'Ignore persistent symptoms', 'Use unverified medicines', 'Share prescription medicines'], 'Healthy behaviours and reduced exposure to known risks can lower the chance of some NCDs.'),
      q('What is the relationship between health and disease?', ['Disease can reduce well-being, while health depends on several interacting factors', 'Health means never needing sleep', 'Every disease spreads in the same way', 'Only physical fitness matters'], 'Health includes physical, mental and social well-being, and disease can affect it.'),
      q('Which practice can help prevent the spread of ringworm?', ['Avoid sharing towels and keep skin clean and dry', 'Share clothing and towels', 'Ignore skin changes', 'Apply unknown chemicals'], 'Ringworm can spread through contact and contaminated items; hygiene and appropriate treatment help control it.'),
      q('Where should someone seek advice about worrying or persistent symptoms?', ['A qualified healthcare professional', 'An anonymous rumour online', 'A friend’s leftover medicine', 'A product advertisement'], 'Qualified healthcare professionals can assess symptoms and recommend appropriate care.')
    ]
  },
  {
    id: 'gh-jhs3-science-industry', arc: 2, sec: 'Humans and the Environment', pages: 'NaCCA CCP · JHS 3 Science · B9.5.3.1.1, B9.5.3.2.1, B9.5.3.2.2',
    hue: 205, horns: 2, eyes: 2, title: 'The Science and Industry Investigator',
    topic: 'Investigate the science behind local industries and compare indigenous and modern production methods.',
    demon: 'The Process Distorter', tech: 'Innovation Form · Third Technique: Reveal the Science in Production',
    scenes: [
      lesson('<p>An <b>industry</b> is a group of organisations or firms involved in producing similar goods or services. Industries turn raw materials into useful products. Examples in and around Ghana include food processing, textiles, cement production, mining and wood processing.</p>'),
      lesson('<p>Production uses scientific ideas and processes. Food processing may use heating, cooling, drying, fermentation and separation. Soap making involves chemical reactions; cement production involves heating and grinding mineral materials. Each process needs suitable materials, controlled conditions and quality checks.</p>'),
      lesson('<p><b>Indigenous industries</b> use locally developed knowledge, skills and methods passed through communities, such as traditional pottery, weaving, shea butter processing and local food fermentation. Modern industries may use automated machinery, advanced measurement and large-scale energy systems. Both can involve science, innovation and skilled work.</p>'),
      lesson('<p>Compare production methods fairly: consider the product quality, safety, resources, cost, energy use, waste, employment and cultural value. Technology can improve speed and consistency, but it should be assessed for its effects on workers and the environment. Local knowledge and modern tools can sometimes complement one another.</p>'),
      { who: 'd', vis: 'demon', text: 'I claim industry is just machines and factories. Investigate a familiar product, trace its production stages and identify the scientific ideas and local skills involved!' },
      { type: 'battle' }
    ],
    quiz: [
      q('What is an industry?', ['A group of firms producing similar goods or services', 'A single household meal', 'A type of weather', 'A natural landform'], 'Industries include organisations involved in producing related goods or services.'),
      q('Which scientific process is commonly used in food preservation?', ['Drying to reduce available moisture', 'Adding soil to every food', 'Leaving food uncovered outdoors', 'Mixing food with batteries'], 'Drying removes moisture and can slow the growth of many spoilage microorganisms.'),
      q('Which is an example of an indigenous industry in Ghana?', ['Traditional weaving', 'Satellite launch manufacturing', 'Deep-space telescope operation', 'Nuclear submarine building'], 'Traditional weaving is a locally rooted craft and production activity.'),
      q('What is a useful way to compare indigenous and modern production?', ['Compare safety, quality, resources, cost and environmental effects', 'Assume one method is always superior', 'Ignore the workers involved', 'Compare only the colour of the products'], 'A balanced comparison uses several relevant criteria and evidence.'),
      q('Why are quality checks important in production?', ['They help ensure products meet required standards and are safe', 'They remove the need for trained workers', 'They guarantee zero resource use', 'They make every product identical in price'], 'Quality checks help identify defects and verify that a product meets specifications.')
    ]
  },
  {
    id: 'gh-jhs3-science-climate-green-economy', arc: 3, sec: 'Humans and the Environment', pages: 'NaCCA CCP · JHS 3 Science · B9.5.4.1.1, B9.5.4.2.1',
    hue: 45, horns: 2, eyes: 2, title: 'The Climate Action Analyst',
    topic: 'Compare natural and human influences on climate, assess climate and green-economy actions in Ghana and globally.',
    demon: 'The Climate Misinformer', tech: 'Climate Form · Fourth Technique: Follow the Evidence',
    scenes: [
      lesson('<p><b>Climate</b> describes long-term patterns of temperature, rainfall, wind and other conditions in a place. Weather changes from day to day; climate is assessed over many years. Climate change means long-term shifts in these patterns.</p>'),
      lesson('<p>Natural factors include volcanic eruptions, changes in solar energy and long-term variations in Earth’s orbit. Human activities—especially burning fossil fuels, deforestation and some agricultural and industrial processes—increase greenhouse gases and influence the climate. Greenhouse gases trap some outgoing heat in the atmosphere.</p>'),
      lesson('<p>Communities can reduce climate impacts by protecting forests, improving energy efficiency, using cleaner energy, managing waste, restoring degraded land and choosing more sustainable transport and farming practices. A <b>green economy</b> aims to improve well-being and livelihoods while reducing environmental risks and resource pressure.</p>'),
      lesson('<p>Assess initiatives with evidence: compare emissions, costs, benefits, reliability, fairness and long-term results. Ghanaian examples can include forest restoration, clean cooking, renewable energy and improved waste management. Compare local and international actions using trustworthy data; distinguish measured results from promises and misinformation.</p>'),
      { who: 'd', vis: 'demon', text: 'I have mixed up weather and climate and hidden the evidence behind climate claims. Identify the causes and assess which community actions make a measurable difference!' },
      { type: 'battle' }
    ],
    quiz: [
      q('What is the difference between weather and climate?', ['Weather is short-term conditions; climate is the long-term pattern', 'They mean exactly the same thing', 'Climate changes every minute', 'Weather is measured only over centuries'], 'Climate describes patterns over long periods, while weather describes short-term conditions.'),
      q('Which is a human activity that increases greenhouse gas emissions?', ['Burning fossil fuels', 'The daily rotation of Earth', 'A lunar eclipse', 'The phases of the Moon'], 'Burning coal, oil and gas releases carbon dioxide and other greenhouse gases.'),
      q('Which is a natural factor that can influence climate?', ['A major volcanic eruption', 'Using a petrol car', 'Clearing a forest for a road', 'Burning waste'], 'Volcanic eruptions can release particles and gases that temporarily influence climate.'),
      q('What is a green-economy goal?', ['Improve well-being while reducing environmental risks and resource waste', 'Increase pollution without limits', 'Use resources once and discard them', 'Ignore long-term impacts'], 'A green economy seeks prosperity and livelihoods with lower environmental pressure.'),
      q('How should climate initiatives be assessed?', ['Compare reliable data, costs, benefits and long-term outcomes', 'Choose the loudest claim', 'Ignore the source of the data', 'Use one day of weather as proof'], 'Evidence-based assessment considers data quality and the effectiveness of actions over time.')
    ]
  },
  {
    id: 'gh-jhs3-science-plant-resources', arc: 4, sec: 'Humans and the Environment', pages: 'NaCCA CCP · JHS 3 Science · B9.5.5.1.1, B9.5.5.1.2',
    hue: 112, horns: 2, eyes: 2, title: 'The Plant Resources Ranger',
    topic: 'Identify and demonstrate agricultural and non-agricultural uses of plant roots, stems, leaves, flowers and fruits.',
    demon: 'The Resource Waster', tech: 'Plant Form · Fifth Technique: Use Every Part Wisely',
    scenes: [
      lesson('<p>Plants provide food, materials, medicine, shelter and many other resources. Different plant parts have different uses. Roots can be eaten or used for storage; stems can provide timber, fibres and building materials; leaves can be food, animal feed or wrapping materials.</p>'),
      lesson('<p>Flowers may be used as food, decoration or sources of products such as spices. Fruits provide food, seeds, oils and fibres. In agriculture, plant materials can support planting, animal feed, animal housing, tools, soil improvement and some pest-management practices.</p>'),
      lesson('<p>Non-agricultural uses include timber for furniture and construction, fibres for textiles and ropes, leaves for wrapping, and plant materials for crafts and cultural activities. Some plants are used in traditional medicine, but natural does not automatically mean safe: identify plants correctly and seek qualified advice before using them medicinally.</p>'),
      lesson('<p>Choose plant materials responsibly. Consider strength, durability, availability, renewability, biodiversity and whether harvesting damages the plant population or habitat. Demonstrations can use safely collected, non-protected materials to create a simple useful item, while avoiding destructive harvesting and unsafe plant substances.</p>'),
      { who: 'd', vis: 'demon', text: 'I have thrown away useful roots, stems, leaves, flowers and fruits. Match each plant part to a responsible use and design a useful product without harming the environment!' },
      { type: 'battle' }
    ],
    quiz: [
      q('Which plant part commonly transports water and supports the plant?', ['Stem', 'Flower petal only', 'Fruit skin only', 'Seed coat only'], 'The stem supports the plant and contains tissues that transport water and nutrients.'),
      q('Which is an agricultural use of plant materials?', ['Making animal feed or improving soil', 'Producing electronic passwords', 'Measuring air pressure', 'Generating a lunar eclipse'], 'Plant materials can be used for feed, compost, mulch and other farm activities.'),
      q('Which is a non-agricultural use of plant parts?', ['Using timber to make furniture', 'Using roots only to absorb water', 'Using leaves only for photosynthesis', 'Using flowers only for pollination'], 'Timber from suitable plant stems can be processed into furniture.'),
      q('Why should harvesting of plant materials be responsible?', ['To protect plant populations, habitats and future resources', 'To remove every plant from an area', 'To prevent all plants from reproducing', 'To waste renewable materials'], 'Sustainable harvesting helps preserve biodiversity and future availability.'),
      q('Does a natural plant product automatically make a safe medicine?', ['No; correct identification and qualified advice are important', 'Yes, every plant is harmless', 'Yes, dosage never matters', 'No plant has ever been used by people'], 'Some plants can be harmful or interact with medicines, so expert advice is essential.')
    ]
  }
];

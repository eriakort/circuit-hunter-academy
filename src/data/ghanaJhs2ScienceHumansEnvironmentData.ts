import type { ArcInfo, Mission, UnitInfo } from '../types';

/** Ghana NaCCA Common Core Programme · JHS 2 Science · Humans and the Environment (Basic 8). */
export const GHANA_JHS2_SCIENCE_HUMANS_ENVIRONMENT_UNIT: UnitInfo = {
  title: 'Humans and the Environment',
  ch: 'JHS 2 · NaCCA Science · Strand 5',
  subject: 'ghjhs2science'
};

export const GHANA_JHS2_SCIENCE_HUMANS_ENVIRONMENT_ARCS: ArcInfo[] = [
  { n: 1, unit: 0, subject: 'ghjhs2science', title: 'Waste Management', pages: 'NaCCA CCP · JHS 2 Science · B8.5.1.1' },
  { n: 2, unit: 0, subject: 'ghjhs2science', title: 'Human Health', pages: 'NaCCA CCP · JHS 2 Science · B8.5.2.1–B8.5.2.2' },
  { n: 3, unit: 0, subject: 'ghjhs2science', title: 'Science and Industry', pages: 'NaCCA CCP · JHS 2 Science · B8.5.3.1' },
  { n: 4, unit: 0, subject: 'ghjhs2science', title: 'Climate Change and Green Economy', pages: 'NaCCA CCP · JHS 2 Science · B8.5.4.1' },
  { n: 5, unit: 0, subject: 'ghjhs2science', title: 'Understanding the Environment: Soils and Plants', pages: 'NaCCA CCP · JHS 2 Science · B8.5.5.1' },
  { n: 6, unit: 0, subject: 'ghjhs2science', title: 'Rocks and Soil Formation', pages: 'NaCCA CCP · JHS 2 Science · B8.5.6.1' }
];

const q = (prompt: string, answers: string[], explanation: string) => ({ q: prompt, a: answers, why: explanation });
const lesson = (text: string) => ({ who: 's' as const, text });

export const GHANA_JHS2_SCIENCE_HUMANS_ENVIRONMENT_MISSIONS: Mission[] = [
  {
    id: 'gh-jhs2-science-waste-management', arc: 0, sec: 'Humans and the Environment', pages: 'NaCCA CCP · JHS 2 Science · B8.5.1.1.1–B8.5.1.1.2',
    hue: 112, horns: 2, eyes: 2, title: 'The Waste-Wise Community Guardian',
    topic: 'Explain sustainable waste-management practices, plan a practical community activity, and evaluate how well local waste systems work.',
    demon: 'The Litter Swarm', tech: 'Clean Earth Form · First Technique: Reduce Before You Discard',
    scenes: [
      lesson('<p>Waste is material that people no longer need or want. It may be solid, liquid or gaseous. Examples include food scraps, paper, plastic packaging, wastewater and used batteries. Poorly managed waste can block drains, attract pests, pollute soil and water, and create health risks.</p>'),
      lesson('<p>Sustainable waste management follows a hierarchy: <b>prevent</b> waste where possible, <b>reduce</b> unnecessary use, <b>reuse</b> items, <b>recycle</b> suitable materials and safely treat or dispose of what remains. Organic materials such as food and garden scraps can be composted where conditions allow. Not every material can be recycled in every community, so local collection arrangements matter.</p>'),
      lesson('<p>Different waste needs different handling. Separate clean recyclables where a collection service exists. Keep batteries, chemicals, sharp objects and electronic waste out of ordinary rubbish; use approved collection or take-back services. Open burning of mixed waste can release harmful smoke and should be avoided. Never dump rubbish into drains, streams or the sea.</p>'),
      lesson('<p>A community waste project begins with a survey: observe what waste is produced, where it goes and which services are available. Set a clear goal, agree on safe roles, use protective equipment, arrange collection with responsible adults or local services, and record the results. Evaluate whether the area stays cleaner and what needs improving.</p>'),
      { who: 'd', vis: 'demon', text: 'I have mixed food scraps, batteries and plastic into one pile! Build a sustainable plan that reduces waste, sorts materials and keeps the community safe.' },
      { type: 'battle' }
    ],
    quiz: [
      q('Which action best prevents waste before it is created?', ['Carry a reusable water bottle', 'Buy extra single-use packaging', 'Throw away a container after one use', 'Dump rubbish in a stream'], 'Prevention avoids creating waste in the first place; a reusable bottle reduces single-use containers.'),
      q('What is the best order among the common 3Rs?', ['Reduce, reuse, recycle', 'Recycle, burn, dump', 'Replace, bury, scatter', 'Rinse, release, remove'], 'Reduce and reuse avoid waste before recycling is needed.'),
      q('Why should batteries be separated from ordinary rubbish?', ['They may contain substances that can pollute the environment', 'They are safe to burn with food scraps', 'They turn plastic into clean water', 'They disappear immediately'], 'Batteries require suitable collection because their materials can harm people and the environment.'),
      q('What can suitable food and garden waste become?', ['Compost', 'Petrol', 'Glass', 'Metal'], 'Organic waste can break down into compost that helps improve soil.'),
      q('What should a community do before starting a waste-management project?', ['Survey local waste and plan safe collection and disposal', 'Burn mixed rubbish in the open', 'Push waste into drains', 'Handle sharp waste without protection'], 'A survey and safety plan help a community choose practical actions and evaluate the outcome.')
    ]
  },
  {
    id: 'gh-jhs2-science-human-health', arc: 1, sec: 'Humans and the Environment', pages: 'NaCCA CCP · JHS 2 Science · B8.5.2.1.1–B8.5.2.2.1',
    hue: 344, horns: 2, eyes: 2, title: 'The Community Health Defender',
    topic: 'Explain symptoms, effects and prevention of common communicable and bacterial diseases, and identify risk factors without stigma.',
    demon: 'The Infection Trickster', tech: 'Health Form · First Technique: Break the Chain of Infection',
    scenes: [
      lesson('<p><b>Communicable diseases</b> are illnesses that can spread from one person to another, directly or indirectly. The Basic 8 curriculum uses examples such as hepatitis, HIV and measles. Different diseases spread in different ways: some through infected blood or body fluids, some through respiratory particles, and others through contaminated food or water. Knowing the route helps people choose suitable prevention.</p>'),
      lesson('<p>Symptoms vary. Some infections may cause fever, tiredness, rash, vomiting or diarrhoea, while others may have few early signs. Symptoms alone cannot reliably identify a disease. A qualified health professional and appropriate tests are needed for diagnosis. People should seek help from a trusted adult and health service when they are unwell.</p>'),
      lesson('<p>Risk factors depend on the disease and its route of transmission. Examples include unsafe food or water, poor hand hygiene, close contact with infectious respiratory particles, sharing contaminated sharp equipment, or unprotected exposure to infected blood or body fluids. HIV is not spread by ordinary social contact such as sharing a classroom, shaking hands or hugging.</p>'),
      lesson('<p>Some diseases are caused by bacteria. The curriculum highlights food poisoning, gonorrhoea and meningitis. Food poisoning can follow eating food contaminated by harmful microbes or toxins. Gonorrhoea is a sexually transmitted bacterial infection; meningitis is inflammation of the membranes around the brain and spinal cord and can have several causes, including bacteria. These conditions need prompt professional medical assessment and treatment.</p>'),
      lesson('<p>Prevention includes safe food preparation and storage, clean water, handwashing, vaccination where recommended, safer sexual health practices, and not sharing needles or sharp equipment. Communities can reduce risk through accurate information, access to health services and early care. Avoid blaming or excluding people who are ill; respect, privacy and evidence-based support matter.</p>'),
      { who: 'd', vis: 'demon', text: 'I spread myths and stigma! Identify real transmission routes, recognise risk factors and choose prevention based on reliable health guidance.' },
      { type: 'battle' }
    ],
    quiz: [
      q('What is a communicable disease?', ['An illness that can spread between people directly or indirectly', 'An injury caused only by a fall', 'A condition that can never affect another person', 'A type of soil'], 'Communicable diseases can spread through specific routes, which differ from disease to disease.'),
      q('Which statement about HIV transmission is correct?', ['It is not spread by hugging or sharing a classroom', 'It spreads through ordinary handshakes', 'It spreads by sharing a desk', 'It spreads through mosquito bites'], 'HIV is not transmitted through casual contact such as hugging, handshakes or sharing a classroom.'),
      q('Which is a sensible way to reduce food-poisoning risk?', ['Wash hands and prepare and store food safely', 'Leave cooked food uncovered in warm conditions for long periods', 'Use dirty water to rinse food', 'Ignore food hygiene'], 'Hand hygiene and safe food preparation and storage reduce the risk of food contamination.'),
      q('Which disease is a bacterial infection highlighted in the Basic 8 curriculum?', ['Gonorrhoea', 'Measles', 'HIV infection', 'Common cold caused by a virus'], 'Gonorrhoea is a bacterial sexually transmitted infection; the curriculum also names food poisoning and meningitis.'),
      q('Why should a person with concerning symptoms seek professional care?', ['Symptoms alone may not identify the disease and treatment depends on diagnosis', 'Every disease has exactly the same treatment', 'Online guesses are always enough', 'Medical advice is never useful'], 'A health professional can assess symptoms and arrange appropriate tests and treatment.')
    ]
  },
  {
    id: 'gh-jhs2-science-science-industry', arc: 2, sec: 'Humans and the Environment', pages: 'NaCCA CCP · JHS 2 Science · B8.5.3.1.1',
    hue: 194, horns: 2, eyes: 2, title: 'The Science and Innovation Builder',
    topic: 'Examine how science, technology and innovation connect with society and the environment, using Ghana-relevant examples.',
    demon: 'The Innovation Doubter', tech: 'Discovery Form · First Technique: Connect Ideas to Impact',
    scenes: [
      lesson('<p><b>Science</b> builds explanations from observation and evidence. <b>Technology</b> applies knowledge and skills to make tools, processes and services. <b>Innovation</b> introduces a new or improved idea that creates value. They influence one another: scientific discoveries can inspire technologies, while new technologies can help scientists investigate questions.</p>'),
      lesson('<p>Consider farming in Ghana. Research into soil, crop varieties and pests can inform improved seeds, irrigation and storage. Mobile phones can help farmers access weather information and market prices. These technologies can improve productivity, but their success also depends on cost, training, repair services and whether they meet local needs.</p>'),
      lesson('<p>Health care also connects science and technology. Vaccines, diagnostic tests, medical imaging and clean-water systems rely on scientific knowledge and engineering. Their benefits depend on safe design, reliable supply, trained workers, fair access and responsible use. Innovation should solve real problems rather than simply introduce something new.</p>'),
      lesson('<p>Technology can have environmental costs. Electronic devices require materials and energy; discarded devices can become electronic waste. Industrial processes may use water and produce emissions or waste. Good decisions consider benefits and risks across the life cycle: materials, manufacture, transport, use, repair and end-of-life recycling or disposal.</p>'),
      lesson('<p>To examine an innovation, ask: What problem does it address? What evidence shows that it works? Who benefits and who may be left out? What resources does it use? What happens to waste? Learners can compare solutions and present a balanced recommendation for their community.</p>'),
      { who: 'd', vis: 'demon', text: 'I claim every new device is automatically good! Evaluate the evidence, benefits, access and environmental effects of an innovation.' },
      { type: 'battle' }
    ],
    quiz: [
      q('How are science and technology related?', ['Scientific knowledge can guide technology, and technology can help scientific investigation', 'They never influence each other', 'Technology makes evidence unnecessary', 'Science only studies machines'], 'Science and technology support one another through knowledge, tools and practical applications.'),
      q('Which is an example of technology supporting Ghanaian farmers?', ['A phone providing weather and market information', 'A device that hides all crop information', 'Dumping batteries on farmland', 'Ignoring soil conditions'], 'Digital information can help farmers make decisions about weather, markets and farm activities.'),
      q('What should be considered when evaluating an innovation?', ['Its usefulness, evidence, accessibility and environmental effects', 'Only its appearance', 'Only whether it is new', 'Whether it creates the most waste'], 'A balanced evaluation considers evidence, benefits, costs, access and environmental impacts.'),
      q('Why is electronic waste a concern?', ['Some discarded devices contain materials that need careful handling', 'All electronic parts become harmless instantly', 'It improves every water source', 'It cannot be recycled or managed'], 'Electronic waste can contain materials that require appropriate reuse, recycling or disposal.'),
      q('Which question helps evaluate whether an innovation benefits society?', ['Who can access it and what problem does it solve?', 'Is its name difficult to pronounce?', 'Can its risks be ignored?', 'Does it use the most resources possible?'], 'An innovation should be judged by the problem it solves and who can benefit from it.')
    ]
  },
  {
    id: 'gh-jhs2-science-climate-green-economy', arc: 3, sec: 'Humans and the Environment', pages: 'NaCCA CCP · JHS 2 Science · B8.5.4.1.1–B8.5.4.1.2',
    hue: 78, horns: 2, eyes: 2, title: 'The Climate Action Strategist',
    topic: 'Explain climate change and its environmental effects, then describe mitigation, adaptation and green-economy actions suitable for Ghanaian communities.',
    demon: 'The Climate Confuser', tech: 'Green Future Form · First Technique: Adapt and Reduce',
    scenes: [
      lesson('<p><b>Climate</b> describes the usual pattern of weather in a place over many years. <b>Climate change</b> is a long-term change in average conditions and patterns, including temperature and rainfall. It is different from a single hot day or one heavy storm. Scientists study long records and multiple lines of evidence to identify climate trends.</p>'),
      lesson('<p>Human activities that release greenhouse gases, especially burning fossil fuels and clearing forests, are the main driver of recent global warming. Greenhouse gases trap some heat in the atmosphere. Natural factors also influence climate, but they do not explain the strong warming observed in recent decades.</p>'),
      lesson('<p>Climate change can affect rainfall patterns, heat, drought, floods, coastal areas, crops, water supplies and ecosystems. In Ghana, communities may face risks from coastal erosion, changing rainfall, heat stress and pressure on farming and water resources. Effects differ by location and people’s ability to prepare.</p>'),
      lesson('<p><b>Mitigation</b> means reducing the causes of climate change, for example improving energy efficiency, using cleaner energy, protecting forests and reducing avoidable emissions. <b>Adaptation</b> means preparing for effects that are happening or expected, for example improving drainage, conserving water, planting suitable trees and choosing climate-resilient farming practices.</p>'),
      lesson('<p>A <b>green economy</b> aims to improve people’s well-being and livelihoods while reducing environmental risks and using resources responsibly. Examples include repairing and reusing products, sustainable farming, clean energy, recycling, efficient transport and restoring degraded land. Good plans consider jobs, fairness, local knowledge and long-term environmental benefits.</p>'),
      { who: 'd', vis: 'demon', text: 'I confuse weather with climate and mitigation with adaptation! Explain the difference and design a practical green action for a Ghanaian community.' },
      { type: 'battle' }
    ],
    quiz: [
      q('What is climate change?', ['A long-term change in average climate patterns', 'A single rainy afternoon', 'A daily weather forecast', 'The temperature in one classroom at one moment'], 'Climate change refers to long-term shifts in average conditions and patterns.'),
      q('What is the main driver of recent global warming?', ['Human greenhouse-gas emissions, especially from fossil fuels and deforestation', 'The phases of the Moon', 'One cold morning', 'The daily movement of ocean tides'], 'Human activities have increased greenhouse-gas concentrations and are the main cause of recent warming.'),
      q('Which is an example of climate-change mitigation?', ['Protecting forests and reducing fossil-fuel emissions', 'Building a flood evacuation route only', 'Moving people away from an eroding shore only', 'Storing emergency drinking water only'], 'Mitigation reduces greenhouse-gas emissions or increases their removal, for example by protecting forests.'),
      q('Which is an example of adaptation?', ['Improving drainage to reduce flood damage', 'Increasing coal use', 'Clearing more forests', 'Wasting treated water'], 'Adaptation prepares people and places for climate impacts, such as heavier rainfall and flooding.'),
      q('What is a goal of a green economy?', ['Improve livelihoods while reducing environmental harm', 'Increase waste without limits', 'Ignore the needs of communities', 'Use resources as quickly as possible'], 'A green economy seeks human well-being and livelihoods alongside responsible resource use and lower environmental risks.')
    ]
  },
  {
    id: 'gh-jhs2-science-soils-plants', arc: 4, sec: 'Humans and the Environment', pages: 'NaCCA CCP · JHS 2 Science · B8.5.5.1.1–B8.5.5.1.2',
    hue: 36, horns: 2, eyes: 2, title: 'The Soil and Plant Investigator',
    topic: 'Compare physical properties of sandy, clayey and loamy soils, explain water retention and plant support, and describe how roots absorb water and nutrients.',
    demon: 'The Rootless Blight', tech: 'Earth Science Form · First Technique: Read the Soil',
    scenes: [
      lesson('<p>Soil is a mixture of mineral particles, organic matter, water, air and living organisms. Its physical properties include particle size, texture, structure, porosity and how quickly water moves through it. These properties influence how well soil supports plant roots and crop growth.</p>'),
      lesson('<p><b>Sandy soil</b> has relatively large particles and usually drains quickly, so it often holds less water. <b>Clayey soil</b> has very small particles and can hold much water, but may drain slowly and become compacted. <b>Loamy soil</b> contains a useful mixture of sand, silt and clay with organic matter; it often balances drainage and water retention well.</p>'),
      lesson('<p>Soil also supports plants by anchoring roots and supplying water and mineral nutrients. Roots take up water from the soil. Root hairs increase the surface area for absorption. Water moves into root cells by <b>osmosis</b>: movement of water across a selectively permeable membrane from a region with higher water potential to lower water potential.</p>'),
      lesson('<p>A fair soil investigation changes one factor at a time. Put equal amounts of different soil samples into identical containers, pour in equal volumes of water and measure how much drains through over the same time. Wear gloves, avoid tasting soil and wash hands afterwards. Record observations and repeat trials to improve reliability.</p>'),
      lesson('<p>Farmers can improve soil for crops by adding suitable organic matter, preventing erosion, avoiding unnecessary compaction and matching crops and irrigation to local soil conditions. No single soil is perfect for every crop. Good decisions use evidence about texture, drainage, water retention and plant needs.</p>'),
      { who: 'd', vis: 'demon', text: 'I have swapped the soil labels! Compare texture and water retention, explain osmosis, and choose a suitable soil-management plan.' },
      { type: 'battle' }
    ],
    quiz: [
      q('Which soil usually has the largest particles and drains quickly?', ['Sandy soil', 'Clayey soil', 'Pure humus', 'Solid granite'], 'Sand has relatively large particles and generally allows water to drain quickly.'),
      q('Why can clayey soil become waterlogged?', ['Its very small particles can slow drainage', 'It contains no particles', 'It always repels all water', 'Its particles are larger than gravel'], 'Small clay particles and tiny spaces between them can slow water movement.'),
      q('What is loamy soil commonly valued for?', ['A balance of drainage and water retention', 'Having no air spaces', 'Being made only of stones', 'Preventing all root growth'], 'Loam often combines useful drainage and water-holding properties with organic matter.'),
      q('What is osmosis in plant roots?', ['Movement of water across a selectively permeable membrane', 'Movement of rocks by wind', 'Production of sunlight by roots', 'Movement of pollen through air'], 'Osmosis is the movement of water across a selectively permeable membrane down a water-potential gradient.'),
      q('In a fair comparison of soil water retention, what should remain the same?', ['The amount of soil, water added and container conditions', 'The type of soil in every sample', 'The measured result', 'The number of different soil types'], 'Keeping other conditions the same makes it easier to compare the effect of soil type.')
    ]
  },
  {
    id: 'gh-jhs2-science-rocks-soil-formation', arc: 5, sec: 'Humans and the Environment', pages: 'NaCCA CCP · JHS 2 Science · B8.5.6.1.1',
    hue: 226, horns: 2, eyes: 2, title: 'The Rock and Soil Origins Explorer',
    topic: 'Observe and describe rock types, compare visible characteristics and explain how weathering contributes to soil formation.',
    demon: 'The Stone Shifter', tech: 'Earth Origins Form · First Technique: Trace the Rock Record',
    scenes: [
      lesson('<p>Rocks are naturally occurring solid materials made of one or more minerals. Scientists group rocks into three main types. <b>Igneous rocks</b> form when molten rock cools and solidifies. <b>Sedimentary rocks</b> form from deposited particles or materials that become compacted and cemented. <b>Metamorphic rocks</b> form when existing rocks are changed by heat, pressure or fluids without completely melting.</p>'),
      lesson('<p>Rocks can be compared by visible features such as colour, grain size, layers, crystals, holes and how easily they split. Granite often has visible interlocking crystals; sandstone may show grains and layers; slate can split into thin sheets. Appearance provides clues, but careful observation and reliable identification guides are important.</p>'),
      lesson('<p><b>Weathering</b> breaks rocks down at or near Earth’s surface. Physical weathering breaks rock into smaller pieces through processes such as heating and cooling, freeze-thaw action or abrasion. Chemical weathering changes minerals through reactions with water, oxygen or weak acids. Plant roots can widen cracks as they grow.</p>'),
      lesson('<p>Over long periods, weathered rock particles mix with decayed organic matter, water and air to help form soil. Soil formation is affected by the parent rock, climate, organisms, slope and time. Different parent materials can contribute to soils with different mineral contents and properties.</p>'),
      lesson('<p>For a safe rock study, observe labelled samples or photographs, record colour, texture, grain size and layers, and compare findings with a trusted guide. Do not taste rocks, inhale dust or collect samples from unsafe sites. Ask permission before collecting anything and wash hands after handling samples.</p>'),
      { who: 'd', vis: 'demon', text: 'I have hidden the clues to soil origins! Identify rock features and explain how weathering helps turn rock into soil over time.' },
      { type: 'battle' }
    ],
    quiz: [
      q('How do igneous rocks form?', ['When molten rock cools and solidifies', 'When leaves turn directly into metal', 'When sand is carried by a river only', 'When soil freezes into water'], 'Igneous rocks form as magma or lava cools and solidifies.'),
      q('Which feature may help identify a sedimentary rock?', ['Visible layers or grains', 'A living root system', 'A moving magnetic pole', 'A liquid surface'], 'Many sedimentary rocks show layers or visible grains from deposited materials.'),
      q('What is weathering?', ['The breakdown or alteration of rocks at or near Earth’s surface', 'The movement of planets around the Sun', 'The growth of a new animal', 'The conversion of sound into light'], 'Weathering breaks down or alters rocks through physical, chemical and biological processes.'),
      q('Which is an example of biological weathering?', ['Plant roots widening cracks in rock', 'A magnet attracting a nail', 'Water boiling in a kettle', 'A shadow moving across a wall'], 'Growing roots can enter cracks and gradually widen them.'),
      q('What can contribute to soil formation?', ['Weathered rock particles mixed with organic matter over time', 'Only plastic packaging', 'Only liquid fuel', 'A single day of sunlight'], 'Soil develops over long periods from weathered parent material mixed with organic matter, water, air and organisms.')
    ]
  }
];

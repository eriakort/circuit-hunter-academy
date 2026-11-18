import type { ArcInfo, Mission, UnitInfo } from '../types';

export const GHANA_JHS1_SCIENCE_HUMANS_ENVIRONMENT_UNIT: UnitInfo = {
  title: 'Humans and the Environment',
  ch: 'JHS 1 · NaCCA Science · Strand 5',
  subject: 'ghjhs1science'
};

export const GHANA_JHS1_SCIENCE_HUMANS_ENVIRONMENT_ARCS: ArcInfo[] = [
  { n: 1, unit: 0, subject: 'ghjhs1science', title: 'Waste Management', pages: 'NaCCA CCP · JHS 1 Science · B7.5.1' },
  { n: 2, unit: 0, subject: 'ghjhs1science', title: 'Human Health', pages: 'NaCCA CCP · JHS 1 Science · B7.5.2' },
  { n: 3, unit: 0, subject: 'ghjhs1science', title: 'Science and Industry', pages: 'NaCCA CCP · JHS 1 Science · B7.5.3' },
  { n: 4, unit: 0, subject: 'ghjhs1science', title: 'Climate Change and Green Economy', pages: 'NaCCA CCP · JHS 1 Science · B7.5.4' },
  { n: 5, unit: 0, subject: 'ghjhs1science', title: 'Understanding the Environment', pages: 'NaCCA CCP · JHS 1 Science · B7.5.5' }
];

const q = (prompt: string, answers: string[], explanation: string) => ({ q: prompt, a: answers, why: explanation });
const lesson = (text: string) => ({ who: 's' as const, text });

export const GHANA_JHS1_SCIENCE_HUMANS_ENVIRONMENT_MISSIONS: Mission[] = [
  {
    id: 'gh-jhs1-science-waste-management', arc: 0, sec: 'Humans and the Environment', pages: 'NaCCA CCP · JHS 1 Science · B7.5.1',
    hue: 112, horns: 2, eyes: 2, title: 'The Waste-Wise Community Guardian',
    topic: 'Research good waste-management practices, identify ways to reduce, reuse, sort and recycle waste, and plan a practical clean-community activity.',
    demon: 'The Litter Swarm', tech: 'Clean Earth Form · First Technique: Sort Before You Solve',
    scenes: [
      lesson('<p>Waste is material that people no longer need or want. Waste can be solid, liquid or gaseous. Examples include food scraps, paper, plastic packaging, used batteries and wastewater. Poorly managed waste can attract pests, block drains, pollute water and soil, and make places unsafe.</p>'),
      lesson('<p>Good waste management begins by preventing unnecessary waste. The <b>3Rs</b> are reduce, reuse and recycle. Reduce means using less and avoiding excess packaging. Reuse means using an item again. Recycle means processing suitable materials so they can become new products. Food and garden scraps can often be composted into material that improves soil.</p>'),
      lesson('<p>Sorting waste helps people manage it correctly. Keep reusable and recyclable materials separate where collection systems exist. Handle sharp objects, chemicals and batteries carefully; do not mix hazardous waste with ordinary rubbish. Never burn mixed rubbish in the open, because smoke can harm people and pollute the air.</p>'),
      lesson('<p>A clean-community project starts with observation and planning. Identify a littered area, find out what kinds of waste are present, agree on safe roles, use suitable protective equipment and arrange proper collection or disposal. Afterwards, check whether the area stays cleaner and explain what could be improved.</p>'),
      { who: 'd', vis: 'demon', text: 'I have mixed food scraps, batteries and plastic into one pile! Choose safer ways to reduce, sort and manage each kind of waste.' },
      { type: 'battle' }
    ],
    quiz: [
      q('Which action is an example of reducing waste?', ['Choose a refillable water bottle instead of many single-use bottles', 'Throw reusable containers away after one use', 'Buy more packaging than needed', 'Burn rubbish beside a stream'], 'Reducing waste means preventing it before it is created, such as choosing a refillable bottle.'),
      q('What does recycling mean?', ['Processing suitable used materials into new products', 'Leaving rubbish in a drain', 'Hiding waste under soil', 'Burning every type of waste'], 'Recycling turns suitable materials into resources for making new products.'),
      q('Why should batteries be kept out of ordinary mixed rubbish?', ['They may contain substances that can harm people and the environment', 'They are always safe to eat', 'They turn plastic into clean water', 'They attract sunlight'], 'Batteries may contain hazardous substances and should be handled through appropriate collection systems.'),
      q('What can food and garden scraps often be turned into?', ['Compost', 'Glass', 'Petrol', 'Metal sheets'], 'Suitable organic waste can decompose and become compost that improves soil.'),
      q('What should a school do before starting a clean-up project?', ['Identify the waste, plan safe roles and arrange proper collection', 'Ask learners to handle sharp waste with bare hands', 'Push rubbish into the nearest drain', 'Set fire to mixed waste'], 'A safe project begins with observation, planning, protective equipment and a suitable disposal plan.')
    ]
  },
  {
    id: 'gh-jhs1-science-human-health', arc: 1, sec: 'Humans and the Environment', pages: 'NaCCA CCP · JHS 1 Science · B7.5.2',
    hue: 344, horns: 2, eyes: 2, title: 'The Healthy Body Protector',
    topic: 'Connect nutrients with common deficiency diseases and explain how selected viral diseases spread and can be prevented.',
    demon: 'The Deficiency and Infection Duo', tech: 'Health Form · First Technique: Nourish and Prevent',
    scenes: [
      lesson('<p>The body needs nutrients to grow, repair tissues and release energy. Carbohydrates provide energy; proteins support growth and tissue repair; fats provide stored energy and help the body use some vitamins. Vitamins and minerals are needed in smaller amounts but are still important for health.</p>'),
      lesson('<p>A lack of a nutrient over time can cause a deficiency disease. Too little vitamin A can cause night blindness; too little vitamin C can cause scurvy; too little vitamin D can contribute to rickets; and severe protein deficiency can cause kwashiorkor. A lack of iron can cause anaemia. Eating a varied, balanced diet helps prevent many deficiencies.</p>'),
      lesson('<p>Some diseases are caused by viruses. The NaCCA curriculum highlights diseases such as coronavirus disease (COVID-19), Ebola and H1N1 influenza. Viruses can spread in different ways, including through respiratory particles or contact with infected body fluids, depending on the disease. Their symptoms and risks are not all the same.</p>'),
      lesson('<p>Prevention depends on the disease. Helpful measures can include handwashing, good ventilation, covering coughs and sneezes, safe food and water, avoiding contact with infectious body fluids, and following current public-health advice. If someone is unwell, they should tell a trusted adult and seek advice from a qualified health professional rather than self-diagnosing.</p>'),
      { who: 'd', vis: 'demon', text: 'I claim every illness comes from the same cause! Match nutrients to deficiency diseases and choose prevention measures that fit the infection.' },
      { type: 'battle' }
    ],
    quiz: [
      q('Which nutrient is especially important for growth and repair of body tissues?', ['Protein', 'Water vapour', 'Table salt alone', 'Carbon dioxide'], 'Proteins provide building materials used to grow and repair body tissues.'),
      q('A severe lack of vitamin C can cause which disease?', ['Scurvy', 'Rickets', 'Night blindness', 'Malaria'], 'Vitamin C deficiency can cause scurvy.'),
      q('Which deficiency is associated with night blindness?', ['Vitamin A deficiency', 'Excess water', 'Too much fibre', 'Lack of sound'], 'Vitamin A is important for vision, and deficiency can cause night blindness.'),
      q('What causes COVID-19?', ['A virus', 'A lack of iron', 'A broken bone', 'A shortage of sunlight'], 'COVID-19 is caused by a coronavirus.'),
      q('Which is a sensible way to reduce the spread of many respiratory infections?', ['Improve ventilation and practise good hand hygiene', 'Share used tissues', 'Ignore public-health advice', 'Cover coughs with other people’s hands'], 'Ventilation and hand hygiene are useful measures for reducing the spread of many respiratory infections.')
    ]
  },
  {
    id: 'gh-jhs1-science-science-industry', arc: 2, sec: 'Humans and the Environment', pages: 'NaCCA CCP · JHS 1 Science · B7.5.3',
    hue: 194, horns: 2, eyes: 2, title: 'The Science Career Pathfinder',
    topic: 'Discover how science careers improve human life and learn from Ghanaian and international scientists and science educators.',
    demon: 'The Innovation Doubter', tech: 'Discovery Form · First Technique: Turn Questions into Solutions',
    scenes: [
      lesson('<p>Science helps people understand problems and develop useful solutions. In Ghana, scientific work supports farming, health care, clean water, transport, communication, construction and environmental protection. Science and industry connect discoveries with products and services people use.</p>'),
      lesson('<p>Scientists ask questions, observe, collect evidence, test ideas and share results. A medical laboratory scientist analyses samples; an agricultural scientist studies crops and soils; an engineer designs and improves machines or structures; and an environmental scientist studies ecosystems and pollution. Many projects need teams with different skills.</p>'),
      lesson('<p>Ghanaian scientists and science educators provide examples of curiosity, persistence and service. Learners can research people such as Francis Allotey, a Ghanaian mathematician and physicist, or discover scientists working in agriculture, medicine, engineering and science education today. Use reliable sources and check facts before presenting someone’s achievements.</p>'),
      lesson('<p>Science careers can improve human conditions by preventing disease, increasing food production, developing safer buildings, improving energy systems and protecting natural resources. To explore a career, identify the problem it helps solve, the knowledge and skills it uses, and how its work benefits people and the environment.</p>'),
      { who: 'd', vis: 'demon', text: 'I say science careers only happen in laboratories! Find how science skills help communities, farms, hospitals and industries.' },
      { type: 'battle' }
    ],
    quiz: [
      q('What is one important way science contributes to industry?', ['It uses evidence and ideas to improve products and services', 'It prevents people from asking questions', 'It replaces all teamwork', 'It makes testing unnecessary'], 'Scientific evidence helps people design, test and improve useful products and services.'),
      q('What does a medical laboratory scientist commonly do?', ['Analyses samples to support health investigations', 'Repairs every road in a country', 'Predicts the weather by guessing', 'Designs only farm fences'], 'Medical laboratory scientists analyse samples and provide information that can support diagnosis and care.'),
      q('Which is an important part of scientific investigation?', ['Collecting and evaluating evidence', 'Choosing an answer before observing', 'Ignoring results that disagree', 'Copying claims without checking them'], 'Science relies on evidence gathered and evaluated through careful investigation.'),
      q('Which Ghanaian scientist is known for work in mathematics and physics?', ['Francis Allotey', 'A fictional space captain', 'A character from a game', 'An unknown made-up inventor'], 'Francis Allotey was a Ghanaian mathematician and physicist.'),
      q('How can learners research a scientist responsibly?', ['Use reliable sources and check claims before presenting them', 'Repeat every online rumour', 'Invent awards to make a story exciting', 'Avoid checking dates and achievements'], 'Reliable research checks information across trustworthy sources and presents achievements accurately.')
    ]
  },
  {
    id: 'gh-jhs1-science-climate-green-economy', arc: 3, sec: 'Humans and the Environment', pages: 'NaCCA CCP · JHS 1 Science · B7.5.4',
    hue: 78, horns: 2, eyes: 2, title: 'The Green Future Strategist',
    topic: 'Explain sustainable energy choices, the greenhouse effect and practical ways communities can protect the environment.',
    demon: 'The Greenhouse Gas Giant', tech: 'Climate Form · First Technique: Power the Future Wisely',
    scenes: [
      lesson('<p>Climate describes the usual pattern of weather in a place over a long period. The greenhouse effect is a natural process: gases such as water vapour and carbon dioxide absorb and re-emit some heat, helping keep Earth warm enough for life. Human activities that add extra greenhouse gases strengthen this effect and contribute to global warming and climate change.</p>'),
      lesson('<p>Burning coal, oil and natural gas releases carbon dioxide. Cutting down forests can also increase the amount of carbon dioxide in the air and reduce the number of trees that absorb it. Climate change can affect rainfall, heat, coastlines, farming and ecosystems. Effects differ from place to place.</p>'),
      lesson('<p>Sustainable energy choices provide useful energy while reducing harm to the environment and preserving resources. Examples include solar power, carefully managed hydropower, energy-efficient appliances and reducing unnecessary energy use. Each choice has limits, so communities should consider local conditions, cost, reliability and environmental effects.</p>'),
      lesson('<p>A green economy aims to improve people’s lives while using resources responsibly and reducing pollution. A school or community can plan a small project: save electricity, plant and care for suitable trees, reduce waste, protect water or investigate a local renewable-energy idea. Measure what changes and share the evidence.</p>'),
      { who: 'd', vis: 'demon', text: 'I say the greenhouse effect is always harmful and that every energy source has the same impact! Separate the natural process from human-driven change and choose sustainable actions.' },
      { type: 'battle' }
    ],
    quiz: [
      q('What is the natural greenhouse effect?', ['A process that helps keep Earth warm by trapping some heat', 'A machine that makes rain inside every house', 'The complete removal of sunlight', 'A type of soil'], 'Greenhouse gases absorb and re-emit heat, keeping Earth warmer than it would otherwise be.'),
      q('Which gas is released when fossil fuels are burned and contributes to human-driven climate change?', ['Carbon dioxide', 'Oxygen only', 'Helium', 'Neon'], 'Burning fossil fuels releases carbon dioxide, a greenhouse gas.'),
      q('Which is an example of a sustainable energy choice?', ['Using solar energy where it is suitable', 'Leaving all lights on all day', 'Burning mixed plastic waste', 'Wasting electricity when nobody needs it'], 'Solar energy can provide electricity without burning fuel during operation.'),
      q('Why can deforestation contribute to climate change?', ['It reduces carbon storage in trees and can release stored carbon', 'It creates unlimited clean energy', 'It removes all greenhouse gases', 'It stops all rainfall immediately'], 'Forests store carbon, so clearing or burning them can increase emissions and reduce future absorption.'),
      q('What makes a school environmental project useful?', ['It sets a goal, takes practical action and checks the results', 'It makes claims without collecting evidence', 'It creates more waste', 'It ignores the needs of the community'], 'A useful project plans an action and evaluates its impact using observations or measurements.')
    ]
  },
  {
    id: 'gh-jhs1-science-understanding-environment', arc: 4, sec: 'Humans and the Environment', pages: 'NaCCA CCP · JHS 1 Science · B7.5.5',
    hue: 28, horns: 2, eyes: 2, title: 'The Habitat and Adaptation Ranger',
    topic: 'Compare plants and animals in Ghanaian landforms, explain survival adaptations and describe relationships among organisms.',
    demon: 'The Habitat Confuser', tech: 'Habitat Form · First Technique: Adapt, Associate and Survive',
    scenes: [
      lesson('<p>A landform is a natural feature of Earth’s surface. Ghana has varied landscapes, including plains, plateaus, hills, mountains, valleys, rivers and coastal areas. Different landforms have different conditions, such as soil, water, temperature and shelter, so the plants and animals found there can vary.</p>'),
      lesson('<p>Plants and animals have features that help them survive in their habitats. Deep or spreading roots can help plants reach water or remain anchored. Some plants have small or waxy leaves that reduce water loss. Animals may have body coverings, colours, feeding structures or behaviours that help them find food, avoid predators and cope with local conditions.</p>'),
      lesson('<p>Organisms also interact. In <b>mutualism</b>, both organisms benefit, such as a pollinating insect receiving nectar while helping a flower reproduce. In <b>parasitism</b>, one organism benefits while the host is harmed. In <b>commensalism</b>, one benefits while the other is neither helped nor harmed significantly. These relationships influence habitats.</p>'),
      lesson('<p>To study a habitat, observe without harming organisms. Record the landform, plants, animals, visible adaptations and relationships. Compare findings from different places and use evidence to explain why an organism may be suited to one environment. A labelled nature album can share the observations and help people value Ghana’s biodiversity.</p>'),
      { who: 'd', vis: 'demon', text: 'I claim every plant and animal can live equally well in every landform! Use adaptations and organism relationships to match living things to their habitats.' },
      { type: 'battle' }
    ],
    quiz: [
      q('What is a landform?', ['A natural feature of Earth’s surface, such as a valley or plateau', 'A type of classroom timetable', 'A manufactured plastic container', 'A kind of cloud only'], 'Landforms are natural surface features such as plains, plateaus, mountains and valleys.'),
      q('How can deep roots help some plants survive?', ['They can reach water and help anchor the plant', 'They make the plant walk', 'They stop the plant needing sunlight', 'They turn leaves into animals'], 'Deep roots can help plants access water and remain firmly anchored.'),
      q('What is mutualism?', ['A relationship in which both organisms benefit', 'A relationship in which both organisms are always harmed', 'A relationship with no living things', 'A type of rock'], 'In mutualism, both organisms gain a benefit from the relationship.'),
      q('In parasitism, what usually happens?', ['The parasite benefits while the host is harmed', 'Both organisms always benefit equally', 'Neither organism is alive', 'The host always eats the parasite'], 'A parasite obtains resources from a host and usually causes harm to it.'),
      q('What is a responsible way to study plants and animals in a habitat?', ['Observe, record evidence and avoid harming organisms', 'Remove every animal for a collection', 'Damage plants to see how they grow', 'Invent observations without visiting or researching'], 'Careful observation and recording allow learning while protecting organisms and their habitats.')
    ]
  }
];

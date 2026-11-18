import type { ArcInfo, Mission, UnitInfo } from '../types';

/** Ghana NaCCA Common Core Programme · JHS 2 Science · Cycles (Basic 8). */
export const GHANA_JHS2_SCIENCE_CYCLES_UNIT: UnitInfo = {
  title: 'Cycles',
  ch: 'JHS 2 · NaCCA Science · Strand 2',
  subject: 'ghjhs2science'
};

export const GHANA_JHS2_SCIENCE_CYCLES_ARCS: ArcInfo[] = [
  { n: 1, unit: 0, subject: 'ghjhs2science', title: 'Earth Science · The Carbon Cycle', pages: 'NaCCA CCP · JHS 2 Science · B8.2.1.1' },
  { n: 2, unit: 0, subject: 'ghjhs2science', title: 'Life Cycle of Organisms · Anopheles Mosquito', pages: 'NaCCA CCP · JHS 2 Science · B8.2.2.1' },
  { n: 3, unit: 0, subject: 'ghjhs2science', title: 'Crop Production · Seed Beds', pages: 'NaCCA CCP · JHS 2 Science · B8.2.3.1–B8.2.3.2' },
  { n: 4, unit: 0, subject: 'ghjhs2science', title: 'Animal Production · Feed and Water', pages: 'NaCCA CCP · JHS 2 Science · B8.2.4.1–B8.2.4.2' }
];

const q = (prompt: string, answers: string[], explanation: string) => ({ q: prompt, a: answers, why: explanation });
const lesson = (text: string) => ({ who: 's' as const, text });

export const GHANA_JHS2_SCIENCE_CYCLES_MISSIONS: Mission[] = [
  {
    id: 'gh-jhs2-science-carbon-cycle', arc: 0, sec: 'Cycles', pages: 'NaCCA CCP · JHS 2 Science · B8.2.1.1.1–B8.2.1.1.2',
    hue: 112, horns: 2, eyes: 2, title: 'The Carbon Cycle Guardian',
    topic: 'Trace carbon through photosynthesis, feeding, respiration, burning and decay, and explain how the cycle helps maintain environmental balance.',
    demon: 'The Carbon Hoarder', tech: 'Earth Form · Second Technique: Keep Carbon Moving',
    scenes: [
      lesson('<p>Carbon is found in living things, the air, soil, oceans and fuels. The <b>carbon cycle</b> describes how carbon moves repeatedly between these parts of Earth. It is a cycle because carbon is continually transferred and reused rather than simply disappearing.</p>'),
      lesson('<p>During <b>photosynthesis</b>, green plants take in carbon dioxide from the air and use light energy to make food. Carbon becomes part of plant materials. Animals obtain some of this carbon when they eat plants or other animals, so carbon moves through food chains.</p>'),
      lesson('<p>Plants and animals release carbon dioxide during <b>respiration</b>. When organisms die, decomposers break down their remains and carbon returns to the soil and air. <b>Burning</b> wood and fossil fuels also releases carbon dioxide into the atmosphere.</p>'),
      lesson('<p>The carbon cycle helps regulate the amount of carbon dioxide in the air and supports food chains. Carbon dioxide is also a greenhouse gas: extra amounts from activities such as burning fossil fuels can strengthen the greenhouse effect and contribute to global warming. Protecting vegetation and reducing unnecessary burning help care for the environment.</p>'),
      { who: 'd', vis: 'demon', text: 'I have trapped carbon in one place! Rebuild the cycle by linking photosynthesis, feeding, respiration, decay and burning.' },
      { type: 'battle' }
    ],
    quiz: [
      q('Which process removes carbon dioxide from the air and stores carbon in plant food?', ['Photosynthesis', 'Respiration', 'Burning', 'Decay'], 'Plants use carbon dioxide during photosynthesis to make food.'),
      q('How does carbon commonly move from plants to animals?', ['Animals eat plants', 'Plants absorb animal bones directly', 'Rain turns carbon into sunlight', 'Wind changes carbon into water'], 'Feeding transfers carbon in organic matter along food chains.'),
      q('Which process releases carbon dioxide as organisms use food for energy?', ['Respiration', 'Sieving', 'Condensation', 'Germination only'], 'Respiration releases carbon dioxide from living organisms.'),
      q('What returns carbon from dead organisms to the environment?', ['Decomposition by decomposers', 'Photosynthesis alone', 'Magnetic separation', 'Evaporation'], 'Decomposers break down dead material and return carbon to soil and air.'),
      q('Why is the carbon cycle important to the environment?', ['It continually recycles carbon and helps maintain balance', 'It removes all carbon from Earth', 'It stops every food chain', 'It prevents plants from respiring'], 'Carbon is reused across air, organisms, soil and other parts of the environment.')
    ]
  },
  {
    id: 'gh-jhs2-science-anopheles-life-cycle', arc: 1, sec: 'Cycles', pages: 'NaCCA CCP · JHS 2 Science · B8.2.2.1.1–B8.2.2.1.2',
    hue: 28, horns: 2, eyes: 2, title: 'The Mosquito Life-Cycle Defender',
    topic: 'Describe the four stages of the Anopheles mosquito, explain the female mosquito’s role in malaria transmission, and identify safe community control measures.',
    demon: 'The Malaria Carrier', tech: 'Life Form · Second Technique: Break the Mosquito Cycle',
    scenes: [
      lesson('<p>The Anopheles mosquito has four life stages: <b>egg, larva, pupa and adult</b>. Eggs are laid on water. The larva lives in water and feeds as it grows. The pupa is also aquatic, but it does not feed; the adult mosquito emerges from it.</p>'),
      lesson('<p>The adult male and female mosquitoes feed mainly on plant sugars such as nectar. A female Anopheles mosquito may take a blood meal to develop her eggs. If she is infected with malaria-causing <i>Plasmodium</i>, she can pass the parasite to a person when she bites.</p>'),
      lesson('<p>Malaria can cause fever, chills, headache and serious illness. The mosquito is a <b>vector</b>: it carries the parasite between people. Not every mosquito carries malaria, and malaria is not spread simply by touching someone who is ill.</p>'),
      lesson('<p>Control focuses on preventing bites and reducing breeding places. Use insecticide-treated nets as directed, fit screens where possible, cover water containers, clear blocked drains and remove standing water where mosquitoes can breed. Follow local public-health advice for approved spraying and malaria testing or treatment; never handle or breed mosquitoes as a home experiment.</p>'),
      { who: 'd', vis: 'demon', text: 'I have hidden the stages and spread confusion about malaria! Put the life cycle in order and choose safe ways to protect the community.' },
      { type: 'battle' }
    ],
    quiz: [
      q('Which sequence shows the Anopheles mosquito life cycle?', ['Egg, larva, pupa, adult', 'Egg, pupa, larva, adult', 'Larva, egg, adult, pupa', 'Pupa, adult, egg, larva'], 'The mosquito develops through egg, larva, pupa and adult stages.'),
      q('Which mosquito stage lives in water and feeds while growing?', ['Larva', 'Adult', 'Egg only', 'Pupa'], 'The aquatic larva feeds and grows before changing into a pupa.'),
      q('Which mosquito transmits malaria parasites to humans?', ['An infected female Anopheles', 'Every male mosquito', 'A housefly', 'A butterfly'], 'An infected female Anopheles mosquito can transmit Plasmodium when it bites.'),
      q('What is a vector in the spread of malaria?', ['An organism that carries a disease-causing agent between hosts', 'A medicine that cures every infection', 'A type of mosquito egg', 'A water-storage container'], 'A vector carries a pathogen, such as Plasmodium, between hosts.'),
      q('Which action helps reduce mosquito bites and breeding?', ['Sleep under an insecticide-treated net and remove standing water safely', 'Leave water containers uncovered', 'Keep drains blocked', 'Collect and breed mosquitoes at home'], 'Nets reduce bites, while safe removal of breeding sites helps control mosquitoes.')
    ]
  },
  {
    id: 'gh-jhs2-science-seed-beds', arc: 2, sec: 'Cycles', pages: 'NaCCA CCP · JHS 2 Science · B8.2.3.1.1–B8.2.3.2.1',
    hue: 82, horns: 2, eyes: 2, title: 'The Seed-Bed Design Strategist',
    topic: 'Compare seed beds used in the community, select suitable beds for crops, and compare plant growth, height, size and flowering.',
    demon: 'The Uneven Harvest', tech: 'Farm Form · Second Technique: Match the Bed to the Crop',
    scenes: [
      lesson('<p>A <b>seed bed</b> is a prepared area of soil where seeds or other planting materials are placed to grow. Farmers use different designs depending on the crop, soil, rainfall, drainage and local conditions. Common examples include flat beds, raised beds, sunken beds, ridges and mounds.</p>'),
      lesson('<p>Raised beds lift the planting surface and can help water drain away in wet conditions. Sunken beds can help collect and conserve water in dry conditions. Ridges and mounds raise planting rows or individual planting spots. Flat beds provide a level surface where the soil and drainage are suitable.</p>'),
      lesson('<p>Different crops and planting materials need different conditions. A farmer may plant seeds, seedlings or suitable cuttings in a prepared bed. Compare beds in the community and explain why a farmer might choose one design for a particular crop and season.</p>'),
      lesson('<p>To compare results fairly, grow the same crop under similar conditions in different beds. Measure plant height, size, number of flowers and number of fruits at regular times. Record results in a table or graph. Differences may be linked to water, soil, nutrients, spacing or other growing conditions.</p>'),
      { who: 'd', vis: 'demon', text: 'I have planted every crop in the same place! Choose and compare seed beds using evidence from plant growth.' },
      { type: 'battle' }
    ],
    quiz: [
      q('What is a seed bed?', ['A prepared area of soil for planting and growing crops', 'A container used only to store harvested grain', 'A tool for measuring rainfall', 'A type of animal feed'], 'A seed bed is prepared soil where seeds or planting materials are grown.'),
      q('Which seed bed may help improve drainage in a very wet area?', ['Raised bed', 'Sunken bed', 'Water-filled trench', 'Unprepared flooded ground'], 'A raised bed lifts the planting surface and can help excess water drain away.'),
      q('Why might a farmer use a sunken bed in dry conditions?', ['It can help collect and conserve water', 'It guarantees no sunlight reaches plants', 'It removes all soil nutrients', 'It prevents roots from growing'], 'A sunken bed can collect water around the planting area in dry conditions.'),
      q('Which measurements can help compare crops grown in different beds?', ['Plant height, size and number of flowers or fruits', 'The colour of the farmer’s clothes', 'The distance to the nearest shop only', 'The number of clouds at night only'], 'These measurements provide evidence for comparing plant growth and yield.'),
      q('To make a fair comparison of two seed beds, what should a learner do?', ['Grow the same crop under similar conditions and record measurements', 'Use different crops and change every condition', 'Measure only one plant once', 'Ignore the results'], 'Keeping other conditions similar makes the seed-bed comparison more meaningful.')
    ]
  },
  {
    id: 'gh-jhs2-science-animal-feed-water', arc: 3, sec: 'Cycles', pages: 'NaCCA CCP · JHS 2 Science · B8.2.4.1.1–B8.2.4.2.1',
    hue: 38, horns: 2, eyes: 2, title: 'The Animal Feed and Water Keeper',
    topic: 'Compare feeds for different farm animals, identify nutrients and feed sources, and explain why adequate clean water and balanced feed support growth and reproduction.',
    demon: 'The Empty Trough', tech: 'Life Form · Third Technique: Feed for Healthy Growth',
    scenes: [
      lesson('<p>Farm animals need food and water to stay alive, grow and reproduce. Different animals have different feeding needs. A suitable ration depends on the animal species, age, size, health and whether it is growing, laying eggs, producing milk or doing work.</p>'),
      lesson('<p><b>Roughages</b> are bulky feeds rich in fibre, such as fresh grass, hay and some crop residues. <b>Concentrates</b> provide more concentrated energy or protein in a smaller amount; examples include maize grain, wheat bran and oilseed cakes. Some animals also need mineral and vitamin sources in suitable amounts.</p>'),
      lesson('<p>Feed nutrients have different functions. Carbohydrates and fats provide energy. Proteins support growth and repair. Minerals and vitamins help regulate body processes and maintain health. Feed labels can help farmers compare ingredients and nutrient proportions, but the ration must suit the animal.</p>'),
      lesson('<p>Clean water is essential for digestion, transport of nutrients, temperature control and other body functions. Animals that do not receive enough water or suitable feed may grow poorly, become weak or reproduce less successfully. Provide fresh water regularly and seek qualified agricultural or veterinary advice when planning feed or treating illness.</p>'),
      { who: 'd', vis: 'demon', text: 'I have filled every trough with the wrong feed! Match feed types to animals and explain why clean water matters.' },
      { type: 'battle' }
    ],
    quiz: [
      q('Which feed is an example of roughage?', ['Hay', 'Fishmeal concentrate', 'Vitamin tablet', 'Clean drinking water'], 'Hay is a bulky, fibre-rich roughage.'),
      q('Which feed ingredient is commonly used as an energy-rich concentrate?', ['Maize grain', 'Fresh drinking water', 'Clean bedding', 'Mineral salt alone'], 'Maize grain supplies concentrated energy in animal diets.'),
      q('Which nutrient is especially important for growth and repair of body tissues?', ['Protein', 'Water vapour', 'Carbon dioxide', 'Fibre only'], 'Proteins provide materials needed for growth and tissue repair.'),
      q('Why must farm animals have adequate clean water?', ['Water supports digestion, nutrient transport and body functions', 'Water replaces every nutrient in feed', 'Water is needed only by young animals', 'Water prevents the need for food'], 'Water is essential for many body processes and healthy growth.'),
      q('What should guide the choice of feed for a farm animal?', ['Its species, age, size, health and production stage', 'The colour of the feed bag only', 'The farmer’s favourite animal', 'The price without checking its contents'], 'Feed must match the animal’s needs and the nutrient information on the label.')
    ]
  }
];

import type { ArcInfo, Mission, UnitInfo } from '../types';

/** Ghana NaCCA Common Core Programme · JHS 3 Science · Cycles (Basic 9). */
export const GHANA_JHS3_SCIENCE_CYCLES_UNIT: UnitInfo = {
  title: 'Cycles',
  ch: 'JHS 3 · NaCCA Science · Strand 2',
  subject: 'ghjhs3science'
};

export const GHANA_JHS3_SCIENCE_CYCLES_ARCS: ArcInfo[] = [
  { n: 1, unit: 0, subject: 'ghjhs3science', title: 'Earth Science · The Nitrogen Cycle', pages: 'NaCCA CCP · JHS 3 Science · B9.2.1.1' },
  { n: 2, unit: 0, subject: 'ghjhs3science', title: 'Life Cycle of Organisms · Grasshopper', pages: 'NaCCA CCP · JHS 3 Science · B9.2.2.1' },
  { n: 3, unit: 0, subject: 'ghjhs3science', title: 'Crop Production · Crop Maturity', pages: 'NaCCA CCP · JHS 3 Science · B9.2.3.1–B9.2.3.2' },
  { n: 4, unit: 0, subject: 'ghjhs3science', title: 'Animal Production · Feed Preparation and Selection', pages: 'NaCCA CCP · JHS 3 Science · B9.2.4.1–B9.2.4.2' }
];

const q = (prompt: string, answers: string[], explanation: string) => ({ q: prompt, a: answers, why: explanation });
const lesson = (text: string) => ({ who: 's' as const, text });

export const GHANA_JHS3_SCIENCE_CYCLES_MISSIONS: Mission[] = [
  {
    id: 'gh-jhs3-science-nitrogen-cycle', arc: 0, sec: 'Cycles', pages: 'NaCCA CCP · JHS 3 Science · B9.2.1.1.1–B9.2.1.1.2',
    hue: 112, horns: 2, eyes: 2, title: 'The Nitrogen Cycle Guardian',
    topic: 'Trace nitrogen through fixation, nitrification, assimilation, ammonification and denitrification, and explain why the cycle matters to soil fertility and environmental balance.',
    demon: 'The Nitrogen Lockkeeper', tech: 'Earth Form · Third Technique: Keep Nutrients Circulating',
    scenes: [
      lesson('<p>Most of the air is nitrogen gas (N₂), but most plants cannot use nitrogen gas directly. Plants need nitrogen to build proteins and other important molecules. The <b>nitrogen cycle</b> describes how nitrogen moves between the atmosphere, soil, plants, animals and decomposers.</p>'),
      lesson('<p><b>Nitrogen fixation</b> changes nitrogen gas into compounds such as ammonia or ammonium that can enter the soil. Certain soil bacteria do this, including bacteria living in root nodules of leguminous plants such as beans and groundnuts. Lightning and industrial processes can also fix nitrogen.</p>'),
      lesson('<p>During <b>nitrification</b>, soil bacteria convert ammonium into nitrites and then nitrates. Plants take up usable nitrogen compounds through their roots: this is <b>assimilation</b>. Animals obtain nitrogen by eating plants or other animals. When organisms produce waste or die, decomposers return organic nitrogen to the soil as ammonia or ammonium; this is <b>ammonification</b>.</p>'),
      lesson('<p><b>Denitrification</b> is carried out by bacteria that convert nitrates back into nitrogen gas, returning it to the atmosphere. The cycle helps maintain nitrogen availability for living things. Leaching can wash nitrates from soil, bush burning can damage soil organisms and organic matter, and removing leguminous plants can reduce natural nitrogen inputs. Crop rotation with legumes and careful soil management can help protect soil fertility.</p>'),
      lesson('<p><b>Applied soil investigation:</b> Compare a teacher-prepared soil sample from a legume plot with one from a non-legume plot. Record visible root nodules from safe, prepared examples or photographs, discuss how nitrogen-fixing bacteria contribute to soil nitrogen, and propose a crop-rotation plan. Do not taste soil or handle unknown cultures.</p>'),
      { who: 'd', vis: 'demon', text: 'I have blocked the nitrogen pathways! Put fixation, nitrification, assimilation, ammonification and denitrification in the right places, then protect the soil.' },
      { type: 'battle' }
    ],
    quiz: [
      q('Why can most plants not use the nitrogen gas that makes up much of the air?', ['They need nitrogen converted into usable compounds', 'Nitrogen gas contains no nitrogen atoms', 'Plants use only oxygen to make proteins', 'Nitrogen is found only in oceans'], 'Most plants take up nitrogen as compounds such as nitrate or ammonium, not directly as atmospheric N₂.'),
      q('Which process changes atmospheric nitrogen into compounds that can enter the soil?', ['Nitrogen fixation', 'Denitrification', 'Transpiration', 'Evaporation'], 'Nitrogen fixation converts nitrogen gas into biologically usable nitrogen compounds.'),
      q('What happens during nitrification?', ['Bacteria convert ammonium into nitrites and nitrates', 'Plants convert oxygen into nitrogen gas', 'Animals turn nitrates into sunlight', 'Rain changes nitrogen into carbon'], 'Nitrifying bacteria convert ammonium first to nitrite and then to nitrate.'),
      q('Which process returns nitrogen from dead organisms and waste to ammonia or ammonium?', ['Ammonification', 'Assimilation', 'Denitrification', 'Pollination'], 'Decomposers break down organic nitrogen and release ammonia or ammonium during ammonification.'),
      q('How can leguminous crops help maintain soil fertility?', ['Root-nodule bacteria can fix atmospheric nitrogen', 'Their leaves remove all nitrogen from soil', 'They stop all soil bacteria from growing', 'They turn nitrates into plastic'], 'Nitrogen-fixing bacteria associated with legume roots can add usable nitrogen compounds to the soil.'),
      q('Which observation would provide evidence of a legume association with nitrogen-fixing bacteria?', ['Root nodules on prepared roots or a labelled photograph', 'Blue flowers on every plant', 'A dry leaf alone', 'The height of the classroom door'], 'Root nodules on legume roots can house nitrogen-fixing bacteria; observation alone does not identify every bacterial species.'),
      q('Why should a soil comparison use similar sampling methods for both plots?', ['To make the comparison fair and more reliable', 'To guarantee both soils contain identical organisms', 'To remove the need to record results', 'To make nitrogen disappear'], 'Consistent sampling reduces differences caused by the method rather than the plots.'),
      q('Which farm plan can help maintain nitrogen inputs naturally?', ['Rotate suitable crops with legumes', 'Remove all plant residues and legumes every season', 'Keep soil bare and exposed', 'Prevent decomposers from acting'], 'Legumes with nitrogen-fixing bacteria can contribute usable nitrogen to the soil.'),

    ]
  },
  {
    id: 'gh-jhs3-science-grasshopper-life-cycle', arc: 1, sec: 'Cycles', pages: 'NaCCA CCP · JHS 3 Science · B9.2.2.1.1–B9.2.2.1.2',
    hue: 76, horns: 2, eyes: 2, title: 'The Grasshopper Life-Cycle Ranger',
    topic: 'Describe egg, nymph and adult stages of a grasshopper, explain incomplete metamorphosis, and assess how grasshopper feeding can help or harm people.',
    demon: 'The Crop-Leaf Raider', tech: 'Life Form · Third Technique: Track Every Stage',
    scenes: [
      lesson('<p>A grasshopper develops through <b>incomplete metamorphosis</b>. Its life cycle has three main stages: <b>egg → nymph → adult</b>. The female lays eggs, often in a pod in the soil. A young grasshopper called a nymph hatches and looks like a small wingless adult.</p>'),
      lesson('<p>The nymph grows through a series of moults, shedding its hard outer covering as it becomes larger. Wing buds develop and the body gradually changes. The adult has fully developed wings and reproductive organs. Unlike a butterfly, a grasshopper has no pupal stage.</p>'),
      lesson('<p>Grasshoppers feed mainly on grasses, leaves and other plant material. At ordinary population levels they are part of food webs and provide food for birds, reptiles and other animals. When populations become very large, some species can damage crops and pasture by eating leaves and young plants.</p>'),
      lesson('<p>Farmers can monitor crops and report unusual outbreaks to agricultural extension services. Integrated pest management uses observation, prevention and suitable control methods rather than careless chemical use. Protect natural predators and follow approved local guidance; do not spray pesticides without training or instructions.</p>'),
      lesson('<p><b>Applied field-observation task:</b> Use teacher-approved photographs, a short observation window or a prepared life-cycle card set to record egg, nymph and adult evidence. Create a labelled sequence and a simple crop-monitoring table showing leaf damage, grasshopper counts and predator sightings. Observe living organisms without disturbing nests or applying pesticides.</p>'),
      { who: 'd', vis: 'demon', text: 'I have hidden the missing stage! Rebuild the grasshopper’s three-stage life cycle and decide when its feeding becomes a crop problem.' },
      { type: 'battle' }
    ],
    quiz: [
      q('Which sequence describes a grasshopper’s life cycle?', ['Egg, nymph, adult', 'Egg, larva, pupa, adult', 'Nymph, pupa, egg', 'Adult, pupa, larva'], 'Grasshoppers develop through egg, nymph and adult stages.'),
      q('Why is grasshopper development called incomplete metamorphosis?', ['The young nymph resembles a small wingless adult and there is no pupal stage', 'It has four stages including a pupa', 'The egg never hatches', 'The adult changes back into an egg'], 'A grasshopper nymph gradually grows and moults into an adult without a pupal stage.'),
      q('What happens as a grasshopper nymph grows?', ['It moults several times and develops wings', 'It becomes a pupa inside a cocoon', 'It stops feeding permanently', 'It changes into a tadpole'], 'The nymph sheds its exoskeleton during growth and wing buds develop.'),
      q('How can grasshoppers be useful in an ecosystem?', ['They are part of food webs and provide food for predators', 'They produce all the oxygen in the atmosphere', 'They pollinate every crop', 'They remove all soil nutrients'], 'Grasshoppers are food for birds, reptiles and other predators.'),
      q('What is a sensible response to unusually high grasshopper numbers on crops?', ['Monitor the crop and seek agricultural advice on integrated pest management', 'Spray any chemical without reading its label', 'Release more grasshoppers', 'Ignore all crop damage and evidence'], 'Monitoring and approved integrated pest management help manage crop damage safely.'),
      q('Which evidence best shows that a grasshopper has reached the adult stage?', ['Fully developed wings and reproductive structures', 'A newly hatched wingless body', 'An egg pod in soil', 'A shed skin by itself'], 'Adults have fully developed wings and reproductive structures; a shed skin alone does not establish the stage.'),
      q('Why should crop monitoring record both grasshopper numbers and leaf damage?', ['It helps relate pest abundance to actual crop impact', 'It proves every grasshopper is harmful', 'It replaces all field observations', 'It measures soil pH'], 'Counts and damage records together support a more informed assessment of crop risk.'),
      q('What is a responsible way to protect crops while considering ecosystem balance?', ['Monitor outbreaks and seek approved integrated pest-management advice', 'Destroy all birds and other predators', 'Apply an unknown pesticide mixture', 'Release more insects into the field'], 'Integrated pest management combines monitoring, prevention and suitable approved controls while considering natural predators.'),

    ]
  },
  {
    id: 'gh-jhs3-science-crop-maturity', arc: 2, sec: 'Cycles', pages: 'NaCCA CCP · JHS 3 Science · B9.2.3.1.1–B9.2.3.2.2, B9.2.3.2.1',
    hue: 42, horns: 2, eyes: 2, title: 'The Crop Maturity Investigator',
    topic: 'Compare crop maturity in different soils and seed beds, record growth evidence, identify uses at different maturity stages, and explain how maturity knowledge guides harvest decisions.',
    demon: 'The Untimely Harvester', tech: 'Farm Form · Third Technique: Harvest at the Right Stage',
    scenes: [
      lesson('<p>Crops do not all mature at the same rate. Their growth depends on the crop variety, soil type, soil nutrients, water, temperature, sunlight, planting date and seed-bed conditions. Even the same crop may mature at different times in different soils or beds.</p>'),
      lesson('<p>Farmers and learners can observe crops at regular intervals and record visible signs such as plant height, leaf development, flowering, fruit formation, seed filling and colour changes. A table, labelled drawing or graph helps compare maturity stages across plots. Use repeated observations rather than relying on one measurement.</p>'),
      lesson('<p>Different maturity stages can have different uses. Some leafy vegetables are harvested while leaves are young and tender. Maize may be harvested green for fresh eating or left longer for dry grain. Beans and other legumes may be used as fresh pods or allowed to dry for mature seeds. The best stage depends on the intended use and the crop.</p>'),
      lesson('<p>Knowing maturity stages helps farmers choose varieties, plan planting and harvesting dates, reduce losses and supply markets at the right time. A fair comparison should keep other conditions as similar as possible and record evidence honestly. Soil and seed-bed differences should be considered before deciding why one crop matured earlier.</p>'),
      lesson('<p><b>Applied harvest-planning task:</b> Build a maturity-and-use matrix for maize, leafy vegetables and beans. For each crop, record observable maturity signs, intended use, a suitable harvest stage and storage considerations. If comparing seed beds, keep the crop and observation schedule consistent, record dates and measurements, and explain limitations in the evidence.</p>'),
      { who: 'd', vis: 'demon', text: 'I have mixed up young, mature and over-mature crops! Read the growth evidence and choose the harvest stage that matches each use.' },
      { type: 'battle' }
    ],
    quiz: [
      q('Which set of factors can affect how quickly crops mature?', ['Soil, water, nutrients, sunlight and temperature', 'Only the colour of the farmer’s clothes', 'Only the shape of the farm gate', 'The names of nearby towns'], 'Crop maturity is influenced by growing conditions such as soil, water, nutrients, light and temperature.'),
      q('What is a useful way to compare crop maturity in two seed beds?', ['Observe and record the same crop at regular intervals', 'Look at one plant once and guess', 'Change the crop and every growing condition', 'Record only the day of the week'], 'Repeated observations of the same crop provide evidence for comparing growth and maturity.'),
      q('Which is a possible use of maize at an earlier, green maturity stage?', ['Fresh green maize for eating', 'Dry seed for long-term storage only', 'Timber for building', 'Cotton fibre'], 'Green maize can be harvested for fresh consumption before the grain dries fully.'),
      q('Why might a farmer leave some maize plants longer before harvesting?', ['To allow the grain to mature and dry for storage', 'To prevent the kernels from forming', 'To stop photosynthesis permanently', 'To turn the crop into a legume'], 'Dry mature grain is more suitable for storage than wet immature grain.'),
      q('How does knowledge of crop maturity help farmers?', ['It supports crop choice, harvest timing and reduction of losses', 'It makes all crops mature on the same day', 'It removes the need to observe the field', 'It guarantees rain every season'], 'Understanding maturity stages helps farmers plan what to grow and when to harvest for a particular use.'),
      q('A farmer needs dry maize grain for storage. Which evidence is most useful before harvest?', ['Mature, dry kernels and suitable crop maturity signs', 'Only the height of the youngest leaf', 'The colour of the farm fence', 'A single rainfall reading'], 'Dry mature grain is more suitable for storage than immature wet grain.'),
      q('Why should a maturity-and-use matrix include the intended use of each crop?', ['The best harvest stage depends on how the crop will be used', 'Every crop is harvested at exactly the same stage', 'Intended use determines the soil type', 'It removes the need to inspect crops'], 'Leafy vegetables, green maize and dry grain are harvested at different stages for different purposes.'),
      q('What should learners do if two plots differ in more than soil type?', ['Record the other differences and avoid attributing the result to soil alone', 'Claim soil caused every difference', 'Delete measurements that disagree', 'Stop recording the planting dates'], 'A fair conclusion considers other variables such as variety, water, light and planting date.'),

    ]
  },
  {
    id: 'gh-jhs3-science-animal-feed-preparation', arc: 3, sec: 'Cycles', pages: 'NaCCA CCP · JHS 3 Science · B9.2.4.1.1',
    hue: 24, horns: 2, eyes: 2, title: 'The Animal Feed Formulator',
    topic: 'Identify ingredients and preparation methods for feeds used by different domestic and commercial animals, and match feed types to animal needs.',
    demon: 'The Unbalanced Ration', tech: 'Animal Form · Third Technique: Build a Balanced Feed',
    scenes: [
      lesson('<p>Farm animals need balanced feed for energy, growth, repair, health and production. Feed ingredients are selected according to the animal species, age, body size and purpose. Poultry, goats, sheep, pigs, cattle and fish do not all need the same ration.</p>'),
      lesson('<p>Feed may contain energy sources such as maize or other grains; protein sources such as soybean meal, groundnut cake or fish meal; fibre sources such as grass and hay; and suitable mineral and vitamin supplements. The proportions matter: too little or too much of a nutrient can affect animal health.</p>'),
      lesson('<p>Farmers may prepare feed by selecting suitable ingredients, weighing or measuring them, grinding coarse materials when needed, mixing them evenly and storing the finished feed in a clean, dry and protected place. The exact method depends on the animal and the feed formula. Mouldy or contaminated ingredients should not be used.</p>'),
      lesson('<p>A feed plan should use reliable guidance for the animal’s species and stage of growth. Clean equipment, safe storage and gradual changes in diet help reduce problems. For commercial rations or animals that are ill, farmers should seek advice from a qualified animal nutritionist, agricultural extension officer or veterinarian.</p>'),
      lesson('<p><b>Applied feed-formulation task:</b> Use a teacher-provided ingredient table and a sample animal profile to classify energy, protein, fibre and mineral sources. Draft a labelled feed-preparation flow chart that includes checking ingredient quality, measuring, mixing, clean storage and record-keeping. Do not prepare or feed an unverified ration; a qualified adult must check suitability.</p>'),
      { who: 'd', vis: 'demon', text: 'I have swapped the feed ingredients! Choose a suitable combination and put the preparation steps in a safe order.' },
      { type: 'battle' }
    ],
    quiz: [
      q('Why do different farm animals need different feed formulations?', ['Their species, age, size and production needs differ', 'All animals digest exactly the same foods', 'Feed is chosen only by bag colour', 'Animals do not need nutrients'], 'Nutrient requirements vary by species, age, health and production stage.'),
      q('Which ingredient is commonly used as a protein source in animal feed?', ['Soybean meal', 'Clean water only', 'Sand', 'Wood shavings'], 'Soybean meal is a protein-rich feed ingredient.'),
      q('Which sequence is a sensible general feed-preparation process?', ['Select, measure, prepare, mix evenly and store safely', 'Store wet ingredients first, then guess the amounts', 'Mix contaminated feed with clean feed', 'Add random ingredients without measuring'], 'A consistent process uses suitable ingredients, measured amounts, even mixing and safe storage.'),
      q('Why should mouldy feed ingredients be rejected?', ['They may contain harmful moulds or toxins', 'They always contain extra vitamins', 'They make every animal grow faster', 'They sterilise the feed'], 'Mouldy feed can expose animals to harmful fungi and toxins.'),
      q('What should guide a commercial animal feed formula?', ['Reliable nutrient guidance for the species and production stage', 'A random mixture of available materials', 'The same recipe for every animal', 'The cheapest ingredient alone'], 'Feed formulations should meet the animal’s nutritional needs and be based on reliable guidance.'),
      q('A feed ingredient has visible mould. What should the learner recommend?', ['Reject it and report the concern to the supervisor', 'Mix it into the ration to hide the mould', 'Feed a smaller amount without checking', 'Dry it in the sun and assume it is safe'], 'Mouldy ingredients may contain harmful fungi or toxins and should not be used.'),
      q('Why are ingredients measured before mixing a ration?', ['To keep the formulation consistent and nutritionally appropriate', 'To make every feed contain the same nutrient level', 'To avoid identifying the animal', 'To remove the need for clean equipment'], 'Measured ingredients help maintain the intended proportions in a feed formula.'),
      q('Which record would best support evaluation of a feed-preparation activity?', ['Ingredient names, measured amounts, date and storage conditions', 'The colour of the mixing room only', 'A guess about the animal’s weight', 'A list of unrelated farm tools'], 'A clear preparation record makes the process traceable and easier to review.'),

    ]
  },
  {
    id: 'gh-jhs3-science-animal-feed-selection', arc: 3, sec: 'Cycles', pages: 'NaCCA CCP · JHS 3 Science · B9.2.4.2.1, B9.2.4.2.2, B9.2.4.2.3',
    hue: 158, horns: 2, eyes: 2, title: 'The Livestock Nutrition Strategist',
    topic: 'Select appropriate feed for domestic and commercial animals at different growth and production stages, distinguish roughage and concentrates, and demonstrate safe feeding practices.',
    demon: 'The Empty Feeding Trough', tech: 'Animal Form · Fourth Technique: Match the Ration to the Animal',
    scenes: [
      lesson('<p><b>Roughage</b> is bulky feed rich in fibre, such as fresh grass, hay and silage. It is especially important for ruminants such as cattle, sheep and goats because fibre supports normal rumen function. <b>Concentrates</b> provide more energy or protein in a smaller amount, such as grains, bran and oilseed meals.</p>'),
      lesson('<p>Cattle, sheep and goats can digest fibrous forage with the help of microbes in their rumen. Poultry and pigs have different digestive systems and need carefully balanced mixtures of energy, protein, minerals and vitamins. Fish feed must also suit the species, size and feeding behaviour of the fish.</p>'),
      lesson('<p>Young, growing, pregnant, lactating or working animals may need different rations. For example, a dairy cow producing milk has different nutrient demands from a dry cow, while chicks need a different feed from mature laying hens. Feed must therefore match the animal’s species, age, growth stage and production purpose. Fresh, clean water must always be available.</p>'),
      lesson('<p>When selecting feed, check the ingredients, nutrient information, freshness, suitability and cost. Use locally available feeds only when they are safe and nutritionally appropriate. Avoid sudden changes, spoiled materials and unverified additives. A good choice supports animal welfare, healthy production and efficient use of farm resources.</p><p><b>Practical feeding activity:</b> With a teacher or trained farm supervisor, identify the animal and its growth or production stage; inspect the recommended ration; measure the feed using a clean container; place it in a clean trough; provide fresh water; observe the animal eating; and record the feed offered, amount eaten and any unusual response. Wash hands and equipment afterwards. Never feed an animal an unfamiliar ingredient without checking that it is safe.</p>'),
      lesson('<p><b>Applied ration-selection task:</b> Compare three teacher-provided animal profiles (for example, a growing goat, a lactating cow and a laying hen). Use a verified feed-information sheet to justify suitable roughage or concentrate choices, identify fresh-water needs and list warning signs that require advice. Do not feed unfamiliar ingredients or change a real animal’s diet without qualified supervision.</p>'),
      { who: 'd', vis: 'demon', text: 'I have given every animal the same ration! Match each feed to the animal’s digestive system, age and production needs.' },
      { type: 'battle' }
    ],
    quiz: [
      q('Which feed is a typical roughage for cattle?', ['Hay', 'Ground maize alone', 'Fish meal', 'Vitamin premix'], 'Hay is a fibrous roughage suitable for cattle as part of a balanced ration.'),
      q('Why is roughage important for cattle, sheep and goats?', ['Fibre supports normal rumen function', 'It replaces the need for water', 'It prevents all diseases', 'It contains no nutrients'], 'Ruminants rely on fibre and rumen microbes for normal digestion.'),
      q('Which animals generally need a carefully balanced concentrate-based ration rather than a forage-only diet?', ['Poultry', 'Adult cattle only', 'All grazing sheep only', 'Wild grasshoppers'], 'Poultry need balanced diets with suitable energy, protein, minerals and vitamins.'),
      q('Which factor should influence the feed chosen for a laying hen?', ['Its production stage and nutrient requirements', 'The colour of its feathers only', 'The distance to the nearest river', 'The feed bag’s picture only'], 'Laying hens have particular nutrient needs that differ from chicks and other poultry.'),
      q('During a supervised feeding activity, what should a learner do after identifying the animal and its growth stage?', ['Measure a suitable ration, use a clean trough, provide water and record observations', 'Give every animal the same feed without checking', 'Use spoiled feed if the animal is hungry', 'Withhold water so the animal eats more'], 'A safe practical feeding activity matches the ration to the animal, uses clean equipment and water, and records what happens.'),
      q('Which information is essential before selecting a ration for an animal?', ['Species, age, health and production stage', 'Coat colour alone', 'The owner’s favourite crop', 'The distance from the farm gate'], 'Feed requirements depend on species, age, health and growth or production stage.'),
      q('Why should a learner use a verified feed-information sheet?', ['To check nutritional suitability and avoid unsafe assumptions', 'To make all animal diets identical', 'To replace clean water', 'To avoid recording the feed offered'], 'Reliable information helps match feed nutrients to the animal’s needs.'),
      q('What should happen if an animal refuses a new feed or shows an unusual response?', ['Stop the activity and tell the responsible supervisor', 'Force the animal to eat the ration', 'Add an unknown supplement', 'Ignore the response and increase the amount'], 'Unusual responses require a pause and advice from a responsible trained person.'),

    ]
  }
];

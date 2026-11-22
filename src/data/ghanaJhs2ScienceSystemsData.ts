import type { ArcInfo, Mission, UnitInfo } from '../types';

/** Ghana NaCCA Common Core Programme · JHS 2 Science · Systems (Basic 8). */
export const GHANA_JHS2_SCIENCE_SYSTEMS_UNIT: UnitInfo = {
  title: 'Systems',
  ch: 'JHS 2 · NaCCA Science · Strand 3',
  subject: 'ghjhs2science'
};

export const GHANA_JHS2_SCIENCE_SYSTEMS_ARCS: ArcInfo[] = [
  { n: 1, unit: 0, subject: 'ghjhs2science', title: 'The Human Body System · Teeth and Dental Health', pages: 'NaCCA CCP · JHS 2 Science · B8.3.1.1' },
  { n: 2, unit: 0, subject: 'ghjhs2science', title: 'The Solar System · Outer Planets', pages: 'NaCCA CCP · JHS 2 Science · B8.3.2.1' },
  { n: 3, unit: 0, subject: 'ghjhs2science', title: 'Ecosystem · Feeding Relationships', pages: 'NaCCA CCP · JHS 2 Science · B8.3.3.1' },
  { n: 4, unit: 0, subject: 'ghjhs2science', title: 'Farming Systems · Crop, Animal and Land Combinations', pages: 'NaCCA CCP · JHS 2 Science · B8.3.4.1' }
];

const q = (prompt: string, answers: string[], explanation: string) => ({ q: prompt, a: answers, why: explanation });
const lesson = (text: string) => ({ who: 's' as const, text });

export const GHANA_JHS2_SCIENCE_SYSTEMS_MISSIONS: Mission[] = [
  {
    id: 'gh-jhs2-science-teeth-dental-health', arc: 0, sec: 'Systems', pages: 'NaCCA CCP · JHS 2 Science · B8.3.1.1.1–B8.3.1.1.3',
    hue: 18, horns: 2, eyes: 2, title: 'The Dental Health Guardian',
    topic: 'Identify the parts of a mammalian tooth, explain how different teeth help with feeding, and describe the causes and prevention of tooth and gum decay.',
    demon: 'The Plaque Phantom', tech: 'Body Form · First Technique: Protect the Smile',
    scenes: [
      lesson('<p>A human tooth has three main visible regions: the <b>crown</b>, the <b>neck</b> and the <b>root</b>. The crown is the part above the gum. The neck is where the crown meets the gum, and the root anchors the tooth in the jaw. Enamel protects the crown, while dentine forms much of the tooth beneath it. The pulp contains nerves and blood vessels.</p>'),
      lesson('<p>Different teeth do different jobs. <b>Incisors</b> at the front cut and bite food. <b>Canines</b> help tear food. <b>Premolars</b> crush and grind, while <b>molars</b> have broad surfaces for grinding food into smaller pieces. These shapes help humans eat a varied diet.</p>'),
      lesson('<p>Plaque is a sticky layer of bacteria and other material that builds up on teeth. Bacteria use sugars left on teeth and produce acids. These acids can damage enamel and lead to tooth decay. Plaque near the gums can also contribute to gum inflammation and disease if it is not removed.</p>'),
      lesson('<p>Brush all tooth surfaces gently with fluoride toothpaste, clean between teeth, limit frequent sugary snacks and drinks, and visit a dental professional for regular checks. Brush twice a day, including before sleep. If gums bleed or a tooth hurts, tell a trusted adult and seek dental advice rather than trying to treat the problem yourself.</p><p><b>Try it:</b> On a tooth diagram, label the crown, neck and root, then sketch the shapes of an incisor, canine, premolar and molar. Use a toothbrush and a large tooth model to demonstrate gentle brushing along the gumline and across the chewing surfaces; do not practise with another learner’s toothbrush.</p>'),
      { who: 'd', vis: 'demon', text: 'I have hidden the tooth parts and covered every smile with plaque! Identify each tooth’s job and choose habits that protect teeth and gums.' },
      { type: 'battle' }
    ],
    quiz: [
      q('Which part of a tooth is normally visible above the gum?', ['Crown', 'Root', 'Jaw bone', 'Pulp only'], 'The crown is the part of the tooth that is normally visible above the gum line.'),
      q('Which teeth are mainly used for cutting and biting food?', ['Incisors', 'Canines', 'Molars', 'Premolars'], 'The sharp edges of incisors help cut and bite food.'),
      q('What is the main role of molars?', ['Grinding food', 'Cutting paper', 'Smelling food', 'Producing saliva'], 'Molars have broad surfaces that grind food into smaller pieces.'),
      q('How can plaque contribute to tooth decay?', ['Bacteria in plaque produce acids that damage enamel', 'Plaque turns enamel into bone', 'Plaque makes teeth grow longer', 'Plaque removes all bacteria from the mouth'], 'Acids produced by bacteria in plaque can weaken and damage tooth enamel.'),
      q('Which daily habit helps prevent tooth decay?', ['Brush twice daily with fluoride toothpaste', 'Eat sugary snacks frequently', 'Avoid cleaning between teeth', 'Ignore tooth pain'], 'Regular brushing with fluoride toothpaste helps remove plaque and protect enamel.'),
      q('Which teeth are mainly used to tear food?', ['Canines', 'Incisors', 'Premolars', 'Molars'], 'The pointed canines help grip and tear food.'),
      q('Which teeth called premolars help crush and grind food between incisors/canines and molars?', ['Premolars', 'Incisors', 'Canines', 'Molars'], 'Premolars have surfaces suited to crushing and grinding food.'),
      q('Which action is part of careful daily tooth cleaning?', ['Gently clean all tooth surfaces and between teeth', 'Scrub gums hard until they bleed', 'Brush only the front teeth', 'Share a toothbrush with a friend'], 'Clean all surfaces gently and clean between teeth; hard scrubbing can injure gums.')
    ]
  },
  {
    id: 'gh-jhs2-science-outer-planets', arc: 1, sec: 'Systems', pages: 'NaCCA CCP · JHS 2 Science · B8.3.2.1.1',
    hue: 244, horns: 2, eyes: 2, title: 'The Outer Planet Navigator',
    topic: 'Identify Jupiter, Saturn, Uranus and Neptune, compare their properties, and explain why their environments are not suitable for life as we know it.',
    demon: 'The Distant World Trickster', tech: 'Cosmic Form · First Technique: Map the Outer Giants',
    scenes: [
      lesson('<p>The Solar System has eight planets orbiting the Sun. The four outer planets are <b>Jupiter, Saturn, Uranus and Neptune</b>. They are much farther from the Sun than Earth and are very different from the four inner rocky planets.</p>'),
      lesson('<p><b>Jupiter</b> is the largest planet and has powerful storms, including the Great Red Spot. <b>Saturn</b> is famous for its broad, bright rings made mainly of ice and rocky particles. Both are gas giants, made mostly of hydrogen and helium.</p>'),
      lesson('<p><b>Uranus</b> is an ice giant with a blue-green appearance and an unusual tilt, so it rotates almost on its side. <b>Neptune</b> is also an ice giant, appears blue, and has very fast winds. Ice giants contain substances such as water, ammonia and methane in deep, hot interiors.</p>'),
      lesson('<p>The outer planets are extremely cold in their upper atmospheres, have no solid Earth-like surface to stand on, and experience pressures and conditions very different from those on Earth. These conditions make them unsuitable for life as we know it. This is not a claim that every distant moon is lifeless: some icy moons are studied for possible subsurface environments.</p>'),
      lesson('<p><b>Model task:</b> Draw or build a simple model that places Jupiter, Saturn, Uranus and Neptune in order from the Sun. Use labels or a comparison table for size, rings, atmosphere and distinctive features. If the model is not to scale, state that clearly because the real distances between planets are enormous.</p>'),
      { who: 'd', vis: 'demon', text: 'I have swapped the four outer planets! Restore their order, compare gas giants with ice giants, and use evidence to explain their environments.' },
      { type: 'battle' }
    ],
    quiz: [
      q('Which group contains all four outer planets?', ['Jupiter, Saturn, Uranus and Neptune', 'Mercury, Venus, Earth and Mars', 'Earth, Jupiter, Venus and Saturn', 'Mars, Saturn, Mercury and Neptune'], 'The four outer planets are Jupiter, Saturn, Uranus and Neptune.'),
      q('Which outer planet is the largest in the Solar System?', ['Jupiter', 'Saturn', 'Uranus', 'Neptune'], 'Jupiter is the largest planet in the Solar System.'),
      q('Which planet is especially famous for its broad ring system?', ['Saturn', 'Earth', 'Mercury', 'Mars'], 'Saturn has a prominent system of rings made mainly of ice and rocky particles.'),
      q('Which two outer planets are classified as ice giants?', ['Uranus and Neptune', 'Jupiter and Saturn', 'Earth and Mars', 'Venus and Mercury'], 'Uranus and Neptune are ice giants, while Jupiter and Saturn are gas giants.'),
      q('Why are the outer planets unsuitable for life as we know it?', ['Their extreme conditions and lack of an Earth-like surface make survival very difficult', 'They are all closer to the Sun than Earth', 'They have no gravity', 'They are made entirely of liquid water'], 'Their cold upper atmospheres, extreme pressures and lack of a solid Earth-like surface are major barriers.'),
      q('Which statement correctly compares the two gas giants with the two ice giants?', ['Jupiter and Saturn are gas giants; Uranus and Neptune are ice giants', 'Jupiter and Uranus are ice giants; Saturn and Neptune are rocky planets', 'All four are rocky planets like Earth', 'Neptune and Saturn are the only gas giants'], 'Jupiter and Saturn are gas giants; Uranus and Neptune are classified as ice giants.'),
      q('Which unusual feature is associated with Uranus?', ['It rotates with an extreme axial tilt, almost on its side', 'It has the largest solid surface', 'It is the closest planet to the Sun', 'It has no atmosphere'], 'Uranus has an extreme axial tilt, so its rotation is often described as being almost on its side.'),
      q('Which feature is especially associated with Neptune?', ['Very fast winds', 'The largest visible ring system', 'A solid rocky surface', 'The Great Red Spot'], 'Neptune is known for very fast winds in its atmosphere.')
    ]
  },
  {
    id: 'gh-jhs2-science-ecosystem-feeding', arc: 2, sec: 'Systems', pages: 'NaCCA CCP · JHS 2 Science · B8.3.3.1.1',
    hue: 126, horns: 2, eyes: 2, title: 'The Ecosystem Food-Web Strategist',
    topic: 'Explain how energy from the Sun moves through producers and consumers, and represent feeding relationships using food chains and food webs.',
    demon: 'The Food-Web Disruptor', tech: 'Ecosystem Form · First Technique: Follow the Energy',
    scenes: [
      lesson('<p>An <b>ecosystem</b> includes living organisms and the non-living parts of their environment. Organisms depend on one another for food and other needs. The Sun is the main energy source for most ecosystems on Earth.</p>'),
      lesson('<p><b>Producers</b>, such as green plants and algae, use light energy to make food through photosynthesis. A <b>primary consumer</b> eats a producer, while a <b>secondary consumer</b> eats primary consumers. For example: grass → grasshopper → frog → snake.</p>'),
      lesson('<p>A <b>food chain</b> shows one pathway of feeding and energy transfer. A <b>food web</b> links many food chains because most organisms eat or are eaten by more than one kind of organism. Arrows point in the direction energy moves: from the organism being eaten to the organism that eats it.</p>'),
      lesson('<p>Energy becomes available to organisms at each feeding level, but not all energy is passed on: organisms use much of it for movement, growth and other life processes, and some is released as heat. Energy flows through a food chain; unlike nutrients such as carbon, it is not recycled back to the Sun. If one population changes, other populations in the food web may also be affected.</p>'),
      lesson('<p><b>Try it:</b> Draw a food web using organisms from a Ghanaian grassland or pond, such as grass, grasshopper, frog, snake, algae and small fish. Draw each arrow from the food organism to the organism that eats it. Predict what could happen if sunlight were unavailable for a long time or if one consumer population fell sharply, and explain your reasoning.</p>'),
      { who: 'd', vis: 'demon', text: 'I have disconnected every food chain! Put producers and consumers in order, then explain how a change to one population can affect a food web.' },
      { type: 'battle' }
    ],
    quiz: [
      q('What is the main energy source for most ecosystems?', ['The Sun', 'The Moon', 'Soil minerals alone', 'The wind alone'], 'Sunlight provides the energy used by producers in most ecosystems.'),
      q('Which organism is a producer?', ['Green grass', 'A grasshopper', 'A frog', 'A snake'], 'Green plants make their own food using light energy through photosynthesis.'),
      q('In the chain grass → grasshopper → frog, which organism is the primary consumer?', ['Grasshopper', 'Grass', 'Frog', 'Snake'], 'The grasshopper eats the producer, grass, so it is the primary consumer.'),
      q('What does a food web show?', ['Many connected feeding relationships', 'Only one organism in an ecosystem', 'The water cycle only', 'The distance between planets'], 'A food web links several food chains and shows interconnected feeding relationships.'),
      q('What do arrows in a food chain show?', ['The direction energy moves from food to consumer', 'The direction the wind blows', 'The size of each organism', 'The age of each organism'], 'Arrows point from the organism eaten towards the organism receiving the energy.'),
      q('In grass → grasshopper → frog → snake, which organism is the secondary consumer?', ['Frog', 'Grass', 'Grasshopper', 'Snake'], 'The frog eats the primary consumer, the grasshopper, so the frog is the secondary consumer.'),
      q('Why would a long-term loss of sunlight affect most food chains?', ['Most producers need light for photosynthesis, so less food energy enters the web', 'All consumers make food directly from sunlight', 'Sunlight is the only source of water', 'Food chains would gain unlimited energy'], 'Most ecosystems depend on producers using sunlight to make food; reduced production affects consumers at higher levels.'),
      q('What is the key difference between a food chain and a food web?', ['A food chain shows one feeding pathway; a food web links many pathways', 'A food web contains only plants', 'A food chain shows only non-living things', 'They always show different energy sources'], 'A food web connects several food chains and represents more complex feeding relationships.')
    ]
  },
  {
    id: 'gh-jhs2-science-farming-systems', arc: 3, sec: 'Systems', pages: 'NaCCA CCP · JHS 2 Science · B8.3.4.1.1–B8.3.4.1.2',
    hue: 76, horns: 2, eyes: 2, title: 'The Sustainable Farming Systems Planner',
    topic: 'Identify crop, animal and land combinations in farming systems, compare their advantages and disadvantages, and explain how their components support one another.',
    demon: 'The Unbalanced Farm', tech: 'Farm Form · First Technique: Build a Balanced System',
    scenes: [
      lesson('<p>A <b>farming system</b> is the way crops, animals, land, labour, water and other resources are organised on a farm. Different systems combine these resources in different ways depending on the environment, available land and the farmer’s goals.</p>'),
      lesson('<p><b>Mixed cropping</b> means growing two or more crops on the same piece of land at the same time. <b>Mixed farming</b> combines crop production and keeping livestock on the same farm. <b>Crop rotation</b> means growing different crops on the same land in a planned sequence over seasons. These systems are related but do not mean the same thing.</p>'),
      lesson('<p>In mixed farming, crop residues may be used as animal feed, while properly managed animal manure can add nutrients to the soil. Crops provide food and income, and animals may provide meat, milk, eggs, manure or work. Good planning is needed to avoid overgrazing, soil damage, disease and competition for water.</p>'),
      lesson('<p>Farmers compare systems by considering land size, soil, rainfall, labour, costs, food needs and environmental effects. A sustainable system uses resources carefully, protects soil and water, maintains animal welfare and supports the farm over time. The best combination depends on local conditions rather than one system being best everywhere.</p><p><b>Plan a local farm:</b> Choose suitable crops (for example maize, cassava or legumes), animals (such as poultry, goats or cattle) and land areas for cultivation, animal housing, water and safe storage. Make a table showing what each component provides and receives. Explain possible benefits—such as using suitable crop residues as feed or composted manure to improve soil—and risks such as overgrazing, disease, water competition and poor waste handling.</p>'),
      { who: 'd', vis: 'demon', text: 'I have mixed up crops, animals and land! Design a farming system, explain how its parts support one another, and identify possible trade-offs.' },
      { type: 'battle' }
    ],
    quiz: [
      q('What is mixed cropping?', ['Growing two or more crops on the same land at the same time', 'Keeping only one animal in a pen', 'Growing one crop in a sequence over many years', 'Storing harvested crops in a barn'], 'Mixed cropping involves growing more than one crop together on the same piece of land.'),
      q('What makes a farm an example of mixed farming?', ['It combines crop production and livestock on the same farm', 'It grows crops without soil', 'It uses only one crop and no animals', 'It stores food from different markets'], 'Mixed farming combines crop production with keeping farm animals.'),
      q('What is crop rotation?', ['Growing different crops on the same land in a planned sequence', 'Growing every crop at the same time in one hole', 'Moving animals between planets', 'Harvesting a crop every day'], 'Crop rotation changes the crop grown on a piece of land over successive seasons.'),
      q('How can livestock support crop production in a well-managed mixed farm?', ['Manure can add nutrients to soil', 'Animals remove all nutrients from the soil', 'Livestock stop plants from needing water', 'Animals turn sunlight directly into grain'], 'Properly managed manure can return nutrients to the soil and support crop growth.'),
      q('What should guide the choice of a sustainable farming system?', ['Local land, soil, water, climate, resources and environmental effects', 'The same system regardless of location', 'Only the colour of farm buildings', 'Ignoring animal welfare and soil health'], 'A suitable system depends on local conditions and careful resource management.'),
      q('Which example best describes mixed cropping?', ['Growing maize and beans on the same plot during the same season', 'Keeping goats without growing crops', 'Changing the crop grown on a field in the next season', 'Storing harvested maize in a granary'], 'Mixed cropping grows two or more crops together on the same piece of land at the same time.'),
      q('How can crop and animal components support each other in a well-managed mixed farm?', ['Suitable crop residues can feed animals and composted manure can return nutrients to soil', 'Animals make crops independent of water', 'All animal waste should be spread fresh on food crops', 'Crops and animals never share resources'], 'Suitable residues may be used as feed, and properly composted manure can return nutrients to the soil.'),
      q('Which is a possible disadvantage that a farmer should manage in a mixed farm?', ['Competition for water, disease risks or overgrazing', 'Guaranteed elimination of all pests', 'No need for animal care', 'Unlimited land and labour'], 'Mixed farms need planning to manage shared resources, animal health and pressure on land.')
    ]
  }
];

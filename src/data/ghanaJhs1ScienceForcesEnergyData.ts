import type { ArcInfo, Mission, UnitInfo } from '../types';

export const GHANA_JHS1_SCIENCE_FORCES_ENERGY_UNIT: UnitInfo = {
  title: 'Forces and Energy',
  ch: 'JHS 1 · NaCCA Science · Strand 4',
  subject: 'ghjhs1science'
};

export const GHANA_JHS1_SCIENCE_FORCES_ENERGY_ARCS: ArcInfo[] = [
  { n: 1, unit: 0, subject: 'ghjhs1science', title: 'Energy', pages: 'NaCCA CCP · JHS 1 Science · B7.4.1' },
  { n: 2, unit: 0, subject: 'ghjhs1science', title: 'Electricity and Electronics', pages: 'NaCCA CCP · JHS 1 Science · B7.4.2' },
  { n: 3, unit: 0, subject: 'ghjhs1science', title: 'Conversion and Conservation of Energy', pages: 'NaCCA CCP · JHS 1 Science · B7.4.3' },
  { n: 4, unit: 0, subject: 'ghjhs1science', title: 'Force and Motion', pages: 'NaCCA CCP · JHS 1 Science · B7.4.4' },
  { n: 5, unit: 0, subject: 'ghjhs1science', title: 'Agricultural Tools', pages: 'NaCCA CCP · JHS 1 Science · B7.4.5' }
];

const q = (prompt: string, answers: string[], explanation: string) => ({ q: prompt, a: answers, why: explanation });
const lesson = (text: string) => ({ who: 's' as const, text });

export const GHANA_JHS1_SCIENCE_FORCES_ENERGY_MISSIONS: Mission[] = [
  {
    id: 'gh-jhs1-science-energy-forms', arc: 0, sec: 'Forces and Energy', pages: 'NaCCA CCP · JHS 1 Science · B7.4.1',
    hue: 42, horns: 2, eyes: 2, title: 'The Energy Form Explorer',
    topic: 'Identify potential, kinetic, heat, sound, solar, electrical, nuclear, chemical and light energy, and relate these forms to everyday examples.',
    demon: 'The Energy Mixer', tech: 'Energy Form · First Technique: Recognise the Many Forms',
    scenes: [
      lesson('<p>Energy is the ability to cause change or do work. We meet energy every day: sunlight warms the ground, food helps our bodies move, and electricity powers lights and devices. Energy can be described in different forms, and one situation may involve several forms at once.</p>'),
      lesson('<p><b>Kinetic energy</b> is the energy of movement. A rolling football and flowing water have kinetic energy. <b>Potential energy</b> is stored because of position or condition. Water held high behind a dam and a stretched elastic band can store potential energy.</p>'),
      lesson('<p>Other forms include heat (thermal), sound, light, electrical, chemical and nuclear energy. Food and fuel store chemical energy. The Sun provides light and heat. A ringing bell transfers energy as sound, while a battery stores chemical energy that can be used in an electrical circuit.</p>'),
      lesson('<p>Potential and kinetic energy are related. As a ball falls, some of its gravitational potential energy changes into kinetic energy. As it rises again, kinetic energy changes back into potential energy. In real situations, some energy is also transferred to the surroundings as heat and sound.</p>'),
      { who: 'd', vis: 'demon', text: 'I have labelled every moving object as chemical energy! Identify the forms and show how potential and kinetic energy are connected.' },
      { type: 'battle' }
    ],
    quiz: [
      q('What is kinetic energy?', ['Energy an object has because it is moving', 'Energy stored only in food', 'Energy that exists only in batteries', 'The absence of energy'], 'Kinetic energy is the energy of motion.'),
      q('Which example has gravitational potential energy?', ['Water stored high behind a dam', 'A ball rolling along the ground', 'A ringing bell', 'A lit torch bulb'], 'Water held at a height has stored energy because of its position.'),
      q('Which form of energy is stored in food?', ['Chemical energy', 'Sound energy', 'Light energy', 'Nuclear energy'], 'Food stores chemical energy that the body releases during processes such as respiration.'),
      q('Which forms are most directly produced by the Sun at Earth?', ['Light and heat energy', 'Sound and nuclear energy', 'Only electrical energy', 'Only kinetic energy'], 'Sunlight brings light and thermal energy to Earth.'),
      q('What happens to a falling ball’s gravitational potential energy as it speeds up?', ['Some changes into kinetic energy', 'It becomes matter', 'It disappears completely', 'It changes only into sound'], 'As the ball falls, gravitational potential energy is transferred mainly into kinetic energy.')
    ]
  },
  {
    id: 'gh-jhs1-science-electricity-generation', arc: 1, sec: 'Forces and Energy', pages: 'NaCCA CCP · JHS 1 Science · B7.4.2',
    hue: 202, horns: 2, eyes: 2, title: 'The Electricity Generation Guardian',
    topic: 'Describe common ways electricity is generated and compare their uses and possible environmental effects.',
    demon: 'The Power Outage Phantom', tech: 'Electric Form · First Technique: Trace the Power Source',
    scenes: [
      lesson('<p>Electricity is useful for lighting, communication, refrigeration, health services and industry. Electricity can be generated in different ways. In Ghana, the national electricity supply includes power from hydroelectric stations, thermal power plants and renewable sources such as solar energy.</p>'),
      lesson('<p>At a hydroelectric station, water stored at a height flows through pipes and turns turbines. The turbines drive generators that produce electricity. The water cycle replenishes rivers, but dams can change river habitats and affect communities and ecosystems.</p>'),
      lesson('<p>Thermal power stations burn fuels such as natural gas to heat water or drive engines connected to generators. Fuel-based generation can provide electricity when demand is high, but burning fuels releases gases and other pollutants. Solar panels convert light directly into electrical energy without burning fuel while generating electricity.</p>'),
      lesson('<p>Every generation method has benefits and limits. Consider reliability, cost, location, resource availability and environmental impact. Using electricity wisely also matters: switching off unused lights and choosing efficient appliances reduces demand and can lower the resources needed to generate power.</p>'),
      { who: 'd', vis: 'demon', text: 'I have mixed up dams, fuel stations and solar panels. Match each electricity source to how it generates power and consider its effects.' },
      { type: 'battle' }
    ],
    quiz: [
      q('What turns the generator in a hydroelectric power station?', ['A turbine driven by flowing water', 'A candle flame', 'A classroom fan by itself', 'A loudspeaker'], 'Water flowing through the station turns a turbine connected to a generator.'),
      q('How do solar panels generate electricity?', ['They convert sunlight directly into electrical energy', 'They burn coal inside each panel', 'They use sound waves from the Sun', 'They store river water'], 'Photovoltaic solar panels convert light energy into electrical energy.'),
      q('Which is a possible environmental effect of burning fuel to generate electricity?', ['Release of air pollutants and greenhouse gases', 'Creation of unlimited clean water', 'Removal of all noise', 'No environmental effect at all'], 'Fuel combustion can release pollutants and greenhouse gases.'),
      q('Which factor should communities consider when choosing an electricity source?', ['Reliability, cost and environmental effects', 'Only the colour of the equipment', 'Whether the station makes a loud sound', 'The number of buildings nearby only'], 'Energy choices involve practical, economic and environmental trade-offs.'),
      q('Which action helps reduce electricity demand?', ['Switching off lights when they are not needed', 'Leaving every appliance on all day', 'Opening a refrigerator door for a long time', 'Using damaged cables'], 'Avoiding unnecessary use reduces electricity demand and saves energy resources.')
    ]
  },
  {
    id: 'gh-jhs1-science-energy-conversion', arc: 2, sec: 'Forces and Energy', pages: 'NaCCA CCP · JHS 1 Science · B7.4.3',
    hue: 278, horns: 2, eyes: 2, title: 'The Energy Transformation Alchemist',
    topic: 'Explain energy conversion and conservation, trace transfers in everyday devices and describe ways to conserve energy for future use.',
    demon: 'The Vanishing Energy Wraith', tech: 'Energy Form · Second Technique: Transform Without Losing Track',
    scenes: [
      lesson('<p>Energy can be transferred from one object to another or changed from one form into another. In a torch, chemical energy stored in the battery is transferred electrically and becomes light and heat energy in the bulb or LED.</p>'),
      lesson('<p>In a simple electric fan, electrical energy is converted mainly into kinetic energy as the blades spin. Some energy is also transferred as sound and heat. In a charcoal stove, chemical energy in the fuel is changed into heat and light as the fuel burns.</p>'),
      lesson('<p>The principle of conservation of energy says that energy is not created or destroyed in a closed system. It is transferred or converted from one form to another. The total amount remains the same, even when some energy spreads into the surroundings and becomes less useful for the task.</p>'),
      lesson('<p>Energy conservation in everyday life means using energy carefully and avoiding waste. Turn off unused appliances, use efficient bulbs, maintain equipment and make sensible use of daylight. Energy storage, such as batteries and pumped water, can help make energy available when it is needed later.</p>'),
      { who: 'd', vis: 'demon', text: 'I claim energy disappears when a battery runs down! Trace the energy changes and explain why energy is conserved.' },
      { type: 'battle' }
    ],
    quiz: [
      q('What energy change happens in a torch?', ['Chemical energy to electrical transfer, then light and heat', 'Sound energy to nuclear energy', 'Light energy to food directly', 'Kinetic energy to water'], 'The battery’s chemical energy is transferred electrically and produces light and heat.'),
      q('What is the main useful energy output of an electric fan?', ['Kinetic energy of moving blades and air', 'Nuclear energy', 'Chemical energy in food', 'Gravitational energy in the ceiling'], 'The motor converts electrical energy into the movement of the fan blades and air.'),
      q('What does the conservation of energy principle state?', ['Energy is not created or destroyed; it is transferred or converted', 'Energy can appear from nothing', 'Energy is always used up and destroyed', 'Only heat energy exists'], 'The total energy of a closed system remains constant as energy is transferred or converted.'),
      q('Why can a device become warm while operating?', ['Some energy is transferred to the surroundings as heat', 'Energy has been destroyed', 'The device has created extra matter', 'Electricity has stopped existing'], 'Some energy transfers to the surroundings as thermal energy, often through friction or resistance.'),
      q('Which action is an example of conserving energy?', ['Using an efficient bulb and switching it off when not needed', 'Leaving a television on in an empty room', 'Keeping a refrigerator door open', 'Running a generator with no useful load'], 'Efficient use and avoiding unnecessary operation reduce wasted energy.')
    ]
  },
  {
    id: 'gh-jhs1-science-force-motion', arc: 3, sec: 'Forces and Energy', pages: 'NaCCA CCP · JHS 1 Science · B7.4.4',
    hue: 18, horns: 2, eyes: 2, title: 'The Force and Motion Pathfinder',
    topic: 'Describe forces as pushes or pulls, identify balanced and unbalanced forces, and explain how forces affect motion and simple machines.',
    demon: 'The Motion Distorter', tech: 'Force Form · First Technique: Push, Pull and Predict',
    scenes: [
      lesson('<p>A force is a push or a pull. Forces can start or stop movement, change an object’s speed or direction, or change its shape. Kicking a football, pulling a bucket from a well and squeezing a sponge are examples of forces in action.</p>'),
      lesson('<p>Forces have size and direction. If forces acting on an object are balanced, the object’s motion does not change: it may remain at rest or continue moving at a steady speed in a straight line. If forces are unbalanced, the object accelerates, slows down or changes direction.</p>'),
      lesson('<p>Friction is a force that opposes movement between surfaces in contact. It can help us walk without slipping, but it can also slow moving parts and produce heat. Gravity pulls objects towards Earth, while air resistance acts against movement through air.</p>'),
      lesson('<p>Simple machines help people do tasks more easily by changing the size or direction of a force. A lever turns around a pivot called a fulcrum. A wheelbarrow is a second-class lever; a seesaw is a first-class lever. Safe use means checking equipment and keeping hands clear of moving parts.</p>'),
      { who: 'd', vis: 'demon', text: 'I say a stationary object has no forces acting on it. Show how balanced forces work and predict what an unbalanced force will do.' },
      { type: 'battle' }
    ],
    quiz: [
      q('What is a force?', ['A push or a pull', 'A type of food', 'A form of light only', 'A measure of temperature'], 'A force is a push or pull that can affect an object’s motion or shape.'),
      q('What happens when forces on an object are balanced?', ['There is no change in its motion', 'It must move faster', 'It must change direction', 'It must disappear'], 'Balanced forces produce no change in motion; the object may be at rest or move at constant velocity.'),
      q('Which force opposes movement between surfaces touching each other?', ['Friction', 'Light', 'Sound', 'Magnetism in every case'], 'Friction acts between surfaces in contact and opposes their relative motion.'),
      q('What is the pivot point of a lever called?', ['Fulcrum', 'Battery', 'Turbine', 'Circuit'], 'A lever turns around a pivot known as the fulcrum.'),
      q('Which everyday object is a second-class lever?', ['Wheelbarrow', 'Seesaw', 'Tweezers', 'A flat sheet of paper'], 'In a wheelbarrow, the load lies between the wheel (fulcrum) and the effort at the handles.')
    ]
  },
  {
    id: 'gh-jhs1-science-agricultural-tools', arc: 4, sec: 'Forces and Energy', pages: 'NaCCA CCP · JHS 1 Science · B7.4.5',
    hue: 92, horns: 2, eyes: 2, title: 'The Farm Tool Engineer',
    topic: 'Identify common agricultural tools, explain how simple machines help farmers and select tools for safe, effective farm tasks.',
    demon: 'The Tool Trouble Titan', tech: 'Farm Form · Second Technique: Work Smarter and Safely',
    scenes: [
      lesson('<p>Agricultural tools help farmers prepare land, plant seeds, weed, water, harvest and process crops. Examples include hoes, cutlasses, rakes, watering cans, wheelbarrows and simple planters. Choosing the right tool can save time and reduce unnecessary effort.</p>'),
      lesson('<p>Many tools use the principles of simple machines. A hoe has a wedge-like blade that helps cut and loosen soil. A wheelbarrow uses a wheel and axle and works as a lever to move loads. A pulley can help lift a load, while a watering can uses gravity to pour water through its spout.</p>'),
      lesson('<p>Tools should match the task and the user. A farmer may use a hoe to loosen soil, a cutlass to clear vegetation, a rake to gather plant material and a wheelbarrow to carry harvested produce. Keeping tools sharp where appropriate, clean and in good condition makes them safer and more effective.</p>'),
      lesson('<p>Safe tool use protects people and crops. Carry sharp tools with the blade pointed down and away from others, wear suitable footwear and gloves, keep a safe distance from other workers, and store tools securely after use. Never leave sharp tools hidden in grass or on a pathway.</p>'),
      { who: 'd', vis: 'demon', text: 'I have sent the farmer to harvest with a watering can! Match tools to tasks and explain how simple machines make farm work easier.' },
      { type: 'battle' }
    ],
    quiz: [
      q('Which tool is commonly used to loosen soil and remove weeds?', ['Hoe', 'Thermometer', 'Loudspeaker', 'Compass'], 'A hoe is used for tasks such as loosening soil and weeding.'),
      q('Which simple-machine system helps a wheelbarrow move a load?', ['Wheel and axle with a lever arrangement', 'Only a light bulb', 'A battery and wire', 'A thermometer and scale'], 'A wheelbarrow combines a wheel and axle with a second-class lever arrangement.'),
      q('Which tool is most suitable for gathering loose leaves and plant material?', ['Rake', 'Cutlass', 'Watering can', 'Spade used as a measuring ruler'], 'A rake gathers loose leaves and plant material into piles.'),
      q('Why should sharp tools be carried with care and stored securely?', ['To prevent injuries to people', 'To make them heavier', 'To stop crops receiving sunlight', 'To make the tools rust faster'], 'Safe carrying and storage reduce the risk of cuts and other accidents.'),
      q('What should a farmer consider when selecting an agricultural tool?', ['The task, safety and condition of the tool', 'Only the tool’s colour', 'Whether the tool is the most expensive', 'Whether the tool can be left in a pathway'], 'A suitable tool matches the task and can be used safely in good condition.')
    ]
  }
];

import type { ArcInfo, Mission, UnitInfo } from '../types';

export const GHANA_JHS3_SCIENCE_FORCES_ENERGY_UNIT: UnitInfo = {
  title: 'Forces and Energy',
  ch: 'JHS 3 · NaCCA Science · Strand 4',
  subject: 'ghjhs3science'
};

export const GHANA_JHS3_SCIENCE_FORCES_ENERGY_ARCS: ArcInfo[] = [
  { n: 1, unit: 0, subject: 'ghjhs3science', title: 'Energy, Light and Conservation', pages: 'NaCCA CCP · JHS 3 Science · B9.4.1' },
  { n: 2, unit: 0, subject: 'ghjhs3science', title: 'Electricity and Electronic Components', pages: 'NaCCA CCP · JHS 3 Science · B9.4.2' },
  { n: 3, unit: 0, subject: 'ghjhs3science', title: 'Energy Conversion and Conservation', pages: 'NaCCA CCP · JHS 3 Science · B9.4.3' },
  { n: 4, unit: 0, subject: 'ghjhs3science', title: 'Pressure, Forces and Motion', pages: 'NaCCA CCP · JHS 3 Science · B9.4.4' },
  { n: 5, unit: 0, subject: 'ghjhs3science', title: 'Designing Agricultural Tools', pages: 'NaCCA CCP · JHS 3 Science · B9.4.5' }
];

const q = (prompt: string, answers: string[], explanation: string) => ({ q: prompt, a: answers, why: explanation });
const lesson = (text: string) => ({ who: 's' as const, text });

export const GHANA_JHS3_SCIENCE_FORCES_ENERGY_MISSIONS: Mission[] = [
  {
    id: 'gh-jhs3-science-energy-light', arc: 0, sec: 'Forces and Energy', pages: 'NaCCA CCP · JHS 3 Science · B9.4.1.1.1–B9.4.1.3.1',
    hue: 48, horns: 2, eyes: 2, title: 'The Energy Conservation Guardian',
    topic: 'Explain ways to conserve energy, calculate electrical energy use, understand image formation and shadows, and describe refraction.',
    demon: 'The Energy Waster', tech: 'Energy Form · First Technique: Save and Transform',
    scenes: [
      lesson('<p><b>Energy</b> is the ability to cause change or do work. It appears in forms such as electrical, chemical, light, sound, thermal and kinetic energy. Energy can be transferred or changed from one form to another. It is not created from nothing or destroyed; the total amount is conserved in a closed system.</p>'),
      lesson('<p>We conserve energy by reducing waste: switch off lights and appliances when they are not needed, use efficient lamps and appliances, avoid leaving devices on standby, and iron clothes in batches. These actions can reduce electricity bills and the demand placed on power stations and the environment.</p>'),
      lesson('<p>Electrical power is the rate of transferring electrical energy. For a simple circuit, <b>P = IV</b>, where power P is in watts, current I in amperes and voltage V in volts. Electrical energy in kilowatt-hours is <b>energy (kWh) = power (kW) × time (hours)</b>. A 1 kW appliance used for 3 hours consumes 3 kWh.</p>'),
      lesson('<p>Light travels in straight lines through a uniform transparent medium. An opaque object blocks light and forms a shadow: the dark central region is the <b>umbra</b>; a partly shaded region is the <b>penumbra</b>. A pinhole camera forms an inverted image because light travels in straight lines. When light passes between materials such as air and water, its speed changes and its direction may bend; this is <b>refraction</b>. Refraction helps explain why a straw looks bent in water and how lenses form images.</p>'),
      { who: 'd', vis: 'demon', text: 'I have left appliances running and scrambled the light rays. Calculate the energy used, then trace the rays to explain the shadow and the bent straw!' },
      { type: 'battle' }
    ],
    quiz: [
      q('Which action is a practical way to conserve electrical energy?', ['Switch off appliances when not in use', 'Leave lights on in empty rooms', 'Keep every charger plugged in all day', 'Open the refrigerator door for longer'], 'Switching off unused appliances avoids unnecessary energy consumption.'),
      q('A 2 kW heater runs for 3 hours. How much electrical energy does it use?', ['6 kWh', '5 kWh', '1.5 kWh', '6 watts'], 'Energy in kWh = power in kW × time in hours = 2 × 3 = 6 kWh.'),
      q('What is the umbra of a shadow?', ['The darkest central region where direct light is blocked', 'The bright region around a lamp', 'A reflected image in a mirror', 'The bending of a light ray'], 'The umbra is the fully shaded central part of a shadow.'),
      q('Why does a pinhole camera form an inverted image?', ['Light travels in straight lines and rays cross at the tiny hole', 'Light always curves upwards', 'The screen turns the image upside down', 'The hole reflects every ray twice'], 'Rays from the top and bottom of an object cross at the pinhole, producing an inverted image.'),
      q('What is refraction?', ['A change in direction of light as it enters a different medium because its speed changes', 'The blocking of all light by an opaque object', 'The production of sound by a lens', 'The splitting of an atom'], 'Refraction occurs when light changes speed as it passes between media and its direction changes.')
    ]
  },
  {
    id: 'gh-jhs3-science-electricity-electronics', arc: 1, sec: 'Forces and Energy', pages: 'NaCCA CCP · JHS 3 Science · B9.4.2.1.1–B9.4.2.2.1',
    hue: 190, horns: 2, eyes: 2, title: 'The Circuit Systems Engineer',
    topic: 'Build and compare series and parallel circuits, relate voltage, current and resistance, and explain the roles of diodes, LEDs, resistors and capacitors.',
    demon: 'The Circuit Saboteur', tech: 'Circuit Form · Second Technique: Complete the Path',
    scenes: [
      lesson('<p>An electric circuit is a complete path through which electric current can flow. A simple circuit may contain a cell, connecting wires, a switch and a lamp. A switch opens or closes the path. A circuit must be designed for the correct voltage and current; never experiment with mains electricity.</p>'),
      lesson('<p>In a <b>series circuit</b>, components share one path. The same current passes through each component, and the supply voltage is shared. If one lamp is removed or fails, the path is broken and all lamps go out. In a <b>parallel circuit</b>, components are on separate branches; each branch has the same voltage as the supply, and other branches can continue working if one branch opens.</p>'),
      lesson('<p>Ohm’s law for an ohmic conductor at constant temperature is <b>V = IR</b>: voltage V in volts equals current I in amperes multiplied by resistance R in ohms. A resistor limits current. A <b>diode</b> allows current mainly in one direction; a light-emitting diode (LED) produces light when correctly forward-biased. A capacitor stores separated electric charge and can charge and discharge in a circuit.</p>'),
      lesson('<p>Electrical energy changes into other forms: a lamp transfers energy to light and heat, a motor to movement and heat, and a buzzer to sound. In practical circuit investigations, use low-voltage cells, check component ratings, connect meters correctly, and ask a teacher to check the circuit before switching it on.</p>'),
      { who: 'd', vis: 'demon', text: 'I have broken the circuit and reversed the components. Choose series or parallel paths, calculate the current, and place the diode and LED in the correct direction!' },
      { type: 'battle' }
    ],
    quiz: [
      q('What happens to the other lamps in a simple series circuit if one lamp is removed?', ['The circuit opens and all lamps go out', 'The other lamps become brighter', 'The current increases without limit', 'Nothing changes'], 'A series circuit has one path, so removing one component breaks the complete path.'),
      q('What is a key feature of a parallel circuit?', ['Each branch has the supply voltage across it', 'All components share one path only', 'Removing one branch always stops every other branch', 'Current cannot flow in branches'], 'Parallel branches are connected across the same supply, so each branch has the supply voltage.'),
      q('A 12 V supply is connected across a 4 Ω resistor. What current flows?', ['3 A', '48 A', '8 A', '0.33 A'], 'Using V = IR, I = V ÷ R = 12 ÷ 4 = 3 A.'),
      q('What is the main role of a diode?', ['Allow current mainly in one direction', 'Store fuel for a motor', 'Increase the mass of a circuit', 'Convert sound into water'], 'A diode conducts readily in its forward direction and resists current in reverse bias.'),
      q('What does a capacitor do?', ['Stores electric charge and can release it', 'Always produces energy from nothing', 'Measures the length of a wire', 'Stops all current permanently'], 'A capacitor stores separated charge and can discharge through a circuit.')
    ]
  },
  {
    id: 'gh-jhs3-science-energy-conversion', arc: 2, sec: 'Forces and Energy', pages: 'NaCCA CCP · JHS 3 Science · B9.4.3.1.1–B9.4.3.1.2',
    hue: 32, horns: 2, eyes: 2, title: 'The Energy Transformation Alchemist',
    topic: 'Distinguish energy conversion from conservation and trace useful and wasted energy in everyday devices and systems.',
    demon: 'The Energy Thief', tech: 'Transformation Form · Third Technique: Trace Every Joule',
    scenes: [
      lesson('<p><b>Energy conversion</b> means changing energy from one form to another. A battery transfers chemical energy into electrical energy; a lamp transfers electrical energy into light and thermal energy; a moving bicycle has kinetic energy.</p>'),
      lesson('<p><b>Conservation of energy</b> means the total energy in a closed system remains constant. Energy may spread into the surroundings, often as thermal energy or sound, making it less useful for the task. Energy is not lost from the universe, even when it becomes difficult to use.</p>'),
      lesson('<p>Trace energy through devices. In an electric fan, electrical energy becomes kinetic energy of the moving blades, with some energy transferred as sound and heat. In a solar panel, light energy becomes electrical energy. In a hydroelectric station, gravitational potential energy of stored water becomes kinetic energy, then mechanical and electrical energy.</p>'),
      lesson('<p>To evaluate a device, identify the intended useful output and the other transfers. Efficiency compares useful energy output with total energy input: <b>efficiency = (useful output ÷ total input) × 100%</b>. For example, if 80 J of useful energy comes from 100 J input, efficiency is 80%. Reducing unwanted transfers can improve efficiency and save resources.</p>'),
      { who: 'd', vis: 'demon', text: 'I claim energy disappears whenever a machine gets hot. Trace the transfers and show where the energy goes!' },
      { type: 'battle' }
    ],
    quiz: [
      q('What is energy conversion?', ['Changing energy from one form to another', 'Destroying energy completely', 'Creating energy from nothing', 'Measuring only an object’s weight'], 'Energy conversion is a transfer from one form to another.'),
      q('What happens to the total energy in a closed system?', ['It remains constant', 'It always doubles', 'It disappears as heat', 'It becomes massless'], 'The law of conservation of energy states that total energy remains constant in a closed system.'),
      q('Which energy change occurs in a solar panel?', ['Light energy to electrical energy', 'Sound energy to chemical energy', 'Thermal energy to gravitational energy only', 'Electrical energy to food'], 'Photovoltaic cells convert light into electrical energy.'),
      q('A device receives 100 J and gives 80 J of useful output. What is its efficiency?', ['80%', '20%', '100%', '125%'], 'Efficiency = (80 ÷ 100) × 100% = 80%.'),
      q('Why can a machine become warm while operating?', ['Some energy is transferred to the surroundings as thermal energy', 'Energy is destroyed', 'The machine creates extra matter', 'Heat has no connection to energy'], 'Friction and electrical resistance can transfer energy to the surroundings as thermal energy.')
    ]
  },
  {
    id: 'gh-jhs3-science-force-motion-pressure', arc: 3, sec: 'Forces and Energy', pages: 'NaCCA CCP · JHS 3 Science · B9.4.4.1.1–B9.4.4.2.1',
    hue: 260, horns: 2, eyes: 2, title: 'The Force and Motion Strategist',
    topic: 'Explain pressure, relate force to area, apply Newton’s laws and calculate force using F = ma in everyday situations.',
    demon: 'The Motion Distorter', tech: 'Motion Form · Fourth Technique: Balance the Forces',
    scenes: [
      lesson('<p>A <b>force</b> is a push or pull. Forces can change an object’s speed, direction or shape. If the forces on an object are balanced, its motion does not change; if they are unbalanced, the object accelerates. Friction and air resistance oppose motion in many everyday situations.</p>'),
      lesson('<p><b>Pressure</b> is force acting per unit area: <b>pressure = force ÷ area</b>. For the same force, a smaller contact area creates greater pressure. This explains why a sharp blade cuts more easily than a blunt one and why wide tyres can reduce pressure on soft ground. Pressure in a fluid acts in all directions.</p>'),
      lesson('<p>Newton’s First Law describes inertia: an object remains at rest or moves at constant velocity in a straight line unless acted on by a resultant external force. Newton’s Second Law links resultant force, mass and acceleration: <b>F = ma</b>, with force in newtons, mass in kilograms and acceleration in metres per second squared.</p>'),
      lesson('<p>Newton’s Third Law says that when one object exerts a force on another, the second exerts an equal-sized force in the opposite direction on the first. These action–reaction forces act on different objects. A person pushes the ground backwards while walking; the ground pushes the person forwards. A rocket pushes gas backwards and the gas pushes the rocket forwards.</p>'),
      { who: 'd', vis: 'demon', text: 'I have mixed up action and reaction and hidden the resultant force. Work out the pressure and acceleration, then identify the force pairs!' },
      { type: 'battle' }
    ],
    quiz: [
      q('A force of 100 N acts over an area of 2 m². What pressure is produced?', ['50 Pa', '200 Pa', '102 Pa', '0.02 Pa'], 'Pressure = force ÷ area = 100 ÷ 2 = 50 pascals.'),
      q('Why does a sharp knife cut more easily than a blunt one?', ['The smaller edge area produces greater pressure for the same force', 'It has no friction', 'It removes the force from the hand', 'It increases the mass of the food'], 'For the same force, reducing the contact area increases pressure.'),
      q('A 5 kg trolley accelerates at 2 m/s². What resultant force acts on it?', ['10 N', '2.5 N', '7 N', '25 N'], 'Using F = ma, force = 5 × 2 = 10 N.'),
      q('What does Newton’s First Law describe?', ['Inertia and the effect of a resultant external force', 'The relationship between voltage and current', 'The bending of light', 'The storage of electric charge'], 'The First Law describes how motion remains unchanged unless a resultant external force acts.'),
      q('When a swimmer pushes water backwards, what happens?', ['The water pushes the swimmer forwards', 'The water exerts no force', 'The swimmer moves only because of gravity', 'The action and reaction act on the same object'], 'The water exerts an equal and opposite force on the swimmer; the forces act on different objects.')
    ]
  },
  {
    id: 'gh-jhs3-science-agricultural-tools', arc: 4, sec: 'Forces and Energy', pages: 'NaCCA CCP · JHS 3 Science · B9.4.5.1.1–B9.4.5.1.2',
    hue: 112, horns: 2, eyes: 2, title: 'The Agricultural Tool Designer',
    topic: 'Identify materials, components, processes and safety precautions involved in designing and making simple agricultural tools.',
    demon: 'The Tool Tangle', tech: 'Maker Form · Fifth Technique: Build for the Field',
    scenes: [
      lesson('<p>Agricultural tools help farmers prepare soil, plant seeds, remove weeds, water crops and harvest produce. Examples include hoes, rakes, watering cans, hand trowels and simple seed planters. A good tool should be fit for its task, strong enough, comfortable to hold, repairable and affordable.</p>'),
      lesson('<p>Tools can be assembled from suitable materials. Handles may use well-finished wood or durable recycled material; working parts may use suitable metal; joints may use bolts, rivets, screws or strong bindings. Select materials for strength, durability, availability, cost and safe handling. Avoid sharp, rusty or contaminated scrap.</p>'),
      lesson('<p>A design process begins by identifying the farm task and the user’s needs. Sketch the tool, label its parts, choose materials, measure and mark, cut and shape safely, join the parts, then test and improve the design. A hoe, for example, needs a secure connection between its blade and handle so the blade cannot detach during use.</p>'),
      lesson('<p>Workshop safety matters: work under adult or teacher supervision, wear suitable eye and hand protection, clamp materials before cutting, use tools correctly, keep the work area clear and store sharp tools safely. Inspect finished tools for loose joints, sharp burrs and splinters. Never use damaged tools in the field.</p>'),
      { who: 'd', vis: 'demon', text: 'I have swapped the handles and blades and loosened the joints. Choose suitable materials, plan the assembly and make the tool safe for farm work!' },
      { type: 'battle' }
    ],
    quiz: [
      q('Which tool is commonly used to loosen soil and remove weeds?', ['Hoe', 'Thermometer', 'Compass', 'Voltmeter'], 'A hoe is a common hand tool for loosening soil and controlling weeds.'),
      q('Which factor should guide the choice of material for a tool handle?', ['Strength, durability, comfort and safe handling', 'Colour alone', 'Whether it is the heaviest material available', 'Whether it is easy to splinter'], 'A handle should be strong, durable, comfortable and safe to hold.'),
      q('Why should a tool be tested after assembly?', ['To check that it works safely and its joints are secure', 'To make it look older', 'To remove the need for maintenance', 'To prove that all materials are identical'], 'Testing identifies weak joints, unsafe edges and design problems before use.'),
      q('Which is a safe practice when cutting material?', ['Clamp the work securely and use the correct tool with supervision', 'Hold the material in the air while cutting', 'Leave blades uncovered on the floor', 'Cut towards your hand'], 'Securing the work and using the correct tool under supervision reduces injury risk.'),
      q('What should be done if a tool handle is loose or cracked?', ['Stop using it and repair or replace it before use', 'Continue using it carefully at full speed', 'Hide the damage with paint', 'Give it to another worker'], 'A damaged tool can fail during use and cause injury, so it must be taken out of service.')
    ]
  }
];

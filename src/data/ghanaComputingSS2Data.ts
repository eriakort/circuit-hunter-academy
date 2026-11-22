import type { ArcInfo, Mission, SubjectInfo, UnitInfo } from '../types';

/**
 * Ghana NaCCA SHS 2 Computing (Computing Curriculum for Secondary Education, SHS 1–3, September 2023).
 * Same two strands and six sub-strands as SHS 1. Indicator codes (2.1.1 to 2.2.3) and printed pages
 * were read from the curriculum PDF; the mapping is in ghanaComputingSS2Alignment.ts, which also
 * marks teaching content that goes beyond the indicator wording. English only.
 */
export const GHANA_COMPUTING_SS2_SUBJECT: SubjectInfo = {
  id: 'ghcomputing2',
  name: 'Computing · SHS 2',
  blurb: 'Ghana NaCCA SHS 2 Computing: logic and binary arithmetic, barcodes and software, topologies and the Internet, memory, programming, machine learning, web pages and databases.',
  meta: 'Ghana NaCCA · SHS 2 · fifteen learning missions',
  art: '<svg viewBox="0 0 120 120" width="100%" aria-hidden="true"><path d="M24 70 H44 V46 H68 V70 H96" fill="none" stroke="#7bdff2" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="24" cy="70" r="7" fill="#ffd166"/><circle cx="96" cy="70" r="7" fill="#38ef7d"/><rect x="38" y="82" width="44" height="18" rx="5" fill="none" stroke="#ff8a5c" stroke-width="4"/></svg>'
};

export const GHANA_COMPUTING_SS2_UNITS: UnitInfo[] = [
  { title: 'Computer Architecture and Organisation', ch: 'SHS 2 · NaCCA pp. 48–60', subject: 'ghcomputing2' },
  { title: 'Computational Thinking (Programming Logic)', ch: 'SHS 2 · NaCCA pp. 61–73', subject: 'ghcomputing2' }
];

export const GHANA_COMPUTING_SS2_ARCS: ArcInfo[] = [
  { n: 1, unit: 0, subject: 'ghcomputing2', title: 'Data Storage and Manipulation', pages: 'NaCCA SHS 2 · pp. 48–52' },
  { n: 2, unit: 0, subject: 'ghcomputing2', title: 'Computer Hardware and Software', pages: 'NaCCA SHS 2 · pp. 53–56' },
  { n: 3, unit: 0, subject: 'ghcomputing2', title: 'Data Communication and Network Systems', pages: 'NaCCA SHS 2 · pp. 57–60' },
  { n: 4, unit: 1, subject: 'ghcomputing2', title: 'Algorithm and Data Structure', pages: 'NaCCA SHS 2 · pp. 61–64' },
  { n: 5, unit: 1, subject: 'ghcomputing2', title: 'App Development', pages: 'NaCCA SHS 2 · pp. 65–68' },
  { n: 6, unit: 1, subject: 'ghcomputing2', title: 'Web Technologies and Databases', pages: 'NaCCA SHS 2 · pp. 69–73' }
];

const question = (q: string, a: string[], why: string) => ({ q, a, why });
const lesson = (vis: string, text: string) => ({ who: 's' as const, vis, text });
const both = (s: string): [string, string] => [s, s];
const item = (n: string, c: number, i: string, why: string) => ({ n: both(n), c, i, why: both(why) });
const demon = (text: string) => ({ who: 'd' as const, vis: 'demon', text });
const battle = { type: 'battle' };
const round = (code: string, out: string, why: string) => ({ code: both(code), out: both(out), why: both(why) });

export const GHANA_COMPUTING_SS2_MISSIONS: Mission[] = [
  /* ------------------------------------------------------------------ 2.1.1 Data Storage and Manipulation */
  {
    id: 'gh-comp-ss2-logic-gates',
    arc: 0,
    sec: '2.1.1',
    pages: 'NaCCA SHS 2 · pp. 48–52',
    hue: 190,
    horns: 2,
    eyes: 2,
    title: 'The Logic Gatekeeper',
    topic: 'Determine the critical points of logic operations (AND, OR, NOT) and use them to solve problems.',
    demon: 'The Stuck Switch',
    tech: 'Logic Form · First Technique: Truth Tables',
    scenes: [
      lesson('ghc-gates', '<p>Computers make decisions with <b>logic operations</b>. Each input is either <b>true (1)</b> or <b>false (0)</b>. A <b>logic gate</b> is a circuit that takes one or more inputs and gives one output. The three basic gates are <b>AND</b>, <b>OR</b> and <b>NOT</b>.</p>'),
      lesson('ghc-gates', '<p>A <b>truth table</b> lists every possible input and the output. <b>AND</b> gives 1 only when <b>both</b> inputs are 1. <b>OR</b> gives 1 when <b>at least one</b> input is 1, so it gives 0 only when both are 0. <b>NOT</b> has one input and flips it: 0 becomes 1 and 1 becomes 0.</p>'),
      lesson('ghc-gates', '<p>The <b>critical point</b> of a gate is the input combination where its output changes. For AND, the output becomes 1 only at the single combination 1, 1. For OR, the output becomes 0 only at 0, 0. Knowing these points lets you solve problems fast. A security light that must come on only when it is dark <b>and</b> movement is detected needs an AND gate. An alarm that must sound if the door <b>or</b> the window opens needs an OR gate.</p>'),
      { type: 'gates' },
      { type: 'sort', title: 'Which gate solves the problem?', cats: [both('AND'), both('OR'), both('NOT')], items: [
        item('The light comes on only if it is dark and someone moves', 0, 'gear', 'Both conditions must be true, so use AND.'),
        item('The alarm sounds if the door or the window opens', 1, 'warn', 'Either condition is enough, so use OR.'),
        item('Show "door open" when the door sensor reads "closed" = 0', 2, 'update', 'The signal must be flipped, so use NOT.'),
        item('A form can be submitted only when the name and the age are filled in', 0, 'file', 'Both fields are needed, so use AND.'),
        item('A student passes if the class mark or the exam mark is 50 or more', 1, 'chart', 'Either mark is enough, so use OR.'),
        item('Turn a "yes" signal into a "no" signal', 2, 'loop', 'Reversing a signal is the job of NOT.')
      ] },
      demon('My stuck switch decides everything! Can you work out my truth table?'),
      battle
    ],
    quiz: [
      question('For which inputs does an AND gate give 1?', ['Only when both inputs are 1', 'When at least one input is 1', 'Only when both inputs are 0', 'It always gives 1'], 'AND gives 1 at the single combination 1, 1.'),
      question('For which inputs does an OR gate give 0?', ['Only when both inputs are 0', 'When one input is 1', 'When both inputs are 1', 'Never'], 'OR gives 0 only at 0, 0; any 1 makes the output 1.'),
      question('What does a NOT gate do to its input?', ['It flips it: 0 becomes 1 and 1 becomes 0', 'It always gives 0', 'It adds two inputs', 'It stores the input'], 'NOT reverses the input.'),
      question('A light must be on only when it is dark AND there is movement. Dark = 1, movement = 0. What is the output?', ['0 (off)', '1 (on)', '2', 'It cannot be known'], 'AND needs both inputs to be 1, and movement is 0, so the output is 0.'),
      question('How many rows does the truth table of a gate with two inputs have?', ['4', '2', '3', '8'], 'Two inputs have 2 × 2 = 4 combinations.')
    ]
  },
  {
    id: 'gh-comp-ss2-boolean-simplify',
    arc: 0,
    sec: '2.1.1',
    pages: 'NaCCA SHS 2 · pp. 48–52',
    hue: 48,
    horns: 2,
    eyes: 3,
    title: 'The Circuit Simplifier',
    topic: 'Apply the concepts of Boolean expressions to simplify complex circuits.',
    demon: 'The Tangled Circuit',
    tech: 'Logic Form · Technique: Fewer Gates, Same Answer',
    scenes: [
      lesson('ghc-gates', '<p>A <b>Boolean expression</b> describes a circuit using AND, OR and NOT. For example, <b>(A AND B) OR (A AND NOT B)</b> describes a circuit with three gates joined together. A complex circuit costs more, uses more power and is harder to build. If we can write an expression with fewer gates that always gives the same output, the circuit is <b>simplified</b>.</p>'),
      lesson('ghc-gates', '<p>Simplifying uses laws that are always true. A AND 1 = A. A AND 0 = 0. A OR 0 = A. A OR 1 = 1. A AND A = A. A OR A = A. A AND NOT A = 0. A OR NOT A = 1. Another useful law is A OR (A AND B) = A.</p>'),
      lesson('ghc-gates', '<p>Worked example: simplify (A AND B) OR (A AND NOT B). Take A out as a common factor: A AND (B OR NOT B). Because B OR NOT B = 1, this becomes A AND 1, which is just <b>A</b>. Three gates have become a plain wire: the output is simply the value of A. You can check by drawing the truth tables of both expressions and seeing that they match in every row.</p>'),
      { type: 'sort', title: 'What does the law simplify to?', cats: [both('A'), both('0'), both('1')], items: [
        item('A AND 1', 0, 'code', 'Anything AND 1 stays the same, so the result is A.'),
        item('A OR 1', 2, 'code', 'Anything OR 1 is 1.'),
        item('A AND 0', 1, 'code', 'Anything AND 0 is 0.'),
        item('A OR 0', 0, 'code', 'Anything OR 0 stays the same, so the result is A.'),
        item('A OR NOT A', 2, 'code', 'One of A and NOT A is always 1, so the OR is 1.'),
        item('A AND NOT A', 1, 'code', 'A and NOT A are never both 1, so the AND is 0.'),
        item('A AND A', 0, 'code', 'Repeating A does not change it.')
      ] },
      { type: 'order', title: 'Simplify (A AND B) OR (A AND NOT B)', steps: [
        both('Write the expression: (A AND B) OR (A AND NOT B)'),
        both('Take out A as the common factor: A AND (B OR NOT B)'),
        both('Use the law B OR NOT B = 1: A AND 1'),
        both('Use the law A AND 1 = A: the answer is A')
      ], hint: both('Factor first, then use the laws one at a time.') },
      { type: 'predict', rounds: [
        round('a = True\nb = False\nprint(a and b)', 'False', 'AND needs both to be True, and b is False.'),
        round('a = True\nb = False\nprint(a or b)', 'True', 'OR needs only one True, and a is True.'),
        round('a = True\nprint(not a)', 'False', 'not flips True into False.'),
        round('a = True\nb = False\nprint(a and not b)', 'True', 'not b is True, and a is True, so the AND is True.')
      ] },
      demon('My circuit has a hundred gates! Can you shrink it?'),
      battle
    ],
    quiz: [
      question('What is the purpose of simplifying a Boolean expression?', ['To get the same output with fewer gates', 'To change the output', 'To add more inputs', 'To make the circuit larger'], 'A simpler circuit gives the same answer for less cost.'),
      question('What does A OR NOT A simplify to?', ['1', '0', 'A', 'NOT A'], 'One of A and NOT A is always true, so the result is 1.'),
      question('What does A AND 0 simplify to?', ['0', '1', 'A', 'NOT A'], 'Anything AND 0 is 0.'),
      question('Simplify (A AND B) OR (A AND NOT B).', ['A', 'B', '1', '0'], 'Factor out A to get A AND (B OR NOT B) = A AND 1 = A.'),
      question('In Python, what does print(True and False) show?', ['False', 'True', '0', 'Error'], 'and gives True only when both sides are True.')
    ]
  },
  {
    id: 'gh-comp-ss2-arithmetic-ops',
    arc: 0,
    sec: '2.1.1',
    pages: 'NaCCA SHS 2 · pp. 48–52',
    hue: 12,
    horns: 3,
    eyes: 2,
    title: 'The Binary Calculator',
    topic: 'Discuss three major arithmetic operations in the computer (addition, subtraction and shifting) and apply them.',
    demon: 'The Overflow Beast',
    tech: 'Arithmetic Form · Technique: Carry and Shift',
    scenes: [
      lesson('ghc-binadd', '<p>The <b>ALU</b> does arithmetic using binary numbers. <b>Addition</b> follows four rules: 0 + 0 = 0, 0 + 1 = 1, 1 + 0 = 1 and 1 + 1 = 10 (write 0 and carry 1). Work from the right, like adding in decimal, and add any carry into the next column. For example 0101 + 0011: the sum is 1000, which is 5 + 3 = 8.</p>'),
      lesson('ghc-binadd', '<p><b>Subtraction</b> works column by column, borrowing from the left when you need to. For example 1000 − 0011 = 0101, which is 8 − 3 = 5. Computers usually subtract by adding a negative number, but the result is the same.</p>'),
      lesson('ghc-binadd', '<p><b>Shifting</b> moves every bit one place. A <b>left shift</b> by one place doubles the number: 0011 (3) becomes 0110 (6). A <b>right shift</b> by one place halves it and drops any remainder: 0110 (6) becomes 0011 (3), and 0111 (7) also becomes 0011 (3). Shifts are very fast, so programs use them for multiplying and dividing by 2.</p>'),
      { type: 'bits' },
      { type: 'predict', rounds: [
        round('print(5 + 3)', '8', '5 + 3 is 8, which is 1000 in binary.'),
        round('print(3 << 1)', '6', 'The << operator shifts left by one place, which doubles 3.'),
        round('print(6 >> 1)', '3', 'The >> operator shifts right by one place, which halves 6.'),
        round('print(bin(8))', '0b1000', 'bin() shows a number in binary, and Python starts it with 0b.')
      ] },
      demon('My overflow will break your sums! Can you carry the bits?'),
      battle
    ],
    quiz: [
      question('What is 1 + 1 in binary?', ['10', '2', '11', '0'], 'Write 0 and carry 1, giving 10.'),
      question('What is 0111 + 0001 in binary?', ['1000', '0110', '1001', '1111'], '7 + 1 = 8, which is 1000 in binary.'),
      question('What happens to a binary number when you shift it left by one place?', ['It doubles', 'It halves', 'It stays the same', 'It becomes 0'], '0011 (3) becomes 0110 (6).'),
      question('What is 0110 shifted right by one place?', ['0011', '1100', '0001', '0110'], 'Shifting right halves 6 to give 3, which is 0011.'),
      question('What is 1010 − 0010 in binary?', ['1000', '0100', '1100', '0010'], '10 − 2 = 8, which is 1000 in binary.')
    ]
  },

  /* ------------------------------------------------------------------ 2.1.2 Computer Hardware and Software */
  {
    id: 'gh-comp-ss2-barcodes-qr',
    arc: 1,
    sec: '2.1.2',
    pages: 'NaCCA SHS 2 · pp. 53–56',
    hue: 160,
    horns: 2,
    eyes: 2,
    title: 'The Code Scanner',
    topic: 'Demonstrate how barcodes and QR codes are created and used with input and output devices.',
    demon: 'The Blurred Code',
    tech: 'Hardware Form · First Technique: Scan and Show',
    scenes: [
      lesson('ghc-barcode', '<p>A <b>barcode</b> is a pattern of dark lines and spaces that stores a number, such as a product number. A <b>QR code</b> (quick response code) is a square pattern that stores more, such as text or a web address. Both are read by machines instead of people.</p>'),
      lesson('ghc-barcode', '<p>An <b>input device</b> reads the code. A barcode scanner shines light on the lines: dark bars take in the light and spaces reflect it, so the scanner reads the pattern. A digital camera or phone camera reads a QR code. The computer then looks up the number, for example in a shop\'s database to find the price of the product. A barcode usually stores the product number, not the price itself.</p>'),
      lesson('ghc-barcode', '<p>To <b>create</b> a code you can use a free online generator or an app: type the data, make the code, then show it on a monitor (an <b>output device</b>) or print it on a printer. The system unit, with its processor, motherboard, memory and hard disk, does the work in between. Other input devices used in control and monitoring include keyboards, microphones, mice and touchscreen sensors.</p>'),
      { type: 'sort', title: 'Input device, output device or inside the system unit?', cats: [both('Input device'), both('Output device'), both('Inside the system unit')], items: [
        item('Barcode scanner', 0, 'search', 'A scanner sends data into the computer.'),
        item('Digital camera', 0, 'camera', 'A camera sends pictures into the computer.'),
        item('Touchscreen sensor', 0, 'mouse', 'A touchscreen sensor sends your touch to the computer.'),
        item('Monitor', 1, 'monitor', 'A monitor shows the code or the result.'),
        item('Printer', 1, 'printer', 'A printer prints the code on paper.'),
        item('Motherboard', 2, 'chip', 'The motherboard sits inside the system unit.'),
        item('Processor', 2, 'chip', 'The processor is inside the system unit.'),
        item('Hard disk', 2, 'hdd', 'The hard disk sits inside the system unit.')
      ] },
      { type: 'order', title: 'Make and use a QR code', steps: [
        both('Decide what the code must hold, such as a web address'),
        both('Type the data into a QR code generator'),
        both('Show the code on a screen or print it'),
        both('Scan the code with a phone camera (input)'),
        both('The phone uses the data, for example by opening the web page')
      ], hint: both('Think about what happens first: choose, create, show, scan, use.') },
      demon('My code is blurred and cannot be read! Can you scan it?'),
      battle
    ],
    quiz: [
      question('What does a barcode usually store?', ['A number that identifies the product', 'The price in a picture', 'The whole shop database', 'A song'], 'The shop computer uses the number to look up the price.'),
      question('Which device reads a barcode?', ['A scanner', 'A printer', 'Speakers', 'A monitor'], 'A scanner is an input device.'),
      question('Which statement about QR codes is correct?', ['They can store more data than a simple barcode, such as a web address', 'They can only store the number 1', 'They must be read by a printer', 'They cannot be read by a camera'], 'QR codes are two-dimensional, so they hold more.'),
      question('Printing a QR code on paper uses which kind of device?', ['An output device', 'An input device', 'A network cable', 'A power unit'], 'A printer is an output device.'),
      question('Which part is inside the system unit?', ['The motherboard', 'The printer', 'The scanner', 'The monitor'], 'The motherboard is inside the system unit.')
    ]
  },
  {
    id: 'gh-comp-ss2-software-os',
    arc: 1,
    sec: '2.1.2',
    pages: 'NaCCA SHS 2 · pp. 53–56',
    hue: 320,
    horns: 3,
    eyes: 2,
    title: 'The Software Installer',
    topic: 'Explain the types of software and their functions, including the functions of an operating system and how to install software.',
    demon: 'The Fake Installer',
    tech: 'Software Form · Technique: Install with Care',
    scenes: [
      lesson('ghc-software', '<p>Software is divided into <b>system software</b>, <b>application software</b> and <b>programming software</b>. System software runs the computer: the operating system, device drivers and utility programs such as antivirus. Application software helps users do tasks, such as word processors, media players and games. Programming software helps programmers write and run programs, such as code editors, compilers and interpreters.</p>'),
      lesson('ghc-software', '<p>The <b>operating system</b> (OS) has several functions. It manages <b>memory</b>, decides which <b>programs</b> run and when, manages <b>files</b> and folders, controls <b>devices</b> through drivers, provides the <b>user interface</b> and protects the computer with user accounts and passwords.</p>'),
      lesson('ghc-software', '<p>To <b>install</b> everyday software such as an antivirus program, a game or a media player: get it from a trusted source such as the official website or app store, check the name and the publisher, run the installer and read what permissions it asks for, then restart if needed and keep it updated. Do not install pirated or unknown programs; they can carry viruses.</p>'),
      { type: 'sort', title: 'Which type of software?', cats: [both('System'), both('Application'), both('Programming')], items: [
        item('Antivirus utility', 0, 'shield', 'Utilities that protect and maintain the computer are system software.'),
        item('Media player', 1, 'speaker', 'A media player helps users play music and video.'),
        item('Device driver', 0, 'printer', 'Drivers let the operating system control a device.'),
        item('Python interpreter', 2, 'python', 'An interpreter runs programs that people write.'),
        item('Online game', 1, 'gamepad', 'Games are application software.'),
        item('Code editor', 2, 'code', 'Programmers use editors to write code.'),
        item('Operating system', 0, 'gear', 'The operating system runs the computer.')
      ] },
      { type: 'order', title: 'Install a program safely', steps: [
        both('Find the program on the official website or app store'),
        both('Check the name and the publisher'),
        both('Download and run the installer'),
        both('Read the permissions and agree only if you are happy with them'),
        both('Open the program and keep it updated')
      ], hint: both('Trust the source first, install second, update after.') },
      demon('I look like a real installer but I carry a virus! Will you install me?'),
      battle
    ],
    quiz: [
      question('Which of these is a function of the operating system?', ['Managing memory, files and devices', 'Typing letters for the user', 'Printing paper', 'Making electricity'], 'The OS manages memory, programs, files and devices.'),
      question('Which type of software is a media player?', ['Application software', 'System software', 'Programming software', 'Hardware'], 'A media player helps users do a task.'),
      question('What does a device driver do?', ['It lets the operating system control a device', 'It prints the device', 'It stores the user\'s files', 'It writes Python programs'], 'A driver is a program that works as a translator between the OS and a device.'),
      question('Where should you get a program to install?', ['The official website or app store', 'Any link sent by a stranger', 'A pirated copy from a friend', 'An email attachment from an unknown sender'], 'Trusted sources lower the risk of viruses.'),
      question('Which software helps programmers write and run programs?', ['Programming software', 'A media player', 'A spreadsheet', 'A game'], 'Editors, compilers and interpreters are programming software.')
    ]
  },

  /* ------------------------------------------------------------------ 2.1.3 Data Communication and Network Systems */
  {
    id: 'gh-comp-ss2-topologies',
    arc: 2,
    sec: '2.1.3',
    pages: 'NaCCA SHS 2 · pp. 57–60',
    hue: 200,
    horns: 2,
    eyes: 3,
    title: 'The Topology Tracer',
    topic: 'Discuss and compare at least three network topologies: star, bus, ring and mesh.',
    demon: 'The Broken Link',
    tech: 'Network Form · First Technique: Shape of the Net',
    scenes: [
      lesson('ghc-topologies', '<p>A <b>network topology</b> is the layout in which the devices of a network are joined. Four common topologies are <b>star</b>, <b>bus</b>, <b>ring</b> and <b>mesh</b>.</p>'),
      lesson('ghc-topologies', '<p>In a <b>star</b>, every device connects to one central switch or hub. It is easy to add devices and to find faults, but if the central device fails, the whole network stops. In a <b>bus</b>, all devices share one main cable. It is cheap and simple, but if the cable breaks the network fails, and many devices at once slow it down.</p>'),
      lesson('ghc-topologies', '<p>In a <b>ring</b>, each device joins two neighbours and data passes around the loop. A break in the loop can stop the network. In a <b>mesh</b>, devices are joined to several others, so data has more than one route. It is very reliable but needs a lot of cable and is costly. A full mesh of n devices needs n × (n − 1) ÷ 2 links, so 4 devices need 6 links, as in the picture.</p>'),
      { type: 'sort', title: 'Which topology?', cats: [both('Star'), both('Bus'), both('Ring'), both('Mesh')], items: [
        item('Every device connects to one central switch', 0, 'router', 'A central switch or hub is the star topology.'),
        item('All devices share one main cable', 1, 'share', 'One shared cable is the bus topology.'),
        item('Each device joins exactly two neighbours in a loop', 2, 'loop', 'A closed loop of neighbours is the ring topology.'),
        item('Data can take several routes, so one broken link is not a problem', 3, 'flow', 'Several routes are the strength of a mesh.'),
        item('If the central device fails, the whole network stops', 0, 'warn', 'The central device is the weak point of a star.'),
        item('A break in the main cable can bring down the network', 1, 'warn', 'The shared cable is the weak point of a bus.'),
        item('Needs the most cable and costs the most', 3, 'table', 'A mesh needs many links.')
      ] },
      demon('I cut one cable! Which network survives?'),
      battle
    ],
    quiz: [
      question('Which topology joins every device to a central switch or hub?', ['Star', 'Bus', 'Ring', 'Mesh'], 'The central device is the mark of a star.'),
      question('What is the main weakness of a star topology?', ['If the central device fails, the whole network stops', 'It cannot have more than two devices', 'It has no cable', 'It is the slowest in the world'], 'Everything depends on the central switch or hub.'),
      question('Which topology uses one shared main cable?', ['Bus', 'Star', 'Mesh', 'Ring'], 'All devices of a bus share one cable.'),
      question('Why is a mesh topology very reliable?', ['Data has more than one route', 'It uses only one cable', 'It has no devices', 'It needs no power'], 'If one link fails, another route can carry the data.'),
      question('How many links does a full mesh of 5 devices need?', ['10', '5', '20', '25'], '5 × 4 ÷ 2 = 10.')
    ]
  },
  {
    id: 'gh-comp-ss2-network-design',
    arc: 2,
    sec: '2.1.3',
    pages: 'NaCCA SHS 2 · pp. 57–60',
    hue: 90,
    horns: 3,
    eyes: 2,
    title: 'The Network Designer',
    topic: 'Design and explain two network systems, and tell LAN, MAN, WAN and CAN apart.',
    demon: 'The Missing Plan',
    tech: 'Network Form · Technique: Plan the Net',
    scenes: [
      lesson('ghc-network', '<p>Networks are named by their size. A <b>LAN</b> (local area network) covers a room or a building. A <b>CAN</b> (campus area network) joins the LANs of several buildings on one campus, such as a school or a university. A <b>MAN</b> (metropolitan area network) covers a town or city. A <b>WAN</b> (wide area network) covers a very large area, and the Internet is the biggest WAN.</p>'),
      lesson('ghc-network', '<p>Network devices do different jobs. A <b>hub</b> repeats data to every device. A <b>switch</b> sends data only to the device that needs it. A <b>bridge</b> joins two parts of a network. A <b>router</b> joins different networks and chooses the path for data, for example from your school to the Internet. Each computer needs a <b>network interface card (NIC)</b>.</p>'),
      lesson('ghc-network', '<p>To design a network, start with the requirements: how many devices, where they are, and what they need to do. Then choose a topology, choose the devices, draw the plan and explain why you chose it. Design 1: a school computer lab, which is a LAN in a star topology with a switch and a router to reach the Internet. Design 2: a school campus, which is a CAN where each building\'s LAN is linked by a fast backbone cable such as fibre optic.</p>'),
      { type: 'sort', title: 'LAN, CAN, MAN or WAN?', cats: [both('LAN'), both('CAN'), both('MAN'), both('WAN')], items: [
        item('The computers in one school lab', 0, 'monitor', 'One room is a LAN.'),
        item('All the buildings of a university campus joined together', 1, 'home', 'Several buildings on one campus are a CAN.'),
        item('Branches of a bank joined across one city', 2, 'router', 'A city-wide network is a MAN.'),
        item('The Internet', 3, 'globe', 'The Internet joins networks around the world.'),
        item('Wi-Fi in one home', 0, 'wifi', 'A home is a very small area, so it is a LAN.'),
        item('A company linking its offices in two countries', 3, 'cloud', 'Distant countries need a WAN.')
      ] },
      { type: 'order', title: 'Design a network', steps: [
        both('List the requirements: devices, places and tasks'),
        both('Choose the topology'),
        both('Choose the devices and cables'),
        both('Draw the plan'),
        both('Explain why the design suits the requirements')
      ], hint: both('Understand the need first, then choose, draw and explain.') },
      demon('I have no plan and no cables! Can you design me a network?'),
      battle
    ],
    quiz: [
      question('Which network joins the LANs of several buildings on one campus?', ['A CAN', 'A PAN', 'A single cable', 'A monitor'], 'CAN stands for campus area network.'),
      question('Which device sends data only to the device that needs it?', ['A switch', 'A hub', 'A monitor', 'A speaker'], 'A switch learns where devices are, while a hub repeats to everyone.'),
      question('Which device joins different networks and chooses the path for data?', ['A router', 'A hub', 'A keyboard', 'A scanner'], 'Routers connect networks, such as a school network to the Internet.'),
      question('What should you do first when designing a network?', ['List the requirements', 'Buy the most expensive devices', 'Print the plan', 'Choose a colour'], 'The design must match what the network is needed for.'),
      question('What does a NIC do?', ['It connects a computer to a network', 'It prints pages', 'It stores files', 'It shows pictures'], 'Every networked computer needs a network interface card.')
    ]
  },
  {
    id: 'gh-comp-ss2-internet-connection',
    arc: 2,
    sec: '2.1.3',
    pages: 'NaCCA SHS 2 · pp. 57–60',
    hue: 30,
    horns: 2,
    eyes: 2,
    title: 'The Internet Connector',
    topic: 'Demonstrate how a computer system connects to the Internet.',
    demon: 'The Dead Signal',
    tech: 'Network Form · Technique: Get Online',
    scenes: [
      lesson('ghc-network', '<p>The Internet is a worldwide network of networks. To connect to it you need an <b>ISP</b> (Internet Service Provider), a company that sells access. The ISP connects you using a fibre line, a telephone line, a mobile network (a SIM card and mobile data) or a satellite.</p>'),
      lesson('ghc-network', '<p>A <b>modem</b> changes the ISP\'s signal into data your network can use. A <b>router</b> shares that connection with your devices, by cable or by Wi-Fi, and directs data to the right device. Each device gets an <b>IP address</b>, a number that identifies it on the network. When you type a website name, a system called <b>DNS</b> turns the name into the IP address of the website\'s computer.</p>'),
      lesson('ghc-network', '<p>To demonstrate a connection: choose an ISP and a plan, connect the modem to the ISP\'s line, connect the router to the modem, switch them on, join the router by cable or by Wi-Fi with its password, and then open a browser to test. Keep your Wi-Fi password private so that strangers cannot use your connection.</p>'),
      { type: 'order', title: 'Connect a computer to the Internet', steps: [
        both('Choose an ISP and a plan'),
        both('Connect the modem to the ISP line'),
        both('Connect the router to the modem'),
        both('Join the router by cable or Wi-Fi'),
        both('Open a browser and test the connection')
      ], hint: both('The line comes first, then the modem, then the router, then your device.') },
      { type: 'sort', title: 'Who does the job?', cats: [both('ISP'), both('Modem'), both('Router'), both('DNS')], items: [
        item('Sells you access to the Internet', 0, 'cloud', 'An Internet Service Provider sells access.'),
        item('Changes the ISP signal into data for your network', 1, 'router', 'That is the job of the modem.'),
        item('Shares the connection with phones and laptops by Wi-Fi', 2, 'wifi', 'The router shares the connection and directs data.'),
        item('Turns a website name into an IP address', 3, 'search', 'DNS looks up names.'),
        item('Gives your connection through a mobile network and SIM card', 0, 'share', 'Mobile data is another service from an ISP.')
      ] },
      demon('My signal is dead! Can you get me online?'),
      battle
    ],
    quiz: [
      question('What is an ISP?', ['A company that provides access to the Internet', 'A type of keyboard', 'A web page editor', 'A virus'], 'ISP stands for Internet Service Provider.'),
      question('Which device shares an Internet connection with several devices?', ['A router', 'A scanner', 'A speaker', 'A monitor'], 'A router shares the connection by cable or Wi-Fi.'),
      question('What does DNS do?', ['It turns website names into IP addresses', 'It prints web pages', 'It makes passwords', 'It cleans viruses'], 'Computers use numbers, and DNS translates names into them.'),
      question('What is an IP address?', ['A number that identifies a device on a network', 'A website colour', 'A type of cable', 'A keyboard shortcut'], 'It lets data find the right device.'),
      question('Why should you keep your Wi-Fi password private?', ['So that strangers cannot use or attack your connection', 'Because Wi-Fi does not work with passwords', 'To make the network slower', 'It is not important'], 'A shared password lets others use your connection and see your traffic.')
    ]
  },

  /* ------------------------------------------------------------------ 2.2.1 Algorithm and Data Structure */
  {
    id: 'gh-comp-ss2-main-memory',
    arc: 3,
    sec: '2.2.1',
    pages: 'NaCCA SHS 2 · pp. 61–64',
    hue: 140,
    horns: 2,
    eyes: 2,
    title: 'The Memory Manager',
    topic: 'State and describe the functions of the main memory.',
    demon: 'The Memory Hog',
    tech: 'Memory Form · First Technique: Make Room',
    scenes: [
      lesson('ghc-memory', '<p><b>Main memory</b> (primary memory) is the memory the processor reads and writes directly. It includes <b>RAM</b> and <b>ROM</b>. <b>RAM</b> (random access memory) holds the programs and data that are in use right now. It is fast, but it is <b>volatile</b>: it loses its contents when the power goes off. <b>ROM</b> (read-only memory) holds the start-up instructions that the computer needs when it is switched on. It keeps its contents without power.</p>'),
      lesson('ghc-memory', '<p>The functions of main memory are to hold the running programs, to hold the data those programs are working on, and to give the processor quick access to both. Storage such as a hard disk or SSD is much slower, so the computer loads a program from storage into RAM before it runs.</p>'),
      lesson('ghc-memory', '<p>If too many programs are open, RAM becomes full. The operating system then uses part of the storage as extra memory, which is much slower, and the computer becomes sluggish. To fix a slow computer caused by memory overload: check which programs use the most memory in a task manager, close programs and browser tabs you do not need, restart the computer, and if the problem continues, add more RAM.</p>'),
      { type: 'sort', title: 'RAM or ROM?', cats: [both('RAM'), both('ROM')], items: [
        item('Holds the programs you are running now', 0, 'ram', 'Running programs are held in RAM.'),
        item('Loses its contents when the power is off', 0, 'warn', 'RAM is volatile.'),
        item('Holds the start-up instructions', 1, 'chip', 'ROM holds the instructions used when the computer starts.'),
        item('Keeps its contents without power', 1, 'hdd', 'ROM is non-volatile.'),
        item('Can be filled up when too many programs are open', 0, 'bug', 'RAM has limited space.'),
        item('Is read-only in normal use', 1, 'file', 'ROM is mainly read, not written.')
      ] },
      { type: 'order', title: 'Fix a slow computer that has too little free memory', steps: [
        both('Notice that the computer is slow'),
        both('Open the task manager to see which programs use the most memory'),
        both('Close the programs and tabs you do not need'),
        both('Restart the computer'),
        both('If it is still slow, add more RAM')
      ], hint: both('Find the cause first, try the cheap fixes next, and spend money last.') },
      demon('I eat all your memory! Can you make room?'),
      battle
    ],
    quiz: [
      question('Which memory holds the programs and data in use right now?', ['RAM', 'ROM', 'A DVD', 'A printer'], 'RAM holds running programs and their data.'),
      question('What happens to the contents of RAM when the power goes off?', ['They are lost', 'They are saved forever', 'They move to the printer', 'They double'], 'RAM is volatile.'),
      question('What does ROM usually hold?', ['The start-up instructions', 'Your photos', 'Your games', 'Your downloads'], 'ROM holds the instructions needed when the computer starts.'),
      question('Why does a computer slow down when RAM is full?', ['It must use slower storage as extra memory', 'The screen becomes smaller', 'The keyboard stops working', 'The cables get hot'], 'Storage is much slower than RAM.'),
      question('Which action helps when a computer is slow because too many programs are open?', ['Close the programs you do not need', 'Open more programs', 'Turn up the volume', 'Unplug the keyboard'], 'Closing programs frees memory.')
    ]
  },
  {
    id: 'gh-comp-ss2-data-structures-apps',
    arc: 3,
    sec: '2.2.1',
    pages: 'NaCCA SHS 2 · pp. 61–64',
    hue: 70,
    horns: 3,
    eyes: 3,
    title: 'The Structure Builder',
    topic: 'Explain real-life applications of data structures.',
    demon: 'The Jumbled List',
    tech: 'Data Form · Technique: Match the Structure to the Job',
    scenes: [
      lesson('ghc-structures', '<p>Data structures are used everywhere. An <b>array or list</b> keeps items in numbered places, so it suits a list of marks, a list of contacts or the days of the week. In Python, a list such as <code>names = ["Ama", "Kofi", "Esi"]</code> gives names[0] = "Ama", because counting starts at 0.</p>'),
      lesson('ghc-structures', '<p>A <b>stack</b> is last in, first out. The undo button in an editor, the back button in a browser and the history of calls in a running program all use the idea of a stack. In Python, <code>append()</code> pushes an item on top and <code>pop()</code> takes the top item off. A <b>queue</b> is first in, first out: print jobs waiting for a printer, people waiting at a bank, and tasks waiting for the processor all form queues.</p>'),
      lesson('ghc-structures', '<p>Other structures also appear in daily life. A <b>tree</b> has branches: folders inside folders on a computer form a tree, and so does a family tree. A <b>table</b> has rows and columns, like a timetable or a spreadsheet. Choosing the right structure for the job makes a program faster and simpler.</p>'),
      { type: 'stackq' },
      { type: 'sort', title: 'Which structure does the job?', cats: [both('List or array'), both('Stack'), both('Queue'), both('Tree')], items: [
        item('A list of marks for thirty students', 0, 'chart', 'Numbered places suit a list of values.'),
        item('The undo button in a text editor', 1, 'update', 'The last action is undone first.'),
        item('Jobs waiting for a printer', 2, 'printer', 'First come, first served is a queue.'),
        item('Folders inside folders on a computer', 3, 'folder', 'Branches inside branches form a tree.'),
        item('The back button in a web browser', 1, 'search', 'The last page visited is the first one to go back to.'),
        item('Customers waiting at a bank counter', 2, 'queue', 'The first customer is served first.'),
        item('A family tree', 3, 'home', 'Parents and children form branches.')
      ] },
      { type: 'predict', rounds: [
        round('names = ["Ama", "Kofi", "Esi"]\nprint(names[1])', 'Kofi', 'The first item is at index 0, so index 1 is the second item.'),
        round('s = []\ns.append(1)\ns.append(2)\nprint(s.pop())', '2', 'pop() removes the last item added, which is 2.'),
        round('q = [1, 2, 3]\nq.pop(0)\nprint(q)', '[2, 3]', 'pop(0) removes the first item, as a queue serves the first person.'),
        round('marks = [60, 75, 90]\nprint(len(marks))', '3', 'len() counts the items in the list.')
      ] },
      demon('My list is jumbled! Can you match each job to its structure?'),
      battle
    ],
    quiz: [
      question('Which structure is behind the undo button?', ['A stack', 'A queue', 'A network', 'A table'], 'The most recent action is undone first, which is last in, first out.'),
      question('Which structure suits a print queue?', ['A queue', 'A stack', 'A tree', 'A bus'], 'Print jobs are done in the order they arrive.'),
      question('Folders inside folders on a computer are an example of a:', ['tree', 'queue', 'stack', 'single number'], 'A folder can hold other folders, so it forms branches.'),
      question('What does this Python code print? names = ["Ama", "Kofi", "Esi"]; print(names[0])', ['Ama', 'Kofi', 'Esi', '0'], 'Python counts from 0, so index 0 is the first item.'),
      question('Why does the choice of data structure matter?', ['It can make a program faster and simpler', 'It changes the colour of the screen', 'It has no effect', 'It makes the computer heavier'], 'The right structure matches the job.')
    ]
  },

  /* ------------------------------------------------------------------ 2.2.2 App Development */
  {
    id: 'gh-comp-ss2-python-calculator',
    arc: 4,
    sec: '2.2.2',
    pages: 'NaCCA SHS 2 · pp. 65–68',
    hue: 20,
    horns: 2,
    eyes: 2,
    title: 'The Calculator Coder',
    topic: 'Use a programming language to develop a program, such as a simple calculator.',
    demon: 'The Divide-by-Zero Imp',
    tech: 'Code Form · First Technique: Plan Then Code',
    scenes: [
      lesson('ghc-flowchart', '<p>Before writing a program, plan it. The essential steps are: understand the problem, list the actions needed, put the actions in the correct order, and choose the data the program will use. This is the same idea as an <b>algorithm</b>: a clear sequence of instructions. For a simple calculator the actions are: ask for the first number, ask for the operation, ask for the second number, calculate, and show the answer.</p>'),
      lesson('ghc-flowchart', '<p>In Python, <code>input()</code> reads what the user types, as text. Use <code>float()</code> or <code>int()</code> to turn the text into a number. The operators are <code>+</code>, <code>-</code>, <code>*</code> and <code>/</code>. An <code>if</code> / <code>elif</code> / <code>else</code> chain chooses what to do: if the operation is "+", add; elif it is "-", subtract; and so on; else print "Unknown operation". Division by zero causes an error, so a good program checks for it first.</p>'),
      lesson('ghc-flowchart', '<p>Some programs use rules written by experts to give advice. This is an <b>expert system</b>. A simple example is a program that asks questions about a plant\'s leaves and gives advice using IF–THEN rules. The calculator\'s if/elif chain is a small version of the same idea: the program follows rules to decide what to do.</p>'),
      { type: 'order', title: 'Plan a simple calculator', steps: [
        both('Ask the user for the first number'),
        both('Ask the user for the operation'),
        both('Ask the user for the second number'),
        both('Calculate using the chosen operation'),
        both('Show the answer')
      ], hint: both('The program needs all three inputs before it can calculate.') },
      { type: 'predict', rounds: [
        round('a = 8\nb = 2\nprint(a / b)', '4.0', 'The / operator always gives a decimal number in Python 3.'),
        round('a = int("7")\nb = int("3")\nprint(a + b)', '10', 'int() turns the text into numbers, so the program adds 7 + 3.'),
        round('op = "*"\nif op == "+":\n    print(2 + 3)\nelif op == "*":\n    print(2 * 3)\nelse:\n    print("Unknown")', '6', 'op is "*", so the elif branch runs and prints 2 × 3.'),
        round('print("7" + "3")', '73', 'The quotes make them text, so + joins them instead of adding them.')
      ] },
      demon('I divide everything by zero! Can your calculator survive?'),
      battle
    ],
    quiz: [
      question('What does input() return in Python?', ['Text, even if the user types digits', 'Always a whole number', 'Always a decimal number', 'Nothing'], 'Use int() or float() to turn the text into a number.'),
      question('What does print(10 - 4) show?', ['6', '14', '10 - 4', '4'], 'Python subtracts 4 from 10.'),
      question('Which statement chooses between several operations in a calculator?', ['if / elif / else', 'print', 'import', 'return only'], 'A chain of conditions picks the right branch.'),
      question('What is an expert system?', ['A program that uses rules from experts to give advice', 'A very fast keyboard', 'A kind of cable', 'A web browser'], 'It follows IF–THEN rules written from expert knowledge.'),
      question('Why should a calculator check before dividing?', ['Dividing by zero causes an error', 'Division is not allowed', 'Python cannot divide', 'It would make the screen dark'], 'Division by zero is not defined, so the program should handle it.')
    ]
  },
  {
    id: 'gh-comp-ss2-machine-learning',
    arc: 4,
    sec: '2.2.2',
    pages: 'NaCCA SHS 2 · pp. 65–68',
    hue: 340,
    horns: 3,
    eyes: 3,
    title: 'The Machine Teacher',
    topic: 'Use simulation tools in machine learning to train a computer to perform specific actions.',
    demon: 'The Biased Model',
    tech: 'Learning Form · Technique: Learn From Examples',
    scenes: [
      lesson('ghc-learning', '<p>In normal programming, a person writes the rules. In <b>machine learning</b>, the computer finds the rules itself by studying <b>examples</b>. You give it many examples with the right answers (this is the <b>training data</b>), it finds patterns, and it builds a <b>model</b>. Then the model can <b>predict</b> answers for new cases it has not seen.</p>'),
      lesson('ghc-learning', '<p>Free simulation tools let you try this without writing code: you provide examples, for instance pictures of two different objects, press train, and then test whether the computer can tell new pictures apart. The steps are: collect examples, label them, train the model, test it on new cases, and improve it. If it makes many mistakes, you add better or more varied examples and train again.</p>'),
      lesson('ghc-learning', '<p>Machine learning raises ethical questions. If the training data is not varied, the model can be <b>biased</b> and treat some people unfairly. Training data can include personal information, so privacy matters. People should check the results and stay responsible for decisions that affect others. Examples of machine learning: a spam filter, speech recognition and video recommendations.</p>'),
      { type: 'order', title: 'Train a model with a simulation tool', steps: [
        both('Collect examples'),
        both('Label each example with the right answer'),
        both('Train the model'),
        both('Test the model on new examples'),
        both('Improve the examples and train again if there are mistakes')
      ], hint: both('The computer needs labelled examples before it can learn.') },
      { type: 'sort', title: 'Learns from examples, or follows fixed rules?', cats: [both('Learns from examples'), both('Follows fixed rules')], items: [
        item('A spam filter that gets better as people mark messages as spam', 0, 'bug', 'It improves by learning from examples.'),
        item('A calculator adding two numbers', 1, 'gear', 'A calculator follows fixed rules.'),
        item('Speech recognition that understands different voices', 0, 'speaker', 'It was trained on many voice examples.'),
        item('A traffic light that changes every 60 seconds', 1, 'loop', 'It follows a fixed timer rule.'),
        item('A video app that suggests videos based on what you watched', 0, 'camera', 'It learns patterns from past choices.'),
        item('A program that always gives grade A for marks of 80 or more', 1, 'code', 'The rule was written by a person.')
      ] },
      demon('I learned from unfair examples! Can you spot my bias?'),
      battle
    ],
    quiz: [
      question('How does machine learning differ from normal programming?', ['The computer finds rules from examples', 'A person writes every rule', 'It needs no data', 'It cannot make predictions'], 'In machine learning the rules come from the training data.'),
      question('What is training data?', ['Examples, usually with the right answers, that the computer learns from', 'A type of keyboard', 'The model\'s cable', 'A web page'], 'The model studies the examples to find patterns.'),
      question('What can happen if the training data is not varied enough?', ['The model can be biased and unfair', 'The model becomes perfect', 'The computer turns off', 'The model uses less memory'], 'The model learns only the patterns it sees.'),
      question('Which is an example of machine learning?', ['A spam filter that improves from examples', 'A calculator', 'A printer', 'A power cable'], 'It learns from examples of spam and non-spam.'),
      question('What should you do if a trained model makes many mistakes?', ['Improve the examples and train again', 'Ignore the mistakes', 'Delete the computer', 'Stop testing'], 'Better examples usually give a better model.')
    ]
  },

  /* ------------------------------------------------------------------ 2.2.3 Web Technologies and Databases */
  {
    id: 'gh-comp-ss2-web-editors',
    arc: 5,
    sec: '2.2.3',
    pages: 'NaCCA SHS 2 · pp. 69–73',
    hue: 210,
    horns: 2,
    eyes: 3,
    title: 'The Page Builder',
    topic: 'Demonstrate the use of web page editors and design elements, including sections, text, images, GUI/UI/UX and multimedia.',
    demon: 'The Broken Tag',
    tech: 'Web Form · First Technique: Build the Page',
    scenes: [
      lesson('ghc-webpage', '<p>A <b>web page editor</b> is a program for writing the HTML of a web page. The curriculum names text editors such as Notepad, Notepad++, Atom and Visual Studio Code. Any of them can save a file as <b>index.html</b>, and a browser opens it. Code editors help by colouring the code and showing mistakes.</p>'),
      lesson('ghc-webpage', '<p>Every HTML page has the same skeleton: <code>&lt;html&gt;</code> around everything, <code>&lt;head&gt;</code> with the title, and <code>&lt;body&gt;</code> with what visitors see. Inside the body you place <b>sections</b> (<code>&lt;section&gt;</code>), <b>text</b> (<code>&lt;h1&gt;</code> for headings and <code>&lt;p&gt;</code> for paragraphs), <b>images</b> (<code>&lt;img src="photo.jpg" alt="description"&gt;</code>) and <b>multimedia</b> such as <code>&lt;audio controls&gt;</code> and <code>&lt;video controls&gt;</code>.</p>'),
      lesson('ghc-webpage', '<p>A <b>GUI</b> (graphical user interface) lets people use a program through pictures, buttons and menus instead of typing commands. A web page is a GUI. <b>UI</b> (user interface) design is how the page looks: colours, text and layout. <b>UX</b> (user experience) design is how it feels to use: whether visitors can find things quickly and complete their tasks. Good alt text on images also helps visitors who cannot see the picture.</p>'),
      { type: 'sort', title: 'What does the tag do?', cats: [both('Text'), both('Image'), both('Multimedia'), both('Structure')], items: [
        item('&lt;p&gt;', 0, 'file', 'The p tag makes a paragraph of text.'),
        item('&lt;h2&gt;', 0, 'book', 'The h2 tag makes a heading.'),
        item('&lt;img&gt;', 1, 'image', 'The img tag shows a picture.'),
        item('&lt;video&gt;', 2, 'camera', 'The video tag plays a video.'),
        item('&lt;audio&gt;', 2, 'speaker', 'The audio tag plays sound.'),
        item('&lt;section&gt;', 3, 'folder', 'The section tag groups part of the page.'),
        item('&lt;body&gt;', 3, 'monitor', 'The body tag holds everything visitors see.')
      ] },
      { type: 'order', title: 'Make a web page in a text editor', steps: [
        both('Open a text editor such as Notepad'),
        both('Type the HTML skeleton and some content'),
        both('Save the file as index.html'),
        both('Open the file in a web browser'),
        both('Edit the file, save it and refresh the browser')
      ], hint: both('Write, save, open, then improve and refresh.') },
      demon('I forgot to close my tags! Can you fix the page?'),
      battle
    ],
    quiz: [
      question('Which tag shows an image?', ['<img>', '<p>', '<body>', '<audio>'], 'The img tag displays a picture.'),
      question('What is the name of the part that holds what visitors see?', ['The body', 'The head', 'The title only', 'The file name'], 'The body contains the visible page content.'),
      question('What does UX design focus on?', ['How easy and pleasant the page is to use', 'Only the colour of the text', 'The speed of the keyboard', 'The price of the computer'], 'UX is the experience of using the page.'),
      question('Why add alt text to an image?', ['It describes the picture for visitors who cannot see it', 'It makes the image larger', 'It changes the picture', 'It removes the picture'], 'Alt text helps with accessibility.'),
      question('Which file name does a simple home page usually have?', ['index.html', 'page.exe', 'photo.mp3', 'home.docx'], 'Browsers open index.html as the default page of a site.')
    ]
  },
  {
    id: 'gh-comp-ss2-ecommerce-page',
    arc: 5,
    sec: '2.2.3',
    pages: 'NaCCA SHS 2 · pp. 69–73',
    hue: 120,
    horns: 3,
    eyes: 2,
    title: 'The Web Shop Designer',
    topic: 'Design an e-commerce web page for a selected company or organisation.',
    demon: 'The Fake Shop',
    tech: 'Web Form · Technique: Design for Customers',
    scenes: [
      lesson('ghc-ecommerce', '<p><b>E-commerce</b> means buying and selling over the Internet. An e-commerce web page lets customers browse products, add them to a <b>cart</b>, enter their delivery details and pay. Choose a real or imagined company, such as a bakery, a fabric seller or a school uniform shop, and think about its customers first.</p>'),
      lesson('ghc-ecommerce', '<p>A good e-commerce page has: a clear name and logo, a menu with categories, a search box, product pictures with names and prices in GH₵, an "Add to cart" button, a visible cart, contact information, and a simple checkout. It should work on phones as well as on computers, because many customers shop on phones. Payment options such as mobile money and bank cards should be clearly shown.</p>'),
      lesson('ghc-ecommerce', '<p>Safety matters. A secure shop page uses <b>https</b> and shows a padlock in the browser. Customers should never be asked to send a PIN or password by message. Good design is easy and safe: few steps to buy, clear prices with no hidden charges, and honest product pictures.</p>'),
      { type: 'sort', title: 'Good or poor design for a web shop?', cats: [both('Good design'), both('Poor design')], items: [
        item('Clear prices in GH₵ next to each product', 0, 'chart', 'Customers need to know what things cost.'),
        item('A visible cart and an easy checkout', 0, 'folder', 'Easy buying means more happy customers.'),
        item('The page works on phones and computers', 0, 'monitor', 'Many customers use phones.'),
        item('Hidden delivery charges that appear at the last step', 1, 'warn', 'Hidden charges lose customers\' trust.'),
        item('Asking customers to send their PIN by message', 1, 'bug', 'A shop must never ask for a PIN.'),
        item('Tiny text with a colour that is hard to read', 1, 'search', 'Hard-to-read text makes the page difficult to use.')
      ] },
      { type: 'order', title: 'Design an e-commerce page', steps: [
        both('Choose the company and its customers'),
        both('List the products and the information to show'),
        both('Sketch the page layout (wireframe)'),
        both('Build the page with HTML'),
        both('Test it on a phone and on a computer')
      ], hint: both('Know the customers, plan the layout, then build and test.') },
      demon('My shop looks real but steals PINs! Can you design a safe one?'),
      battle
    ],
    quiz: [
      question('What is e-commerce?', ['Buying and selling over the Internet', 'Writing only in HTML', 'Repairing computers', 'A type of cable'], 'E-commerce is electronic commerce.'),
      question('Which feature does a web shop need so that customers can collect items before they pay?', ['A cart', 'A keyboard', 'A scanner', 'A speaker'], 'The cart holds the chosen items.'),
      question('What shows that a shop page is using a secure connection?', ['https and a padlock in the browser', 'Many pictures', 'A large banner', 'Bright colours'], 'https encrypts the connection.'),
      question('Which is poor design for a web shop?', ['Hidden extra charges at the last step', 'Clear prices', 'A search box', 'A cart'], 'Hidden charges lose customers\' trust.'),
      question('Why should an e-commerce page work on phones?', ['Many customers shop on phones', 'Phones do not use the Internet', 'Computers cannot open web pages', 'It is not important'], 'A page that works on phones reaches more customers.')
    ]
  },
  {
    id: 'gh-comp-ss2-databases',
    arc: 5,
    sec: '2.2.3',
    pages: 'NaCCA SHS 2 · pp. 69–73',
    hue: 60,
    horns: 2,
    eyes: 3,
    title: 'The Database Architect',
    topic: 'Create a relational database model of a database.',
    demon: 'The Duplicate Record',
    tech: 'Data Form · Technique: Tables and Keys',
    scenes: [
      lesson('ghc-database', '<p>A <b>database</b> is an organised collection of data. In a <b>relational database</b> the data is kept in <b>tables</b> that are linked to each other. A table has <b>fields</b> (the columns, such as Name) and <b>records</b> (the rows, each describing one thing, such as one student).</p>'),
      lesson('ghc-database', '<p>Every table needs a <b>primary key</b>: a field whose value is different for every record, such as a student ID. It identifies each record exactly. A <b>foreign key</b> is a field in one table that holds the primary key of another table. In the picture, the Class field in the Students table is a foreign key to the Class field in the Classes table. This <b>relationship</b> links each student to a class, and one class can have many students (one-to-many).</p>'),
      lesson('ghc-database', '<p>To create a relational database model: decide what things you need to store (for example students and classes), list the fields of each, choose a primary key for each table, and add a foreign key wherever one table must point to another. Keeping the class details in one table, instead of repeating them for every student, saves space and avoids mistakes.</p>'),
      { type: 'sort', title: 'What is it called?', cats: [both('Field'), both('Record'), both('Primary key'), both('Foreign key')], items: [
        item('A column such as Name', 0, 'table', 'A column is a field.'),
        item('A row describing one student', 1, 'file', 'A row is a record.'),
        item('StudentID, different for every student', 2, 'search', 'A primary key identifies each record.'),
        item('Class in the Students table, pointing to the Classes table', 3, 'share', 'A foreign key points to another table.'),
        item('A column such as Subject', 0, 'book', 'A column is a field.'),
        item('The row about Kofi, with his ID, name and class', 1, 'home', 'A row is a record.')
      ] },
      { type: 'order', title: 'Build a relational database model', steps: [
        both('Decide which tables you need'),
        both('List the fields of each table'),
        both('Choose a primary key for each table'),
        both('Add foreign keys to link the tables'),
        both('Check that each record is stored only once')
      ], hint: both('Tables first, then fields, then keys, then links.') },
      demon('I repeat every record twice! Can you give each one a key?'),
      battle
    ],
    quiz: [
      question('What is a record in a table?', ['A row describing one item', 'A column name', 'A whole database', 'A cable'], 'A record is a row.'),
      question('What is a field in a table?', ['A column that holds one kind of data', 'A row', 'A computer', 'A key'], 'Name or Subject are examples of fields.'),
      question('What does a primary key do?', ['Identifies each record uniquely', 'Opens a door', 'Deletes the table', 'Prints the table'], 'No two records have the same primary key.'),
      question('What is a foreign key?', ['A field that points to the primary key of another table', 'A field that must be empty', 'A password', 'A table name'], 'It links two tables together.'),
      question('Why store class details once in a Classes table, instead of repeating them for every student?', ['It saves space and avoids mistakes', 'It makes the database slower', 'It deletes the students', 'It stops the keys working'], 'Repeating data wastes space and can create mismatches.')
    ]
  }
];

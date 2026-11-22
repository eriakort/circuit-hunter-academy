import type { ArcInfo, Mission, SubjectInfo, UnitInfo } from '../types';

/**
 * Ghana NaCCA SHS 1 Computing (Computing Curriculum for Secondary Education, SHS 1–3, September 2023).
 * Two strands, each with three sub-strands: Computer Architecture and Organisation, and
 * Computational Thinking (Programming Logic). Curriculum alignment is recorded in
 * ghanaComputingSS1Alignment.ts. This is its own subject and progress namespace.
 * Content is English only. Teaching examples beyond the wording of an indicator are marked in the
 * alignment notes so a teacher can check them against the teacher manual.
 */
export const GHANA_COMPUTING_SS1_SUBJECT: SubjectInfo = {
  id: 'ghcomputing',
  name: 'Computing · SHS 1',
  blurb: 'Ghana NaCCA SHS 1 Computing: bits and memory, the CPU, hardware and software, networks, data structures, algorithms and the web.',
  meta: 'Ghana NaCCA · SHS 1 · fifteen learning missions',
  art: '<svg viewBox="0 0 120 120" width="100%" aria-hidden="true"><rect x="24" y="30" width="72" height="50" rx="8" fill="none" stroke="#7bdff2" stroke-width="4"/><path d="M44 96 H76 M60 80 V96" stroke="#7bdff2" stroke-width="4" stroke-linecap="round"/><path d="M42 52 L54 60 L42 68 M62 70 H78" fill="none" stroke="#ffd166" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
};

export const GHANA_COMPUTING_SS1_UNITS: UnitInfo[] = [
  { title: 'Computer Architecture and Organisation', ch: 'SHS 1 · NaCCA pp. 23–34', subject: 'ghcomputing' },
  { title: 'Computational Thinking (Programming Logic)', ch: 'SHS 1 · NaCCA pp. 35–46', subject: 'ghcomputing' }
];

export const GHANA_COMPUTING_SS1_ARCS: ArcInfo[] = [
  { n: 1, unit: 0, subject: 'ghcomputing', title: 'Data Storage and Manipulation', pages: 'NaCCA SHS 1 · pp. 23–26' },
  { n: 2, unit: 0, subject: 'ghcomputing', title: 'Computer Hardware and Software', pages: 'NaCCA SHS 1 · pp. 27–30' },
  { n: 3, unit: 0, subject: 'ghcomputing', title: 'Data Communication and Network Systems', pages: 'NaCCA SHS 1 · pp. 31–34' },
  { n: 4, unit: 1, subject: 'ghcomputing', title: 'Algorithm and Data Structure', pages: 'NaCCA SHS 1 · pp. 35–38' },
  { n: 5, unit: 1, subject: 'ghcomputing', title: 'App Development', pages: 'NaCCA SHS 1 · pp. 39–42' },
  { n: 6, unit: 1, subject: 'ghcomputing', title: 'Web Technologies', pages: 'NaCCA SHS 1 · pp. 43–46' }
];

/** The correct answer is always listed first; the game shuffles the options. */
const question = (q: string, a: string[], why: string) => ({ q, a, why });
const lesson = (vis: string, text: string) => ({ who: 's' as const, vis, text });
/** Ghana content is English only, so both language slots hold the same text. */
const both = (s: string): [string, string] => [s, s];
const item = (n: string, c: number, i: string, why: string) => ({ n: both(n), c, i, why: both(why) });

const demon = (text: string) => ({ who: 'd' as const, vis: 'demon', text });
const battle = { type: 'battle' };

export const GHANA_COMPUTING_SS1_MISSIONS: Mission[] = [
  /* ------------------------------------------------------------------ 1.1.1 Data Storage and Manipulation */
  {
    id: 'gh-comp-ss1-bit-patterns',
    arc: 0,
    sec: '1.1.1',
    pages: 'NaCCA SHS 1 · pp. 23–26',
    hue: 190,
    horns: 2,
    eyes: 2,
    title: 'The Bit Weaver',
    topic: 'Describe information as bit patterns: bits, bytes, binary place values and codes for text.',
    demon: 'The Static Phantom',
    tech: 'Binary Form · First Technique: Bit Sense',
    scenes: [
      lesson('ghc-bits', '<p>Welcome to SHS 1 Computing. Inside a computer, every piece of information is stored as <b>bit patterns</b>. A <b>bit</b> is the smallest unit of data and can only be <b>0</b> or <b>1</b>, like a switch that is off or on. A group of <b>8 bits</b> is called a <b>byte</b>.</p>'),
      lesson('ghc-bits', '<p>Binary numbers use place values that double each step: 128, 64, 32, 16, 8, 4, 2, 1. To read a pattern, add the place values that have a 1. For example 00001101 = 8 + 4 + 1 = 13. With <b>n</b> bits you can make 2ⁿ different patterns, so 3 bits give 8 patterns and 8 bits give 256 patterns (the numbers 0 to 255).</p>'),
      lesson('ghc-bits', '<p>Computers agree on a <b>code</b> for each kind of information. In the ASCII code, the letter A is the number 65, which is the bit pattern 01000001. Pictures are stored as numbers for tiny dots, and sound is stored as numbers measured many times a second. To a computer, text, numbers, pictures and sound are all patterns of 0s and 1s.</p>'),
      { type: 'bits' },
      demon('I have scrambled your switches! Can you still read my bit patterns?'),
      battle
    ],
    quiz: [
      question('How many different patterns can 3 bits make?', ['8', '6', '3', '9'], 'Each bit has 2 choices, so 2 × 2 × 2 = 8 patterns.'),
      question('What is the binary number 1010 in decimal?', ['10', '12', '5', '8'], '1010 = 8 + 2 = 10.'),
      question('How many bits are in one byte?', ['8', '4', '16', '2'], 'A byte is a group of 8 bits.'),
      question('What is the largest number that one byte (8 bits) can store?', ['255', '256', '128', '8'], 'Eight bits make 256 patterns, which cover the numbers 0 to 255.'),
      question('Which statement about the letter A in ASCII is correct?', ['It is stored as the number 65, which is a bit pattern.', 'It is stored as a small picture of the letter.', 'It is stored as the single bit 1.', 'It cannot be stored on a computer.'], 'Computers store text as codes. In ASCII, A is 65, which is 01000001 in binary.')
    ]
  },
  {
    id: 'gh-comp-ss1-cache-memory',
    arc: 0,
    sec: '1.1.1',
    pages: 'NaCCA SHS 1 · pp. 23–26',
    hue: 48,
    horns: 2,
    eyes: 3,
    title: 'The Speed Keeper',
    topic: 'Use knowledge of cache memory to explain and solve run-time slowness, such as opening a browser.',
    demon: 'The Lag Wraith',
    tech: 'Memory Form · Technique: Keep It Close',
    scenes: [
      lesson('ghc-memory', '<p>A processor can work much faster than main memory can supply data. To avoid waiting, computers use a <b>memory ladder</b>. The closer memory sits to the CPU, the faster and smaller it is: registers, then <b>cache</b>, then RAM, then storage such as an SSD or hard disk.</p>'),
      lesson('ghc-memory', '<p><b>Cache memory</b> is a small, very fast memory close to the CPU. It keeps copies of the data and instructions that the CPU uses again and again. When the CPU finds what it needs in the cache, that is a <b>cache hit</b> and the work is fast. When it is not there, that is a <b>cache miss</b>: the data must be fetched from slower RAM or storage and a copy is kept in the cache.</p>'),
      lesson('ghc-memory', '<p>Think about opening a web browser. The first time, files must be loaded from storage, so it can feel slow. Later, much of what it needs is already close by, so it opens faster. Browsers also keep a <b>browser cache</b> of pages and pictures you visited. This speeds things up, but if a site has changed and you still see the old page, clearing the browser cache and reloading usually fixes it.</p>'),
      { type: 'sort', title: 'Which memory is it?', cats: [both('Cache'), both('RAM'), both('Storage')], items: [
        item('Small, very fast memory close to the CPU', 0, 'chip', 'That describes cache memory.'),
        item('Holds the programs you are running right now', 1, 'ram', 'Running programs and their data are kept in RAM.'),
        item('Keeps your files when the power is switched off', 2, 'hdd', 'Storage such as an SSD or hard disk keeps files permanently.'),
        item('Keeps copies of data the CPU uses again and again', 0, 'loop', 'Frequently used data is copied into the cache.'),
        item('An SSD or a hard disk', 2, 'ssd', 'They are storage devices.')
      ] },
      demon('I will make your computer crawl! Do you know what keeps it quick?'),
      battle
    ],
    quiz: [
      question('What is the main job of cache memory?', ['To keep frequently used data close to the CPU so it can be reached quickly', 'To store files permanently', 'To connect the computer to the Internet', 'To show pictures on the screen'], 'Cache holds copies of data the CPU uses often, which saves waiting for slower memory.'),
      question('The CPU finds the data it needs in the cache. This is called a:', ['cache hit', 'cache miss', 'system crash', 'file error'], 'Finding data in the cache is a cache hit.'),
      question('Compared with RAM, cache is usually:', ['smaller and faster', 'larger and slower', 'larger and the same speed', 'the same size and slower'], 'Cache is small but very fast, and it sits closer to the CPU.'),
      question('A website still shows an old page after it was updated. What can help?', ['Clear the browser cache and reload the page', 'Buy a bigger monitor', 'Replace the keyboard', 'Install a second CPU'], 'The browser may be showing a saved copy. Clearing the cache makes it load the new page.'),
      question('Why does a browser often open faster the second time?', ['Some of the data it needs is already kept in fast memory', 'The CPU is replaced with a newer one', 'The files are deleted', 'The Internet becomes faster by itself'], 'Data used before can be found in cache or memory instead of being loaded again from storage.')
    ]
  },
  {
    id: 'gh-comp-ss1-cpu-parts',
    arc: 0,
    sec: '1.1.1',
    pages: 'NaCCA SHS 1 · pp. 23–26',
    hue: 12,
    horns: 3,
    eyes: 2,
    title: 'The CPU Core Keeper',
    topic: 'Discuss the major functions and parts of the CPU: the ALU, the control unit and registers.',
    demon: 'The Idle Cycle',
    tech: 'Processor Form · Technique: Fetch and Do',
    scenes: [
      lesson('ghc-cpu', '<p>The <b>CPU</b> (central processing unit) is the brain of the computer. It has three main parts. The <b>ALU</b> (arithmetic and logic unit) does calculations and comparisons. The <b>CU</b> (control unit) reads instructions and directs the other parts. <b>Registers</b> are tiny, very fast storage places inside the CPU that hold the data being worked on right now.</p>'),
      lesson('ghc-cycle', '<p>The CPU carries out four major functions in a repeating cycle. It <b>fetches</b> an instruction from memory, <b>decodes</b> it to find out what it means, <b>executes</b> it, and <b>stores</b> the result. This is the fetch–decode–execute–store cycle, also called the machine cycle.</p>'),
      lesson('ghc-cycle', '<p>An internal <b>clock</b> keeps every step in time. Clock speed is measured in hertz; 1 GHz means one billion clock ticks every second. Many modern CPUs have more than one <b>core</b>, and each core can run its own cycle, so several tasks can be handled at once.</p>'),
      { type: 'fde' },
      demon('Your processor will stall! Show me you know how an instruction is carried out.'),
      battle
    ],
    quiz: [
      question('Which part of the CPU carries out calculations and comparisons?', ['The ALU', 'The control unit', 'The power supply', 'The monitor'], 'The arithmetic and logic unit (ALU) does arithmetic and logic operations.'),
      question('Which part of the CPU reads instructions and directs the other parts?', ['The control unit', 'The ALU', 'The keyboard', 'The hard disk'], 'The control unit (CU) controls and coordinates the work.'),
      question('What are registers?', ['Very small, very fast storage places inside the CPU', 'Large storage on the hard disk', 'Cables that join the CPU to RAM', 'Programs that scan for viruses'], 'Registers hold the data and instructions the CPU is using at that moment.'),
      question('Which is the correct order of the machine cycle?', ['Fetch, decode, execute, store', 'Decode, fetch, store, execute', 'Execute, store, fetch, decode', 'Store, fetch, execute, decode'], 'The CPU fetches, decodes, executes and then stores the result.'),
      question('Which step copies an instruction from memory into the CPU?', ['Fetch', 'Decode', 'Execute', 'Store'], 'Fetch brings the next instruction into the CPU.')
    ]
  },
  {
    id: 'gh-comp-ss1-buses-architectures',
    arc: 0,
    sec: '1.1.1',
    pages: 'NaCCA SHS 1 · pp. 23–26',
    hue: 280,
    horns: 2,
    eyes: 3,
    title: 'The Bus Conductor',
    topic: 'Explain the buses, the internal clock, the instruction set, Von Neumann and Harvard architecture, and embedded systems.',
    demon: 'The Traffic Jam',
    tech: 'Architecture Form · Technique: Clear the Road',
    scenes: [
      lesson('ghc-cpu', '<p>Parts of a computer pass signals along <b>buses</b>, which are sets of wires. The <b>address bus</b> carries the location in memory that the CPU wants to reach. The <b>data bus</b> carries the data and instructions themselves. The <b>control bus</b> carries control signals such as read and write. The <b>internal clock</b> keeps all of these steps in time.</p>'),
      lesson('ghc-cpu', '<p>Every CPU understands a fixed list of basic operations called its <b>instruction set</b>, such as adding two numbers, moving data, or jumping to another instruction. Programs are made of these instructions, and the CPU runs them one cycle at a time.</p>'),
      lesson('ghc-architectures', '<p>In <b>Von Neumann architecture</b>, the program instructions and the data share one memory and one set of buses. In <b>Harvard architecture</b>, instructions and data have separate memories and separate paths, so the CPU can reach both at the same time. An <b>embedded system</b> is a small computer built into a device to do one job, such as the controller in a washing machine or a car; many embedded processors use Harvard-style designs.</p>'),
      { type: 'sort', title: 'Von Neumann or Harvard?', cats: [both('Von Neumann'), both('Harvard')], items: [
        item('Instructions and data share one memory', 0, 'ram', 'Sharing one memory is the Von Neumann design.'),
        item('Separate memories for the program and for data', 1, 'chip', 'Separate memories are the Harvard design.'),
        item('One set of buses carries both instructions and data', 0, 'share', 'A single shared path is the Von Neumann design.'),
        item('Can reach an instruction and data at the same time', 1, 'loop', 'Separate paths make that possible in the Harvard design.'),
        item('Often used in small processors inside appliances', 1, 'gear', 'Many embedded processors use Harvard-style designs.')
      ] },
      demon('My traffic jam will block every bus! Can you clear the road?'),
      battle
    ],
    quiz: [
      question('Which bus carries the location in memory that the CPU wants to reach?', ['The address bus', 'The data bus', 'The control bus', 'The power bus'], 'The address bus carries memory addresses.'),
      question('Which bus carries signals such as read and write?', ['The control bus', 'The address bus', 'The data bus', 'The video bus'], 'The control bus carries control signals.'),
      question('In Von Neumann architecture, instructions and data are kept in:', ['the same memory', 'two separate memories', 'the monitor', 'the keyboard'], 'A Von Neumann computer uses one memory for both.'),
      question('What is a feature of Harvard architecture?', ['Separate memory for instructions and for data', 'Only one memory for everything', 'No CPU is needed', 'It cannot run programs'], 'Harvard architecture keeps instructions and data apart.'),
      question('What is an embedded system?', ['A small computer built into a device to do a specific job', 'A large computer room', 'A program that scans for viruses', 'A type of cable'], 'Examples are the controller in a washing machine, a microwave or a car.')
    ]
  },

  /* ------------------------------------------------------------------ 1.1.2 Computer Hardware and Software */
  {
    id: 'gh-comp-ss1-hardware-components',
    arc: 1,
    sec: '1.1.2',
    pages: 'NaCCA SHS 1 · pp. 27–30',
    hue: 160,
    horns: 2,
    eyes: 2,
    title: 'The Hardware Hunter',
    topic: 'Explain the features of the hardware components of a computer, and how data moves between them.',
    demon: 'The Loose Wire',
    tech: 'Hardware Form · First Technique: Know the Job',
    scenes: [
      lesson('ghc-hardware', '<p><b>Hardware</b> means the physical parts of a computer that you can touch. The curriculum groups the hardware components into five kinds: <b>input</b> hardware, <b>processing</b> hardware, <b>output</b> hardware, <b>storage</b> hardware and <b>communication</b> hardware. Each kind has its own feature, which is the job it does for the computer.</p>'),
      lesson('ghc-hardware', '<p><b>Input hardware</b> turns what a person does (typing, speaking, pointing, scanning) into data the computer can use. <b>Processing hardware</b>, mainly the CPU, carries out instructions and works with the memory. <b>Output hardware</b> turns results into something a person can see, hear or hold. <b>Storage hardware</b> keeps data and programs for later. <b>Communication hardware</b> sends and receives data between computers.</p>'),
      lesson('ghc-hardware', '<p>The components work together, and data moves between them. Data enters through input hardware, travels along the buses to the processor and memory, and the results go out through output hardware. Data that must be kept is written to storage, and communication hardware can send it to another computer. Understanding these relationships helps you choose parts sensibly: a computer for video editing needs a fast processor, plenty of memory and fast storage.</p>'),
      { type: 'sort', title: 'Which feature belongs to which hardware?', cats: [both('Input'), both('Processing'), both('Output'), both('Storage'), both('Communication')], items: [
        item('Turns what you type into data the computer can use', 0, 'keyboard', 'Changing a person\'s actions into data is the feature of input hardware.'),
        item('Carries out instructions and makes decisions', 1, 'chip', 'Carrying out instructions is the feature of processing hardware.'),
        item('Shows the result so that you can see it', 2, 'monitor', 'Presenting results to a person is the feature of output hardware.'),
        item('Keeps your files when the power is off', 3, 'ssd', 'Keeping data for later is the feature of storage hardware.'),
        item('Sends data to other computers and receives it', 4, 'router', 'Exchanging data with other computers is the feature of communication hardware.'),
        item('Turns your voice or a picture into data', 0, 'webcam', 'Taking in sound and pictures is an input feature.'),
        item('Gives out sound that you can hear', 2, 'speaker', 'Producing sound is an output feature.')
      ] },
      { type: 'order', title: 'Follow the data: write and share a letter', steps: [
        both('You type the letter on the keyboard (input)'),
        both('The CPU and memory process the letters (processing)'),
        both('The monitor shows the letter (output)'),
        both('You save the file to the SSD (storage)'),
        both('You send it by email through the router (communication)')
      ], hint: both('Data goes in, is processed, comes out, is kept, and is then shared.') },
      demon('I have unplugged every part! Can you tell me what each one does?'),
      battle
    ],
    quiz: [
      question('Which hardware turns a person\'s actions into data the computer can use?', ['Input hardware', 'Output hardware', 'Storage hardware', 'Communication hardware'], 'Keyboards, mice and microphones are input hardware.'),
      question('Which hardware mainly does the processing?', ['The CPU', 'The monitor', 'The USB cable', 'The speakers'], 'The central processing unit carries out instructions.'),
      question('In which order does data usually move when you type and save a letter?', ['Input, processing, output, storage', 'Storage, output, input, processing', 'Output, input, storage, processing', 'Processing, storage, input, output'], 'Data goes in, is processed, is shown, and is then saved.'),
      question('What is the feature of storage hardware?', ['It keeps data and programs for later', 'It shows pictures on the screen', 'It types letters', 'It connects the computer to other computers'], 'Storage keeps data even when the computer is off.'),
      question('A router mainly belongs to which kind of hardware?', ['Communication hardware', 'Input hardware', 'Output hardware', 'Storage hardware'], 'Routers send and receive data between networks.')
    ]
  },
  {
    id: 'gh-comp-ss1-hardware-categories',
    arc: 1,
    sec: '1.1.2',
    pages: 'NaCCA SHS 1 · pp. 27–30',
    hue: 30,
    horns: 3,
    eyes: 2,
    title: 'The Machine Builder',
    topic: 'Describe the categories of computer hardware: input, processing, output, storage and communication devices.',
    demon: 'The Faulty Motherboard',
    tech: 'Hardware Form · Technique: Sort the Devices',
    scenes: [
      lesson('ghc-hardware', '<p>The curriculum asks you to describe the <b>categories of computer hardware</b>. A category is a family of devices that do the same kind of job. There are five: <b>input devices</b>, <b>processing devices</b>, <b>output devices</b>, <b>storage devices</b> and <b>communication devices</b>.</p>'),
      lesson('ghc-hardware', '<p>Examples. Input devices: keyboard, mouse, microphone, scanner, digital camera, touchscreen. Processing devices: the CPU and the graphics processor (GPU). Output devices: monitor, printer, speakers, projector. Storage devices: hard disk, SSD, USB flash drive, memory card. Communication devices: network interface card, modem, router and Wi-Fi adapter.</p>'),
      lesson('ghc-hardware', '<p>Some devices do two jobs. A touchscreen is an input device because you touch it, and an output device because it shows the picture. A useful extra way to describe hardware is by where it sits. <b>Internal hardware</b> is inside the system unit: the motherboard, CPU, RAM, internal storage and the power supply unit. <b>External hardware</b> (peripherals) plugs in from outside, such as a monitor, keyboard, mouse or printer.</p>'),
      { type: 'sort', title: 'Which category of device is it?', cats: [both('Input'), both('Processing'), both('Output'), both('Storage'), both('Communication')], items: [
        item('Mouse', 0, 'mouse', 'A mouse sends your pointing and clicking to the computer.'),
        item('Digital camera', 0, 'camera', 'A camera sends pictures into the computer.'),
        item('GPU', 1, 'chip', 'A graphics processor does processing.'),
        item('Printer', 2, 'printer', 'A printer puts results on paper.'),
        item('Hard disk', 3, 'hdd', 'A hard disk stores data.'),
        item('Memory card', 3, 'ssd', 'A memory card stores data.'),
        item('Modem', 4, 'router', 'A modem connects a computer to a network.'),
        item('Wi-Fi adapter', 4, 'wifi', 'A Wi-Fi adapter lets a computer join a wireless network.')
      ] },
      { type: 'build' },
      demon('My faulty board will never boot! Can you build it properly?'),
      battle
    ],
    quiz: [
      question('How many categories of computer hardware does the curriculum list?', ['Five: input, processing, output, storage and communication', 'Two: hardware and software', 'Three: keyboard, mouse and monitor', 'One: the CPU'], 'The categories are input, processing, output, storage and communication devices.'),
      question('Which of these is an input device?', ['A scanner', 'A printer', 'Speakers', 'A projector'], 'A scanner sends a picture of a page into the computer.'),
      question('Which of these is an output device?', ['A projector', 'A microphone', 'A mouse', 'A modem'], 'A projector shows the computer\'s output on a wall or screen.'),
      question('A touchscreen is special because it is:', ['both an input and an output device', 'only a storage device', 'only a communication device', 'software'], 'You touch it to give input, and it shows output.'),
      question('Which part holds the CPU and RAM and carries signals between them?', ['The motherboard', 'The printer', 'The monitor', 'A USB flash drive'], 'The motherboard is the main circuit board inside the system unit.')
    ]
  },
  {
    id: 'gh-comp-ss1-software-types',
    arc: 1,
    sec: '1.1.2',
    pages: 'NaCCA SHS 1 · pp. 27–30',
    hue: 320,
    horns: 2,
    eyes: 3,
    title: 'The Software Sorter',
    topic: 'Explain the types of software and their functions: system, application and programming software.',
    demon: 'The Rogue Program',
    tech: 'Software Form · Technique: Name the Layer',
    scenes: [
      lesson('ghc-software', '<p><b>Software</b> means programs: sets of instructions that tell the hardware what to do. You cannot touch software, but you use it every day. There are three main types: system software, application software and programming software.</p>'),
      lesson('ghc-software', '<p><b>System software</b> runs and looks after the computer. It includes the <b>operating system</b> (such as Windows, Android, Linux or macOS), <b>device drivers</b> that let the computer work with devices like printers, and <b>utility programs</b> such as antivirus and disk clean-up. <b>Application software</b> helps users do tasks: word processors, spreadsheets, web browsers and games. <b>Programming software</b> helps programmers write programs: code editors, compilers and interpreters.</p>'),
      lesson('ghc-software', '<p>The operating system manages the hardware and memory, starts and stops programs, handles files, provides the user interface and helps keep the system secure. Application programs ask the operating system for help instead of talking to the hardware directly.</p>'),
      { type: 'sort', title: 'Which type of software?', cats: [both('System'), both('Application'), both('Programming')], items: [
        item('Android', 0, 'gear', 'An operating system is system software.'),
        item('A spreadsheet program', 1, 'table', 'It helps users do a task, so it is application software.'),
        item('A Python interpreter', 2, 'python', 'It helps run programs that people write, so it is programming software.'),
        item('An antivirus utility', 0, 'shield', 'Utilities that look after the computer are system software.'),
        item('A video game', 1, 'gamepad', 'Games are application software.'),
        item('A code editor', 2, 'code', 'Programmers use editors to write programs.'),
        item('A printer driver', 0, 'printer', 'Drivers are system software.'),
        item('A web browser', 1, 'globe', 'A browser is application software.')
      ] },
      demon('I am a rogue program! Name my layer if you can.'),
      battle
    ],
    quiz: [
      question('Which of these is system software?', ['An operating system', 'A word processor', 'A game', 'A photo editor'], 'The operating system manages the computer, so it is system software.'),
      question('A word processor is an example of:', ['application software', 'system software', 'programming software', 'hardware'], 'It helps users do the task of writing documents.'),
      question('Which of these is programming software?', ['A compiler', 'A web browser', 'A spreadsheet', 'A music player'], 'Compilers and interpreters help turn programs into something a computer can run.'),
      question('Which is a key job of the operating system?', ['Managing the hardware and running programs', 'Drawing pictures only', 'Printing documents only', 'Creating websites only'], 'The operating system manages hardware, memory, files and programs.'),
      question('Which statement is true?', ['Hardware is the physical parts; software is the instructions', 'Software is the physical parts; hardware is the instructions', 'Hardware and software are the same thing', 'Software can be touched'], 'You can touch hardware but not software.')
    ]
  },

  /* ------------------------------------------------------------------ 1.1.3 Data Communication and Network Systems */
  {
    id: 'gh-comp-ss1-networks-basics',
    arc: 2,
    sec: '1.1.3',
    pages: 'NaCCA SHS 1 · pp. 31–34',
    hue: 200,
    horns: 2,
    eyes: 2,
    title: 'The Network Weaver',
    topic: 'Explain computer networks and how they work.',
    demon: 'The Dropped Packet',
    tech: 'Network Form · First Technique: Connect and Share',
    scenes: [
      lesson('ghc-network', '<p>A <b>computer network</b> is two or more computers or devices connected so they can share data and resources, such as files, printers and an Internet connection. People use networks every day to send messages, share files, browse the web and play online.</p>'),
      lesson('ghc-network', '<p>A network needs devices (called nodes), a <b>medium</b> to carry the signals (cables or wireless), network hardware such as a network interface card (NIC), a modem, a switch and a router, and agreed rules called <b>protocols</b> so that every device understands the others.</p>'),
      lesson('ghc-network', '<p>Data does not travel as one big block. It is split into small <b>packets</b>. Each packet carries the address of where it came from and where it is going. Packets travel through switches and routers, arrive at the destination and are put back together into the original message.</p>'),
      { type: 'order', title: 'Send a message across a network', steps: [
        both('The message is broken into packets'),
        both('Each packet gets a destination address'),
        both('The packets travel through switches and routers'),
        both('The packets arrive at the destination'),
        both('The packets are put back together into the message')
      ], hint: both('Think about what must happen before sending and what happens on arrival.') },
      demon('I drop packets and break messages! Can you rebuild the journey?'),
      battle
    ],
    quiz: [
      question('What is a computer network?', ['Two or more connected devices that can share data and resources', 'A single computer on its own', 'A program that edits photos', 'A type of keyboard'], 'The key idea is connected devices sharing data and resources.'),
      question('What do we call the rules that devices follow to communicate?', ['Protocols', 'Pixels', 'Passwords', 'Peripherals'], 'Protocols are agreed rules for communication.'),
      question('Data sent across a network is split into small units called:', ['packets', 'folders', 'icons', 'screens'], 'Each packet carries part of the message plus address information.'),
      question('Which device connects different networks and directs packets?', ['A router', 'A monitor', 'A keyboard', 'A speaker'], 'Routers pass packets between networks.'),
      question('Which network hardware is found inside a computer and lets it connect to a network?', ['A network interface card (NIC)', 'A monitor', 'A printer', 'A keyboard'], 'The NIC is the computer\'s connection to the network.'),
      question('Which is a benefit of a network?', ['Sharing a printer or an Internet connection', 'Needing more cables for every task', 'Losing all files', 'Using no electricity'], 'Sharing resources is one of the main benefits.')
    ]
  },
  {
    id: 'gh-comp-ss1-network-types',
    arc: 2,
    sec: '1.1.3',
    pages: 'NaCCA SHS 1 · pp. 31–34',
    hue: 90,
    horns: 3,
    eyes: 2,
    title: 'The Network Scout',
    topic: 'Identify and differentiate three types of network system: LAN, MAN and WAN.',
    demon: 'The Distance Daemon',
    tech: 'Network Form · Technique: Measure the Reach',
    scenes: [
      lesson('ghc-network', '<p>Networks are often grouped by the area they cover. A <b>LAN</b> (local area network) covers a small area, such as a room, a school lab or one building. It is usually owned by one organisation and is fast and cheap to run.</p>'),
      lesson('ghc-network', '<p>A <b>MAN</b> (metropolitan area network) covers a town or city and can join several LANs. A <b>WAN</b> (wide area network) covers a very large area such as many countries. The <b>Internet</b> is the best-known WAN: a network of networks.</p>'),
      lesson('ghc-network', '<p>To tell them apart, ask three questions. How large is the area? Who owns or runs it? How are the sites joined? A LAN is small and privately run; a MAN covers a city; a WAN joins faraway places, often using lines that belong to telecom companies, undersea cables or satellites.</p>'),
      { type: 'sort', title: 'LAN, MAN or WAN?', cats: [both('LAN'), both('MAN'), both('WAN')], items: [
        item('Computers in one school lab', 0, 'monitor', 'A single room or building is a LAN.'),
        item('Banks linking branches across one city', 1, 'home', 'A network across a city is a MAN.'),
        item('The Internet', 2, 'globe', 'The Internet joins networks around the world, so it is a WAN.'),
        item('Wi-Fi inside one house', 0, 'wifi', 'A house is a very small area, so it is a LAN.'),
        item('A company joining offices in two different countries', 2, 'cloud', 'Joining distant countries needs a WAN.'),
        item('A city-wide network joining schools and offices', 1, 'router', 'That covers a city, so it is a MAN.')
      ] },
      demon('Distance is my weapon! Can you tell which network is which?'),
      battle
    ],
    quiz: [
      question('Which type of network covers the smallest area?', ['LAN', 'MAN', 'WAN', 'The Internet'], 'A LAN covers a room or a building.'),
      question('A school computer lab is usually connected by a:', ['LAN', 'WAN', 'MAN', 'satellite only'], 'It is a small area owned by one organisation.'),
      question('What is the largest WAN in the world?', ['The Internet', 'A school lab', 'A home Wi-Fi', 'A single printer'], 'The Internet joins networks across the world.'),
      question('A network that covers a whole city is a:', ['MAN', 'LAN', 'PAN', 'CPU'], 'MAN stands for metropolitan area network.'),
      question('Which pair is matched correctly?', ['WAN – many countries', 'LAN – the whole world', 'MAN – one desk', 'WAN – one room'], 'A WAN covers very large areas.')
    ]
  },

  /* ------------------------------------------------------------------ 1.2.1 Algorithm and Data Structure */
  {
    id: 'gh-comp-ss1-data-structures-intro',
    arc: 3,
    sec: '1.2.1',
    pages: 'NaCCA SHS 1 · pp. 35–38',
    hue: 140,
    horns: 2,
    eyes: 2,
    title: 'The Data Organiser',
    topic: 'Explain the concept of data structures and their importance in organising and manipulating data efficiently.',
    demon: 'The Tangle',
    tech: 'Data Form · First Technique: Keep It Organised',
    scenes: [
      lesson('ghc-structures', '<p>A <b>data structure</b> is a way of organising and storing data so that a program can use it efficiently. Imagine a school with no registers or lists: finding one student would take a very long time. A good structure makes finding, adding, removing and sorting data quicker.</p>'),
      lesson('ghc-structures', '<p>We meet data structures in daily life. A phone\'s contact list is an ordered collection. The undo button reverses the most recent action first. A print queue handles jobs in the order they arrive. Folders inside folders form a tree. A school timetable is a table of rows and columns.</p>'),
      lesson('ghc-structures', '<p>No structure is best for every job. A programmer picks the one that matches the problem: for example, a queue for jobs that must be handled in order. Choosing well saves time and memory, and makes programs easier to understand.</p>'),
      { type: 'sort', title: 'Is it a benefit of data structures?', cats: [both('Benefit'), both('Not a benefit')], items: [
        item('Find data faster', 0, 'search', 'Good organisation makes searching quicker.'),
        item('Add and remove items efficiently', 0, 'update', 'A suitable structure makes changes easier.'),
        item('Keep related data together in an organised way', 0, 'folder', 'Organisation keeps data manageable.'),
        item('Make data disappear when the program ends', 1, 'warn', 'That is not a purpose of a data structure.'),
        item('Make the data harder to find', 1, 'bug', 'Data structures exist to make data easier to use.')
      ] },
      demon('I tangle every list into a mess! Can you explain why order matters?'),
      battle
    ],
    quiz: [
      question('What is a data structure?', ['A way of organising and storing data so it can be used efficiently', 'A type of monitor', 'A virus', 'A kind of cable'], 'A data structure organises data for efficient use.'),
      question('Which real-life example is a queue?', ['People waiting at a bank counter, first come first served', 'A pile of plates where you take the top one', 'A list of marks with numbered places', 'A drawing of a house'], 'A queue works first in, first out.'),
      question('Why are data structures important?', ['They help organise and manipulate data efficiently', 'They make computers heavier', 'They remove the need for memory', 'They stop programs from running'], 'Good organisation makes programs quicker and simpler.'),
      question('Which feature is a good example of a stack?', ['The undo button', 'A print queue', 'A school timetable', 'A web address'], 'Undo reverses the last action first, which is last in, first out.'),
      question('A phone\'s contact list is best described as:', ['an ordered list of items', 'a stack of plates', 'a flowchart', 'a network cable'], 'A contact list keeps items in an ordered collection.')
    ]
  },
  {
    id: 'gh-comp-ss1-data-structure-types',
    arc: 3,
    sec: '1.2.1',
    pages: 'NaCCA SHS 1 · pp. 35–38',
    hue: 70,
    horns: 3,
    eyes: 3,
    title: 'The Stack Master',
    topic: 'Differentiate between the types of data structure: arrays and lists, stacks and queues.',
    demon: 'The Overflow Imp',
    tech: 'Data Form · Technique: Last In, First Out',
    scenes: [
      lesson('ghc-structures', '<p>An <b>array</b> (or <b>list</b>) stores items in numbered places. Each item has an <b>index</b>, and in most programming languages, including Python, counting starts at 0. So the first item is at index 0. Arrays are good when you need to reach an item by its position.</p>'),
      lesson('ghc-structures', '<p>A <b>stack</b> follows <b>last in, first out</b> (LIFO). You <b>push</b> an item on top and <b>pop</b> the top item off. Think of a pile of plates: the last plate you put on is the first you take. The undo feature works this way.</p>'),
      lesson('ghc-structures', '<p>A <b>queue</b> follows <b>first in, first out</b> (FIFO). Items join at the back and leave from the front, like people waiting at a counter or jobs waiting for a printer. Other structures exist too, such as tables with rows and columns and trees with branches, but arrays, stacks and queues are the key ones to know first.</p>'),
      { type: 'stackq' },
      { type: 'sort', title: 'Array, stack or queue?', cats: [both('Array or list'), both('Stack'), both('Queue')], items: [
        item('Items reached by a position number', 0, 'table', 'Reaching items by index is what arrays are for.'),
        item('The last plate placed is the first one taken', 1, 'stack', 'Last in, first out is a stack.'),
        item('People join at the back and leave from the front', 2, 'queue', 'First in, first out is a queue.'),
        item('Undo reverses the latest action first', 1, 'update', 'The latest action is on top of the stack.'),
        item('A printer handles jobs in the order they arrive', 2, 'printer', 'Print jobs wait in a queue.'),
        item('Marks of thirty students kept in numbered places', 0, 'chart', 'Numbered places describe an array.')
      ] },
      demon('I will overflow your memory! Do you know your stacks from your queues?'),
      battle
    ],
    quiz: [
      question('Which structure follows last in, first out (LIFO)?', ['A stack', 'A queue', 'A network', 'A flowchart'], 'In a stack, the last item added is the first removed.'),
      question('Which structure follows first in, first out (FIFO)?', ['A queue', 'A stack', 'A monitor', 'A bus'], 'In a queue, the first item added is the first removed.'),
      question('In a queue, items are removed from the:', ['front', 'back', 'middle', 'top of a stack'], 'The item at the front leaves first.'),
      question('In Python, what is the index of the first item in a list?', ['0', '1', '-1', '10'], 'Python counts positions from 0.'),
      question('Items A, B and C are pushed onto a stack in that order. Which item does one pop remove?', ['C', 'A', 'B', 'None'], 'The last item pushed (C) is on top, so it comes off first.')
    ]
  },

  /* ------------------------------------------------------------------ 1.2.2 App Development */
  {
    id: 'gh-comp-ss1-algorithms',
    arc: 4,
    sec: '1.2.2',
    pages: 'NaCCA SHS 1 · pp. 39–42',
    hue: 20,
    horns: 2,
    eyes: 2,
    title: 'The Algorithm Architect',
    topic: 'Explain and use algorithms to solve a real-life problem, and identify the stages of the program development cycle.',
    demon: 'The Infinite Loop',
    tech: 'Logic Form · First Technique: Step by Step',
    scenes: [
      lesson('ghc-devcycle', '<p>An <b>algorithm</b> is a finite, step-by-step set of instructions for solving a problem or doing a task. A recipe, the steps for withdrawing money at an ATM and the directions to a friend\'s house are all algorithms. A good algorithm is clear, in the right order, ends after a number of steps, and gives the correct result.</p>'),
      lesson('ghc-devcycle', '<p>Programs are made by following the <b>program development cycle</b>: <b>analysis</b> (understand the problem), <b>design</b> (plan the steps), <b>coding</b> (write the program) and <b>testing</b> (run it and fix mistakes). If testing finds a bug, you go back to an earlier stage and improve the work.</p>'),
      lesson('ghc-devcycle', '<p>When planning a program, put the actions in the right order. To find the area of a rectangle you must first get the length and the width, then multiply them, and only then show the answer. Changing the order would give a wrong or empty result.</p>'),
      { type: 'order', title: 'Put the development cycle in order', steps: [
        both('Analysis: decide what the program must do'),
        both('Design: plan the steps with a flowchart or pseudocode'),
        both('Coding: write the program in a language such as Python'),
        both('Testing: run the program and fix the mistakes')
      ], hint: both('You must understand and plan before you write code, and test after.') },
      demon('My loop never ends! Can you plan an algorithm that does?'),
      battle
    ],
    quiz: [
      question('What is an algorithm?', ['A finite, step-by-step set of instructions to solve a problem', 'A kind of computer virus', 'A type of keyboard', 'A picture on the screen'], 'An algorithm is a clear sequence of steps that solves a problem.'),
      question('Which is the correct order of the program development cycle?', ['Analysis, design, coding, testing', 'Coding, testing, design, analysis', 'Testing, coding, analysis, design', 'Design, testing, analysis, coding'], 'You analyse and design first, then code, then test.'),
      question('Which stage finds and fixes mistakes?', ['Testing', 'Analysis', 'Design', 'Printing'], 'Testing checks that the program works as planned.'),
      question('Why does the order of the steps in an algorithm matter?', ['Steps done in the wrong order can give a wrong result', 'It never matters', 'Only the last step matters', 'Computers ignore the order'], 'Each step often depends on the one before it.'),
      question('Which of these is an algorithm?', ['The steps for making a cup of tea', 'A photograph', 'A mouse', 'A monitor'], 'It is a set of ordered steps that reaches a goal.')
    ]
  },
  {
    id: 'gh-comp-ss1-flowcharts-pseudocode',
    arc: 4,
    sec: '1.2.2',
    pages: 'NaCCA SHS 1 · pp. 39–42',
    hue: 340,
    horns: 3,
    eyes: 3,
    title: 'The Flow Coder',
    topic: 'Implement algorithms with flowcharts, pseudocode and a programming language such as Python.',
    demon: 'The Syntax Specter',
    tech: 'Logic Form · Technique: Draw, Write, Run',
    scenes: [
      lesson('ghc-flowchart', '<p>A <b>flowchart</b> shows an algorithm with symbols joined by arrows. An <b>oval</b> marks the start or end, a <b>parallelogram</b> shows input or output, a <b>rectangle</b> shows a process or step, and a <b>diamond</b> shows a decision with yes and no paths. The flowchart here adds two numbers.</p>'),
      lesson('ghc-flowchart', '<p><b>Pseudocode</b> writes the same steps in plain, structured language, with no strict rules about spelling or punctuation. To add two numbers: INPUT a, INPUT b, sum ← a + b, OUTPUT sum. For the area of a rectangle: INPUT length, INPUT width, area ← length × width, OUTPUT area. Planning uses <b>variables</b> to hold values, and each value has a <b>data type</b>, such as whole numbers, decimal numbers, text and true or false values.</p>'),
      lesson('ghc-flowchart', '<p>A plan can then be written as a program. In <b>Python</b>: <code>a = 5</code>, <code>b = 3</code>, <code>print(a + b)</code> shows 8. Python is a programming language; HTML, which you meet in the web strand, is a markup language that describes the content of web pages.</p>'),
      { type: 'predict', rounds: [
        { code: both('a = 5\nb = 3\nprint(a + b)'), out: both('8'), why: both('a + b is 5 + 3, which is 8.') },
        { code: both('length = 6\nwidth = 4\nprint(length * width)'), out: both('24'), why: both('The * sign multiplies: 6 × 4 = 24.') },
        { code: both('name = "Ama"\nprint("Hello", name)'), out: both('Hello Ama'), why: both('print puts a space between the items.') },
        { code: both('x = 10\nx = x - 4\nprint(x)'), out: both('6'), why: both('x starts at 10, then x - 4 makes it 6.') }
      ] },
      demon('My syntax errors will crash your code! Can you trace it?'),
      battle
    ],
    quiz: [
      question('Which flowchart symbol shows a decision?', ['A diamond', 'An oval', 'A rectangle', 'A parallelogram'], 'A diamond asks a yes or no question.'),
      question('Which flowchart symbol is used for input or output?', ['A parallelogram', 'A diamond', 'An oval', 'A circle'], 'Input and output use a parallelogram.'),
      question('What is pseudocode?', ['A plain-language outline of the steps of an algorithm', 'A virus', 'A type of CPU', 'A web browser'], 'Pseudocode describes steps without following a programming language\'s strict rules.'),
      question('What does the Python line print(2 + 3) show?', ['5', '23', '2 + 3', 'Nothing'], 'Python adds 2 and 3, so it prints 5.'),
      question('Which pseudocode line correctly finds the area of a rectangle?', ['area ← length × width', 'area ← length + width', 'area ← length − width', 'area ← length ÷ width'], 'The area of a rectangle is length times width.')
    ]
  },

  /* ------------------------------------------------------------------ 1.2.3 Web Technologies */
  {
    id: 'gh-comp-ss1-web-components',
    arc: 5,
    sec: '1.2.3',
    pages: 'NaCCA SHS 1 · pp. 43–46',
    hue: 210,
    horns: 2,
    eyes: 3,
    title: 'The Web Page Weaver',
    topic: 'Identify and describe the key components of a web page: headings, menus, links, text, images and other elements.',
    demon: 'The Broken Link',
    tech: 'Web Form · First Technique: Know the Parts',
    scenes: [
      lesson('ghc-webpage', '<p>A <b>web page</b> is a document that a web browser displays. A <b>website</b> is a group of linked pages. Web pages are written in <b>HTML</b> (HyperText Markup Language), which uses <b>tags</b> to tell the browser what each part is.</p>'),
      lesson('ghc-webpage', '<p>Most pages share the same key components. A <b>heading</b> names a section. A <b>menu</b> (navigation) helps visitors move between pages. A <b>link</b> (hyperlink) opens another page when clicked. <b>Text</b> carries the message and <b>images</b> add meaning and interest. Many pages also have a footer, buttons and forms.</p>'),
      lesson('ghc-webpage', '<p>Some basic HTML tags: <code>&lt;h1&gt;</code> for the main heading, <code>&lt;p&gt;</code> for a paragraph, <code>&lt;a href="..."&gt;</code> for a link, <code>&lt;img src="..."&gt;</code> for an image and <code>&lt;nav&gt;</code> for a group of menu links.</p>'),
      { type: 'sort', title: 'Which web page component?', cats: [both('Heading'), both('Menu'), both('Link'), both('Image')], items: [
        item('&lt;h1&gt;Welcome to our school&lt;/h1&gt;', 0, 'book', 'The h1 tag makes the main heading.'),
        item('Home · About · Contact across the top', 1, 'compass', 'A row of links to the main pages is a menu.'),
        item('&lt;a href="news.html"&gt;Read the news&lt;/a&gt;', 2, 'share', 'The a tag makes a link.'),
        item('&lt;img src="logo.png"&gt;', 3, 'image', 'The img tag shows an image.'),
        item('A large title at the top of a page section', 0, 'file', 'A title that names a section is a heading.'),
        item('A picture of the school building', 3, 'camera', 'Pictures are images.')
      ] },
      demon('I break every link on the page! Can you name the parts?'),
      battle
    ],
    quiz: [
      question('Which component helps visitors move between pages?', ['A menu', 'A footer note', 'A background colour', 'A paragraph'], 'A menu (navigation) lists links to the main pages.'),
      question('Clickable text that opens another page is called a:', ['link', 'heading', 'image', 'paragraph'], 'A hyperlink takes you to another page when clicked.'),
      question('Which HTML tag is used for the main heading?', ['<h1>', '<img>', '<a>', '<p>'], 'The h1 tag makes the main heading.'),
      question('What is the <img> tag used for?', ['To add an image', 'To make a link', 'To write a paragraph', 'To make a menu'], 'The img tag displays a picture.'),
      question('Which of these is a key component of a web page?', ['A heading', 'A keyboard', 'A router', 'A printer'], 'Headings, menus, links, text and images are key components.')
    ]
  },
  {
    id: 'gh-comp-ss1-wireframes',
    arc: 5,
    sec: '1.2.3',
    pages: 'NaCCA SHS 1 · pp. 43–46',
    hue: 120,
    horns: 3,
    eyes: 2,
    title: 'The Site Planner',
    topic: 'Draw and explain web outline plans using wireframes.',
    demon: 'The Blank Canvas',
    tech: 'Web Form · Technique: Plan Before You Build',
    scenes: [
      lesson('ghc-webpage', '<p>Before writing any code, good web designers make a <b>web outline plan</b>. It has two parts. A <b>site map</b> shows the pages of the website and how they are linked. A <b>wireframe</b> is a simple sketch of one page that shows where each part will go.</p>'),
      lesson('ghc-webpage', '<p>A wireframe shows the layout: the menu, the heading, the text, the images, the links and the footer. It is drawn with simple boxes and lines, not final colours or pictures. Showing it to others lets you agree on the layout and spot problems early, which saves time later.</p>'),
      lesson('ghc-webpage', '<p>You can draw a plan on paper or with a free drawing tool. Draw at least two plans, for example the home page and a page of news, and explain why each part sits where it does so that visitors can find things easily.</p>'),
      { type: 'order', title: 'Plan a website', steps: [
        both('Decide the purpose of the site and who will use it'),
        both('Draw the site map showing the pages'),
        both('Sketch a wireframe for each page'),
        both('Ask others for feedback and improve the plans'),
        both('Build the pages with HTML')
      ], hint: both('Plan first, ask for feedback, and build last.') },
      demon('I am a blank canvas with no plan! Can you design me?'),
      battle
    ],
    quiz: [
      question('What is a wireframe?', ['A simple sketch showing where the parts of a page will go', 'A finished website', 'A kind of computer virus', 'A network cable'], 'A wireframe plans the layout of a page.'),
      question('What does a site map show?', ['The pages of a website and how they are linked', 'The colour of the logo', 'The speed of the Internet', 'The cost of the computer'], 'It shows the structure of the whole website.'),
      question('Why make a wireframe before coding?', ['To plan the layout and find problems early', 'Because HTML cannot be typed', 'To make the computer faster', 'To delete old pages'], 'Planning saves time and avoids mistakes.'),
      question('A wireframe mainly focuses on:', ['layout', 'final photographs', 'music', 'the keyboard'], 'It shows where the parts go, not the final colours or pictures.'),
      question('Which step comes first when planning a website?', ['Decide its purpose and users', 'Publish the website', 'Add the final images', 'Test the live site'], 'You must know what the site is for and who will use it.')
    ]
  }
];

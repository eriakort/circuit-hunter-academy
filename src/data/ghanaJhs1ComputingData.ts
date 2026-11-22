import type { ArcInfo, Mission, SubjectInfo, UnitInfo } from '../types';

/**
 * Provisional Ghana JHS 1 Computing pilot.
 *
 * The direct NaCCA JHS Computing curriculum document could not be verified through
 * the available official-host or public-source checks. This module therefore uses
 * broad, foundational computing themes and no invented official strand or indicator IDs.
 * It must not be described as complete NaCCA/JHS Computing alignment.
 */
export const GHANA_JHS1_COMPUTING_SUBJECT: SubjectInfo = {
  id: 'ghjhs1computing',
  name: 'Computing · JHS 1',
  blurb: 'A provisional JHS 1 Computing introduction to computer systems, programming, data, digital content, accessibility and safe technology use.',
  meta: 'Ghana JHS 1 · Provisional Computing pilot · 16 missions',
  art: '<svg viewBox="0 0 120 120" width="100%" aria-hidden="true"><rect x="25" y="28" width="70" height="48" rx="8" fill="none" stroke="#6ad1ff" stroke-width="4"/><rect x="32" y="35" width="56" height="34" rx="3" fill="#111936" stroke="#ffd166" stroke-width="2"/><path d="M48 84h24M60 76v8" fill="none" stroke="#8a7bff" stroke-width="4" stroke-linecap="round"/><circle cx="60" cy="52" r="8" fill="#6ad1ff"/><path d="M60 44v16M52 52h16" stroke="#111936" stroke-width="2"/></svg>'
};

export const GHANA_JHS1_COMPUTING_UNIT: UnitInfo = {
  title: 'Computing Foundations',
  ch: 'JHS 1 · Provisional Computing pilot',
  subject: 'ghjhs1computing'
};

export const GHANA_JHS1_COMPUTING_ARCS: ArcInfo[] = [
  { n: 1, unit: 0, subject: 'ghjhs1computing', title: 'Computer Systems', pages: 'Provisional JHS 1 slice · source verification pending' },
  { n: 2, unit: 0, subject: 'ghjhs1computing', title: 'Digital Information and Files', pages: 'Provisional JHS 1 slice · source verification pending' },
  { n: 3, unit: 0, subject: 'ghjhs1computing', title: 'Algorithms and Instructions', pages: 'Provisional JHS 1 slice · source verification pending' },
  { n: 4, unit: 0, subject: 'ghjhs1computing', title: 'Safe and Responsible Computing', pages: 'Provisional JHS 1 slice · source verification pending' },
  { n: 5, unit: 0, subject: 'ghjhs1computing', title: 'Representing Information', pages: 'Provisional JHS 1 slice · source verification pending' },
  { n: 6, unit: 0, subject: 'ghjhs1computing', title: 'Networks and Communication', pages: 'Provisional JHS 1 slice · source verification pending' },
  { n: 7, unit: 0, subject: 'ghjhs1computing', title: 'Choosing Digital Applications', pages: 'Provisional JHS 1 slice · source verification pending' },
  { n: 8, unit: 0, subject: 'ghjhs1computing', title: 'Healthy and Responsible Device Use', pages: 'Provisional JHS 1 slice · source verification pending' },
  { n: 9, unit: 0, subject: 'ghjhs1computing', title: 'Programming with Blocks', pages: 'Provisional JHS 1 slice · source verification pending' },
  { n: 10, unit: 0, subject: 'ghjhs1computing', title: 'Collecting and Displaying Data', pages: 'Provisional JHS 1 slice · source verification pending' },
  { n: 11, unit: 0, subject: 'ghjhs1computing', title: 'Searching and Checking Information', pages: 'Provisional JHS 1 slice · source verification pending' },
  { n: 12, unit: 0, subject: 'ghjhs1computing', title: 'Working Together with Digital Tools', pages: 'Provisional JHS 1 slice · source verification pending' },
  { n: 13, unit: 0, subject: 'ghjhs1computing', title: 'Creating Clear Digital Documents', pages: 'Provisional JHS 1 slice · source verification pending' },
  { n: 14, unit: 0, subject: 'ghjhs1computing', title: 'Using Spreadsheet Formulas', pages: 'Provisional JHS 1 slice · source verification pending' },
  { n: 15, unit: 0, subject: 'ghjhs1computing', title: 'Making Digital Content Accessible', pages: 'Provisional JHS 1 slice · source verification pending' },
  { n: 16, unit: 0, subject: 'ghjhs1computing', title: 'Troubleshooting with Safe Checks', pages: 'Provisional JHS 1 slice · source verification pending' }
];

const q = (prompt: string, answers: string[], explanation: string) => ({ q: prompt, a: answers, why: explanation });
const lesson = (text: string) => ({ who: 's' as const, text });

export const GHANA_JHS1_COMPUTING_MISSIONS: Mission[] = [
  {
    id: 'gh-jhs1-computing-computer-systems',
    arc: 0, sec: 'Computer Systems', pages: 'Provisional JHS 1 slice · source verification pending',
    hue: 198, horns: 2, eyes: 2,
    title: 'The Computer Parts Pathfinder',
    topic: 'Identify common computer components and distinguish input, processing, output and storage.',
    demon: 'The Component Confuser',
    tech: 'System Form · First Technique: Follow Information',
    scenes: [
      lesson('<p>A computer is a system that receives data, processes it, stores it and produces output. Input devices include keyboards and mice. The processor carries out instructions. Output devices include monitors and printers. Storage keeps information for later use.</p>'),
      lesson('<p>Hardware is the physical equipment you can touch. Software is instructions and programs that tell hardware what to do. Neither is useful alone: hardware follows the instructions provided by software.</p>'),
      lesson('<p>A keyboard or camera may provide input. A program processes the input. The result may appear on a monitor, be printed or be saved in storage. For example, a typing app takes keystrokes, processes them and displays text.</p>'),
      lesson('<p>Use devices safely. Keep liquids away, support cables, do not force plugs and ask an adult or technician for help with damaged electrical equipment.</p>'),
      { who: 'd', vis: 'demon', text: 'I have mixed input, processing, output and storage. Trace the path of information and restore the system!' },
      { type: 'battle' }
    ],
    quiz: [
      q('Which of these is an input device?', ['Keyboard', 'Monitor', 'Printer', 'Speakers'], 'A keyboard sends data and instructions into the computer.'),
      q('What does software provide?', ['Instructions for hardware', 'More electrical power', 'A physical keyboard', 'Permanent cable support'], 'Software is a set of instructions that tells hardware what to do.'),
      q('Which device commonly produces a visible output?', ['Monitor', 'Mouse', 'Microphone', 'USB flash drive'], 'A monitor displays visual output.'),
      q('What is storage used for?', ['Keeping information for later use', 'Moving every key into a box', 'Replacing the processor', 'Heating the room'], 'Storage keeps data and files so they remain available after a session.'),
      q('What should you do with damaged electrical equipment?', ['Tell a responsible adult or technician', 'Pour water on it', 'Fix it while connected', 'Ignore it'], 'Damaged electrical equipment can be dangerous. Use an adult or trained technician.')
    ]
  },
  {
    id: 'gh-jhs1-computing-digital-information',
    arc: 1, sec: 'Digital Information and Files', pages: 'Provisional JHS 1 slice · source verification pending',
    hue: 42, horns: 2, eyes: 2,
    title: 'The File and Folder Guardian',
    topic: 'Create clear file names, organise folders and recognise that information can be represented digitally.',
    demon: 'The Lost File',
    tech: 'Information Form · Second Technique: Name and Organise',
    scenes: [
      lesson('<p>Digital information is represented as data. Text, images and sounds can all be stored as files. A file contains data and has a name and an extension that often describes its type, such as .txt or .jpg.</p>'),
      lesson('<p>Folders organise related files. A clear structure might separate School, Pictures and Music, with each folder containing a specific kind of information.</p>'),
      lesson('<p>Useful file names describe the content and date, such as <b>ScienceAssignment_2026-11-22.docx</b>. Avoid random names and avoid replacing or deleting a file unless you are sure it is no longer needed.</p>'),
      lesson('<p>Keep backups of important work when permitted. Close work safely and save it in the correct folder. Do not copy someone else’s personal or copyrighted work as your own.</p>'),
      { who: 'd', vis: 'demon', text: 'I scattered the files and removed their useful names. Organise the evidence and give every file a clear place!' },
      { type: 'battle' }
    ],
    quiz: [
      q('What is a folder used for?', ['Organising related files', 'Making hardware faster', 'Sending messages automatically', 'Replacing a password'], 'Folders group and organise related files.'),
      q('Which file name is most useful?', ['ScienceAssignment_2026-11-22.docx', 'file1.docx', 'newstuff.docx', 'aaa.docx'], 'A descriptive name and date help people identify and find the file.'),
      q('What often appears at the end of a file name?', ['A file extension', 'A password', 'A physical address', 'A battery level'], 'A file extension, such as .jpg or .txt, often indicates the file type.'),
      q('What should you do before deleting a file?', ['Check that it is no longer needed', 'Delete every nearby file', 'Rename it with a random name', 'Post it publicly'], 'Deleting the wrong file can lose important work. Check first and save backups when appropriate.'),
      q('What is a responsible way to use a classmate’s work?', ['Ask permission and credit the creator', 'Copy it and claim it as your own', 'Share it publicly without consent', 'Change the name and delete the origin'], 'Permission and attribution respect the creator and support responsible digital use.')
    ]
  },
  {
    id: 'gh-jhs1-computing-algorithms',
    arc: 2, sec: 'Algorithms and Instructions', pages: 'Provisional JHS 1 slice · source verification pending',
    hue: 166, horns: 2, eyes: 2,
    title: 'The Algorithm Route Maker',
    topic: 'Write a clear sequence of instructions, identify a decision and test an algorithm against examples.',
    demon: 'The Order Scrambler',
    tech: 'Logic Form · Third Technique: Sequence and Decide',
    scenes: [
      lesson('<p>An algorithm is a finite, ordered set of steps for solving a problem. A cooking recipe, a school register procedure or a set of directions can be described as algorithms.</p>'),
      lesson('<p>Good instructions use clear actions and a suitable order. To prepare a sandwich, for example, place bread on a plate, add a filling and place another slice on top. Each step should be understandable and achievable.</p>'),
      lesson('<p>A decision changes the next step. If it is raining, take an umbrella; otherwise leave the umbrella. This is a condition: the algorithm tests whether a statement is true or false.</p>'),
      lesson('<p>Test algorithms with examples. A sequence that works once may fail for another starting value or for an empty list. Finding and correcting a fault is debugging.</p>'),
      { who: 'd', vis: 'demon', text: 'I reversed the steps and hid the decision. Put the instructions in order and test them on a new example!' },
      { type: 'battle' }
    ],
    quiz: [
      q('What is an algorithm?', ['An ordered set of steps for solving a problem', 'A computer monitor', 'A type of file', 'A network cable'], 'An algorithm describes a finite sequence of actions.'),
      q('Which step is a condition?', ['If it is raining, take an umbrella', 'Add two numbers', 'Save the file', 'Turn off the monitor'], 'A condition tests whether a statement is true before choosing a step.'),
      q('Why should an algorithm be tested?', ['To find missing steps or errors', 'To make it longer forever', 'To remove all decisions', 'To change the problem'], 'Testing reveals whether the sequence produces the intended result and exposes errors.'),
      q('What is debugging?', ['Finding and correcting faults', 'Deleting every instruction', 'Naming a file', 'Printing the screen'], 'Debugging means identifying and correcting faults in a set of instructions or a program.'),
      q('Which is a useful first step for finding a route to school?', ['Identify the starting point and destination', 'Choose a random password', 'Install every available app', 'Delete the map'], 'A route algorithm needs a clear start, an end and valid steps between them.')
    ]
  },
  {
    id: 'gh-jhs1-computing-digital-safety',
    arc: 3, sec: 'Safe and Responsible Computing', pages: 'Provisional JHS 1 slice · source verification pending',
    hue: 324, horns: 2, eyes: 2,
    title: 'The Digital Citizenship Sentinel',
    topic: 'Use passwords and private information safely, evaluate online messages and respond to cyberbullying.',
    demon: 'The Imposter Message',
    tech: 'Safety Form · Fourth Technique: Pause, Check and Report',
    scenes: [
      lesson('<p>Personal information includes a full address, phone number, school details, passwords and private photographs. Share them only with a trusted adult or a person approved for the activity. Never post another person’s private information without permission.</p>'),
      lesson('<p>A strong password is not easy to guess and is kept private. Do not use “1234”, your name or a classmate’s name. Use a different strong password for important accounts when your teacher or device manager recommends it.</p>'),
      lesson('<p>Before responding to an unexpected message or link, pause and check. Does it ask for money or a password? Is the sender known? Could the offer be too good to be true? Tell a trusted adult instead of forwarding uncertain messages.</p>'),
      lesson('<p>Cyberbullying is repeated harmful behaviour through digital tools. Do not share or reply to insults. Save evidence only as instructed, block or report the sender using the platform’s rules, and tell a trusted adult or school safeguarding contact.</p>'),
      { who: 'd', vis: 'demon', text: 'I sent a secret offer and a cruel message. Check the clues, protect personal information and choose a safe response!' },
      { type: 'battle' }
    ],
    quiz: [
      q('Which information should usually be kept private?', ['A password', 'A public library name', 'A lesson title', 'A school subject'], 'Passwords are personal secrets and must not be shared.'),
      q('What should you do about an unknown message asking for a password?', ['Do not reply or share the password; tell a trusted adult', 'Send the password quickly', 'Forward it to classmates', 'Delete all other messages'], 'A password request may be a scam. Keep the password private and seek trusted help.'),
      q('Which password is harder to guess?', ['A long, unique password with several types of characters', 'Your first name', '123456', 'your-school'], 'A long, unique password is more difficult to guess or reuse in attacks.'),
      q('What is a safe response to cyberbullying?', ['Do not engage, report and tell a trusted adult', 'Retaliate with more insults', 'Share the bully’s private details', 'Forward threats to every contact'], 'Reporting, preserving evidence when instructed and seeking support are safer than retaliation.'),
      q('Before opening a suspicious link, what should you do?', ['Pause and check with a trusted adult or official source', 'Share it with everyone', 'Type your password to verify it', 'Disable security software'], 'Unexpected links can lead to scams or malicious pages. Verify safely before opening or sharing.')
    ]
  },
  {
    id: 'gh-jhs1-computing-binary-data',
    arc: 4, sec: 'Representing Information', pages: 'Provisional JHS 1 slice · source verification pending',
    hue: 214, horns: 2, eyes: 2,
    title: 'The Binary Message Decoder',
    topic: 'Explore how computers represent information using bits and how place value gives a binary pattern a number.',
    demon: 'The Bit Flipper',
    tech: 'Data Form · Fifth Technique: Read the Bit Pattern',
    scenes: [
      lesson('<p>Computers store and process information using physical states that can be represented as two choices, such as off and on. A <b>bit</b> is one binary digit: 0 or 1. Groups of bits can represent numbers and other kinds of data.</p>'),
      lesson('<p>Each position in a binary number has a place value. In an 8-bit pattern, the values from left to right are 128, 64, 32, 16, 8, 4, 2 and 1. Add the values whose bits are 1 to find the number.</p>'),
      lesson('<p>For example, 00001101 represents 8 + 4 + 1 = 13. A zero means that place value is not added. The same row of bits could also be used as part of a code for text, sound or a picture.</p>'),
      lesson('<p>Digital representation is useful because devices can store, copy and process patterns consistently. It is important to know that a bit pattern only has meaning when we know how it is being interpreted.</p>'),
      { who: 'd', vis: 'demon', text: 'I flipped several bits in the message. Use each place value to decode the number and explain what the pattern means!' },
      { type: 'battle' }
    ],
    quiz: [
      q('Which two values can a binary digit (bit) have?', ['0 and 1', '1 and 2', 'A and B only', '0 to 9'], 'A bit is a binary digit and can be either 0 or 1.'),
      q('What is the place value of the rightmost bit?', ['1', '2', '8', '128'], 'The rightmost place in a binary number has value 1.'),
      q('What number does 00000101 represent?', ['5', '4', '6', '10'], 'The 1 bits have values 4 and 1, so the number is 5.'),
      q('What does a 0 bit contribute to the value of a binary number?', ['Nothing from that place value', 'The next place value', 'Ten times the number', 'A letter automatically'], 'A zero means that place value is not added to the total.'),
      q('Why does a bit pattern need an agreed interpretation?', ['The same pattern can represent different kinds of information', 'Bits cannot be stored', 'Every pattern is a word', 'A computer cannot process numbers'], 'The meaning of data depends on the code or format used to interpret the bit pattern.')
    ]
  },
  {
    id: 'gh-jhs1-computing-networks',
    arc: 5, sec: 'Networks and Communication', pages: 'Provisional JHS 1 slice · source verification pending',
    hue: 190, horns: 2, eyes: 2,
    title: 'The Message Packet Courier',
    topic: 'Describe how connected devices exchange information and practise tracing a simple message route.',
    demon: 'The Route Tangler',
    tech: 'Network Form · Sixth Technique: Send and Reassemble',
    scenes: [
      lesson('<p>A computer network connects devices so they can exchange information or share resources. A school may connect computers to share a printer or access learning materials.</p>'),
      lesson('<p>When a device sends information over a network, the information may be divided into smaller pieces called packets. Each packet carries information that helps it reach the destination and be put back in the right order.</p>'),
      lesson('<p>Devices use different connection methods. Wi-Fi sends data using radio signals over a short range. Ethernet uses a cable. A mobile network connects devices through nearby cellular equipment. Each method has strengths and limitations.</p>'),
      lesson('<p>Only connect to networks you are allowed to use. Avoid entering passwords on an unfamiliar device, and ask a teacher or trusted adult if a connection request or pop-up seems unexpected.</p>'),
      { who: 'd', vis: 'demon', text: 'The class message has been split into packets. Choose a route and make sure they reach the right destination!' },
      { type: 'battle' }
    ],
    quiz: [
      q('What is a computer network?', ['Connected devices that can exchange information or share resources', 'A single unconnected keyboard', 'A folder of printed pages', 'A type of battery'], 'A network connects devices so they can communicate and share resources.'),
      q('Why might a message be divided into packets?', ['Smaller pieces can be sent and reassembled at the destination', 'Packets make all messages secret automatically', 'A packet replaces every computer', 'The message is deleted'], 'Networks can send smaller packets that are reassembled into the original information.'),
      q('Which connection commonly uses a cable?', ['Ethernet', 'Wi-Fi', 'Bluetooth only', 'Mobile signal'], 'Ethernet is a wired network connection.'),
      q('What is Wi-Fi commonly used for?', ['Connecting devices over a short-range wireless network', 'Printing without a printer', 'Replacing all passwords', 'Storing every file permanently'], 'Wi-Fi uses radio signals to connect devices over a local wireless network.'),
      q('What should you do if an unfamiliar network asks for personal details?', ['Stop and ask a teacher or trusted adult', 'Enter your password to continue', 'Share the request with everyone', 'Turn off every device in the school'], 'An unexpected request may be unsafe. Check with a responsible adult before sharing information.')
    ]
  },
  {
    id: 'gh-jhs1-computing-applications',
    arc: 6, sec: 'Choosing Digital Applications', pages: 'Provisional JHS 1 slice · source verification pending',
    hue: 38, horns: 2, eyes: 2,
    title: 'The Right Tool for the Task',
    topic: 'Match common digital applications to tasks and choose an appropriate way to save or share school work.',
    demon: 'The App Mix-Up',
    tech: 'Application Form · Seventh Technique: Match Tool to Purpose',
    scenes: [
      lesson('<p>An application is software designed to help people complete tasks. A word processor helps create text documents, a spreadsheet organises numbers and tables, and a presentation app arranges ideas into slides.</p>'),
      lesson('<p>Choose an application by asking what the task requires. A class survey might be recorded in a table and shown in a chart. A short report needs headings and paragraphs. A presentation should use brief points and helpful visuals.</p>'),
      lesson('<p>Applications can save work in different file formats. Choose a format that suits the next step: an editable document for continued work or a fixed-layout format when readers mainly need to view the final page.</p>'),
      lesson('<p>Before sharing a school file, check that it contains no private information and choose only the permission the recipient needs. If you are unsure, ask your teacher before uploading or sharing.</p>'),
      { who: 'd', vis: 'demon', text: 'I matched every task to the wrong app. Pick the tool that fits the work and prepare it for the right audience!' },
      { type: 'battle' }
    ],
    quiz: [
      q('Which application is best suited to writing a short report?', ['Word processor', 'Calculator only', 'Music player', 'File manager only'], 'A word processor is designed for writing and formatting text documents.'),
      q('Which application is useful for organising survey results in rows and columns?', ['Spreadsheet', 'Camera', 'Audio player', 'Drawing game'], 'A spreadsheet organises data in cells, rows and columns and can create charts.'),
      q('What is a good presentation slide usually like?', ['Brief points with a clear, relevant visual', 'A full essay in tiny text', 'A page of unrelated pictures', 'A slide with no message'], 'Short, clear points and relevant visuals help an audience follow a presentation.'),
      q('What should you check before sharing a document?', ['That it has no private information and sharing access is appropriate', 'That every person can edit it', 'That the file name is random', 'That the document is copied from someone else'], 'Check privacy and share only with the appropriate people and permissions.'),
      q('Why choose a file format carefully?', ['Different formats support different ways to edit or view work', 'Formats decide who is a good learner', 'Every format has identical features', 'A format changes the computer hardware'], 'Some formats are easier to edit, while others preserve a fixed layout for viewing.')
    ]
  },
  {
    id: 'gh-jhs1-computing-device-care',
    arc: 7, sec: 'Healthy and Responsible Device Use', pages: 'Provisional JHS 1 slice · source verification pending',
    hue: 146, horns: 2, eyes: 2,
    title: 'The Healthy Device Steward',
    topic: 'Practise safe device care, comfortable screen habits and responsible use of shared classroom equipment.',
    demon: 'The Device Wear-and-Tear',
    tech: 'Care Form · Eighth Technique: Use, Rest and Protect',
    scenes: [
      lesson('<p>Computers and tablets are shared tools. Use clean, dry hands, carry a device carefully and keep food and liquids away. Do not pull cables or force connectors into a port.</p>'),
      lesson('<p>Arrange a workstation so the screen is easy to see without leaning forward. Sit in a comfortable position, keep the keyboard and mouse within reach and ask for help adjusting equipment that does not fit.</p>'),
      lesson('<p>Long periods of screen use can make eyes or bodies feel tired. Take regular short breaks when your teacher allows, look away from the screen and stretch gently. Stop and tell an adult if something hurts.</p>'),
      lesson('<p>Respect shared devices and the people using them. Sign out of your account when asked, leave files organised and report faults instead of trying unsafe repairs.</p>'),
      { who: 'd', vis: 'demon', text: 'The workstation is uncomfortable and a cable is loose. Choose safer habits to protect the learner and the equipment!' },
      { type: 'battle' }
    ],
    quiz: [
      q('What should you keep away from a computer?', ['Food and liquids', 'A clean desk', 'A teacher’s instructions', 'A properly supported device'], 'Liquids and food can damage devices and create safety risks.'),
      q('What should you do if a cable or device is damaged?', ['Stop using it and tell a responsible adult', 'Pull the cable harder', 'Open the device while it is plugged in', 'Hide the damage'], 'A responsible adult or technician should assess damaged electrical equipment.'),
      q('What is a healthy screen habit?', ['Take regular short breaks when appropriate', 'Stare without moving for hours', 'Use a device through pain', 'Lean as close as possible'], 'Short breaks and a comfortable setup can reduce strain.'),
      q('How should a shared device be treated?', ['Carefully and respectfully', 'As personal property to alter freely', 'With food beside the keyboard', 'By changing other learners’ files'], 'Shared devices should be handled carefully and used respectfully.'),
      q('What should you do if a screen setup causes discomfort?', ['Adjust it with help and tell an adult if discomfort continues', 'Ignore pain', 'Move closer until it feels better', 'Change the electrical wiring'], 'A comfortable setup matters; seek adult help rather than ignoring pain or attempting repairs.')
    ]
  },
  {
    id: 'gh-jhs1-computing-programming',
    arc: 8, sec: 'Programming with Blocks', pages: 'Provisional JHS 1 slice · source verification pending',
    hue: 276, horns: 2, eyes: 2,
    title: 'The Block-Code Builder',
    topic: 'Arrange instructions in order and use a repeat instruction to describe a simple program.',
    demon: 'The Mixed-Up Blocks',
    tech: 'Program Form · Ninth Technique: Arrange, Repeat and Test',
    scenes: [
      lesson('<p>A computer program is a set of instructions written in a form a computer can follow. A visual block language lets a learner connect instruction blocks without needing to type every command.</p>'),
      lesson('<p>Programs follow an order. A simple classroom garden program might begin, repeat “water one plant” for each of three plants, then finish. Changing the order can change what the program does.</p>'),
      lesson('<p>A repeat instruction is a way to avoid writing the same action many times. The number of repeats matters: repeat too few times and some plants are missed; repeat too many times and the program may continue after the task is complete.</p>'),
      lesson('<p>Test a program by tracing each instruction and checking the result. If it does not do what you expect, find the block causing the problem, change it and test again. This is debugging.</p>'),
      { who: 'd', vis: 'demon', text: 'I scrambled the program blocks. Put the start, repeat and finish steps in order, then test how many plants are watered!' },
      { type: 'battle' }
    ],
    quiz: [
      q('What is a computer program?', ['Instructions written for a computer to follow', 'A type of monitor', 'A folder name', 'An internet connection'], 'A program is a set of instructions a computer can follow.'),
      q('Why use a repeat instruction?', ['To carry out the same action several times', 'To delete every instruction', 'To change a monitor into a keyboard', 'To make a file name longer'], 'A repeat instruction runs the same action multiple times.'),
      q('What might happen if a program repeats an action too few times?', ['Some items in the task may be missed', 'The computer becomes a printer', 'Every instruction is erased', 'The program automatically improves'], 'Too few repeats may mean the program does not complete the whole task.'),
      q('What is a sensible way to debug a program?', ['Trace its steps, find a faulty instruction, change it and test again', 'Change many blocks without checking', 'Delete the program immediately', 'Ignore the result'], 'Testing a change helps identify whether the faulty instruction was corrected.'),
      q('In a simple program, why does instruction order matter?', ['The result depends on which step happens first', 'All orders produce the same result', 'A program cannot have steps', 'Order changes the computer screen size'], 'Instructions are carried out in sequence, so changing their order can change the outcome.')
    ]
  },
  {
    id: 'gh-jhs1-computing-data',
    arc: 9, sec: 'Collecting and Displaying Data', pages: 'Provisional JHS 1 slice · source verification pending',
    hue: 34, horns: 2, eyes: 2,
    title: 'The Class Data Cartographer',
    topic: 'Organise a small set of data in a table, compare values and choose a clear way to display the results.',
    demon: 'The Chart Scrambler',
    tech: 'Data Form · Tenth Technique: Count, Compare and Show',
    scenes: [
      lesson('<p>Data are recorded facts or observations. A class might count how many learners choose different fruits for a snack. A clear question and consistent counting help make the results useful.</p>'),
      lesson('<p>A table places related values in rows and columns. Give each column a heading, such as “Fruit” and “Votes”, so a reader knows what each number means.</p>'),
      lesson('<p>A bar chart can compare categories. Each bar represents a category, and longer bars represent larger values. Label the categories and use a scale that makes the differences easy to see.</p>'),
      lesson('<p>Describe what the data show without guessing beyond the evidence. A survey of one class tells you about the learners who answered; it may not represent every learner in the school.</p>'),
      { who: 'd', vis: 'demon', text: 'I changed the chart labels and mixed the counts. Organise the data and explain what the largest value tells us!' },
      { type: 'battle' }
    ],
    quiz: [
      q('What is data?', ['Recorded facts or observations', 'A computer screen only', 'A password', 'A type of network cable'], 'Data are facts or observations that have been collected or recorded.'),
      q('Why should a table have clear column headings?', ['They explain what the values in each column mean', 'They make the numbers disappear', 'They replace the data', 'They make every value equal'], 'Headings help readers interpret each column correctly.'),
      q('In a bar chart, what does a longer bar usually show?', ['A larger value', 'A smaller font', 'A different password', 'An empty category'], 'Bar length represents the size of the value for its category.'),
      q('What can a survey of one class safely tell you?', ['What the learners who answered reported', 'What every learner in the country thinks', 'What will happen next year', 'Which answer is always correct'], 'A survey describes its respondents; a small group may not represent a larger population.'),
      q('What should you check when making a chart?', ['Labels and scale match the data', 'Every bar has the same value', 'The chart has no headings', 'The largest result is hidden'], 'Accurate labels and a suitable scale help communicate data honestly.')
    ]
  },
  {
    id: 'gh-jhs1-computing-search',
    arc: 10, sec: 'Searching and Checking Information', pages: 'Provisional JHS 1 slice · source verification pending',
    hue: 202, horns: 2, eyes: 2,
    title: 'The Information Trail Checker',
    topic: 'Use focused search terms and check who created a source, when it was published and whether its claims have evidence.',
    demon: 'The Rumour Repeater',
    tech: 'Research Form · Eleventh Technique: Search, Compare and Verify',
    scenes: [
      lesson('<p>A search engine helps find pages that match words or phrases. A focused search, such as “how to save water at school”, can be more useful than a very broad word like “water”.</p>'),
      lesson('<p>Before relying on a page, check who created it and why. Look for an author or organisation, a publication date and evidence that supports the claims.</p>'),
      lesson('<p>Compare important information with another trustworthy source. A result appearing near the top of a search list does not automatically make it accurate or suitable for your assignment.</p>'),
      lesson('<p>Use information responsibly: write ideas in your own words, record where they came from and ask permission before using someone else’s work. Do not enter private details into an unfamiliar website.</p>'),
      { who: 'd', vis: 'demon', text: 'A surprising claim is spreading online. Check the author, date and evidence before deciding whether to use it!' },
      { type: 'battle' }
    ],
    quiz: [
      q('Which is a more focused search phrase?', ['how to save water at school', 'water', 'everything', 'help'], 'A focused phrase gives the search engine clearer clues about the information needed.'),
      q('What is useful to check about an online source?', ['Who created it, when it was published and what evidence it gives', 'Only its colours', 'How many pictures it has', 'Whether it is the first result'], 'Author, date and supporting evidence help readers assess a source.'),
      q('Does the first search result have to be correct?', ['No, check its source and compare important claims', 'Yes, the first result is always correct', 'Yes, if it has a picture', 'No, but every later result is correct'], 'Search order does not guarantee accuracy or suitability.'),
      q('What should you do with ideas from a source?', ['Use your own words and record where the ideas came from', 'Copy them without credit', 'Remove the author’s name', 'Claim the ideas are your own'], 'Paraphrase and credit sources to show where information originated.'),
      q('What should you avoid entering into an unfamiliar website?', ['Private personal information', 'A public topic for research', 'A general search phrase', 'A school subject name'], 'Do not share private details with websites you do not know or trust.')
    ]
  },
  {
    id: 'gh-jhs1-computing-collaboration',
    arc: 11, sec: 'Working Together with Digital Tools', pages: 'Provisional JHS 1 slice · source verification pending',
    hue: 158, horns: 2, eyes: 2,
    title: 'The Teamwork Permission Keeper',
    topic: 'Plan a shared class task, select an appropriate access permission and communicate respectfully with collaborators.',
    demon: 'The Open-Link Oversharer',
    tech: 'Collaboration Form · Twelfth Technique: Share Carefully and Contribute',
    scenes: [
      lesson('<p>Digital tools can help a group write, organise ideas or prepare a presentation together. Agree on the task, share responsibilities and communicate respectfully.</p>'),
      lesson('<p>Shared files can have different permissions. A viewer can read a file, a commenter can add feedback, and an editor can change its contents. Give each person only the access they need for the task.</p>'),
      lesson('<p>A public link may allow people beyond your group to open a file. Use the sharing option your teacher approves, and do not include private information in a document shared with others.</p>'),
      lesson('<p>Good teamwork includes listening, crediting each person’s contribution and checking edits before submitting. If someone makes a mistake, discuss how to fix the work respectfully.</p>'),
      { who: 'd', vis: 'demon', text: 'The group file is open to everyone, but only one classmate needs to read it. Choose a safer permission and plan the teamwork!' },
      { type: 'battle' }
    ],
    quiz: [
      q('Which permission lets someone read a file without changing it?', ['Viewer', 'Editor', 'Owner of every device', 'Public poster'], 'A viewer can read a shared file but cannot edit its contents.'),
      q('What is a good sharing rule?', ['Give each collaborator only the access they need', 'Make every file public', 'Give everyone editing access automatically', 'Share private details in every document'], 'Using the minimum suitable permission helps protect shared work.'),
      q('What should a group agree on before using a shared document?', ['The task and each person’s responsibilities', 'That nobody may contribute', 'That one person gets all the credit', 'That the link must be public'], 'Clear roles help the group work together and contribute fairly.'),
      q('Why should a group credit each person’s contribution?', ['It recognises who helped create the work', 'It hides the source of the work', 'It makes sharing public', 'It changes the file format'], 'Crediting contributions is respectful and helps show how the work was made.'),
      q('When should you use a public sharing link for school work?', ['Only when the teacher approves and it is needed', 'For every private file', 'Whenever a stranger asks', 'Instead of checking permissions'], 'Public links can expose work widely; follow the teacher’s instructions and share only as needed.')
    ]
  },
  {
    id: 'gh-jhs1-computing-documents',
    arc: 12, sec: 'Creating Clear Digital Documents', pages: 'Provisional JHS 1 slice · source verification pending',
    hue: 212, horns: 2, eyes: 2,
    title: 'The Document Design Guide',
    topic: 'Organise a short document with a clear title, headings, readable paragraphs and consistent formatting.',
    demon: 'The Format Mixer',
    tech: 'Document Form · Thirteenth Technique: Structure and Review',
    scenes: [
      lesson('<p>A word processor can help create letters, reports and notes. Start by deciding who will read the document and what they need to learn from it.</p>'),
      lesson('<p>A clear title tells the reader what the document is about. Headings separate sections, and short paragraphs make ideas easier to follow.</p>'),
      lesson('<p>Use formatting consistently. A heading should look different from body text, but using too many fonts, colours or effects can distract from the message.</p>'),
      lesson('<p>Before sharing or printing, read the document again. Check spelling, names, headings and whether the layout is easy to read.</p>'),
      { who: 'd', vis: 'demon', text: 'I made every line look the same. Add a useful heading and make the class report easier to read!' },
      { type: 'battle' }
    ],
    quiz: [
      q('What should a document title help a reader understand?', ['The main topic of the document', 'The computer password', 'The printer model', 'The file size only'], 'A useful title tells the reader what the document is about.'),
      q('Why use headings in a report?', ['To organise sections and help readers find information', 'To replace every paragraph', 'To hide the topic', 'To make all text the same'], 'Headings divide a document into meaningful sections.'),
      q('What makes formatting easier to follow?', ['Using a few styles consistently', 'Changing font and colour on every line', 'Removing all spaces', 'Writing everything in capitals'], 'Consistent formatting supports readability without distracting from the content.'),
      q('What is a sensible final step before sharing a document?', ['Review its spelling, names and layout', 'Delete the title', 'Add unrelated effects', 'Share it before checking'], 'Review helps catch errors and make sure the document is clear.'),
      q('How can short paragraphs help?', ['They make separate ideas easier to read', 'They automatically prove every fact', 'They change the file type', 'They replace headings in every document'], 'Breaking long text into paragraphs makes ideas easier to follow.')
    ]
  },
  {
    id: 'gh-jhs1-computing-spreadsheets',
    arc: 13, sec: 'Using Spreadsheet Formulas', pages: 'Provisional JHS 1 slice · source verification pending',
    hue: 128, horns: 2, eyes: 2,
    title: 'The Spreadsheet Sum Keeper',
    topic: 'Read spreadsheet rows and columns, enter values and use a formula to calculate a total.',
    demon: 'The Cell Calculator',
    tech: 'Spreadsheet Form · Fourteenth Technique: Enter, Calculate and Check',
    scenes: [
      lesson('<p>A spreadsheet organises information in a grid. Each box is called a cell; rows run across and columns run down. A cell reference uses its column letter and row number, such as A1.</p>'),
      lesson('<p>A spreadsheet can store labels and numbers. For example, a class list might put item names in column A and quantities in column B.</p>'),
      lesson('<p>A formula tells the spreadsheet how to calculate a result. Many spreadsheet formulas begin with an equals sign. A sum formula can add a range of cells, such as <b>=SUM(B2:B4)</b>.</p>'),
      lesson('<p>Check that the formula includes the intended cells and that the result makes sense. If a number changes, a formula can update the total automatically.</p>'),
      { who: 'd', vis: 'demon', text: 'I changed the class supply counts. Update the cells and check whether the total formula still adds them correctly!' },
      { type: 'battle' }
    ],
    quiz: [
      q('What is a cell in a spreadsheet?', ['One box in the grid', 'A whole computer', 'A network cable', 'A file extension'], 'A cell is one box where spreadsheet data or a formula can be entered.'),
      q('How are spreadsheet columns commonly identified?', ['Letters', 'Weather names', 'Only colours', 'Passwords'], 'Spreadsheet columns are commonly labelled with letters.'),
      q('What does a formula do?', ['Calculates a result from values or other cells', 'Changes a screen into a keyboard', 'Names a folder', 'Connects a computer to Wi-Fi'], 'A formula performs a calculation using entered values or cell references.'),
      q('What does =SUM(B2:B4) ask a spreadsheet to do?', ['Add the values in cells B2 through B4', 'Delete row B', 'Rename cell B4', 'Display a picture'], 'The SUM function adds the values in the specified range.'),
      q('What should you do if a formula result looks wrong?', ['Check the values and the cells included in the formula', 'Assume it must be correct', 'Delete the headings', 'Share the sheet publicly'], 'Checking the input values and referenced cells can reveal a mistake.')
    ]
  },
  {
    id: 'gh-jhs1-computing-accessibility',
    arc: 14, sec: 'Making Digital Content Accessible', pages: 'Provisional JHS 1 slice · source verification pending',
    hue: 286, horns: 2, eyes: 2,
    title: 'The Accessible Content Builder',
    topic: 'Make digital content easier to understand with useful image descriptions, captions and readable choices.',
    demon: 'The Missing Description',
    tech: 'Access Form · Fifteenth Technique: Describe and Include',
    scenes: [
      lesson('<p>People use different ways to see, hear and understand digital information. A thoughtful creator makes content usable by as many people as possible.</p>'),
      lesson('<p>Alternative text describes the useful meaning of an image for someone who cannot see it. A concise description is more helpful than a vague label such as “picture”.</p>'),
      lesson('<p>Captions show spoken words and important sounds in a video. Clear headings and readable colour contrast can also help people find and understand information.</p>'),
      lesson('<p>Choose accessibility features that fit the content. Avoid relying on colour alone to communicate a result, and ask readers or a teacher whether your material is clear.</p>'),
      { who: 'd', vis: 'demon', text: 'My poster has an important picture but no description. Choose text that tells everyone what the picture shows!' },
      { type: 'battle' }
    ],
    quiz: [
      q('What is useful alternative text for an image?', ['A short description of the image’s important meaning', 'The word “picture” for every image', 'A list of unrelated colours', 'A hidden password'], 'Alternative text should briefly communicate the important meaning of the image.'),
      q('What do captions provide in a video?', ['Spoken words and important sounds as text', 'A larger screen', 'A new file name', 'A spreadsheet formula'], 'Captions make spoken content and relevant sounds available as text.'),
      q('Why should a chart not rely only on colour?', ['Some readers may not distinguish the colours', 'Colours always change the data', 'Charts cannot have labels', 'Colour replaces the values'], 'Labels or patterns provide another way to understand information.'),
      q('Which text is the most useful description of a class garden photo?', ['Learners watering rows of seedlings in the school garden', 'Picture', 'Image 3', 'A lovely thing'], 'A specific description explains the image content rather than giving a generic label.'),
      q('What is a good way to check whether content is clear?', ['Ask someone to review it and make improvements', 'Assume every reader uses it the same way', 'Remove all headings', 'Use smaller text everywhere'], 'Feedback can reveal barriers and help improve the content.')
    ]
  },
  {
    id: 'gh-jhs1-computing-troubleshooting',
    arc: 15, sec: 'Troubleshooting with Safe Checks', pages: 'Provisional JHS 1 slice · source verification pending',
    hue: 18, horns: 2, eyes: 2,
    title: 'The Safe Troubleshooting Scout',
    topic: 'Describe a computer problem, try simple safe checks and know when to stop and ask a responsible adult.',
    demon: 'The Guesswork Glitch',
    tech: 'Support Form · Sixteenth Technique: Observe, Check and Ask',
    scenes: [
      lesson('<p>Troubleshooting means working step by step to understand and solve a problem. First describe what is happening and what you expected to happen.</p>'),
      lesson('<p>Try simple checks that do not involve opening equipment: check whether an app is muted, look for a message on screen or ask whether the network is available.</p>'),
      lesson('<p>Change one thing at a time and observe what happens. This helps you learn which check made a difference instead of guessing.</p>'),
      lesson('<p>Stop and ask a teacher, adult or trained technician if equipment is damaged, unusually hot, smells strange or needs to be opened. Never touch exposed wires or attempt electrical repairs.</p>'),
      { who: 'd', vis: 'demon', text: 'A classroom computer is not working. Choose a safe first check, then decide when it is time to ask for help!' },
      { type: 'battle' }
    ],
    quiz: [
      q('What is a good first step when a computer problem occurs?', ['Describe what is happening and what you expected', 'Open the computer case', 'Pull out every cable', 'Guess and change many settings'], 'A clear description helps you choose a relevant check.'),
      q('Which is a simple safe check when an app has no sound?', ['Check the app volume or mute setting', 'Open the monitor', 'Touch exposed wiring', 'Pour water on the keyboard'], 'Checking an on-screen volume setting does not require opening equipment.'),
      q('Why change one thing at a time?', ['It helps show which check made a difference', 'It guarantees every problem disappears', 'It removes the need to observe', 'It makes the computer faster'], 'Changing one thing at a time makes it easier to understand the result.'),
      q('What should you do if equipment smells strange or is damaged?', ['Stop using it and tell a responsible adult', 'Open it while it is plugged in', 'Keep using it', 'Try to repair the wiring'], 'Damaged or unusual equipment may be unsafe; stop and get qualified help.'),
      q('Who should handle a repair that requires opening a computer?', ['A trained technician or responsible adult', 'Any learner with a paper clip', 'A classmate without supervision', 'Nobody should tell anyone'], 'Opening or repairing electrical equipment should be left to trained people.')
    ]
  }
];

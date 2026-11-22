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
  blurb: 'A provisional JHS 1 Computing introduction: computer systems, digital information, algorithms and safe, responsible technology use.',
  meta: 'Ghana JHS 1 · Provisional Computing pilot · 4 missions',
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
  { n: 4, unit: 0, subject: 'ghjhs1computing', title: 'Safe and Responsible Computing', pages: 'Provisional JHS 1 slice · source verification pending' }
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
  }
];

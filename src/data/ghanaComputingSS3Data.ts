import type { ArcInfo, Mission, SubjectInfo, UnitInfo } from '../types';

/**
 * Ghana NaCCA SHS 3 Computing (Computing Curriculum for Secondary Education, SHS 1–3, September 2023).
 * Same two strands and six sub-strands as SHS 1 and 2. Indicator codes (3.1.1 to 3.2.3) and printed
 * pages were read from the curriculum PDF; the mapping is in ghanaComputingSS3Alignment.ts, which also
 * marks teaching content that goes beyond the indicator wording. English only.
 */
export const GHANA_COMPUTING_SS3_SUBJECT: SubjectInfo = {
  id: 'ghcomputing3',
  name: 'Computing · SHS 3',
  blurb: 'Ghana NaCCA SHS 3 Computing: logic and shift operations, operating systems, network design and security, mass storage, artificial intelligence, web design and cyber security.',
  meta: 'Ghana NaCCA · SHS 3 · twenty-two learning missions',
  art: '<svg viewBox="0 0 120 120" width="100%" aria-hidden="true"><rect x="24" y="30" width="72" height="50" rx="6" fill="none" stroke="#7bdff2" stroke-width="5"/><path d="M42 98 H78 M60 80 V98" stroke="#ffd166" stroke-width="5" stroke-linecap="round"/><path d="M40 62 L52 50 L62 58 L80 42" fill="none" stroke="#38ef7d" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
};

export const GHANA_COMPUTING_SS3_UNITS: UnitInfo[] = [
  { title: 'Computer Architecture and Organisation', ch: 'SHS 3 · NaCCA pp. 75–88', subject: 'ghcomputing3' },
  { title: 'Computational Thinking (Programming Logic)', ch: 'SHS 3 · NaCCA pp. 89–101', subject: 'ghcomputing3' }
];

export const GHANA_COMPUTING_SS3_ARCS: ArcInfo[] = [
  { n: 1, unit: 0, subject: 'ghcomputing3', title: 'Data Storage and Manipulation', pages: 'NaCCA SHS 3 · pp. 75–79' },
  { n: 2, unit: 0, subject: 'ghcomputing3', title: 'Computer Hardware and Software', pages: 'NaCCA SHS 3 · pp. 80–83' },
  { n: 3, unit: 0, subject: 'ghcomputing3', title: 'Data Communication and Network Systems', pages: 'NaCCA SHS 3 · pp. 84–88' },
  { n: 4, unit: 1, subject: 'ghcomputing3', title: 'Algorithm and Data Structure', pages: 'NaCCA SHS 3 · pp. 89–92' },
  { n: 5, unit: 1, subject: 'ghcomputing3', title: 'App Development', pages: 'NaCCA SHS 3 · pp. 93–96' },
  { n: 6, unit: 1, subject: 'ghcomputing3', title: 'Web Technologies', pages: 'NaCCA SHS 3 · pp. 97–101' }
];

const question = (q: string, a: string[], why: string) => ({ q, a, why });
const lesson = (vis: string, text: string) => ({ who: 's' as const, vis, text });
const both = (s: string): [string, string] => [s, s];
const item = (n: string, c: number, i: string, why: string) => ({ n: both(n), c, i, why: both(why) });
const demon = (text: string) => ({ who: 'd' as const, vis: 'demon', text });
const battle = { type: 'battle' };
const round = (code: string, out: string, why: string) => ({ code: both(code), out: both(out), why: both(why) });
const P = 'NaCCA SHS 3 · ';

export const GHANA_COMPUTING_SS3_MISSIONS: Mission[] = [
  /* ------------------------------------------------------------------ 3.1.1 Data Storage and Manipulation */
  {
    id: 'gh-comp-ss3-logic-problems',
    arc: 0,
    sec: '3.1.1',
    pages: P + 'pp. 75–79',
    hue: 190,
    horns: 2,
    eyes: 2,
    title: 'The Logic Detective',
    topic: 'Determine critical points of logic operations and apply them to solve a problem.',
    demon: 'The Faulty Alarm',
    tech: 'Logic Form · Technique: Find the Critical Point',
    scenes: [
      lesson('ghc-gates', '<p>A logic problem is solved by turning the words into a <b>Boolean expression</b>. Each condition becomes an input that is 1 (true) or 0 (false). Then you join the conditions with <b>AND</b>, <b>OR</b> and <b>NOT</b>. The <b>critical point</b> is the input combination at which the output changes. For AND it is 1, 1. For OR it is 0, 0.</p>'),
      lesson('ghc-gates', '<p>Example: a school bell rings if it is a <b>weekday AND</b> the time is break time. Weekday = 1 and break = 1 gives 1, so the bell rings. Weekday = 0 gives 0 whatever the time is. Another example: a fan runs if the room is <b>hot OR crowded</b>. Hot = 0 and crowded = 0 is the only combination that switches the fan off.</p>'),
      { type: 'gates' },
      { type: 'sort', title: 'Which expression matches the problem?', cats: [both('AND'), both('OR'), both('AND with NOT')], items: [
        item('The gate opens only if the card is valid and the guard is present', 0, 'key', 'Both conditions must hold, so use AND.'),
        item('The generator starts if the mains is off or the voltage is low', 1, 'bolt', 'One condition is enough, so use OR.'),
        item('Sound the alarm if the door is open and the system is NOT disarmed', 2, 'warn', 'The system must be armed (NOT disarmed) while the door is open.'),
        item('Show the offer if the customer is a member or has a coupon', 1, 'chart', 'Either one is enough, so use OR.'),
        item('Allow a login only if the password is right and the account is NOT locked', 2, 'lock', 'The password must be right and the account must be unlocked.'),
        item('Print only if the paper is loaded and the ink is full', 0, 'printer', 'Both are needed, so use AND.')
      ] },
      demon('My alarm rings at the wrong times! Can you find the faulty rule?'),
      battle
    ],
    quiz: [
      question('What is the critical point of an AND gate?', ['The single input 1, 1, where the output becomes 1', 'The input 0, 0', 'Any input with a 1', 'There is none'], 'AND changes to 1 only when both inputs are 1.'),
      question('What is the critical point of an OR gate?', ['The single input 0, 0, where the output is 0', 'The input 1, 1', 'Any input with a 0', 'The input 0, 1'], 'OR gives 0 only when both inputs are 0.'),
      question('A fan runs if the room is hot OR crowded. Hot = 0, crowded = 1. Does the fan run?', ['Yes', 'No', 'Only at night', 'It cannot be known'], 'OR needs only one true input, and crowded is 1.'),
      question('Which words in a problem usually point to AND?', ['"both" and "only if ... and"', '"either"', '"at least one of"', '"not"'], 'AND needs every condition to be true.'),
      question('Login is allowed if the password is right AND the account is NOT locked. Password right = 1, locked = 1. What is the output?', ['0 (denied)', '1 (allowed)', '2', 'Error'], 'NOT locked is 0, so AND gives 0.')
    ]
  },
  {
    id: 'gh-comp-ss3-shift-rotate',
    arc: 0,
    sec: '3.1.1',
    pages: P + 'pp. 75–79',
    hue: 48,
    horns: 2,
    eyes: 3,
    title: 'The Bit Rotator',
    topic: 'Describe Rotation and Shift operations in the CPU and explain real-life applications.',
    demon: 'The Lost Bit',
    tech: 'Arithmetic Form · Technique: Shift or Wrap',
    scenes: [
      lesson('ghc-shiftrot', '<p>The CPU can move the bits of a number. A <b>shift</b> slides every bit one place. A <b>left shift</b> pushes the leftmost bit out (it is lost) and puts a 0 on the right. For 10110010 the left shift gives 01100100.</p>'),
      lesson('ghc-shiftrot', '<p>A <b>rotation</b> also moves every bit, but the bit that leaves one end comes back in at the other end, so no bit is lost. Rotating 10110010 left gives 01100101: the 1 that left on the left side returned on the right.</p>'),
      lesson('ghc-shiftrot', '<p>Real-life uses: shifting is a very fast way to <b>multiply by 2</b> (left shift) or <b>divide by 2</b> (right shift) when no bit falls off the end. Rotation is used in <b>encryption and checksums</b>, where bits must be mixed up without losing any, and in <b>graphics</b> and hardware control. Programs can use a left shift to build a number or pack several small values into one.</p>'),
      { type: 'sort', title: 'Shift or rotate?', cats: [both('Shift'), both('Rotate')], items: [
        item('The leftmost bit is lost and a 0 enters on the right', 0, 'code', 'A shift drops the bit that leaves.'),
        item('The bit that leaves one end enters at the other end', 1, 'loop', 'That wrap-around is a rotation.'),
        item('Used to multiply a number by 2 quickly', 0, 'gear', 'A left shift doubles the number (if no bit is lost).'),
        item('No bits are lost', 1, 'shield', 'A rotation keeps every bit.'),
        item('Used to mix bits in some encryption methods', 1, 'lock', 'Rotation scrambles bits without losing any.'),
        item('Used to divide a number by 2, dropping the remainder', 0, 'chart', 'A right shift halves the number.')
      ] },
      { type: 'predict', rounds: [
        round('print(5 << 1)', '10', 'A left shift by one place doubles 5.'),
        round('print(20 >> 2)', '5', 'A right shift by two places divides 20 by 4.'),
        round('x = 0b1001\nprint(format(((x << 1) | (x >> 3)) & 0b1111, "04b"))', '0011', 'Rotating 1001 left on 4 bits wraps the leading 1 to the right and gives 0011.'),
        round('print(1 << 3)', '8', 'Shifting 1 left three places gives 2 × 2 × 2 = 8.')
      ] },
      demon('A bit fell off the end of my register! Can you bring it back?'),
      battle
    ],
    quiz: [
      question('What happens to the bit that leaves the end in a shift?', ['It is lost', 'It re-enters at the other end', 'It doubles', 'It is stored in the hard drive'], 'A shift drops the bit that moves out.'),
      question('What happens in a rotation?', ['The bit that leaves one end re-enters at the other end', 'The number is multiplied by 10', 'All bits become 0', 'Bits are copied to the screen'], 'No bit is lost in a rotation.'),
      question('What is 10110010 shifted left by one place (8 bits)?', ['01100100', '01100101', '11011001', '10110010'], 'Drop the leading 1 and add a 0 on the right.'),
      question('What is 10110010 rotated left by one place?', ['01100101', '01100100', '01011001', '11001010'], 'The leading 1 wraps to the right end.'),
      question('A left shift by one place usually does what to a number?', ['It doubles it', 'It halves it', 'It squares it', 'It makes it 0'], 'Each place to the left is worth twice as much.')
    ]
  },
  {
    id: 'gh-comp-ss3-arithmetic-cpu',
    arc: 0,
    sec: '3.1.1',
    pages: P + 'pp. 75–79',
    hue: 12,
    horns: 3,
    eyes: 2,
    title: 'The ALU Engineer',
    topic: 'Discuss three major arithmetic operations in the computer and how overflow affects results.',
    demon: 'The Overflow Beast',
    tech: 'Arithmetic Form · Technique: Respect the Limit',
    scenes: [
      lesson('ghc-binadd', '<p>The <b>ALU</b> (arithmetic logic unit) in the CPU carries out arithmetic. Here we study three of its main jobs: <b>addition</b>, <b>subtraction</b> and <b>multiplication</b> (with division as its reverse). All of them work on binary numbers. Multiplying and dividing by 2 can be done with shifts, which are faster than ordinary multiplication.</p>'),
      lesson('ghc-binadd', '<p>A register holds a fixed number of bits. An 8-bit register can hold only 0 to 255. If a result is too big for the register, <b>overflow</b> happens and the extra bit is lost. For example, 200 + 100 = 300, but 300 does not fit in 8 bits. The register keeps 300 − 256 = 44. A program must check for overflow, or use more bits, to avoid wrong answers.</p>'),
      { type: 'sort', title: 'Which operation, or a problem?', cats: [both('Addition'), both('Subtraction'), both('Overflow')], items: [
        item('0101 + 0011 = 1000', 0, 'code', 'The carry bits move left to give 1000.'),
        item('1000 − 0011 = 0101', 1, 'code', 'Borrowing gives 8 − 3 = 5.'),
        item('200 + 100 does not fit in 8 bits', 2, 'warn', 'The result is bigger than 255, so it overflows.'),
        item('The bill total is calculated from the item prices', 0, 'chart', 'Totalling prices is addition.'),
        item('Find how much change to give back', 1, 'chart', 'Change is the amount paid minus the cost.'),
        item('A counter wraps from 255 back to 0', 2, 'loop', 'The 8-bit counter overflowed.')
      ] },
      { type: 'predict', rounds: [
        round('print(200 + 100)', '300', 'Python integers do not overflow, so it prints 300.'),
        round('print((200 + 100) % 256)', '44', 'The % 256 keeps only what an 8-bit register could hold.'),
        round('print(6 * 7)', '42', '6 multiplied by 7 is 42.'),
        round('print(255 + 1)', '256', 'In Python this is 256. An 8-bit register would wrap to 0.')
      ] },
      demon('I will make your numbers too big to fit! Can you handle overflow?'),
      battle
    ],
    quiz: [
      question('What is overflow?', ['A result too big for the register, so extra bits are lost', 'A result that is zero', 'A program that never ends', 'A full hard drive'], 'The register has a fixed number of bits.'),
      question('What is the largest number an 8-bit register can hold?', ['255', '256', '128', '100'], 'Eight bits hold 0 to 255 (2^8 − 1).'),
      question('Which part of the CPU carries out arithmetic?', ['The ALU', 'The monitor', 'The hard drive', 'The mouse'], 'The arithmetic logic unit does the calculations.'),
      question('What do 200 + 100 give in an 8-bit register that wraps around?', ['44', '300', '255', '0'], '300 − 256 = 44.'),
      question('Which operation is a left shift by one place a fast way to do?', ['Multiply by 2', 'Divide by 2', 'Add 1', 'Subtract 1'], 'Shifting left doubles the number.')
    ]
  },

  /* ------------------------------------------------------------------ 3.1.2 Computer Hardware and Software */
  {
    id: 'gh-comp-ss3-os-utility',
    arc: 1,
    sec: '3.1.2',
    pages: P + 'pp. 80–83',
    hue: 160,
    horns: 2,
    eyes: 2,
    title: 'The System Keeper',
    topic: 'Demonstrate the roles of Operating Systems and Utility Software as components of System Software.',
    demon: 'The Messy Disk',
    tech: 'Software Form · First Technique: Manage and Maintain',
    scenes: [
      lesson('ghc-software', '<p><b>System software</b> runs the computer and supports other programs. Its two components in this lesson are the <b>operating system</b> and <b>utility software</b>. The <b>operating system</b> (OS), for example Windows, Linux, macOS or Android, manages the hardware, memory, files and programs and gives the user an interface.</p>'),
      lesson('ghc-software', '<p><b>Utility software</b> helps to look after the computer. Examples are <b>antivirus</b> programs that remove malware, <b>disk cleanup</b> that deletes junk files, <b>backup</b> tools that copy files to safety, <b>file compression</b> that makes files smaller, and <b>disk defragmentation</b> for hard disks. The OS runs the computer. Utilities keep it healthy.</p>'),
      { type: 'sort', title: 'Operating system job or utility job?', cats: [both('Operating system'), both('Utility software')], items: [
        item('Share memory between running programs', 0, 'ram', 'Memory management is an OS job.'),
        item('Scan files and remove a virus', 1, 'shield', 'That is the job of antivirus, a utility.'),
        item('Show icons, windows and menus to the user', 0, 'monitor', 'The user interface is part of the OS.'),
        item('Compress a folder into a smaller zip file', 1, 'zip', 'File compression is a utility.'),
        item('Control the keyboard, mouse and printer through drivers', 0, 'gear', 'The OS manages the hardware.'),
        item('Copy files to an external drive as a backup', 1, 'hdd', 'Backup tools are utility software.')
      ] },
      demon('My disk is full of junk and no one cleans it! Can you restore order?'),
      battle
    ],
    quiz: [
      question('What does an operating system do?', ['Manages hardware, memory, files and programs', 'Only plays music', 'Only connects to Wi-Fi', 'Only prints'], 'The OS is the manager of the computer.'),
      question('Which of these is utility software?', ['Antivirus program', 'Web page', 'Spreadsheet formula', 'Keyboard'], 'Antivirus helps to protect and maintain the system.'),
      question('Which one is an operating system?', ['Android', 'Chrome', 'Word', 'Excel'], 'Android is an OS; the others are application programs.'),
      question('Operating systems and utility software are both which kind of software?', ['System software', 'Application software', 'Hardware', 'Web software'], 'System software runs and maintains the computer.'),
      question('What does a disk cleanup utility do?', ['Deletes junk files to free space', 'Adds more RAM', 'Writes web pages', 'Prints files'], 'It frees space on the disk.')
    ]
  },
  {
    id: 'gh-comp-ss3-os-install',
    arc: 1,
    sec: '3.1.2',
    pages: P + 'pp. 80–83',
    hue: 100,
    horns: 2,
    eyes: 3,
    title: 'The Installer',
    topic: 'Demonstrate installing an operating system.',
    demon: 'The Wiped Drive',
    tech: 'Software Form · Technique: Back Up, Then Install',
    scenes: [
      lesson('ghc-osinstall', '<p>Installing an operating system follows steps. First <b>check the requirements</b>: the processor, RAM and free disk space the OS needs. Second <b>back up your files</b>, because an install can erase the drive. Third <b>boot from the installation media</b>, such as a USB flash drive, by choosing it in the boot menu.</p>'),
      lesson('ghc-osinstall', '<p>Fourth <b>install to a drive</b>: choose the drive or partition, accept the licence and wait while the files are copied. The computer may restart more than once. Fifth <b>set up</b> the computer: choose the language and the time zone, create a user account with a password, and connect to the network. Finally install updates and drivers.</p>'),
      { type: 'order', title: 'Put the installation steps in order', steps: [
        both('Check that the computer meets the requirements'),
        both('Back up important files'),
        both('Boot from the installation USB drive'),
        both('Choose the drive and install the files'),
        both('Create a user account and install updates')
      ], hint: both('Prepare, protect your data, boot, install, then set up.') },
      { type: 'sort', title: 'Before or after installation?', cats: [both('Before'), both('After')], items: [
        item('Back up your files', 0, 'hdd', 'An install can erase a drive, so back up first.'),
        item('Check the RAM and disk space needed', 0, 'ram', 'Make sure the computer can run the OS.'),
        item('Install the updates', 1, 'update', 'Updates come once the OS is running.'),
        item('Create the user account', 1, 'user', 'The account is created during set-up.'),
        item('Make the installation USB drive', 0, 'usb', 'You need the media before you can boot from it.'),
        item('Install the antivirus', 1, 'shield', 'Install it when the system is running.')
      ] },
      demon('I wiped the drive before you backed it up! Can you recover?'),
      battle
    ],
    quiz: [
      question('Why should you back up files before installing an operating system?', ['The install can erase the drive', 'It makes the install faster', 'The OS needs the backup to start', 'It is not needed'], 'A fresh install may format the drive.'),
      question('What is the first step of an installation?', ['Check the system requirements', 'Delete the old OS', 'Create a user account', 'Install updates'], 'Make sure the computer can run the OS.'),
      question('How do you start the computer from installation media such as a USB drive?', ['Choose it in the boot menu', 'Plug it in and wait', 'Copy it to the desktop', 'Open it in the browser'], 'The boot menu selects the device to start from.'),
      question('What is done after the OS is installed?', ['Set up an account and install updates', 'Check the requirements', 'Buy a new computer', 'Boot from USB'], 'Set-up and updates finish the job.'),
      question('What does an installer do in the "install" step?', ['Copies the OS files to the chosen drive', 'Prints the files', 'Deletes the BIOS', 'Writes a web page'], 'The OS files are copied to the drive.')
    ]
  },
  {
    id: 'gh-comp-ss3-os-manage',
    arc: 1,
    sec: '3.1.2',
    pages: P + 'pp. 80–83',
    hue: 280,
    horns: 3,
    eyes: 2,
    title: 'The OS Manager',
    topic: 'Demonstrate managing an operating system: accounts, updates, storage and settings.',
    demon: 'The Outdated System',
    tech: 'Software Form · Technique: Keep It Healthy',
    scenes: [
      lesson('ghc-software', '<p>After installation the OS must be <b>managed</b>. <b>User accounts</b> let each person have their own files and settings, and an administrator account can change the system. <b>Updates and patches</b> fix errors and close security holes, so install them regularly. <b>Drivers</b> let the OS work with hardware such as a printer.</p>'),
      lesson('ghc-software', '<p>Other management tasks: use the <b>task manager</b> to see which programs use the processor and memory and to close one that has stopped responding. Use <b>settings</b> to change the display, the network and the power options. Check the <b>storage</b> to see how much disk space is free and remove programs you no longer use. Restart the computer from time to time.</p>'),
      { type: 'sort', title: 'Which management task is needed?', cats: [both('Update'), both('Task manager'), both('User accounts'), both('Storage')], items: [
        item('A security hole was fixed in a new release', 0, 'update', 'Patches arrive through updates.'),
        item('A program has frozen and must be closed', 1, 'bug', 'The task manager can end a program that stopped responding.'),
        item('Two students share a laptop and want separate files', 2, 'user', 'Each person should have an account.'),
        item('The disk is almost full', 3, 'hdd', 'Check storage and remove what you no longer need.'),
        item('The computer is slow because one program uses most of the memory', 1, 'ram', 'The task manager shows which program uses it.'),
        item('Only the owner should be able to install new programs', 2, 'key', 'Use an administrator account for the owner and standard accounts for others.')
      ] },
      demon('My system has not been updated in years! Can you patch me?'),
      battle
    ],
    quiz: [
      question('Why should an operating system be updated regularly?', ['Updates fix errors and close security holes', 'Updates make the screen bigger', 'Updates delete all files', 'They are not important'], 'Patches fix problems found after release.'),
      question('What can the task manager be used for?', ['Seeing running programs and closing one that froze', 'Writing web pages', 'Charging the battery', 'Printing'], 'It shows what the CPU and memory are doing.'),
      question('Why have separate user accounts?', ['Each person has their own files and settings', 'To use more electricity', 'To make the computer slow', 'To hide the keyboard'], 'Accounts keep users apart.'),
      question('What does a device driver do?', ['Lets the OS work with a piece of hardware', 'Drives a vehicle', 'Plays video', 'Creates user accounts'], 'The driver is the link between OS and hardware.'),
      question('What can you do when the disk is almost full?', ['Remove programs and files you no longer need', 'Add more updates', 'Rename the disk', 'Turn the monitor off'], 'Free up the space.')
    ]
  },

  /* ------------------------------------------------------------------ 3.1.3 Data Communication and Network Systems */
  {
    id: 'gh-comp-ss3-media-bandwidth',
    arc: 2,
    sec: '3.1.3',
    pages: P + 'pp. 84–88',
    hue: 190,
    horns: 2,
    eyes: 2,
    title: 'The Cable Engineer',
    topic: 'Consider transmission media and bandwidth when designing a network.',
    demon: 'The Slow Link',
    tech: 'Network Form · First Technique: Choose the Medium',
    scenes: [
      lesson('ghc-media', '<p>A <b>transmission medium</b> carries data between devices. <b>Copper cable</b> (such as twisted pair) is cheap and common and sends electric signals. <b>Fibre optic cable</b> sends light through glass: it is fast and works over long distances but costs more. <b>Wireless</b> media use radio waves, so no cable is needed, but the signal can be weaker and easier to interfere with.</p>'),
      lesson('ghc-media', '<p><b>Bandwidth</b> is the amount of data that can be sent each second, often measured in bits per second (for example Mbps). A high bandwidth is like a wide road: more data can pass at once. Bandwidth is shared, so many users on one link slow each person down.</p>'),
      { type: 'sort', title: 'Which medium suits the job?', cats: [both('Copper cable'), both('Fibre optic'), both('Wireless')], items: [
        item('Connect computers in one lab cheaply', 0, 'router', 'Copper cable is cheap and common for short links.'),
        item('Link two buildings far apart with very high speed', 1, 'globe', 'Fibre is fast over long distances.'),
        item('Let phones and laptops join without a cable', 2, 'wifi', 'Wireless needs no cable.'),
        item('Carry the main backbone of an internet provider', 1, 'cloud', 'Backbones use fibre for its capacity.'),
        item('Connect a tablet in a moving classroom', 2, 'touch', 'Wireless lets devices move.'),
        item('Send electric signals along twisted pairs', 0, 'bolt', 'Copper carries electric signals.')
      ] },
      demon('I choked the link! Nothing gets through! Can you widen it?'),
      battle
    ],
    quiz: [
      question('What is bandwidth?', ['The amount of data that can be sent each second', 'The width of a cable', 'The length of a network', 'The price of the internet'], 'It is measured in bits per second.'),
      question('Which medium sends data as light?', ['Fibre optic', 'Copper cable', 'Wireless', 'Coaxial'], 'Fibre optic cable carries pulses of light.'),
      question('Which medium needs no cables?', ['Wireless', 'Fibre', 'Copper', 'Twisted pair'], 'Radio waves carry the data.'),
      question('Why can a busy shared link feel slow?', ['The bandwidth is shared between many users', 'The cable is tired', 'The data gets older', 'Colours change'], 'Each user gets a smaller share.'),
      question('Which is usually the most expensive to install?', ['Fibre optic', 'Copper', 'Wireless router', 'USB'], 'Fibre is fast but costs more to install.')
    ]
  },
  {
    id: 'gh-comp-ss3-net-security',
    arc: 2,
    sec: '3.1.3',
    pages: P + 'pp. 84–88',
    hue: 12,
    horns: 3,
    eyes: 2,
    title: 'The Network Guardian',
    topic: 'Consider network security: passwords, internet safety, malware awareness, data backups and securing personal devices.',
    demon: 'The Open Door',
    tech: 'Network Form · Technique: Layered Defence',
    scenes: [
      lesson('ghc-security', '<p>A network must be protected in <b>layers</b>. <b>Passwords</b> should be long and different for each account. <b>Updates</b> close holes. <b>Antivirus and a firewall</b> block <b>malware</b> (harmful software such as viruses and ransomware). <b>Backups</b> let you recover if data is lost or locked.</p>'),
      lesson('ghc-security', '<p><b>Internet safety</b>: do not click unknown links or open unexpected attachments, and do not share personal details. <b>Securing personal devices</b>: use a screen lock, keep the software updated, install apps only from trusted stores and switch off Bluetooth and Wi-Fi when you do not need them. A common backup rule is <b>3-2-1</b>: three copies, on two kinds of media, with one copy kept in a different place.</p>'),
      { type: 'sort', title: 'Good practice or risky?', cats: [both('Good practice'), both('Risky')], items: [
        item('Use a long password that is different for each account', 0, 'key', 'A password used everywhere is a weak point.'),
        item('Click a link in a message that promises a free phone', 1, 'warn', 'Unknown links can install malware or steal your details.'),
        item('Keep a second copy of your files on another drive', 0, 'hdd', 'Backups protect against loss.'),
        item('Install apps from unknown websites', 1, 'bug', 'They may contain malware.'),
        item('Lock the phone screen with a PIN or fingerprint', 0, 'lock', 'It protects the device if it is lost.'),
        item('Share your password with a friend', 1, 'user', 'Anyone with the password can use your account.')
      ] },
      demon('I left the door wide open and the thief walked in! Can you lock up?'),
      battle
    ],
    quiz: [
      question('What is malware?', ['Harmful software such as a virus', 'A fast cable', 'A kind of keyboard', 'A web browser'], 'Malware is designed to harm or spy.'),
      question('Why do we keep backups?', ['To recover data if it is lost or damaged', 'To make files larger', 'To speed up the network', 'To print files'], 'A backup is a spare copy.'),
      question('What does the 3-2-1 backup rule say?', ['Three copies, on two kinds of media, one kept elsewhere', 'Three passwords, two users, one file', 'Three viruses, two copies', 'One copy in three places'], 'It spreads the risk across copies, media and places.'),
      question('Which is a good password habit?', ['Use a long, different password for each account', 'Use your name for all accounts', 'Share it with friends', 'Write it on the screen'], 'Reusing passwords makes one leak affect many accounts.'),
      question('Why should software be updated?', ['Updates close security holes', 'Updates delete viruses at once', 'They make the keyboard faster', 'They are never needed'], 'Attackers use known holes in old software.')
    ]
  },
  {
    id: 'gh-comp-ss3-two-designs',
    arc: 2,
    sec: '3.1.3',
    pages: P + 'pp. 84–88',
    hue: 48,
    horns: 2,
    eyes: 3,
    title: 'The Network Architect',
    topic: 'Design and explain two network systems considering topology, scalability, security, transmission media and bandwidth.',
    demon: 'The Crowded Network',
    tech: 'Network Form · Technique: Match Design to Need',
    scenes: [
      lesson('ghc-network', '<p>To design a network, answer these questions: <b>Topology</b>: how will devices be joined (star, bus, ring, mesh)? <b>Scalability</b>: can more devices be added later? <b>Security</b>: who may connect and how is data protected? <b>Media</b>: which cables or wireless links? <b>Bandwidth</b>: how much data will be sent each second?</p>'),
      lesson('ghc-network', '<p><b>Design 1, a school computer lab</b> (about 30 computers in one room): a <b>star</b> topology with a switch, cheap copper cables, a password for the server and a wired link to the router. It is easy to extend by adding another switch. <b>Design 2, a small shop</b> (a few devices): a single wireless router with a strong WPA password, a printer shared on the network and a daily backup. A star topology around the router is the simplest.</p>'),
      lesson('ghc-network', '<p>Designs are judged by <b>cost</b>, <b>speed</b>, <b>reliability</b> and <b>safety</b>. The lab needs speed and many connections. The shop needs low cost and easy use. The best design is the one that matches the need, not the one with the most equipment. These two designs are examples chosen for teaching, not the only correct answers.</p>'),
      { type: 'sort', title: 'Which design fits?', cats: [both('School lab'), both('Small shop')], items: [
        item('Thirty computers in one room need fast, reliable links', 0, 'monitor', 'Many devices and heavy use suit a wired star with a switch.'),
        item('A few devices and a customer tablet, low cost', 1, 'wifi', 'A single wireless router is enough.'),
        item('Add more computers later by adding a switch', 0, 'router', 'A star network scales by adding switches.'),
        item('Share one printer wirelessly', 1, 'printer', 'A router can share a printer.'),
        item('Wired links protect against interference from other signals', 0, 'gear', 'Cables are steadier than radio for many heavy users.'),
        item('Protect the network with a WPA password and a daily backup', 1, 'lock', 'Every network needs access control and backups.')
      ] },
      demon('Too many devices, not enough design! Can you plan me a network?'),
      battle
    ],
    quiz: [
      question('What does scalability mean for a network?', ['It can grow by adding more devices', 'It is very small', 'It has no cables', 'It is free'], 'A scalable design can be extended later.'),
      question('Which topology is the simplest to extend by adding one more device?', ['Star', 'Single bus', 'Ring', 'None'], 'Each device connects to the central switch.'),
      question('Which factor is a network security question?', ['Who may connect and how data is protected', 'How long the cable is', 'The colour of the router', 'The price of the desk'], 'Security is about access and protection.'),
      question('What decides the best design?', ['The needs of the users', 'The most expensive equipment', 'The longest cables', 'The newest colour'], 'A design must match the need.'),
      question('A small shop with a few devices most likely needs:', ['A single wireless router with a strong password', 'A fibre backbone', 'A mesh of 50 switches', 'No security'], 'Keep it simple and secure.')
    ]
  },
  {
    id: 'gh-comp-ss3-net-configure',
    arc: 2,
    sec: '3.1.3',
    pages: P + 'pp. 84–88',
    hue: 280,
    horns: 3,
    eyes: 2,
    title: 'The Connection Master',
    topic: 'Demonstrate how the system connects to the Internet: configure a hub, router or switch, with network addressing and security.',
    demon: 'The Lost Address',
    tech: 'Network Form · Technique: Address and Protect',
    scenes: [
      lesson('ghc-ipaddr', '<p>Every device on a network needs an <b>IP address</b>. An IPv4 address has four numbers from 0 to 255, such as <b>192.168.1.10</b>. The first part says which <b>network</b>, and the last part says which <b>device</b>. The <b>subnet mask</b> (for example 255.255.255.0) shows which part is the network. The <b>default gateway</b> is the address of the router that leads out to the Internet.</p>'),
      lesson('ghc-ipaddr', '<p>Devices can get addresses by hand (static) or automatically from the router through <b>DHCP</b>. To connect a network: plug the router into the Internet connection, join the <b>switch</b> to the router, and connect the computers to the switch or by Wi-Fi. A <b>hub</b> repeats data to every port, while a <b>switch</b> sends data only to the port that needs it. A <b>router</b> joins different networks, such as your LAN and the Internet.</p>'),
      lesson('ghc-ipaddr', '<p>Secure the router: <b>change the default admin password</b>, give the Wi-Fi a name and a strong password, and use <b>WPA2 or WPA3</b> security (not the old WEP). Keep the router software updated. Only allow devices you know.</p>'),
      { type: 'sort', title: 'Which device or setting?', cats: [both('Hub'), both('Switch'), both('Router')], items: [
        item('Repeats data to every connected port', 0, 'share', 'A hub does not choose; it sends to all ports.'),
        item('Sends data only to the device that needs it', 1, 'router', 'A switch learns which device is on which port.'),
        item('Joins your network to the Internet', 2, 'globe', 'A router connects different networks.'),
        item('Gives each device an address through DHCP', 2, 'wifi', 'Home and school routers usually run DHCP.'),
        item('Connects computers in a lab with many ports', 1, 'monitor', 'A switch is the usual choice for a lab.'),
        item('Old and simple, creates a lot of unnecessary traffic', 0, 'warn', 'That is why switches replaced hubs.')
      ] },
      { type: 'order', title: 'Connect a new school lab to the Internet', steps: [
        both('Connect the router to the Internet line'),
        both('Connect the switch to the router'),
        both('Connect the computers to the switch'),
        both('Set a strong Wi-Fi password and change the router admin password'),
        both('Test by opening a web page')
      ], hint: both('Build the link outwards from the Internet, then secure it and test.') },
      demon('My address is lost, so no packets can find me! Can you assign one?'),
      battle
    ],
    quiz: [
      question('What does an IP address identify?', ['A device on a network', 'A website colour', 'A cable', 'A password'], 'It tells other devices where to send data.'),
      question('What is the default gateway?', ['The router that leads to other networks and the Internet', 'The first computer', 'The Wi-Fi password', 'The keyboard'], 'Traffic for other networks is sent to it.'),
      question('What is the difference between a hub and a switch?', ['A hub sends data to all ports; a switch sends it only to the right port', 'There is no difference', 'A switch is slower', 'A hub joins networks'], 'A switch learns which port each device is on.'),
      question('What does DHCP do?', ['Gives IP addresses to devices automatically', 'Cleans the disk', 'Draws web pages', 'Prints'], 'The router hands out addresses.'),
      question('Which Wi-Fi security is better to use?', ['WPA2 or WPA3', 'None', 'WEP', 'A shared name only'], 'Older WEP can be broken easily.')
    ]
  },
  {
    id: 'gh-comp-ss3-topology-compare',
    arc: 2,
    sec: '3.1.3',
    pages: P + 'pp. 84–88',
    hue: 100,
    horns: 2,
    eyes: 3,
    title: 'The Topology Judge',
    topic: 'Discuss and compare the characteristics and advantages of at least three network topologies.',
    demon: 'The Broken Link',
    tech: 'Network Form · Technique: Compare and Decide',
    scenes: [
      lesson('ghc-topologies', '<p>A <b>topology</b> is the layout of a network. In a <b>star</b>, every device connects to a central switch. It is easy to add devices and one broken cable affects only one device, but if the switch fails the whole network fails. In a <b>bus</b>, all devices share one main cable. It uses little cable and is cheap, but a break in the main cable can stop the network and many users slow it.</p>'),
      lesson('ghc-topologies', '<p>In a <b>ring</b>, each device connects to two neighbours and data travels around the ring. It is orderly, but one failure can break the ring unless there is a second path. In a <b>mesh</b>, devices have many links to each other. If one link fails, data uses another, so it is very reliable, but it needs many cables and costs more. A full mesh of n devices needs n × (n − 1) ÷ 2 links.</p>'),
      lesson('ghc-topologies', '<p>Compare them by cost, reliability, speed and how easily they grow. No topology is best for everything, so the choice depends on the need.</p>'),
      { type: 'sort', title: 'Which topology is described?', cats: [both('Star'), both('Bus'), both('Ring'), both('Mesh')], items: [
        item('Every device connects to a central switch', 0, 'router', 'That is the star layout.'),
        item('All devices share one main cable', 1, 'tape', 'That is the bus layout.'),
        item('Each device connects to two neighbours in a loop', 2, 'loop', 'That is the ring layout.'),
        item('Many links, so data can take another path', 3, 'share', 'That is the mesh layout.'),
        item('If the central device fails, everything stops', 0, 'warn', 'The switch is a single point of failure.'),
        item('Most reliable but needs the most cables', 3, 'shield', 'More links mean more cost.')
      ] },
      demon('One broken link and my network falls apart! Can you pick the best layout?'),
      battle
    ],
    quiz: [
      question('Which topology uses a central switch?', ['Star', 'Bus', 'Ring', 'None'], 'Each device links to the centre.'),
      question('What is a weakness of the star topology?', ['If the central switch fails the network fails', 'It cannot be extended', 'It uses one cable', 'It is always slow'], 'The switch is a single point of failure.'),
      question('Which topology is the most reliable but needs the most cables?', ['Mesh', 'Bus', 'Star', 'Ring'], 'Many paths mean the data can go around a fault.'),
      question('How many links does a full mesh of 4 devices need?', ['6', '4', '8', '12'], '4 × 3 ÷ 2 = 6.'),
      question('What is an advantage of the bus topology?', ['It uses little cable and is cheap', 'It has no problem when the cable breaks', 'It is the fastest', 'It needs no cable'], 'One shared cable keeps costs low.')
    ]
  },

  /* ------------------------------------------------------------------ 3.2.1 Algorithm and Data Structure (mass storage) */
  {
    id: 'gh-comp-ss3-mass-storage',
    arc: 3,
    sec: '3.2.1',
    pages: P + 'pp. 89–92',
    hue: 160,
    horns: 2,
    eyes: 2,
    title: 'The Storage Keeper',
    topic: 'Identify and classify three mass storage media.',
    demon: 'The Full Drive',
    tech: 'Storage Form · First Technique: Classify the Media',
    scenes: [
      lesson('ghc-storage', '<p><b>Mass storage</b> keeps large amounts of data even when the power is off. It is also called secondary storage. There are three families. <b>Magnetic</b> media (hard disk drive, magnetic tape) store data as magnetised spots. <b>Optical</b> media (CD, DVD, Blu-ray) store data as tiny pits read by a laser. <b>Solid-state</b> media (SSD, flash drive, memory card) store data in chips with no moving parts.</p>'),
      lesson('ghc-storage', '<p>Mass storage is different from <b>main memory (RAM)</b>. RAM is fast but loses its data when the power goes off. Mass storage is slower but keeps your files, programs and photos. Know the three families and give one example of each.</p>'),
      { type: 'sort', title: 'Classify the storage medium', cats: [both('Magnetic'), both('Optical'), both('Solid-state')], items: [
        item('Hard disk drive (HDD)', 0, 'hdd', 'It stores data on spinning magnetic platters.'),
        item('DVD', 1, 'disc', 'A laser reads pits on the disc.'),
        item('USB flash drive', 2, 'usb', 'Flash memory has no moving parts.'),
        item('Magnetic tape', 0, 'tape', 'Tape is magnetic.'),
        item('Solid-state drive (SSD)', 2, 'ssd', 'An SSD is built from flash chips.'),
        item('CD-ROM', 1, 'disc', 'A CD is read by a laser.'),
        item('Memory card (SD card)', 2, 'sd', 'An SD card is flash storage.')
      ] },
      demon('My drive is full and I cannot tell what it is made of! Can you classify me?'),
      battle
    ],
    quiz: [
      question('What is a hard disk drive?', ['A magnetic mass storage device', 'An optical disc', 'A memory chip', 'An input device'], 'The HDD stores data magnetically.'),
      question('Which storage uses a laser to read data?', ['Optical disc', 'Hard disk', 'Flash drive', 'RAM'], 'CDs and DVDs use a laser.'),
      question('Which one has no moving parts?', ['SSD', 'HDD', 'DVD', 'Tape'], 'Solid-state drives use flash chips.'),
      question('What is the main difference between mass storage and RAM?', ['Mass storage keeps data when the power is off', 'RAM keeps data when power is off', 'There is none', 'Mass storage is smaller'], 'RAM loses its data when the power goes off.'),
      question('Which of these is solid-state storage?', ['A memory card', 'A CD', 'A hard disk', 'A tape'], 'Memory cards use flash chips.')
    ]
  },
  {
    id: 'gh-comp-ss3-storage-choice',
    arc: 3,
    sec: '3.2.1',
    pages: P + 'pp. 89–92',
    hue: 12,
    horns: 3,
    eyes: 2,
    title: 'The Storage Advisor',
    topic: 'Discuss mass storage media in terms of capacity, performance and reliability.',
    demon: 'The Slow Disk',
    tech: 'Storage Form · Technique: Capacity, Speed, Trust',
    scenes: [
      lesson('ghc-storage', '<p>Three questions help to choose storage. <b>Capacity</b>: how much can it hold? <b>Performance</b>: how fast can it read and write? <b>Reliability</b>: how likely is it to fail or lose data? A hard disk gives a lot of capacity for a low price but is slower and has moving parts that can wear out. An SSD is much faster and quieter and handles knocks better, but it costs more per gigabyte.</p>'),
      lesson('ghc-storage', '<p>Optical discs are cheap and easy to hand over but hold little and are slow, and scratches can damage them. Magnetic tape holds a great deal of data cheaply and suits long-term backups, but access is slow because it reads in order. Exact capacities and speeds change every year, so check the current figures before you buy. Also remember that a storage maker may count 1 GB as 1000 MB while the computer counts 1024 MB, so the capacity shown can look smaller.</p>'),
      { type: 'sort', title: 'Which medium suits the job?', cats: [both('HDD'), both('SSD'), both('Optical disc'), both('Tape')], items: [
        item('A laptop that must start fast and survive knocks', 1, 'ssd', 'SSDs are fast and have no moving parts.'),
        item('A big, cheap home archive of photos', 0, 'hdd', 'HDDs give a lot of space for the price.'),
        item('Give a student a movie to take home, very cheaply', 2, 'disc', 'Discs are cheap and portable.'),
        item('Long-term backup of a company\'s old records', 3, 'tape', 'Tape is cheap and holds a lot, even if slow.'),
        item('A server that needs very fast reads and writes', 1, 'ssd', 'Speed matters, so SSD.'),
        item('Lots of video storage on a small budget', 0, 'hdd', 'HDDs have the lowest cost per gigabyte.')
      ] },
      demon('My disk is slow and failing! Can you recommend the right storage?'),
      battle
    ],
    quiz: [
      question('What does storage "capacity" mean?', ['How much data it can hold', 'How fast it is', 'How long it lasts', 'Its colour'], 'Capacity is the amount of data it holds.'),
      question('Which storage is usually faster, an SSD or an HDD?', ['SSD', 'HDD', 'They are the same', 'Tape'], 'SSDs have no moving parts, so access is quick.'),
      question('Why can a hard disk fail after a knock?', ['It has moving parts', 'It has no power', 'It is optical', 'It has no data'], 'Moving parts can be damaged.'),
      question('Which medium is cheap for long-term backups of a large amount of data?', ['Magnetic tape', 'RAM', 'Cache', 'Monitor'], 'Tape is cheap and holds a lot, but is slow.'),
      question('Why can a "1 TB" drive show less than 1 TB on a computer?', ['The maker and the computer count units differently', 'The drive is broken', 'The computer is old', 'The data is deleted'], 'The maker counts 1000-based units and the computer 1024-based units.')
    ]
  },

  /* ------------------------------------------------------------------ 3.2.2 App Development (Artificial Intelligence) */
  {
    id: 'gh-comp-ss3-ai-concepts',
    arc: 4,
    sec: '3.2.2',
    pages: P + 'pp. 93–96',
    hue: 190,
    horns: 2,
    eyes: 3,
    title: 'The AI Explorer',
    topic: 'Describe the principles and components of AI: machine learning, neural networks and natural language processing.',
    demon: 'The Confused Machine',
    tech: 'AI Form · First Technique: Learn from Data',
    scenes: [
      lesson('ghc-neural', '<p><b>Artificial intelligence (AI)</b> is when a computer does tasks that usually need human intelligence, such as recognising a picture or understanding speech. Its main components here are <b>machine learning</b>, <b>neural networks</b> and <b>natural language processing</b>.</p>'),
      lesson('ghc-neural', '<p><b>Machine learning</b>: instead of writing every rule, we give the computer many examples (data) and it finds patterns by itself. A <b>neural network</b> is a model made of layers of connected nodes, loosely inspired by the brain. The input layer takes the data, hidden layers find patterns, and the output layer gives the answer. The connections are adjusted during <b>training</b>.</p>'),
      lesson('ghc-neural', '<p><b>Natural language processing (NLP)</b> lets computers work with human language: reading, translating, answering and summarising text or speech. AI is only as good as its data. If the training data is poor or unfair, the answers can be wrong or unfair too.</p>'),
      { type: 'sort', title: 'Which AI component?', cats: [both('Machine learning'), both('Neural network'), both('Natural language processing')], items: [
        item('A model learns to spot spam from thousands of examples', 0, 'mail', 'Learning patterns from data is machine learning.'),
        item('Layers of connected nodes with input, hidden and output layers', 1, 'layers', 'That describes a neural network.'),
        item('A program translates a sentence from English to French', 2, 'book', 'Working with human language is NLP.'),
        item('The system improves as it sees more examples', 0, 'chart', 'That is learning from data.'),
        item('A chatbot reads your question and writes a reply', 2, 'mic', 'This is language processing.'),
        item('Connection strengths are adjusted during training', 1, 'gear', 'Training changes the weights between nodes.')
      ] },
      demon('I was trained on bad data, so I confuse everything! Can you teach me better?'),
      battle
    ],
    quiz: [
      question('What is machine learning?', ['Computers finding patterns from examples', 'A faster computer', 'Typing code by hand', 'Reading a book'], 'The computer learns from data instead of fixed rules.'),
      question('What are the three kinds of layer in a simple neural network?', ['Input, hidden and output', 'Top, middle and bottom', 'Red, green and blue', 'Fast, slow and medium'], 'Data enters, patterns are found, and an answer comes out.'),
      question('What does natural language processing deal with?', ['Human language, in text or speech', 'Cables', 'Colours', 'Batteries'], 'NLP lets computers work with language.'),
      question('Why can an AI give unfair answers?', ['Its training data may be poor or unfair', 'It is angry', 'It is old', 'It has no power'], 'The data shapes what it learns.'),
      question('What is training in machine learning?', ['Adjusting the model using examples', 'Walking to school', 'Turning off the computer', 'Cleaning a disk'], 'The model improves through examples.')
    ]
  },
  {
    id: 'gh-comp-ss3-ai-applications',
    arc: 4,
    sec: '3.2.2',
    pages: P + 'pp. 93–96',
    hue: 48,
    horns: 2,
    eyes: 2,
    title: 'The AI Applier',
    topic: 'Describe real-world applications of AI: image recognition, language translation and virtual assistants.',
    demon: 'The Mislabelled Photo',
    tech: 'AI Form · Technique: Match Task to Tool',
    scenes: [
      lesson('ghc-learning', '<p><b>Image recognition</b> lets a computer identify what is in a picture, such as a face, a plant disease, or a number plate. <b>Language translation</b> turns text or speech from one language into another. A <b>virtual assistant</b> understands spoken or typed requests and answers or acts on them, such as setting an alarm or answering a question.</p>'),
      lesson('ghc-learning', '<p>Other uses include recommending videos or products, checking for fraud in banking and mobile payments, and helping farmers find crop diseases from a phone photo. AI can make mistakes, so a person should check important results. Think about <b>privacy</b> (it may use personal data), <b>fairness</b> (it should not treat groups unfairly) and <b>honesty</b> (do not present AI work as only your own).</p>'),
      { type: 'sort', title: 'Which AI application?', cats: [both('Image recognition'), both('Language translation'), both('Virtual assistant')], items: [
        item('A phone unlocks when it recognises your face', 0, 'camera', 'Identifying a face in an image is image recognition.'),
        item('An app turns an English sign into another language', 1, 'globe', 'Converting between languages is translation.'),
        item('You say "set an alarm for six" and it does so', 2, 'mic', 'A virtual assistant acts on a spoken request.'),
        item('A photo of a leaf is checked for a plant disease', 0, 'eye', 'The model recognises patterns in the image.'),
        item('Subtitles are generated in another language for a video', 1, 'video', 'This is translation of speech or text.'),
        item('A chatbot answers questions about the school timetable', 2, 'robot', 'It is a virtual assistant.')
      ] },
      demon('I labelled a goat as a car! Can you check my results?'),
      battle
    ],
    quiz: [
      question('What does image recognition do?', ['Identifies what is in a picture', 'Prints a picture', 'Stores a picture on tape', 'Draws a picture by hand'], 'The computer finds patterns in images.'),
      question('Which is an example of a virtual assistant?', ['A voice assistant that sets an alarm when asked', 'A keyboard', 'A hard disk', 'A router'], 'It understands requests and acts on them.'),
      question('What does language translation do?', ['Converts text or speech from one language to another', 'Compresses files', 'Charges a battery', 'Finds viruses'], 'It works with human languages.'),
      question('Why should important AI results be checked by a person?', ['AI can make mistakes', 'AI never works', 'AI is always right', 'People are slower'], 'AI can be wrong or unfair.'),
      question('Which is an AI concern?', ['Privacy of the personal data it uses', 'The weight of the mouse', 'The size of the desk', 'The colour of the cable'], 'AI often uses personal data.')
    ]
  },
  {
    id: 'gh-comp-ss3-conventional-intelligent',
    arc: 4,
    sec: '3.2.2',
    pages: P + 'pp. 93–96',
    hue: 280,
    horns: 3,
    eyes: 3,
    title: 'The System Comparer',
    topic: 'Analyse and compare conventional and intelligent systems in problem-solving, adaptability and learning capacity.',
    demon: 'The Rigid Rulebook',
    tech: 'AI Form · Technique: Compare the Approaches',
    scenes: [
      lesson('ghc-compare', '<p>A <b>conventional system</b> follows rules written by people. It does exactly what the program says and gives the same output for the same input. It is predictable and easy to test, and it works well for clear tasks such as calculating a total or sorting a list. It changes only when someone <b>reprograms</b> it.</p>'),
      lesson('ghc-compare', '<p>An <b>intelligent system</b> learns its rules from data. It can <b>adapt</b> to new data and handle messy tasks such as recognising speech or spotting fraud. It has <b>learning capacity</b>. But it can be wrong or unfair, may be hard to explain, and needs lots of good data. Compare them by <b>problem-solving</b> (fixed rules or learned patterns), <b>adaptability</b> and <b>learning capacity</b>.</p>'),
      { type: 'sort', title: 'Conventional or intelligent?', cats: [both('Conventional'), both('Intelligent')], items: [
        item('A payroll program that always follows the same formulas', 0, 'chart', 'Fixed, clear rules suit a conventional system.'),
        item('A spam filter that improves as users mark more messages', 1, 'mail', 'It learns from new examples.'),
        item('A calculator', 0, 'gear', 'It follows fixed rules every time.'),
        item('A speech recogniser that adapts to a new accent', 1, 'mic', 'It adapts through learning.'),
        item('Gives the same output for the same input every time', 0, 'shield', 'That is predictable behaviour.'),
        item('Can make mistakes that are hard to explain', 1, 'warn', 'Learned systems can be hard to explain.')
      ] },
      demon('I only know my rulebook, and the world has changed! Can you adapt?'),
      battle
    ],
    quiz: [
      question('How does a conventional system get its rules?', ['People write them', 'It learns them alone', 'They appear by luck', 'From the internet only'], 'A programmer writes every rule.'),
      question('What is a feature of an intelligent system?', ['It can learn and adapt from data', 'It never changes', 'It has no program', 'It is always right'], 'Learning capacity is its key feature.'),
      question('Which task suits a conventional system best?', ['Calculating exact totals', 'Recognising faces in a crowd', 'Understanding a new accent', 'Writing poems'], 'Clear, fixed rules suit conventional programs.'),
      question('What is a risk of an intelligent system?', ['It can be wrong or unfair if its data is poor', 'It uses no power', 'It cannot learn', 'It is predictable'], 'The learned rules depend on data.'),
      question('How does a conventional system change its behaviour?', ['By reprogramming it', 'By itself', 'By turning it off', 'By waiting'], 'A person must edit the program.')
    ]
  },

  /* ------------------------------------------------------------------ 3.2.3 Web Technologies */
  {
    id: 'gh-comp-ss3-web-design',
    arc: 5,
    sec: '3.2.3',
    pages: P + 'pp. 97–101',
    hue: 190,
    horns: 2,
    eyes: 2,
    title: 'The Web Designer',
    topic: 'Use web page editors and design principles; compare editors such as Notepad, Atom and VS Code.',
    demon: 'The Messy Page',
    tech: 'Web Form · First Technique: Plan the Page',
    scenes: [
      lesson('ghc-webpage', '<p>A <b>web page editor</b> is a program used to write web pages. A very simple one is <b>Notepad</b>: it shows plain text only, with no help. Code editors such as <b>Atom</b> and <b>Visual Studio Code (VS Code)</b> add colours for code, suggestions, error hints and tools, so writing HTML, CSS and JavaScript is easier. (Atom has been retired by its makers, so check which editor is current in your school.)</p>'),
      lesson('ghc-webpage', '<p><b>Design principles</b> make a page easy to use: a clear <b>layout</b>, a consistent <b>style</b> (the same fonts and colours), enough <b>contrast</b> so text can be read, <b>navigation</b> that is easy to find, <b>responsive</b> design that works on a phone and a laptop, and <b>fast loading</b> by keeping images small. Keep the page simple and put the most important content first.</p>'),
      { type: 'sort', title: 'Which design principle?', cats: [both('Readable'), both('Easy to navigate'), both('Responsive')], items: [
        item('Dark text on a light background', 0, 'eye', 'Good contrast makes text easier to read.'),
        item('A menu at the top that links to every section', 1, 'compass', 'Clear navigation helps visitors find things.'),
        item('The layout fits both a phone and a desktop screen', 2, 'monitor', 'That is responsive design.'),
        item('Headings that are larger than body text', 0, 'book', 'Size shows what is most important.'),
        item('A "Home" link on every page', 1, 'home', 'It lets visitors return easily.'),
        item('Images that resize with the screen width', 2, 'image', 'They adapt to the device.')
      ] },
      { type: 'predict', rounds: [
        round('print("<h1>" + "Welcome" + "</h1>")', '<h1>Welcome</h1>', 'The three strings are joined into one HTML heading.'),
        round('print("<p>" + "Hello" + "</p>")', '<p>Hello</p>', 'The paragraph tags wrap the text.'),
        round('print(len("<b>"))', '3', 'The text <b> has three characters.')
      ] },
      demon('My page is a mess of colours and no one can read it! Can you design it well?'),
      battle
    ],
    quiz: [
      question('Which editor shows plain text only, with no coding help?', ['Notepad', 'VS Code', 'Atom', 'A code editor'], 'Notepad is a basic text editor.'),
      question('What do editors such as VS Code add?', ['Colours for code, suggestions and error hints', 'A screen', 'More RAM', 'A printer'], 'They help you write and check code.'),
      question('What is responsive design?', ['A page that adapts to different screen sizes', 'A fast reply to email', 'A page that never loads', 'A page with sound only'], 'It works on phones and computers.'),
      question('Why is good contrast between text and background important?', ['So text is easy to read', 'To save power', 'To hide text', 'To change fonts'], 'Poor contrast makes reading hard.'),
      question('Which language gives a web page its structure?', ['HTML', 'Excel', 'Python only', 'BIOS'], 'HTML marks up headings, paragraphs and links.')
    ]
  },
  {
    id: 'gh-comp-ss3-web-multimedia',
    arc: 5,
    sec: '3.2.3',
    pages: P + 'pp. 97–101',
    hue: 100,
    horns: 2,
    eyes: 3,
    title: 'The Media Weaver',
    topic: 'Add multimedia to web pages and compare how editors support it.',
    demon: 'The Heavy Page',
    tech: 'Web Form · Technique: Media with Care',
    scenes: [
      lesson('ghc-webpage', '<p><b>Multimedia</b> means using more than text: images, audio, video and animation. In HTML, <b>&lt;img&gt;</b> shows an image, <b>&lt;audio&gt;</b> plays sound and <b>&lt;video&gt;</b> plays video. Always give an image an <b>alt</b> text that describes it, so people who cannot see it, and search engines, still understand it.</p>'),
      lesson('ghc-webpage', '<p>Media files can be large and slow the page down. Use a suitable <b>file format</b> and <b>compress</b> images, keep videos short, and do not start sound automatically. Use media you have the <b>right</b> to use: your own, or licensed for reuse. In an editor such as VS Code you can preview the page in a browser to check that the media loads and looks right.</p>'),
      { type: 'sort', title: 'Which tag or practice?', cats: [both('Image'), both('Audio or video'), both('Good practice')], items: [
        item('&lt;img src="photo.jpg" alt="School band"&gt;', 0, 'image', 'The img tag shows a picture.'),
        item('&lt;video src="lesson.mp4" controls&gt;', 1, 'video', 'The video tag plays video.'),
        item('Write alt text for every image', 2, 'eye', 'It helps people who cannot see the image.'),
        item('&lt;audio src="song.mp3" controls&gt;', 1, 'music', 'The audio tag plays sound.'),
        item('Compress large images so the page loads fast', 2, 'zip', 'Smaller files load faster.'),
        item('Use only pictures you have the right to use', 2, 'shield', 'Respect copyright.')
      ] },
      demon('My page is heavy with huge files and will not load! Can you lighten me?'),
      battle
    ],
    quiz: [
      question('Which tag shows an image in HTML?', ['<img>', '<audio>', '<p>', '<a>'], 'The img tag displays a picture.'),
      question('What is alt text for?', ['It describes an image for people and search engines that cannot see it', 'It changes the image colour', 'It resizes the image', 'It deletes the image'], 'It makes the image accessible.'),
      question('Why compress images on a web page?', ['So the page loads faster', 'So they disappear', 'So they print better', 'To add sound'], 'Smaller files load more quickly.'),
      question('Which tag plays sound in HTML?', ['<audio>', '<img>', '<table>', '<h1>'], 'Audio files are played with the audio tag.'),
      question('What should you check before using a picture from the internet?', ['That you have the right to use it', 'That it is large', 'That it is dark', 'Nothing'], 'Copyright protects creators.')
    ]
  },
  {
    id: 'gh-comp-ss3-ecommerce-site',
    arc: 5,
    sec: '3.2.3',
    pages: P + 'pp. 97–101',
    hue: 48,
    horns: 3,
    eyes: 2,
    title: 'The Shop Builder',
    topic: 'Design an e-commerce page with a product catalogue, shopping cart, secure payment integration and user account management.',
    demon: 'The Empty Cart',
    tech: 'Web Form · Technique: From Browsing to Paying',
    scenes: [
      lesson('ghc-ecommerce', '<p>An <b>e-commerce</b> site sells goods or services online. Its main parts are a <b>product catalogue</b> (pictures, names, prices and descriptions), a <b>shopping cart</b> that holds the chosen items and the total, <b>payment integration</b> that links the site to a payment service, and <b>user account management</b> for sign-up, login and order history.</p>'),
      lesson('ghc-ecommerce', '<p><b>Security</b> is essential. The site must use <b>HTTPS</b>, so data is encrypted. Card and mobile money details should be handled by a trusted payment provider and not stored on the page. Passwords must be stored safely and never shown. A good design also has clear prices, easy search, a simple checkout and a confirmation message. These parts are standard teaching content, not an instruction to build a live shop.</p>'),
      { type: 'order', title: 'Put the shopping journey in order', steps: [
        both('Browse the product catalogue'),
        both('Add an item to the shopping cart'),
        both('Log in or create an account'),
        both('Pay securely through the payment provider'),
        both('See the order confirmation')
      ], hint: both('Choose, collect, identify, pay, confirm.') },
      { type: 'sort', title: 'Which part of the shop?', cats: [both('Catalogue'), both('Cart'), both('Payment'), both('Account')], items: [
        item('Photos, names and prices of products', 0, 'image', 'This is the catalogue.'),
        item('Shows the chosen items and the total', 1, 'table', 'The cart holds what you picked.'),
        item('Sends your card details safely to the provider', 2, 'lock', 'Payment integration must be secure.'),
        item('Remembers your orders and delivery address', 3, 'user', 'Account management stores user details.'),
        item('Lets you search by category', 0, 'search', 'Search helps browsing the catalogue.'),
        item('Change the quantity or remove an item', 1, 'update', 'The cart can be edited before paying.')
      ] },
      demon('My cart keeps emptying and no one can pay! Can you fix the shop?'),
      battle
    ],
    quiz: [
      question('What is a product catalogue?', ['A list of products with pictures, names and prices', 'A payment method', 'A password', 'A cable'], 'It is the shop window of the site.'),
      question('What does a shopping cart do?', ['Holds the chosen items and the total', 'Cleans the disk', 'Creates the website', 'Sends emails only'], 'The cart is where you collect items before paying.'),
      question('Why should an e-commerce site use HTTPS?', ['It encrypts data, so details are protected', 'It makes pages look blue', 'It adds products', 'It reduces prices'], 'Encryption protects personal and payment data.'),
      question('What should happen to card details?', ['A trusted payment provider handles them securely', 'They are shown on the page', 'They are emailed in plain text', 'They are shared with other users'], 'Never expose payment details.'),
      question('What is user account management for?', ['Sign-up, login and order history', 'Printing', 'Choosing a screen', 'Cooling the computer'], 'Accounts give each customer their own details.')
    ]
  },
  {
    id: 'gh-comp-ss3-cyber-goals',
    arc: 5,
    sec: '3.2.3',
    pages: P + 'pp. 97–101',
    hue: 12,
    horns: 3,
    eyes: 3,
    title: 'The Cyber Sentinel',
    topic: 'Basic cyber security: the goals of confidentiality, integrity, availability, authentication, authorization and auditing, and the main threats.',
    demon: 'The Intruder',
    tech: 'Security Form · First Technique: Know the Goals',
    scenes: [
      lesson('ghc-cybergoals', '<p><b>Cyber security</b> protects computers, networks and data from attack. It has six goals. <b>Confidentiality</b>: only the right people can see the data. <b>Integrity</b>: data is not changed without permission. <b>Availability</b>: data and systems are ready when needed. <b>Authentication</b>: proving who you are, for example with a password. <b>Authorization</b>: deciding what you may do after you are identified. <b>Auditing</b>: keeping a record of who did what.</p>'),
      lesson('ghc-cybergoals', '<p>The main <b>threats</b> are <b>malware</b> (harmful software), <b>phishing</b> (fake messages that trick you into giving details or clicking a link) and <b>social engineering</b> (tricking a person, rather than the machine, into giving access). Attackers often go after people, because a person can be easier to fool than a computer.</p>'),
      { type: 'sort', title: 'Which security goal?', cats: [both('Confidentiality'), both('Integrity'), both('Availability'), both('Authentication'), both('Authorization'), both('Auditing')], items: [
        item('Only the account holder can read their exam results', 0, 'lock', 'Keeping data secret is confidentiality.'),
        item('A grade cannot be changed without permission', 1, 'shield', 'Data must stay correct and unaltered.'),
        item('The school portal is working during registration week', 2, 'power', 'Systems must be ready when needed.'),
        item('The system asks for a password to prove who you are', 3, 'key', 'Proving identity is authentication.'),
        item('A student can view grades but only a teacher can edit them', 4, 'user', 'Deciding what each person may do is authorization.'),
        item('A log shows who changed a record and when', 5, 'file', 'A record of actions is auditing.')
      ] },
      demon('I slipped past your password and nobody noticed! Can you hold the six goals?'),
      battle
    ],
    quiz: [
      question('What does confidentiality mean?', ['Only the right people can see the data', 'The data is large', 'The data is fast', 'The data is deleted'], 'Confidentiality is about keeping data secret.'),
      question('What is authentication?', ['Proving who you are', 'Deciding what you may do', 'Keeping a log', 'Backing up data'], 'A password is one way to authenticate.'),
      question('What is the difference between authentication and authorization?', ['Authentication proves identity; authorization decides what you may do', 'They are the same', 'Authorization proves identity; authentication decides access', 'Neither matters'], 'First prove who you are, then check what you may do.'),
      question('What is social engineering?', ['Tricking a person into giving access or information', 'Building a social media site', 'Installing a cable', 'A kind of hardware'], 'It targets the person, not the machine.'),
      question('Which goal does a log of who changed a record support?', ['Auditing', 'Availability', 'Compression', 'Bandwidth'], 'An audit trail shows who did what.')
    ]
  },
  {
    id: 'gh-comp-ss3-cyber-protection',
    arc: 5,
    sec: '3.2.3',
    pages: P + 'pp. 97–101',
    hue: 160,
    horns: 2,
    eyes: 2,
    title: 'The Shield Maker',
    topic: 'Apply cyber security best practices: protect personal information, privacy settings, HTTPS, passwords, updates, two-factor authentication, VPNs and anti-malware.',
    demon: 'The Stolen Password',
    tech: 'Security Form · Technique: Practise Safe Habits',
    scenes: [
      lesson('ghc-2fa', '<p>Good habits protect you. <b>Protect personal information</b>: share as little as possible, and check the <b>privacy settings</b> of apps and social media. Use <b>HTTPS</b> sites (look for the padlock) when you log in or pay. Use <b>strong passwords</b>: long, unique, and not based on your name or birth date. Keep software <b>updated</b> with patches. Use <b>anti-malware</b> software.</p>'),
      lesson('ghc-2fa', '<p><b>Two-factor authentication (2FA)</b> asks for a second proof, such as a code sent to your phone, in addition to your password. A stolen password alone is then not enough. A <b>VPN</b> (virtual private network) encrypts your connection and is useful on public Wi-Fi, but it does not make you completely safe. Never share your codes or your PIN with anyone.</p>'),
      { type: 'sort', title: 'Which protection?', cats: [both('Password'), both('2FA'), both('Updates'), both('VPN or HTTPS')], items: [
        item('Use a long phrase that is different for every account', 0, 'key', 'A long, unique password is hard to guess.'),
        item('A code is sent to your phone when you log in', 1, 'update', 'That is a second factor.'),
        item('Install the latest security patch', 2, 'bug', 'Patches close known holes.'),
        item('The padlock shows the connection is encrypted', 3, 'lock', 'HTTPS encrypts the data in transit.'),
        item('A stolen password cannot log in without your phone', 1, 'shield', 'The second factor protects the account.'),
        item('Encrypt traffic on public Wi-Fi', 3, 'vpn', 'A VPN encrypts your connection.')
      ] },
      demon('I stole your password! Can you stop me getting in?'),
      battle
    ],
    quiz: [
      question('What is two-factor authentication?', ['A second proof such as a code, in addition to your password', 'Using two passwords that are the same', 'Using two computers', 'Two antivirus programs'], '2FA means a password alone is not enough.'),
      question('Which password is strongest?', ['A long phrase unique to the account', 'password123', 'your name', 'your birth date'], 'Long and unique passwords are hardest to guess.'),
      question('What does HTTPS do?', ['Encrypts data between your device and the website', 'Makes the page faster', 'Draws the page', 'Removes ads'], 'It protects data sent over the network.'),
      question('Why keep software updated?', ['Patches close security holes', 'It makes the screen brighter', 'It deletes the files', 'It saves paper'], 'Attackers use known holes.'),
      question('What can a VPN do on public Wi-Fi?', ['Encrypt your connection', 'Make you immune to all attacks', 'Speed up the Wi-Fi', 'Remove viruses'], 'It helps, but it is not complete protection.')
    ]
  },
  {
    id: 'gh-comp-ss3-phishing',
    arc: 5,
    sec: '3.2.3',
    pages: P + 'pp. 97–101',
    hue: 280,
    horns: 3,
    eyes: 3,
    title: 'The Phishing Hunter',
    topic: 'Recognise phishing and social engineering, and respond safely.',
    demon: 'The Bait',
    tech: 'Security Form · Technique: Spot the Red Flags',
    scenes: [
      lesson('ghc-phish', '<p><b>Phishing</b> is a fake message that pretends to come from a trusted source, such as a bank or a mobile money company, to trick you into giving a password, PIN or money. Look for red flags: an <b>odd sender</b> address, an <b>urgent threat</b> ("your account will close!"), a request for a <b>PIN or password</b>, and a <b>fake link</b> that does not match the real website.</p>'),
      lesson('ghc-phish', '<p>What to do: <b>do not click</b> the link or open the attachment, do not reply with personal details, and <b>report</b> the message. If in doubt, contact the real organisation using a number or address you already trust. A real bank or mobile money company will not ask you for your PIN by message or call. Phishing also arrives by SMS and phone calls. Tell a teacher, parent or friend so they do not fall for it.</p>'),
      { type: 'sort', title: 'Red flag or normal?', cats: [both('Red flag'), both('Looks normal')], items: [
        item('"Your account will close in one hour unless you reply with your PIN"', 0, 'warn', 'An urgent threat and a request for a PIN are both red flags.'),
        item('A link that does not match the real website address', 0, 'search', 'Fake links lead to copy-cat sites.'),
        item('A message from a classmate you know about tonight\'s homework', 1, 'mail', 'No request for secrets and a known sender.'),
        item('An email from an unknown address saying you won a prize', 0, 'mail', 'Prizes that you did not enter for are a classic bait.'),
        item('A calendar reminder you created yourself', 1, 'calendar', 'You set it up, so it is not suspicious.'),
        item('A caller asks for your one-time code "to protect your account"', 0, 'key', 'Real staff never ask for your codes.')
      ] },
      demon('Click my link! You have won a prize! Can you resist the bait?'),
      battle
    ],
    quiz: [
      question('What is phishing?', ['A fake message that tricks you into giving details', 'A kind of fishing sport', 'A faster network', 'A disk repair tool'], 'Attackers pretend to be trusted sources.'),
      question('Which is a red flag in a message?', ['An urgent threat and a request for your PIN', 'A greeting with your name', 'Correct spelling', 'A long message'], 'Urgency and secret requests are typical tricks.'),
      question('What should you do with a suspicious link?', ['Do not click it and report the message', 'Click it quickly', 'Forward it to everyone', 'Reply with your details'], 'Avoid and report.'),
      question('Who may ask you for your PIN by message?', ['Nobody legitimate', 'Your bank', 'Your mobile money company', 'A prize winner'], 'Real organisations do not ask for PINs by message.'),
      question('What is social engineering?', ['Tricking people to get access or information', 'Building a social app', 'Joining a club', 'Writing code'], 'It targets human trust.')
    ]
  }
];

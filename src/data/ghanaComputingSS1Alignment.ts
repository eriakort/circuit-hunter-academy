/**
 * Alignment of the SHS 1 Computing missions to the NaCCA "Computing Curriculum for Secondary
 * Education (SHS 1–3)", September 2023. Indicator codes, indicator wording and printed page
 * numbers were checked against the full curriculum PDF supplied by the project owner.
 * `elaboration` names teaching content that goes beyond the indicator wording (examples, extra
 * terms and activities). A subject teacher should still check these against the teacher manual.
 */
export interface ComputingAlignment {
  missionId: string;
  /** Sub-strand code, e.g. 1.1.1 */
  section: string;
  /** Indicator codes. `LO` means the learning outcome rather than a single indicator. */
  indicators: string[];
  pages: string;
  elaboration: string;
}

export const GHANA_COMPUTING_SS1_ALIGNMENT: ComputingAlignment[] = [
  { missionId: 'gh-comp-ss1-bit-patterns', section: '1.1.1', indicators: ['1.1.1.LI.1'], pages: 'pp. 23–26', elaboration: 'Binary place values, the ASCII example (A = 65) and the idea of images and sound as numbers are teaching examples.' },
  { missionId: 'gh-comp-ss1-cache-memory', section: '1.1.1', indicators: ['1.1.1.LI.2'], pages: 'pp. 23–26', elaboration: 'The memory ladder, cache hit and miss, and clearing the browser cache are teaching examples around the browser-opening context.' },
  { missionId: 'gh-comp-ss1-cpu-parts', section: '1.1.1', indicators: ['1.1.1.LI.3'], pages: 'pp. 23–26', elaboration: 'Clock speed in GHz and multiple cores are extra explanation.' },
  { missionId: 'gh-comp-ss1-buses-architectures', section: '1.1.1', indicators: ['1.1.1.LI.4'], pages: 'pp. 23–26', elaboration: 'The statement that many embedded processors use Harvard-style designs is general background, not curriculum wording.' },
  { missionId: 'gh-comp-ss1-hardware-components', section: '1.1.2', indicators: ['1.1.2.LI.1'], pages: 'pp. 27–30', elaboration: 'The five groups follow the indicator. The device examples, the data-flow order and the "choose parts for the job" idea (from the learning outcome) are teaching choices.' },
  { missionId: 'gh-comp-ss1-hardware-categories', section: '1.1.2', indicators: ['1.1.2.LI.2'], pages: 'pp. 27–30', elaboration: 'The curriculum lists five categories: input, processing, output, storage and communication devices. The internal/external split and the touchscreen example are extra teaching content.' },
  { missionId: 'gh-comp-ss1-software-types', section: '1.1.2', indicators: ['LO'], pages: 'pp. 27–30', elaboration: 'SHS 1 states this only in the learning outcome 1.1.2.LO.1 ("Explain types of Software and their functions"); no SHS 1 indicator names the types. The system, application and programming split is a standard teaching choice.' },
  { missionId: 'gh-comp-ss1-networks-basics', section: '1.1.3', indicators: ['1.1.3.LI.1'], pages: 'pp. 31–34', elaboration: 'The NIC, modem, switch and router follow the indicator exemplar on network hardware. Packets, protocols and nodes are explanatory terms.' },
  { missionId: 'gh-comp-ss1-network-types', section: '1.1.3', indicators: ['1.1.3.LI.2', '1.1.3.LI.3'], pages: 'pp. 31–34', elaboration: 'The indicator asks for at least three types and does not name them. LAN, MAN and WAN are the chosen types; SHS 2 later names LAN, MAN, WAN and CAN.' },
  { missionId: 'gh-comp-ss1-data-structures-intro', section: '1.2.1', indicators: ['1.2.1.LI.1'], pages: 'pp. 35–38', elaboration: 'Everyday examples are teaching choices.' },
  { missionId: 'gh-comp-ss1-data-structure-types', section: '1.2.1', indicators: ['1.2.1.LI.2'], pages: 'pp. 35–38', elaboration: 'The indicator says "differentiate between the types of data structures" and does not name them. Arrays and lists, stacks and queues are the types chosen.' },
  { missionId: 'gh-comp-ss1-algorithms', section: '1.2.2', indicators: ['1.2.2.LI.1'], pages: 'pp. 39–42', elaboration: 'The four development-cycle stages follow the indicator wording (analysis, design, coding, testing).' },
  { missionId: 'gh-comp-ss1-flowcharts-pseudocode', section: '1.2.2', indicators: ['1.2.2.LI.2'], pages: 'pp. 39–42', elaboration: 'Python code-reading examples and the pseudocode conventions are teaching choices.' },
  { missionId: 'gh-comp-ss1-web-components', section: '1.2.3', indicators: ['1.2.3.LI.1'], pages: 'pp. 43–46', elaboration: 'The HTML tag examples are teaching choices.' },
  { missionId: 'gh-comp-ss1-wireframes', section: '1.2.3', indicators: ['1.2.3.LI.2'], pages: 'pp. 43–46', elaboration: 'The exemplar mentions a website map and a web outline plan using wireframes. The indicator asks learners to draw and explain two outline plans.' }
];

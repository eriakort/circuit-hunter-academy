/**
 * Alignment of the SHS 1 Computing missions to the NaCCA "Computing Curriculum for Secondary
 * Education (SHS 1–3)", September 2023. Codes and printed page numbers were read from the
 * curriculum text. `verified` lists indicator codes whose wording was read directly.
 * `elaboration` names teaching content that goes beyond the indicator wording (examples, extra
 * terms and activities). A subject teacher should check these against the teacher manual.
 * SHS 2 and SHS 3 are not yet covered.
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
  { missionId: 'gh-comp-ss1-hardware-components', section: '1.1.2', indicators: ['1.1.2.LI.1'], pages: 'pp. 27–30', elaboration: 'The device examples in each group are teaching choices.' },
  { missionId: 'gh-comp-ss1-hardware-categories', section: '1.1.2', indicators: ['1.1.2.LI.2'], pages: 'pp. 27–30', elaboration: 'The internal and external (peripheral) split is one reasonable reading of "categories of hardware". Check it against the teacher manual.' },
  { missionId: 'gh-comp-ss1-software-types', section: '1.1.2', indicators: ['LO'], pages: 'pp. 27–30', elaboration: 'Tied to the learning outcome "Explain types of Software and their functions". The system, application and programming split is standard but the indicator wording was not read.' },
  { missionId: 'gh-comp-ss1-networks-basics', section: '1.1.3', indicators: ['1.1.3.LI.1'], pages: 'pp. 31–34', elaboration: 'Packets, protocols and nodes are explanatory terms.' },
  { missionId: 'gh-comp-ss1-network-types', section: '1.1.3', indicators: ['1.1.3.LI.2', '1.1.3.LI.3'], pages: 'pp. 31–34', elaboration: 'The curriculum asks for at least three types. LAN, MAN and WAN are the chosen types; confirm they match the teacher manual.' },
  { missionId: 'gh-comp-ss1-data-structures-intro', section: '1.2.1', indicators: ['1.2.1.LI.1'], pages: 'pp. 35–38', elaboration: 'Everyday examples are teaching choices.' },
  { missionId: 'gh-comp-ss1-data-structure-types', section: '1.2.1', indicators: ['1.2.1.LI.2'], pages: 'pp. 35–38', elaboration: 'Arrays and lists, stacks and queues are the types chosen; the curriculum text read did not name them.' },
  { missionId: 'gh-comp-ss1-algorithms', section: '1.2.2', indicators: ['1.2.2.LI.1'], pages: 'pp. 39–42', elaboration: 'The four development-cycle stages follow the indicator wording.' },
  { missionId: 'gh-comp-ss1-flowcharts-pseudocode', section: '1.2.2', indicators: ['1.2.2.LI.2'], pages: 'pp. 39–42', elaboration: 'Python code-reading examples and the pseudocode conventions are teaching choices.' },
  { missionId: 'gh-comp-ss1-web-components', section: '1.2.3', indicators: ['1.2.3.LI.1'], pages: 'pp. 43–46', elaboration: 'The HTML tag examples are teaching choices.' },
  { missionId: 'gh-comp-ss1-wireframes', section: '1.2.3', indicators: ['1.2.3.LI.2'], pages: 'pp. 43–46', elaboration: 'The site map is an extra planning idea. The indicator asks for two web outline plans with wireframes.' }
];

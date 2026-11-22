import type { ComputingAlignment } from './ghanaComputingSS1Alignment';

/**
 * Alignment of the SHS 2 Computing missions to the NaCCA "Computing Curriculum for Secondary
 * Education (SHS 1–3)", September 2023. Indicator codes, indicator wording and printed pages were
 * read from the curriculum PDF supplied by the project owner. `elaboration` marks teaching content
 * that goes beyond the indicator wording. A subject teacher should still check it against the
 * teacher manual.
 */
export const GHANA_COMPUTING_SS2_ALIGNMENT: ComputingAlignment[] = [
  { missionId: 'gh-comp-ss2-logic-gates', section: '2.1.1', indicators: ['2.1.1.LI.1'], pages: 'pp. 48–52', elaboration: 'The indicator is "Determine critical points of Logic Operations and apply them to solve problems efficiently", but its exemplar in the PDF talks about mass storage media, so the curriculum text is internally inconsistent here. AND, OR and NOT and the reading of "critical points" as the input where the output changes are teaching choices. The PDF text does not mention NAND, NOR or XOR.' },
  { missionId: 'gh-comp-ss2-boolean-simplify', section: '2.1.1', indicators: ['2.1.1.LI.2'], pages: 'pp. 48–52', elaboration: 'The Boolean laws and the worked example are standard content chosen for "apply Boolean expressions to simplify complex circuits". The Python and/or/not questions are extra.' },
  { missionId: 'gh-comp-ss2-arithmetic-ops', section: '2.1.1', indicators: ['2.1.1.LI.3'], pages: 'pp. 48–52', elaboration: 'The indicator says "3 major Arithmetic Operations" and does not name them in SHS 2. Addition, subtraction and shifting are the chosen three. The SHS 3 text lists rotation and shift among the CPU arithmetic operations. Check the teacher manual for the intended three.' },
  { missionId: 'gh-comp-ss2-barcodes-qr', section: '2.1.2', indicators: ['2.1.2.LI.1'], pages: 'pp. 53–56', elaboration: 'The device list in the sorting activity comes from the indicator. How a barcode scanner reads and what a barcode stores are standard background.' },
  { missionId: 'gh-comp-ss2-software-os', section: '2.1.2', indicators: ['2.1.2.LI.2', '2.1.2.LO.1'], pages: 'pp. 53–56', elaboration: 'The indicator and its exemplar (install simple everyday software such as antivirus programs, games and media players) are followed. The list of operating system functions is a standard teaching list.' },
  { missionId: 'gh-comp-ss2-topologies', section: '2.1.3', indicators: ['2.1.3.LI.3', '2.1.3.LI.1'], pages: 'pp. 57–60', elaboration: 'Star, ring, bus and mesh come from the exemplar. The strengths, weaknesses and the links formula are standard background.' },
  { missionId: 'gh-comp-ss2-network-design', section: '2.1.3', indicators: ['2.1.3.LI.1'], pages: 'pp. 57–60', elaboration: 'LAN, MAN, WAN and CAN and the hubs, routers, bridges and switches come from the exemplars. The two example designs (a school lab and a school campus) are teaching choices.' },
  { missionId: 'gh-comp-ss2-internet-connection', section: '2.1.3', indicators: ['2.1.3.LI.2'], pages: 'pp. 57–60', elaboration: 'The connection steps, IP address and DNS are standard background for "demonstrate how the system can connect to the Internet".' },
  { missionId: 'gh-comp-ss2-main-memory', section: '2.2.1', indicators: ['2.2.1.LI.1'], pages: 'pp. 61–64', elaboration: 'The slow-computer steps follow the exemplar on main memory overload. The RAM and ROM split is standard background.' },
  { missionId: 'gh-comp-ss2-data-structures-apps', section: '2.2.1', indicators: ['2.2.1.LI.2'], pages: 'pp. 61–64', elaboration: 'The real-life applications and the Python list examples are teaching choices.' },
  { missionId: 'gh-comp-ss2-python-calculator', section: '2.2.2', indicators: ['2.2.2.LI.1'], pages: 'pp. 65–68', elaboration: 'Planning a program and the expert-system idea come from the exemplar. The Python calculator code reading is a teaching choice.' },
  { missionId: 'gh-comp-ss2-machine-learning', section: '2.2.2', indicators: ['2.2.2.LI.2'], pages: 'pp. 65–68', elaboration: 'The indicator is to use simulation tools in machine learning. The mission teaches the ideas and steps but cannot run a simulation tool, so a teacher should pair it with a real tool. The ethics points are extra.' },
  { missionId: 'gh-comp-ss2-web-editors', section: '2.2.3', indicators: ['2.2.3.LI.1'], pages: 'pp. 69–73', elaboration: 'The editors named come from the exemplar. The HTML tags and the GUI, UI and UX explanations are teaching choices.' },
  { missionId: 'gh-comp-ss2-ecommerce-page', section: '2.2.3', indicators: ['2.2.3.LI.2'], pages: 'pp. 69–73', elaboration: 'The list of page features, the mobile money mention and the safety points are teaching choices.' },
  { missionId: 'gh-comp-ss2-databases', section: '2.2.3', indicators: ['2.2.3.LI.3'], pages: 'pp. 69–73', elaboration: 'Tables, fields, records, primary keys, foreign keys and one-to-many relationships are standard relational database content.' }
];

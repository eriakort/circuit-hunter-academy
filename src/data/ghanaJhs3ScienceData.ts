import type { ArcInfo, Mission, SubjectInfo, UnitInfo } from '../types';

/** Ghana NaCCA Common Core Programme · JHS 3 Science · Diversity of Matter (Basic 9). */
export const GHANA_JHS3_SCIENCE_SUBJECT: SubjectInfo = {
  id: 'ghjhs3science',
  name: 'Science · JHS 3',
  blurb: 'Ghana NaCCA JHS 3 Science · Diversity of Matter, Cycles and Systems. Explore compounds, specialised cells, the nitrogen cycle, circulation and respiration, asteroids and comets, ecosystems, and sustainable manure preparation.',
  meta: 'Ghana NaCCA · JHS 3 · 3 strands · 15 missions',
  art: '<svg viewBox="0 0 120 120" width="100%" aria-hidden="true"><circle cx="60" cy="60" r="9" fill="#ffd166"/><ellipse cx="60" cy="60" rx="43" ry="17" fill="none" stroke="#7bdff2" stroke-width="3"/><ellipse cx="60" cy="60" rx="43" ry="17" fill="none" stroke="#ff8fab" stroke-width="3" transform="rotate(60 60 60)"/><ellipse cx="60" cy="60" rx="43" ry="17" fill="none" stroke="#a7f3d0" stroke-width="3" transform="rotate(120 60 60)"/></svg>'
};

export const GHANA_JHS3_SCIENCE_UNIT: UnitInfo = {
  title: 'Diversity of Matter',
  ch: 'JHS 3 · NaCCA Science · Strand 1',
  subject: 'ghjhs3science'
};

export const GHANA_JHS3_SCIENCE_ARCS: ArcInfo[] = [
  { n: 1, unit: 0, subject: 'ghjhs3science', title: 'Binary Compounds, Acids, Bases and Salts', pages: 'NaCCA CCP · JHS 3 Science · B9.1.1.1' },
  { n: 2, unit: 0, subject: 'ghjhs3science', title: 'Chemical Bonding', pages: 'NaCCA CCP · JHS 3 Science · B9.1.1.2' },
  { n: 3, unit: 0, subject: 'ghjhs3science', title: 'Specialised Cells in Plants and Humans', pages: 'NaCCA CCP · JHS 3 Science · B9.1.2.1' }
];

const q = (prompt: string, answers: string[], explanation: string) => ({ q: prompt, a: answers, why: explanation });
const lesson = (text: string) => ({ who: 's' as const, text });

export const GHANA_JHS3_SCIENCE_MISSIONS: Mission[] = [

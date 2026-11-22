// Motion for the Grade 5 maths tables and boxes (CSS classes defined in index.css). The diagrams
// themselves (Grade 5 SVGs, Italian grades 9-11, Ghana strands) animate inside their own builders
// (mathVisualsG5/G9/G10/G11/Gh.ts). The stylesheet stops this CSS motion under reduced motion.

const G5_TABLES = ['g5m-place-value', 'g5m-length-table', 'g5m-capacity-table', 'g5m-mass-table', 'g5m-area-table', 'g5m-volume-table', 'g5m-time-table'];

export function animateGrade5(key: string, html: string): string {
  if (G5_TABLES.includes(key)) return html.replace('class="g5m-table', 'class="g5m-table g5m-anim');
  if (key === 'g5m-equivalences' || key === 'g5m-trade') return html.replace('class="g5m-two"', 'class="g5m-two g5m-boxes"');
  if (key === 'g5m-area-formulas') return html.replace('class="g5m-table g5m-formulas"', 'class="g5m-table g5m-formulas g5m-rows"');
  return html;
}

/** Keys whose motion comes from `animateGrade5` (tables and boxes); the SVG diagrams move on their own. */
export const GRADE5_MOTION_KEYS = [...G5_TABLES, 'g5m-equivalences', 'g5m-trade', 'g5m-area-formulas'];

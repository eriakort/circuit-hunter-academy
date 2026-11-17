/** Ghana NaCCA SHS 3 Mathematics: Strand 2, Sub-strand 2. */
export const GHANA_CORE_MATH_SS3_QUADRATICS_ALIGNMENT = {
  source: 'National Council for Curriculum and Assessment (NaCCA), Mathematics Curriculum for Secondary Education (SHS 1–3), September 2023',
  url: 'https://www.nacca.gov.gh/wp-content/uploads/2025/04/Mathematics-Curriculum.pdf',
  strand: '2 · Algebraic Reasoning',
  subStrand: '2 · Patterns and Relations',
  printedPages: [311, 321],
  contentStandards: [{
    id: '3.2.2.CS.1',
    printedPage: 314,
    description: 'Demonstrate understanding of the concept of quadratic functions and equations and solve real-life problems with them.'
  }],
  learningOutcomes: [{
    id: '3.2.2.LO.1',
    printedPage: 311,
    description: 'Solve problems on quadratic functions and equations, including real-life problems.'
  }],
  learningIndicators: [
    { id: '3.2.2.LI.1', printedPage: 314, description: 'Identify and solve quadratic equations.', missionId: 'gh-core-ss3-quadratic-equations' },
    { id: '3.2.2.LI.2', printedPage: 316, description: 'Investigate quadratic functions graphically and find their maximum and minimum points, roots and intercepts.', missionId: 'gh-core-ss3-quadratic-graphs' },
    { id: '3.2.2.LI.3', printedPage: 319, description: 'Identify the axis of symmetry and use graphs to solve related equations.', missionId: 'gh-core-ss3-quadratic-relationships' },
    { id: '3.2.2.LI.4', printedPage: 321, description: 'Interpret intervals where a quadratic function is increasing, decreasing, positive or negative.', missionId: 'gh-core-ss3-quadratic-relationships' }
  ],
  coverage: [
    { missionId: 'gh-core-ss3-quadratic-equations', indicators: ['3.2.2.LI.1'], topics: ['quadratic expressions', 'standard form', 'factorisation', 'zero-product rule', 'real-life area models'] },
    { missionId: 'gh-core-ss3-quadratic-graphs', indicators: ['3.2.2.LI.2'], topics: ['parabolas', 'tables of values', 'roots', 'x- and y-intercepts', 'vertex', 'maximum and minimum', 'coefficient effects'] },
    { missionId: 'gh-core-ss3-quadratic-relationships', indicators: ['3.2.2.LI.3', '3.2.2.LI.4'], topics: ['axis of symmetry', 'graph intersections', 'increasing and decreasing intervals', 'positive and negative intervals'] }
  ]
} as const;

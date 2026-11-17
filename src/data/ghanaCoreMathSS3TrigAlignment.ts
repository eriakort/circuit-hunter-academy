/** Ghana NaCCA SHS 3 Mathematics: Strand 3, Sub-strand 2 · Measurement. */
export const GHANA_CORE_MATH_SS3_TRIG_ALIGNMENT = {
  source: 'National Council for Curriculum and Assessment (NaCCA), Mathematics Curriculum for Secondary Education (SHS 1–3), September 2023',
  url: 'https://www.nacca.gov.gh/wp-content/uploads/2025/04/Mathematics-Curriculum.pdf',
  strand: '3 · Geometry Around Us',
  subStrand: '2 · Measurement',
  printedPages: [355, 367],
  contentStandards: [
    {
      id: '3.3.2.CS.1',
      printedPage: 358,
      description: 'Demonstrate conceptual understanding of trigonometric graphs and use them to solve trigonometric equations.'
    }
  ],
  learningOutcomes: [
    {
      id: '3.3.2.LO.1',
      printedPage: 355,
      description: 'Draw graphs of given trigonometric functions and use them to determine equations and solve related problems.'
    }
  ],
  learningIndicators: [
    {
      id: '3.3.2.LI.1',
      contentStandardId: '3.3.2.CS.1',
      printedPage: 358,
      description: 'Draw graphs of given trigonometric functions and use them to solve related problems.',
      missionId: 'gh-core-ss3-wave-cartographer'
    },
    {
      id: '3.3.2.LI.2',
      contentStandardId: '3.3.2.CS.1',
      printedPage: 367,
      description: 'Use trigonometric graphs to determine equations.',
      missionId: 'gh-core-ss3-equation-decoder'
    }
  ],
  coverage: [
    {
      missionId: 'gh-core-ss3-wave-cartographer',
      indicators: ['3.3.2.LI.1'],
      topics: [
        'sine, cosine and tangent graphs in degrees',
        'key points, intercepts, maximum and minimum values, range and period',
        'tangent domain restrictions and vertical asymptotes',
        'amplitude, vertical stretch, reflection, period changes and vertical translation',
        'graph-based solutions to trigonometric equations'
      ]
    },
    {
      missionId: 'gh-core-ss3-equation-decoder',
      indicators: ['3.3.2.LI.2'],
      topics: [
        'read amplitude, period, phase shift and midline from a graph',
        'determine sine, cosine and tangent equations from graph features',
        'use intersections and graph features to solve trigonometric equations'
      ]
    }
  ]
} as const;

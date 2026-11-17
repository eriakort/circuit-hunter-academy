/** Ghana NaCCA SHS 3 Mathematics: Strand 3, Sub-strand 1 · Spatial Sense. */
export const GHANA_CORE_MATH_SS3_SPATIAL_ALIGNMENT = {
  source: 'National Council for Curriculum and Assessment (NaCCA), Mathematics Curriculum for Secondary Education (SHS 1–3), September 2023',
  url: 'https://www.nacca.gov.gh/wp-content/uploads/2025/04/Mathematics-Curriculum.pdf',
  strand: '3 · Geometry Around Us',
  subStrand: '1 · Spatial Sense',
  printedPages: [323, 351],
  contentStandards: [
    {
      id: '3.3.1.CS.1',
      printedPage: 329,
      description: 'Demonstrate a conceptual understanding of spatial sense with respect to circles and their theorems and apply its properties to solve everyday life problems.'
    },
    {
      id: '3.3.1.CS.2',
      printedPage: 347,
      description: 'Demonstrate knowledge and understanding of geometrical construction, use the knowledge to construct plane shapes and apply these in the world around them.'
    }
  ],
  learningOutcomes: [
    {
      id: '3.3.1.LO.1',
      printedPage: 323,
      description: 'Draw circles for given radii and use the circle theorems; identify the tangent as perpendicular to the radius at the point of contact and verify that tangents drawn from an external point to the same circle are equal when measured from their point of contact.'
    },
    {
      id: '3.3.1.LO.2',
      printedPage: 325,
      description: 'Perform geometric construction of quadrilaterals and given loci.'
    }
  ],
  learningIndicators: [
    { id: '3.3.1.LI.1', contentStandardId: '3.3.1.CS.1', printedPage: 329, description: 'Identify parts of a circle and draw circles for given radii and through points.', missionId: 'gh-core-ss3-circle-cartographer' },
    { id: '3.3.1.LI.2', contentStandardId: '3.3.1.CS.1', printedPage: 334, description: 'Investigate and apply circle theorem statements and their proofs.', missionId: 'gh-core-ss3-circle-theorem-keeper' },
    { id: '3.3.1.LI.3', contentStandardId: '3.3.1.CS.1', printedPage: 339, description: 'Establish that a tangent is perpendicular to the radius at the point of contact and apply the alternate segment theorem.', missionId: 'gh-core-ss3-tangent-sentinel' },
    { id: '3.3.1.LI.4', contentStandardId: '3.3.1.CS.1', printedPage: 343, description: 'Verify that tangents drawn from an external point to the same circle are equal.', missionId: 'gh-core-ss3-tangent-sentinel' },
    { id: '3.3.1.LI.1', contentStandardId: '3.3.1.CS.2', printedPage: 347, description: 'Recall the construction of angles 75°, 105°, 135° and 150°.', missionId: 'gh-core-ss3-compass-locus-architect' },
    { id: '3.3.1.LI.2', contentStandardId: '3.3.1.CS.2', printedPage: 348, description: 'Construct a triangle or quadrilateral under given conditions.', missionId: 'gh-core-ss3-compass-locus-architect' },
    { id: '3.3.1.LI.3', contentStandardId: '3.3.1.CS.2', printedPage: 351, description: 'Construct a locus for a given condition.', missionId: 'gh-core-ss3-compass-locus-architect' }
  ],
  coverage: [
    { missionId: 'gh-core-ss3-circle-cartographer', indicators: ['3.3.1.CS.1/LI.1'], topics: ['centre, radius, diameter, circumference, chord, arc, sector, segment, secant and tangent', 'circles with a given radius', 'circumcircles through three non-collinear points'] },
    { missionId: 'gh-core-ss3-circle-theorem-keeper', indicators: ['3.3.1.CS.1/LI.2'], topics: ['angle at centre and circumference', 'angle in a semicircle', 'angles in the same segment', 'equal chords and central angles', 'cyclic quadrilaterals'] },
    { missionId: 'gh-core-ss3-tangent-sentinel', indicators: ['3.3.1.CS.1/LI.3', '3.3.1.CS.1/LI.4'], topics: ['radius-tangent perpendicularity', 'alternate segment theorem', 'equal tangents from an external point'] },
    { missionId: 'gh-core-ss3-compass-locus-architect', indicators: ['3.3.1.CS.2/LI.1', '3.3.1.CS.2/LI.2', '3.3.1.CS.2/LI.3'], topics: ['construct 75°, 105°, 135° and 150°', 'construct triangles and quadrilaterals', 'loci of points at fixed distances and equidistant from points or lines'] }
  ]
} as const;

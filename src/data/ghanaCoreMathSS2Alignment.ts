/**
 * Audited first-slice alignment for Ghana NaCCA Mathematics Curriculum for
 * Secondary Education (SHS 1–3), September 2023.
 *
 * Source: official NaCCA curriculum, printed pages 166–173.
 * The scope totals are for SHS 2 as a whole; this module maps only the first
 * sub-strand in detail and does not claim full-year coverage.
 */
export const GHANA_NACCA_SS2_MATHEMATICS_SOURCE = {
  title: 'Mathematics Curriculum for Secondary Education (SHS 1–3)',
  publisher: 'National Council for Curriculum and Assessment (NaCCA), Ghana',
  publicationDate: 'September 2023',
  url: 'https://www.nacca.gov.gh/wp-content/uploads/2025/04/Mathematics-Curriculum.pdf'
} as const;

export const GHANA_CORE_MATH_SS2_SCOPE = {
  totalLearningIndicators: 40,
  strands: [
    { name: 'Numbers for Everyday Life', subStrands: 2, contentStandards: 5, learningIndicators: 11 },
    { name: 'Algebraic Reasoning', subStrands: 2, contentStandards: 2, learningIndicators: 8 },
    { name: 'Geometry Around Us', subStrands: 4, contentStandards: 4, learningIndicators: 12 },
    { name: 'Making Sense of and Using Data', subStrands: 2, contentStandards: 4, learningIndicators: 9 }
  ]
} as const;

export const GHANA_CORE_MATH_SS2_REAL_NUMBER_ALIGNMENT = {
  strand: '1 · Numbers for Everyday Life',
  subStrand: '1 · Real Number and Numeration System',
  printedPages: [166, 173],
  contentStandards: [
    {
      id: '2.1.1.CS.1',
      description: 'Demonstrate knowledge and understanding of surds, indices and logarithms and establish their laws and properties.',
      learningIndicatorIds: ['2.1.1.LI.1', '2.1.1.LI.2', '2.1.1.LI.3'],
      printedPages: [166, 168]
    },
    {
      id: '2.1.1.CS.2',
      description: 'Demonstrate knowledge and understanding of the laws and properties of indices and logarithms and their applications to solving real-life problems.',
      learningIndicatorIds: ['2.1.1.LI.1', '2.1.1.LI.2'],
      printedPages: [171]
    },
    {
      id: '2.1.1.CS.3',
      description: 'Demonstrate understanding of the concepts of modulo arithmetic and solve real-life problems on them.',
      learningIndicatorIds: ['2.1.1.LI.1', '2.1.1.LI.2'],
      printedPages: [173]
    }
  ],
  learningOutcomes: [
    { id: '2.1.1.LO.1', printedPage: 158, description: 'Evaluate the relationships between the laws and properties of surds, indices and logarithms and apply them to solve problems with radicands.' },
    { id: '2.1.1.LO.2', printedPage: 161, description: 'Apply the laws and properties of indices and logarithms to solve real-life problems.' },
    { id: '2.1.1.LO.3', printedPage: 163, description: 'Establish the connections between number bases and modular arithmetic and apply these relationships to the concept of place value.' }
  ],
  learningIndicators: [
    { id: '2.1.1.LI.1', printedPage: 166, description: 'Carry out operations on surds and rationalize monomial denominators.' },
    { id: '2.1.1.LI.2', printedPage: 167, description: 'Compose and decompose the laws of indices and use them to solve problems.' },
    { id: '2.1.1.LI.3', printedPage: 168, description: 'Compose and decompose logarithm laws and properties with exponents and apply them.' },
    { id: '2.1.1.LI.1', printedPage: 171, description: 'Investigate real-life problems using laws and properties of indices and logarithms.' },
    { id: '2.1.1.LI.2', printedPage: 171, description: 'Use mathematical connections to explore the relevance of surds, indices and logarithms.' },
    { id: '2.1.1.LI.1', printedPage: 173, description: 'Investigate the concept and existence of modulo arithmetic in learners’ environment.' },
    { id: '2.1.1.LI.2', printedPage: 173, description: 'Model and solve real-life problems involving modular arithmetic.' }
  ]
} as const;


// Strand 2 · Algebraic Reasoning · Sub-strand 1
// Source: official NaCCA SHS 1–3 Mathematics Curriculum, printed pp. 193–198.
export const GHANA_CORE_MATH_SS2_SIMULTANEOUS_EQUATIONS_ALIGNMENT = {
  strand: '2 · Algebraic Reasoning',
  subStrand: '1 · Applications of Expressions, Equations and Inequalities',
  printedPages: [193, 198],
  contentStandards: [
    {
      id: '2.2.1.CS.1',
      printedPage: 193,
      description: 'Demonstrate knowledge and understanding of simultaneous equations involving two variables and apply them to solve everyday-life problems.'
    }
  ],
  learningOutcomes: [
    {
      id: '2.2.1.LO.1',
      printedPage: 187,
      description: 'Solve linear equations in two variables using elimination, substitution and graphical methods.'
    },
    {
      id: '2.2.1.LO.2',
      printedPage: 189,
      description: 'Analyse, model and solve process problems on simultaneous linear equations involving real-life problems.'
    }
  ],
  learningIndicators: [
    { id: '2.2.1.LI.1', printedPage: 193, description: 'Solve simultaneous linear equations involving two variables using the graphical method.' },
    { id: '2.2.1.LI.2', printedPage: 196, description: 'Analyse two linear equations in two variables and solve them using elimination and substitution methods.' },
    { id: '2.2.1.LI.3', printedPage: 198, description: 'Analyse, model and solve word problems of simultaneous linear equations involving numbers, age and other contexts.' }
  ]
} as const;


// Strand 2 · Algebraic Reasoning · Sub-strand 2
// NaCCA source: SHS 2 Patterns and Relations, printed pp. 198–206.
export const GHANA_CORE_MATH_SS2_PATTERNS_ALIGNMENT = {
  strand: '2 · Algebraic Reasoning',
  subStrand: '2 · Patterns and Relations',
  printedPages: [198, 206],
  learningOutcomes: [
    {
      id: '2.2.2.LO.1',
      printedPage: 198,
      description: 'Explore patterns of a sequence using plane figures and find the nth and the sum of the nth term of an arithmetic and geometric progression. Analyse, model, and solve real-life problems involving financial mathematics and exponential growth.'
    }
  ],
  coverage: [
    { missionId: 'gh-core-ss2-sequences-progressions', topics: ['plane-figure patterns', 'arithmetic progressions', 'geometric progressions', 'nth term', 'sum of an arithmetic progression'] },
    { missionId: 'gh-core-ss2-financial-exponential-models', topics: ['compound interest', 'depreciation', 'exponential growth', 'repeated percentage change'] }
  ]
} as const;


// Strand 1 · Numbers for Everyday Life · Sub-strand 2
// Source: official NaCCA SHS 1–3 Mathematics Curriculum, printed pp. 182–185.
export const GHANA_CORE_MATH_SS2_PROPORTIONAL_ALIGNMENT = {
  strand: '1 · Numbers for Everyday Life',
  subStrand: '2 · Proportional Reasoning',
  printedPages: [182, 185],
  contentStandards: [
    {
      id: '2.1.2.CS.1',
      printedPage: 182,
      description: 'Demonstrate knowledge and understanding of ratios, rates and proportions and use them to solve real-world problems.'
    },
    {
      id: '2.1.2.CS.2',
      printedPage: 185,
      description: 'Demonstrate understanding of proportional reasoning using mathematical connections among ratios, rates and proportions to solve daily problems, including compound interest, tax, utilities and depreciation.'
    }
  ],
  learningOutcomes: [
    {
      id: '2.1.2.LO.1',
      printedPage: 176,
      description: 'Establish the similarities among ratios, rates and proportions and use these to solve problems.'
    },
    {
      id: '2.1.2.LO.2',
      printedPage: 178,
      description: 'Analyse the relevance of ratios, rates and proportions in solving day-to-day problems.'
    }
  ],
  learningIndicators: [
    { id: '2.1.2.LI.1', printedPage: 182, description: 'Explain the concepts of ratios and rates as a comparison of quantities.' },
    { id: '2.1.2.LI.2', printedPage: 183, description: 'Establish relationships among ratios, rates and proportions and use them to find unknown quantities.' },
    { id: '2.1.2.LI.1', printedPage: 185, description: 'Apply the concepts of ratios, rates and proportions to solve problems in financial mathematics, health and sports.' },
    { id: '2.1.2.LI.2', printedPage: 185, description: 'Establish the relevance of ratios, rates and proportions in day-to-day activities, make generalisations and apply them to solve real-world problems.' }
  ],
  coverage: [
    { missionId: 'gh-core-ss2-ratios-rates-proportions', topics: ['ratios', 'rates', 'equivalent ratios', 'proportions', 'scale drawings', 'similar shapes'] },
    { missionId: 'gh-core-ss2-proportional-real-world', topics: ['financial mathematics', 'percentages', 'tax', 'utilities', 'depreciation', 'currency exchange', 'real-world applications'] }
  ]
} as const;


// Strand 3 · Geometry Around Us · Sub-strand 1 · Spatial Sense
// Source: NaCCA Mathematics Curriculum for Secondary Education (SHS 1–3),
// September 2023. SHS 2 spatial transformations, printed pp. 213–227.
export const GHANA_CORE_MATH_SS2_SPATIAL_ALIGNMENT = {
  strand: '3 · Geometry Around Us',
  subStrand: '1 · Spatial Sense',
  printedPages: [213, 227],
  contentStandards: [
    {
      id: '2.3.1.CS.1',
      printedPage: 213,
      description: 'Demonstrate a conceptual understanding of spatial sense regarding changes and invariance achieved by performing a combination of successive transformations (reflection, translation, rotation) in a 2D shape.'
    }
  ],
  learningOutcomes: [
    {
      id: '2.3.1.LO.1',
      description: 'Carry out a variety of transformations through translation, reflection, rotation and enlargement of plane shapes and identify scale drawing as an enlargement/reduction of a plane shape.'
    }
  ],
  learningIndicators: [
    {
      id: '2.3.1.LI.1',
      printedPage: 213,
      description: 'Identify and translate an object or point by a translating vector and describe the image.'
    },
    { id: '2.3.1.LI.2', printedPage: 218, topic: 'Reflection of points and plane shapes; mirror lines and image coordinates.' },
    { id: '2.3.1.LI.3', printedPage: 223, topic: 'Rotation of points and plane shapes about a centre through a given angle and direction.' },
    { id: '2.3.1.LI.4', printedPage: 227, topic: 'Apply transformations, including enlargement and reduction, and interpret scale drawings.' }
  ],
  coverage: [
    {
      missionId: 'gh-core-ss2-transformations-vectors-reflections',
      learningIndicators: ['2.3.1.LI.1', '2.3.1.LI.2'],
      topics: ['translation vectors', 'preimage and image', 'reflection', 'mirror line', 'congruence', 'invariant lengths and angles']
    },
    {
      missionId: 'gh-core-ss2-rotations-successive-transformations',
      learningIndicators: ['2.3.1.LI.3', '2.3.1.LI.4'],
      topics: ['rotation', 'centre and angle of rotation', 'successive transformations', 'enlargement', 'scale factor', 'scale drawings']
    }
  ]
} as const;


// Strand 3 · Geometry Around Us · Sub-strand 2 · Measurement
// Source: NaCCA Mathematics Curriculum for Secondary Education (SHS 1–3),
// September 2023. SHS 2 Measurement starts at p. 229; standards and
// indicators for this increment appear on printed pp. 239–263.
export const GHANA_CORE_MATH_SS2_MEASUREMENT_ALIGNMENT = {
  strand: '3 · Geometry Around Us',
  subStrand: '2 · Measurement',
  printedPages: [239, 263],
  contentStandards: [
    {
      id: '2.3.2.CS.1',
      printedPage: 239,
      description: 'Demonstrate knowledge and understanding of measurement with respect to operations on bearings and vectors.',
      learningIndicatorIds: ['2.3.2.LI.1', '2.3.2.LI.2', '2.3.2.LI.3']
    },
    {
      id: '2.3.2.CS.2',
      printedPage: 246,
      description: 'Demonstrate an understanding of the inverse of trigonometric ratios and angles of elevation and depression, and apply the knowledge to calculate distances and heights.',
      learningIndicatorIds: ['2.3.2.LI.1', '2.3.2.LI.2']
    },
    {
      id: '2.3.2.CS.3',
      printedPage: 252,
      description: 'Demonstrate conceptual understanding of the measurement of surface area, volume and capacity of solid shapes.',
      learningIndicatorIds: ['2.3.2.LI.1', '2.3.2.LI.2', '2.3.2.LI.3']
    }
  ],
  learningOutcomes: [
    {
      id: '2.3.2.LO.1',
      printedPage: 233,
      description: 'Carry out addition, subtraction and scalar multiplication of vectors and investigate, with and without technology, properties such as commutative, associative and distributive properties of vector operations.'
    },
    {
      id: '2.3.2.LO.2',
      printedPage: 241,
      description: 'Determine inverse trigonometric ratios, calculate angles of elevation and depression in everyday-life situations, and apply the knowledge to calculate distances and heights.'
    },
    {
      id: '2.3.2.LO.3',
      printedPage: 249,
      description: 'Determine the volume and capacity of solid shapes and solve problems involving SI and imperial units in surface-area, volume and capacity measurements.'
    }
  ],
  learningIndicators: [
    {
      id: '2.3.2.LI.1',
      contentStandardId: '2.3.2.CS.1',
      printedPage: 239,
      description: 'Perform addition, subtraction and scalar multiplication on vectors represented as directed line segments in two-space and in Cartesian form in two and three-space.'
    },
    {
      id: '2.3.2.LI.2',
      contentStandardId: '2.3.2.CS.1',
      printedPage: 242,
      description: 'Determine properties (commutative, associative and distributive) of operations on vectors through investigation with or without technology.'
    },
    {
      id: '2.3.2.LI.3',
      contentStandardId: '2.3.2.CS.1',
      printedPage: 244,
      description: 'Solve problems involving addition, subtraction and scalar multiplication of vectors, including real-world applications.'
    },
    {
      id: '2.3.2.LI.1',
      contentStandardId: '2.3.2.CS.2',
      printedPage: 246,
      description: 'Determine inverse trigonometric ratios (graphs excluded) and discuss their applications.'
    },
    {
      id: '2.3.2.LI.2',
      contentStandardId: '2.3.2.CS.2',
      printedPage: 248,
      description: 'Solve problems involving angles of elevation and depression and identify everyday-life applications.'
    },
    {
      id: '2.3.2.LI.1',
      contentStandardId: '2.3.2.CS.3',
      printedPage: 252,
      description: 'Solve problems involving SI and imperial units in surface-area measurements and verify solutions.'
    },
    {
      id: '2.3.2.LI.2',
      contentStandardId: '2.3.2.CS.3',
      printedPage: 258,
      description: 'Solve problems involving SI and imperial units in volume and capacity measurements.'
    },
    {
      id: '2.3.2.LI.3',
      contentStandardId: '2.3.2.CS.3',
      printedPage: 263,
      description: 'Solve problems involving the volume and capacity of three-dimensional objects.'
    }
  ],
  coverage: [
    {
      missionId: 'gh-core-ss2-vector-operations-navigation',
      contentStandardId: '2.3.2.CS.1',
      learningIndicators: ['2.3.2.LI.1', '2.3.2.LI.2', '2.3.2.LI.3'],
      topics: ['vector representation', 'two- and three-dimensional components', 'addition', 'subtraction', 'scalar multiplication', 'vector properties', 'resultant displacement']
    },
    {
      missionId: 'gh-core-ss2-inverse-trig-elevation-depression',
      contentStandardId: '2.3.2.CS.2',
      learningIndicators: ['2.3.2.LI.1', '2.3.2.LI.2'],
      topics: ['inverse sine', 'inverse cosine', 'inverse tangent', 'angles of elevation', 'angles of depression', 'heights and distances']
    },
    {
      missionId: 'gh-core-ss2-solid-measurement-surface-volume-capacity',
      contentStandardId: '2.3.2.CS.3',
      learningIndicators: ['2.3.2.LI.1', '2.3.2.LI.2', '2.3.2.LI.3'],
      topics: ['surface area', 'SI and imperial units', 'volume', 'capacity', 'nets of solids', 'prisms', 'cones', 'pyramids', 'spheres', 'unit conversions']
    }
  ]
} as const;


// Strand 4 · Making Sense of and Using Data · Sub-strand 1
// Statistical Reasoning and its Application in Real Life.
// Source: NaCCA Mathematics Curriculum for Secondary Education (SHS 1–3),
// September 2023, SHS 2 printed pp. 264–289.
export const GHANA_CORE_MATH_SS2_STATISTICS_ALIGNMENT = {
  strand: '4 · Making Sense of and Using Data',
  subStrand: '1 · Statistical Reasoning and its Application in Real Life',
  printedPages: [264, 289],
  contentStandards: [
    {
      id: '2.4.1.CS.1',
      printedPage: 273,
      description: 'Demonstrate conceptual understanding of data handling in relation to designing and validating a variety of data collection methods.',
      learningIndicatorIds: ['2.4.1.LI.1', '2.4.1.LI.2']
    },
    {
      id: '2.4.1.CS.2',
      printedPage: 276,
      description: 'Demonstrate an understanding of data presentations and analysis for grouped and ungrouped data and describe the relationship between the measures of dispersion in data displays.',
      learningIndicatorIds: ['2.4.1.LI.1', '2.4.1.LI.2', '2.4.1.LI.3']
    },
    {
      id: '2.4.1.CS.3',
      printedPage: 289,
      description: 'Demonstrate the ability to carry out a mini-project involving the collection, analysis and interpretation of quantitative and qualitative data beyond the school environment.',
      learningIndicatorIds: ['2.4.1.LI.1', '2.4.1.LI.2']
    }
  ],
  learningOutcomes: [
    {
      id: '2.4.1.LO.1',
      printedPage: 265,
      description: 'Design a data collection instrument and justify its appropriateness for collecting everyday life data to address a contextual issue.'
    },
    {
      id: '2.4.1.LO.2',
      printedPage: 267,
      description: 'Construct and interpret a variety of data presentation methods, including cumulative frequency curves (ogive), waffle diagrams, etc. and describe the relationship between the measures of dispersion in data displays.'
    },
    {
      id: '2.4.1.LO.3',
      printedPage: 269,
      description: 'Carry out mini-projects involving data handling (data collection, analysis and interpretation) of quantitative and qualitative data beyond the school environment.'
    }
  ],
  learningIndicators: [
    {
      id: '2.4.1.LI.1',
      contentStandardId: '2.4.1.CS.1',
      printedPage: 273,
      description: 'Design a data collection instrument (questionnaire, interview guide, checklist, observation guide, etc.) using feasible digital technology where available and use it to collect real-life data.'
    },
    {
      id: '2.4.1.LI.2',
      contentStandardId: '2.4.1.CS.1',
      printedPage: 274,
      description: 'Evaluate a data set and/or its collection instrument by identifying potential problems related to bias, language, gender, ethics, cost, time, privacy and cultural sensitivity.'
    },
    {
      id: '2.4.1.LI.1',
      contentStandardId: '2.4.1.CS.2',
      printedPage: 276,
      description: 'Organise and present grouped and ungrouped data using ogives, waffle diagrams, box-and-whisker plots and other suitable displays, including generating 3D graphs and solving or posing problems.'
    },
    {
      id: '2.4.1.LI.2',
      contentStandardId: '2.4.1.CS.2',
      printedPage: 282,
      description: 'Analyse and interpret data using measures of dispersion and justify which measures best suit the data.'
    },
    {
      id: '2.4.1.LI.3',
      contentStandardId: '2.4.1.CS.2',
      printedPage: 287,
      description: 'Use mathematical arguments to support personal choices and incorporate others’ perspectives to evaluate and make inferences from data presented in everyday life.'
    },
    {
      id: '2.4.1.LI.1',
      contentStandardId: '2.4.1.CS.3',
      printedPage: 289,
      description: 'Develop and implement a project plan for collecting, analysing and interpreting data with useful conclusions and recommendations, including appropriate computer applications.'
    },
    {
      id: '2.4.1.LI.2',
      contentStandardId: '2.4.1.CS.3',
      printedPage: 290,
      description: 'Present a project report using presentations or infographics and publish or share its findings appropriately.'
    }
  ],
  coverage: [
    {
      missionId: 'gh-core-ss2-survey-design-data-quality',
      contentStandardId: '2.4.1.CS.1',
      learningIndicators: ['2.4.1.LI.1', '2.4.1.LI.2'],
      topics: ['primary and secondary data', 'questionnaires', 'interviews', 'observation', 'neutral wording', 'sampling', 'bias', 'ethics', 'privacy']
    },
    {
      missionId: 'gh-core-ss2-data-displays-dispersion',
      contentStandardId: '2.4.1.CS.2',
      learningIndicators: ['2.4.1.LI.1', '2.4.1.LI.2'],
      topics: ['frequency tables', 'grouped and ungrouped data', 'ogives', 'waffle diagrams', 'box-and-whisker plots', 'range', 'quartiles', 'interquartile range', 'variance', 'standard deviation']
    },
    {
      missionId: 'gh-core-ss2-statistical-inference-community-project',
      contentStandardId: '2.4.1.CS.2',
      learningIndicators: ['2.4.1.LI.3'],
      topics: ['data-supported choices', 'inference', 'sample limitations', 'association and causation', 'critical evaluation of everyday claims']
    },
    {
      missionId: 'gh-core-ss2-statistical-inference-community-project',
      contentStandardId: '2.4.1.CS.3',
      learningIndicators: ['2.4.1.LI.1', '2.4.1.LI.2'],
      topics: ['project planning', 'sample justification', 'data collection', 'analysis', 'conclusions', 'recommendations', 'reports', 'infographics']
    }
  ]
} as const;

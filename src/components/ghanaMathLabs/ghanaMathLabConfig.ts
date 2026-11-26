/**
 * Routes every one of the 101 Ghana JHS 1-3 & SHS 1-3 Core Mathematics mission IDs
 * to a dedicated interactive GhanaMathLab workbench and mode.
 */

export type GhanaMathLabFamily = 'number' | 'algebra' | 'geometry' | 'data';

export type GhanaMathLabMode =
  // Number & Finance
  | 'number-line'
  | 'fractions-pct'
  | 'ratio-share'
  | 'sets-venn'
  | 'indices-std'
  | 'surds-modulo'
  | 'finance-interest'
  | 'variation'
  // Algebra & Graphs
  | 'equation-balance'
  | 'algebra-tiles'
  | 'sequences'
  | 'linear-systems'
  | 'quadratic-graph'
  | 'logic-truth'
  // Geometry & Trig
  | 'angles-parallel'
  | 'pythagoras-polygons'
  | 'transformations'
  | 'vectors-bearings'
  | 'trig-elevation'
  | 'trig-waves'
  | 'circle-theorems'
  | 'mensuration'
  // Data & Probability
  | 'data-averages'
  | 'probability-tree';

export interface GhanaMathLabSpec {
  family: GhanaMathLabFamily;
  mode: GhanaMathLabMode;
  title: string;
  subtitle: string;
  note: string;
}

const SPECS: Record<string, Omit<GhanaMathLabSpec, 'family'>> = {
  // JHS 1 (13)
  'gh-jhs1-math-place-value-operations': {
    mode: 'number-line',
    title: 'Interactive Place Value & Number Operations',
    subtitle: 'Adjust the numbers and step across the directed number line.',
    note: 'Moving right adds positive units; moving left subtracts.'
  },
  'gh-jhs1-math-factors-multiples-primes': {
    mode: 'indices-std',
    title: 'Powers, Factors & Index Builder',
    subtitle: 'Vary base and exponent to inspect repeated multiplication.',
    note: 'Composite numbers decompose uniquely into prime power factors.'
  },
  'gh-jhs1-math-fractions-decimals-percentages': {
    mode: 'fractions-pct',
    title: 'Fraction, Decimal & Market Percentage Bar',
    subtitle: 'Slide numerator and denominator to see exact percentage and decimal equivalents.',
    note: 'A fraction a/b converts to a percentage via (a ÷ b) × 100%.'
  },
  'gh-jhs1-algebra-patterns-and-variables': {
    mode: 'sequences',
    title: 'Pattern & Linear Rule Machine',
    subtitle: 'Change first term a and common step d to watch Uₙ grow.',
    note: 'Consistent steps form a linear rule Uₙ = a + (n − 1)d.'
  },
  'gh-jhs1-algebra-expressions': {
    mode: 'algebra-tiles',
    title: 'Algebraic Expression Area Builder',
    subtitle: 'Slide p and q to expand and combine like terms visually.',
    note: 'Always group like terms with identical variable powers.'
  },
  'gh-jhs1-algebra-simple-equations': {
    mode: 'equation-balance',
    title: 'Linear Equation Balance Scale',
    subtitle: 'Tune a, b and target RHS to see how the scale balances at x.',
    note: 'Undo addition/subtraction first, then divide by the coefficient of x.'
  },
  'gh-jhs1-geometry-lines-and-angles': {
    mode: 'angles-parallel',
    title: 'Intersecting Lines & Angle Protractor',
    subtitle: 'Rotate the transversal angle θ and compare supplementary pairs.',
    note: 'Angles on a straight line always add to 180°.'
  },
  'gh-jhs1-geometry-2d-3d-shapes': {
    mode: 'pythagoras-polygons',
    title: 'Polygon Sides & Interior Angle Explorer',
    subtitle: 'Change side count n from triangles up to octagons.',
    note: 'Sum of interior angles of an n-gon = (n − 2) × 180°.'
  },
  'gh-jhs1-geometry-perimeter-area': {
    mode: 'mensuration',
    title: 'Perimeter & Area Surface Builder',
    subtitle: 'Adjust base/radius and height to compare boundary and area.',
    note: 'Perimeter is 1D distance; area covers 2D square units.'
  },
  'gh-jhs1-geometry-everyday-measurement': {
    mode: 'mensuration',
    title: 'Capacity & Everyday Measurement Lab',
    subtitle: 'Adjust solid dimensions to measure volume in cm³ and litres.',
    note: '1,000 cm³ holds exactly 1 litre of liquid.'
  },
  'gh-jhs1-data-collect-and-organise': {
    mode: 'data-averages',
    title: 'Community Survey Frequency Explorer',
    subtitle: 'Adjust group counts to see frequency bars and summary totals update.',
    note: 'Total frequency N equals the sum of all category counts.'
  },
  'gh-jhs1-data-tables-and-graphs': {
    mode: 'data-averages',
    title: 'Live Bar Chart & Frequency Builder',
    subtitle: 'Change class values to compare bar heights and modal groups.',
    note: 'The tallest bar marks the modal category.'
  },
  'gh-jhs1-data-interpret-and-summarise': {
    mode: 'data-averages',
    title: 'Mean, Median & Mode Bench',
    subtitle: 'Adjust a score and watch mean, median, mode and range react.',
    note: 'Sort the data first before locating the middle value (median).'
  },

  // JHS 2 (14)
  'gh-jhs2-number-integers': {
    mode: 'number-line',
    title: 'Directed Integers Number Line',
    subtitle: 'Combine negative and positive moves on the integer line.',
    note: 'Subtracting a negative moves right (a − (−b) = a + b).'
  },
  'gh-jhs2-number-fractions-percentages': {
    mode: 'fractions-pct',
    title: 'Fractions & Percentage Change Lab',
    subtitle: 'Explore part-whole fractions alongside decimal and % equivalents.',
    note: 'Percentage change = (change ÷ original amount) × 100%.'
  },
  'gh-jhs2-number-ratio-proportion': {
    mode: 'ratio-share',
    title: 'Ratio & Proportional Division Mixer',
    subtitle: 'Divide a total GH₵ amount cleanly in ratio a : b.',
    note: 'Find 1 share by dividing total by (a + b).'
  },
  'gh-jhs2-algebra-patterns-sequences': {
    mode: 'sequences',
    title: 'Arithmetic & Geometric Sequence Plotter',
    subtitle: 'Switch between +d (AP) and ×r (GP) steps across terms 1 to 6.',
    note: 'AP adds a constant difference; GP multiplies by a constant ratio.'
  },
  'gh-jhs2-algebra-expressions-formulae': {
    mode: 'algebra-tiles',
    title: 'Expanding Expressions & Formula Tiles',
    subtitle: 'Adjust factors to trace every partial product.',
    note: 'Each bracket term multiplies every term in the second bracket.'
  },
  'gh-jhs2-algebra-equations-inequalities': {
    mode: 'equation-balance',
    title: 'Equation Balance & Solution Finder',
    subtitle: 'Solve linear equations step by step and check balance.',
    note: 'Multiplying or dividing an inequality by a negative flips its sign.'
  },
  'gh-jhs2-geometry-angles-polygons': {
    mode: 'angles-parallel',
    title: 'Parallel Lines & Transversal Explorer',
    subtitle: 'Rotate the transversal to inspect alternate and co-interior angles.',
    note: 'Alternate angles are equal; co-interior angles sum to 180°.'
  },
  'gh-jhs2-geometry-transformations-symmetry': {
    mode: 'transformations',
    title: 'Coordinate Reflection, Rotation & Translation',
    subtitle: 'Switch transformation rules on triangle ABC and inspect coordinates.',
    note: 'Reflection across x = 0 negates the x-coordinate: (x, y) → (−x, y).'
  },
  'gh-jhs2-geometry-area-circumference': {
    mode: 'mensuration',
    title: 'Circle Circumference & Composite Area Lab',
    subtitle: 'Slide radius r to watch circumference and area scale.',
    note: 'Doubling radius doubles circumference (2πr) but quadruples area (πr²).'
  },
  'gh-jhs2-geometry-volume-surface-measurement': {
    mode: 'mensuration',
    title: '3D Cylinder & Prism Volume Lab',
    subtitle: 'Adjust radius and height to compute curved surface area and volume.',
    note: 'Prism volume = cross-section area × length.'
  },
  'gh-jhs2-data-surveys-sampling': {
    mode: 'data-averages',
    title: 'Survey Sample & Summary Statistics',
    subtitle: 'Modify subgroup counts to observe sample distribution shifts.',
    note: 'Representative random sampling reduces selection bias.'
  },
  'gh-jhs2-data-frequency-displays': {
    mode: 'data-averages',
    title: 'Frequency Table & Bar Display Lab',
    subtitle: 'Edit class counts and read relative percentages live.',
    note: 'Always label axes cleanly and choose consistent bar widths.'
  },
  'gh-jhs2-data-averages-spread': {
    mode: 'data-averages',
    title: 'Mean, Median, Mode & Spread Lab',
    subtitle: 'Test how one extreme outlier shifts the mean more than the median.',
    note: 'Range = largest value − smallest value.'
  },
  'gh-jhs2-data-interpret-chance': {
    mode: 'probability-tree',
    title: 'Chance & Two-Draw Probability Simulator',
    subtitle: 'Set bag counters and run 50 trials to compare experimental vs theoretical chance.',
    note: 'More repeated trials bring relative frequency closer to P(E).'
  },

  // JHS 3 (12)
  'gh-jhs3-number-indices': {
    mode: 'indices-std',
    title: 'Laws of Indices Workbench',
    subtitle: 'Experiment with base a and exponents m, n across index laws.',
    note: 'aᵐ × aⁿ = aᵐ⁺ⁿ and a⁰ = 1 (for a ≠ 0).'
  },
  'gh-jhs3-number-standard-form': {
    mode: 'indices-std',
    title: 'Standard Form & Scientific Notation Lab',
    subtitle: 'Slide coefficient and power of 10 to inspect expanded magnitude.',
    note: 'Standard form keeps 1 ≤ A < 10 multiplied by 10ⁿ.'
  },
  'gh-jhs3-number-ratio-finance': {
    mode: 'finance-interest',
    title: 'GH₵ Interest, Discount & Finance Simulator',
    subtitle: 'Vary principal, annual rate and years to compare Simple vs Compound totals.',
    note: 'Simple interest grows linearly; compound interest compounds each year.'
  },
  'gh-jhs3-algebra-expressions': {
    mode: 'algebra-tiles',
    title: 'Factorisation & Expansion Area Grid',
    subtitle: 'Adjust integer factors to see x² + bx + c built from tiles.',
    note: 'To factorise x² + bx + c, find two numbers adding to b and multiplying to c.'
  },
  'gh-jhs3-algebra-equations-formulae': {
    mode: 'equation-balance',
    title: 'Equations & Changing the Subject',
    subtitle: 'Balance both sides step by step to isolate x.',
    note: 'Reverse operations in reverse BEDMAS order to change the subject.'
  },
  'gh-jhs3-algebra-linear-systems': {
    mode: 'linear-systems',
    title: 'Simultaneous Linear Systems Plotter',
    subtitle: 'Adjust slopes and intercepts to pinpoint the unique intersection (x, y).',
    note: 'Parallel lines with equal slopes have no simultaneous solution.'
  },
  'gh-jhs3-geometry-constructions-bearings': {
    mode: 'vectors-bearings',
    title: 'Three-Figure Bearings & Vector Compass',
    subtitle: 'Sweep clockwise angle from North and combine displacement components.',
    note: 'Back bearing differs from forward bearing by ±180°.'
  },
  'gh-jhs3-geometry-pythagoras': {
    mode: 'pythagoras-polygons',
    title: 'Pythagoras Right-Triangle Explorer',
    subtitle: 'Adjust legs a and b to verify a² + b² = c² live.',
    note: 'Classic integer triples include (3,4,5), (5,12,13) and (8,15,17).'
  },
  'gh-jhs3-geometry-mensuration': {
    mode: 'mensuration',
    title: 'Cone, Cylinder & Mensuration Lab',
    subtitle: 'Switch shapes and slide radius/height for TSA and volume.',
    note: 'Cone volume = ⅓ × cylinder volume with the same radius and height.'
  },
  'gh-jhs3-data-collection': {
    mode: 'data-averages',
    title: 'Questionnaire & Data Collection Bench',
    subtitle: 'Test sample sizes and watch summary statistics stabilise.',
    note: 'Clear, neutral wording keeps survey responses accurate.'
  },
  'gh-jhs3-data-statistical-displays': {
    mode: 'data-averages',
    title: 'Frequency & Statistical Chart Studio',
    subtitle: 'Adjust bin heights to compute totals, mean and spread live.',
    note: 'Pie sectors obey Angle = (Frequency ÷ Total) × 360°.'
  },
  'gh-jhs3-data-probability': {
    mode: 'probability-tree',
    title: 'Probability Urn & Tree Diagram Lab',
    subtitle: 'Toggle replacement on or off and run live random draws.',
    note: 'Multiply along branches for AND; add across branches for OR.'
  },

  // SHS 1 (35)
  'gh-core-ss1-number-sets': {
    mode: 'number-line',
    title: 'Real Number Line & Ordering Explorer',
    subtitle: 'Compare integers, decimals and negative hops on the real line.',
    note: 'Numbers further right on the real line are always greater.'
  },
  'gh-core-ss1-fractions-percentages': {
    mode: 'fractions-pct',
    title: 'Market Fractions & Percentage Lab',
    subtitle: 'Compare fraction strips, decimals and percentages in real time.',
    note: 'Multiply by 100% to express any fraction or decimal as a percentage.'
  },
  'gh-core-ss1-ratio-rate': {
    mode: 'ratio-share',
    title: 'Ratio, Rate & Proportional Sharing Lab',
    subtitle: 'Share GH₵ quantities in ratio a : b and inspect unit rates.',
    note: 'Express both parts in identical units before simplifying a ratio.'
  },
  'gh-core-ss1-sets-surveys': {
    mode: 'sets-venn',
    title: 'Interactive Two-Set Venn Survey Builder',
    subtitle: 'Slide |U|, |A|, |B| and overlap |A∩B| to highlight survey regions.',
    note: 'Inclusion-Exclusion: n(A ∪ B) = n(A) + n(B) − n(A ∩ B).'
  },
  'gh-core-ss1-financial-mathematics': {
    mode: 'finance-interest',
    title: 'Smart Money GH₵ Finance Workbench',
    subtitle: 'Compare Simple vs Compound interest growth over years.',
    note: 'Check rates per annum alongside compounding period.'
  },
  'gh-core-ss1-algebraic-expressions': {
    mode: 'algebra-tiles',
    title: 'Algebraic Expansion & Area Lab',
    subtitle: 'Adjust p and q to inspect every tile of (x + p)(x + q).',
    note: 'Collect the two middle x-terms carefully before simplifying.'
  },
  'gh-core-ss1-patterns-functions': {
    mode: 'sequences',
    title: 'Functions, Mappings & Sequences Explorer',
    subtitle: 'Vary rule parameters and trace inputs n to outputs Uₙ.',
    note: 'A function assigns each domain input exactly one output.'
  },
  'gh-core-ss1-straight-lines-distance': {
    mode: 'linear-systems',
    title: 'Gradient, Straight Lines & Intersection Lab',
    subtitle: 'Adjust m₁, c₁ and m₂, c₂ to test slope, midpoint and crossing point.',
    note: 'Perpendicular lines satisfy m₁ × m₂ = −1.'
  },
  'gh-core-ss1-spatial-sense': {
    mode: 'pythagoras-polygons',
    title: 'Spatial Sense & Polygon Geometry Lab',
    subtitle: 'Vary polygon sides and triangle dimensions interactively.',
    note: 'Exterior angles of any convex polygon sum to 360°.'
  },
  'gh-core-ss1-spatial-sense-field-challenge': {
    mode: 'pythagoras-polygons',
    title: 'Site Planner Geometry Workbench',
    subtitle: 'Adjust right-triangle legs to plan exact diagonal spans.',
    note: 'Use Pythagoras c = √(a² + b²) for rectangular site diagonals.'
  },
  'gh-core-ss1-vectors-bearings': {
    mode: 'vectors-bearings',
    title: 'Vector Compass & Column Vector Navigator',
    subtitle: 'Rotate bearing from North and combine 2D vector displacements.',
    note: 'Read x-displacement horizontally and y-displacement vertically.'
  },
  'gh-core-ss1-trigonometry': {
    mode: 'trig-elevation',
    title: 'SOHCAHTOA & Sightline Triangle Lab',
    subtitle: 'Vary elevation angle θ and base distance d to compute sin, cos, tan.',
    note: 'tan θ = Opposite ÷ Adjacent directly solves height from ground distance.'
  },
  'gh-core-ss1-perimeter-area': {
    mode: 'mensuration',
    title: 'Perimeter, Sector & Area Studio',
    subtitle: 'Tune radius and dimensions to compare linear boundary and area.',
    note: 'Sector area scales as (θ / 360°) × πr².'
  },
  'gh-core-ss1-prism-volume': {
    mode: 'mensuration',
    title: 'Prism, Cylinder & Volume Vault',
    subtitle: 'Adjust solid radius and height to watch volume scale cleanly.',
    note: 'Volume equals base area multiplied by perpendicular height.'
  },
  'gh-core-ss1-statistical-reasoning-data-types': {
    mode: 'data-averages',
    title: 'Data Detective Live Dataset Bench',
    subtitle: 'Test categorical and numerical frequency bars and spreads.',
    note: 'Discrete data counts whole items; continuous data is measured on a scale.'
  },
  'gh-core-ss1-statistical-data-collection-methods': {
    mode: 'data-averages',
    title: 'Sampling & Frequency Explorer',
    subtitle: 'Edit group counts to observe changes in totals and mean.',
    note: 'Larger unbiased samples give more reliable population estimates.'
  },
  'gh-core-ss1-statistical-data-organisation-presentation': {
    mode: 'data-averages',
    title: 'Data Display Studio',
    subtitle: 'Adjust class values to inspect live bar heights and modal class.',
    note: 'Check class boundaries before plotting grouped frequency histograms.'
  },
  'gh-core-ss1-school-community-data-project': {
    mode: 'data-averages',
    title: 'Community Insight Summary Studio',
    subtitle: 'Explore mean, median, mode and range across community figures.',
    note: 'Compare median vs mean when data is skewed.'
  },
  'gh-core-ss1-statistical-investigation-mastery': {
    mode: 'data-averages',
    title: 'Community Data Investigation Lab',
    subtitle: 'Adjust values to inspect central tendency and dispersion.',
    note: 'Pair an average with a measure of spread for complete reporting.'
  },
  'gh-core-ss1-statistical-averages-inference': {
    mode: 'data-averages',
    title: 'Averages & Statistical Inference Arena',
    subtitle: 'Test how shifting one observation alters mean, median and standard deviation.',
    note: 'Standard deviation measures typical distance from the mean.'
  },
  'gh-core-ss1-probability-chance': {
    mode: 'probability-tree',
    title: 'Chance Compass & Experiment Simulator',
    subtitle: 'Adjust outcomes and run 50 trials against theoretical probability.',
    note: 'All mutually exclusive outcome probabilities sum to 1.'
  },
  'gh-core-ss1-probability-practice-lab': {
    mode: 'probability-tree',
    title: 'Fair Games Probability Tree Lab',
    subtitle: 'Compare with-replacement vs without-replacement sample spaces.',
    note: 'A fair game gives equal expected chance across players.'
  },
  'gh-core-ss1-real-number-properties': {
    mode: 'number-line',
    title: 'Closure, Commutativity & Real Line Lab',
    subtitle: 'Test operations along the real number line.',
    note: 'Real numbers remain closed under +, − and × (and ÷ by non-zero).'
  },
  'gh-core-ss1-real-number-mastery-challenge': {
    mode: 'number-line',
    title: 'Real Number Ordering & Operations',
    subtitle: 'Verify sums and differences of signed numbers.',
    note: 'Order negative values by magnitude: −8 < −3 < 0 < 4.'
  },
  'gh-core-ss1-fraction-operations': {
    mode: 'fractions-pct',
    title: 'Fraction Operations & Inverses Foundry',
    subtitle: 'Adjust numerator/denominator to inspect fraction bars and reciprocals.',
    note: 'Dividing by a/b is identical to multiplying by its reciprocal b/a.'
  },
  'gh-core-ss1-percentage-change-finance': {
    mode: 'fractions-pct',
    title: 'Budget Percentage & Discount Lab',
    subtitle: 'Compare fractional shares and percentage equivalents.',
    note: 'A 20% discount leaves 80% (0.80) of the original price.'
  },
  'gh-core-ss1-compound-interest-tax': {
    mode: 'finance-interest',
    title: 'Compound Growth, VAT & Tax Simulator',
    subtitle: 'Adjust GH₵ principal, rate and duration to compare interest curves.',
    note: 'Compound amount: A = P(1 + r/100)ᵗ.'
  },
  'gh-core-ss1-linear-equations-inequalities': {
    mode: 'equation-balance',
    title: 'Linear Equation Balance Trial',
    subtitle: 'Adjust coefficients and inspect the balanced solution x.',
    note: 'Check your answer by substituting x back into both sides.'
  },
  'gh-core-ss1-quadratic-factorisation-algebraic-fractions': {
    mode: 'algebra-tiles',
    title: 'Quadratic Factorisation Area Forge',
    subtitle: 'Explore (x + p)(x + q) rectangles and factored expressions.',
    note: 'Factorise numerators and denominators before cancelling common factors.'
  },
  'gh-core-ss1-integrated-mastery-trial': {
    mode: 'sets-venn',
    title: 'Integrated Mastery: Sets & Surveys Lab',
    subtitle: 'Connect set cardinality with survey reasoning.',
    note: 'Write down |A∩B| first when filling any Venn diagram.'
  },
  'gh-core-ss1-measurement-mastery-challenge': {
    mode: 'mensuration',
    title: 'Measurement Mastery Solid Builder',
    subtitle: 'Test surface area and volume across solid dimensions.',
    note: 'Match every length to the same unit before multiplying.'
  },
  'gh-core-ss1-proportional-reasoning-mastery': {
    mode: 'ratio-share',
    title: 'Proportional Reasoning Explorer',
    subtitle: 'Share totals cleanly in ratio a : b and inspect unit share value.',
    note: 'Proportions remain valid whenever cross-products match (a·d = b·c).'
  },
  'gh-core-ss1-algebraic-thinking-mastery': {
    mode: 'equation-balance',
    title: 'Algebraic Thinking Balance Lab',
    subtitle: 'Solve linear equations step by step on a balanced scale.',
    note: 'Isolate the variable term cleanly on one side of =.'
  },
  'gh-core-ss1-patterns-relationships-mastery': {
    mode: 'sequences',
    title: 'Patterns & Relationships Plotter',
    subtitle: 'Test arithmetic vs geometric growth across steps.',
    note: 'Check differences first; if unequal, check constant ratios.'
  },
  'gh-core-ss1-45-indicator-diagnostic': {
    mode: 'quadratic-graph',
    title: '45-Indicator Graph & Relationship Lab',
    subtitle: 'Explore curves, vertices and intercepts live.',
    note: 'Connecting algebra equations to visual curves catches sign errors fast.'
  },

  // SHS 2 (16)
  'gh-core-ss2-surds-indices-modulo': {
    mode: 'surds-modulo',
    title: 'Surds Simplifier & Modulo Clock',
    subtitle: 'Switch between simplifying √N = k√r and clock wrap-around (mod m).',
    note: 'Factor out the largest perfect square inside a surd; keep remainders in [0, m−1].'
  },
  'gh-core-ss2-simultaneous-equations': {
    mode: 'linear-systems',
    title: 'Simultaneous Intersection Strategist',
    subtitle: 'Slide two linear equations to find where both lines meet.',
    note: 'At the crossing point (x₀, y₀), both equations hold true together.'
  },
  'gh-core-ss2-sequences-progressions': {
    mode: 'sequences',
    title: 'AP & GP Sequence Architect',
    subtitle: 'Switch between Arithmetic (Uₙ = a+(n−1)d) and Geometric (arⁿ⁻¹) progressions.',
    note: 'Watch how geometric terms accelerate far faster than arithmetic terms.'
  },
  'gh-core-ss2-financial-exponential-models': {
    mode: 'finance-interest',
    title: 'Exponential Growth & Finance Modeller',
    subtitle: 'Vary principal, annual rate and years to compare compound growth.',
    note: 'A = P(1 + r)ᵗ models compound interest, depreciation (−r) and population growth.'
  },
  'gh-core-ss2-ratios-rates-proportions': {
    mode: 'ratio-share',
    title: 'Compound Ratios & Rate Pathfinder',
    subtitle: 'Split GH₵ amounts cleanly and inspect per-part values.',
    note: 'Link compound ratios (A:B and B:C) by matching the middle term B.'
  },
  'gh-core-ss2-proportional-real-world': {
    mode: 'variation',
    title: 'Direct & Inverse Real-World Variation',
    subtitle: 'Toggle y = kx vs y = k/x and adjust constant k.',
    note: 'Inverse proportion often models work-rate: double workers, halve time.'
  },
  'gh-core-ss2-transformations-vectors-reflections': {
    mode: 'transformations',
    title: 'Reflections & Coordinate Transformations',
    subtitle: 'Flip triangle ABC across axes or y = x and inspect image vertices.',
    note: 'Reflections reverse orientation while keeping shape and size congruent.'
  },
  'gh-core-ss2-rotations-successive-transformations': {
    mode: 'transformations',
    title: 'Rotations & Successive Maps Studio',
    subtitle: 'Rotate shape around the origin by 90°, 180° or 270°.',
    note: '90° anticlockwise about the origin maps (x, y) → (−y, x).'
  },
  'gh-core-ss2-vector-operations-navigation': {
    mode: 'vectors-bearings',
    title: 'Vector Operations & Navigation Compass',
    subtitle: 'Adjust compass bearing and vector components to read resultant magnitude.',
    note: 'Subtracting a vector adds its opposite direction.'
  },
  'gh-core-ss2-inverse-trig-elevation-depression': {
    mode: 'trig-elevation',
    title: 'Horizon Surveyor & Inverse Trigonometry',
    subtitle: 'Adjust sightline height & ground distance to compute θ = tan⁻¹(O/A).',
    note: 'Inverse trig recovers an unknown angle from a known ratio of sides.'
  },
  'gh-core-ss2-solid-measurement-surface-volume-capacity': {
    mode: 'mensuration',
    title: 'Solid Surface Area, Volume & Capacity Lab',
    subtitle: 'Test cylinder, cone and prism dimensions live.',
    note: 'Total surface area sums all faces including curved lateral surfaces.'
  },
  'gh-core-ss2-survey-design-data-quality': {
    mode: 'data-averages',
    title: 'Survey Design & Data Quality Bench',
    subtitle: 'Test data counts to inspect clean summary indicators.',
    note: 'Watch for sampling bias and double-barrelled survey items.'
  },
  'gh-core-ss2-data-displays-dispersion': {
    mode: 'data-averages',
    title: 'Dispersion, Range & Standard Deviation Lab',
    subtitle: 'Adjust data values to see spread widen or tighten around the mean.',
    note: 'Small standard deviation means data clusters closely around the mean.'
  },
  'gh-core-ss2-statistical-inference-community-project': {
    mode: 'data-averages',
    title: 'Community Evidence Summary Workbench',
    subtitle: 'Explore mean, median, mode and spread on real community datasets.',
    note: 'Draw cautious conclusions strictly supported by sample evidence.'
  },
  'gh-core-ss2-dependent-events-sample-space': {
    mode: 'probability-tree',
    title: 'Dependent Events (Without Replacement) Lab',
    subtitle: 'Toggle Without Replacement and watch second-stage denominators drop.',
    note: 'P(A then B) = P(A) × P(B | A).'
  },
  'gh-core-ss2-independent-events-everyday-probability': {
    mode: 'probability-tree',
    title: 'Independent Events Probability Simulator',
    subtitle: 'Run repeated trials with replacement and verify P(A ∩ B) = P(A)·P(B).',
    note: 'With replacement, the second draw’s probabilities remain unchanged.'
  },

  // SHS 3 (11)
  'gh-core-ss3-logical-reasoning': {
    mode: 'logic-truth',
    title: 'Propositional Logic & Truth-Table Lab',
    subtitle: 'Toggle truth values of P and Q across AND, OR, IMPLIES and IFF.',
    note: 'Contrapositive (¬Q ⇒ ¬P) always shares the exact truth value of P ⇒ Q.'
  },
  'gh-core-ss3-variation': {
    mode: 'variation',
    title: 'Direct & Inverse Variation Engineer',
    subtitle: 'Switch between y = kx and y = k/x and test k sliders.',
    note: 'Always find the constant of proportionality k first from given pairs.'
  },
  'gh-core-ss3-quadratic-equations': {
    mode: 'quadratic-graph',
    title: 'Quadratic Equations & Discriminant Explorer',
    subtitle: 'Adjust a, b and c to watch Δ = b² − 4ac count real roots.',
    note: 'Δ > 0 gives 2 roots, Δ = 0 gives 1 repeated root, Δ < 0 gives none in ℝ.'
  },
  'gh-core-ss3-quadratic-graphs': {
    mode: 'quadratic-graph',
    title: 'Parabola Cartographer & Turning Point Lab',
    subtitle: 'Slide a, b, c to move the parabola vertex and intercepts live.',
    note: 'a > 0 opens upward (minimum); a < 0 opens downward (maximum).'
  },
  'gh-core-ss3-quadratic-relationships': {
    mode: 'quadratic-graph',
    title: 'Quadratic Symmetry & Optimisation Lab',
    subtitle: 'Locate the vertex x = −b/(2a) where maximum or minimum value occurs.',
    note: 'Roots sit symmetrically at equal distances left and right of x = −b/(2a).'
  },
  'gh-core-ss3-circle-cartographer': {
    mode: 'circle-theorems',
    title: 'Circle Cartographer: Central vs Inscribed Angles',
    subtitle: 'Drag the circumference point around the arc and track 2θ vs θ.',
    note: 'Angle at centre = 2 × angle at circumference on the same arc.'
  },
  'gh-core-ss3-circle-theorem-keeper': {
    mode: 'circle-theorems',
    title: 'Circle Theorems & Cyclic Quadrilateral Lab',
    subtitle: 'Switch between Central/Inscribed, Semicircle 90° and Cyclic Quadrilaterals.',
    note: 'Opposite angles in a cyclic quadrilateral sum to 180°.'
  },
  'gh-core-ss3-tangent-sentinel': {
    mode: 'circle-theorems',
    title: 'Tangent–Radius 90° & Alternate Segment Lab',
    subtitle: 'Inspect the perpendicular radius–tangent pair interactively.',
    note: 'Two tangents from an external point have equal lengths to the circle.'
  },
  'gh-core-ss3-compass-locus-architect': {
    mode: 'vectors-bearings',
    title: 'Compass Bearing & Locus Pathfinder',
    subtitle: 'Explore bearings, angles and distance constraints from fixed landmarks.',
    note: 'Equidistant from a point forms a circle; from two points forms a bisector.'
  },
  'gh-core-ss3-wave-cartographer': {
    mode: 'trig-waves',
    title: 'Trigonometric Wave Cartographer',
    subtitle: 'Adjust amplitude A, frequency k and horizontal line c on [0°, 360°].',
    note: 'Amplitude = |A|; period of sin(kx) is 360° ÷ k.'
  },
  'gh-core-ss3-equation-decoder': {
    mode: 'trig-waves',
    title: 'Trigonometric Equation Decoder [0°, 360°]',
    subtitle: 'Slide horizontal target y = c across the sine/cosine wave to spot all roots.',
    note: 'Use ASTC quadrants to verify every solution angle inside [0°, 360°].'
  }
};

function inferFamily(mode: GhanaMathLabMode): GhanaMathLabFamily {
  if (['number-line', 'fractions-pct', 'ratio-share', 'sets-venn', 'indices-std', 'surds-modulo', 'finance-interest', 'variation'].includes(mode)) {
    return 'number';
  }
  if (['equation-balance', 'algebra-tiles', 'sequences', 'linear-systems', 'quadratic-graph', 'logic-truth'].includes(mode)) {
    return 'algebra';
  }
  if (['angles-parallel', 'pythagoras-polygons', 'transformations', 'vectors-bearings', 'trig-elevation', 'trig-waves', 'circle-theorems', 'mensuration'].includes(mode)) {
    return 'geometry';
  }
  return 'data';
}

export function getGhanaMathLabSpec(missionId: string): GhanaMathLabSpec | null {
  const entry = SPECS[missionId];
  if (!entry) return null;
  return { ...entry, family: inferFamily(entry.mode) };
}

export const ALL_GHANA_MATH_LAB_IDS = Object.keys(SPECS);

import type { ArcInfo, Mission } from '../types';

export const GHANA_SS1_ALGEBRAIC_THINKING_MASTERY_ARCS: ArcInfo[] = [
  {
    n: 19,
    unit: 0,
    subject: 'ghcoremath',
    title: 'Applications of Expressions, Equations and Inequalities: Mastery',
    pages: 'NaCCA SHS 1 · pp. 52–66'
  },
  {
    n: 20,
    unit: 0,
    subject: 'ghcoremath',
    title: 'Patterns and Relationships: Mastery',
    pages: 'NaCCA SHS 1 · pp. 67–83'
  }
];

const lesson = (text: string) => ({ who: 's' as const, vis: 'infowords', text });
const question = (q: string, a: string[], why: string) => ({ q, a, why });

export const GHANA_SS1_ALGEBRAIC_THINKING_MASTERY_MISSIONS: Mission[] = [
  {
    id: 'gh-core-ss1-algebraic-thinking-mastery',
    arc: 25,
    sec: 'Algebraic reasoning',
    pages: 'NaCCA SHS 1 · pp. 52–66',
    hue: 278,
    horns: 2,
    eyes: 2,
    title: 'The Algebraic Thinking Mastery Expedition',
    topic: 'Build and simplify expressions from patterns, factorise quadratic expressions, operate on algebraic fractions, rearrange formulae, and solve linear equations and inequalities in real-life situations.',
    demon: 'The Balance and Bracket Warden',
    tech: 'Algebra Form · Twenty-Second Technique: Model, Transform and Verify',
    scenes: [
      lesson('<p><b>Algebra turns patterns into models.</b> A variable is a letter that stands for a number. Imagine a square arrangement with n rows and n columns of tiles, plus two extra rows of n border tiles. The total is n² + 2n. For n = 3, the model has 9 + 6 = 15 tiles. Test a rule with more than one value before trusting it.</p>'),
      lesson('<p><b>Translate words into expressions.</b> “Nine more than x” is x + 9, while “five less than x” is x − 5. If a school club buys n exercise books at GH₵7 each and pays a one-time GH₵12 delivery fee, the total cost is 7n + 12. An expression describes a quantity; it does not claim that the quantity equals a particular value.</p>'),
      lesson('<p><b>Use all four operations with expressions.</b> Combine like terms: x + 2y + 5x − y = 6x + y. Multiply coefficients and variables: 4x × 2y = 8xy. Use index laws carefully: x² × x³ = x⁵. Divide coefficients and subtract powers when the base is the same: 10b² ÷ 2b = 5b, provided b ≠ 0.</p>'),
      lesson('<p><b>Expand brackets, then reverse the process.</b> (x + 3)(x + 4) = x² + 7x + 12. To factorise x² + 7x + 12, find two numbers whose sum is 7 and product is 12: 3 and 4. Therefore x² + 7x + 12 = (x + 3)(x + 4). Expand your factors to check.</p>'),
      lesson('<p><b>Factorise when the leading coefficient is not one.</b> For 2x² + 7x + 3, multiply 2 by 3 to get 6. The numbers 6 and 1 multiply to 6 and add to 7. Split the middle term: 2x² + 6x + x + 3. Group: 2x(x + 3) + 1(x + 3) = (2x + 1)(x + 3).</p>'),
      lesson('<p><b>Recognise special products.</b> A² + 2AB + B² = (A + B)² and A² − 2AB + B² = (A − B)². The difference of two squares is A² − B² = (A + B)(A − B). For example, x² − 25 = (x + 5)(x − 5). Do not apply this subtraction identity to x² + 25.</p>'),
      lesson('<p><b>Multiply and divide algebraic fractions.</b> Factorise where possible, multiply numerators and denominators, and simplify common factors. For (2x/3) × (9/(4x)), the result is 3/2 when x ≠ 0. To divide by an algebraic fraction, multiply by its reciprocal. Every original denominator must remain non-zero.</p>'),
      lesson('<p><b>Add and subtract algebraic fractions.</b> Find a common denominator before combining numerators. For 1/(x − 1) + 2/(x + 1), use (x − 1)(x + 1) = x² − 1. The numerator becomes (x + 1) + 2(x − 1) = 3x − 1, so the result is (3x − 1)/(x² − 1), where x ≠ 1 and x ≠ −1.</p>'),
      lesson('<p><b>Know when an algebraic fraction is zero or undefined.</b> A fraction is zero when its numerator is zero and its denominator is not zero. It is undefined when its denominator is zero. For (x − 2)/(x + 4), the fraction is zero at x = 2 and undefined at x = −4. Cancelling a factor does not remove a restriction from the original expression.</p>'),
      lesson('<p><b>Change the subject of a formula.</b> From y = mx + c, subtract mx to get c = y − mx. From E = mv², divide by m and take the square root to get v = √(E/m), for m > 0 and a non-negative E/m. Reverse operations in a sensible order and keep both sides balanced.</p>'),
      lesson('<p><b>Solve linear equations and check the answer.</b> For 7(x − 6) = 3(x + 9), expand to get 7x − 42 = 3x + 27. Collect terms: 4x = 69, so x = 69/4. Substitute this value into both original sides; they should be equal. A check can reveal an expansion or sign error.</p>'),
      lesson('<p><b>Solve inequalities as sets of values.</b> The solution of −3x ≤ 12 is x ≥ −4 because dividing by a negative number reverses the inequality sign. An open circle on a number line excludes the boundary; a filled circle includes it. Shade in the direction that contains every solution.</p>'),
      lesson('<p><b>Model a practical decision.</b> A school club has GH₵50. Each activity pack costs GH₵4 and delivery costs GH₵10 once. If n is the number of packs, 4n + 10 ≤ 50. Subtract 10 and divide by 4: n ≤ 10. Since packs are whole items, the club can buy at most 10. Check the result in the original budget.</p>'),
      lesson('<p><b>Explain your method, not just your answer.</b> Decide whether a situation needs an expression, equation or inequality. Show each transformation, state any excluded denominator values, and check the final result. A correct model should describe the situation and use sensible units.</p>'),
      { who: 'd', vis: 'demon', text: 'I will swap your signs, hide common factors and make every model unbalanced. Show the pattern, justify each transformation and verify your result!' },
      { type: 'battle' }
    ],
    quiz: [
      question('A tile pattern has n² + 2n tiles. How many tiles are there when n = 4?', ['24', '16', '18', '12'], 'Substitute n = 4: 4² + 2(4) = 16 + 8 = 24.'),
      question('Simplify x + 2y + 5x − y.', ['6x + y', '6x + 3y', '5x + y', '6xy'], 'Combine like terms: x + 5x = 6x and 2y − y = y.'),
      question('Simplify 4x × 2y.', ['8xy', '6xy', '8x + y', '8x²y'], 'Multiply the coefficients 4 × 2 and write the variable factors x and y: 8xy.'),
      question('Factorise 2x² + 7x + 3.', ['(2x + 1)(x + 3)', '(2x + 3)(x + 1)', '(x + 1)(x + 3)', '(2x − 1)(x − 3)'], 'Expanding (2x + 1)(x + 3) gives 2x² + 7x + 3.'),
      question('Which is the factorised form of x² − 25?', ['(x + 5)(x − 5)', '(x − 5)²', '(x + 25)(x − 1)', '(x + 5)²'], 'Use the difference of two squares: x² − 5² = (x + 5)(x − 5).'),
      question('Simplify 1/(x − 1) + 2/(x + 1).', ['(3x − 1)/(x² − 1), x ≠ ±1', '(3x + 1)/(x² + 1)', '3/(2x)', '(x + 1)/(x − 1)'], 'Use the common denominator x² − 1. The numerator is (x + 1) + 2(x − 1) = 3x − 1.'),
      question('For (x − 2)/(x + 4), which statement is correct?', ['Zero at x = 2; undefined at x = −4', 'Zero at x = −4; undefined at x = 2', 'Zero at x = 4; undefined at x = −2', 'It is always undefined'], 'The numerator is zero at 2, while the denominator is zero at −4.'),
      question('If E = mv² and m > 0, which formula makes v the subject?', ['v = √(E/m)', 'v = E/m', 'v = m/E', 'v = √(Em)'], 'Divide by m to get v² = E/m, then take the positive square root for speed.'),
      question('Solve 7(x − 6) = 3(x + 9).', ['x = 69/4', 'x = 11', 'x = 17', 'x = 69'], 'Expand and collect terms: 7x − 42 = 3x + 27, so 4x = 69.'),
      question('Solve −3x ≤ 12.', ['x ≥ −4', 'x ≤ −4', 'x ≥ 4', 'x ≤ 4'], 'Divide both sides by −3 and reverse ≤ to ≥, giving x ≥ −4.')
    ]
  },
  {
    id: 'gh-core-ss1-patterns-relationships-mastery',
    arc: 26,
    sec: 'Algebraic reasoning',
    pages: 'NaCCA SHS 1 · pp. 67–83',
    hue: 198,
    horns: 2,
    eyes: 2,
    title: 'The Patterns and Relationships Mastery Expedition',
    topic: 'Distinguish relations from functions, determine linear, quadratic and exponential mapping rules, draw and interpret linear-function graphs, and connect straight-line models to everyday situations.',
    demon: 'The Mapping Mirage',
    tech: 'Function Form · Twenty-Third Technique: Find the Rule, Read the Graph',
    scenes: [
      lesson('<p><b>A relation connects inputs and outputs.</b> We can show a relation using ordered pairs, a table, arrows or a graph. For example, {(1, 3), (2, 5), (3, 7)} connects each input to an output. The first set is the domain; the outputs that actually occur form the range.</p>'),
      lesson('<p><b>A function gives each input exactly one output.</b> Different inputs may share an output, but one input cannot point to two different outputs. A mapping in which input 2 points to both 4 and 6 is not a function. On a graph, a vertical line must not cross the graph more than once.</p>'),
      lesson('<p><b>Find a linear mapping rule from a table.</b> In the table x = 0, 2, 4 and y = 4, 8, 12, the output rises by 4 when the input rises by 2. The rate of change is 4 ÷ 2 = 2. Since x = 0 gives y = 4, the rule is y = 2x + 4.</p>'),
      lesson('<p><b>Recognise a quadratic pattern.</b> The square numbers 1, 4, 9, 16 come from y = x² for x = 1, 2, 3, 4. The differences are 3, 5, 7, so the first differences are not constant. The rule uses the square of the input, not a constant multiplier.</p>'),
      lesson('<p><b>Recognise exponential mappings.</b> An exponential mapping has a constant multiplier between consecutive outputs. For x = 1, 2, 3, 4 and y = 2, 4, 8, 16, each output doubles, so y = 2ˣ. The constant ratio is 2; this differs from a linear mapping, which has a constant difference for equal input steps.</p>'),
      lesson('<p><b>Exponential mappings can decrease.</b> The outputs 1/3, 1/9, 1/27, 1/81 are each one third of the previous output. For x = 1, 2, 3, 4, the rule is y = (1/3)ˣ. A constant ratio below 1 produces a decreasing sequence. Check several terms to distinguish it from an arithmetic pattern.</p>'),
      lesson('<p><b>Draw a linear-function graph.</b> For y = 2x + 4, make a table of values, plot each ordered pair and draw a straight line through them. The gradient 2 tells us that y rises by 2 for every 1-unit increase in x. The vertical intercept 4 is where the line crosses the y-axis.</p>'),
      lesson('<p><b>Interpret the gradient and intercept in context.</b> Suppose a school print shop charges GH₵4 as a fixed setup fee plus GH₵2 per booklet. The total cost is y = 2x + 4. The gradient is the cost of each extra booklet; the intercept is the starting fee when no booklets are printed.</p>'),
      lesson('<p><b>Changing a line changes its graph.</b> In y = mx + c, changing c moves the line up or down without changing its gradient, so the lines remain parallel. Changing m changes the steepness and direction of the line. A zero gradient gives a horizontal line; a negative gradient falls from left to right.</p>'),
      lesson('<p><b>Connect equations and straight-line graphs.</b> An equation such as 3x − 7y = 16 is linear in two variables and represents a straight line. Rearrange it to y = (3/7)x − 16/7 to read the gradient and vertical intercept. Use points from the equation to check that the plotted line is correct.</p>'),
      lesson('<p><b>Choose a model that fits the pattern.</b> Equal differences suggest a linear rule; equal ratios suggest an exponential rule; square-number growth may suggest a quadratic rule. A pattern should be tested against several terms, and a real-life model should be checked against the situation and its units.</p>'),
      lesson('<p><b>Mini investigation — plan a school event.</b> A school club compares a fixed venue fee plus a cost per participant with a second plan that charges only per participant. Write a rule for each plan, complete a value table, graph both linear functions and explain where the costs are equal. The intersection represents the break-even number of participants.</p>'),
      { who: 'd', vis: 'demon', text: 'I will disguise constant ratios as constant differences and bend your straight lines. Test the mapping, reveal its rule and explain what the graph tells you!' },
      { type: 'battle' }
    ],
    quiz: [
      question('A relation sends input 2 to both 4 and 6. Is it a function?', ['No, because one input has two outputs.', 'Yes, because every output is different.', 'Yes, because there are two pairs.', 'No, because outputs must be smaller.'], 'A function must assign exactly one output to each input.'),
      question('For y = 2x + 4, what is y when x = 3?', ['10', '8', '7', '14'], 'Substitute x = 3: y = 2(3) + 4 = 10.'),
      question('Which pattern is exponential?', ['2, 4, 8, 16', '2, 4, 6, 8', '1, 4, 9, 16', '5, 8, 11, 14'], 'The outputs are multiplied by 2 each time, so the ratio is constant.'),
      question('The sequence 3, 6, 12, 24 follows a constant ratio. What is the next term?', ['48', '36', '30', '27'], 'Each term is multiplied by 2, so 24 × 2 = 48.'),
      question('What is the next term in 81, 27, 9, 3?', ['1', '0', '2', '−3'], 'Each term is divided by 3, so 3 ÷ 3 = 1.'),
      question('Which rule generates 1, 4, 9, 16 for inputs 1, 2, 3, 4?', ['y = x²', 'y = 2x', 'y = 2ˣ', 'y = x + 1'], 'The outputs are the squares of the inputs: 1², 2², 3² and 4².'),
      question('For y = −3x + 5, what are the gradient and vertical intercept?', ['Gradient −3; intercept 5', 'Gradient 5; intercept −3', 'Gradient 3; intercept 5', 'Gradient −3; intercept 0'], 'Compare with y = mx + c: m = −3 and c = 5.'),
      question('What happens when c changes in y = mx + c but m stays the same?', ['The line shifts vertically and stays parallel.', 'The gradient changes.', 'The line becomes a curve.', 'The line becomes vertical.'], 'The gradient is unchanged, so the lines have the same slope and are parallel.'),
      question('Which equation represents a straight line?', ['3x − 7y = 16', 'y = x²', 'y = 2ˣ', 'xy = 12'], 'An equation that is first degree in x and y represents a straight line.'),
      question('A print shop charges GH₵4 once and GH₵2 per booklet. Which rule gives the total cost y for x booklets?', ['y = 2x + 4', 'y = 4x + 2', 'y = 2x − 4', 'y = 4x'], 'The variable charge is 2x and the fixed setup fee is 4, so y = 2x + 4.')
    ]
  }
];

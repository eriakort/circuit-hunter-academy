import type { ArcInfo, Mission } from '../types';

export const GHANA_SS1_PATTERNS_ARCS: ArcInfo[] = [
  {
    n: 7,
    unit: 0,
    subject: 'ghcoremath',
    title: 'Patterns, Relations and Functions',
    pages: 'NaCCA SHS 1 · pp. 74–78'
  }
];

const lesson = (text: string) => ({ who: 's' as const, vis: 'infowords', text });
const question = (q: string, a: string[], why: string) => ({ q, a, why });

export const GHANA_SS1_PATTERNS_MISSIONS: Mission[] = [
  {
    id: 'gh-core-ss1-patterns-functions',
    arc: 0,
    sec: 'Algebraic reasoning',
    pages: 'NaCCA SHS 1 · pp. 74–78',
    hue: 190,
    horns: 2,
    eyes: 2,
    title: 'The Mapping Maze',
    topic: 'Distinguish relations and functions, identify mapping rules and draw and interpret simple linear-function graphs.',
    demon: 'The Rule Reverser',
    tech: 'Function Form · Seventh Technique: Input-to-Output',
    scenes: [
      lesson('<p>A <b>relation</b> connects members of one set to members of another set. The first set contains the inputs; the second contains possible outputs. We can show a relation with ordered pairs, a table, arrows or a graph.</p>'),
      lesson('<p>A <b>function</b> is a special relation: every input must have exactly one output. An input may share its output with another input, but one input cannot point to two different outputs. For example, “multiply by 2” sends 1 to 2, 2 to 4 and 3 to 6.</p>'),
      lesson('<p>A mapping rule tells us how to turn each input into an output. If the rule is y = 2x + 1, then input 0 gives output 1, input 1 gives 3, and input 2 gives 5. The domain is the set of inputs; the range is the set of outputs that actually occur.</p>'),
      lesson('<p>Plot the pairs (0, 1), (1, 3) and (2, 5) on coordinate axes. They lie on a straight line because the rule is linear. In y = mx + c, m is the gradient and c is where the line crosses the vertical axis. Here, y = 2x + 1 has gradient 2 and vertical intercept 1.</p>'),
      lesson('<p>Read a graph as a story. If x represents the number of exercise books and y = 2x + 1 represents their total cost in Ghana cedis, the graph shows how the cost changes as more books are bought. The gradient tells us the cost added for each extra book, while the intercept is the starting amount.</p>'),
      { who: 'd', vis: 'demon', text: 'I will send one input to two different outputs and scramble every mapping rule!' },
      { type: 'battle' }
    ],
    quiz: [
      question('Which statement must be true for a relation to be a function?', [
        'Each input has exactly one output.',
        'Each output must have exactly one input.',
        'Every input must have two outputs.',
        'The inputs and outputs must be equal.'
      ], 'A function assigns one and only one output to each input. Different inputs may share an output.'),
      question('Is the relation {(1, 3), (2, 4), (1, 5)} a function?', [
        'No, because input 1 has two different outputs.',
        'Yes, because there are three ordered pairs.',
        'Yes, because all outputs are different.',
        'No, because the outputs are larger than the inputs.'
      ], 'Input 1 is paired with both 3 and 5, so the relation is not a function.'),
      question('For the rule y = 3x + 2, what is the output when x = 4?', [
        '14',
        '12',
        '10',
        '9'
      ], 'Substitute x = 4: y = 3 × 4 + 2 = 14.'),
      question('For the linear function y = 2x + 1, what does the number 2 represent?', [
        'The gradient: y increases by 2 when x increases by 1.',
        'The vertical intercept.',
        'The only possible input.',
        'The range of the function.'
      ], 'In y = mx + c, m is the gradient. It describes the change in y for each one-unit increase in x.')
    ]
  }
];

import type { ArcInfo, Mission, UnitInfo } from '../types';

export const GHANA_CORE_MATH_SS3_TRIG_UNIT: UnitInfo = {
  title: 'Geometry Around Us · Measurement',
  ch: 'SS3 · NaCCA pp. 355–367',
  subject: 'ghcoremath3'
};

export const GHANA_CORE_MATH_SS3_TRIG_ARCS: ArcInfo[] = [{
  n: 1,
  unit: 0,
  subject: 'ghcoremath3',
  title: 'Trigonometric Graphs and Equations',
  pages: 'NaCCA SHS 3 · pp. 355–367'
}];

const q = (prompt: string, answers: string[], why: string) => ({ q: prompt, a: answers, why });
const lesson = (text: string) => ({ who: 's' as const, vis: 'infowords', text });

export const GHANA_CORE_MATH_SS3_TRIG_MISSIONS: Mission[] = [
  {
    id: 'gh-core-ss3-wave-cartographer', arc: 0, sec: '3.3.2', pages: 'NaCCA SHS 3 · pp. 358–366',
    hue: 190, horns: 2, eyes: 3, title: 'The Wave Pattern Cartographer',
    topic: 'Sketch and interpret sine, cosine and tangent graphs, then analyse their key features and transformations.',
    demon: 'The Oscillation Phantom', tech: 'Graph Form · SHS 3 Technique: Wave Sight',
    scenes: [
      lesson('<p>Trigonometric graphs show how an angle and a ratio change together. We measure the horizontal angle θ in degrees here, from 0° to 360°. A useful way to sketch a graph is to mark the key angles 0°, 90°, 180°, 270° and 360° first, plot the corresponding values, then join them with a smooth curve.</p>'),
      lesson('<p>The <b>sine graph</b> starts at 0, rises to 1 at 90°, returns to 0 at 180°, falls to −1 at 270°, and returns to 0 at 360°. The <b>cosine graph</b> starts at 1, reaches 0 at 90°, −1 at 180°, 0 at 270°, and returns to 1 at 360°. Both have range −1 to 1 and repeat every 360°.</p>'),
      lesson('<p>The <b>tangent graph</b> is sin θ divided by cos θ. It is 0 at 0°, 180° and 360°, but it is undefined at 90° and 270° because cos θ is zero there. These angles create vertical asymptotes. Tangent repeats every 180° and has no maximum or minimum; its range is all real numbers.</p>'),
      lesson('<p>For y = a sin(bθ) + d or y = a cos(bθ) + d, the amplitude is |a|, the period is 360° ÷ |b|, and the middle line is y = d. The graph is stretched or compressed vertically by a, and shifted up or down by d. A negative a reflects the wave in its middle line.</p>'),
      lesson('<p>For y = a tan(bθ) + d, the period is 180° ÷ |b| and the middle line is y = d. Tangent has no amplitude because its branches do not have fixed maximum and minimum values. Changing b moves the asymptotes closer together or farther apart.</p>'),
      lesson('<p>Example: y = 2 sin θ + 3 has amplitude 2 and middle line y = 3. Its maximum is 3 + 2 = 5 and its minimum is 3 − 2 = 1. Example: y = cos(2θ) completes two full cycles between 0° and 360°, so its period is 180°.</p>'),
      { type: 'sort', title: 'Match each graph feature to its meaning', cats: [['Amplitude', 'Wave height'], ['Period', 'Repeat length'], ['Midline', 'Vertical centre'], ['Asymptote', 'Undefined boundary']], items: [
        { n: 'Distance from the midline to a sine or cosine peak', c: 0, i: 'height' },
        { n: 'Horizontal distance before a graph repeats', c: 1, i: 'repeat' },
        { n: 'Horizontal line halfway between maximum and minimum', c: 2, i: 'centre' },
        { n: 'Vertical line a tangent graph approaches but never meets', c: 3, i: 'boundary' }
      ] },
      { who: 'd', vis: 'demon', text: 'Do not draw through a tangent asymptote! Mark the undefined angles first, then sketch each separate branch.' },
      { type: 'battle' }
    ],
    quiz: [
      q('What is the value of sin 90°?', ['1', '0', '−1', 'Undefined'], 'The sine graph reaches its maximum value of 1 at 90°.'),
      q('What is the period of y = cos θ?', ['360°', '180°', '90°', '720°'], 'Cosine completes one full cycle every 360°.'),
      q('At which angle is tan θ undefined in the interval 0° to 360°?', ['90°', '45°', '180°', '360°'], 'At 90°, cos θ = 0, so tan θ = sin θ ÷ cos θ is undefined. It is also undefined at 270°.'),
      q('For y = 3 sin θ − 2, what is the amplitude?', ['3', '−2', '2', '5'], 'The amplitude is the absolute value of the coefficient of sine: |3| = 3.'),
      q('For y = 2 sin θ + 3, what is the maximum value?', ['5', '3', '2', '1'], 'The midline is 3 and the amplitude is 2, so the maximum is 3 + 2 = 5.'),
      q('What is the period of y = sin(2θ)?', ['180°', '360°', '90°', '720°'], 'The period is 360° ÷ 2 = 180°.'),
      q('What is the range of y = tan θ?', ['All real numbers', '[−1, 1]', '[0, 1]', '[−90°, 90°]'], 'Tangent can take every real y-value, although it is undefined at its vertical asymptotes.')
    ]
  },
  {
    id: 'gh-core-ss3-equation-decoder', arc: 0, sec: '3.3.2', pages: 'NaCCA SHS 3 · p. 367',
    hue: 265, horns: 2, eyes: 3, title: 'The Trigonometric Equation Decoder',
    topic: 'Read key features from trigonometric graphs to determine equations and solve related trigonometric problems.',
    demon: 'The Hidden Wave', tech: 'Equation Form · SHS 3 Technique: Curve Decoding',
    scenes: [
      lesson('<p>A trigonometric graph contains clues about its equation. First find the <b>midline</b>: it is halfway between the highest and lowest values. Next find the <b>amplitude</b> for sine or cosine: half the vertical distance from maximum to minimum. These give d and |a| in y = a sin(b(θ − c)) + d or y = a cos(b(θ − c)) + d.</p>'),
      lesson('<p>To find the period, measure the horizontal distance between two matching points, such as consecutive peaks. For sine and cosine, b = 360° ÷ period. For tangent, b = 180° ÷ period. A horizontal shift tells you c; compare where the wave crosses its midline going upwards for a sine graph, or where a peak occurs for a cosine graph.</p>'),
      lesson('<p>Example: a sine graph has maximum 4, minimum 0, and period 360°. Its midline is (4 + 0) ÷ 2 = 2 and its amplitude is (4 − 0) ÷ 2 = 2. If it crosses the midline going upwards at 0°, one matching equation is y = 2 sin θ + 2.</p>'),
      lesson('<p>Graph intersections solve equations. To solve sin θ = 0.5 on 0° ≤ θ ≤ 360°, draw or read the horizontal line y = 0.5 and find where it meets the sine curve: θ = 30° and 150°. There can be more than one answer in a full turn, so check the whole stated interval.</p>'),
      lesson('<p>Similarly, cos θ = −0.5 has solutions 120° and 240° on 0° to 360°. The equation tan θ = 1 has solutions 45° and 225°. Always respect the graph domain and exclude any angle where tangent is undefined.</p>'),
      lesson('<p>When a graph is shifted, stretched or compressed, use its features rather than guessing. Read the midline, amplitude (if sine or cosine), period and horizontal shift. Substitute a clear point into your proposed equation to check that it gives the graph’s value.</p>'),
      { type: 'sort', title: 'Match the graph clue to the equation feature', cats: [['Highest and lowest values', 'Amplitude and midline'], ['Distance between peaks', 'Period'], ['Shift along the angle axis', 'Phase shift'], ['Crossing a horizontal line', 'Equation solution']], items: [
        { n: 'Read the top and bottom of a sine wave', c: 0, i: 'vertical' },
        { n: 'Measure from one peak to the next peak', c: 1, i: 'cycle' },
        { n: 'Find where the whole curve starts later or earlier', c: 2, i: 'horizontal' },
        { n: 'Find angles where the graph has a specified y-value', c: 3, i: 'intersection' }
      ] },
      { who: 'd', vis: 'demon', text: 'A graph is an equation in picture form. Decode its height, centre line, repeat length and shift before writing a formula!' },
      { type: 'battle' }
    ],
    quiz: [
      q('A sine graph has maximum 5 and minimum 1. What is its midline?', ['y = 3', 'y = 2', 'y = 4', 'y = 6'], 'The midline is halfway between 5 and 1: (5 + 1) ÷ 2 = 3.'),
      q('A sine graph has maximum 5 and minimum 1. What is its amplitude?', ['2', '3', '4', '5'], 'Amplitude is half the vertical range: (5 − 1) ÷ 2 = 2.'),
      q('A sine graph repeats every 90°. What is the value of b in y = sin(bθ)?', ['4', '2', '1', '0.5'], 'For sine, b = 360° ÷ period = 360° ÷ 90° = 4.'),
      q('Solve sin θ = 0.5 for 0° ≤ θ ≤ 360°.', ['30° and 150°', '30° only', '150° and 210°', '60° and 120°'], 'The horizontal line y = 0.5 meets the sine curve at 30° and 150° in one full turn.'),
      q('Solve cos θ = −0.5 for 0° ≤ θ ≤ 360°.', ['120° and 240°', '60° and 300°', '90° and 270°', '120° only'], 'Cosine is −0.5 in the second and third quadrants: 120° and 240°.'),
      q('Solve tan θ = 1 for 0° ≤ θ ≤ 360°.', ['45° and 225°', '45° only', '135° and 315°', '90° and 270°'], 'Tangent is 1 at 45° and repeats every 180°, so the second solution is 225°.'),
      q('A sine graph has midline y = 2, amplitude 3, and no horizontal shift. Which equation matches?', ['y = 3 sin θ + 2', 'y = 2 sin θ + 3', 'y = 3 cos θ − 2', 'y = sin(3θ) + 2'], 'The amplitude is the coefficient 3 and the vertical translation is +2.')
    ]
  }
];

import { C, T, anim, frame, showDuring } from './sciViz';

/**
 * Topic-specific animated SVG diagrams for all 101 Ghana JHS 1-3 & SHS 1-3 Core Mathematics missions.
 * Ghana curriculum is English-only; animations use SMIL (<animate>, <animateTransform>, <animateMotion>)
 * so MissionScreen's reduced-motion pause handler automatically respects user preferences.
 */

export interface GhanaMathTopicEntry {
  key: string;
  title: string;
  caption: string;
  render: () => string;
}

const H = 276;

const ghFrame = (label: string, body: string, caption = '') =>
  frame(
    label,
    `${body}${caption ? T(320, H - 18, caption, { size: 17, fill: C.muted, weight: 600 }) : ''}`,
    '',
    H
  );

const builders: Record<string, () => { title: string; caption: string; svg: string }> = {
  placeValue: () => ({
    title: 'Place Value & Expanded Form',
    caption: 'Each shift left multiplies a digit’s place value by 10',
    svg: ghFrame(
      'Place value columns showing powers of ten',
      `${[
        ['TTh', '4', '40,000', C.data, 0],
        ['Th', '2', '2,000', C.gold, 1],
        ['H', '7', '700', C.good, 2],
        ['T', '5', '50', C.ember, 3],
        ['U', '8', '8', C.sakura, 4]
      ]
        .map(([col, dig, val, colr, i]) => {
          const x = 36 + Number(i) * 116;
          return `<rect x="${x}" y="34" width="104" height="128" rx="12" fill="${colr}" fill-opacity="0.14" stroke="${colr}" stroke-width="3"/>
          <rect x="${x}" y="34" width="104" height="32" rx="10" fill="${colr}" fill-opacity="0.28"/>
          ${T(x + 52, 57, String(col), { size: 18, fill: C.text, weight: 800 })}
          ${T(x + 52, 114, String(dig), { size: 42, fill: String(colr), weight: 800 })}
          ${T(x + 52, 148, String(val), { size: 17, fill: C.muted, weight: 700 })}
          <rect x="${x - 3}" y="31" width="110" height="134" rx="14" fill="none" stroke="${C.text}" stroke-width="3" opacity="0">${anim('opacity', '0;0;1;1;0;0', 6, 0, `keyTimes="0;${(0.05 + Number(i) * 0.16).toFixed(2)};${(0.08 + Number(i) * 0.16).toFixed(2)};${(0.18 + Number(i) * 0.16).toFixed(2)};${(0.22 + Number(i) * 0.16).toFixed(2)};1"`)}</rect>`;
        })
        .join('')}
      ${T(320, 204, '42,758 = 40,000 + 2,000 + 700 + 50 + 8', { size: 22, fill: C.gold, weight: 800 })}`,
      '×10 each step to the left'
    )
  }),

  factorsPrimes: () => ({
    title: 'Prime Factorisation Tree',
    caption: 'Breaking a composite number down until every leaf is prime',
    svg: ghFrame(
      'Factor tree for 36 equals 2 squared times 3 squared',
      `<line x1="320" y1="62" x2="210" y2="112" stroke="${C.muted}" stroke-width="3"/>
      <line x1="320" y1="62" x2="430" y2="112" stroke="${C.muted}" stroke-width="3"/>
      <line x1="210" y1="138" x2="150" y2="188" stroke="${C.muted}" stroke-width="3"/>
      <line x1="210" y1="138" x2="265" y2="188" stroke="${C.muted}" stroke-width="3"/>
      <line x1="430" y1="138" x2="375" y2="188" stroke="${C.muted}" stroke-width="3"/>
      <line x1="430" y1="138" x2="490" y2="188" stroke="${C.muted}" stroke-width="3"/>
      <circle cx="320" cy="48" r="26" fill="${C.panel}" stroke="${C.gold}" stroke-width="4"/>${T(320, 56, '36', { size: 24, fill: C.gold, weight: 800 })}
      <circle cx="210" cy="122" r="24" fill="${C.panel}" stroke="${C.data}" stroke-width="3.5"/>${T(210, 130, '4', { size: 22, fill: C.data, weight: 800 })}
      <circle cx="430" cy="122" r="24" fill="${C.panel}" stroke="${C.data}" stroke-width="3.5"/>${T(430, 130, '9', { size: 22, fill: C.data, weight: 800 })}
      ${[
        [150, 192, '2', C.good, 0],
        [265, 192, '2', C.good, 1],
        [375, 192, '3', C.ember, 2],
        [490, 192, '3', C.ember, 3]
      ]
        .map(([cx, cy, lbl, col, idx]) => `<circle cx="${cx}" cy="${cy}" r="22" fill="${col}" fill-opacity="0.22" stroke="${col}" stroke-width="3.5">${anim('r', '22;26;22', 3.6, Number(idx) * 0.45)}</circle>${T(Number(cx), Number(cy) + 8, String(lbl), { size: 24, fill: String(col), weight: 800 })}`)
        .join('')}`,
      'Prime leaves: 36 = 2 × 2 × 3 × 3 = 2² × 3²'
    )
  }),

  fractionsPct: () => ({
    title: 'Fractions, Decimals & Percentages',
    caption: 'Equivalent parts of the same whole shown together',
    svg: ghFrame(
      'Fraction bar aligned with decimal and percentage',
      `${[0, 1, 2, 3]
        .map(i => `<rect x="${70 + i * 125}" y="44" width="122" height="58" rx="8" fill="${i < 3 ? C.good : C.panel}" fill-opacity="${i < 3 ? 0.35 : 1}" stroke="${i < 3 ? C.good : C.line}" stroke-width="3"/>`)
        .join('')}
      <rect x="70" y="44" width="372" height="58" rx="8" fill="${C.good}" fill-opacity="0">${anim('fill-opacity', '0.05;0.28;0.05', 3.2, 0)}</rect>
      <rect x="70" y="128" width="500" height="22" rx="11" fill="${C.panel}" stroke="${C.line}" stroke-width="2"/>
      <rect x="70" y="128" width="375" height="22" rx="11" fill="${C.gold}" fill-opacity="0.82"/>
      <circle cy="139" r="10" fill="${C.ember}" stroke="${C.text}" stroke-width="2.5"><animate attributeName="cx" values="70;445;445;70" keyTimes="0;0.5;0.85;1" dur="4.5s" repeatCount="indefinite"/></circle>
      ${T(150, 195, '3 / 4', { size: 30, fill: C.good, weight: 800 })}
      ${T(320, 195, '= 0.75', { size: 30, fill: C.data, weight: 800 })}
      ${T(485, 195, '= 75%', { size: 30, fill: C.gold, weight: 800 })}`,
      'Same amount written as fraction, decimal and per 100'
    )
  }),

  ratioProportion: () => ({
    title: 'Ratio & Proportional Sharing',
    caption: 'Equal unit blocks shared cleanly in ratio parts',
    svg: ghFrame(
      'Ratio sharing 2 to 3 using unit bar blocks',
      `${T(110, 62, 'Share A (2 parts)', { size: 20, fill: C.data, weight: 800, anchor: 'start' })}
      ${[0, 1].map(i => `<rect x="${295 + i * 68}" y="38" width="60" height="38" rx="8" fill="${C.data}" fill-opacity="0.28" stroke="${C.data}" stroke-width="3"/>${T(325 + i * 68, 63, '12', { size: 20, fill: C.text, weight: 800 })}`).join('')}
      ${T(110, 124, 'Share B (3 parts)', { size: 20, fill: C.gold, weight: 800, anchor: 'start' })}
      ${[0, 1, 2].map(i => `<rect x="${295 + i * 68}" y="100" width="60" height="38" rx="8" fill="${C.gold}" fill-opacity="0.28" stroke="${C.gold}" stroke-width="3"/>${T(325 + i * 68, 125, '12', { size: 20, fill: C.text, weight: 800 })}`).join('')}
      <line x1="295" y1="158" x2="495" y2="158" stroke="${C.good}" stroke-width="4" stroke-dasharray="6 4"/>
      <circle cx="325" cy="176" r="8" fill="${C.good}">${anim('cx', '325;461;325', 4.2, 0)}</circle>
      ${T(320, 206, 'Ratio 2 : 3 = 5 equal parts → 24 : 36 (Total 60)', { size: 21, fill: C.good, weight: 800 })}`,
      'Find 1 part first, then multiply by each ratio share'
    )
  }),

  realNumberSets: () => ({
    title: 'Real Number System Hierarchy',
    caption: 'Nested subsets of real numbers: ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ',
    svg: ghFrame(
      'Concentric number sets Natural, Integers, Rationals, Reals',
      `<rect x="44" y="28" width="552" height="178" rx="22" fill="${C.ember}" fill-opacity="0.1" stroke="${C.ember}" stroke-width="3"/>
      ${T(522, 62, 'ℝ  Reals', { size: 20, fill: C.ember, weight: 800 })}
      ${T(522, 86, '(√2, π)', { size: 18, fill: C.ember, weight: 700 })}
      <rect x="64" y="42" width="376" height="150" rx="18" fill="${C.gold}" fill-opacity="0.1" stroke="${C.gold}" stroke-width="3"/>
      ${T(252, 68, 'ℚ  Rationals (¾, 0.25)', { size: 18, fill: C.gold, weight: 800 })}
      <rect x="84" y="82" width="268" height="98" rx="14" fill="${C.data}" fill-opacity="0.14" stroke="${C.data}" stroke-width="3"/>
      ${T(218, 108, 'ℤ  Integers (−3, 0, 5)', { size: 18, fill: C.data, weight: 800 })}
      <rect x="104" y="122" width="152" height="48" rx="12" fill="${C.good}" fill-opacity="0.22" stroke="${C.good}" stroke-width="3"/>
      ${T(180, 153, 'ℕ  {1, 2, 3…}', { size: 18, fill: C.good, weight: 800 })}
      <circle cx="522" cy="134" r="10" fill="${C.ember}">${anim('r', '8;13;8', 2.4, 0)}</circle>
      ${T(522, 168, 'Irrationals', { size: 18, fill: C.muted, weight: 700 })}`,
      'All naturals are rational & real; irrationals sit outside ℚ'
    )
  }),

  surdsModulo: () => ({
    title: 'Surds & Modular Arithmetic Clock',
    caption: 'Simplifying √ab and wrapping remainders around a clock modulus',
    svg: ghFrame(
      'Simplifying surd root 12 and modulo 5 clock arithmetic',
      `<rect x="30" y="34" width="275" height="162" rx="14" fill="${C.data}" fill-opacity="0.1" stroke="${C.data}" stroke-width="3"/>
      ${T(168, 66, 'Simplify Surds', { size: 20, fill: C.data, weight: 800 })}
      ${T(168, 112, '√12 = √(4 × 3)', { size: 24, fill: C.text, weight: 700 })}
      ${T(168, 154, '= 2√3', { size: 32, fill: C.good, weight: 800 })}
      <circle cx="465" cy="116" r="72" fill="${C.panel}" stroke="${C.gold}" stroke-width="4"/>
      ${[0, 1, 2, 3, 4]
        .map(k => {
          const a = -Math.PI / 2 + (k * 2 * Math.PI) / 5;
          return T(465 + Math.cos(a) * 52, 123 + Math.sin(a) * 52, String(k), { size: 22, fill: k === 3 ? C.ember : C.text, weight: 800 });
        })
        .join('')}
      <g transform="translate(465 116)">
        <line x1="0" y1="0" x2="0" y2="-40" stroke="${C.ember}" stroke-width="5" stroke-linecap="round">
          <animateTransform attributeName="transform" type="rotate" values="0;72;144;216;216;0" keyTimes="0;0.2;0.4;0.65;0.88;1" dur="5s" repeatCount="indefinite"/>
        </line>
      </g>
      <circle cx="465" cy="116" r="6" fill="${C.gold}"/>
      ${T(465, 212, '4 + 4 ≡ 3 (mod 5)', { size: 20, fill: C.gold, weight: 800 })}`,
      'Surds keep exact roots; modulo keeps the remainder'
    )
  }),

  indicesStandardForm: () => ({
    title: 'Laws of Indices & Standard Form',
    caption: 'Adding powers for multiplication and shifting decimal places by 10ⁿ',
    svg: ghFrame(
      'Powers of 10 shifting decimal place in standard form',
      `${T(180, 74, 'aᵐ × aⁿ = aᵐ⁺ⁿ', { size: 28, fill: C.data, weight: 800 })}
      ${T(470, 74, 'aᵐ ÷ aⁿ = aᵐ⁻ⁿ', { size: 28, fill: C.ember, weight: 800 })}
      <rect x="52" y="104" width="536" height="84" rx="14" fill="${C.gold}" fill-opacity="0.1" stroke="${C.gold}" stroke-width="3"/>
      ${T(206, 156, '45,000', { size: 34, fill: C.text, weight: 800 })}
      ${T(320, 156, '→', { size: 34, fill: C.gold, weight: 800 })}
      ${T(448, 156, '4.5 × 10⁴', { size: 34, fill: C.good, weight: 800 })}
      <circle cx="242" cy="122" r="6" fill="${C.ember}">${anim('cx', '242;186;242', 4, 0)}</circle>`,
      'Standard form: A × 10ⁿ where 1 ≤ A < 10'
    )
  }),

  vennSets: () => ({
    title: 'Two-Set Venn Survey',
    caption: 'Counting elements in intersection, only-A, only-B and outside',
    svg: ghFrame(
      'Venn diagram showing n(A intersection B) inside universe U',
      `<rect x="64" y="24" width="512" height="176" rx="16" fill="${C.panel}" stroke="${C.line}" stroke-width="3"/>
      ${T(84, 52, 'U', { size: 22, fill: C.muted, weight: 800, anchor: 'start' })}
      <circle cx="268" cy="112" r="72" fill="${C.data}" fill-opacity="0.18" stroke="${C.data}" stroke-width="4"/>
      <circle cx="372" cy="112" r="72" fill="${C.gold}" fill-opacity="0.18" stroke="${C.gold}" stroke-width="4"/>
      <ellipse cx="320" cy="112" rx="22" ry="48" fill="${C.good}" fill-opacity="0.28">${anim('fill-opacity', '0.18;0.55;0.18', 3, 0)}</ellipse>
      ${T(230, 118, 'A only', { size: 19, fill: C.data, weight: 800 })}
      ${T(320, 118, 'A∩B', { size: 20, fill: C.good, weight: 800 })}
      ${T(410, 118, 'B only', { size: 19, fill: C.gold, weight: 800 })}
      ${T(545, 182, "(A∪B)'", { size: 18, fill: C.muted, weight: 700, anchor: 'end' })}`,
      'n(A ∪ B) = n(A) + n(B) − n(A ∩ B)'
    )
  }),

  financeGrowth: () => ({
    title: 'Interest, Tax & Compound Growth',
    caption: 'Simple interest climbs linearly; compound interest curves upward faster',
    svg: ghFrame(
      'Comparison of simple linear growth and compound exponential growth',
      `<line x1="80" y1="184" x2="560" y2="184" stroke="${C.muted}" stroke-width="3"/>
      <line x1="80" y1="34" x2="80" y2="184" stroke="${C.muted}" stroke-width="3"/>
      <path d="M80 174 L540 112" stroke="${C.data}" stroke-width="5" stroke-dasharray="10 6" fill="none"/>
      <path d="M80 174 Q320 156 540 46" stroke="${C.gold}" stroke-width="6" fill="none"/>
      <circle r="9" fill="${C.gold}" stroke="${C.text}" stroke-width="2"><animateMotion dur="4.5s" repeatCount="indefinite" path="M80 174 Q320 156 540 46"/></circle>
      ${T(465, 102, 'Simple: P + Prt', { size: 18, fill: C.data, weight: 800 })}
      ${T(430, 44, 'Compound: P(1 + r)ᵗ', { size: 20, fill: C.gold, weight: 800 })}
      ${T(115, 208, 'GH₵ Principal', { size: 18, fill: C.muted, weight: 700, anchor: 'start' })}`,
      'Interest on prior interest drives exponential growth'
    )
  }),

  variation: () => ({
    title: 'Direct & Inverse Variation',
    caption: 'Direct variation scales together (y = kx); inverse scales oppositely (y = k/x)',
    svg: ghFrame(
      'Direct linear line vs inverse hyperbola curve',
      `<line x1="56" y1="184" x2="292" y2="184" stroke="${C.muted}" stroke-width="3"/><line x1="56" y1="34" x2="56" y2="184" stroke="${C.muted}" stroke-width="3"/>
      <line x1="56" y1="184" x2="274" y2="48" stroke="${C.good}" stroke-width="5"/>
      <circle r="8" fill="${C.good}"><animateMotion dur="3.6s" repeatCount="indefinite" path="M56 184 L274 48"/></circle>
      ${T(175, 46, 'y = kx (Direct)', { size: 20, fill: C.good, weight: 800 })}
      <line x1="348" y1="184" x2="584" y2="184" stroke="${C.muted}" stroke-width="3"/><line x1="348" y1="34" x2="348" y2="184" stroke="${C.muted}" stroke-width="3"/>
      <path d="M368 46 Q410 144 574 172" stroke="${C.ember}" stroke-width="5" fill="none"/>
      <circle r="8" fill="${C.ember}"><animateMotion dur="3.6s" repeatCount="indefinite" path="M368 46 Q410 144 574 172"/></circle>
      ${T(475, 46, 'y = k/x (Inverse)', { size: 20, fill: C.ember, weight: 800 })}`,
      'Direct: constant y/x · Inverse: constant x·y'
    )
  }),

  patternsSeq: () => ({
    title: 'Mappings, Patterns & Sequences',
    caption: 'Mapping input positions n to sequence terms Uₙ',
    svg: ghFrame(
      'Arithmetic progression rule 3n plus 2',
      `${[1, 2, 3, 4]
        .map((n, i) => {
          const x = 68 + i * 136;
          const val = 3 * n + 2;
          return `<rect x="${x}" y="38" width="96" height="44" rx="10" fill="${C.data}" fill-opacity="0.18" stroke="${C.data}" stroke-width="3"/>
          ${T(x + 48, 67, `n = ${n}`, { size: 20, fill: C.data, weight: 800 })}
          <line x1="${x + 48}" y1="84" x2="${x + 48}" y2="124" stroke="${C.gold}" stroke-width="3"/>
          <polygon points="${x + 48},132 ${x + 41},118 ${x + 55},118" fill="${C.gold}"/>
          <rect x="${x}" y="136" width="96" height="48" rx="10" fill="${C.gold}" fill-opacity="0.2" stroke="${C.gold}" stroke-width="3"/>
          ${T(x + 48, 168, `U${n} = ${val}`, { size: 22, fill: C.gold, weight: 800 })}`;
        })
        .join('')}
      <circle cx="116" cy="108" r="7" fill="${C.ember}">${anim('cx', '116;252;388;524;116', 4.8, 0)}</circle>`,
      'Common difference d = +3 gives linear rule Uₙ = 3n + 2'
    )
  }),

  algebraTiles: () => ({
    title: 'Expanding & Factorising Area Model',
    caption: 'Rectangle area splits neatly into x², px, qx and pq terms',
    svg: ghFrame(
      'Algebraic area model for x plus 2 times x plus 3',
      `<rect x="150" y="48" width="160" height="98" fill="${C.data}" fill-opacity="0.24" stroke="${C.data}" stroke-width="3"/>
      <rect x="310" y="48" width="170" height="98" fill="${C.good}" fill-opacity="0.22" stroke="${C.good}" stroke-width="3"/>
      <rect x="150" y="146" width="160" height="62" fill="${C.gold}" fill-opacity="0.22" stroke="${C.gold}" stroke-width="3"/>
      <rect x="310" y="146" width="170" height="62" fill="${C.ember}" fill-opacity="0.24" stroke="${C.ember}" stroke-width="3"/>
      ${T(125, 102, 'x', { size: 26, fill: C.data, weight: 800 })}
      ${T(125, 184, '+2', { size: 24, fill: C.gold, weight: 800 })}
      ${T(230, 38, 'x', { size: 26, fill: C.data, weight: 800 })}
      ${T(395, 38, '+3', { size: 24, fill: C.good, weight: 800 })}
      ${T(230, 106, 'x²', { size: 30, fill: C.text, weight: 800 })}
      ${T(395, 106, '3x', { size: 28, fill: C.good, weight: 800 })}
      ${T(230, 184, '2x', { size: 28, fill: C.gold, weight: 800 })}
      ${T(395, 184, '6', { size: 28, fill: C.ember, weight: 800 })}
      <rect x="148" y="46" width="334" height="164" fill="none" stroke="${C.text}" stroke-width="3" opacity="0.2">${anim('opacity', '0.15;0.85;0.15', 3.6, 0)}</rect>`,
      '(x + 2)(x + 3) = x² + 5x + 6'
    )
  }),

  equationBalance: () => ({
    title: 'Equation Balance & Inequality Line',
    caption: 'Keep both sides balanced when solving for x',
    svg: ghFrame(
      'Balance scale for 2x plus 3 equals 11',
      `<rect x="275" y="192" width="90" height="14" rx="7" fill="${C.muted}"/><line x1="320" y1="62" x2="320" y2="192" stroke="${C.muted}" stroke-width="8"/>
      <g><animateTransform attributeName="transform" type="rotate" values="-5 320 62;0 320 62;5 320 62;0 320 62;-5 320 62" dur="4.2s" repeatCount="indefinite"/>
        <line x1="120" y1="62" x2="520" y2="62" stroke="${C.text}" stroke-width="7" stroke-linecap="round"/>
        <rect x="92" y="96" width="144" height="58" rx="12" fill="${C.data}" fill-opacity="0.24" stroke="${C.data}" stroke-width="3.5"/>
        ${T(164, 134, '2x + 3', { size: 28, fill: C.data, weight: 800 })}
        <rect x="404" y="96" width="144" height="58" rx="12" fill="${C.gold}" fill-opacity="0.24" stroke="${C.gold}" stroke-width="3.5"/>
        ${T(476, 134, '11', { size: 30, fill: C.gold, weight: 800 })}
      </g>
      ${T(320, 40, 'Subtract 3, then ÷ 2 → x = 4', { size: 22, fill: C.good, weight: 800 })}`,
      'Apply the same operation to both sides to stay balanced'
    )
  }),

  linearSystems: () => ({
    title: 'Straight Lines & Simultaneous Systems',
    caption: 'The intersection point satisfies both linear equations simultaneously',
    svg: ghFrame(
      'Two intersecting straight lines on Cartesian grid',
      `<line x1="60" y1="186" x2="580" y2="186" stroke="${C.muted}" stroke-width="2.5"/>
      <line x1="170" y1="26" x2="170" y2="206" stroke="${C.muted}" stroke-width="2.5"/>
      <line x1="90" y1="178" x2="520" y2="38" stroke="${C.data}" stroke-width="5"/>
      <line x1="110" y1="36" x2="510" y2="178" stroke="${C.ember}" stroke-width="5"/>
      <circle cx="315" cy="105" r="11" fill="${C.gold}" stroke="${C.text}" stroke-width="3">${anim('r', '9;15;9', 2.4, 0)}</circle>
      ${T(430, 56, 'y = mx + c₁', { size: 20, fill: C.data, weight: 800 })}
      ${T(445, 166, 'a₂x + b₂y = c₂', { size: 20, fill: C.ember, weight: 800 })}
      ${T(315, 82, '(x₀, y₀)', { size: 22, fill: C.gold, weight: 800 })}`,
      'One solution where lines cross; none if parallel'
    )
  }),

  quadratics: () => ({
    title: 'Quadratic Curves, Vertex & Roots',
    caption: 'The parabola crosses the x-axis at roots x₁ and x₂',
    svg: ghFrame(
      'Parabola showing vertex, axis of symmetry, and x-intercept roots',
      `<line x1="60" y1="142" x2="580" y2="142" stroke="${C.muted}" stroke-width="3"/>
      <line x1="320" y1="24" x2="320" y2="200" stroke="${C.gold}" stroke-width="2.5" stroke-dasharray="6 5"/>
      <path d="M140 32 Q320 264 500 32" stroke="${C.data}" stroke-width="5.5" fill="none"/>
      <circle cx="212" cy="142" r="9" fill="${C.good}" stroke="${C.text}" stroke-width="2.5"/>
      <circle cx="428" cy="142" r="9" fill="${C.good}" stroke="${C.text}" stroke-width="2.5"/>
      <circle cx="320" cy="148" r="10" fill="${C.ember}" stroke="${C.text}" stroke-width="2.5"/>
      <circle r="8" fill="${C.gold}"><animateMotion dur="4.6s" repeatCount="indefinite" path="M140 32 Q320 264 500 32"/></circle>
      ${T(190, 174, 'Root x₁', { size: 19, fill: C.good, weight: 800 })}
      ${T(450, 174, 'Root x₂', { size: 19, fill: C.good, weight: 800 })}
      ${T(445, 62, 'Axis x = −b/2a', { size: 19, fill: C.gold, weight: 800 })}`,
      'Vertex sits on the vertical line of symmetry'
    )
  }),

  logicTruth: () => ({
    title: 'Logical Reasoning & Truth Flow',
    caption: 'Combining statements P and Q with ∧ (AND), ∨ (OR) and ⇒ (IMPLIES)',
    svg: ghFrame(
      'Logic implication P implies Q and truth connectors',
      `<rect x="44" y="54" width="144" height="96" rx="14" fill="${C.data}" fill-opacity="0.16" stroke="${C.data}" stroke-width="3.5"/>
      ${T(116, 94, 'Statement P', { size: 20, fill: C.data, weight: 800 })}
      ${T(116, 128, 'T  or  F', { size: 20, fill: C.text, weight: 700 })}
      <rect x="248" y="54" width="144" height="96" rx="14" fill="${C.gold}" fill-opacity="0.18" stroke="${C.gold}" stroke-width="3.5"/>
      ${T(320, 96, 'P ⇒ Q', { size: 28, fill: C.gold, weight: 800 })}
      ${T(320, 128, 'If P then Q', { size: 18, fill: C.text, weight: 700 })}
      <rect x="452" y="54" width="144" height="96" rx="14" fill="${C.good}" fill-opacity="0.16" stroke="${C.good}" stroke-width="3.5"/>
      ${T(524, 94, 'Statement Q', { size: 20, fill: C.good, weight: 800 })}
      ${T(524, 128, 'Conclusion', { size: 19, fill: C.text, weight: 700 })}
      <circle cx="192" cy="102" r="8" fill="${C.gold}">${anim('cx', '192;244;396;448;192', 4.2, 0)}</circle>
      ${T(320, 188, 'T ⇒ F is the only false implication case', { size: 20, fill: C.ember, weight: 800 })}`,
      'Valid deduction preserves truth from premises to conclusion'
    )
  }),

  linesAngles: () => ({
    title: 'Parallel Lines & Transversal Angles',
    caption: 'Corresponding angles match; co-interior angles sum to 180°',
    svg: ghFrame(
      'Two parallel lines cut by an angled transversal',
      `<line x1="70" y1="78" x2="570" y2="78" stroke="${C.data}" stroke-width="5"/>
      <line x1="70" y1="168" x2="570" y2="168" stroke="${C.data}" stroke-width="5"/>
      <line x1="210" y1="210" x2="430" y2="32" stroke="${C.gold}" stroke-width="5"/>
      <path d="M372 78 A32 32 0 0 0 398 58" fill="none" stroke="${C.good}" stroke-width="5"/>
      <path d="M262 168 A32 32 0 0 0 288 148" fill="none" stroke="${C.good}" stroke-width="5"/>
      <circle cx="372" cy="78" r="6" fill="${C.good}">${anim('opacity', '1;0.3;1', 2.4, 0)}</circle>
      <circle cx="262" cy="168" r="6" fill="${C.good}">${anim('opacity', '0.3;1;0.3', 2.4, 0)}</circle>
      ${T(430, 62, 'θ', { size: 24, fill: C.good, weight: 800 })}
      ${T(350, 152, 'θ  (Corresponding)', { size: 19, fill: C.good, weight: 800, anchor: 'start' })}
      ${T(142, 118, 'Alternate = θ', { size: 19, fill: C.ember, weight: 800 })}`,
      'Z-angles (alternate), F-angles (corresponding), C-angles (180°)'
    )
  }),

  shapes2d3d: () => ({
    title: '2D Polygons & 3D Solid Nets',
    caption: 'Counting faces, vertices, edges and interior angle sums',
    svg: ghFrame(
      'Polygon angle sum and 3D cuboid wireframe',
      `<polygon points="150,52 245,86 218,176 82,176 55,86" fill="${C.data}" fill-opacity="0.16" stroke="${C.data}" stroke-width="4"/>
      ${T(150, 126, '5 sides', { size: 22, fill: C.data, weight: 800 })}
      ${T(150, 202, '(5−2)×180° = 540°', { size: 19, fill: C.good, weight: 800 })}
      <g>
        <rect x="360" y="72" width="140" height="96" fill="${C.gold}" fill-opacity="0.14" stroke="${C.gold}" stroke-width="3.5"/>
        <rect x="405" y="42" width="140" height="96" fill="none" stroke="${C.ember}" stroke-width="3" stroke-dasharray="6 4"/>
        <line x1="360" y1="72" x2="405" y2="42" stroke="${C.gold}" stroke-width="3"/>
        <line x1="500" y1="72" x2="545" y2="42" stroke="${C.gold}" stroke-width="3"/>
        <line x1="360" y1="168" x2="405" y2="138" stroke="${C.gold}" stroke-width="3"/>
        <line x1="500" y1="168" x2="545" y2="138" stroke="${C.gold}" stroke-width="3"/>
        <animateTransform attributeName="transform" type="translate" values="0 0;0 -4;0 0" dur="3.4s" repeatCount="indefinite"/>
      </g>
      ${T(450, 202, '6 Faces · 12 Edges · 8 Vertices', { size: 18, fill: C.gold, weight: 800 })}`,
      'Euler relation for polyhedra: F + V − E = 2'
    )
  }),

  perimeterArea: () => ({
    title: 'Perimeter, Area & Circle Measure',
    caption: 'Perimeter traces the boundary; area counts square units inside',
    svg: ghFrame(
      'Trapezium and circle sector area and boundary measurements',
      `<polygon points="72,168 272,168 232,68 112,68" fill="${C.good}" fill-opacity="0.18" stroke="${C.good}" stroke-width="4"/>
      <line x1="112" y1="68" x2="112" y2="168" stroke="${C.gold}" stroke-width="3" stroke-dasharray="5 4"/>
      ${T(172, 54, 'a', { size: 22, fill: C.good, weight: 800 })}
      ${T(172, 198, 'b · Area = ½(a+b)h', { size: 20, fill: C.good, weight: 800 })}
      <circle cx="465" cy="116" r="64" fill="${C.panel}" stroke="${C.data}" stroke-width="4"/>
      <line x1="465" y1="116" x2="529" y2="116" stroke="${C.ember}" stroke-width="4"/>
      <circle r="7" fill="${C.gold}"><animateMotion dur="4.2s" repeatCount="indefinite" path="M465 52 A64 64 0 1 1 464.9 52"/></circle>
      ${T(497, 106, 'r', { size: 22, fill: C.ember, weight: 800 })}
      ${T(465, 208, 'C = 2πr · A = πr²', { size: 20, fill: C.data, weight: 800 })}`,
      'Perimeter uses linear units (cm); area uses square units (cm²)'
    )
  }),

  mensurationSolids: () => ({
    title: 'Volume & Surface Area of Solids',
    caption: 'Base area × perpendicular height measures 3D capacity',
    svg: ghFrame(
      'Cylinder and cone showing radius r and height h',
      `<ellipse cx="180" cy="64" rx="76" ry="20" fill="${C.data}" fill-opacity="0.22" stroke="${C.data}" stroke-width="3.5"/>
      <path d="M104 64 V164 A76 20 0 0 0 256 164 V64" fill="${C.data}" fill-opacity="0.12" stroke="${C.data}" stroke-width="3.5"/>
      <ellipse cx="180" cy="164" rx="76" ry="20" fill="${C.gold}" fill-opacity="0.24" stroke="${C.gold}" stroke-width="2.5">
        <animate attributeName="ry" values="18;23;18" dur="3.4s" repeatCount="indefinite"/>
      </ellipse>
      ${T(180, 122, 'V = πr²h', { size: 26, fill: C.gold, weight: 800 })}
      <path d="M390 166 L465 44 L540 166" fill="${C.ember}" fill-opacity="0.16" stroke="${C.ember}" stroke-width="3.5"/>
      <ellipse cx="465" cy="166" rx="75" ry="18" fill="${C.ember}" fill-opacity="0.24" stroke="${C.ember}" stroke-width="3"/>
      <line x1="465" y1="44" x2="465" y2="166" stroke="${C.text}" stroke-width="2.5" stroke-dasharray="5 4"/>
      ${T(465, 208, 'Cone V = ⅓πr²h', { size: 22, fill: C.ember, weight: 800 })}`,
      'Cone volume = ⅓ cylinder volume for equal base & height'
    )
  }),

  transformations: () => ({
    title: 'Geometric Transformations',
    caption: 'Translation shifts, reflection mirrors and rotation turns around a centre',
    svg: ghFrame(
      'Triangle reflected across the y-axis on a Cartesian grid',
      `<line x1="60" y1="118" x2="580" y2="118" stroke="${C.muted}" stroke-width="2.5"/>
      <line x1="320" y1="24" x2="320" y2="176" stroke="${C.gold}" stroke-width="4" stroke-dasharray="8 5"/>
      <polygon points="150,104 250,104 190,42" fill="${C.data}" fill-opacity="0.24" stroke="${C.data}" stroke-width="4"/>
      <polygon points="490,104 390,104 450,42" fill="${C.good}" fill-opacity="0.24" stroke="${C.good}" stroke-width="4">
        <animate attributeName="fill-opacity" values="0.14;0.4;0.14" dur="3s" repeatCount="indefinite"/>
      </polygon>
      <path d="M250 104 H390" stroke="${C.ember}" stroke-width="2.5" stroke-dasharray="5 4"/>
      ${T(195, 144, 'Object P', { size: 20, fill: C.data, weight: 800 })}
      ${T(445, 144, "Image P'", { size: 20, fill: C.good, weight: 800 })}
      ${T(320, 202, 'Reflection in x = 0: (x, y) → (−x, y)', { size: 19, fill: C.gold, weight: 800 })}`,
      'Rigid transformations preserve side lengths and angles'
    )
  }),

  vectorsBearings: () => ({
    title: 'Column Vectors & 3-Figure Bearings',
    caption: 'Bearings turn clockwise from North; column vectors combine x and y steps',
    svg: ghFrame(
      'Compass bearing 060 degrees and tip-to-tail resultant vector',
      `<circle cx="170" cy="112" r="68" fill="${C.panel}" stroke="${C.gold}" stroke-width="4"/>
      <line x1="170" y1="112" x2="170" y2="36" stroke="${C.text}" stroke-width="3.5" stroke-dasharray="5 4"/>
      ${T(170, 28, 'N (000°)', { size: 18, fill: C.gold, weight: 800 })}
      <g transform="translate(170 112)">
        <line x1="0" y1="0" x2="52" y2="-30" stroke="${C.ember}" stroke-width="5" stroke-linecap="round">
          <animateTransform attributeName="transform" type="rotate" values="0;0;60;60;0" keyTimes="0;0.15;0.55;0.85;1" dur="5s" repeatCount="indefinite"/>
        </line>
      </g>
      ${T(170, 208, 'Clockwise from North', { size: 18, fill: C.muted, weight: 700 })}
      <line x1="350" y1="160" x2="490" y2="160" stroke="${C.data}" stroke-width="5"/>
      <line x1="490" y1="160" x2="490" y2="70" stroke="${C.good}" stroke-width="5"/>
      <line x1="350" y1="160" x2="490" y2="70" stroke="${C.gold}" stroke-width="5"/>
      ${T(420, 186, 'x = 4', { size: 19, fill: C.data, weight: 800 })}
      ${T(530, 120, 'y = 3', { size: 19, fill: C.good, weight: 800 })}
      ${T(402, 102, '|v| = 5', { size: 22, fill: C.gold, weight: 800 })}`,
      'Magnitude |v| = √(x² + y²) by Pythagoras'
    )
  }),

  pythagoras: () => ({
    title: 'Pythagoras Theorem',
    caption: 'Square on the hypotenuse equals the sum of squares on the two legs',
    svg: ghFrame(
      'Right triangle 3-4-5 showing area squares a squared plus b squared equals c squared',
      `<polygon points="210,152 390,152 390,46" fill="${C.good}" fill-opacity="0.2" stroke="${C.good}" stroke-width="5"/>
      <rect x="372" y="134" width="18" height="18" fill="none" stroke="${C.gold}" stroke-width="3"/>
      <rect x="404" y="72" width="54" height="54" rx="6" fill="${C.data}" fill-opacity="0.22" stroke="${C.data}" stroke-width="3"/>
      ${T(431, 106, 'b²', { size: 24, fill: C.data, weight: 800 })}
      <rect x="274" y="162" width="56" height="42" rx="6" fill="${C.ember}" fill-opacity="0.22" stroke="${C.ember}" stroke-width="3"/>
      ${T(302, 191, 'a²', { size: 24, fill: C.ember, weight: 800 })}
      <circle r="8" fill="${C.gold}"><animateMotion dur="4s" repeatCount="indefinite" path="M210 152 L390 46"/></circle>
      ${T(264, 80, 'c² = a² + b²', { size: 26, fill: C.gold, weight: 800 })}`,
      'For right-angled triangles: c is the longest side'
    )
  }),

  trigElevation: () => ({
    title: 'Trigonometry, Elevation & Depression',
    caption: 'Measuring heights and angles using Opposite, Adjacent and Hypotenuse',
    svg: ghFrame(
      'Surveyor sighting angle of elevation to top of tower',
      `<line x1="76" y1="176" x2="540" y2="176" stroke="${C.muted}" stroke-width="4"/>
      <rect x="462" y="46" width="44" height="130" rx="4" fill="${C.data}" fill-opacity="0.22" stroke="${C.data}" stroke-width="3.5"/>
      <line x1="112" y1="176" x2="462" y2="50" stroke="${C.gold}" stroke-width="4" stroke-dasharray="8 5"/>
      <path d="M188 176 A76 76 0 0 0 180 148" fill="none" stroke="${C.ember}" stroke-width="5"/>
      <circle r="7" fill="${C.gold}"><animateMotion dur="3.8s" repeatCount="indefinite" path="M112 176 L462 50"/></circle>
      ${T(218, 162, 'θ', { size: 24, fill: C.ember, weight: 800 })}
      ${T(288, 202, 'Adjacent d', { size: 20, fill: C.muted, weight: 800 })}
      ${T(556, 114, 'Opp', { size: 20, fill: C.data, weight: 800 })}
      ${T(220, 62, 'sin=O/H · cos=A/H · tan=O/A', { size: 21, fill: C.gold, weight: 800 })}`,
      'Angle of elevation up equals angle of depression down'
    )
  }),

  trigWaves: () => ({
    title: 'Sine & Cosine Wave Cartography',
    caption: 'Periodic waves repeat every 360° between maximum +A and minimum −A',
    svg: ghFrame(
      'Animated sine wave from 0 to 360 degrees',
      `<line x1="60" y1="114" x2="580" y2="114" stroke="${C.muted}" stroke-width="2.5"/>
      <line x1="60" y1="36" x2="60" y2="192" stroke="${C.muted}" stroke-width="2.5"/>
      <path d="M60 114 Q125 32 190 114 T320 114 T450 114 T580 114" stroke="${C.data}" stroke-width="5" fill="none"/>
      <line x1="60" y1="73" x2="580" y2="73" stroke="${C.gold}" stroke-width="2.5" stroke-dasharray="7 5"/>
      <circle cx="96" cy="73" r="7" fill="${C.ember}"/>
      <circle cx="154" cy="73" r="7" fill="${C.ember}"/>
      <circle r="8" fill="${C.gold}"><animateMotion dur="5s" repeatCount="indefinite" path="M60 114 Q125 32 190 114 T320 114 T450 114 T580 114"/></circle>
      ${T(516, 62, 'y = c intersects twice', { size: 17, fill: C.gold, weight: 800, anchor: 'end' })}
      ${T(190, 206, '180°', { size: 19, fill: C.muted, weight: 800 })}
      ${T(320, 206, '360°', { size: 19, fill: C.muted, weight: 800 })}`,
      'Symmetry on [0°, 360°] gives two solutions when |c| < 1'
    )
  }),

  circleTheorems: () => ({
    title: 'Circle Angle Theorems',
    caption: 'Angle at the centre is twice the angle at the circumference on the same arc',
    svg: ghFrame(
      'Circle with central angle 2 theta and inscribed angle theta',
      `<circle cx="320" cy="116" r="82" fill="${C.data}" fill-opacity="0.08" stroke="${C.data}" stroke-width="4"/>
      <line x1="252" y1="162" x2="320" y2="116" stroke="${C.gold}" stroke-width="4"/>
      <line x1="388" y1="162" x2="320" y2="116" stroke="${C.gold}" stroke-width="4"/>
      <line x1="252" y1="162" x2="320" y2="34" stroke="${C.good}" stroke-width="4"/>
      <line x1="388" y1="162" x2="320" y2="34" stroke="${C.good}" stroke-width="4"/>
      <circle cx="320" cy="116" r="6" fill="${C.gold}"/>
      <circle cx="320" cy="34" r="8" fill="${C.good}">${anim('cx', '280;360;280', 4.6, 0)}</circle>
      ${T(320, 146, '2θ', { size: 22, fill: C.gold, weight: 800 })}
      ${T(320, 74, 'θ', { size: 22, fill: C.good, weight: 800 })}
      ${T(505, 116, 'Cyclic: A+C = 180°', { size: 19, fill: C.ember, weight: 800 })}`,
      'Same-segment inscribed angles stay equal around the arc'
    )
  }),

  tangentLoci: () => ({
    title: 'Tangent Perpendicularity & Loci',
    caption: 'A tangent meets the radius at exactly 90° at the point of contact',
    svg: ghFrame(
      'Tangent line meeting radius at 90 degrees',
      `<circle cx="260" cy="114" r="74" fill="${C.panel}" stroke="${C.data}" stroke-width="4"/>
      <line x1="260" y1="114" x2="334" y2="114" stroke="${C.gold}" stroke-width="4"/>
      <line x1="334" y1="24" x2="334" y2="204" stroke="${C.ember}" stroke-width="5"/>
      <rect x="316" y="96" width="18" height="18" fill="none" stroke="${C.good}" stroke-width="3"/>
      <circle cx="334" cy="114" r="7" fill="${C.good}"/>
      <circle cx="334" cy="40" r="7" fill="${C.gold}">${anim('cy', '36;192;36', 4.2, 0)}</circle>
      ${T(296, 102, 'r', { size: 22, fill: C.gold, weight: 800 })}
      ${T(460, 96, 'Radius ⊥ Tangent', { size: 21, fill: C.ember, weight: 800 })}
      ${T(460, 130, 'Angle = 90°', { size: 21, fill: C.good, weight: 800 })}`,
      'Locus equidistant from A & B is their perpendicular bisector'
    )
  }),

  surveyTally: () => ({
    title: 'Data Collection & Tally Frequency',
    caption: 'Grouping observations into 5-bar tally bundles reveals clear counts',
    svg: ghFrame(
      'Tally chart with animated check marks and totals',
      `${[
        ['Football', 12, C.data, 0],
        ['Athletics', 9, C.good, 1],
        ['Volleyball', 6, C.gold, 2]
      ]
        .map(([lbl, n, col, i]) => {
          const y = 44 + Number(i) * 56;
          return `<rect x="44" y="${y}" width="552" height="44" rx="10" fill="${col}" fill-opacity="0.12" stroke="${col}" stroke-width="2.5"/>
          ${T(64, y + 29, String(lbl), { size: 20, fill: C.text, weight: 800, anchor: 'start' })}
          ${T(320, y + 29, '||||  ||||  ||'.slice(0, Number(n) + 2), { size: 20, fill: String(col), weight: 800 })}
          ${T(556, y + 29, String(n), { size: 24, fill: String(col), weight: 800, anchor: 'end' })}`;
        })
        .join('')}
      <circle cx="300" cy="66" r="6" fill="${C.ember}">${anim('cy', '66;122;178;66', 4.5, 0)}</circle>`,
      'Unbiased random samples represent every group fairly'
    )
  }),

  dataDisplays: () => ({
    title: 'Charts, Histograms & Stem-and-Leaf',
    caption: 'Grouped bars and sector angles show frequency proportions at a glance',
    svg: ghFrame(
      'Grouped histogram bars and pie sector comparison',
      `${[52, 92, 126, 78, 44]
        .map((h, i) => `<rect x="${46 + i * 58}" y="${182 - h}" width="46" height="${h}" rx="5" fill="${i === 2 ? C.gold : C.data}" fill-opacity="0.82"/>`)
        .join('')}
      <line x1="36" y1="182" x2="342" y2="182" stroke="${C.muted}" stroke-width="4"/>
      <circle cx="485" cy="112" r="68" fill="${C.data}" fill-opacity="0.25" stroke="${C.data}" stroke-width="4"/>
      <path d="M485 112 L485 44 A68 68 0 0 1 545 144 Z" fill="${C.gold}" fill-opacity="0.82"/>
      <path d="M485 112 L545 144 A68 68 0 0 1 428 148 Z" fill="${C.good}" fill-opacity="0.72"/>
      <circle r="7" fill="${C.ember}"><animateMotion dur="4.5s" repeatCount="indefinite" path="M485 44 A68 68 0 1 1 484.9 44"/></circle>
      ${T(190, 210, 'Histogram (bars touch)', { size: 19, fill: C.data, weight: 800 })}
      ${T(485, 210, 'Pie sector = (f/N)×360°', { size: 19, fill: C.gold, weight: 800 })}`,
      'Histograms show grouped intervals; pie sectors divide 360°'
    )
  }),

  averagesSpread: () => ({
    title: 'Mean, Median, Mode & Spread',
    caption: 'Measuring both the centre of data and how widely values spread out',
    svg: ghFrame(
      'Ordered data points showing mean balance point and range spread',
      `<line x1="60" y1="126" x2="580" y2="126" stroke="${C.muted}" stroke-width="4"/>
      ${[110, 190, 290, 290, 410, 510]
        .map((cx, i) => `<circle cx="${cx}" cy="${i === 3 ? 100 : 126}" r="11" fill="${i === 2 || i === 3 ? C.good : C.data}" stroke="${C.text}" stroke-width="2.5"/>`)
        .join('')}
      <polygon points="300,140 288,162 312,162" fill="${C.gold}">
        <animateTransform attributeName="transform" type="translate" values="-8 0;8 0;-8 0" dur="3.4s" repeatCount="indefinite"/>
      </polygon>
      ${T(300, 192, 'Mean = Sum ÷ n', { size: 20, fill: C.gold, weight: 800 })}
      ${T(290, 74, 'Mode / Median', { size: 19, fill: C.good, weight: 800 })}
      <line x1="110" y1="42" x2="510" y2="42" stroke="${C.ember}" stroke-width="3.5"/>
      ${T(310, 34, 'Range = Max − Min', { size: 19, fill: C.ember, weight: 800 })}`,
      'Mean balances all values; median resists extreme outliers'
    )
  }),

  probabilityTree: () => ({
    title: 'Probability Tree & Sample Space',
    caption: 'Multiply probabilities along a branch; add outcomes across branches',
    svg: ghFrame(
      'Two-stage tree diagram showing dependent or independent branches',
      `<circle cx="78" cy="116" r="10" fill="${C.gold}"/>
      <line x1="88" y1="116" x2="250" y2="68" stroke="${C.ember}" stroke-width="4"/>
      <line x1="88" y1="116" x2="250" y2="164" stroke="${C.data}" stroke-width="4"/>
      <circle cx="258" cy="68" r="15" fill="${C.panel}" stroke="${C.ember}" stroke-width="3.5"/>${T(258, 74, 'R', { size: 18, fill: C.ember, weight: 800 })}
      <circle cx="258" cy="164" r="15" fill="${C.panel}" stroke="${C.data}" stroke-width="3.5"/>${T(258, 170, 'B', { size: 18, fill: C.data, weight: 800 })}
      <line x1="272" y1="68" x2="438" y2="44" stroke="${C.ember}" stroke-width="3.5"/>
      <line x1="272" y1="68" x2="438" y2="92" stroke="${C.data}" stroke-width="3.5"/>
      <line x1="272" y1="164" x2="438" y2="140" stroke="${C.ember}" stroke-width="3.5"/>
      <line x1="272" y1="164" x2="438" y2="188" stroke="${C.data}" stroke-width="3.5"/>
      ${T(460, 50, 'P(RR)', { size: 19, fill: C.ember, weight: 800, anchor: 'start' })}
      ${T(460, 98, 'P(RB)', { size: 19, fill: C.gold, weight: 800, anchor: 'start' })}
      ${T(460, 146, 'P(BR)', { size: 19, fill: C.gold, weight: 800, anchor: 'start' })}
      ${T(460, 194, 'P(BB)', { size: 19, fill: C.data, weight: 800, anchor: 'start' })}
      <circle r="7" fill="${C.gold}"><animateMotion dur="3.8s" repeatCount="indefinite" path="M78 116 L258 68 L438 92"/></circle>`,
      'Without replacement lowers the denominator on draw 2'
    )
  }),

  masteryIntegrated: () => ({
    title: 'Integrated NaCCA Mathematics Synthesis',
    caption: 'Connecting Number, Algebra, Geometry and Data in real Ghanaian contexts',
    svg: ghFrame(
      'Four mathematical strands linked into an integrated hub',
      `${[
        ['ℝ Number', 120, 68, C.data],
        ['x Algebra', 520, 68, C.ember],
        ['△ Geometry', 120, 168, C.good],
        ['▮ Data', 520, 168, C.gold]
      ]
        .map(([lbl, cx, cy, col]) => `<line x1="${cx}" y1="${cy}" x2="320" y2="118" stroke="${col}" stroke-width="4" stroke-dasharray="6 4"/>
        <rect x="${Number(cx) - 86}" y="${Number(cy) - 26}" width="172" height="52" rx="14" fill="${col}" fill-opacity="0.16" stroke="${col}" stroke-width="3.5"/>
        ${T(Number(cx), Number(cy) + 8, String(lbl), { size: 22, fill: String(col), weight: 800 })}`)
        .join('')}
      <circle cx="320" cy="118" r="44" fill="${C.panel}" stroke="${C.gold}" stroke-width="4">${anim('r', '42;48;42', 2.8, 0)}</circle>
      ${T(320, 126, 'NaCCA', { size: 21, fill: C.gold, weight: 800 })}`,
      'Real problems blend number, algebra, geometry and data'
    )
  })
};

/** Explicit mapping for every one of the 101 Ghana Maths mission IDs. */
export const GHANA_MATH_TOPIC_BY_MISSION: Record<string, keyof typeof builders> = {
  // JHS 1 (13)
  'gh-jhs1-math-place-value-operations': 'placeValue',
  'gh-jhs1-math-factors-multiples-primes': 'factorsPrimes',
  'gh-jhs1-math-fractions-decimals-percentages': 'fractionsPct',
  'gh-jhs1-algebra-patterns-and-variables': 'patternsSeq',
  'gh-jhs1-algebra-expressions': 'algebraTiles',
  'gh-jhs1-algebra-simple-equations': 'equationBalance',
  'gh-jhs1-geometry-lines-and-angles': 'linesAngles',
  'gh-jhs1-geometry-2d-3d-shapes': 'shapes2d3d',
  'gh-jhs1-geometry-perimeter-area': 'perimeterArea',
  'gh-jhs1-geometry-everyday-measurement': 'mensurationSolids',
  'gh-jhs1-data-collect-and-organise': 'surveyTally',
  'gh-jhs1-data-tables-and-graphs': 'dataDisplays',
  'gh-jhs1-data-interpret-and-summarise': 'averagesSpread',

  // JHS 2 (14)
  'gh-jhs2-number-integers': 'realNumberSets',
  'gh-jhs2-number-fractions-percentages': 'fractionsPct',
  'gh-jhs2-number-ratio-proportion': 'ratioProportion',
  'gh-jhs2-algebra-patterns-sequences': 'patternsSeq',
  'gh-jhs2-algebra-expressions-formulae': 'algebraTiles',
  'gh-jhs2-algebra-equations-inequalities': 'equationBalance',
  'gh-jhs2-geometry-angles-polygons': 'linesAngles',
  'gh-jhs2-geometry-transformations-symmetry': 'transformations',
  'gh-jhs2-geometry-area-circumference': 'perimeterArea',
  'gh-jhs2-geometry-volume-surface-measurement': 'mensurationSolids',
  'gh-jhs2-data-surveys-sampling': 'surveyTally',
  'gh-jhs2-data-frequency-displays': 'dataDisplays',
  'gh-jhs2-data-averages-spread': 'averagesSpread',
  'gh-jhs2-data-interpret-chance': 'probabilityTree',

  // JHS 3 (12)
  'gh-jhs3-number-indices': 'indicesStandardForm',
  'gh-jhs3-number-standard-form': 'indicesStandardForm',
  'gh-jhs3-number-ratio-finance': 'financeGrowth',
  'gh-jhs3-algebra-expressions': 'algebraTiles',
  'gh-jhs3-algebra-equations-formulae': 'equationBalance',
  'gh-jhs3-algebra-linear-systems': 'linearSystems',
  'gh-jhs3-geometry-constructions-bearings': 'vectorsBearings',
  'gh-jhs3-geometry-pythagoras': 'pythagoras',
  'gh-jhs3-geometry-mensuration': 'mensurationSolids',
  'gh-jhs3-data-collection': 'surveyTally',
  'gh-jhs3-data-statistical-displays': 'dataDisplays',
  'gh-jhs3-data-probability': 'probabilityTree',

  // SHS 1 (35)
  'gh-core-ss1-number-sets': 'realNumberSets',
  'gh-core-ss1-fractions-percentages': 'fractionsPct',
  'gh-core-ss1-ratio-rate': 'ratioProportion',
  'gh-core-ss1-sets-surveys': 'vennSets',
  'gh-core-ss1-financial-mathematics': 'financeGrowth',
  'gh-core-ss1-algebraic-expressions': 'algebraTiles',
  'gh-core-ss1-patterns-functions': 'patternsSeq',
  'gh-core-ss1-straight-lines-distance': 'linearSystems',
  'gh-core-ss1-spatial-sense': 'shapes2d3d',
  'gh-core-ss1-spatial-sense-field-challenge': 'shapes2d3d',
  'gh-core-ss1-vectors-bearings': 'vectorsBearings',
  'gh-core-ss1-trigonometry': 'trigElevation',
  'gh-core-ss1-perimeter-area': 'perimeterArea',
  'gh-core-ss1-prism-volume': 'mensurationSolids',
  'gh-core-ss1-statistical-reasoning-data-types': 'surveyTally',
  'gh-core-ss1-statistical-data-collection-methods': 'surveyTally',
  'gh-core-ss1-statistical-data-organisation-presentation': 'dataDisplays',
  'gh-core-ss1-school-community-data-project': 'dataDisplays',
  'gh-core-ss1-statistical-investigation-mastery': 'averagesSpread',
  'gh-core-ss1-statistical-averages-inference': 'averagesSpread',
  'gh-core-ss1-probability-chance': 'probabilityTree',
  'gh-core-ss1-probability-practice-lab': 'probabilityTree',
  'gh-core-ss1-real-number-properties': 'realNumberSets',
  'gh-core-ss1-real-number-mastery-challenge': 'realNumberSets',
  'gh-core-ss1-fraction-operations': 'fractionsPct',
  'gh-core-ss1-percentage-change-finance': 'financeGrowth',
  'gh-core-ss1-compound-interest-tax': 'financeGrowth',
  'gh-core-ss1-linear-equations-inequalities': 'equationBalance',
  'gh-core-ss1-quadratic-factorisation-algebraic-fractions': 'algebraTiles',
  'gh-core-ss1-integrated-mastery-trial': 'masteryIntegrated',
  'gh-core-ss1-measurement-mastery-challenge': 'mensurationSolids',
  'gh-core-ss1-proportional-reasoning-mastery': 'ratioProportion',
  'gh-core-ss1-algebraic-thinking-mastery': 'equationBalance',
  'gh-core-ss1-patterns-relationships-mastery': 'patternsSeq',
  'gh-core-ss1-45-indicator-diagnostic': 'masteryIntegrated',

  // SHS 2 (16)
  'gh-core-ss2-surds-indices-modulo': 'surdsModulo',
  'gh-core-ss2-simultaneous-equations': 'linearSystems',
  'gh-core-ss2-sequences-progressions': 'patternsSeq',
  'gh-core-ss2-financial-exponential-models': 'financeGrowth',
  'gh-core-ss2-ratios-rates-proportions': 'ratioProportion',
  'gh-core-ss2-proportional-real-world': 'variation',
  'gh-core-ss2-transformations-vectors-reflections': 'transformations',
  'gh-core-ss2-rotations-successive-transformations': 'transformations',
  'gh-core-ss2-vector-operations-navigation': 'vectorsBearings',
  'gh-core-ss2-inverse-trig-elevation-depression': 'trigElevation',
  'gh-core-ss2-solid-measurement-surface-volume-capacity': 'mensurationSolids',
  'gh-core-ss2-survey-design-data-quality': 'surveyTally',
  'gh-core-ss2-data-displays-dispersion': 'dataDisplays',
  'gh-core-ss2-statistical-inference-community-project': 'averagesSpread',
  'gh-core-ss2-dependent-events-sample-space': 'probabilityTree',
  'gh-core-ss2-independent-events-everyday-probability': 'probabilityTree',

  // SHS 3 (11)
  'gh-core-ss3-logical-reasoning': 'logicTruth',
  'gh-core-ss3-variation': 'variation',
  'gh-core-ss3-quadratic-equations': 'quadratics',
  'gh-core-ss3-quadratic-graphs': 'quadratics',
  'gh-core-ss3-quadratic-relationships': 'quadratics',
  'gh-core-ss3-circle-cartographer': 'circleTheorems',
  'gh-core-ss3-circle-theorem-keeper': 'circleTheorems',
  'gh-core-ss3-tangent-sentinel': 'tangentLoci',
  'gh-core-ss3-compass-locus-architect': 'tangentLoci',
  'gh-core-ss3-wave-cartographer': 'trigWaves',
  'gh-core-ss3-equation-decoder': 'trigWaves'
};

export function renderGhanaMathTopicDiagram(missionId: string): { title: string; caption: string; svg: string } | null {
  const topicKey = GHANA_MATH_TOPIC_BY_MISSION[missionId];
  if (!topicKey) return null;
  const builder = builders[topicKey];
  return builder ? builder() : null;
}

export const GHANA_MATH_TOPIC_KEYS = Object.keys(builders);

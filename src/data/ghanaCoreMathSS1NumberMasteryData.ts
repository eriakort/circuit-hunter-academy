import type { ArcInfo, Mission } from '../types';

export const GHANA_SS1_NUMBER_MASTERY_ARCS: ArcInfo[] = [
  {
    n: 17,
    unit: 0,
    subject: 'ghcoremath',
    title: 'Real Number System: Integrated Mastery',
    pages: 'NaCCA SHS 1 · pp. 26–37'
  }
];

const lesson = (text: string) => ({ who: 's' as const, vis: 'infowords', text });
const question = (q: string, a: string[], why: string) => ({ q, a, why });

export const GHANA_SS1_NUMBER_MASTERY_MISSIONS: Mission[] = [
  {
    id: 'gh-core-ss1-real-number-mastery-challenge',
    arc: 0,
    sec: 'Number',
    pages: 'NaCCA SHS 1 · pp. 26–37',
    hue: 46,
    horns: 2,
    eyes: 2,
    title: 'The Number Systems Mastery Expedition',
    topic: 'Connect real-number classification, ordering, closure and operation properties with set notation, Venn diagrams and survey reasoning in one integrated investigation.',
    demon: 'The Set Boundary Shifter',
    tech: 'Number Form · Nineteenth Technique: The Complete Number Map',
    scenes: [
      lesson('<p><b>Start with the number families.</b> The whole numbers sit inside the integers, the integers sit inside the rational numbers, and the rational numbers sit inside the real numbers. In symbols: whole numbers ⊂ integers ⊂ rational numbers ⊂ real numbers. Irrational numbers are also real, but they cannot be written as a ratio of two integers. Use the number-family diagram to decide where a value belongs.</p>'),
      lesson('<p><b>Classify carefully.</b> Integers such as −6 and 0 are rational because they can be written over 1. Fractions such as 7/8 are rational. Terminating decimals such as 0.125 and recurring decimals such as 0.333… are rational. Square roots of perfect squares are rational: √49 = 7. But √3 and π are irrational. A square-root sign does not automatically mean irrational; check the number inside it.</p>'),
      lesson('<p><b>Order real numbers on a number line.</b> Values farther to the right are greater. Be especially careful with negative values: −1.4 is greater than −1.5 because it is closer to zero. Since √2 ≈ 1.414, we have −1.5 < −√2 < −1.4. Use a decimal approximation only to help compare; keep the exact form when the question asks for it.</p>'),
      lesson('<p><b>Test closure by naming both the set and the operation.</b> Whole numbers are closed under addition and multiplication, but not subtraction or division: 3 − 8 = −5 is not a whole number. Integers are closed under addition, subtraction and multiplication, but not division: 5 ÷ 2 is not an integer. Rational numbers and real numbers are closed under addition, subtraction and multiplication, and under division by a non-zero member. Division by zero is undefined.</p>'),
      lesson('<p><b>Use the operation properties.</b> Addition and multiplication are commutative: a + b = b + a and ab = ba. They are also associative: (a + b) + c = a + (b + c). Subtraction and division are neither commutative nor associative. Multiplication distributes over addition and subtraction: a(b + c) = ab + ac. Zero is the additive identity; one is the multiplicative identity. The additive inverse of a is −a, and the multiplicative inverse of a non-zero a is 1/a. Zero has no multiplicative inverse.</p>'),
      lesson('<p><b>Move from numbers to sets.</b> A set is a well-defined collection. The universal set U contains all items in the investigation. The symbol ∈ means “belongs to”; ∉ means “does not belong to”; and ⊂ means “is a subset of”. The union A ∪ B contains items in A or B or both. The intersection A ∩ B contains items in both. The complement A′ contains items in U that are not in A. The difference A − B contains items in A that are not in B.</p>'),
      lesson('<p><b>Two-set survey challenge.</b> In a class of 50 learners, 32 play football, 24 play basketball and 10 play both. The number who play at least one sport is 32 + 24 − 10 = 46. The number who play neither is 50 − 46 = 4. Subtract the overlap once because those 10 learners were counted in both groups.</p>'),
      lesson('<p><b>Three-set survey challenge.</b> For sets A, B and C, add the three set totals, subtract the three pairwise intersections, then add the triple intersection once. If n(A)=24, n(B)=20, n(C)=18, the pairwise intersections are 8, 7 and 6, and n(A ∩ B ∩ C)=3, then n(A ∪ B ∪ C)=24+20+18−8−7−6+3=44. Check that the result does not exceed the universal-set total.</p>'),
      lesson('<p><b>De Morgan’s laws reveal the relationship between unions and intersections.</b> The complement of a union is the intersection of the complements: (A ∪ B)′ = A′ ∩ B′. The complement of an intersection is the union of the complements: (A ∩ B)′ = A′ ∪ B′. Read the brackets first, then the complement mark. These identities can be checked by testing which regions of a Venn diagram are shaded.</p>'),
      lesson('<p><b>Run a fair class survey.</b> Define the group being studied before collecting answers. Use clear questions, agree what counts as membership in each set, record each learner once, and protect personal information. Fill the Venn regions from the inside out, then add every region to check that the total equals the number surveyed. Report both the overlap and the “neither” group; do not double-count respondents.</p>'),
      lesson('<p><b>Integrated worked example.</b> Forty learners join a school activity survey. Twenty-three choose the mathematics club, 19 choose the science club and 8 choose both. Mathematics only = 23 − 8 = 15; science only = 19 − 8 = 11; at least one = 23 + 19 − 8 = 34; neither = 40 − 34 = 6. A learner in both clubs belongs to the intersection and is counted once in the union.</p>'),
      { who: 'd', vis: 'demon', text: 'I will blur the boundaries between number families, reverse your inequalities and hide the overlaps in your Venn diagrams. Prove every classification and count!' },
      { type: 'battle' }
    ],
    quiz: [
      question('Which statement about √49 and √3 is correct?', [
        'Both are irrational.',
        '√49 is rational and √3 is irrational.',
        '√49 is irrational and √3 is rational.',
        'Both are not real numbers.'
      ], '√49 = 7, which is rational. √3 cannot be written as a ratio of two integers, so it is irrational.'),
      question('Which is the greatest number?', [
        '−1.5',
        '−√2',
        '−1.4',
        '−2'
      ], 'Since √2 is about 1.414, −√2 is about −1.414. The number −1.4 is farther to the right than −1.5, −1.414 and −2.'),
      question('Which set is not closed under subtraction?', [
        'Integers',
        'Rational numbers',
        'Real numbers',
        'Whole numbers'
      ], 'For whole numbers, 3 − 8 = −5, which is not a whole number. Integers, rational numbers and real numbers are closed under subtraction.'),
      question('Which equation shows the commutative property of multiplication?', [
        '(a × b) × c = a × (b × c)',
        'a × (b + c) = ab + ac',
        'a × b = b × a',
        'a × 1 = a'
      ], 'Commutative means the order can change without changing the result. Associative changes grouping, distributive expands brackets, and identity leaves a unchanged.'),
      question('What is the multiplicative inverse of −7/9?', [
        '7/9',
        '−9/7',
        '9/7',
        '−7/9'
      ], 'The reciprocal is −9/7 because (−7/9) × (−9/7) = 1. The additive inverse would be 7/9.'),
      question('Thirty-two learners play football, 24 play basketball and 10 play both. How many play at least one sport?', [
        '46',
        '56',
        '66',
        '36'
      ], 'Use n(F ∪ B) = n(F) + n(B) − n(F ∩ B) = 32 + 24 − 10 = 46.'),
      question('In a survey of 50 learners, 46 play at least one of two sports. How many play neither?', [
        '4',
        '46',
        '50',
        '96'
      ], 'The universal set contains 50 learners. Neither = 50 − 46 = 4.'),
      question('Which identity is De Morgan’s law for the complement of a union?', [
        '(A ∪ B)′ = A′ ∪ B′',
        '(A ∪ B)′ = A′ ∩ B′',
        '(A ∩ B)′ = A′ ∩ B′',
        'A ∪ B = A ∩ B'
      ], 'The complement of a union equals the intersection of the complements: (A ∪ B)′ = A′ ∩ B′.')
    ]
  }
];

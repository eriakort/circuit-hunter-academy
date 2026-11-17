import type { QuizQuestion } from '../types';

/** One alternate English-only item for each of the 45 official SHS 1 indicator concepts. */
export const GHANA_SS1_INDICATOR_ALTERNATE_QUESTIONS: Record<string, QuizQuestion> = {
  "ss1-real-cs1-li1": {
    "q": [
      "Which operation shows that the integers are not closed?",
      "Which operation shows that the integers are not closed?"
    ],
    "a": [
      [
        "7 ÷ 2 = 3.5, which is not an integer",
        "7 ÷ 2 = 3.5, which is not an integer"
      ],
      [
        "7 − 2 = 5",
        "7 − 2 = 5"
      ],
      [
        "7 × 2 = 14",
        "7 × 2 = 14"
      ],
      [
        "7 + 2 = 9",
        "7 + 2 = 9"
      ]
    ],
    "why": [
      "Closure requires every result to remain in the set. Dividing two integers can produce a non-integer.",
      "Closure requires every result to remain in the set. Dividing two integers can produce a non-integer."
    ]
  },
  "ss1-real-cs1-li2": {
    "q": [
      "Which value is irrational?",
      "Which value is irrational?"
    ],
    "a": [
      [
        "√11",
        "√11"
      ],
      [
        "0.6",
        "0.6"
      ],
      [
        "−3/4",
        "−3/4"
      ],
      [
        "1.272727…",
        "1.272727…"
      ]
    ],
    "why": [
      "11 is not a perfect square, so √11 cannot be written as a ratio of integers. The other values are rational.",
      "11 is not a perfect square, so √11 cannot be written as a ratio of integers. The other values are rational."
    ]
  },
  "ss1-real-cs1-li3": {
    "q": [
      "Which equality shows the multiplicative identity property?",
      "Which equality shows the multiplicative identity property?"
    ],
    "a": [
      [
        "9 × 1 = 9",
        "9 × 1 = 9"
      ],
      [
        "9 × 0 = 0",
        "9 × 0 = 0"
      ],
      [
        "9 + 1 = 10",
        "9 + 1 = 10"
      ],
      [
        "9 × 2 = 2 × 9",
        "9 × 2 = 2 × 9"
      ]
    ],
    "why": [
      "Multiplying any real number by 1 leaves it unchanged.",
      "Multiplying any real number by 1 leaves it unchanged."
    ]
  },
  "ss1-real-cs2-li1": {
    "q": [
      "If A = {1, 3, 5, 7} and B = {3, 4, 7}, what is A ∪ B?",
      "If A = {1, 3, 5, 7} and B = {3, 4, 7}, what is A ∪ B?"
    ],
    "a": [
      [
        "{1, 3, 4, 5, 7}",
        "{1, 3, 4, 5, 7}"
      ],
      [
        "{3, 7}",
        "{3, 7}"
      ],
      [
        "{1, 5}",
        "{1, 5}"
      ],
      [
        "{1, 3, 5, 7, 3, 4, 7}",
        "{1, 3, 5, 7, 3, 4, 7}"
      ]
    ],
    "why": [
      "The union contains every distinct element that belongs to A or B.",
      "The union contains every distinct element that belongs to A or B."
    ]
  },
  "ss1-real-cs2-li2": {
    "q": [
      "In a survey, 30 learners like football, 22 like netball and 8 like both. How many like at least one?",
      "In a survey, 30 learners like football, 22 like netball and 8 like both. How many like at least one?"
    ],
    "a": [
      [
        "44",
        "44"
      ],
      [
        "60",
        "60"
      ],
      [
        "52",
        "52"
      ],
      [
        "38",
        "38"
      ]
    ],
    "why": [
      "Use inclusion–exclusion: 30 + 22 − 8 = 44. The overlap is counted only once.",
      "Use inclusion–exclusion: 30 + 22 − 8 = 44. The overlap is counted only once."
    ]
  },
  "ss1-real-cs2-li3": {
    "q": [
      "Which identity is the second De Morgan law?",
      "Which identity is the second De Morgan law?"
    ],
    "a": [
      [
        "(A ∩ B)′ = A′ ∪ B′",
        "(A ∩ B)′ = A′ ∪ B′"
      ],
      [
        "(A ∩ B)′ = A′ ∩ B′",
        "(A ∩ B)′ = A′ ∩ B′"
      ],
      [
        "(A ∪ B)′ = A′ ∪ B′",
        "(A ∪ B)′ = A′ ∪ B′"
      ],
      [
        "A ∩ B = A′ ∪ B′",
        "A ∩ B = A′ ∪ B′"
      ]
    ],
    "why": [
      "The complement of an intersection equals the union of the complements.",
      "The complement of an intersection equals the union of the complements."
    ]
  },
  "ss1-prop-cs1-li1": {
    "q": [
      "What are the decimal and percentage equivalents of 3/8?",
      "What are the decimal and percentage equivalents of 3/8?"
    ],
    "a": [
      [
        "0.375 and 37.5%",
        "0.375 and 37.5%"
      ],
      [
        "0.38 and 38%",
        "0.38 and 38%"
      ],
      [
        "0.35 and 35%",
        "0.35 and 35%"
      ],
      [
        "0.625 and 62.5%",
        "0.625 and 62.5%"
      ]
    ],
    "why": [
      "3 ÷ 8 = 0.375; multiplying by 100 gives 37.5%.",
      "3 ÷ 8 = 0.375; multiplying by 100 gives 37.5%."
    ]
  },
  "ss1-prop-cs1-li2": {
    "q": [
      "For −4/7, what are the additive inverse and multiplicative inverse, in that order?",
      "For −4/7, what are the additive inverse and multiplicative inverse, in that order?"
    ],
    "a": [
      [
        "4/7 and −7/4",
        "4/7 and −7/4"
      ],
      [
        "−4/7 and 7/4",
        "−4/7 and 7/4"
      ],
      [
        "7/4 and 4/7",
        "7/4 and 4/7"
      ],
      [
        "4/7 and 7/4",
        "4/7 and 7/4"
      ]
    ],
    "why": [
      "The additive inverse changes the sign; the multiplicative inverse is the reciprocal and keeps the negative sign.",
      "The additive inverse changes the sign; the multiplicative inverse is the reciprocal and keeps the negative sign."
    ]
  },
  "ss1-prop-cs2-li1": {
    "q": [
      "Find 15% of 240.",
      "Find 15% of 240."
    ],
    "a": [
      [
        "36",
        "36"
      ],
      [
        "24",
        "24"
      ],
      [
        "40",
        "40"
      ],
      [
        "48",
        "48"
      ]
    ],
    "why": [
      "10% of 240 is 24 and 5% is 12; together they make 36.",
      "10% of 240 is 24 and 5% is 12; together they make 36."
    ]
  },
  "ss1-prop-cs2-li2": {
    "q": [
      "A trader buys a bag for GH₵150 and sells it for GH₵180. What is the profit percentage on cost?",
      "A trader buys a bag for GH₵150 and sells it for GH₵180. What is the profit percentage on cost?"
    ],
    "a": [
      [
        "20%",
        "20%"
      ],
      [
        "16.7%",
        "16.7%"
      ],
      [
        "30%",
        "30%"
      ],
      [
        "120%",
        "120%"
      ]
    ],
    "why": [
      "Profit = 180 − 150 = GH₵30. Profit percentage = 30 ÷ 150 × 100 = 20%.",
      "Profit = 180 − 150 = GH₵30. Profit percentage = 30 ÷ 150 × 100 = 20%."
    ]
  },
  "ss1-algebra-cs1-li1": {
    "q": [
      "Simplify 5y − 2(3 − y).",
      "Simplify 5y − 2(3 − y)."
    ],
    "a": [
      [
        "7y − 6",
        "7y − 6"
      ],
      [
        "3y − 6",
        "3y − 6"
      ],
      [
        "7y + 6",
        "7y + 6"
      ],
      [
        "5y − 6",
        "5y − 6"
      ]
    ],
    "why": [
      "Distribute −2: 5y − 6 + 2y = 7y − 6.",
      "Distribute −2: 5y − 6 + 2y = 7y − 6."
    ]
  },
  "ss1-algebra-cs1-li2": {
    "q": [
      "Factorise x² + 9x + 20.",
      "Factorise x² + 9x + 20."
    ],
    "a": [
      [
        "(x + 4)(x + 5)",
        "(x + 4)(x + 5)"
      ],
      [
        "(x + 2)(x + 10)",
        "(x + 2)(x + 10)"
      ],
      [
        "(x − 4)(x − 5)",
        "(x − 4)(x − 5)"
      ],
      [
        "(x + 1)(x + 20)",
        "(x + 1)(x + 20)"
      ]
    ],
    "why": [
      "The numbers 4 and 5 multiply to 20 and add to 9.",
      "The numbers 4 and 5 multiply to 20 and add to 9."
    ]
  },
  "ss1-algebra-cs1-li3": {
    "q": [
      "Factorise 16p² − 81.",
      "Factorise 16p² − 81."
    ],
    "a": [
      [
        "(4p − 9)(4p + 9)",
        "(4p − 9)(4p + 9)"
      ],
      [
        "(16p − 9)(p + 9)",
        "(16p − 9)(p + 9)"
      ],
      [
        "(4p − 9)²",
        "(4p − 9)²"
      ],
      [
        "(4p − 81)(4p + 1)",
        "(4p − 81)(4p + 1)"
      ]
    ],
    "why": [
      "This is a difference of squares: (4p)² − 9² = (4p − 9)(4p + 9).",
      "This is a difference of squares: (4p)² − 9² = (4p − 9)(4p + 9)."
    ]
  },
  "ss1-algebra-cs1-li4": {
    "q": [
      "Simplify (x² − 16)/(x − 4), stating the restriction.",
      "Simplify (x² − 16)/(x − 4), stating the restriction."
    ],
    "a": [
      [
        "x + 4, where x ≠ 4",
        "x + 4, where x ≠ 4"
      ],
      [
        "x − 4, where x ≠ 4",
        "x − 4, where x ≠ 4"
      ],
      [
        "x + 4, for every real x",
        "x + 4, for every real x"
      ],
      [
        "x − 4, where x ≠ −4",
        "x − 4, where x ≠ −4"
      ]
    ],
    "why": [
      "Factor the numerator as (x − 4)(x + 4), cancel the common factor, but keep x ≠ 4.",
      "Factor the numerator as (x − 4)(x + 4), cancel the common factor, but keep x ≠ 4."
    ]
  },
  "ss1-algebra-cs2-li1": {
    "q": [
      "The perimeter of a rectangle is P = 2l + 2w. Make l the subject.",
      "The perimeter of a rectangle is P = 2l + 2w. Make l the subject."
    ],
    "a": [
      [
        "l = (P − 2w)/2",
        "l = (P − 2w)/2"
      ],
      [
        "l = P − 2w",
        "l = P − 2w"
      ],
      [
        "l = (P + 2w)/2",
        "l = (P + 2w)/2"
      ],
      [
        "l = 2P − w",
        "l = 2P − w"
      ]
    ],
    "why": [
      "Subtract 2w from both sides, then divide by 2.",
      "Subtract 2w from both sides, then divide by 2."
    ]
  },
  "ss1-algebra-cs2-li2": {
    "q": [
      "Solve 5x + 4 > 19.",
      "Solve 5x + 4 > 19."
    ],
    "a": [
      [
        "x > 3",
        "x > 3"
      ],
      [
        "x < 3",
        "x < 3"
      ],
      [
        "x > 5",
        "x > 5"
      ],
      [
        "x ≥ 3",
        "x ≥ 3"
      ]
    ],
    "why": [
      "Subtract 4 to get 5x > 15, then divide by positive 5.",
      "Subtract 4 to get 5x > 15, then divide by positive 5."
    ]
  },
  "ss1-patterns-cs1-li1": {
    "q": [
      "A function maps 0 to 2, 1 to 5 and 2 to 8. Which rule describes it?",
      "A function maps 0 to 2, 1 to 5 and 2 to 8. Which rule describes it?"
    ],
    "a": [
      [
        "y = 3x + 2",
        "y = 3x + 2"
      ],
      [
        "y = 2x + 3",
        "y = 2x + 3"
      ],
      [
        "y = x + 2",
        "y = x + 2"
      ],
      [
        "y = 3x − 2",
        "y = 3x − 2"
      ]
    ],
    "why": [
      "Each output is three times the input plus 2, so the rule is y = 3x + 2.",
      "Each output is three times the input plus 2, so the rule is y = 3x + 2."
    ]
  },
  "ss1-patterns-cs1-li2": {
    "q": [
      "Where does the graph of y = −3x + 5 cross the y-axis?",
      "Where does the graph of y = −3x + 5 cross the y-axis?"
    ],
    "a": [
      [
        "At (0, 5)",
        "At (0, 5)"
      ],
      [
        "At (5, 0)",
        "At (5, 0)"
      ],
      [
        "At (0, −3)",
        "At (0, −3)"
      ],
      [
        "At (−3, 0)",
        "At (−3, 0)"
      ]
    ],
    "why": [
      "The y-intercept is the value of y when x = 0; here it is 5.",
      "The y-intercept is the value of y when x = 0; here it is 5."
    ]
  },
  "ss1-patterns-cs2-li1": {
    "q": [
      "Find the gradient of the line through (2, 1) and (4, 9).",
      "Find the gradient of the line through (2, 1) and (4, 9)."
    ],
    "a": [
      [
        "4",
        "4"
      ],
      [
        "2",
        "2"
      ],
      [
        "8",
        "8"
      ],
      [
        "−4",
        "−4"
      ]
    ],
    "why": [
      "Gradient = (9 − 1) ÷ (4 − 2) = 8 ÷ 2 = 4.",
      "Gradient = (9 − 1) ÷ (4 − 2) = 8 ÷ 2 = 4."
    ]
  },
  "ss1-patterns-cs2-li2": {
    "q": [
      "What is the midpoint of the segment joining (−2, 3) and (4, 7)?",
      "What is the midpoint of the segment joining (−2, 3) and (4, 7)?"
    ],
    "a": [
      [
        "(1, 5)",
        "(1, 5)"
      ],
      [
        "(2, 5)",
        "(2, 5)"
      ],
      [
        "(1, 4)",
        "(1, 4)"
      ],
      [
        "(−3, 10)",
        "(−3, 10)"
      ]
    ],
    "why": [
      "Average the x-coordinates and the y-coordinates: ((−2 + 4)/2, (3 + 7)/2) = (1, 5).",
      "Average the x-coordinates and the y-coordinates: ((−2 + 4)/2, (3 + 7)/2) = (1, 5)."
    ]
  },
  "ss1-spatial-li1": {
    "q": [
      "An angle measures 135°. How is it classified?",
      "An angle measures 135°. How is it classified?"
    ],
    "a": [
      [
        "Obtuse angle",
        "Obtuse angle"
      ],
      [
        "Acute angle",
        "Acute angle"
      ],
      [
        "Right angle",
        "Right angle"
      ],
      [
        "Reflex angle",
        "Reflex angle"
      ]
    ],
    "why": [
      "135° is greater than 90° and less than 180°, so it is obtuse.",
      "135° is greater than 90° and less than 180°, so it is obtuse."
    ]
  },
  "ss1-spatial-li2": {
    "q": [
      "Co-interior angles on parallel lines add to 180°. If one is 112°, find the other.",
      "Co-interior angles on parallel lines add to 180°. If one is 112°, find the other."
    ],
    "a": [
      [
        "68°",
        "68°"
      ],
      [
        "112°",
        "112°"
      ],
      [
        "78°",
        "78°"
      ],
      [
        "248°",
        "248°"
      ]
    ],
    "why": [
      "Co-interior angles are supplementary: 180° − 112° = 68°.",
      "Co-interior angles are supplementary: 180° − 112° = 68°."
    ]
  },
  "ss1-spatial-li3": {
    "q": [
      "Two interior angles of a triangle are 48° and 67°. Find the third angle.",
      "Two interior angles of a triangle are 48° and 67°. Find the third angle."
    ],
    "a": [
      [
        "65°",
        "65°"
      ],
      [
        "115°",
        "115°"
      ],
      [
        "75°",
        "75°"
      ],
      [
        "245°",
        "245°"
      ]
    ],
    "why": [
      "Angles in a triangle total 180°: 180° − 48° − 67° = 65°.",
      "Angles in a triangle total 180°: 180° − 48° − 67° = 65°."
    ]
  },
  "ss1-spatial-li4": {
    "q": [
      "A right triangle has legs of 5 cm and 12 cm. Find the hypotenuse.",
      "A right triangle has legs of 5 cm and 12 cm. Find the hypotenuse."
    ],
    "a": [
      [
        "13 cm",
        "13 cm"
      ],
      [
        "17 cm",
        "17 cm"
      ],
      [
        "7 cm",
        "7 cm"
      ],
      [
        "12 cm",
        "12 cm"
      ]
    ],
    "why": [
      "By Pythagoras, c = √(5² + 12²) = √169 = 13 cm.",
      "By Pythagoras, c = √(5² + 12²) = √169 = 13 cm."
    ]
  },
  "ss1-spatial-li5": {
    "q": [
      "What is the sum of the interior angles of a decagon?",
      "What is the sum of the interior angles of a decagon?"
    ],
    "a": [
      [
        "1440°",
        "1440°"
      ],
      [
        "1260°",
        "1260°"
      ],
      [
        "1620°",
        "1620°"
      ],
      [
        "1800°",
        "1800°"
      ]
    ],
    "why": [
      "A decagon has 10 sides: (10 − 2) × 180° = 1440°.",
      "A decagon has 10 sides: (10 − 2) × 180° = 1440°."
    ]
  },
  "ss1-measure-cs1-li1": {
    "q": [
      "Which description identifies displacement as a vector?",
      "Which description identifies displacement as a vector?"
    ],
    "a": [
      [
        "It states how far and in which direction an object moves.",
        "It states how far and in which direction an object moves."
      ],
      [
        "It gives only the distance travelled.",
        "It gives only the distance travelled."
      ],
      [
        "It gives only the time taken.",
        "It gives only the time taken."
      ],
      [
        "It gives only the object's mass.",
        "It gives only the object's mass."
      ]
    ],
    "why": [
      "A vector has both magnitude and direction; displacement includes both.",
      "A vector has both magnitude and direction; displacement includes both."
    ]
  },
  "ss1-measure-cs1-li2": {
    "q": [
      "A vector has a bearing of 045°. Which direction does it point?",
      "A vector has a bearing of 045°. Which direction does it point?"
    ],
    "a": [
      [
        "N45°E; an equal vector has the same magnitude and direction.",
        "N45°E; an equal vector has the same magnitude and direction."
      ],
      [
        "S45°W; an equal vector has the same length only.",
        "S45°W; an equal vector has the same length only."
      ],
      [
        "N45°W; an equal vector must start at the same point.",
        "N45°W; an equal vector must start at the same point."
      ],
      [
        "Due east; an equal vector has the same endpoint.",
        "Due east; an equal vector has the same endpoint."
      ]
    ],
    "why": [
      "Bearings are measured clockwise from north, so 045° is 45° east of north. Equal vectors need not share a starting point.",
      "Bearings are measured clockwise from north, so 045° is 45° east of north. Equal vectors need not share a starting point."
    ]
  },
  "ss1-measure-cs2-li1": {
    "q": [
      "In a right triangle, the opposite side is 8 cm and the adjacent side is 6 cm. What is tan θ?",
      "In a right triangle, the opposite side is 8 cm and the adjacent side is 6 cm. What is tan θ?"
    ],
    "a": [
      [
        "4/3",
        "4/3"
      ],
      [
        "3/4",
        "3/4"
      ],
      [
        "8/10",
        "8/10"
      ],
      [
        "6/8",
        "6/8"
      ]
    ],
    "why": [
      "tan θ = opposite ÷ adjacent = 8 ÷ 6 = 4/3.",
      "tan θ = opposite ÷ adjacent = 8 ÷ 6 = 4/3."
    ]
  },
  "ss1-measure-cs2-li2": {
    "q": [
      "What is the exact value of cos 60°?",
      "What is the exact value of cos 60°?"
    ],
    "a": [
      [
        "1/2",
        "1/2"
      ],
      [
        "√3/2",
        "√3/2"
      ],
      [
        "1",
        "1"
      ],
      [
        "0",
        "0"
      ]
    ],
    "why": [
      "At 60°, cosine is one half.",
      "At 60°, cosine is one half."
    ]
  },
  "ss1-measure-cs2-li3": {
    "q": [
      "What is the value of cos 240°?",
      "What is the value of cos 240°?"
    ],
    "a": [
      [
        "−1/2",
        "−1/2"
      ],
      [
        "1/2",
        "1/2"
      ],
      [
        "−√3/2",
        "−√3/2"
      ],
      [
        "√3/2",
        "√3/2"
      ]
    ],
    "why": [
      "240° is in quadrant III, where cosine is negative; its reference angle is 60°.",
      "240° is in quadrant III, where cosine is negative; its reference angle is 60°."
    ]
  },
  "ss1-measure-cs3-li1": {
    "q": [
      "Which is a reasonable estimate for the area of a standard exterior house door?",
      "Which is a reasonable estimate for the area of a standard exterior house door?"
    ],
    "a": [
      [
        "About 2 m²",
        "About 2 m²"
      ],
      [
        "About 2 cm²",
        "About 2 cm²"
      ],
      [
        "About 20 m²",
        "About 20 m²"
      ],
      [
        "About 200 m²",
        "About 200 m²"
      ]
    ],
    "why": [
      "A door is roughly 2 metres high and about 1 metre wide, giving an area near 2 m².",
      "A door is roughly 2 metres high and about 1 metre wide, giving an area near 2 m²."
    ]
  },
  "ss1-measure-cs3-li2": {
    "q": [
      "A shape covers 20 full grid squares and 8 half-squares. Each square is 1 cm². Estimate its area.",
      "A shape covers 20 full grid squares and 8 half-squares. Each square is 1 cm². Estimate its area."
    ],
    "a": [
      [
        "24 cm²",
        "24 cm²"
      ],
      [
        "28 cm²",
        "28 cm²"
      ],
      [
        "20 cm²",
        "20 cm²"
      ],
      [
        "16 cm²",
        "16 cm²"
      ]
    ],
    "why": [
      "Eight half-squares make four full squares, so the estimated area is 20 + 4 = 24 cm².",
      "Eight half-squares make four full squares, so the estimated area is 20 + 4 = 24 cm²."
    ]
  },
  "ss1-measure-cs3-li3": {
    "q": [
      "An L-shaped garden is made from two non-overlapping rectangles: 12 m × 7 m and 3 m × 4 m. Find its area.",
      "An L-shaped garden is made from two non-overlapping rectangles: 12 m × 7 m and 3 m × 4 m. Find its area."
    ],
    "a": [
      [
        "96 m²",
        "96 m²"
      ],
      [
        "84 m²",
        "84 m²"
      ],
      [
        "96 m",
        "96 m"
      ],
      [
        "120 m²",
        "120 m²"
      ]
    ],
    "why": [
      "Add the two rectangle areas: (12 × 7) + (3 × 4) = 84 + 12 = 96 m².",
      "Add the two rectangle areas: (12 × 7) + (3 × 4) = 84 + 12 = 96 m²."
    ]
  },
  "ss1-measure-cs3-li4": {
    "q": [
      "A prism has a cross-sectional area of 15 cm² and a perpendicular length of 9 cm. Find its volume.",
      "A prism has a cross-sectional area of 15 cm² and a perpendicular length of 9 cm. Find its volume."
    ],
    "a": [
      [
        "135 cm³",
        "135 cm³"
      ],
      [
        "24 cm³",
        "24 cm³"
      ],
      [
        "135 cm²",
        "135 cm²"
      ],
      [
        "120 cm³",
        "120 cm³"
      ]
    ],
    "why": [
      "Volume of a prism = cross-sectional area × perpendicular length = 15 × 9 = 135 cm³.",
      "Volume of a prism = cross-sectional area × perpendicular length = 15 × 9 = 135 cm³."
    ]
  },
  "ss1-stats-cs1-li1": {
    "q": [
      "The time each learner spends travelling to school is which type of data?",
      "The time each learner spends travelling to school is which type of data?"
    ],
    "a": [
      [
        "Continuous quantitative data",
        "Continuous quantitative data"
      ],
      [
        "Discrete quantitative data",
        "Discrete quantitative data"
      ],
      [
        "Qualitative nominal data",
        "Qualitative nominal data"
      ],
      [
        "Qualitative ordinal data",
        "Qualitative ordinal data"
      ]
    ],
    "why": [
      "Travel time is measured and can take decimal values, so it is continuous quantitative data.",
      "Travel time is measured and can take decimal values, so it is continuous quantitative data."
    ]
  },
  "ss1-stats-cs1-li2": {
    "q": [
      "A school wants each learner's height recorded as primary quantitative data. What should it do?",
      "A school wants each learner's height recorded as primary quantitative data. What should it do?"
    ],
    "a": [
      [
        "Measure each learner with the same calibrated measuring device.",
        "Measure each learner with the same calibrated measuring device."
      ],
      [
        "Estimate heights from photographs.",
        "Estimate heights from photographs."
      ],
      [
        "Copy heights from an unrelated online article.",
        "Copy heights from an unrelated online article."
      ],
      [
        "Ask learners to choose a height category only.",
        "Ask learners to choose a height category only."
      ]
    ],
    "why": [
      "Direct, consistent measurement produces primary quantitative data suitable for comparison.",
      "Direct, consistent measurement produces primary quantitative data suitable for comparison."
    ]
  },
  "ss1-stats-cs1-li3": {
    "q": [
      "A school wants detailed reasons why learners prefer different clubs. Which method is most suitable?",
      "A school wants detailed reasons why learners prefer different clubs. Which method is most suitable?"
    ],
    "a": [
      [
        "Conduct open-ended interviews with a sample of learners.",
        "Conduct open-ended interviews with a sample of learners."
      ],
      [
        "Count how many learners attend each club only.",
        "Count how many learners attend each club only."
      ],
      [
        "Measure the length of the club meetings.",
        "Measure the length of the club meetings."
      ],
      [
        "Record only each learner's age.",
        "Record only each learner's age."
      ]
    ],
    "why": [
      "Open-ended interviews allow learners to explain opinions and reasons in their own words.",
      "Open-ended interviews allow learners to explain opinions and reasons in their own words."
    ]
  },
  "ss1-stats-cs2-descriptive": {
    "q": [
      "The values are 2, 3, 4, 5 and 26. Which measure is least affected by the outlier 26?",
      "The values are 2, 3, 4, 5 and 26. Which measure is least affected by the outlier 26?"
    ],
    "a": [
      [
        "The median, which is 4",
        "The median, which is 4"
      ],
      [
        "The mean, which is 8",
        "The mean, which is 8"
      ],
      [
        "The maximum, which is 26",
        "The maximum, which is 26"
      ],
      [
        "The range, which is 24",
        "The range, which is 24"
      ]
    ],
    "why": [
      "The median is the middle value and is less sensitive to an extreme value than the mean.",
      "The median is the middle value and is less sensitive to an extreme value than the mean."
    ]
  },
  "ss1-stats-cs2-li2": {
    "q": [
      "The data are 5, 7, 5, 6, 5, 7 and 8. What is the frequency of 5?",
      "The data are 5, 7, 5, 6, 5, 7 and 8. What is the frequency of 5?"
    ],
    "a": [
      [
        "3",
        "3"
      ],
      [
        "2",
        "2"
      ],
      [
        "4",
        "4"
      ],
      [
        "5",
        "5"
      ]
    ],
    "why": [
      "The value 5 appears three times in the list.",
      "The value 5 appears three times in the list."
    ]
  },
  "ss1-stats-cs3-li1": {
    "q": [
      "A school has four year groups and wants every group represented. Which sampling plan is best?",
      "A school has four year groups and wants every group represented. Which sampling plan is best?"
    ],
    "a": [
      [
        "Randomly select learners from each year group.",
        "Randomly select learners from each year group."
      ],
      [
        "Ask only learners in the oldest year group.",
        "Ask only learners in the oldest year group."
      ],
      [
        "Ask only the researcher's friends.",
        "Ask only the researcher's friends."
      ],
      [
        "Choose only learners who volunteer first.",
        "Choose only learners who volunteer first."
      ]
    ],
    "why": [
      "Sampling randomly within each year group ensures that every group is represented.",
      "Sampling randomly within each year group ensures that every group is represented."
    ]
  },
  "ss1-stats-cs3-li2": {
    "q": [
      "What should a responsible school survey report include?",
      "What should a responsible school survey report include?"
    ],
    "a": [
      [
        "The method, sample size, anonymised results, limitations and evidence-based conclusions.",
        "The method, sample size, anonymised results, limitations and evidence-based conclusions."
      ],
      [
        "Names of every learner and unsupported claims.",
        "Names of every learner and unsupported claims."
      ],
      [
        "Only a colourful chart with no labels.",
        "Only a colourful chart with no labels."
      ],
      [
        "A conclusion that hides results that disagree with the writer.",
        "A conclusion that hides results that disagree with the writer."
      ]
    ],
    "why": [
      "A responsible report is transparent about methods, protects privacy and explains limitations.",
      "A responsible report is transparent about methods, protects privacy and explains limitations."
    ]
  },
  "ss1-stats-cs2-li3": {
    "q": [
      "A survey about the whole school asks only the researcher's close friends. What is the main problem?",
      "A survey about the whole school asks only the researcher's close friends. What is the main problem?"
    ],
    "a": [
      [
        "The sample is likely biased and may not represent the school.",
        "The sample is likely biased and may not represent the school."
      ],
      [
        "The sample is automatically random.",
        "The sample is automatically random."
      ],
      [
        "The results must be correct because friends know each other.",
        "The results must be correct because friends know each other."
      ],
      [
        "The survey becomes a census.",
        "The survey becomes a census."
      ]
    ],
    "why": [
      "Selecting close friends is a convenience sample and can create selection bias.",
      "Selecting close friends is a convenience sample and can create selection bias."
    ]
  },
  "ss1-prob-cs1-li1": {
    "q": [
      "Two fair six-sided dice are rolled. How many ordered outcomes are in the sample space?",
      "Two fair six-sided dice are rolled. How many ordered outcomes are in the sample space?"
    ],
    "a": [
      [
        "36",
        "36"
      ],
      [
        "12",
        "12"
      ],
      [
        "18",
        "18"
      ],
      [
        "6",
        "6"
      ]
    ],
    "why": [
      "Each die has six possible outcomes, so there are 6 × 6 = 36 ordered pairs.",
      "Each die has six possible outcomes, so there are 6 × 6 = 36 ordered pairs."
    ]
  },
  "ss1-prob-cs1-li2": {
    "q": [
      "A fair four-section spinner and a fair coin are used. What is the probability of landing on red and getting heads if one spinner section is red?",
      "A fair four-section spinner and a fair coin are used. What is the probability of landing on red and getting heads if one spinner section is red?"
    ],
    "a": [
      [
        "1/8",
        "1/8"
      ],
      [
        "1/4",
        "1/4"
      ],
      [
        "1/2",
        "1/2"
      ],
      [
        "3/8",
        "3/8"
      ]
    ],
    "why": [
      "The events are independent: P(red and heads) = 1/4 × 1/2 = 1/8.",
      "The events are independent: P(red and heads) = 1/4 × 1/2 = 1/8."
    ]
  },
  "ss1-prob-cs1-li3": {
    "q": [
      "A bag contains 4 green and 1 yellow counter. A counter is replaced after each draw. What is the probability of drawing green twice?",
      "A bag contains 4 green and 1 yellow counter. A counter is replaced after each draw. What is the probability of drawing green twice?"
    ],
    "a": [
      [
        "16/25",
        "16/25"
      ],
      [
        "4/25",
        "4/25"
      ],
      [
        "8/25",
        "8/25"
      ],
      [
        "16/20",
        "16/20"
      ]
    ],
    "why": [
      "With replacement, the probability remains 4/5 on each draw: 4/5 × 4/5 = 16/25.",
      "With replacement, the probability remains 4/5 on each draw: 4/5 × 4/5 = 16/25."
    ]
  }
};

import type { ArcInfo, BilingualText, LearningConcept, Mission } from '../types';
import { GHANA_SS1_INDICATOR_ALTERNATE_QUESTIONS } from './ghanaCoreMathSS1IndicatorQuestionVariants';

interface IndicatorItem {
  id: string;
  strand: string;
  subStrand: string;
  contentStandardId: string;
  learningIndicatorId: string;
  title: BilingualText;
  explanation: BilingualText;
  q: BilingualText;
  a: BilingualText[];
  why: BilingualText;
  workedExample?: LearningConcept['workedExample'];
  misconceptions?: LearningConcept['misconceptions'];
  knowledgePrompts?: LearningConcept['knowledgePrompts'];
}

const INDICATORS = [
  {
    "id": "ss1-real-cs1-li1",
    "strand": "Numbers for Everyday Life",
    "subStrand": "Real Number System",
    "contentStandardId": "1.1.1.CS.1",
    "learningIndicatorId": "1.1.1.LI.1",
    "title": [
      "Closure of real-number subsets",
      "Closure of real-number subsets"
    ],
    "explanation": [
      "Check whether a number set stays within the same set after an operation. Integers are not closed under division because 1 ÷ 2 is not an integer.",
      "Check whether a number set stays within the same set after an operation. Integers are not closed under division because 1 ÷ 2 is not an integer."
    ],
    "q": [
      "Which statement correctly describes closure of the integers under division?",
      "Which statement correctly describes closure of the integers under division?"
    ],
    "a": [
      [
        "They are not closed: 1 ÷ 2 = 0.5 is not an integer.",
        "They are not closed: 1 ÷ 2 = 0.5 is not an integer."
      ],
      [
        "They are closed because 1 and 2 are integers.",
        "They are closed because 1 and 2 are integers."
      ],
      [
        "They are closed only when the answer is negative.",
        "They are closed only when the answer is negative."
      ],
      [
        "They are closed because division always gives an integer.",
        "They are closed because division always gives an integer."
      ]
    ],
    "why": [
      "A set is closed under an operation only if every allowed operation on members of the set produces another member. 1 ÷ 2 is not an integer.",
      "A set is closed under an operation only if every allowed operation on members of the set produces another member. 1 ÷ 2 is not an integer."
    ],
    "workedExample": {
      "scenario": [
        "Test whether the integers stay closed under division using 6 ÷ 3 and 1 ÷ 2.",
        "Test whether the integers stay closed under division using 6 ÷ 3 and 1 ÷ 2."
      ],
      "steps": [
        [
          "Divide 6 by 3: the result is 2, which is an integer.",
          "Divide 6 by 3: the result is 2, which is an integer."
        ],
        [
          "Divide 1 by 2: the result is 0.5, which is not an integer.",
          "Divide 1 by 2: the result is 0.5, which is not an integer."
        ]
      ],
      "answer": [
        "Because one division of integers gives a result outside the integers, the integers are not closed under division.",
        "Because one division of integers gives a result outside the integers, the integers are not closed under division."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "If both numbers are integers, their quotient must also be an integer.",
          "If both numbers are integers, their quotient must also be an integer."
        ],
        "correction": [
          "Division is different from addition and multiplication: 1 ÷ 2 = 0.5 is a counterexample.",
          "Division is different from addition and multiplication: 1 ÷ 2 = 0.5 is a counterexample."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "Give one division of two integers that produces a non-integer result.",
        "Give one division of two integers that produces a non-integer result."
      ]
    ]
  },
  {
    "id": "ss1-real-cs1-li2",
    "strand": "Numbers for Everyday Life",
    "subStrand": "Real Number System",
    "contentStandardId": "1.1.1.CS.1",
    "learningIndicatorId": "1.1.1.LI.2",
    "title": [
      "Rational and irrational numbers",
      "Rational and irrational numbers"
    ],
    "explanation": [
      "A rational number can be written as a fraction of integers and has a terminating or recurring decimal. An irrational number has a non-terminating, non-recurring decimal.",
      "A rational number can be written as a fraction of integers and has a terminating or recurring decimal. An irrational number has a non-terminating, non-recurring decimal."
    ],
    "q": [
      "Which number is irrational?",
      "Which number is irrational?"
    ],
    "a": [
      [
        "√7",
        "√7"
      ],
      [
        "0.125",
        "0.125"
      ],
      [
        "2/3",
        "2/3"
      ],
      [
        "0.444…",
        "0.444…"
      ]
    ],
    "why": [
      "√7 cannot be expressed as a ratio of two integers. The other choices are rational.",
      "√7 cannot be expressed as a ratio of two integers. The other choices are rational."
    ],
    "workedExample": {
      "scenario": [
        "Classify 0.125 and √7 as rational or irrational numbers.",
        "Classify 0.125 and √7 as rational or irrational numbers."
      ],
      "steps": [
        [
          "Write 0.125 as a fraction: 0.125 = 125/1000 = 1/8.",
          "Write 0.125 as a fraction: 0.125 = 125/1000 = 1/8."
        ],
        [
          "√7 cannot be written as a ratio of two integers; its decimal expansion does not terminate or repeat.",
          "√7 cannot be written as a ratio of two integers; its decimal expansion does not terminate or repeat."
        ]
      ],
      "answer": [
        "0.125 is rational, while √7 is irrational.",
        "0.125 is rational, while √7 is irrational."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "Every decimal number is irrational.",
          "Every decimal number is irrational."
        ],
        "correction": [
          "Terminating decimals and recurring decimals are rational because they can be written as fractions.",
          "Terminating decimals and recurring decimals are rational because they can be written as fractions."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "Explain why 0.333… is rational but √7 is irrational.",
        "Explain why 0.333… is rational but √7 is irrational."
      ]
    ]
  },
  {
    "id": "ss1-real-cs1-li3",
    "strand": "Numbers for Everyday Life",
    "subStrand": "Real Number System",
    "contentStandardId": "1.1.1.CS.1",
    "learningIndicatorId": "1.1.1.LI.3",
    "title": [
      "Properties of real-number operations",
      "Properties of real-number operations"
    ],
    "explanation": [
      "Recognise commutative, associative, identity, inverse and distributive properties and use them to simplify calculations.",
      "Recognise commutative, associative, identity, inverse and distributive properties and use them to simplify calculations."
    ],
    "q": [
      "Which equality demonstrates the distributive property?",
      "Which equality demonstrates the distributive property?"
    ],
    "a": [
      [
        "4(3 + 2) = 4 × 3 + 4 × 2",
        "4(3 + 2) = 4 × 3 + 4 × 2"
      ],
      [
        "3 + 5 = 5 + 3",
        "3 + 5 = 5 + 3"
      ],
      [
        "(2 × 3) × 4 = 2 × (3 × 4)",
        "(2 × 3) × 4 = 2 × (3 × 4)"
      ],
      [
        "7 + 0 = 7",
        "7 + 0 = 7"
      ]
    ],
    "why": [
      "The factor 4 is multiplied by each term inside the brackets. The other options show commutativity, associativity and the additive identity.",
      "The factor 4 is multiplied by each term inside the brackets. The other options show commutativity, associativity and the additive identity."
    ],
    "workedExample": {
      "scenario": [
        "Expand 5(2x + 3) using the distributive property.",
        "Expand 5(2x + 3) using the distributive property."
      ],
      "steps": [
        [
          "Multiply 5 by the first term: 5 × 2x = 10x.",
          "Multiply 5 by the first term: 5 × 2x = 10x."
        ],
        [
          "Multiply 5 by the second term: 5 × 3 = 15, then combine: 10x + 15.",
          "Multiply 5 by the second term: 5 × 3 = 15, then combine: 10x + 15."
        ]
      ],
      "answer": [
        "5(2x + 3) = 10x + 15; the factor multiplies every term inside the brackets.",
        "5(2x + 3) = 10x + 15; the factor multiplies every term inside the brackets."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "The outside factor multiplies only the first term in the brackets.",
          "The outside factor multiplies only the first term in the brackets."
        ],
        "correction": [
          "The distributive property applies the factor to every term: 5(2x + 3) = 10x + 15.",
          "The distributive property applies the factor to every term: 5(2x + 3) = 10x + 15."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "Expand 3(a − 4) and explain where the negative sign goes.",
        "Expand 3(a − 4) and explain where the negative sign goes."
      ]
    ]
  },
  {
    "id": "ss1-real-cs2-li1",
    "strand": "Numbers for Everyday Life",
    "subStrand": "Real Number System",
    "contentStandardId": "1.1.1.CS.2",
    "learningIndicatorId": "1.1.1.LI.1",
    "title": [
      "Two-set vocabulary and operations",
      "Two-set vocabulary and operations"
    ],
    "explanation": [
      "Use union, intersection and complement correctly. The intersection contains only elements shared by both sets.",
      "Use union, intersection and complement correctly. The intersection contains only elements shared by both sets."
    ],
    "q": [
      "If A = {2, 4, 6} and B = {4, 6, 8}, what is A ∩ B?",
      "If A = {2, 4, 6} and B = {4, 6, 8}, what is A ∩ B?"
    ],
    "a": [
      [
        "{4, 6}",
        "{4, 6}"
      ],
      [
        "{2, 8}",
        "{2, 8}"
      ],
      [
        "{2, 4, 6, 8}",
        "{2, 4, 6, 8}"
      ],
      [
        "{2, 4}",
        "{2, 4}"
      ]
    ],
    "why": [
      "The intersection contains the elements that appear in both sets: 4 and 6.",
      "The intersection contains the elements that appear in both sets: 4 and 6."
    ],
    "workedExample": {
      "scenario": [
        "Let A = {1, 2, 4, 6} and B = {2, 3, 6}. Find A ∩ B.",
        "Let A = {1, 2, 4, 6} and B = {2, 3, 6}. Find A ∩ B."
      ],
      "steps": [
        [
          "Check each element of A and keep only those that also appear in B.",
          "Check each element of A and keep only those that also appear in B."
        ],
        [
          "The common elements are 2 and 6.",
          "The common elements are 2 and 6."
        ]
      ],
      "answer": [
        "A ∩ B = {2, 6}; intersection means elements shared by both sets.",
        "A ∩ B = {2, 6}; intersection means elements shared by both sets."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "The intersection contains every element found in either set.",
          "The intersection contains every element found in either set."
        ],
        "correction": [
          "That describes the union. The intersection keeps only elements common to both sets.",
          "That describes the union. The intersection keeps only elements common to both sets."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "Using A = {a, b, c} and B = {b, c, d}, find A ∩ B.",
        "Using A = {a, b, c} and B = {b, c, d}, find A ∩ B."
      ]
    ]
  },
  {
    "id": "ss1-real-cs2-li2",
    "strand": "Numbers for Everyday Life",
    "subStrand": "Real Number System",
    "contentStandardId": "1.1.1.CS.2",
    "learningIndicatorId": "1.1.1.LI.2",
    "title": [
      "Two-set Venn-diagram problems",
      "Two-set Venn-diagram problems"
    ],
    "explanation": [
      "For two sets, add the set totals and subtract the overlap once to count everyone in the union exactly once.",
      "For two sets, add the set totals and subtract the overlap once to count everyone in the union exactly once."
    ],
    "q": [
      "In a class, 24 learners like football, 18 like netball and 7 like both. How many like at least one sport?",
      "In a class, 24 learners like football, 18 like netball and 7 like both. How many like at least one sport?"
    ],
    "a": [
      [
        "35",
        "35"
      ],
      [
        "42",
        "42"
      ],
      [
        "49",
        "49"
      ],
      [
        "31",
        "31"
      ]
    ],
    "why": [
      "Use n(F ∪ N) = 24 + 18 − 7 = 35.",
      "Use n(F ∪ N) = 24 + 18 − 7 = 35."
    ],
    "workedExample": {
      "scenario": [
        "In a group, 30 learners like football, 22 like netball and 8 like both. Find how many like at least one sport.",
        "In a group, 30 learners like football, 22 like netball and 8 like both. Find how many like at least one sport."
      ],
      "steps": [
        [
          "Add the two group sizes: 30 + 22 = 52.",
          "Add the two group sizes: 30 + 22 = 52."
        ],
        [
          "Subtract the 8 learners counted twice: 52 − 8 = 44.",
          "Subtract the 8 learners counted twice: 52 − 8 = 44."
        ]
      ],
      "answer": [
        "44 learners like at least one sport. The overlap is subtracted once because it was counted twice.",
        "44 learners like at least one sport. The overlap is subtracted once because it was counted twice."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "Add the two set totals without subtracting the overlap.",
          "Add the two set totals without subtracting the overlap."
        ],
        "correction": [
          "Learners who like both sports appear in both totals, so subtract the overlap once: n(A ∪ B) = n(A) + n(B) − n(A ∩ B).",
          "Learners who like both sports appear in both totals, so subtract the overlap once: n(A ∪ B) = n(A) + n(B) − n(A ∩ B)."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "Why must the number who like both sports be subtracted once?",
        "Why must the number who like both sports be subtracted once?"
      ]
    ]
  },
  {
    "id": "ss1-real-cs2-li3",
    "strand": "Numbers for Everyday Life",
    "subStrand": "Real Number System",
    "contentStandardId": "1.1.1.CS.2",
    "learningIndicatorId": "1.1.1.LI.3",
    "title": [
      "Three-set relationships and De Morgan's laws",
      "Three-set relationships and De Morgan's laws"
    ],
    "explanation": [
      "De Morgan's laws connect the complement of a union with the intersection of complements, and the complement of an intersection with the union of complements.",
      "De Morgan's laws connect the complement of a union with the intersection of complements, and the complement of an intersection with the union of complements."
    ],
    "q": [
      "Which identity is a De Morgan law?",
      "Which identity is a De Morgan law?"
    ],
    "a": [
      [
        "(A ∪ B)′ = A′ ∩ B′",
        "(A ∪ B)′ = A′ ∩ B′"
      ],
      [
        "(A ∪ B)′ = A ∪ B",
        "(A ∪ B)′ = A ∪ B"
      ],
      [
        "A ∩ B = A′ ∩ B′",
        "A ∩ B = A′ ∩ B′"
      ],
      [
        "A ∪ B = A′ ∪ B′",
        "A ∪ B = A′ ∪ B′"
      ]
    ],
    "why": [
      "The complement of a union is the intersection of the complements.",
      "The complement of a union is the intersection of the complements."
    ],
    "workedExample": {
      "scenario": [
        "Use De Morgan's law with U = {1, 2, 3, 4}, A = {1, 2} and B = {2, 3}.",
        "Use De Morgan's law with U = {1, 2, 3, 4}, A = {1, 2} and B = {2, 3}."
      ],
      "steps": [
        [
          "A ∪ B = {1, 2, 3}, so (A ∪ B)′ = {4}.",
          "A ∪ B = {1, 2, 3}, so (A ∪ B)′ = {4}."
        ],
        [
          "A′ = {3, 4} and B′ = {1, 4}; their intersection is {4}.",
          "A′ = {3, 4} and B′ = {1, 4}; their intersection is {4}."
        ]
      ],
      "answer": [
        "Both sides equal {4}, confirming (A ∪ B)′ = A′ ∩ B′.",
        "Both sides equal {4}, confirming (A ∪ B)′ = A′ ∩ B′."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "The complement of a union is the union of the complements.",
          "The complement of a union is the union of the complements."
        ],
        "correction": [
          "De Morgan changes union to intersection: (A ∪ B)′ = A′ ∩ B′.",
          "De Morgan changes union to intersection: (A ∪ B)′ = A′ ∩ B′."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "State the De Morgan law for the complement of an intersection.",
        "State the De Morgan law for the complement of an intersection."
      ]
    ]
  },
  {
    "id": "ss1-prop-cs1-li1",
    "strand": "Numbers for Everyday Life",
    "subStrand": "Proportional Reasoning",
    "contentStandardId": "1.1.2.CS.1",
    "learningIndicatorId": "1.1.2.LI.1",
    "title": [
      "Fraction, decimal and percentage connections",
      "Fraction, decimal and percentage connections"
    ],
    "explanation": [
      "Convert accurately among fractions, decimals and percentages, and use equivalent forms to estimate and calculate.",
      "Convert accurately among fractions, decimals and percentages, and use equivalent forms to estimate and calculate."
    ],
    "q": [
      "Which statement gives the correct equivalents for 7/20?",
      "Which statement gives the correct equivalents for 7/20?"
    ],
    "a": [
      [
        "0.35 and 35%",
        "0.35 and 35%"
      ],
      [
        "0.7 and 7%",
        "0.7 and 7%"
      ],
      [
        "0.07 and 70%",
        "0.07 and 70%"
      ],
      [
        "3.5 and 350%",
        "3.5 and 350%"
      ]
    ],
    "why": [
      "7 ÷ 20 = 0.35, and 0.35 × 100 = 35%.",
      "7 ÷ 20 = 0.35, and 0.35 × 100 = 35%."
    ],
    "workedExample": {
      "scenario": [
        "Convert 3/8 into a decimal and a percentage.",
        "Convert 3/8 into a decimal and a percentage."
      ],
      "steps": [
        [
          "Divide 3 by 8: 3 ÷ 8 = 0.375.",
          "Divide 3 by 8: 3 ÷ 8 = 0.375."
        ],
        [
          "Multiply by 100 to get the percentage: 0.375 × 100 = 37.5%.",
          "Multiply by 100 to get the percentage: 0.375 × 100 = 37.5%."
        ]
      ],
      "answer": [
        "3/8 = 0.375 = 37.5%.",
        "3/8 = 0.375 = 37.5%."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "To convert a decimal to a percentage, divide by 100.",
          "To convert a decimal to a percentage, divide by 100."
        ],
        "correction": [
          "Multiply the decimal by 100 and add the percent sign.",
          "Multiply the decimal by 100 and add the percent sign."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "Convert 9/25 into a decimal and a percentage.",
        "Convert 9/25 into a decimal and a percentage."
      ]
    ]
  },
  {
    "id": "ss1-prop-cs1-li2",
    "strand": "Numbers for Everyday Life",
    "subStrand": "Proportional Reasoning",
    "contentStandardId": "1.1.2.CS.1",
    "learningIndicatorId": "1.1.2.LI.2",
    "title": [
      "Additive and multiplicative inverses",
      "Additive and multiplicative inverses"
    ],
    "explanation": [
      "The additive inverse makes a sum of zero. The multiplicative inverse makes a product of one, provided the number is not zero.",
      "The additive inverse makes a sum of zero. The multiplicative inverse makes a product of one, provided the number is not zero."
    ],
    "q": [
      "For 3/5, which pair gives its additive inverse and multiplicative inverse, in that order?",
      "For 3/5, which pair gives its additive inverse and multiplicative inverse, in that order?"
    ],
    "a": [
      [
        "−3/5 and 5/3",
        "−3/5 and 5/3"
      ],
      [
        "3/5 and −5/3",
        "3/5 and −5/3"
      ],
      [
        "5/3 and −3/5",
        "5/3 and −3/5"
      ],
      [
        "−5/3 and 3/5",
        "−5/3 and 3/5"
      ]
    ],
    "why": [
      "The additive inverse is −3/5; the reciprocal is 5/3 because (3/5)(5/3) = 1.",
      "The additive inverse is −3/5; the reciprocal is 5/3 because (3/5)(5/3) = 1."
    ],
    "workedExample": {
      "scenario": [
        "For 4/7, find the additive inverse and the multiplicative inverse.",
        "For 4/7, find the additive inverse and the multiplicative inverse."
      ],
      "steps": [
        [
          "The additive inverse is −4/7 because 4/7 + (−4/7) = 0.",
          "The additive inverse is −4/7 because 4/7 + (−4/7) = 0."
        ],
        [
          "The multiplicative inverse is 7/4 because (4/7) × (7/4) = 1.",
          "The multiplicative inverse is 7/4 because (4/7) × (7/4) = 1."
        ]
      ],
      "answer": [
        "The two inverses are −4/7 and 7/4, in that order.",
        "The two inverses are −4/7 and 7/4, in that order."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "The additive inverse is the reciprocal, or both inverses are found by changing the sign.",
          "The additive inverse is the reciprocal, or both inverses are found by changing the sign."
        ],
        "correction": [
          "The additive inverse sums to zero; the multiplicative inverse multiplies to one.",
          "The additive inverse sums to zero; the multiplicative inverse multiplies to one."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "How can you check that a number is the multiplicative inverse of 5/9?",
        "How can you check that a number is the multiplicative inverse of 5/9?"
      ]
    ]
  },
  {
    "id": "ss1-prop-cs2-li1",
    "strand": "Numbers for Everyday Life",
    "subStrand": "Proportional Reasoning",
    "contentStandardId": "1.1.2.CS.2",
    "learningIndicatorId": "1.1.2.LI.1",
    "title": [
      "Percentage models and generalisations",
      "Percentage models and generalisations"
    ],
    "explanation": [
      "Interpret a percentage as parts per hundred and move between fraction, decimal and percentage representations in practical calculations.",
      "Interpret a percentage as parts per hundred and move between fraction, decimal and percentage representations in practical calculations."
    ],
    "q": [
      "What percentage of 80 is 20?",
      "What percentage of 80 is 20?"
    ],
    "a": [
      [
        "25%",
        "25%"
      ],
      [
        "20%",
        "20%"
      ],
      [
        "40%",
        "40%"
      ],
      [
        "4%",
        "4%"
      ]
    ],
    "why": [
      "20 ÷ 80 = 0.25, which is 25%.",
      "20 ÷ 80 = 0.25, which is 25%."
    ],
    "workedExample": {
      "scenario": [
        "A class has 40 learners and 10 are absent. What percentage are absent?",
        "A class has 40 learners and 10 are absent. What percentage are absent?"
      ],
      "steps": [
        [
          "Divide the part by the whole: 10 ÷ 40 = 0.25.",
          "Divide the part by the whole: 10 ÷ 40 = 0.25."
        ],
        [
          "Multiply by 100: 0.25 × 100 = 25%.",
          "Multiply by 100: 0.25 × 100 = 25%."
        ]
      ],
      "answer": [
        "25% of the class is absent.",
        "25% of the class is absent."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "Use the part as the denominator when finding a percentage.",
          "Use the part as the denominator when finding a percentage."
        ],
        "correction": [
          "Percentage = part ÷ whole × 100; the whole is the reference amount.",
          "Percentage = part ÷ whole × 100; the whole is the reference amount."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "What percentage is 18 out of 60? Show the division first.",
        "What percentage is 18 out of 60? Show the division first."
      ]
    ]
  },
  {
    "id": "ss1-prop-cs2-li2",
    "strand": "Numbers for Everyday Life",
    "subStrand": "Proportional Reasoning",
    "contentStandardId": "1.1.2.CS.2",
    "learningIndicatorId": "1.1.2.LI.2",
    "title": [
      "Everyday financial mathematics",
      "Everyday financial mathematics"
    ],
    "explanation": [
      "Apply percentages to simple interest, discounts, profit, loss and commission. Identify the correct starting amount and rate.",
      "Apply percentages to simple interest, discounts, profit, loss and commission. Identify the correct starting amount and rate."
    ],
    "q": [
      "A trader buys an item for GH₵80 and sells it for GH₵100. What is the profit percentage on cost?",
      "A trader buys an item for GH₵80 and sells it for GH₵100. What is the profit percentage on cost?"
    ],
    "a": [
      [
        "25%",
        "25%"
      ],
      [
        "20%",
        "20%"
      ],
      [
        "80%",
        "80%"
      ],
      [
        "125%",
        "125%"
      ]
    ],
    "why": [
      "Profit = 100 − 80 = GH₵20. Profit percentage = 20 ÷ 80 × 100 = 25%.",
      "Profit = 100 − 80 = GH₵20. Profit percentage = 20 ÷ 80 × 100 = 25%."
    ],
    "workedExample": {
      "scenario": [
        "A trader buys a basket for GH₵120 and sells it for GH₵150. Find the profit percentage on cost.",
        "A trader buys a basket for GH₵120 and sells it for GH₵150. Find the profit percentage on cost."
      ],
      "steps": [
        [
          "Profit = selling price − cost price = 150 − 120 = GH₵30.",
          "Profit = selling price − cost price = 150 − 120 = GH₵30."
        ],
        [
          "Profit percentage = 30 ÷ 120 × 100 = 25%.",
          "Profit percentage = 30 ÷ 120 × 100 = 25%."
        ]
      ],
      "answer": [
        "The profit is GH₵30, which is 25% of the cost price.",
        "The profit is GH₵30, which is 25% of the cost price."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "Calculate profit percentage using the selling price as the denominator.",
          "Calculate profit percentage using the selling price as the denominator."
        ],
        "correction": [
          "Profit percentage on cost uses the original cost price as the denominator.",
          "Profit percentage on cost uses the original cost price as the denominator."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "A trader buys an item for GH₵60 and sells it for GH₵72. What is the profit percentage on cost?",
        "A trader buys an item for GH₵60 and sells it for GH₵72. What is the profit percentage on cost?"
      ]
    ]
  },
  {
    "id": "ss1-algebra-cs1-li1",
    "strand": "Algebraic Reasoning",
    "subStrand": "Applications of Expressions, Equations and Inequalities",
    "contentStandardId": "1.2.1.CS.1",
    "learningIndicatorId": "1.2.1.LI.1",
    "title": [
      "Form and simplify algebraic expressions",
      "Form and simplify algebraic expressions"
    ],
    "explanation": [
      "Translate patterns and situations into expressions, then use the order of the four operations to simplify them.",
      "Translate patterns and situations into expressions, then use the order of the four operations to simplify them."
    ],
    "q": [
      "Simplify 4x + 3(2x − 5).",
      "Simplify 4x + 3(2x − 5)."
    ],
    "a": [
      [
        "10x − 15",
        "10x − 15"
      ],
      [
        "6x − 15",
        "6x − 15"
      ],
      [
        "10x + 15",
        "10x + 15"
      ],
      [
        "7x − 5",
        "7x − 5"
      ]
    ],
    "why": [
      "Expand first: 3(2x − 5) = 6x − 15. Then 4x + 6x − 15 = 10x − 15.",
      "Expand first: 3(2x − 5) = 6x − 15. Then 4x + 6x − 15 = 10x − 15."
    ],
    "workedExample": {
      "scenario": [
        "Simplify 5y + 2(3y − 4).",
        "Simplify 5y + 2(3y − 4)."
      ],
      "steps": [
        [
          "Expand the brackets: 2(3y − 4) = 6y − 8.",
          "Expand the brackets: 2(3y − 4) = 6y − 8."
        ],
        [
          "Collect like terms: 5y + 6y − 8 = 11y − 8.",
          "Collect like terms: 5y + 6y − 8 = 11y − 8."
        ]
      ],
      "answer": [
        "The simplified expression is 11y − 8.",
        "The simplified expression is 11y − 8."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "Add the constant −8 to the coefficient of y.",
          "Add the constant −8 to the coefficient of y."
        ],
        "correction": [
          "Only like terms combine: add the coefficients of y, but keep the constant separate.",
          "Only like terms combine: add the coefficients of y, but keep the constant separate."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "Simplify 3a + 4(2a + 1) and identify the like terms.",
        "Simplify 3a + 4(2a + 1) and identify the like terms."
      ]
    ]
  },
  {
    "id": "ss1-algebra-cs1-li2",
    "strand": "Algebraic Reasoning",
    "subStrand": "Applications of Expressions, Equations and Inequalities",
    "contentStandardId": "1.2.1.CS.1",
    "learningIndicatorId": "1.2.1.LI.2",
    "title": [
      "Factorise quadratic trinomials",
      "Factorise quadratic trinomials"
    ],
    "explanation": [
      "Factorise a quadratic trinomial by finding two numbers whose product is the constant term and whose sum is the coefficient of x.",
      "Factorise a quadratic trinomial by finding two numbers whose product is the constant term and whose sum is the coefficient of x."
    ],
    "q": [
      "Factorise x² + 7x + 12.",
      "Factorise x² + 7x + 12."
    ],
    "a": [
      [
        "(x + 3)(x + 4)",
        "(x + 3)(x + 4)"
      ],
      [
        "(x + 2)(x + 6)",
        "(x + 2)(x + 6)"
      ],
      [
        "(x − 3)(x − 4)",
        "(x − 3)(x − 4)"
      ],
      [
        "(x + 1)(x + 12)",
        "(x + 1)(x + 12)"
      ]
    ],
    "why": [
      "3 × 4 = 12 and 3 + 4 = 7, so the factors are (x + 3)(x + 4).",
      "3 × 4 = 12 and 3 + 4 = 7, so the factors are (x + 3)(x + 4)."
    ],
    "workedExample": {
      "scenario": [
        "Factorise x² + 9x + 20.",
        "Factorise x² + 9x + 20."
      ],
      "steps": [
        [
          "Find two numbers whose product is 20 and whose sum is 9: 4 and 5.",
          "Find two numbers whose product is 20 and whose sum is 9: 4 and 5."
        ],
        [
          "Write the factors: (x + 4)(x + 5).",
          "Write the factors: (x + 4)(x + 5)."
        ]
      ],
      "answer": [
        "x² + 9x + 20 = (x + 4)(x + 5).",
        "x² + 9x + 20 = (x + 4)(x + 5)."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "Choose two numbers that multiply to the middle coefficient.",
          "Choose two numbers that multiply to the middle coefficient."
        ],
        "correction": [
          "For x² + bx + c, the pair must multiply to c and add to b.",
          "For x² + bx + c, the pair must multiply to c and add to b."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "Which pair of numbers factorises x² + 8x + 15? Explain both checks.",
        "Which pair of numbers factorises x² + 8x + 15? Explain both checks."
      ]
    ]
  },
  {
    "id": "ss1-algebra-cs1-li3",
    "strand": "Algebraic Reasoning",
    "subStrand": "Applications of Expressions, Equations and Inequalities",
    "contentStandardId": "1.2.1.CS.1",
    "learningIndicatorId": "1.2.1.LI.3",
    "title": [
      "Perfect squares and difference of squares",
      "Perfect squares and difference of squares"
    ],
    "explanation": [
      "Recognise square expressions and use a² − b² = (a − b)(a + b) to factorise differences of two squares.",
      "Recognise square expressions and use a² − b² = (a − b)(a + b) to factorise differences of two squares."
    ],
    "q": [
      "Factorise 9a² − 25.",
      "Factorise 9a² − 25."
    ],
    "a": [
      [
        "(3a − 5)(3a + 5)",
        "(3a − 5)(3a + 5)"
      ],
      [
        "(9a − 5)(a + 5)",
        "(9a − 5)(a + 5)"
      ],
      [
        "(3a − 5)²",
        "(3a − 5)²"
      ],
      [
        "(3a + 5)²",
        "(3a + 5)²"
      ]
    ],
    "why": [
      "9a² = (3a)² and 25 = 5², so apply the difference-of-squares identity.",
      "9a² = (3a)² and 25 = 5², so apply the difference-of-squares identity."
    ],
    "workedExample": {
      "scenario": [
        "Factorise 16m² − 81.",
        "Factorise 16m² − 81."
      ],
      "steps": [
        [
          "Recognise two squares: 16m² = (4m)² and 81 = 9².",
          "Recognise two squares: 16m² = (4m)² and 81 = 9²."
        ],
        [
          "Use a² − b² = (a − b)(a + b): (4m − 9)(4m + 9).",
          "Use a² − b² = (a − b)(a + b): (4m − 9)(4m + 9)."
        ]
      ],
      "answer": [
        "16m² − 81 = (4m − 9)(4m + 9).",
        "16m² − 81 = (4m − 9)(4m + 9)."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "A difference of squares is the square of a difference.",
          "A difference of squares is the square of a difference."
        ],
        "correction": [
          "The identity has two different factors: (a − b)(a + b), not (a − b)².",
          "The identity has two different factors: (a − b)(a + b), not (a − b)²."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "Factorise 25p² − 4 and state the two square roots.",
        "Factorise 25p² − 4 and state the two square roots."
      ]
    ]
  },
  {
    "id": "ss1-algebra-cs1-li4",
    "strand": "Algebraic Reasoning",
    "subStrand": "Applications of Expressions, Equations and Inequalities",
    "contentStandardId": "1.2.1.CS.1",
    "learningIndicatorId": "1.2.1.LI.4",
    "title": [
      "Algebraic fractions and restrictions",
      "Algebraic fractions and restrictions"
    ],
    "explanation": [
      "Simplify algebraic fractions while preserving restrictions that make a denominator zero. A cancelled factor does not remove the original restriction.",
      "Simplify algebraic fractions while preserving restrictions that make a denominator zero. A cancelled factor does not remove the original restriction."
    ],
    "q": [
      "For (x² − 9)/(x − 3), which simplified form and restriction are correct?",
      "For (x² − 9)/(x − 3), which simplified form and restriction are correct?"
    ],
    "a": [
      [
        "x + 3, where x ≠ 3",
        "x + 3, where x ≠ 3"
      ],
      [
        "x − 3, where x ≠ 3",
        "x − 3, where x ≠ 3"
      ],
      [
        "x + 3, for every real x",
        "x + 3, for every real x"
      ],
      [
        "x² + 3, where x ≠ 0",
        "x² + 3, where x ≠ 0"
      ]
    ],
    "why": [
      "Factor x² − 9 = (x − 3)(x + 3), then cancel x − 3. The original denominator still requires x ≠ 3.",
      "Factor x² − 9 = (x − 3)(x + 3), then cancel x − 3. The original denominator still requires x ≠ 3."
    ],
    "workedExample": {
      "scenario": [
        "Simplify (x² − 16)/(x − 4) and state the restriction.",
        "Simplify (x² − 16)/(x − 4) and state the restriction."
      ],
      "steps": [
        [
          "Factorise the numerator: x² − 16 = (x − 4)(x + 4).",
          "Factorise the numerator: x² − 16 = (x − 4)(x + 4)."
        ],
        [
          "Cancel the common factor, but keep the original restriction x ≠ 4.",
          "Cancel the common factor, but keep the original restriction x ≠ 4."
        ]
      ],
      "answer": [
        "The expression simplifies to x + 4, with x ≠ 4.",
        "The expression simplifies to x + 4, with x ≠ 4."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "After cancelling x − 4, x = 4 becomes allowed.",
          "After cancelling x − 4, x = 4 becomes allowed."
        ],
        "correction": [
          "The original denominator was zero at x = 4, so that value remains excluded.",
          "The original denominator was zero at x = 4, so that value remains excluded."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "Simplify (x² − 25)/(x − 5). Which value must still be excluded?",
        "Simplify (x² − 25)/(x − 5). Which value must still be excluded?"
      ]
    ]
  },
  {
    "id": "ss1-algebra-cs2-li1",
    "strand": "Algebraic Reasoning",
    "subStrand": "Applications of Expressions, Equations and Inequalities",
    "contentStandardId": "1.2.1.CS.2",
    "learningIndicatorId": "1.2.1.LI.1",
    "title": [
      "Rearrange and interpret formulae",
      "Rearrange and interpret formulae"
    ],
    "explanation": [
      "Change the subject of a formula by performing the same operation on both sides and keeping the required variable isolated.",
      "Change the subject of a formula by performing the same operation on both sides and keeping the required variable isolated."
    ],
    "q": [
      "If E = mv² and all quantities are positive, which formula makes v the subject?",
      "If E = mv² and all quantities are positive, which formula makes v the subject?"
    ],
    "a": [
      [
        "v = √(E/m)",
        "v = √(E/m)"
      ],
      [
        "v = E/m²",
        "v = E/m²"
      ],
      [
        "v = √(m/E)",
        "v = √(m/E)"
      ],
      [
        "v = E − m²",
        "v = E − m²"
      ]
    ],
    "why": [
      "Divide by m to get v² = E/m, then take the positive square root: v = √(E/m).",
      "Divide by m to get v² = E/m, then take the positive square root: v = √(E/m)."
    ],
    "workedExample": {
      "scenario": [
        "Make r the subject of A = πr², assuming r is positive.",
        "Make r the subject of A = πr², assuming r is positive."
      ],
      "steps": [
        [
          "Divide both sides by π: A/π = r².",
          "Divide both sides by π: A/π = r²."
        ],
        [
          "Take the positive square root: r = √(A/π).",
          "Take the positive square root: r = √(A/π)."
        ]
      ],
      "answer": [
        "r = √(A/π).",
        "r = √(A/π)."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "Move π to the other side by subtracting it.",
          "Move π to the other side by subtracting it."
        ],
        "correction": [
          "Because π multiplies r², use the inverse operation and divide both sides by π.",
          "Because π multiplies r², use the inverse operation and divide both sides by π."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "If v = u + at, rearrange the formula to make t the subject.",
        "If v = u + at, rearrange the formula to make t the subject."
      ]
    ]
  },
  {
    "id": "ss1-algebra-cs2-li2",
    "strand": "Algebraic Reasoning",
    "subStrand": "Applications of Expressions, Equations and Inequalities",
    "contentStandardId": "1.2.1.CS.2",
    "learningIndicatorId": "1.2.1.LI.2",
    "title": [
      "Solve equations and inequalities",
      "Solve equations and inequalities"
    ],
    "explanation": [
      "Solve one-variable equations and inequalities using inverse operations. Reverse the inequality sign only when multiplying or dividing by a negative number.",
      "Solve one-variable equations and inequalities using inverse operations. Reverse the inequality sign only when multiplying or dividing by a negative number."
    ],
    "q": [
      "Solve 3x − 5 ≤ 10.",
      "Solve 3x − 5 ≤ 10."
    ],
    "a": [
      [
        "x ≤ 5",
        "x ≤ 5"
      ],
      [
        "x ≥ 5",
        "x ≥ 5"
      ],
      [
        "x ≤ 15",
        "x ≤ 15"
      ],
      [
        "x ≥ 15",
        "x ≥ 15"
      ]
    ],
    "why": [
      "Add 5 to both sides: 3x ≤ 15. Divide by 3: x ≤ 5.",
      "Add 5 to both sides: 3x ≤ 15. Divide by 3: x ≤ 5."
    ],
    "workedExample": {
      "scenario": [
        "Solve 4x + 3 ≤ 19.",
        "Solve 4x + 3 ≤ 19."
      ],
      "steps": [
        [
          "Subtract 3 from both sides: 4x ≤ 16.",
          "Subtract 3 from both sides: 4x ≤ 16."
        ],
        [
          "Divide by positive 4; the inequality direction stays the same: x ≤ 4.",
          "Divide by positive 4; the inequality direction stays the same: x ≤ 4."
        ]
      ],
      "answer": [
        "The solution is x ≤ 4.",
        "The solution is x ≤ 4."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "Reverse the inequality sign whenever you divide.",
          "Reverse the inequality sign whenever you divide."
        ],
        "correction": [
          "Reverse the sign only when multiplying or dividing by a negative number.",
          "Reverse the sign only when multiplying or dividing by a negative number."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "Solve −2x > 8. Why does the inequality sign change?",
        "Solve −2x > 8. Why does the inequality sign change?"
      ]
    ]
  },
  {
    "id": "ss1-patterns-cs1-li1",
    "strand": "Algebraic Reasoning",
    "subStrand": "Patterns and Relationships",
    "contentStandardId": "1.2.2.CS.1",
    "learningIndicatorId": "1.2.2.LI.1",
    "title": [
      "Relations, functions and mapping rules",
      "Relations, functions and mapping rules"
    ],
    "explanation": [
      "Distinguish a relation from a function and use input-output patterns to determine a mapping rule.",
      "Distinguish a relation from a function and use input-output patterns to determine a mapping rule."
    ],
    "q": [
      "A mapping sends 1 to 4, 2 to 7 and 3 to 10. Which statement is correct?",
      "A mapping sends 1 to 4, 2 to 7 and 3 to 10. Which statement is correct?"
    ],
    "a": [
      [
        "It is a function with rule y = 3x + 1.",
        "It is a function with rule y = 3x + 1."
      ],
      [
        "It is not a function because every output is different.",
        "It is not a function because every output is different."
      ],
      [
        "It is a function with rule y = x + 3.",
        "It is a function with rule y = x + 3."
      ],
      [
        "It is not a function because the inputs are positive.",
        "It is not a function because the inputs are positive."
      ]
    ],
    "why": [
      "Each input has exactly one output, and the outputs follow y = 3x + 1.",
      "Each input has exactly one output, and the outputs follow y = 3x + 1."
    ],
    "workedExample": {
      "scenario": [
        "A mapping sends 0 to 2, 1 to 5 and 2 to 8. Find its rule and decide whether it is a function.",
        "A mapping sends 0 to 2, 1 to 5 and 2 to 8. Find its rule and decide whether it is a function."
      ],
      "steps": [
        [
          "Each time x increases by 1, y increases by 3, suggesting y = 3x + 2.",
          "Each time x increases by 1, y increases by 3, suggesting y = 3x + 2."
        ],
        [
          "Each input has exactly one output, so the mapping is a function.",
          "Each input has exactly one output, so the mapping is a function."
        ]
      ],
      "answer": [
        "The rule is y = 3x + 2 and the mapping is a function.",
        "The rule is y = 3x + 2 and the mapping is a function."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "A mapping is not a function when different inputs have different outputs.",
          "A mapping is not a function when different inputs have different outputs."
        ],
        "correction": [
          "Different outputs are allowed. A relation is a function when each input has exactly one output.",
          "Different outputs are allowed. A relation is a function when each input has exactly one output."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "Can two different inputs share one output and still form a function? Explain.",
        "Can two different inputs share one output and still form a function? Explain."
      ]
    ]
  },
  {
    "id": "ss1-patterns-cs1-li2",
    "strand": "Algebraic Reasoning",
    "subStrand": "Patterns and Relationships",
    "contentStandardId": "1.2.2.CS.1",
    "learningIndicatorId": "1.2.2.LI.2",
    "title": [
      "Graph and interpret linear functions",
      "Graph and interpret linear functions"
    ],
    "explanation": [
      "Recognise that a linear function graphs as a straight line and interpret its gradient and y-intercept.",
      "Recognise that a linear function graphs as a straight line and interpret its gradient and y-intercept."
    ],
    "q": [
      "For the linear function y = 2x + 3, where does its graph cross the y-axis?",
      "For the linear function y = 2x + 3, where does its graph cross the y-axis?"
    ],
    "a": [
      [
        "At (0, 3)",
        "At (0, 3)"
      ],
      [
        "At (3, 0)",
        "At (3, 0)"
      ],
      [
        "At (0, 2)",
        "At (0, 2)"
      ],
      [
        "At (2, 0)",
        "At (2, 0)"
      ]
    ],
    "why": [
      "The y-intercept is c = 3, so the line crosses the y-axis when x = 0 at (0, 3).",
      "The y-intercept is c = 3, so the line crosses the y-axis when x = 0 at (0, 3)."
    ],
    "workedExample": {
      "scenario": [
        "Find the y-intercept of y = −3x + 5.",
        "Find the y-intercept of y = −3x + 5."
      ],
      "steps": [
        [
          "On the y-axis, x = 0.",
          "On the y-axis, x = 0."
        ],
        [
          "Substitute x = 0: y = −3(0) + 5 = 5, so the point is (0, 5).",
          "Substitute x = 0: y = −3(0) + 5 = 5, so the point is (0, 5)."
        ]
      ],
      "answer": [
        "The graph crosses the y-axis at (0, 5).",
        "The graph crosses the y-axis at (0, 5)."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "The y-intercept is where y = 0.",
          "The y-intercept is where y = 0."
        ],
        "correction": [
          "On the y-axis x = 0. Setting y = 0 finds the x-intercept instead.",
          "On the y-axis x = 0. Setting y = 0 finds the x-intercept instead."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "For y = 4x − 7, state the y-intercept and the point where the line crosses the axis.",
        "For y = 4x − 7, state the y-intercept and the point where the line crosses the axis."
      ]
    ]
  },
  {
    "id": "ss1-patterns-cs2-li1",
    "strand": "Algebraic Reasoning",
    "subStrand": "Patterns and Relationships",
    "contentStandardId": "1.2.2.CS.2",
    "learningIndicatorId": "1.2.2.LI.1",
    "title": [
      "Gradient and equation of a straight line",
      "Gradient and equation of a straight line"
    ],
    "explanation": [
      "Calculate gradient as change in y divided by change in x, then use it to interpret or construct a straight-line equation.",
      "Calculate gradient as change in y divided by change in x, then use it to interpret or construct a straight-line equation."
    ],
    "q": [
      "What is the gradient of the line through (1, 3) and (3, 7)?",
      "What is the gradient of the line through (1, 3) and (3, 7)?"
    ],
    "a": [
      [
        "2",
        "2"
      ],
      [
        "1/2",
        "1/2"
      ],
      [
        "4",
        "4"
      ],
      [
        "−2",
        "−2"
      ]
    ],
    "why": [
      "Gradient = (7 − 3)/(3 − 1) = 4/2 = 2.",
      "Gradient = (7 − 3)/(3 − 1) = 4/2 = 2."
    ],
    "workedExample": {
      "scenario": [
        "Find the gradient of the line through (2, 5) and (6, 13).",
        "Find the gradient of the line through (2, 5) and (6, 13)."
      ],
      "steps": [
        [
          "Subtract the y-coordinates: 13 − 5 = 8.",
          "Subtract the y-coordinates: 13 − 5 = 8."
        ],
        [
          "Subtract the x-coordinates in the same order: 6 − 2 = 4. Gradient = 8/4 = 2.",
          "Subtract the x-coordinates in the same order: 6 − 2 = 4. Gradient = 8/4 = 2."
        ]
      ],
      "answer": [
        "The gradient is 2.",
        "The gradient is 2."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "Subtract the x-coordinates in a different order from the y-coordinates.",
          "Subtract the x-coordinates in a different order from the y-coordinates."
        ],
        "correction": [
          "Keep the same point order in numerator and denominator: (y₂ − y₁)/(x₂ − x₁).",
          "Keep the same point order in numerator and denominator: (y₂ − y₁)/(x₂ − x₁)."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "What does a negative gradient tell you about a line as x increases?",
        "What does a negative gradient tell you about a line as x increases?"
      ]
    ]
  },
  {
    "id": "ss1-patterns-cs2-li2",
    "strand": "Algebraic Reasoning",
    "subStrand": "Patterns and Relationships",
    "contentStandardId": "1.2.2.CS.2",
    "learningIndicatorId": "1.2.2.LI.2",
    "title": [
      "Midpoint and distance of a line segment",
      "Midpoint and distance of a line segment"
    ],
    "explanation": [
      "Use coordinate differences to find the midpoint and the distance between two points, applying the Pythagorean theorem where needed.",
      "Use coordinate differences to find the midpoint and the distance between two points, applying the Pythagorean theorem where needed."
    ],
    "q": [
      "What is the midpoint of the segment joining (2, 1) and (6, 4)?",
      "What is the midpoint of the segment joining (2, 1) and (6, 4)?"
    ],
    "a": [
      [
        "(4, 2.5)",
        "(4, 2.5)"
      ],
      [
        "(8, 5)",
        "(8, 5)"
      ],
      [
        "(3, 2.5)",
        "(3, 2.5)"
      ],
      [
        "(4, 3)",
        "(4, 3)"
      ]
    ],
    "why": [
      "Average the x-coordinates and the y-coordinates: ((2 + 6)/2, (1 + 4)/2) = (4, 2.5).",
      "Average the x-coordinates and the y-coordinates: ((2 + 6)/2, (1 + 4)/2) = (4, 2.5)."
    ],
    "workedExample": {
      "scenario": [
        "Find the midpoint and distance between P(1, 2) and Q(5, 5).",
        "Find the midpoint and distance between P(1, 2) and Q(5, 5)."
      ],
      "steps": [
        [
          "Midpoint: ((1 + 5)/2, (2 + 5)/2) = (3, 3.5).",
          "Midpoint: ((1 + 5)/2, (2 + 5)/2) = (3, 3.5)."
        ],
        [
          "Distance: √((5 − 1)² + (5 − 2)²) = √(16 + 9) = 5.",
          "Distance: √((5 − 1)² + (5 − 2)²) = √(16 + 9) = 5."
        ]
      ],
      "answer": [
        "The midpoint is (3, 3.5) and the distance is 5 units.",
        "The midpoint is (3, 3.5) and the distance is 5 units."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "The midpoint is the distance between the two points.",
          "The midpoint is the distance between the two points."
        ],
        "correction": [
          "The midpoint is a coordinate halfway along the segment; distance is a length.",
          "The midpoint is a coordinate halfway along the segment; distance is a length."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "Find the midpoint of (−2, 4) and (4, 8).",
        "Find the midpoint of (−2, 4) and (4, 8)."
      ]
    ]
  },
  {
    "id": "ss1-spatial-li1",
    "strand": "Geometry Around Us",
    "subStrand": "Spatial Sense",
    "contentStandardId": "1.3.1.CS.1",
    "learningIndicatorId": "1.3.1.LI.1",
    "title": [
      "Angle types and measures",
      "Angle types and measures"
    ],
    "explanation": [
      "Identify and describe acute, right, straight, obtuse and reflex angles, and estimate or measure their sizes.",
      "Identify and describe acute, right, straight, obtuse and reflex angles, and estimate or measure their sizes."
    ],
    "q": [
      "An angle measures 225°. What type of angle is it?",
      "An angle measures 225°. What type of angle is it?"
    ],
    "a": [
      [
        "Reflex angle",
        "Reflex angle"
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
        "Obtuse angle",
        "Obtuse angle"
      ]
    ],
    "why": [
      "225° is greater than 180° and less than 360°, so it is a reflex angle.",
      "225° is greater than 180° and less than 360°, so it is a reflex angle."
    ],
    "workedExample": {
      "scenario": [
        "Classify an angle of 145° and an angle of 270°.",
        "Classify an angle of 145° and an angle of 270°."
      ],
      "steps": [
        [
          "145° is greater than 90° and less than 180°: it is obtuse.",
          "145° is greater than 90° and less than 180°: it is obtuse."
        ],
        [
          "270° is greater than 180° and less than 360°: it is reflex.",
          "270° is greater than 180° and less than 360°: it is reflex."
        ]
      ],
      "answer": [
        "145° is obtuse; 270° is reflex.",
        "145° is obtuse; 270° is reflex."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "Every angle greater than 180° is a full turn.",
          "Every angle greater than 180° is a full turn."
        ],
        "correction": [
          "A reflex angle is between 180° and 360°; a full turn is exactly 360°.",
          "A reflex angle is between 180° and 360°; a full turn is exactly 360°."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "What type of angle is 315°, and which two values bound this type?",
        "What type of angle is 315°, and which two values bound this type?"
      ]
    ]
  },
  {
    "id": "ss1-spatial-li2",
    "strand": "Geometry Around Us",
    "subStrand": "Spatial Sense",
    "contentStandardId": "1.3.1.CS.1",
    "learningIndicatorId": "1.3.1.LI.2",
    "title": [
      "Parallel lines and transversals",
      "Parallel lines and transversals"
    ],
    "explanation": [
      "Use angle relationships formed when a transversal crosses parallel lines. Alternate interior angles are equal.",
      "Use angle relationships formed when a transversal crosses parallel lines. Alternate interior angles are equal."
    ],
    "q": [
      "Two parallel lines are crossed by a transversal. If one alternate interior angle is 68°, what is the other?",
      "Two parallel lines are crossed by a transversal. If one alternate interior angle is 68°, what is the other?"
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
        "22°",
        "22°"
      ],
      [
        "136°",
        "136°"
      ]
    ],
    "why": [
      "Alternate interior angles are equal when the lines are parallel.",
      "Alternate interior angles are equal when the lines are parallel."
    ],
    "workedExample": {
      "scenario": [
        "Two parallel lines are cut by a transversal. One alternate interior angle is 112°. Find its partner.",
        "Two parallel lines are cut by a transversal. One alternate interior angle is 112°. Find its partner."
      ],
      "steps": [
        [
          "Identify the two angles between the parallel lines and on opposite sides of the transversal.",
          "Identify the two angles between the parallel lines and on opposite sides of the transversal."
        ],
        [
          "Alternate interior angles are equal, so the partner is 112°.",
          "Alternate interior angles are equal, so the partner is 112°."
        ]
      ],
      "answer": [
        "The alternate interior angle is 112°.",
        "The alternate interior angle is 112°."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "Alternate interior angles add to 180° in every diagram.",
          "Alternate interior angles add to 180° in every diagram."
        ],
        "correction": [
          "When the lines are parallel, alternate interior angles are equal; co-interior angles sum to 180°.",
          "When the lines are parallel, alternate interior angles are equal; co-interior angles sum to 180°."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "If one co-interior angle is 73°, what is the other angle?",
        "If one co-interior angle is 73°, what is the other angle?"
      ]
    ]
  },
  {
    "id": "ss1-spatial-li3",
    "strand": "Geometry Around Us",
    "subStrand": "Spatial Sense",
    "contentStandardId": "1.3.1.CS.1",
    "learningIndicatorId": "1.3.1.LI.3",
    "title": [
      "Triangle angle properties",
      "Triangle angle properties"
    ],
    "explanation": [
      "Use the triangle angle sum and exterior-angle theorem to solve problems involving interior and exterior angles.",
      "Use the triangle angle sum and exterior-angle theorem to solve problems involving interior and exterior angles."
    ],
    "q": [
      "A triangle has two remote interior angles of 52° and 61°. What is the exterior angle at the third vertex?",
      "A triangle has two remote interior angles of 52° and 61°. What is the exterior angle at the third vertex?"
    ],
    "a": [
      [
        "113°",
        "113°"
      ],
      [
        "109°",
        "109°"
      ],
      [
        "119°",
        "119°"
      ],
      [
        "123°",
        "123°"
      ]
    ],
    "why": [
      "The exterior angle equals the sum of the two remote interior angles: 52° + 61° = 113°.",
      "The exterior angle equals the sum of the two remote interior angles: 52° + 61° = 113°."
    ],
    "workedExample": {
      "scenario": [
        "A triangle has remote interior angles of 48° and 67°. Find the exterior angle at the third vertex.",
        "A triangle has remote interior angles of 48° and 67°. Find the exterior angle at the third vertex."
      ],
      "steps": [
        [
          "Add the two remote interior angles: 48° + 67° = 115°.",
          "Add the two remote interior angles: 48° + 67° = 115°."
        ],
        [
          "The exterior angle equals this sum.",
          "The exterior angle equals this sum."
        ]
      ],
      "answer": [
        "The exterior angle is 115°.",
        "The exterior angle is 115°."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "The exterior angle equals 180° minus one remote interior angle.",
          "The exterior angle equals 180° minus one remote interior angle."
        ],
        "correction": [
          "It equals the sum of both remote interior angles.",
          "It equals the sum of both remote interior angles."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "If the remote interior angles are 35° and 82°, find the exterior angle.",
        "If the remote interior angles are 35° and 82°, find the exterior angle."
      ]
    ]
  },
  {
    "id": "ss1-spatial-li4",
    "strand": "Geometry Around Us",
    "subStrand": "Spatial Sense",
    "contentStandardId": "1.3.1.CS.1",
    "learningIndicatorId": "1.3.1.LI.4",
    "title": [
      "Pythagorean theorem",
      "Pythagorean theorem"
    ],
    "explanation": [
      "In a right triangle, the square of the hypotenuse equals the sum of the squares of the other two sides.",
      "In a right triangle, the square of the hypotenuse equals the sum of the squares of the other two sides."
    ],
    "q": [
      "A right triangle has shorter sides of 9 cm and 12 cm. What is its hypotenuse?",
      "A right triangle has shorter sides of 9 cm and 12 cm. What is its hypotenuse?"
    ],
    "a": [
      [
        "15 cm",
        "15 cm"
      ],
      [
        "18 cm",
        "18 cm"
      ],
      [
        "21 cm",
        "21 cm"
      ],
      [
        "12 cm",
        "12 cm"
      ]
    ],
    "why": [
      "c² = 9² + 12² = 81 + 144 = 225, so c = 15 cm.",
      "c² = 9² + 12² = 81 + 144 = 225, so c = 15 cm."
    ],
    "workedExample": {
      "scenario": [
        "A right triangle has shorter sides of 5 cm and 12 cm. Find the hypotenuse.",
        "A right triangle has shorter sides of 5 cm and 12 cm. Find the hypotenuse."
      ],
      "steps": [
        [
          "Use c² = a² + b²: c² = 5² + 12² = 25 + 144 = 169.",
          "Use c² = a² + b²: c² = 5² + 12² = 25 + 144 = 169."
        ],
        [
          "Take the positive square root: c = 13 cm.",
          "Take the positive square root: c = 13 cm."
        ]
      ],
      "answer": [
        "The hypotenuse is 13 cm.",
        "The hypotenuse is 13 cm."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "The hypotenuse is the sum of the two shorter sides.",
          "The hypotenuse is the sum of the two shorter sides."
        ],
        "correction": [
          "Pythagoras adds the squares of the shorter sides, then takes the square root.",
          "Pythagoras adds the squares of the shorter sides, then takes the square root."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "A right triangle has legs 8 cm and 15 cm. Find its hypotenuse.",
        "A right triangle has legs 8 cm and 15 cm. Find its hypotenuse."
      ]
    ]
  },
  {
    "id": "ss1-spatial-li5",
    "strand": "Geometry Around Us",
    "subStrand": "Spatial Sense",
    "contentStandardId": "1.3.1.CS.1",
    "learningIndicatorId": "1.3.1.LI.5",
    "title": [
      "Polygon interior-angle sums",
      "Polygon interior-angle sums"
    ],
    "explanation": [
      "For an n-sided polygon, the sum of interior angles is (n − 2) × 180°.",
      "For an n-sided polygon, the sum of interior angles is (n − 2) × 180°."
    ],
    "q": [
      "What is the sum of the interior angles of an octagon?",
      "What is the sum of the interior angles of an octagon?"
    ],
    "a": [
      [
        "1080°",
        "1080°"
      ],
      [
        "900°",
        "900°"
      ],
      [
        "1260°",
        "1260°"
      ],
      [
        "1440°",
        "1440°"
      ]
    ],
    "why": [
      "An octagon has 8 sides: (8 − 2) × 180° = 1080°.",
      "An octagon has 8 sides: (8 − 2) × 180° = 1080°."
    ],
    "workedExample": {
      "scenario": [
        "Find the sum of the interior angles of a hexagon.",
        "Find the sum of the interior angles of a hexagon."
      ],
      "steps": [
        [
          "A hexagon has 6 sides, so n − 2 = 4 triangles can be formed from one vertex.",
          "A hexagon has 6 sides, so n − 2 = 4 triangles can be formed from one vertex."
        ],
        [
          "Multiply by 180°: 4 × 180° = 720°.",
          "Multiply by 180°: 4 × 180° = 720°."
        ]
      ],
      "answer": [
        "The interior-angle sum is 720°.",
        "The interior-angle sum is 720°."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "Multiply the number of sides by 180°.",
          "Multiply the number of sides by 180°."
        ],
        "correction": [
          "Use (n − 2) × 180° because an n-sided polygon can be divided into n − 2 triangles.",
          "Use (n − 2) × 180° because an n-sided polygon can be divided into n − 2 triangles."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "What is the interior-angle sum of a decagon? Show the value of n.",
        "What is the interior-angle sum of a decagon? Show the value of n."
      ]
    ]
  },
  {
    "id": "ss1-measure-cs1-li1",
    "strand": "Geometry Around Us",
    "subStrand": "Measurement",
    "contentStandardId": "1.3.2.CS.1",
    "learningIndicatorId": "1.3.2.LI.1",
    "title": [
      "Vector magnitude and direction",
      "Vector magnitude and direction"
    ],
    "explanation": [
      "A vector is a quantity with both magnitude and direction, such as displacement, velocity or force.",
      "A vector is a quantity with both magnitude and direction, such as displacement, velocity or force."
    ],
    "q": [
      "Which statement defines a vector quantity?",
      "Which statement defines a vector quantity?"
    ],
    "a": [
      [
        "It has both magnitude and direction.",
        "It has both magnitude and direction."
      ],
      [
        "It has magnitude only.",
        "It has magnitude only."
      ],
      [
        "It has direction only.",
        "It has direction only."
      ],
      [
        "It has no measurable size.",
        "It has no measurable size."
      ]
    ],
    "why": [
      "A vector must describe both how much and in which direction.",
      "A vector must describe both how much and in which direction."
    ],
    "workedExample": {
      "scenario": [
        "Compare a 5 km journey east with a 5 km journey west.",
        "Compare a 5 km journey east with a 5 km journey west."
      ],
      "steps": [
        [
          "Both journeys have magnitude 5 km.",
          "Both journeys have magnitude 5 km."
        ],
        [
          "Their directions differ, so the displacement vectors are different.",
          "Their directions differ, so the displacement vectors are different."
        ]
      ],
      "answer": [
        "A vector needs both magnitude and direction; a scalar needs magnitude only.",
        "A vector needs both magnitude and direction; a scalar needs magnitude only."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "Two quantities are equal vectors if they have the same magnitude only.",
          "Two quantities are equal vectors if they have the same magnitude only."
        ],
        "correction": [
          "Equal vectors must have both the same magnitude and the same direction.",
          "Equal vectors must have both the same magnitude and the same direction."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "Give one example of a vector quantity and name its magnitude and direction.",
        "Give one example of a vector quantity and name its magnitude and direction."
      ]
    ]
  },
  {
    "id": "ss1-measure-cs1-li2",
    "strand": "Geometry Around Us",
    "subStrand": "Measurement",
    "contentStandardId": "1.3.2.CS.1",
    "learningIndicatorId": "1.3.2.LI.2",
    "title": [
      "Represent and compare vectors",
      "Represent and compare vectors"
    ],
    "explanation": [
      "Represent vectors as directed line segments or algebraically. Vectors are equal when they have the same magnitude and direction, even at different positions.",
      "Represent vectors as directed line segments or algebraically. Vectors are equal when they have the same magnitude and direction, even at different positions."
    ],
    "q": [
      "A vector has a bearing of 320°. Which statement is correct?",
      "A vector has a bearing of 320°. Which statement is correct?"
    ],
    "a": [
      [
        "It points N40°W; a vector with the same magnitude and direction is equal even if it is shifted.",
        "It points N40°W; a vector with the same magnitude and direction is equal even if it is shifted."
      ],
      [
        "It points N40°E; equal vectors must start at the same point.",
        "It points N40°E; equal vectors must start at the same point."
      ],
      [
        "It points S40°W; equal vectors need only have the same length.",
        "It points S40°W; equal vectors need only have the same length."
      ],
      [
        "It points due west; position determines its direction.",
        "It points due west; position determines its direction."
      ]
    ],
    "why": [
      "A 320° bearing is 40° west of north, written N40°W. Equal vectors have the same magnitude and direction, even at different positions.",
      "A 320° bearing is 40° west of north, written N40°W. Equal vectors have the same magnitude and direction, even at different positions."
    ],
    "workedExample": {
      "scenario": [
        "A ship travels on a bearing of 045°. Express the direction using a compass description.",
        "A ship travels on a bearing of 045°. Express the direction using a compass description."
      ],
      "steps": [
        [
          "Bearings are measured clockwise from north; 045° is 45° east of north.",
          "Bearings are measured clockwise from north; 045° is 45° east of north."
        ],
        [
          "Write the direction as N45°E. A translated arrow with the same length and direction represents the same vector.",
          "Write the direction as N45°E. A translated arrow with the same length and direction represents the same vector."
        ]
      ],
      "answer": [
        "The bearing is N45°E; equal vectors may be drawn in different positions.",
        "The bearing is N45°E; equal vectors may be drawn in different positions."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "A vector changes when its starting point is moved.",
          "A vector changes when its starting point is moved."
        ],
        "correction": [
          "A free vector is unchanged by translation if its magnitude and direction remain the same.",
          "A free vector is unchanged by translation if its magnitude and direction remain the same."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "Convert a bearing of 135° into a compass direction.",
        "Convert a bearing of 135° into a compass direction."
      ]
    ]
  },
  {
    "id": "ss1-measure-cs2-li1",
    "strand": "Geometry Around Us",
    "subStrand": "Measurement",
    "contentStandardId": "1.3.2.CS.2",
    "learningIndicatorId": "1.3.2.LI.1",
    "title": [
      "Primary trigonometric ratios",
      "Primary trigonometric ratios"
    ],
    "explanation": [
      "Use sine, cosine and tangent to relate the sides and acute angles of right-angled triangles.",
      "Use sine, cosine and tangent to relate the sides and acute angles of right-angled triangles."
    ],
    "q": [
      "In a right triangle, the opposite side is 6 cm and the hypotenuse is 10 cm. What is sin θ?",
      "In a right triangle, the opposite side is 6 cm and the hypotenuse is 10 cm. What is sin θ?"
    ],
    "a": [
      [
        "0.6",
        "0.6"
      ],
      [
        "0.4",
        "0.4"
      ],
      [
        "1.6",
        "1.6"
      ],
      [
        "6.0",
        "6.0"
      ]
    ],
    "why": [
      "sin θ = opposite ÷ hypotenuse = 6 ÷ 10 = 0.6.",
      "sin θ = opposite ÷ hypotenuse = 6 ÷ 10 = 0.6."
    ],
    "workedExample": {
      "scenario": [
        "In a right triangle, the opposite side is 8 cm and the hypotenuse is 10 cm. Find sin θ.",
        "In a right triangle, the opposite side is 8 cm and the hypotenuse is 10 cm. Find sin θ."
      ],
      "steps": [
        [
          "Use sine = opposite ÷ hypotenuse.",
          "Use sine = opposite ÷ hypotenuse."
        ],
        [
          "Calculate 8 ÷ 10 = 0.8.",
          "Calculate 8 ÷ 10 = 0.8."
        ]
      ],
      "answer": [
        "sin θ = 0.8.",
        "sin θ = 0.8."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "Sine is adjacent divided by hypotenuse.",
          "Sine is adjacent divided by hypotenuse."
        ],
        "correction": [
          "Sine uses opposite over hypotenuse; cosine uses adjacent over hypotenuse.",
          "Sine uses opposite over hypotenuse; cosine uses adjacent over hypotenuse."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "If the adjacent side is 12 cm and the hypotenuse is 13 cm, which ratio gives cos θ?",
        "If the adjacent side is 12 cm and the hypotenuse is 13 cm, which ratio gives cos θ?"
      ]
    ]
  },
  {
    "id": "ss1-measure-cs2-li2",
    "strand": "Geometry Around Us",
    "subStrand": "Measurement",
    "contentStandardId": "1.3.2.CS.2",
    "learningIndicatorId": "1.3.2.LI.2",
    "title": [
      "Special-angle trigonometric values",
      "Special-angle trigonometric values"
    ],
    "explanation": [
      "Know the exact sine, cosine and tangent values for 30°, 45° and 60°, and use a calculator appropriately for angles up to 360°.",
      "Know the exact sine, cosine and tangent values for 30°, 45° and 60°, and use a calculator appropriately for angles up to 360°."
    ],
    "q": [
      "What is the exact value of sin 30°?",
      "What is the exact value of sin 30°?"
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
        "√2/2",
        "√2/2"
      ]
    ],
    "why": [
      "The standard special-angle value is sin 30° = 1/2.",
      "The standard special-angle value is sin 30° = 1/2."
    ],
    "workedExample": {
      "scenario": [
        "Find the exact values of sin 30° and cos 60°.",
        "Find the exact values of sin 30° and cos 60°."
      ],
      "steps": [
        [
          "From the special-angle table, sin 30° = 1/2.",
          "From the special-angle table, sin 30° = 1/2."
        ],
        [
          "The cosine of 60° is also 1/2.",
          "The cosine of 60° is also 1/2."
        ]
      ],
      "answer": [
        "Both values are 1/2.",
        "Both values are 1/2."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "The sine of 30° is √3/2.",
          "The sine of 30° is √3/2."
        ],
        "correction": [
          "sin 30° = 1/2; √3/2 is the value of sin 60° and cos 30°.",
          "sin 30° = 1/2; √3/2 is the value of sin 60° and cos 30°."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "State the exact values of cos 30° and sin 60°.",
        "State the exact values of cos 30° and sin 60°."
      ]
    ]
  },
  {
    "id": "ss1-measure-cs2-li3",
    "strand": "Geometry Around Us",
    "subStrand": "Measurement",
    "contentStandardId": "1.3.2.CS.2",
    "learningIndicatorId": "1.3.2.LI.3",
    "title": [
      "Trigonometry in standard position",
      "Trigonometry in standard position"
    ],
    "explanation": [
      "Apply sine, cosine and tangent to angles from 0° to 360°, paying attention to the sign in each quadrant.",
      "Apply sine, cosine and tangent to angles from 0° to 360°, paying attention to the sign in each quadrant."
    ],
    "q": [
      "What is sin 210°?",
      "What is sin 210°?"
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
      "210° = 180° + 30°. Sine is negative in the third quadrant, so sin 210° = −sin 30° = −1/2.",
      "210° = 180° + 30°. Sine is negative in the third quadrant, so sin 210° = −sin 30° = −1/2."
    ],
    "workedExample": {
      "scenario": [
        "Find sin 240° using its reference angle.",
        "Find sin 240° using its reference angle."
      ],
      "steps": [
        [
          "240° = 180° + 60°, so the reference angle is 60° and the terminal side is in quadrant III.",
          "240° = 180° + 60°, so the reference angle is 60° and the terminal side is in quadrant III."
        ],
        [
          "Sine is negative in quadrant III: sin 240° = −sin 60° = −√3/2.",
          "Sine is negative in quadrant III: sin 240° = −sin 60° = −√3/2."
        ]
      ],
      "answer": [
        "sin 240° = −√3/2.",
        "sin 240° = −√3/2."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "The trigonometric ratio is positive because the reference angle is acute.",
          "The trigonometric ratio is positive because the reference angle is acute."
        ],
        "correction": [
          "The sign depends on the quadrant of the original angle, not only on the reference angle.",
          "The sign depends on the quadrant of the original angle, not only on the reference angle."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "In which quadrants is sine positive, and in which is it negative?",
        "In which quadrants is sine positive, and in which is it negative?"
      ]
    ]
  },
  {
    "id": "ss1-measure-cs3-li1",
    "strand": "Geometry Around Us",
    "subStrand": "Measurement",
    "contentStandardId": "1.3.2.CS.3",
    "learningIndicatorId": "1.3.2.LI.1",
    "title": [
      "SI and imperial area referents",
      "SI and imperial area referents"
    ],
    "explanation": [
      "Identify and compare familiar referents for area measurements, such as a square metre and a square foot, before estimating a surface.",
      "Identify and compare familiar referents for area measurements, such as a square metre and a square foot, before estimating a surface."
    ],
    "q": [
      "Which pair correctly matches familiar area referents?",
      "Which pair correctly matches familiar area referents?"
    ],
    "a": [
      [
        "A floor tile is about 1 ft²; an exterior house door is about 2 m².",
        "A floor tile is about 1 ft²; an exterior house door is about 2 m²."
      ],
      [
        "A floor tile is about 1 m²; an exterior house door is about 2 ft².",
        "A floor tile is about 1 m²; an exterior house door is about 2 ft²."
      ],
      [
        "A postage stamp is about 1 m²; an exercise book is about 1 ft².",
        "A postage stamp is about 1 m²; an exercise book is about 1 ft²."
      ],
      [
        "A fingernail is about 1 m²; an ice rink is about 15 m².",
        "A fingernail is about 1 m²; an ice rink is about 15 m²."
      ]
    ],
    "why": [
      "NaCCA gives a floor tile as a referent of about 1 ft² and an exterior house door as about 2 m².",
      "NaCCA gives a floor tile as a referent of about 1 ft² and an exterior house door as about 2 m²."
    ],
    "workedExample": {
      "scenario": [
        "Estimate the area of a classroom floor that is about 8 m long and 6 m wide.",
        "Estimate the area of a classroom floor that is about 8 m long and 6 m wide."
      ],
      "steps": [
        [
          "Use the rectangle area formula: 8 × 6 = 48.",
          "Use the rectangle area formula: 8 × 6 = 48."
        ],
        [
          "Compare the result with a familiar referent: an exterior door is about 2 m², so 48 m² is roughly 24 door areas.",
          "Compare the result with a familiar referent: an exterior door is about 2 m², so 48 m² is roughly 24 door areas."
        ]
      ],
      "answer": [
        "The estimated floor area is 48 m²; area is measured in square units.",
        "The estimated floor area is 48 m²; area is measured in square units."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "A floor area is measured in metres, not square metres.",
          "A floor area is measured in metres, not square metres."
        ],
        "correction": [
          "Metres measure length; square metres measure area. Use squared units for surfaces.",
          "Metres measure length; square metres measure area. Use squared units for surfaces."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "Name one familiar object that can help you estimate an area in square metres.",
        "Name one familiar object that can help you estimate an area in square metres."
      ]
    ]
  },
  {
    "id": "ss1-measure-cs3-li2",
    "strand": "Geometry Around Us",
    "subStrand": "Measurement",
    "contentStandardId": "1.3.2.CS.3",
    "learningIndicatorId": "1.3.2.LI.2",
    "title": [
      "Estimate perimeter and area",
      "Estimate perimeter and area"
    ],
    "explanation": [
      "Estimate perimeter and area for regular, composite and irregular two-dimensional shapes, including shapes on a grid.",
      "Estimate perimeter and area for regular, composite and irregular two-dimensional shapes, including shapes on a grid."
    ],
    "q": [
      "A shape covers 14 full grid squares and 6 half-squares. Each square is 1 cm². What is its estimated area?",
      "A shape covers 14 full grid squares and 6 half-squares. Each square is 1 cm². What is its estimated area?"
    ],
    "a": [
      [
        "17 cm²",
        "17 cm²"
      ],
      [
        "20 cm²",
        "20 cm²"
      ],
      [
        "14 cm²",
        "14 cm²"
      ],
      [
        "11 cm²",
        "11 cm²"
      ]
    ],
    "why": [
      "Six half-squares make 3 full squares. Estimated area = 14 + 3 = 17 cm².",
      "Six half-squares make 3 full squares. Estimated area = 14 + 3 = 17 cm²."
    ],
    "workedExample": {
      "scenario": [
        "A grid shape covers 10 full squares and 8 half-squares. Each square is 1 cm². Estimate its area.",
        "A grid shape covers 10 full squares and 8 half-squares. Each square is 1 cm². Estimate its area."
      ],
      "steps": [
        [
          "Pair the 8 half-squares to make 4 full squares.",
          "Pair the 8 half-squares to make 4 full squares."
        ],
        [
          "Add 10 + 4 = 14 square centimetres.",
          "Add 10 + 4 = 14 square centimetres."
        ]
      ],
      "answer": [
        "The estimated area is 14 cm².",
        "The estimated area is 14 cm²."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "Count every half-square as one full square.",
          "Count every half-square as one full square."
        ],
        "correction": [
          "Two half-squares make one full square, so multiply the number of half-squares by one half.",
          "Two half-squares make one full square, so multiply the number of half-squares by one half."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "A shape covers 12 full squares and 4 half-squares. Estimate its area.",
        "A shape covers 12 full squares and 4 half-squares. Estimate its area."
      ]
    ]
  },
  {
    "id": "ss1-measure-cs3-li3",
    "strand": "Geometry Around Us",
    "subStrand": "Measurement",
    "contentStandardId": "1.3.2.CS.3",
    "learningIndicatorId": "1.3.2.LI.3",
    "title": [
      "Contextual perimeter and area problems",
      "Contextual perimeter and area problems"
    ],
    "explanation": [
      "Select and apply suitable perimeter or area formulae to solve practical problems involving regular, composite or irregular shapes.",
      "Select and apply suitable perimeter or area formulae to solve practical problems involving regular, composite or irregular shapes."
    ],
    "q": [
      "A school garden is an L-shape made from non-overlapping rectangles of 8 m × 6 m and 4 m × 3 m. What is its total area?",
      "A school garden is an L-shape made from non-overlapping rectangles of 8 m × 6 m and 4 m × 3 m. What is its total area?"
    ],
    "a": [
      [
        "60 m²",
        "60 m²"
      ],
      [
        "48 m²",
        "48 m²"
      ],
      [
        "36 m²",
        "36 m²"
      ],
      [
        "72 m²",
        "72 m²"
      ]
    ],
    "why": [
      "Add the two areas: 8 × 6 + 4 × 3 = 48 + 12 = 60 m².",
      "Add the two areas: 8 × 6 + 4 × 3 = 48 + 12 = 60 m²."
    ],
    "workedExample": {
      "scenario": [
        "A garden is made from two non-overlapping rectangles: 10 m × 4 m and 3 m × 2 m. Find the total area.",
        "A garden is made from two non-overlapping rectangles: 10 m × 4 m and 3 m × 2 m. Find the total area."
      ],
      "steps": [
        [
          "First area: 10 × 4 = 40 m². Second area: 3 × 2 = 6 m².",
          "First area: 10 × 4 = 40 m². Second area: 3 × 2 = 6 m²."
        ],
        [
          "Add the non-overlapping parts: 40 + 6 = 46 m².",
          "Add the non-overlapping parts: 40 + 6 = 46 m²."
        ]
      ],
      "answer": [
        "The total area is 46 m².",
        "The total area is 46 m²."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "Add the side lengths of the rectangles to find area.",
          "Add the side lengths of the rectangles to find area."
        ],
        "correction": [
          "Calculate each rectangle's area by multiplying length by width, then add the areas.",
          "Calculate each rectangle's area by multiplying length by width, then add the areas."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "How would you find the area of a composite shape if two parts overlap?",
        "How would you find the area of a composite shape if two parts overlap?"
      ]
    ]
  },
  {
    "id": "ss1-measure-cs3-li4",
    "strand": "Geometry Around Us",
    "subStrand": "Measurement",
    "contentStandardId": "1.3.2.CS.3",
    "learningIndicatorId": "1.3.2.LI.4",
    "title": [
      "Volume of prisms",
      "Volume of prisms"
    ],
    "explanation": [
      "Find the volume of a prism by multiplying the area of its constant cross-section by its perpendicular length.",
      "Find the volume of a prism by multiplying the area of its constant cross-section by its perpendicular length."
    ],
    "q": [
      "A prism has a cross-sectional area of 18 cm² and a perpendicular length of 7 cm. What is its volume?",
      "A prism has a cross-sectional area of 18 cm² and a perpendicular length of 7 cm. What is its volume?"
    ],
    "a": [
      [
        "126 cm³",
        "126 cm³"
      ],
      [
        "25 cm³",
        "25 cm³"
      ],
      [
        "126 cm²",
        "126 cm²"
      ],
      [
        "252 cm³",
        "252 cm³"
      ]
    ],
    "why": [
      "Volume = cross-sectional area × length = 18 × 7 = 126 cm³.",
      "Volume = cross-sectional area × length = 18 × 7 = 126 cm³."
    ],
    "workedExample": {
      "scenario": [
        "A prism has a cross-sectional area of 12 cm² and a perpendicular length of 9 cm. Find its volume.",
        "A prism has a cross-sectional area of 12 cm² and a perpendicular length of 9 cm. Find its volume."
      ],
      "steps": [
        [
          "Use volume = cross-sectional area × length.",
          "Use volume = cross-sectional area × length."
        ],
        [
          "Multiply 12 × 9 = 108 and use cubic units.",
          "Multiply 12 × 9 = 108 and use cubic units."
        ]
      ],
      "answer": [
        "The volume is 108 cm³.",
        "The volume is 108 cm³."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "Use square units because the cross-section is an area.",
          "Use square units because the cross-section is an area."
        ],
        "correction": [
          "Multiplying an area by a length gives volume, so the unit is cubic: cm² × cm = cm³.",
          "Multiplying an area by a length gives volume, so the unit is cubic: cm² × cm = cm³."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "A prism has cross-sectional area 20 cm² and length 5 cm. Find its volume.",
        "A prism has cross-sectional area 20 cm² and length 5 cm. Find its volume."
      ]
    ]
  },
  {
    "id": "ss1-stats-cs1-li1",
    "strand": "Making Sense of and Using Data",
    "subStrand": "Statistical Reasoning and Its Application in Real Life",
    "contentStandardId": "1.4.1.CS.1",
    "learningIndicatorId": "1.4.1.LI.1",
    "title": [
      "Classify data types",
      "Classify data types"
    ],
    "explanation": [
      "Distinguish primary and secondary data, quantitative and qualitative data, discrete and continuous variables, and grouped and ungrouped data.",
      "Distinguish primary and secondary data, quantitative and qualitative data, discrete and continuous variables, and grouped and ungrouped data."
    ],
    "q": [
      "The number of siblings reported by each learner is which type of data?",
      "The number of siblings reported by each learner is which type of data?"
    ],
    "a": [
      [
        "Discrete quantitative data",
        "Discrete quantitative data"
      ],
      [
        "Continuous quantitative data",
        "Continuous quantitative data"
      ],
      [
        "Qualitative nominal data",
        "Qualitative nominal data"
      ],
      [
        "Secondary qualitative data",
        "Secondary qualitative data"
      ]
    ],
    "why": [
      "A number of siblings is a count, so it is quantitative and discrete.",
      "A number of siblings is a count, so it is quantitative and discrete."
    ],
    "workedExample": {
      "scenario": [
        "Classify the number of books each learner borrowed: 0, 1, 2, 3, and 4.",
        "Classify the number of books each learner borrowed: 0, 1, 2, 3, and 4."
      ],
      "steps": [
        [
          "The values are numbers, so the data are quantitative.",
          "The values are numbers, so the data are quantitative."
        ],
        [
          "Books are counted in whole numbers, so the data are discrete.",
          "Books are counted in whole numbers, so the data are discrete."
        ]
      ],
      "answer": [
        "The number of books borrowed is discrete quantitative data.",
        "The number of books borrowed is discrete quantitative data."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "A numerical variable is always continuous.",
          "A numerical variable is always continuous."
        ],
        "correction": [
          "Counts are discrete; measurements such as height or time are usually continuous.",
          "Counts are discrete; measurements such as height or time are usually continuous."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "Is a learner's height discrete or continuous data? Explain why.",
        "Is a learner's height discrete or continuous data? Explain why."
      ]
    ]
  },
  {
    "id": "ss1-stats-cs1-li2",
    "strand": "Making Sense of and Using Data",
    "subStrand": "Statistical Reasoning and Its Application in Real Life",
    "contentStandardId": "1.4.1.CS.1",
    "learningIndicatorId": "1.4.1.LI.2",
    "title": [
      "Quantitative data collection methods",
      "Quantitative data collection methods"
    ],
    "explanation": [
      "Choose suitable quantitative collection methods such as measurement, structured questionnaires, counts and observations with numerical records.",
      "Choose suitable quantitative collection methods such as measurement, structured questionnaires, counts and observations with numerical records."
    ],
    "q": [
      "A class wants to compare learners' heights. Which method produces suitable primary quantitative data?",
      "A class wants to compare learners' heights. Which method produces suitable primary quantitative data?"
    ],
    "a": [
      [
        "Measure each learner using the same height scale.",
        "Measure each learner using the same height scale."
      ],
      [
        "Ask learners to describe their favourite colour.",
        "Ask learners to describe their favourite colour."
      ],
      [
        "Copy a story from a newspaper.",
        "Copy a story from a newspaper."
      ],
      [
        "Hold an unstructured discussion about sports.",
        "Hold an unstructured discussion about sports."
      ]
    ],
    "why": [
      "Direct measurement creates numerical primary data collected consistently from the learners.",
      "Direct measurement creates numerical primary data collected consistently from the learners."
    ],
    "workedExample": {
      "scenario": [
        "A class wants to record the heights of 25 learners. Choose a suitable primary data method.",
        "A class wants to record the heights of 25 learners. Choose a suitable primary data method."
      ],
      "steps": [
        [
          "Measure every learner with the same calibrated height scale.",
          "Measure every learner with the same calibrated height scale."
        ],
        [
          "Record the value in centimetres and use the same procedure for everyone.",
          "Record the value in centimetres and use the same procedure for everyone."
        ]
      ],
      "answer": [
        "Direct, consistent measurement provides primary quantitative data.",
        "Direct, consistent measurement provides primary quantitative data."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "Ask learners to guess their heights to save time.",
          "Ask learners to guess their heights to save time."
        ],
        "correction": [
          "A guess is less reliable. Use the same measuring instrument and method for all participants.",
          "A guess is less reliable. Use the same measuring instrument and method for all participants."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "What should remain the same when measuring every learner's height?",
        "What should remain the same when measuring every learner's height?"
      ]
    ]
  },
  {
    "id": "ss1-stats-cs1-li3",
    "strand": "Making Sense of and Using Data",
    "subStrand": "Statistical Reasoning and Its Application in Real Life",
    "contentStandardId": "1.4.1.CS.1",
    "learningIndicatorId": "1.4.1.LI.3",
    "title": [
      "Qualitative data collection methods",
      "Qualitative data collection methods"
    ],
    "explanation": [
      "Use interviews, focus groups and observation to collect detailed descriptions, experiences and opinions.",
      "Use interviews, focus groups and observation to collect detailed descriptions, experiences and opinions."
    ],
    "q": [
      "A school wants to understand why learners enjoy or dislike a new club. Which method is most suitable for exploring opinions in depth?",
      "A school wants to understand why learners enjoy or dislike a new club. Which method is most suitable for exploring opinions in depth?"
    ],
    "a": [
      [
        "A focus-group discussion",
        "A focus-group discussion"
      ],
      [
        "A ruler measurement",
        "A ruler measurement"
      ],
      [
        "A tally of attendance only",
        "A tally of attendance only"
      ],
      [
        "A calculation of the mean height",
        "A calculation of the mean height"
      ]
    ],
    "why": [
      "A focus group lets participants explain experiences and reasons in their own words.",
      "A focus group lets participants explain experiences and reasons in their own words."
    ],
    "workedExample": {
      "scenario": [
        "A school wants to understand why learners join or avoid a reading club. Choose a method for detailed opinions.",
        "A school wants to understand why learners join or avoid a reading club. Choose a method for detailed opinions."
      ],
      "steps": [
        [
          "Invite a small, varied group of learners to discuss their experiences.",
          "Invite a small, varied group of learners to discuss their experiences."
        ],
        [
          "Use open questions and record themes without attributing comments to named learners.",
          "Use open questions and record themes without attributing comments to named learners."
        ]
      ],
      "answer": [
        "A focus group is suitable for exploring reasons and opinions in depth.",
        "A focus group is suitable for exploring reasons and opinions in depth."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "A focus group is the best method for collecting an exact count from every learner.",
          "A focus group is the best method for collecting an exact count from every learner."
        ],
        "correction": [
          "Focus groups explore views in depth; a structured survey or count is better for numerical totals.",
          "Focus groups explore views in depth; a structured survey or count is better for numerical totals."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "Write one open question that could help explain why learners enjoy a school club.",
        "Write one open question that could help explain why learners enjoy a school club."
      ]
    ]
  },
  {
    "id": "ss1-stats-cs2-descriptive",
    "strand": "Making Sense of and Using Data",
    "subStrand": "Statistical Reasoning and Its Application in Real Life",
    "contentStandardId": "1.4.1.CS.2",
    "learningIndicatorId": "1.4.3.LI.2",
    "title": [
      "Descriptive statistics and outliers",
      "Descriptive statistics and outliers"
    ],
    "explanation": [
      "Calculate and interpret mean, median and mode, and choose a measure that represents the data appropriately when extreme values are present.",
      "Calculate and interpret mean, median and mode, and choose a measure that represents the data appropriately when extreme values are present."
    ],
    "q": [
      "The values are 4, 5, 5, 6 and 30. Which average best represents a typical value when 30 is an outlier?",
      "The values are 4, 5, 5, 6 and 30. Which average best represents a typical value when 30 is an outlier?"
    ],
    "a": [
      [
        "Median = 5",
        "Median = 5"
      ],
      [
        "Mean = 10",
        "Mean = 10"
      ],
      [
        "Maximum = 30",
        "Maximum = 30"
      ],
      [
        "Range = 26",
        "Range = 26"
      ]
    ],
    "why": [
      "The median is 5 and is less affected by the outlier than the mean.",
      "The median is 5 and is less affected by the outlier than the mean."
    ],
    "workedExample": {
      "scenario": [
        "Find the median of 3, 4, 5, 6 and 28 when 28 is an outlier.",
        "Find the median of 3, 4, 5, 6 and 28 when 28 is an outlier."
      ],
      "steps": [
        [
          "The values are already in order; the middle value is 5.",
          "The values are already in order; the middle value is 5."
        ],
        [
          "The outlier 28 changes the mean strongly but does not move the middle value.",
          "The outlier 28 changes the mean strongly but does not move the middle value."
        ]
      ],
      "answer": [
        "The median is 5 and is a better measure of a typical value here than the mean.",
        "The median is 5 and is a better measure of a typical value here than the mean."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "The mean is always the best average, even when there is an extreme outlier.",
          "The mean is always the best average, even when there is an extreme outlier."
        ],
        "correction": [
          "Compare mean, median and mode; the median is often more representative when an outlier is present.",
          "Compare mean, median and mode; the median is often more representative when an outlier is present."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "How would adding a very large outlier affect the mean and the median?",
        "How would adding a very large outlier affect the mean and the median?"
      ]
    ]
  },
  {
    "id": "ss1-stats-cs2-li2",
    "strand": "Making Sense of and Using Data",
    "subStrand": "Statistical Reasoning and Its Application in Real Life",
    "contentStandardId": "1.4.1.CS.2",
    "learningIndicatorId": "1.4.1.LI.2",
    "title": [
      "Organise and present data",
      "Organise and present data"
    ],
    "explanation": [
      "Organise grouped and ungrouped observations in frequency tables and select clear visual displays such as line graphs, pie charts and multiple bar graphs.",
      "Organise grouped and ungrouped observations in frequency tables and select clear visual displays such as line graphs, pie charts and multiple bar graphs."
    ],
    "q": [
      "The data are 2, 3, 2, 4, 3, 2. What is the frequency of the value 2?",
      "The data are 2, 3, 2, 4, 3, 2. What is the frequency of the value 2?"
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
        "1",
        "1"
      ],
      [
        "4",
        "4"
      ]
    ],
    "why": [
      "The value 2 appears three times in the data set.",
      "The value 2 appears three times in the data set."
    ],
    "workedExample": {
      "scenario": [
        "Create the frequency of 3 in the data set 1, 3, 2, 3, 4, 3, 2.",
        "Create the frequency of 3 in the data set 1, 3, 2, 3, 4, 3, 2."
      ],
      "steps": [
        [
          "Read each value once and make a tally whenever 3 appears.",
          "Read each value once and make a tally whenever 3 appears."
        ],
        [
          "The value 3 appears three times.",
          "The value 3 appears three times."
        ]
      ],
      "answer": [
        "The frequency of 3 is 3.",
        "The frequency of 3 is 3."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "The frequency of a value is the value itself.",
          "The frequency of a value is the value itself."
        ],
        "correction": [
          "Frequency tells how many times the value occurs in the data set.",
          "Frequency tells how many times the value occurs in the data set."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "What is the frequency of 2 in 2, 5, 2, 2, 7, 5?",
        "What is the frequency of 2 in 2, 5, 2, 2, 7, 5?"
      ]
    ]
  },
  {
    "id": "ss1-stats-cs3-li1",
    "strand": "Making Sense of and Using Data",
    "subStrand": "Statistical Reasoning and Its Application in Real Life",
    "contentStandardId": "1.4.1.CS.3",
    "learningIndicatorId": "1.4.1.LI.1",
    "title": [
      "Plan and execute a school data project",
      "Plan and execute a school data project"
    ],
    "explanation": [
      "Design a question, choose and justify a suitable sample, collect and analyse school data, then draw conclusions and recommendations supported by evidence.",
      "Design a question, choose and justify a suitable sample, collect and analyse school data, then draw conclusions and recommendations supported by evidence."
    ],
    "q": [
      "To estimate opinions across an entire school, which sampling plan is most defensible?",
      "To estimate opinions across an entire school, which sampling plan is most defensible?"
    ],
    "a": [
      [
        "Select learners randomly from every year group.",
        "Select learners randomly from every year group."
      ],
      [
        "Ask only the researcher's closest friends.",
        "Ask only the researcher's closest friends."
      ],
      [
        "Ask only one sports team.",
        "Ask only one sports team."
      ],
      [
        "Ask only learners who volunteer after seeing the result.",
        "Ask only learners who volunteer after seeing the result."
      ]
    ],
    "why": [
      "A sample drawn randomly across year groups is more representative than a convenience sample from one group.",
      "A sample drawn randomly across year groups is more representative than a convenience sample from one group."
    ],
    "workedExample": {
      "scenario": [
        "A school wants opinions from learners in all year groups. Plan a fair sample.",
        "A school wants opinions from learners in all year groups. Plan a fair sample."
      ],
      "steps": [
        [
          "List the year groups and decide how many learners to select from each.",
          "List the year groups and decide how many learners to select from each."
        ],
        [
          "Select learners randomly within every year group so each group is represented.",
          "Select learners randomly within every year group so each group is represented."
        ]
      ],
      "answer": [
        "Random selection from every year group gives a more representative sample than choosing one convenient class.",
        "Random selection from every year group gives a more representative sample than choosing one convenient class."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "Survey only the learners who are easiest to reach.",
          "Survey only the learners who are easiest to reach."
        ],
        "correction": [
          "A convenience sample can be biased. Include all relevant groups and select participants fairly.",
          "A convenience sample can be biased. Include all relevant groups and select participants fairly."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "Why might a sample from only one year group misrepresent the whole school?",
        "Why might a sample from only one year group misrepresent the whole school?"
      ]
    ]
  },
  {
    "id": "ss1-stats-cs3-li2",
    "strand": "Making Sense of and Using Data",
    "subStrand": "Statistical Reasoning and Its Application in Real Life",
    "contentStandardId": "1.4.1.CS.3",
    "learningIndicatorId": "1.4.1.LI.2",
    "title": [
      "Present and publish a project report",
      "Present and publish a project report"
    ],
    "explanation": [
      "Communicate a project through a clear report, presentation or infographic, protecting privacy and making the evidence and recommendations understandable.",
      "Communicate a project through a clear report, presentation or infographic, protecting privacy and making the evidence and recommendations understandable."
    ],
    "q": [
      "Which report is the most responsible way to publish a school survey?",
      "Which report is the most responsible way to publish a school survey?"
    ],
    "a": [
      [
        "Show anonymised summaries, clear charts and evidence-based recommendations.",
        "Show anonymised summaries, clear charts and evidence-based recommendations."
      ],
      [
        "Publish every learner's name beside each answer.",
        "Publish every learner's name beside each answer."
      ],
      [
        "Remove results that disagree with the team's opinion.",
        "Remove results that disagree with the team's opinion."
      ],
      [
        "Show charts without labels or explanation.",
        "Show charts without labels or explanation."
      ]
    ],
    "why": [
      "A responsible report protects participants, explains the evidence and makes conclusions transparent.",
      "A responsible report protects participants, explains the evidence and makes conclusions transparent."
    ],
    "workedExample": {
      "scenario": [
        "Prepare a short report from a survey of learners' travel-to-school methods.",
        "Prepare a short report from a survey of learners' travel-to-school methods."
      ],
      "steps": [
        [
          "Show anonymised totals in a clearly labelled chart and describe how the sample was collected.",
          "Show anonymised totals in a clearly labelled chart and describe how the sample was collected."
        ],
        [
          "Make recommendations that follow from the results and state limits of the survey.",
          "Make recommendations that follow from the results and state limits of the survey."
        ]
      ],
      "answer": [
        "A responsible report protects identities, explains the method and links conclusions to evidence.",
        "A responsible report protects identities, explains the method and links conclusions to evidence."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "Publish learners' names and make claims that the survey did not measure.",
          "Publish learners' names and make claims that the survey did not measure."
        ],
        "correction": [
          "Protect privacy and separate observed results from unsupported assumptions.",
          "Protect privacy and separate observed results from unsupported assumptions."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "What information should accompany a chart so readers can interpret it responsibly?",
        "What information should accompany a chart so readers can interpret it responsibly?"
      ]
    ]
  },
  {
    "id": "ss1-stats-cs2-li3",
    "strand": "Making Sense of and Using Data",
    "subStrand": "Statistical Reasoning and Its Application in Real Life",
    "contentStandardId": "1.4.1.CS.2",
    "learningIndicatorId": "1.4.1.LI.3",
    "title": [
      "Make evidence-based inferences from data",
      "Make evidence-based inferences from data"
    ],
    "explanation": [
      "Use mathematical arguments to support personal choices and make careful inferences from everyday data, recognising limits in the evidence.",
      "Use mathematical arguments to support personal choices and make careful inferences from everyday data, recognising limits in the evidence."
    ],
    "q": [
      "A survey about the whole school asked only one class. What is the main limitation?",
      "A survey about the whole school asked only one class. What is the main limitation?"
    ],
    "a": [
      [
        "The sample may be biased and may not represent the whole school.",
        "The sample may be biased and may not represent the whole school."
      ],
      [
        "The survey automatically proves every learner agrees.",
        "The survey automatically proves every learner agrees."
      ],
      [
        "The results cannot contain numbers.",
        "The results cannot contain numbers."
      ],
      [
        "The sample is always too large.",
        "The sample is always too large."
      ]
    ],
    "why": [
      "One class may differ from other year groups, so the result should not be generalised without qualification.",
      "One class may differ from other year groups, so the result should not be generalised without qualification."
    ],
    "workedExample": {
      "scenario": [
        "A survey aims to describe the whole school but asks only learners in one class. Evaluate the conclusion.",
        "A survey aims to describe the whole school but asks only learners in one class. Evaluate the conclusion."
      ],
      "steps": [
        [
          "The class may have different ages, interests or experiences from other year groups.",
          "The class may have different ages, interests or experiences from other year groups."
        ],
        [
          "The sample may be biased, so do not generalise the result to every learner without further evidence.",
          "The sample may be biased, so do not generalise the result to every learner without further evidence."
        ]
      ],
      "answer": [
        "The sample may not represent the whole school; the inference must be qualified.",
        "The sample may not represent the whole school; the inference must be qualified."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "A large number of responses automatically makes a sample representative.",
          "A large number of responses automatically makes a sample representative."
        ],
        "correction": [
          "How participants are selected matters as well as sample size; a biased sample can remain biased when large.",
          "How participants are selected matters as well as sample size; a biased sample can remain biased when large."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "Suggest one way to improve the sample so it better represents the whole school.",
        "Suggest one way to improve the sample so it better represents the whole school."
      ]
    ]
  },
  {
    "id": "ss1-prob-cs1-li1",
    "strand": "Making Sense of and Using Data",
    "subStrand": "Probability/Chance",
    "contentStandardId": "1.4.2.CS.1",
    "learningIndicatorId": "1.4.2.LI.1",
    "title": [
      "List sample spaces for independent experiments",
      "List sample spaces for independent experiments"
    ],
    "explanation": [
      "List every possible outcome of a simple or compound experiment. For independent stages, combine each possible result from one stage with each from the other.",
      "List every possible outcome of a simple or compound experiment. For independent stages, combine each possible result from one stage with each from the other."
    ],
    "q": [
      "A fair coin is tossed twice. How many outcomes are in the sample space?",
      "A fair coin is tossed twice. How many outcomes are in the sample space?"
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
        "3",
        "3"
      ],
      [
        "8",
        "8"
      ]
    ],
    "why": [
      "The sample space is {HH, HT, TH, TT}, so there are four outcomes.",
      "The sample space is {HH, HT, TH, TT}, so there are four outcomes."
    ],
    "workedExample": {
      "scenario": [
        "List the sample space when a fair coin is tossed twice.",
        "List the sample space when a fair coin is tossed twice."
      ],
      "steps": [
        [
          "Record the first toss, then the second: HH, HT, TH and TT.",
          "Record the first toss, then the second: HH, HT, TH and TT."
        ],
        [
          "There are four ordered outcomes because the two toss positions are distinct.",
          "There are four ordered outcomes because the two toss positions are distinct."
        ]
      ],
      "answer": [
        "The sample space has four outcomes: HH, HT, TH and TT.",
        "The sample space has four outcomes: HH, HT, TH and TT."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "HT and TH are the same outcome because they contain one head and one tail.",
          "HT and TH are the same outcome because they contain one head and one tail."
        ],
        "correction": [
          "The order records which toss produced each result, so HT and TH are distinct outcomes.",
          "The order records which toss produced each result, so HT and TH are distinct outcomes."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "How many ordered outcomes are possible when a coin is tossed three times?",
        "How many ordered outcomes are possible when a coin is tossed three times?"
      ]
    ]
  },
  {
    "id": "ss1-prob-cs1-li2",
    "strand": "Making Sense of and Using Data",
    "subStrand": "Probability/Chance",
    "contentStandardId": "1.4.2.CS.1",
    "learningIndicatorId": "1.4.2.LI.2",
    "title": [
      "Calculate probabilities of independent events",
      "Calculate probabilities of independent events"
    ],
    "explanation": [
      "For independent events, multiply their probabilities. Express the result as a fraction, decimal or percentage.",
      "For independent events, multiply their probabilities. Express the result as a fraction, decimal or percentage."
    ],
    "q": [
      "What is the probability of getting heads on a fair coin and a 4 on a fair six-sided die?",
      "What is the probability of getting heads on a fair coin and a 4 on a fair six-sided die?"
    ],
    "a": [
      [
        "1/12",
        "1/12"
      ],
      [
        "1/6",
        "1/6"
      ],
      [
        "1/8",
        "1/8"
      ],
      [
        "1/3",
        "1/3"
      ]
    ],
    "why": [
      "The events are independent: 1/2 × 1/6 = 1/12.",
      "The events are independent: 1/2 × 1/6 = 1/12."
    ],
    "workedExample": {
      "scenario": [
        "Find the probability of rolling an even number on a fair six-sided die and getting heads on a fair coin.",
        "Find the probability of rolling an even number on a fair six-sided die and getting heads on a fair coin."
      ],
      "steps": [
        [
          "P(even) = 3/6 = 1/2 and P(heads) = 1/2.",
          "P(even) = 3/6 = 1/2 and P(heads) = 1/2."
        ],
        [
          "The events are independent, so multiply: 1/2 × 1/2 = 1/4.",
          "The events are independent, so multiply: 1/2 × 1/2 = 1/4."
        ]
      ],
      "answer": [
        "The probability is 1/4.",
        "The probability is 1/4."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "Add the probabilities of two independent events to find that both occur.",
          "Add the probabilities of two independent events to find that both occur."
        ],
        "correction": [
          "For both independent events to occur, multiply their probabilities.",
          "For both independent events to occur, multiply their probabilities."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "If two independent events have probabilities 1/3 and 1/5, what is the probability both occur?",
        "If two independent events have probabilities 1/3 and 1/5, what is the probability both occur?"
      ]
    ]
  },
  {
    "id": "ss1-prob-cs1-li3",
    "strand": "Making Sense of and Using Data",
    "subStrand": "Probability/Chance",
    "contentStandardId": "1.4.2.CS.1",
    "learningIndicatorId": "1.4.2.LI.3",
    "title": [
      "Solve everyday independent-event problems",
      "Solve everyday independent-event problems"
    ],
    "explanation": [
      "Model everyday situations involving two independent events and calculate the probability of the combined event.",
      "Model everyday situations involving two independent events and calculate the probability of the combined event."
    ],
    "q": [
      "A bag contains 3 red and 2 blue counters. One counter is drawn, replaced, and then another is drawn. What is the probability of drawing red twice?",
      "A bag contains 3 red and 2 blue counters. One counter is drawn, replaced, and then another is drawn. What is the probability of drawing red twice?"
    ],
    "a": [
      [
        "9/25",
        "9/25"
      ],
      [
        "6/25",
        "6/25"
      ],
      [
        "3/5",
        "3/5"
      ],
      [
        "9/10",
        "9/10"
      ]
    ],
    "why": [
      "With replacement, each red probability is 3/5. Multiply: 3/5 × 3/5 = 9/25.",
      "With replacement, each red probability is 3/5. Multiply: 3/5 × 3/5 = 9/25."
    ],
    "workedExample": {
      "scenario": [
        "A bag has 4 green and 1 yellow counter. A counter is drawn, replaced and drawn again. Find the probability of green twice.",
        "A bag has 4 green and 1 yellow counter. A counter is drawn, replaced and drawn again. Find the probability of green twice."
      ],
      "steps": [
        [
          "The probability of green on each draw is 4/5 because the counter is replaced.",
          "The probability of green on each draw is 4/5 because the counter is replaced."
        ],
        [
          "Multiply the independent probabilities: 4/5 × 4/5 = 16/25.",
          "Multiply the independent probabilities: 4/5 × 4/5 = 16/25."
        ]
      ],
      "answer": [
        "The probability of drawing green twice is 16/25.",
        "The probability of drawing green twice is 16/25."
      ]
    },
    "misconceptions": [
      {
        "belief": [
          "The second draw has a different probability even though the first counter is replaced.",
          "The second draw has a different probability even though the first counter is replaced."
        ],
        "correction": [
          "Replacement restores the original bag, so the probability stays 4/5 on both draws.",
          "Replacement restores the original bag, so the probability stays 4/5 on both draws."
        ]
      }
    ],
    "knowledgePrompts": [
      [
        "How would the probability change if the first counter were not replaced?",
        "How would the probability change if the first counter were not replaced?"
      ]
    ]
  }
] as IndicatorItem[];

export const GHANA_SS1_INDICATOR_BLUEPRINT = INDICATORS.map((item, questionIndex) => ({
  id: item.id,
  strand: item.strand,
  subStrand: item.subStrand,
  contentStandardId: item.contentStandardId,
  learningIndicatorId: item.learningIndicatorId,
  questionIndex,
  title: item.title
}));

const lesson = (en: string, _it: string) => ({
  who: 's' as const,
  vis: 'infowords',
  text: `<p>${en}</p>`
});

const question = (en: string, _it: string, answers: [string, string][], whyEn: string, _whyIt: string) => ({
  q: en,
  a: answers.map(answer => answer[0]),
  why: whyEn
});

const assessmentQuestions = INDICATORS.map(item => ({
  q: item.q,
  a: item.a,
  why: item.why
}));

export const GHANA_SS1_INDICATOR_MASTERY_ARCS: ArcInfo[] = [
  {
    n: 19,
    unit: 0,
    subject: 'ghcoremath',
    title: 'The 45-Indicator Mastery Expedition',
    pages: 'NaCCA SHS 1 · pp. 24–155 · 45 learning indicators'
  }
];

export const GHANA_SS1_INDICATOR_MASTERY_MISSIONS: Mission[] = [
  {
    id: 'gh-core-ss1-45-indicator-diagnostic',
    arc: 27,
    sec: 'Integrated Core Mathematics',
    pages: 'NaCCA SHS 1 · pp. 24–155 · 45 learning indicators',
    hue: 318,
    horns: 2,
    eyes: 2,
    title: 'The 45-Indicator Mastery Expedition',
    topic: 'A curriculum-mapped diagnostic with two English question forms for each of the 45 SHS 1 learning indicators. Each attempt uses one question per indicator, with a different form on retries, followed by targeted revision.',
    demon: 'The Coverage Warden',
    tech: 'Mastery Form · Final Technique: One Indicator at a Time',
    scenes: [
      lesson(
        '<b>Welcome to the 45-Indicator Mastery Expedition.</b> This is a diagnostic, not a race. Each question is linked to one printed SHS 1 learning-indicator entry in the NaCCA Mathematics Curriculum. Your result will show which ideas are secure and which deserve another look.',
        '<b>Benvenuto nella spedizione di padronanza dei 45 indicatori.</b> Questa è una verifica diagnostica, non una gara. Ogni domanda è collegata a una voce degli indicatori SHS 1 del curriculum di Matematica NaCCA. Il risultato mostrerà quali concetti sono consolidati e quali meritano un ripasso.'
      ),
      lesson(
        '<b>Numbers for Everyday Life:</b> Classify real numbers, test closure and properties, work with sets, convert fractions and percentages, and apply proportional reasoning to financial decisions.',
        '<b>Numeri per la vita quotidiana:</b> Classifica i numeri reali, verifica chiusura e proprietà, lavora con gli insiemi, converti frazioni e percentuali e applica il ragionamento proporzionale alle decisioni finanziarie.'
      ),
      lesson(
        '<b>Algebraic Reasoning:</b> Translate patterns into expressions, factorise quadratics, handle algebraic fractions, rearrange formulae and solve equations and inequalities. Then interpret functions, mappings and straight-line relationships.',
        '<b>Ragionamento algebrico:</b> Traduci schemi in espressioni, scomponi trinomi, lavora con frazioni algebriche, riordina formule e risolvi equazioni e disequazioni. Poi interpreta funzioni, corrispondenze e relazioni lineari.'
      ),
      lesson(
        '<b>Geometry Around Us:</b> Use angle relationships, triangle properties, Pythagoras, vectors, bearings, trigonometry, area, perimeter and prism volume. Always include units and check whether the result is reasonable.',
        '<b>La geometria intorno a noi:</b> Usa relazioni tra angoli, proprietà dei triangoli, Pitagora, vettori, direzioni, trigonometria, area, perimetro e volume dei prismi. Indica sempre le unità e controlla che il risultato sia ragionevole.'
      ),
      lesson(
        '<b>Making Sense of and Using Data:</b> Classify data, select collection methods, organise and present information, plan a fair school investigation and support conclusions with evidence.',
        '<b>Interpretare e utilizzare i dati:</b> Classifica i dati, scegli i metodi di raccolta, organizza e presenta le informazioni, pianifica un\'indagine scolastica corretta e sostieni le conclusioni con prove.'
      ),
      lesson(
        '<b>Probability and Chance:</b> List sample spaces, recognise independent events and multiply probabilities only when the independence condition is satisfied. A replacement draw is a useful example because the probabilities stay the same.',
        '<b>Probabilità e caso:</b> Elenca gli spazi campionari, riconosci gli eventi indipendenti e moltiplica le probabilità solo quando vale la condizione di indipendenza. Un\'estrazione con reinserimento è un esempio utile perché le probabilità restano invariate.'
      ),
      lesson(
        '<b>How your diagnostic works:</b> Answer all 45 questions independently. Each question records evidence for one curriculum indicator. The pass mark is 80% (36 correct answers). A missed answer is linked to a named concept so the revision panel can point you to the exact skill to practise.',
        '<b>Come funziona la verifica:</b> Rispondi autonomamente a tutte le 45 domande. Ogni domanda registra una prova relativa a un indicatore del programma. La soglia è l’80% (36 risposte corrette). Ogni errore è collegato a un concetto specifico, così il pannello di ripasso può indicarti l’abilità da esercitare.'
      ),
      lesson(
        '<b>Be thoughtful, not rushed.</b> Read the full question, show working on paper when useful, and check units, signs and restrictions. The diagnostic reinforces the existing SHS 1 scope; it does not add or replace curriculum requirements.',
        '<b>Ragiona con calma, senza fretta.</b> Leggi tutta la domanda, svolgi i passaggi su carta quando serve e controlla unità, segni e condizioni. La verifica consolida il programma SHS 1 esistente: non aggiunge né sostituisce requisiti curriculari.'
      ),
      { who: 'd', vis: 'demon', text: 'I have scattered your knowledge across eight sub-strands. Prove that you can retrieve each skill, and let every missed indicator reveal the next technique you must train!' },
      { type: 'battle' }
    ],
    quiz: [
      question('A savings balance of GH₵1,000 earns 10% compound interest annually for two years. What is the final balance?', 'Un risparmio di GH₵1.000 frutta il 10% di interesse composto annuo per due anni. Qual è il saldo finale?', [['GH₵1,210', 'GH₵1,210'], ['GH₵1,200', 'GH₵1,200'], ['GH₵1,100', 'GH₵1,100'], ['GH₵1,020', 'GH₵1,020']], 'A = 1,000 × (1.10)² = GH₵1,210.', 'A = 1.000 × (1,10)² = GH₵1.210.'),
      question('A club has GH₵180 and each activity pack costs GH₵12. What is the greatest number of packs it can buy?', 'Un club ha GH₵180 e ogni kit per le attività costa GH₵12. Qual è il numero massimo di kit che può acquistare?', [['15', '15'], ['12', '12'], ['18', '18'], ['20', '20']], '180 ÷ 12 = 15 packs.', '180 ÷ 12 = 15 kit.'),
      question('A triangular prism has cross-sectional area 12 cm² and length 8 cm. What is its volume?', 'Un prisma triangolare ha un’area di sezione di 12 cm² e una lunghezza di 8 cm. Qual è il suo volume?', [['96 cm³', '96 cm³'], ['20 cm³', '20 cm³'], ['48 cm³', '48 cm³'], ['96 cm²', '96 cm²']], 'Volume = 12 × 8 = 96 cm³.', 'Volume = 12 × 8 = 96 cm³.'),
      question('The values are 4, 5, 5, 6 and 30. Which average best represents a typical value when 30 is an outlier?', 'I valori sono 4, 5, 5, 6 e 30. Quale media rappresenta meglio un valore tipico quando 30 è un valore anomalo?', [['Median = 5', 'Median = 5'], ['Mean = 10', 'Mean = 10'], ['Maximum = 30', 'Maximum = 30'], ['Range = 26', 'Range = 26']], 'The median is 5 and is less affected by the outlier than the mean.', 'La mediana è 5 ed è meno influenzata dal valore anomalo rispetto alla media aritmetica.')
    ],
    learning: {
      version: 1,
      objectives: [
        { id: 'real-number-system', description: ['Demonstrate number-system, closure, operation-property and set reasoning.', 'Demonstrate number-system, closure, operation-property and set reasoning.'], successCriteria: [['Classify rational and irrational values and test closure.', 'Classify rational and irrational values and test closure.'], ['Solve two-set and three-set problems using correct notation.', 'Solve two-set and three-set problems using correct notation.']] },
        { id: 'proportional-reasoning', description: ['Connect fractions, decimals and percentages, then apply them to finance.', 'Connect fractions, decimals and percentages, then apply them to finance.'], successCriteria: [['Find additive and multiplicative inverses.', 'Find additive and multiplicative inverses.'], ['Calculate percentages and financial quantities accurately.', 'Calculate percentages and financial quantities accurately.']] },
        { id: 'algebraic-applications', description: ['Form, simplify and factorise expressions; rearrange formulae and solve equations and inequalities.', 'Form, simplify and factorise expressions; rearrange formulae and solve equations and inequalities.'], successCriteria: [['Respect algebraic restrictions and equivalent transformations.', 'Respect algebraic restrictions and equivalent transformations.']] },
        { id: 'patterns-relationships', description: ['Interpret mappings, functions, exponential patterns and straight-line relationships.', 'Interpret mappings, functions, exponential patterns and straight-line relationships.'], successCriteria: [['Use gradients, equations, midpoints and distances.', 'Use gradients, equations, midpoints and distances.']] },
        { id: 'spatial-sense', description: ['Apply angle, triangle, parallel-line and polygon properties.', 'Apply angle, triangle, parallel-line and polygon properties.'], successCriteria: [['Choose and justify the relevant geometric relationship.', 'Choose and justify the relevant geometric relationship.']] },
        { id: 'measurement', description: ['Use vectors, bearings, trigonometry, area, perimeter, units and prism volume.', 'Use vectors, bearings, trigonometry, area, perimeter, units and prism volume.'], successCriteria: [['Show appropriate units and a sensible estimate.', 'Show appropriate units and a sensible estimate.']] },
        { id: 'statistical-reasoning', description: ['Collect, organise, present and interpret data responsibly.', 'Collect, organise, present and interpret data responsibly.'], successCriteria: [['Choose a representative sample and justify conclusions.', 'Choose a representative sample and justify conclusions.']] },
        { id: 'probability-chance', description: ['List sample spaces and solve problems involving independent events.', 'List sample spaces and solve problems involving independent events.'], successCriteria: [['Multiply probabilities only when events are independent.', 'Multiply probabilities only when events are independent.']] }
      ],
      prerequisites: [
        ['Review your class notes and bring a calculator. The diagnostic covers the full SHS 1 scope, so take breaks if you need them.', 'Review your class notes and bring a calculator. The diagnostic covers the full SHS 1 scope, so take breaks if you need them.']
      ],
      concepts: INDICATORS.map(item => ({
        id: item.id,
        title: item.title,
        explanation: item.explanation,
        workedExample: item.workedExample,
        misconceptions: item.misconceptions,
        knowledgePrompts: item.knowledgePrompts
      })),

      guidedPractice: [
        {"id":"ss1-guided-eight-strands","title":["Eight-Strand Skill Warm-up","Eight-Strand Skill Warm-up"],"instructions":["Work through one coached question from each SHS 1 sub-strand. Use the hint if you need a reminder, then read the worked explanation.","Work through one coached question from each SHS 1 sub-strand. Use the hint if you need a reminder, then read the worked explanation."],"sceneIndex":0,"questions":[{"q":["Choose the irrational number.","Choose the irrational number."],"a":[["√11","√11"],["0.25","0.25"],["3/8","3/8"],["0.777…","0.777…"]],"why":["√11 cannot be written as a fraction of integers.","√11 cannot be written as a fraction of integers."]},{"q":["A GH₵80 item is discounted by 15%. What is the sale price?","A GH₵80 item is discounted by 15%. What is the sale price?"],"a":[["GH₵68","GH₵68"],["GH₵65","GH₵65"],["GH₵72","GH₵72"],["GH₵12","GH₵12"]],"why":["15% of 80 is 12; 80 − 12 = 68.","15% of 80 is 12; 80 − 12 = 68."]},{"q":["Simplify 3(2x − 4) + x.","Simplify 3(2x − 4) + x."],"a":[["7x − 12","7x − 12"],["6x − 4","6x − 4"],["7x − 4","7x − 4"],["6x − 12","6x − 12"]],"why":["Distribute 3 to get 6x − 12, then add x.","Distribute 3 to get 6x − 12, then add x."]},{"q":["For f(x) = 2x + 3, what is f(4)?","For f(x) = 2x + 3, what is f(4)?"],"a":[["11","11"],["8","8"],["14","14"],["9","9"]],"why":["Substitute x = 4: 2(4) + 3 = 11.","Substitute x = 4: 2(4) + 3 = 11."]},{"q":["Angles on a straight line add up to 180°. If one is 113°, find the other.","Angles on a straight line add up to 180°. If one is 113°, find the other."],"a":[["67°","67°"],["77°","77°"],["113°","113°"],["293°","293°"]],"why":["180° − 113° = 67°.","180° − 113° = 67°."]},{"q":["A prism has cross-sectional area 18 cm² and length 7 cm. Find its volume.","A prism has cross-sectional area 18 cm² and length 7 cm. Find its volume."],"a":[["126 cm³","126 cm³"],["25 cm³","25 cm³"],["126 cm²","126 cm²"],["63 cm³","63 cm³"]],"why":["Volume = cross-sectional area × length = 18 × 7 = 126 cm³.","Volume = cross-sectional area × length = 18 × 7 = 126 cm³."]},{"q":["Find the median of 3, 5, 7, 8, 20.","Find the median of 3, 5, 7, 8, 20."],"a":[["7","7"],["8","8"],["8.6","8.6"],["5","5"]],"why":["The middle value in the ordered list is 7.","The middle value in the ordered list is 7."]},{"q":["A fair coin is tossed twice. What is the probability of two heads?","A fair coin is tossed twice. What is the probability of two heads?"],"a":[["1/4","1/4"],["1/2","1/2"],["1/3","1/3"],["3/4","3/4"]],"why":["The tosses are independent: 1/2 × 1/2 = 1/4.","The tosses are independent: 1/2 × 1/2 = 1/4."]}],"hints":[["Check whether the decimal terminates or repeats.","Check whether the decimal terminates or repeats."],["Find the discount first, then subtract it from the original price.","Find the discount first, then subtract it from the original price."],["Expand the brackets before collecting like terms.","Expand the brackets before collecting like terms."],["Replace x with 4 and follow the order of operations.","Replace x with 4 and follow the order of operations."],["Use the supplementary-angle total of 180 degrees.","Use the supplementary-angle total of 180 degrees."],["Multiply the cross-sectional area by the perpendicular length; use cubic units.","Multiply the cross-sectional area by the perpendicular length; use cubic units."],["The median is the middle observation after sorting.","The median is the middle observation after sorting."],["Multiply the probabilities because the two tosses are independent.","Multiply the probabilities because the two tosses are independent."]]}
      ],
      independentPractice: [
        {"id":"ss1-independent-transfer","title":["Eight-Strand Transfer Challenge","Eight-Strand Transfer Challenge"],"instructions":["Solve a fresh application question from each sub-strand without hints. Retry until correct and check the explanation before moving on.","Solve a fresh application question from each sub-strand without hints. Retry until correct and check the explanation before moving on."],"sceneIndex":0,"questions":[{"q":["Which number belongs to the integers but not the whole numbers?","Which number belongs to the integers but not the whole numbers?"],"a":[["−6","−6"],["0.6","0.6"],["√5","√5"],["3/4","3/4"]],"why":["Negative whole-number values are integers but are not whole numbers.","Negative whole-number values are integers but are not whole numbers."]},{"q":["A transport fare rises from GH₵10 to GH₵12. What is the percentage increase?","A transport fare rises from GH₵10 to GH₵12. What is the percentage increase?"],"a":[["20%","20%"],["16.7%","16.7%"],["2%","2%"],["120%","120%"]],"why":["Increase = 2; 2 ÷ 10 × 100 = 20%.","Increase = 2; 2 ÷ 10 × 100 = 20%."]},{"q":["Solve 5x − 7 = 18.","Solve 5x − 7 = 18."],"a":[["x = 5","x = 5"],["x = 11/5","x = 11/5"],["x = 7","x = 7"],["x = 25","x = 25"]],"why":["Add 7 to get 5x = 25, then divide by 5.","Add 7 to get 5x = 25, then divide by 5."]},{"q":["Find the gradient between (1, 2) and (4, 11).","Find the gradient between (1, 2) and (4, 11)."],"a":[["3","3"],["9","9"],["1/3","1/3"],["13","13"]],"why":["Gradient = (11 − 2) ÷ (4 − 1) = 9 ÷ 3 = 3.","Gradient = (11 − 2) ÷ (4 − 1) = 9 ÷ 3 = 3."]},{"q":["Two angles in a triangle are 48° and 67°. Find the third angle.","Two angles in a triangle are 48° and 67°. Find the third angle."],"a":[["65°","65°"],["75°","75°"],["115°","115°"],["245°","245°"]],"why":["180° − 48° − 67° = 65°.","180° − 48° − 67° = 65°."]},{"q":["In a right triangle, opposite = 6 and hypotenuse = 10. Find sin θ.","In a right triangle, opposite = 6 and hypotenuse = 10. Find sin θ."],"a":[["0.6","0.6"],["0.4","0.4"],["1.6","1.6"],["6","6"]],"why":["sin θ = opposite ÷ hypotenuse = 6 ÷ 10 = 0.6.","sin θ = opposite ÷ hypotenuse = 6 ÷ 10 = 0.6."]},{"q":["The values 2, 3, 3, 4, 4, 4, 5 are recorded. Find the mode.","The values 2, 3, 3, 4, 4, 4, 5 are recorded. Find the mode."],"a":[["4","4"],["3","3"],["3.5","3.5"],["5","5"]],"why":["4 occurs most often, so it is the mode.","4 occurs most often, so it is the mode."]},{"q":["A bag has 3 red and 5 blue counters. What is the probability of not choosing red?","A bag has 3 red and 5 blue counters. What is the probability of not choosing red?"],"a":[["5/8","5/8"],["3/8","3/8"],["1/2","1/2"],["5/3","5/3"]],"why":["There are 5 blue counters out of 8 total, so P(not red) = 5/8.","There are 5 blue counters out of 8 total, so P(not red) = 5/8."]}],"hints":[["Think about the difference between negative integers and non-negative whole numbers.","Think about the difference between negative integers and non-negative whole numbers."],["Divide the change by the original amount, not the new amount.","Divide the change by the original amount, not the new amount."],["Undo subtraction first, then undo multiplication.","Undo subtraction first, then undo multiplication."],["Use change in y divided by change in x.","Use change in y divided by change in x."],["The interior angles of a triangle total 180 degrees.","The interior angles of a triangle total 180 degrees."],["Sine uses opposite over hypotenuse.","Sine uses opposite over hypotenuse."],["Count how many times each value appears.","Count how many times each value appears."],["Not red is the complement of red; count the blue counters.","Not red is the complement of red; count the blue counters."]]}
      ],
      summary: [
        ['The 45 questions are linked one-to-one to the 45 SHS 1 indicator entries across eight sub-strands. Results are stored by indicator concept to support targeted revision.', 'The 45 questions are linked one-to-one to the 45 SHS 1 indicator entries across eight sub-strands. Results are stored by indicator concept to support targeted revision.'],
        ['A score of 80% or higher unlocks the final battle. If you do not pass, the review panel identifies the exact indicators that need more practice.', 'A score of 80% or higher unlocks the final battle. If you do not pass, the review panel identifies the exact indicators that need more practice.']
      ],
      masteryAssessment: {
        title: ['NaCCA SHS 1 Diagnostic · 45 indicators', 'NaCCA SHS 1 Diagnostic · 45 indicators'],
        instructions: ['Answer all 45 questions. Each item is mapped to one curriculum indicator. You need at least 36 correct answers (80%) to unlock the battle. A retry switches to the alternate question form for every indicator. Review the indicator concepts shown after an attempt.', 'Answer all 45 questions. Each item is mapped to one curriculum indicator. You need at least 36 correct answers (80%) to unlock the battle. A retry switches to the alternate question form for every indicator. Review the indicator concepts shown after an attempt.'],
        questions: assessmentQuestions,
        questionConceptIds: INDICATORS.map(item => item.id),
        questionVariants: INDICATORS.map(item => [GHANA_SS1_INDICATOR_ALTERNATE_QUESTIONS[item.id]]),
        passingScore: 80
      },
      techniqueUnlock: {
        id: 'ghana-ss1-indicator-mastery',
        name: ['Indicator Mastery Form', 'Indicator Mastery Form'],
        description: ['You can identify your strongest SHS 1 skills and turn every missed indicator into a focused revision plan.', 'You can identify your strongest SHS 1 skills and turn every missed indicator into a focused revision plan.'],
        xpReward: 50
      }
    }
  }
];

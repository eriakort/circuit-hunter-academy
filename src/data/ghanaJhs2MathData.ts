import type { ArcInfo, Mission, SubjectInfo, UnitInfo } from '../types';

export const GHANA_JHS2_MATH_SUBJECT: SubjectInfo = {
  id: 'ghjhs2math',
  name: 'Mathematics · JHS 2',
  blurb: 'Ghana NaCCA JHS 2 Mathematics · Number and Algebra strands. Build number fluency, algebraic reasoning and practical problem-solving.',
  meta: 'Ghana NaCCA · JHS 2 · Number & Algebra strands · 6 missions',
  art: '<svg viewBox="0 0 120 120" width="100%" aria-hidden="true"><path d="M20 84 L60 20 L100 84 Z" fill="none" stroke="#ffd166" stroke-width="4"/><path d="M37 66 H83 M60 48 V102" stroke="#7bdff2" stroke-width="4" stroke-linecap="round"/><circle cx="60" cy="84" r="7" fill="#ffd166"/></svg>'
};
export const GHANA_JHS2_MATH_UNIT: UnitInfo = {
  title: 'Number Relationships and Operations',
  ch: 'JHS 2 · NaCCA Number strand',
  subject: 'ghjhs2math'
};
export const GHANA_JHS2_MATH_ARCS: ArcInfo[] = [
  { n: 1, unit: 0, subject: 'ghjhs2math', title: 'Integers and Directed Numbers', pages: 'NaCCA CCP · JHS Mathematics · Number' },
  { n: 2, unit: 0, subject: 'ghjhs2math', title: 'Fractions, Decimals and Percentages', pages: 'NaCCA CCP · JHS Mathematics · Number' },
  { n: 3, unit: 0, subject: 'ghjhs2math', title: 'Ratio, Rate and Proportion', pages: 'NaCCA CCP · JHS Mathematics · Number' }
];
const q = (prompt: string, answers: string[], explanation: string) => ({ q: prompt, a: answers, why: explanation });
const lesson = (text: string) => ({ who: 's' as const, vis: 'ghmath-number', text });
export const GHANA_JHS2_MATH_MISSIONS: Mission[] = [
{
 id:'gh-jhs2-number-integers',arc:0,sec:'Number',pages:'NaCCA CCP · JHS Mathematics · Number',hue:214,horns:2,eyes:2,
 title:'The Integer Expedition',topic:'Represent positive and negative numbers, compare integers and calculate with directed numbers in familiar contexts.',
 demon:'The Sign Swapper',tech:'Number Form · Fourth Technique: Directed Thinking',
 scenes:[
  lesson('<p>Integers include positive whole numbers, negative whole numbers and zero. A number line helps us compare them: numbers farther to the right are greater. For example, −2 is greater than −5 because −2 is to the right of −5.</p>'),
  lesson('<p>Positive and negative numbers describe situations such as gains and losses, deposits and withdrawals, or temperatures above and below zero. If a team gains 6 points and then loses 9, its change is 6 + (−9) = −3 points.</p>'),
  lesson('<p>When adding integers with the same sign, add their sizes and keep the sign. For different signs, subtract the smaller size from the larger and keep the sign of the number with the larger size: −8 + 3 = −5.</p>'),
  lesson('<p>Subtracting an integer is the same as adding its opposite. For example, 4 − (−3) = 4 + 3 = 7. Multiplying or dividing two integers with the same sign gives a positive result; different signs give a negative result.</p>'),
  {who:'d',vis:'demon',text:'I have reversed the signs on the number line. Use direction and integer rules to restore the correct values!'},
  {type:'battle'}
 ],
 quiz:[
  q('Which integer is greatest?', ['−2','−5','−8','−10'],'On a number line, −2 is farthest to the right.'),
  q('Calculate −7 + 4.', ['−3','3','−11','11'],'Different signs: 7 − 4 = 3, and the larger magnitude is negative.'),
  q('What is 6 − (−5)?', ['11','1','−1','−11'],'Subtracting a negative is adding its opposite: 6 + 5 = 11.'),
  q('Calculate (−3) × 4.', ['−12','12','−7','7'],'Different signs give a negative product; 3 × 4 = 12.'),
  q('A temperature is −2°C and rises by 7°C. What is the new temperature?', ['5°C','−9°C','9°C','−5°C'],'−2 + 7 = 5°C.')
 ]
},
{
 id:'gh-jhs2-number-fractions-percentages',arc:1,sec:'Number',pages:'NaCCA CCP · JHS Mathematics · Number',hue:42,horns:2,eyes:2,
 title:'The Fraction and Percentage Forge',topic:'Calculate with fractions and decimals and solve percentage problems in everyday settings.',
 demon:'The Whole-Part Illusion',tech:'Number Form · Fifth Technique: Equivalent Values',
 scenes:[
  lesson('<p>Fractions, decimals and percentages represent parts of a whole. For example, 3/5 = 0.6 = 60%. Converting between forms can make a calculation easier, so choose the form that best suits the problem.</p>'),
  lesson('<p>To add or subtract fractions, use a common denominator. For example, 1/4 + 1/2 = 1/4 + 2/4 = 3/4. For multiplication, multiply numerators together and denominators together, then simplify when possible.</p>'),
  lesson('<p>To find a percentage of an amount, convert the percentage to a decimal or fraction and multiply. For example, 15% of GH₵80 = 0.15 × 80 = GH₵12.</p>'),
  lesson('<p>Percentage increase and decrease compare a change with the original amount. If a GH₵50 item is reduced by 10%, the reduction is GH₵5 and the new price is GH₵45. Always calculate the percentage from the original amount unless the question says otherwise.</p>'),
  {who:'d',vis:'demon',text:'I have mixed up wholes, parts and percentages. Match the equivalent values and calculate the real amounts!'},
  {type:'battle'}
 ],
 quiz:[
  q('Which decimal is equal to 3/4?', ['0.75','0.34','0.25','0.8'],'3 ÷ 4 = 0.75.'),
  q('Calculate 1/3 + 1/6.', ['1/2','2/9','1/9','2/3'],'1/3 = 2/6, so 2/6 + 1/6 = 3/6 = 1/2.'),
  q('What is 20% of 150?', ['30','20','15','50'],'0.20 × 150 = 30.'),
  q('A GH₵60 bag is discounted by 10%. What is the new price?', ['GH₵54','GH₵50','GH₵66','GH₵6'],'10% of 60 is 6; 60 − 6 = GH₵54.'),
  q('Write 0.4 as a percentage.', ['40%','4%','0.4%','400%'],'Multiply 0.4 by 100 to get 40%.')
 ]
},
{
 id:'gh-jhs2-number-ratio-proportion',arc:2,sec:'Number',pages:'NaCCA CCP · JHS Mathematics · Number',hue:166,horns:2,eyes:2,
 title:'The Ratio and Recipe Challenge',topic:'Express ratios, simplify comparisons and use proportional reasoning to solve practical sharing and scaling problems.',
 demon:'The Unequal Divider',tech:'Number Form · Sixth Technique: Balanced Comparison',
 scenes:[
  lesson('<p>A ratio compares quantities. If a basket contains 2 mangoes and 3 oranges, the ratio of mangoes to oranges is 2:3. Keep the order clear: reversing the quantities gives 3:2.</p>'),
  lesson('<p>To simplify a ratio, divide every part by the same common factor. The ratio 6:9 simplifies to 2:3 because both parts are divided by 3. Ratios should compare quantities in compatible units.</p>'),
  lesson('<p>A proportion states that two ratios are equal. If 2 cups of rice serve 4 people, then 4 cups serve 8 people at the same rate. Both quantities have been multiplied by 2.</p>'),
  lesson('<p>Rates compare quantities measured in different units, such as kilometres per hour or price per kilogram. Read the units carefully and show your working so that the meaning of the answer is clear.</p>'),
  {who:'d',vis:'demon',text:'My recipe proportions are unbalanced. Simplify the ratios and scale the ingredients fairly!'},
  {type:'battle'}
 ],
 quiz:[
  q('A group has 4 boys and 6 girls. What is the ratio of boys to girls in simplest form?', ['2:3','3:2','4:6','1:2'],'Divide both parts by 2: 4:6 = 2:3.'),
  q('Simplify 15:20.', ['3:4','4:3','5:4','1:4'],'Divide both terms by 5 to get 3:4.'),
  q('If 3 notebooks cost GH₵18, what is the cost of 1 notebook at the same rate?', ['GH₵6','GH₵9','GH₵15','GH₵54'],'18 ÷ 3 = GH₵6 per notebook.'),
  q('A recipe for 4 people uses 2 cups of flour. How many cups are needed for 8 people?', ['4','2','6','8'],'The number of people doubles, so double the flour: 4 cups.'),
  q('Which statement describes a rate?', ['60 kilometres per hour','3 red beads to 2 blue beads','5 learners in a group','A triangle has 3 sides'],'A rate compares quantities with different units, such as distance and time.')
 ]
}
];

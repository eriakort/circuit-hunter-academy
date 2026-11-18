import type { ArcInfo, Mission, UnitInfo } from '../types';

/** Ghana NaCCA JHS 3 Mathematics · Handling Data strand. */
export const GHANA_JHS3_DATA_UNIT: UnitInfo = {
  title: 'Data, Statistics and Chance',
  ch: 'JHS 3 · NaCCA Handling Data strand',
  subject: 'ghjhs3math'
};

export const GHANA_JHS3_DATA_ARCS: ArcInfo[] = [
  { n: 10, unit: 0, subject: 'ghjhs3math', title: 'Reliable Data and Grouped Frequency', pages: 'NaCCA CCP · JHS Mathematics · Handling Data' },
  { n: 11, unit: 0, subject: 'ghjhs3math', title: 'Charts, Averages and Statistical Comparison', pages: 'NaCCA CCP · JHS Mathematics · Handling Data' },
  { n: 12, unit: 0, subject: 'ghjhs3math', title: 'Probability, Evidence and Decisions', pages: 'NaCCA CCP · JHS Mathematics · Handling Data' }
];

const q = (prompt: string, answers: string[], explanation: string) => ({ q: prompt, a: answers, why: explanation });
const lesson = (text: string) => ({ who: 's' as const, vis: 'ghmath-data', text });

export const GHANA_JHS3_DATA_MISSIONS: Mission[] = [
  {
    id: 'gh-jhs3-data-collection',
    arc: 0, sec: 'Handling Data', pages: 'NaCCA CCP · JHS Mathematics · Handling Data', hue: 166, horns: 2, eyes: 2,
    title: 'The Data Collection Strategist',
    topic: 'Design fair statistical investigations, select representative samples, and organise raw data into grouped frequency tables.',
    demon: 'The Sampling Saboteur', tech: 'Data Form · Twenty-First Technique: Collect with Integrity',
    scenes: [
      lesson('<p>A statistical investigation begins with a clear question. Decide what information is needed, who or what the population is, and how the data will be collected. A good question is neutral and allows answers to vary.</p>'),
      lesson('<p>A <b>sample</b> is part of a population. A representative sample reflects important features of the whole group. Random selection helps reduce selection bias; choosing only your friends or one class may give an unfair picture.</p>'),
      lesson('<p>Raw data can be organised with tally marks and a frequency table. The frequency is the number of times a value or category occurs. Check that all frequencies add up to the total number of observations.</p>'),
      lesson('<p>When measurements cover a wide range, group them into class intervals such as 10–19, 20–29 and 30–39. Intervals should be clear, non-overlapping and wide enough to organise the data without hiding useful patterns.</p>'),
      { who: 'd', vis: 'demon', text: 'I surveyed only one friendship group and hid some responses in overlapping intervals. Design a fair investigation and organise every result!' },
      { type: 'battle' }
    ],
    quiz: [
      q('What is the population in a statistical investigation?', ['The complete group being studied', 'Only the people selected for the sample', 'The most common answer', 'The number in the frequency column'], 'The population is the entire group the investigation aims to understand.'),
      q('Which method is most likely to reduce selection bias?', ['Randomly selecting learners from all year groups', 'Asking only your closest friends', 'Asking only learners in one sports club', 'Choosing only people who agree with you'], 'Random selection gives members of the population a fair chance of being included.'),
      q('A frequency table records 9, 12 and 7 observations. What is the total?', ['28', '19', '29', '21'], 'Add the frequencies: 9 + 12 + 7 = 28 observations.'),
      q('Why should class intervals not overlap?', ['Each observation should fit into one interval only', 'Every interval must have the same frequency', 'The intervals must contain equal numbers of observations', 'It makes the sample larger'], 'Non-overlapping intervals prevent an observation from being counted twice.'),
      q('Which survey question is most neutral?', ['How many minutes do you usually walk to school?', 'Why is walking obviously the best way to travel?', 'Do you agree that buses are always late?', 'Would you support our excellent new school rule?'], 'A neutral question avoids suggesting which answer is preferred.')
    ]
  },
  {
    id: 'gh-jhs3-data-statistical-displays',
    arc: 1, sec: 'Handling Data', pages: 'NaCCA CCP · JHS Mathematics · Handling Data', hue: 42, horns: 2, eyes: 2,
    title: 'The Statistical Display Architect',
    topic: 'Choose suitable charts, calculate and interpret averages, and compare data sets using measures of centre and spread.',
    demon: 'The Misleading Illustrator', tech: 'Data Form · Twenty-Second Technique: Reveal the Pattern',
    scenes: [
      lesson('<p>A bar chart compares separate categories, while a histogram displays grouped continuous measurements with touching bars. A line graph is useful for change over time. Choose a chart that matches the type of data.</p>'),
      lesson('<p>A pie chart represents a whole as a circle of 360°. To find a sector angle, use (category frequency ÷ total frequency) × 360°. If 15 of 60 learners choose football, its sector is 15/60 × 360° = 90°.</p>'),
      lesson('<p>The <b>mean</b> is the total divided by the number of values. The <b>median</b> is the middle value after ordering the data, and the <b>mode</b> is the most frequent value. The <b>range</b> is maximum minus minimum.</p>'),
      lesson('<p>Compare data sets in context. The mean uses every value but can be affected by an outlier. The median is often more resistant to an extreme value. The range gives a quick measure of spread, but uses only the two extreme values.</p>'),
      { who: 'd', vis: 'demon', text: 'I chose the wrong graph and used one average to hide an unusual result. Select a truthful display and explain what the numbers show!' },
      { type: 'battle' }
    ],
    quiz: [
      q('Which chart is normally used to display grouped continuous data?', ['Histogram', 'Bar chart with separated bars', 'Pictogram', 'Venn diagram'], 'A histogram uses touching bars to represent continuous class intervals.'),
      q('In a pie chart, 20 out of 80 learners choose science. What is the sector angle?', ['90°', '80°', '100°', '45°'], 'The angle is 20/80 × 360° = 90°.' ),
      q('Find the mean of 6, 8, 10 and 12.', ['9', '8', '10', '36'], 'The total is 36 and 36 ÷ 4 = 9.'),
      q('Find the median of 3, 5, 7, 9 and 20.', ['7', '5', '8', '9'], 'The five values are already ordered; the middle value is 7.'),
      q('Which measure is usually less affected by one very large outlier?', ['Median', 'Mean', 'Range', 'Total'], 'The median depends on the middle position and is often less affected by an extreme value.')
    ]
  },
  {
    id: 'gh-jhs3-data-probability',
    arc: 2, sec: 'Handling Data', pages: 'NaCCA CCP · JHS Mathematics · Handling Data', hue: 282, horns: 2, eyes: 2,
    title: 'The Chance and Evidence Detective',
    topic: 'Calculate probabilities for equally likely outcomes, compare experimental and theoretical results, and make evidence-based conclusions.',
    demon: 'The Probability Trickster', tech: 'Data Form · Twenty-Third Technique: Test the Evidence',
    scenes: [
      lesson('<p>Probability measures how likely an event is. It ranges from 0 (impossible) to 1 (certain). For equally likely outcomes, probability = favourable outcomes ÷ total possible outcomes.</p>'),
      lesson('<p>A bag contains 3 red, 2 blue and 5 green counters. There are 10 counters in total, so the probability of choosing blue is 2/10 = 1/5. The probabilities of all possible colours add to 1.</p>'),
      lesson('<p><b>Theoretical probability</b> is calculated from a model of equally likely outcomes. <b>Experimental probability</b> is based on what happens in trials: number of times the event occurs ÷ number of trials.</p>'),
      lesson('<p>Experimental results may differ from theoretical probability, especially in a small number of trials. As the number of fair trials grows, the experimental proportion often gets closer to the theoretical value, but it is not guaranteed to match exactly.</p>'),
      { who: 'd', vis: 'demon', text: 'I claim one short experiment proves a game is unfair. Calculate the probabilities and judge the evidence carefully!' },
      { type: 'battle' }
    ],
    quiz: [
      q('What is the probability of an event that is certain to happen?', ['1', '0', '1/2', '10'], 'A certain event has probability 1.'),
      q('A bag has 4 yellow counters and 6 black counters. What is the probability of choosing yellow?', ['2/5', '3/5', '1/6', '4/6'], 'There are 4 yellow counters out of 10: 4/10 = 2/5.'),
      q('A fair coin is tossed 50 times and lands heads 28 times. What is the experimental probability of heads?', ['28/50', '1/2', '50/28', '22/50'], 'Experimental probability is the number of observed heads divided by the 50 tosses.'),
      q('What is theoretical probability based on?', ['A mathematical model of possible outcomes', 'Only one person’s opinion', 'The colour of a graph', 'The largest observed result'], 'Theoretical probability is calculated from the possible outcomes in a model.'),
      q('Why might experimental probability differ from theoretical probability in a small trial?', ['Random variation can affect the results', 'Theoretical probability is always wrong', 'The sample space changes after every trial', 'A fair event must give equal counts every time'], 'Short experiments can show variation; equal likelihood does not mean equal counts in every small sample.')
    ]
  }
];

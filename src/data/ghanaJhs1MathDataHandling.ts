import type { ArcInfo, Mission, UnitInfo } from '../types';

/** Ghana NaCCA JHS 1 Mathematics · Handling Data strand. */
export const GHANA_JHS1_DATA_UNIT: UnitInfo = {
  title: 'Collecting and Making Sense of Data',
  ch: 'JHS 1 · NaCCA Handling Data strand',
  subject: 'ghjhs1math'
};

export const GHANA_JHS1_DATA_ARCS: ArcInfo[] = [
  { n: 9, unit: 0, subject: 'ghjhs1math', title: 'Collecting and Organising Information', pages: 'NaCCA CCP · JHS Mathematics · Handling Data' },
  { n: 10, unit: 0, subject: 'ghjhs1math', title: 'Tables, Tally Charts and Graphs', pages: 'NaCCA CCP · JHS Mathematics · Handling Data' },
  { n: 11, unit: 0, subject: 'ghjhs1math', title: 'Reading Data and Describing What It Shows', pages: 'NaCCA CCP · JHS Mathematics · Handling Data' }
];

const q = (prompt: string, answers: string[], explanation: string) => ({ q: prompt, a: answers, why: explanation });
const lesson = (text: string) => ({ who: 's' as const, vis: 'ghmath-data', text });

export const GHANA_JHS1_DATA_MISSIONS: Mission[] = [
  {
    id: 'gh-jhs1-data-collect-and-organise',
    arc: 0, sec: 'Handling Data', pages: 'NaCCA CCP · JHS Mathematics · Handling Data', hue: 166, horns: 2, eyes: 2,
    title: 'The Community Survey Quest',
    topic: 'Ask clear statistical questions, collect relevant information, and organise raw data into useful categories.',
    demon: 'The Data Scatterer', tech: 'Data Form · First Technique: Ask, Collect and Sort',
    scenes: [
      lesson('<p><b>Data</b> is information we collect to answer a question. A class might ask, “How do learners travel to school?” The answers could include walking, bus, bicycle or car. A good question is clear and allows us to collect information that helps answer it.</p>'),
      lesson('<p>Data can be collected by asking questions in a survey, observing what happens, measuring, or using records. Decide who you want information from and ask everyone the same clear question. Respect people’s privacy and do not collect names when they are not needed.</p>'),
      lesson('<p><b>Categories</b> help us organise information. If 20 learners name their favourite fruit, sort each answer into a category such as mango, orange, banana or pineapple. Check that every response is counted once and that no response is left out.</p>'),
      lesson('<p>Imagine a school club planning a clean-up. It surveys learners about the area that needs attention most. Organised answers help the club plan with evidence instead of guessing. Always check that the information collected is relevant and fairly gathered.</p>'),
      { who: 'd', vis: 'demon', text: 'I have scattered the survey answers everywhere. Design a clear question and sort the responses to bring order back!' },
      { type: 'battle' }
    ],
    quiz: [
      q('What is data?', ['Information collected to answer a question', 'A shape with four sides', 'A unit of length', 'A mathematical operation'], 'Data is information gathered so that a question can be answered.'),
      q('Which is the clearest survey question?', ['How do you travel to school?', 'Do you like everything?', 'What is the best thing ever?', 'Are you always happy?'], 'A clear, focused question helps collect useful and comparable answers.'),
      q('A learner records the number of rainy days by observing the weather. Which method is used?', ['Observation', 'Guessing', 'Multiplication', 'Drawing a map'], 'The learner watches and records what happens, which is observation.'),
      q('Why should survey answers be sorted into categories?', ['To make patterns easier to see', 'To change the answers', 'To remove all differences', 'To make the data secret'], 'Categories organise responses so we can count and compare them.'),
      q('A survey asks learners for their favourite fruit. Which is a suitable category?', ['Mango', 'Height in metres', 'Mass in kilograms', 'Travel time'], 'Mango is one possible fruit category for the survey.') 
    ]
  },
  {
    id: 'gh-jhs1-data-tables-and-graphs',
    arc: 1, sec: 'Handling Data', pages: 'NaCCA CCP · JHS Mathematics · Handling Data', hue: 42, horns: 2, eyes: 2,
    title: 'The Tally and Graph Workshop',
    topic: 'Use tally marks and frequency tables to count responses, then represent simple data in a bar graph or pictogram.',
    demon: 'The Counting Confuser', tech: 'Data Form · Second Technique: Count and Display',
    scenes: [
      lesson('<p>A <b>tally chart</b> records counts using marks. Make one mark for each response; the fifth mark crosses the first four. Tally marks help you keep track as information is collected, especially when many people answer.</p>'),
      lesson('<p>A <b>frequency table</b> shows each category and how often it occurs. The frequency is the number of times an answer appears. Add the frequencies to check that the total matches the number of responses collected.</p>'),
      lesson('<p>A <b>bar graph</b> uses separate bars to compare categories. Put categories along one axis and frequency along the other. Give the graph a title, label both axes and use a sensible, even scale. Bars should have equal widths and gaps between them.</p>'),
      lesson('<p>A <b>pictogram</b> uses pictures or symbols to represent amounts. Its key explains what each symbol means. For example, if one football symbol represents two learners, three symbols represent six learners. Read the key before counting.</p>'),
      { who: 'd', vis: 'demon', text: 'My tally marks do not match the graph! Check the frequencies, scale and pictogram key to repair the display.' },
      { type: 'battle' }
    ],
    quiz: [
      q('What does the frequency of a category tell you?', ['How many times it occurs', 'Its colour', 'Its position in the alphabet', 'The length of the question'], 'Frequency is the count of how often a category occurs.'),
      q('In a tally chart, how is the fifth mark commonly shown?', ['A diagonal mark across four marks', 'A circle around one mark', 'A dot below the chart', 'A longer line at the top'], 'The fifth tally crosses the group of four to make counting easier.'),
      q('What should a bar graph include?', ['A title and labelled axes', 'Only pictures with no key', 'Unequal bar widths', 'No scale'], 'A title and labelled axes help readers understand what the graph shows.'),
      q('A pictogram key says one star represents 3 learners. What do 4 stars represent?', ['12 learners', '7 learners', '4 learners', '9 learners'], 'Four stars represent 4 × 3 = 12 learners.'),
      q('A frequency table has counts 6, 5 and 4. How many responses were collected?', ['15', '14', '16', '10'], 'Add the frequencies: 6 + 5 + 4 = 15.') 
    ]
  },
  {
    id: 'gh-jhs1-data-interpret-and-summarise',
    arc: 2, sec: 'Handling Data', pages: 'NaCCA CCP · JHS Mathematics · Handling Data', hue: 214, horns: 2, eyes: 2,
    title: 'The Data Detective’s Challenge',
    topic: 'Read tables and graphs, compare values, identify the most and least common results, and describe findings accurately.',
    demon: 'The Misleading Messenger', tech: 'Data Form · Third Technique: Read, Compare and Explain',
    scenes: [
      lesson('<p>When reading a table or graph, first check its title, labels, units and key. Then read the values carefully. Do not guess from the height of a bar alone: use the scale to find the actual number.</p>'),
      lesson('<p>The <b>mode</b> is the value or category that occurs most often. The <b>range</b> is the difference between the greatest and smallest values. For example, in 3, 4, 4, 6, 8 the mode is 4 and the range is 8 − 3 = 5.</p>'),
      lesson('<p>The <b>mean</b> is the total of the values divided by how many values there are. For 2, 4 and 6, the mean is (2 + 4 + 6) ÷ 3 = 4. The <b>median</b> is the middle value after arranging the data in order. For 2, 4 and 9, the median is 4.</p>'),
      lesson('<p>Use evidence when describing a graph: “The bus was the most common way to travel because its bar is highest.” A conclusion should match the information shown. Remember that a survey describes the people who answered; it may not represent everyone in a community.</p>'),
      { who: 'd', vis: 'demon', text: 'I have hidden the story inside the numbers. Find the mode, range and evidence in the graph to expose my misleading claims!' },
      { type: 'battle' }
    ],
    quiz: [
      q('What does the mode tell us?', ['The value or category that occurs most often', 'The total of all values', 'The difference between the largest and smallest values', 'The middle value after sorting'], 'The mode is the most frequently occurring value or category.'),
      q('Find the range of 3, 5, 7 and 9.', ['6', '9', '5', '24'], 'Range = greatest − smallest = 9 − 3 = 6.'),
      q('What is the mean of 2, 4 and 6?', ['4', '3', '6', '12'], 'Mean = (2 + 4 + 6) ÷ 3 = 4.'),
      q('What is the median of 2, 5 and 8?', ['5', '2', '8', '15'], 'The values are already in order, and 5 is the middle value.'),
      q('A bar graph shows that walking has the highest frequency. Which conclusion is supported?', ['Walking is the most common recorded way to travel', 'Everyone in the town walks', 'No one uses a bus', 'The survey included every person'], 'The graph supports a conclusion about the responses recorded, not about everyone.') 
    ]
  }
];

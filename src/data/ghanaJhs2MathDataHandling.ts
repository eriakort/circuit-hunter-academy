import type { ArcInfo, Mission, UnitInfo } from '../types';

/** Ghana NaCCA JHS 2 Mathematics · Handling Data strand. */
export const GHANA_JHS2_DATA_UNIT: UnitInfo = {
  title: 'Data, Statistics and Chance',
  ch: 'JHS 2 · NaCCA Handling Data strand',
  subject: 'ghjhs2math'
};

export const GHANA_JHS2_DATA_ARCS: ArcInfo[] = [
  { n: 7, unit: 0, subject: 'ghjhs2math', title: 'Planning Surveys and Sampling', pages: 'NaCCA CCP · JHS Mathematics · Handling Data' },
  { n: 8, unit: 0, subject: 'ghjhs2math', title: 'Frequency Tables and Data Displays', pages: 'NaCCA CCP · JHS Mathematics · Handling Data' },
  { n: 9, unit: 0, subject: 'ghjhs2math', title: 'Averages and Measures of Spread', pages: 'NaCCA CCP · JHS Mathematics · Handling Data' },
  { n: 10, unit: 0, subject: 'ghjhs2math', title: 'Interpreting Data and Exploring Chance', pages: 'NaCCA CCP · JHS Mathematics · Handling Data' }
];

const q = (prompt: string, answers: string[], explanation: string) => ({ q: prompt, a: answers, why: explanation });
const lesson = (text: string) => ({ who: 's' as const, vis: 'ghmath-data', text });

export const GHANA_JHS2_DATA_MISSIONS: Mission[] = [
  {
    id: 'gh-jhs2-data-surveys-sampling',
    arc: 0, sec: 'Handling Data', pages: 'NaCCA CCP · JHS Mathematics · Handling Data', hue: 166, horns: 2, eyes: 2,
    title: 'The Fair Survey Strategist',
    topic: 'Plan statistical questions, identify a suitable population and sample, and recognise how biased sampling can distort results.',
    demon: 'The Biased Collector', tech: 'Data Form · Eighth Technique: Ask Fairly and Sample Wisely',
    scenes: [
      lesson('<p><b>Statistics</b> helps us collect, organise and interpret information. A statistical question expects answers that can vary, such as “How do learners travel to school?” A question with only one fixed answer is not usually a statistical question.</p>'),
      lesson('<p>The <b>population</b> is the whole group we want to learn about. A <b>sample</b> is the smaller group we actually collect information from. If a school has 600 learners, asking 60 learners can be more practical than asking everyone.</p>'),
      lesson('<p>A useful sample should represent the population fairly. Choosing only learners from the football team to ask about everyone’s favourite sport may create bias. A random sample gives members of the population a fair chance of being selected.</p>'),
      lesson('<p>Before a survey, make the question clear, decide who should answer, and collect only information needed for the purpose. Record answers consistently and protect people’s privacy. A larger sample is not automatically fair if it is chosen in a biased way.</p>'),
      { who: 'd', vis: 'demon', text: 'My survey only asks my friends, but I claim it represents the whole school. Choose a fair sample and expose the bias!' },
      { type: 'battle' }
    ],
    quiz: [
      q('What is a population in a statistical investigation?', ['The whole group being studied', 'Only the people who answer first', 'The largest number in a table', 'A type of graph'], 'The population is the complete group the investigation is about.'),
      q('A school has 500 learners. The investigator asks 50 learners. What are the 50 learners?', ['A sample', 'The population', 'A frequency', 'A conclusion'], 'A sample is a selected part of the population.'),
      q('Which sample is most likely to be biased when studying all learners’ favourite sports?', ['Only members of the football team', 'Learners selected randomly from all classes', 'Learners selected from different year groups', 'A fair selection across the school'], 'Football team members may be more likely to prefer football than the wider school population.'),
      q('Which is a statistical question?', ['How many hours do learners sleep on school nights?', 'What is 8 × 7?', 'How many sides has a square?', 'What is the name of this school?'], 'Sleep hours can vary between learners, so the question expects a range of data.'),
      q('Why should a survey question be clear and neutral?', ['To avoid confusing or leading respondents', 'To make everyone give the same answer', 'To hide the purpose of the survey', 'To remove all variation'], 'Clear, neutral wording helps collect reliable answers without pushing people toward a response.')
    ]
  },
  {
    id: 'gh-jhs2-data-frequency-displays',
    arc: 1, sec: 'Handling Data', pages: 'NaCCA CCP · JHS Mathematics · Handling Data', hue: 42, horns: 2, eyes: 2,
    title: 'The Frequency Table Workshop',
    topic: 'Organise discrete and grouped data in frequency tables and choose suitable charts to display patterns clearly.',
    demon: 'The Table Tangle', tech: 'Data Form · Ninth Technique: Group, Count and Display',
    scenes: [
      lesson('<p>A <b>frequency</b> tells how many times a value or category occurs. A frequency table lists the values or categories and their counts. Add the frequencies to check that the total equals the number of observations.</p>'),
      lesson('<p>For many different values, data can be grouped into <b>class intervals</b>. For example, learners’ journey times might be grouped as 0–9, 10–19 and 20–29 minutes. Intervals should not overlap, and every observation should fit into one interval.</p>'),
      lesson('<p>A bar chart compares separate categories or discrete values. A histogram displays grouped continuous data: its bars touch because the intervals are connected. Label the axes, include units where needed and use an even scale.</p>'),
      lesson('<p>Choose a display that suits the data. A line graph can show how a measurement changes over time, while a pie chart shows how a whole is divided into categories. A chart should make the information easier to understand, not hide it.</p>'),
      { who: 'd', vis: 'demon', text: 'I have mixed up class intervals and chart types. Sort the values and choose a display that tells the truth!' },
      { type: 'battle' }
    ],
    quiz: [
      q('What does frequency mean?', ['The number of times a value or category occurs', 'The largest value in a data set', 'The title of a graph', 'The number of questions in a survey'], 'Frequency is the count for a value or category.'),
      q('A table has frequencies 8, 7 and 5. How many observations are there?', ['20', '19', '21', '15'], 'Add the frequencies: 8 + 7 + 5 = 20.'),
      q('Which display is normally used for grouped continuous data?', ['Histogram', 'Pictogram', 'Venn diagram', 'Tree diagram'], 'A histogram represents grouped continuous data with touching bars.'),
      q('Why should class intervals not overlap?', ['Each observation must belong to one clear interval', 'Every interval must have the same frequency', 'The intervals must all begin at zero', 'It makes the sample larger'], 'Non-overlapping intervals prevent an observation from being counted in two groups.'),
      q('Which graph is especially useful for showing a value changing over several days?', ['Line graph', 'Pictogram only', 'Venn diagram', 'Tally chart only'], 'A line graph makes changes and trends over time easier to see.')
    ]
  },
  {
    id: 'gh-jhs2-data-averages-spread',
    arc: 2, sec: 'Handling Data', pages: 'NaCCA CCP · JHS Mathematics · Handling Data', hue: 214, horns: 2, eyes: 2,
    title: 'The Average and Range Arena',
    topic: 'Calculate and interpret mean, median, mode and range, and understand how unusual values affect summaries.',
    demon: 'The Average Distorter', tech: 'Data Form · Tenth Technique: Summarise the Centre',
    scenes: [
      lesson('<p>The <b>mean</b> is the total of all values divided by the number of values. For 4, 6, 8 and 10, the mean is (4 + 6 + 8 + 10) ÷ 4 = 7. The mean uses every value in the data set.</p>'),
      lesson('<p>To find the <b>median</b>, arrange the values from smallest to largest. The middle value is the median. If there are two middle values, find their mean. For 2, 5, 7, 9 the median is (5 + 7) ÷ 2 = 6.</p>'),
      lesson('<p>The <b>mode</b> is the value that occurs most often. A data set can have one mode, more than one mode, or no mode. The <b>range</b> is the largest value minus the smallest value.</p>'),
      lesson('<p>An unusually large or small value is an <b>outlier</b>. It can pull the mean up or down, while the median is often less affected. Choose a summary that suits the data and explain what it tells you in context.</p>'),
      { who: 'd', vis: 'demon', text: 'I claim one extreme score tells the whole story. Calculate the summaries and decide which one describes the group fairly!' },
      { type: 'battle' }
    ],
    quiz: [
      q('Find the mean of 3, 5, 7 and 9.', ['6', '5', '7', '24'], 'The total is 24 and 24 ÷ 4 = 6.'),
      q('What is the median of 2, 4, 8, 10 and 12?', ['8', '4', '6', '10'], 'The values are ordered and 8 is the middle value.'),
      q('Find the mode of 4, 6, 6, 7 and 9.', ['6', '4', '7', '9'], 'Six occurs more often than any other value.'),
      q('What is the range of 12, 5, 9 and 16?', ['11', '9', '16', '37'], 'Range = 16 − 5 = 11.'),
      q('Which measure is often less affected by one extremely high value?', ['Median', 'Mean', 'Range', 'Sum'], 'The median depends on the middle position, so one extreme value often has less effect on it than on the mean.')
    ]
  },
  {
    id: 'gh-jhs2-data-interpret-chance',
    arc: 3, sec: 'Handling Data', pages: 'NaCCA CCP · JHS Mathematics · Handling Data', hue: 282, horns: 2, eyes: 2,
    title: 'The Evidence and Chance Detective',
    topic: 'Draw careful conclusions from tables and charts, recognise misleading displays, and describe simple probabilities.',
    demon: 'The Misleading Headline', tech: 'Data Form · Eleventh Technique: Interpret with Evidence',
    scenes: [
      lesson('<p>When interpreting a chart, read its title, labels, units, scale and key first. Compare the actual values before making a claim. A conclusion should describe what the collected data supports, not what we wish it showed.</p>'),
      lesson('<p>A graph can mislead if its scale starts at an unusual value, its intervals are uneven, or its labels are missing. Always check the scale. Two bars that look very different may represent only a small difference in the actual numbers.</p>'),
      lesson('<p><b>Probability</b> describes how likely an event is. It ranges from 0 (impossible) to 1 (certain). An event with probability one-half is equally likely to happen or not happen. Probability can also be written as a fraction, decimal or percentage.</p>'),
      lesson('<p>For equally likely outcomes, probability = number of favourable outcomes ÷ total number of possible outcomes. A fair six-sided die has one 4, so the probability of rolling a 4 is 1/6. The probabilities of all possible outcomes add to 1.</p>'),
      { who: 'd', vis: 'demon', text: 'My headline exaggerates a tiny difference, and my dice predictions ignore the possible outcomes. Check the evidence and calculate the chance!' },
      { type: 'battle' }
    ],
    quiz: [
      q('What should you check before interpreting a graph?', ['Title, labels, units and scale', 'Only the colour of the bars', 'The longest word in the title', 'The page number'], 'These features explain what is measured and how values are represented.'),
      q('A graph starts its vertical axis at 90 instead of 0. What should a reader do?', ['Check carefully because the scale may exaggerate differences', 'Assume the bars are incorrect', 'Ignore all labels', 'Add 90 to every category'], 'A shortened axis can make small differences look much larger.'),
      q('What is the probability of an impossible event?', ['0', '1', '1/2', '100'], 'An impossible event has probability zero.'),
      q('A fair six-sided die is rolled. What is the probability of getting an even number?', ['1/2', '1/6', '2/3', '1'], 'There are three even outcomes (2, 4, 6) out of six: 3/6 = 1/2.'),
      q('What is the probability of getting a number greater than 6 on a standard six-sided die?', ['0', '1', '1/6', '1/2'], 'No face on a standard die is greater than 6, so the event is impossible.')
    ]
  }
];

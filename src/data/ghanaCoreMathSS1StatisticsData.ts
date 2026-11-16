import type { ArcInfo, Mission } from '../types';

export const GHANA_SS1_STATISTICS_ARCS: ArcInfo[] = [
  {
    n: 10,
    unit: 0,
    subject: 'ghcoremath',
    title: 'Statistical Reasoning and Data Collection',
    pages: 'NaCCA SHS 1 · pp. 126–133'
  }
];

const lesson = (text: string) => ({ who: 's' as const, vis: 'infowords', text });
const question = (q: string, a: string[], why: string) => ({ q, a, why });

export const GHANA_SS1_STATISTICS_MISSIONS: Mission[] = [
  {
    id: 'gh-core-ss1-statistical-reasoning-data-types',
    arc: 0,
    sec: 'Making sense of and using data',
    pages: 'NaCCA SHS 1 · pp. 126–133',
    hue: 32,
    horns: 2,
    eyes: 2,
    title: 'The Data Detective',
    topic: 'Classify data by source, type and organisation, then choose and justify suitable methods for collecting real-world data.',
    demon: 'The Data Distorter',
    tech: 'Data Form · Tenth Technique: Evidence Sorting',
    scenes: [
      lesson('<p>Statistics begins with good questions and trustworthy data. Data are facts or measurements collected to answer a question. Before analysing them, ask: where did the data come from, what kind of values are they, and how are they organised?</p>'),
      lesson('<p><b>Primary data</b> are collected first-hand by you for the question you are investigating. You might ask classmates a survey question, interview a market trader, observe traffic near school, or carry out an experiment. <b>Secondary data</b> were collected earlier by someone else, such as figures in a published report, textbook, newspaper or official dataset.</p>'),
      lesson('<p><b>Quantitative data</b> are numerical counts or measurements. <b>Discrete data</b> are countable values, usually whole-number counts: for example, the number of learners absent today. <b>Continuous data</b> are measurements that can take any value within a range: for example, a learner’s height, the temperature at noon or the time taken to reach school.</p>'),
      lesson('<p><b>Qualitative data</b> describe categories or qualities. <b>Nominal data</b> have categories with no natural order, such as a learner’s house colour or preferred language. <b>Ordinal data</b> have categories that can be ranked, such as a service rating of poor, fair, good or excellent. The labels are categories, not measurements of equal steps.</p>'),
      lesson('<p>Data can also be described as <b>numerical</b> or <b>categorical</b>. Numerical data are numbers representing counts or measurements. Categorical data place observations into groups, such as transport type or class group. A data set may be <b>ungrouped</b> when individual values are listed, or <b>grouped</b> when values are summarised into categories or intervals, such as height bands of 150–159 cm and 160–169 cm.</p>'),
      lesson('<p>Choose a collection method that fits the question. A survey can gather many learners’ preferred transport types; an interview can explore why a trader chooses a selling location; observation can count vehicles passing a junction; and an experiment can compare how quickly two materials absorb water. Use existing reports or records when secondary data are suitable. Ask clear, neutral questions, respect privacy, and record units and dates accurately.</p>'),
      lesson('<p><b>Investigation example:</b> “How do learners travel to school?” You could ask each learner one neutral survey question and record one category per response. This is primary, qualitative, nominal, categorical and ungrouped data if you list each response. If you instead use a published transport report, your source is secondary. If you count the number of learners using each transport type, those totals are quantitative discrete data.</p>'),
      { who: 'd', vis: 'demon', text: 'I will mix up counts, measurements, categories and sources. You will never know what your evidence means!' },
      { type: 'battle' }
    ],
    quiz: [
      question('A learner asks classmates how they travel to school and records their answers. What is the source of this data?', [
        'Primary data', 'Secondary data', 'Continuous data only', 'Grouped data only'
      ], 'The learner collects the answers first-hand for the investigation, so the data are primary. The response categories are qualitative and nominal.'),
      question('Which is an example of continuous quantitative data?', [
        'The height of a learner', 'The number of learners in a class', 'The colour of a school uniform', 'The name of a house'
      ], 'Height is measured and can take decimal values within a range. A class size is a count and is discrete.'),
      question('A customer rates a service as poor, fair, good or excellent. What type of qualitative data is this?', [
        'Ordinal', 'Nominal', 'Continuous', 'Discrete'
      ], 'The categories have a meaningful order from poor to excellent, so the data are ordinal.'),
      question('A school wants to count how many vehicles pass its gate in 20 minutes. Which method is most suitable?', [
        'Direct observation and tallying', 'An interview with one driver', 'A textbook search only', 'An experiment changing the traffic lights'
      ], 'Direct observation with a tally records the actual number of vehicles passing during the specified time.')
    ]
  }
];

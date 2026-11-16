import type { ArcInfo, Mission } from '../types';

export const GHANA_SS1_STATISTICS_ARCS: ArcInfo[] = [
  {
    n: 11,
    unit: 0,
    subject: 'ghcoremath',
    title: 'Statistical Reasoning: Collecting Reliable Data',
    pages: 'NaCCA SHS 1 · pp. 126–134'
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
,
  {
    id: 'gh-core-ss1-statistical-data-collection-methods',
    arc: 0,
    sec: 'Making sense of and using data',
    pages: 'NaCCA SHS 1 · pp. 133–134',
    hue: 194,
    horns: 2,
    eyes: 2,
    title: 'The Evidence Expedition',
    topic: 'Choose, evaluate and use appropriate quantitative and qualitative data collection methods for everyday investigations.',
    demon: 'The Biased Collector',
    tech: 'Data Form · Eleventh Technique: Reliable Evidence',
    scenes: [
      lesson('<p>A good investigation starts with a clear question. The method you choose must collect the kind of information you need. A question asking “How many learners use the school bus?” needs a numerical count. A question asking “Why do learners prefer one route?” needs explanations and experiences.</p>'),
      lesson('<p><b>Quantitative methods</b> collect numerical information. A survey or questionnaire can ask every learner how many days they were absent last month. An interview can ask for a number using a consistent question. Observation can count how many vehicles pass a junction in ten minutes. Existing records, such as an attendance register, can provide useful secondary numerical data. A probability-based method can help select a fair sample rather than choosing only friends.</p>'),
      lesson('<p><b>Qualitative methods</b> collect descriptions, opinions, experiences and reasons. Interviews allow people to explain their views. Observation can record how people behave in a setting. Focus groups bring a small group together to discuss a topic. Oral histories record people’s memories and experiences. Online tracking or social-media monitoring can reveal patterns in public online activity, but it must respect privacy, consent, platform rules and data protection.</p>'),
      lesson('<p><b>Validate the method before using it.</b> Does it answer the research question? Does it reach the right people? Are the questions clear and neutral? Can the information be recorded accurately? Is the sample large and varied enough for the conclusion you want to make? Is the method safe, fair and respectful? A leading question such as “You agree our canteen is the best, right?” can bias responses. A neutral question is “How would you rate the canteen service?”</p>'),
      lesson('<p><b>Choose the right tool:</b> To count learners’ daily travel times, use a consistent questionnaire or time record and collect numerical values. To understand why learners feel a route is unsafe, use interviews or a focus group. To count vehicles, observe and tally them. To understand a community’s past experiences, oral histories may be appropriate. One investigation can combine methods when each answers a different part of the question.</p>'),
      lesson('<p><b>Mini investigation:</b> A school wants to improve access to its library. First, count how many learners visit each day using a tally or library register (quantitative). Then interview a varied group of learners about barriers to visiting (qualitative). Explain who was included, when data were collected, and any limits. Do not claim that a small convenience sample represents every learner.</p>'),
      lesson('<p><b>Ethical evidence matters.</b> Explain why you are collecting information, ask permission when needed, avoid collecting unnecessary personal details, keep responses secure, and report findings honestly. Never invent missing answers or change results to support a preferred conclusion.</p>'),
      { who: 'd', vis: 'demon', text: 'I will lead you to ask biased questions, choose only your friends, and trust evidence that does not answer your question!' },
      { type: 'battle' }
    ],
    quiz: [
      question('A school wants to know how many learners arrive by trotro each morning. Which method is most suitable?', [
        'A structured survey with a numerical count', 'An oral history about childhood memories', 'A focus group about favourite music', 'A social-media discussion about school uniforms'
      ], 'A structured survey can collect a count from learners using a consistent question. The result is quantitative data.'),
      question('A researcher wants to understand why learners feel unsafe on a route to school. Which method is most suitable?', [
        'Interviews with open questions', 'Counting vehicles only', 'Using a calculator to find an average', 'Copying an unrelated attendance register'
      ], 'Open interviews let learners describe their experiences and reasons, producing qualitative data relevant to the question.'),
      question('Which question is least biased?', [
        'How would you rate the library opening hours?', 'You agree the library closes too early, right?', 'Why is the library always badly managed?', 'Do you admit the library is not useful?'
      ], 'The first question is neutral. The other options suggest a preferred answer or make an unfair assumption.'),
      question('A learner selects only their five closest friends for a survey and then claims the results represent the whole school. What is the main problem?', [
        'The sample may be biased and unrepresentative', 'The data must be continuous', 'The survey automatically becomes secondary data', 'The answers cannot be qualitative'
      ], 'Choosing only close friends is a convenience sample that may leave out other views. Conclusions should match the limits of the sample.')
    ]
  }

];

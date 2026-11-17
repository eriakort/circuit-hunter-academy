import type { ArcInfo, Mission } from '../types';
import { createGhanaSS1IndicatorLearning, GHANA_SS1_STATISTICAL_INDICATOR_IDS } from './ghanaCoreMathSS1StructuredLearning';

export const GHANA_SS1_STATISTICS_ARCS: ArcInfo[] = [
  {
    n: 11,
    unit: 0,
    subject: 'ghcoremath',
    title: 'Statistical Reasoning: From Evidence to Action',
    pages: 'NaCCA SHS 1 · pp. 126–147'
  }
];

const lesson = (text: string) => ({ who: 's' as const, vis: 'ghmath', text });
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
,
  {
    id: 'gh-core-ss1-statistical-data-organisation-presentation',
    arc: 0,
    sec: 'Making sense of and using data',
    pages: 'NaCCA SHS 1 · pp. 135–138',
    hue: 248,
    horns: 2,
    eyes: 2,
    title: 'The Data Display Studio',
    topic: 'Organise grouped and ungrouped data in frequency tables and present findings with suitable graphs, charts and infographics.',
    demon: 'The Misleading Graph Maker',
    tech: 'Data Form · Twelfth Technique: Clear Presentation',
    scenes: [
      lesson('<p>Once data have been collected, organise them before drawing conclusions. <b>Ungrouped data</b> show individual values or responses. <b>Grouped data</b> combine values into categories or class intervals. A frequency table tells you how often each value or group occurs.</p>'),
      lesson('<p><b>Build a frequency table:</b> Suppose 12 learners report how they travel to school: walk, trotro, walk, bus, trotro, walk, bus, walk, trotro, walk, bus, trotro. Tally each response, then count the tallies. The frequencies are walk = 5, trotro = 4 and bus = 3. Check that 5 + 4 + 3 = 12, the number of responses.</p>'),
      lesson('<p><b>Choose a suitable display.</b> A line graph is useful for change over time, such as daily library visits during a school week. A pie chart shows how a whole is divided into categories; each sector angle is its fraction of the total multiplied by 360°. A multiple bar graph compares two or more related groups, such as boys’ and girls’ choices across sports. An infographic combines key numbers with concise labels and visuals.</p>'),
      lesson('<p><b>Grouped data:</b> If you record the heights of many learners, you can organise the measurements into class intervals such as 140–149 cm, 150–159 cm and 160–169 cm, then record each interval’s frequency. Use equal, non-overlapping intervals and make sure every observation is counted once. Do not confuse the interval with its frequency.</p>'),
      lesson('<p><b>Digital presentation:</b> Spreadsheet and graphing tools can create line graphs, pie charts, multiple bar graphs, infographics and, where appropriate, 3D graphs or charts. A 3D effect does not make data more accurate. Check labels, scales, units, titles and source notes; avoid visual effects that hide differences or exaggerate values.</p>'),
      lesson('<p><b>Investigation example:</b> A school records the number of learners visiting its library from Monday to Friday. Put the days on the horizontal axis and the daily totals on the vertical axis, then join the plotted points to make a line graph. If you want to compare visits by year group, use a multiple bar graph with a separate bar for each group on each day. State what the graph shows and avoid claiming that it explains why the pattern occurred.</p>'),
      { type: 'dataviz' },
      { who: 'd', vis: 'demon', text: 'I will hide totals, distort scales and dress weak evidence in flashy charts. Can you make the data clear?' },
      { type: 'battle' }
    ],
    quiz: [
      question('A class records the transport choices of 20 learners. Which display is best for showing how many chose each category?', [
        'A frequency table or bar chart', 'A line graph showing change over time', 'A map with no counts', 'A paragraph with no totals'
      ], 'A frequency table or bar chart shows the count in each category clearly.'),
      question('A school wants to show how library visits change from Monday to Friday. Which graph is most suitable?', [
        'A line graph', 'A pie chart with no time order', 'A Venn diagram', 'A single number with no labels'
      ], 'A line graph is suitable for showing how a quantity changes over an ordered time period.'),
      question('A pie chart represents 30 learners, and 10 chose football. What angle should the football sector have?', [
        '120°', '30°', '90°', '180°'
      ], 'The fraction is 10/30. Its sector angle is (10/30) × 360° = 120°.'),
      question('What is an important check when creating a graph with digital technology?', [
        'Use a clear title, labelled axes and an honest scale', 'Remove units so the graph looks simpler', 'Choose a 3D effect even when it hides values', 'Change the scale to make a small difference look large'
      ], 'A clear title, labels, units and an honest scale help readers interpret the data without being misled.')
    ]
  }
,
  {
    id: 'gh-core-ss1-school-community-data-project',
    arc: 0,
    sec: 'Making sense of and using data',
    pages: 'NaCCA SHS 1 · p. 147',
    hue: 142,
    horns: 2,
    eyes: 2,
    title: 'The School Insight Project',
    topic: 'Plan and carry out a team investigation using school-community data, analyse quantitative and qualitative evidence, make recommendations and present a responsible project report.',
    demon: 'The Conclusion Thief',
    tech: 'Data Form · Thirteenth Technique: Evidence into Action',
    scenes: [
      lesson('<p><b>A real project begins with a useful question.</b> Choose an issue that matters to your school community and can be investigated safely and fairly. Examples include library access, student transport, access to sports facilities or ways to reduce litter. Make the question specific, answerable and neutral. Refine it with your team before collecting information.</p>'),
      lesson('<p><b>Plan as a team.</b> Agree on the purpose, the people or records you need, the collection methods, the timeline and each person’s role. Decide whether you need quantitative evidence (counts, ratings or measurements), qualitative evidence (reasons and experiences), or both. Explain why each method fits the question. A short questionnaire can collect comparable responses; interviews can explore reasons; observation can record what happens in a setting; suitable school records can provide existing data with permission.</p>'),
      lesson('<p><b>Choose a fair sample.</b> Identify the group your question is about, then decide how to select participants. A random or appropriately stratified sample can help represent different year groups; a convenience sample of only your friends may be biased. State the sample size, how people were selected and what limits this places on your conclusions. Do not claim that a small sample represents everyone.</p>'),
      lesson('<p><b>Collect responsibly.</b> Explain the purpose, obtain the required permission and follow your school’s safeguarding procedures. Participation should be voluntary where appropriate. Do not collect names or sensitive details unless genuinely necessary and authorised. Keep records secure, report results in a way that does not identify individuals, and never invent, alter or selectively hide responses. If you cannot obtain permission for a record or interview, choose another method.</p>'),
      lesson('<p><b>Analyse both kinds of evidence.</b> Check entries for errors and missing values. For quantitative data, organise counts and responses in frequency tables, calculate useful totals or percentages, and select a clear graph such as a bar chart, line graph or pie chart. For qualitative data, group similar comments into themes, keep the meaning of responses and include short anonymous examples only when permitted. Compare the two forms of evidence where they help answer the same question.</p>'),
      lesson('<p><b>Interpret, do not overclaim.</b> Describe the main patterns and differences, connect each conclusion to evidence, and consider other possible explanations. Mention limitations such as a small sample, unanswered questions or a short collection period. A graph can show what happened; it does not automatically explain why it happened. Separate observed results from your team’s interpretation.</p>'),
      lesson('<p><b>Make useful recommendations.</b> Each recommendation should follow from a finding, be realistic for the school and identify a possible next step. For example, if a properly sampled survey and interviews show that library opening hours are a barrier, your team might recommend a supervised trial of revised hours and a follow-up review. Do not recommend a solution that your evidence does not support.</p>'),
      lesson('<p><b>Present and share the report.</b> Include the project question, purpose, team roles, methods, sample, findings, tables/graphs, interpretation, limitations, conclusions and recommendations. Present to your class or a school forum using slides, an infographic, a document or a clear poster. Publish only an approved, anonymised summary through an authorised school magazine, notice board or school platform. Ask a teacher or school leader to approve publication first.</p>'),
      { who: 'd', vis: 'demon', text: 'I will turn a handful of opinions into sweeping claims, hide the limits and publish private details. Can your team protect the evidence and make a sound recommendation?' },
      { type: 'battle' }
    ],
    quiz: [
      question('A team wants to understand why learners do not use the school library. Which plan gives useful evidence?', [
        'Survey a varied sample and interview some learners about their reasons', 'Ask only the team members and assume everyone agrees', 'Copy figures from an unrelated website', 'Choose a conclusion before collecting any data'
      ], 'A varied sample gives broader quantitative evidence, while interviews can explain learners’ experiences. The team must still describe its sample and limitations.'),
      question('A team surveys only its five closest friends, then claims the whole school has the same opinion. What should it do?', [
        'Acknowledge the convenience-sample bias and improve the sample', 'Present the result as a school-wide fact', 'Delete responses that disagree', 'Change the question after seeing the answers'
      ], 'A convenience sample of close friends may not represent the school. The team should use a more suitable sampling plan or limit its claim.'),
      question('Which practice is most appropriate when collecting information from classmates?', [
        'Explain the purpose, follow school permission rules and protect identities', 'Publish names with every response', 'Collect sensitive details even when they are unnecessary', 'Share raw responses publicly without approval'
      ], 'Responsible research follows safeguarding and permission requirements, minimises personal data and protects participants’ identities.'),
      question('What should a project recommendation be based on?', [
        'Findings and conclusions supported by the collected evidence', 'The team’s favourite idea, regardless of results', 'A dramatic claim that attracts attention', 'A graph with missing labels and no source'
      ], 'Recommendations should follow logically from evidence and acknowledge the limits of the investigation.')
    ]
  }
,
  {
    id: 'gh-core-ss1-statistical-investigation-mastery',
    arc: 0,
    sec: 'Making sense of and using data',
    pages: 'NaCCA SHS 1 · pp. 126–147 · Integrated statistical investigation',
    hue: 18,
    horns: 2,
    eyes: 2,
    title: 'The Community Data Lab',
    topic: 'Complete an end-to-end statistical investigation: refine a question, select and classify data, collect responsibly, organise and display results, interpret descriptive statistics, and communicate justified conclusions.',
    demon: 'The Evidence Illusionist',
    learning: createGhanaSS1IndicatorLearning({
      conceptIds: GHANA_SS1_STATISTICAL_INDICATOR_IDS,
      assessmentTitle: [
        'Community Data Lab · Eight-Indicator Mastery Trial',
        'Community Data Lab · Eight-Indicator Mastery Trial'
      ],
      assessmentInstructions: [
        'Answer one question for each of the eight SHS 1 Statistical Reasoning indicators. You need at least 80% to unlock the final battle. Each retry switches to the alternate question form for every indicator.',
        'Answer one question for each of the eight SHS 1 Statistical Reasoning indicators. You need at least 80% to unlock the final battle. Each retry switches to the alternate question form for every indicator.'
      ],
      prerequisites: [
        [
          'Review data types, collection methods, frequency tables, graphs and averages in the lesson scenes.',
          'Review data types, collection methods, frequency tables, graphs and averages in the lesson scenes.'
        ]
      ],
      summary: [
        [
          'A trustworthy investigation moves from a clear question to fair sampling, ethical collection, accurate organisation and evidence-based conclusions.',
          'A trustworthy investigation moves from a clear question to fair sampling, ethical collection, accurate organisation and evidence-based conclusions.'
        ],
        [
          'Choose tables, graphs and descriptive measures that fit the question. Explain unusual values and the limits of the sample instead of hiding inconvenient evidence.',
          'Choose tables, graphs and descriptive measures that fit the question. Explain unusual values and the limits of the sample instead of hiding inconvenient evidence.'
        ]
      ],
      techniqueUnlock: {
        id: 'ghana-ss1-evidence-into-action',
        name: ['Evidence into Action', 'Evidence into Action'],
        description: [
          'You can plan, analyse and communicate a school-community investigation while explaining its evidence and limitations.',
          'You can plan, analyse and communicate a school-community investigation while explaining its evidence and limitations.'
        ],
        xpReward: 20
      }
    }),
    tech: 'Data Form · Final Technique: Investigate, Interpret and Communicate',
    scenes: [
      lesson('<p><b>Welcome to the Community Data Lab.</b> Statistics is a process, not just a calculation. A trustworthy investigation begins with a clear question, gathers suitable evidence, organises it carefully, chooses an appropriate analysis and explains what the results can—and cannot—tell us.</p>'),
      lesson('<p><b>Step 1 — refine the question.</b> “Is transport good?” is too broad. “How long does it take a sample of SHS 1 learners to travel to school on a typical morning?” is more precise. Decide who or what you are studying, what you will measure, where and when you will collect data, and how the answer will be used.</p>'),
      lesson('<p><b>Step 2 — choose and classify data.</b> A short questionnaire or time diary can collect quantitative travel-time measurements. Interviews can add qualitative explanations about delays. First-hand responses are primary data; an existing approved transport report is secondary data. Travel time is quantitative, continuous and numerical. A transport category such as walking or trotro is qualitative, nominal and categorical. State whether values are grouped or ungrouped.</p>'),
      lesson('<p><b>Step 3 — plan a fair and ethical collection.</b> Define the population, choose a sample that includes relevant groups, and explain how participants are selected. A random or stratified sample is usually more defensible than asking only friends. Use neutral questions, consistent units and a clear collection period. Follow school permission and safeguarding rules, minimise personal information, protect responses and never fabricate missing values.</p>'),
      lesson('<p><b>Step 4 — organise the evidence.</b> Check the entries, note missing values and create a frequency table. For example, the travel times 10, 11, 12, 12, 14, 15, 15, 16, 18 and 42 minutes can be grouped into intervals. Make intervals clear and non-overlapping, count each observation once, and check that the frequencies add to the number of valid observations.</p>'),
      lesson('<p><b>Step 5 — choose a display that answers the question.</b> A frequency table or bar chart compares categories or intervals. A line graph shows change over time. A pie chart shows how a whole is divided into categories, while a multiple bar graph compares related groups. An infographic can communicate key findings. Always include a title, labels, units, source and honest scale; a decorative 3D effect must not distort the values.</p>'),
      lesson('<p><b>Step 6 — describe the centre.</b> For the ten travel times 10, 11, 12, 12, 14, 15, 15, 16, 18 and 42 minutes, the mean is 165 ÷ 10 = 16.5 minutes. The ordered middle pair is 14 and 15, so the median is 14.5 minutes. The modes are 12 and 15 because both occur twice. A data set can have more than one mode.</p>'),
      lesson('<p><b>Step 7 — examine spread and unusual values.</b> The range is maximum minus minimum: 42 − 10 = 32 minutes. The 42-minute journey is much larger than the other values and may be an outlier. It pulls the mean upward, while the median is less affected. Do not delete an unusual value just because it changes the answer: check whether it is an error, keep valid observations, and explain how it affects interpretation.</p>'),
      lesson('<p><b>Step 8 — infer carefully.</b> The sample suggests that many of these learners travel in about 12–18 minutes, but a small or biased sample cannot establish the travel time of every learner. Describe patterns, compare groups only when the method supports it, consider other explanations and state limitations such as sample size, non-response or the collection period. Association does not automatically prove cause.</p>'),
      lesson('<p><b>Step 9 — communicate and recommend.</b> Present the question, population and sample, methods, frequency table or graph, descriptive statistics, interpretation, limitations, conclusion and recommendations. Every recommendation must follow from evidence. Share only an approved, anonymised summary; protect raw responses and participants’ identities. A good report lets another reader understand how the conclusion was reached.</p>'),
      { who: 'd', vis: 'demon', text: 'I can make one unusual journey represent an entire school, hide the sample and turn a graph into a false promise. Can you defend every conclusion with evidence?' },
      { type: 'battle' }
    ],
    quiz: [
      question('A team wants to estimate the typical morning travel time of SHS 1 learners. Which question is the most precise?', ['How long does a sample of SHS 1 learners take to travel to school on a typical morning?', 'Is transport good?', 'Which transport is the best?', 'Why is every journey difficult?'], 'The first question defines the group, the measurement and the time context, making it answerable with data.'),
      question('A learner records the travel time in minutes reported by classmates. What type of data is travel time?', ['Quantitative and continuous', 'Qualitative and nominal', 'Qualitative and ordinal', 'Secondary and categorical'], 'Travel time is a numerical measurement that can take values within a range, including decimal values.'),
      question('A team asks only its close friends and claims the results represent every learner in the school. What is the main weakness?', ['The sample may be biased and unrepresentative', 'The data automatically become secondary', 'The results cannot be organised in a table', 'The mean cannot be calculated'], 'A convenience sample of close friends may exclude other groups. The conclusion must reflect the sample limitations.'),
      question('For the values 10, 11, 12, 12, 14, 15, 15, 16, 18 and 42 minutes, what is the mean?', ['16.5 minutes', '14.5 minutes', '15 minutes', '32 minutes'], 'The total is 165 minutes. Divide by 10 observations: the mean is 16.5 minutes.'),
      question('What is the median of 10, 11, 12, 12, 14, 15, 15, 16, 18 and 42?', ['14.5', '15', '16.5', '12'], 'There are ten ordered values, so take the average of the fifth and sixth: (14 + 15) ÷ 2 = 14.5.'),
      question('Which statement about the value 42 in this data set is most reasonable?', ['It is an unusually high value that raises the mean; investigate it before deciding how to report it.', 'It must be deleted because it is inconvenient.', 'It proves every learner travels for 42 minutes.', 'It changes the median to 42.'], 'The value is much higher than the others and raises the mean. Check whether it is valid and explain its influence rather than deleting it automatically.'),
      question('A school wants to show how library visits change from Monday to Friday. Which display is most suitable?', ['A line graph', 'A pie chart with no time order', 'A Venn diagram', 'An unlabeled 3D picture'], 'A line graph is suitable for showing change over an ordered time period.'),
      question('Which conclusion is responsible when a small sample reports that many learners travel in 12–18 minutes?', ['In this sample, many reported journeys were 12–18 minutes; a broader, fairer sample is needed before generalising to the whole school.', 'Every learner in the school travels in 12–18 minutes.', 'The sample proves the transport system causes delays.', 'The result should be published with participants’ names.'], 'The conclusion describes what the sample shows, avoids unsupported generalisation and recognises the need for a more representative sample.')
    ]
  }

];
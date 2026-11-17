import type { ArcInfo, Mission } from '../types';

export const GHANA_SS1_STATISTICS_REASONING_ARCS: ArcInfo[] = [
  { n: 11, unit: 0, subject: 'ghcoremath', title: 'Statistical Reasoning: From Evidence to Action', pages: 'NaCCA SHS 1 · pp. 137–143' }
];
const lesson = (text: string) => ({ who: 's' as const, vis: 'infowords', text });
const question = (q: string, a: string[], why: string) => ({ q, a, why });
export const GHANA_SS1_STATISTICS_REASONING_MISSIONS: Mission[] = [
  {
    id: 'gh-core-ss1-statistical-averages-inference', arc: 0, sec: 'Making sense of and using data',
    pages: 'NaCCA SHS 1 · pp. 137–143', hue: 286, horns: 2, eyes: 2,
    title: 'The Average Arena',
    topic: 'Calculate and interpret mean, median, mode, minimum, maximum and range; recognise outliers; choose a representative average and justify evidence-based decisions.',
    demon: 'The Outlier Trickster', tech: 'Data Form · Thirteenth Technique: Balanced Evidence',
    scenes: [
      lesson('<p>After collecting and displaying data, we describe what the values tell us. <b>Measures of central tendency</b> describe a typical or central value. The three familiar measures are the mean, median and mode. Choose the measure that best represents the data instead of using the same one every time.</p>'),
      lesson('<p><b>Mean:</b> add all the values and divide by how many values there are. If five learners travel for 10, 12, 12, 16 and 20 minutes, the mean is (10 + 12 + 12 + 16 + 20) ÷ 5 = 70 ÷ 5 = 14 minutes. The mean uses every value, so an unusually large or small value can pull it up or down.</p>'),
      lesson('<p><b>Median:</b> arrange the values from smallest to largest. The median is the middle value. For 10, 12, 12, 16, 20, the median is 12. With an even number of values, average the two middle values. The median is often more representative when data contain an extreme value.</p>'),
      lesson('<p><b>Mode:</b> the value or category that occurs most often. In 10, 12, 12, 16, 20, the mode is 12. A data set can have one mode, more than one mode, or no mode. The mode is useful for describing the most common category, such as the most-used transport type.</p>'),
      lesson('<p><b>Spread and extremes:</b> the minimum is the smallest value and the maximum is the largest. The range is maximum minus minimum. In 10, 12, 12, 16, 20, the range is 20 − 10 = 10 minutes. An <b>outlier</b> is a value far away from most others. It can strongly affect the mean but usually has less effect on the median.</p>'),
      lesson('<p><b>Choose the best average:</b> for balanced data without extreme values, the mean can summarise all observations. For skewed data or data with an extreme value, the median may better represent a typical observation. For the most popular size, colour or transport category, use the mode. Explain your choice using the data.</p>'),
      lesson('<p><b>Grouped data:</b> when values are organised into class intervals, use each class midpoint and its frequency. An estimated grouped mean is Σ(f × midpoint) ÷ Σf. This is an estimate because individual values inside each interval are not known.</p>'),
      lesson('<p><b>Make a fair inference:</b> describe the pattern, quote relevant values and explain what they support. A class survey can help a school compare travel times, but a small or biased sample cannot automatically represent every learner. Distinguish what the data show from what you recommend, and acknowledge limitations.</p>'),
      { who: 'd', vis: 'demon', text: 'I will use one extreme value to distort your average and persuade you to make a poor decision. Can you choose the statistic that tells the fairest story?' },
      { type: 'battle' }
    ],
    quiz: [
      question('The travel times are 10, 12, 12, 16 and 20 minutes. What is the mean?', ['14 minutes', '12 minutes', '16 minutes', '70 minutes'], 'Add the values to get 70, then divide by 5: 14 minutes.'),
      question('What is the median of 4, 7, 9, 12, 18, 20?', ['10.5', '9', '12', '11'], 'There are six values, so average the two middle values: (9 + 12) ÷ 2 = 10.5.'),
      question('A data set contains one value much larger than all the others. Which measure is often more representative?', ['Median', 'Mean', 'Range', 'Maximum'], 'The extreme value can pull the mean upward. The median is less affected by an outlier.'),
      question('Which measure identifies the most common transport type?', ['Mode', 'Mean', 'Median', 'Range'], 'Transport type is categorical, so the most frequent category—the mode—is useful.'),
      question('A data set has a minimum of 8 and a maximum of 31. What is its range?', ['23', '39', '8', '31'], 'Range = maximum − minimum = 31 − 8 = 23.'),
      question('A team surveys only four close friends and claims its average travel time represents the whole school. What is the best response?', ['The sample is too limited to support a school-wide claim', 'The mean is always correct for every sample', 'The range proves the sample is representative', 'Remove values the team does not like'], 'A small convenience sample may be biased. Conclusions must reflect sampling limits or use a more representative sample.')
    ]
  }
];

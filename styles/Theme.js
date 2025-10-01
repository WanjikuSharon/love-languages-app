import Quiz from '../quiz/Quiz';

// For now, use empty objects for icons to avoid bundling issues
// Icons can be added back later with proper web-compatible paths
export const icons = {
  chat: {},
  time: {},
  gift: {},
  home: {},
  handshake: {},
};

export default {
  primaryColor: '#9c27b0',
  primaryLightColor: '#d05ce3',
  primaryDarkColor: '#6a0080',
  lightTextColor: '#ffffff',
  darkTextColor: '#17051a',
  subtleTextColor: '#baaabe',
  languageColors: {
    [Quiz.Languages.WORDS_OF_AFFIRMATION]: 'rgb(76, 217, 100)',
    [Quiz.Languages.QUALITY_TIME]: 'rgb(255, 204, 0)',
    [Quiz.Languages.RECEIVING_GIFTS]: 'rgb(255, 45, 85)',
    [Quiz.Languages.ACTS_OF_SERVICE]: 'rgb(0, 122, 255)',
    [Quiz.Languages.PHYSICAL_TOUCH]: 'rgb(255, 149, 0)',
  },
  languageIcons: {
    [Quiz.Languages.WORDS_OF_AFFIRMATION]: {},
    [Quiz.Languages.QUALITY_TIME]: {},
    [Quiz.Languages.RECEIVING_GIFTS]: {},
    [Quiz.Languages.ACTS_OF_SERVICE]: {},
    [Quiz.Languages.PHYSICAL_TOUCH]: {},
  },
};

import Quiz from '../quiz/Quiz';
// ...existing code...
export const icons = {
  chat: require('../assets/icons/chat@3x.png'),
  time: require('../assets/icons/time@3x.png'),
  gift: require('../assets/icons/gift@3x.png'),
  home: require('../assets/icons/home@3x.png'),
  handshake: require('../assets/icons/handshake@3x.png'),
};
// ...existing code...

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
    [Quiz.Languages.WORDS_OF_AFFIRMATION]: require('../assets/icons/chat@3x.png'),
    [Quiz.Languages.QUALITY_TIME]: require('../assets/icons/time@3x.png'),
    [Quiz.Languages.RECEIVING_GIFTS]: require('../assets/icons/gift@3x.png'),
    [Quiz.Languages.ACTS_OF_SERVICE]: require('../assets/icons/home@3x.png'),
    [Quiz.Languages.PHYSICAL_TOUCH]: require('../assets/icons/handshake@3x.png'),
  },
};

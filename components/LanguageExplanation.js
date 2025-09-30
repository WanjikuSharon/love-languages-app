import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import Quiz from '../quiz/Quiz';
import Theme from '../styles/Theme';

export default function LanguageExplanation({ voice, language, style }) {
  return (
    <View style={[styles.container, style]}>
      <Image
        source={Theme.languageIcons[language]}
        style={[
          styles.languageIcon,
          {
            tintColor: Theme.languageColors[language],
          },
        ]}
      />
      <Text style={styles.explanationText}>
        {_getExplanation(language, voice)}
      </Text>
    </View>
  );
}

function _getExplanation(language, voice) {
  let subjectCapitalized = voice === 'first-person' ? 'I' : 'You';
  let object = voice === 'first-person' ? 'me' : 'you';
  let possessive = voice === 'first-person' ? 'my' : 'your';

  switch (language) {
    case Quiz.Languages.WORDS_OF_AFFIRMATION:
      return `Hearing a loved one say they love ${object} and appreciate & support ${object} is especially meaningful to ${object}.`;
    case Quiz.Languages.QUALITY_TIME:
      return `${subjectCapitalized} especially appreciate spending focused time with a loved one and having their undivided attention.`;
    case Quiz.Languages.RECEIVING_GIFTS:
      return `A thoughtful gift a loved one has picked for you is especially meaningful to ${object}.`;
    case Quiz.Languages.ACTS_OF_SERVICE:
      return `${subjectCapitalized} especially appreciate when a loved one makes an effort to brighten or ease ${possessive} day.`;
    case Quiz.Languages.PHYSICAL_TOUCH:
      return `Sharing touch with a loved one, even a touch on the arm or a hug, is especially meaningful to ${object}.`;
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  languageIcon: {
    marginRight: 16,
    resizeMode: 'contain',
    width: 32,
  },
  explanationText: {
    color: Theme.darkTextColor,
    flex: 1,
    fontSize: 17,
  },
});

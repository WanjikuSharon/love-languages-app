// import * as FileSystem from 'expo-file-system';
// import * as MediaLibrary from 'expo-media-library';
// import { captureRef } from 'react-native-view-shot';
import invariant from 'invariant';
import countBy from 'lodash/countBy';
import maxBy from 'lodash/maxBy';
import values from 'lodash/values';
import React, { useEffect, useRef, useState } from 'react';
import { Platform, Share, StyleSheet, Text, View } from 'react-native';
import { ScrollView, BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import HeaderRightButton from '../components/HeaderRightButton';
import QuizResult from '../components/QuizResult';
import Quiz from '../quiz/Quiz';
import Prompt from '../stuff/Prompt';
import Sharing from '../stuff/Sharing';
import Theme from '../styles/Theme';

export default function QuizResultScreen() {
  const navigation = useNavigation();
  const [didShare, setDidShare] = useState(false);
  const savableResultsViewRef = useRef();
  
  const results = useSelector(state => {
    const scores = countBy(state.quiz.answers, answer => answer.language);
    return values(Quiz.Languages)
      .map(language => ({
        language,
        score: scores[language] || 0,
      }))
      .sort((a, b) => b.score - a.score);
  });

  const saveResultsAsync = async () => {
    // Temporarily disabled save functionality
    await Prompt.alertAsync(
      'Save Feature Disabled',
      'The save feature is temporarily disabled. Please take a screenshot instead.',
      { acceptText: 'OK' }
    );
  };

  useEffect(() => {
    navigation.setOptions({
      title: 'Your Love Language',
      headerRight: () => <HeaderRightButton onPress={saveResultsAsync}>Save</HeaderRightButton>,
    });
  }, [navigation]);

  const getPrimaryLanguages = () => {
    const maxScore = maxBy(results, result => result.score).score;
    const topResults = results.filter(result => result.score === maxScore);
    invariant(topResults.length > 0, 'There must be at least one primary love language');
    return topResults.map(result => result.language);
  };

  const shareQuizAsync = async () => {
    const primaryLanguages = getPrimaryLanguages();
    invariant(primaryLanguages.length > 0, 'There must be at least one primary language');

    const shareTitle = 'Find out your love language!';
    await Share.share(
      {
        title: shareTitle,
        message: Sharing.getShareMessage(primaryLanguages),
        url: Sharing.expoProjectUri,
      },
      {
        dialogTitle: shareTitle,
      }
    );

    setDidShare(true);
  };

  const restartAsync = async () => {
    if (!didShare) {
      const mayShare = await Prompt.promptAsync(
        'Share Your Quiz?',
        'Would you like to share your quiz results with a loved one or your friends before starting over?',
        { acceptText: 'Yes', cancelText: 'Not Now' }
      );

      if (mayShare) {
        await shareQuizAsync();
      }
    }

    navigation.navigate('Home');
  };

  return (
    <ScrollView
      alwaysBounceVertical={false}
      contentContainerStyle={styles.contentContainer}
      style={styles.container}>
      <QuizResult
        ref={savableResultsViewRef}
        voice="second-person"
        results={results}
        style={styles.content}
      />
      <View style={[styles.content, styles.buttons]}>
        <BorderlessButton
          disallowInterruption
          onPress={shareQuizAsync}
          style={[styles.button, styles.spacedButton]}>
          <Text style={styles.buttonText}>Share Your Quiz</Text>
        </BorderlessButton>

        <BorderlessButton disallowInterruption onPress={restartAsync} style={styles.button}>
          <Text style={styles.buttonText}>Start Again</Text>
        </BorderlessButton>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
  },
  content: {
    backgroundColor: '#fff',
    paddingHorizontal: 24,
  },
  buttons: {
    marginBottom: 48,
  },
  button: {
    alignSelf: 'center',
    backgroundColor: Theme.primaryColor,
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  spacedButton: {
    marginBottom: 20,
  },
  buttonText: {
    color: Theme.lightTextColor,
    fontSize: 17,
    fontWeight: 'bold',
    minWidth: 180,
    textAlign: 'center',
  },
});

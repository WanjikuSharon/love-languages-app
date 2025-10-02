import invariant from 'invariant';
import countBy from 'lodash/countBy';
import maxBy from 'lodash/maxBy';
import values from 'lodash/values';
import React, { useEffect, useState } from 'react';
import { Platform, Share, StyleSheet, Text, View, Alert, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import QuizResult from '../components/QuizResult';
import Quiz from '../quiz/Quiz';
import Sharing from '../stuff/Sharing';
import Prompt from '../stuff/Prompt';

export default function QuizResultScreen() {
  const navigation = useNavigation();
  const [didShare, setDidShare] = useState(false);
  
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
      headerStyle: {
        backgroundColor: '#9c27b0',
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
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
      contentContainerStyle={styles.contentContainer}
      style={styles.container}>
      <QuizResult
        voice="second-person"
        results={results}
        style={styles.content}
      />
      <View style={[styles.content, styles.buttons]}>
        <TouchableOpacity
          onPress={shareQuizAsync}
          style={[styles.button, styles.spacedButton]}>
          <Text style={styles.buttonText}>Share Your Quiz</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={restartAsync} style={styles.button}>
          <Text style={styles.buttonText}>Start Again</Text>
        </TouchableOpacity>
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
    backgroundColor: '#9c27b0',
    borderRadius: 25,
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  spacedButton: {
    marginBottom: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: 'bold',
    minWidth: 180,
    textAlign: 'center',
  },
});

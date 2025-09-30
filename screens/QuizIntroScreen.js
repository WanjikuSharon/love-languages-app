import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import Sounds from '../assets/Sounds';

export default function QuizIntroScreen() {
  const navigation = useNavigation();
  const numberOfQuestions = useSelector(state => state.quiz.questions.length);

  const startQuizAsync = async () => {
    navigation.navigate('QuizQuestion', { index: 0 });
    await Sounds.playEffectAsync(Sounds.completion);
  };

  return (
    <ScrollView
      alwaysBounceVertical={false}
      contentContainerStyle={styles.contentContainer}
      style={styles.container}>
      <Text style={styles.text}>
        The love languages quiz has {numberOfQuestions}{' '}
        {numberOfQuestions === 1 ? 'question' : 'questions'} about what you find
        meaningful. After answering question #{numberOfQuestions}, you'll learn how
        much each love language means to you.
      </Text>
      <BorderlessButton onPress={startQuizAsync} style={styles.startButton}>
        <Text style={styles.startButtonText}>Start the Quiz</Text>
      </BorderlessButton>
    </ScrollView>
  );
}

QuizIntroScreen.options = {
  title: 'Take the Quiz',
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  contentContainer: {
    alignItems: 'center',
    flex: 1,
    paddingBottom: 20,
    paddingHorizontal: 24,
    paddingTop: 32,
  },
  text: {
    fontFamily: 'chasing-hearts',
    fontSize: 24,
    marginBottom: 32,
  },
  startButton: {
    backgroundColor: '#9c27b0',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  startButtonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
});

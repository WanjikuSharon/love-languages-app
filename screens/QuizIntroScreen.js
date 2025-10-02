import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
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
      contentContainerStyle={styles.contentContainer}
      style={styles.container}>
      <Text style={styles.text}>
        The love languages quiz has {numberOfQuestions}{' '}
        {numberOfQuestions === 1 ? 'question' : 'questions'} about what you find
        meaningful. After answering question #{numberOfQuestions}, you'll learn how
        much each love language means to you.
      </Text>
      <TouchableOpacity onPress={startQuizAsync} style={styles.startButton}>
        <Text style={styles.startButtonText}>Start the Quiz</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  contentContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  text: {
    fontFamily: 'chasing-hearts',
    fontSize: 22,
    lineHeight: 30,
    marginBottom: 40,
    textAlign: 'center',
    color: '#333',
  },
  startButton: {
    backgroundColor: '#9c27b0',
    borderRadius: 25,
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  startButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

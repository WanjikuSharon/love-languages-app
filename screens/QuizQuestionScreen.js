import React, { useEffect } from 'react';
import invariant from 'invariant';
import { ScrollView, StyleSheet, Text, ViewPropTypes } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import Sounds from '../assets/Sounds';
import Quiz from '../quiz/Quiz';
import Actions from '../store/Actions';
import Theme from '../styles/Theme';

export default function QuizQuestionScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  
  const { index: questionIndex } = route.params;
  const { questions, answers } = useSelector(state => state.quiz);
  
  const question = questions[questionIndex];
  const answer = answers[questionIndex];
  const numberOfQuestions = questions.length;

  useEffect(() => {
    invariant(questionIndex >= 0, 'Question index must be positive');
    invariant(
      questionIndex < numberOfQuestions,
      'Question index must be less than the number of questions'
    );
    
    navigation.setOptions({
      title: `Question ${questionIndex + 1} / ${numberOfQuestions}`,
    });
  }, [questionIndex, numberOfQuestions, navigation]);

  const selectChoiceAsync = async (choice) => {
    dispatch(Actions.chooseAnswer(questionIndex, choice));
    await navigateToNextScreenAsync();
  };

  const navigateToNextScreenAsync = async () => {
    const nextQuestionIndex = questionIndex + 1;

    if (nextQuestionIndex < numberOfQuestions) {
      navigation.navigate('QuizQuestion', {
        index: nextQuestionIndex,
      });
      await Sounds.playEffectAsync(Sounds.buttonPress);
    } else {
      navigation.navigate('QuizResult');
      await Sounds.playEffectAsync(Sounds.completion);
    }
  };

  return (
    <ScrollView
      alwaysBounceVertical={false}
      contentContainerStyle={styles.contentContainer}
      style={styles.container}>
      <Text style={styles.prompt}>{Quiz.prompt}</Text>
      {question.map((choice, ii) => (
        <QuizQuestionChoice
          key={choice.text}
          text={choice.text}
          selected={choice === answer}
          onSelect={() => {
            selectChoiceAsync(choice);
          }}
          style={[
            styles.choice,
            ii === question.length - 1 ? styles.lastChoice : null,
          ]}
        />
      ))}
    </ScrollView>
  );
}

function QuizQuestionChoice({ text, selected, onSelect, style }) {
  return (
    <RectButton
      disallowInterruption
      underlayColor={selected ? Theme.lightTextColor : Theme.primaryColor}
      onPress={onSelect}
      style={[
        styles.choiceButton,
        selected ? styles.selectedChoiceButton : null,
        style,
      ]}>
      <Text style={[styles.choiceText, selected ? styles.selectedChoiceText : null]}>
        {text}
      </Text>
    </RectButton>
  );
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    paddingBottom: 20,
    paddingHorizontal: 24,
    paddingTop: 32,
  },
  prompt: {
    fontFamily: 'chasing-hearts',
    fontSize: 24,
    marginBottom: 32,
  },
  choice: {
    marginBottom: 28,
  },
  lastChoice: {
    marginBottom: 0,
  },
  choiceButton: {
    borderColor: Theme.primaryColor,
    borderRadius: 16,
    borderWidth: 2,
    justifyContent: 'center',
    minHeight: 80,
    overflow: 'hidden',
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  selectedChoiceButton: {
    backgroundColor: Theme.primaryColor,
  },
  choiceText: {
    color: Theme.darkTextColor,
    fontSize: 17,
  },
  selectedChoiceText: {
    color: Theme.lightTextColor,
  },
});

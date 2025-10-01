import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import Actions from '../store/Actions';
import Theme from '../styles/Theme';

export default function HomeScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const startQuiz = () => {
    console.log('Starting quiz...');
    dispatch(Actions.startQuiz());
    navigation.navigate('Quiz');
  };

  const showCredits = () => {
    console.log('Showing credits...');
    navigation.navigate('Credits');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        style={styles.scrollContainer}>
        <Text style={styles.heading}>Love Languages</Text>
        <View style={styles.body}>
          <Text style={styles.text}>
            Love languages are different ways in which we connect with the people close to us. We
            each respond to the love languages in our own ways—some of us especially appreciate
            reaffirming compliments and others find a thoughtful gift particularly heartwarming.
          </Text>
          <Text style={styles.text}>
            With a minute or two and this app, you can discover your own love languages and help
            those close to you show they care.
          </Text>
          <TouchableOpacity
            onPress={startQuiz}
            style={styles.startButton}>
            <Text style={styles.startButtonText}>Take the Quiz</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={showCredits}
          style={styles.creditsButton}>
          <Text style={styles.creditsButtonText}>Credits and Acknowledgements</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

// Remove the options property that might be causing issues

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#9c27b0',
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  heading: {
    color: '#ffffff',
    fontSize: 60,
    fontWeight: 'bold',
    marginTop: 36,
    marginBottom: 12,
    textAlign: 'center',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 18,
    lineHeight: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  startButton: {
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    marginTop: 30,
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  startButtonText: {
    color: '#9c27b0',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  creditsButton: {
    alignSelf: 'center',
    paddingHorizontal: 12,
    paddingVertical: 18,
  },
  creditsButtonText: {
    color: '#ffffff',
    fontSize: 14,
    opacity: 0.8,
  },
});

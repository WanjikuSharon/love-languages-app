import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet } from 'react-native';

import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

// Temporary simple screens for testing
function QuizScreen() {
  return (
    <View style={styles.testScreen}>
      <Text style={styles.testText}>Quiz Screen</Text>
      <Text style={styles.testSubtext}>Navigation working! 🎉</Text>
    </View>
  );
}

function CreditsScreen() {
  return (
    <View style={styles.testScreen}>
      <Text style={styles.testText}>Credits Screen</Text>
      <Text style={styles.testSubtext}>Navigation working! 🎉</Text>
    </View>
  );
}

export default function HomeNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#9c27b0',
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen 
        name="Home" 
        component={HomeScreen}
        options={{ title: 'Love Languages' }}
      />
      <Stack.Screen 
        name="Quiz" 
        component={QuizScreen}
        options={{ title: 'Take the Quiz' }}
      />
      <Stack.Screen 
        name="Credits" 
        component={CreditsScreen}
        options={{ title: 'Credits' }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  testScreen: {
    flex: 1,
    backgroundColor: '#9c27b0',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  testText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  testSubtext: {
    fontSize: 18,
    color: 'white',
  },
});
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import Store from './store/Store';

// Simple test to see if Redux store is the issue
function SimpleHomeScreen() {
  return (
    <View style={styles.homeContainer}>
      <Text style={styles.title}>Love Languages</Text>
      <Text style={styles.subtitle}>React Navigation v6 Migration</Text>
      <Text style={styles.description}>
        Love languages are different ways in which we connect with the people close to us.
      </Text>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Take the Quiz</Text>
      </View>
    </View>
  );
}

export default function App() {
  console.log('App rendering...');
  
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <View style={styles.container}>
          <SimpleHomeScreen />
        </View>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  homeContainer: {
    flex: 1,
    backgroundColor: '#9c27b0',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center', 
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
  },
  button: {
    backgroundColor: 'white',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
  },
  buttonText: {
    color: '#9c27b0',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
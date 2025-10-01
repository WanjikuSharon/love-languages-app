import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TestApp() {
  console.log('TestApp rendering...');
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Love Languages App - Test Component</Text>
      <Text style={styles.text}>React Navigation v6 Migration</Text>
      <Text style={styles.text}>If you can see this, React is working!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff6b6b',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: 'bold',
  },
});
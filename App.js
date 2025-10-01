import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import Store from './store/Store';
import HomeNavigator from './navigators/HomeNavigator';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.log('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Something went wrong:</Text>
          <Text style={styles.errorDetails}>{this.state.error?.toString()}</Text>
        </View>
      );
    }

    return this.props.children;
  }
}

export default function App() {
  console.log('App rendering...');
  
  return (
    <ErrorBoundary>
      <Provider store={Store}>
        <NavigationContainer>
          <HomeNavigator />
        </NavigationContainer>
      </Provider>
    </ErrorBoundary>
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
  errorContainer: {
    flex: 1,
    backgroundColor: '#ff6b6b',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  errorDetails: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
  },
});
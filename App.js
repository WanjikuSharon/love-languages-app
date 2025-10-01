import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar, StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import Sounds from './assets/Sounds';
import HomeNavigator from './navigators/HomeNavigator';
import Store from './store/Store';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [error, setError] = useState(null);

  const [fontsLoaded, fontError] = useFonts({
    athena: require('./assets/fonts/athena-of-the-ocean.ttf'),
    'chasing-hearts': require('./assets/fonts/chasing-hearts.ttf'),
  });

  useEffect(() => {
    async function prepare() {
      try {
        console.log('Loading sounds...');
        // Pre-load sounds
        await Sounds.loadAsync();
        console.log('Sounds loaded successfully');
      } catch (e) {
        console.warn('Error loading sounds:', e);
        setError('Sounds loading failed: ' + e.message);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady && fontsLoaded) {
      console.log('Hiding splash screen');
      // This tells the splash screen to hide immediately
      await SplashScreen.hideAsync();
    }
  }, [appIsReady, fontsLoaded]);

  // Show error if fonts fail to load
  if (fontError) {
    return (
      <View style={[styles.container, styles.errorContainer]}>
        <Text style={styles.errorText}>Font Error: {fontError.message}</Text>
      </View>
    );
  }

  // Show error if app fails to initialize
  if (error) {
    return (
      <View style={[styles.container, styles.errorContainer]}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  // Show loading state
  if (!appIsReady || !fontsLoaded) {
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <Text style={styles.loadingText}>Loading Love Languages App...</Text>
      </View>
    );
  }

  console.log('Rendering main app');

  return (
    <Provider store={Store}>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <StatusBar barStyle="light-content" />
        <NavigationContainer>
          <HomeNavigator />
        </NavigationContainer>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  errorContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff6b6b',
  },
  errorText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    padding: 20,
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9c27b0',
  },
  loadingText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});
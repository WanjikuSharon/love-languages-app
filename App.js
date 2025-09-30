import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import Sounds from './assets/Sounds';
import HomeNavigator from './navigators/HomeNavigator';
import Store from './store/Store';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  const [fontsLoaded] = useFonts({
    athena: require('./assets/fonts/athena-of-the-ocean.ttf'),
    'chasing-hearts': require('./assets/fonts/chasing-hearts.ttf'),
  });

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load sounds
        await Sounds.loadAsync();
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady && fontsLoaded) {
      // This tells the splash screen to hide immediately
      await SplashScreen.hideAsync();
    }
  }, [appIsReady, fontsLoaded]);

  if (!appIsReady || !fontsLoaded) {
    return null;
  }

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
});
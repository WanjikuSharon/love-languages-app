import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import QuizNavigator from './QuizNavigator';
import CreditScreen from '../screens/CreditScreen';

const Stack = createStackNavigator();

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
        component={QuizNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="Credits" 
        component={CreditScreen}
        options={{ title: 'Credits' }}
      />
    </Stack.Navigator>
  );
}
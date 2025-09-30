import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import QuizNavigator from './QuizNavigator';
import CreditNavigator from './CreditNavigator';
import Theme from '../styles/Theme';

const Stack = createStackNavigator();

export default function HomeNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: Theme.primaryColor,
        },
        headerTintColor: Theme.lightTextColor,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen 
        name="Quiz" 
        component={QuizNavigator} 
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="Credits" 
        component={CreditNavigator} 
        options={{ 
          headerShown: false,
          presentation: 'modal'
        }}
      />
    </Stack.Navigator>
  );
}
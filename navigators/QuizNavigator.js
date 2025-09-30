import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import QuizIntroScreen from '../screens/QuizIntroScreen';
import QuizQuestionScreen from '../screens/QuizQuestionScreen';
import QuizResultScreen from '../screens/QuizResultScreen';
import Theme from '../styles/Theme';

const Stack = createStackNavigator();

export default function QuizNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="QuizIntro"
      screenOptions={{
        headerStyle: { backgroundColor: Theme.primaryColor },
        headerTintColor: Theme.lightTextColor,
      }}
    >
      <Stack.Screen 
        name="QuizIntro" 
        component={QuizIntroScreen}
      />
      <Stack.Screen 
        name="QuizQuestion" 
        component={QuizQuestionScreen}
      />
      <Stack.Screen 
        name="QuizResult" 
        component={QuizResultScreen}
        options={{
          headerLeft: () => null,
          gestureEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
}

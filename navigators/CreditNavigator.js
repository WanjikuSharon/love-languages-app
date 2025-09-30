import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import HeaderRightButton from '../components/HeaderRightButton';
import CreditScreen from '../screens/CreditScreen';
import Theme from '../styles/Theme';

const Stack = createStackNavigator();

function CreditsHeaderRight() {
  const navigation = useNavigation();
  return (
    <HeaderRightButton
      onPress={() => navigation.goBack()}
      textStyle={styles.doneButtonText}>
      Done
    </HeaderRightButton>
  );
}

export default function CreditNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Credits"
      screenOptions={{
        headerStyle: { backgroundColor: Theme.primaryColor },
        headerTintColor: Theme.lightTextColor,
      }}
    >
      <Stack.Screen 
        name="Credits" 
        component={CreditScreen}
        options={{
          headerRight: () => <CreditsHeaderRight />,
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  doneButtonText: {
    fontWeight: 'bold',
  },
});


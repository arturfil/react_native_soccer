import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import ScreenTabs from './ScreenTabs';

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false, cardStyle: {backgroundColor: 'white'}}} >
      <Stack.Screen name="Home" component={ScreenTabs} />
    </Stack.Navigator>
  );
}

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import { selectColor, tabHeight } from '../theme/Constants';
import LoginScreen from '../screens/LoginScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

export default function ScreenTabs() {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      screenOptions={{
        tabBarActiveTintColor: selectColor,
        tabBarStyle: {
          paddingTop: 10
        }
      }}
    >
      <Tab.Screen 
        component={HomeScreen} 
        name="Home"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={30} />
        }}
      />
      <Tab.Screen 
        component={LoginScreen} 
        name="Login"
        options={{
          tabBarLabel: "Log In",
          tabBarIcon: ({color}) => <Icon name="person" color={color} size={30} />
        }}
      />
    </Tab.Navigator>
  );
}

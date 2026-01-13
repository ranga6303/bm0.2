// navigation/AppNavigator.jsx
// Controls screen-to-screen navigation flow

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../compos/LoginScreen.jsx';
import Profile from '../compos/Profile.jsx';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Default Screen */}
      <Stack.Screen name="Login" component={LoginScreen} />
      
      {/* Next Screen */}
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

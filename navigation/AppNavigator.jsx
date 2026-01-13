// navigation/AppNavigator.jsx
// Controls screen-to-screen navigation flow

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../compos/LoginScreen.jsx';
import Profile from '../compos/Profile.jsx';
import ManageCredentials from '../compos/S2.jsx'

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>

      
      {/* Default Screen */}
      <Stack.Screen name="Login" component={LoginScreen} />
      
      {/* Next Screen */}
      <Stack.Screen name="Profile" component={Profile} />

      <Stack.Screen name="RegOrFor" component={ManageCredentials} />
    </Stack.Navigator>
  );
}

// App.jsx
// Entry point of the app + navigation + theme context setup

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AppNavigator from './navigation/AppNavigator.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';

export default function App() {
  return (
    <SafeAreaProvider>
      {/* Global theme controller */}
      <ThemeProvider>

        {/* Handles screen routing */}
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>

      </ThemeProvider>
    </SafeAreaProvider>
  );
}

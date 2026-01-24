// App.jsx
// Entry point of the app + navigation + theme context setup

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AppNavigator from './navigation/AppNavigator.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';
import { ServerinfoLogin } from './context/ServerContext.jsx';

export default function App() {
  return (
    <SafeAreaProvider>
      <ServerinfoLogin>
      {/* Global theme controller */}
      <ThemeProvider>

        {/* Handles screen routing */}
        <NavigationContainer 
  //        onStateChange={(state) => {
  //   const names = state.routes.map(r => r.name);
  //   console.log("STACK:", names.join(" -> "));
  // }}
  >
          <AppNavigator />
        </NavigationContainer>

      </ThemeProvider>
      </ServerinfoLogin>
    </SafeAreaProvider>
  );
}

import { View, Text } from 'react-native'
import React, { Profiler } from 'react'
import Profile from './compos/Profile.jsx'
import LoginSrceen from './compos/LoginScreen.jsx'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const App = () => {
  return (
   <SafeAreaProvider>
    <LoginSrceen/>
   </SafeAreaProvider>
  )
}

export default App
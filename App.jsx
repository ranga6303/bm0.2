import { View, Text } from 'react-native'
import React, { Profiler } from 'react'
import Profile from './compos/Profile.jsx'

const App = () => {
  return (
    <View style={{flex:1}}>
      <Profile/>
    </View>
  )
}

export default App
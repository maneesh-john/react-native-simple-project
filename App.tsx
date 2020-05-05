import React from 'react'
import { Provider } from 'react-redux'
import { View, Text } from 'react-native'
import store from './redux/store'

const App = () => {

  return (
    <Provider store={store}>
      <View><Text>Text</Text></View>
    </Provider>
  )
}

export default App
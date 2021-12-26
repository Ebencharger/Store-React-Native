import React, { useEffect } from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import Stack from './navigations/stack';
import Navigation from './screens/Navigation';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Myassignment from './screens/Myassignment';
import SplashScreen from  'react-native-splash-screen'


const theme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    border: "transparent",
  }
}


const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  })
  return (
    <SafeAreaProvider>
  <NavigationContainer>
    {/* <Navigation/> */}
     <Stack/>
  </NavigationContainer>
  </SafeAreaProvider>
//   <>
// <Myassignment/>
//   </>
  )
}




export default App

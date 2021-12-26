import React from 'react';
import {useState, useRef} from 'react';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text,View,StyleSheet,TouchableOpacity, TextInput} from 'react-native';
import color from '../utilities/color';
import storeArray from '../utilities/storeArray';


const App = ({route,navigation}) => {
 
  return (
    <View style={styles.tag}>
   
    </View>
  )
}

const styles=StyleSheet.create({
tag:{
  backgroundColor:"#fff",
  // height:667,
  flex:1,
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
},
})

export default App


import React from 'react';
import { useState, useRef } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image, SafeAreaView } from 'react-native';
import images from '../utilities/images';
import storeArray from '../utilities/storeArray';
import Icon from 'react-native-vector-icons/FontAwesome';
import color from '../utilities/color';
import Navigation from './Navigation';


const Splash = ({navigation, t}) => {
  console.log(storeArray.img);
  return (
      <View style={styles.tag}>
      <Image source={images.Bg}  style={styles.background}/>
      <View style={styles.digitStore}>
       <Text style={{fontSize:55, color:"white", fontWeight:"bold", textShadowColor:"black",textShadowRadius:10, width:"100%", textAlign:"center"}}>DIGITAL STORE</Text>
       </View>
    </View>
  )
}

const styles = StyleSheet.create({
  tag: {
    backgroundColor: "#fff",
    flex: 1,
    padding:0,
    margin:0,
    position:"relative"
  },

  background:{
    width:"100%",
    flex:1,
    padding:0,
    margin:0,
  },
  digitStore:{
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 600000,
    top:"0%",
    height:"100%",
    flex:1,
    width: "100%",
    backgroundColor:"rgba(34, 34, 129, 0.3)",
    padding:0,
    margin:0,
  },
  menu:{
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    // display:"none",
    zIndex:1000000,
    width:"100%",
    height:250,
    position:"absolute",
    top:0,
    backgroundColor:"white"
},
eachBut:{
    marginTop:10,
    marginBottom:10,
},
buttonText:{
    fontSize:20,
    fontWeight:"bold"
},
button:{
  position:"absolute",
  top:0,
  zIndex:80000
}
})

export default Splash

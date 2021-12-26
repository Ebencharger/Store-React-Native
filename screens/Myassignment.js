import React, { useRef, useState } from 'react'
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import color from '../utilities/color'
import Icon from 'react-native-vector-icons/FontAwesome'


const Myassignment = () => {
    const [focus, setfocus] = useState(null)
    const phoneRef=useRef()
    const passRef=useRef();
    function handlePress(params) {
       setfocus(true)
    }
    function handleBlur(params) {
       setfocus(false)
    }
    return (
        <View style={styles.body}>
          <View style={styles.pad}>
          <View style={styles.skout}><Text style={{textAlign:"center", fontSize:35, marginBottom:20, color:color.success}}>Skout</Text></View>
         <View style={styles.input}><TextInput ref={phoneRef} onBlur={handleBlur} onFocus={handlePress} placeholder="+2348167302289"  style={phoneRef.current?.isFocused() && focus?styles.boxFocus:styles.box}/><Icon name="phone" size={20} style={styles.fafa}/></View>
         <View><TextInput  ref={passRef} onBlur={handleBlur} onFocus={handlePress}  placeholder="Password" style={passRef.current?.isFocused() && focus?styles.boxFocus:styles.box}/><Icon name="unlock" size={20} style={styles.fafa}/></View>
         <View><TouchableOpacity style={styles.button}><Text style={{fontSize:20, color:color.white, fontWeight:"bold"}}>Login</Text></TouchableOpacity></View>
         <View style={styles.passi}><Text style={{fontSize:18,color:color.dark}}>Forgotten Password?</Text><Text style={{fontSize:18, color:color.success}}>Sigup</Text></View>
        </View>  
        </View>
    )
}

const styles=StyleSheet.create({
body:{
    alignItems:"center",

},
pad:{
    marginTop:"30%",
    width:"80%"
},
passi:{
display:"flex",
flexDirection:"row",
justifyContent:"center",
alignItems:"center"
},
box:{
    borderWidth:1,
    borderColor:"black",
    width:"100%",
    padding:10,
    borderRadius:20,
    fontSize:20,
    marginBottom:20,
    paddingLeft:20
},
boxFocus:{
    borderWidth:2,
    borderColor:color.success,
    width:"100%",
    padding:10,
    borderRadius:20,
    fontSize:20,
    marginBottom:20,
    paddingLeft:20
},
button:{
    width:"100%",
    padding:10,
    borderRadius:20,
    fontSize:20,
    marginBottom:20,
    backgroundColor:color.success,
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
},
input:{
  position:"relative"  
},
fafa:{
    position:"absolute",
    top:15,
    color:"black",
    right:40

}
})

export default Myassignment

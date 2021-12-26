import React from 'react'
import {Text, View, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, Image, List} from 'react-native';
import color from '../utilities/color';
import Navigation from './Navigation';
import storeArray from '../utilities/storeArray';
import {useState} from 'react';
import Asyncstorage from '@react-native-community/async-storage'


const Details = ({route, navigation, press, handleDelete}) => {
    const myindex=route.params;
    let index=myindex.params; 
    const seen=true;
    const [k, setk] = useState(0);
    const [cartArray, setcartArray] = useState([])
    const [indexSec, setindexSec] = useState(0);
    
   
    localtorage()
    
    async function localtorage(params) {
        try{
            await Asyncstorage.setItem('DigitalStore', JSON.stringify(storeArray.img))
        }catch(err){
            console.log(err);
        }
    }


    getArray()
    async function getArray(params) {
        try{
            const value=JSON.parse(await Asyncstorage.getItem('DigitalStore'));
            if (value!==null) {
                console.log("yes");
                storeArray.img=value;
                console.log(storeArray.img);
            }
            else{
                console.log("noooo");
                storeArray.img=storeArray.img;
            }
          }catch(e){
         
          }
    }



 function handlePush(one, two, three) {
       
        cartArray.push(
            {
                What:storeArray.img2[one],
                product:storeArray.img[one][two].type,
                name:storeArray.img[one][two].model[three].phone,
                price:storeArray.img[one][two].model[three].price,
    
            })
       setcartArray( cartArray) 
       let z=k;
       z++;
       setk(z);
       console.log(k);  
        
    }
    return (
        <>
        <Navigation navigation={navigation}  myArray={cartArray} i={k} press={Navigation.press} route={route}/>
        <View style={styles.body}>
            <View  style={styles.header}>
             <ScrollView horizontal={true} style={{marginLeft:10}} showsHorizontalScrollIndicator={false}>
             {
                 storeArray.img[index].map((max, i)=>{
                     return <TouchableOpacity onPress={()=>setindexSec(i)}  key={i}  style={styles.eachBut}><Text key={max} style={styles.buttonText}>{max.type}</Text></TouchableOpacity>
                 })
             }
             </ScrollView>
            </View>
            <SafeAreaView style={styles.wrap}>
           <ScrollView style={{marginBottom:150}} showsVerticalScrollIndicator={false}>
            {
                storeArray.img[index][indexSec].model.map((max,i)=>{
                    return <View key={i} style={styles.card}>

                        <Text style={{position:"absolute", top:10, fontSize:30, fontWeight:"bold", color:"black"}}>{
                        max.phone
                        }</Text>
                        <Image key={i+4} source={max.img} height={350} width={"100%"} style={{marginTop:50}}/>
                        <Text style={{marginTop:0, fontSize:30, fontWeight:"bold", color:"black"}}>{
                        max.price
                        }</Text>
                       <TouchableOpacity onPress={()=>{handlePush(index, indexSec, i)}} key={i+1} style={{display:"flex", alignItems:"center", backgroundColor:color.danger, height:40, width:"100%",position:"absolute", bottom:0, }}>
                         <Text key={i+3} style={{fontSize:25, color:color.light, fontWeight:"bold", textAlign:"center"}}>ADD TO CART</Text>
                       </TouchableOpacity>
                    </View>
                })
            }
           </ScrollView>
            </SafeAreaView>
        </View>
        </>
    )
}

const styles=StyleSheet.create({
body:{
    width:"100%",
    height:"100%",
    overflow:"scroll",
    marginTop:0,
    borderColor:color.primary
},

header:{
  width:"100%",
  height:70,
  backgroundColor:"white",
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  width:"100%",
  flex: 0,
  overflow:"scroll",
  flexDirection: "row",
  borderWidth:1,
  borderColor:"rgba(0, 0, 0, 0.3)"
},
eachBut:{
    marginTop:10,
    marginLeft:30,
    marginRight:30
},
buttonText:{
    fontSize:18,
    fontWeight:"bold",
    color:color.dark
},
button: {
    width: 60,
    height: 50,
   

},
wrap:{
    width:"100%",
    height:"100%",
    padding:10,
},
card:{
    width:"100%",
    height:450,
    elevation:5,
    shadowColor:"black",
    borderWidth:0.3,
    borderColor:"rgba(0, 0, 0, 0.7)",
    marginBottom:50,
    paddingBottom:30,
    position:"relative",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"white"
},

})

export default Details

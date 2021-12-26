import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native'
import color from '../utilities/color';
import images from '../utilities/images';
import storeArray from '../utilities/storeArray';
import Icon from 'react-native-vector-icons/FontAwesome'
import cartNo from '../utilities/data.json'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component'
import  { Paystack , paystackProps}  from 'react-native-paystack-webview';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';


const Navigation = ({ navigation, i, myArray, handleDelete, value }) => {
    // const paystackWebViewRef = useRef<paystackProps.PayStackRef>any();
   
const bootstrapStyleSheet = new BootstrapStyleSheet();
const { s, c } = bootstrapStyleSheet;

    const [shouldShow, setshouldShow] = useState(false);
    const [press, setpress] = useState(false);
    const [email, setemail] = useState("");
    const [phone, setphone] = useState("");
    const [location, setlocation] = useState("");
    const [price, setprice] = useState(0);
    const [focus, setfocus] = useState(null);
    const payRef = useRef(null);

   

    i = myArray.length;
    const handleBar = (params) => {
        setshouldShow(!shouldShow);
        console.log(shouldShow);
        setpress(false);
    }


    function handlePress(params) {
        i != 0 && i != "N" ? setpress(!press) : setpress(false)
    }

    function handleClick(params) {
        setshouldShow(!shouldShow);
        console.log(params);
        navigation.navigate('Details', { params })
    }
    function handleHome() {
        setshouldShow(!shouldShow);
        navigation.navigate('Signin')
    }
    function handleDelete(params) {
        console.log(myArray);
        myArray.splice(params, 1);
        console.log(myArray);
        setpress(false);
        setTimeout(() => {
            setpress(true);
        }, 0.1);
        if (i == 0) {
            myArray = [];
        }
    }
    function handleCancel(params) {
        myArray.splice(myArray, myArray.length);
        setpress(false);
        console.log(12);
    }
    function handleCheckout(params) {
        setpress(false);
        setfocus(true)
    }
    return (
        <SafeAreaView>
            <View style={press ? styles.table : styles.tableDis}>
                <Table borderStyle={{ borderWidth: 1, borderColor: "black" }}>
                    <Row textStyle={{ textAlign: "center", color: color.dark, fontWeight: "bold" }} data={["S/N", "WHAT", "PRODUCT", "MODEL", "PRICE", "ACTION"]} />
                    {
                        myArray.map((max, i) => {
                            return <Row key={i + 3} textStyle={{textAlign: "center", color: color.dark }} data={[i + 1, max.What, max.product, max.name, max.price, <TouchableOpacity onPress={() => { handleDelete(i) }} key={i} style={[s.bgDanger]}><Text key={i + 1} style={[s.textLight, s.textCenter, s.fontWeightBold]}>DELETE</Text></TouchableOpacity>]} />
                        })

                    }

                </Table>
                <View style={{ display: "flex", flexDirection: "row", padding: 20 }}>
                    <TouchableOpacity onPress={handleCancel} style={{ backgroundColor: color.danger, width: "40%", borderRadius: 10, padding: 5 }}><Text style={{ textAlign: "center", color: "white", fontWeight: "bold" }}>CANCEL</Text></TouchableOpacity>
                    <TouchableOpacity onPress={handleCheckout} style={{ backgroundColor: color.primary, width: "40%", marginLeft: 75, borderRadius: 10 }}><Text style={{ textAlign: "center", color: "white", fontWeight: "bold", padding: 5 }}>CHECKOUT</Text></TouchableOpacity>
                </View>
            </View>
            <View style={styles.header}>
                <View style={styles.innerHead}>
                    <View><Image source={images.Logo} style={{ height: 60, width: 60, marginTop: -25, marginLeft: 10 }} /></View>
                    <View style={{ marginLeft: "10%", marginTop: -10 }}><Icon onPress={handlePress} name="cart-plus" size={35} color={color.primary} /><Text style={{ fontSize: 20, fontWeight: "bold", color: "black", position: "absolute", top: -17, left: 10 }}>{i}</Text></View>
                    <TouchableOpacity onPress={handleBar} style={{ ...styles.button, marginTop: -5, marginLeft: "50%" }}><Text><Icon name="bars" size={30} color="black" /></Text></TouchableOpacity>
                </View>
                {
                    shouldShow ? (
                        <View style={styles.menu}>
                            <TouchableOpacity onPress={handleHome} style={styles.eachBut}><Text style={styles.buttonText}>HOME</Text></TouchableOpacity>
                            {
                                storeArray.img2.map((max, i) => {
                                    return <TouchableOpacity onPress={() => { handleClick(i) }} key={i} style={styles.eachBut}><Text key={max} style={styles.buttonText}>{max}</Text></TouchableOpacity>

                                })
                            }
                        </View>
                    ) : null
                }

                <View style={styles.payfloat}>
                    <View style={focus == true ? styles.pay : styles.notpay}>
                        <View>
                            <Text style={{ textAlign: "center", marginBottom: 20, fontSize: 20, fontWeight: "bold", color: "black" }}>COMPLETE THE PURCHASE</Text>
                            <Text style={{marginBottom: 5, paddingLeft:10, fontSize: 20, fontWeight: "bold", color: "black" }}>Email:</Text> 
                            <TextInput style={styles.input} onTextInput={(e) => setemail(e.target.value)}/>
                            <Text style={{marginBottom: 5, paddingLeft:10, fontSize: 20, fontWeight: "bold", color: "black" }}>Phone Number:</Text> 
                            <TextInput style={styles.input}  onTextInput={(e) => setphone(e.target.value)}/>
                            <Text style={{marginBottom: 5, paddingLeft:10, fontSize: 20, fontWeight: "bold", color: "black" }}>Delivery Location</Text> 
                            <TextInput style={styles.input} onTextInput={(e) => setlocation(e.target.value)}/>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        borderWidth: 2,
        borderColor: "rgb(36, 36, 192)",
        backgroundColor: "rgb(255, 255, 255)",
        width: "101%",
        height: 100,
        position: "relative",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 900000,
        padding: 0,
        marginLeft: -2,
    },
    innerHead: {
        position: "absolute",
        top: "50%",
        display: "flex",
        width: "100%",
        flex: 0,
        flexDirection: "row",
    },
    menu: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        // display:"none",
        elevation: 5,
        zIndex: 1000000,
        flex: 1,
        width: "50%",
        paddingTop: 40,
        paddingBottom: 40,
        position: "absolute",
        top: 0,
        backgroundColor: color.primary
    },
    pay: {
        position: "absolute",
        zIndex: 1400000,
        backgroundColor: "white",
        borderWidth: 5,
        flex: 1,
        display: "flex",
        marginTop: "40%",
        paddingTop: 30,
        padding: 10,
        width: "100%",
        borderColor: color.primary
    },
    notpay: {
        display: "none"
    },
    eachBut: {
        marginTop: 10,
        marginBottom: 80,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: "bold",
        color: color.white
    },
    button: {
        width: 80,
        height: 50
    },
    table: {
        backgroundColor: "white",
        position: "absolute",
        width: "100%",
        left: 0,
        right: 0,
        top: 100,
        zIndex: 4000000,
    },

    tableDis: {
        display: "none"
    },
    input: {
        borderWidth: 1,
        borderColor: "black",
        width: "100%",
        padding: 10,
        borderRadius: 20,
        fontSize: 20,
        marginBottom: 20,
        paddingLeft: 40,
        textAlign:"center"
    }
})
export default Navigation

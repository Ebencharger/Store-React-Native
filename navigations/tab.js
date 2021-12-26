import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from '../screens/Home';
import Signin from '../screens/SIgnin';


const myStack=createBottomTabNavigator();

const tab = () => {
    return (
        <myStack.Navigator screenOptions={{ headerShown: false }} initialRouteName={"Signin"}>
        <myStack.Screen name={'Home'} component={Home} />
        <myStack.Screen name={'Signin'} component={Signin} />
    </myStack.Navigator>
    )
}

export default tab

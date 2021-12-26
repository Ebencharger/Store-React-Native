import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signin from '../screens/SIgnin'
import Details from '../screens/Details';
import Splash from '../screens/Splash';
import Tab from '../navigations/tab'

const myStack=createNativeStackNavigator();

const stack = () => {
    return (
        <myStack.Navigator initialRouteName={"Signin"} screenOptions={{ headerShown: false }}>
            <myStack.Screen name={'Splash'} component={Splash}/>
            <myStack.Screen name={'Signin'} component={Signin} />
            <myStack.Screen name={"Details"} component={Details}/>
            <myStack.Screen name={"Tab"} component={Tab}/>
        </myStack.Navigator>
    )
}

export default stack

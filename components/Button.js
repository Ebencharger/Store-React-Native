import React from 'react'
import {View, TouchableOpacity, Text} from 'react-native'

const Button = (props) => {
    return (
       <View>
        <TouchableOpacity style={props.style}><Text>Hi</Text></TouchableOpacity>
       </View>
    )
}

export default Button

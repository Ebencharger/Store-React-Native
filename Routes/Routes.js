import React from 'react'
import {Router,Scene} from 'react-native-router-flux'
import Home from '../Components/Home'
import Signin from '../Components/SIgnin'
const Routes = () => {
    return (
       <Router>
           <Scene key="root">
            <Scene key="home" component={Home} title="Home" initial={true}/>
            <Scene key="signin" component={Signin} title="Signin"/>

           </Scene>
       </Router>
    )
}

export default Routes

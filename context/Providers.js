import React, {createContext, useReducer} from 'react'


const GlobalProvider=createContext({});

const GlobalProvider=({children})=>{

    const [authState, authDispatch]=useReducer(auth, {})

return <GlobalProvider value={}>{children}</GlobalProvider>
}
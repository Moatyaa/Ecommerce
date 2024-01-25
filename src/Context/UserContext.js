import axios from "axios";
import { createContext, useEffect, useState } from "react";
export let userContext = createContext()
export default function UserContextProvider(props){
    let [token , setToken] = useState('')

    return <>
        <userContext.Provider value={{token , setToken}}>
            {props.children}
        </userContext.Provider>
    </>
}
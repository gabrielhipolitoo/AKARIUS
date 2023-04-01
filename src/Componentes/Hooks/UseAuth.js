import React, { useEffect, useState } from "react";
import UseVerif from "./UseVerif";
const UseAuth = () => {
    const [state, setState] = useState(true)

    const[lista,setLista] = useState()
    const value = (valor) => {
        setState(!valor)

    }

    


    useEffect(() => {
        const local = window.localStorage.getItem('logging')
        console.log(local)
        setLista(local)
    },[state,lista])


    const loadStorage = (key) =>{
        const local = window.localStorage.getItem(key)
        return local? local:null
    }

    return {loadStorage,value,state}
}

export default UseAuth;



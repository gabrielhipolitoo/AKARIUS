import React, { useEffect, useState } from "react";


const UseLocalStorage = (key,initial) => {

    const [users,pass] = useState(() => {
        
            const local = window.localStorage.getItem(key)
            return local ? local:initial

     
    }) 


    useEffect(()=>{

        if(key){
            window.localStorage.setItem(key,initial)
        }

    },[users,key])

    return [users,pass]

}


export default UseLocalStorage
import React, { useEffect, useState } from "react";
import App from "../../App";
import Logado from "../Logado";
import UseAuth from "./UseAuth";
import UseContext from "../UseContext";
const UseVerif = (key) => {

    const {value,loadStorage} = UseAuth()

    const [data,setData] = useState("")
    const [nullPass,setNullPass] = useState(true)
    const [nullLogin,setNullLogin] = useState(false)
    const [count,setCount] = useState(0)
    const [data2, setData2] = useState(null)
    const [ativo, setAtivo] = useState(false)
    




   async function localStorage(key,values){
        const local = await window.localStorage.getItem(key)
        if(local){
            const json = await JSON.parse(local)
            setData(json)
            values === json.password ? Redirect(json,key): setNullPass(false)
            setNullLogin(true)
        }
        
        else{
            key ? setNullLogin(false):setNullLogin(true)
            setNullPass(true)
            setAtivo(false)

        }
        
    }



    const Redirect = (json,key) => {
        setNullPass(true)
        setData2(json)
        setAtivo(true)
        console.log('vdd 2')
        const json_ = {
            email:key,
            name: json.name
        }
        window.localStorage.setItem('logging',JSON.stringify(json_))
        console.log(json)
        setAtivo(true)
        window.location.reload(true)
    }


  
    
  


    const nullPaswoord = () => {
        // retorna quando a senha fornecida não é correta
        return <p id="nullPassword">Senha errada</p>
    }    



    const nullEmail = () => {
        // retorna quando o email nao existe 
        return <p id="nullEmail">Email não encontrado</p>
    }

    
    

  return {data,nullPass,nullLogin,localStorage,nullPaswoord,nullEmail,count,data2,ativo}
  

}



    
export default UseVerif
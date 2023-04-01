import React, { useState } from 'react'
import Input from './Input'
import UseLocalStorage from '../Hooks/UseLocalStorage'

const FormRegister = () => {

const [value, setValue] = useState({email: null,
                                    name:"",
                                    password: null})
                      
 const [lista, setLista] = useState({email: null,
                                    name:null,
                                    password:null})

  const [teste, setTeste] = UseLocalStorage(lista.email,JSON.stringify(lista.name))


  function handleChange(e){
    e.preventDefault()
    
    if(value.email, value.password){
      setLista({email: value.email,name:{password:value.password ,name:value.name}})

      const values = {
        valueEmail: value.email="",
        valuePass: value.password="",
        listaEmail: lista.email="",
        listaName: lista.name="",
        listaPass: lista.password="",
      }
    }
    else{
      alert('vazio')
    }

  }



  // const [teste, setTeste] = UseLocalStorage(lista.email,lista.password)
    
  return (
    <form onSubmit={handleChange}>
        <Input label="Your Name" state={value} setState={setValue} value={value.name} type="text" id="name"/>
        <Input label="Your Email" state={value} setState={setValue} value={value.email || ""} type="email" id="email"/>
        <Input label="Your Password" state={value} setState={setValue} value={value.password || ""} type="password" id="password"/>
        <Input value="Sing Up" type="submit" />
    </form>
  )
}

export default FormRegister
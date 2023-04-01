import React, { useEffect, useState } from 'react'
import Input from './Input'
import UseVerif from '../Hooks/UseVerif'
import UseAuth from '../Hooks/UseAuth'
import Logado from '../Logado'
import UseContext from '../UseContext'
import App from '../../App'
import RendLogin from '../RendLogin'

const Form = () => {

  const [value,setValue] = useState({emailLogin: null,
                                    passwordLogin: null}) // Pegando os valores dos inputs

  const [lista, setLista] = useState({email:null ,
                                      password:null})

  const [on, setOn] = useState(false)

  const {data,localStorage,nullPass,nullLogin,nullPaswoord,nullEmail,count,ativo} = UseVerif()
  

    const {tate,tem,count2} =  UseAuth(lista.email);

  
  useEffect(() => {
    localStorage(lista.email,lista.password)
  },[lista])


  function handleChange(e){
    e.preventDefault()
    console.log(e)
  
    e.preventDefault()
    if(value.emailLogin, value.passwordLogin){
      setLista({email: value.emailLogin, password:value.passwordLogin})
      const values = {
        valueEmail: value.email="",
        valuePass: value.password="",
        listaEmail: lista.email="",
        listaPass: lista.password="",
      }

    }

  
  }
    

  return (
    <>

      <form onSubmit={handleChange}>
        
        <Input id='emailLogin' label="email" state={value} value={value.emailLogin || ""} setState={setValue} placeholder type="text"/>

        {/* <Input id='password' label="Password" state={value} value={value.password || ""} setState={setValue} placeholder type="password"/> */}

        <Input id='passwordLogin' label="password" state={value} value={value.passwordLogin || ""} setState={setValue} placeholder type="password"/>
        {!nullLogin && nullEmail()}
        {!nullPass && nullPaswoord()}
        <Input id='submit'  value="sing in"  type="submit"/>
    </form>
    <UseContext.Provider value={{nome:'gabriel'}}>
      <RendLogin/>
    </UseContext.Provider>
    </>
 
  )
}

export default Form
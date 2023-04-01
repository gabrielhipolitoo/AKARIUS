import React, { useContext, useEffect, useState } from 'react'
import App from '../App';
import UseAuth from './Hooks/UseAuth';
import UseVerif from "./Hooks/UseVerif";
import UseContext from './UseContext';


const Logado = ({values}) => {

  const {loadStorage} = UseAuth()
  const [users,setUsers] = useState({})

  useEffect(() => {
    const local = loadStorage('logging')
    if(local){
      setUsers(JSON.parse(local))
    }
  },[,users])
  console.log(users)
    return (
      <div>
        <h2>Informações do usuario logado</h2>
        <p>Nome {users.name}</p>
        <p>email {users.email}</p>
      </div>
    )
}

export default Logado
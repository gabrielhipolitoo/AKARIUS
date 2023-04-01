import './App.css';
import Login from './Componentes/Login';
import Register from './Componentes/Register';
import UseAuth from './Componentes/Hooks/UseAuth';
import { useEffect, useState } from 'react';
import Logado from './Componentes/Logado';




function App() {
  const {loadStorage} = UseAuth()
  const [data,setData] = useState()


  const exit = () => {
    const local = window.localStorage.removeItem('logging')
    console.log('click')
    setData(local)
  }


  
  useEffect(() => {
    const local = loadStorage('logging')
    console.log(local)
    setData(local)
  },[])


  const REtorna = () => {

    if(data){
      return (
      <>
      <button onClick={exit}>Sair</button>
      <Logado/>
      </>)

    }
    else{
      return(<>
          <Login/>
          <Register/>
            </>)
      
    }

  }


  return (
    <>
    <REtorna/>
    </>
  )

}

export default App;

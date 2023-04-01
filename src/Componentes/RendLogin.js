import React, { useContext, useState } from 'react'
import UseContext from './UseContext'
import UseApi from './UseApi'
import App from '../App'

const RendLogin = () => {

  const [values,setValue] = useState(null)
  const value = useContext(UseContext)
  if(value){
  }
  return (
    <>
    <UseApi.Provider value={value}>
      <App/>
    </UseApi.Provider>
    </>
    
  )
}

export default RendLogin
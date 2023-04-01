import React, { useState } from 'react'

const Input = ({label,type,id,setState,state,value,onClick}) => {

  const [form ,setForm] =  useState()


  // const TypeInput = (label) => {

  //   if(type === "submit" ){
    
  //     return  <input id={id}  type={type}/>

  //   }
  //   else{
  //     return (<>
  //         <label htmlFor={id}>{label}</label>
  //         <input onChange={({target}) => setForm(target.value)}  id={id} value={form}   type={type}/>
  //     </>
          
  //       )
  //   }

  // }
  
  function handleChange({target}){
    const {id,value} = target
    setState({...state,[id]:value})
  }


  return (
    <>   
        <label htmlFor={id}>{label}</label>
        <input onChange={handleChange} onClick={onClick} value={value} id={id}  type={type}/>
     </>
  )
}

export default Input
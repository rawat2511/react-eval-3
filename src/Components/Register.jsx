import React from 'react'
import { useLocation } from 'react-router-dom'

export const Register = () => {
  
  const { state } = useLocation();
  const { data } = state;

  
  console.log("Data LoCATION : ", data);

  return (
    <div>
        <h1>{state.gender}</h1>
    </div>
  )
}

import React from 'react'
import { useLocation } from 'react-router-dom'

export const Dashboard = () => {
  const location = useLocation();

  const { state } = location;
  const name = state.name;

  return (
    <div>
        <h1>Logged In as {name}</h1>
    </div>
  )
}

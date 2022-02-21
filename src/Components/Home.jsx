import React from 'react'
import { useNavigate } from 'react-router-dom'

const style = {
    position : "absolute",
    padding : "20px 40px",
    color : "white",
    backgroundColor : "green",
    outline : "none",
    border : "none",
    borderRadius : "14px",
    top : "20px",
    right : "20px"
}

const Home = () => {

  const navigate = useNavigate();  

  const goToForm = () => {
    navigate("/prerequsite");
  }  
  return (
    <div>
      <button style={style} onClick={goToForm}>Sign Up</button>
    </div>
  )
}

export default Home

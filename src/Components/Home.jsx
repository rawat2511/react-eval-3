import React, {useState, useEffect} from 'react'
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

  const [users, setUsers] = useState([]);
  
  const [data, setData] = useState({})

  const goToForm = () => {
    navigate("/prerequsite");
  }  

  const login = (e) => {
      e.preventDefault();

      const flag = false;
      
      for( var i = 0; i < users.length; i++ ){
          var {name, email, password} = users[i];
          if( email === data.email && password === data.password ) {
              console.log("Success");
              navigate("/dashboard", {state: {name}});
              flag = true;
          }
      }

      if( !flag ){
          alert("No such regestered user !!!");
      }
  }

  const onChange = (e) => {
    const {name, value} = e.target;
    setData({...data, [name] : value });
 }

 const fetchUsers = async () => {
    await fetch("https://tangy-watery-scion.glitch.me/todos2").then(r=>r.json()).then(r=> {
        setUsers(r)
    });
 }

 useEffect( () => {
     fetchUsers();
 }, [])

  return (
    <div>
      <button style={style} onClick={goToForm}>Sign Up</button>

      <h1>Login From Here</h1>
      <form onSubmit={login}>
          <div>
              <label htmlFor="email">Email : </label>
              <input onChange={onChange} type="email" name="email" id="email" placeholder='Email' />
          </div>
          <div>
              <label htmlFor="passowrd">Passowrd : </label>
              <input onChange={onChange} type="password" name="password" id="password" placeholder='Password' />
          </div>
          <input type="submit" value="Login" />
      </form>
    </div>
  )
}

export default Home

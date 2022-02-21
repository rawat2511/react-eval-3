import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';

export const Register = () => {
  
  const { state } = useLocation();
  const { data } = state;

  const [data1, setData1] = useState({});

  
  console.log("Data LoCATION : ", data);

  const addUser = (e) => {
      e.preventDefault();
      console.log(data1);
  }

  const onChange = (e) => {
    const {name, value} = e.target;
    console.log("Name : ", name);
    console.log("Value : ", value);
    setData1({...data1, [name] : value });
    console.log(data1);
}

  return (
    <div>
        <h1>Set Password</h1>
        <form onSubmit={addUser} action="">
            <div>
                <label htmlFor="name">Full Name : </label>
                <input onChange={onChange} type="text" name="name" id="name" placeholder='full name' />
            </div>
            <div>
                <label htmlFor="email">Email : </label>
                <input onChange={onChange} type="email" name="email" id="email" placeholder='email' />
            </div>
            <div>
                <label htmlFor="password">Password : </label>
                <input onChange={onChange} type="password" name="password" id="password" placeholder='password' />
            </div>
            <input type="submit" value="Confirm" />
        </form>
    </div>
  )
}

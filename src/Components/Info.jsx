import React, {useState} from 'react'

export const Info = () => {

  const [data, setData] = useState({});
  
  const onChange = (e) => {
      const {name, value} = e.target;
      console.log("Name : ", name);
      console.log("Value : ", value);
      setData({...data, [name] : value });
      console.log(data);
  }

  const register = () => {
    var len = Object.keys(data).length;
    if( len !== 5 ){
        alert( "Fill All the Details" );
    } 
    else{

    }
  }

  return (
    <div>
        <h1>Info</h1>
        <form onSubmit={register} >
            <div>
                <label htmlFor="qualification">Highest Qualification</label>
                <select onChange={onChange} name="qualification" id="qualification">
                    <option value="10th">10th</option>
                    <option value="12th">12th</option>
                    <option value="Graduation">Graduation</option>
                </select>
            </div>
            <div>
                <label htmlFor="passingYear">Passing Year</label>
                <select onChange={onChange} name="passingYear" id="passingYear">
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2010">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                </select>
            </div>
            <div>
                <label htmlFor="date">Date of Birth</label>
                <input onChange={onChange} type="date" name="date" id="date" />
            </div>
            <div>
                <label>Gender : </label>
                <input onChange={onChange} type="radio" name="gender" value="male" id='male' /> 
                <label htmlFor="male">Male</label>
                <input onChange={onChange} type="radio" name="gender" value="female" id='female' />
                <label htmlFor="female">Female</label>
                <input onChange={onChange} type="radio" name="gender" value="other" id='other' /> 
                <label htmlFor="other">Others</label>
            </div>
            <div>
                <label htmlFor="state">State</label>
                <select onChange={onChange} name="state" id="state">
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Goa">Goa</option>
                </select>
            </div>
            <input type="submit" value="REGISTER" />
        </form>
    </div>
  )
}

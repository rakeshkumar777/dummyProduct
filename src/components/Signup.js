import React, { useState } from 'react'
import './Style.css';
import { Link, Outlet,useNavigate } from 'react-router-dom'
import axios from 'axios';

const Signup = () => {

  const [join, setJoin] = useState({
    fullname: "",
    email: "",
    password: "",
    date: "",
    gender:""
  });

  const navigate=useNavigate();

  const changeHandler=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setJoin({...join,[name]:[value]})
   
    console.log(join)
  }
  const submitHandler=(e)=>{
    e.preventDefault()
    setJoin(join)
    // alert("Your Sign up data has submitted")
    console.log(join)
    axios.post("https://reqres.in/api/register",{
      fullname:join.fullname,
      email:join.email,
      password:join.password,
      date:join.date,
      gender:join.gender
    }).then(result=>{
      console.log(result)
      alert("success")
      localStorage.setItem("taken",result.data.token)
      navigate("/home")
    }).catch(err=>{
      console.log(err)
      alert("error")
    })

  }



  return (
    <>
      <div >
        <div style={{ border: "1px solid blue", borderRadius: "10px", width: "400px", marginTop: "100px", marginLeft: "450px", backgroundColor: "darkBlue", color: "white" }}>
          <form onSubmit={submitHandler}>
            <button className='btn1'><Link style={{ textDecoration: "none" }} to='/'>Login</Link></button>
            <button className='btn2'>Sign Up</button><br />
            <h1>Sign Up</h1>
            <label>Full Name
              <input className='name' type="text" placeholder='full name' name="fullname"
                autoComplete='off' value={join.fullname} onChange={changeHandler} 
                required onInvalid={()=>alert("please fill full name")}/>
            </label><br />
            <label>Email
              <input className='email' type="email" placeholder='email' name="email"
                autoComplete='off' value={join.email} onChange={changeHandler} 
                required onInvalid={()=>alert("please fill email")}/>
            </label>
            <label>Password
              <input className='password' type="password" placeholder='password' name="password"
                autoComplete='off' value={join.password} onChange={changeHandler} 
                required onInvalid={()=>alert("please fill password")}/>
            </label>
            <label>DOB
              <input className='dob' type="date" name="date" value={join.date} onChange={changeHandler} 
              required onInvalid={()=>alert("please fill your date of birth")}/>
            </label><br />
            <input className='abc' type='radio' value="Male" onChange={changeHandler} name='gender' />Male
            <input className='abc' type='radio' value="Female" onChange={changeHandler} name='gender' />Female
            <br />
            <button type='submit' className='btn3'>Sign Up</button><br />
            <center style={{ marginBottom: "10px" }}><Link to='/' style={{ textDecoration: "none", color: "white" }}>Already have an account?</Link></center>





          </form>
        </div>
      </div>

      <Outlet />
    </>
  )
}

export default Signup

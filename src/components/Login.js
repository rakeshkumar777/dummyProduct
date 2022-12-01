import React, { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import './Style.css'
import axios from 'axios';


const Login = () => {
  const [data, setData] = useState({
    username: "",
    password: ""
  });
  const navigate = useNavigate();

  const changeHandle = (e) => {
    setData({
      ...data,
      [e.target.name]: [e.target.value]
    })
    console.log(data)


  }



  const submitForm = (e) => {
    e.preventDefault();
    setData(data)
    console.log(data)
    axios.post("https://reqres.in/api/login", {
      username: data.username,
      password: data.password
    }).then(result => {
      console.log(result)
      alert("Success")
      localStorage.setItem("token",result.data)
      navigate()
    }).catch(error => {
      console.log(error)
      alert("Server error")
    })


  }

  return (
    <>
      <div style={{ border: "1px solid blue", borderRadius: "10px", width: "350px", postion: "relative", marginTop: "100px", marginLeft: "500px", backgroundColor: "darkBlue", color: "white" }}>
        <form onSubmit={submitForm}>
          <button className='btn1'>Login</button>
          <button className='btn2'><Link style={{ textDecoration: "none" }} to='/Signup'>Sign Up</Link></button><br />
          <h1>Login</h1>
          <label>Username
            <input className='name' type="text" name='username' autoComplete='off' placeholder='username'
              value={data.username} onChange={changeHandle}
              required onInvalid={() => alert("please fill username")} />
          </label><br />
          <label>Password
            <input className='password' type="password" name='password' autoComplete='off' placeholder='password'
              value={data.password} onChange={changeHandle}
              required onInvalid={() => alert("please fill password")} />
          </label>
          <center><Link to='/Forgot' style={{ textDecoration: "none", color: "white", float: "right" }}>Forgotton password?</Link></center>
          <button type='submit' className='btn3'>Login</button><br />

        </form>
      </div>



      <Outlet />
    </>
  )
}

export default Login

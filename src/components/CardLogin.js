import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CardLogin = () => {
  const navigate = useNavigate()
  const [login, setLogin] = useState({
    username: "",
    password: ""
  })
  const changeHandler = (e) => {
    const type = e.target.type;
    const value = e.target.value;
    setLogin({ ...login, [type]: [value] })
  }
  console.log("login", login)

  const submitHandler = (e) => {
    e.preventDefault();
    setLogin(login);
    axios.get("https://fakestoreapi.com/auth/login", {
      username: login.username,
      password: login.password
    }).then((response) => {
      console.log("response", response)
      toast("login-Successful")
      localStorage.setItem(response.token)
      navigate("/")
    }).catch((err) => {
      console.log("error", err)
      toast.error("Login Unsuccessfull")
    })

  }
  return (
    <>
      <Card className='shadow-lg' style={{ width: '18rem', marginLeft: "500px", marginTop: "50px", marginBottom: "50px" }}>
        <Card.Header className='p-3' style={{ backgroundColor: "#0d6efd" }}><h4 style={{ color: "white", marginLeft: "90px" }}>Login</h4></Card.Header>
        <Card.Body>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control value={login.email} onChange={changeHandler} type="text" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control value={login.password} onChange={changeHandler} type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button style={{ marginLeft: "85px" }} variant="primary" type="submit">
              Submit
            </Button>
          </Form>

        </Card.Body>
      </Card>



      <ToastContainer />
    </>
  )
}

export default CardLogin;

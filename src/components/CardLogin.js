import React from 'react'
import { Button, Card, Form } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const CardLogin = () => {
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

  const submitHandler = (e) => {
    e.preventDefault();
    let loginData = {
     username: name,
     password: password
    }
    if (name && password) {
      localStorage.setItem("loggedin",loginData)
      navigate("/filter")
    } else {
      alert("Please fill both username and password")
    }

  }
  return (
    <>
      <Card className='shadow-lg' style={{ width: '18rem', marginLeft: "500px", marginTop: "50px", marginBottom: "50px" }}>
        <Card.Header className='p-3' style={{ backgroundColor: "#0d6efd" }}><h4 style={{ color: "white", marginLeft: "90px" }}>Login</h4></Card.Header>
        <Card.Body>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username/Email address</Form.Label>
              <Form.Control value={name} onChange={(e) => setName(e.target.value)} name='username' type="text" placeholder="Enter username or email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} name='password' type="password" placeholder="Password" />
            </Form.Group>
            <Button style={{ marginLeft: "85px" }} variant="outline-primary" type="submit">
              Submit
            </Button>
          </Form>

        </Card.Body>
      </Card>
    </>
  )
}

export default CardLogin;

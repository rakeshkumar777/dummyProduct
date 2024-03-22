import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';




const CardSignup = () => {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
  
    const submitHandler = (e) => {
      e.preventDefault();
      let loginData = {
       username: name,
       email:email,
       password: password
      }
      if (name && password && email) {
        localStorage.setItem("loggedin",loginData)
        navigate("/filter")
      } else {
        alert("Please fill all the fields")
      }
  
    }
    return (
        <>
            <Card className='shadow-lg' style={{ width: '18rem', marginLeft: "500px",marginBottom: "25px",marginTop:"25px" }}>
                <Card.Header className='p-3' style={{ backgroundColor: "#198754" }}><h4 style={{ color: "white", marginLeft: "80px" }}>Register</h4></Card.Header>
                <Card.Body>
                    <Form onSubmit={submitHandler}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Full Name
                            </Form.Label>
                            <Form.Control value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter full name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="outline-success"  type="submit" style={{marginLeft:"70px"}}>Submit form</Button>
                    </Form>

                </Card.Body>
            </Card>



        </>
    )
}

export default CardSignup

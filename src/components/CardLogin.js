import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';


const CardLogin = () => {
  return (
    <>
      <Card className='shadow-lg' style={{ width: '18rem', marginLeft: "200px", marginTop: "100px" }}>
        <Card.Header className='p-3' style={{ backgroundColor: "#0d6efd" }}><h4 style={{ color:"white",marginLeft: "90px" }}>Login</h4></Card.Header>
        <Card.Body>
          <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button style={{marginLeft:"85px"}} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
     
      </Card.Body>
    </Card>



      
    </>
  )
}

export default CardLogin;

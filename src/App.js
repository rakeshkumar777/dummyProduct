import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Sign_up from './components/Sign_up';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Forgot from './components/Forgot';
import { Navbar, NavDropdown, Container, Nav, Form, Button } from 'react-bootstrap'
import Card from './components/CardLogin';



const App = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link index>Home</Nav.Link>
              <Nav.Link to="/">Login</Nav.Link>
              <Nav.Link to='/Signup'>Sign Up</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <Sign_up /> */}
      {/* <Card /> */}
      {/* <Card /> */}

      <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/Forgot' element={<Forgot/>}/>
      
    </Routes>
    </BrowserRouter>



    </>
  )
}

export default App

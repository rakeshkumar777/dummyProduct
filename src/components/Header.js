import React from 'react';
import { Navbar, NavDropdown, Container, Nav, Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { backArrow } from '../utility/images';

const Header = () => {
  const pathname = window.location.pathname
  console.log(pathname?.split("/")[1], 'pathname');
  const navigate = useNavigate()
  const localStoragedata = localStorage.getItem("loggedin")
  const handleLogout = () => {
    localStorage.clear()
    navigate("/")
  }
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          {
            pathname?.split("/")[1] == 'singleProduct' ?
              <img style={{cursor:"pointer"}} onClick={()=>navigate(-1)} src={backArrow} alt='goback' /> : <></>
          }
          <Navbar.Brand href="#">Dummy Project</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              {
                localStoragedata ? <></> :
                  <>
                    <Nav.Link onClick={() => navigate("/")}>Login</Nav.Link>
                    <Nav.Link onClick={() => navigate("/signup")}>Sign Up</Nav.Link>
                  </>
              }
            </Nav>
            {
              localStoragedata ?
                <Form className="d-flex">
                  <Button onClick={() => handleLogout()} variant="outline-success">Logout</Button>
                </Form> : <></>
            }
          </Navbar.Collapse>
        </Container>
      </Navbar>





    </>
  )
}

export default Header

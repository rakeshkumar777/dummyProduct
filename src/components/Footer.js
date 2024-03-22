import React from 'react'
import { Navbar, NavDropdown, Container, Nav } from 'react-bootstrap'

const Footer = () => {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>

            <Nav>
              <Nav.Link href="#deets">About us</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Contact us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Navbar.Brand style={{ fontSize: "12px", marginTop: "30px", align: "center", color: "#8c8d99" }}> all rights are reserved</Navbar.Brand>
      </Navbar>



      
    </>
  )
}

export default Footer

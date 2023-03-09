import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = ({ handleShow }) => {
  return (
    <div>
      <Navbar bg="success" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://cdn-icons-png.flaticon.com/128/8034/8034066.png"
              alt="error"
              width={30}
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Product</Nav.Link>
            <Nav.Link href="#pricing">Info about us</Nav.Link>
            <Nav.Link href="#pricing">Basket</Nav.Link>
          </Nav>
          <Button variant="outline-light" onClick={handleShow}>
            Add information
          </Button>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

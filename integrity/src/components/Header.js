import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import '../styles/icons.css';

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/" className="site-title">Integrity Protection & Consulting Corp.</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" className="nav-link">Home</Nav.Link>
            <Nav.Link href="/about" className="nav-link">About</Nav.Link>
            <Nav.Link href="/services" className="nav-link">Services</Nav.Link>
            <Nav.Link href="/privacy" className="nav-link">Privacy</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

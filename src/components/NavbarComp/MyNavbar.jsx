import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import {Link } from 'react-scroll';

export const MyNavbar = () => {
  return (
    <Navbar id="home" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Portafolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className='nav-link mx-2' to="home" smooth={true} duration={500}>Inicio</Link>
            <Link className='nav-link mx-2' to="proyectos" smooth={true} duration={500}>Proyectos</Link>
            <Link className='nav-link mx-2' to="contacto" smooth={true} duration={500}>Contacto</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



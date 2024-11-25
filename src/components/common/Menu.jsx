import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logoNavbar from '../../assets/img/header.jpg'

const Menu = () => {
    return (
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to={'/'}>
          <img src={logoNavbar} alt="Direccion Estadistica de la provincia de Tucuman" className='logo-navbar' />
        </Navbar.Brand>
      </Container>
    </Navbar>
    );
};

export default Menu;
import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logoNavbar from '../../assets/img/header.jpg'
import logoNavbarResponsive from '../../assets/img/header-responsive-SM.png';

const Menu = () => {
    return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container className='mt-0'>
          <Navbar.Brand as={Link} to={'/'} className='d-flex justify-content-center d-xl-block d-md-none'>
            <img src={logoNavbar} alt="Direccion Estadistica de la provincia de Tucuman" className='logo-navbar w-100' />
          </Navbar.Brand>
          <Navbar.Brand as={Link} to={'/'} className='d-flex justify-content-center d-none d-md-block d-sm-block d-xl-none'>
            <img src={logoNavbarResponsive} alt="Direccion Estadistica de la provincia de Tucuman" className='logo-navbar w-100' />
          </Navbar.Brand>
        </Container>
    </Navbar>
    );
};

export default Menu;
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { PersonBadgeFill } from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';

const MenuInicio = ({logout}) => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
            <Navbar.Brand>
                <NavLink end className='nav-item nav-link' to={'/home'}> DEP-Stock Manager </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <NavDropdown title="secciones" id="dropdownSecciones">
                        <NavLink end className='nav-item nav-link nav-link' to={'/home/oficinas'}>Centro de Costos</NavLink>
                        <NavLink end className='nav-item nav-link nav-link' to={'/home/Productos'}>Stock</NavLink>
                    </NavDropdown>
                    <Nav.Link href="#miPerfil">
                        <PersonBadgeFill className='me-2' size={30}></PersonBadgeFill>
                        Ver Perfil
                    </Nav.Link>
                    <Nav.Link href="#link" onClick={logout}>Cerrar Sesión</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MenuInicio;

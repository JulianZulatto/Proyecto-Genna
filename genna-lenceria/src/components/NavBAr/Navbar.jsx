import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { CartWidget } from "../Cart/CartWidget"
function NavigationBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      <Navbar.Brand as={NavLink} to="/">Genna Lenceria</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" >Inicio</Nav.Link>
            <Nav.Link as={NavLink} to="/Catalogo" >Catalogo</Nav.Link>
            <Nav.Link as={NavLink} to="/Contacto" >Contacto</Nav.Link>
            <Nav.Link as={NavLink} to="/CartDetail" >Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
  );
}

export default NavigationBar;

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "./CartWidgetComponent"
import { NavLink } from "react-router-dom";

function NavBarStrapComponent() {
  return (
    <Navbar expand="lg" className="navBarContainer col-12 ">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img src="../logo.png" alt="" className="navLogo " />
          Mikkafeteria
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div className="col-lg-10 col-md-2 col-sm-2">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
            <NavDropdown.Item as={NavLink} to="/category/nuevos" className="col-lg-3">Nuevos
            </NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/category/vendidos" className="col-lg-3">Mas vendidos</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/category/ofertas" className="col-lg-3">Ofertas</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/cart" className="col-lg-3">
              <CartWidget/>
            </NavDropdown.Item>
          </Nav>
        </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBarStrapComponent;

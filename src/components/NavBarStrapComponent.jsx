import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "./CartWidgetComponent"
function NavBarStrapComponent() {
  return (
    <Navbar expand="lg" className="navBarContainer col-12 ">
      <Container>
        <Navbar.Brand href="#home" className="col-lg-2 col-md-10 col-sm-10">
          <img src="./logo.png" alt="" className="navLogo " />
          Mikkafeteria
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div className="col-lg-10 col-md-2 col-sm-2">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
            <NavDropdown.Item href="#Nuevos" className="col-3">Nuevos</NavDropdown.Item>
            <NavDropdown.Item href="#MasVendidos" className="col-3">Mas vendidos</NavDropdown.Item>
            <NavDropdown.Item href="#Ofertas" className="col-3">Ofertas</NavDropdown.Item>
            <NavDropdown.Item href="#Carrito" className="col-3">
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

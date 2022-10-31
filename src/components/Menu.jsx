import { NavLink } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../assets/imgs/logo.jpg";

//CSS
import "../Styles/Menu.css";
import Buscador from "./Buscador";

function Menu() {
  return (
    <>
      {["sm"].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3 menu">
          <Container fluid>
            <Navbar.Brand className="texto logoName">
              <NavLink to="/YandelCars">YandelAutos</NavLink>
            </Navbar.Brand>

            <Navbar.Toggle
              className="borderToggle"
              aria-controls={`offcanvasNavbar-expand-${expand}`}
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header className="colorFondo" closeButton>
                <Offcanvas.Title
                  className="texto logoNameResponsive"
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                >
                  YandelAutos
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="colorFondo">
                <Nav className="justify-content-end flex-grow-1 pe-3 texto">
                  <Buscador />
                  <NavLink
                    to="/YandelCars"
                    className="texto"
                    activeClassName="active"
                  >
                    YandelAutos
                  </NavLink>
                  <NavLink
                    to="YandelCars/coches"
                    className="texto"
                    activeClassName="active"
                  >
                    Coches
                  </NavLink>
                  <NavLink
                    to="/garantia"
                    className="texto"
                    activeClassName="active"
                  >
                    Garantía
                  </NavLink>
                  <NavLink
                    to="/conocenos"
                    className="texto"
                    activeClassName="active"
                  >
                    Conocenos
                  </NavLink>
                  <NavDropdown
                    title="Servicios"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item to="/YandelCars/servicios/compra">
                      Compra
                    </NavDropdown.Item>
                    <NavDropdown.Divider color="red" />
                    <NavDropdown.Item to="/YandelCars/servicios/venta">
                      Venta
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavLink
                    to="/YandelCars/contacto"
                    className="texto"
                    activeClassName="active"
                  >
                    Contacto
                  </NavLink>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Menu;

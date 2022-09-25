import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
//Router
import { NavLink } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Nav from "react-bootstrap/Nav";

import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Menu.css";
import Buscador from "../components/Buscador";

const Naves = () => {
  return (
    <>
      {["sm"].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3 menu">
          <Container fluid>
            <Navbar.Brand className="texto logoName">
              <NavLink to="/YandelCars" className="texto">
                YandelAutos
              </NavLink>
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
                  <Nav.Link>
                    <NavLink
                      to="/coches"
                      activeClassName="active"
                      className="colorContentHamburguer texto"
                    >
                      Coches
                    </NavLink>
                  </Nav.Link>
                  <Nav.Link>
                    <NavLink
                      to="/garantia"
                      activeClassName="active"
                      className="colorContentHamburguer texto"
                    >
                      Garantia
                    </NavLink>
                  </Nav.Link>

                  <NavDropdown
                    title="Servicios"
                    id="navbarScrollingDropdown"
                    className="colorContentHamburguer texto"
                  >
                    <NavDropdown.Item>Venta</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>Compra</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link>
                    <NavLink
                      to="/contacto"
                      activeClassName="active"
                      className="colorContentHamburguer texto"
                    >
                      Contacto
                    </NavLink>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Naves;

import React, { useState } from "react";
//Boostraps
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
//Router
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Menu.css";
//Components
import Buscador from "../components/Buscador";
//Logos
import logoCertified from "../imgs/logoCertified.png";
import logoNegro from "../imgs/logoNegro.png";
import logoTransparente from "../imgs/logoTransparente.png";

const Naves = () => {
  return (
    <>
      {["xl"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="mb-3 menu container-fluid"
        >
          <Container fluid>
            <Navbar.Brand className="texto logoName">
              <NavLink to="/YandelCars" className="texto">
                <img src={logoNegro} />
              </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle
              className="borderToggle "
              aria-controls={`offcanvasNavbar-expand-${expand}`}
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header className="colorFondo" closeButton>
                <Offcanvas.Title
                  className=" logoNameResponsive"
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                >
                  <img src={logoTransparente} className="logoResponsive" />
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
                      Vehículos
                    </NavLink>
                  </Nav.Link>
                  <Nav.Link>
                    <NavLink
                      to="/terminos"
                      activeClassName="active"
                      className="colorContentHamburguer texto"
                    >
                      Términos y Condiciones
                    </NavLink>
                  </Nav.Link>
                  <Nav.Link>
                    <NavLink
                      to="/nosotros"
                      activeClassName="active"
                      className="colorContentHamburguer texto"
                    >
                      FAQs
                    </NavLink>
                  </Nav.Link>

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

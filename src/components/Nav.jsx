import React, { useState, useEffect } from "react";
//Boostraps
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { AiOutlineClose } from "react-icons/ai";
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

import logoTransparente from "../imgs/logoTransparente.png";

const Naves = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      {["xl"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          expanded={expanded}
          className="mb-3 menu container-fluid"
        >
          <Container fluid>
            <Navbar.Brand className="texto logoName">
              <NavLink to="/YandelCars" className="texto">
                <img src={logoTransparente} />
              </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle
              className="borderToggle "
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              onClick={() => setExpanded(expanded ? false : "expanded")}
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header className="colorFondo">
                <Offcanvas.Title
                  className=" logoNameResponsive"
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                >
                  <img
                    src={logoTransparente}
                    className="logoResponsive"
                    onClick={() => setExpanded(false)}
                  />
                </Offcanvas.Title>
                <Nav.Link>
                  <NavLink
                    to="/YandelCars"
                    activeClassName="active"
                    className="colorContentHamburguer texto "
                    onClick={() => setExpanded(false)}
                  >
                    <AiOutlineClose />
                  </NavLink>
                </Nav.Link>
              </Offcanvas.Header>
              <Offcanvas.Body className="colorFondo">
                <Nav className="justify-content-end flex-grow-1 pe-3 texto">
                  <Buscador />
                  <Nav.Link>
                    <NavLink
                      to="/coches"
                      activeClassName="active"
                      className="colorContentHamburguer texto"
                      onClick={() => setExpanded(false)}
                    >
                      Vehículos
                    </NavLink>
                  </Nav.Link>
                  <Nav.Link>
                    <NavLink
                      to="/terminos"
                      activeClassName="active"
                      className="colorContentHamburguer texto"
                      onClick={() => setExpanded(false)}
                    >
                      Términos
                    </NavLink>
                  </Nav.Link>
                  <Nav.Link>
                    <NavLink
                      to="/nosotros"
                      activeClassName="active"
                      className="colorContentHamburguer texto"
                      onClick={() => setExpanded(false)}
                    >
                      Nosotros
                    </NavLink>
                  </Nav.Link>

                  <Nav.Link>
                    <NavLink
                      to="/contacto"
                      activeClassName="active"
                      className="colorContentHamburguer texto"
                      onClick={() => setExpanded(false)}
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

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

//CSS
import "../Styles/Menu.css";

function Menu() {
  return (
    <>
      {["sm"].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3 menu">
          <Container fluid>
            <Navbar.Brand href="#" className="texto">
              YandelCars
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
                  className="texto"
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                >
                  YandelCars
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="colorFondo">
                <Nav className="justify-content-end flex-grow-1 pe-3 texto">
                  <Nav.Link href="#action1" className="texto">
                    YandelCars
                  </Nav.Link>
                  <Nav.Link href="#action2" className="texto">
                    Coches
                  </Nav.Link>
                  <NavDropdown
                    title="Servicios"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Renting</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Compra</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">Venta</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#action4" className="texto">
                    Contacto
                  </Nav.Link>
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

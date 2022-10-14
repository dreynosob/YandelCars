import React from "react";
import "../Styles/Vehiculos.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import kiaPicantoPortada from "../imgs/kiaPicantoPortada.png";
import picantoSideView from "../imgs/picantoSideView.png";
import picanto5SinFondo from "../imgs/picanto5SinFondo.png";
import picanto7SinFondo from "../imgs/picanto7SinFondo.png";

import logoBlanco from "../imgs/logoBlanco.png";
import { NavLink } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
const Vehiculos = () => {
  return (
    <>
      <div className="encabezadoVehiculos fluid">
        <img src={logoBlanco} />

        <h2>LA MÁXIMA DE LOS DEALERS!!</h2>

        <section className="container-fluid contenedorVehiculo">
          <Card style={{ width: "18rem" }} className="bordeCard">
            <Carousel
              className="container-fluid contenedorVehiculo t300-px-wide"
              indicators={false}
              controls={false}
            >
              <Carousel.Item className="itemTam">
                <img className="d-flex w-50" src={picanto5SinFondo} />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-flex w-50"
                  src={picanto7SinFondo}
                  alt="Kia Picanto"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-flex w-50"
                  src={picantoSideView}
                  alt="Kia Picanto"
                />
              </Carousel.Item>
            </Carousel>
            <Card.Body>
              <Card.Title className="tituloCardsVehiculos">
                Kia Picanto
              </Card.Title>
              <Card.Text className="vehiculosTexto">
                Seminuevo - 5 puertas
              </Card.Text>
              <Card.Text className="vehiculosTexto bordeGasolina">
                Gasolina{" "}
              </Card.Text>
              {/*<Card.Text className="promoVehiculos parpadeoVehiculo">
                MONTADO POR RD$150,000{" "}
              </Card.Text>*/}

              <NavLink to="/contacto">
                <Button variant="primary" className="botonVehiculo">
                  CONTACTAR
                </Button>
              </NavLink>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }} className="bordeCard">
            <Carousel
              className="container-fluid contenedorVehiculo t300-px-wide"
              indicators={false}
              controls={false}
            >
              <Carousel.Item className="itemTam">
                <img className="d-flex w-50" src={picanto5SinFondo} />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-flex w-50"
                  src={picanto7SinFondo}
                  alt="Kia Picanto"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-flex w-50"
                  src={picantoSideView}
                  alt="Kia Picanto"
                />
              </Carousel.Item>
            </Carousel>
            <Card.Body>
              <Card.Title className="tituloCardsVehiculos">
                Kia Picanto
              </Card.Title>
              <Card.Text className="vehiculosTexto">
                Seminuevo - 5 puertas
              </Card.Text>
              <Card.Text className="vehiculosTexto bordeGasolina">
                Gasolina{" "}
              </Card.Text>

              {/*<Card.Text className="promoVehiculos parpadeoVehiculo">
                MONTADO POR RD$150,000{" "}
              </Card.Text>*/}
              <NavLink to="/contacto">
                <Button variant="primary" className="botonVehiculo">
                  CONTACTAR
                </Button>
              </NavLink>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }} className="bordeCard">
            <Carousel
              className="container-fluid contenedorVehiculo t300-px-wide"
              indicators={false}
              controls={false}
            >
              <Carousel.Item className="itemTam">
                <img className="d-flex w-50" src={picanto5SinFondo} />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-flex w-50"
                  src={picanto7SinFondo}
                  alt="Kia Picanto"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-flex w-50"
                  src={picantoSideView}
                  alt="Kia Picanto"
                />
              </Carousel.Item>
            </Carousel>
            <Card.Body>
              <Card.Title className="tituloCardsVehiculos">
                Kia Picanto
              </Card.Title>
              <Card.Text className="vehiculosTexto">
                Seminuevo - 5 puertas
              </Card.Text>
              <Card.Text className="vehiculosTexto bordeGasolina">
                Gasolina{" "}
              </Card.Text>

              {/*<Card.Text className="promoVehiculos parpadeoVehiculo">
                MONTADO POR RD$150,000{" "}
              </Card.Text>*/}
              <NavLink to="/contacto">
                <Button variant="primary" className="botonVehiculo">
                  CONTACTAR
                </Button>
              </NavLink>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }} className="bordeCard">
            <Carousel
              className="container-fluid contenedorVehiculo t300-px-wide"
              indicators={false}
              controls={false}
            >
              <Carousel.Item className="itemTam">
                <img className="d-flex w-50" src={picanto5SinFondo} />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-flex w-50"
                  src={picanto7SinFondo}
                  alt="Kia Picanto"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-flex w-50"
                  src={picantoSideView}
                  alt="Kia Picanto"
                />
              </Carousel.Item>
            </Carousel>
            <Card.Body>
              <Card.Title className="tituloCardsVehiculos">
                Kia Picanto
              </Card.Title>
              <Card.Text className="vehiculosTexto">
                Seminuevo - 5 puertas
              </Card.Text>
              <Card.Text className="vehiculosTexto bordeGasolina">
                Gasolina{" "}
              </Card.Text>

              {/*<Card.Text className="promoVehiculos parpadeoVehiculo">
                MONTADO POR RD$150,000{" "}
              </Card.Text>*/}
              <NavLink to="/contacto">
                <Button variant="primary" className="botonVehiculo">
                  CONTACTAR
                </Button>
              </NavLink>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }} className="bordeCard">
            <Carousel
              className="container-fluid contenedorVehiculo t300-px-wide"
              indicators={false}
              controls={false}
            >
              <Carousel.Item className="itemTam">
                <img className="d-flex w-50" src={picanto5SinFondo} />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-flex w-50"
                  src={picanto7SinFondo}
                  alt="Kia Picanto"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-flex w-50"
                  src={picantoSideView}
                  alt="Kia Picanto"
                />
              </Carousel.Item>
            </Carousel>
            <Card.Body>
              <Card.Title className="tituloCardsVehiculos">
                Kia Picanto
              </Card.Title>
              <Card.Text className="vehiculosTexto">
                Seminuevo - 5 puertas
              </Card.Text>
              <Card.Text className="vehiculosTexto bordeGasolina">
                Gasolina{" "}
              </Card.Text>
              {/*<Card.Text className="promoVehiculos parpadeoVehiculo">
                MONTADO POR RD$150,000{" "}
              </Card.Text>*/}
              <NavLink to="/contacto">
                <Button variant="primary" className="botonVehiculo">
                  CONTACTAR
                </Button>
              </NavLink>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }} className="bordeCard">
            <Carousel
              className="container-fluid contenedorVehiculo t300-px-wide"
              indicators={false}
              controls={false}
            >
              <Carousel.Item className="itemTam">
                <img className="d-flex w-50" src={picanto5SinFondo} />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-flex w-50"
                  src={picanto7SinFondo}
                  alt="Kia Picanto"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-flex w-50"
                  src={picantoSideView}
                  alt="Kia Picanto"
                />
              </Carousel.Item>
            </Carousel>
            <Card.Body>
              <Card.Title className="tituloCardsVehiculos">
                Kia Picanto
              </Card.Title>
              <Card.Text className="vehiculosTexto">
                Seminuevo - 5 puertas
              </Card.Text>
              <Card.Text className="vehiculosTexto bordeGasolina">
                Gasolina{" "}
              </Card.Text>

              {/*<Card.Text className="promoVehiculos parpadeoVehiculo">
                MONTADO POR RD$150,000{" "}
              </Card.Text>*/}

              <NavLink to="/contacto">
                <Button variant="primary" className="botonVehiculo">
                  CONTACTAR
                </Button>
              </NavLink>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }} className="bordeCard">
            <Carousel
              className="container-fluid contenedorVehiculo t300-px-wide"
              indicators={false}
              controls={false}
            >
              <Carousel.Item className="itemTam">
                <img className="d-flex w-50" src={picanto5SinFondo} />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-flex w-50"
                  src={picanto7SinFondo}
                  alt="Kia Picanto"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-flex w-50"
                  src={picantoSideView}
                  alt="Kia Picanto"
                />
              </Carousel.Item>
            </Carousel>
            <Card.Body>
              <Card.Title className="tituloCardsVehiculos">
                Kia Picanto
              </Card.Title>
              <Card.Text className="vehiculosTexto">
                Seminuevo - 5 puertas
              </Card.Text>
              <Card.Text className="vehiculosTexto bordeGasolina">
                Gasolina{" "}
              </Card.Text>
              {/*<Card.Text className="promoVehiculos parpadeoVehiculo">
                MONTADO POR RD$150,000{" "}
              </Card.Text>*/}

              <NavLink to="/contacto">
                <Button variant="primary" className="botonVehiculo">
                  CONTACTAR
                </Button>
              </NavLink>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }} className="bordeCard">
            <Carousel
              className="container-fluid contenedorVehiculo t300-px-wide"
              indicators={false}
              controls={false}
            >
              <Carousel.Item className="itemTam">
                <img className="d-flex w-50" src={picanto5SinFondo} />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-flex w-50"
                  src={picanto7SinFondo}
                  alt="Kia Picanto"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-flex w-50"
                  src={picantoSideView}
                  alt="Kia Picanto"
                />
              </Carousel.Item>
            </Carousel>
            <Card.Body>
              <Card.Title className="tituloCardsVehiculos">
                Kia Picanto
              </Card.Title>
              <Card.Text className="vehiculosTexto">
                Seminuevo - 5 puertas
              </Card.Text>
              <Card.Text className="vehiculosTexto bordeGasolina">
                Gasolina{" "}
              </Card.Text>

              {/*<Card.Text className="promoVehiculos parpadeoVehiculo">
                MONTADO POR RD$150,000{" "}
              </Card.Text>*/}
              <NavLink to="/contacto">
                <Button variant="primary" className="botonVehiculo">
                  CONTACTAR
                </Button>
              </NavLink>
            </Card.Body>
          </Card>
        </section>
      </div>
    </>
  );
};

export default Vehiculos;

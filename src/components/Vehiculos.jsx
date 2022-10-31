import React from "react";
import "../Styles/Vehiculos.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
//Kia picanto 2016
import picantoSideView from "../assets/imgs/picantoSideView.png";
import picanto5SinFondo from "../assets/imgs/picanto5SinFondo.png";
import picanto7SinFondo from "../assets/imgs/picanto7SinFondo.png";

//Hyundai Accent 2017
import frontView from "../assets/imgs/Accent 2017/frontView.JPG";
import BackView from "../assets/imgs/Accent 2017/backView.JPG";
import sideView from "../assets/imgs/Accent 2017/sideView.JPG";
import leftView from "../assets/imgs/Accent 2017/leftView.JPG";
import interiorDelanteroView from "../assets/imgs/Accent 2017/interiorDelantero.JPG";
import interiorDelanteroView2 from "../assets/imgs/Accent 2017/interiorDelantero2.JPG";
import interiorTraseroView from "../assets/imgs/Accent 2017/interiorTrasero.JPG";

import logoBlanco from "../assets/imgs/logoBlanco.png";
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
              className="container-fluid contenedorVehiculo t300-px-wide "
              indicators={false}
              controls={false}
              variant="dark"
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
                <img className="d-flex w-50" src={frontView} />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-flex w-50" src={BackView} alt="Kia Picanto" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-flex w-50" src={sideView} alt="Kia Picanto" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-flex w-50" src={leftView} alt="Kia Picanto" />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-flex w-50"
                  src={interiorDelanteroView}
                  alt="Kia Picanto"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-flex w-50"
                  src={interiorDelanteroView2}
                  alt="Kia Picanto"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-flex w-50"
                  src={interiorTraseroView}
                  alt="Kia Picanto"
                />
              </Carousel.Item>
            </Carousel>
            <Card.Body>
              <Card.Title className="tituloCardsVehiculos">
                Hyundai Accent
              </Card.Title>
              <Card.Text className="vehiculosTexto">Seminuevo - 2017</Card.Text>
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

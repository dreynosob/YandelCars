import React from "react";
import "../Styles/Vehiculos.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import kiaPicantoPortada from "../imgs/kiaPicantoPortada.png";
import k5 from "../imgs/k52016.jpg";
import { NavLink } from "react-router-dom";
const Vehiculos = () => {
  return (
    <section className="container-fluid contenedorVehiculo">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={kiaPicantoPortada} />
        <Card.Body>
          <Card.Title className="tituloCardsVehiculos">Kia Picanto</Card.Title>
          <Card.Text className="vehiculosTexto">Seminuevo - Gasolina</Card.Text>
          <Card.Text className="vehiculosTexto">5 puertas - </Card.Text>

          <Card.Text className="promoVehiculos parpadeoVehiculo">
            MONTADO POR RD$150,000{" "}
          </Card.Text>
          <NavLink to="/contacto">
            <Button className="botonVehiculo">CONTACTAR</Button>
          </NavLink>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={kiaPicantoPortada} />
        <Card.Body>
          <Card.Title className="tituloCardsVehiculos">Kia Picanto</Card.Title>
          <Card.Text className="vehiculosTexto">Seminuevo - Gasolina</Card.Text>
          <Card.Text className="vehiculosTexto">5 puertas - </Card.Text>

          <Card.Text className="promoVehiculos parpadeoVehiculo">
            MONTADO POR RD$150,000{" "}
          </Card.Text>
          <NavLink to="/contacto">
            <Button className="botonVehiculo">CONTACTAR</Button>
          </NavLink>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={kiaPicantoPortada} />
        <Card.Body>
          <Card.Title className="tituloCardsVehiculos">Kia Picanto</Card.Title>
          <Card.Text className="vehiculosTexto">Seminuevo - Gasolina</Card.Text>
          <Card.Text className="vehiculosTexto">5 puertas - </Card.Text>

          <Card.Text className="promoVehiculos parpadeoVehiculo">
            MONTADO POR RD$150,000{" "}
          </Card.Text>
          <NavLink to="/contacto">
            <Button className="botonVehiculo">CONTACTAR</Button>
          </NavLink>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={kiaPicantoPortada} />
        <Card.Body>
          <Card.Title className="tituloCardsVehiculos">Kia Picanto</Card.Title>
          <Card.Text className="vehiculosTexto">Seminuevo - Gasolina</Card.Text>
          <Card.Text className="vehiculosTexto">5 puertas - </Card.Text>

          <Card.Text className="promoVehiculos parpadeoVehiculo">
            MONTADO POR RD$150,000{" "}
          </Card.Text>
          <NavLink to="/contacto">
            <Button className="botonVehiculo">CONTACTAR</Button>
          </NavLink>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={kiaPicantoPortada} />
        <Card.Body>
          <Card.Title className="tituloCardsVehiculos">Kia Picanto</Card.Title>
          <Card.Text className="vehiculosTexto">Seminuevo - Gasolina</Card.Text>
          <Card.Text className="vehiculosTexto">5 puertas - </Card.Text>

          <Card.Text className="promoVehiculos parpadeoVehiculo">
            MONTADO POR RD$150,000{" "}
          </Card.Text>
          <NavLink to="/contacto">
            <Button className="botonVehiculo">CONTACTAR</Button>
          </NavLink>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={kiaPicantoPortada} />
        <Card.Body>
          <Card.Title className="tituloCardsVehiculos">Kia Picanto</Card.Title>
          <Card.Text className="vehiculosTexto">Seminuevo - Gasolina</Card.Text>
          <Card.Text className="vehiculosTexto">5 puertas - </Card.Text>

          <Card.Text className="promoVehiculos parpadeoVehiculo">
            MONTADO POR RD$150,000{" "}
          </Card.Text>

          <NavLink to="/contacto">
            <Button className="botonVehiculo">CONTACTAR</Button>
          </NavLink>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={kiaPicantoPortada} />
        <Card.Body>
          <Card.Title className="tituloCardsVehiculos">Kia Picanto</Card.Title>
          <Card.Text className="vehiculosTexto">Seminuevo - Gasolina</Card.Text>
          <Card.Text className="vehiculosTexto">5 puertas - </Card.Text>

          <Card.Text className="promoVehiculos parpadeoVehiculo">
            MONTADO POR RD$150,000{" "}
          </Card.Text>

          <NavLink to="/contacto">
            <Button className="botonVehiculo">CONTACTAR</Button>
          </NavLink>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={kiaPicantoPortada} />
        <Card.Body>
          <Card.Title className="tituloCardsVehiculos">Kia Picanto</Card.Title>
          <Card.Text className="vehiculosTexto">Seminuevo - Gasolina</Card.Text>
          <Card.Text className="vehiculosTexto">5 puertas - </Card.Text>

          <Card.Text className="promoVehiculos parpadeoVehiculo">
            MONTADO POR RD$150,000{" "}
          </Card.Text>

          <NavLink to="/contacto">
            <Button className="botonVehiculo">CONTACTAR</Button>
          </NavLink>
        </Card.Body>
      </Card>
    </section>
  );
};

export default Vehiculos;

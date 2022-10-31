import Button from "react-bootstrap/Button";
import React from "react";

import portada1 from "../assets/imgs/portada1.png";
import picanto from "../assets/imgs/kiaPicantoPortada.png";
import portadaDealers from "../assets/imgs/portadaDealers.jpg";
import "../Styles/ContenidoPortada2.css";
import { NavLink } from "react-router-dom";
const ContenidoPortada2 = () => {
  return (
    <>
      <div className="flotarDerecha">
        <img src={portada1} className="flotarIzquierda" alt="Toyota Runner" />
        <h3>¿Por qué elegirnos?</h3>
        <p>
          <a href="#" className="brandNameP">
            <span>Autoscertifica2 </span>
          </a>
          ofrece el paquete completo que organizamos seguros. Contamos con
          completas instalaciones de taller. Ofreciendo el mejor servicio
          posventa posible, así como un servicio de abastecimiento de
          automóviles e intercambio de piezas.
        </p>
        <div className="mb-2">
          <NavLink to="/contacto">
            <Button
              variant="primary"
              size="lg"
              className="colorFondos colorBtn"
            >
              Contáctanos
            </Button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default ContenidoPortada2;

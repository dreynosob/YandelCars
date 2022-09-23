import Button from "react-bootstrap/Button";
import React from "react";

import portada3 from "../imgs/portada2.png";
import "../Styles/ContenidoPortada2.css";
const ContenidoPortada2 = () => {
  return (
    <>
      <div className="flotarDerecha">
        <img src={portada3} className="flotarIzquierda" alt="Toyota Runner" />
        <h3>¿Por qué elegirnos?</h3>
        <p>
          <a href="#" className="brandNameP">
            <span>YandelAutos </span>
          </a>
          ofrece el paquete completo que organizamos seguros. Contamos con
          completas instalaciones de taller. Ofreciendo el mejor servicio
          posventa posible, así como un servicio de abastecimiento de
          automóviles e intercambio de piezas.
        </p>
        <div className="mb-2">
          <Button variant="danger" size="lg" className="colorFondos colorBtn">
            Contáctanos
          </Button>
        </div>
      </div>
    </>
  );
};

export default ContenidoPortada2;

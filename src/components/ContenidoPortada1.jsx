import React from "react";
import { Button } from "react-bootstrap";
import portada1 from "../imgs/portada1.png";
import "../Styles/ContenidoPortada1.css";
const ContenidoPortada1 = () => {
  return (
    <div className="contenedorPortada1">
      <h3>
        Somos <span className="contenidoPortada1Titulo">YandelAutos.es</span>
      </h3>
      <p>
        <img src={portada1} className="contenedorImgPortada1" />
        Somos una empresa de venta de coches muy bien establecida y de gran
        reputación en el sector renting. Siempre tenemos una gran selección de
        coches de calidad para todos los presupuestos. Con una amplia
        experiencia profesional.
      </p>
    </div>
  );
};

export default ContenidoPortada1;

import React from "react";
import { Button } from "react-bootstrap";
import portada1 from "../imgs/portada1.png";
import "../Styles/ContenidoPortada1.css";
import logoTransparente from "../imgs/logoTransparente.png";
const ContenidoPortada1 = () => {
  return (
    <div className="contenedorPortada1">
      <h3 className="contenidoPortada1Titulo">
        <img src={logoTransparente} />
      </h3>
      <h3 className="contenidoPortada1Titulo2">
        LAS MEJORES OFERTAS DE VEHÍCULOS{" "}
        <span className="spanPortadaTitulo2"> ¡EN REPÚBLICA DOMINICANA!</span>
      </h3>
      {/*<p className="colorTextoportada1">
        Somos una empresa de venta de coches muy bien establecida y de gran
        reputación en el sector renting. Siempre tenemos una gran selección de
        coches de calidad para todos los presupuestos. Con una amplia
        experiencia profesional.
      </p>*/}
    </div>
  );
};

export default ContenidoPortada1;

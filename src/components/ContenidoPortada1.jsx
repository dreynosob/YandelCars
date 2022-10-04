import React from "react";
import { Button } from "react-bootstrap";
import portada1 from "../imgs/portada1.png";
import "../Styles/ContenidoPortada1.css";
const ContenidoPortada1 = () => {
  return (
    <div className="contenedorPortada1">
      <h3 className="contenidoPortada1Titulo">Autoscertificado2</h3>
      <h3 className="contenidoPortada1Titulo2">
        LAS MEJORES OFERTAS DE AUTOS{" "}
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

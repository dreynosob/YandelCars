import React from "react";
import "../Styles/Filtro.css";
import pequeno from "../imgs/pequeno.png";

const Filtro = () => {
  return (
    <>
      <div></div>
      <div className="contenedor_max flex flex_wrap_centrado blanco">
        <div className="contenedorFiltros">
          <div className="pequeño">
            <img src={pequeno} />
            Pequeño
          </div>
          <div className="pequeño">
            <img src={pequeno} />
            Mediano
          </div>
          <div className="pequeño">
            <img src={pequeno} />
            Berlinas
          </div>
          <div className="pequeño">
            <img src={pequeno} />
            Familiar
          </div>
          <div className="pequeño">
            <img src={pequeno} />
            4x4
          </div>
          <div className="pequeño">
            <img src={pequeno} />
            Comercial
          </div>
          <div className="pequeño">
            <img src={pequeno} />
            SUV
          </div>

          <div className="pequeño">
            <img src={pequeno} />
            Motos
          </div>
        </div>
      </div>
    </>
  );
};

export default Filtro;

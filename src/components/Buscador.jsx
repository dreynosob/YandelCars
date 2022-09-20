import React from "react";
import "../Styles/Buscador.css";
import { BsSearch } from "react-icons/bs";
const Buscador = () => {
  return (
    <div className="contenedor">
      <input type="text" placeholder="Buscar por marca, modelo..." />
    </div>
  );
};

export default Buscador;

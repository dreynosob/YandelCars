import React from "react";
import "../Styles/NotFound.css";
const NotFound = () => {
  return (
    <>
      <div className="notFoundContainer">
        <h1 className="text-center" style={{ color: "red" }}>
          Fuera De Servicio
        </h1>
        <h3 className="text-center">
          Estamos trabajando para brindarte un mejor servicio
        </h3>
      </div>
    </>
  );
};

export default NotFound;

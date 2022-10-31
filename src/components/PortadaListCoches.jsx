import React from "react";

import k5 from "../assets/imgs/k52016.jpg";
import mercedesPortada from "../assets/imgs/mercedesPortada.png";
import "../Styles/PortadaListaCoches.css";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import KiaPicantoPortada from "../assets/imgs/kiaPicantoPortada.png";

const PortadaListaCoches = () => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 fondo container-fluid ">
      <div className="col">
        <div className="card h-100">
          <img src={KiaPicantoPortada} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Kia Picanto</h5>
            <p className="card-text">
              Vehículo en perfectas condiciones, asiento en piel, sunroof, 4x4,
              unico dueño. V6 Gasolina. Recibimos tu vehiculo de menor valor.
            </p>
            <p className="card-text fondoAnuncio  text">
              MONTATE CON RD$150,000
            </p>{" "}
            <p className="card-text text">APROBACIÓN INMEDIATA!!</p>
          </div>
          <div className="card-footer">
            <NavLink to="/coches">
              <Button variant="primary" className="colorBtnPortada">
                Ver vehículo
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src={k5} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Kia K5 2016</h5>
            <p className="card-text">
              Vehículo en perfectas condiciones, la mas full del mercado,
              pantalla en los asientos, sunroof y mucho mas!!
            </p>
            <p className="card-text fondoAnuncio  text">
              MONTATE CON RD$150,000
            </p>{" "}
            <p className="card-text text">APROBACIÓN INMEDIATA!!</p>
          </div>
          <div className="card-footer">
            <NavLink to="/coches">
              <Button variant="primary" className="colorBtnPortada">
                Ver vehículo
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src={mercedesPortada} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Mercedes C300 2009</h5>
            <p className="card-text">
              Vehículo en perfectas condiciones, interior impecable. Recibimos
              tu vehiculo de menor valor.
            </p>
            <p className="card-text fondoAnuncio  text">
              MONTATE CON RD$150,000
            </p>{" "}
            <p className="card-text text">APROBACIÓN INMEDIATA!!</p>
          </div>
          <div className="card-footer">
            <NavLink to="/coches">
              <Button variant="primary" className="colorBtnPortada">
                Ver vehículo
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortadaListaCoches;

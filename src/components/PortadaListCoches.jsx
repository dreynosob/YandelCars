import React from "react";
import land1 from "../imgs/land1.png";
import durango1 from "../imgs/durango1.png";
import mercedes1 from "../imgs/mercedes1.png";
import "../Styles/PortadaListaCoches.css";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import picanto from "../imgs/picanto5.png";

const PortadaListaCoches = () => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 fondo">
      <div className="col">
        <div className="card h-100">
          <img src={picanto} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Kia Picanto</h5>
            <p className="card-text">
              Vehículo en perfectas condiciones, asiento en piel, sunroof, 4x4,
              unico dueño. V6 Gasolina. Recibimos tu vehiculo de menor valor.
            </p>
            <p className="card-text ">
              <span className="colorText">US$18,500.</span>
            </p>
          </div>
          <div className="card-footer">
            <NavLink to="/coches">
              <Button variant="primary" className="colorBtn">
                Ver vehículo
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src={durango1} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Dodge Durango 2015</h5>
            <p className="card-text">
              Vehículo en perfectas condiciones, la mas full del mercado,
              pantalla en los asientos, sunroof y mucho mas!!
            </p>
            <p className="card-text colorText"> US$18,500.</p>
          </div>
          <div className="card-footer">
            <NavLink to="/coches">
              <Button variant="primary" className="colorBtn">
                Ver vehículo
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src={mercedes1} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Mercedes C300 2009</h5>
            <p className="card-text">
              Vehículo en perfectas condiciones, interior impecable. Recibimos
              tu vehiculo de menor valor.Financiamiento disponible sin importar
              tu credito.
            </p>
            <p className="card-text colorText"> US$18,500.</p>
          </div>
          <div className="card-footer">
            <NavLink to="/coches">
              <Button variant="primary" className="colorBtn">
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

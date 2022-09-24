import React from "react";

import Button from "react-bootstrap/Button";

import suv1 from "../imgs/suv1.png";
import coupe1 from "../imgs/coupe1.png";
import dodge from "../imgs/dodge.png";
import sedan1 from "../imgs/sedan1.jpg";
import sport1 from "../imgs/sport1.png";

import "../Styles/Coches.css";
const Coches = () => {
  return (
    <>
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={suv1} className="card-img" alt="Range Rover" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Range Rover</h5>
              <h6 className="card-title">Supercharged 2014</h6>
              <p className="card-text">
                <span>Especificaciones: </span>
                Vehículo en perfectas condiciones, interior impecable. Recibimos
                tu vehiculo de menor valor.{" "}
              </p>
              <p>Financiamiento disponible sin importar tu credito.</p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
              <Button variant="danger">Contactar</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={sport1} className="card-img" alt="Range Rover" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Mercedes Benz</h5>
              <h6 className="card-title">C300 2009</h6>
              <p className="card-text">
                <span>Especificaciones: </span>
                Vehículo en perfectas condiciones, interior impecable. Recibimos
                tu vehiculo de menor valor.{" "}
              </p>
              <p>Financiamiento disponible sin importar tu credito.</p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
              <Button variant="danger">Contactar</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={coupe1} className="card-img" alt="Range Rover" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Mini</h5>
              <h6 className="card-title">Cooper 2008</h6>
              <p className="card-text">
                <span>Especificaciones: </span>
                Vehículo en perfectas condiciones, interior impecable. Recibimos
                tu vehiculo de menor valor.{" "}
              </p>
              <p>Financiamiento disponible sin importar tu credito.</p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
              <Button variant="danger">Contactar</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={sedan1} className="card-img" alt="Range Rover" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Honda Civic</h5>
              <h6 className="card-title">1.5 VTEC</h6>
              <p className="card-text">
                <span>Especificaciones: </span>
                Vehículo en perfectas condiciones, interior impecable. Recibimos
                tu vehiculo de menor valor.{" "}
              </p>
              <p>Financiamiento disponible sin importar tu credito.</p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
              <Button variant="danger">Contactar</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={dodge} className="card-img" alt="Range Rover" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Dodge</h5>
              <h6 className="card-title">Durango 2015</h6>
              <p className="card-text">
                <span>Especificaciones: </span>
                Vehículo en perfectas condiciones, la mas full del mercado,
                pantalla en los asientos, sunroof y mucho mas!!
              </p>
              <p>Financiamiento disponible sin importar tu credito.</p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
              <Button variant="danger">Contactar</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={suv1} className="card-img" alt="Range Rover" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Range Rover</h5>
              <h6 className="card-title">Supercharged 2014</h6>
              <p className="card-text">
                <span>Especificaciones: </span>
                Vehículo en perfectas condiciones, interior impecable. Recibimos
                tu vehiculo de menor valor.{" "}
              </p>
              <p>Financiamiento disponible sin importar tu credito.</p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
              <Button variant="danger">Contactar</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Coches;

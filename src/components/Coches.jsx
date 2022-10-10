import React from "react";

import Button from "react-bootstrap/Button";

//Picanto

import picanto5 from "../imgs/picanto5.png";
import picanto6 from "../imgs/picanto6.jpeg";
import picanto9 from "../imgs/picanto9.jpeg";
import picanto10 from "../imgs/picanto10.jpeg";
import picanto11 from "../imgs/picanto11.jpeg";
import picanto12 from "../imgs/picanto12.jpeg";
import picanto14 from "../imgs/picanto14.jpeg";
import picanto15 from "../imgs/picanto15.jpeg";
//Range Rover
import range1 from "../imgs/range1.png";
import range2 from "../imgs/range2.png";
import range3 from "../imgs/range3.png";
import range4 from "../imgs/range4.png";
import range5 from "../imgs/range5.png";
import range6 from "../imgs/range6.png";
import range7 from "../imgs/range7.png";
//Mini Cooper
import mini1 from "../imgs/mini1.png";
import mini2 from "../imgs/mini2.png";
import mini3 from "../imgs/mini3.png";
import mini4 from "../imgs/mini4.png";
import mini5 from "../imgs/mini5.png";
//Ford
import ford from "../imgs/ford.png";
import ford3 from "../imgs/ford3.png";
import ford2 from "../imgs/ford2.png";
import Carousel from "react-bootstrap/Carousel";
//Durango
import durango1 from "../imgs/durango1.png";
import durango2 from "../imgs/durango2.png";
import durango3 from "../imgs/durango3.png";
import durango4 from "../imgs/durango4.png";
import durango5 from "../imgs/durango5.png";
import durango6 from "../imgs/durango6.png";
import durango7 from "../imgs/durango7.png";
//Crv
import crv1 from "../imgs/crv1.png";
import crv2 from "../imgs/crv2.png";
import crv3 from "../imgs/crv3.png";
import crv4 from "../imgs/crv4.png";
import crv5 from "../imgs/crv5.png";
//Sienna
import sienna1 from "../imgs/sienna1.png";
import sienna2 from "../imgs/sienna2.png";
import sienna3 from "../imgs/sienna3.png";
import sienna4 from "../imgs/sienna4.png";
import sienna5 from "../imgs/sienna5.png";
import sienna6 from "../imgs/sienna6.png";
//Land diesel
import land1 from "../imgs/land1.png";
import land2 from "../imgs/land2.png";
import land3 from "../imgs/land3.png";
import land4 from "../imgs/land4.png";
import land5 from "../imgs/land5.png";
import land6 from "../imgs/land6.png";

//Land gasolina
import land11 from "../imgs/land11.png";
import land12 from "../imgs/land12.png";
import land13 from "../imgs/land13.png";
import land14 from "../imgs/land14.png";
import land15 from "../imgs/land15.png";
import land16 from "../imgs/land16.png";
//Yaris
import yaris1 from "../imgs/yaris1.png";
import yaris2 from "../imgs/yaris2.png";
import yaris3 from "../imgs/yaris3.png";
import yaris4 from "../imgs/yaris4.png";
import yaris5 from "../imgs/yaris5.png";
import yaris6 from "../imgs/yaris6.png";

import "../Styles/Coches.css";
import { NavLink } from "react-router-dom";
const Coches = () => {
  return (
    <>
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            <Carousel fade>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={picanto5}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={picanto10}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={picanto6}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={picanto9}
                  alt="Third slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={picanto11}
                  alt="Third slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={picanto12}
                  alt="Third slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={picanto14}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={picanto15}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Kia Picanto</h5>
              <h6 className="card-title">Berlina</h6>
              <p className="card-text">
                <span>Especificaciones: </span>
                Vehículo en perfectas condiciones, interior impecable. Recibimos
                tu vehiculo de menor valor.
              </p>
              <p>Financiamiento disponible sin importar tu credito.</p>

              <NavLink to="/contacto">
                <Button variant="danger" className="colorBtnPortada">
                  Contactar
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            <Carousel fade>
              <Carousel.Item>
                <img className="d-block w-100" src={ford} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={ford2} alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={ford3} alt="Third slide" />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Ford</h5>
              <h6 className="card-title">Escape 2012</h6>
              <p className="card-text">
                <span>Especificaciones: </span>
                Vehículo en perfectas condiciones, interior impecable. Recibimos
                tu vehiculo de menor valor.
              </p>
              <p>Financiamiento disponible sin importar tu credito.</p>

              <NavLink to="/contacto">
                <Button variant="danger" className="colorBtnPortada">
                  Contactar
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            <Carousel fade>
              <Carousel.Item>
                <img className="d-block w-100" src={mini1} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={mini2} alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={mini3} alt="Third slide" />
              </Carousel.Item>

              <Carousel.Item>
                <img className="d-block w-100" src={mini4} alt="Third slide" />
              </Carousel.Item>

              <Carousel.Item>
                <img className="d-block w-100" src={mini5} alt="Third slide" />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Mini</h5>
              <h6 className="card-title">Cooper 2008</h6>
              <p className="card-text">
                <span>Especificaciones: </span>
                Vehículo en perfectas condiciones, interior impecable. Recibimos
                tu vehiculo de menor valor.
              </p>
              <p>Financiamiento disponible sin importar tu credito.</p>

              <NavLink to="/contacto">
                <Button variant="danger" className="colorBtnPortada">
                  Contactar
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            <Carousel fade>
              <Carousel.Item>
                <img className="d-block w-100" src={crv1} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={crv2} alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={crv3} alt="Third slide" />
              </Carousel.Item>

              <Carousel.Item>
                <img className="d-block w-100" src={crv4} alt="Third slide" />
              </Carousel.Item>

              <Carousel.Item>
                <img className="d-block w-100" src={crv5} alt="Third slide" />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Honda</h5>
              <h6 className="card-title">Crv 2012</h6>
              <p className="card-text">
                <span>Especificaciones: </span>
                Vehículo en perfectas condiciones, interior impecable.Cuotas
                desde RD$10,000. Recibimos tu vehiculo de menor valor. Recibimos
                tu vehiculo de menor valor.
              </p>
              <p>Financiamiento disponible sin importar tu credito.</p>
              <NavLink to="/contacto">
                <Button variant="danger" className="colorBtnPortada">
                  Contactar
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            <Carousel fade>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={durango1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={durango2}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={durango3}
                  alt="Third slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={durango4}
                  alt="Third slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={durango5}
                  alt="Third slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={durango6}
                  alt="Third slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={durango7}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
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
              <NavLink to="/contacto">
                <Button variant="danger" className="colorBtnPortada">
                  Contactar
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            <Carousel fade>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={sienna1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={sienna2}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={sienna3}
                  alt="Third slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={sienna4}
                  alt="Third slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={sienna5}
                  alt="Third slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={sienna6}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Toyota</h5>
              <h6 className="card-title">Sienna 2014</h6>
              <p className="card-text">
                <span>Especificaciones: </span>
                Perfectas condiciones, clean carfax, puertas eléctricas, camara
                de reversa!. ●Precio: US$21,500 Recibimos tu vehiculo de menor
                valor. Recibimos tu vehiculo de menor valor.
              </p>
              <p>Financiamiento disponible sin importar tu credito.</p>

              <NavLink to="/contacto">
                <Button variant="danger" className="colorBtnPortada">
                  Contactar
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            <Carousel fade>
              <Carousel.Item>
                <img className="d-block w-100" src={land1} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={land2} alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={land3} alt="Third slide" />
              </Carousel.Item>

              <Carousel.Item>
                <img className="d-block w-100" src={land4} alt="Third slide" />
              </Carousel.Item>

              <Carousel.Item>
                <img className="d-block w-100" src={land5} alt="Third slide" />
              </Carousel.Item>

              <Carousel.Item>
                <img className="d-block w-100" src={land6} alt="Third slide" />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Toyota</h5>
              <h6 className="card-title">Land Cruiser Prado 2005</h6>
              <p className="card-text">
                <span>Especificaciones: </span>
                Vehículo en perfectas condiciones, asiento en piel, sunroof,
                4x4, unico dueño. V6 Gasolina. ●Precio: US$18,500. Recibimos tu
                vehiculo de menor valor.
              </p>
              <p>Financiamiento disponible sin importar tu credito.</p>

              <NavLink to="/contacto">
                <Button variant="danger" className="colorBtnPortada">
                  Contactar
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            <Carousel fade>
              <Carousel.Item>
                <img className="d-block w-100" src={land11} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={land12}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={land13} alt="Third slide" />
              </Carousel.Item>

              <Carousel.Item>
                <img className="d-block w-100" src={land14} alt="Third slide" />
              </Carousel.Item>

              <Carousel.Item>
                <img className="d-block w-100" src={land15} alt="Third slide" />
              </Carousel.Item>

              <Carousel.Item>
                <img className="d-block w-100" src={land16} alt="Third slide" />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Toyota</h5>
              <h6 className="card-title">Land Cruiser 2009</h6>
              <p className="card-text">
                <span>Especificaciones: </span>
                Vehículo en perfectas condiciones, asiento en piel, sunroof,
                4x4. Diesel. ●Precio: RD$710,000. Recibimos tu vehiculo de menor
                valor.
              </p>
              <p>Financiamiento disponible sin importar tu credito.</p>

              <NavLink to="/contacto">
                <Button variant="danger" className="colorBtnPortada">
                  Contactar
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            <Carousel fade>
              <Carousel.Item>
                <img className="d-block w-100" src={yaris1} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={yaris2}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={yaris3} alt="Third slide" />
              </Carousel.Item>

              <Carousel.Item>
                <img className="d-block w-100" src={yaris4} alt="Third slide" />
              </Carousel.Item>

              <Carousel.Item>
                <img className="d-block w-100" src={yaris5} alt="Third slide" />
              </Carousel.Item>

              <Carousel.Item>
                <img className="d-block w-100" src={yaris6} alt="Third slide" />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Toyota</h5>
              <h6 className="card-title">Yaris 2012</h6>
              <p className="card-text">
                <span>Especificaciones: </span>
                Vehículo en buenas condiciones, interior en perfectas
                condiciones, recién importado. ●Precio: RD$450,000. Recibimos tu
                vehiculo de menor valor.
              </p>
              <p>Financiamiento disponible sin importar tu credito.</p>

              <NavLink to="/contacto">
                <Button variant="danger" className="colorBtnPortada">
                  Contactar
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Coches;

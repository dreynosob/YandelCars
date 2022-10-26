import React, { memo } from "react";
import { FaMapMarkerAlt, FaMailBulk, FaPhoneAlt } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import "../Styles/Footer.css";

import logoTransparente from "../imgs/logoTransparente.png";

const Footer = () => {
  return (
    <>
      <div className="page-footer font-small indigo footer2">
        <div className="container text-center text-md-left">
          <div className="row">
            <div className="col-md-3 mx-auto">
              <h5 className="font-weight-bold text-uppercase mt-3 mb-4"></h5>

              <ul className="list-unstyled listaGeneralInfo">
                <NavLink to="/YandelCars">
                  <li>
                    <a className="tituloListas logoName">
                      <img src={logoTransparente} />
                    </a>
                  </li>
                </NavLink>
              </ul>
            </div>

            <div className="col-md-3 mx-auto">
              <h5 className="font-weight-bold text-uppercase mt-3 mb-4 tituloListas listaAyuda">
                AYUDA
              </h5>

              <ul className="list-unstyled listaAyuda">
                <NavLink to="/coches">
                  <li>
                    <a>Vehículos</a>
                  </li>
                </NavLink>

                <NavLink to="/terminos">
                  <li>
                    <a>Términos y Condiciones</a>
                  </li>
                </NavLink>
              </ul>
            </div>

            <div className="col-md-3 mx-auto">
              <h5 className="font-weight-bold text-uppercase mt-3 mb-4 tituloListas listaAyuda">
                ACERCA DE
              </h5>

              <ul className="list-unstyled listaAyuda">
                <NavLink to="/nosotros">
                  <li>
                    <a>Sobre Nosotros</a>
                  </li>
                </NavLink>
                <NavLink to="/contacto">
                  <li>
                    <a>Contacto</a>
                  </li>
                </NavLink>
              </ul>
            </div>

            <div className="col-md-3 mx-auto">
              <h5 className="font-weight-bold text-uppercase mt-3 mb-4 tituloListas listaAyuda">
                Contáctanos
              </h5>

              <ul className="list-unstyled listaAyuda ">
                <li>
                  <a href="#!" className="logoName">
                    Autoscertifica2
                  </a>
                </li>
                <li>
                  <FaMapMarkerAlt color="white" />
                  <a href="#!">
                    Av/Rómulo Betancourt #538, Santo Domingo, Dominican
                    Republic.
                  </a>
                </li>
                <li>
                  <FaMailBulk color="white" />
                  <a href="#!"> Email: Autoscertifica2@gmail.com</a>
                </li>
                <li>
                  <FaPhoneAlt color="white" />
                  <a href="#!"> Teléfono: 809-472-6144</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-left py-3">
          <a href="/">
            © 2022 Copyright Autoscertifica2, Inc. Todos los derechos reservados
          </a>
        </div>
      </div>
    </>
  );
};
export default Footer;

import React, { memo } from "react";
import { FaMapMarkerAlt, FaMailBulk, FaPhoneAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "../Styles/Footer.css";

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
                    <a className="tituloListas logoName">Autoscertifica2</a>
                  </li>
                </NavLink>

                <NavLink to="/coches">
                  <li>
                    <a className="tituloListas">COCHES</a>
                  </li>
                </NavLink>

                <NavLink to="/terminos">
                  <li>
                    <a className="tituloListas">TÉRMINOS Y CONDICIONES</a>
                  </li>
                </NavLink>

                <NavLink to="/servicios">
                  <li>
                    <a className="tituloListas">SERVICIOS</a>
                  </li>
                </NavLink>

                <NavLink to="/contacto">
                  <li>
                    <a className="tituloListas">CONTACTO</a>
                  </li>
                </NavLink>
              </ul>
            </div>

            <div className="col-md-3 mx-auto">
              <h5 className="font-weight-bold text-uppercase mt-3 mb-4 tituloListas listaAyuda">
                AYUDA
              </h5>

              <ul className="list-unstyled listaAyuda">
                <li>
                  <a href="#!">Estado del pedido</a>
                </li>
                <li>
                  <a href="#!">Envíos y entregas</a>
                </li>
                <li>
                  <a href="#!">Devoluciones</a>
                </li>
                <li>
                  <a href="#!">Opciones de pago</a>
                </li>
              </ul>
            </div>

            <div className="col-md-3 mx-auto">
              <h5 className="font-weight-bold text-uppercase mt-3 mb-4 tituloListas listaAyuda">
                ACERCA DE
              </h5>

              <ul className="list-unstyled listaAyuda">
                <li>
                  <a href="#!">Registrate</a>
                </li>
                <li>
                  <a href="#!">Inicia sesión</a>
                </li>
                <li>
                  <a href="#!">Novedades</a>
                </li>
                <li>
                  <a href="#!">Sostenibilidad</a>
                </li>
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
                  <a href="#!"> Teléfono: 982245578</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-left py-3">
          <a href="/">
            © 2022 Copyright YandelAutos, Inc. Todos los derechos reservados
          </a>
        </div>
      </div>
    </>
  );
};
export default Footer;

import React, { memo } from "react";
import { FaMapMarkerAlt, FaMailBulk, FaPhoneAlt } from "react-icons/fa";
import "../Styles/Footer2.css";

const Footer = () => {
  return (
    <>
      <div className="page-footer font-small indigo footer2">
        <div className="container text-center text-md-left">
          <div className="row">
            <div className="col-md-3 mx-auto">
              <h5 className="font-weight-bold text-uppercase mt-3 mb-4"></h5>

              <ul className="list-unstyled listaGeneralInfo">
                <li>
                  <a href="#!" className="tituloListas logoName">
                    YandelAutos
                  </a>
                </li>
                <li>
                  <a href="#!" className="tituloListas">
                    COCHES
                  </a>
                </li>
                <li>
                  <a href="#!" className="tituloListas">
                    GARANTÍA
                  </a>
                </li>
                <li>
                  <a href="#!" className="tituloListas">
                    CONÓCENOS
                  </a>
                </li>
                <li>
                  <a href="#!" className="tituloListas">
                    SERVICIOS
                  </a>
                </li>
                <li>
                  <a href="#!" className="tituloListas">
                    CONTACTO
                  </a>
                </li>
                <li>
                  <a href="#!" className="tituloListas">
                    TÉRMINOS Y CONDICIONES
                  </a>
                </li>
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
                    YandelAutos.com
                  </a>
                </li>
                <li>
                  <FaMapMarkerAlt color="white" />
                  <a href="#!">
                    C/Paseo de los locutores #74, ens. Quisqueya, Santo Domingo,
                    Dominican Republic.
                  </a>
                </li>
                <li>
                  <FaMailBulk color="white" />
                  <a href="#!"> Email: YandelAutos@gmail.com</a>
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

import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import {
  FaMailBulk,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaBusinessTime,
} from "react-icons/fa";
import "../Styles/Contacto.css";
const Contacto = () => {
  return (
    <>
      <h2>¡Contáctanos!</h2>
      <div className="contedorContacto">
        <div className="contactoItems">
          <p className="apartadoTexto">
            <FaPhoneAlt color="#d70606" />
            Telf. 809-262-4037/809-287-7156
          </p>
          <p>
            <FaMailBulk color="#d70606" />
            Email: YandelAutos@gmail.com
          </p>

          <p>
            {" "}
            <FaBusinessTime color="#d70606" />
            Lun-Vie: 9am-5pm
          </p>

          <p>
            <FaBusinessTime color="#d70606" />
            Sab: 10am-2pm
          </p>

          <p>
            <FaBusinessTime color="#d70606" />
            Dom: Cerrado
          </p>

          <p>
            <FaMapMarkerAlt color="#d70606" />
            C/Paseo de los locutores #74, ens. Quisqueya, Santo Domingo,
            Dominican Republic.
          </p>
        </div>
      </div>
    </>
  );
};

export default Contacto;

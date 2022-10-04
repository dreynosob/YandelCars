import React from "react";
import "../Styles/Top.css";
//icons
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import {
  FaMailBulk,
  FaPhoneAlt,
  FaWhatsapp,
  FaRegBuilding,
} from "react-icons/fa";
import { FcCustomerSupport, FcIphone, FcGoogle } from "react-icons/fc";
const Top = () => {
  return (
    <>
      <div className="containerBarraInfo">
        <span className="apartadoTexto">
          <FcCustomerSupport />
          Oficina. 809-472-6144
        </span>

        <span className="apartadoTexto">
          <FcIphone />
          Celular. 829 942 8820
        </span>
        <span className="apartadoTexto">
          <FaWhatsapp color="#25D366" />
          Whatsapp. 809-262-4037 / 809-861-0901
        </span>

        <span className="apartadoTexto">
          <FcGoogle />
          Email: Autoscertifica2@gmail.com
        </span>
        <span className="social">
          <a href="" className="iconosHover">
            <BsFacebook color="#3b5998" />
          </a>
          <a href="https://www.instagram.com/yandelautos/?hl=es" target="blank">
            <BsInstagram color="#E1306C" />
          </a>
          <a href="">
            <BsTwitter color="#00acee" />
          </a>
        </span>
      </div>
    </>
  );
};

export default Top;

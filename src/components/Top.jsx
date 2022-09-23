import React from "react";
import "../Styles/Top.css";
//icons
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { FaMailBulk, FaPhoneAlt } from "react-icons/fa";
const Top = () => {
  return (
    <>
      <div className="containerBarraInfo">
        <span className="apartadoTexto">
          <FaPhoneAlt color="white" />
          Telf. 809-262-4037/809-287-7156
        </span>
        <span>
          <FaMailBulk color="white" />
          Email: YandelAutos@gmail.com
        </span>
        <span className="social">
          <a href="" className="iconosHover">
            <BsFacebook color="white" />
          </a>
          <a href="https://www.instagram.com/yandelautos/?hl=es" target="blank">
            <BsInstagram color="white" />
          </a>
          <a href="">
            <BsTwitter color="white" />
          </a>
        </span>
      </div>
    </>
  );
};

export default Top;

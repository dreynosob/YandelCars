import React from "react";
import "../Styles/Top.css";
//icons
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
const Top = () => {
  return (
    <>
      <div className="containerBarraInfo">
        <span className="apartadoTexto">Telf. 982245578</span>
        <span>Email: YandelAutos@gmail.com</span>
        <span className="social">
          <a href="" className="iconosHover">
            <BsFacebook color="white" />
          </a>
          <a href="">
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

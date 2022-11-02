import React, { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import "../Styles/HyundaiAccent.css";
//Amrok Gallery
import frontView from "../assets/imgs/Amarok 2018/frontView.JPG";
import frontView2 from "../assets/imgs/Amarok 2018/frontView2.JPG";
import frontView3 from "../assets/imgs/Amarok 2018/frontView3.JPG";
import backView from "../assets/imgs/Amarok 2018/backView.JPG";
import tablero from "../assets/imgs/Amarok 2018/tablero.jpg";
import interiorDelantero from "../assets/imgs/Amarok 2018/interiorDelantero.jpg";
import interiorDelantero2 from "../assets/imgs/Amarok 2018/interiorDelantero2.jpg";
import { NavLink } from "react-router-dom";

const Amarok = () => {
  const images = [
    {
      url: `${frontView}`,
    },
    {
      url: `${frontView2}`,
    },
    {
      url: `${frontView3}`,
    },
    {
      url: `${backView}`,
    },
    {
      url: `${tablero}`,
    },
    {
      url: `${interiorDelantero}`,
    },
    {
      url: `${interiorDelantero2}`,
    },
  ];
  const [selectedImg, setSelectedImg] = useState(images[0]);
  return (
    <div>
      <div className="contenedorGallery">
        <NavLink to="/coches">
          <BsArrowLeft color="#fff" className="tamañoFlecha" />
        </NavLink>

        <h1 className="amarokTitle">VOLKSWAGEN Amarok Extremen 2018</h1>
      </div>

      <SelectedImages selectedImg={selectedImg.url} />
      <Images
        images={images}
        selectImg={selectedImg.url}
        setSelectedImages={setSelectedImg}
      />
    </div>
  );
};

const SelectedImages = (props) => {
  const { selectedImg } = props;
  return (
    <div className="flex">
      <img className="img" src={selectedImg} alt="img" />
    </div>
  );
};

const Images = (props) => {
  const { images, selectImg, setSelectedImages } = props;
  return (
    <div className="flex">
      {images.map((data, index) => {
        return (
          <img
            style={{
              borderBottom: selectImg === data.url ? "8px solid #198754" : "",
            }}
            className="mini-img"
            key={index}
            src={data.url}
            alt="images"
            onClick={() => setSelectedImages(data)}
          />
        );
      })}
    </div>
  );
};

export default Amarok;

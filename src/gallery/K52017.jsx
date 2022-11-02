import React, { useState } from "react";
import "../Styles/HyundaiAccent.css";
import { NavLink } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
//Gallery Civic lx 2018;
import frontView from "../assets/imgs/k5 2017/k5FrontView.JPG";
import backView from "../assets/imgs/k5 2017/backView.JPG";
import sideView from "../assets/imgs/k5 2017/sideView.JPG";
import interiorDelantero from "../assets/imgs/k5 2017/interiorDelantero.jpg";
import interiorDelantero2 from "../assets/imgs/k5 2017/interiorDelantero2.jpg";
import interiorDelantero3 from "../assets/imgs/k5 2017/interiorDelantero3.jpg";
import interiortrasero2 from "../assets/imgs/k5 2017/interiorTrasero2.jpg";

const K52017 = () => {
  const images = [
    {
      url: `${frontView}`,
    },

    {
      url: `${backView}`,
    },

    {
      url: `${sideView}`,
    },
    {
      url: `${interiorDelantero}`,
    },
    {
      url: `${interiorDelantero2}`,
    },
    {
      url: `${interiorDelantero3}`,
    },
    {
      url: `${interiortrasero2}`,
    },
  ];
  const [selectedImg, setSelectedImg] = useState(images[0]);
  return (
    <div>
      <div className="contenedorGallery">
        <NavLink to="/coches">
          <BsArrowLeft color="#fff" className="tamañoFlecha" />
        </NavLink>

        <h1 className="amarokTitle">Kia K5 2017</h1>
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

export default K52017;

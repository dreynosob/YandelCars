import React, { useState } from "react";
import "../Styles/HyundaiAccent.css";
import { NavLink } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
//Gallery Civic lx 2018;
import frontView from "../assets/imgs/Highlander 2020/highlanderFrontView.JPG";
import backView from "../assets/imgs/Highlander 2020/backView.JPG";
import backSide from "../assets/imgs/Highlander 2020/backSide.JPG";
import interiorDelantero from "../assets/imgs/Highlander 2020/interiorDelantero.jpg";
import interiorDelantero2 from "../assets/imgs/Highlander 2020/interiorDelantero2.jpg";
import interiorDelantero3 from "../assets/imgs/Highlander 2020/interiorDelantero3.jpg";
import interiorTrasero from "../assets/imgs/Highlander 2020/interiorTrasero.jpg";
import interiorTrasero2 from "../assets/imgs/Highlander 2020/interiorTrasero2.jpg";
import interiorTrasero3 from "../assets/imgs/Highlander 2020/interiorTrasero2.jpg";
import sideView from "../assets/imgs/Highlander 2020/sideView.JPG";
const Highlander2020 = () => {
  const images = [
    {
      url: `${frontView}`,
    },

    {
      url: `${backView}`,
    },
    {
      url: `${backSide}`,
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
      url: `${interiorTrasero}`,
    },

    {
      url: `${interiorTrasero3}`,
    },
  ];
  const [selectedImg, setSelectedImg] = useState(images[0]);
  return (
    <div>
      <div className="contenedorGallery">
        <NavLink to="/coches">
          <BsArrowLeft color="#fff" className="tamañoFlecha" />
        </NavLink>

        <h1 className="amarokTitle">Highlander 2020</h1>
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

export default Highlander2020;

import React, { useState } from "react";
import "../Styles/HyundaiAccent.css";
import { NavLink } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
//Gallery Civic lx 2018;
import frontView from "../assets/imgs/Kia rio 2011/rioFrontView.JPG";
import backView from "../assets/imgs/Kia rio 2011/backView.JPG";
import sideView from "../assets/imgs/Kia rio 2011/sideView.JPG";
import backSide from "../assets/imgs/Kia rio 2011/backSide.JPG";
import interiorDelantero from "../assets/imgs/Kia rio 2011/interiorDelantero.jpg";
import interiorDelantero2 from "../assets/imgs/Kia rio 2011/interiorDelantero2.jpg";
import interiorTrasero from "../assets/imgs/Kia rio 2011/interiorTrasero.jpg";

const KiaRio2011 = () => {
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
      url: `${interiorTrasero}`,
    },
  ];
  const [selectedImg, setSelectedImg] = useState(images[0]);
  return (
    <div>
      <div className="contenedorGallery">
        <NavLink to="/coches">
          <BsArrowLeft color="#fff" className="tamañoFlecha" />
        </NavLink>

        <h1 className="amarokTitle">Kia Rio 2011</h1>
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

export default KiaRio2011;

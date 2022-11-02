import React, { useState } from "react";
import "../Styles/HyundaiAccent.css";
import { NavLink } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
//Gallery Civic lx 2018;
import frontView from "../assets/imgs/Picanto 2016/picantoFrontView2016.JPG";
import backView from "../assets/imgs/Picanto 2016/backView.JPG";
import backView2 from "../assets/imgs/Picanto 2016/backView2.JPG";
import sideView from "../assets/imgs/Picanto 2016/sideView.JPG";
import interiorDelantero from "../assets/imgs/Picanto 2016/interiorDelantero.jpg";
const KiaPicanto2016 = () => {
  const images = [
    {
      url: `${frontView}`,
    },

    {
      url: `${sideView}`,
    },

    {
      url: `${backView}`,
    },
    {
      url: `${backView2}`,
    },

    {
      url: `${interiorDelantero}`,
    },
  ];
  const [selectedImg, setSelectedImg] = useState(images[0]);
  return (
    <div>
      <div className="contenedorGallery">
        <NavLink to="/coches">
          <BsArrowLeft color="#fff" className="tamañoFlecha" />
        </NavLink>

        <h1 className="amarokTitle">Kia Picanto 2016</h1>
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

export default KiaPicanto2016;

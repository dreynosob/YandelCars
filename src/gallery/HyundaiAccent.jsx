import React, { useState } from "react";
import "../Styles/HyundaiAccent.css";

//Fotos GALLERY
import frontView from "../assets/imgs/Accent 2017/frontView.JPG";
import backView from "../assets/imgs/Accent 2017/backView.JPG";
import leftView from "../assets/imgs/Accent 2017/leftView.JPG";
import sideView from "../assets/imgs/Accent 2017/sideView.JPG";
import interiorDelantero2 from "../assets/imgs/Accent 2017/interiorDelantero2.JPG";
import interiorTrasero from "../assets/imgs/Accent 2017/interiorTrasero.JPG";
const HyundaiAccent = () => {
  const images = [
    {
      url: `${frontView}`,
    },
    {
      url: `${backView}`,
    },
    {
      url: `${leftView}`,
    },
    {
      url: `${sideView}`,
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

export default HyundaiAccent;

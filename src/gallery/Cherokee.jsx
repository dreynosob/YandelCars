import React, { useState } from "react";
import "../Styles/HyundaiAccent.css";
//Gallery Civic lx 2018;
import frontView from "../assets/imgs/Gran Cherokee/cherokeeFrontView.JPG";
import backView from "../assets/imgs/Gran Cherokee/backView.JPG";
import interiorDelantero from "../assets/imgs/Gran Cherokee/interiorDelantero.JPG";
import interiorDelantero2 from "../assets/imgs/Gran Cherokee/interiorDelantero2.JPG";
import interiorTrasero from "../assets/imgs/Gran Cherokee/interiorTrasero.JPG";
import interiorTrasero2 from "../assets/imgs/Gran Cherokee/interiorTrasero2.JPG";

import sideView from "../assets/imgs/Gran Cherokee/sideView.JPG";
const Cherokee = () => {
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
      url: `${interiorTrasero}`,
    },
    {
      url: `${interiorTrasero2}`,
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

export default Cherokee;

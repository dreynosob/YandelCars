import React, { useState } from "react";
import "../Styles/HyundaiAccent.css";
//Gallery Civic lx 2018;
import frontView from "../assets/imgs/Picanto 2023/frontView.JPG";
import frontSide from "../assets/imgs/Picanto 2023/frontSide.JPG";
import backView from "../assets/imgs/Picanto 2023/backView.JPG";
import sideView from "../assets/imgs/Picanto 2023/sideView.JPG";
import interiorDelantero from "../assets/imgs/Picanto 2023/interiorDelantero.jpg";
import interiorDelantero2 from "../assets/imgs/Picanto 2023/interiorDelantero2.jpg";
import interiorTrasero from "../assets/imgs/Picanto 2023/interiorTrasero.jpg";
import tablero from "../assets/imgs/Picanto 2023/tablero.jpg";

const KiaPicanto2023 = () => {
  const images = [
    {
      url: `${frontView}`,
    },
    {
      url: `${frontSide}`,
    },
    {
      url: `${sideView}`,
    },
    {
      url: `${backView}`,
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
      url: `${tablero}`,
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

export default KiaPicanto2023;

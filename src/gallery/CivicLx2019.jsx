import React, { useState } from "react";
import "../Styles/HyundaiAccent.css";
//Gallery Civic lx 2018;
import frontView from "../assets/imgs/Civic 2019/civic2019FrontView.JPG";
import backView from "../assets/imgs/Civic 2019/backView.JPG";
import interiorDelantero from "../assets/imgs/Civic 2019/interiorDelantero.JPG";
import interiorDelantero2 from "../assets/imgs/Civic 2019/interiorDelantero2.JPG";
import interiorTrasero from "../assets/imgs/Civic 2019/interiorTrasero.JPG";
import interiorTrasero2 from "../assets/imgs/Civic 2019/interiorTrasero2.JPG";
import sideView from "../assets/imgs/Civic 2019/sideView.JPG";
const CivicLx2019 = () => {
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

export default CivicLx2019;

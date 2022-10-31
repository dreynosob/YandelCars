import React, { useState } from "react";
import "../Styles/HyundaiAccent.css";
//Gallery Civic lx 2018;
import frontView from "../assets/imgs/Sentra 2017/sentra2017FrontView.JPG";
import backView from "../assets/imgs/Sentra 2017/backview.JPG";
import sideView from "../assets/imgs/Sentra 2017/sideView.JPG";
import sideView2 from "../assets/imgs/Sentra 2017/sideView2.JPG";
import interiorDelantero from "../assets/imgs/Sentra 2017/interiorDelantero.JPG";
import interiorDelantero2 from "../assets/imgs/Sentra 2017/interiorDelantero2.JPG";
import interiorTrasero from "../assets/imgs/Sentra 2017/interiorTrasero.JPG";

const Sentra2017 = () => {
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
      url: `${sideView2}`,
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

export default Sentra2017;

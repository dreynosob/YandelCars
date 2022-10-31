import React, { useState } from "react";
//Accent 2017
import AccentfrontView from "../assets/imgs/Accent 2017/frontView.JPG";
//Amarok
import AmarokfrontView from "../assets/imgs/Amarok 2018/frontView.JPG";
//Honda civic 2018
import HondaFrontView from "../assets/imgs/Civic 2018/CivicFrontView.JPG";
//civic 2019
import civic2019FrontView from "../assets/imgs/Civic 2019/civic2019FrontView.JPG";
//Cherokee
import cherokeeFront from "../assets/imgs/Gran Cherokee/cherokeeFrontView.JPG";
//Highlander 2020
import highlander2020 from "../assets/imgs/Highlander 2020/highlanderFrontView.JPG";
//Highlander 2016
import highlander2016 from "../assets/imgs/Higlander 2016/higlander2016FrontView.JPG";

//k5 2017
import k52017 from "../assets/imgs/k5 2017/k5FrontView.JPG";
//Kia 2016

//Kia rio 2011
import rio2011 from "../assets/imgs/Kia rio 2011/rioFrontView.JPG";
//Picanto 2016
import picanto2016 from "../assets/imgs/Picanto 2016/picantoFrontView2016.JPG";
//Picanto 2023
import picanto2023 from "../assets/imgs/Picanto 2023/picanto2023FrontView.JPG";
//rio 2015

//SantaFe 2017
import santaFe2017 from "../assets/imgs/SantaFe 2017/santaFeFrontView.JPG";
//sentra 2017
import sentra2017 from "../assets/imgs/Sentra 2017/sentra2017FrontView.JPG";
//Yaris 2018
import yaris2018 from "../assets/imgs/Yaris 2018/yaris2018FrontView.JPG";
//Boostrap
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
//CGallery
import HyundaiAccent from "../gallery/HyundaiAccent";
import Amarok from "../gallery/Amarok";
import CivicLx from "../gallery/CivicLx";
import CivicLx2019 from "../gallery/CivicLx2019";

import "../Styles/Coches.css";
import { NavLink } from "react-router-dom";
import Cherokee from "../gallery/Cherokee";
import Highlander2020 from "../gallery/Highlander2020";
import Highlander2016 from "../gallery/Highlander2016";
import K52017 from "../gallery/K52017";
import KiaRio2011 from "../gallery/KiaRio2011";
import KiaPicanto2016 from "../gallery/KiaPicanto2016";
import KiaPicanto2023 from "../gallery/KiaPicanto2023";
import SantaFe from "../gallery/SantaFe";
import Sentra2017 from "../gallery/Sentra2017";
import Yaris from "../gallery/Yaris";
const Coches = () => {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  return (
    <>
      {/*Amarok 2018*/}
      <div className="blog-card alt">
        <div className="meta">
          <div
            className="photo"
            style={{
              backgroundImage: `url(${AmarokfrontView})`,
            }}
          ></div>
          <ul className="details">
            <li className="tags">
              <ul>
                <li>
                  {values.map((v, idx) => (
                    <Button
                      key={idx}
                      className="me-2 mb-2"
                      onClick={() => handleShow(v)}
                    >
                      Detalles
                      {typeof v === "string" && `below ${v.split("-")[0]}`}
                    </Button>
                  ))}
                  <Modal
                    show={show}
                    fullscreen={fullscreen}
                    onHide={() => setShow(false)}
                    animation={true}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Volkswagen Amarok 2018 </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Amarok />
                    </Modal.Body>
                  </Modal>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="description">
          <h1>VOLKSWAGEN Amarok Extremen</h1>
          <h2>Diesel - 2018 - Seminuevo</h2>
          <h4>$RD15000</h4>
          <p>
            Único dueño. Récord completo en la propia casa Volkswagen, 2020. Con
            la mayor comidad y facilidad que te proporciona un 4x4. Interior en
            piel, sensores de ayuda para el parking, cámara trasera, zenón y
            led, y muchos más accesorios.
          </p>
          <p className="read-more">
            <NavLink to="/contacto">
              <Button variant="primary" className="hoverButton">
                Contactar
              </Button>
            </NavLink>
          </p>
        </div>
      </div>
      {/*Hyundai Accent 2017}
      <div className="blog-card">
        <div className="meta">
          <div
            className="photo"
            style={{
              backgroundImage: `url(${AccentfrontView})`,
            }}
          ></div>
          <ul className="details">
            <li className="tags">
              <ul>
                <li>
                  {values.map((v, idx) => (
                    <Button
                      key={idx}
                      className="me-2 mb-2"
                      onClick={() => handleShow(v)}
                    >
                      Detalles
                      {typeof v === "string" && `below ${v.split("-")[0]}`}
                    </Button>
                  ))}
                  <Modal
                    show={show}
                    fullscreen={fullscreen}
                    onHide={() => setShow(false)}
                    animation={true}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Hyundai Accent 2017</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <HyundaiAccent />
                    </Modal.Body>
                  </Modal>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="description">
          <h1>Hyundai Accent</h1>
          <h2>Gasolina - 2017 - Seminuevo</h2>
          <h4>$RD15000</h4>

          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum
            dolorum architecto obcaecati enim dicta praesentium, quam nobis!
            Neque ad aliquam facilis numquam. Veritatis, sit.
          </p>

          <p className="read-more">
            <NavLink to="/contacto">
              <Button variant="primary" className="hoverButton">
                Contactar
              </Button>
            </NavLink>
          </p>
        </div>
      </div>
      {/*Honda civic 2018 }
      <div className="blog-card">
        <div className="meta">
          <div
            className="photo"
            style={{
              backgroundImage: `url(${HondaFrontView})`,
            }}
          ></div>
          <ul className="details">
            <li className="tags">
              <ul>
                <li>
                  {values.map((v, idx) => (
                    <Button
                      key={idx}
                      className="me-2 mb-2"
                      onClick={() => handleShow(v)}
                    >
                      Detalles
                      {typeof v === "string" && `below ${v.split("-")[0]}`}
                    </Button>
                  ))}
                  <Modal
                    show={show}
                    fullscreen={fullscreen}
                    onHide={() => setShow(false)}
                    animation={true}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Honda Civic Lx 2018 </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <CivicLx />
                    </Modal.Body>
                  </Modal>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="description">
          <h1>Honda Civic LX</h1>
          <h2>Gasolina - 2018 - Seminuevo</h2>
          <h4>$RD15000</h4>

          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum
            dolorum architecto obcaecati enim dicta praesentium, quam nobis!
            Neque ad aliquam facilis numquam. Veritatis, sit.
          </p>

          <p className="read-more">
            <NavLink to="/contacto">
              <Button variant="primary" className="hoverButton">
                Contactar
              </Button>
            </NavLink>
          </p>
        </div>
      </div>
      {/* Civic 2019}
      <div className="blog-card alt">
        <div className="meta">
          <div
            className="photo"
            style={{
              backgroundImage: `url(${civic2019FrontView})`,
            }}
          ></div>
          <ul className="details">
            <li className="tags">
              <ul>
                <li>
                  {values.map((v, idx) => (
                    <Button
                      key={idx}
                      className="me-2 mb-2"
                      onClick={() => handleShow(v)}
                    >
                      Detalles
                      {typeof v === "string" && `below ${v.split("-")[0]}`}
                    </Button>
                  ))}
                  <Modal
                    show={show}
                    fullscreen={fullscreen}
                    onHide={() => setShow(false)}
                    animation={true}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Honda Civic Lx 2019 </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <CivicLx2019 />
                    </Modal.Body>
                  </Modal>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="description">
          <h1>Honda Civic LX</h1>
          <h2>Gasolina - 2019 - Seminuevo</h2>
          <h4>$RD15000</h4>
          <p>
            Único dueño. Récord completo en la propia casa Volkswagen, 2020. Con
            la mayor comidad y facilidad que te proporciona un 4x4. Interior en
            piel, sensores de ayuda para el parking, cámara trasera, zenón y
            led, y muchos más accesorios.
          </p>
          <p className="read-more">
            <NavLink to="/contacto">
              <Button variant="primary" className="hoverButton">
                Contactar
              </Button>
            </NavLink>
          </p>
        </div>
      </div>
      {/* Gran Cherokee}
      <div className="blog-card">
        <div className="meta">
          <div
            className="photo"
            style={{
              backgroundImage: `url(${cherokeeFront})`,
            }}
          ></div>
          <ul className="details">
            <li className="tags">
              <ul>
                <li>
                  {values.map((v, idx) => (
                    <Button
                      key={idx}
                      className="me-2 mb-2"
                      onClick={() => handleShow(v)}
                    >
                      Detalles
                      {typeof v === "string" && `below ${v.split("-")[0]}`}
                    </Button>
                  ))}
                  <Modal
                    show={show}
                    fullscreen={fullscreen}
                    onHide={() => setShow(false)}
                    animation={true}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Grand Cherokee </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Cherokee />
                    </Modal.Body>
                  </Modal>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="description">
          <h1>Grand Cherokee</h1>
          <h2>Diesel - 2016 - Seminuevo</h2>
          <h4>$24900</h4>

          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum
            dolorum architecto obcaecati enim dicta praesentium, quam nobis!
            Neque ad aliquam facilis numquam. Veritatis, sit.
          </p>

          <p className="read-more">
            <NavLink to="/contacto">
              <Button variant="primary" className="hoverButton">
                Contactar
              </Button>
            </NavLink>
          </p>
        </div>
      </div>
      {/*Highlander 2020 }

      <div className="blog-card alt">
        <div className="meta">
          <div
            className="photo"
            style={{
              backgroundImage: `url(${highlander2020})`,
            }}
          ></div>
          <ul className="details">
            <li className="tags">
              <ul>
                <li>
                  {values.map((v, idx) => (
                    <Button
                      key={idx}
                      className="me-2 mb-2"
                      onClick={() => handleShow(v)}
                    >
                      Detalles
                      {typeof v === "string" && `below ${v.split("-")[0]}`}
                    </Button>
                  ))}
                  <Modal
                    show={show}
                    fullscreen={fullscreen}
                    onHide={() => setShow(false)}
                    animation={true}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Toyota Highlander 2020 </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Highlander2020 />
                    </Modal.Body>
                  </Modal>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="description">
          <h1>Toyota Highlander 2020</h1>
          <h2>Gasolina - 2020 - Seminuevo</h2>
          <h4>$RD15000</h4>
          <p>
            Único dueño. Récord completo en la propia casa Volkswagen, 2020. Con
            la mayor comidad y facilidad que te proporciona un 4x4. Interior en
            piel, sensores de ayuda para el parking, cámara trasera, zenón y
            led, y muchos más accesorios.
          </p>
          <p className="read-more">
            <NavLink to="/contacto">
              <Button variant="primary" className="hoverButton">
                Contactar
              </Button>
            </NavLink>
          </p>
        </div>
      </div>
      {/*Highlander 2016 }
      <div className="blog-card">
        <div className="meta">
          <div
            className="photo"
            style={{
              backgroundImage: `url(${highlander2016})`,
            }}
          ></div>
          <ul className="details">
            <li className="tags">
              <ul>
                <li>
                  {values.map((v, idx) => (
                    <Button
                      key={idx}
                      className="me-2 mb-2"
                      onClick={() => handleShow(v)}
                    >
                      Detalles
                      {typeof v === "string" && `below ${v.split("-")[0]}`}
                    </Button>
                  ))}
                  <Modal
                    show={show}
                    fullscreen={fullscreen}
                    onHide={() => setShow(false)}
                    animation={true}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Toyota Highlander 2016 </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Highlander2016 />
                    </Modal.Body>
                  </Modal>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="description">
          <h1>Highlander 2016</h1>
          <h2>Gasolina - 2016 - Seminuevo</h2>
          <h4>$RD15000</h4>

          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum
            dolorum architecto obcaecati enim dicta praesentium, quam nobis!
            Neque ad aliquam facilis numquam. Veritatis, sit.
          </p>

          <p className="read-more">
            <NavLink to="/contacto">
              <Button variant="primary" className="hoverButton">
                Contactar
              </Button>
            </NavLink>
          </p>
        </div>
      </div>

      {/*k5 2017 }
      <div className="blog-card alt">
        <div className="meta">
          <div
            className="photo"
            style={{
              backgroundImage: `url(${k52017})`,
            }}
          ></div>
          <ul className="details">
            <li className="tags">
              <ul>
                <li>
                  {values.map((v, idx) => (
                    <Button
                      key={idx}
                      className="me-2 mb-2"
                      onClick={() => handleShow(v)}
                    >
                      Detalles
                      {typeof v === "string" && `below ${v.split("-")[0]}`}
                    </Button>
                  ))}
                  <Modal
                    show={show}
                    fullscreen={fullscreen}
                    onHide={() => setShow(false)}
                    animation={true}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>K5 2017 </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <K52017 />
                    </Modal.Body>
                  </Modal>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="description">
          <h1>K5 2017</h1>
          <h2>Gasolina - 2017 - Seminuevo</h2>
          <h4>$RD15000</h4>
          <p>
            Único dueño. Récord completo en la propia casa Volkswagen, 2020. Con
            la mayor comidad y facilidad que te proporciona un 4x4. Interior en
            piel, sensores de ayuda para el parking, cámara trasera, zenón y
            led, y muchos más accesorios.
          </p>
          <p className="read-more">
            <NavLink to="/contacto">
              <Button variant="primary" className="hoverButton">
                Contactar
              </Button>
            </NavLink>
          </p>
        </div>
      </div>

      {/*Picanto 2016 }
      <div className="blog-card alt">
        <div className="meta">
          <div
            className="photo"
            style={{
              backgroundImage: `url(${picanto2016})`,
            }}
          ></div>
          <ul className="details">
            <li className="tags">
              <ul>
                <li>
                  {values.map((v, idx) => (
                    <Button
                      key={idx}
                      className="me-2 mb-2"
                      onClick={() => handleShow(v)}
                    >
                      Detalles
                      {typeof v === "string" && `below ${v.split("-")[0]}`}
                    </Button>
                  ))}
                  <Modal
                    show={show}
                    fullscreen={fullscreen}
                    onHide={() => setShow(false)}
                    animation={true}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Kia Picanto 2016</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <KiaPicanto2016 />
                    </Modal.Body>
                  </Modal>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="description">
          <h1>Kia picanto 2016</h1>
          <h2>Gasolina - 2016 - Seminuevo</h2>
          <h4>$RD15000</h4>

          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum
            dolorum architecto obcaecati enim dicta praesentium, quam nobis!
            Neque ad aliquam facilis numquam. Veritatis, sit.
          </p>

          <p className="read-more">
            <NavLink to="/contacto">
              <Button variant="primary" className="hoverButton">
                Contactar
              </Button>
            </NavLink>
          </p>
        </div>
      </div>

      {/*Rio 2011}
      <div className="blog-card">
        <div className="meta">
          <div
            className="photo"
            style={{
              backgroundImage: `url(${rio2011})`,
            }}
          ></div>
          <ul className="details">
            <li className="tags">
              <ul>
                <li>
                  {values.map((v, idx) => (
                    <Button
                      key={idx}
                      className="me-2 mb-2"
                      onClick={() => handleShow(v)}
                    >
                      Detalles
                      {typeof v === "string" && `below ${v.split("-")[0]}`}
                    </Button>
                  ))}
                  <Modal
                    show={show}
                    fullscreen={fullscreen}
                    onHide={() => setShow(false)}
                    animation={true}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Kia Rio 2011</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <KiaRio2011 />
                    </Modal.Body>
                  </Modal>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="description">
          <h1>Kia Rio</h1>
          <h2>Gasolina - 2016 - Seminuevo</h2>
          <h4>$RD15000</h4>

          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum
            dolorum architecto obcaecati enim dicta praesentium, quam nobis!
            Neque ad aliquam facilis numquam. Veritatis, sit.
          </p>

          <p className="read-more">
            <NavLink to="/contacto">
              <Button variant="primary" className="hoverButton">
                Contactar
              </Button>
            </NavLink>
          </p>
        </div>
      </div>

      {/*Picanto 2023 }
      <div className="blog-card alt">
        <div className="meta">
          <div
            className="photo"
            style={{
              backgroundImage: `url(${picanto2023})`,
            }}
          ></div>
          <ul className="details">
            <li className="tags">
              <ul>
                <li>
                  {values.map((v, idx) => (
                    <Button
                      key={idx}
                      className="me-2 mb-2"
                      onClick={() => handleShow(v)}
                    >
                      Detalles
                      {typeof v === "string" && `below ${v.split("-")[0]}`}
                    </Button>
                  ))}
                  <Modal
                    show={show}
                    fullscreen={fullscreen}
                    onHide={() => setShow(false)}
                    animation={true}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Kia Picanto 2023</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <KiaPicanto2023 />
                    </Modal.Body>
                  </Modal>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="description">
          <h1>Kia picanto 2023</h1>
          <h2>Gasolina - 2023 - Seminuevo</h2>
          <h4>$RD15000</h4>

          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum
            dolorum architecto obcaecati enim dicta praesentium, quam nobis!
            Neque ad aliquam facilis numquam. Veritatis, sit.
          </p>

          <p className="read-more">
            <NavLink to="/contacto">
              <Button variant="primary" className="hoverButton">
                Contactar
              </Button>
            </NavLink>
          </p>
        </div>
      </div>

      {/*SnataFe 2017}
      <div className="blog-card alt">
        <div className="meta">
          <div
            className="photo"
            style={{
              backgroundImage: `url(${santaFe2017})`,
            }}
          ></div>
          <ul className="details">
            <li className="tags">
              <ul>
                <li>
                  {values.map((v, idx) => (
                    <Button
                      key={idx}
                      className="me-2 mb-2"
                      onClick={() => handleShow(v)}
                    >
                      Detalles
                      {typeof v === "string" && `below ${v.split("-")[0]}`}
                    </Button>
                  ))}
                  <Modal
                    show={show}
                    fullscreen={fullscreen}
                    onHide={() => setShow(false)}
                    animation={true}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Hyundai Santafe</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <SantaFe />
                    </Modal.Body>
                  </Modal>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="description">
          <h1>Hyundai Santafe</h1>
          <h2>Gasolina - 2017 - Seminuevo</h2>
          <h4>$RD15000</h4>

          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum
            dolorum architecto obcaecati enim dicta praesentium, quam nobis!
            Neque ad aliquam facilis numquam. Veritatis, sit.
          </p>

          <p className="read-more">
            <NavLink to="/contacto">
              <Button variant="primary" className="hoverButton">
                Contactar
              </Button>
            </NavLink>
          </p>
        </div>
      </div>

      {/*Sentra 2017}
      <div className="blog-card">
        <div className="meta">
          <div
            className="photo"
            style={{
              backgroundImage: `url(${sentra2017})`,
            }}
          ></div>
          <ul className="details">
            <li className="tags">
              <ul>
                <li>
                  {values.map((v, idx) => (
                    <Button
                      key={idx}
                      className="me-2 mb-2"
                      onClick={() => handleShow(v)}
                    >
                      Detalles
                      {typeof v === "string" && `below ${v.split("-")[0]}`}
                    </Button>
                  ))}
                  <Modal
                    show={show}
                    fullscreen={fullscreen}
                    onHide={() => setShow(false)}
                    animation={true}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Nissan Sentra 2017</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Sentra2017 />
                    </Modal.Body>
                  </Modal>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="description">
          <h1>Nissan Sentra</h1>
          <h2>Gasolina - 2017 - Seminuevo</h2>
          <h4>$RD15000</h4>

          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum
            dolorum architecto obcaecati enim dicta praesentium, quam nobis!
            Neque ad aliquam facilis numquam. Veritatis, sit.
          </p>

          <p className="read-more">
            <NavLink to="/contacto">
              <Button variant="primary" className="hoverButton">
                Contactar
              </Button>
            </NavLink>
          </p>
        </div>
      </div>

      {/*Yaris}
      <div className="blog-card alt">
        <div className="meta">
          <div
            className="photo"
            style={{
              backgroundImage: `url(${yaris2018})`,
            }}
          ></div>
          <ul className="details">
            <li className="tags">
              <ul>
                <li>
                  {values.map((v, idx) => (
                    <Button
                      key={idx}
                      className="me-2 mb-2"
                      onClick={() => handleShow(v)}
                    >
                      Detalles
                      {typeof v === "string" && `below ${v.split("-")[0]}`}
                    </Button>
                  ))}
                  <Modal
                    show={show}
                    fullscreen={fullscreen}
                    onHide={() => setShow(false)}
                    animation={true}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Toyota Yaris 2018 </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Yaris />
                    </Modal.Body>
                  </Modal>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="description">
          <h1>Toyota Yaris</h1>
          <h2>Gasolina - 2018 - Seminuevo</h2>
          <h4>$RD15000</h4>

          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum
            dolorum architecto obcaecati enim dicta praesentium, quam nobis!
            Neque ad aliquam facilis numquam. Veritatis, sit.
          </p>

          <p className="read-more">
            <NavLink to="/contacto">
              <Button variant="primary" className="hoverButton">
                Contactar
              </Button>
            </NavLink>
          </p>
        </div>
                  </div>*/}
    </>
  );
};

export default Coches;

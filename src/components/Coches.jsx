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
                  <NavLink to="/amarok">
                    <Button variant="primary" className="hoverButton">
                      Detalles
                    </Button>
                  </NavLink>
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
      {/*Hyundai Accent 2017*/}
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
                  <NavLink to="/hyundaiAccent">
                    <Button variant="primary" className="hoverButton">
                      Detalles
                    </Button>
                  </NavLink>
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
      {/*Honda civic 2018*/}
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
                  <NavLink to="/hondaCivic18">
                    <Button variant="primary" className="hoverButton">
                      Detalles
                    </Button>
                  </NavLink>
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
      {/* Civic 2019*/}
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
                  <NavLink to="/hondaCivic19">
                    <Button variant="primary" className="hoverButton">
                      Detalles
                    </Button>
                  </NavLink>
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
      {/* Gran Cherokee*/}
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
                  <NavLink to="/cherokee">
                    <Button variant="primary" className="hoverButton">
                      Contactar
                    </Button>
                  </NavLink>
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
      {/*Highlander 2020*/}
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
                  <NavLink to="/highlander">
                    <Button variant="primary" className="hoverButton">
                      Contactar
                    </Button>
                  </NavLink>
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
      {/*Highlander 2016 */}
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
                  <NavLink to="/highlander2016">
                    <Button variant="primary" className="hoverButton">
                      Contactar
                    </Button>
                  </NavLink>
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
      {/*k5 2017 */}
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
                  <NavLink to="/k5">
                    <Button variant="primary" className="hoverButton">
                      Contactar
                    </Button>
                  </NavLink>
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
      {/*Picanto 2016*/}
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
                  <NavLink to="/picanto2016">
                    <Button variant="primary" className="hoverButton">
                      Contactar
                    </Button>
                  </NavLink>
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
      {/*Rio 2011*/}
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
                  <NavLink to="/rio2011">
                    <Button variant="primary" className="hoverButton">
                      Contactar
                    </Button>
                  </NavLink>
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
      {/*Picanto 2023*/}
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
                  <NavLink to="/picanto2023">
                    <Button variant="primary" className="hoverButton">
                      Contactar
                    </Button>
                  </NavLink>
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
      {/*SnataFe 2017*/}
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
                  <NavLink to="/santafe2017">
                    <Button variant="primary" className="hoverButton">
                      Contactar
                    </Button>
                  </NavLink>
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
      {/*Sentra 2017*/}
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
                  <NavLink to="/sentra2017">
                    <Button variant="primary" className="hoverButton">
                      Contactar
                    </Button>
                  </NavLink>
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
      {/*Yaris*/}
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
                  <NavLink to="/yaris">
                    <Button variant="primary" className="hoverButton">
                      Contactar
                    </Button>
                  </NavLink>
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
      </div>
    </>
  );
};

export default Coches;

import React from "react";
import suv from "../imgs/suv1.png";
import coupe from "../imgs/coupe1.png";
import sedan from "../imgs/sedan1.jpg";
import sport from "../imgs/sport1.png";
import "../Styles/PortadaListaCoches.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const PortadaListaCoches = () => {
  return (
    <section className="contenedorCochesPortada">
      {/*  <section className="contenedorCochesPortada">
        <div className="cars">
      <img src={suv} alt="Suv" style={{ marginTop: "200px" }} />
          <Button variant="danger" className="hoverBoton" size="sm">
            Suvs
          </Button>
        </div>
        <div className="cars">
          <img src={sedan} alt="Sedan" style={{ marginTop: "200px" }} />
          <Button variant="danger" className="hoverBoton" size="sm">
            Sedans
          </Button>
        </div>

        <div className="cars">
          <img src={coupe} alt="Coupe" className="imgPortadaLista" />
          <Button variant="danger" className="hoverBoton" size="sm">
            Coupes
          </Button>
        </div>
        <div className="cars">
          <img src={sport} alt="Sport" className="imgPortadaLista" />
          <Button variant="danger" className="hoverBoton" size="sm">
            Sports
          </Button>
        </div>
      </section>*/}
      <div className="cars">
        <Card style={{ width: "18rem" }} border="light" className="bordeCards">
          <Card.Img variant="top" src={suv} />
          <Card.Body>
            <Card.Title>Suvs</Card.Title>
            <Card.Text>
              Son coches mixtos porque combinan las características de un
              turismo, con la robustez propia de los todoterrenos ya que su
              aspecto exterior es parecido al de los 4x4.
            </Card.Text>
            <Button variant="primary">Ver vehículos</Button>
          </Card.Body>
        </Card>
      </div>

      <div className="cars">
        <Card style={{ width: "18rem" }} border="light" className="bordeCards">
          <Card.Img variant="top" src={coupe} className="imgPortadaLista" />
          <Card.Body>
            <Card.Title>Coupes</Card.Title>
            <Card.Text>
              Una de las principales características de estos coches es que su
              carrocería es mucho más rígida, ya que sólo cuentan con dos
              puertas.
            </Card.Text>
            <Button variant="primary">Ver vehículos</Button>
          </Card.Body>
        </Card>
      </div>

      <div className="cars">
        <Card style={{ width: "18rem" }} border="light" className="bordeCards">
          <Card.Img variant="top" src={sedan} />
          <Card.Body>
            <Card.Title>Sedans</Card.Title>
            <Card.Text>
              Son particularmente robustos y cómodos, por lo que se les
              considera como una excelente opción de vehículo para la ciudad o
              viajes.
            </Card.Text>
            <Button variant="primary">Ver vehículos</Button>
          </Card.Body>
        </Card>
      </div>

      <div className="cars">
        <Card style={{ width: "18rem" }} border="light" className="bordeCards">
          <Card.Img variant="top" src={sport} className="imgPortadaLista" />
          <Card.Body>
            <Card.Title>Sports</Card.Title>
            <Card.Text>
              Un automóvil deportivo es un vehículo diseñado para poder circular
              a altas velocidades. Pensados para ser conducidos a altas
              velocidades.
            </Card.Text>
            <Button variant="primary">Ver vehículos</Button>
          </Card.Body>
        </Card>
      </div>
    </section>
  );
};

export default PortadaListaCoches;

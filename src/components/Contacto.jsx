import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import "../Styles/Contacto.css";
const Contacto = () => {
  const [validated, setValidated] = useState(false);
  const [datos, setDatos] = useState({
    nombre: "",
    apellido: "",
    email: "",
    ciudad: "",
    provincia: "",
    terms: false,
  });

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <div className="fondoContact">
        <h2 className="text-center margen " style={{ color: "#ffde00" }}>
          ¡Contáctanos!
        </h2>
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          className="contenedorForm"
        >
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Nombre"
                defaultValue="Autos"
                name="nombre"
                onChange={handleInputChange}
              />
              <Form.Control.Feedback type="valid">
                Bien hecho!
              </Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                El nombre no puede quedar en blanco y sólo se permiten letras.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Apellidos</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Apellido"
                defaultValue="Certifica2"
                name="apellido"
                onChange={handleInputChange}
              />

              <Form.Control.Feedback type="valid">
                Bien hecho!
              </Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                El nombre no puede quedar en blanco y sólo se permiten letras.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Email</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="email"
                  placeholder="Autoscertifica2@gmail.com"
                  aria-describedby="inputGroupPrepend"
                  name="email"
                  onChange={handleInputChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Por favor, escribe un email válido
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label>Ciudad</Form.Label>
              <Form.Select
                aria-label="Selecciona una ciudad de RD"
                name="ciudad"
                onChange={handleInputChange}
                required
              >
                <option value="Santo Domingo">Santo Domingo</option>
                <option value="Santiago de los Caballeros">
                  Santiago de los Caballeros
                </option>
                <option value="Santo Domingo Este">Santo Domingo Este</option>
                <option value="Santo Domingo Norte">Santo Domingo Norte</option>
                <option value="Santo Domingo Oeste">Santo Domingo Oeste</option>
                <option value="San Felipe de Puerto Plata">
                  San Felipe de Puerto Plata
                </option>
                <option value="Higüey">Higüey</option>
                <option value="San Francisco de Macorís">
                  San Francisco de Macorís
                </option>
                <option value="San Cristóbal">San Cristóbal</option>
                <option value="San Pedro de Macoris">
                  San Pedro de Macoris
                </option>
                <option value="Los Alcarrizos">Los Alcarrizos</option>
                <option value="La Vega">La Vega</option>
                <option value="La Romana">La Romana</option>
                <option value="Moca">Moca</option>
                <option value="	Villa Altagracia">Villa Altagracia</option>
                <option value="San Juan de La Maguana">
                  San Juan de La Maguana
                </option>
                <option value="Bonao"> Bonao</option>
                <option value="Haina">Haina</option>
                <option value="Cotuí">Cotuí</option>
                <option value="	Baní">Baní</option>
                <option value="Santa Cruz de Barahona">Barahona</option>
                <option value="	Azua de Compostela">Azua</option>
                <option value="Boca Chica">Boca Chica</option>
                <option value="	Villa hermosa">Villa hermosa</option>
                <option value="Mao">Mao</option>
                <option value="Pedro Brand">Pedro Brand</option>
                <option value="Tamboril">Tamboril</option>
                <option value="San Antonio de Guerra">Guerra</option>
                <option value="San Ignacio de Sabaneta">Sabaneta</option>
                <option value="Santa Cruz del Seibo">El Seibo</option>
                <option value="Nagua">Nagua</option>
                <option value="Puñal">Puñal</option>
                <option value="Hato Mayor del Rey">Hato Mayor</option>
                <option value="Esperanza">Esperanza</option>
                <option value="Sosúa">Sosúa</option>
                <option value="Jarabacóa">Jabaracoa</option>
                <option value="San José De Las Matas">
                  San José De Las Matas
                </option>
                <option value="Yamasá">Yamasá</option>
                <option value="Constanza">Constanza</option>
                <option value="Monte Plata">Monte Plata</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Por favor, introduce una ciudad de RD.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom04">
              <Form.Label>Provincia</Form.Label>
              <Form.Select
                aria-label="Selecciona una ciudad de RD"
                name="provincia"
                onChange={handleInputChange}
                required
              >
                <option value="Santo Domingo">Distrito Nacional</option>
                <option value="Santiago de los Caballeros">Santiago</option>
                <option value="Santo Domingo Este">Santo Domingo</option>
                <option value="Santo Domingo Norte">Santo Domingo</option>
                <option value="Santo Domingo Oeste">Santo Domingo</option>
                <option value="San Felipe de Puerto Plata">Puerto Plata</option>
                <option value="Higüey">La Altagracia</option>
                <option value="San Francisco de Macorís">Duarte</option>
                <option value="San Cristóbal">San Cristóbal</option>
                <option value="San Pedro de Macoris">
                  San Pedro de Macoris
                </option>
                <option value="Los Alcarrizos">Santo Domingo</option>
                <option value="La Vega">La Vega</option>
                <option value="La Romana">La Romana</option>
                <option value="Moca">Espaillat</option>
                <option value="	Villa Altagracia">San Cristóbal</option>
                <option value="San Juan de La Maguana">
                  San Juan de La Maguana
                </option>
                <option value="Bonao">Monseñor Nouel</option>
                <option value="Haina">San Cristóbal</option>
                <option value="Cotuí">Sánchez Ramírez</option>
                <option value="	Baní">Peravia</option>
                <option value="Santa Cruz de Barahona">Barahona</option>
                <option value="	Azua de Compostela">Azua</option>
                <option value="Boca Chica">Santo Domingo</option>
                <option value="	Villa hermosa">La Romana</option>
                <option value="Mao">Valverde</option>
                <option value="Pedro Brand">Santo Domingo</option>
                <option value="Tamboril">Santiago</option>
                <option value="San Antonio de Guerra">Santo Domingo</option>
                <option value="San Ignacio de Sabaneta">
                  Santiago Rodríguez
                </option>
                <option value="Santa Cruz del Seibo">El Seibo</option>
                <option value="Nagua">María Trinidad Sánchez</option>
                <option value="Puñal">Santiago</option>
                <option value="Hato Mayor del Rey">Hato Mayor</option>
                <option value="Esperanza">Valverde Mao</option>
                <option value="Sosúa">Puerto Plata</option>
                <option value="Jarabacóa">La Vega</option>
                <option value="San José De Las Matas">Santiago</option>
                <option value="Yamasá">Monte Plata</option>
                <option value="Constanza">La Vega</option>
                <option value="Monte Plata">Monte Plata</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Por favor, introduce una provincia de RD.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Check
              required
              label="Acepto los términos y condiciones"
              feedback="Debes aceptar los términos y condiciones."
              feedbackType="invalid"
              name="terms"
            />
          </Form.Group>
          <Button type="submit" variant="primary" className="colorBtn">
            Enviar formulario
          </Button>
        </Form>
      </div>
      <div class="responsive-map-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.8335062892625!2d-69.9702987!3d18.445867099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ea561ecd1e04343%3A0x3a8eca0ed68b78bc!2sAv.%20R%C3%B3mulo%20Betancourt%20538%2C%20Santo%20Domingo%2C%20Rep%C3%BAblica%20Dominicana!5e0!3m2!1ses!2ses!4v1665763288964!5m2!1ses!2ses" />
      </div>
    </>
  );
};

export default Contacto;

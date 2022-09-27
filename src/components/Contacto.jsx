import React, { useState } from "react";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import {
  FaMailBulk,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaBusinessTime,
} from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import "../Styles/Contacto.css";
const Contacto = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <h2 className="text-center margen">¡Contáctanos!</h2>
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
              defaultValue="Yandel"
            />
            <Form.Control.Feedback>Bien hecho!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Apellidos</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Apellido"
              defaultValue="Autos"
            />
            <Form.Control.Feedback>Bien hecho!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>Email</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="email"
                placeholder="YandelAutos@gmail.com"
                aria-describedby="inputGroupPrepend"
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
            <Form.Control type="text" placeholder="Ciudad" required />
            <Form.Control.Feedback type="invalid">
              Por favor, introduce una ciudad de RD.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>Provincia</Form.Label>
            <Form.Control type="text" placeholder="Provincia" required />
            <Form.Control.Feedback type="invalid">
              Por favor, introduce una provincia de RD.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Acepto los términos y condiciones"
            feedback="Debes aceptar los Términos y Condiciones."
            feedbackType="invalid"
          />
        </Form.Group>
        <Button type="submit" variant="danger">
          Enviar formulario
        </Button>
      </Form>
    </>
  );
};

export default Contacto;

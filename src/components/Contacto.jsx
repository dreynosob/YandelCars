import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../Styles/Contacto.css";
const Contacto = () => {
  return (
    <div>
      <h2>Contáctanos via email</h2>
      <Form className="colorForm">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control
            type="placeholder"
            placeholder="¿En que podemos ayudarte?"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="danger" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Contacto;

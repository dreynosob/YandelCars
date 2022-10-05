import React from "react";
import "../Styles/About.css";
import "../Styles/ContenidoPortada1.css";
import ContenidoPortada1 from "../components/ContenidoPortada1";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const About = () => {
  return (
    <>
      <div>
        <ContenidoPortada1 />
      </div>
      <div className="contenedorAbout">
        <div>
          <h2 className="colorTitulosAbout">1. Emprendiendo el viaje</h2>
          <p>
            Juntaron a un equipo de personas con experiencia en el mundo del
            motor, tecnología y marketing y se lanzaron a construir un nuevo
            concepto de compra y venta de coches en Santo Domingo basado en la
            transparencia, la sencillez y la confianza.
          </p>
          <p>
            Diseñaron una experiencia cliente 100% digital que permite comprar
            un coche desde el sofá y tenerlo disponible en menos tiempo que la
            competencia, y con una garantía de devolución, un facilidad a la
            hora de realizar el pago y financiamiento únicas en el mercado
          </p>
          <p>
            Hoy, además de seguir por su apuesta digital, se han convertido en
            uno de los dealers de referencia de venta de coches, de segunda mano
            y nuevo, de Santo Domingo, con más de 1.600 coches en venta en un
            único punto en Santo Domingo dónde los clientes también pueden
            comprar su coche presencialmente con las mismas garantías.
          </p>
        </div>

        <div className="anchoPabout">
          <h2 className="colorTitulosAbout">2. ¿Qué ruta hemos seguido?</h2>
          <h4>Nuestros valores: </h4>
          <p>
            <span>Sencillez:</span> Proceso online y presencial, que hace que
            comprar un coche sea tan fácil y divertido como conducirlo.
          </p>
          <p>
            <span>Transparencia:</span> dando la máxima información a los
            clientes, y el mejor trato porque la experiencia de nuestros
            clientes es lo más importante para nosotros.
          </p>
          <p>
            <span>Confianza:</span> Reinventamos el concepto segunda mano a
            “coches de buena mano”, gracias a nuestra revisión, con Kilometraje
            garantizado, cero daños estructurales, mecánica 100% garantizada y
            revisada.
          </p>
        </div>

        <div className="anchoPabout">
          <h2 className="colorTitulosAbout">
            3. Continuar con el camino, hasta llegar a nuestro destino
          </h2>
          <p>
            Lo que nos motiva es el futuro y seguir transformando el mercado de
            automoción a través de nuestro innovador modelo de venta digital y
            presencial, sin perder de vista la satisfacción de nuestros clientes
            apostando por un trato cercano y un asesoramiento de 10.
          </p>
          <NavLink to="/contacto">
            <Button variant="primary" className="colorFondos colorBtn">
              ¡Sumate a nosotros!
            </Button>
          </NavLink>
        </div>
        <hr />
      </div>
    </>
  );
};

export default About;

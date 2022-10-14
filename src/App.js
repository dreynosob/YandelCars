import "bootstrap/dist/css/bootstrap.min.css";
import Buscador from "./components/Buscador";
import ContenidoPortada1 from "./components/ContenidoPortada1";
import ContenidoPortada2 from "./components/ContenidoPortada2";
import Footer from "./components/Footer";
import Footer2 from "./components/Footer2";

import Menu from "./components/Menu";
import PortadaListaCoches from "./components/PortadaListCoches";

import Top from "./components/Top";
import "./App.css";
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import Coches from "./components/Coches";
import Contacto from "./components/Contacto";
import Naves from "./components/Nav";
import NotFound from "./components/NotFound";
import About from "./components/About";
import Promo from "./components/Promo";
import Vehiculos from "./components/Vehiculos";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/YandelCars"
            element={
              <>
                <Top />

                <Naves />
                <ContenidoPortada1 />

                <ContenidoPortada2 />
                <Promo />

                <PortadaListaCoches />

                <Footer2 />
              </>
            }
          />

          <Route
            exact
            path="/coches"
            element={
              <>
                <Top />
                <Naves />
                <Vehiculos />

                <Footer2 />
              </>
            }
          />
          <Route
            exact
            path="/terminos"
            element={
              <>
                <Top />
                <Naves />
                <NotFound />
                <Footer2 />
              </>
            }
          />

          <Route
            exact
            path="/contacto"
            element={
              <>
                <Top />
                <Naves />
                <Contacto />
                <Footer2 />
              </>
            }
          />

          <Route
            exact
            path="/nosotros"
            element={
              <>
                <Top />
                <Naves />
                <About />
                <Footer2 />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

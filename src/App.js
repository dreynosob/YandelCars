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
} from "react-router-dom";
import Coches from "./components/Coches";
import Contacto from "./components/Contacto";
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
                <Menu />
                <ContenidoPortada1 />
                <ContenidoPortada2 />
                <PortadaListaCoches />
                <Footer />
              </>
            }
          />

          <Route
            exact
            path="/YandelCars/coches"
            element={
              <>
                <Top />
                <Menu />
                <Coches />
                <Footer2 />
              </>
            }
          />

          <Route
            exact
            path="/YandelCars/contacto"
            element={
              <>
                <Top />
                <Menu />
                <Contacto />
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

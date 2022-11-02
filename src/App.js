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
import HyundaiAccent from "./gallery/HyundaiAccent";
import Amarok from "./gallery/Amarok";
import CivicLx from "./gallery/CivicLx";
import CivicLx2019 from "./gallery/CivicLx2019";
import Cherokee from "./gallery/Cherokee";
import Highlander2020 from "./gallery/Highlander2020";
import Highlander2016 from "./gallery/Highlander2016";
import K52017 from "./gallery/K52017";
import KiaPicanto2016 from "./gallery/KiaPicanto2016";
import KiaPicanto2023 from "./gallery/KiaPicanto2023";
import KiaRio2011 from "./gallery/KiaRio2011";
import SantaFe from "./gallery/SantaFe";
import Sentra2017 from "./gallery/Sentra2017";
import Yaris from "./gallery/Yaris";
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
                <Coches />

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
          {/*Gallery */}
          <Route
            exact
            path="/amarok"
            element={
              <>
                <Amarok />
                <Footer2 />
              </>
            }
          />

          <Route
            exact
            path="/hyundaiAccent"
            element={
              <>
                <HyundaiAccent />
                <Footer2 />
              </>
            }
          />

          <Route
            exact
            path="/hondaCivic18"
            element={
              <>
                <CivicLx />
                <Footer2 />
              </>
            }
          />

          <Route
            exact
            path="/hondaCivic19"
            element={
              <>
                <CivicLx2019 />
                <Footer2 />
              </>
            }
          />

          <Route
            exact
            path="/cherokee"
            element={
              <>
                <Cherokee />
                <Footer2 />
              </>
            }
          />

          <Route
            exact
            path="/highlander"
            element={
              <>
                <Highlander2020 />
                <Footer2 />
              </>
            }
          />

          <Route
            exact
            path="/highlander2016"
            element={
              <>
                <Highlander2016 />
                <Footer2 />
              </>
            }
          />

          <Route
            exact
            path="/k5"
            element={
              <>
                <K52017 />
                <Footer2 />
              </>
            }
          />

          <Route
            exact
            path="/picanto2016"
            element={
              <>
                <KiaPicanto2016 />
                <Footer2 />
              </>
            }
          />

          <Route
            exact
            path="/rio2011"
            element={
              <>
                <KiaRio2011 />
                <Footer2 />
              </>
            }
          />

          <Route
            exact
            path="/picanto2023"
            element={
              <>
                <KiaPicanto2023 />
                <Footer2 />
              </>
            }
          />

          <Route
            exact
            path="/santafe2017"
            element={
              <>
                <SantaFe />
                <Footer2 />
              </>
            }
          />

          <Route
            exact
            path="/sentra2017"
            element={
              <>
                <Sentra2017 />
                <Footer2 />
              </>
            }
          />

          <Route
            exact
            path="/yaris"
            element={
              <>
                <Yaris />
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

import "bootstrap/dist/css/bootstrap.min.css";
import React, { Suspense } from "react";
import ContenidoPortada1 from "./components/ContenidoPortada1";
import ContenidoPortada2 from "./components/ContenidoPortada2";
import Footer2 from "./components/Footer2";
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

//import Coches from "./components/Coches";
import Contacto from "./components/Contacto";
import Naves from "./components/Nav";
import NotFound from "./components/NotFound";
import About from "./components/About";
import Promo from "./components/Promo";

const HyundaiAccentLazy = React.lazy(() => import("./gallery/HyundaiAccent"));
const AmarokLazy = React.lazy(() => import("./gallery/Amarok"));
const CivicLxLazy = React.lazy(() => import("./gallery/CivicLx"));
const CivicLx2019Lazy = React.lazy(() => import("./gallery/CivicLx2019"));
const CherokeeLazy = React.lazy(() => import("./gallery/Cherokee"));
const Highlander2020Lazy = React.lazy(() => import("./gallery/Highlander2020"));
const Highlander2016Lazy = React.lazy(() => import("./gallery/Highlander2016"));
const K52017Lazy = React.lazy(() => import("./gallery/K52017"));
const KiaPicanto2016Lazy = React.lazy(() => import("./gallery/KiaPicanto2016"));
const KiaPicanto2023Lazy = React.lazy(() => import("./gallery/KiaPicanto2023"));
const KiaRio2011Lazy = React.lazy(() => import("./gallery/KiaRio2011"));
const SantaFeLazy = React.lazy(() => import("./gallery/SantaFe"));
const Sentra2017Lazy = React.lazy(() => import("./gallery/Sentra2017"));
const CochesLazy = React.lazy(() => import("./components/Coches"));
const YarisLazy = React.lazy(() => import("./gallery/Yaris"));
function App() {
  return (
    <div className="App">
      <Router>
        <Suspense
          fallback={
            <div>
              <h1 className="text-center">Loading...Please wait</h1>
            </div>
          }
        >
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
                  <CochesLazy />

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
                  <AmarokLazy />
                  <Footer2 />
                </>
              }
            />

            <Route
              exact
              path="/hyundaiAccent"
              element={
                <>
                  <HyundaiAccentLazy />
                  <Footer2 />
                </>
              }
            />

            <Route
              exact
              path="/hondaCivic18"
              element={
                <>
                  <CivicLxLazy />
                  <Footer2 />
                </>
              }
            />

            <Route
              exact
              path="/hondaCivic19"
              element={
                <>
                  <CivicLx2019Lazy />
                  <Footer2 />
                </>
              }
            />

            <Route
              exact
              path="/cherokee"
              element={
                <>
                  <CherokeeLazy />
                  <Footer2 />
                </>
              }
            />

            <Route
              exact
              path="/highlander"
              element={
                <>
                  <Highlander2020Lazy />
                  <Footer2 />
                </>
              }
            />

            <Route
              exact
              path="/highlander2016"
              element={
                <>
                  <Highlander2016Lazy />
                  <Footer2 />
                </>
              }
            />

            <Route
              exact
              path="/k5"
              element={
                <>
                  <K52017Lazy />
                  <Footer2 />
                </>
              }
            />

            <Route
              exact
              path="/picanto2016"
              element={
                <>
                  <KiaPicanto2016Lazy />
                  <Footer2 />
                </>
              }
            />

            <Route
              exact
              path="/rio2011"
              element={
                <>
                  <KiaRio2011Lazy />
                  <Footer2 />
                </>
              }
            />

            <Route
              exact
              path="/picanto2023"
              element={
                <>
                  <KiaPicanto2023Lazy />
                  <Footer2 />
                </>
              }
            />

            <Route
              exact
              path="/santafe2017"
              element={
                <>
                  <SantaFeLazy />
                  <Footer2 />
                </>
              }
            />

            <Route
              exact
              path="/sentra2017"
              element={
                <>
                  <Sentra2017Lazy />
                  <Footer2 />
                </>
              }
            />

            <Route
              exact
              path="/yaris"
              element={
                <>
                  <YarisLazy />
                  <Footer2 />
                </>
              }
            />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;

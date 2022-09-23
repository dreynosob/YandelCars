import "bootstrap/dist/css/bootstrap.min.css";
import Buscador from "./components/Buscador";
import ContenidoPortada1 from "./components/ContenidoPortada1";
import ContenidoPortada2 from "./components/ContenidoPortada2";
import Footer from "./components/Footer";

import Menu from "./components/Menu";
import PortadaListaCoches from "./components/PortadaListCoches";

import Top from "./components/Top";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Top />
      <Menu />
      <ContenidoPortada1 />
      <ContenidoPortada2 />
      <PortadaListaCoches />
      <Footer />
    </div>
  );
}

export default App;

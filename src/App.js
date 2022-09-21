import "bootstrap/dist/css/bootstrap.min.css";
import Buscador from "./components/Buscador";
import ContenidoPortada1 from "./components/ContenidoPortada1";
import ContenidoPortada2 from "./components/ContenidoPortada2";

import Menu from "./components/Menu";

import Top from "./components/Top";

function App() {
  return (
    <div>
      <Top />
      <Menu />
      <ContenidoPortada1 />

      <ContenidoPortada2 />
    </div>
  );
}

export default App;

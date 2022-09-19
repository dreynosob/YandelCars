import "bootstrap/dist/css/bootstrap.min.css";
import Filtro from "./components/Filtro";
import Menu from "./components/Menu";
import Top from "./components/Top";

function App() {
  return (
    <div>
      <Top />
      <Menu />
      <Filtro />
    </div>
  );
}

export default App;

import './App.css';
import BasicExample from "./Componentes/NavBar/NavBar";
import {ItemListContainer} from"./Componentes/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">

      <header >
      <BasicExample/>
      </header>

      <main>
      <ItemListContainer greeting="no tiene funcion"/>
      </main>

    </div>

  );
}

export default App;

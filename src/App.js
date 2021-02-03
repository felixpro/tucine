import logo from './logo.svg';
import './App.css';
import Formulario from "./Formulario"
import Movies from "./Movies"

const axios = require('axios').default;

function App() {

  return (
    <div className="App">
      <h1>Introdusca la pelicula</h1> 
      <Formulario />
      <Movies />
    </div>
  );
}

export default App;

import {useEffect, useState} from "react";
import Formulario from "./Formulario"
import Movies from "./Movies"

function Index() {

  
  return (
    <div className="Movies">
        <h1>Todos las peliculas</h1>  
        <Formulario />
        <Movies />
    </div>
  );
}

export default Index;

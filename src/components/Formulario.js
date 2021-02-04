import React, {Fragment, useState} from 'react';



const Formulario = ({crearMovie}) => {

  const [Movie, actualizarMovie] = useState({
    name:"",
    description:"",
  })

const {name, description} = Movie;

const actualizarState = e => {
  actualizarMovie({
    ...Movie,
    [e.target.name]: e.target.value
  })
}
// cuando el usuario presiona agregar Movie
const submitMovie = (e) => {
  e.preventDefault();

// insert to server

// Reiniciar el form. Resetear el value en los input
actualizarMovie({
  name:"",
  description:"",
})
}

  return (
    <Fragment>
      <h2>Crear Movie</h2>
      <form
        onSubmit={submitMovie}
        >
        <label>Name</label>
        <input
          type="string"
          name="name"
          className="u-full-width"
          onChange={actualizarState}
          value={name}
        />
        <br/>
        <label >description</label>
        <input
          type="string"
          name="description"
          className="u-full-width"
          onChange={actualizarState}
          value={description}
        />
           <br/><br/>

          <button
            type="submit"
            className="u-full-width button-primary"
            >
              Add Movie
            </button>
      </form>
    </Fragment>
  );
}


export default Formulario;

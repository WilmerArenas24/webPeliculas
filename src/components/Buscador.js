import React, { useState } from 'react'

export const Buscador = ({listadoState, setListadoState}) => {

  const [busqueda, setBusqueda] = useState('');
  //mensaje para cuando no se ecnuntre la pelicula
  const [noEncontrado, setNoEncontrado] = useState(false);

  const buscarPeli = (e) =>{
    //Crear estado y actualizarlo
    setBusqueda(e.target.value);

    // Filtrar para buscar coincidencias
    let pelis_encontradas = listadoState.filter(peli =>{
      return peli.titulo.toLowerCase().includes(busqueda.toLocaleLowerCase());
    });

    if(busqueda.length <=1 || pelis_encontradas <= 0){
      pelis_encontradas = JSON.parse(localStorage.getItem("pelis"));
      setNoEncontrado(true);
    }else{
      setNoEncontrado(false);
    }

    // Actualizar estado del listado principal con lo quwe he filtrado
    setListadoState(pelis_encontradas)
  }
  return (
    <div className="search">
          <h3 className="title">Buscador: {busqueda}</h3>
          {(noEncontrado == true && busqueda.length > 1) && (
             <span className='no-encontrado'>No se ha encontrado ninguna coincidencia</span>
          )}
          
          <form action="">
            <input 
                  type="text" 
                  id="search_field"
                  name="busqueda"
                  autoComplete='off'
                  value={busqueda}
                  onChange={buscarPeli}
            />
            <button>Buscar</button>
          </form>
        </div>

  )
}

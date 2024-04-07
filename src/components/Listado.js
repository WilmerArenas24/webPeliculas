import React, { useEffect, useState } from 'react'

export const Listado = () => {

  const [listadoState, setListadoState] = useState([]);
  
  useEffect(() =>{
    console.log('Componentes de peliculas cargado!')
       conseguirPeliculas();
  }, []);

  //Creando un metodo para conseguir las peliculas
  const conseguirPeliculas = () =>{
    //metodo para convertir lo que trae por llaves a que sea utilizable en javascript
    let peliculas = JSON.parse(localStorage.getItem("pelis"));
    
    //Rellenar con las peliculas
    setListadoState(peliculas);
  }

  return (
    <>
    {/* Recorriendo todas las peliculas que traigo por array */}
        {listadoState != null ?
                listadoState.map(peli =>{
                  return (
                    <article key={peli.id} className="peli-item">
                        <h3 className="title">{peli.titulo}</h3>
                        <p className="description">{peli.descripcion}</p>

                        <button className="edit">Editar</button>
                        <button className="delete">Borrar</button>
                  </article>
                  );
                })
        : <h2>No existen peliculas aquí</h2>        
      }

    </>
  )
}

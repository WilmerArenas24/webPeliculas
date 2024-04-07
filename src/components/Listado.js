import React, { useEffect } from 'react'

export const Listado = ({listadoState, setListadoState}) => {

  // const [listadoState, setListadoState] = useState([]);
  
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

    return peliculas;
  }

  //Borrando elicula
  const borrarPeli = (id)=>{
    //Conseguro las peliculas almnacenadas
    let pelis_almacenadas = conseguirPeliculas();

    //Filtrar esas peliculas para que elimine del array la pelicula seleccionada
    let nuevo_array_pelis = pelis_almacenadas.filter(peli => peli.id !== parseInt(id))

    //Actualizar el listado
    setListadoState(nuevo_array_pelis);

    //Actualizar el estado del local storage
    localStorage.setItem('pelis', JSON.stringify(nuevo_array_pelis))
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
                        <button className="delete" onClick={()=>{borrarPeli(peli.id)}}>Borrar</button>
                  </article>
                  );
                })
        : <h2>No existen peliculas aquí</h2>        
      }

    </>
  )
}

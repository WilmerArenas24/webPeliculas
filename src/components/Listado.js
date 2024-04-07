import React, { useEffect, useState } from 'react'
import { Editar } from './Editar';

export const Listado = ({listadoState, setListadoState}) => {

  //estado para editar las peliculas
  const [editar, setEditar] = useState(0);
  
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

                        <button className="edit" onClick={() =>{
                          setEditar(peli.id)
                        }}>Editar</button>
                        <button className="delete" onClick={()=>{borrarPeli(peli.id)}}>Borrar</button>
                   
                   {/* Aparece formulario editar */}
                   {editar === peli.id &&(
                    <Editar peli = {peli}
                            conseguirPeliculas = {conseguirPeliculas}
                            setEditar = {setEditar}
                            setListadoState = {setListadoState}
                          
                    />
                   )}

                  
                  </article>
                  );
                })
        : <h2>No existen peliculas aquí</h2>        
      }

    </>
  )
}

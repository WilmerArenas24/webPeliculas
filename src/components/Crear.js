import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';

export const Crear = () => {

    const tituloComponente = 'Añadir película';
    const [peliState, setPeliState] = useState({
        titulo:'',
        descripcion:''
    });

    // desestructurando el objeto
    const {titulo,descripcion} = peliState;

    const conseguirDatosForm = e =>{
        // evitando que la pagina se recargue al momento de enviar la informacion desde el formulario
        e.preventDefault();

        //Conseguir datos del fromulario
        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;

        //Crear objeto de la pelicula a guardar
        let peli = {
            id:  new Date().getTime(),
            titulo,
            descripcion
        };

        //Guardar estado
        setPeliState(peli);

        //Guardar en el almacenamiento local
        GuardarEnStorage(peli);
        
    }


  return (
    <div className="add">
        <h3 className="title">{tituloComponente}</h3>
         <strong>
        {(titulo && descripcion) && "Has creado la pelicula: " + titulo}
        </strong>
        <form onSubmit={conseguirDatosForm}>

        <input 
        type="text" 
        id='titulo'
        name='titulo'
        placeholder="Título" 
        />

        <textarea 
        placeholder="Descripción" 
        name="descripcion"
        id="descripcion" 
        cols="30" 
        rows="10"
        ></textarea>

        <input 
        type="submit" 
        value="Guardar" 
        />

        </form>
    </div>
  )
}

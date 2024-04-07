export const GuardarEnStorage = (clave, elemento) =>{
    //Conseguir los elemento que ya estan en el storage
    let elementos = JSON.parse(localStorage.getItem(clave));
    

    //Comprobar si es array
    if(Array.isArray(elementos)){
        //Añadir dentro del array el nuevo elemento
        elementos.push(elemento);
    }else{
        //Crear un array con la nueva elemnto
        elementos = [elemento];
    }

    //Guardar en local storage
    localStorage.setItem(clave, JSON.stringify(elementos));

    //devolver objeto peli
    return elemento;

}




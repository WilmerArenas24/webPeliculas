export const GuardarEnStorage = peli =>{
    //Conseguir los elemento que ya estan en el storage
    let elementos = JSON.parse(localStorage.getItem('pelis'));
    

    //Comprobar si es array
    if(Array.isArray(elementos)){
        //Añadir dentro del array el nuevo elemento
        elementos.push(peli);
    }else{
        //Crear un array con la nueva peli
        elementos = [peli];
    }

    //Guardar en local storage
    localStorage.setItem('pelis', JSON.stringify(elementos));

    //devolver objeto peli
    return peli;

}




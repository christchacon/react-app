import { useEffect, useState } from "react";
import { getGifs } from "../helpers/GetGifs";

//custom hook que es una función
export const useFetchGifs = ( category ) => {

    const [ listImages, setlistImages ] = useState([]);
    const [ isLoading, setIsLoading ] = useState( true );
   
    //Función que llama a función de consumo API
    // console.log(`useFetchGifs`);
    // console.log(category);
    const onListImages = async () =>{
        setlistImages( await getGifs( category ) );7
        setIsLoading( false );
    }
    //Se usa para controlar peticiones innecesarias
    useEffect(() => {
        //No puede rotornar una promesa. 
        onListImages();
    }, []);

    return {
        listImages,
        isLoading
    }
}

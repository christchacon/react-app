//Functional component para agrupar los gifs según categoria recibida.
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ( {category} ) => {

   
// //    const category = newCategory.map( cat );
// //     console.log(`GifGrid category: ${newCategory.category}`);
// //    console.log(`GifGrid quantity: ${newCategory.quantity}`);
//     console.log(`GifGrid:`);
//     console.log(category);
   const { listImages, isLoading } = useFetchGifs( category );//Hook custom
   console.log( listImages, isLoading );

    return (
        <>
           <h3>{ category.category }</h3>
           {
                isLoading && ( <h2>Loading...</h2> )
           }
           <div className="card-grid">
                {
                    listImages.map( image => (
                        <GifItem 
                            key={ image.id } 
                            image={ image }
                        />
                        //{ ...image } exparse los atributos de la imagen mediante props
                    ))
                }
            </div>
            
            
            {/*<ol>
                { listImages.map( image => (
                    <li key={ image.id }>
                        <div>
                            <h1>{ image.title }</h1>
                            <p>{ image.url }</p>
                            <img src={ image.url } />
                        </div>
                    </li>
                )) }
            </ol>*/}
        </>
    )
}

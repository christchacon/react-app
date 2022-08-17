    //Imports
import { useState } from 'react';    
import { GifGrid, AddCategories } from './Components';

    
    //Funtional Component
    export const GifExpertApp = () => {
        //const categoriesArray = ['Dragon Ball'];
        const [categories, setCategories] = useState( [] );
        
        const onAddCategory = ( newCategory ) =>{
            //const newCategory = 'Samuray X';
            console.log( newCategory );
            if( categories.includes( newCategory )) return;
            //setCategories( categories.concat( newCategory ));
            //console.log( categories );
            setCategories( [ newCategory, ...categories ] );
        }

        const onResetCategories = () =>{
            setCategories( [] );
        }
    
      //console.log( categories );
        return (
        
        <>{/*Fragmemto*/}
            <h1>GifExpertApp</h1>
            {/*<AddCategories setCategories={ setCategories }/>*/}
            <AddCategories onNewCategory={ ( newCategory ) => onAddCategory( newCategory ) } />{/* props onNewCategory es un función que recibe el valor de la categoria */}
            {/*<button aria-label="btn-addNewCategory" onClick={ onAddCategory }>New category</button>*/}
            <div>
                <button aria-label="btn-reset" onClick={ onResetCategories }>Reset</button>
                {/* Lista de categories */}
                {
                    categories.map( ( category ) => 
                    //const c = category;    
                        (
                        <GifGrid
                            key={ category }
                            category={ category }
                        />
                        ))
                }
            </div>
            
        </>
        
      )
    }
    
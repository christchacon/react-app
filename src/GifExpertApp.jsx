    //Imports
import { useState } from 'react';    
import { GifGrid, AddCategories } from './Components';

    
    //Funtional Component
    export const GifExpertApp = () => {
        //const categoriesArray = ['Dragon Ball'];
        const [categories, setCategories] = useState( [] );
        
        const onAddCategory = ( criteriaCategory ) =>{
            //const newCategory = 'Samuray X';
            //console.log( criteriaCategory );
            if( categories.includes( criteriaCategory )) return;
            //setCategories( categories.concat( newCategory ));
            //console.log( categories );
            setCategories( [ criteriaCategory, ...categories ] );
            //console.log( `Category: ${ categories} `);
        }

        const onResetCategories = () =>{
            setCategories( [] );
        }
    
      //console.log( categories );
        return (
        
        <>{/*Fragmemto*/}
            <h1>GifExpertApp</h1>
            {/*<AddCategories setCategories={ setCategories }/>*/}

            <AddCategories onNewCategory={ ( criteriaCategory ) => onAddCategory( criteriaCategory ) } />{/* props onNewCategory es un función que recibe el valor de la categoria */}

            {/*<button aria-label="btn-addNewCategory" onClick={ onAddCategory }>New category</button>*/}
            <div>
                <button aria-label="btn-reset" onClick={ onResetCategories }>Reset categories</button>
                {/* Lista de categories */}
                {
                    categories.map( ( newCategory ) => 
                    //const c = category;   
                        //console.log(`categoria: ${category.category}`);
                        (
                        <GifGrid
                            category={ newCategory }
                            key={ newCategory.category }
                        />
                        ))
                }
            </div>
            
        </>
        
      )
    }
    
import { useState } from "react"

export const AddCategories = ( { onNewCategory } ) => {//setCategories antes
  
    const [ inputCategoryValue, setInpuntCategoryValue ] = useState( '' );//Para manejar el estado real del componente
    const [ inputCantValue, setInputCantValue ] = useState( '' );//Para manejar el estado real del componente
    

    const inputCategoryChange = (event) => {
        setInpuntCategoryValue(event.target.value);
    }

    const inputCantChange = (event) => {
        setInputCantValue(event.target.value);
    }

    const onSubmit = (event) =>{
        //Enviar datos al component padre
        event.preventDefault();
        // console.log( inputCategoryValue );
        // console.log( inputCantValue );
        //onAddCategory.useState.setCategories( categories.concat( inputValue ) )
        if(inputCategoryValue.trim().length <= 1 || inputCantValue.trim().length <= 0 ) return;
        //setCategories( categories => categories.concat( inputValue ) );
        const criteriaSearch = {
            category: inputCategoryValue.trim(),
            quantity: inputCantValue.trim()
        }
        onNewCategory( criteriaSearch );
        setInpuntCategoryValue( '' );
    }

    const onResetInput = () =>{
        setInpuntCategoryValue( '' );
        setInputCantValue( '' );
        console.log( 'OnResetInput' );
    }

    return (
    
    <>
        <form onSubmit={ onSubmit }>
        
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={ inputCategoryValue }
                onChange= { (event) => inputCategoryChange( event )} //Se puede usar solo la referencia a la función. es necesario este evento en el input HTML para manejar el evento 
            />
            <input
                type="text"
                placeholder="Cantidad"
                value={ inputCantValue }
                onChange= { (event) => inputCantChange( event )} 
            />
            <button aria-label="btn-submit" onClick={ onSubmit }>Submit</button>
        </form>
        <button aria-label="btn-reset" onClick={ onResetInput }>Reset form</button>
        
    </>
  )
}

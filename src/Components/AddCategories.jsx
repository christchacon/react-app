import { useState } from "react"

export const AddCategories = ( { onNewCategory } ) => {//setCategories antes
  
    const [ inputValue, setInpuntValue ] = useState( '' );//Para manejar el estado real del componente
    

    const inputChange = (event) => {
        setInpuntValue(event.target.value);
    }

    const onSubmit = (event) =>{
        //Enviar datos al component padre
        event.preventDefault();
        //console.log( inputValue );
        //onAddCategory.useState.setCategories( categories.concat( inputValue ) )
        if(inputValue.trim().length <= 1) return;
        //setCategories( categories => categories.concat( inputValue ) );
        onNewCategory( inputValue.trim() );
        setInpuntValue( '' );
    }

    const onResetInput = () =>{
        setInpuntValue( '' );
        console.log( 'OnResetInput' );
    }

    return (
    
    <>
        <form onSubmit={ onSubmit }>
        
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange= { (event) => inputChange( event )} //Se puede usar solo la referencia a la función. es necesario este evento en el input HTML para manejar el evento 
            />
        </form>
        <button aria-label="btn-reset" onClick={ onResetInput }>Reset textbox</button>
    </>
  )
}

import { useState } from "react"

export const AddCategories = ( { onNewCategory } ) => {//setCategories antes
  
    const [ inputCategoryValue, setInputCategoryValue ] = useState( '' );//Para manejar el estado real del componente
    const [ inputCantValue, setInputCantValue ] = useState( '' );//Para manejar el estado real del componente
    

    const inputCategoryChange = (event) => {
        setInputCategoryValue(event.target.value);
    }

    const inputCantChange = (event) => {
        
        // if(/^[0-9]+$/.test(event.target.value)){
        //     setInputCantValue(event.target.value);// /^[0-9]-+$/ /^-?\d+$/cons
        //     console.log(event.target);
        // }else if(event.target.value.length == 0){
        //     setInputCantValue(event.target.value);
        // }
        if(/^[0-9]*$/.test(event.target.value)) setInputCantValue(event.target.value);
    }

    const onSubmit = (event) =>{
        //Enviar datos al component padre
        event.preventDefault();
        // console.log( inputCategoryValue );
        // console.log( inputCantValue );
        //onAddCategory.useState.setCategories( categories.concat( inputValue ) )
        if(inputCategoryValue.trim().length <= 1 || inputCantValue.trim().length <= 0 || isNaN( inputCantValue )) return;
        //setCategories( categories => categories.concat( inputValue ) );
        const criteriaSearch = {
            category: inputCategoryValue.trim(),
            quantity: inputCantValue.trim()
        }
        onNewCategory( criteriaSearch );
        setInputCategoryValue( '' );
        setInputCantValue('');

    }

    const onResetInput = () =>{
        setInputCategoryValue( '' );
        setInputCantValue( '' );
        //console.log( 'OnResetInput' );
    }

    return (
    
    <>
        <form>
        
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

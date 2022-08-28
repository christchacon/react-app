import Proptypes from "prop-types";

//Functional Component para renderizar el item Gif con sus atributos y estilos propios
export const GifItem = ( { image } ) => {//(props) tambien sirve para recibir el argumento
  return (
    <div id={ image.id } className="card">
      <img src={ image.url } />
      <p>
        { image.title }
      </p>
    </div>
  )
}

GifItem.Proptypes = {
  url: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired
}

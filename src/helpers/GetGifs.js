
//Function para consumir una api y retornar su respuesta
export const getGifs = async ( category ) => {
    const apiKey = 'PFSRgy1iodUdm1OHY2It6phRvuthIum8';
    const count = 5;
    const urlSearchGif = `https://api.giphy.com/v1/gifs/search?api_key=${ apiKey }&q=${ category }&limit=${ count }`;

    const result = await fetch( urlSearchGif );
    const { data } = await result.json();
    //console.log( data );

    const gifs = data.map( img => ({
        id: img.id,
        url: img.images.downsized_medium.url,
        title: img.title
    }))
    //console.log( gifs );
    return gifs;
}
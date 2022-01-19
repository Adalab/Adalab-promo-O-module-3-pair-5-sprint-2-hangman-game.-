const callToApi = () => {
    // Llamamos al API
    return fetch(
    "https://palabras-aleatorias-public-api.herokuapp.com/random "
    )
    .then((response) => response.json())
    .then((responseApi) => {
        console.log(responseApi.body.Word);
    return responseApi.body.Word;
    
    });
    };
    
    export default callToApi; 
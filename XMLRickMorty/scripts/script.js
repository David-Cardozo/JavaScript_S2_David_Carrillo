console.log("wenas")

//Modulacion de consumo de api
function buscarPersonaje(){
    const nombreUsar = prompt("Ingresar el nombre del personaje");
    const xhr = new XMLHttpRequest(); //Importacion del XML
    const url = `https://rickandmortyapi.com/api/character?name=${nombreUsar}`;//Acento Inverso ``
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4 && xhr.status === 200){
            try{
                const daticos = JSON.parse(xhr.responseText);
                alert("El personaje es:"+ "\n" + "Nombre: " + daticos["results"][0]["name"] + "\n" + "Status: " + daticos["results"][0]["status"] + "\n" + "Especie: " + daticos["results"][0]["species"]);
            }
            catch (err) {
                console.log(err.message); //Si algo malo pasa  muestra el error
            }
        }
    };
    xhr.send();
}

buscarPersonaje();


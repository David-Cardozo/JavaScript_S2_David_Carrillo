console.log("wenas")

//Modulacion de consumo de api
function buscarPersonaje(){
    document.getElementById("resultados").innerHTML=``;
    const nombreUsar = document.getElementById("nombreInput").value;
    const xhr = new XMLHttpRequest(); //Importacion del XML
    const url = `https://rickandmortyapi.com/api/character?name=${nombreUsar}`;//Acento Inverso ``
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4 && xhr.status === 200){
            try{
                const daticos = JSON.parse(xhr.responseText);
                if (daticos.results && daticos.results.length > 0){
                    for (let i = 0; i < daticos.results.length; i++){
                        let division = document.getElementById("resultados");
                        division.innerHTML += `<div class="card">
                        <img src="${}" alt="">
                        <h3>Morty</h3>
                        <p><strong>Estado: </strong> Vivo</p>
                        <p><strong>Especie: </strong> Humano</p>
                        </div>`
                        
                    }
                }
                //alert("El personaje es:"+ "\n" + "Nombre: " + daticos["results"][0]["name"] + "\n" + "Status: " + daticos["results"][0]["status"] + "\n" + "Especie: " + daticos["results"][0]["species"]);
            }
            catch (err) {
                //console.log(err.message); //Si algo malo pasa  muestra el error
            }
        }
    };
    xhr.send();
}



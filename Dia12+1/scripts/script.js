function buscarSuper() {
    document.getElementById("resultados").innerHTML = ``;
    const nombreSuper = document.getElementById("nombreSuper").value.trim();
    const xhr = new XMLHttpRequest();
    const url = `https://www.superheroapi.com/api.php/662a9a7e1b1ba97f1b4932104be486c4/search/${nombreSuper}`;
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            try {
                const data = JSON.parse(xhr.responseText);
                console.log(data)
                for (let i = 0; i < data.results.length; i++) {
                    let cardResult = document.getElementById("resultados");

                    cardResult.innerHTML += `
                    <div class="card">
                        <img src="${data["results"][i]["image"]["url"]}" alt="">
                        <h3>${data["results"][i]["name"]}</h3>
                        <p><strong>Status:</strong>${data["results"][i]["work"]["occupation"]}</p>
                        <p><strong>Specie:</strong>${data["results"][i]["appearance"]["gender"]}</p>
                    </div>
                    `
                }

            }
            catch (err) {
                console.log(err.message); //Si algo malo pasa  muestra el error
            }
        }
    }
    xhr.send();
}



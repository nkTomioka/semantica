let id = 1
async function mostrarPersonagem(url) {
let resposta = await fetch("https://rickandmortyapi.com/api/character/4")
let dados = await resposta.json()
if(dados.results) {
    dados = dados.results[0]
}


id = dados.id

document.getElementById("foto").src = dados.image
document.getElementById("nome").innerHTML = "Nome: " + dados.name
document.getElementById("status").innerHTML = "Status: " + traduzirStatus(dados.status)
document.getElementById("especie").innerHTML = "Especie: " + traduzirEspecie(dados.species)
document.getElementById("genero").innerHTML = "Genero: " + traduzirGenero(dados.gender)
 } 
 
 function proximo() {
    console.log("clicou")
        id++
        mostrarPersonagem(
            `https://rickandmortyapi.com/api/character/${id}`
        )
      
    }

 function anterior() {
if(id > 1) {
    id--
    mostrarPersonagem(
        `https://rickandmortyapi.com/api/character/${id}`
    )
   }
}

function buscar() {
   let valor = document.getElementById("input").value

    if(Number(valor)) {
        id = valor

mostrarPersonagem(
    `https://rickandmortyapi.com/api/character/${id}`
) 
   }   else {
        mostrarPersonagem(
            `https://rickandmortyapi.com/api/character/${valor}`
        )
    }
}


function traduzirStatus(status) {
if(status == "Alive") {
    return "Vivo"
}

if(status == "Death") {
    return "Morto"
}

return "Desconhecido"

}

function traduzirEspecie(especie) {
if(especie == "Human") {
    return "Terráqueo"
}

if(especie == "Humanoid") {
    return "Humanoide"
}

if(especie == "Robot") {
    return "Robô"
}
return especie
}

function traduzirGenero(genero) {
if(genero == "Male") {
    return "Masculino"
}

if(genero == "Female") {
    return "Feminino"
}
return "Desconhecido"

}




mostrarPersonagem(
    `https://rickandmortyapi.com/api/character/1`
)



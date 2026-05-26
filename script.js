let id = 1
async function mostrarPersonagem(url) {

    try {

let resposta = await fetch(url)
let dados = await resposta.json()

if(dados.error) {
    alert("Personagem não encontrado!")
    return
}


if(dados.results) {
    dados = dados.results[0]
}


id = dados.id

document.getElementById("foto").src = dados.image
document.getElementById("nome").innerHTML = "Nome: " + dados.name
document.getElementById("status").innerHTML = "Status: " + traduzirStatus(dados.status)
document.getElementById("especie").innerHTML = "Espécie: " + traduzirEspecie(dados.species)
document.getElementById("genero").innerHTML = "Gênero: " + traduzirGenero(dados.gender)
 } 

 catch(erro) {
    alert("Erro ao carregar personagem!")
    console.log(erro)
 }
}
 // avançar
 function proximo() {
        id++
        mostrarPersonagem(
            `https://rickandmortyapi.com/api/character/${id}`
        )
      
    }
// voltar
 function anterior() {
if(id > 1) {
    id--
    mostrarPersonagem(
        `https://rickandmortyapi.com/api/character/${id}`
    )
   }
}
// pesquisa
function buscar() {
   let valor = document.getElementById("input").value

    if(Number(valor)) {
        id = valor
// buscar por id
mostrarPersonagem(
    `https://rickandmortyapi.com/api/character/${id}`
) 
   }   else {
    // buscar pelo nome
        mostrarPersonagem(
            `https://rickandmortyapi.com/api/character/?name=${valor}`
        )
    }
}

// traduzir as informações
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

if(especie == "Mythological Creature") {
    return "Criatura Mitológica"
}

if(especie == "Disease") {
    return "Doença"
}

if(especie == "unknown") {
    return "Desconhecido"
}

if(especie == "Poopybutthole") {
    return "B.C"
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
    "https://rickandmortyapi.com/api/character/1"
)



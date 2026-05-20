let id = 1
let max = 826
async function buscarPersonagem() {
let resposta = await fetch("https://rickandmortyapi.com/api/character/220")
let dados = await resposta.json()


document.getElementById("foto").src = dados.image
document.getElementById("nome").innerHTML = "Nome: " + dados.name
document.getElementById("status").innerHTML = "Status: " + traduzirStatus(dados.status)
document.getElementById("especie").innerHTML = "Especie: " + traduzirEspecie(dados.species)
document.getElementById("genero").innerHTML = "Genero: " + traduzirGenero(dados.gender)
 } 
 
 function proximo() {
    if(id < max){
        id++
        buscarPersonagem()
    }
 }

 function anterior() {
if(id > 1) {
    id--
    buscarPersonagem()
   }
}

function buscarPorId() {
    id = document.getElementById("input").value

    if(valorInput >= 1 && valorInput <= max) {
id = valorInput
buscarPersonagem()
    }else{
        alert("Digite um ID entre 1 e 826")
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




buscarPersonagem()



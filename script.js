let id = 1
async function buscarProduto() {
let resposta = await fetch("https://rickandmortyapi.com/api/character/1")
let dados = await resposta.json()

document.getElementById("foto").src = 
document.getElementById("nome").innerHTML = "Nome: " + dados.name
document.getElementById("status").innerHTML = "Status: " + dados.status
document.getElementById("especie").innerHTML = "Especie: " + dados.especie
document.getElementById("genero").innerHTML = "Genero: " + dados.genero
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

buscarPersonagem()



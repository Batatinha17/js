// Crie um script que recebe um vetor e um elemento, e retorna true se o elemento estiver presente no vetor, caso contrário, retorna false
prompt = require("prompt-sync")()

let vetor = ["a", "3" ,"j" ,"2", "i", "y", "1", "0", "5", "b"]
const elemento = prompt("Digite um elemento: ")

let encontrado = false;
for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] === elemento) {
        encontrado = true;
    }
}
console.log(encontrado)
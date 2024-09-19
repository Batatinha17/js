// Preencher um vetor de n elementos com "Ímpar" se o índice do elemento for ímpar, e "Par" se for par. Escrever o vetor após o seu total preenchimento.
prompt = require("prompt-sync")()

let n = Number(prompt("Digite o número: "))
let vetor = []

for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
        vetor[i] = "Par"
    } else {
        vetor[i] = "Ímpar"
    }
}
console.log(vetor)
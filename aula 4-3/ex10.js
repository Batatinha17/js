// Algoritmo que leia 10 valores, calcule e escreva a média aritmética desses valores
prompt = require("prompt-sync")()

let soma = 0
let cont = 0

while (cont < 10) {
  let valor = Number(prompt(`Digite o valor ${cont + 1}: `))
  valor = Number(valor)
  soma += valor
  cont++
}

const media = soma / cont

console.log(`A média aritmética dos valores é: ${media}`)
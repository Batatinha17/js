// Algoritmo que leia um valor e mostre todos os valores inteiros entre 1 e o valor lido
prompt = require("prompt-sync")()

let valor = Number(prompt("Digite um valor maior que ZERO: "))

if (valor <= 0) {
 console.log("O valor deve ser maior que ZERO.")
} else {
 for (let i = 1; i <= valor; i++) {
  console.log(i);
 }
}
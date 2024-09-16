// Código para imprimir a tabuada de um número
prompt = require("prompt-sync")()

let numero = Number(prompt("Digite um número: "))

for (let i = 0; i <= 10; i++) {
  console.log(numero * i)
}
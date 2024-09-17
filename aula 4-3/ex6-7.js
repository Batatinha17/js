// Algoritmo para ler 2 valores e imprimir o resultado da divisão do primeiro pelo segundo.
// Acrescente uma mensagem de ‘VALOR INVÁLIDO’ no exercício 6, caso o segundo valor informado seja ZERO
prompt = require("prompt-sync")()

let v1 = Number(prompt("Digite o primeiro valor: "))
let v2 = Number(prompt("Digite o segundo valor: "))

while (v2 === 0) {
  console.log("Valor inválido")
  v2 = Number(prompt("Digite um novo valor para o segundo número: "))
}

let result = v1 / v2

console.log(`O resultado da divisão é: ${result}`)
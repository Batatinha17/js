// Algoritmo para ler uma quantidade indeterminada de valores inteiros. Para cada valor fornecido, escreva uma mensagem que indica se cada valor é PAR ou ÍMPAR
prompt = require("prompt-sync")()

while (true) {
  let valor = Number(prompt("Digite um valor inteiro (ou '0' para encerrar): "))
  if (valor === 0) {
    break
  }

  if (valor % 2 === 0) {
    console.log(`O valor ${valor} é PAR.`)
  } else {
    console.log(`O valor ${valor} é ÍMPAR.`)
  }
}
  
console.log("Programa encerrado!")
// Criar um script que recebe um vetor de números e retorna o maior número presente no vetor.
prompt = require('prompt-sync')()

let num = []
let tamanho = parseInt(prompt("Digite o tamanho do vetor: "))

for (let i = 0; i < tamanho; i++) {
  let elemento = parseInt(prompt(`Digite o elemento ${i+1} do vetor: `))
  num.push(elemento)
}

num.sort((a, b) => a - b)

let maior = num[num.length - 1]

console.log(num)
console.log(`O maior número deste vetor é: ${maior}`)
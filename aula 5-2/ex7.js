// Crie um script que recebe um vetor de qualquer tamanho e qual número e retorna a média dos seus elementos.
prompt = require('prompt-sync')()

let vetor = []
let tamanho = Number(prompt('Digite o tamanho do vetor: '))

for (let i = 0; i < tamanho; i++) {
    let elemento = Number(prompt(`Digite o elemento ${i+1} do vetor: `))
    vetor.push(elemento)
}

let soma = vetor.reduce((a, b) => a + b)
let media = soma / vetor.length

console.log(vetor)
console.log(`A média dos elementos do vetor é: ${media.toFixed(2)}`)

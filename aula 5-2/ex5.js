// Criar um vetor de números, crie um novo vetor com os elementos na ordem inversa.

let vetOrigin = [1, 2, 3, 4, 5]

let vetInver = []
for (let i = vetOrigin.length - 1; i >= 0; i--) {
  vetInver.push(vetOrigin[i])
}
console.log(vetOrigin)
console.log(vetInver)
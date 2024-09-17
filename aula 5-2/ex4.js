// Criar um vetor de números inteiros. Crie um novo vetor contendo apenas os números pares

let num = [3, 14, 0, 9, 12]
let i = 0
let par = 0

while (i < num.length) {
    if (num[i] % 2 == 0) {
        console.log(num[i])
    }
    i++
}
console.log(par)
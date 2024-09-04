// Código para determinar a ordem dos números (crescente, decrescente ou desordenada.)
prompt = require("prompt-sync")()
const num1 = Number(prompt('Digite seu primeiro número: '))
const num2 = Number(prompt('Digite seu segundo número: '))
const num3 = Number(prompt('Digite seu terceiro número: '))

if (num1 > num2 || num1 > num3) {
    console.log("Ordem decrescente.")
} else if (num1 < num2 || num1 < num3) {
    console.log("Ordem crescente.")
}
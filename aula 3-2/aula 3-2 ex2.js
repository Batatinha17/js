// Código determine se um quadrilátero é um quadrado, retângulo, losango ou outro.
prompt = require("prompt-sync")()
const a = Number(prompt("Digite o primeiro número do lado: "))
const b = Number(prompt("Digite o segundo número do lado: "))
const c = Number(prompt("Digite o terceiro número do lado: "))
const d = Number(prompt("Digite o quarto número do lado: "))

if(a === b && b === c && c === d){
    console.log("Quadrado.")
} else if (a === c && b === d){
        console.log("Retângulo.")
} else if (a === b) {
        console.log("Losango.")
} else {
    console.log("Outro tipo.")
}
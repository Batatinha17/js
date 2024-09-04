// Código para calcular a média de um aluno
prompt = require("prompt-sync")()
const nota = Number(prompt("Insira a nota: "))
const nota2 = Number(prompt("Insira a nota: "))
const nota3 = Number(prompt("Insira a nota: "))
const media = (nota + nota2 + nota3) / 3

if(media > 85) {
    console.log(`Você ficou com ${media.toFixed(0)} pontos.`)
    console.log(`A sua boneficação foi de +5 pontos.`)
} else if (media >= 70 && media <= 85) {
    console.log(`Sua nota foi de ${media.toFixed(0)} pontos.`)
    console.log(`A sua boneficação foi de +3 pontos.`)
} else if (media < 70) {
    console.log(`Sua nota foi de ${media.toFixed(0)} pontos.`)
    console.log(`A sua boneficação foi de 0 pontos.`)
}
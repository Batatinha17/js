// Código para ler a velocidade de um veículo
prompt = require('prompt-sync')()
const velocidade = Number(prompt("Qual a velocidade do veículo?"))

if (velocidade <= 80) {
    console.log('Você está dentro do limite de velocidade!')
} else if (velocidade >= 81 && velocidade <= 100) {
    console.log('Você está fora do limite de velocidade. Uma multa leve será aplicada.')
} else if (velocidade >= 101) {
    console.log('Você está sujeito à uma multa grave devido a velocidade extremamente elevada.')
}
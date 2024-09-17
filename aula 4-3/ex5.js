// Algoritmo para ler 2 notas de um aluno, calcular e imprimir a média final
prompt = require("prompt-sync")()

let continuar = true

while (true) {
 let nota1 = Number(prompt("Digite a primeira nota: "))
 let nota2 = Number(prompt("Digite a segunda nota: "))
 let media = (nota1 + nota2) / 2
 console.log("A média é: " + media)

 let resposta = prompt('Calcular a média de outro aluno? Se sim digite "1" se não digite "2" ')
 if (resposta === '2') {
  continuar = false
  console.log("Até logo.")
  break
 } else if (resposta !== '1') {
  console.log("Resposta inválida.")
  continuar = false
 }
}
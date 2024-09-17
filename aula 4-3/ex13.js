// Algoritmo que leia a quantidade de alunos em uma turma. Após, leia as notas desses alunos, calcule e mostre a média aritmética dessas notas
prompt = require("prompt-sync")()

const estudantes = Number(prompt("Qual o número de estudantes? "))
let somaNotas = 0

for (let i = 0; i < estudantes; i++) {
  let nota = Number(prompt(`Qual a nota do aluno ${i+1}? `))
  somaNotas += nota
}

const media = somaNotas / estudantes
console.log(`A média da turma é ${media.toFixed(1)}`)
// Código para informar notas
prompt = require("prompt-sync")()
const nota1 = Number(prompt('Qual foi a primeiro nota aluno?'))
const nota2 = Number(prompt('Qual foi a segundo nota aluno?'))
const nota3 = Number(prompt('Qual foi a terceiro nota aluno?'))
const media = (nota1 + nota2 + nota3) / 3

if (media < 4) {
    console.log("Reprovado!");
  } else if (media >= 4 && media < 7) {
    console.log("Em recuperação!");
  } else if (media >= 7) {
    console.log("Aprovado!");
  }
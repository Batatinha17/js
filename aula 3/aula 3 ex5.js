// Leitor de números para informar se é ímpar ou par
prompt = require('prompt-sync')()
const num = parseInt(prompt('Digite um número inteiro: '))

if (num % 2 == 0) {
    console.log(`O número ${num} é par.`);
  } else {
    console.log(`O número ${num} é ímpar.`);
  }
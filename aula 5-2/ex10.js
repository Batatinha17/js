// Ler um vetor de 10 nomes. Entrar com o nome de uma pessoa pelo prompt
prompt = require('prompt-sync')()

let nomes = ['joao', 'erica', 'pouey', 'almeida', 'freitas', 'mariana', 'gian', 'gerson', 'adriano', 'assis']
let n = prompt("Digite um nome: ").toLowerCase();
let result = nomes.includes(n) ? "ACHEI" : "NÃO ACHEI"

console.log(result)

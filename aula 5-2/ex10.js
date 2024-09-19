// Ler um vetor de 10 nomes. Entrar com o nome de uma pessoa pelo prompt
prompt = require('prompt-sync')()

let nomes = ['joao', 'erica', 'pouey', 'almeida', 'freitas', 'mariana', 'gian', 'gerson', 'adriano', 'assis']
let n = prompt("Digite um nome: ").toLowerCase();

if (nomes.includes(n)) {
    console.log(`Achei o nome ${n}`);
} else {
    console.log(`Não achei o nome ${n}`);
}
// Vetor de cores. Pergunte ao usuário para inserir uma cor. Exiba a posição da cor no vetor ou uma mensagem dizendo que a cor não foi encontrada
prompt = require('prompt-sync')()

let cor = ['preto', 'branco', 'vermelho', 'azul', 'roxo', 'amarelo', 'rosa', 'verde']
let cor2 = prompt('Digite uma cor: ')

if (cor.includes(cor2)) {
  let posicao = cor.indexOf(cor2) + 1;
  console.log(`A cor "${cor2}" está na posição ${posicao} do vetor.`);
} else {
  console.log(`A cor "${cor2}" não se encontra no vetor.`);
}
// Código para informar se o ano digitado é ou não de copa do mundo
prompt = require("prompt-sync")()

let ano;

while (true) {
  ano = Number((prompt("Digite um ano (ou 0 para sair): ")));
  if (ano === 0) {
    break;
  }

  if ((ano - 1930) % 4 === 0 && ano !== 1942 && ano !== 1946) {
    console.log(`O ano ${ano} é um ano de Copa do Mundo.`);
  } else {
    console.log(`O ano ${ano} não é um ano de Copa do Mundo.`);
  }
}
// Código para informar se é um ano bissexto ou não
prompt = require("prompt-sync")()
const ano = parseInt(prompt("Digite um ano: "));

if ((ano % 4 == 0 && ano % 100 !== 0) || ano % 400 == 0) {
  console.log(`O ano ${ano} é bissexto.`);
} else {
  console.log(`O ano ${ano} não é bissexto.`);
}
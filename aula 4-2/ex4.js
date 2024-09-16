// Código para saber quantas vezes uma certa letra aparece em uma palavra
prompt = require("prompt-sync")()

let palavra = prompt("Digite a palavra: ");
let letra = prompt("Digite a letra alvo: ");
let conta = 0;

for (let i = 0; i < palavra.length; i++) {
    if (palavra[i] === letra) {
        conta++;
    }
}

console.log(`A letra '${letra}' aparece ${conta} vezes na palavra '${palavra}'.`);
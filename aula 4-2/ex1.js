// Código para encontrar o fatorial de qualquer número
prompt = require("prompt-sync")()

let fatorial = Number(prompt("Digite um número: "));
let result = fatorial;

for (var i = 1; i < fatorial; i++) {
    result = result * i;
}
console.log(result);
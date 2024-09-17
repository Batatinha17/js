// Algoritmo que ajude um posto de combustíveis a determinar a preferência dos clientes pelos tipos de combustível
prompt = require("prompt-sync")()

let contadores = {
alcool: 0,
gasolina: 0,
diesel: 0
}

const nomeCombustivel = (codigo) => {
 switch (codigo) {
  case 1:
   console.log("Álcool.")
   contadores.alcool++
   break;
  case 2:
   console.log("Gasolina.")
   contadores.gasolina++
   break;
  case 3:
   console.log("Diesel.")
   contadores.diesel++
   break;
  case 4:
   console.log("MUITO OBRIGADO!")
   break;
  default:
   console.log("Código inválido.")
 }
}

while (true) {
 let codigo = Number(prompt("Digite o código do combustível: 1. Álcool 2. Gasolina 3. Diesel 4. Fim. "))
 if (codigo === 4) {
  nomeCombustivel(codigo)
  break
 }
 nomeCombustivel(codigo)
}

console.log(`Quantidade de clientes que abasteceram cada tipo de combustível:`);
console.log(`Álcool: ${contadores.alcool}`)
console.log(`Gasolina: ${contadores.gasolina}`)
console.log(`Diesel: ${contadores.diesel}`)
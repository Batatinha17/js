// Código para calcular comissão
prompt = require("prompt-sync")()
const venda = Number(prompt("Insira o valor da venda: "))
const dez = venda * (10/100)
const cinco = venda * (5/100)

if (venda < 5000) {
    console.log("A sua comissão foi de 0%")
    console.log(`Comissão: R$ 0 `)
} else if (venda >= 5000 && venda == 10000) {
    console.log("A sua comissão foi de 5%")
    console.log(`Comissão: R$${cinco}`)
} else if (venda > 10000)  {
    console.log("A sua comissão foi de 10%")
    console.log(`Comissão: R$${dez}`)
}
// conversor de BRL para USD e EUR
prompt = require('prompt-sync')()
const brl = Number(prompt('Quantos reais você tem? '))
const usd = brl / 5.64 
const eur = brl / 6.24
const moeda = prompt('Você quer converter para USD ou EUR? ')

if (moeda == 'USD') {
    console.log(`Convertendo você tem ${usd.toFixed(2)} doláres.`)
} else if (moeda == 'EUR') {
    console.log(`Convertendo você tem ${eur.toFixed(2)} euros.`)
} else {
    console.log('ERRO: Moeda inválida!')
}
// conversor de temperatura
prompt = require('prompt-sync')()
const celcius = Number(prompt('Digite uma temperatura em graus Celcius:'));
const fahrenheit = (celcius * 9/5) + 32;

console.log(`Resultado: ${fahrenheit}`)
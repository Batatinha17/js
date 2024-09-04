// Código para que recebe a idade de uma pessoa e determina se é Criança, Adolescente, Adulto, Idoso
prompt = require("prompt-sync")()
const idade = Number(prompt('Digite uma idade: '))

switch (true) {
    case idade >= 0 && idade <= 12:
      console.log('A categoria é: Criança');
      break;
    case idade >= 13 && idade <= 17:
      console.log('A categoria é: Adolescente');
      break;
    case idade >= 18 && idade <= 64:
      console.log('A categoria é: Adulto');
      break;
    case idade >= 65:
      console.log('A categoria é: Idoso');
  }
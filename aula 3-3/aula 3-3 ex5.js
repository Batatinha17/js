// Código que recebe um veículo e da informações dele
prompt = require("prompt-sync")()
const codigoVeiculo = prompt('Digite o código do veículo (1: Carro, 2: Moto): ');

switch (codigoVeiculo) {
  case '1':
    const modelo = prompt('Digite o modelo do carro (Ex: Uno Mille, Gol 1.0.): ');
    switch (modelo) {
      case 'uno mille':
        console.log('Marca: Fiat');
        console.log('Peso: 1.2 toneladas');
        console.log('Tanque: 45 litros');
        console.log('Valor: R$ 25.000,00');
        break;
      case 'gol 1.0':
        console.log('Marca: Volkswagen');
        console.log('Peso: 2.5 toneladas');
        console.log('Tanque: 30 litros');
        console.log('Valor: R$ 36.000,00');
        break;
      default:
        console.log('Modelo não encontrado.');
    }
    break;
  case '2':
    const modeloMoto = prompt('Digite o modelo da moto (Ex: CG 160, Fazer 250.): ');
    switch (modeloMoto) {
      case 'cg 160':
        console.log('Marca: Honda');
        console.log('Peso: 120 kg');
        console.log('Tanque: 15 litros');
        console.log('Valor: R$ 12.000,00');
        break;
      case 'fazer 250':
        console.log('Marca: Yamaha');
        console.log('Peso: 180 kg');
        console.log('Tanque: 20 litros');
        console.log('Valor: R$ 20.000,00');
        break;
      default:
        console.log('Modelo não encontrado.');
    }
    break;
  default:
    console.log('Código de veículo inválido.');
}
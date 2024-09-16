// Código para fazer um triângulo de asteriscos

let i = 1

for (i; i <= 4; i++) {
    let linha = '';
    for (let j = 1; j <= i; j++) {
       linha += '* ';
    }
    console.log(linha);
  }
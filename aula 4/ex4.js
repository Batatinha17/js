// Código para imprmir do primeiro ao décimo termo de fibonacci

let a = 0;
let b = 1;
let termo = 1;

console.log(`${termo}º Termo: ${a}`);

while (termo < 10) {
  let prox = a + b;
  a = b;
  b = prox;
  termo++;

  console.log(`${termo}º Termo: ${b}`);
}

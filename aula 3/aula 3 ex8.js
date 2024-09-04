// Leitor de números para informar se é primo ou não
const prompt = require('prompt-sync')();
const num = parseInt(prompt('Digite um número: '));

function isPrime(n) {
  if (n <= 1) {
    return false; // 0 and 1 are not prime
  }
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

if (isPrime(num)) {
  console.log(`O número ${num} é primo.`);
} else {
  console.log(`O número ${num} não é primo.`);
}
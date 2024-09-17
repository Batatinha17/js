// Criar vetor de números e determine o maior número presente no vetor

let num = [3, 5, 10]
let maiorNum = num[0]

for (let i = 1; i < num.length; i++) {
  if (num[i] > maiorNum) {
    maiorNum = num[i];
  }
}
console.log(maiorNum)

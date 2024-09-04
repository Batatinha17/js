// Código para classificar notas como conceitos
prompt = require('prompt-sync')()
const nota = Number(prompt('Digite a nota do aluno (0-10): '))

if (nota >= 9) {
    console.log('O aluno ficou com o conceito A.')
} else if (nota >= 7 && nota < 9) {
    console.log('O aluno ficou com o conceito B.')
} else if (nota >= 5 && nota < 7) {
    console.log('O aluno ficou com o conceito C.')
} else if (nota >= 3 && nota < 5) {
    console.log('O aluno ficou com o conceito D.')
} else if (nota < 3) {
    console.log('O aluno ficou com o conceito E.')
}
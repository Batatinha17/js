// Criar uma matriz 2x3, encontre o maior valor presente na matriz

let matriz = [
    [1, 2, 3],
    [4, 5, 6]
]

let maior_valor = 0

for (let i = 0; i < matriz.length; i++) {
    
    for (let j = 0; j < matriz[i].length; j++)
        
        if (matriz[i][j] > maior_valor) {
            
            maior_valor = matriz[i][j]
        }
}
console.log(`Este é o maior valor dessa matriz: ${maior_valor}`)
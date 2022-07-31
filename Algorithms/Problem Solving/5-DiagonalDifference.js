
function diagonalDifference(arr) {

    let diagonalEsquerda = 0
    let diagonalDireita = 0

    for (let index = 0; index < arr.length; index += 1) {
        diagonalEsquerda += arr[index][index]
        diagonalDireita += arr[index][arr.length - 1 - index]
    }

    return Math.abs(diagonalEsquerda - diagonalDireita);
}

console.log(diagonalDifference([[1, 2, 3], [1, 2, 3], [1, 2, 3]]))
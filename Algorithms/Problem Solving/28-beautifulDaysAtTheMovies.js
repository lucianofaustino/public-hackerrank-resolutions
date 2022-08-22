function beautifulDays(i, j, k) {

    let inversion = 0
    let count = 0

    for (let index = i; index <= j; index += 1) {

        // Trasformou o número em string, separou os caracteres com o 'split',inverteu como 'reverse' e juntou novamente com o 'join'
        let inversion = Number(String(index).split('').reverse().join(''))
        // console.log(inversion) // 2, 12, 22, 32

        let division = 0
        console.log(division) // 0, 0, 0, 0

        // Math.abs
        division = (Math.abs(index - inversion) / k)
        // console.log(division) // 3, 1.5, 0, 1.5

        if (Number.isInteger(division) === true) {
            // console.log(division) // 3, 0
            count += 1
        }
    }
    return count
}

console.log(beautifulDays(20, 23, 6)) //2

// ===========================================================================

// Clean solution
function beautifulDays(i, j, k) {

    let inversion = 0
    let count = 0

    for (let index = i; index <= j; index += 1) {

        let inversion = Number(String(index).split('').reverse().join(''))

        if (Number.isInteger(Math.abs(index - inversion) / k) === true) {
            count += 1
        }
    }
    return count
}

console.log(beautifulDays(20, 23, 6)) //2


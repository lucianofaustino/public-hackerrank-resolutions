function encryption(s) {

    let string0 = s.split('')
    // "sqrt" é usado para raiz quadráda
    // "ceil" é usado para arredondar para cima e o  floor para baixo
    let column = Math.ceil(Math.sqrt(string0.length))
    let result = []

    for (let index = 0; index < column; index += 1) {

        let valueIndex = index
        let string1 = ''


        while (valueIndex < string0.length) {
            string1 += string0[valueIndex]
            valueIndex += column
        }

        result.push(string1)
    }
    return result.join(' ')
}

console.log(encryption('haveaniceday')) // hae and via ecy


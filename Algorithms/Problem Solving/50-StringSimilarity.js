// estensão Qoukka.js em uso para os console.log comentados

function getZarray(string, stringLength, zArray) {
    let left = 0
    let right = 0
    let diference = 0

    for (let index = 1; index < stringLength; index += 1) {

        if (index > right) {
            left = right = index

            while (right < stringLength && string[right - left] === string[right]) {
                right += 1
            }
            zArray[index] = right - left
            right -= 1

        } else {

            diference = index - left
            // usar estensão Qoukka.js
            // console.log(diference);console.log(index); console.log(left) 

            if (zArray[diference] < right - index + 1) {
                zArray[index] = zArray[diference]

            } else {
                left = index

                while (right < stringLength && string[right - left] === string[right]) {
                    right += 1
                }
                zArray[index] = right - left
                right -= 1
            }
        }
    }
}

function stringSimilarity(s) {

    let zArray = new Array(s.length)

    getZarray(s, s.length, zArray)

    let total = s.length

    for (let index = 1; index < s.length; index += 1) {

        total += zArray[index]
    }
    return total
}

console.log(stringSimilarity("ababaa"))
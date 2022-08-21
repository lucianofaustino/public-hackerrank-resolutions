

function angryProfessor(k , a) {

    let onTime = 0

    for (let index = 0; index < a.length; index += 1) {
        if (a[index] <= 0) {
            onTime += 1
        }
    }
    return onTime >= k ? 'NO' : 'YES'
}

console.log(angryProfessor(3, [-1, -2, 4, 2])) // YES
console.log(angryProfessor(3, [-3, -1, 0, 1, 2])) // NO
console.log(angryProfessor(3, [-1, -2, -4, 2])) // NO
console.log(angryProfessor(2, [0, -1, -2, 1])) // NO
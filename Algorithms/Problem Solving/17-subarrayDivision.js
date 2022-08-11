function birthday(s, d, m) {

    let count = 0
    let sum = 0

    for (let index0 = 0; index0 <= (s.length - m); index0 += 1) {
        for (let index1 = 0; index1 < m; index1 += 1) {
            sum = sum + s[index0 + index1]
        }
        if (sum === d) {
            count += 1
        }
        sum = 0
    }
    // console.log(count)
    return (count)
}


console.log(birthday([2, 2, 1, 3, 2], 4, 2)) // 1
console.log(birthday([1, 2, 1, 3, 2], 3, 2)) // 1
console.log(birthday([4], 4, 1)) // 1
function breakingRecords(scores) {

    let max = scores[0]
    let min = scores[0]
    let countMax = 0
    let countMin = 0


    for (let index = 1; index < scores.length; index += 1) {

        if (scores[index] > max) {
            max = scores[index]
            countMax += 1
        }
        if (scores[index] < min) {
            min = scores[index]
            countMin += 1
        }
    }

    return [countMax, countMin] // [ 2, 4 ]

    // console.log(countMax, countMin)
}


console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])) // [ 2, 4 ]
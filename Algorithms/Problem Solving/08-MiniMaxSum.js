
function miniMaxSum(arr) {

    let sortArr = arr.sort()
    let item = 0

    for (let index = 0; index < sortArr.length; index += 1) {
        item += sortArr[index]
        // console.log(item)
    }
    let mini = item - sortArr[sortArr.length - 1]
    let max = item - sortArr[0]

    console.log(mini, max)
}

miniMaxSum([1, 3, 5, 7, 9])
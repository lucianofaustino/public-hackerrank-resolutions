function insertionSort1(n, arr) {

    for (let index = 1; index < arr.length; index += 1) {
        let current = arr[index]
        let previous = index - 1

        while ((previous > -1) && (current < arr[previous])) {
            arr[previous + 1] = arr[previous]
            previous -= 1
            console.log(...arr)
        }
        arr[previous + 1] = current

    }
    console.log(...arr);
}

console.log(insertionSort1(5, [3, 4, 7, 5, 6, 2, 1]))
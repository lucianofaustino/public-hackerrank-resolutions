function insertionSort1(n, arr) {

    for (let index = 1; index < arr.length; index += 1) {
        let current = arr[index];
        let compare;

        for (compare = index - 1; compare >= 0 && arr[compare] > current; compare -= 1) {
            arr[compare + 1] = arr[compare];
        }
        arr[compare + 1] = current;
        console.log(...arr);
    }
    return arr;
}

console.log(insertionSort1(5, [1, 4, 3, 5, 6, 2]));
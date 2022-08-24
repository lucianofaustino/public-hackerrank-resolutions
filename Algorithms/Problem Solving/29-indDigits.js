function findDigits(n) {

    let arr = n.toString().split('');
    //console.log(arr)  [ '1', '0', '1', '2' ]

    let count = 0;
    for (let index = 0; index < arr.length; index += 1) {
        // console.log(Number.isInteger(n / arr[index])) true false true true

        // isInteger retorna True ou False
        if (Number.isInteger(n / arr[index])) {
            count += 1;
        }
    }

    return count;

}

console.log(findDigits(1012)) // 3

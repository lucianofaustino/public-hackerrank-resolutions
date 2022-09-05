function getTotalX(a, b) {

    let arr = [];
    let arr1 = [];

    for (let index = 1; index <= Math.max(...b); index++) {
        function testA(num) {
            return (index % num) == 0
        }

        a.every(testA);

        if (a.every(testA) == true) {
            arr.push(index);
        }
    }

    for (let index = 0; index < arr.length; index++) {
        function testB(num) {
            return (num % arr[index] == 0);
        }

        b.every(testB);

        if (b.every(testB) == true) {
            arr1.push(arr[index]);
        }
    }

    return (arr1.length);


}


console.log(getTotalX([2, 6], [24, 36])) // 2

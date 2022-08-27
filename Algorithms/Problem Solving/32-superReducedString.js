function superReducedString(s) {

    let arr = s.split('');
    // console.log(arr) //[ 'a', 'a', 'a', 'b', 'c', 'c', 'd', 'd', 'd' ]
    for (let index = 0; index < arr.length; index += 1) {
        if (arr[index] === arr[index + 1]) {
            arr.splice(index, 2);
            // console.log(arr.splice(index, 2)) // [ 'a', 'b' ], [ 'd', 'd' ]
            index = -1;
        }
    }

    if (arr.length === 0) {
        return 'Empty String';
    } else {
        return arr.join('');
    }

}

console.log(superReducedString('aaabccddd')); // abd
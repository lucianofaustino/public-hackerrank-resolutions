
function sockMerchant(n, ar) {

    let count = 0;
    let object = {}

    for (let index of ar) {

        object[index] += 1 || 1;
    }

    for (let index of ar) {
        object[index] = object[index] % 2 === 0;
        count += object[index]
    }

    return count;
}

console.log(sockMerchant(7,[1,2,4,4,3,5,1,6,2])) // 3
function compareTriplets(a, b) {
    let alice = 0
    let bob = 0
    for (let index = 0; index < a.length; index++) {
        if (a[index] > b[index]) {
            alice += 1;
        } else if (a[index] < b[index]) {
            bob += 1
        }
    }
    return [alice, bob];
}

console.log(compareTriplets([1, 2, 3], [3, 2, 1]));
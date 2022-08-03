function aVeryBigSum(ar) {

    let soma = 0;
    for (let int = 0; int < ar.length; int += 1) {
        soma = soma + ar[int];
    }
    return soma;
}

console.log(aVeryBigSum([10001, 10002, 10000, 10007]));
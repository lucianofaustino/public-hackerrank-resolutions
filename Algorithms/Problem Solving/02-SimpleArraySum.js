function simpleArraySum(ar) {
    // Write your code here
    let soma = 0;
    for ( let i = 0; i < ar.length; i += 1 ) {
       soma =  soma + ar[i];
    }
    return soma;
}

console.log(simpleArraySum([06,12,10,34,14]))
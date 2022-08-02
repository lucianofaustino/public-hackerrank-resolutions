function migratoryBirds(arr) {
    // Write your code here
    let counts = {};
    arr.forEach((count) => {
        counts[count] = (counts[count] || 0) + 1;
        // console.log(count);
    })

    const maxValor = Math.max(...Object.values(counts))
    const id = Object.keys(counts).find((key) => {
        return counts[key] === maxValor;
    })
    // console.log(Object.values(counts))
    // console.log(Object.keys(counts))
    return id;
}


console.log(migratoryBirds([2, 4, 3, 2, 3, 1, 2, 1, 3, 3, 5]))  //Resultado esperado: chave: 3
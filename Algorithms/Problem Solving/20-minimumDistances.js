function minimumDistances(a) {

    let pairs = [];

    for (let index0 = 0; index0 < a.length; index0 += 1) {
        for (let index1 = index0 + 1; index1 < a.length; index1 += 1) {
            if (a[index1] === a[index0]) {
                pairs.push(index1 - index0);

                // teste
                console.log(index0) // 0, 1
                console.log(index1) // 5, 4
                console.log(pairs) // [5], [5, 3]
            }
        }
    }

    // segunda regra: retornar o menor valor ou se o  array estiver vazio, retornar -1
    if (pairs.length != 0) {
        // return Math.min(...pairs) // Outra forma de fazer
        return pairs.sort((a, b) => a - b)[0]
    } else {
        return -1
    }
}

console.log(minimumDistances([7, 1, 3, 4, 1, 7]))  // [5, 3]
console.log(minimumDistances([1, 3, 4, 5,])) // [] nenhum se repete/ ou com a segunda regra ativa retornará -1
function pageCount(n, p) {

    if (n - p === 1 && n % 2 === 0) {
        const min = [Math.floor(p / 2), Math.ceil((n - p) / 2)]
        
        //console.log(min) // [30, 1] ( resultado dos valores ( 62, 61 ))
        
        return Math.min(...min)
    } else {
        const min = [Math.floor(p / 2), Math.floor((n - p) / 2)]

        //console.log(min) // [ 2, 0 ], [ 1, 2 ], [ 6, 2 ]
 
        return Math.min(...min)
    }
}

// Cai no primeiro if
console.log(pageCount(62, 61)) // 1

// executado no else
console.log(pageCount(5, 4)) // 0
console.log(pageCount(6, 2)) // 1
console.log(pageCount(16, 12)) // 2


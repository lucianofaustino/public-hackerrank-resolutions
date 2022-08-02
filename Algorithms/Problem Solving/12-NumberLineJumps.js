function kangaroo(x1, v1, x2, v2) {

let jump1 = x1
let jump2 = x2
let noYes = "NO"

for( let index = 0; index < 10000 ; index += 1 ) {
    jump1 += v1
    jump2 += v2
    if( jump1 === jump2){
        noYes = "YES"
    }
}

return noYes

}

// console.log(kangaroo(2, 1, 1, 2))
console.log(kangaroo(0, 3, 4, 2))

// x1 = 2 location
// v1 = 1m/jump

// x2 = 1 location
// x2 = 2m/jump

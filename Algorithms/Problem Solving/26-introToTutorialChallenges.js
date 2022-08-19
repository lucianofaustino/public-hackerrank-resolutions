// Insertion Sort challenges
// https://www.hackerrank.com/challenges/tutorial-intro/problem?h_r=internal-search

function introTutorial(V, arr) {


    for (let index = 0; index < arr.length; index += 1) {

        if (arr[index] === V) {
            return index
        }
    }

}

console.log((introTutorial(4, [1, 4, 5, 7, 9, 12]))) // 1

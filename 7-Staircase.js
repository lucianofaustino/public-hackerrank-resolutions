
function staircase(n) {

    let symbol = '#';
    let lineInput = '';
    let inputPosition = n - 1;

    for (let indexLine = 0; indexLine < n; indexLine += 1) {
        for (let columnIndex = 0; columnIndex < n; columnIndex += 1) {
            if (columnIndex < inputPosition) {
                lineInput += ' ';
            } else {
                lineInput += symbol;
            }
        }
        console.log(lineInput);
        lineInput = '';
        inputPosition -= 1;
        // console.log(inputPosition);
    }
}

staircase(10)
function birthdayCakeCandles(candles) {
    // Write your code here
    let maximumHeightCandle = 0
    let countCandles = 0

    // candles.sort((a, b) => (a - b))
    // // console.log(candles)
    // maximumHeightCandle = candles[candles.length - 1]

    candles.sort((a, b) => (b - a))
    // console.log(candles)
    maximumHeightCandle = candles[0]

    candles.forEach((candle) => {
        if (candle === maximumHeightCandle) {
            countCandles += 1
        }
    })

    return countCandles
}

console.log(birthdayCakeCandles([3, 2, 1, 3])) //Retorno esperado: 2
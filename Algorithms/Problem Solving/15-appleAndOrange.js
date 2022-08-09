function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // s -> t (distância da casa)
    // a (apple)
    // b (orange)
    // apples (que cairam)
    // orange (que cairam)

    let appleCount = 0
    let orangeCount = 0

    apples.forEach((apple) => {
        if ((apple + a) >= s && (apple + a <= t)) {
            appleCount += 1
        }
    })
    oranges.forEach((orange) => {
        if ((orange + b <= t) && (orange + b >= s)) {
            orangeCount += 1
        }
        // console.log(orangeCount)        
    })

    console.log(appleCount)
    console.log(orangeCount)
}

countApplesAndOranges(
    7, 10,
    4, 12,
    [2, 3, -4],
    [3, -2, -4])
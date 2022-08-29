function getMoneySpent(keyboards, drives, b) {

    let biggestPrice = 0

    for (let key = 0; key < keyboards.length; key += 1) {
        let sum = 0
        for (let usb = 0; usb < drives.length; usb += 1) {
            sum = keyboards[key] + drives[usb]
            if (sum <= b) {
                sum > biggestPrice ? biggestPrice = sum : biggestPrice
            } else {
                sum = 0
            }
        }
    }

    return biggestPrice === 0 ? -1 : biggestPrice

}

console.log(getMoneySpent([3, 1], [5, 2, 8], 10)) // 9
console.log(getMoneySpent([4], [5], 5)) // -1


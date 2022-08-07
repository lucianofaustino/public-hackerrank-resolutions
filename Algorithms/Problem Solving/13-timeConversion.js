function timeConversion(s) {
    s.split('')
    
    let hours = parseInt(s[0] + s[1])
    let minuts = (s[3] + s[4])
    let seconds = (s[6] + s[7])
    let amPm = s[s.length - 2]
    
    if( hours >= 12 && amPm === 'A') {
        hours = hours - 12
        
    } else if ( hours < 12 && amPm === 'P') {
        hours = hours + 12
    }

    if( hours < 10){
        return (`0${hours}:${minuts}:${seconds}`)
        
    } else {
        return (`${hours}:${minuts}:${seconds}`)

    }
}

console.log((timeConversion("07:05:45PM")))
console.log((timeConversion("10:55:45AM")))
console.log((timeConversion("12:45:54PM")))

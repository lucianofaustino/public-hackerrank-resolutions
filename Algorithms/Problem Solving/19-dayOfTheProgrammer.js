function dayOfProgrammer(year) {

    // 1700 to 1917 Juliano calendar
    // since 1919 Gregorian calendar

    if (year >= 1700 && year <= 2700) {

        //Julian
        if (year >= 1700 && year <= 1917) {
            if (year % 4 === 0) {
                return `12.09.${year}`;
            } else {
                return `13.09.${year}`;
            }
        }

        //1918
        if (year === 1918) {
            return `26.09.${year}`;
        }

        //Gregorian
        if ((year % 4 === 0) && (year % 100 != 0) || (year % 400 === 0)) {
            return `12.09.${year}`;
        } else {
            return `13.09.${year}`;
        };

    } else {
        return 'Year out of range. Please, input a year between 1700 and 2700.'
    }
}


console.log(dayOfProgrammer(1700)) // 12.09.1700
console.log(dayOfProgrammer(1918)) // 26.09.1700
console.log(dayOfProgrammer(1919)) // 13.09.1919



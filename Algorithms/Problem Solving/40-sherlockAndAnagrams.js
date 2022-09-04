function sherlockAndAnagrams(s) {

    let count = 0
    let map = new Map()

    for (let index = 0; index < s.length; index += 1) {

        for (let index1 = index + 1; index1 <= s.length; index1 += 1) {

            let substring = s.substring(index, index1).split('').sort().join('')

            console.log(substring) // c, cd, ccd, ccdd, d, cd, cdd, c, cd, d

            if (map.has(substring)) {
                count += map.get(substring)
                map.set(substring, map.get(substring) + 1)

                console.log(substring) // cd, c, cd, d

            } else {
                map.set(substring, 1)

                console.log(substring) // c, cd, ccd, ccdd, d, cdd
            }
        }
    }
    return count
}

console.log(sherlockAndAnagrams('cdcd')) // 5

// console.log(sherlockAndAnagrams('abba')) // 4
// console.log(sherlockAndAnagrams('abcd')) // 0
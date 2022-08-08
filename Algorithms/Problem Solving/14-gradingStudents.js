function gradingStudents(grades) {

    for (let index = 0; index < grades.length; index += 1) {
        if (grades[index] >= 38) {
            if (grades[index] % 5 === 3) {
                grades[index] += 2
            } else if (grades[index] % 5 === 4) {
                grades[index] += 1
            }

        }
    }
    return grades
}

console.log(gradingStudents([4, 73, 67, 38, 33]))


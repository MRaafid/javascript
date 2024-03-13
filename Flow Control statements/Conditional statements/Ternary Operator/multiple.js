function grade(score)
    {
        score<35 ? console.log(`FAIL`) :
        score<50 ? console.log(`PASS`) :
        score<60 ? console.log(`SECOND CLASS`) :
        score<85 ? console.log(`FIRST CLASS`) :
        console.log(`DISTINCTION`)
    }
grade(32)
grade(47)
grade(69)
grade(83)
grade(98)
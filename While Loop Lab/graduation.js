function graduation (input) {

    let index = 0;
    let name = input[index];
    index++;

    let start = 1;
    let countGrades = 0;
    let negativeGrades = 0;

    let exclude = false;

    while (start <= 12) {
        let currentGrade = Number(input[index]);
        index++;
        if (currentGrade < 4.00) {
            negativeGrades++;
            if (negativeGrades == 2) {
                exclude = true;
                break;
            } continue;
        }
        countGrades += currentGrade;
        start++;

    } 
    let averageGrade = countGrades / 12;
    if (exclude) {
        console.log(`${name} has been excluded at ${start} grade`)
       
    } else {
        console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`)
    }

    

  }
graduation
(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"])



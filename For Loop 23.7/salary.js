function salary (input) {
     let tabsOpened = Number(input[0]);
     let salary = Number(input[1]);
     let newSalary = 0


for (let i=2; i <= tabsOpened + 2; i++) {

    let tabName = input[i];

    switch (tabName) {
        case "Facebook":  newSalary = salary -= 150; break;
        case "Instagram":  newSalary = salary -= 100; break;
        case "Reddit":  newSalary = salary -= 50; break;
        default:
            newSalary = salary -= 0; break;
    }    
    
}


if (newSalary <= 0) {
    console.log(`You have lost your salary.`)
} else {
console.log(newSalary)
}


}
salary(["3",
"500",
"Facebook",
"Stackoverflow.com",
"softuni.bg"])




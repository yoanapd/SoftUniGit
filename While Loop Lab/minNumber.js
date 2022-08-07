function minNumber (input) {

    let index = 0;
    let lowestNum = Number.MAX_SAFE_INTEGER;
    let command = input[index];

    while (command !== "Stop") {

        let num = Number(command);
        
        if (num < lowestNum) {

            lowestNum = num;
        }

        command = input[index];
        index++;
    }
    console.log(lowestNum);
}
minNumber
(["100",
"99",
"80",
"70",
"95",
"51",
"68",
"45",
"Stop"])

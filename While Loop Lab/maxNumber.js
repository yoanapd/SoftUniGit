function maxNumber(input) {

    let index = 0;
    let biggestNum = Number.MIN_SAFE_INTEGER;
    let command = input[index];

    while (command !== "Stop") {

        let num = Number(command);

        if (num > biggestNum) {

            biggestNum = num;

        }
        command = input[index];
        index++;
    }

    console.log(biggestNum)

}
maxNumber
    (["100",
        "99",
        "80",
        "70",
        "Stop"])

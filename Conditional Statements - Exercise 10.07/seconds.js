function seconds(input) {

    // Трима спортни състезатели финишират за някакъв брой секунди (между 1 и 50).
    //  Да се напише функция, която получава три аргумента - секунди и пресмята сумарното им време във формат 
    // "минути:секунди". Секундите да се изведат с водеща нула (2  "02", 7  "07", 35  "35"). 

    let one = Number(input[0]);
    let two = Number(input[1]);
    let three = Number(input[2])

    let total = one + two + three
    let minutes = Math.floor(total / 60);
    let seconds = total % 60

    if (seconds < 10) {

        console.log(`${minutes}:0${seconds}`);
    }
    else {
        console.log(`${minutes}:${seconds}`);
    }
    

}
seconds(["35",
"45",
"44"])

function transportPrice(input) {

    let kilometres = Number(input[0])
    let time = input["1"];


    let taxiDay = 0.70 + (kilometres * 0.79);
    let taxiNight = 0.70 + (kilometres * 0.90);


    if (kilometres < 20 && time === "day") {

        console.log(taxiDay.toFixed(2));

    }
    else if (kilometres < 20 && time === "night") {

        console.log(taxiNight.toFixed(2));
    }
    else if (kilometres >= 20 && kilometres < 100) {

        console.log((kilometres * 0.09).toFixed(2))

    }
    else {
        console.log((kilometres * 0.06).toFixed(2));
    }
}
transportPrice(['5', "day"])
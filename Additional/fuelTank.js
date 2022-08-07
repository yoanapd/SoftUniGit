function fuelTank(input) {

    let fuel = input["0"];
    let availableFuel = Number(input[1]);

    if (fuel !== "Diesel" && "Gasoline" && "Gas") {

        console.log(`Invalid fuel!`)
    }

    if (availableFuel >= 25) {
        console.log(`You have enough ${fuel}!`)
    }
    else {
        console.log(`Fill your tank with ${fuel}!`)
    }

}
fuelTank(["Diesel", "10"])
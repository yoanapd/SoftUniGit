function fuelTank(input) {

    let fuel = input["0"];
    let availableFuel = Number(input[1]);

    if (fuel !== "Diesel" && fuel !== "Gasoline" && fuel !== "Gas") {

        console.log(`Invalid fuel!`)
    }

    else if (fuel === "Diesel" && availableFuel >= 25) {
        console.log(`You have enough diesel.`)
    }
    else if (fuel === "Diesel" && availableFuel < 25) {
        console.log(`Fill your tank with diesel!`)
    }
    if (fuel === "Gasoline" && availableFuel >= 25) {
        console.log(`You have enough gasoline.`)
    }
    else if (fuel === "Gasoline" && availableFuel < 25) {
        console.log(`Fill your tank with gasoline!`)
    }
    if (fuel === "Gas" && availableFuel >= 25) {
        console.log(`You have enough gas.`)
    }
    else if (fuel === "Gas" && availableFuel < 25) {
        console.log(`Fill your tank with gas!`)
    }



}
fuelTank(["Diesel", "10"])
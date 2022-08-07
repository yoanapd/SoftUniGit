function fuel(input) {


    let fuelType = input["0"];
    let fuelQuantity = Number(input[1]);
    let card = input["2"];

    let gasPrice = 0.93;
    let dieselPrice = 2.33;
    let gasolinePrice = 2.22;

    let cardDiscountGas = gasPrice - 0.08;
    let cardDiscountDiesel = dieselPrice - 0.12;
    let cardDiscountGasoline = gasolinePrice - 0.18;

    if (card === "Yes" && fuelQuantity >= 20 && fuelQuantity <= 25) {

        if (fuelType === "Gas") {
            console.log(`${((cardDiscountGas * fuelQuantity) - (cardDiscountGas * fuelQuantity) * 0.08).toFixed(2)} lv.`);
        }
        else if (fuelType === "Diesel") {
            console.log(`${((cardDiscountDiesel * fuelQuantity) - (cardDiscountDiesel * fuelQuantity) * 0.08).toFixed(2)} lv.`);
        }
        else {
            console.log(`${((cardDiscountGasoline * fuelQuantity) - (cardDiscountGasoline * fuelQuantity) * 0.08).toFixed(2)} lv.`);
        }
    }
    if (card === "Yes" && fuelQuantity < 20) {
        if (fuelType === "Gas") {
            console.log(`${(cardDiscountGas * fuelQuantity).toFixed(2)} lv.`);
        }
        else if (fuelType === "Diesel") {
            console.log(`${(cardDiscountDiesel * fuelQuantity).toFixed(2)} lv.`);
        }
        else {
            console.log(`${(cardDiscountGasoline * fuelQuantity).toFixed(2)} lv.`);
        }

    }
    if (card === "Yes" && fuelQuantity > 25) {
        if (fuelType === "Gas") {
            console.log(`${(((cardDiscountGas * fuelQuantity) - (cardDiscountGas * fuelQuantity) * 0.10).toFixed(2))} lv.`);
        }
        else if (fuelType === "Diesel") {
            console.log(`${(((cardDiscountDiesel * fuelQuantity) - (cardDiscountDiesel * fuelQuantity) * 0.10).toFixed(2))} lv.`);
        }
        else {
            console.log(`${(((cardDiscountGasoline * fuelQuantity) - (cardDiscountGasoline * fuelQuantity) * 0.10).toFixed(2))} lv.`);
        }
    }
    if (card === "No" && fuelQuantity >= 20 && fuelQuantity <= 25) {

        if (fuelType === "Gas") {
            console.log(`${(((gasPrice * fuelQuantity) - (gasPrice * fuelQuantity) * 0.08).toFixed(2))} lv.`);
        }
        else if (fuelType === "Diesel") {
            console.log(`${(((dieselPrice * fuelQuantity) - (dieselPrice * fuelQuantity) * 0.08).toFixed(2))} lv.`);
        }
        else {
            console.log(`${(((gasolinePrice * fuelQuantity) - (gasolinePrice * fuelQuantity) * 0.08).toFixed(2))} lv.`);
        }
    }
    if (card === "No" && fuelQuantity < 20) {
        if (fuelType === "Gas") {
            console.log(`${((gasPrice * fuelQuantity).toFixed(2))} lv.`);
        }
        else if (fuelType === "Diesel") {
            console.log(`${((dieselPrice * fuelQuantity).toFixed(2))} lv.`);
        }
        else {
            console.log((gasolinePrice * fuelQuantity).toFixed(2));
        }

    }
    if (card === "No" && fuelQuantity > 25) {
        if (fuelType === "Gas") {
            console.log(`${(((gasPrice * fuelQuantity) - (gasPrice * fuelQuantity) * 0.10).toFixed(2))} lv.`);
        }
        else if (fuelType === "Diesel") {
            console.log(`${(((dieselPrice * fuelQuantity) - (dieselPrice * fuelQuantity) * 0.10).toFixed(2))} lv.`);
        }
        else {
            console.log(`${(((gasolinePrice * fuelQuantity) - (gasolinePrice * fuelQuantity) * 0.10).toFixed(2))} lv.`);
        }
    }



}
fuel(["Diesel", "19", "No"])


function fishingBoat(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let fishermenCount = Number(input[2]);
    let rent = 0;
    let discount = 0;
    let morediscount = 0;

    if (season === "Spring") {
        rent = 3000;
    }
    else if (season === "Summer" || season === "Autumn") {
        rent = 4200;
    }
    else {
        rent = 2600;
    }

    if (fishermenCount <= 6) {
        rent = rent * 0.10;
    }
    else if (fishermenCount >= 7 && fishermenCount <= 11) {
        discount = rent * 0.15;
    }
    else if (fishermenCount >= 12) {
        discount = rent * 0.25;
    }
    if (fishermenCount % 2 === 0 && season !== "Autumn") {
        morediscount = (rent - discount) * 0.05;
    } else {
        morediscount = 0;
    }

    let totalSum = rent - discount - morediscount; 
    let moneyNeeded = totalSum - budget;
    let moneyLeft = budget - totalSum;

    if (budget >= totalSum) {
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`)
    }








}
fishingBoat(["2000",
"Winter",
"13"])

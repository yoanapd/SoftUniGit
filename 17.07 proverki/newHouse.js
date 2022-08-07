function newHouse(input) {

    let flowerType = input[0];
    let flowerCount = Number(input[1]);
    let budget = Number(input[2]);
    let discount = 0;
    let price = 0;
    let increase = 0;



    if (flowerType === "Roses") {

        if (flowerCount > 80) {

            discount = 5 * flowerCount * 0.10;
            price = flowerCount * 5 - discount;
        }
        else {
            price = flowerCount * 5;
        }
    } else if (flowerType === "Dahlias") {

        if (flowerCount > 90) {
            discount = 3.80 * flowerCount * 0.15;
            price = 3.80 * flowerCount - discount;
        }
        else {
            price = 3.80 * flowerCount;
        }
    }
    else if (flowerType === "Tulips") {
        if (flowerCount > 80) {
            discount = 2.80 * flowerCount * 0.15;
            price = 2.80 * flowerCount - discount
        }
        else {
            price = 2.80 * flowerCount
        }
    }
    else if (flowerType === "Narcissus") {
        if (flowerCount < 120) {
            increase = 3 * flowerCount * 0.15;
            price = 3 * flowerCount + increase
        }
        else {
            price = 3 * flowerCount;
        }
    }
    else if (flowerType === "Gladiolus") {
        if (flowerCount < 80) {
            increase = 2.50 * flowerCount * 0.20;
            price = 2.50 * flowerCount + increase
        }
        else {
            price = 2.50 * flowerCount;
        }
    }


    let moneyLeft = budget - price;
    let moneyNeeded = price - budget;

    if (budget >= price) {

        console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${moneyLeft.toFixed(2)} leva left.`)

    } else {
        console.log(`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`)
    }
}
newHouse(["Narcissus",
"119",
"360"])


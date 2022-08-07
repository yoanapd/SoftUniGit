function flowerShop (input) {

let magnoliasCount = Number(input[0]);
let hyacinthCount = Number (input[1]);
let rosesCount = Number(input[2]);
let cactusCount = Number(input[3]);
let presentPrice = Number(input[4]);

let mPrice = 3.25 * magnoliasCount;
let hPrice = 4 * hyacinthCount;
let rPrice = 3.50 * rosesCount;
let cPrice = 8 * cactusCount;

let flowersPrice = mPrice + hPrice + rPrice + cPrice;
let tax = flowersPrice * 0.05;
let totalPrice = flowersPrice - tax;

let moneyLeft = totalPrice - presentPrice;
let moneyNeeded = presentPrice - totalPrice;

if (totalPrice >= presentPrice) {

    console.log(`She is left with ${Math.floor(moneyLeft)} leva.`)
}
else {
    console.log(`She will have to borrow ${Math.ceil(moneyNeeded)} leva.`)

}
}
flowerShop(["2", "3", "5", "1", "50"])

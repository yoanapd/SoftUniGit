function vegetableMarket (input) {


let priceVeggies = Number(input[0]);
let priceFruits = Number(input[1]);
let kilosVeggies = Number(input[2]);
let kilosFruits = Number(input[3]);

let priceLv = priceVeggies * kilosVeggies + priceFruits * kilosFruits;
let priceEu = priceLv / 1.94;

console.log(priceEu.toFixed(2));


}
vegetableMarket(["0.194", "19.4", "10", "10"])


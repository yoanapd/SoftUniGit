function homePets (input) {
//     •	Първи ред – брой дни – цяло число в интервал [1…5000]
// •	Втори ред – оставена храна в килограми – цяло число в интервал [0…100000]
// •	Трети ред – храна на ден за кучето в килограми – реално число в интервал [0.00…100.00]
// •	Четвърти ред – храна на ден за котката в килограми– реално число в интервал [0.00…100.00]
// •	Пети ред – храна на ден за костенурката в грамове – реално число в интервал [0.00…10000.00]

let daysAway = Number(input[0]);
let foodLeft = Number(input[1]);
let dogFood = Number(input[2]);
let catFood = Number(input[3]);
let turtleFood = Number(input[4]);
let turtleFoodKilos = turtleFood / 1000;

let foodNeeded = daysAway * (dogFood + catFood + turtleFoodKilos);
if(foodNeeded <= foodLeft) {
    console.log(`${Math.floor(foodLeft - foodNeeded)} kilos of food left.`)
}
else {
    console.log(`${Math.ceil(foodNeeded - foodLeft)} more kilos of food are needed.`)
}



}
homePets(["5", "10", "2.1", "0.8", "321"])

function cinema (input) {
//     •	Premiere – премиерна прожекция, на цена 12.00 лева.
// •	Normal – стандартна прожекция, на цена 7.50 лева.
// •	Discount – прожекция за деца, ученици и студенти на намалена цена от 5.00 лева.

let type = input[0];
let rows = Number(input[1]);
let cols = Number(input[2]);
let income = 0;

if (type === "Premiere") {
    income = rows * cols * 12.00
}
else if (type === "Normal") {
    income = rows * cols * 7.50
}
else {
    income = rows * cols * 5.00
}
console.log(`${income.toFixed(2)} leva`);

}
cinema(["Premiere",
"10",
"12"])

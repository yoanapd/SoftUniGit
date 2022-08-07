// function cleverLily (input) {

//     let age = Number(input[0]);
//     let priceWashingMachine = Number(input[1]);
//     let priceOneToy = Number(input[1]);

//     let money = 0;
//     let sumMoney = 0;
//     let sumToy = 0;

//     for (let i = 1; i <= age; i++) {
//         if (i % 2 ===0) {
//             if (i ==2) {
//                 money = 10
//             } else {
//                 money += 10;
//             }
//             sumMoney += money - 1;
//         } else {
//             sumToy += 1;
//         }
//     }
// let totalSum = sumMoney + sumToy * priceOneToy;
// if (totalSum >= priceWashingMachine) {
//     console.log(`Yes! ${(totalSum - priceWashingMachine).toFixed(2)}`)
// } else{
//     console.log(`No! ${(priceWashingMachine - totalSum).toFixed(2)}`)}


// }
function cleverLily (input) {
    let age = Number(input[0])
    let washingMachine = Number(input[1])
    let toy = Number(input[2])
    let birthdayMoney = 0;
 
    for (let i = 1; i <= age; i++) {
        if (i % 2 != 0) {
            birthdayMoney += toy
        } else {
            birthdayMoney += (5 * i) - 1
        }
    }
 
    if (birthdayMoney >= washingMachine) {
        console.log(`Yes! ${(birthdayMoney - washingMachine).toFixed(2)}`)
    } else {
        console.log(`No! ${(washingMachine - birthdayMoney).toFixed(2)}`)
    }
}
cleverLily(["21",
"1570.98",
"3"])

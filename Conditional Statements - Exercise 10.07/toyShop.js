function toyShop(input) {


    let vacationPrice = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let dollsCount = Number(input[2]);
    let bearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trucksCount = Number(input[5]);


    let toysCount = puzzleCount + dollsCount + bearsCount + minionsCount + trucksCount;
    let price = 2.60 * puzzleCount + 3 * dollsCount + 4.10 * bearsCount + 8.20 * minionsCount + 2 * trucksCount;

    if (toysCount >= 50) {

        price = price - price * 0.25
    }
    // else {

    //     price === price
    // }
    let rent = price * 0.10;
    let totalEarn = (price - rent);
    let moneyLeft = (totalEarn - vacationPrice);
    let moneyNeeded = (vacationPrice - totalEarn);
    if (totalEarn >= vacationPrice) {
        console.log(`Yes! ${(moneyLeft).toFixed(2)} lv left.`)

    }
    else {
        console.log(`Not enough money! ${(moneyNeeded).toFixed(2)} lv needed. `)
    }



}
toyShop
    (["320",
        "8",
        "2",
        "5",
        "5",
        "1"])


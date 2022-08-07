function godzillaVsKong(input) {

    let movieBudget = Number(input[0]);
    let statistCount = Number(input[1]);
    let statistCloth = Number(input[2]);


    let movieDecor = movieBudget * 0.10;

    if (statistCount > 150) {

        statistCloth = statistCloth - statistCloth * 0.10
    }
    let totalMoney = movieDecor + statistCloth * statistCount;

    let moneyLeft = movieBudget - (statistCloth * statistCount + movieDecor);
    let moneyNeeded = (statistCloth * statistCount + movieDecor) - movieBudget;
    if (totalMoney > movieBudget) {

        console.log(`Not enough money!`)
        console.log(`Wingard needs ${(moneyNeeded).toFixed(2)} leva more.`)
    }
    else {
        console.log(`Action!`)
        console.log(`Wingard starts filming with ${(moneyLeft).toFixed(2)} leva left.`)
    }
}
godzillaVsKong(["9587.88",
    "222",
    "55.68"])


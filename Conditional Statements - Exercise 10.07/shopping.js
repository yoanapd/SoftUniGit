function shopping(input) {


    let peterBudget = Number(input[0]);
    let videoCardsCount = Number(input[1]);
    let processorsCount = Number(input[2]);
    let ramMemorieCount = Number(input[3]);



    let videocardsPrice = videoCardsCount * 250;
    let processorPrice = (0.35 * videocardsPrice);
    let ramPrice = (0.10 * videocardsPrice);
    // console.log(ramPrice)

    let totalPrice = videoCardsCount * 250 + processorsCount * processorPrice + ramMemorieCount * ramPrice;
    // console.log(totalPrice)

    if (videoCardsCount > processorsCount) {

        totalPrice = totalPrice - totalPrice * 0.15;

    }
    // console.log(videocardsPrice);
    // console.log(processorsCount * processorPrice);
    // console.log(ramMemorieCount * ramPrice)

    let budgetLeft = peterBudget - totalPrice;
    let neededMoney = totalPrice - peterBudget;

    if (peterBudget >= totalPrice) {
        console.log(`You have ${budgetLeft.toFixed(2)} leva left!`)
    }
    else {
        console.log(`Not enough money! You need ${neededMoney.toFixed(2)} leva more!`)
    }



}
shopping(["900", "2", "1", "3"])
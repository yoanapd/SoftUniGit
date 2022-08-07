function deposit(input) {

    let depositSum = Number(input[0]);
    let termDeposit = Number(input[1]);
    let yearLihva = Number(input[2]);

    //сума = депозирана сума  + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)

    let sum = depositSum + (termDeposit * ((depositSum * yearLihva / 100) / 12));

    console.log(sum);


}
deposit(["200", "3", "5.7"])
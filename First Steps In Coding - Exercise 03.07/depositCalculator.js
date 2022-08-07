function depositCalculator(input) {

    let deposit = Number(input[0]);
    let term = Number(input[1]);
    let interest = Number(input[2]);

    let yearDeposit = deposit * (interest / 100);
    let monthDeposit = yearDeposit / 12; 
    let totalDeposit = monthDeposit * term;

    let totalSum = totalDeposit + deposit; 


    console.log(totalSum);
}
depositCalculator[("200", "3", "5.7")];
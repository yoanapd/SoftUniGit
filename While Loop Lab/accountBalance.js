function accountBalance(input) {

    let index = 0;
    let balance = 0;

    let command = input[index];
    index++;
    

    while (command !== "NoMoreMoney") {

        let money = Number(command);
       
        if(money < 0) {
            console.log("Invalid operation!")
            break;
        } 
        console.log(`Increase: ${money.toFixed(2)}`)
        balance += money;

        command = input[index];
        index++;
        

    } console.log(`Total: ${balance.toFixed(2)}`)

    

}
accountBalance
(["120",
"45.55",
"-150"])

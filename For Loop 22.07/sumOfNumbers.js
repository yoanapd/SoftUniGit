function sumOfNumbers(input) {

    let numString = "" + input[0];
    let sum = 0;

    for (let i = 0; i < numString.length; i++) {

        let num = Number(numString[i]);
        sum += num;

        
        

    }
    console.log(`The sum of the digits is:${sum}`);
   

}
sumOfNumbers(["12345"])
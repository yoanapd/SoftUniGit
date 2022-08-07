function sumNumbers(input) {

    let totalSum = Number(input[0]);
    let index = 1;
    let num = Number(input[index]);
  
    let numbersSum = 0;

    while (totalSum > numbersSum) {

        num = Number(input[index]);
        
        numbersSum += num;
        index++;
        

    }console.log(numbersSum)



}
sumNumbers
(["100",
"10",
"20",
"30",
"40"])


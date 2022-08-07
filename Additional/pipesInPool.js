function pipesInPool (input) {

let volume = Number(input[0]);
let pipeOne = Number(input[1]);
let pipeTwo = Number(input[2]);
let hoursAway = Number(input[3]);

let forTimeAway = hoursAway * pipeOne + hoursAway * pipeTwo;
let percentagePool = (forTimeAway / volume) * 100;
let forPipeOne = ((pipeOne * hoursAway) / forTimeAway) * 100;
let forPipeTwo = ((pipeTwo * hoursAway)/ forTimeAway) * 100;


if (volume >= forTimeAway) {

    console.log(`The pool is ${(percentagePool).toFixed(2)}% full`);
    console.log(`Pipe 1: ${(forPipeOne).toFixed(2)}%. Pipe 2: ${(forPipeTwo).toFixed(2)}%.`);
}
else {

    console.log(`For ${(hoursAway).toFixed(2)} hours the pool overflows with ${(forTimeAway - volume).toFixed(2)} litres.`)
}
}
pipesInPool(["100", "100", "100", "2.5"])

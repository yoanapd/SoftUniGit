function figure(input) {


let figureType = input["0"];
let a = Number(input[1]);
let b = Number(input[2]);
let r = Number(input[1]);
let h = Number(input[2]);

if (figureType === "square") {
    console.log(a * a);
}
else if (figureType === "rectangle") {
    console.log(a * b)
}
else if (figureType === "circle") {
    console.log(Math.PI * r * r);
}
else {
    console.log((a * h)/2);

}
}
figure(["triangle",
"4.5",
"20"])

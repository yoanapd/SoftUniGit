function histogram(input) {

    let count = Number(input[0]);
    let g1 = 0;
    let g2 = 0;
    let g3 = 0;
    let g4 = 0;
    let g5 = 0;

    for (let i = 1; i <= count; i++) {

        let currentNumber = Number(input[i]);
        if (currentNumber < 200) {
            g1 += 1;
        } else if (currentNumber >= 200 && currentNumber <= 399) {
            g2 += 1;
        } else if (currentNumber >= 400 && currentNumber <= 599) {
            g3 += 1;
        } else if (currentNumber >= 600 && currentNumber <= 799) {
            g4 += 1;
        } else {
            g5 += 1;
        }

    }

    let p1 = (g1 / count) * 100;
    let p2 = (g2 / count) * 100;
    let p3 = (g3 / count) * 100;
    let p4 = (g4 / count) * 100;
    let p5 = (g5 / count) * 100;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);

    


}
histogram(["3",
    "1",
    "2",
    "999"])


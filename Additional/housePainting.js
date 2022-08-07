function housePainting(input) {

    let greenPaint = 3.4;
    let redPaint = 4.3;


    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);

    let door = 1.2 * 2;
    let window = 1.5 * 1.5;
    let roof = 2 * (x * y) + 2 * (x * h) / 2
    let house = 2 * (x * x) + 2 * (x * y) - door - 2 * window;

    let totalGreenPaint = (house / greenPaint).toFixed(2);
    let totalRedPaint = (roof / redPaint).toFixed(2);
    console.log(totalGreenPaint);
    console.log(totalRedPaint);

}
housePainting(["6", "10", "5.2"])
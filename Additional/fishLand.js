function fishLand(input) {


    let mackerelPrice = Number(input[0]);
    let spratPrice = Number(input[1]);
    let bonitoKilos = Number(input[2]);
    let scadKilos = Number(input[3]);
    let shellsKilos = Number(input[4]);

    let bonitoPrice = mackerelPrice + mackerelPrice * 0.6;
    let scadPrice = spratPrice + spratPrice * 0.8;
    let shellsPrice = 7.50;
    let totalBonito = bonitoKilos * bonitoPrice;
    let totalScad = scadKilos * scadPrice;
    let totalShells = shellsKilos * shellsPrice;

    console.log((totalBonito + totalScad + totalShells).toFixed(2));

}
fishLand(["6.90", "4.20", "1.5", "2.5", "1"])



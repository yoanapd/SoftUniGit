function harvest(input) {


    let whole = Number(input[0]);
    let grape = Number(input[1]);
    let wineNeeded = Number(input[2]);
    let countWorkers = Number(input[3]);


    let totalgrape = whole * grape;
    let wineProduction = totalgrape * 0.40;
    let litersWine = wineProduction / 2.5;
    let wineLeft = litersWine - wineNeeded;
    let wineMore = wineNeeded - litersWine;


    if (litersWine >= wineNeeded) {
        console.log(`Good harvest this year! Total wine: ${litersWine} liters.`);
        console.log(`${wineLeft} liters left -> ${Math.ceil(wineLeft / countWorkers)} liters per person.`)
    }

    else {

        console.log(`It will be a tough winter! More ${Math.floor(wineMore)} liters wine needed.`)


    }


}
harvest(["1020", "1.5", "425", "4"])
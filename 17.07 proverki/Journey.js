function journey(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let destination = ""
    let type = ""
    let price = 0;

    if (budget <= 100) {

        destination = "Bulgaria"

        if (season === "summer") {

            price = 0.30 * budget;
            type = "Camp"
        } else {
            price = 0.70 * budget;
            type = "Hotel"
        }
    }
    if (budget > 100 && budget  <= 1000 ) {

        destination = "Balkans";
        if (season === "summer") {
            price = budget * 0.40;
            type = "Camp"
        }
        else {
            price = budget * 0.80;
            type = "Hotel"
        }
    }
    if (budget > 1000) {
        destination = "Europe";
        if (season === "summer") {

            type = "Hotel"
            price = budget * 0.90;
            
        }
        else {

            type = "Hotel"
            price = budget * 0.90;
            

        }
    }


console.log(`Somewhere in ${destination}`);
console.log(`${type} - ${price.toFixed(2)}`);


}
journey (["1500", "summer"])
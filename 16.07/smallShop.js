function smallShop(input) {



    let product = input[0];
    let town = input[1];
    let quantity = Number(input[2]);
    let sum = 0;

    switch (town) {

        case "Sofia":
            switch (product) {

                case "coffee": sum = 0.50 * quantity; break;
                case "water": sum = 0.80 * quantity; break;
                case "beer": sum = 1.20 * quantity; break;
                case "sweets": sum = 1.45 * quantity; break;
                case "peanuts": sum = 1.60 * quantity; break;
            }

            break;
        case "Plovdiv":

            switch (product) {

                case "coffee": sum = 0.40 * quantity; break;
                case "water": sum = 0.70 * quantity; break;
                case "beer": sum = 1.15 * quantity; break;
                case "sweets": sum = 1.30 * quantity; break;
                case "peanuts": sum = 1.50 * quantity; break;
            }

            break;



        case "Varna":
            switch (product) {

                case "coffee": sum = 0.45 * quantity; break;
                case "water": sum = 0.70 * quantity; break;
                case "beer": sum = 1.10 * quantity; break;
                case "sweets": sum = 1.35 * quantity; break;
                case "peanuts": sum = 1.55 * quantity; break;


            }
            break;

    } console.log(sum);
}



smallShop(["coffee", "Sofia", "2"])
function suppliesForSchool(input) {


    let pens = 5.80 * Number(input[0]);
    let markers = 7.20 * Number(input[1]);
    let cleaningSupplies = 1.20 * Number(input[2]);
    let discount = Number(input[3]) / 100;



    let totalPrice = pens + markers + cleaningSupplies;
    let priceDiscount = totalPrice - (totalPrice * discount);


    console.log(priceDiscount);



}
suppliesForSchool(["4", "2", "5", "13"]
);
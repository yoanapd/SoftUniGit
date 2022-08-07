function yardGreening(input) {


     let yard = Number(input[0]);
     let price = 7.61 * yard;
     let amountDiscount = price * 0.18;
     let priceDiscount = price - amountDiscount;

     console.log(`The final price is: ${priceDiscount} lv.
     The discount is: ${amountDiscount} lv.`)
     
}
yardGreening([150]);
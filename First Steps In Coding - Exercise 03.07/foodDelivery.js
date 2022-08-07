function foodDelivery(input) {

    let chickenMenu = 10.35 * Number(input[0]);
    let fishMenu = 12.40 * Number(input[1]);
    let veggieMenu = 8.15 * Number(input[2]);

    let price = chickenMenu + fishMenu + veggieMenu;
    let dessert = price * 0.20;

    let totalPrice = price + dessert + 2.50;
    console.log(totalPrice);
}
foodDelivery(["2", "4", "3"]);
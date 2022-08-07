function basketballEquipment(input) {

    let annualTax = Number(input[0]);

    //•	Баскетболни кецове – цената им е 40% по-малка от таксата за една година
    //•	Баскетболен екип – цената му е 20% по-евтина от тази на кецовете
    //•	Баскетболна топка – цената ѝ е 1 / 4 от цената на баскетболния екип
    //•	Баскетболни аксесоари – цената им е 1 / 5 от цената на баскетболната топка

    let basketShoes = annualTax - (0.40 * annualTax);
    let basketClothes = basketShoes - (0.20 * basketShoes);
    let basketBall = 1/4 * basketClothes;
    let basketAccessories = 1/5 * basketBall;

    let totalTax = annualTax + basketShoes + basketClothes + basketBall + basketAccessories;

    console.log(totalTax);






}

basketballEquipment(["365"])
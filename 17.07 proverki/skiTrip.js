function skiTrip(input) {

        let days = Number(input[0]);
        let typeRoom = input[1];
        let grade = input[2];
        let totalNights = days - 1;

        let discount = 0;
        let price = 0;
        let newPrice = 0

        if (typeRoom === "room for one person") {

            discount = 0;
            price = totalNights * 18;

        } else if (typeRoom === "apartment") {
            if(days < 10) {
                discount = 0.70;
                price = totalNights * 25 * discount;
            } else if (days >= 10 && days <=15) {
                discount = 0.65;
                price = totalNights * 25 * discount;

            }else {
                discount = 0.5;
                price = totalNights * 25 * discount;

            }
        } else {
            if (days < 10) {
                discount = 0.90;
                price = totalNights * 35 * discount;
            } else if (days >= 10 && days <=15) {
                discount = 0.85;
                price = totalNights * 35 * discount;
            } else {
                discount = 0.80;
                price = totalNights * 35 * discount;
            }
        }
        
        if (grade === "positive") {

            newPrice = price + (price * 0.25); 

        } else {
            newPrice = price - (price * 0.10);
        }
console.log(newPrice.toFixed(2))



}
skiTrip(["30",
"president apartment",
"negative"])

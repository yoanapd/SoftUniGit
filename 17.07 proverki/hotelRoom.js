function hotelRoom(input) {
    
    let month = input[0];
    let days = Number(input[1]);
    let apartment = 0;
    let studio = 0;

 
    

if (month === "May" || month === "October") {
     if (days <= 7) {
         apartment = days * 65;
         studio = days * 50;
     }
     else if (days > 7 && days <=14) {
        apartment = days * 65;
        studio = days * 50 * 0.95;

     }
     else {
        apartment = days * 65 * 0.90;
        studio = days * 50 * 0.70;
     }

    
} else if (month === "June" || month === "September") {
    if (days > 14) {
        apartment = 68.70 * days *  0.90;
        studio = 75.20 * days * 0.80;
    }
    else {
        apartment = 68.70 * days;
        studio = 75.20 * days
    }
}
else {
    if (days > 14) {
        studio = days * 76;
        apartment = days * 77 * 0.90;
    }
    else {
        studio = days * 76;
        apartment = days * 77;

    }
}
console.log(`Apartment: ${apartment.toFixed(2)} lv.`)
console.log(`Studio: ${studio.toFixed(2)} lv.`)

 

}
hotelRoom(["May",
"15"])

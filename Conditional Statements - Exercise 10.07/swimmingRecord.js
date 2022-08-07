function swimmingRecord(input) {

    let currentRecord = Number(input[0]);
    let distanceMetres = Number(input[1]);
    let timeOneMetre = Number(input[2]);



    let time = distanceMetres * timeOneMetre;
    
    let resistance = (Math.floor(distanceMetres / 15)) * 12.5;
    
    let ivanTime = resistance + time;
    let neededTime = ivanTime - currentRecord;


    if (ivanTime >= currentRecord) {
        console.log(` No, he failed! He was ${neededTime.toFixed(2)} seconds slower.`)

    }
    else {
        console.log(` Yes, he succeeded! The new world record is ${ivanTime.toFixed(2)} seconds.`)

    }







}
swimmingRecord(["55555.67",
"3017", "5.03"])

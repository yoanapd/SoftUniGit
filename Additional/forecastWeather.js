function forecastWeather (input) {

    let degrees = Number(input[0]);


if (degrees >= 5 && degrees <= 11.9) {

    console.log(`Cold`);
}
else if (degrees > 11.9 && degrees <= 14.9) {

    console.log(`Cool`);

}
else if (degrees > 14.9 && degrees <= 20) {

    console.log(`Mild`);
}
else if (degrees > 20 && degrees <= 25.9) {

    console.log(`Warm`);

}
else if (degrees > 25.9 && degrees <= 35) {

    console.log(`Hot`)
}
else {

    console.log(`unknown`)
}


}
forecastWeather(['1'])
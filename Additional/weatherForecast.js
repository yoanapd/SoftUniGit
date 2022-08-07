function weatherForecast (input) {

    let type = input["0"];

    if (type === "sunny") {

        console.log(`It's warm outside!`)
    }
    else {

        console.log(`It's cold outside!`)
    }
}
weatherForecast(['sunny'])
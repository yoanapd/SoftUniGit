function celsiusToFahrenheit(input) {

    let celsius = Number(input[0]);
    let fahrenheit = 1.8 * celsius + 32;
    // multiply by 1.8 (or 9/5) and add 32.

    console.log(fahrenheit.toFixed(2));
}
celsiusToFahrenheit([25])

// 1 degree Celsius =
// 33.8
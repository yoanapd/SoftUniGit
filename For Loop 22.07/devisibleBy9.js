function divisibleBy9(input) {

    let d1 = Number(input[0]);
    let d2 = Number(input[1]);
    let sum = 0;

    for (let i = d1; i <= d2; i++) {

        if (i % 9 === 0) {

            sum += i


        }

    } console.log(`The sum is: ${sum}`);

    for (let i = d1; i <= d2; i++) {

        if (i % 9 === 0) {

 
            console.log(i);


        }

    }





}
divisibleBy9(["455", "966"])
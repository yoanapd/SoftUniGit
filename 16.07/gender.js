function gender(input) {

    let age = Number(input[0]);
    let g = input["1"];


    if (g === "f") {

        if (age < 16) {
            console.log("Miss");
        }
        else {
            console.log("Ms.");
        }
    }
    else {

        if (age < 16) {
            console.log("Master");
        }
        else {
            console.log("Mr.");
        }
    }

}
gender(["12", "f"])
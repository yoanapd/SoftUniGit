function addminutes (input) {

    let minutes = Number(input[0]);
    let seconds = Number (input[1]);

    let totalseconds = minutes * 60 + seconds + 15;
    let totalminutes = Math.floor(totalseconds / 60);
    let timeseconds = totalseconds % 60;

    if (totalminutes === 24)
    { totalminutes = 0 }
    if (timeseconds < 10) {
        console.log(`${totalminutes}:0${timeseconds}`)
    }
    else {
        console.log(`${totalminutes}:${timeseconds}`)

    }





}
addminutes(["12", "49"])




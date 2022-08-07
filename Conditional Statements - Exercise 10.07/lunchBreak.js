function lunchBreak(input) {

    let seriesName = input["0"];
    let episodeTime = Number(input[1]);
    let breakTime = Number(input[2]);


    let lunchTime = (1 / 8) * breakTime;

    let restTime = (1 / 4) * breakTime;


    let timeLeft = breakTime - (lunchTime + restTime + episodeTime);
    let timeNeeded = (episodeTime + lunchTime + restTime) - breakTime;

    if (breakTime - (lunchTime + restTime) >= episodeTime) {

        console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(timeLeft)} minutes free time.`)
    }
    else {
        console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(timeNeeded)} more minutes.`)
    }







}

lunchBreak(["Teen Wolf",
    "48",
    "60"])



function catTom(input) {

    let freeDays = Number(input[0]);
    let workingDays = 365 - freeDays;
    let playMinutes = workingDays * 63 + freeDays * 127;

    let timeLeft = 30000 - playMinutes;
    let moreTime = playMinutes - 30000;

     let hours = Math.floor(playMinutes / 60)
     let minutes = playMinutes % 60

    
    // console.log(timeLeft)
    if (playMinutes <= 30000)
    {
        hours = Math.floor(timeLeft / 60);
      minutes = timeLeft % 60;
        console.log(`Tom sleeps well`)
        console.log(`${hours} hours and ${minutes} minutes less for play`)
    }
    else {
        hours = Math.floor(moreTime / 60);
        minutes = moreTime % 60;

        console.log(`Tom will run away`)
        console.log(`${hours} hours and ${minutes} minutes more for play`)
    }
    




}
catTom([113])
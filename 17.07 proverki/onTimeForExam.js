    function onTimeForExam(input) {

        let hourExam = Number(input[0]);
        let minuteExam = Number(input[1]);
        let hourArrival = Number(input[2]);
        let minuteArrival = Number(input[3]);

        let totalMinutesExam = hourExam * 60 + minuteExam;
        let totalMinutesArrival = hourArrival * 60 + minuteArrival;

        let totalMinsDiff = Math.abs(totalMinutesExam - totalMinutesArrival);
        let hoursDifference = Math.floor(totalMinsDiff / 60);
        let minsDifference = totalMinsDiff % 60;

        let timeDifference = "";


        if (hoursDifference > 0) {
            if (minsDifference >= 10) {
                timeDifference = `${hoursDifference}:${minsDifference}`;
            } else {
                timeDifference = `${hoursDifference}:0${minsDifference}`
            }
        } else {
            if (minsDifference >= 10) {
                timeDifference = minsDifference;
            } else {
                timeDifference = `${minsDifference}`;
            }
        }

        if (totalMinutesArrival < totalMinutesExam) {
            if (totalMinsDiff <= 30) {
                console.log("On time");
                console.log(`${timeDifference} minutes before the start`);
            } else {
                console.log("Early");
                if (totalMinsDiff < 60) {
                    console.log(`${timeDifference} minutes before the start`);
                } else {
                    console.log(`${timeDifference} hours before the start`);
                }
                

            }
        } else if (totalMinutesArrival > totalMinutesExam) {
            console.log("Late");
            
            if (totalMinsDiff < 60)  {
                console.log(`${timeDifference} minutes after the start`);
            } else {
                console.log(`${timeDifference} hours after the start`);
            }

            

        } else 
        {
            console.log("On time");
        }

        







    }
onTimeForExam(["14",
"00",
"13",
"55"])

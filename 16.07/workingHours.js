function workingHours (input) {

    let hours = Number(input[0]);
    let day = input[1];

    switch (day) {

        case "Monday":
            case "Tuesday":
                case "Thursday":
                    case "Wednesday":
                        case "Friday":
                            case "Saturday":
                                if (hours >= 10 && hours <=18) {
                                    console.log("open");break;
                                } 
                                default:
                                    console.log("closed"); break;
                                
                                
          

    }
}

//     if(day === "Monday" || "Tuesday" || "Wednesday" || "Thursday" || "Friday" || "Saturday") 
//     { 
//         if (hours >= 10 && hours <=18) {
            
//         console.log("open")
//         } 
//     }

//     else {
//         console.log("closed")
//     }
// }
workingHours(["9",
"Monday"])

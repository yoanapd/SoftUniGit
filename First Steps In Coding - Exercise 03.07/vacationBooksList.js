function vacationBooksList(input) {

    let countPages = Number(input[0]);
    let pagesFor1Hour = Number(input[1]);
    let daysCount = Number(input[2]);

    let hoursNeeded = countPages / pagesFor1Hour; //общо часове
    let hoursAday = hoursNeeded / daysCount;



    console.log(hoursAday);


}
vacationBooksList(['212', '20', '2']);
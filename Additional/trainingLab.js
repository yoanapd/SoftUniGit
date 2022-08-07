function trainingLab(input) {

    // let h= Number(input[0]);
    // let w = Number(input[1]);

    // let area = w * h;
    // let areaInCm = area * 100;

    // let totalW = (w * 100) - 100


    
    // // let hall = 100; - 1
    // // let door = 160;  - 2

    // //Ограничения: 3 ≤ h ≤ w ≤ 100.

    // //едно function workStations()
{
    let w = Number(input[0]) * 100;
    let h = Number(input[1]) * 100 - 100;
 
    // console.log(w, h);
 
    let deskPerRow = Number(Math.floor(h / 70));
    let rows = Number(Math.floor(w / 120));
 
    // console.log(deskPerRow, rows);
 
    console.log(deskPerRow * rows - 3);
}


}
trainingLab(["15", "8.9"])
function oskars (input) {


let actorName = input[0];
let academyPoints = Number(input[1]);
//let countGraders = Number(input[2]);

let totalPoints = academyPoints;


for (let i = 3; i < input.length; i++) {

   let judgeName = input[i]
   let pointsGiven = Number(input[i + 1]);
   i++;

   let totalPointsByJudge = ((judgeName.length) * pointsGiven) / 2;
   totalPoints += totalPointsByJudge;

   if (totalPoints > 1250.5) {

    console.log(`Congratulations, ${actorName} got a nominee for leading role with ${totalPoints.toFixed(1)}!`)
    return;
   } 
    
}
let pointsNeeded = 1250.5 - totalPoints; 

    console.log(`Sorry, ${actorName} you need ${pointsNeeded.toFixed(1)} more!`)
   
   


}
oskars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])

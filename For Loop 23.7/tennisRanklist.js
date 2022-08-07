function tennisRanklist(input) {

   let tournamentsCount = Number(input[0]);
   let startingPoints = Number(input[1]);
   let totalPoints = 0;


for (let i = 2; i < tournamentsCount + 2; i++) {
    let command = input[i];

    if (command === "F") {
        totalPoints += 1200;
    }else if (command === "W") {
        totalPoints += 2000;
    }else {
        totalPoints += 720;
    }

}
console.log(`Final points: ${totalPoints + startingPoints}`)
console.log(`Average points: ${Math.floor(totalPoints/ tournamentsCount)}`)

let tourmanetsWon = 0;

for(let i = 2; i < tournamentsCount + 2; i++) {
let command = input[i];
if (command === "W") {
    tourmanetsWon++;
}
} 


console.log(`${(tourmanetsWon / tournamentsCount * 100).toFixed(2)}%`)


}
tennisRanklist  
(["4",
"750",
"SF",
"W",
"SF",
"W"])




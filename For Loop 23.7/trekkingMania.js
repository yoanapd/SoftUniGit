function trekkingMania (input) {

    let groupsCount = Number(input[0]);

    let musalaGroup = 0;
    let monblanGroup = 0;
    let kilimanjaroGroup = 0;
    let k2Group = 0;
    let everestGroup = 0;

    for (let i = 1; i < input.length; i++) {

        let people = Number(input[i]);

        if (people <=5) {
            musalaGroup += Number(input[i]);
        }else if (people >= 6 && people <=12){
            monblanGroup += Number(input[i]);
        }else if(people >= 13 && people <=25) {
        kilimanjaroGroup += Number(input[i]);
    }else if (people >=26 && people <= 40){
        k2Group += Number(input[i]);
    }else {
        everestGroup += Number(input[i]);
  
  }
}
let totalPeople = musalaGroup + monblanGroup + k2Group + kilimanjaroGroup + everestGroup;

//console.log(totalPeople)

console.log(`${(musalaGroup/totalPeople*100).toFixed(2)}%`)
console.log(`${(monblanGroup/totalPeople*100).toFixed(2)}%`)
console.log(`${(kilimanjaroGroup/totalPeople*100).toFixed(2)}%`)
console.log(`${(k2Group/totalPeople*100).toFixed(2)}%`)
console.log(`${(everestGroup/totalPeople*100).toFixed(2)}%`)





}
trekkingMania
(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])

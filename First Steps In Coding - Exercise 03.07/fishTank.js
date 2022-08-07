function fishTank(input) {

    let lenth = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percentage = Number(input[3]);

    let volume = lenth * width * height;
    let volumeInLitres = volume * 0.001;

    let totalLitres = volumeInLitres - ((percentage * volumeInLitres)/100);
    console.log(totalLitres);




}
fishTank(["85", "75", "47", "17"])
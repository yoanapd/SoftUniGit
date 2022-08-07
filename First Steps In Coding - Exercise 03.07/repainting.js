function repainting (input) {

   let plastics = Number(input[0]);
   let paint = Number(input[1]);
   let paintWater = Number(input[2]);
   let time = Number(input[3]);

   //•	Предпазен найлон - 1.50 лв. за кв. метър
  //Боя - 14.50 лв. за литър
//•	Разредител за боя - 5.00 лв. за литър

//За всеки случай, към необходимите материали, 
//Румен иска да добави още 10% от количеството боя и 2 кв.м. найлон, 
//разбира се и 0.40 лв. за торбички. Сумата, която се заплаща на майсторите за 1 час работа,
 //е равна на 30% от сбора на всички разходи за материали


 let expenses = ((2 + plastics) * 1.50) + (paint + (paint * 0.10)) * 14.50 + (paintWater * 5) + 0.40;
 let jobmoney = (expenses * 0.30) * time;

 let totalmoney = expenses + jobmoney;

 console.log(totalmoney);



}

repainting(["10 ",
"11 ",
"4 ",
"8 "]
)
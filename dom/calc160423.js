'use strict';


// const calcAvarege = (res1, res2, res3)=> (res1 + res2 + res3)/3;
//  let crazyKats = calcAvarege (41, 23, 71);
//  let funnyDucks = calcAvarege ( 65, 154, 49);



// function bigResult (crazyKats, funnyDucks){
//     if (crazyKats >= funnyDucks*2){
//         console.log(`Congratulation! CrazyKatz won!${crazyKats}`);
//     } else if (funnyDucks >= crazyKats*2){
//         console.log(`Congratulation! FunnyDucks won!${funnyDucks}`);
//     } else {
//         console.log("Congratulation! Zero draw!")
//     }
// }

// bigResult(crazyKats,funnyDucks);

// function calcAge(){
//     return 2023 - this.birthYear
// }

// const userFirst = {
//     birthYear: 1993,
//     calcAge
// }

// const userSecond = {
//     birthYear: 1998,
//     calcAge
// }

// console.log(userFirst.calcAge())
// console.log(userSecond.calcAge())



function bmi (weigth, growth){
    this.bmiRes = this.weigth / this.growth**2
   return this.bmiRes
}

const user1 = {
    name: 'Peter',
    weigth: 72,
    growth: 1.88,
    bmi
}

const user2 = {
    name: 'Denis',
    weigth: 82,
    growth: 1.73,
    bmi
}

user1.bmi();
user2.bmi();

console.log(user1);
console.log(user2);


 if (user1.bmiRes < user2.bmiRes){
    console.log(`BMI of Denis ${user2.bmiRes} more than BMI of Peter ${user1.bmiRes}`);
 } else if (user1.bmiRes > user2.bmiRes){
    console.log(`BMI of Denis ${user2.bmiRes} less than BMI of Peter ${user1.bmiRes}`);
} else {
    console.log("Ups..");
}



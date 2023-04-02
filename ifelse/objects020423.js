'use strict'
const cars = [ 
    {
    car :'Toyota',
    year: 2020,
    model: 'Camry',
    carBody: 'sedan',
    color: 'white',
    saled: true
},
 {
    car :'Mazda',
    year: 2021,
    model: 'CX7',
    carBody: 'crossover',
    color: 'red',
    saled: false
},  
 {
    car:'Opel',
    year: 2022,
    model: 'hatchback',
    carBody: 'crossover',
    color: 'blue',
    saled: false
}  
]
// if (sale === false){
//     console.log(`Still on sale: ${car()}`)
// }
// for (let i=0; i < cars.length; i++)
// {
//     if (cars[i].saled === false){
//         console.log(cars[i]);
//     }
// }
 cars.forEach(function(carr){
    if(carr.saled=== false){
        console.log(carr);
    }
 })



 const carSeller = {
    firstName: 'Jack',
    lastName: 'White',
    regYear: 2017,
    hasDiscount : true,
    discount: 0,
    discountCalculation: function(year){
        let discount;
        let numberOfYears = 2023 - this.regYear;
        if(numberOfYears <= 2) {
            discount = 0;
        }
     else if(numberOfYears > 5) {
        discount = 30;
    }
    this.discount = discount;
 }
}
carSeller.discountCalculation();
console.log(carSeller);



function ret(){
    let num = 500;
    return num;
}
const anotherNum = ret();
console.log(anotherNum);


// const usdCurr = 18;
// const euroCurr = 23;
// function convert (amount, curr){
//     console.log(curr * amount);
// }
// convert(500, usdCurr);
// convert(500, euroCurr);

const usdCurr = 18;
const euroCurr = 23;
const discount = 0.9;

function convert (amount, curr){
  return curr * amount;
}

function promotion(result){
    console.log(result * discount);
}

promotion(convert(200, usdCurr));



function sayHello(userName) {
    return `Hello, ${userName}!`;

}
sayHello ('Anton');

function returnNeighboringNumbers(numm) {
    return [numm - 1, numm, numm +1]; 
}
returnNeighboringNumbers(2);

function getMathResult(num, times) {
    if (typeof(times) !== 'number' || times <= 0) {
        return num;
    }

    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
            // Тут без черточек в конце
        } else {
            str += `${num * i}---`;
            // Это тоже самое, что и
            // str = str + num * i + "---"
        }
    }

    return str;
}

getMathResult(10, 5);

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
    discountCalculation: function(year){
        let discount;
        let numberOfYears = 2023 - year;
        if(numberOfYears <= 2) {
            discount = 0;
        }
     else if(numberOfYears > 5) {
        discount = 30;
    }
    return discount;
 }
}
console.log(carSeller.discountCalculation(2021));
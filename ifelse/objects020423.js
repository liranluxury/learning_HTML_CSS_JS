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
for (let i=0; i < cars.length; i++)
{
    if (cars[i].saled === false){
        console.log(cars[i]);
    }
}

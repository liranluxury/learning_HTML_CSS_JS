'use strict';


const firstName = prompt ("Write your name");
const secondName = prompt ("Write your name");

const compatibility = (
    Math.floor(Math.random()*100)) 
            
alert (`As a result of compatibility ${firstName} and ${secondName} is ${compatibility}`);
console.log(compatibility);
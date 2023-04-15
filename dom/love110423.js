'use strict';


const firstName = prompt ("Write your name");
const secondName = prompt ("Write your name");

const compatibility = (
    Math.floor(Math.random()*100)) 

    if (compatibility < 33 && firstName != null && secondName != null && firstName != "" && secondName != ""){
        alert (`As a result of compatibility ${firstName} and ${secondName} is ${compatibility} Try look for anohter name`);
    } else if (compatibility >= 33 && compatibility < 66 && firstName != null && secondName != null && firstName != "" && secondName != ""){
        alert (`As a result of compatibility ${firstName} and ${secondName} is ${compatibility} Compatibility is good, but will be better`);   
    } else if (compatibility >= 66 && firstName != null && secondName != null && firstName != "" && secondName != ""){
         alert (`As a result of compatibility ${firstName} and ${secondName} is ${compatibility} Compatibility is wonderfull!!`);   
    } else {
         alert (`Ups... Try again!`);   
    }
            
let userName = "Jack";
let userWeight = 92;
const weightDescription = userWeight > 90 ? 'redundant' : 'normal';

console.log(userName + ' has ' + weightDescription + ' weight');

let age = 10;
let groupNumber;
 if (age >= 18 && age <= 25){groupNumber = 1;} 
    else if(age > 25 && age < 46){groupNumber = 2;}
     else {groupNumber = 3}
 console.log(groupNumber);


 switch(true) {
    case age >= 18 && age <= 25 : 
    groupNumber = 1; 
    break;

    case age > 25 && age <= 46 : 
    groupNumber = 2; 
    break;

    default : 
    groupNumber = 3;}
    console.log(groupNumber);   
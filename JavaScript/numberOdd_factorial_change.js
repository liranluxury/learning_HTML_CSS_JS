function isNumberOdd (number) {
   if(number%2 ===0) {
    return false;
   } else {
    return true;
   }
}
console.log(isNumberOdd(9));
'use strict';

function factorial(count){
    let result = 1;
    for(i=1; i <=count; i++){
        result=result*i;
    }return result;
}

console.log(factorial(12));


function changeSpaceToUnderscore(text){
    const resultText = text.replace(/ /g, "_");
    return resultText;
}
console.log(changeSpaceToUnderscore('My name is Liran'));

let num = 50;
while (num < 55){
    console.log(num);
    num++;
}

let num = 50;
do {
    console.log(num);
    num++;
}
while (num < 55);

for (let i=1; i<8; i++){
    console.log(i);
}


let num = 50;
for (let i=1; i<8; i++){
    console.log(num);
    num++;
}


for (let i=1; i<8; i++){
    if (i=== 6){
        break;
    }
    console.log(i);
}

for (let i=1; i<18; i++){
    if (i=== 6 || i=== 12 || i=== 15){
       continue;
    }
    console.log(i);
}







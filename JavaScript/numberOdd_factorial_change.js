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

let numb = 50;
while (numb < 55){
    console.log(numb);
    numb++;
}

let numbr = 50;
do {
    console.log(numbr);
    numbr++;
}
while (numbr < 55);

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


let result = '';
const length = 7;
for (let i = 1; i < length; i++){
    for (let j = 0; j < i; j++){
        result += "*";
    }
    result +='\n';
}


console.log(result);


first: for (let i = 1; i < 3; i++){ 
    console.log(`First level: ${i}`);
    for (let j = 0; j < i; j++){
        console.log(`Second level: ${j}`);
     for (let k = 0; k < i; k++){
        if (k === 2) continue first;
        console.log(`Third level: ${k}`);  
     }   
    }
   
}




console.log(result);


let nb = 5;
while (nb <= 10){
    console.log(nb);
    nb++;
}

for (let i=20; i>1; i--){
    if (i=== 13){
        break;
    }
    console.log(i);
}


for (let i=2; i<=10; i++){
    if (i%2===0){console.log(i);
    }
}

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}
let a = 2
    while (a < 16 && a % 2 === 0 && a++) {
        console.log(a); a++
    }

    const arr = [];
    for (let i = 5; i<= 11; i++){
        arr[i-5]=i;
    }
    console.log(arr);
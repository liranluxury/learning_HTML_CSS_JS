'use strict';
let text = 'Helllllo!';
for(const charrry of text){
    console.log(charrry);
}

// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];
// for(let i=0; i< arr.length; i++){
//     result[i]=arr[i];
// } 
// console.log(result);



// const data = [5, 10, 'Shopping', 20, 'Homework'];
// for(let i=0; i<data.length; i++){
//     if(typeof(data[i])=== 'number'){
//      data[i]=data[i]*2;
//     }
//          else if(typeof(data[i])==='string'){
//             data[i]=`${data[i]}-done`
//         }
//     }console.log(data);




// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];
// for(let i=1; i<=data.length; i++){
//     result[i-1]=data[data.length-i];
// }console.log(result); 


// let result = '';
// const length = 7;
// for (let i = 1; i < length; i++){
//     for (let j = 0; j < i; j++){
//         result += "*";
//     }
//     result +='\n';
// }


// console.log(result);


const lines = 4;
let result = '';
for(let i=0; i<=lines; i++){
    for(let j=0; j<=lines-i-1; j++){
        result+='-';
    }
    for(let j=0; j<1+2*i; j++){
        result+='*';
    }
    result +='\n';
}
console.log(result);


let users = 5;
console.log(users);
users +=3;
console.log(users);
users *=2;
console.log(users);


for (let num = 0; num <=5; num++){
    console.log(num);
}

let num = 0;
do {
    console.log(num);
    num++
}
while (num <= 5)


let numr = 8;
while (numr){
   console.log(numr);
   numr--;
}



for (let numm = 0; numm < 3; numm++){
    console.log (`Number: ${numm}`);
}


let numn = 0;
while (numn < 3){
    console.log(`Number: ${numn}`);
    numn++;
}

for (let num = 0; num < 14; num++){
    // for  (let size = 0; size < 4; size++){
    // console.log(size); 
    // if (size == 2) break;
    console.log(num);
    if (num == 8) break;
} 


const liniyi = 55;
let res = '';
for(let i = 0; i<liniyi; i++ ){
    for(let j = 0; j <= liniyi-1-i; j++){
        res += '-';
    }
    for(let j = 0; j<1+2*i; j++ ){
        res += '*';
    }
    res += '\n';
}
console.log(res);
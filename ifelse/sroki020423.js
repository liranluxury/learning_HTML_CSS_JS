'use strict';

const str = 'test';
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

const fruit = 'some fruit';
console.log(fruit.indexOf("m"));

// const userInfo = {
//     name: 'Vasja',
//     age: 30,
//     '58': 'Property value',
// //    showInfo() {
// //      console.log(`${this.name}`);
// //     }
//    showInfo() {
//      console.log(userInfo.name);
//     }
// }

// let user = userInfo;
// userInfo = null;
// user.showInfo();



// const userInfo = {
//     name: 'Vasja',
//     age: 30,
//       }
// for (const key in userInfo){
//     const value = userInfo[key];
//     console.log(key + ':' + value );
// }






const userInfo = {
    name: 'Vasja',
    age: 30,
    adress: {
        city : "Kazan",
        cantry: "Tatarstan"
    }
      }
for (const key in userInfo.adress){
        console.log(userInfo.adress[key]);
}


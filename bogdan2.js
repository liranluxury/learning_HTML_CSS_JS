"use strist";

const a = 123;

function myFnc() {
  function innerFnc() {
    console.log(a);
  }
  innerFnc;
}
myFnc();
console.log(a);

let l;
let b;

function myFn() {
  let b;
  l = true;
  b = 10;
  console.log(l);
}

myFn();

console.log(l);
console.log(b);

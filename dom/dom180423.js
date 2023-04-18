"use script";

// console.log(document.querySelector("ul"));
// console.log(document.querySelectorAll(".nav_item"));
// let navItems = document.querySelectorAll(".nav_item");
// console.log(navItems.length);

let arr = [1, 2, "dfg", 4, 5];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

let a = 0;

while (a < 3) {
  console.log(a);
  a++;
}

let arg = document.querySelectorAll(".nav_item");
for (let value of arg) {
  console.log(value);
}

let obj = {
  name: "John",
  lastName: "Travolta",
  age: 30,
};

// for (let key in obj) {
//   console.log(obj[key]);
// }
// let elem = document.querySelector("h1");
// console.log(elem.innerHTML);
// elem.innerHTML = " Hello! I am new text!";

// let oldData = elem.innerHTML;
// elem.innerHTML = `<p>${oldData}</p><p>Добавление текста</p>`;
// elem.outerHTML = `<p>Добавление текста</p>`;

let header = document.querySelector("h1");
let secondHeadr = document.createElement("h2");
secondHeadr.innerHTML = "Recusandae facere doloremque placeat";
header.before(secondHeadr);
console.log(secondHeadr);

header.insertAdjacentHTML(
  "afterbegin",
  "<p>Фигурные скобки позволяют добавить текст в элемент:</p>"
);
header.insertAdjacentHTML(
  "beforeend",
  "<p>Неявные имена тегов:</p>"
);

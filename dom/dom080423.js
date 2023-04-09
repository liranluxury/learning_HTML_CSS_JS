// document.getElementById("header").innerHTML = "What is the DOM?";
// let a = document.getElementsByClassName("firstThreeElements");
// console.log(a);
// console.log(a[1].innerHTML);
console.log(document.getElementsByTagName("li")[1].innerHTML);
console.log(document.getElementsByTagName("li")[2].innerHTML);
console.log(document.querySelectorAll(".firstThreeElements")[2]);
// console.log(document.getElementsByTagName("body")[0]);

// console.log(document.querySelector("#header").innerHTML);
// document.querySelector("#header").innerHTML = "AAAAAAAAAAA";
// console.log(document.querySelector("#header").innerHTML);
// console.log(document.querySelectorAll(".firstThreeElements"));

const li3 = document.getElementById("thirdElement");
li3.style.color = "red";
li3.style.fontSize = " 40px";
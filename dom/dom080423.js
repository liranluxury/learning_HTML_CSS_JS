document.getElementById("header").innerHTML = "What is the DOM?";
let a = document.getElementsByClassName("firstThreeElements");
console.log(a[1].innerHTML);
console.log(document.getElementsByName("li")[1].innerHTML);
console.log(document.getElementsByName("body")[0]);

console.log(document.querySelector("#header").innerHTML);

